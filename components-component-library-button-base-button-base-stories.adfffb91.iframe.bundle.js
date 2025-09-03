"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[5123],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/button-base/button-base.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{As:()=>As,Block:()=>Block,DefaultStory:()=>DefaultStory,Disabled:()=>Disabled,Ellipsis:()=>Ellipsis,EndIconName:()=>EndIconName,ExternalLink:()=>ExternalLink,Href:()=>Href,Loading:()=>Loading,Rtl:()=>Rtl,SizeStory:()=>SizeStory,StartIconName:()=>StartIconName,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_base_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),button_base_types=__webpack_require__("./ui/components/component-library/button-base/button-base.types.ts"),button_base=__webpack_require__("./ui/components/component-library/button-base/button-base.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h3:"h3",h1:"h1",p:"p",code:"code",a:"a",h2:"h2",ul:"ul",li:"li",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h3,{id:"this-is-a-base-component-it-should-not-be-used-in-your-feature-code-directly-but-as-a-base-for-other-ui-components",children:'This is a base component. It should not be used in your feature code directly but as a "base" for other UI components'}),`
`,(0,jsx_runtime.jsx)(_components.h1,{id:"buttonbase",children:"ButtonBase"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonBase"})," is the base component for buttons."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonbase--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:button_base.u}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"Size"})," object from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.js"}),`
to change the size of `,(0,jsx_runtime.jsx)(_components.code,{children:"ButtonBase"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"Size.MD"})]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Optional: ",(0,jsx_runtime.jsx)(_components.code,{children:"BUTTON_BASE_SIZES"})," from ",(0,jsx_runtime.jsx)(_components.code,{children:"./button-base"})," object can be used instead of ",(0,jsx_runtime.jsx)(_components.code,{children:"Size"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Possible sizes include:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Size.SM"})," 32px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Size.MD"})," 40px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Size.LG"})," 48px"]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonbase--size-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Size } from '../../../helpers/constants/design-system';
import { ButtonBase } from '../../component-library';

<ButtonBase size={Size.SM} />
<ButtonBase size={Size.MD} />
<ButtonBase size={Size.LG} />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"block",children:"Block"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use boolean ",(0,jsx_runtime.jsx)(_components.code,{children:"block"})," prop to quickly enable a full width block button"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonbase--block"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { DISPLAY } from '../../../helpers/constants/design-system';
import { ButtonBase } from '../../component-library';

<ButtonBase>Default Button</ButtonBase>
<ButtonBase block>Block Button</ButtonBase>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"as",children:"As"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," box prop to change the element of ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonBase"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"button"}),"."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["When an ",(0,jsx_runtime.jsx)(_components.code,{children:"href"})," prop is passed it will change the element to an anchor(",(0,jsx_runtime.jsx)(_components.code,{children:"a"}),") tag."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Button ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," options:"]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"button"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"a"})}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonbase--as"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ButtonBase } from '../../component-library';


<ButtonBase as="button">Button Element</ButtonBase>
<ButtonBase as="a" href="#">
  Anchor Element
</ButtonBase>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"href",children:"Href"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["When an ",(0,jsx_runtime.jsx)(_components.code,{children:"href"})," prop is passed it will change the element to an anchor(",(0,jsx_runtime.jsx)(_components.code,{children:"a"}),") tag."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonbase--href"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ButtonBase } from '../../component-library';

<ButtonBase href="/metamask">Anchor Element</ButtonBase>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"external-link",children:"External link"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["When an ",(0,jsx_runtime.jsx)(_components.code,{children:"externalLink"})," prop is passed it will change the element to an anchor(",(0,jsx_runtime.jsx)(_components.code,{children:"a"}),") tag and add the ",(0,jsx_runtime.jsx)(_components.code,{children:'target="_blank"'})," and ",(0,jsx_runtime.jsx)(_components.code,{children:'rel="noopener noreferrer"'})," attributes."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonbase--external-link"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ButtonBase } from '../../component-library';

<ButtonBase href="https://metamask.io" externalLink>
  Anchor element with external link
</ButtonBase>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the boolean ",(0,jsx_runtime.jsx)(_components.code,{children:"disabled"})," prop to disable button"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonbase--disabled"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ButtonBase } from '../../component-library';

<ButtonBase disabled>Disabled Button</ButtonBase>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"loading",children:"Loading"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the boolean ",(0,jsx_runtime.jsx)(_components.code,{children:"loading"})," prop to set loading spinner"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonbase--loading"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ButtonBase } from '../../component-library';

<ButtonBase loading>Loading Button</ButtonBase>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"icon-name",children:"Icon Name"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"startIconName"})," and/or ",(0,jsx_runtime.jsx)(_components.code,{children:"endIconName"})," prop with the ",(0,jsx_runtime.jsx)(_components.code,{children:"IconName"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/components/component-library"})," to select icon."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonbase--start-icon-name"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ButtonBase } from '../../component-library';
import { IconName } from '../icon';

<ButtonBase startIconName={IconName.AddSquare}>Button</ButtonBase>;
`})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonbase--end-icon-name"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ButtonBase } from '../../component-library';
import { IconName } from '../icon';

