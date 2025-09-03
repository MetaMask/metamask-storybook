"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[40787],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/avatar-token/avatar-token.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorBackgroundColorAndBorderColor:()=>ColorBackgroundColorAndBorderColor,DefaultStory:()=>DefaultStory,Name:()=>Name,ShowHalo:()=>ShowHalo,SizeStory:()=>SizeStory,Src:()=>Src,__namedExportsOrder:()=>__namedExportsOrder,default:()=>avatar_token_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),avatar_token=__webpack_require__("./ui/components/component-library/avatar-token/avatar-token.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"avatartoken",children:"AvatarToken"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarToken"})," is a component responsible for display of the image of a given token"]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-avatartoken--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:avatar_token.h}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarTokenSize"})," enum to change the size of ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarToken"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"IconSize.Sm"})]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Possible sizes include:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AvatarTokenSize.Xs"})," 16px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AvatarTokenSize.Sm"})," 24px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AvatarTokenSize.Md"})," 32px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AvatarTokenSize.Lg"})," 40px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"AvatarTokenSize.Xl"})," 48px"]}),`
`]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarTokenSize.Md"})]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The fallback display of the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarToken"})," is a circle with the initial letter of the network name. The size of the initial letter is calculated based on the size of the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarToken"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-avatartoken--size-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { AvatarToken, AvatarTokenSize } from '../../component-library';

<AvatarToken size={AvatarTokenSize.Xs} />
<AvatarToken size={AvatarTokenSize.Sm} />
<AvatarToken size={AvatarTokenSize.Md} />
<AvatarToken size={AvatarTokenSize.Lg} />
<AvatarToken size={AvatarTokenSize.Xl} />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"name",children:"Name"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"name"})," prop to set the initial letter of the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarToken"}),". This will be used as the fallback display if no image url is passed to the ",(0,jsx_runtime.jsx)(_components.code,{children:"src"})," prop."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component props to change the ",(0,jsx_runtime.jsx)(_components.code,{children:"variant"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"font-weight"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"font-family"}),", etc."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-avatartoken--name"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { AvatarToken } from '../../component-library';
<AvatarToken name="eth" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"src",children:"Src"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"src"})," prop to set the image to be rendered of the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarToken"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-avatartoken--src"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { AvatarToken } from '../../component-library';

<AvatarToken src="./images/eth_logo.svg" />
<AvatarToken src="./images/arbitrum.svg" />
<AvatarToken src="./images/bnb.png" />
<AvatarToken src="https://static.cx.metamask.io/api/v1/tokenIcons/1/0x6b175474e89094c44da98b954eedeac495271d0f.png" />
<AvatarToken src="https://static.cx.metamask.io/api/v1/tokenIcons/1/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png" />
<AvatarToken src="https://static.cx.metamask.io/api/v1/tokenIcons/1/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png" />
<AvatarToken src="https://i.seadn.io/gae/lSm8ChaI-3RqC9MTpi0j3KBXdfdPd57PN5UeQLY49JA3twy9wSt2dpaa22sSc6oyiXi2OEUR6GeFX8jwkZHEMADu6_Bd4EwTJ-rg?w=500&auto=format" />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"show-halo",children:"Show Halo"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"showHalo"})," prop to display the component with halo effect. Only works if an image url is supplied to ",(0,jsx_runtime.jsx)(_components.code,{children:"src"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-avatartoken--show-halo"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { AvatarToken } from '../../component-library';

<AvatarToken src="./images/eth_logo.svg" showHalo />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"color-background-color-and-border-color",children:"Color, Background Color And Border Color"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"color"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"backgroundColor"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"borderColor"})," props to set the text color, background-color and border-color of the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarToken"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-avatartoken--color-background-color-and-border-color"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextColor, BackgroundColor, BorderColor, } from '../../../helpers/constants/design-system';
import { AvatarToken } from '../../component-library';

