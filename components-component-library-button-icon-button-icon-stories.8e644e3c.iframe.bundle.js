"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[83611],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/button-icon/button-icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AriaLabel:()=>AriaLabel,As:()=>As,ColorStory:()=>ColorStory,DefaultStory:()=>DefaultStory,Disabled:()=>Disabled,Href:()=>Href,IconNameStory:()=>IconNameStory,SizeStory:()=>SizeStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_icon_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),button_icon_types=__webpack_require__("./ui/components/component-library/button-icon/button-icon.types.ts"),button_icon=__webpack_require__("./ui/components/component-library/button-icon/button-icon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"buttonicon",children:"ButtonIcon"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIcon"})," is used for icons associated with a user action."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonicon--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:button_icon.a}),`
`,(0,jsx_runtime.jsxs)(_components.h3,{id:"icon-name",children:["Icon Name",(0,jsx_runtime.jsx)("span",{style:{color:"red"},children:"*"})]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the required ",(0,jsx_runtime.jsx)(_components.code,{children:"iconName"})," prop with ",(0,jsx_runtime.jsx)(_components.code,{children:"IconName"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/components/component-library"})," to select icon."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.a,{href:"/story/components-componentlibrary-icon--default-story",children:"IconSearch"})," story to find the icon you want to use."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonicon--icon-name-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ButtonIcon, IconName } from '../../component-library';

<ButtonIcon iconName={IconName.Close} ariaLabel="Close" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIconSize"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/components/component-library/icon"})," to change the size of ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIcon"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIconSize.Sm"})]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Possible sizes include:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIconSize.Sm"})," 24px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIconSize.Lg"})," 32px"]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonicon--size-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`
import { ButtonIcon, ButtonIconSize, IconName } from '../../component-library';

<ButtonIcon size={ButtonIconSize.Sm} iconName={IconName.Close} ariaLabel="Close"/>
<ButtonIcon size={ButtonIconSize.Lg} iconName={IconName.Close} ariaLabel="Close"/>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"aria-label",children:"Aria Label"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"ariaLabel"})," prop to set the name of the ButtonIcon for proper accessibility"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonicon--aria-label"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { IconColor } from '../../../helpers/constants/design-system';
import { ButtonIcon, IconName } from '../../component-library';


<ButtonIcon as="button" iconName={IconName.Close} ariaLabel="Close"/>
<ButtonIcon as="a" href="https://metamask.io/" target="_blank" iconName={IconName.Export} color={IconColor.primaryDefault} ariaLabel="Visit MetaMask.io"/>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"as",children:"As"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," box prop to change the element of ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIcon"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"button"}),"."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Button ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," options:"]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"button"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"a"})}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonicon--as"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { IconColor } from '../../../helpers/constants/design-system';
import { ButtonIcon, IconName } from '../../component-library';


<ButtonIcon as="button" iconName={IconName.Close} ariaLabel="Close"/>
<ButtonIcon as="a" href="https://metamask.io/" target="_blank" iconName={IconName.Export} color={IconColor.primaryDefault} ariaLabel="Visit MetaMask.io"/>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"href",children:"Href"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["When an ",(0,jsx_runtime.jsx)(_components.code,{children:"href"})," prop is passed it will change the element to an anchor(",(0,jsx_runtime.jsx)(_components.code,{children:"a"}),") tag."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonicon--href"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { IconColor } from '../../../helpers/constants/design-system';
import { ButtonIcon, IconName } from '../../component-library';

<ButtonIcon
  href="https://metamask.io/"
  target="_blank"
  iconName={IconName.Export}
  color={IconColor.primaryDefault}
  ariaLabel="Visit MetaMask.io"
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"color",children:"Color"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"color"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"Color"})," object to change the color of the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIcon"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"Color.iconDefault"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonicon--color-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { IconColor } from '../../../helpers/constants/design-system';
import { ButtonIcon, IconName } from '../../component-library';

<ButtonIcon
  iconName={IconName.Export}
  color={IconColor.primaryDefault}
  ariaLabel="Visit MetaMask.io"
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the boolean ",(0,jsx_runtime.jsx)(_components.code,{children:"disabled"})," prop to disable button"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-buttonicon--disabled"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ButtonIcon, IconName } from '../../component-library';

