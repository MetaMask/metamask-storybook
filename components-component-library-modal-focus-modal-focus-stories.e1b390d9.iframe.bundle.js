"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[13067],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/modal-focus/modal-focus.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoFocus:()=>AutoFocus,Children:()=>Children,DefaultStory:()=>DefaultStory,FinalFocusRef:()=>FinalFocusRef,InitialFocusRef:()=>InitialFocusRef,RestoreFocus:()=>RestoreFocus,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_focus_stories});var react=__webpack_require__("./node_modules/react/index.js"),box=__webpack_require__("./ui/components/ui/box/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),modal_focus=__webpack_require__("./ui/components/component-library/modal-focus/modal-focus.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"modalfocus",children:"ModalFocus"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ModalFocus"})," traps the focus within the modal. This greatly improves the experience for screen readers and keyboard only users."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modalfocus--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalFocus"})," is built with ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/theKashey/react-focus-lock",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-focus-lock"})," and accepts all of the props from that library."]}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:modal_focus.Q}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," prop to render the component to lock focus to"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modalfocus--children"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React from 'react';
import {
  BorderColor,
  DISPLAY,
  FLEX_DIRECTION,
} from '../../../helpers/constants/design-system';

import Box from '../../ui/box';

import { ModalFocus } from '../../component-library';

const [open, setOpen] = React.useState(false);

<button onClick={() => setOpen(true)} marginBottom={4}>
  Open
</button>;

{
  open && (
    <ModalFocus>
      <Box
        padding={4}
        borderColor={BorderColor.borderDefault}
        display={DISPLAY.FLEX}
        flexDirection={FLEX_DIRECTION.COLUMN}
        gap={4}
      >
        <p>Modal focus children</p>
        <input />
        <p>
          Use the keyboard to try tabbing around you will notice that the focus
          is locked to the content within modal focus
        </p>
        <button onClick={() => setOpen(false)}>Close</button>
      </Box>
    </ModalFocus>
  );
}
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"initial-focus-ref",children:"Initial Focus Ref"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"initialFocusRef"})," to pass the ",(0,jsx_runtime.jsx)(_components.code,{children:"ref"})," of the element to receive focus initially"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modalfocus--initial-focus-ref"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React from 'react';
import {
  BorderColor,
  DISPLAY,
  FLEX_DIRECTION,
} from '../../../helpers/constants/design-system';

import Box from '../../ui/box';

import { ModalFocus } from '../../component-library';

const [open, setOpen] = React.useState(false);
const ref = React.useRef < HTMLButtonElement > null;

<button onClick={() => setOpen(true)} marginBottom={4}>
  Open
</button>;

{
  open && (
    <ModalFocus initialFocusRef={ref}>
      <Box
        padding={4}
        borderColor={BorderColor.borderDefault}
        display={DISPLAY.FLEX}
        flexDirection={FLEX_DIRECTION.COLUMN}
        gap={4}
      >
        <input />
        <p>Initial focus is on the close button</p>
        <button ref={ref} onClick={() => setOpen(false)}>
          Close
        </button>
      </Box>
    </ModalFocus>
  );
}
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"final-focus-ref",children:"Final Focus Ref"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"finalFocusRef"})," to pass the ",(0,jsx_runtime.jsx)(_components.code,{children:"ref"})," of the element to return focus to when ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalFocus"})," unmounts"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modalfocus--final-focus-ref"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React from 'react';
import {
  BorderColor,
  DISPLAY,
  FLEX_DIRECTION,
} from '../../../helpers/constants/design-system';

import Box from '../../ui/box';

import { ModalFocus } from '../../component-library';

const [open, setOpen] = React.useState(false);
const ref = React.useRef < HTMLInputElement > null;

<button onClick={() => setOpen(true)} marginBottom={4}>
  Open
</button>;
<input placeholder="Focus will return here" ref={ref} />;

