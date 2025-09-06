"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[25923],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/badge-wrapper/badge-wrapper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnchorElementShape:()=>AnchorElementShape,Badge:()=>Badge,Children:()=>Children,DefaultStory:()=>DefaultStory,Position:()=>Position,PositionObj:()=>PositionObj,__namedExportsOrder:()=>__namedExportsOrder,default:()=>badge_wrapper_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),badge_wrapper_types=__webpack_require__("./ui/components/component-library/badge-wrapper/badge-wrapper.types.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),badge_wrapper=__webpack_require__("./ui/components/component-library/badge-wrapper/badge-wrapper.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"badgewrapper",children:"BadgeWrapper"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"BadgeWrapper"})," positions a badge on top of another component"]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-badgewrapper--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:badge_wrapper.p}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," prop to define the element to be wrapped by the ",(0,jsx_runtime.jsx)(_components.code,{children:"BadgeWrapper"}),". This element will be what the badge is positioned on top of."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-badgewrapper--children"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Color, Size } from '../../../helpers/constants/design-system';

import {
  AvatarAccount,
  AvatarNetwork,
  AvatarNetworkSize,
  AvatarToken,
  BadgeWrapper,
  BadgeWrapperAnchorElementShape,
  BadgeWrapperPosition,
} from '../../component-library';

<BadgeWrapper
  badge={
    <AvatarNetwork
      size={AvatarNetworkSize.Xs}
      name="Avalanche"
      src="./images/avax-token.svg"
      borderColor={BorderColor.borderMuted}
    />
  }
>
  <AvatarAccount
    address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
  />
</BadgeWrapper>
<BadgeWrapper
  badge={
    <AvatarNetwork
      size={AvatarNetworkSize.Xs}
      name="Avalanche"
      src="./images/avax-token.svg"
      borderColor={BorderColor.borderMuted}
    />
  }
>
  <AvatarToken
    name="Eth"
    src="./images/eth_logo.svg"
    borderColor={BorderColor.borderMuted}
  />
</BadgeWrapper>
<BadgeWrapper
  badge={
    <AvatarNetwork
      size={AvatarNetworkSize.Sm}
      name="Avalanche"
      src="./images/avax-token.svg"
      borderColor={BorderColor.borderMuted}
    />
  }
  anchorElementShape={BadgeWrapperAnchorElementShape.rectangular}
>
  <Box
    as="img"
    src="./catnip-spicywright.png"
    borderRadius={BorderRadius.SM}
    borderColor={BorderColor.borderMuted}
    style={{ width: 100, height: 100 }}
  />