<ButtonIcon iconName={IconName.Close} disabled ariaLabel="Close" />;
`})})]})}var icon=__webpack_require__("./ui/components/component-library/icon/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let button_icon_stories={title:"Components/ComponentLibrary/ButtonIcon",component:button_icon.a,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{as:{control:"select",options:["button","a"]}},args:{iconName:icon.$M.Close,ariaLabel:"Close"}};var DefaultStory=(function(args){return react.createElement(button_icon.a,args)}).bind({});DefaultStory.storyName="Default";var IconNameStory=function(args){return react.createElement(button_icon.a,args)};IconNameStory.storyName="IconName";var SizeStory=function(args){return react.createElement(react.Fragment,null,react.createElement(button_icon.a,_object_spread_props(_object_spread({},args),{size:button_icon_types.f.Sm})),react.createElement(button_icon.a,_object_spread_props(_object_spread({},args),{size:button_icon_types.f.Md})),react.createElement(button_icon.a,_object_spread_props(_object_spread({},args),{size:button_icon_types.f.Lg})))};SizeStory.storyName="Size";var AriaLabel=function(args){return react.createElement(react.Fragment,null,react.createElement(button_icon.a,args),react.createElement(button_icon.a,_object_spread_props(_object_spread({},args),{as:"a",href:"https://metamask.io/",target:"_blank",color:design_system.Li.primaryDefault,iconName:icon.$M.Export,ariaLabel:"Visit MetaMask.io"})))},As=function(args){return react.createElement(react.Fragment,null,react.createElement(button_icon.a,args),react.createElement(button_icon.a,_object_spread_props(_object_spread({},args),{as:"a",href:"#",color:design_system.Li.primaryDefault,iconName:icon.$M.Export,ariaLabel:"demo"})))},Href=function(args){return react.createElement(button_icon.a,args)};Href.args={ariaLabel:"Visit Metamask.io",href:"https://metamask.io/",target:"_blank",color:design_system.Li.primaryDefault,iconName:icon.$M.Export};var ColorStory=function(args){return react.createElement(button_icon.a,args)};ColorStory.storyName="Color",ColorStory.args={color:design_system.Li.primaryDefault};var Disabled=function(args){return react.createElement(button_icon.a,args)};Disabled.args={disabled:!0},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <ButtonIcon {...args} />",...DefaultStory.parameters?.docs?.source}}},IconNameStory.parameters={...IconNameStory.parameters,docs:{...IconNameStory.parameters?.docs,source:{originalSource:"args => <ButtonIcon {...args} />",...IconNameStory.parameters?.docs?.source}}},SizeStory.parameters={...SizeStory.parameters,docs:{...SizeStory.parameters?.docs,source:{originalSource:`args => <>
    <ButtonIcon {...args} size={ButtonIconSize.Sm} />
    <ButtonIcon {...args} size={ButtonIconSize.Md} />
    <ButtonIcon {...args} size={ButtonIconSize.Lg} />
  </>`,...SizeStory.parameters?.docs?.source}}},AriaLabel.parameters={...AriaLabel.parameters,docs:{...AriaLabel.parameters?.docs,source:{originalSource:`args => <>
    <ButtonIcon {...args} />
    <ButtonIcon {...args} as="a" href="https://metamask.io/" target="_blank" color={IconColor.primaryDefault} iconName={IconName.Export} ariaLabel="Visit MetaMask.io" />
  </>`,...AriaLabel.parameters?.docs?.source}}},As.parameters={...As.parameters,docs:{...As.parameters?.docs,source:{originalSource:`args => <>
    <ButtonIcon {...args} />
    <ButtonIcon {...args} as="a" href="#" color={IconColor.primaryDefault} iconName={IconName.Export} ariaLabel="demo" />
  </>`,...As.parameters?.docs?.source}}},Href.parameters={...Href.parameters,docs:{...Href.parameters?.docs,source:{originalSource:"args => <ButtonIcon {...args} />",...Href.parameters?.docs?.source}}},ColorStory.parameters={...ColorStory.parameters,docs:{...ColorStory.parameters?.docs,source:{originalSource:"args => <ButtonIcon {...args} />",...ColorStory.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <ButtonIcon {...args} />",...Disabled.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","IconNameStory","SizeStory","AriaLabel","As","Href","ColorStory","Disabled"]}}]);
//# sourceMappingURL=components-component-library-button-icon-button-icon-stories.8e644e3c.iframe.bundle.js.map