<ButtonBase endIconName={IconName.Arrow2Right}>Button</ButtonBase>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"rtl",children:"RTL"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["For RTL language support use the ",(0,jsx_runtime.jsx)(_components.code,{children:"textDirection"})," prop."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonbase--rtl"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ButtonBase, IconName, TextDirection } from '../../component-library';

<>
  <ButtonBase
    startIconName={IconName.AddSquare}
    endIconName={IconName.Arrow2Right}
  >
    Button Demo
  </ButtonBase>
  <ButtonBase
    startIconName={IconName.AddSquare}
    endIconName={IconName.Arrow2Right}
    textDirection={TextDirection.RightToLeft}
  >
    Button Demo
  </ButtonBase>
</>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"ellipsis",children:"Ellipsis"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the boolean ",(0,jsx_runtime.jsx)(_components.code,{children:"ellipsis"})," prop to change the if the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonBase"})," component to have an ellipsis."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Note: this should only be used for dynamic/user generated content or addresses. Generally, button text should be succinct and only contain one or two words."}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonbase--ellipsis"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ButtonBase } from '../../component-library';

<Box style={{ width: 180 }}>
  <ButtonBase>This is long text example without ellipsis</ButtonBase>
  <ButtonBase ellipsis>This is long text example with ellipsis</ButtonBase>
