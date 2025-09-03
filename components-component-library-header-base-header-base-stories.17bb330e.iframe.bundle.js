"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[76819],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/header-base/header-base.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,DefaultStory:()=>DefaultStory,EndAccessory:()=>EndAccessory,StartAccessory:()=>StartAccessory,UseCaseDemos:()=>UseCaseDemos,__namedExportsOrder:()=>__namedExportsOrder,default:()=>header_base_stories});var react=__webpack_require__("./node_modules/react/index.js"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),header_base=__webpack_require__("./ui/components/component-library/header-base/header-base.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h3:"h3",h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h3,{id:"this-is-a-base-component-it-should-not-be-used-in-your-feature-code-directly-but-as-a-base-for-other-ui-components",children:'This is a base component. It should not be used in your feature code directly but as a "base" for other UI components'}),`
`,(0,jsx_runtime.jsx)(_components.h1,{id:"headerbase",children:"HeaderBase"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"HeaderBase"})," component is a reusable UI component for displaying a header with optional startAccessory, children (title) and endAccessory content areas. It is designed to be flexible and customizable for various use cases to keep a visually balanced appearance."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-headerbase--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:header_base.H}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Wrapping content in the ",(0,jsx_runtime.jsx)(_components.code,{children:"HeaderBase"})," component will be rendered in the center of the header."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"childrenWrapperProps"})," prop to customize the wrapper element around the ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," content."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-headerbase--children"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { HeaderBase, Text } from '../../component-library';
import {
  TextAlign,
  TextVariant,
} from '../../../helpers/constants/design-system';

<HeaderBase>
  <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center}>
    Title is sentence case no period
  </Text>
</HeaderBase>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"startaccessory",children:"startAccessory"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Using the ",(0,jsx_runtime.jsx)(_components.code,{children:"startAccessory"})," prop will render the content in the start (left) side of the header."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"startAccessoryWrapperProps"})," prop to customize the wrapper element around the ",(0,jsx_runtime.jsx)(_components.code,{children:"startAccessory"})," content."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-headerbase--start-accessory"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  HeaderBase,
  Text,
  ButtonIcon,
  ButtonIconSize,
  IconName,
} from '../../component-library';
import {
  TextAlign,
  TextVariant,
} from '../../../helpers/constants/design-system';

<HeaderBase
  startAccessory={
    <ButtonIcon
      size={ButtonIconSize.Sm}
      iconName={IconName.ArrowLeft}
      ariaLabel="back"
    />
  }
>
  <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center}>
    Title is sentence case no period
  </Text>
</HeaderBase>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"endaccessory",children:"endAccessory"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Using the ",(0,jsx_runtime.jsx)(_components.code,{children:"endAccessory"})," prop will render the content in the end (right) side of the header."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"endAccessoryWrapperProps"})," prop to customize the wrapper element around the ",(0,jsx_runtime.jsx)(_components.code,{children:"endAccessory"})," content."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-headerbase--end-accessory"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  ButtonIcon,
  ButtonIconSize,
  HeaderBase,
  IconName,
  Text,
} from '../../component-library';
import {
  TextAlign,
  TextVariant,
} from '../../../helpers/constants/design-system';

<HeaderBase
  endAccessory={
    <ButtonIcon
      size={ButtonIconSize.Sm}
      iconName={IconName.Close}
      ariaLabel="close"
    />
  }
>
  <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center}>
    Title is sentence case no period
  </Text>
