"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[61605],{"./ui/pages/confirmations/confirm/stories/transactions/contract-interaction.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,UserOperationStory:()=>UserOperationStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _test_data_confirmations_helper__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./test/data/confirmations/helper.ts"),_confirm__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/pages/confirmations/confirm/confirm.tsx"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/pages/confirmations/confirm/stories/utils.tsx"),_test_data_confirmations_contract_interaction__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./test/data/confirmations/contract-interaction.ts"),_test_data_mock_state_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./test/data/mock-state.json");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var FROM="0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc";let __WEBPACK_DEFAULT_EXPORT__={title:"Pages/Confirmations/Confirm/Transactions/ContractInteraction",component:_confirm__WEBPACK_IMPORTED_MODULE_1__.A,decorators:_utils__WEBPACK_IMPORTED_MODULE_2__.vn};var DefaultStory=function(){var confirmation=(0,_test_data_confirmations_contract_interaction__WEBPACK_IMPORTED_MODULE_3__.mg)({address:FROM,txData:_test_data_confirmations_contract_interaction__WEBPACK_IMPORTED_MODULE_3__.ey,chainId:"0x5"});return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.kS)((0,_test_data_confirmations_helper__WEBPACK_IMPORTED_MODULE_0__.bb)(confirmation))};DefaultStory.storyName="Default";var UserOperationStory=function(){var confirmation=_object_spread_props(_object_spread({},(0,_test_data_confirmations_contract_interaction__WEBPACK_IMPORTED_MODULE_3__.mg)({address:FROM,txData:_test_data_confirmations_contract_interaction__WEBPACK_IMPORTED_MODULE_3__.ey,chainId:"0x5"})),{isUserOperation:!0}),confirmState=(0,_test_data_confirmations_helper__WEBPACK_IMPORTED_MODULE_0__.bb)(confirmation,{metamask:{preferences:_object_spread_props(_object_spread({},_test_data_mock_state_json__WEBPACK_IMPORTED_MODULE_4__.metamask.preferences),{petnamesEnabled:!0}),userOperations:_define_property({},confirmation.id,{userOperation:{paymasterAndData:_test_data_confirmations_contract_interaction__WEBPACK_IMPORTED_MODULE_3__.cU}})}});return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.kS)(confirmState)};UserOperationStory.storyName="User Operation",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`() => {
  const confirmation = genUnapprovedContractInteractionConfirmation({
    address: FROM,
    txData: DEPOSIT_METHOD_DATA,
    chainId: '0x5'
  });
  return ConfirmStoryTemplate(getMockConfirmStateForTransaction(confirmation));
}`,...DefaultStory.parameters?.docs?.source}}},UserOperationStory.parameters={...UserOperationStory.parameters,docs:{...UserOperationStory.parameters?.docs,source:{originalSource:`() => {
  const confirmation = {
    ...genUnapprovedContractInteractionConfirmation({
      address: FROM,
      txData: DEPOSIT_METHOD_DATA,
      chainId: '0x5'
    }),
    isUserOperation: true
  };
  const confirmState = getMockConfirmStateForTransaction(confirmation, {
    metamask: {
      preferences: {
        ...mockState.metamask.preferences,
        petnamesEnabled: true
      },
      userOperations: {
        [confirmation.id]: {
          userOperation: {
            paymasterAndData: PAYMASTER_AND_DATA
          }
        }
      }
    }
  });
  return ConfirmStoryTemplate(confirmState);
}`,...UserOperationStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","UserOperationStory"]}}]);
//# sourceMappingURL=pages-confirmations-confirm-stories-transactions-contract-interaction-stories.cf7facae.iframe.bundle.js.map