"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[6026],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/tag/tag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,Label:()=>Label,StartIconNameStory:()=>StartIconNameStory,StartIconPropsStory:()=>StartIconPropsStory,default:()=>tag_stories});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,_Label_parameters,_Label_parameters_docs,_Label_parameters1,_StartIconNameStory_parameters,_StartIconNameStory_parameters_docs,_StartIconNameStory_parameters1,_StartIconPropsStory_parameters,_StartIconPropsStory_parameters_docs,_StartIconPropsStory_parameters1,react=__webpack_require__("./node_modules/react/index.js"),icon=__webpack_require__("./ui/components/component-library/icon/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),tag=__webpack_require__("./ui/components/component-library/tag/tag.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"tag",children:"Tag"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Tag"})," is a component used to display text within a container."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-tag--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:tag.V}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"label",children:"Label"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The text content of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Tag"})," component"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-tag--label"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"starticonname",children:"StartIconName"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"startIconName"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"IconName"})," enum to change the icon"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.a,{href:"/story/components-componentlibrary-icon--default-story",children:"IconSearch"})," story to find the icon you want to use"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-tag--start-icon-name-story"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Tag, IconName } from '../../component-library';\n\n<Tag startIconName={IconName.Snaps} label=\"Snap Name\" />;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"starticonprops",children:"StartIconProps"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"startIconProps"})," prop to pass props to the icon component used in the parent Tag component"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-tag--start-icon-props-story"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Tag, IconName } from '../../component-library';\nimport { IconColor } from '../../../helpers/constants/design-system';\n\n<Tag\n  startIconName={IconName.Snaps}\n  label=\"Snap Name\"\n  startIconProps={{ color: IconColor.primaryDefault }}\n/>;\n"})})]})}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let tag_stories={title:"Components/ComponentLibrary/Tag",component:tag.V,parameters:{docs:{page:function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{label:{control:"text"},startIconName:{control:"text"}},args:{label:"Imported"}};var DefaultStory=function(args){return react.createElement(tag.V,args)};DefaultStory.storyName="Default";var Label=function(args){return react.createElement(tag.V,args)};Label.args={label:"Label Story"};var StartIconNameStory=function(args){return react.createElement(tag.V,args)};StartIconNameStory.args={label:"Snap Name",startIconName:icon.uH.Snaps},StartIconNameStory.storyName="StartIconName";var StartIconPropsStory=function(args){return react.createElement(tag.V,args)};StartIconPropsStory.args={label:"Snap Name",startIconName:icon.uH.Snaps,startIconProps:{color:design_system.EY.primaryDefault}},StartIconPropsStory.storyName="StartIconProps",DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"args => <Tag {...args} />"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})}),Label.parameters=_object_spread_props(_object_spread({},Label.parameters),{docs:_object_spread_props(_object_spread({},null===(_Label_parameters=Label.parameters)||void 0===_Label_parameters?void 0:_Label_parameters.docs),{source:_object_spread({originalSource:"args => <Tag {...args} />"},null===(_Label_parameters1=Label.parameters)||void 0===_Label_parameters1?void 0:null===(_Label_parameters_docs=_Label_parameters1.docs)||void 0===_Label_parameters_docs?void 0:_Label_parameters_docs.source)})}),StartIconNameStory.parameters=_object_spread_props(_object_spread({},StartIconNameStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_StartIconNameStory_parameters=StartIconNameStory.parameters)||void 0===_StartIconNameStory_parameters?void 0:_StartIconNameStory_parameters.docs),{source:_object_spread({originalSource:"args => <Tag {...args} />"},null===(_StartIconNameStory_parameters1=StartIconNameStory.parameters)||void 0===_StartIconNameStory_parameters1?void 0:null===(_StartIconNameStory_parameters_docs=_StartIconNameStory_parameters1.docs)||void 0===_StartIconNameStory_parameters_docs?void 0:_StartIconNameStory_parameters_docs.source)})}),StartIconPropsStory.parameters=_object_spread_props(_object_spread({},StartIconPropsStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_StartIconPropsStory_parameters=StartIconPropsStory.parameters)||void 0===_StartIconPropsStory_parameters?void 0:_StartIconPropsStory_parameters.docs),{source:_object_spread({originalSource:"args => <Tag {...args} />"},null===(_StartIconPropsStory_parameters1=StartIconPropsStory.parameters)||void 0===_StartIconPropsStory_parameters1?void 0:null===(_StartIconPropsStory_parameters_docs=_StartIconPropsStory_parameters1.docs)||void 0===_StartIconPropsStory_parameters_docs?void 0:_StartIconPropsStory_parameters_docs.source)})})}}]);
//# sourceMappingURL=components-component-library-tag-tag-stories.bac71868.iframe.bundle.js.map