</HeaderBase>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"use-case-demos",children:"Use Case Demos"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Some examples of how the ",(0,jsx_runtime.jsx)(_components.code,{children:"HeaderBase"})," component can be used in various use cases with background colors set for visual aid."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-headerbase--use-case-demos"})})]})}var button_icon=__webpack_require__("./ui/components/component-library/button-icon/index.ts"),icon=__webpack_require__("./ui/components/component-library/icon/index.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),component_library_button=__webpack_require__("./ui/components/component-library/button/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}let header_base_stories={title:"Components/ComponentLibrary/HeaderBase",component:header_base.H,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}};var DefaultStory=(function(args){return react.createElement(header_base.H,args)}).bind({});DefaultStory.args={children:react.createElement(component_library_text.EY,{variant:design_system.J3.headingSm,textAlign:design_system.nO.Center},"Title is sentence case no period"),startAccessory:react.createElement(button_icon.a,{size:button_icon.f.Sm,iconName:icon.$M.ArrowLeft,ariaLabel:"back"}),endAccessory:react.createElement(button_icon.a,{size:button_icon.f.Sm,iconName:icon.$M.Close,ariaLabel:"close"})},DefaultStory.storyName="Default";var Children=function(args){return react.createElement(header_base.H,args,react.createElement(component_library_text.EY,{variant:design_system.J3.headingSm,textAlign:design_system.nO.Center},"Title is sentence case no period"))},StartAccessory=function(args){return react.createElement(header_base.H,_object_spread({marginBottom:4,startAccessory:react.createElement(button_icon.a,{size:button_icon.f.Sm,iconName:icon.$M.ArrowLeft,ariaLabel:"back"})},args),react.createElement(component_library_text.EY,{variant:design_system.J3.headingSm,textAlign:design_system.nO.Center},"Title is sentence case no period"))},EndAccessory=function(args){return react.createElement(header_base.H,_object_spread({marginBottom:4,endAccessory:react.createElement(button_icon.a,{size:button_icon.f.Sm,iconName:icon.$M.Close,ariaLabel:"close"})},args),react.createElement(component_library_text.EY,{variant:design_system.J3.headingSm,textAlign:design_system.nO.Center},"Title is sentence case no period"))},UseCaseDemos=function(args){return react.createElement(react.Fragment,null,react.createElement(component_library_text.EY,null,"children only assigned"),react.createElement(box.a,{backgroundColor:design_system.i0.warningDefault},react.createElement(header_base.H,_object_spread({marginBottom:4},args),react.createElement(component_library_text.EY,{variant:design_system.J3.headingSm,textAlign:design_system.nO.Center,backgroundColor:design_system.i0.primaryAlternative},"Title is sentence case no period"))),react.createElement(component_library_text.EY,null,"children and endAccessory assigned "),react.createElement(box.a,{backgroundColor:design_system.i0.warningDefault},react.createElement(header_base.H,_object_spread({marginBottom:4,endAccessory:react.createElement(button_icon.a,{backgroundColor:design_system.i0.goerli,size:button_icon.f.Sm,iconName:icon.$M.Close,ariaLabel:"close"})},args),react.createElement(component_library_text.EY,{variant:design_system.J3.headingSm,textAlign:design_system.nO.Center,backgroundColor:design_system.i0.primaryAlternative},"Title is sentence case no period"))),react.createElement(component_library_text.EY,null,"children and startAccessory assigned "),react.createElement(box.a,{backgroundColor:design_system.i0.warningDefault},react.createElement(header_base.H,_object_spread({marginBottom:4,startAccessory:react.createElement(button_icon.a,{backgroundColor:design_system.i0.successDefault,size:button_icon.f.Sm,iconName:icon.$M.ArrowLeft,ariaLabel:"back"})},args),react.createElement(component_library_text.EY,{variant:design_system.J3.headingSm,textAlign:design_system.nO.Center,backgroundColor:design_system.i0.primaryAlternative},"Title is sentence case no period"))),react.createElement(component_library_text.EY,null,"children, startAccessory, and endAccessory assigned "),react.createElement(box.a,{backgroundColor:design_system.i0.warningDefault},react.createElement(header_base.H,_object_spread({marginBottom:4,startAccessory:react.createElement(button_icon.a,{backgroundColor:design_system.i0.successDefault,size:button_icon.f.Sm,iconName:icon.$M.ArrowLeft,ariaLabel:"back"}),endAccessory:react.createElement(button_icon.a,{backgroundColor:design_system.i0.goerli,size:button_icon.f.Sm,iconName:icon.$M.Close,ariaLabel:"close"})},args),react.createElement(component_library_text.EY,{variant:design_system.J3.headingSm,textAlign:design_system.nO.Center,backgroundColor:design_system.i0.primaryAlternative},"Title is sentence case no period"))),react.createElement(component_library_text.EY,null,"children, startAccessory, and endAccessory assigned "),react.createElement(box.a,{backgroundColor:design_system.i0.warningDefault},react.createElement(header_base.H,_object_spread({marginBottom:4,startAccessory:react.createElement(component_library_button.$n,{backgroundColor:design_system.i0.successDefault,style:{whiteSpace:"nowrap"},size:component_library_button.Mp.Sm},"Unlock Now"),endAccessory:react.createElement(button_icon.a,{backgroundColor:design_system.i0.goerli,size:button_icon.f.Sm,iconName:icon.$M.Close,ariaLabel:"close"})},args),react.createElement(component_library_text.EY,{variant:design_system.J3.headingSm,textAlign:design_system.nO.Center,backgroundColor:design_system.i0.primaryAlternative},"Title is sentence case no period"))),react.createElement(component_library_text.EY,null,"children with ellipsis, startAccessory, and endAccessory assigned"," "),react.createElement(box.a,{backgroundColor:design_system.i0.warningDefault},react.createElement(header_base.H,_object_spread({marginBottom:4,startAccessory:react.createElement(component_library_button.$n,{backgroundColor:design_system.i0.successDefault,style:{whiteSpace:"nowrap"},size:component_library_button.Mp.Sm},"Unlock Now"),endAccessory:react.createElement(button_icon.a,{backgroundColor:design_system.i0.goerli,size:button_icon.f.Sm,iconName:icon.$M.Close,ariaLabel:"close"})},args),react.createElement(component_library_text.EY,{variant:design_system.J3.headingSm,textAlign:design_system.nO.Center,backgroundColor:design_system.i0.primaryAlternative,ellipsis:!0},"Title is sentence case no period"))),react.createElement(component_library_text.EY,null,"children, startAccessory, and endAccessory assigned with prop alignItems=",design_system.k2.center," passed at HeaderBase"),react.createElement(box.a,{backgroundColor:design_system.i0.warningDefault},react.createElement(header_base.H,_object_spread({marginBottom:4,alignItems:design_system.k2.center,startAccessory:react.createElement(button_icon.a,{backgroundColor:design_system.i0.successDefault,size:button_icon.f.Sm,iconName:icon.$M.Close,ariaLabel:"close"}),endAccessory:react.createElement(component_library_button.$n,{backgroundColor:design_system.i0.goerli,size:component_library_button.Mp.Sm},"Download")},args),react.createElement(component_library_text.EY,{variant:design_system.J3.headingSm,textAlign:design_system.nO.Center,backgroundColor:design_system.i0.primaryAlternative},"Title is sentence case no period"))),react.createElement(component_library_text.EY,null,"startAccessory and endAccessory assigned "),react.createElement(box.a,{backgroundColor:design_system.i0.warningDefault},react.createElement(header_base.H,_object_spread({marginBottom:4,startAccessory:react.createElement(component_library_button.$n,{backgroundColor:design_system.i0.successDefault,size:component_library_button.Mp.Sm},"Unlock"),endAccessory:react.createElement(button_icon.a,{backgroundColor:design_system.i0.goerli,size:button_icon.f.Sm,iconName:icon.$M.Close,ariaLabel:"close"})},args))))};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <HeaderBase {...args} />",...DefaultStory.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`args => {
  return <HeaderBase {...args}>
      <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center}>
        Title is sentence case no period
      </Text>
    </HeaderBase>;
}`,...Children.parameters?.docs?.source}}},StartAccessory.parameters={...StartAccessory.parameters,docs:{...StartAccessory.parameters?.docs,source:{originalSource:`args => {
  return <HeaderBase marginBottom={4} startAccessory={<ButtonIcon size={ButtonIconSize.Sm} iconName={IconName.ArrowLeft} ariaLabel="back" />} {...args}>
      <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center}>
        Title is sentence case no period
      </Text>
    </HeaderBase>;
}`,...StartAccessory.parameters?.docs?.source}}},EndAccessory.parameters={...EndAccessory.parameters,docs:{...EndAccessory.parameters?.docs,source:{originalSource:`args => {
  return <HeaderBase marginBottom={4} endAccessory={<ButtonIcon size={ButtonIconSize.Sm} iconName={IconName.Close} ariaLabel="close" />} {...args}>
      <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center}>
        Title is sentence case no period
      </Text>
    </HeaderBase>;
}`,...EndAccessory.parameters?.docs?.source}}},UseCaseDemos.parameters={...UseCaseDemos.parameters,docs:{...UseCaseDemos.parameters?.docs,source:{originalSource:`args => <>
    <Text>children only assigned</Text>
    <Box backgroundColor={BackgroundColor.warningDefault}>
      <HeaderBase marginBottom={4} {...args}>
        <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center} backgroundColor={BackgroundColor.primaryAlternative}>
          Title is sentence case no period
        </Text>
      </HeaderBase>
    </Box>
    <Text>children and endAccessory assigned </Text>
    <Box backgroundColor={BackgroundColor.warningDefault}>
      <HeaderBase marginBottom={4} endAccessory={<ButtonIcon backgroundColor={BackgroundColor.goerli} size={ButtonIconSize.Sm} iconName={IconName.Close} ariaLabel="close" />} {...args}>
        <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center} backgroundColor={BackgroundColor.primaryAlternative}>
          Title is sentence case no period
        </Text>
      </HeaderBase>
    </Box>
    <Text>children and startAccessory assigned </Text>
    <Box backgroundColor={BackgroundColor.warningDefault}>
      <HeaderBase marginBottom={4} startAccessory={<ButtonIcon backgroundColor={BackgroundColor.successDefault} size={ButtonIconSize.Sm} iconName={IconName.ArrowLeft} ariaLabel="back" />} {...args}>
        <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center} backgroundColor={BackgroundColor.primaryAlternative}>
          Title is sentence case no period
        </Text>
      </HeaderBase>
    </Box>
    <Text>children, startAccessory, and endAccessory assigned </Text>
    <Box backgroundColor={BackgroundColor.warningDefault}>
      <HeaderBase marginBottom={4} startAccessory={<ButtonIcon backgroundColor={BackgroundColor.successDefault} size={ButtonIconSize.Sm} iconName={IconName.ArrowLeft} ariaLabel="back" />} endAccessory={<ButtonIcon backgroundColor={BackgroundColor.goerli} size={ButtonIconSize.Sm} iconName={IconName.Close} ariaLabel="close" />} {...args}>
        <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center} backgroundColor={BackgroundColor.primaryAlternative}>
          Title is sentence case no period
        </Text>
      </HeaderBase>
    </Box>
    <Text>children, startAccessory, and endAccessory assigned </Text>
    <Box backgroundColor={BackgroundColor.warningDefault}>
      <HeaderBase marginBottom={4} startAccessory={<Button backgroundColor={BackgroundColor.successDefault} style={{
      whiteSpace: 'nowrap'
    }} size={ButtonSize.Sm}>
            Unlock Now
          </Button>} endAccessory={<ButtonIcon backgroundColor={BackgroundColor.goerli} size={ButtonIconSize.Sm} iconName={IconName.Close} ariaLabel="close" />} {...args}>
        <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center} backgroundColor={BackgroundColor.primaryAlternative}>
          Title is sentence case no period
        </Text>
      </HeaderBase>
    </Box>
    <Text>
      children with ellipsis, startAccessory, and endAccessory assigned{' '}
    </Text>
    <Box backgroundColor={BackgroundColor.warningDefault}>
      <HeaderBase marginBottom={4} startAccessory={<Button backgroundColor={BackgroundColor.successDefault} style={{
      whiteSpace: 'nowrap'
    }} size={ButtonSize.Sm}>
            Unlock Now
          </Button>} endAccessory={<ButtonIcon backgroundColor={BackgroundColor.goerli} size={ButtonIconSize.Sm} iconName={IconName.Close} ariaLabel="close" />} {...args}>
        <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center} backgroundColor={BackgroundColor.primaryAlternative} ellipsis={true}>
          Title is sentence case no period
        </Text>
      </HeaderBase>
    </Box>
    <Text>
      children, startAccessory, and endAccessory assigned with prop alignItems=
      {AlignItems.center} passed at HeaderBase
    </Text>
    <Box backgroundColor={BackgroundColor.warningDefault}>
      <HeaderBase marginBottom={4} alignItems={AlignItems.center} startAccessory={<ButtonIcon backgroundColor={BackgroundColor.successDefault} size={ButtonIconSize.Sm} iconName={IconName.Close} ariaLabel="close" />} endAccessory={<Button backgroundColor={BackgroundColor.goerli} size={ButtonSize.Sm}>
            Download
          </Button>} {...args}>
        <Text variant={TextVariant.headingSm} textAlign={TextAlign.Center} backgroundColor={BackgroundColor.primaryAlternative}>
          Title is sentence case no period
        </Text>
      </HeaderBase>
    </Box>
    <Text>startAccessory and endAccessory assigned </Text>
    <Box backgroundColor={BackgroundColor.warningDefault}>
      <HeaderBase marginBottom={4} startAccessory={<Button backgroundColor={BackgroundColor.successDefault} size={ButtonSize.Sm}>
            Unlock
          </Button>} endAccessory={<ButtonIcon backgroundColor={BackgroundColor.goerli} size={ButtonIconSize.Sm} iconName={IconName.Close} ariaLabel="close" />} {...args}></HeaderBase>
    </Box>
  </>`,...UseCaseDemos.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Children","StartAccessory","EndAccessory","UseCaseDemos"];try{Children.displayName="Children",Children.__docgenInfo={description:"",displayName:"Children",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/header-base/header-base.stories.tsx#Children"]={docgenInfo:Children.__docgenInfo,name:"Children",path:"ui/components/component-library/header-base/header-base.stories.tsx#Children"})}catch(__react_docgen_typescript_loader_error){}try{StartAccessory.displayName="StartAccessory",StartAccessory.__docgenInfo={description:"",displayName:"StartAccessory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/header-base/header-base.stories.tsx#StartAccessory"]={docgenInfo:StartAccessory.__docgenInfo,name:"StartAccessory",path:"ui/components/component-library/header-base/header-base.stories.tsx#StartAccessory"})}catch(__react_docgen_typescript_loader_error){}try{EndAccessory.displayName="EndAccessory",EndAccessory.__docgenInfo={description:"",displayName:"EndAccessory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/header-base/header-base.stories.tsx#EndAccessory"]={docgenInfo:EndAccessory.__docgenInfo,name:"EndAccessory",path:"ui/components/component-library/header-base/header-base.stories.tsx#EndAccessory"})}catch(__react_docgen_typescript_loader_error){}try{UseCaseDemos.displayName="UseCaseDemos",UseCaseDemos.__docgenInfo={description:"",displayName:"UseCaseDemos",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/header-base/header-base.stories.tsx#UseCaseDemos"]={docgenInfo:UseCaseDemos.__docgenInfo,name:"UseCaseDemos",path:"ui/components/component-library/header-base/header-base.stories.tsx#UseCaseDemos"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-component-library-header-base-header-base-stories.17bb330e.iframe.bundle.js.map