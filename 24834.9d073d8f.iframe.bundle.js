"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[9515,17706,19991,24834,31896,42372,75229,95325,97610],{"./node_modules/@metamask/design-system-react/dist/components/AvatarNetwork/AvatarNetwork.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{G:()=>AvatarNetwork});var _metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarNetwork/AvatarNetwork.types.mjs"),_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarBase/AvatarBase.types.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_AvatarBase_index_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/AvatarBase/AvatarBase.mjs");const React=function $importDefault(module){return module?.__esModule?module.default:module}(react__WEBPACK_IMPORTED_MODULE_2__),AvatarNetwork=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({src,name="",fallbackText,fallbackTextProps,className,size=_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_0__.L.Md,imageProps,...props},ref)=>{const[finalFallbackText,setFinalFallbackText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),backupFallbackText=fallbackText||name?.[0]||"?",altText=name||"Network logo";return React.createElement(_AvatarBase_index_mjs__WEBPACK_IMPORTED_MODULE_3__.d,{ref,shape:_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_1__.G.Square,size,className,fallbackText:src?finalFallbackText:backupFallbackText,fallbackTextProps,...props},src&&React.createElement("img",{src,alt:altText,className:"size-full object-contain",...imageProps,onError:e=>{setFinalFallbackText(backupFallbackText),imageProps?.onError?.(e)}}))});AvatarNetwork.displayName="AvatarNetwork"},"./node_modules/@metamask/design-system-react/dist/components/AvatarToken/AvatarToken.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:()=>AvatarToken});var _metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarToken/AvatarToken.types.mjs"),_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarBase/AvatarBase.types.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_AvatarBase_index_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/AvatarBase/AvatarBase.mjs");const React=function $importDefault(module){return module?.__esModule?module.default:module}(react__WEBPACK_IMPORTED_MODULE_2__),AvatarToken=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({src,name="",fallbackText,fallbackTextProps,className,size=_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_0__.g.Md,imageProps,...props},ref)=>{const[finalFallbackText,setFinalFallbackText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),backupFallbackText=fallbackText||name?.[0]||"?",altText=name||"Token logo";return React.createElement(_AvatarBase_index_mjs__WEBPACK_IMPORTED_MODULE_3__.d,{ref,shape:_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_1__.G.Circle,size,className,fallbackText:src?finalFallbackText:backupFallbackText,fallbackTextProps,...props},src&&React.createElement("img",{src,alt:altText,className:"size-full object-contain",...imageProps,onError:e=>{setFinalFallbackText(backupFallbackText),imageProps?.onError?.(e)}}))});AvatarToken.displayName="AvatarToken"},"./node_modules/@metamask/design-system-react/dist/components/Button/Button.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:()=>Button});var Button_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Button/Button.types.mjs"),react=__webpack_require__("./node_modules/react/index.js"),tw_merge=__webpack_require__("./node_modules/@metamask/design-system-react/dist/utils/tw-merge.mjs"),ButtonBase=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/ButtonBase/ButtonBase.mjs");const React=function $importDefault(module){return module?.__esModule?module.default:module}(react),ButtonPrimary=(0,react.forwardRef)(({className,isDanger,isInverse,isDisabled,isLoading,...props},ref)=>{const isInteractive=!(isDisabled??isLoading),mergedClassName=(0,tw_merge.Q)(!isDanger&&!isInverse&&["bg-icon-default text-primary-inverse",isLoading&&"bg-icon-default-pressed"],isDanger&&!isInverse&&["bg-error-default text-error-inverse",isLoading&&"bg-error-default-pressed"],isInverse&&!isDanger&&["bg-default text-default",isLoading&&"bg-default-pressed"],isInverse&&isDanger&&["bg-default text-error-default",isLoading&&"bg-default-pressed"],isInteractive&&[!isDanger&&!isInverse&&["hover:bg-icon-default-hover","active:bg-icon-default-pressed"],isDanger&&!isInverse&&["hover:bg-error-default-hover","active:bg-error-default-pressed"],isInverse&&!isDanger&&["hover:bg-default-hover","active:bg-default-pressed"],isInverse&&isDanger&&["hover:bg-default-hover","active:bg-default-pressed"]],"focus-visible:outline-none focus-visible:ring-0",isInverse?"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background-default":"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-default",isLoading&&"cursor-not-allowed",isDisabled&&!isLoading&&["opacity-50","cursor-not-allowed"],className);return React.createElement(ButtonBase.u,{ref,className:mergedClassName,isDisabled,isLoading,...props})});ButtonPrimary.displayName="ButtonPrimary";const ButtonSecondary_React=function ButtonSecondary_$importDefault(module){return module?.__esModule?module.default:module}(react),ButtonSecondary=(0,react.forwardRef)(({className,isDanger,isInverse,isDisabled,isLoading,...props},ref)=>{const isInteractive=!(isDisabled??isLoading),mergedClassName=(0,tw_merge.Q)(!isDanger&&!isInverse&&["bg-muted text-default",isLoading&&"bg-muted-pressed"],isDanger&&!isInverse&&["bg-muted text-error-default",isLoading&&"bg-muted-pressed"],isInverse&&!isDanger&&["border-2 border-primary-inverse bg-transparent text-primary-inverse",isLoading&&"bg-pressed"],isInverse&&isDanger&&["border-0 bg-default text-error-default",isLoading&&"bg-default-pressed"],isInteractive&&[!isDanger&&!isInverse&&["hover:bg-muted-hover","active:bg-muted-pressed"],isDanger&&!isInverse&&["hover:bg-muted-hover","active:bg-muted-pressed"],isInverse&&!isDanger&&["hover:bg-hover","active:bg-pressed"],isInverse&&isDanger&&["hover:bg-default-hover","active:bg-default-pressed"]],"focus-visible:outline-none focus-visible:ring-0",isInverse?"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background-default":"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-default",isLoading&&"cursor-not-allowed",isDisabled&&!isLoading&&["opacity-50","cursor-not-allowed"],className);return ButtonSecondary_React.createElement(ButtonBase.u,{ref,className:mergedClassName,isDisabled,isLoading,...props})});ButtonSecondary.displayName="ButtonSecondary";const ButtonTertiary_React=function ButtonTertiary_$importDefault(module){return module?.__esModule?module.default:module}(react),ButtonTertiary=(0,react.forwardRef)(({className,isDanger,isInverse,isDisabled,isLoading,...props},ref)=>{const isInteractive=!(isDisabled??isLoading),mergedClassName=(0,tw_merge.Q)(!isDanger&&!isInverse&&["bg-transparent text-default",isLoading&&"bg-pressed"],isDanger&&!isInverse&&["bg-transparent text-error-default",isLoading&&"bg-error-muted-pressed text-error-default-pressed"],isInverse&&!isDanger&&["bg-transparent text-primary-inverse",isLoading&&"bg-pressed"],isInverse&&isDanger&&["bg-default text-error-default",isLoading&&"bg-default-pressed"],isInteractive&&["hover:bg-hover","active:bg-pressed",isInverse&&isDanger&&["hover:bg-default-hover","active:bg-default-pressed"],isDanger&&!isInverse&&["hover:bg-error-muted-hover","active:bg-error-muted-pressed"]],"focus-visible:outline-none focus-visible:ring-0",isInverse?"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background-default":"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-default",isLoading&&"cursor-not-allowed",isDisabled&&!isLoading&&["opacity-50","cursor-not-allowed"],className);return ButtonTertiary_React.createElement(ButtonBase.u,{ref,className:mergedClassName,isDisabled,isLoading,...props})});ButtonTertiary.displayName="ButtonTertiary";const Button_React=function Button_$importDefault(module){return module?.__esModule?module.default:module}(react),Button=(0,react.forwardRef)(({variant=Button_types.A.Primary,...props},ref)=>{switch(variant){case Button_types.A.Primary:return Button_React.createElement(ButtonPrimary,{ref,...props});case Button_types.A.Secondary:return Button_React.createElement(ButtonSecondary,{ref,...props});case Button_types.A.Tertiary:return Button_React.createElement(ButtonTertiary,{ref,...props});default:return Button_React.createElement(ButtonPrimary,{ref,...props})}});Button.displayName="Button"},"./node_modules/@metamask/design-system-react/dist/components/ButtonBase/ButtonBase.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{u:()=>ButtonBase});var ButtonBase_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/ButtonBase/ButtonBase.types.mjs"),Icon_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Icon/Icon.types.mjs"),dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),tw_merge=__webpack_require__("./node_modules/@metamask/design-system-react/dist/utils/tw-merge.mjs"),Icon=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Icon/Icon.mjs"),Text=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Text/Text.mjs"),Text_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Text/Text.types.mjs");const TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION={[ButtonBase_types.PH.Sm]:"h-8",[ButtonBase_types.PH.Md]:"h-10",[ButtonBase_types.PH.Lg]:"h-12"},TWCLASSMAP_BUTTONBASE_BORDER_RADIUS={[ButtonBase_types.PH.Sm]:"rounded-lg",[ButtonBase_types.PH.Md]:"rounded-xl",[ButtonBase_types.PH.Lg]:"rounded-xl"},MAP_BUTTONBASE_SIZE_ICONSIZE={[ButtonBase_types.PH.Sm]:Icon_types.lK.Sm,[ButtonBase_types.PH.Md]:Icon_types.lK.Sm,[ButtonBase_types.PH.Lg]:Icon_types.lK.Md},MAP_BUTTONBASE_SIZE_TEXT_VARIANT={[ButtonBase_types.PH.Sm]:Text_types.J3.BodySm,[ButtonBase_types.PH.Md]:Text_types.J3.BodyMd,[ButtonBase_types.PH.Lg]:Text_types.J3.BodyMd};const React=function $importDefault(module){return module?.__esModule?module.default:module}(react),ButtonBase=(0,react.forwardRef)(({children,className,size=ButtonBase_types.PH.Lg,isFullWidth,asChild,isDisabled,isLoading,loadingText,loadingIconProps,loadingTextProps,startIconName,startIconProps,startAccessory,endIconName,endIconProps,endAccessory,textProps,style,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby,"aria-describedby":ariaDescribedby,"aria-pressed":ariaPressed,"aria-expanded":ariaExpanded,"aria-controls":ariaControls,"aria-haspopup":ariaHaspopup,...props},ref)=>{const Component=asChild?dist.DX:"button",isInteractive=!(isDisabled??isLoading),finalStartIconName=startIconName??startIconProps?.name,finalEndIconName=endIconName??endIconProps?.name,hasStart=Boolean(finalStartIconName||startAccessory),hasEnd=Boolean(finalEndIconName||endAccessory),hasAccessories=hasStart||hasEnd,iconSize=MAP_BUTTONBASE_SIZE_ICONSIZE[size],labelTextVariant=MAP_BUTTONBASE_SIZE_TEXT_VARIANT[size],renderLabel=()=>children&&"string"==typeof children?React.createElement(Text.E,{variant:labelTextVariant,fontWeight:Text_types.IT.Medium,color:Text_types.r7.Inherit,asChild:!0,...textProps},React.createElement("span",null,children)):children,mergedClassName=(0,tw_merge.Q)("inline-flex items-center justify-center",(size=>TWCLASSMAP_BUTTONBASE_BORDER_RADIUS[size])(size),((buttonSize,hasStart,hasEnd)=>buttonSize!==ButtonBase_types.PH.Lg||hasStart&&hasEnd?"px-3":hasStart||hasEnd?hasStart?"pl-3 pr-4":"pl-4 pr-3":"px-4")(size,hasStart,hasEnd),hasAccessories&&"gap-x-1","font-medium text-default","bg-muted","overflow-hidden","relative",TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION[size],isFullWidth&&"w-full",isInteractive&&["transition-all","duration-100","ease-linear","active:scale-[0.97]","active:ease-[cubic-bezier(0.3,0.8,0.3,1)]"],(isDisabled||isLoading)&&"cursor-not-allowed",isDisabled&&"opacity-50",className);return React.createElement(Component,{ref,className:mergedClassName,disabled:asChild?void 0:isDisabled??isLoading,"aria-disabled":isDisabled?"true":void 0,"aria-busy":isLoading?"true":void 0,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby,"aria-describedby":ariaDescribedby,"aria-pressed":ariaPressed,"aria-expanded":ariaExpanded,"aria-controls":ariaControls,"aria-haspopup":ariaHaspopup,role:asChild?void 0:"button",tabIndex:(()=>{if(!asChild)return isDisabled?-1:void 0})(),style,...props},finalStartIconName?React.createElement(Icon.I,{name:finalStartIconName,size:iconSize,className:(0,tw_merge.Q)("shrink-0 text-inherit",startIconProps?.className),"aria-hidden":"true",...startIconProps}):startAccessory?React.createElement("span",{"aria-hidden":"true"},startAccessory):null,React.createElement(dist.xV,null,isLoading?React.createElement(React.Fragment,null,React.createElement("span",{className:"absolute inline-flex items-center gap-x-1","aria-hidden":"true"},React.createElement(Icon.I,{name:Icon_types.$M.Loading,size:iconSize,className:(0,tw_merge.Q)("animate-spin text-inherit",loadingIconProps?.className),...loadingIconProps}),React.createElement(Text.E,{variant:labelTextVariant,fontWeight:Text_types.IT.Medium,color:Text_types.r7.Inherit,asChild:!0,...loadingTextProps},React.createElement("span",null,loadingText))),React.createElement("span",{className:"invisible inline-flex items-center","aria-hidden":"true"},renderLabel()),React.createElement("span",{className:"sr-only","aria-live":"polite","aria-atomic":"true"},loadingText||"Loading")):renderLabel()),finalEndIconName?React.createElement(Icon.I,{name:finalEndIconName,size:iconSize,className:(0,tw_merge.Q)("shrink-0 text-inherit",endIconProps?.className),"aria-hidden":"true",...endIconProps}):endAccessory?React.createElement("span",{"aria-hidden":"true"},endAccessory):null)});ButtonBase.displayName="ButtonBase"},"./node_modules/@metamask/design-system-shared/dist/types/AvatarNetwork/AvatarNetwork.types.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:()=>AvatarNetworkSize});const AvatarNetworkSize=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarBase/AvatarBase.types.mjs").S},"./node_modules/@metamask/design-system-shared/dist/types/AvatarToken/AvatarToken.types.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:()=>AvatarTokenSize});const AvatarTokenSize=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarBase/AvatarBase.types.mjs").S},"./node_modules/@metamask/design-system-shared/dist/types/Button/Button.types.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:()=>ButtonVariant});const ButtonVariant={Primary:"primary",Secondary:"secondary",Tertiary:"tertiary"}},"./node_modules/@metamask/design-system-shared/dist/types/ButtonBase/ButtonBase.types.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Go:()=>ButtonHeroSize,Mp:()=>ButtonSize,PH:()=>ButtonBaseSize});const ButtonBaseSize={Sm:"sm",Md:"md",Lg:"lg"},ButtonSize=ButtonBaseSize,ButtonHeroSize=ButtonBaseSize},"./node_modules/@metamask/etherscan-link/dist/account-link.js"(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAccountLink=exports.createCustomAccountLink=exports.createAccountLinkForChain=exports.createAccountLink=void 0;const helpers_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/helpers.js"),prefix_for_chain_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-chain.js")),prefix_for_network_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-network.js"));function createAccountLink(address,networkId){const prefix=prefix_for_network_1.default(networkId);return null===prefix?"":`https://${prefix}etherscan.io/address/${address}`}function createAccountLinkForChain(address,chainId){const prefix=prefix_for_chain_1.default(chainId);return null===prefix?"":`https://${prefix}etherscan.io/address/${address}`}function createCustomAccountLink(address,customNetworkUrl){return helpers_1.addPathToUrl(customNetworkUrl,"address",address)}exports.createAccountLink=createAccountLink,exports.createAccountLinkForChain=createAccountLinkForChain,exports.createCustomAccountLink=createCustomAccountLink,exports.getAccountLink=function getAccountLink(address,chainId,rpcPrefs={},networkId=""){return rpcPrefs.blockExplorerUrl?createCustomAccountLink(address,rpcPrefs.blockExplorerUrl):networkId?createAccountLink(address,networkId):createAccountLinkForChain(address,chainId)}},"./node_modules/@metamask/etherscan-link/dist/explorer-link.js"(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getBlockExplorerLink=exports.createExplorerLinkForChain=exports.createExplorerLink=exports.createCustomExplorerLink=void 0;const helpers_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/helpers.js"),prefix_for_chain_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-chain.js")),prefix_for_network_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-network.js"));function createCustomExplorerLink(hash,customNetworkUrl){return helpers_1.addPathToUrl(customNetworkUrl,"tx",hash)}function createExplorerLink(hash,network){const prefix=prefix_for_network_1.default(network);return null===prefix?"":`https://${prefix}etherscan.io/tx/${hash}`}function createExplorerLinkForChain(hash,chainId){const prefix=prefix_for_chain_1.default(chainId);return null===prefix?"":`https://${prefix}etherscan.io/tx/${hash}`}exports.createCustomExplorerLink=createCustomExplorerLink,exports.createExplorerLink=createExplorerLink,exports.createExplorerLinkForChain=createExplorerLinkForChain,exports.getBlockExplorerLink=function getBlockExplorerLink(transaction,rpcPrefs={}){return rpcPrefs.blockExplorerUrl?createCustomExplorerLink(transaction.hash,rpcPrefs.blockExplorerUrl):transaction.chainId?createExplorerLinkForChain(transaction.hash,transaction.chainId):createExplorerLink(transaction.hash,transaction.metamaskNetworkId)}},"./node_modules/@metamask/etherscan-link/dist/helpers.js"(__unused_webpack_module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.addPathToUrl=void 0,exports.addPathToUrl=(customNetworkUrl,linkType,suffixType)=>{const{username,password,protocol,host,pathname,search,hash}=new URL(customNetworkUrl),newPath=pathname.endsWith("/")?`${pathname}${linkType}/${suffixType}`:`${pathname}/${linkType}/${suffixType}`;return new URL(`${protocol}//${username?`${username}:${password}`:""}${host}${newPath}${search}${hash}`).toString()}},"./node_modules/@metamask/etherscan-link/dist/index.js"(module,__unused_webpack_exports,__webpack_require__){const account_link_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/account-link.js"),explorer_link_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/explorer-link.js"),token_tracker_link_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/token-tracker-link.js");module.exports={createExplorerLink:explorer_link_1.createExplorerLink,createCustomExplorerLink:explorer_link_1.createCustomExplorerLink,createExplorerLinkForChain:explorer_link_1.createExplorerLinkForChain,createAccountLink:account_link_1.createAccountLink,createCustomAccountLink:account_link_1.createCustomAccountLink,createAccountLinkForChain:account_link_1.createAccountLinkForChain,createTokenTrackerLink:token_tracker_link_1.createTokenTrackerLink,createCustomTokenTrackerLink:token_tracker_link_1.createCustomTokenTrackerLink,createTokenTrackerLinkForChain:token_tracker_link_1.createTokenTrackerLinkForChain,getBlockExplorerLink:explorer_link_1.getBlockExplorerLink,getAccountLink:account_link_1.getAccountLink,getTokenTrackerLink:token_tracker_link_1.getTokenTrackerLink}},"./node_modules/@metamask/etherscan-link/dist/prefix-for-chain.js"(module){module.exports=function getPrefixForChain(chainId){let prefix;switch(chainId){case"0x1":prefix="";break;case"0x5":prefix="goerli.";break;case"0xaa36a7":prefix="sepolia.";break;default:prefix=null}return prefix}},"./node_modules/@metamask/etherscan-link/dist/prefix-for-network.js"(module){module.exports=function getPrefixForNetwork(networkId){let prefix;switch(parseInt(networkId)){case 1:prefix="";break;case 5:prefix="goerli.";break;case 11155111:prefix="sepolia.";break;default:prefix=null}return prefix}},"./node_modules/@metamask/etherscan-link/dist/token-tracker-link.js"(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTokenTrackerLink=exports.createTokenTrackerLinkForChain=exports.createCustomTokenTrackerLink=exports.createTokenTrackerLink=void 0;const helpers_1=__webpack_require__("./node_modules/@metamask/etherscan-link/dist/helpers.js"),prefix_for_chain_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-chain.js")),prefix_for_network_1=__importDefault(__webpack_require__("./node_modules/@metamask/etherscan-link/dist/prefix-for-network.js"));function createTokenTrackerLink(tokenAddress,networkId,holderAddress){const prefix=prefix_for_network_1.default(networkId);return null===prefix?"":`https://${prefix}etherscan.io/token/${tokenAddress}${holderAddress?`?a=${holderAddress}`:""}`}function createCustomTokenTrackerLink(tokenAddress,customNetworkUrl){return helpers_1.addPathToUrl(customNetworkUrl,"token",tokenAddress)}function createTokenTrackerLinkForChain(tokenAddress,chainId,holderAddress){const prefix=prefix_for_chain_1.default(chainId);return null===prefix?"":`https://${prefix}etherscan.io/token/${tokenAddress}${holderAddress?`?a=${holderAddress}`:""}`}exports.createTokenTrackerLink=createTokenTrackerLink,exports.createCustomTokenTrackerLink=createCustomTokenTrackerLink,exports.createTokenTrackerLinkForChain=createTokenTrackerLinkForChain,exports.getTokenTrackerLink=function getTokenTrackerLink(tokenAddress,chainId,networkId,holderAddress,rpcPrefs={}){return rpcPrefs.blockExplorerUrl?createCustomTokenTrackerLink(tokenAddress,rpcPrefs.blockExplorerUrl):networkId?createTokenTrackerLink(tokenAddress,networkId,holderAddress):createTokenTrackerLinkForChain(tokenAddress,chainId,holderAddress)}},"./node_modules/@metamask/keyring-utils/dist/btc/address.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{F:()=>isBtcTestnetAddress});var bitcoin_address_validation__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/bitcoin-address-validation/lib/index.esm.js");function isBtcTestnetAddress(address){return(0,bitcoin_address_validation__WEBPACK_IMPORTED_MODULE_0__.tf)(address,bitcoin_address_validation__WEBPACK_IMPORTED_MODULE_0__.lg.testnet)}},"./node_modules/react-hot-toast/dist/index.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{oR:()=>dist_n});var react=__webpack_require__("./node_modules/react/index.js");let e={data:""},t=t=>{if("object"==typeof window){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||e},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e},i=(e,t,r,i,p)=>{let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[d],t,i,f),d};function u(e){let r=this||{},l=e.call?e(r.p):e;return i(l.unshift?l.raw?((e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==n?"":n)},""))(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):l,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let d,f,g,h=u.bind({k:1});function w(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g&&i[0]&&g(c),d(i,c)}return t?t(a):a}}var dist_h=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,W=(()=>{let e=0;return()=>(++e).toString()})(),E=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),k="default",H=(e,t)=>{let{toastLimit:o}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,o)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:s}=t;return H(e,{type:e.toasts.find(r=>r.id===s.id)?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(r=>r.id===a||void 0===a?{...r,dismissed:!0,visible:!1}:r)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},v=[],j={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},dist_f={},Y=(e,t=k)=>{dist_f[t]=H(dist_f[t]||j,e),v.forEach(([o,s])=>{o===t&&s(dist_f[t])})},_=e=>Object.keys(dist_f).forEach(t=>Y(e,t)),S=(e=k)=>t=>{Y(t,e)},P=e=>(t,o)=>{let s=((e,t="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(null==o?void 0:o.id)||W()}))(t,e,o);return S(s.toasterId||(e=>Object.keys(dist_f).find(t=>dist_f[t].toasts.some(o=>o.id===e)))(s.id))({type:2,toast:s}),s.id},dist_n=(e,t)=>P("blank")(e,t);dist_n.error=P("error"),dist_n.success=P("success"),dist_n.loading=P("loading"),dist_n.custom=P("custom"),dist_n.dismiss=(e,t)=>{let o={type:3,toastId:e};t?S(t)(o):_(o)},dist_n.dismissAll=e=>dist_n.dismiss(void 0,e),dist_n.remove=(e,t)=>{let o={type:4,toastId:e};t?S(t)(o):_(o)},dist_n.removeAll=e=>dist_n.remove(void 0,e),dist_n.promise=(e,t,o)=>{let s=dist_n.loading(t.loading,{...o,...null==o?void 0:o.loading});return"function"==typeof e&&(e=e()),e.then(a=>{let i=t.success?dist_h(t.success,a):void 0;return i?dist_n.success(i,{id:s,...o,...null==o?void 0:o.success}):dist_n.dismiss(s),a}).catch(a=>{let i=t.error?dist_h(t.error,a):void 0;i?dist_n.error(i,{id:s,...o,...null==o?void 0:o.error}):dist_n.dismiss(s)}),e};var de=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,me=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,le=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,C=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${de} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${me} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Te=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Te} 1s linear infinite;
`,ge=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,he=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,L=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ge} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${he} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,be=w("div")`
  position: absolute;
`,Se=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ae=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Pe=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ae} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$=({toast:e})=>{let{icon:t,type:o,iconTheme:s}=e;return void 0!==t?"string"==typeof t?react.createElement(Pe,null,t):t:"blank"===o?null:react.createElement(Se,null,react.createElement(F,{...s}),"loading"!==o&&react.createElement(be,null,"error"===o?react.createElement(C,{...s}):react.createElement(L,{...s})))},Re=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Ee=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Oe=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ie=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;react.memo(({toast:e,position:t,style:o,children:s})=>{let a=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,i]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Re(s),Ee(s)];return{animation:t?`${h(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=react.createElement($,{toast:e}),r=react.createElement(Ie,{...e.ariaProps},dist_h(e.message,e));return react.createElement(Oe,{className:e.className,style:{...a,...o,...e.style}},"function"==typeof s?s({icon:i,message:r}):react.createElement(react.Fragment,null,i,r))});!function m(e,t,r,l){o.p=t,d=e,f=r,g=l}(react.createElement);u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}}]);
//# sourceMappingURL=24834.9d073d8f.iframe.bundle.js.map