(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[61027],{"./node_modules/@mdx-js/react/lib/index.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{RP:()=>useMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-16.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kQ;return new Promise((resolve,reject)=>{__webpack_require__.e(21294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ov,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/memoizerific sync recursive"(module){function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./ui/components/component-library/modal/modal.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoFocus:()=>AutoFocus,DefaultStory:()=>DefaultStory,FinalFocusRef:()=>FinalFocusRef,InitialFocusRef:()=>InitialFocusRef,IsClosedOnEscapeKey:()=>IsClosedOnEscapeKey,IsClosedOnOutsideClick:()=>IsClosedOnOutsideClick,RestoreFocus:()=>RestoreFocus,Usage:()=>Usage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),modal=__webpack_require__("./ui/components/component-library/modal/modal.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"modal",children:"Modal"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," focuses the user's attention exclusively on information via a window that is overlaid on primary content. It should be used with the ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalOverlay"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalContent"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalHeader"})," components to create a complete modal."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:modal.a}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," component is a very atomic level component that is meant to be used with ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalOverlay"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalContent"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalHeader"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"When the modal opens:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:"Focus is trapped within the modal and set to the first tabbable element."}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"Content behind a modal dialog is inert, meaning that users cannot interact with it."}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isOpen"})," prop to control whether the modal is open or closed."]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"onClose"})," prop to fire a callback when the modal is closed. This is used for the ",(0,jsx_runtime.jsx)(_components.code,{children:"isClosedOnOutsideClick"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"isClosedOnEscapeKey"}),"."]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--usage"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React, { useState, useRef } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Text, Button } from '../../component-library';

const [open, setOpen] = useState(false);

const handleOnClick = () => {
  setOpen(true);
};

const handleOnClose = () => {
  setOpen(false);
};

<Button onClick={handleOnClick}>OpenModal</Button>
<Modal
  isOpen={open}
  onClose={handleOnClose}
>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader onClose={handleOnClose} onBack={handleOnClose}>
      Modal Header
    </ModalHeader>
    <ModalBody>
      <Text>ModalBody children</Text>
    </ModalBody>
    <ModalFooter onSubmit={handleOnClose} onCancel={handleOnCancel}>
  </ModalContent>
</Modal>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"is-closed-on-outside-click",children:"Is Closed On Outside Click"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isClosedOnOutsideClick"})," prop to control whether the modal should close when the user clicks outside of the modal."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--is-closed-on-outside-click"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Modal } from '../../component-library';

<Modal isClosedOnOutsideClick={false} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"is-closed-on-escape-key",children:"Is Closed On Escape Key"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isClosedOnEscapeKey"})," prop to control whether the modal should close when the user presses the escape key."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--is-closed-on-escape-key"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Modal } from '../../component-library';

<Modal isClosedOnEscapeKey={false} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"initial-focus-ref",children:"Initial Focus Ref"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"initialFocusRef"})," to set the ",(0,jsx_runtime.jsx)(_components.code,{children:"ref"})," of the element to receive focus initially. This is useful for input elements that should receive focus when the modal opens."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--initial-focus-ref"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React, { useState, useRef } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, TextFieldSearch, Button } from '../../component-library';

// Ref to set initial focus
const inputRef = React.useRef<HTMLDivElement>(null);

const [open, setOpen] = useState(false);

const handleOnClick = () => {
  setOpen(true);
};

const handleOnClose = () => {
  setOpen(false);
};

<Button onClick={handleOnClick}>Open modal</Button>
<Modal
  isOpen={isOpen}
  onClose={handleOnClose}
  initialFocusRef={inputRef}
>
  <ModalOverlay />
  <ModalContent >
    <ModalHeader
      onClose={handleOnClose}
      onBack={handleOnClose}
      marginBottom={4}
    >
      Modal Header
    </ModalHeader>
    <TextFieldSearch
      placeholder="Search"
      inputProps={{ ref: inputRef }}
      width={BLOCK_SIZES.FULL}
    />
    <ModalBody>
      <Text>ModalBody children</Text>
    </ModalBody>
  </ModalContent>
