"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[172],{"./ui/components/multichain/detected-token-banner/detected-token-banner.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/multichain/detected-token-banner/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let __WEBPACK_DEFAULT_EXPORT__={title:"Components/Multichain/DetectedTokensBanner",component:___WEBPACK_IMPORTED_MODULE_1__.g,argTypes:{actionButtonOnClick:{action:"setShowDetectedTokens"}}};var DefaultStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.g,args)};DefaultStory.storyName="Default",DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"args => <DetectedTokensBanner {...args} />"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})})},"./ui/components/multichain/detected-token-banner/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>DetectedTokensBanner});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),selectors=__webpack_require__("./ui/selectors/index.js"),metametrics=__webpack_require__("./ui/contexts/metametrics.js"),constants_metametrics=__webpack_require__("./shared/constants/metametrics.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var DetectedTokensBanner=function(_param){var className=_param.className,actionButtonOnClick=_param.actionButtonOnClick,props=_object_without_properties(_param,["className","actionButtonOnClick"]),t=(0,useI18nContext.C)(),trackEvent=(0,react.useContext)(metametrics.Wd),detectedTokens=(0,es.v9)(selectors.Tl8),detectedTokensDetails=detectedTokens.map(function(param){var address=param.address,symbol=param.symbol;return"".concat(symbol," - ").concat(address)}),chainId=(0,es.v9)(selectors.BVZ);return react.createElement(component_library.wB,_object_spread({className:classnames_default()("multichain-detected-token-banner",className),actionButtonLabel:t("importTokensCamelCase"),actionButtonOnClick:function(){actionButtonOnClick(),trackEvent({event:constants_metametrics.AW.TokenImportClicked,category:constants_metametrics.ci.Wallet,properties:{source_connection_method:constants_metametrics.iL.Detected,tokens:detectedTokensDetails,chain_id:chainId}})},"data-testid":"detected-token-banner"},props),1===detectedTokens.length?t("numberOfNewTokensDetectedSingular"):t("numberOfNewTokensDetectedPlural",[detectedTokens.length]))};DetectedTokensBanner.propTypes={actionButtonOnClick:prop_types_default().func.isRequired,className:prop_types_default().string}}}]);