"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[15173],{"./ui/components/app/assets/nfts/nfts-detection-notice-nfts-tab/nfts-detection-notice.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>nfts_detection_notice_stories});var react=__webpack_require__("./node_modules/react/index.js"),nfts_detection_notice_nfts_tab=__webpack_require__("./ui/components/app/assets/nfts/nfts-detection-notice-nfts-tab/nfts-detection-notice-nfts-tab.tsx");let nfts_detection_notice_stories={title:"Components/App/NftsDetectionNoticeNFTsTab"};var DefaultStory=function(){return react.createElement(nfts_detection_notice_nfts_tab.A,null)};DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"() => <NftsDetectionNotice />",...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]},"./ui/components/app/assets/nfts/nfts-detection-notice-nfts-tab/nfts-detection-notice-nfts-tab.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>NFTsDetectionNoticeNFTsTab});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),selectors=__webpack_require__("./ui/selectors/index.js"),actions=__webpack_require__("./ui/store/actions.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),actionConstants=__webpack_require__("./ui/store/actionConstants.ts");function setShowNftDetectionEnablementToast(value){return{type:actionConstants.vq,payload:value}}function NFTsDetectionNoticeNFTsTab(){var t=(0,useI18nContext.P)(),dispatch=(0,es.wA)(),isDisplayNFTMediaToggleEnabled=(0,es.d4)(selectors.zMR);return react.createElement(component_library.b8,{className:"nfts-detection-notice",title:t("newNFTsAutodetected"),actionButtonLabel:t("selectNFTPrivacyPreference"),actionButtonOnClick:function(){isDisplayNFTMediaToggleEnabled||dispatch((0,actions.setOpenSeaEnabled)(!0)),dispatch((0,actions.setUseNftDetection)(!0)),dispatch(setShowNftDetectionEnablementToast(!0)),dispatch((0,actions.detectNfts)())}},t("newNFTDetectedInNFTsTabMessage"),t("mmiNewNFTDetectedInNFTsTabMessage"))}__webpack_require__("./ui/store/background-connection.ts")}}]);