"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[4580],{"./ui/components/app/snaps/snap-delineator/snap-delineator.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/app/snaps/snap-delineator/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/SnapDelineator"};var DefaultStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Z,{snapName:"foo"},"Children")};DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:'() => <SnapDelineator snapName="foo">Children</SnapDelineator>'},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})})},"./ui/components/app/snaps/snap-delineator/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SnapDelineator});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),snaps=__webpack_require__("./ui/helpers/constants/snaps/index.js"),pulse_loader=__webpack_require__("./ui/components/ui/pulse-loader/pulse-loader.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var SnapDelineator=function(param){var snapName=param.snapName,_param_type=param.type,type=void 0===_param_type?snaps.P2.default:_param_type,_param_isLoading=param.isLoading,isLoading=void 0!==_param_isLoading&&_param_isLoading,_param_isCollapsable=param.isCollapsable,isCollapsable=void 0!==_param_isCollapsable&&_param_isCollapsable,_param_isCollapsed=param.isCollapsed,isCollapsed=void 0!==_param_isCollapsed&&_param_isCollapsed,children=param.children,onClick=param.onClick,boxProps=param.boxProps,t=(0,useI18nContext.C)(),isError=type===snaps.P2.Error||type===snaps.P2.Warning;return react.createElement(component_library.xu,_object_spread_props(_object_spread({className:"snap-delineator__wrapper",display:design_system.sS.Flex,flexDirection:design_system.Qb.Column,borderStyle:design_system.N4.solid,borderColor:design_system.kf.borderDefault,borderRadius:design_system.cM.LG,backgroundColor:isError?design_system.lP.errorMuted:design_system.lP.backgroundDefault},boxProps),{style:_object_spread({minHeight:isLoading&&"180px"},null==boxProps?void 0:boxProps.style)}),react.createElement(component_library.xu,{className:"snap-delineator__header",display:design_system.sS.Flex,alignItems:design_system.g1.center,justifyContent:design_system.E0.spaceBetween,padding:1,style:{borderBottomWidth:isCollapsed?0:1}},react.createElement(component_library.xu,{display:design_system.sS.Flex,alignItems:design_system.g1.center,className:"snap-delineator__header__container"},react.createElement(component_library.fM,{iconName:component_library.uH.Snaps,className:"snap-delineator__header__icon",size:component_library.dt.Xs,backgroundColor:isError?design_system.EY.errorDefault:design_system.EY.infoDefault,iconProps:{color:design_system.EY.infoInverse}}),react.createElement(component_library.xv,{variant:design_system.rK.bodySm,color:isError?design_system.d9.textDefault:design_system.d9.textAlternative,className:"snap-delineator__header__text",marginLeft:1,marginTop:0,marginBottom:0,marginRight:1,display:"block"},t((0,snaps.Kb)(type),[snapName]))),isCollapsable&&react.createElement(component_library.JO,{name:isCollapsed?component_library.uH.ArrowDown:component_library.uH.ArrowUp,size:component_library.Jh.Sm,color:design_system.EY.iconMuted,className:"snap-delineator__expansion-icon",onClick:onClick})),react.createElement(component_library.xu,{className:"snap-delineator__content",padding:4,display:isCollapsable&&isCollapsed?design_system.sS.None:design_system.sS.Flex,flexDirection:design_system.Qb.Column,alignItems:isLoading&&design_system.g1.center,justifyContent:isLoading&&design_system.E0.center,style:{flexGrow:isLoading&&"1"}},isLoading?react.createElement(pulse_loader.Z,null):children))};SnapDelineator.propTypes={snapName:prop_types_default().string,type:prop_types_default().string,isCollapsable:prop_types_default().bool,isCollapsed:prop_types_default().bool,isLoading:prop_types_default().bool,onClick:prop_types_default().func,boxProps:prop_types_default().object,children:prop_types_default().node}},"./ui/components/ui/pulse-loader/pulse-loader.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PulseLoader});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function PulseLoader(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pulse-loader","data-testid":"pulse-loader"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pulse-loader__loading-dot-one"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pulse-loader__loading-dot-two"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pulse-loader__loading-dot-three"}))}},"./ui/helpers/constants/snaps/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P2:()=>DelineatorType,hh:()=>InsightWarningLanguage,Kb:()=>getDelineatorTitle}),function(DelineatorType){DelineatorType.Content="content",DelineatorType.Error="error",DelineatorType.Insights="insights",DelineatorType.Description="description",DelineatorType.Warning="warning"}(DelineatorType||(DelineatorType={}));var DelineatorType,getDelineatorTitle=function(type){switch(type){case"error":return"errorWithSnap";case"insights":return"insightsFromSnap";case"description":return"descriptionFromSnap";case"warning":return"warningFromSnap";default:return"contentFromSnap"}},InsightWarningLanguage={confirming:{noun:"confirmation",imperative:"confirm"},signing:{noun:"signature",imperative:"sign"}}}}]);