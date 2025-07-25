import * as URI from 'uri-js';
import { ApprovalType } from '@metamask/controller-utils';
import { RpcEndpointType } from '@metamask/network-controller';
import { rpcErrors } from '@metamask/rpc-errors';
import { cloneDeep } from 'lodash';
import { MESSAGE_TYPE } from '../../../../../shared/constants/app';
import {
  validateAddEthereumChainParams,
  switchChain,
} from './ethereum-chain-utils';

const addEthereumChain = {
  methodNames: [MESSAGE_TYPE.ADD_ETHEREUM_CHAIN],
  implementation: addEthereumChainHandler,
  hookNames: {
    addNetwork: true,
    updateNetwork: true,
    getNetworkConfigurationByChainId: true,
    setActiveNetwork: true,
    requestUserApproval: true,
    getCurrentChainIdForDomain: true,
    getCaveat: true,
    requestPermittedChainsPermissionIncrementalForOrigin: true,
    rejectApprovalRequestsForOrigin: true,
    setTokenNetworkFilter: true,
    setEnabledNetworks: true,
    getEnabledNetworks: true,
  },
};

export default addEthereumChain;

async function addEthereumChainHandler(
  req,
  res,
  _next,
  end,
  {
    addNetwork,
    updateNetwork,
    getNetworkConfigurationByChainId,
    setActiveNetwork,
    requestUserApproval,
    getCurrentChainIdForDomain,
    getCaveat,
    requestPermittedChainsPermissionIncrementalForOrigin,
    rejectApprovalRequestsForOrigin,
    setTokenNetworkFilter,
    setEnabledNetworks,
    getEnabledNetworks,
  },
) {
  let validParams;
  try {
    validParams = validateAddEthereumChainParams(req.params[0]);
  } catch (error) {
    return end(error);
  }

  const {
    chainId,
    chainName,
    firstValidBlockExplorerUrl,
    firstValidRPCUrl,
    ticker,
  } = validParams;
  const { origin } = req;

  const currentChainIdForDomain = getCurrentChainIdForDomain(origin);
  const existingNetwork = getNetworkConfigurationByChainId(chainId);

  if (
    existingNetwork &&
    existingNetwork.chainId === chainId &&
    existingNetwork.nativeCurrency !== ticker
  ) {
    return end(
      rpcErrors.invalidParams({
        message: `nativeCurrency.symbol does not match currency symbol for a network the user already has added with the same chainId. Received:\n${ticker}`,
      }),
    );
  }

  let updatedNetwork = existingNetwork;

  let rpcIndex = existingNetwork?.rpcEndpoints.findIndex(({ url }) =>
    URI.equal(url, firstValidRPCUrl),
  );

  let blockExplorerIndex = firstValidBlockExplorerUrl
    ? existingNetwork?.blockExplorerUrls.findIndex((url) =>
        URI.equal(url, firstValidBlockExplorerUrl),
      )
    : undefined;

  // If there's something to add or update

  const shouldAddOrUpdateNetwork =
    !existingNetwork ||
    rpcIndex !== existingNetwork.defaultRpcEndpointIndex ||
    (firstValidBlockExplorerUrl &&
      blockExplorerIndex !== existingNetwork.defaultBlockExplorerUrlIndex);

  if (shouldAddOrUpdateNetwork) {
    try {
      await requestUserApproval({
        origin,
        type: ApprovalType.AddEthereumChain,
        requestData: {
          chainId,
          rpcPrefs: { blockExplorerUrl: firstValidBlockExplorerUrl },
          chainName,
          rpcUrl: firstValidRPCUrl,
          ticker,
        },
      });

      if (existingNetwork) {
        // A network for this chain id already exists.
        // Update it with any new information.

        const clonedNetwork = cloneDeep(existingNetwork);

        // If the RPC endpoint doesn't exist, add a new one
        if (rpcIndex === -1) {
          clonedNetwork.rpcEndpoints = [
            ...clonedNetwork.rpcEndpoints,
            {
              url: firstValidRPCUrl,
              type: RpcEndpointType.Custom,
              name: chainName,
            },
          ];
          rpcIndex = clonedNetwork.rpcEndpoints.length - 1;
        }

        // The provided rpc endpoint becomes the default
        clonedNetwork.defaultRpcEndpointIndex = rpcIndex;

        if (firstValidBlockExplorerUrl) {
          // If a block explorer was provided and it doesn't exist, add a new one
          if (blockExplorerIndex === -1) {
            clonedNetwork.blockExplorerUrls = [
              ...clonedNetwork.blockExplorerUrls,
              firstValidBlockExplorerUrl,
            ];
            blockExplorerIndex = clonedNetwork.blockExplorerUrls.length - 1;
          }

          // The provided block explorer becomes the default
          clonedNetwork.defaultBlockExplorerUrlIndex = blockExplorerIndex;
        }

        updatedNetwork = await updateNetwork(
          clonedNetwork.chainId,
          clonedNetwork,
          currentChainIdForDomain === chainId
            ? {
                replacementSelectedRpcEndpointIndex:
                  clonedNetwork.defaultRpcEndpointIndex,
              }
            : undefined,
        );
      } else {
        // A network for this chain id does not exist, so add a new network
        updatedNetwork = await addNetwork({
          blockExplorerUrls: firstValidBlockExplorerUrl
            ? [firstValidBlockExplorerUrl]
            : [],
          defaultBlockExplorerUrlIndex: firstValidBlockExplorerUrl
            ? 0
            : undefined,
          chainId,
          defaultRpcEndpointIndex: 0,
          name: chainName,
          nativeCurrency: ticker,
          rpcEndpoints: [
            {
              url: firstValidRPCUrl,
              name: chainName,
              type: RpcEndpointType.Custom,
            },
          ],
        });
      }
    } catch (error) {
      return end(error);
    }
  }

  const { networkClientId } =
    updatedNetwork.rpcEndpoints[updatedNetwork.defaultRpcEndpointIndex];

  return switchChain(res, end, chainId, networkClientId, {
    isAddFlow: true,
    autoApprove: shouldAddOrUpdateNetwork,
    setActiveNetwork,
    getCaveat,
    requestPermittedChainsPermissionIncrementalForOrigin,
    rejectApprovalRequestsForOrigin,
    setTokenNetworkFilter,
    setEnabledNetworks,
    getEnabledNetworks,
  });
}