</Modal>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"final-focus-ref",children:"Final Focus Ref"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"finalFocusRef"})," to set the ",(0,jsx_runtime.jsx)(_components.code,{children:"ref"})," of the element to receive focus when the modal closes."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--final-focus-ref"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React, { useState, useRef } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, TextFieldSearch, Button } from '../../component-library';

// Ref to set focus after modal closes
const buttonRef = React.useRef<HTMLButtonElement>(null);

const [open, setOpen] = useState(false);

const handleOnClick = () => {
  setOpen(true);
};

const handleOnClose = () => {
  setOpen(false);
};

<Button onClick={handleOnClick} marginRight={4}>
  Open modal
</Button>
<button ref={buttonRef}>Receives focus after close</button>
<Modal
  isOpen={isOpen}
  onClose={handleOnClose}
  finalFocusRef={buttonRef}
>
  <ModalOverlay />
  <ModalContent >
    <ModalHeader
      onClose={handleOnClose}
      onBack={handleOnClose}
      marginBottom={4}
    >
      Modal Header
    </ModalHeader>
    <ModalBody>
      <Text>ModalBody children</Text>
    </ModalBody>
  </ModalContent>
</Modal>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"restore-focus",children:"Restore Focus"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"restoreFocus"})," prop to restore focus to the element that triggered the ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," once it unmounts"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"false"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--restore-focus"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Modal } from '../../component-library';

<Modal restoreFocus={true} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"auto-focus",children:"Auto Focus"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["If ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),", the first focusable element within the ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," will auto-focused once ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," mounts. Depending on the content of ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," this is usually the back or close button in the ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalHeader"}),"."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--auto-focus"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Modal } from '../../component-library';

