"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[2670],{"./ui/pages/onboarding-flow/creation-successful/creation-successful.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,default:()=>creation_successful_stories});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,react=__webpack_require__("./node_modules/react/index.js"),react_router=__webpack_require__("./node_modules/react-router/esm/react-router.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),box=__webpack_require__("./ui/components/ui/box/index.js"),typography=__webpack_require__("./ui/components/ui/typography/index.js"),ui_button=__webpack_require__("./ui/components/ui/button/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),routes=__webpack_require__("./ui/helpers/constants/routes.ts"),build_types=__webpack_require__("./ui/helpers/utils/build-types.js"),selectors=__webpack_require__("./ui/selectors/index.js"),metametrics=__webpack_require__("./shared/constants/metametrics.ts"),contexts_metametrics=__webpack_require__("./ui/contexts/metametrics.js");function CreationSuccessful(){var history=(0,react_router.k6)(),t=(0,useI18nContext.C)(),trackEvent=(0,react.useContext)(contexts_metametrics.Wd),firstTimeFlowType=(0,es.v9)(selectors.XQo);return react.createElement("div",{className:"creation-successful","data-testid":"creation-successful"},react.createElement(box.ZP,{textAlign:design_system.I8.CENTER},react.createElement("img",{src:"./images/tada.png"}),react.createElement(typography.Z,{variant:design_system.bu.H2,fontWeight:design_system.m5.BOLD,margin:6},t("walletCreationSuccessTitle")),react.createElement(typography.Z,{variant:design_system.bu.H4},t("walletCreationSuccessDetail"))),react.createElement(typography.Z,{variant:design_system.bu.H4,boxProps:{align:design_system.g1.flexStart},marginLeft:12},t("remember")),react.createElement("ul",null,react.createElement("li",null,react.createElement(typography.Z,{variant:design_system.bu.H4},t((0,build_types.h)()?"betaWalletCreationSuccessReminder1":"walletCreationSuccessReminder1"))),react.createElement("li",null,react.createElement(typography.Z,{variant:design_system.bu.H4},t((0,build_types.h)()?"betaWalletCreationSuccessReminder2":"walletCreationSuccessReminder2"))),react.createElement("li",null,react.createElement(typography.Z,{variant:design_system.bu.H4},t("walletCreationSuccessReminder3",[react.createElement("span",{key:"creation-successful__bold",className:"creation-successful__bold"},t("walletCreationSuccessReminder3BoldSection"))]))),react.createElement("li",null,react.createElement(ui_button.Z,{href:"https://community.metamask.io/t/what-is-a-secret-recovery-phrase-and-how-to-keep-your-crypto-wallet-secure/3440",target:"_blank",type:"link",rel:"noopener noreferrer"},t("learnMoreUpperCase")))),react.createElement(box.ZP,{marginTop:6,className:"creation-successful__actions"},react.createElement(ui_button.Z,{type:"link",onClick:function(){return history.push(routes.pi)}},t("advancedConfiguration")),react.createElement(ui_button.Z,{"data-testid":"onboarding-complete-done",type:"primary",large:!0,rounded:!0,onClick:function(){trackEvent({category:metametrics.ci.Onboarding,event:metametrics.AW.OnboardingWalletCreationComplete,properties:{method:firstTimeFlowType}}),history.push(routes.DL)}},t("gotIt"))))}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let creation_successful_stories={title:"Pages/OnboardingFlow/CreationSuccessful"};var DefaultStory=function(){return react.createElement("div",{style:{maxHeight:"2000px"}},react.createElement(CreationSuccessful,null))};DefaultStory.storyName="Default",DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"() => {\n  return <div style={{\n    maxHeight: '2000px'\n  }}>\n      <CreationSuccessful />\n    </div>;\n}"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})})},"./ui/components/ui/button/button.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var CLASSNAME_DEFAULT="btn-default",typeHash={default:CLASSNAME_DEFAULT,primary:"btn-primary",secondary:"btn-secondary",warning:"btn-warning",danger:"btn-danger","danger-primary":"btn-danger-primary",link:"btn-link",inline:"btn--inline",raised:"btn-raised"},Button=function(_param){var _onKeyUp,_role,_tabIndex,type=_param.type,_param_submit=_param.submit,large=_param.large,children=_param.children,icon=_param.icon,className=_param.className,_param_rounded=_param.rounded,buttonProps=_object_without_properties(_param,["type","submit","large","children","icon","className","rounded"]),Tag="button";return"link"===type?Tag="a":void 0!==_param_submit&&_param_submit&&(buttonProps.type="submit"),"link"===type&&"function"==typeof buttonProps.onClick&&(null!==(_onKeyUp=buttonProps.onKeyUp)&&void 0!==_onKeyUp||(buttonProps.onKeyUp=function(event){"Enter"===event.key&&buttonProps.onClick()}),null!==(_role=buttonProps.role)&&void 0!==_role||(buttonProps.role="button"),null!==(_tabIndex=buttonProps.tabIndex)&&void 0!==_tabIndex||(buttonProps.tabIndex=0)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag,_object_spread({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("button",(void 0===_param_rounded||_param_rounded)&&"link"!==type&&"inline"!==type&&"btn--rounded",typeHash[type]||CLASSNAME_DEFAULT,large&&"btn--large",className)},buttonProps),icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"button__icon"},icon):null,children)};Button.propTypes={type:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,submit:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,large:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,rounded:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool};let __WEBPACK_DEFAULT_EXPORT__=Button},"./ui/components/ui/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./ui/components/ui/button/button.component.js").Z},"./ui/components/ui/typography/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_typography__WEBPACK_IMPORTED_MODULE_0__.ZP});var _typography__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/typography/typography.js")}}]);