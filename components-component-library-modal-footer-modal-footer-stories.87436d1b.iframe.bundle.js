"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[543],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/modal-footer/modal-footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,ContainerProps:()=>ContainerProps,DefaultStory:()=>DefaultStory,OnCancel:()=>OnCancel,OnSubmit:()=>OnSubmit,SubmitButtonPropsCancelButtonProps:()=>SubmitButtonPropsCancelButtonProps,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_footer_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),modal_footer=__webpack_require__("./ui/components/component-library/modal-footer/modal-footer.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"modalfooter",children:"ModalFooter"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ModalFooter"})," is a footer component that handles the submit and cancel buttons of the ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/components-componentlibrary-modal--docs",children:(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:DefaultStory}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.H2,{of:DefaultStory}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"on-submit",children:"On Submit"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"onSubmit"})," prop is a function that will be called when the submit button is clicked."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:OnSubmit}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ModalFooter } from '../../component-library';

<ModalFooter onSubmit={handleOnSubmit} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"on-cancel",children:"On Cancel"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"onCancel"})," prop is a function that will be called when the cancel button is clicked."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:OnCancel}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ModalFooter } from '../../component-library';

<ModalFooter onCancel={handleOnCancel} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"submit-button-props-cancel-button-props",children:"Submit Button Props Cancel Button Props"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"submitButtonProps"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"cancelButtonProps"})," props are objects that will be spread onto the submit and cancel buttons respectively. This allows you to pass in any valid ",(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," props to the submit and cancel buttons. Ideally button strings are short but if they are long the submit and cancel buttons will stack vertically."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Note: The stacking of the submit and cancel button will not work if you construct your own ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalFooter"})," component using the ",(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," components. Additonal CSS is needed."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:SubmitButtonPropsCancelButtonProps}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ModalFooter } from '../../component-library';

<ModalFooter
  onSubmit={handleOnSubmit}
  submitButtonProps={{ children: 'I want to approve' }}
  onCancel={handleOnCancel}
  cancelButtonProps={{
    children: 'Cancel this',
  }}
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," prop to pass any in any valid React children to the ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalFooter"}),". The children will appear above the submit and cancel buttons and outside of the internal ",(0,jsx_runtime.jsx)(_components.code,{children:"Container"})," component. If you require children above the buttons, you can build your own ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalFooter"})," component using the ",(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"Container"})," components."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:Children}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  BlockSize,
  Display,
  FlexDirection,
} from '../../../helpers/constants/design-system';
import {
  ModalFooter,
  Checkbox,
  Container,
  ContainerMaxWidth,
} from '../../component-library';

const [checked, setChecked] = React.useState(false);
const handleCheckboxChange = () => setChecked(!checked);

<ModalFooter
  display={Display.Flex}
  flexDirection={FlexDirection.Column}
  alignItems={AlignItems.flexStart}
  gap={4}
  onSubmit={handleOnSubmit}
  onCancel={handleOnCancel}
>
  <Container
    maxWidth={ContainerMaxWidth.Sm}
    marginLeft="auto"
    marginRight="auto"
    marginBottom={4}
  >
    <Checkbox
      label="I agree to the terms and conditions"
      isChecked={checked}
      onChange={handleCheckboxChange}
    />
  </Container>
</ModalFooter>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"container-props",children:"Container Props"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalFooter"})," has an internal container that prevents the buttons from being large widths. You can override these props by passing in a ",(0,jsx_runtime.jsx)(_components.code,{children:"containerProps"})," prop. Below shows the ",(0,jsx_runtime.jsx)(_components.code,{children:"Container"})," with different ",(0,jsx_runtime.jsx)(_components.code,{children:"maxWidth"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"backgroundColor"})," props. To see the button retain it's width at different ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalContent"})," sizes see the ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/story/components-componentlibrary-modalcontent--size",children:"ModalContent size story"}),"."]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["Light red shows the ",(0,jsx_runtime.jsx)(_components.code,{children:"Container"})," bounding box"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["Light blue shows the ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalFooter"})," bounding box"]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:ContainerProps}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  ModalFooter,
  Box,
  Display,
  FlexDirection,
  BackgroundColor,
  ContainerMaxWidth,
} from '../../component-library';

<Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={4}>
  <ModalFooter
    containerProps={{
      maxWidth: ContainerMaxWidth.Md,
      backgroundColor: BackgroundColor.errorMuted,
    }}
    backgroundColor={BackgroundColor.primaryMuted}
  />
  <ModalFooter
    containerProps={{
      maxWidth: ContainerMaxWidth.Lg,
      backgroundColor: BackgroundColor.errorMuted,
    }}
    backgroundColor={BackgroundColor.primaryMuted}
  />
  <ModalFooter
    containerProps={{
      maxWidth: null,
      backgroundColor: BackgroundColor.errorMuted,
    }}
    backgroundColor={BackgroundColor.primaryMuted}
  />
