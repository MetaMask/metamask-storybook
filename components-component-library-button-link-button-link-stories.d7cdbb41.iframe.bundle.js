"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[17563],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./ui/components/component-library/button-link/button-link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,DefaultStory:()=>DefaultStory,ExternalLink:()=>ExternalLink,HitArea:()=>HitArea,Href:()=>Href,SizeStory:()=>SizeStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_link_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),button_link=__webpack_require__("./ui/components/component-library/button-link/button-link.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"buttonlink",children:"ButtonLink"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLink"})," is an extension of ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonBase"})," to support link styles"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonlink--default-story"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.uY,{of:button_link.v}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLinkSize"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/components/component-library"})," to change the size of ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLink"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLinkSize.Auto"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Possible sizes include:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLinkSize.Auto"})," sets the height to auto but retains ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLink"})," font-size"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLinkSize.Sm"})," 32px"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLinkSize.Md"})," 40px"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLinkSize.Lg"})," 48px"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLinkSize.Inherit"})," inherits the font-size of the parent element. Used for inline links in paragraphs."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonlink--size-story"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ButtonLink, ButtonLinkSize, Text, TextVariant } from '../../component-library';\n\n<ButtonLink size={ButtonLinkSize.Auto}>\n  Auto (default)\n</ButtonLink>\n<ButtonLink size={ButtonLinkSize.Sm}>\n  Small\n</ButtonLink>\n<ButtonLink size={ButtonLinkSize.Md}>\n  Medium\n</ButtonLink>\n<ButtonLink size={ButtonLinkSize.Lg}>\n  Large\n</ButtonLink>\n\n<Text variant={TextVariant.bodyLgMedium}>\n  Inherits the font-size of the parent element. <ButtonLink size={ButtonLinkSize.Inherit}>Learn more</ButtonLink>\n</Text>\n<Text variant={TextVariant.bodyMd}>\n  Inherits the font-size of the parent element. <ButtonLink size={ButtonLinkSize.Inherit}>Learn more</ButtonLink>\n</Text>\n<Text variant={TextVariant.bodySm}>\n  Inherits the font-size of the parent element. <ButtonLink size={ButtonLinkSize.Inherit}>Learn more</ButtonLink>\n</Text>\n\n<Text variant={TextVariant.bodyXs}>\n  Inherits the font-size of the parent element and example with override for a success color.\n   <ButtonLink size={ButtonLinkSize.Inherit}>Learn more</ButtonLink>\n</Text>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"danger",children:"Danger"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"danger"})," boolean prop to change the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLink"})," to danger color."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonlink--danger"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ButtonLink } from '../../component-library';\n\n<ButtonLink>Normal</ButtonLink>\n<ButtonLink danger>Danger</ButtonLink>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"href",children:"Href"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["When an ",(0,jsx_runtime.jsx)(_components.code,{children:"href"})," prop is passed it will change the element to an anchor(",(0,jsx_runtime.jsx)(_components.code,{children:"a"}),") tag."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonlink--href"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ButtonLink } from '../../component-library';\n\n<ButtonLink href=\"/\">Href example</ButtonLink>;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"external-link",children:"External Link"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["When an ",(0,jsx_runtime.jsx)(_components.code,{children:"externalLink"})," prop is passed it adds the ",(0,jsx_runtime.jsx)(_components.code,{children:'target="_blank"'})," and ",(0,jsx_runtime.jsx)(_components.code,{children:'rel="noopener noreferrer"'})," attributes."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:'rel="noreferrer noopener"'})," is used in links to prevent security vulnerabilities that can be exploited by malicious websites. It disables the window.opener property and prevents the new page from sending the referrer information, providing an additional layer of security."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonlink--external-link"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ButtonLink } from '../../component-library';\n\n<ButtonLink href=\"https://metamask.io\" externalLink>\n  Anchor element with external link\n</ButtonLink>;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"hit-area",children:"Hit area"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The default hit area for ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLink"})," is the width of the text and height based on the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop which is set to ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLinkSize.Auto"})," by default. There may be times when you want to increase the hit area of the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLink"}),". To do this you can use the ",(0,jsx_runtime.jsx)(_components.code,{children:"Box"})," props ",(0,jsx_runtime.jsx)(_components.code,{children:"paddingLeft"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"paddingRight"}),". Or alternatively you can use the ",(0,jsx_runtime.jsx)(_components.code,{children:"block"})," prop which sets the width to 100%."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonlink--hit-area"})}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { ButtonLink, ButtonLinkSize } from '../../component-library';\n\n<ButtonLink paddingLeft={4} paddingRight={4}>\n  Auto (default)\n</ButtonLink>\n<ButtonLink size={ButtonLinkSize.Sm} paddingLeft={4} paddingRight={4}>\n  Small\n</ButtonLink>\n<ButtonLink size={ButtonLinkSize.Md} paddingLeft={4} paddingRight={4}>\n  Medium\n</ButtonLink>\n<ButtonLink size={ButtonLinkSize.Lg} paddingLeft={4} paddingRight={4}>\n  Large\n</ButtonLink>\n<ButtonLink size={ButtonLinkSize.Lg} block>\n  Large block\n</ButtonLink>\n"})})]})}__webpack_require__("./ui/components/component-library/button-base/index.ts");var component_library_button_link=__webpack_require__("./ui/components/component-library/button-link/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let button_link_stories={title:"Components/ComponentLibrary/ButtonLink",component:component_library_button_link.v,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{as:{control:"select",options:["button","a"]},children:{control:"text"},className:{control:"text"},danger:{control:"boolean"},size:{control:"select",options:Object.values(component_library_button_link.w)}},args:{children:"Button Link"}};var DefaultStory=function(args){return react.createElement(component_library_button_link.v,args)};DefaultStory.storyName="Default";var SizeStory=function(args){return react.createElement(react.Fragment,null,react.createElement(component_library.az,{display:design_system.nl.Flex,alignItems:design_system.k2.flexStart,gap:4},react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{size:component_library_button_link.w.Auto}),"Auto (default)"),react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{size:component_library_button_link.w.Sm}),"Small"),react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{size:component_library_button_link.w.Md}),"Medium"),react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{size:component_library_button_link.w.Lg}),"Large")),react.createElement(component_library.EY,{variant:design_system.J3.bodyLgMedium},"Inherits the font-size of the parent element."," ",react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{size:component_library_button_link.w.Inherit}),"Learn more")),react.createElement(component_library.EY,{variant:design_system.J3.bodyMd},"Inherits the font-size of the parent element."," ",react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{size:component_library_button_link.w.Inherit}),"Learn more")),react.createElement(component_library.EY,{variant:design_system.J3.bodySm},"Inherits the font-size of the parent element."," ",react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{size:component_library_button_link.w.Inherit}),"Learn more")),react.createElement(component_library.EY,{variant:design_system.J3.bodyXs},"Inherits the font-size of the parent element and example with override for a success color."," ",react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{size:component_library_button_link.w.Inherit,color:design_system.r7.successDefault}),"Learn more")))};SizeStory.storyName="Size";var Danger=function(args){return react.createElement(component_library.az,{display:design_system.nl.Flex,gap:4},react.createElement(component_library_button_link.v,args,"Normal"),react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({as:"a"},args),{href:"#",danger:!0}),"Danger"))},Href=function(args){return react.createElement(component_library_button_link.v,args,"Href example")};Href.args={href:"/metamask"};var ExternalLink=function(args){return react.createElement(component_library_button_link.v,args,"Anchor element with external link")};ExternalLink.args={href:"https://metamask.io/",externalLink:!0};var HitArea=function(args){return react.createElement(react.Fragment,null,react.createElement(component_library.EY,{marginBottom:4},"Default"),react.createElement(component_library.az,{display:design_system.nl.Flex,alignItems:design_system.k2.flexStart,gap:4,marginBottom:4},react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{size:component_library_button_link.w.Auto}),"Auto (default)"),react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{size:component_library_button_link.w.Sm}),"Small"),react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{size:component_library_button_link.w.Md}),"Medium"),react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{size:component_library_button_link.w.Lg}),"Large")),react.createElement(component_library.EY,{marginBottom:4},"Add paddingLeft and paddingRight props"),react.createElement(component_library.az,{display:design_system.nl.Flex,alignItems:design_system.k2.flexStart,gap:4,marginBottom:4},react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{paddingLeft:4,paddingRight:4,size:component_library_button_link.w.Auto}),"Auto (default)"),react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{paddingLeft:4,paddingRight:4,size:component_library_button_link.w.Sm}),"Small"),react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{paddingLeft:4,paddingRight:4,size:component_library_button_link.w.Md}),"Medium"),react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{paddingLeft:4,paddingRight:4,size:component_library_button_link.w.Lg}),"Large")),react.createElement(component_library.EY,{marginBottom:4},"Add block prop"),react.createElement(component_library_button_link.v,_object_spread_props(_object_spread({},args),{size:component_library_button_link.w.Lg,block:!0}),"Large block"))};HitArea.args={borderColor:design_system.cG.errorDefault,borderStyle:design_system.kD.dashed},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <ButtonLink {...args} />",...DefaultStory.parameters?.docs?.source}}},SizeStory.parameters={...SizeStory.parameters,docs:{...SizeStory.parameters?.docs,source:{originalSource:"args => <>\n    <Box display={Display.Flex} alignItems={AlignItems.flexStart} gap={4}>\n      <ButtonLink {...args} size={ButtonLinkSize.Auto}>\n        Auto (default)\n      </ButtonLink>\n      <ButtonLink {...args} size={ButtonLinkSize.Sm}>\n        Small\n      </ButtonLink>\n      <ButtonLink {...args} size={ButtonLinkSize.Md}>\n        Medium\n      </ButtonLink>\n      <ButtonLink {...args} size={ButtonLinkSize.Lg}>\n        Large\n      </ButtonLink>\n    </Box>\n    <Text variant={TextVariant.bodyLgMedium}>\n      Inherits the font-size of the parent element.{' '}\n      <ButtonLink {...args} size={ButtonLinkSize.Inherit}>\n        Learn more\n      </ButtonLink>\n    </Text>\n    <Text variant={TextVariant.bodyMd}>\n      Inherits the font-size of the parent element.{' '}\n      <ButtonLink {...args} size={ButtonLinkSize.Inherit}>\n        Learn more\n      </ButtonLink>\n    </Text>\n    <Text variant={TextVariant.bodySm}>\n      Inherits the font-size of the parent element.{' '}\n      <ButtonLink {...args} size={ButtonLinkSize.Inherit}>\n        Learn more\n      </ButtonLink>\n    </Text>\n    <Text variant={TextVariant.bodyXs}>\n      Inherits the font-size of the parent element and example with override for\n      a success color.{' '}\n      <ButtonLink {...args} size={ButtonLinkSize.Inherit} color={TextColor.successDefault}>\n        Learn more\n      </ButtonLink>\n    </Text>\n  </>",...SizeStory.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'args => <Box display={Display.Flex} gap={4}>\n    <ButtonLink {...args}>Normal</ButtonLink>\n    {/* Test Anchor tag to match exactly as button */}\n    <ButtonLink as="a" {...args} href="#" danger>\n      Danger\n    </ButtonLink>\n  </Box>',...Danger.parameters?.docs?.source}}},Href.parameters={...Href.parameters,docs:{...Href.parameters?.docs,source:{originalSource:"args => <ButtonLink {...args}>Href example</ButtonLink>",...Href.parameters?.docs?.source}}},ExternalLink.parameters={...ExternalLink.parameters,docs:{...ExternalLink.parameters?.docs,source:{originalSource:"args => <ButtonLink {...args}>Anchor element with external link</ButtonLink>",...ExternalLink.parameters?.docs?.source}}},HitArea.parameters={...HitArea.parameters,docs:{...HitArea.parameters?.docs,source:{originalSource:"args => <>\n    <Text marginBottom={4}>Default</Text>\n    <Box display={Display.Flex} alignItems={AlignItems.flexStart} gap={4} marginBottom={4}>\n      <ButtonLink {...args} size={ButtonLinkSize.Auto}>\n        Auto (default)\n      </ButtonLink>\n      <ButtonLink {...args} size={ButtonLinkSize.Sm}>\n        Small\n      </ButtonLink>\n      <ButtonLink {...args} size={ButtonLinkSize.Md}>\n        Medium\n      </ButtonLink>\n      <ButtonLink {...args} size={ButtonLinkSize.Lg}>\n        Large\n      </ButtonLink>\n    </Box>\n    <Text marginBottom={4}>Add paddingLeft and paddingRight props</Text>\n    <Box display={Display.Flex} alignItems={AlignItems.flexStart} gap={4} marginBottom={4}>\n      <ButtonLink {...args} paddingLeft={4} paddingRight={4} size={ButtonLinkSize.Auto}>\n        Auto (default)\n      </ButtonLink>\n      <ButtonLink {...args} paddingLeft={4} paddingRight={4} size={ButtonLinkSize.Sm}>\n        Small\n      </ButtonLink>\n      <ButtonLink {...args} paddingLeft={4} paddingRight={4} size={ButtonLinkSize.Md}>\n        Medium\n      </ButtonLink>\n      <ButtonLink {...args} paddingLeft={4} paddingRight={4} size={ButtonLinkSize.Lg}>\n        Large\n      </ButtonLink>\n    </Box>\n    <Text marginBottom={4}>Add block prop</Text>\n    <ButtonLink {...args} size={ButtonLinkSize.Lg} block>\n      Large block\n    </ButtonLink>\n  </>",...HitArea.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","SizeStory","Danger","Href","ExternalLink","HitArea"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=components-component-library-button-link-button-link-stories.d7cdbb41.iframe.bundle.js.map