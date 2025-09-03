"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[12771],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/popover-header/popover-header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,DefaultStory:()=>DefaultStory,EndAccessory:()=>EndAccessory,OnBack:()=>OnBack,OnClose:()=>OnClose,StartAccessory:()=>StartAccessory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>popover_header_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),popover_header=__webpack_require__("./ui/components/component-library/popover-header/popover-header.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"popoverheader",children:"PopoverHeader"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"PopoverHeader"})," handles the title, close button and back button for all ",(0,jsx_runtime.jsx)(_components.code,{children:"Popover"})," components. It is built on top of the ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-headerbase--default-story",children:"HeaderBase"})," component"]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-popoverheader--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverHeader"})," accepts all props below as well as all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/ui-components-ui-box-box-stories-js--default-story#props",children:"Box"})," component props"]}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:popover_header.D}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The title of the ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverHeader"})," component. Passing a ",(0,jsx_runtime.jsx)(_components.code,{children:"string"})," will render the content inside of a ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component. Passing any other type will render the content as is."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-popoverheader--children"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  TextVariant,
  TextAlign,
  DISPLAY,
  FLEX_DIRECTION,
  AlignItems,
  JustifyContent,
} from '../../../helpers/constants/design-system';

import { PopoverHeader,  AvatarAccount, Text } from '../../component-library';

<PopoverHeader {...args} marginBottom={4}>
  Children as string
</PopoverHeader>
<PopoverHeader
  {...args}
  childrenWrapperProps={{
    display: DISPLAY.FLEX,
    flexDirection: FLEX_DIRECTION.COLUMN,
    alignItems: AlignItems.center,
    justifyContent: JustifyContent.center,
  }}
>
  <AvatarAccount address="0x1234" />
  <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center}>
    Custom header using multiple components
  </Text>
</PopoverHeader>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"onback",children:"onBack"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the onClick handler ",(0,jsx_runtime.jsx)(_components.code,{children:"onBack"})," prop to render the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIcon"})," back button in the startAccessory position."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"backButtonProps"})," prop to pass additional props to the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIcon"})," back button."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-popoverheader--on-back"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { PopoverHeader } from '../../component-library';

<PopoverHeader onBack={() => console.log('Back button click')}>
  OnBack Demo
</PopoverHeader>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"onclose",children:"onClose"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the onClick handler ",(0,jsx_runtime.jsx)(_components.code,{children:"onClose"})," prop to render the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIcon"})," back button in the endAccessory position."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"backButtonProps"})," prop to pass additional props to the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIcon"})," back button."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-popoverheader--on-close"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { PopoverHeader } from '../../component-library';

<PopoverHeader onClose={() => console.log('Back button click')}>
  OnClose Demo
</PopoverHeader>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"startaccessory",children:"startAccessory"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"startAccessory"})," prop to render a component in the startAccessory position. This will override the default back ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIcon"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-popoverheader--start-accessory"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { PopoverHeader, Button, ButtonSize } from '../../component-library';

<PopoverHeader startAccessory={<Button size={ButtonSize.Sm}>Demo</Button>}>
  StartAccessory
</PopoverHeader>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"endaccessory",children:"endAccessory"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"endAccessory"})," prop to render a component in the endAccessory position. This will override the default close ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonIcon"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-popoverheader--end-accessory"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { PopoverHeader, Button, ButtonSize } from '../../component-library';

<PopoverHeader endAccessory={<Button size={ButtonSize.Sm}>Demo</Button>}>
  EndAccessory
</PopoverHeader>;
`})})]})}var avatar_account=__webpack_require__("./ui/components/component-library/avatar-account/index.ts"),component_library_button=__webpack_require__("./ui/components/component-library/button/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let popover_header_stories={title:"Components/ComponentLibrary/PopoverHeader",component:popover_header.D,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{children:{control:"text"},className:{control:"text"},onBack:{action:"onBack"},onClose:{action:"onClose"}},args:{children:"PopoverHeader"}};var Template=function(args){return react.createElement(popover_header.D,args)},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var Children=function(args){return react.createElement(react.Fragment,null,react.createElement(popover_header.D,_object_spread_props(_object_spread({},args),{marginBottom:4}),"Children as string"),react.createElement(popover_header.D,_object_spread_props(_object_spread({},args),{childrenWrapperProps:{display:design_system.Nu.FLEX,flexDirection:design_system.GO.COLUMN,alignItems:design_system.k2.center,justifyContent:design_system.A9.center}}),react.createElement(avatar_account.vs,{address:"0x1234"}),react.createElement(component_library_text.EY,{variant:design_system.J3.headingSm,textAlign:design_system.nO.Center},"Custom header using multiple components")))},OnBack=Template.bind({});OnBack.args={children:"OnBack demo"};var OnClose=Template.bind({});OnClose.args={children:"OnClose demo"};var StartAccessory=Template.bind({});StartAccessory.args={children:"StartAccessory demo",startAccessory:react.createElement(component_library_button.$n,{size:component_library_button.Mp.Sm},"Demo")};var EndAccessory=Template.bind({});EndAccessory.args={children:"EndAccessory demo",endAccessory:react.createElement(component_library_button.$n,{size:component_library_button.Mp.Sm},"Demo")},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  return <PopoverHeader {...args} />;
}`,...DefaultStory.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`args => <>
    <PopoverHeader {...args} marginBottom={4}>
      Children as string
    </PopoverHeader>
    <PopoverHeader {...args} childrenWrapperProps={{
    display: DISPLAY.FLEX,
    flexDirection: FLEX_DIRECTION.COLUMN,
    alignItems: AlignItems.center,
    justifyContent: JustifyContent.center
  }}>
      <AvatarAccount address="0x1234" />
      <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center}>
        Custom header using multiple components
      </Text>
    </PopoverHeader>
  </>`,...Children.parameters?.docs?.source}}},OnBack.parameters={...OnBack.parameters,docs:{...OnBack.parameters?.docs,source:{originalSource:`args => {
  return <PopoverHeader {...args} />;
}`,...OnBack.parameters?.docs?.source}}},OnClose.parameters={...OnClose.parameters,docs:{...OnClose.parameters?.docs,source:{originalSource:`args => {
  return <PopoverHeader {...args} />;
}`,...OnClose.parameters?.docs?.source}}},StartAccessory.parameters={...StartAccessory.parameters,docs:{...StartAccessory.parameters?.docs,source:{originalSource:`args => {
  return <PopoverHeader {...args} />;
}`,...StartAccessory.parameters?.docs?.source}}},EndAccessory.parameters={...EndAccessory.parameters,docs:{...EndAccessory.parameters?.docs,source:{originalSource:`args => {
  return <PopoverHeader {...args} />;
}`,...EndAccessory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Children","OnBack","OnClose","StartAccessory","EndAccessory"]}}]);
//# sourceMappingURL=components-component-library-popover-header-popover-header-stories.faf4aa15.iframe.bundle.js.map