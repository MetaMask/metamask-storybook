"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[10103],{"./ui/components/institutional/wrong-network-notification/wrong-network-notification.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>wrong_network_notification_stories});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),util=__webpack_require__("./node_modules/@metamask/controller-utils/dist/util.mjs"),store=__webpack_require__("./ui/store/store.ts"),test_data=__webpack_require__("./.storybook/test-data.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),selectors=__webpack_require__("./ui/selectors/index.js"),institutional_selectors=__webpack_require__("./ui/selectors/institutional/selectors.ts"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),networks=__webpack_require__("./shared/modules/selectors/networks.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts");let wrong_network_notification=function(){var t=(0,useI18nContext.P)(),providerConfig=(0,es.d4)(networks.Iv),balance=(0,es.d4)(selectors.pWD),isCustodianSupportedChain=(0,es.d4)(institutional_selectors.KP),network=(null==providerConfig?void 0:providerConfig.nickname)||(null==providerConfig?void 0:providerConfig.type);return!isCustodianSupportedChain&&balance?react.createElement(component_library.az,{className:"wrong-network-notification","data-testid":"wrong-network-notification",display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,padding:[1,6],backgroundColor:design_system.i0.errorMuted,width:design_system.Zf.Full},react.createElement(component_library.In,{name:component_library.$M.Danger,size:component_library.lK.Sm,color:design_system.Li.errorDefault}),react.createElement(component_library.EY,{marginLeft:2},t("custodyWrongChain",[network?network.charAt(0).toUpperCase()+network.slice(1):""]))):null};try{wrongnetworknotification.displayName="wrongnetworknotification",wrongnetworknotification.__docgenInfo={description:"",displayName:"wrongnetworknotification",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/institutional/wrong-network-notification/wrong-network-notification.tsx#wrongnetworknotification"]={docgenInfo:wrongnetworknotification.__docgenInfo,name:"wrongnetworknotification",path:"ui/components/institutional/wrong-network-notification/wrong-network-notification.tsx#wrongnetworknotification"})}catch(__react_docgen_typescript_loader_error){}var stub_networks=__webpack_require__("./test/stub/networks.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var customData=_object_spread_props(_object_spread({},test_data.A),{metamask:_object_spread_props(_object_spread({},test_data.A.metamask,(0,stub_networks.g)({chainId:(0,util.nj)(3)})),{accountsByChainId:_define_property({},(0,util.nj)(3),{"0x5Ab19e7091dD208F352F8E727B6DCC6F8aBB6275":{balance:"0x0"}}),custodianSupportedChains:{"0x5Ab19e7091dD208F352F8E727B6DCC6F8aBB6275":{supportedChains:["1","2"],custodianName:"saturn"}},keyrings:[{type:"Custody",accounts:["0x5Ab19e7091dD208F352F8E727B6DCC6F8aBB6275"]}]})}),wrong_network_notification_stories_store=(0,store.A)(customData);let wrong_network_notification_stories={title:"Components/Institutional/WrongNetworkNotification",decorators:[function(story){return react.createElement(es.Kq,{store:wrong_network_notification_stories_store},story())}],component:wrong_network_notification};var DefaultStory=function(){return react.createElement(wrong_network_notification,null)};DefaultStory.storyName="WrongNetworkNotification",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"() => {\n  return <WrongNetworkNotification />;\n}",...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]},"./ui/selectors/institutional/selectors.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EA:()=>getIsCustodianPublishesTransactionSupported,HP:()=>getCustodyAccountDetails,Jq:()=>getMmiPortfolioUrl,KP:()=>getIsCustodianSupportedChain,Rw:()=>getNoteToTraderMessage,aX:()=>getMMIConfiguration,cv:()=>getMMIAddressFromModalOrAddress,f1:()=>getMmiPortfolioEnabled,gN:()=>getInteractiveReplacementToken,hq:()=>getCustodianIconForAddress,ii:()=>getIsNoteToTraderSupported});var ethereumjs_util__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/ethereumjs-util/dist.browser/index.js"),_selectors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/selectors/selectors.js"),_accounts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/selectors/accounts.ts"),_shared_modules_selectors_networks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./shared/modules/selectors/networks.ts"),_shared_modules_conversion_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./shared/modules/conversion.utils.ts"),_app_scripts_lib_multichain_address__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./app/scripts/lib/multichain/address.ts"),_shared_constants_custody__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./shared/constants/custody.ts"),process=__webpack_require__("./node_modules/process/browser.js");function getCustodyAccountDetails(state){return state.metamask.custodyAccountDetails}function getCustodyAccountSupportedChains(state,address){var chains=state.metamask.custodianSupportedChains?state.metamask.custodianSupportedChains[(0,ethereumjs_util__WEBPACK_IMPORTED_MODULE_0__.toChecksumAddress)(address)]:void 0;if(chains&&"supportedChains"in chains)return chains}function getMmiPortfolioEnabled(state){var _state_metamask_mmiConfiguration_portfolio,_state_metamask_mmiConfiguration;return!!process.env.IN_TEST||(null===(_state_metamask_mmiConfiguration=state.metamask.mmiConfiguration)||void 0===_state_metamask_mmiConfiguration?void 0:null===(_state_metamask_mmiConfiguration_portfolio=_state_metamask_mmiConfiguration.portfolio)||void 0===_state_metamask_mmiConfiguration_portfolio?void 0:_state_metamask_mmiConfiguration_portfolio.enabled)}function getMmiPortfolioUrl(state){var _state_metamask_mmiConfiguration_portfolio,_state_metamask_mmiConfiguration;return(null===(_state_metamask_mmiConfiguration=state.metamask.mmiConfiguration)||void 0===_state_metamask_mmiConfiguration?void 0:null===(_state_metamask_mmiConfiguration_portfolio=_state_metamask_mmiConfiguration.portfolio)||void 0===_state_metamask_mmiConfiguration_portfolio?void 0:_state_metamask_mmiConfiguration_portfolio.url)||""}function getCustodianIconForAddress(state,address){var checksummedAddress=address&&(0,_app_scripts_lib_multichain_address__WEBPACK_IMPORTED_MODULE_5__.Nf)(address);if(checksummedAddress&&(null===(_state_metamask_custodyAccountDetails=state.metamask.custodyAccountDetails)||void 0===_state_metamask_custodyAccountDetails?void 0:_state_metamask_custodyAccountDetails[checksummedAddress])){var _state_metamask_custodyAccountDetails,custodianIcon,_state_metamask_mmiConfiguration_custodians_find,_state_metamask_mmiConfiguration_custodians,_state_metamask_mmiConfiguration,custodianName=state.metamask.custodyAccountDetails[checksummedAddress].custodianName;custodianIcon=null===(_state_metamask_mmiConfiguration=state.metamask.mmiConfiguration)||void 0===_state_metamask_mmiConfiguration?void 0:null===(_state_metamask_mmiConfiguration_custodians=_state_metamask_mmiConfiguration.custodians)||void 0===_state_metamask_mmiConfiguration_custodians?void 0:null===(_state_metamask_mmiConfiguration_custodians_find=_state_metamask_mmiConfiguration_custodians.find(function(custodian){return custodian.envName===custodianName}))||void 0===_state_metamask_mmiConfiguration_custodians_find?void 0:_state_metamask_mmiConfiguration_custodians_find.iconUrl}return custodianIcon}function getIsCustodianSupportedChain(state){try{var selectedAccount=(0,_accounts__WEBPACK_IMPORTED_MODULE_2__._r)(state),accountType=(0,_selectors__WEBPACK_IMPORTED_MODULE_1__.U8f)(state);if(!selectedAccount||!accountType)throw Error("Invalid state");var providerConfig=(0,_shared_modules_selectors_networks__WEBPACK_IMPORTED_MODULE_3__.Iv)(state);if("string"!=typeof providerConfig.chainId)throw Error("Chain ID must be a string");if(!/^0x[0-9a-f]+$/i.test(providerConfig.chainId))throw Error("Chain ID must be a hexadecimal number");if(accountType!==_shared_constants_custody__WEBPACK_IMPORTED_MODULE_6__.C.CUSTODY)return!0;var supportedChains=getCustodyAccountSupportedChains(state,selectedAccount.address);if(!(null==supportedChains?void 0:supportedChains.supportedChains))return!0;return supportedChains.supportedChains.includes((0,_shared_modules_conversion_utils__WEBPACK_IMPORTED_MODULE_4__.I0)(providerConfig.chainId))}catch(error){throw console.error(error),error}}function getMMIAddressFromModalOrAddress(state){var _state_appState_modal_modalState_props,_state_appState_modal_modalState,_state_appState_modal,_state_appState,_getSelectedInternalAccount,modalAddress=null==state?void 0:null===(_state_appState=state.appState)||void 0===_state_appState?void 0:null===(_state_appState_modal=_state_appState.modal)||void 0===_state_appState_modal?void 0:null===(_state_appState_modal_modalState=_state_appState_modal.modalState)||void 0===_state_appState_modal_modalState?void 0:null===(_state_appState_modal_modalState_props=_state_appState_modal_modalState.props)||void 0===_state_appState_modal_modalState_props?void 0:_state_appState_modal_modalState_props.address,selectedAddress=null===(_getSelectedInternalAccount=(0,_accounts__WEBPACK_IMPORTED_MODULE_2__._r)(state))||void 0===_getSelectedInternalAccount?void 0:_getSelectedInternalAccount.address;return modalAddress||selectedAddress}function getMMIConfiguration(state){return state.metamask.mmiConfiguration||{}}function getInteractiveReplacementToken(state){return state.metamask.interactiveReplacementToken||{}}function getIsNoteToTraderSupported(state,fromChecksumHexAddress){var _mmiConfiguration_custodians,_state_metamask=state.metamask,custodyAccountDetails=_state_metamask.custodyAccountDetails,mmiConfiguration=_state_metamask.mmiConfiguration,accountDetails=null==custodyAccountDetails?void 0:custodyAccountDetails[fromChecksumHexAddress];if(!accountDetails)return!1;var foundCustodian=null==mmiConfiguration?void 0:null===(_mmiConfiguration_custodians=mmiConfiguration.custodians)||void 0===_mmiConfiguration_custodians?void 0:_mmiConfiguration_custodians.find(function(custodian){return custodian.envName===accountDetails.custodianName});return!!foundCustodian&&foundCustodian.isNoteToTraderSupported}function getIsCustodianPublishesTransactionSupported(state,fromChecksumHexAddress){var _mmiConfiguration_custodians,_state_metamask=state.metamask,custodyAccountDetails=_state_metamask.custodyAccountDetails,mmiConfiguration=_state_metamask.mmiConfiguration,accountDetails=null==custodyAccountDetails?void 0:custodyAccountDetails[fromChecksumHexAddress];if(!accountDetails)return!1;var foundCustodian=null==mmiConfiguration?void 0:null===(_mmiConfiguration_custodians=mmiConfiguration.custodians)||void 0===_mmiConfiguration_custodians?void 0:_mmiConfiguration_custodians.find(function(custodian){return custodian.envName===accountDetails.custodianName});return!!foundCustodian&&foundCustodian.custodianPublishesTransaction}function getNoteToTraderMessage(state){return state.metamask.noteToTraderMessage||""}}}]);