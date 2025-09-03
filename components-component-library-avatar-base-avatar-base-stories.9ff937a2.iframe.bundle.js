"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[61043],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/avatar-base/avatar-base.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,ColorBackgroundColorAndBorderColor:()=>ColorBackgroundColorAndBorderColor,DefaultStory:()=>DefaultStory,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>avatar_base_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),avatar_base_types=__webpack_require__("./ui/components/component-library/avatar-base/avatar-base.types.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),avatar_base=__webpack_require__("./ui/components/component-library/avatar-base/avatar-base.tsx");function _createMdxContent(props){let _components=Object.assign({h3:"h3",h1:"h1",p:"p",code:"code",a:"a",h2:"h2",ul:"ul",li:"li",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h3,{id:"this-is-a-base-component-it-should-not-be-used-in-your-feature-code-directly-but-as-a-base-for-other-ui-components",children:'This is a base component. It should not be used in your feature code directly but as a "base" for other UI components'}),`
`,(0,jsx_runtime.jsx)(_components.h1,{id:"avatarbase",children:"AvatarBase"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarBase"})," is a wrapper component responsible for enforcing dimensions and border radius for Avatar components"]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-avatarbase--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:avatar_base.d}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop to set the size of the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarBase"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Possible sizes include:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"xs"})," 16px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"sm"})," 24px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"md"})," 32px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"lg"})," 40px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"xl"})," 48px"]}),`
`]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"md"})]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The text styles of the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarBase"})," is based on the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop. To override this use the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component's ",(0,jsx_runtime.jsx)(_components.code,{children:"variant"})," prop. ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarBase"})," also accepts all ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component props."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-avatarbase--size"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { AvatarBaseSize } from '../ui/component-library/avatar-base/avatar-base.types';
import { AvatarBase } from '../../component-library/avatar-base';
<AvatarBase size={AvatarBaseSize.XS} />
<AvatarBase size={AvatarBaseSize.SM} />
<AvatarBase size={AvatarBaseSize.MD} />
<AvatarBase size={AvatarBaseSize.LG} />
<AvatarBase size={AvatarBaseSize.XL} />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarBase"})," component can contain images, icons or text"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-avatarbase--children"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { AvatarBase } from '../../component-library';
<AvatarBase>
  <img src="./images/eth_logo.svg" />
</AvatarBase>
<AvatarBase>
  <img width="100%" src="./images/arbitrum.svg" />
</AvatarBase>
<AvatarBase>
  <img width="100%" src="./images/avax-token.svg" />
</AvatarBase>
<AvatarBase>A</AvatarBase>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"color-background-color-and-border-color",children:"Color, Background Color And Border Color"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"color"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"backgroundColor"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"borderColor"})," props to set the text color, background-color and border-color of the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarBase"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-avatarbase--color-background-color-and-border-color"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {   TextColor,
           BackgroundColor,
           BorderColor } from '../../../helpers/constants/design-system';
import { AvatarBase } from '../../component-library';
<AvatarBase>B</AvatarBase>
<AvatarBase
    backgroundColor={BackgroundColor.goerli}
    borderColor={BorderColor.goerli}
    color={TextColor.primaryInverse}
  >
  G
</AvatarBase>
<AvatarBase
   backgroundColor={BackgroundColor.sepolia}
   borderColor={BorderColor.sepolia}
   color={TextColor.primaryInverse}
>
  S
