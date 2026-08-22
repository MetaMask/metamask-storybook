"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[1571],{"./node_modules/@metamask/design-system-react/dist/components/AvatarToken/AvatarToken.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h:()=>AvatarToken});var module,_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarToken/AvatarToken.types.mjs"),_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarBase/AvatarBase.types.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_AvatarBase_index_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/AvatarBase/AvatarBase.mjs");let React=(module=react__WEBPACK_IMPORTED_MODULE_2__,module?.__esModule?module.default:module),AvatarToken=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({src,name="",fallbackText,fallbackTextProps,className,size=_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_0__.g.Md,imageProps,...props},ref)=>{let[finalFallbackText,setFinalFallbackText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),backupFallbackText=fallbackText||name?.[0]||"?",altText=name||"Token logo";return React.createElement(_AvatarBase_index_mjs__WEBPACK_IMPORTED_MODULE_3__.d,{ref:ref,shape:_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_1__.G.Circle,size:size,className:className,fallbackText:src?finalFallbackText:backupFallbackText,fallbackTextProps:fallbackTextProps,...props},src&&React.createElement("img",{src:src,alt:altText,className:"size-full object-contain",...imageProps,onError:e=>{setFinalFallbackText(backupFallbackText),imageProps?.onError?.(e)}}))});AvatarToken.displayName="AvatarToken"},"./node_modules/@metamask/design-system-shared/dist/types/AvatarToken/AvatarToken.types.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:()=>AvatarTokenSize});let AvatarTokenSize=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarBase/AvatarBase.types.mjs").S},"./ui/components/app/flask/experimental-area/experimental-area.stories.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>experimental_area_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),i18n=__webpack_require__("./ui/contexts/i18n.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts");function lineBreaksToBr(source){return source.split(`
`).map(function(value,index){return react.createElement(react.Fragment,{key:index},value,react.createElement("br",null))})}var METAMASK_LOGO=lineBreaksToBr(`MMm*mmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmm*mMM
MM*./***mMMMMMMMMMMMMMMMMMMMMMMMMMMm***/.*MM
MM/...///*mMMMMMMMMMMMMMMMMMMMMMMm*///.../MM
Mm.....//../*mMMMMMMMMMMMMMMMMm*/..//.....mM
M*....../*....*mMMMMMMMMMMMMm*....*/......*M
M/........*.....*//////////*...../......../M
m..........*/...//........//.../*..........m
M/..........//.../......../...//........../M
M/.........../*/./.......//./*/.........../M
M*.............////......////.............*M
Mm...............**......**...............mM
Mm/...............*/..../*.............../mM
MM/............../*/..../*/............../MM
Mm..............//./...././/..............mM
MM*............*/../..../../*............*MM
MM/........../*..../..../....*/........../MM
MMm.........//...../..../.....//.........mMM
MMm......//**....../..../......**//......mMM
MMM/..////.*......./..../......././///../MMM
MMMm*//..../......./..../......./....//*mMMM
MMMm......*////////*....*////////*......mMMM
MMM*......*////////*....*////////*......*MMM
MMM/....../*......./..../.......*/....../MMM
MMm........**/./m*./..../.**/..**........mMM
MM*........//*mMMM///..///mMMm*//........*MM
MM/........././*mM*//..//*Mm*/./........./MM
Mm..........//.../**/../**/...//..........mM
M*...........*..../*/../*/..../...........*M
M*///////////*/.../m/../m/.../*///////////*M
M*.........../*/...m/../m.../*/...........*M
Mm.........../..//.*....*./*../...........mM
MM/........../...//******//.../........../MM
MM*........../....*MMMMMM*..../..........*MM
MMm........../....*MMMMMM*..../..........mMM
MMm/........//....*MMMMMM*....//......../mMM
MMM/....../*mm*...*mmmmmm*...*mm*/....../MMM
MMM*../*mmMMMMMm///......//*mMMMMMmm*/..*MMM
MMMm*mMMMMMMMMMMm**......**mMMMMMMMMMMm*mMMM
MMMMMMMMMMMMMMMMMm/....../mMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMmmmmmmmmMMMMMMMMMMMMMMMMMM`),EXPERIMENTAL_AREA=lineBreaksToBr(`█▀▀ ▄▀█ █░█ ▀█▀ █ █▀█ █▄░█ ▀
  █▄▄ █▀█ █▄█ ░█░ █ █▄█ █░▀█ ▄

  █▀▀ ▀▄▀ █▀█ █▀▀ █▀█ █ █▀▄▀█ █▀▀ █▄░█ ▀█▀ ▄▀█ █░░
  ██▄ █░█ █▀▀ ██▄ █▀▄ █ █░▀░█ ██▄ █░▀█ ░█░ █▀█ █▄▄

  █▀ █▀█ █▀▀ ▀█▀ █░█░█ ▄▀█ █▀█ █▀▀
  ▄█ █▄█ █▀░ ░█░ ▀▄▀▄▀ █▀█ █▀▄ ██▄`);function ExperimentalArea(param){var redirectTo=param.redirectTo,t=(0,react.useContext)(i18n.g),navigate=(0,dist.Zp)();return react.createElement("div",{className:"experimental-area","data-testid":"experimental-area"},react.createElement("div",{className:"logo"},METAMASK_LOGO),react.createElement("div",{className:"experimental-text"},EXPERIMENTAL_AREA),react.createElement("div",{className:"text"},react.createElement("p",null,t("flaskWelcomeWarning1",[react.createElement("b",{key:"doNotUse"},t("flaskWelcomeUninstall"))])),react.createElement("br",null),react.createElement("p",null,t("flaskWelcomeWarning2")),react.createElement("br",null),react.createElement("p",null,t("flaskWelcomeWarning3")),react.createElement("br",null),react.createElement("p",null,t("flaskWelcomeWarning4"))),react.createElement(component_library.$n,{variant:component_library.Ak.Primary,onClick:function(){navigate(redirectTo)}},t("flaskWelcomeWarningAcceptButton")))}ExperimentalArea.propTypes={redirectTo:prop_types_default().string},ExperimentalArea.__docgenInfo={description:"",methods:[],displayName:"ExperimentalArea",props:{redirectTo:{description:"",type:{name:"string"},required:!1}}};let experimental_area_stories={title:"Components/App/Flask/ExperimentalArea",component:ExperimentalArea};var DefaultStory=function(){return react.createElement(ExperimentalArea,null)};DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"() => <ExperimentalArea />",...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]}}]);
//# sourceMappingURL=components-app-flask-experimental-area-experimental-area-stories.85229f9b.iframe.bundle.js.map