{
  open && (
    <ModalFocus finalFocusRef={ref}>
      <Box
        padding={4}
        borderColor={BorderColor.borderDefault}
        display={DISPLAY.FLEX}
        flexDirection={FLEX_DIRECTION.COLUMN}
        gap={4}
      >
        <p>Focus will be returned to the input once closed</p>
        <button onClick={() => setOpen(false)}>Close</button>
      </Box>
    </ModalFocus>
  );
}
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"restore-focus",children:"Restore Focus"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"restoreFocus"})," to restore focus to the element that triggered the ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalFocus"})," once it unmounts"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modalfocus--restore-focus"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React from 'react';
import {
  BorderColor,
  DISPLAY,
  FLEX_DIRECTION,
} from '../../../helpers/constants/design-system';

import Box from '../../ui/box';

import { ModalFocus } from '../../component-library';

const [open, setOpen] = React.useState(false);

<button onClick={() => setOpen(true)} marginBottom={4}>
  Open
</button>;
{
  open && (
    <ModalFocus restoreFocus>
      <Box
        padding={4}
        borderColor={BorderColor.borderDefault}
        display={DISPLAY.FLEX}
        flexDirection={FLEX_DIRECTION.COLUMN}
        gap={4}
      >
        <p>Focus will be restored to the open button once closed</p>
        <button onClick={() => setOpen(false)}>Close</button>
      </Box>
    </ModalFocus>
  );
}
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"auto-focus",children:"Auto Focus"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"autoFocus"})," to auto focus to the first focusable element within the ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalFocus"})," once it mounts"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modalfocus--auto-focus"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React from 'react';
import {
  BorderColor,
  DISPLAY,
  FLEX_DIRECTION,
} from '../../../helpers/constants/design-system';

import Box from '../../ui/box';

import { ModalFocus } from '../../component-library';

const [open, setOpen] = React.useState(false);

<button onClick={() => setOpen(true)} marginBottom={4}>
  Open