</Box>;
`})})]})}var box=__webpack_require__("./ui/components/component-library/box/index.ts"),container=__webpack_require__("./ui/components/component-library/container/index.ts"),component_library_checkbox=__webpack_require__("./ui/components/component-library/checkbox/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let modal_footer_stories={title:"Components/ComponentLibrary/ModalFooter",component:modal_footer.j,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}};var DefaultStory={argTypes:{className:{control:"text"},children:{control:"text"},submitButtonProps:{control:"object"},onSubmit:{action:"onSubmit"},cancelButtonProps:{control:"object"},onCancel:{action:"onCancel"}}};DefaultStory.storyName="Default";var OnSubmit={argTypes:{onSubmit:{action:"onSubmit"}},render:function(args){return react.createElement(modal_footer.j,args)}},OnCancel={argTypes:{onCancel:{action:"onCancel"}},render:function(args){return react.createElement(modal_footer.j,args)}},SubmitButtonPropsCancelButtonProps={argTypes:{onSubmit:{action:"onSubmit"},onCancel:{action:"onCancel"}},args:{submitButtonProps:{children:"I want to approve"},cancelButtonProps:{children:"Cancel this"}}},ContainerProps={argTypes:{onCancel:{action:"onCancel"},onSubmit:{action:"onSubmit"}},args:{containerProps:{maxWidth:null}},render:function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:4},react.createElement(modal_footer.j,_object_spread_props(_object_spread({},args),{containerProps:{maxWidth:container.A.Md,backgroundColor:design_system.i0.errorMuted},backgroundColor:design_system.i0.primaryMuted})),react.createElement(modal_footer.j,_object_spread_props(_object_spread({},args),{containerProps:{maxWidth:container.A.Lg,backgroundColor:design_system.i0.errorMuted},backgroundColor:design_system.i0.primaryMuted})),react.createElement(modal_footer.j,_object_spread_props(_object_spread({},args),{containerProps:{maxWidth:null,backgroundColor:design_system.i0.errorMuted},backgroundColor:design_system.i0.primaryMuted})))}},Children={argTypes:{onCancel:{action:"onCancel"},onSubmit:{action:"onSubmit"}},args:{children:"Lorem ipsum dolor sit "},render:function(args){var _React_useState=_sliced_to_array(react.useState(!1),2),checked=_React_useState[0],setChecked=_React_useState[1];return react.createElement(modal_footer.j,args,react.createElement(container.m,{maxWidth:container.A.Sm,marginLeft:"auto",marginRight:"auto",marginBottom:4},react.createElement(component_library_checkbox.S,{label:"I agree to the terms and conditions",isChecked:checked,onChange:function(){return setChecked(!checked)}})))}};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`{
  argTypes: {
    className: {
      control: 'text'
    },
    children: {
      control: 'text'
    },
    submitButtonProps: {
      control: 'object'
    },
    onSubmit: {
      action: 'onSubmit'
    },
    cancelButtonProps: {
      control: 'object'
    },
    onCancel: {
      action: 'onCancel'
    }
  }
}`,...DefaultStory.parameters?.docs?.source}}},OnSubmit.parameters={...OnSubmit.parameters,docs:{...OnSubmit.parameters?.docs,source:{originalSource:`{
  argTypes: {
    onSubmit: {
      action: 'onSubmit'
    }
  },
  render: args => <ModalFooter {...args} />
}`,...OnSubmit.parameters?.docs?.source}}},OnCancel.parameters={...OnCancel.parameters,docs:{...OnCancel.parameters?.docs,source:{originalSource:`{
  argTypes: {
    onCancel: {
      action: 'onCancel'
    }
  },
  render: args => <ModalFooter {...args} />
}`,...OnCancel.parameters?.docs?.source}}},SubmitButtonPropsCancelButtonProps.parameters={...SubmitButtonPropsCancelButtonProps.parameters,docs:{...SubmitButtonPropsCancelButtonProps.parameters?.docs,source:{originalSource:`{
  argTypes: {
    onSubmit: {
      action: 'onSubmit'
    },
    onCancel: {
      action: 'onCancel'
    }
  },
  args: {
    submitButtonProps: {
      children: 'I want to approve'
    },
    cancelButtonProps: {
      children: 'Cancel this'
    }
  }
}`,...SubmitButtonPropsCancelButtonProps.parameters?.docs?.source}}},ContainerProps.parameters={...ContainerProps.parameters,docs:{...ContainerProps.parameters?.docs,source:{originalSource:`{
  argTypes: {
    onCancel: {
      action: 'onCancel'
    },
    onSubmit: {
      action: 'onSubmit'
    }
  },
  args: {
    containerProps: {
      maxWidth: null
    }
  },
  render: args => {
    return <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={4}>
        <ModalFooter {...args} containerProps={{
        maxWidth: ContainerMaxWidth.Md,
        backgroundColor: BackgroundColor.errorMuted
      }} backgroundColor={BackgroundColor.primaryMuted} />
        <ModalFooter {...args} containerProps={{
        maxWidth: ContainerMaxWidth.Lg,
        backgroundColor: BackgroundColor.errorMuted
      }} backgroundColor={BackgroundColor.primaryMuted} />
        <ModalFooter {...args} containerProps={{
        maxWidth: null,
        backgroundColor: BackgroundColor.errorMuted
      }} backgroundColor={BackgroundColor.primaryMuted} />
      </Box>;
  }
}`,...ContainerProps.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`{
  argTypes: {
    onCancel: {
      action: 'onCancel'
    },
    onSubmit: {
      action: 'onSubmit'
    }
  },
  args: {
    children: 'Lorem ipsum dolor sit '
  },
  render: args => {
    const [checked, setChecked] = React.useState(false);
    const handleCheckboxChange = () => setChecked(!checked);
    return <ModalFooter {...args}>
        <Container maxWidth={ContainerMaxWidth.Sm} marginLeft="auto" marginRight="auto" marginBottom={4}>
          <Checkbox label="I agree to the terms and conditions" isChecked={checked} onChange={handleCheckboxChange} />
        </Container>
      </ModalFooter>;
  }
}`,...Children.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","OnSubmit","OnCancel","SubmitButtonPropsCancelButtonProps","ContainerProps","Children"]}}]);
//# sourceMappingURL=components-component-library-modal-footer-modal-footer-stories.87436d1b.iframe.bundle.js.map