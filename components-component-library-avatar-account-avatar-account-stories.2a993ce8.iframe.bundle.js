"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[8261],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/avatar-account/avatar-account.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Address:()=>Address,DefaultStory:()=>DefaultStory,Size:()=>Size,Variant:()=>Variant,default:()=>avatar_account_stories});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,_Size_parameters,_Size_parameters_docs,_Size_parameters1,_Variant_parameters,_Variant_parameters_docs,_Variant_parameters1,_Address_parameters,_Address_parameters_docs,_Address_parameters1,react=__webpack_require__("./node_modules/react/index.js"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),avatar_account=__webpack_require__("./ui/components/component-library/avatar-account/avatar-account.tsx"),avatar_account_types=__webpack_require__("./ui/components/component-library/avatar-account/avatar-account.types.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"avataraccount",children:"AvatarAccount"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarAccount"})," is a type of avatar reserved for representing accounts."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-avataraccount--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:avatar_account.p}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarAccountSize"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"../../component-library"})," to change the size of ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarAccount"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Possible sizes include:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AvatarAccountSize.Xs"})," 16px"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AvatarAccountSize.Sm"})," 24px"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AvatarAccountSize.Md"})," 32px"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AvatarAccountSize.Lg"})," 40px"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AvatarAccountSize.Xl"})," 48px"]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarAccountSize.MD"})]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-avataraccount--size"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { AvatarAccount, AvatarAccountSize } from '../../component-library';\n\n<AvatarAccount size={AvatarAccountSize.Xs} />\n<AvatarAccount size={AvatarAccountSize.Sm} />\n<AvatarAccount size={AvatarAccountSize.Md} />\n<AvatarAccount size={AvatarAccountSize.Lg} />\n<AvatarAccount size={AvatarAccountSize.Xl} />\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"variant",children:"Variant"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"variant"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarAccountVariant"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"../../component-library"})," to change between jazzicon and blockies variants."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-avataraccount--variant"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { AvatarAccount, AvatarAccountVariant } from '../../component-library';\n\n<AvatarAccount variant={AvatarAccountVariant.Jazzicon} />\n<AvatarAccount variant={AvatarAccountVariant.Blockies} />\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"address",children:"Address"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the required ",(0,jsx_runtime.jsx)(_components.code,{children:"address"})," for generating images"]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-componentlibrary-avataraccount--address"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { AvatarAccount, AvatarAccountVariant } from \'../../component-library\';\n\n<AvatarAccount variant={AvatarAccountVariant.Jazzicon} address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />\n<AvatarAccount variant={AvatarAccountVariant.Blockies} address="0x0" />\n'})})]})}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}__webpack_require__("./ui/components/component-library/index.ts");let avatar_account_stories={title:"Components/ComponentLibrary/AvatarAccount",component:avatar_account.p,parameters:{docs:{page:function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{size:{control:"select",options:Object.values(avatar_account_types.qi)},address:{control:"text"},variant:{control:"select",options:Object.values(avatar_account_types.q)}},args:{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:avatar_account_types.qi.Md,variant:avatar_account_types.q.Jazzicon}};var DefaultStory=function(args){return react.createElement(avatar_account.p,args)};DefaultStory.storyName="Default";var Size=function(args){return react.createElement(box.x,{display:design_system.sS.Flex,alignItems:design_system.g1.baseline,gap:1},react.createElement(avatar_account.p,_object_spread_props(_object_spread({},args),{size:avatar_account_types.qi.Xs})),react.createElement(avatar_account.p,_object_spread_props(_object_spread({},args),{size:avatar_account_types.qi.Sm})),react.createElement(avatar_account.p,_object_spread_props(_object_spread({},args),{size:avatar_account_types.qi.Md})),react.createElement(avatar_account.p,_object_spread_props(_object_spread({},args),{size:avatar_account_types.qi.Lg})),react.createElement(avatar_account.p,_object_spread_props(_object_spread({},args),{size:avatar_account_types.qi.Xl})))},Variant=function(args){return react.createElement(box.x,{display:design_system.sS.Flex,alignItems:design_system.g1.baseline,gap:1},react.createElement(avatar_account.p,_object_spread_props(_object_spread({},args),{variant:avatar_account_types.q.Jazzicon})),react.createElement(avatar_account.p,_object_spread_props(_object_spread({},args),{variant:avatar_account_types.q.Blockies})))},Address=function(args){return react.createElement(box.x,{display:design_system.sS.Flex,alignItems:design_system.g1.baseline,gap:1},react.createElement(avatar_account.p,_object_spread_props(_object_spread({},args),{variant:avatar_account_types.q.Jazzicon,address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"})),react.createElement(avatar_account.p,_object_spread_props(_object_spread({},args),{variant:avatar_account_types.q.Blockies,address:"0x0"})))};DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"args => <AvatarAccount {...args} />"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})}),Size.parameters=_object_spread_props(_object_spread({},Size.parameters),{docs:_object_spread_props(_object_spread({},null===(_Size_parameters=Size.parameters)||void 0===_Size_parameters?void 0:_Size_parameters.docs),{source:_object_spread({originalSource:"args => <Box display={Display.Flex} alignItems={AlignItems.baseline} gap={1}>\n    <AvatarAccount {...args} size={AvatarAccountSize.Xs} />\n    <AvatarAccount {...args} size={AvatarAccountSize.Sm} />\n    <AvatarAccount {...args} size={AvatarAccountSize.Md} />\n    <AvatarAccount {...args} size={AvatarAccountSize.Lg} />\n    <AvatarAccount {...args} size={AvatarAccountSize.Xl} />\n  </Box>"},null===(_Size_parameters1=Size.parameters)||void 0===_Size_parameters1?void 0:null===(_Size_parameters_docs=_Size_parameters1.docs)||void 0===_Size_parameters_docs?void 0:_Size_parameters_docs.source)})}),Variant.parameters=_object_spread_props(_object_spread({},Variant.parameters),{docs:_object_spread_props(_object_spread({},null===(_Variant_parameters=Variant.parameters)||void 0===_Variant_parameters?void 0:_Variant_parameters.docs),{source:_object_spread({originalSource:"args => <Box display={Display.Flex} alignItems={AlignItems.baseline} gap={1}>\n    <AvatarAccount {...args} variant={AvatarAccountVariant.Jazzicon} />\n    <AvatarAccount {...args} variant={AvatarAccountVariant.Blockies} />\n  </Box>"},null===(_Variant_parameters1=Variant.parameters)||void 0===_Variant_parameters1?void 0:null===(_Variant_parameters_docs=_Variant_parameters1.docs)||void 0===_Variant_parameters_docs?void 0:_Variant_parameters_docs.source)})}),Address.parameters=_object_spread_props(_object_spread({},Address.parameters),{docs:_object_spread_props(_object_spread({},null===(_Address_parameters=Address.parameters)||void 0===_Address_parameters?void 0:_Address_parameters.docs),{source:_object_spread({originalSource:'args => <Box display={Display.Flex} alignItems={AlignItems.baseline} gap={1}>\n    <AvatarAccount {...args} variant={AvatarAccountVariant.Jazzicon} address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />\n    <AvatarAccount {...args} variant={AvatarAccountVariant.Blockies} address="0x0" />\n  </Box>'},null===(_Address_parameters1=Address.parameters)||void 0===_Address_parameters1?void 0:null===(_Address_parameters_docs=_Address_parameters1.docs)||void 0===_Address_parameters_docs?void 0:_Address_parameters_docs.source)})});try{DefaultStory.displayName="DefaultStory",DefaultStory.__docgenInfo={description:"",displayName:"DefaultStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/avatar-account/avatar-account.stories.tsx#DefaultStory"]={docgenInfo:DefaultStory.__docgenInfo,name:"DefaultStory",path:"ui/components/component-library/avatar-account/avatar-account.stories.tsx#DefaultStory"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-component-library-avatar-account-avatar-account-stories.2a993ce8.iframe.bundle.js.map