</AvatarBase>
`})})]})}var box=__webpack_require__("./ui/components/component-library/box/index.ts"),icon=__webpack_require__("./ui/components/component-library/icon/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var marginSizeKnobOptions=[0,1,2,3,4,5,6,7,8,9,10,11,12,"auto"];let avatar_base_stories={title:"Components/ComponentLibrary/AvatarBase",component:avatar_base.d,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{size:{control:"select",options:Object.values(avatar_base_types.S)},children:{control:"text"},color:{options:Object.values(design_system.r7),control:"select"},backgroundColor:{options:Object.values(design_system.i0),control:"select"},borderColor:{options:Object.values(design_system.cG),control:"select"},display:{options:Object.values(design_system.nl),control:"select",table:{category:"box props"}},marginTop:{options:marginSizeKnobOptions,control:"select",table:{category:"box props"}},marginRight:{options:marginSizeKnobOptions,control:"select",table:{category:"box props"}},marginBottom:{options:marginSizeKnobOptions,control:"select",table:{category:"box props"}},marginLeft:{options:marginSizeKnobOptions,control:"select",table:{category:"box props"}}},args:{size:avatar_base_types.S.Md,color:design_system.r7.textDefault,backgroundColor:design_system.i0.backgroundAlternative,borderColor:design_system.cG.borderDefault,children:"B"}};var DefaultStory=function(args){return react.createElement(avatar_base.d,args)};DefaultStory.storyName="Default";var Size=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.baseline,gap:1},react.createElement(avatar_base.d,_object_spread_props(_object_spread({},args),{size:avatar_base_types.S.Xs})),react.createElement(avatar_base.d,_object_spread_props(_object_spread({},args),{size:avatar_base_types.S.Sm})),react.createElement(avatar_base.d,_object_spread_props(_object_spread({},args),{size:avatar_base_types.S.Md})),react.createElement(avatar_base.d,_object_spread_props(_object_spread({},args),{size:avatar_base_types.S.Lg})),react.createElement(avatar_base.d,_object_spread_props(_object_spread({},args),{size:avatar_base_types.S.Xl})))},Children=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,gap:1},react.createElement(avatar_base.d,args,react.createElement("img",{src:"./images/eth_logo.svg"})),react.createElement(avatar_base.d,args,react.createElement("img",{width:"100%",src:"./images/arbitrum.svg"})),react.createElement(avatar_base.d,args,react.createElement("img",{width:"100%",src:"./images/avax-token.svg"})),react.createElement(avatar_base.d,args,"A"),react.createElement(avatar_base.d,_object_spread_props(_object_spread({},args),{backgroundColor:design_system.i0.infoMuted,borderColor:design_system.cG.infoMuted}),react.createElement(icon.In,{name:icon.$M.User,color:design_system.Li.infoDefault})))},ColorBackgroundColorAndBorderColor=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,gap:1},react.createElement(avatar_base.d,args,"B"),react.createElement(avatar_base.d,_object_spread_props(_object_spread({},args),{backgroundColor:design_system.i0.goerli,borderColor:design_system.cG.goerli,color:design_system.r7.primaryInverse}),"G"),react.createElement(avatar_base.d,_object_spread_props(_object_spread({},args),{backgroundColor:design_system.i0.sepolia,borderColor:design_system.cG.sepolia,color:design_system.r7.primaryInverse}),"S"))};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <AvatarBase {...args} />",...DefaultStory.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} alignItems={AlignItems.baseline} gap={1}>
    <AvatarBase {...args} size={AvatarBaseSize.Xs} />
    <AvatarBase {...args} size={AvatarBaseSize.Sm} />
    <AvatarBase {...args} size={AvatarBaseSize.Md} />
    <AvatarBase {...args} size={AvatarBaseSize.Lg} />
    <AvatarBase {...args} size={AvatarBaseSize.Xl} />
  </Box>`,...Size.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} gap={1}>
    <AvatarBase {...args}>
      <img src="./images/eth_logo.svg" />
    </AvatarBase>
    <AvatarBase {...args}>
      <img width="100%" src="./images/arbitrum.svg" />
    </AvatarBase>
    <AvatarBase {...args}>
      <img width="100%" src="./images/avax-token.svg" />
    </AvatarBase>
    <AvatarBase {...args}>A</AvatarBase>
    <AvatarBase {...args} backgroundColor={BackgroundColor.infoMuted} borderColor={BorderColor.infoMuted}>
      <Icon name={IconName.User} color={IconColor.infoDefault} />
    </AvatarBase>
  </Box>`,...Children.parameters?.docs?.source}}},ColorBackgroundColorAndBorderColor.parameters={...ColorBackgroundColorAndBorderColor.parameters,docs:{...ColorBackgroundColorAndBorderColor.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} gap={1}>
    <AvatarBase {...args}>B</AvatarBase>
    <AvatarBase {...args} backgroundColor={BackgroundColor.goerli} borderColor={BorderColor.goerli} color={TextColor.primaryInverse}>
      G
    </AvatarBase>
    <AvatarBase {...args} backgroundColor={BackgroundColor.sepolia} borderColor={BorderColor.sepolia} color={TextColor.primaryInverse}>
      S
    </AvatarBase>
  </Box>`,...ColorBackgroundColorAndBorderColor.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Size","Children","ColorBackgroundColorAndBorderColor"]}}]);
//# sourceMappingURL=components-component-library-avatar-base-avatar-base-stories.9ff937a2.iframe.bundle.js.map