</Box>;
`})})]})}var icon=__webpack_require__("./ui/components/component-library/icon/index.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var marginSizeControlOptions=[void 0,0,1,2,3,4,5,6,7,8,9,10,11,12,"auto"];let button_base_stories={title:"Components/ComponentLibrary/ButtonBase",component:button_base.u,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},design:{type:"figma",url:"https://www.figma.com/file/HKpPKij9V3TpsyMV1TpV7C/DS-Components?type=design&node-id=9970-48395&mode=design&t=K6JSdtG11z2wzcXG-4"}},argTypes:{as:{control:"select",options:["button","a"]},block:{control:"boolean"},children:{control:"text"},className:{control:"text"},disabled:{control:"boolean"},startIconName:{control:"select",options:Object.values(icon.$M)},endIconName:{control:"select",options:Object.values(icon.$M)},loading:{control:"boolean"},size:{control:"select",options:Object.values(button_base_types.P)},marginTop:{options:marginSizeControlOptions,control:"select",table:{category:"box props"}},marginRight:{options:marginSizeControlOptions,control:"select",table:{category:"box props"}},marginBottom:{options:marginSizeControlOptions,control:"select",table:{category:"box props"}},marginLeft:{options:marginSizeControlOptions,control:"select",table:{category:"box props"}}},args:{children:"Button Base"}};var DefaultStory=function(args){return react.createElement(button_base.u,args)};DefaultStory.storyName="Default";var SizeStory=function(args){return react.createElement(react.Fragment,null,react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.baseline,gap:1,marginBottom:2},react.createElement(button_base.u,_object_spread_props(_object_spread({},args),{size:button_base_types.P.Sm}),"Button SM"),react.createElement(button_base.u,_object_spread_props(_object_spread({},args),{size:button_base_types.P.Md}),"Button MD"),react.createElement(button_base.u,_object_spread_props(_object_spread({},args),{size:button_base_types.P.Lg}),"Button LG")))};SizeStory.storyName="Size";var Block=function(args){return react.createElement(react.Fragment,null,react.createElement(button_base.u,_object_spread_props(_object_spread({},args),{marginBottom:2}),"Default Button"),react.createElement(button_base.u,_object_spread_props(_object_spread({},args),{block:!0,marginBottom:2}),"Block Button"))},As=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Row,gap:2},react.createElement(button_base.u,args,"Button Element"),react.createElement(button_base.u,_object_spread({as:"a",href:"#"},args),"Anchor Element"))},Href=function(args){return react.createElement(button_base.u,args,"Anchor Element")};Href.args={href:"/metamask"};var ExternalLink=function(args){return react.createElement(button_base.u,args,"Anchor element with external link")};ExternalLink.args={href:"https://metamask.io",externalLink:!0};var Disabled=function(args){return react.createElement(button_base.u,args,"Disabled Button")};Disabled.args={disabled:!0};var Loading=function(args){return react.createElement(button_base.u,args,"Loading Button")};Loading.args={loading:!0};var StartIconName=function(args){return react.createElement(button_base.u,_object_spread_props(_object_spread({},args),{startIconName:icon.$M.AddSquare}),"Button")},EndIconName=function(args){return react.createElement(button_base.u,_object_spread_props(_object_spread({},args),{endIconName:icon.$M.Arrow2Right}),"Button")},Rtl=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:2},react.createElement(button_base.u,_object_spread_props(_object_spread({},args),{startIconName:icon.$M.AddSquare,endIconName:icon.$M.Arrow2Right}),"Button Demo"),react.createElement(button_base.u,_object_spread_props(_object_spread({},args),{startIconName:icon.$M.AddSquare,endIconName:icon.$M.Arrow2Right,textDirection:component_library_text.z4.RightToLeft}),"Button Demo"))},Ellipsis=function(args){return react.createElement(box.a,{backgroundColor:design_system.i0.primaryMuted,style:{width:150}},react.createElement(button_base.u,args,"Example without ellipsis"),react.createElement(button_base.u,_object_spread_props(_object_spread({},args),{ellipsis:!0,textProps:{color:design_system.r7.errorDefault}}),"Example with ellipsis"))};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <ButtonBase {...args} />",...DefaultStory.parameters?.docs?.source}}},SizeStory.parameters={...SizeStory.parameters,docs:{...SizeStory.parameters?.docs,source:{originalSource:`args => <>
    <Box display={Display.Flex} alignItems={AlignItems.baseline} gap={1} marginBottom={2}>
      <ButtonBase {...args} size={ButtonBaseSize.Sm}>
        Button SM
      </ButtonBase>
      <ButtonBase {...args} size={ButtonBaseSize.Md}>
        Button MD
      </ButtonBase>
      <ButtonBase {...args} size={ButtonBaseSize.Lg}>
        Button LG
      </ButtonBase>
    </Box>
  </>`,...SizeStory.parameters?.docs?.source}}},Block.parameters={...Block.parameters,docs:{...Block.parameters?.docs,source:{originalSource:`args => <>
    <ButtonBase {...args} marginBottom={2}>
      Default Button
    </ButtonBase>
    <ButtonBase {...args} block marginBottom={2}>
      Block Button
    </ButtonBase>
  </>`,...Block.parameters?.docs?.source}}},As.parameters={...As.parameters,docs:{...As.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} flexDirection={FlexDirection.Row} gap={2}>
    <ButtonBase {...args}>Button Element</ButtonBase>
    <ButtonBase as="a" href="#" {...args}>
      Anchor Element
    </ButtonBase>
  </Box>`,...As.parameters?.docs?.source}}},Href.parameters={...Href.parameters,docs:{...Href.parameters?.docs,source:{originalSource:"args => <ButtonBase {...args}>Anchor Element</ButtonBase>",...Href.parameters?.docs?.source}}},ExternalLink.parameters={...ExternalLink.parameters,docs:{...ExternalLink.parameters?.docs,source:{originalSource:"args => <ButtonBase {...args}>Anchor element with external link</ButtonBase>",...ExternalLink.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <ButtonBase {...args}>Disabled Button</ButtonBase>",...Disabled.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"args => <ButtonBase {...args}>Loading Button</ButtonBase>",...Loading.parameters?.docs?.source}}},StartIconName.parameters={...StartIconName.parameters,docs:{...StartIconName.parameters?.docs,source:{originalSource:`args => <ButtonBase {...args} startIconName={IconName.AddSquare}>
    Button
  </ButtonBase>`,...StartIconName.parameters?.docs?.source}}},EndIconName.parameters={...EndIconName.parameters,docs:{...EndIconName.parameters?.docs,source:{originalSource:`args => <ButtonBase {...args} endIconName={IconName.Arrow2Right}>
    Button
  </ButtonBase>`,...EndIconName.parameters?.docs?.source}}},Rtl.parameters={...Rtl.parameters,docs:{...Rtl.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={2}>
    <ButtonBase {...args} startIconName={IconName.AddSquare} endIconName={IconName.Arrow2Right}>
      Button Demo
    </ButtonBase>
    <ButtonBase {...args} startIconName={IconName.AddSquare} endIconName={IconName.Arrow2Right} textDirection={TextDirection.RightToLeft}>
      Button Demo
    </ButtonBase>
  </Box>`,...Rtl.parameters?.docs?.source}}},Ellipsis.parameters={...Ellipsis.parameters,docs:{...Ellipsis.parameters?.docs,source:{originalSource:`args => <Box backgroundColor={BackgroundColor.primaryMuted} style={{
  width: 150
}}>
    <ButtonBase {...args}>Example without ellipsis</ButtonBase>
    <ButtonBase {...args} ellipsis textProps={{
    color: TextColor.errorDefault
  }}>
      Example with ellipsis
    </ButtonBase>
  </Box>`,...Ellipsis.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","SizeStory","Block","As","Href","ExternalLink","Disabled","Loading","StartIconName","EndIconName","Rtl","Ellipsis"]}}]);
//# sourceMappingURL=components-component-library-button-base-button-base-stories.adfffb91.iframe.bundle.js.map