</BadgeWrapper>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"badge",children:"Badge"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"badge"})," prop to define the badge component to be rendered on top of the ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," component."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["To access the component containing the badge, use the ",(0,jsx_runtime.jsx)(_components.code,{children:"badgeContainerProps"})," prop. The wrapping component is a ",(0,jsx_runtime.jsx)(_components.code,{children:"Box"})," and accepts all box props."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-badgewrapper--badge"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`
import {
  BorderColor,
  BorderRadius,
  Color,
  IconColor,
  Size,
} from '../../../helpers/constants/design-system';

import {
  AvatarAccount,
  AvatarNetwork,
  AvatarNetworkSize,
  BadgeWrapper,
  BadgeWrapperAnchorElementShape,
  Icon,
  IconSize,
  IconName,
  Tag,
} from '../../component-library';

<BadgeWrapper
  badge={
    <AvatarNetwork
      size={AvatarNetworkSize.Xs}
      name="Avalanche"
      src="./images/avax-token.svg"
      borderColor={BorderColor.borderMuted}
    />
  }
>
  <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />
</BadgeWrapper>
<BadgeWrapper
  badge={
    <Box
      backgroundColor={Color.successDefault}
      borderRadius={BorderRadius.full}
      borderColor={BorderColor.borderMuted}
      borderWidth={2}
      style={{ width: 12, height: 12 }}
    />
  }
>
  <Icon
    name={IconName.Global}
    size={IconSize.Xl}
    color={IconColor.iconAlternative}
  />
</BadgeWrapper>
<Box
  paddingTop={1}
  paddingBottom={1}
  paddingRight={1}
  paddingLeft={1}
  backgroundColor={Color.backgroundAlternative}
  borderRadius={BorderRadius.SM}
  style={{ alignSelf: 'flex-start' }}
>
  <BadgeWrapper
    badge={
      <Tag
        label="9999"
        backgroundColor={Color.errorDefault}
        labelProps={{ color: Color.errorInverse }}
        borderColor={BorderColor.errorDefault}
      />
    }
    anchorElementShape={BadgeWrapperAnchorElementShape.rectangular}
  >
    <Box
      paddingTop={1}
      paddingBottom={1}
      paddingRight={8}
      paddingLeft={8}
      borderRadius={BorderRadius.SM}
      borderColor={BorderColor.borderDefault}
      backgroundColor={Color.backgroundDefault}
    >
      NFTs
    </Box>
  </BadgeWrapper>
</Box>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"position",children:"Position"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"position"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"BadgeWrapperPosition"})," enum to set the position of the badge. Possible positions are:"]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["top left ",(0,jsx_runtime.jsx)(_components.code,{children:"BadgeWrapperPosition.topLeft"})]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["top right ",(0,jsx_runtime.jsx)(_components.code,{children:"BadgeWrapperPosition.topRight"})]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["bottom left ",(0,jsx_runtime.jsx)(_components.code,{children:"BadgeWrapperPosition.bottomLeft"})]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["bottom right ",(0,jsx_runtime.jsx)(_components.code,{children:"BadgeWrapperPosition.bottomRight"})]}),`
`]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["If you require a custom position, you can use the ",(0,jsx_runtime.jsx)(_components.code,{children:"positionObj"})," prop see ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-badgewrapper--position-obj#position-obj",children:"Position Obj"})," for more details."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-badgewrapper--position"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { BorderColor Size } from '../../../helpers/constants/design-system';

import {
  AvatarAccount,
  AvatarNetwork,
  AvatarNetworkSize,
  BadgeWrapper,
  BadgeWrapperPosition
} from '../../component-library';

<BadgeWrapper
  position={BadgeWrapperPosition.topLeft}
  badge={
    <AvatarNetwork
      size={AvatarNetworkSize.Xs}
      name="Avalanche"
      src="./images/avax-token.svg"
      borderColor={BorderColor.borderMuted}
    />
  }
>
  <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />
</BadgeWrapper>
<BadgeWrapper
  badge={
    <AvatarNetwork
      size={AvatarNetworkSize.Xs}
      name="Avalanche"
      src="./images/avax-token.svg"
      borderColor={BorderColor.borderMuted}
    />
  }
>
  <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />
</BadgeWrapper>
<BadgeWrapper
  position={BadgeWrapperPosition.bottomLeft}
  badge={
    <AvatarNetwork
      size={AvatarNetworkSize.Xs}
      name="Avalanche"
      src="./images/avax-token.svg"
      borderColor={BorderColor.borderMuted}
    />
  }
>
  <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />
</BadgeWrapper>
<BadgeWrapper
  position={BadgeWrapperPosition.bottomRight}
  badge={
    <AvatarNetwork
      size={AvatarNetworkSize.Xs}
      name="Avalanche"
      src="./images/avax-token.svg"
      borderColor={BorderColor.borderMuted}
    />
  }
>
  <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />
</BadgeWrapper>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"position-obj",children:"Position Obj"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"positionObj"})," prop to set a custom position for the badge. The ",(0,jsx_runtime.jsx)(_components.code,{children:"positionObj"})," prop takes an object with the following properties:"]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"top"})," - the top position of the badge"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"right"})," - the right position of the badge"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"bottom"})," - the bottom position of the badge"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"left"})," - the left position of the badge"]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-badgewrapper--position-obj"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { BorderColor Size } from '../../../helpers/constants/design-system';

import {
  AvatarAccount,
  AvatarNetwork,
  AvatarNetworkSize,
  BadgeWrapper,
} from '../../component-library';


<BadgeWrapper
  badge={
    <AvatarNetwork
      size={AvatarNetworkSize.Xs}
      name="Avalanche"
      src="./images/avax-token.svg"
      borderColor={BorderColor.borderMuted}
    />
  }
  positionObj={{ top: 4, right: -8 }}
>
  <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"/>
</BadgeWrapper>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"anchor-element-shape",children:"Anchor Element Shape"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"anchorElementShape"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"BadgeWrapperAnchorElementShape"})," enum to set the badge position relative to the shape of the anchor element. Possible shapes are:"]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["circular ",(0,jsx_runtime.jsx)(_components.code,{children:"BadgeWrapperAnchorElementShape.circular"})]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["rectangular ",(0,jsx_runtime.jsx)(_components.code,{children:"BadgeWrapperAnchorElementShape.rectangular"})]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-badgewrapper--anchor-element-shape"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import Box from '../../ui/box/box';

import { BorderRadius, Color } from '../../../helpers/constants/design-system';

import { BadgeWrapper, BadgeWrapperAnchorElementShape } from '../../component-library';

<BadgeWrapper
  badge={
    <Box
      backgroundColor={Color.errorDefault}
      borderRadius={BorderRadius.full}
      style={{ width: 16, height: 16 }}
    />
  }
>
  <Box
    backgroundColor={Color.infoDefault}
    borderRadius={BorderRadius.full}
    style={{ width: 40, height: 40 }}
  />
</BadgeWrapper>
<BadgeWrapper
  badge={
    <Box
      backgroundColor={Color.errorDefault}
      borderRadius={BorderRadius.full}
      style={{ width: 8, height: 8 }}
    />
  }
>
  <Box
    backgroundColor={Color.infoDefault}
    borderRadius={BorderRadius.full}
    style={{ width: 40, height: 40 }}
  />
</BadgeWrapper>
<BadgeWrapper
  anchorElementShape={BadgeWrapperAnchorElementShape.rectangular}
  badge={
    <Box
      backgroundColor={Color.errorDefault}
      borderRadius={BorderRadius.full}
      style={{ width: 16, height: 16 }}
    />
  }
>
  <Box
    backgroundColor={Color.infoDefault}
    style={{ width: 40, height: 40 }}
  />
</BadgeWrapper>
<BadgeWrapper
  anchorElementShape={BadgeWrapperAnchorElementShape.rectangular}
  badge={
    <Box
      backgroundColor={Color.errorDefault}
      borderRadius={BorderRadius.full}
      style={{ width: 8, height: 8 }}
    />
  }
>
  <Box
    backgroundColor={Color.infoDefault}
    style={{ width: 40, height: 40 }}
  />
</BadgeWrapper>
`})})]})}var avatar_network=__webpack_require__("./ui/components/component-library/avatar-network/index.ts"),avatar_account=__webpack_require__("./ui/components/component-library/avatar-account/index.ts"),avatar_token=__webpack_require__("./ui/components/component-library/avatar-token/index.ts"),box=__webpack_require__("./ui/components/ui/box/box.js"),icon=__webpack_require__("./ui/components/component-library/icon/index.ts"),tag=__webpack_require__("./ui/components/component-library/tag/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}let badge_wrapper_stories={title:"Components/ComponentLibrary/BadgeWrapper",component:badge_wrapper.p,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{children:{control:"text"},badge:{control:"text"},position:{options:Object.values(badge_wrapper_types.u),control:"select"},positionObj:{control:"object"},anchorElementShape:{options:Object.values(badge_wrapper_types.H),control:"select"},className:{control:"text"}}};var DefaultStory=(function(args){return react.createElement(badge_wrapper.p,_object_spread({badge:react.createElement(avatar_network.G,{size:avatar_network.L.Xs,name:"Avalanche",src:"./images/avax-token.svg",borderColor:design_system.cG.borderMuted})},args),args.children?args.children:react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"}))}).bind({});DefaultStory.storyName="Default";var Children=function(){return react.createElement(box.Ay,{display:design_system.Nu.FLEX,gap:4},react.createElement(badge_wrapper.p,{badge:react.createElement(avatar_network.G,{size:avatar_network.L.Xs,name:"Avalanche",src:"./images/avax-token.svg",borderColor:design_system.cG.borderMuted})},react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"})),react.createElement(badge_wrapper.p,{badge:react.createElement(avatar_network.G,{size:avatar_network.L.Xs,name:"Avalanche",src:"./images/avax-token.svg",borderColor:design_system.cG.borderMuted})},react.createElement(avatar_token.h,{name:"Eth",src:"./images/eth_logo.svg",borderColor:design_system.cG.borderMuted})),react.createElement(badge_wrapper.p,{badge:react.createElement(avatar_network.G,{size:avatar_network.L.Sm,name:"Avalanche",src:"./images/avax-token.svg",borderColor:design_system.cG.borderMuted}),anchorElementShape:badge_wrapper_types.H.rectangular},react.createElement(box.Ay,{as:"img",src:"./catnip-spicywright.png",borderRadius:design_system.Z6.SM,borderColor:design_system.cG.borderMuted,style:{width:100,height:100}})))},Badge=function(){return react.createElement(box.Ay,{display:design_system.Nu.FLEX,gap:4},react.createElement(badge_wrapper.p,{badge:react.createElement(avatar_network.G,{size:avatar_network.L.Xs,name:"Avalanche",src:"./images/avax-token.svg",borderColor:design_system.cG.borderMuted})},react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"})),react.createElement(badge_wrapper.p,{badge:react.createElement(box.Ay,{backgroundColor:design_system.i0.successDefault,borderRadius:design_system.Z6.full,borderColor:design_system.cG.borderMuted,borderWidth:2,style:{width:12,height:12}})},react.createElement(icon.In,{name:icon.$M.Global,size:icon.lK.Xl,color:design_system.Li.iconAlternative})),react.createElement(box.Ay,{paddingTop:1,paddingBottom:1,paddingRight:1,paddingLeft:1,backgroundColor:design_system.i0.backgroundAlternative,borderRadius:design_system.Z6.SM,style:{alignSelf:"flex-start"}},react.createElement(badge_wrapper.p,{badge:react.createElement(tag.v,{label:"9999",backgroundColor:design_system.i0.errorDefault,labelProps:{color:design_system.r7.errorInverse},borderColor:design_system.cG.errorDefault}),anchorElementShape:badge_wrapper_types.H.rectangular},react.createElement(box.Ay,{paddingTop:1,paddingBottom:1,paddingRight:8,paddingLeft:8,borderRadius:design_system.Z6.SM,borderColor:design_system.cG.borderDefault,backgroundColor:design_system.i0.backgroundDefault},"NFTs"))))},Position=function(){return react.createElement(box.Ay,{display:design_system.Nu.FLEX,gap:4},react.createElement(badge_wrapper.p,{position:badge_wrapper_types.u.topLeft,badge:react.createElement(avatar_network.G,{size:avatar_network.L.Xs,name:"Avalanche",src:"./images/avax-token.svg",borderColor:design_system.cG.borderMuted})},react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"})),react.createElement(badge_wrapper.p,{badge:react.createElement(avatar_network.G,{size:avatar_network.L.Xs,name:"Avalanche",src:"./images/avax-token.svg",borderColor:design_system.cG.borderMuted})},react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"})),react.createElement(badge_wrapper.p,{position:badge_wrapper_types.u.bottomLeft,badge:react.createElement(avatar_network.G,{size:avatar_network.L.Xs,name:"Avalanche",src:"./images/avax-token.svg",borderColor:design_system.cG.borderMuted})},react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"})),react.createElement(badge_wrapper.p,{position:badge_wrapper_types.u.bottomRight,badge:react.createElement(avatar_network.G,{size:avatar_network.L.Xs,name:"Avalanche",src:"./images/avax-token.svg",borderColor:design_system.cG.borderMuted})},react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"})))},PositionObj=function(){return react.createElement(box.Ay,{display:design_system.Nu.FLEX,alignItems:design_system.k2.baseline,gap:4},react.createElement(badge_wrapper.p,{badge:react.createElement(avatar_network.G,{size:avatar_network.L.Xs,name:"Avalanche",src:"./images/avax-token.svg",borderColor:design_system.cG.borderMuted}),positionObj:{top:4,right:-8}},react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"})))},AnchorElementShape=function(){return react.createElement(box.Ay,{display:design_system.Nu.FLEX,gap:4},react.createElement(badge_wrapper.p,{badge:react.createElement(box.Ay,{backgroundColor:design_system.i0.errorDefault,borderRadius:design_system.Z6.full,style:{width:16,height:16}})},react.createElement(box.Ay,{backgroundColor:design_system.i0.infoDefault,borderRadius:design_system.Z6.full,style:{width:40,height:40}})),react.createElement(badge_wrapper.p,{badge:react.createElement(box.Ay,{backgroundColor:design_system.i0.errorDefault,borderRadius:design_system.Z6.full,style:{width:8,height:8}})},react.createElement(box.Ay,{backgroundColor:design_system.i0.infoDefault,borderRadius:design_system.Z6.full,style:{width:40,height:40}})),react.createElement(badge_wrapper.p,{anchorElementShape:badge_wrapper_types.H.rectangular,badge:react.createElement(box.Ay,{backgroundColor:design_system.i0.errorDefault,borderRadius:design_system.Z6.full,style:{width:16,height:16}})},react.createElement(box.Ay,{backgroundColor:design_system.i0.infoDefault,style:{width:40,height:40}})),react.createElement(badge_wrapper.p,{anchorElementShape:badge_wrapper_types.H.rectangular,badge:react.createElement(box.Ay,{backgroundColor:design_system.i0.errorDefault,borderRadius:design_system.Z6.full,style:{width:8,height:8}})},react.createElement(box.Ay,{backgroundColor:design_system.i0.infoDefault,style:{width:40,height:40}})),react.createElement(badge_wrapper.p,{anchorElementShape:badge_wrapper_types.H.rectangular,badge:react.createElement(box.Ay,{backgroundColor:design_system.i0.errorDefault,borderRadius:design_system.Z6.full,style:{width:16,height:16}})},react.createElement(box.Ay,{backgroundColor:design_system.i0.infoDefault,style:{width:40,height:80}})))};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => <BadgeWrapper badge={<AvatarNetwork size={AvatarNetworkSize.Xs} name="Avalanche" src="./images/avax-token.svg" borderColor={BorderColor.borderMuted} />} {...args}>
    {args.children ? args.children : <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />}
  </BadgeWrapper>`,...DefaultStory.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`() => <Box display={DISPLAY.FLEX} gap={4}>
    <BadgeWrapper badge={<AvatarNetwork size={AvatarNetworkSize.Xs} name="Avalanche" src="./images/avax-token.svg" borderColor={BorderColor.borderMuted} />}>
      <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />
    </BadgeWrapper>
    <BadgeWrapper badge={<AvatarNetwork size={AvatarNetworkSize.Xs} name="Avalanche" src="./images/avax-token.svg" borderColor={BorderColor.borderMuted} />}>
      <AvatarToken name="Eth" src="./images/eth_logo.svg" borderColor={BorderColor.borderMuted} />
    </BadgeWrapper>
    <BadgeWrapper badge={<AvatarNetwork size={AvatarNetworkSize.Sm} name="Avalanche" src="./images/avax-token.svg" borderColor={BorderColor.borderMuted} />} anchorElementShape={BadgeWrapperAnchorElementShape.rectangular}>
      <Box as="img" src="./catnip-spicywright.png" borderRadius={BorderRadius.SM} borderColor={BorderColor.borderMuted} style={{
      width: 100,
      height: 100
    }} />
    </BadgeWrapper>
  </Box>`,...Children.parameters?.docs?.source}}},Badge.parameters={...Badge.parameters,docs:{...Badge.parameters?.docs,source:{originalSource:`() => <Box display={DISPLAY.FLEX} gap={4}>
    <BadgeWrapper badge={<AvatarNetwork size={AvatarNetworkSize.Xs} name="Avalanche" src="./images/avax-token.svg" borderColor={BorderColor.borderMuted} />}>
      <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />
    </BadgeWrapper>
    <BadgeWrapper badge={<Box backgroundColor={BackgroundColor.successDefault} borderRadius={BorderRadius.full} borderColor={BorderColor.borderMuted} borderWidth={2} style={{
    width: 12,
    height: 12
  }} />}>
      <Icon name={IconName.Global} size={IconSize.Xl} color={IconColor.iconAlternative} />
    </BadgeWrapper>
    <Box paddingTop={1} paddingBottom={1} paddingRight={1} paddingLeft={1} backgroundColor={BackgroundColor.backgroundAlternative} borderRadius={BorderRadius.SM} style={{
    alignSelf: 'flex-start'
  }}>
      <BadgeWrapper badge={<Tag label="9999" backgroundColor={BackgroundColor.errorDefault} labelProps={{
      color: TextColor.errorInverse
    }} borderColor={BorderColor.errorDefault} />} anchorElementShape={BadgeWrapperAnchorElementShape.rectangular}>
        <Box paddingTop={1} paddingBottom={1} paddingRight={8} paddingLeft={8} borderRadius={BorderRadius.SM} borderColor={BorderColor.borderDefault} backgroundColor={BackgroundColor.backgroundDefault}>
          NFTs
        </Box>
      </BadgeWrapper>
    </Box>
  </Box>`,...Badge.parameters?.docs?.source}}},Position.parameters={...Position.parameters,docs:{...Position.parameters?.docs,source:{originalSource:`() => <Box display={DISPLAY.FLEX} gap={4}>
    <BadgeWrapper position={BadgeWrapperPosition.topLeft} badge={<AvatarNetwork size={AvatarNetworkSize.Xs} name="Avalanche" src="./images/avax-token.svg" borderColor={BorderColor.borderMuted} />}>
      <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />
    </BadgeWrapper>
    <BadgeWrapper badge={<AvatarNetwork size={AvatarNetworkSize.Xs} name="Avalanche" src="./images/avax-token.svg" borderColor={BorderColor.borderMuted} />}>
      <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />
    </BadgeWrapper>
    <BadgeWrapper position={BadgeWrapperPosition.bottomLeft} badge={<AvatarNetwork size={AvatarNetworkSize.Xs} name="Avalanche" src="./images/avax-token.svg" borderColor={BorderColor.borderMuted} />}>
      <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />
    </BadgeWrapper>
    <BadgeWrapper position={BadgeWrapperPosition.bottomRight} badge={<AvatarNetwork size={AvatarNetworkSize.Xs} name="Avalanche" src="./images/avax-token.svg" borderColor={BorderColor.borderMuted} />}>
      <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />
    </BadgeWrapper>
  </Box>`,...Position.parameters?.docs?.source}}},PositionObj.parameters={...PositionObj.parameters,docs:{...PositionObj.parameters?.docs,source:{originalSource:`() => <Box display={DISPLAY.FLEX} alignItems={AlignItems.baseline} gap={4}>
    <BadgeWrapper badge={<AvatarNetwork size={AvatarNetworkSize.Xs} name="Avalanche" src="./images/avax-token.svg" borderColor={BorderColor.borderMuted} />} positionObj={{
    top: 4,
    right: -8
  }}>
      <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" />
    </BadgeWrapper>
  </Box>`,...PositionObj.parameters?.docs?.source}}},AnchorElementShape.parameters={...AnchorElementShape.parameters,docs:{...AnchorElementShape.parameters?.docs,source:{originalSource:`() => <Box display={DISPLAY.FLEX} gap={4}>
    <BadgeWrapper badge={<Box backgroundColor={BackgroundColor.errorDefault} borderRadius={BorderRadius.full} style={{
    width: 16,
    height: 16
  }} />}>
      <Box backgroundColor={BackgroundColor.infoDefault} borderRadius={BorderRadius.full} style={{
      width: 40,
      height: 40
    }} />
    </BadgeWrapper>
    <BadgeWrapper badge={<Box backgroundColor={BackgroundColor.errorDefault} borderRadius={BorderRadius.full} style={{
    width: 8,
    height: 8
  }} />}>
      <Box backgroundColor={BackgroundColor.infoDefault} borderRadius={BorderRadius.full} style={{
      width: 40,
      height: 40
    }} />
    </BadgeWrapper>
    <BadgeWrapper anchorElementShape={BadgeWrapperAnchorElementShape.rectangular} badge={<Box backgroundColor={BackgroundColor.errorDefault} borderRadius={BorderRadius.full} style={{
    width: 16,
    height: 16
  }} />}>
      <Box backgroundColor={BackgroundColor.infoDefault} style={{
      width: 40,
      height: 40
    }} />
    </BadgeWrapper>
    <BadgeWrapper anchorElementShape={BadgeWrapperAnchorElementShape.rectangular} badge={<Box backgroundColor={BackgroundColor.errorDefault} borderRadius={BorderRadius.full} style={{
    width: 8,
    height: 8
  }} />}>
      <Box backgroundColor={BackgroundColor.infoDefault} style={{
      width: 40,
      height: 40
    }} />
    </BadgeWrapper>
    <BadgeWrapper anchorElementShape={BadgeWrapperAnchorElementShape.rectangular} badge={<Box backgroundColor={BackgroundColor.errorDefault} borderRadius={BorderRadius.full} style={{
    width: 16,
    height: 16
  }} />}>
      <Box backgroundColor={BackgroundColor.infoDefault} style={{
      width: 40,
      height: 80
    }} />
    </BadgeWrapper>
  </Box>`,...AnchorElementShape.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Children","Badge","Position","PositionObj","AnchorElementShape"]}}]);
//# sourceMappingURL=components-component-library-badge-wrapper-badge-wrapper-stories.977cb872.iframe.bundle.js.map