</button>;
{
  open && (
    <ModalFocus autoFocus={false}>
      <Box
        padding={4}
        borderColor={BorderColor.borderDefault}
        display={DISPLAY.FLEX}
        flexDirection={FLEX_DIRECTION.COLUMN}
        gap={4}
      >
        <p>auto focus set to false</p>
        <button onClick={() => setOpen(false)}>Close</button>
      </Box>
    </ModalFocus>
  );
}
`})})]})}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let modal_focus_stories={title:"Components/ComponentLibrary/ModalFocus",component:modal_focus.Q,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},args:{children:react.createElement(react.Fragment,null,react.createElement("p",null,"Modal focus children"),react.createElement("input",null),react.createElement("p",null,"Use the keyboard to try tabbing around you will notice that the focus is locked to the content within modal focus"))}};var Template=function(args){var _React_useState=_sliced_to_array(react.useState(!1),2),open=_React_useState[0],setOpen=_React_useState[1];return react.createElement(react.Fragment,null,react.createElement("button",{onClick:function(){return setOpen(!0)}},"Open"),open&&react.createElement(modal_focus.Q,args,react.createElement(box.Ay,{padding:4,borderColor:design_system.cG.borderDefault,display:design_system.Nu.FLEX,flexDirection:design_system.GO.COLUMN,gap:4},args.children,react.createElement("button",{onClick:function(){return setOpen(!1)}},"Close"))))},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var Children=Template.bind({});Children.args={children:react.createElement(react.Fragment,null,react.createElement("p",null,"Modal focus children"))};var InitialFocusRef=function(args){var ref=react.useRef(null),_React_useState=_sliced_to_array(react.useState(!1),2),open=_React_useState[0],setOpen=_React_useState[1];return react.createElement(react.Fragment,null,react.createElement("button",{onClick:function(){return setOpen(!0)}},"Open"),open&&react.createElement(modal_focus.Q,_object_spread_props(_object_spread({},args),{initialFocusRef:ref}),react.createElement(box.Ay,{padding:4,borderColor:design_system.cG.borderDefault,display:design_system.Nu.FLEX,flexDirection:design_system.GO.COLUMN,gap:4},react.createElement("input",null),args.children,react.createElement("button",{ref:ref,onClick:function(){return setOpen(!1)}},"Close"))))};InitialFocusRef.args={children:react.createElement("p",null,"Initial focus is on the close button")};var FinalFocusRef=function(args){var ref=react.useRef(null),_React_useState=_sliced_to_array(react.useState(!1),2),open=_React_useState[0],setOpen=_React_useState[1];return react.createElement(react.Fragment,null,react.createElement(box.Ay,{display:design_system.Nu.FLEX,gap:4},react.createElement("button",{onClick:function(){return setOpen(!0)}},"Open"),react.createElement("input",{placeholder:"Focus will return here",ref:ref})),open&&react.createElement(modal_focus.Q,_object_spread_props(_object_spread({},args),{finalFocusRef:ref}),react.createElement(box.Ay,{padding:4,borderColor:design_system.cG.borderDefault,display:design_system.Nu.FLEX,flexDirection:design_system.GO.COLUMN,gap:4},react.createElement("p",null,"Focus will be returned to the input once closed"),react.createElement("button",{onClick:function(){return setOpen(!1)}},"Close"))))},RestoreFocus=function(args){var ref=react.useRef(null),_React_useState=_sliced_to_array(react.useState(!1),2),open=_React_useState[0],setOpen=_React_useState[1];return react.createElement(react.Fragment,null,react.createElement("button",{ref:ref,onClick:function(){return setOpen(!open)}},"Open"),open&&react.createElement(modal_focus.Q,_object_spread_props(_object_spread({},args),{restoreFocus:!0}),react.createElement(box.Ay,{padding:4,borderColor:design_system.cG.borderDefault,display:design_system.Nu.FLEX,flexDirection:design_system.GO.COLUMN,gap:4},react.createElement("p",null,"Focus will be restored to the open button once closed"),react.createElement("button",{onClick:function(){return setOpen(!1)}},"Close"))))},AutoFocus=Template.bind({});AutoFocus.args={autoFocus:!1,children:react.createElement("p",null,"auto focus set to false")},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = React.useState(false);
  return <>
      <button onClick={() => setOpen(true)}>Open</button>
      {open && <ModalFocus {...args}>
          <Box padding={4} borderColor={BorderColor.borderDefault} display={DISPLAY.FLEX} flexDirection={FLEX_DIRECTION.COLUMN} gap={4}>
            {args.children}
            <button onClick={() => setOpen(false)}>Close</button>
          </Box>
        </ModalFocus>}
    </>;
}`,...DefaultStory.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = React.useState(false);
  return <>
      <button onClick={() => setOpen(true)}>Open</button>
      {open && <ModalFocus {...args}>
          <Box padding={4} borderColor={BorderColor.borderDefault} display={DISPLAY.FLEX} flexDirection={FLEX_DIRECTION.COLUMN} gap={4}>
            {args.children}
            <button onClick={() => setOpen(false)}>Close</button>
          </Box>
        </ModalFocus>}
    </>;
}`,...Children.parameters?.docs?.source}}},InitialFocusRef.parameters={...InitialFocusRef.parameters,docs:{...InitialFocusRef.parameters?.docs,source:{originalSource:`args => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);
  return <>
      <button onClick={() => setOpen(true)}>Open</button>
      {open && <ModalFocus {...args} initialFocusRef={ref}>
          <Box padding={4} borderColor={BorderColor.borderDefault} display={DISPLAY.FLEX} flexDirection={FLEX_DIRECTION.COLUMN} gap={4}>
            <input />
            {args.children}
            <button ref={ref} onClick={() => setOpen(false)}>
              Close
            </button>
          </Box>
        </ModalFocus>}
    </>;
}`,...InitialFocusRef.parameters?.docs?.source}}},FinalFocusRef.parameters={...FinalFocusRef.parameters,docs:{...FinalFocusRef.parameters?.docs,source:{originalSource:`args => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  return <>
      <Box display={DISPLAY.FLEX} gap={4}>
        <button onClick={() => setOpen(true)}>Open</button>
        <input placeholder="Focus will return here" ref={ref} />
      </Box>
      {open && <ModalFocus {...args} finalFocusRef={ref}>
          <Box padding={4} borderColor={BorderColor.borderDefault} display={DISPLAY.FLEX} flexDirection={FLEX_DIRECTION.COLUMN} gap={4}>
            <p>Focus will be returned to the input once closed</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </Box>
        </ModalFocus>}
    </>;
}`,...FinalFocusRef.parameters?.docs?.source}}},RestoreFocus.parameters={...RestoreFocus.parameters,docs:{...RestoreFocus.parameters?.docs,source:{originalSource:`args => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);
  return <>
      <button ref={ref} onClick={() => setOpen(!open)}>
        Open
      </button>
      {open && <ModalFocus {...args} restoreFocus>
          <Box padding={4} borderColor={BorderColor.borderDefault} display={DISPLAY.FLEX} flexDirection={FLEX_DIRECTION.COLUMN} gap={4}>
            <p>Focus will be restored to the open button once closed</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </Box>
        </ModalFocus>}
    </>;
}`,...RestoreFocus.parameters?.docs?.source}}},AutoFocus.parameters={...AutoFocus.parameters,docs:{...AutoFocus.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = React.useState(false);
  return <>
      <button onClick={() => setOpen(true)}>Open</button>
      {open && <ModalFocus {...args}>
          <Box padding={4} borderColor={BorderColor.borderDefault} display={DISPLAY.FLEX} flexDirection={FLEX_DIRECTION.COLUMN} gap={4}>
            {args.children}
            <button onClick={() => setOpen(false)}>Close</button>
          </Box>
        </ModalFocus>}
    </>;
}`,...AutoFocus.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Children","InitialFocusRef","FinalFocusRef","RestoreFocus","AutoFocus"];try{InitialFocusRef.displayName="InitialFocusRef",InitialFocusRef.__docgenInfo={description:"",displayName:"InitialFocusRef",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/modal-focus/modal-focus.stories.tsx#InitialFocusRef"]={docgenInfo:InitialFocusRef.__docgenInfo,name:"InitialFocusRef",path:"ui/components/component-library/modal-focus/modal-focus.stories.tsx#InitialFocusRef"})}catch(__react_docgen_typescript_loader_error){}try{FinalFocusRef.displayName="FinalFocusRef",FinalFocusRef.__docgenInfo={description:"",displayName:"FinalFocusRef",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/modal-focus/modal-focus.stories.tsx#FinalFocusRef"]={docgenInfo:FinalFocusRef.__docgenInfo,name:"FinalFocusRef",path:"ui/components/component-library/modal-focus/modal-focus.stories.tsx#FinalFocusRef"})}catch(__react_docgen_typescript_loader_error){}try{RestoreFocus.displayName="RestoreFocus",RestoreFocus.__docgenInfo={description:"",displayName:"RestoreFocus",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/modal-focus/modal-focus.stories.tsx#RestoreFocus"]={docgenInfo:RestoreFocus.__docgenInfo,name:"RestoreFocus",path:"ui/components/component-library/modal-focus/modal-focus.stories.tsx#RestoreFocus"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/ui/box/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>_box__WEBPACK_IMPORTED_MODULE_0__.Ay,Ve:()=>_box__WEBPACK_IMPORTED_MODULE_0__.Ve});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/box/box.js")}}]);
//# sourceMappingURL=components-component-library-modal-focus-modal-focus-stories.e1b390d9.iframe.bundle.js.map