"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[3486],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/picker-network/picker-network.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,Label:()=>Label,Src:()=>Src,Width:()=>Width,default:()=>picker_network_stories});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,_Label_parameters,_Label_parameters_docs,_Label_parameters1,_Src_parameters,_Src_parameters_docs,_Src_parameters1,_Width_parameters,_Width_parameters_docs,_Width_parameters1,react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),picker_network=__webpack_require__("./ui/components/component-library/picker-network/picker-network.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"pickernetwork",children:"PickerNetwork"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"PickerNetwork"})," is used for the action of changing a network."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-pickernetwork--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:picker_network.E}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"label",children:"Label"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," prop for the text content of the ",(0,jsx_runtime.jsx)(_components.code,{children:"PickerNetwork"})," component. For long labels set a ",(0,jsx_runtime.jsx)(_components.code,{children:"max-width"})," using a ",(0,jsx_runtime.jsx)(_components.code,{children:"className"})," and the text will truncate showing an ellipsis. If the ",(0,jsx_runtime.jsx)(_components.code,{children:"src"})," prop is not set, the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," prop will be used to generate fallback initial for ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarNetwork"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-pickernetwork--label"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { PickerNetwork } from \'../../ui/component-library\';\n<PickerNetwork src="./images/avax-token.svg" label="Avalanche C-Chain" />\n<PickerNetwork label="Arbitrum One" />\n<PickerNetwork label="Polygon Mainnet" />\n<PickerNetwork label="Optimism" />\n<PickerNetwork label="BNB Smart Chain (previously Binance Smart Chain Mainnet)" style={{ maxWidth: \'200px\' }} />\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"src",children:"Src"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"src"})," prop with an image url to render the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarNetwork"}),". Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"avatarNetworkProps"})," to pass additional props to the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarNetwork"})," component. If the ",(0,jsx_runtime.jsx)(_components.code,{children:"src"})," prop is not set, the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," prop will be used to generate fallback initial for ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarNetwork"}),"."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-pickernetwork--src"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { PickerNetwork } from \'../../ui/component-library\';\n<PickerNetwork src="./images/arbitrum.svg" label="Arbitrum One" />\n<PickerNetwork src="./images/matic-token.svg" label="Polygon Mainnet" />\n<PickerNetwork src="./images/optimism.svg" label="Optimism" />\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"width",children:"Width"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The width of the ",(0,jsx_runtime.jsx)(_components.code,{children:"PickerNetwork"})," is set to auto by default. Use the style utility ",(0,jsx_runtime.jsx)(_components.code,{children:"width"})," prop with the ",(0,jsx_runtime.jsx)(_components.code,{children:"BlockSize"})," enum to set the width of the ",(0,jsx_runtime.jsx)(_components.code,{children:"PickerNetwork"})," component."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-pickernetwork--width"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { PickerNetwork } from \'../../ui/component-library\';\nimport { BlockSize } from \'../../../helpers/constants/design-system\';\n\n<PickerNetwork src="./images/avax-token.svg" label="Avalanche C-Chain" />;\n<PickerNetwork\n  src="./images/avax-token.svg"\n  label="Avalanche C-Chain"\n  width={BlockSize.Full}\n/>;\n'})})]})}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let picker_network_stories={title:"Components/ComponentLibrary/PickerNetwork",component:picker_network.E,parameters:{docs:{page:function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{label:{control:"text"},src:{control:"text"}},args:{label:"Avalanche C-Chain",src:"./images/avax-token.svg"}};var DefaultStory=(function(args){return react.createElement(picker_network.E,args)}).bind({});DefaultStory.storyName="Default";var Label=function(args){return react.createElement(component_library.xu,{display:design_system.sS.InlineFlex,flexDirection:design_system.Qb.Column,gap:2},react.createElement(picker_network.E,args),react.createElement(picker_network.E,_object_spread_props(_object_spread({},args),{src:"",label:"Arbitrum One"})),react.createElement(picker_network.E,_object_spread_props(_object_spread({},args),{src:"",label:"Polygon Mainnet"})),react.createElement(picker_network.E,_object_spread_props(_object_spread({},args),{src:"",label:"Optimism"})),react.createElement(picker_network.E,_object_spread_props(_object_spread({},args),{src:"",label:"BNB Smart Chain (previously Binance Smart Chain Mainnet)",style:{maxWidth:"200px"}})))},Src=function(args){return react.createElement(component_library.xu,{display:design_system.sS.InlineFlex,flexDirection:design_system.Qb.Column,gap:2},react.createElement(picker_network.E,_object_spread_props(_object_spread({},args),{label:"Arbitrum One",src:"./images/arbitrum.svg"})),react.createElement(picker_network.E,_object_spread_props(_object_spread({},args),{label:"Polygon Mainnet",src:"./images/matic-token.svg"})),react.createElement(picker_network.E,_object_spread_props(_object_spread({},args),{label:"Optimism",src:"./images/optimism.svg"})))},Width=function(args){return react.createElement(react.Fragment,null,react.createElement(picker_network.E,_object_spread({marginBottom:2},args)),react.createElement(picker_network.E,_object_spread_props(_object_spread({},args),{width:design_system.Sw.Full})))};DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"args => <PickerNetwork {...args} />"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})}),Label.parameters=_object_spread_props(_object_spread({},Label.parameters),{docs:_object_spread_props(_object_spread({},null===(_Label_parameters=Label.parameters)||void 0===_Label_parameters?void 0:_Label_parameters.docs),{source:_object_spread({originalSource:'args => <Box display={Display.InlineFlex} flexDirection={FlexDirection.Column} gap={2}>\n    <PickerNetwork {...args} />\n    <PickerNetwork {...args} src="" label="Arbitrum One" />\n    <PickerNetwork {...args} src="" label="Polygon Mainnet" />\n    <PickerNetwork {...args} src="" label="Optimism" />\n    <PickerNetwork {...args} src="" label="BNB Smart Chain (previously Binance Smart Chain Mainnet)" style={{\n    maxWidth: \'200px\'\n  }} />\n  </Box>'},null===(_Label_parameters1=Label.parameters)||void 0===_Label_parameters1?void 0:null===(_Label_parameters_docs=_Label_parameters1.docs)||void 0===_Label_parameters_docs?void 0:_Label_parameters_docs.source)})}),Src.parameters=_object_spread_props(_object_spread({},Src.parameters),{docs:_object_spread_props(_object_spread({},null===(_Src_parameters=Src.parameters)||void 0===_Src_parameters?void 0:_Src_parameters.docs),{source:_object_spread({originalSource:'args => <Box display={Display.InlineFlex} flexDirection={FlexDirection.Column} gap={2}>\n    <PickerNetwork {...args} label="Arbitrum One" src="./images/arbitrum.svg" />\n    <PickerNetwork {...args} label="Polygon Mainnet" src="./images/matic-token.svg" />\n    <PickerNetwork {...args} label="Optimism" src="./images/optimism.svg" />\n  </Box>'},null===(_Src_parameters1=Src.parameters)||void 0===_Src_parameters1?void 0:null===(_Src_parameters_docs=_Src_parameters1.docs)||void 0===_Src_parameters_docs?void 0:_Src_parameters_docs.source)})}),Width.parameters=_object_spread_props(_object_spread({},Width.parameters),{docs:_object_spread_props(_object_spread({},null===(_Width_parameters=Width.parameters)||void 0===_Width_parameters?void 0:_Width_parameters.docs),{source:_object_spread({originalSource:"args => <>\n    <PickerNetwork marginBottom={2} {...args} />\n    <PickerNetwork {...args} width={BlockSize.Full} />\n  </>"},null===(_Width_parameters1=Width.parameters)||void 0===_Width_parameters1?void 0:null===(_Width_parameters_docs=_Width_parameters1.docs)||void 0===_Width_parameters_docs?void 0:_Width_parameters_docs.source)})});try{DefaultStory.displayName="DefaultStory",DefaultStory.__docgenInfo={description:"",displayName:"DefaultStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/picker-network/picker-network.stories.tsx#DefaultStory"]={docgenInfo:DefaultStory.__docgenInfo,name:"DefaultStory",path:"ui/components/component-library/picker-network/picker-network.stories.tsx#DefaultStory"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-component-library-picker-network-picker-network-stories.c0b550c5.iframe.bundle.js.map