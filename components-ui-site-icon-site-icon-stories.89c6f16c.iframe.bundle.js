"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[3470],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/ui/site-icon/site-icon.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,Fallback:()=>Fallback,default:()=>site_icon_stories});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,_Fallback_parameters,_Fallback_parameters_docs,_Fallback_parameters1,react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),site_icon=__webpack_require__("./ui/components/ui/site-icon/index.js");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"siteicon",children:"SiteIcon"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["SiteIcon uses the ",(0,jsx_runtime.jsx)(_components.code,{children:"IconBorder"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"IconWithFallback"})," components to create an icon within a gray ellipse"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-ui-siteicon--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:site_icon.Z}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The following describes the props and example usage for this component."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"fallback",children:"Fallback"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"SiteIcon"})," wraps the ",(0,jsx_runtime.jsx)(_components.code,{children:"IconWithFallback"})," component which has a fallback ",(0,jsx_runtime.jsx)(_components.code,{children:"onError"})," and will display the first letter of the ",(0,jsx_runtime.jsx)(_components.code,{children:"name"})," prop"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-ui-siteicon--fallback"})})]})}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let site_icon_stories={title:"Components/UI/SiteIcon",component:site_icon.Z,parameters:{docs:{page:function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{icon:{control:"text"},name:{control:"text"},size:{control:"number"}}};var DefaultStory=function(args){return react.createElement(site_icon.Z,args)};DefaultStory.storyName="Default",DefaultStory.args={name:"eth",icon:"./images/eth_logo.svg",size:24};var Fallback=function(args){return react.createElement(site_icon.Z,args)};Fallback.args={name:"eth",size:24},DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"args => <SiteIcon {...args} />"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})}),Fallback.parameters=_object_spread_props(_object_spread({},Fallback.parameters),{docs:_object_spread_props(_object_spread({},null===(_Fallback_parameters=Fallback.parameters)||void 0===_Fallback_parameters?void 0:_Fallback_parameters.docs),{source:_object_spread({originalSource:"args => <SiteIcon {...args} />"},null===(_Fallback_parameters1=Fallback.parameters)||void 0===_Fallback_parameters1?void 0:null===(_Fallback_parameters_docs=_Fallback_parameters1.docs)||void 0===_Fallback_parameters_docs?void 0:_Fallback_parameters_docs.source)})})},"./ui/components/ui/icon-border/icon-border.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IconBorder});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function IconBorder(param){var children=param.children,size=param.size,className=param.className;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("icon-border",className),style:{height:"".concat(size,"px"),width:"".concat(size,"px")}},children)}IconBorder.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired}},"./ui/components/ui/icon-with-fallback/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>icon_with_fallback_component});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var IconWithFallback=function(_param){var _param_name=_param.name,name=void 0===_param_name?"":_param_name,_param_icon=_param.icon,icon=void 0===_param_icon?null:_param_icon,size=_param.size,className=_param.className,fallbackClassName=_param.fallbackClassName,wrapperClassName=_param.wrapperClassName,props=_object_without_properties(_param,["name","icon","size","className","fallbackClassName","wrapperClassName"]),_useState=_sliced_to_array((0,react.useState)(!1),2),iconError=_useState[0],setIconError=_useState[1];return react.createElement("div",{className:classnames_default()(wrapperClassName)},!iconError&&icon?react.createElement("img",_object_spread({onError:function(){setIconError(!0)},src:icon,style:size?{height:"".concat(size,"px"),width:"".concat(size,"px")}:{},className:className,alt:name||"icon"},props)):react.createElement("span",{className:classnames_default()("icon-with-fallback__fallback",fallbackClassName)},(null==name?void 0:name.charAt(0).toUpperCase())||""))};IconWithFallback.propTypes={icon:prop_types_default().string,name:prop_types_default().string,size:prop_types_default().number,className:prop_types_default().string,wrapperClassName:prop_types_default().string,fallbackClassName:prop_types_default().string};let icon_with_fallback_component=IconWithFallback},"./ui/components/ui/site-icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SiteIcon});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),icon_border=__webpack_require__("./ui/components/ui/icon-border/icon-border.js"),icon_with_fallback=__webpack_require__("./ui/components/ui/icon-with-fallback/index.js");function SiteIcon(param){var _param_icon=param.icon,_param_name=param.name,size=param.size,className=param.className;return react.createElement(icon_border.Z,{size:size,className:className},react.createElement(icon_with_fallback.Z,{icon:void 0===_param_icon?null:_param_icon,name:void 0===_param_name?"":_param_name,size:Math.floor(.75*size)}))}SiteIcon.propTypes={className:prop_types_default().string,icon:prop_types_default().string,name:prop_types_default().string,size:prop_types_default().number.isRequired}}}]);
//# sourceMappingURL=components-ui-site-icon-site-icon-stories.89c6f16c.iframe.bundle.js.map