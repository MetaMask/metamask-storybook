"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[79997],{"./ui/components/app/snaps/snap-delineator/snap-delineator.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/app/snaps/snap-delineator/index.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/SnapDelineator"};var DefaultStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Q,{snapName:"foo"},"Children")};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:'() => <SnapDelineator snapName="foo">Children</SnapDelineator>',...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]},"./ui/components/app/snaps/snap-delineator/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>SnapDelineator});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),snaps=__webpack_require__("./ui/helpers/constants/snaps/index.js"),pulse_loader=__webpack_require__("./ui/components/ui/pulse-loader/pulse-loader.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var SnapDelineator=function(param){var snapName=param.snapName,_param_type=param.type,type=void 0===_param_type?snaps.cJ.default:_param_type,_param_isLoading=param.isLoading,isLoading=void 0!==_param_isLoading&&_param_isLoading,_param_isCollapsable=param.isCollapsable,isCollapsable=void 0!==_param_isCollapsable&&_param_isCollapsable,_param_isCollapsed=param.isCollapsed,isCollapsed=void 0!==_param_isCollapsed&&_param_isCollapsed,children=param.children,onClick=param.onClick,boxProps=param.boxProps,_param_disablePadding=param.disablePadding,t=(0,useI18nContext.P)(),isError=type===snaps.cJ.Error||type===snaps.cJ.Warning;return react.createElement(component_library.az,_object_spread_props(_object_spread({className:"snap-delineator__wrapper",display:design_system.nl.Flex,flexDirection:design_system.bo.Column,borderStyle:design_system.kD.solid,borderColor:design_system.cG.borderDefault,borderRadius:design_system.Z6.LG,backgroundColor:isError?design_system.i0.errorMuted:design_system.i0.backgroundDefault},boxProps),{style:_object_spread({minHeight:isLoading&&"180px"},null==boxProps?void 0:boxProps.style)}),react.createElement(component_library.az,{className:"snap-delineator__header",display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.spaceBetween,padding:1,style:{borderBottomWidth:isCollapsed?0:1}},react.createElement(component_library.az,{display:design_system.nl.Flex,alignItems:design_system.k2.center,className:"snap-delineator__header__container"},react.createElement(component_library.hS,{iconName:component_library.$M.Snaps,className:"snap-delineator__header__icon",size:component_library.OQ.Xs,backgroundColor:isError?design_system.Li.errorDefault:design_system.Li.infoDefault,iconProps:{color:design_system.Li.infoInverse}}),react.createElement(component_library.EY,{variant:design_system.J3.bodySm,color:design_system.r7.textDefault,className:"snap-delineator__header__text",marginLeft:1,marginTop:0,marginBottom:0,marginRight:1,display:"block"},t((0,snaps.OM)(type),[snapName]))),isCollapsable&&react.createElement(component_library.In,{name:isCollapsed?component_library.$M.ArrowDown:component_library.$M.ArrowUp,size:component_library.lK.Sm,color:design_system.Li.iconMuted,className:"snap-delineator__expansion-icon",onClick:onClick})),react.createElement(component_library.az,{className:"snap-delineator__content",padding:!(void 0!==_param_disablePadding&&_param_disablePadding)||isLoading?4:0,display:isCollapsable&&isCollapsed?design_system.nl.None:design_system.nl.Flex,flexDirection:design_system.bo.Column,alignItems:isLoading&&design_system.k2.center,justifyContent:isLoading&&design_system.A9.center,style:{flexGrow:isLoading&&"1"}},isLoading?react.createElement(pulse_loader.A,null):children))};SnapDelineator.propTypes={snapName:prop_types_default().string,type:prop_types_default().string,isCollapsable:prop_types_default().bool,isCollapsed:prop_types_default().bool,isLoading:prop_types_default().bool,onClick:prop_types_default().func,boxProps:prop_types_default().object,children:prop_types_default().node,disablePadding:prop_types_default().bool},SnapDelineator.__docgenInfo={description:"",methods:[],displayName:"SnapDelineator",props:{type:{defaultValue:{value:"DelineatorType.default",computed:!0},description:"",type:{name:"string"},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isCollapsable:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isCollapsed:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},disablePadding:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},snapName:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},boxProps:{description:"",type:{name:"object"},required:!1},children:{description:"",type:{name:"node"},required:!1}}}},"./ui/components/ui/pulse-loader/pulse-loader.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>PulseLoader});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function PulseLoader(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pulse-loader","data-testid":"pulse-loader"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pulse-loader__loading-dot-one"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pulse-loader__loading-dot-two"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pulse-loader__loading-dot-three"}))}PulseLoader.__docgenInfo={description:"",methods:[],displayName:"PulseLoader"}},"./ui/helpers/constants/snaps/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cJ:()=>DelineatorType,dz:()=>InsightWarningLanguage,OM:()=>getDelineatorTitle}),function(DelineatorType){DelineatorType.Content="content",DelineatorType.Error="error",DelineatorType.Insights="insights",DelineatorType.Description="description",DelineatorType.Warning="warning"}(DelineatorType||(DelineatorType={}));var DelineatorType,getDelineatorTitle=function(type){switch(type){case"error":return"errorWithSnap";case"insights":return"insightsFromSnap";case"description":return"descriptionFromSnap";case"warning":return"warningFromSnap";default:return"contentFromSnap"}},InsightWarningLanguage={confirming:{noun:"transaction",imperative:"confirm"},signing:{noun:"signature",imperative:"sign"}}}}]);