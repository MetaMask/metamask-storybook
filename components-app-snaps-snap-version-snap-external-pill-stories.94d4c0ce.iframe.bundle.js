"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[89026],{"./ui/components/app/snaps/snap-version/snap-external-pill.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,LoadingStory:()=>LoadingStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>snap_external_pill_stories});var react=__webpack_require__("./node_modules/react/index.js"),snap_external_pill=__webpack_require__("./ui/components/app/snaps/snap-version/snap-external-pill.js");let snap_external_pill_stories={title:"Components/App/Snaps/SnapExternalPill",component:snap_external_pill.A};var DefaultStory=function(args){return react.createElement(snap_external_pill.A,args)};DefaultStory.args={value:"1.4.2",url:"https://www.npmjs.com/package/@metamask/test-snap-error"};var LoadingStory=function(args){return react.createElement(snap_external_pill.A,args)};LoadingStory.args={value:void 0,url:"https://www.npmjs.com/package/@metamask/test-snap-error"},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <SnapExternalPill {...args} />",...DefaultStory.parameters?.docs?.source}}},LoadingStory.parameters={...LoadingStory.parameters,docs:{...LoadingStory.parameters?.docs,source:{originalSource:"args => <SnapExternalPill {...args} />",...LoadingStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","LoadingStory"]},"./ui/components/app/snaps/snap-version/snap-external-pill.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_component_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/index.ts"),_ui_icon_preloader_preloader_icon_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/ui/icon/preloader/preloader-icon.component.js"),SnapExternalPill=function(param){var value=param.value,url=param.url;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.vx,{href:url,target:"_blank",className:"snap-external-pill",ellipsis:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.az,{className:"snap-external-pill__wrapper",display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_1__.nl.Flex,flexDirection:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_1__.bo.Row,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_1__.k2.center,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_1__.i0.backgroundAlternative,borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_1__.Z6.pill,paddingTop:1,paddingBottom:1,paddingLeft:2,paddingRight:2},value?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.EY,{color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_1__.Q1.textAlternative,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_1__.J3.bodyMd,ellipsis:!0},value):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_icon_preloader_preloader_icon_component__WEBPACK_IMPORTED_MODULE_3__.A,{size:18}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.In,{name:_component_library__WEBPACK_IMPORTED_MODULE_2__.$M.Export,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_1__.Q1.textAlternative,size:_component_library__WEBPACK_IMPORTED_MODULE_2__.lK.Sm,marginLeft:1})))};SnapExternalPill.propTypes={value:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,url:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string};let __WEBPACK_DEFAULT_EXPORT__=SnapExternalPill;SnapExternalPill.__docgenInfo={description:"",methods:[],displayName:"SnapExternalPill",props:{value:{description:"The value to display",type:{name:"string"},required:!1},url:{description:"The url to the snap package",type:{name:"string"},required:!1}}}},"./ui/components/ui/icon/preloader/preloader-icon.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),Preloader=function(param){var className=param.className,size=param.size;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("preloader__icon",className),width:size,height:size,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 13.7143C4.84409 13.7143 2.28571 11.1559 2.28571 8C2.28571 4.84409 4.84409 2.28571 8 2.28571C11.1559 2.28571 13.7143 4.84409 13.7143 8C13.7143 11.1559 11.1559 13.7143 8 13.7143ZM8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z",fill:"var(--color-primary-muted)"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask",{id:"mask0","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"16",height:"16"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 13.7143C4.84409 13.7143 2.28571 11.1559 2.28571 8C2.28571 4.84409 4.84409 2.28571 8 2.28571C11.1559 2.28571 13.7143 4.84409 13.7143 8C13.7143 11.1559 11.1559 13.7143 8 13.7143ZM8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z",fill:"var(--color-primary-default)"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{mask:"url(#mask0)"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M6.85718 17.9999V11.4285V8.28564H-4.85711V17.9999H6.85718Z",fill:"var(--color-primary-default)"})))};Preloader.defaultProps={className:void 0},Preloader.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired};let __WEBPACK_DEFAULT_EXPORT__=Preloader;Preloader.__docgenInfo={description:"",methods:[],displayName:"Preloader",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},size:{description:"",type:{name:"number"},required:!0}}}}}]);