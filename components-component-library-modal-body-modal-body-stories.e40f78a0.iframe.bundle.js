"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[41033],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/modal-body/modal-body.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,DefaultStory:()=>DefaultStory,Padding:()=>Padding,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_body_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"modalbody",children:"ModalBody"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ModalBody"})," is a container component that handles the scrolling of the ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/components-componentlibrary-modal--docs",children:(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})})," content."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:DefaultStory}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.H2,{of:DefaultStory}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," prop to pass in any valid React children. The ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalBody"}),"'s purpose is to handle the scrolling of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," content when the content extends beyond the viewport."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:Children}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ModalBody } from '../../component-library';

<div style={{ height: 100, width: 200 }}>
  <ModalBody>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
    libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id
    elit. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper
    nulla non metus auctor fringilla..
  </ModalBody>
</div>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"padding",children:"Padding"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalBody"})," has default padding to align with the rest of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," components. You can override this padding by passing in a ",(0,jsx_runtime.jsx)(_components.code,{children:"padding"}),` prop.
Defaults:`]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:"paddingLeft: 4 (16px)"}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"paddingRight: 4 (16px)"}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"paddingBottom: 2 (8px)"}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"paddingTop: 2 (8px)"}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:Padding}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  BackgroundColor,
  Display,
  FlexDirection,
} from '../../../helpers/constants/design-system';
import { ModalBody, Text } from '../../component-library';

<div style={{ height: 200, width: 300 }}>
  <ModalBody
    display={Display.Flex}
    flexDirection={FlexDirection.Column}
    paddingLeft={0} // removing horizontal padding from ModalBody
    paddingRight={0}
  >
    <Text paddingLeft={4} paddingRight={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
      libero, a pharetra augue. Nullam id
    </Text>
    <Text
      backgroundColor={BackgroundColor.primaryMuted}
      paddingLeft={4}
      paddingRight={4}
    >
      Element touches edge of ModalBody
    </Text>
    <Text paddingLeft={4} paddingRight={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
      libero, a pharetra augue. Nullam id
    </Text>
  </ModalBody>
</div>;
`})})]})}var modal_body=__webpack_require__("./ui/components/component-library/modal-body/modal-body.tsx");let modal_body_stories={title:"Components/ComponentLibrary/ModalBody",component:modal_body.c,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{className:{control:"text"},children:{control:"text"}},args:{className:"",children:"Modal Body"}};var DefaultStory={};DefaultStory.storyName="Default";var Children={args:{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla."},render:function(args){return react.createElement("div",{style:{height:100,width:300}},react.createElement(modal_body.c,args))}},Padding={args:{paddingLeft:0,paddingRight:0,gap:4,display:design_system.nl.Flex,flexDirection:design_system.bo.Column},render:function(args){return react.createElement("div",{style:{height:200,width:300}},react.createElement(modal_body.c,args,react.createElement(component_library_text.EY,{paddingLeft:4,paddingRight:4},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id"),react.createElement(component_library_text.EY,{backgroundColor:design_system.i0.primaryMuted,paddingLeft:4,paddingRight:4},"Element touches edge of ModalBody"),react.createElement(component_library_text.EY,{paddingLeft:4,paddingRight:4},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id")))}};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"{}",...DefaultStory.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  render: args => <div style={{
    height: 100,
    width: 300
  }}>
      <ModalBody {...args} />
    </div>
}`,...Children.parameters?.docs?.source}}},Padding.parameters={...Padding.parameters,docs:{...Padding.parameters?.docs,source:{originalSource:`{
  args: {
    paddingLeft: 0,
    paddingRight: 0,
    gap: 4,
    display: Display.Flex,
    flexDirection: FlexDirection.Column
  },
  render: args => <div style={{
    height: 200,
    width: 300
  }}>
      <ModalBody {...args}>
        <Text paddingLeft={4} paddingRight={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          elit libero, a pharetra augue. Nullam id
        </Text>
        <Text backgroundColor={BackgroundColor.primaryMuted} paddingLeft={4} paddingRight={4}>
          Element touches edge of ModalBody
        </Text>
        <Text paddingLeft={4} paddingRight={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          elit libero, a pharetra augue. Nullam id
        </Text>
      </ModalBody>
    </div>
}`,...Padding.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Children","Padding"]}}]);
//# sourceMappingURL=components-component-library-modal-body-modal-body-stories.e40f78a0.iframe.bundle.js.map