<AvatarToken
    backgroundColor={BackgroundColor.goerli}
    borderColor={BorderColor.goerli}
    name="G"
    color={Color.primaryInverse}
>
  G
</AvatarToken>
<AvatarToken
  backgroundColor={BackgroundColor.sepolia}
  borderColor={BorderColor.sepolia}
  name="S"
  color={Color.primaryInverse}
>
  S
</AvatarToken>
`})})]})}var box=__webpack_require__("./ui/components/component-library/box/index.ts"),avatar_token_types=__webpack_require__("./ui/components/component-library/avatar-token/avatar-token.types.ts"),button_link=__webpack_require__("./ui/components/component-library/button-link/index.ts"),badge_wrapper=__webpack_require__("./ui/components/component-library/badge-wrapper/index.ts"),avatar_network=__webpack_require__("./ui/components/component-library/avatar-network/index.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let avatar_token_stories={title:"Components/ComponentLibrary/AvatarToken",component:avatar_token.h,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{size:{control:"select",options:Object.values(avatar_token_types.g)},color:{options:Object.values(design_system.r7),control:"select"},backgroundColor:{options:Object.values(design_system.i0),control:"select"},borderColor:{options:Object.values(design_system.cG),control:"select"},name:{control:"text"},src:{control:"text"},showHalo:{control:"boolean"}},args:{name:"eth",src:"./images/eth_logo.svg",size:avatar_token_types.g.Md,showHalo:!1}};var Template=function(args){return react.createElement(avatar_token.h,args)},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var SizeStory=function(args){return react.createElement(react.Fragment,null,react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.baseline,gap:2,marginBottom:4},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{size:avatar_token_types.g.Xs})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{size:avatar_token_types.g.Sm})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{size:avatar_token_types.g.Md})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{size:avatar_token_types.g.Lg})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{size:avatar_token_types.g.Xl}))),react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.flexEnd,gap:2,marginBottom:4},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{src:"",size:avatar_token_types.g.Xs})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{src:"",size:avatar_token_types.g.Sm})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{src:"",size:avatar_token_types.g.Md})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{src:"",size:avatar_token_types.g.Lg})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{src:"",size:avatar_token_types.g.Xl}))),react.createElement(component_library_text.EY,{marginBottom:4},"Sizes with"," ",react.createElement(button_link.v,{size:button_link.w.Inherit,href:"/docs/components-componentlibrary-buttonlink--default-story"},"AvatarNetwork")," ","and"," ",react.createElement(button_link.v,{size:button_link.w.Inherit,href:"/docs/components-componentlibrary-badgewrapper--default-story"},"BadgeWrapper")," ","components"),react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.flexEnd,gap:2,marginBottom:4},react.createElement(badge_wrapper.ph,{badge:react.createElement(avatar_network.G,{src:"./images/eth_logo.svg",name:"ETH",size:avatar_network.L.Xs,borderColor:design_system.cG.backgroundDefault,borderWidth:2})},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{name:"ETH",size:avatar_token_types.g.Xs}))),react.createElement(badge_wrapper.ph,{badge:react.createElement(avatar_network.G,{src:"./images/eth_logo.svg",name:"ETH",size:avatar_network.L.Xs,borderColor:design_system.cG.backgroundDefault,borderWidth:2})},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{name:"ETH",size:avatar_token_types.g.Sm}))),react.createElement(badge_wrapper.ph,{badge:react.createElement(avatar_network.G,{src:"./images/eth_logo.svg",name:"ETH",size:avatar_network.L.Xs,borderColor:design_system.cG.backgroundDefault,borderWidth:2})},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{name:"ETH",size:avatar_token_types.g.Md}))),react.createElement(badge_wrapper.ph,{badge:react.createElement(avatar_network.G,{src:"./images/eth_logo.svg",name:"ETH",size:avatar_network.L.Xs,borderColor:design_system.cG.backgroundDefault,borderWidth:2})},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{name:"ETH",size:avatar_token_types.g.Lg}))),react.createElement(badge_wrapper.ph,{badge:react.createElement(avatar_network.G,{src:"./images/eth_logo.svg",name:"ETH",size:avatar_network.L.Sm,borderColor:design_system.cG.backgroundDefault,borderWidth:2})},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{name:"ETH",size:avatar_token_types.g.Xl})))),react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.flexEnd,gap:2},react.createElement(badge_wrapper.ph,{badge:react.createElement(avatar_network.G,{name:"ETH",size:avatar_network.L.Xs,borderColor:design_system.cG.backgroundDefault,borderWidth:2})},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{src:"",name:"ETH",size:avatar_token_types.g.Xs,borderColor:design_system.cG.borderDefault,borderWidth:2}))),react.createElement(badge_wrapper.ph,{badge:react.createElement(avatar_network.G,{name:"ETH",size:avatar_network.L.Xs,borderColor:design_system.cG.backgroundDefault,borderWidth:2})},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{name:"ETH",src:"",size:avatar_token_types.g.Sm,borderColor:design_system.cG.borderDefault,borderWidth:2}))),react.createElement(badge_wrapper.ph,{badge:react.createElement(avatar_network.G,{name:"ETH",size:avatar_network.L.Xs,borderColor:design_system.cG.backgroundDefault,borderWidth:2})},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{name:"ETH",src:"",size:avatar_token_types.g.Md,borderColor:design_system.cG.borderDefault,borderWidth:2}))),react.createElement(badge_wrapper.ph,{badge:react.createElement(avatar_network.G,{name:"ETH",size:avatar_network.L.Xs,borderColor:design_system.cG.backgroundDefault,borderWidth:2})},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{name:"ETH",src:"",size:avatar_token_types.g.Lg,borderColor:design_system.cG.borderDefault,borderWidth:2}))),react.createElement(badge_wrapper.ph,{badge:react.createElement(avatar_network.G,{name:"ETH",size:avatar_network.L.Sm,borderColor:design_system.cG.backgroundDefault,borderWidth:2})},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{name:"ETH",src:"",size:avatar_token_types.g.Xl,borderColor:design_system.cG.borderDefault,borderWidth:2})))))};SizeStory.storyName="Size";var Name=Template.bind({});Name.args={src:""};var Src=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,gap:1},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{src:"./images/eth_logo.svg"})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{src:"./images/arbitrum.svg"})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{src:"./images/bnb.png"})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{src:"https://static.cx.metamask.io/api/v1/tokenIcons/1/0x6b175474e89094c44da98b954eedeac495271d0f.png"})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{src:"https://static.cx.metamask.io/api/v1/tokenIcons/1/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png"})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{src:"https://static.cx.metamask.io/api/v1/tokenIcons/1/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png"})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{src:"https://i.seadn.io/gae/lSm8ChaI-3RqC9MTpi0j3KBXdfdPd57PN5UeQLY49JA3twy9wSt2dpaa22sSc6oyiXi2OEUR6GeFX8jwkZHEMADu6_Bd4EwTJ-rg?w=500&auto=format"})))},ShowHalo=Template.bind({});ShowHalo.args={showHalo:!0};var ColorBackgroundColorAndBorderColor=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,gap:1},react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{backgroundColor:design_system.i0.goerli,borderColor:design_system.cG.goerli,name:"G",color:design_system.r7.primaryInverse})),react.createElement(avatar_token.h,_object_spread_props(_object_spread({},args),{backgroundColor:design_system.i0.sepolia,borderColor:design_system.cG.sepolia,name:"S",color:design_system.r7.primaryInverse})))};ColorBackgroundColorAndBorderColor.args={src:""},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  return <AvatarToken {...args} />;
}`,...DefaultStory.parameters?.docs?.source}}},SizeStory.parameters={...SizeStory.parameters,docs:{...SizeStory.parameters?.docs,source:{originalSource:`args => <>
    <Box display={Display.Flex} alignItems={AlignItems.baseline} gap={2} marginBottom={4}>
      <AvatarToken {...args} size={AvatarTokenSize.Xs} />
      <AvatarToken {...args} size={AvatarTokenSize.Sm} />
      <AvatarToken {...args} size={AvatarTokenSize.Md} />
      <AvatarToken {...args} size={AvatarTokenSize.Lg} />
      <AvatarToken {...args} size={AvatarTokenSize.Xl} />
    </Box>
    <Box display={Display.Flex} alignItems={AlignItems.flexEnd} gap={2} marginBottom={4}>
      <AvatarToken {...args} src="" size={AvatarTokenSize.Xs} />
      <AvatarToken {...args} src="" size={AvatarTokenSize.Sm} />
      <AvatarToken {...args} src="" size={AvatarTokenSize.Md} />
      <AvatarToken {...args} src="" size={AvatarTokenSize.Lg} />
      <AvatarToken {...args} src="" size={AvatarTokenSize.Xl} />
    </Box>
    <Text marginBottom={4}>
      Sizes with{' '}
      <ButtonLink size={ButtonLinkSize.Inherit} href="/docs/components-componentlibrary-buttonlink--default-story">
        AvatarNetwork
      </ButtonLink>{' '}
      and{' '}
      <ButtonLink size={ButtonLinkSize.Inherit} href="/docs/components-componentlibrary-badgewrapper--default-story">
        BadgeWrapper
      </ButtonLink>{' '}
      components
    </Text>
    <Box display={Display.Flex} alignItems={AlignItems.flexEnd} gap={2} marginBottom={4}>
      <BadgeWrapper badge={<AvatarNetwork src="./images/eth_logo.svg" name="ETH" size={AvatarNetworkSize.Xs} borderColor={BorderColor.backgroundDefault} borderWidth={2} />}>
        <AvatarToken {...args} name="ETH" size={AvatarTokenSize.Xs} />
      </BadgeWrapper>
      <BadgeWrapper badge={<AvatarNetwork src="./images/eth_logo.svg" name="ETH" size={AvatarNetworkSize.Xs} borderColor={BorderColor.backgroundDefault} borderWidth={2} />}>
        <AvatarToken {...args} name="ETH" size={AvatarTokenSize.Sm} />
      </BadgeWrapper>
      <BadgeWrapper badge={<AvatarNetwork src="./images/eth_logo.svg" name="ETH" size={AvatarNetworkSize.Xs} borderColor={BorderColor.backgroundDefault} borderWidth={2} />}>
        <AvatarToken {...args} name="ETH" size={AvatarTokenSize.Md} />
      </BadgeWrapper>
      <BadgeWrapper badge={<AvatarNetwork src="./images/eth_logo.svg" name="ETH" size={AvatarNetworkSize.Xs} borderColor={BorderColor.backgroundDefault} borderWidth={2} />}>
        <AvatarToken {...args} name="ETH" size={AvatarTokenSize.Lg} />
      </BadgeWrapper>
      <BadgeWrapper badge={<AvatarNetwork src="./images/eth_logo.svg" name="ETH" size={AvatarNetworkSize.Sm} borderColor={BorderColor.backgroundDefault} borderWidth={2} />}>
        <AvatarToken {...args} name="ETH" size={AvatarTokenSize.Xl} />
      </BadgeWrapper>
    </Box>
    <Box display={Display.Flex} alignItems={AlignItems.flexEnd} gap={2}>
      <BadgeWrapper badge={<AvatarNetwork name="ETH" size={AvatarNetworkSize.Xs} borderColor={BorderColor.backgroundDefault} borderWidth={2} />}>
        <AvatarToken {...args} src="" name="ETH" size={AvatarTokenSize.Xs} borderColor={BorderColor.borderDefault} borderWidth={2} />
      </BadgeWrapper>
      <BadgeWrapper badge={<AvatarNetwork name="ETH" size={AvatarNetworkSize.Xs} borderColor={BorderColor.backgroundDefault} borderWidth={2} />}>
        <AvatarToken {...args} name="ETH" src="" size={AvatarTokenSize.Sm} borderColor={BorderColor.borderDefault} borderWidth={2} />
      </BadgeWrapper>
      <BadgeWrapper badge={<AvatarNetwork name="ETH" size={AvatarNetworkSize.Xs} borderColor={BorderColor.backgroundDefault} borderWidth={2} />}>
        <AvatarToken {...args} name="ETH" src="" size={AvatarTokenSize.Md} borderColor={BorderColor.borderDefault} borderWidth={2} />
      </BadgeWrapper>
      <BadgeWrapper badge={<AvatarNetwork name="ETH" size={AvatarNetworkSize.Xs} borderColor={BorderColor.backgroundDefault} borderWidth={2} />}>
        <AvatarToken {...args} name="ETH" src="" size={AvatarTokenSize.Lg} borderColor={BorderColor.borderDefault} borderWidth={2} />
      </BadgeWrapper>
      <BadgeWrapper badge={<AvatarNetwork name="ETH" size={AvatarNetworkSize.Sm} borderColor={BorderColor.backgroundDefault} borderWidth={2} />}>
        <AvatarToken {...args} name="ETH" src="" size={AvatarTokenSize.Xl} borderColor={BorderColor.borderDefault} borderWidth={2} />
      </BadgeWrapper>
    </Box>
  </>`,...SizeStory.parameters?.docs?.source}}},Name.parameters={...Name.parameters,docs:{...Name.parameters?.docs,source:{originalSource:`args => {
  return <AvatarToken {...args} />;
}`,...Name.parameters?.docs?.source}}},Src.parameters={...Src.parameters,docs:{...Src.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} gap={1}>
    <AvatarToken {...args} src="./images/eth_logo.svg" />
    <AvatarToken {...args} src="./images/arbitrum.svg" />
    <AvatarToken {...args} src="./images/bnb.png" />
    <AvatarToken {...args} src="https://static.cx.metamask.io/api/v1/tokenIcons/1/0x6b175474e89094c44da98b954eedeac495271d0f.png" />
    <AvatarToken {...args} src="https://static.cx.metamask.io/api/v1/tokenIcons/1/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png" />
    <AvatarToken {...args} src="https://static.cx.metamask.io/api/v1/tokenIcons/1/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png" />
    <AvatarToken {...args} src="https://i.seadn.io/gae/lSm8ChaI-3RqC9MTpi0j3KBXdfdPd57PN5UeQLY49JA3twy9wSt2dpaa22sSc6oyiXi2OEUR6GeFX8jwkZHEMADu6_Bd4EwTJ-rg?w=500&auto=format" />
  </Box>`,...Src.parameters?.docs?.source}}},ShowHalo.parameters={...ShowHalo.parameters,docs:{...ShowHalo.parameters?.docs,source:{originalSource:`args => {
  return <AvatarToken {...args} />;
}`,...ShowHalo.parameters?.docs?.source}}},ColorBackgroundColorAndBorderColor.parameters={...ColorBackgroundColorAndBorderColor.parameters,docs:{...ColorBackgroundColorAndBorderColor.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} gap={1}>
    <AvatarToken {...args} backgroundColor={BackgroundColor.goerli} borderColor={BorderColor.goerli} name="G" color={TextColor.primaryInverse} />
    <AvatarToken {...args} backgroundColor={BackgroundColor.sepolia} borderColor={BorderColor.sepolia} name="S" color={TextColor.primaryInverse} />
  </Box>`,...ColorBackgroundColorAndBorderColor.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","SizeStory","Name","Src","ShowHalo","ColorBackgroundColorAndBorderColor"]}}]);
//# sourceMappingURL=components-component-library-avatar-token-avatar-token-stories.3dab9392.iframe.bundle.js.map