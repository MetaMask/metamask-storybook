"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[9025],{"./ui/components/app/nfts-detection-notice-nfts-tab/nfts-detection-notice.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,default:()=>nfts_detection_notice_stories});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,react=__webpack_require__("./node_modules/react/index.js"),react_router=__webpack_require__("./node_modules/react-router/esm/react-router.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),routes=__webpack_require__("./ui/helpers/constants/routes.ts");function NFTsDetectionNoticeNFTsTab(){var t=(0,useI18nContext.C)(),history=(0,react_router.k6)();return react.createElement(component_library.wB,{className:"nfts-detection-notice",title:t("newNFTsAutodetected"),actionButtonLabel:t("selectNFTPrivacyPreference"),actionButtonOnClick:function(e){e.preventDefault(),history.push("".concat(routes.AX,"#autodetect-nfts"))}},t("newNFTDetectedInNFTsTabMessage"),t("mmiNewNFTDetectedInNFTsTabMessage"))}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let nfts_detection_notice_stories={title:"Components/App/NftsDetectionNoticeNFTsTab"};var DefaultStory=function(){return react.createElement(NFTsDetectionNoticeNFTsTab,null)};DefaultStory.storyName="Default",DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"() => <NftsDetectionNotice />"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})})}}]);