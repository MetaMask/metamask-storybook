"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[46318],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./ui/components/ui/identicon/identicon.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,WithBlockie:()=>WithBlockie,WithBorder:()=>WithBorder,WithImage:()=>WithImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>identicon_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),identicon_component=__webpack_require__("./ui/components/ui/identicon/identicon.component.js");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"identicon",children:"Identicon"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"An identifier component that can be supplied an image or randomly generates one based on the account address."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-identicon--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.uY,{of:identicon_component.A}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-image",children:"With Image"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Use with custom image"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-identicon--with-image"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-blockie",children:"With Blockie"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-identicon--with-blockie"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"with-border",children:"With Border"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-identicon--with-border"})})]})}let identicon_stories={title:"Components/UI/Identicon",component:identicon_component.A,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{addBorder:{control:"boolean"},address:{control:"text"},className:{control:"text"},diameter:{control:"number"},image:{control:"text"},useBlockie:{control:"boolean"},alt:{control:"text"},imageBorder:{control:"boolean"},useTokenDetection:{control:"boolean"},tokenList:{control:"object"},watchedNftContracts:{control:"object"}}};var DefaultStory=function(args){return react.createElement(identicon_component.A,args)};DefaultStory.storyName="Default",DefaultStory.args={addBorder:!1,address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",diameter:32,useBlockie:!1};var WithImage=function(args){return react.createElement(identicon_component.A,args)};WithImage.args={addBorder:!1,diameter:32,useBlockie:!1,image:"./images/eth_logo.svg",alt:"Ethereum",imageBorder:!0};var WithBlockie=function(args){return react.createElement(identicon_component.A,args)};WithBlockie.args={addBorder:!1,address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",diameter:32,useBlockie:!0};var WithBorder=function(args){return react.createElement(identicon_component.A,args)};WithBorder.args={addBorder:!0,address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",diameter:32,useBlockie:!1},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <Identicon {...args} />",...DefaultStory.parameters?.docs?.source}}},WithImage.parameters={...WithImage.parameters,docs:{...WithImage.parameters?.docs,source:{originalSource:"args => <Identicon {...args} />",...WithImage.parameters?.docs?.source}}},WithBlockie.parameters={...WithBlockie.parameters,docs:{...WithBlockie.parameters?.docs,source:{originalSource:"args => <Identicon {...args} />",...WithBlockie.parameters?.docs?.source}}},WithBorder.parameters={...WithBorder.parameters,docs:{...WithBorder.parameters?.docs,source:{originalSource:"args => <Identicon {...args} />",...WithBorder.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","WithImage","WithBlockie","WithBorder"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-ui-identicon-identicon-stories.8a03bf05.iframe.bundle.js.map