<Modal autoFocus={false} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"keyboard-and-focus-management",children:"Keyboard and Focus Management"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:"When the modal opens, focus is trapped within it."}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["When the modal opens, focus is automatically set to the first enabled element, or the element from ",(0,jsx_runtime.jsx)(_components.code,{children:"initialFocusRef"}),"."]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["When the modal closes, focus returns to the element that was focused before the modal activated, or the element from ",(0,jsx_runtime.jsx)(_components.code,{children:"finalFocusRef"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"Clicking on the overlay closes the Modal."}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"Pressing ESC closes the Modal."}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"Scrolling is blocked on the elements behind the modal."}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"The modal is rendered in a portal attached to the end of document.body to break it out of the source order and make it easy to add aria-hidden to its siblings."}),`
`]}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"aria",children:"ARIA"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalContent"}),' has aria-modal="true" and role="dialog"']}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalOverlay"}),' has aria-hidden="true"']}),`
`]})]})}var design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),button_link=__webpack_require__("./ui/components/component-library/button-link/index.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),component_library_button=__webpack_require__("./ui/components/component-library/button/index.ts"),icon=__webpack_require__("./ui/components/component-library/icon/index.ts"),modal_overlay=__webpack_require__("./ui/components/component-library/modal-overlay/index.ts"),modal_content=__webpack_require__("./ui/components/component-library/modal-content/index.ts"),modal_header=__webpack_require__("./ui/components/component-library/modal-header/index.ts"),modal_body=__webpack_require__("./ui/components/component-library/modal-body/index.ts"),modal_footer=__webpack_require__("./ui/components/component-library/modal-footer/index.ts"),text_field_search=__webpack_require__("./ui/components/component-library/text-field-search/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let modal_stories={title:"Components/ComponentLibrary/Modal",component:modal.a,tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{isOpen:{control:"boolean"},onClose:{action:"onClose"},children:{control:"node"},className:{control:"string"},isClosedOnOutsideClick:{control:"boolean"},isClosedOnEscapeKey:{control:"boolean"},initialFocusRef:{control:"object"},finalFocusRef:{control:"object"},restoreFocus:{control:"boolean"},autoFocus:{control:"boolean"}},args:{children:react.createElement(component_library_text.EY,null,"ModalBody children")}};var LoremIpsum=function(props){return react.createElement(component_library_text.EY,_object_spread({marginBottom:8},props),"Lorem ipsum dolor sit amet, conse"," ",react.createElement(button_link.v,{size:button_link.w.Inherit},"random focusable button")," ","ctetur adipiscing elit. Phasellus posuere nunc enim, quis efficitur dolor tempus viverra. Vivamus pharetra tempor pulvinar. Sed at dui in nisi fermentum volutpat. Proin ut tortor quis eros tincidunt molestie. Suspendisse dictum ex vitae metus consequat, et efficitur dolor luctus. Integer ultricies hendrerit turpis sed faucibus. Nam pellentesque metus a turpis sollicitudin vehicula. Phasellus rutrum luctus pulvinar. Phasellus quis accumsan urna. Praesent justo erat, bibendum ac volutpat ac, placerat in dui. Cras gravida mi et risus feugiat vulputate. Integer vulputate diam eu vehicula euismod. In laoreet quis eros sed tincidunt. Pellentesque purus dui, luctus id sem sit amet, varius congue dui")},Template=function(args){var _useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!0),2),showLoremIpsum=_useState1[0],setShowLoremIpsum=_useState1[1],_useState2=_sliced_to_array((0,react.useState)(!0),2),showMoreModalContent=_useState2[0],setShowMoreModalContent=_useState2[1],handleOnClose=function(){setIsOpen(!1)};return react.createElement(box.a,{width:design_system.Zf.Full,style:{maxWidth:"700px"}},react.createElement(box.a,{display:design_system.nl.Flex,gap:4},react.createElement(component_library_button.$n,{onClick:function(){setIsOpen(!0)}},"Open modal"),react.createElement(button_link.v,{endIconName:showLoremIpsum?icon.$M.Arrow2Up:icon.$M.Arrow2Down,onClick:function(){setShowLoremIpsum(!showLoremIpsum)}},showLoremIpsum?"Hide":"Show"," scrollable content")),react.createElement(modal.a,_object_spread_props(_object_spread({},args),{isOpen:isOpen,onClose:handleOnClose}),react.createElement(modal_overlay.m,null),react.createElement(modal_content.$,null,react.createElement(modal_header.r,{onClose:handleOnClose},"Modal Header"),react.createElement(modal_body.c,null,args.children,react.createElement(component_library_text.EY,null,"Show more content to check scrolling"),react.createElement(button_link.v,{endIconName:showLoremIpsum?icon.$M.Arrow2Up:icon.$M.Arrow2Down,onClick:function(){setShowMoreModalContent(!showMoreModalContent)},size:button_link.w.Inherit,marginBottom:2},showMoreModalContent?"Hide":"Show more"),showMoreModalContent&&react.createElement(react.Fragment,null,react.createElement(LoremIpsum,{marginTop:8}),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null))),react.createElement(modal_footer.j,{onSubmit:handleOnClose,onCancel:handleOnClose}))),showLoremIpsum&&react.createElement(react.Fragment,null,react.createElement(LoremIpsum,{marginTop:8}),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null)))},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var Usage=Template.bind({}),IsClosedOnOutsideClick=Template.bind({});IsClosedOnOutsideClick.args={isClosedOnOutsideClick:!1,children:react.createElement(component_library_text.EY,{paddingTop:4},"This Modal has set isClosedOnOutsideClick: false. Clicking outside this Modal ",react.createElement("strong",null,"WILL NOT")," close it")};var IsClosedOnEscapeKey=Template.bind({});IsClosedOnEscapeKey.args={isClosedOnEscapeKey:!1,children:react.createElement(component_library_text.EY,{paddingTop:4},"This Modal has set isClosedOnEscapeKey: false. Pressing the ESC key"," ",react.createElement("strong",null,"WILL NOT")," close it")};var InitialFocusRef=function(args){var inputRef=react.useRef(null),_useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],handleOnClose=function(){setIsOpen(!1)};return react.createElement(react.Fragment,null,react.createElement(component_library_button.$n,{onClick:function(){setIsOpen(!0)}},"Open modal"),react.createElement(modal.a,_object_spread_props(_object_spread({},args),{isOpen:isOpen,onClose:handleOnClose,initialFocusRef:inputRef}),react.createElement(modal_overlay.m,null),react.createElement(modal_content.$,null,react.createElement(modal_header.r,{onClose:handleOnClose,onBack:handleOnClose,marginBottom:4},"Modal Header"),react.createElement(text_field_search.m,{placeholder:"Search",inputProps:{ref:inputRef},width:design_system.Zf.Full}),react.createElement(modal_body.c,null,args.children))))};InitialFocusRef.args={children:react.createElement(component_library_text.EY,{paddingTop:4},"This Modal has set initialFocusRef to the TextFieldSearch component. When the Modal opens, the TextFieldSearch component will be focused.")};var FinalFocusRef=function(args){var buttonRef=react.useRef(null),_useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],handleOnClose=function(){setIsOpen(!1)};return react.createElement(react.Fragment,null,react.createElement(component_library_button.$n,{onClick:function(){setIsOpen(!0)},marginRight:4},"Open modal"),react.createElement("button",{ref:buttonRef},"Receives focus after close"),react.createElement(modal.a,_object_spread_props(_object_spread({},args),{isOpen:isOpen,onClose:handleOnClose,finalFocusRef:buttonRef}),react.createElement(modal_overlay.m,null),react.createElement(modal_content.$,null,react.createElement(modal_header.r,{onClose:handleOnClose,onBack:handleOnClose,marginBottom:4},"Modal Header"),react.createElement(modal_body.c,null,react.createElement(component_library_text.EY,null,args.children)))))};FinalFocusRef.args={children:react.createElement(component_library_text.EY,{paddingTop:4},"This Modal has set finalFocusRef to the second button element. When the Modal closes, the second button component will be focused. Use keyboard navigation to see it clearly.")};var RestoreFocus=Template.bind({});RestoreFocus.args={restoreFocus:!0,children:react.createElement(component_library_text.EY,{paddingTop:4},"This Modal has set restoreFocus: true. When the Modal closes, the Button component will be focused. Use keyboard navigation to see it clearly.")};var AutoFocus=Template.bind({});AutoFocus.args={autoFocus:!1,children:react.createElement(component_library_text.EY,{paddingTop:4},"This Modal has set autoFocus: false. When the Modal opens the first element to focus ",react.createElement("strong",null,"WILL NOT")," be the first focusable element in the Modal.")},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(true);
  const [showMoreModalContent, setShowMoreModalContent] = useState(true);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleHideLoremIpsum = () => {
    setShowLoremIpsum(!showLoremIpsum);
  };
  const handleMoreContent = () => {
    setShowMoreModalContent(!showMoreModalContent);
  };
  return <Box width={BlockSize.Full} style={{
    maxWidth: '700px'
  }}>
      <Box display={Display.Flex} gap={4}>
        <Button onClick={handleOnClick}>Open modal</Button>
        <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleHideLoremIpsum}>
          {showLoremIpsum ? 'Hide' : 'Show'} scrollable content
        </ButtonLink>
      </Box>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose}>Modal Header</ModalHeader>
          <ModalBody>
            {args.children}
            <Text>Show more content to check scrolling</Text>
            <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleMoreContent} size={ButtonLinkSize.Inherit} marginBottom={2}>
              {showMoreModalContent ? 'Hide' : 'Show more'}
            </ButtonLink>
            {showMoreModalContent && <>
                <LoremIpsum marginTop={8} />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
              </>}
          </ModalBody>
          <ModalFooter onSubmit={handleOnClose} onCancel={handleOnClose} />
        </ModalContent>
      </Modal>
      {showLoremIpsum && <>
          <LoremIpsum marginTop={8} />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </>}
    </Box>;
}`,...DefaultStory.parameters?.docs?.source}}},Usage.parameters={...Usage.parameters,docs:{...Usage.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(true);
  const [showMoreModalContent, setShowMoreModalContent] = useState(true);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleHideLoremIpsum = () => {
    setShowLoremIpsum(!showLoremIpsum);
  };
  const handleMoreContent = () => {
    setShowMoreModalContent(!showMoreModalContent);
  };
  return <Box width={BlockSize.Full} style={{
    maxWidth: '700px'
  }}>
      <Box display={Display.Flex} gap={4}>
        <Button onClick={handleOnClick}>Open modal</Button>
        <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleHideLoremIpsum}>
          {showLoremIpsum ? 'Hide' : 'Show'} scrollable content
        </ButtonLink>
      </Box>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose}>Modal Header</ModalHeader>
          <ModalBody>
            {args.children}
            <Text>Show more content to check scrolling</Text>
            <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleMoreContent} size={ButtonLinkSize.Inherit} marginBottom={2}>
              {showMoreModalContent ? 'Hide' : 'Show more'}
            </ButtonLink>
            {showMoreModalContent && <>
                <LoremIpsum marginTop={8} />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
              </>}
          </ModalBody>
          <ModalFooter onSubmit={handleOnClose} onCancel={handleOnClose} />
        </ModalContent>
      </Modal>
      {showLoremIpsum && <>
          <LoremIpsum marginTop={8} />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </>}
    </Box>;
}`,...Usage.parameters?.docs?.source}}},IsClosedOnOutsideClick.parameters={...IsClosedOnOutsideClick.parameters,docs:{...IsClosedOnOutsideClick.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(true);
  const [showMoreModalContent, setShowMoreModalContent] = useState(true);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleHideLoremIpsum = () => {
    setShowLoremIpsum(!showLoremIpsum);
  };
  const handleMoreContent = () => {
    setShowMoreModalContent(!showMoreModalContent);
  };
  return <Box width={BlockSize.Full} style={{
    maxWidth: '700px'
  }}>
      <Box display={Display.Flex} gap={4}>
        <Button onClick={handleOnClick}>Open modal</Button>
        <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleHideLoremIpsum}>
          {showLoremIpsum ? 'Hide' : 'Show'} scrollable content
        </ButtonLink>
      </Box>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose}>Modal Header</ModalHeader>
          <ModalBody>
            {args.children}
            <Text>Show more content to check scrolling</Text>
            <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleMoreContent} size={ButtonLinkSize.Inherit} marginBottom={2}>
              {showMoreModalContent ? 'Hide' : 'Show more'}
            </ButtonLink>
            {showMoreModalContent && <>
                <LoremIpsum marginTop={8} />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
              </>}
          </ModalBody>
          <ModalFooter onSubmit={handleOnClose} onCancel={handleOnClose} />
        </ModalContent>
      </Modal>
      {showLoremIpsum && <>
          <LoremIpsum marginTop={8} />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </>}
    </Box>;
}`,...IsClosedOnOutsideClick.parameters?.docs?.source}}},IsClosedOnEscapeKey.parameters={...IsClosedOnEscapeKey.parameters,docs:{...IsClosedOnEscapeKey.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(true);
  const [showMoreModalContent, setShowMoreModalContent] = useState(true);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleHideLoremIpsum = () => {
    setShowLoremIpsum(!showLoremIpsum);
  };
  const handleMoreContent = () => {
    setShowMoreModalContent(!showMoreModalContent);
  };
  return <Box width={BlockSize.Full} style={{
    maxWidth: '700px'
  }}>
      <Box display={Display.Flex} gap={4}>
        <Button onClick={handleOnClick}>Open modal</Button>
        <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleHideLoremIpsum}>
          {showLoremIpsum ? 'Hide' : 'Show'} scrollable content
        </ButtonLink>
      </Box>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose}>Modal Header</ModalHeader>
          <ModalBody>
            {args.children}
            <Text>Show more content to check scrolling</Text>
            <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleMoreContent} size={ButtonLinkSize.Inherit} marginBottom={2}>
              {showMoreModalContent ? 'Hide' : 'Show more'}
            </ButtonLink>
            {showMoreModalContent && <>
                <LoremIpsum marginTop={8} />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
              </>}
          </ModalBody>
          <ModalFooter onSubmit={handleOnClose} onCancel={handleOnClose} />
        </ModalContent>
      </Modal>
      {showLoremIpsum && <>
          <LoremIpsum marginTop={8} />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </>}
    </Box>;
}`,...IsClosedOnEscapeKey.parameters?.docs?.source}}},InitialFocusRef.parameters={...InitialFocusRef.parameters,docs:{...InitialFocusRef.parameters?.docs,source:{originalSource:`args => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button onClick={handleOnClick}>Open modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose} initialFocusRef={inputRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose} onBack={handleOnClose} marginBottom={4}>
            Modal Header
          </ModalHeader>
          <TextFieldSearch placeholder="Search" inputProps={{
          ref: inputRef
        }} width={BlockSize.Full} />
          <ModalBody>{args.children}</ModalBody>
        </ModalContent>
      </Modal>
    </>;
}`,...InitialFocusRef.parameters?.docs?.source}}},FinalFocusRef.parameters={...FinalFocusRef.parameters,docs:{...FinalFocusRef.parameters?.docs,source:{originalSource:`args => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button onClick={handleOnClick} marginRight={4}>
        Open modal
      </Button>
      <button ref={buttonRef}>Receives focus after close</button>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose} finalFocusRef={buttonRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose} onBack={handleOnClose} marginBottom={4}>
            Modal Header
          </ModalHeader>
          <ModalBody>
            <Text>{args.children}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>;
}`,...FinalFocusRef.parameters?.docs?.source}}},RestoreFocus.parameters={...RestoreFocus.parameters,docs:{...RestoreFocus.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(true);
  const [showMoreModalContent, setShowMoreModalContent] = useState(true);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleHideLoremIpsum = () => {
    setShowLoremIpsum(!showLoremIpsum);
  };
  const handleMoreContent = () => {
    setShowMoreModalContent(!showMoreModalContent);
  };
  return <Box width={BlockSize.Full} style={{
    maxWidth: '700px'
  }}>
      <Box display={Display.Flex} gap={4}>
        <Button onClick={handleOnClick}>Open modal</Button>
        <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleHideLoremIpsum}>
          {showLoremIpsum ? 'Hide' : 'Show'} scrollable content
        </ButtonLink>
      </Box>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose}>Modal Header</ModalHeader>
          <ModalBody>
            {args.children}
            <Text>Show more content to check scrolling</Text>
            <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleMoreContent} size={ButtonLinkSize.Inherit} marginBottom={2}>
              {showMoreModalContent ? 'Hide' : 'Show more'}
            </ButtonLink>
            {showMoreModalContent && <>
                <LoremIpsum marginTop={8} />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
              </>}
          </ModalBody>
          <ModalFooter onSubmit={handleOnClose} onCancel={handleOnClose} />
        </ModalContent>
      </Modal>
      {showLoremIpsum && <>
          <LoremIpsum marginTop={8} />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </>}
    </Box>;
}`,...RestoreFocus.parameters?.docs?.source}}},AutoFocus.parameters={...AutoFocus.parameters,docs:{...AutoFocus.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(true);
  const [showMoreModalContent, setShowMoreModalContent] = useState(true);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleHideLoremIpsum = () => {
    setShowLoremIpsum(!showLoremIpsum);
  };
  const handleMoreContent = () => {
    setShowMoreModalContent(!showMoreModalContent);
  };
  return <Box width={BlockSize.Full} style={{
    maxWidth: '700px'
  }}>
      <Box display={Display.Flex} gap={4}>
        <Button onClick={handleOnClick}>Open modal</Button>
        <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleHideLoremIpsum}>
          {showLoremIpsum ? 'Hide' : 'Show'} scrollable content
        </ButtonLink>
      </Box>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose}>Modal Header</ModalHeader>
          <ModalBody>
            {args.children}
            <Text>Show more content to check scrolling</Text>
            <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleMoreContent} size={ButtonLinkSize.Inherit} marginBottom={2}>
              {showMoreModalContent ? 'Hide' : 'Show more'}
            </ButtonLink>
            {showMoreModalContent && <>
                <LoremIpsum marginTop={8} />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
              </>}
          </ModalBody>
          <ModalFooter onSubmit={handleOnClose} onCancel={handleOnClose} />
        </ModalContent>
      </Modal>
      {showLoremIpsum && <>
          <LoremIpsum marginTop={8} />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </>}
    </Box>;
}`,...AutoFocus.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Usage","IsClosedOnOutsideClick","IsClosedOnEscapeKey","InitialFocusRef","FinalFocusRef","RestoreFocus","AutoFocus"]}}]);
//# sourceMappingURL=components-component-library-modal-modal-stories.ca72b76c.iframe.bundle.js.map