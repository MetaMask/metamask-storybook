"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[89971],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/popover/popover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,DefaultStory:()=>DefaultStory,Flip:()=>Flip,HasArrow:()=>HasArrow,IsOpen:()=>IsOpen,IsPortal:()=>IsPortal,MatchWidth:()=>MatchWidth,MouseEventDemo:()=>MouseEventDemo,Offset:()=>Offset,OnClickOutside:()=>OnClickOutside,OnFocusBlur:()=>OnFocusBlur,OnPressEscKey:()=>OnPressEscKey,Position:()=>Position,PreventOverflow:()=>PreventOverflow,ReferenceElement:()=>ReferenceElement,ReferenceHidden:()=>ReferenceHidden,Role:()=>Role,WithPopoverHeader:()=>WithPopoverHeader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>popover_stories});var react=__webpack_require__("./node_modules/react/index.js"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),popover=__webpack_require__("./ui/components/component-library/popover/popover.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",code:"code",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"popover",children:"Popover"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Popover is an overlay that appears by the trigger used for menus, additional contents, and contains at least one focusable element."}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-popover--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:popover.A}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"reference-element",children:"Reference Element"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"referenceElement"})," prop is required and used to position the popover relative to the reference element."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { useState } from 'react';
import { BackgroundColor } from '../../../helpers/constants/design-system'
import { Popover, Box } from '../../component-library';

const [referenceElement, setReferenceElement] = useState();

const setBoxRef = (ref) => {
setReferenceElement(ref);
};

<Box
  ref={setBoxRef}
  backgroundColor={BackgroundColor.primaryDefault}
  style={{ width: 200, height: 200 }}
/>
<Popover referenceElement={referenceElement}>Reference element</Popover>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Popover accepts any children and has a default padding of ",(0,jsx_runtime.jsx)(_components.code,{children:"4"})," (16px)."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  Popover,
  Text,
  Icon,
  IconSize,
  IconName,
} from '../../component-library';

<Popover>
  <Text>
    Demo of popover with children.
    <Icon size={IconSize.Inherit} name={IconName.Info} />
  </Text>
</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"position",children:"Position"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"position"})," prop with the ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverPosition"})," enum to set the position of the popover relative to the reference element."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Default is ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverPosition.Auto"})]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover, PopoverPosition } from '../../component-library';

<Popover position={PopoverPosition.Auto}>Auto</Popover>
<Popover position={PopoverPosition.AutoStart}>AutoStart</Popover>
<Popover position={PopoverPosition.AutoEnd}>AutoEnd</Popover>
<Popover position={PopoverPosition.Top}>Top</Popover>
<Popover position={PopoverPosition.TopStart}>TopStart</Popover>
<Popover position={PopoverPosition.TopEnd}>TopEnd</Popover>
<Popover position={PopoverPosition.Right}>Right</Popover>
<Popover position={PopoverPosition.RightStart}>RightStart</Popover>
<Popover position={PopoverPosition.RightEnd}>RightEnd</Popover>
<Popover position={PopoverPosition.Bottom}>Bottom</Popover>
<Popover position={PopoverPosition.BottomStart}>BottomStart</Popover>
<Popover position={PopoverPosition.BottomEnd}>BottomEnd</Popover>
<Popover position={PopoverPosition.Left}>Left</Popover>
<Popover position={PopoverPosition.LeftStart}>LeftStart</Popover>
<Popover position={PopoverPosition.LeftEnd}>LeftEnd</Popover>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"is-portal",children:"Is Portal"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"isPortal"}),` prop is a boolean that when set to true, causes the Popover to be rendered as a separate DOM element at the end of the document body.
Default `,(0,jsx_runtime.jsx)(_components.code,{children:"false"})]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover isPortal={true}>Popover using create portal</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"has-arrow",children:"Has Arrow"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"hasArrow"})," boolean to add an arrow to the popover."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover hasArrow>Popover with arrow</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"is-open",children:"Is Open"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isOpen"})," boolean to control the visibility of the popover."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover isOpen={true}>Popover with arrow</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"flip",children:"Flip"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"flip"}),` boolean to flip the popover to the opposite side of the reference element if there is not enough space.
For `,(0,jsx_runtime.jsx)(_components.code,{children:"PopoverPosition.Auto"})," this will become true."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover flip={true}>Flip demo</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"prevent-overflow",children:"Prevent Overflow"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"preventOverflow"}),` boolean to prevent the popover from overflowing the viewport.
For `,(0,jsx_runtime.jsx)(_components.code,{children:"PopoverPosition.Auto"})," this will become true."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover preventOverflow={true}>Prevent overflow demo</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"reference-hidden",children:"Reference Hidden"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"referenceHidden"})," boolean to hide the Popover when the reference element is no longer visible in the viewport."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover referenceHidden={true}>Reference hidden demo</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"match-width",children:"Match Width"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"matchWidth"})," boolean to match the width of the popover to the reference element."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover matchWidth={true}>Match width demo</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"role",children:"Role"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"role"})," prop with ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverRole"}),` enum to set the role of the popover.
`,(0,jsx_runtime.jsx)(_components.code,{children:"PopoverRole.Dialog"})," if the content is interactive, or ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverRole.Tooltip"})," for purely informational popovers."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Default: ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverRole.Tooltip"})]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover, PopoverRole } from '../../component-library';

<Popover role={PopoverRole.Tooltip}>PopoverRole.Tooltip</Popover>;
<Popover role={PopoverRole.Dialog}>PopoverRole.Dialog</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"offset",children:"Offset"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"offset"}),` prop to pass an array of two numbers to offset the popover from the reference element.
Default is `,(0,jsx_runtime.jsx)(_components.code,{children:"[0, 8]"}),`
First number controls the skidding offset and the second number controls the distance offset.`]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover offset={[0, 32]}>offset override to [0,32]</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"on-press-esc-key",children:"On Press Esc Key"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"onPressEscKey"})," is a callback function that is invoked when the 'Escape' key is pressed within the ",(0,jsx_runtime.jsx)(_components.code,{children:"Popover"})," component"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen(!isOpen);
};

<Popover onPressEscKey={() => setIsOpen(false)}>
  Press esc key to close
</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"onclickoutside",children:"onClickOutside"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"onClickOutside"})," is a callback function that is invoked when the user clicks outside of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Popover"})," component"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen(!isOpen);
};

<Popover onClickOutside={() => setIsOpen(false)}>
  Press esc key to close
</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"with-popoverheader",children:"With PopoverHeader"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Using the ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverHeader"})," component to add a header to the ",(0,jsx_runtime.jsx)(_components.code,{children:"Popover"})," component. The ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverHeader"})," is used to show common elements such as title, back button, and close button."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover>
  <PopoverHeader
    onClose={() => console.log('close')}
    onBack={() => console.log('back')}
  >
    Popover Title
  </PopoverHeader>
  Title should be short and concise. It should be sentence case and no period.
</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"mouse-event-demo",children:"Mouse Event Demo"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Not built into the ",(0,jsx_runtime.jsx)(_components.code,{children:"Popover"})," component, but a demo of ",(0,jsx_runtime.jsx)(_components.code,{children:"onMouseEnter"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"onMouseLeave"})," events on the reference element to control the visibility of the popover"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

const [isOpen, setIsOpen] = useState(false);

const handleMouseEnter = () => {
  setIsOpen(true);
};

const handleMouseLeave = () => {
  setIsOpen(false);
};

<>
  <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    Hover
  </Box>
  <Popover isOpen={isOpen}>onMouseEnter and onMouseLeave</Popover>
</>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"on-focusblur-demo",children:"On Focus/Blur Demo"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Not built into the ",(0,jsx_runtime.jsx)(_components.code,{children:"Popover"})," component, but a demo of ",(0,jsx_runtime.jsx)(_components.code,{children:"onFocus"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"onBlur"})," events on the reference element to control the visibility of the popover"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

const [isOpen, setIsOpen] = useState(false);

// Example of how open popover with focus and pair with onBlur to close popover
const handleFocus = () => {
  setIsOpen(true);
};

const handleClose = () => {
  setIsOpen(false);
};

<>
  <Box onFocus={handleFocus} onBlur={handleClose} as="button">
    Focus to open
  </Box>
  <Popover>onFocus to open and onBlur to close</Popover>
</>;
`})})]})}var popover_types=__webpack_require__("./ui/components/component-library/popover/popover.types.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),popover_header=__webpack_require__("./ui/components/component-library/popover-header/index.ts"),icon=__webpack_require__("./ui/components/component-library/icon/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let popover_stories={title:"Components/ComponentLibrary/Popover",component:popover.A,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{children:{control:"text"},position:{options:popover_types.$,control:"select"},role:{options:popover_types.c,control:"select"},className:{control:"text"}},args:{children:"Popover"}};var DefaultStory=(function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!0),2),isOpen=_useState1[0],setIsOpen=_useState1[1],handleKeyDown=function(e){"Escape"===e.key&&setIsOpen(!1)};return(0,react.useEffect)(function(){isOpen?document.addEventListener("keydown",handleKeyDown):document.removeEventListener("keydown",handleKeyDown)},[isOpen]),react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},onClick:function(){setIsOpen(!isOpen)},backgroundColor:design_system.i0.primaryAlternative,style:{width:200,height:200},color:design_system.r7.primaryInverse,as:"button"},"Click to toggle popover"),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,isOpen:isOpen},args)))}).bind({});DefaultStory.storyName="Default",DefaultStory.args={position:popover_types.$.BottomStart,children:"Popover demo without PopoverHeader",isPortal:!1,hasArrow:!0};var ReferenceElement=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryDefault,style:{width:200,height:200}}),react.createElement(popover.A,_object_spread({position:popover_types.$.Bottom,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"Reference Element")))},Children=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryDefault,style:{width:200,height:200}}),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"Demo of popover with children."," ",react.createElement(icon.In,{size:icon.lK.Inherit,name:icon.$M.Info}))))},Position=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(),2),referenceAutoElement=_useState1[0],setReferenceAutoElement=_useState1[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{style:{width:"90vw",minWidth:"650px",height:"90vh",minHeight:"400px"},borderColor:design_system.cG.borderDefault,display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,marginBottom:4},react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:400,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,textAlign:design_system.nO.Center},"Position"),react.createElement(popover.A,_object_spread({position:popover_types.$.TopStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.TopStart),react.createElement(popover.A,_object_spread({position:popover_types.$.Top,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.Top),react.createElement(popover.A,_object_spread({position:popover_types.$.TopEnd,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.TopEnd),react.createElement(popover.A,_object_spread({position:popover_types.$.RightStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.RightStart),react.createElement(popover.A,_object_spread({position:popover_types.$.Right,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.Right),react.createElement(popover.A,_object_spread({position:popover_types.$.RightEnd,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.RightEnd),react.createElement(popover.A,_object_spread({position:popover_types.$.BottomStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.BottomStart),react.createElement(popover.A,_object_spread({position:popover_types.$.Bottom,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.Bottom),react.createElement(popover.A,_object_spread({position:popover_types.$.BottomEnd,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.BottomEnd),react.createElement(popover.A,_object_spread({position:popover_types.$.LeftStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.LeftStart),react.createElement(popover.A,_object_spread({position:popover_types.$.Left,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.Left),react.createElement(popover.A,_object_spread({position:popover_types.$.LeftEnd,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.LeftEnd)),react.createElement(box.a,{style:{width:"90vw",minWidth:"650px",height:"90vh",minHeight:"400px",overflow:"scroll"},borderColor:design_system.cG.borderDefault},react.createElement(box.a,{style:{width:"200vw",height:"200vh"},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center},react.createElement(box.a,{ref:function(ref){setReferenceAutoElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:400,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,textAlign:design_system.nO.Center},"Position"),react.createElement(popover.A,_object_spread({position:popover_types.$.Auto,referenceElement:referenceAutoElement,isOpen:!0,hasArrow:!0},args),popover_types.$.Auto))))},IsPortal=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryDefault,style:{width:200,height:200}}),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,position:popover_types.$.RightEnd,isOpen:!0,isPortal:!0,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"Inspect to view the popover in the DOM (isPortal true)")),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,position:popover_types.$.RightStart,isOpen:!0,isPortal:!1,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"Inspect to view the popover in the DOM (isPortal false)")))},HasArrow=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryDefault,style:{width:200,height:200}}),react.createElement(popover.A,_object_spread({position:popover_types.$.RightStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"Popover with arrow")),react.createElement(popover.A,_object_spread({position:popover_types.$.RightEnd,referenceElement:referenceElement,isOpen:!0},args),react.createElement(component_library_text.EY,null,"Popover with no arrow")))},IsOpen=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!0),2),isOpen=_useState1[0],setIsOpen=_useState1[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:200,height:200},onClick:function(){setIsOpen(!isOpen)},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center},"Click to toggle popover"),react.createElement(popover.A,_object_spread({position:popover_types.$.RightStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"isOpen always true")),react.createElement(popover.A,_object_spread({position:popover_types.$.RightEnd,referenceElement:referenceElement,hasArrow:!0,isOpen:isOpen},args),react.createElement(component_library_text.EY,null,"isOpen tied to boolean")))},Flip=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(box.a,{style:{height:"200vh"},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center},react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:200,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center},"Scroll to see popover flip"),react.createElement(popover.A,_object_spread({position:popover_types.$.TopStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),"false"),react.createElement(popover.A,_object_spread({position:popover_types.$.TopEnd,referenceElement:referenceElement,hasArrow:!0,flip:!0,isOpen:!0},args),"true"))},PreventOverflow=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(box.a,{style:{height:"200vh",width:"100vw"},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center},react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:200,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,textAlign:design_system.nO.Center},"Scroll to see popover preventOverflow"),react.createElement(popover.A,_object_spread({position:popover_types.$.Left,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),"false"),react.createElement(popover.A,_object_spread({position:popover_types.$.Right,referenceElement:referenceElement,hasArrow:!0,preventOverflow:!0,isOpen:!0},args),"true"))},ReferenceHidden=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(box.a,{style:{height:"200vh",width:"100vw"},display:design_system.nl.Flex,justifyContent:design_system.A9.center},react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:200,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,textAlign:design_system.nO.Center},"Scroll to see popover referenceHidden"),react.createElement(popover.A,_object_spread({position:popover_types.$.BottomStart,referenceElement:referenceElement,isOpen:!0,referenceHidden:!1,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"false")),react.createElement(popover.A,_object_spread({position:popover_types.$.BottomEnd,referenceElement:referenceElement,hasArrow:!0,isOpen:!0},args),react.createElement(component_library_text.EY,null,"true")))},MatchWidth=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryDefault,style:{width:200,height:200}}),react.createElement(popover.A,_object_spread({position:popover_types.$.Bottom,referenceElement:referenceElement,isOpen:!0,matchWidth:!0},args),react.createElement(component_library_text.EY,null,"Setting matchWidth to true will make the popover match the width of the reference element")))},Role=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(box.a,{style:{height:"100vh",width:"100vw"},display:design_system.nl.Flex,justifyContent:design_system.A9.center},react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:200,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,textAlign:design_system.nO.Center},"Inspect to view role"),react.createElement(popover.A,_object_spread({position:popover_types.$.Left,role:popover_types.c.Dialog,referenceElement:referenceElement,isOpen:!0},args),react.createElement(component_library_text.EY,null,popover_types.c.Dialog)),react.createElement(popover.A,_object_spread({position:popover_types.$.Right,role:popover_types.c.Tooltip,referenceElement:referenceElement,isOpen:!0},args),react.createElement(component_library_text.EY,null,popover_types.c.Tooltip)))},Offset=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(box.a,{style:{height:"200vh",width:"100vw"},display:design_system.nl.Flex,justifyContent:design_system.A9.center},react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:200,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,textAlign:design_system.nO.Center},"Offset Demo"),react.createElement(popover.A,_object_spread({position:popover_types.$.Left,referenceElement:referenceElement,isOpen:!0},args),react.createElement(component_library_text.EY,null,"offset default")),react.createElement(popover.A,_object_spread({position:popover_types.$.Right,referenceElement:referenceElement,isOpen:!0,offset:[0,32]},args),react.createElement(component_library_text.EY,null,"offset override to [0,32]")))},OnPressEscKey=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState1[0],setIsOpen=_useState1[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},onClick:function(){setIsOpen(!isOpen)},backgroundColor:design_system.i0.primaryAlternative,style:{width:200,height:200},color:design_system.r7.primaryInverse,as:"button"},"Click to open"),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,onPressEscKey:function(){return setIsOpen(!1)},isOpen:isOpen},args),"Press esc key to close"))},OnClickOutside=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState1[0],setIsOpen=_useState1[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},onClick:function(){setIsOpen(!isOpen)},backgroundColor:design_system.i0.primaryAlternative,style:{width:200,height:200},color:design_system.r7.primaryInverse,as:"button"},"Click to open"),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,onClickOutside:function(){setIsOpen(!1)},isOpen:isOpen},args),"Click outside to close"))};OnClickOutside.storyName="onClickOutside";var WithPopoverHeader=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),refTitleElement=_useState[0],setRefTitleElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!0),2),isOpen=_useState1[0],setIsOpen=_useState1[1],handleClick=function(){setIsOpen(!isOpen)};return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setRefTitleElement(ref)},backgroundColor:design_system.i0.primaryDefault,style:{width:200,height:200},onClick:handleClick}),react.createElement(popover.A,_object_spread({referenceElement:refTitleElement,isOpen:isOpen,hasArrow:!0},args),react.createElement(popover_header.D,{onClose:handleClick,onBack:function(){return console.log("back")},color:design_system.Q1.inherit,marginBottom:4},"Popover Title"),"Title should be short and concise. It should be sentence case and no period."))},MouseEventDemo=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState1[0],setIsOpen=_useState1[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},onMouseEnter:function(){setIsOpen(!0)},onMouseLeave:function(){setIsOpen(!1)},backgroundColor:design_system.i0.primaryAlternative,style:{width:200,height:200},color:design_system.r7.primaryInverse},"Hover"),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,isOpen:isOpen},args),"onMouseEnter and onMouseLeave"))},OnFocusBlur=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState1[0],setIsOpen=_useState1[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},onFocus:function(){setIsOpen(!0)},onBlur:function(){setIsOpen(!1)},backgroundColor:design_system.i0.primaryAlternative,style:{width:200,height:200},color:design_system.r7.primaryInverse,as:"button"},"Focus to open"),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,isOpen:isOpen},args),"onFocus to open and onBlur to close"))};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Example of how to use keyboard events to close popover with escape key
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  // Example of how to use ref to open popover
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <>
      <Box ref={setBoxRef} onClick={handleClick} backgroundColor={BackgroundColor.primaryAlternative} style={{
      width: 200,
      height: 200
    }} color={TextColor.primaryInverse} as="button">
        Click to toggle popover
      </Box>
      <Popover referenceElement={referenceElement} isOpen={isOpen} {...args} />
    </>;
}`,...DefaultStory.parameters?.docs?.source}}},ReferenceElement.parameters={...ReferenceElement.parameters,docs:{...ReferenceElement.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryDefault} style={{
      width: 200,
      height: 200
    }} />
      <Popover position={PopoverPosition.Bottom} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
        <Text>Reference Element</Text>
      </Popover>
    </>;
}`,...ReferenceElement.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryDefault} style={{
      width: 200,
      height: 200
    }} />
      <Popover referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
        <Text>
          Demo of popover with children.{' '}
          <Icon size={IconSize.Inherit} name={IconName.Info} />
        </Text>
      </Popover>
    </>;
}`,...Children.parameters?.docs?.source}}},Position.parameters={...Position.parameters,docs:{...Position.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [referenceAutoElement, setReferenceAutoElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  const setRefAuto = ref => {
    setReferenceAutoElement(ref);
  };
  return <>
      <Box style={{
      width: '90vw',
      minWidth: '650px',
      height: '90vh',
      minHeight: '400px'
    }} borderColor={BorderColor.borderDefault} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} marginBottom={4}>
        <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
        width: 400,
        height: 200
      }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} textAlign={TextAlign.Center}>
          Position
        </Box>
        <Popover position={PopoverPosition.TopStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.TopStart}
        </Popover>
        <Popover position={PopoverPosition.Top} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.Top}
        </Popover>
        <Popover position={PopoverPosition.TopEnd} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.TopEnd}
        </Popover>
        <Popover position={PopoverPosition.RightStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.RightStart}
        </Popover>
        <Popover position={PopoverPosition.Right} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.Right}
        </Popover>
        <Popover position={PopoverPosition.RightEnd} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.RightEnd}
        </Popover>
        <Popover position={PopoverPosition.BottomStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.BottomStart}
        </Popover>
        <Popover position={PopoverPosition.Bottom} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.Bottom}
        </Popover>
        <Popover position={PopoverPosition.BottomEnd} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.BottomEnd}
        </Popover>
        <Popover position={PopoverPosition.LeftStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.LeftStart}
        </Popover>
        <Popover position={PopoverPosition.Left} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.Left}
        </Popover>
        <Popover position={PopoverPosition.LeftEnd} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.LeftEnd}
        </Popover>
      </Box>
      <Box style={{
      width: '90vw',
      minWidth: '650px',
      height: '90vh',
      minHeight: '400px',
      overflow: 'scroll'
    }} borderColor={BorderColor.borderDefault}>
        <Box style={{
        width: '200vw',
        height: '200vh'
      }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
          <Box ref={setRefAuto} backgroundColor={BackgroundColor.primaryMuted} style={{
          width: 400,
          height: 200
        }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} textAlign={TextAlign.Center}>
            Position
          </Box>
          <Popover position={PopoverPosition.Auto} referenceElement={referenceAutoElement} isOpen={true} hasArrow {...args}>
            {PopoverPosition.Auto}
          </Popover>
        </Box>
      </Box>
    </>;
}`,...Position.parameters?.docs?.source}}},IsPortal.parameters={...IsPortal.parameters,docs:{...IsPortal.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryDefault} style={{
      width: 200,
      height: 200
    }} />
      <Popover referenceElement={referenceElement} position={PopoverPosition.RightEnd} isOpen={true} isPortal={true} hasArrow {...args}>
        <Text>Inspect to view the popover in the DOM (isPortal true)</Text>
      </Popover>
      <Popover referenceElement={referenceElement} position={PopoverPosition.RightStart} isOpen={true} isPortal={false} hasArrow {...args}>
        <Text>Inspect to view the popover in the DOM (isPortal false)</Text>
      </Popover>
    </>;
}`,...IsPortal.parameters?.docs?.source}}},HasArrow.parameters={...HasArrow.parameters,docs:{...HasArrow.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryDefault} style={{
      width: 200,
      height: 200
    }} />
      <Popover position={PopoverPosition.RightStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
        <Text>Popover with arrow</Text>
      </Popover>
      <Popover position={PopoverPosition.RightEnd} referenceElement={referenceElement} isOpen={true} {...args}>
        <Text>Popover with no arrow</Text>
      </Popover>
    </>;
}`,...HasArrow.parameters?.docs?.source}}},IsOpen.parameters={...IsOpen.parameters,docs:{...IsOpen.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
      width: 200,
      height: 200
    }} onClick={handleClick} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
        Click to toggle popover
      </Box>

      <Popover position={PopoverPosition.RightStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
        <Text>isOpen always true</Text>
      </Popover>

      <Popover position={PopoverPosition.RightEnd} referenceElement={referenceElement} hasArrow isOpen={isOpen} {...args}>
        <Text>isOpen tied to boolean</Text>
      </Popover>
    </>;
}`,...IsOpen.parameters?.docs?.source}}},Flip.parameters={...Flip.parameters,docs:{...Flip.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <Box style={{
    height: '200vh'
  }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
      width: 200,
      height: 200
    }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
        Scroll to see popover flip
      </Box>
      <Popover position={PopoverPosition.TopStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
        false
      </Popover>
      <Popover position={PopoverPosition.TopEnd} referenceElement={referenceElement} hasArrow flip isOpen={true} {...args}>
        true
      </Popover>
    </Box>;
}`,...Flip.parameters?.docs?.source}}},PreventOverflow.parameters={...PreventOverflow.parameters,docs:{...PreventOverflow.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <Box style={{
    height: '200vh',
    width: '100vw'
  }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
      width: 200,
      height: 200
    }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} textAlign={TextAlign.Center}>
        Scroll to see popover preventOverflow
      </Box>
      <Popover position={PopoverPosition.Left} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
        false
      </Popover>
      <Popover position={PopoverPosition.Right} referenceElement={referenceElement} hasArrow preventOverflow isOpen={true} {...args}>
        true
      </Popover>
    </Box>;
}`,...PreventOverflow.parameters?.docs?.source}}},ReferenceHidden.parameters={...ReferenceHidden.parameters,docs:{...ReferenceHidden.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <Box style={{
    height: '200vh',
    width: '100vw'
  }} display={Display.Flex} justifyContent={JustifyContent.center}>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
      width: 200,
      height: 200
    }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} textAlign={TextAlign.Center}>
        Scroll to see popover referenceHidden
      </Box>
      <Popover position={PopoverPosition.BottomStart} referenceElement={referenceElement} isOpen={true} referenceHidden={false} hasArrow {...args}>
        <Text>false</Text>
      </Popover>
      <Popover position={PopoverPosition.BottomEnd} referenceElement={referenceElement} hasArrow isOpen={true} {...args}>
        <Text>true</Text>
      </Popover>
    </Box>;
}`,...ReferenceHidden.parameters?.docs?.source}}},MatchWidth.parameters={...MatchWidth.parameters,docs:{...MatchWidth.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryDefault} style={{
      width: 200,
      height: 200
    }} />
      <Popover position={PopoverPosition.Bottom} referenceElement={referenceElement} isOpen={true} matchWidth {...args}>
        <Text>
          Setting matchWidth to true will make the popover match the width of
          the reference element
        </Text>
      </Popover>
    </>;
}`,...MatchWidth.parameters?.docs?.source}}},Role.parameters={...Role.parameters,docs:{...Role.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <Box style={{
    height: '100vh',
    width: '100vw'
  }} display={Display.Flex} justifyContent={JustifyContent.center}>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
      width: 200,
      height: 200
    }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} textAlign={TextAlign.Center}>
        Inspect to view role
      </Box>
      <Popover position={PopoverPosition.Left} role={PopoverRole.Dialog} referenceElement={referenceElement} isOpen={true} {...args}>
        <Text>{PopoverRole.Dialog}</Text>
      </Popover>
      <Popover position={PopoverPosition.Right} role={PopoverRole.Tooltip} referenceElement={referenceElement} isOpen={true} {...args}>
        <Text>{PopoverRole.Tooltip}</Text>
      </Popover>
    </Box>;
}`,...Role.parameters?.docs?.source}}},Offset.parameters={...Offset.parameters,docs:{...Offset.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <Box style={{
    height: '200vh',
    width: '100vw'
  }} display={Display.Flex} justifyContent={JustifyContent.center}>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
      width: 200,
      height: 200
    }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} textAlign={TextAlign.Center}>
        Offset Demo
      </Box>
      <Popover position={PopoverPosition.Left} referenceElement={referenceElement} isOpen={true} {...args}>
        <Text>offset default</Text>
      </Popover>
      <Popover position={PopoverPosition.Right} referenceElement={referenceElement} isOpen={true} offset={[0, 32]} {...args}>
        <Text>offset override to [0,32]</Text>
      </Popover>
    </Box>;
}`,...Offset.parameters?.docs?.source}}},OnPressEscKey.parameters={...OnPressEscKey.parameters,docs:{...OnPressEscKey.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // Set Popover Ref
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return <>
      <Box ref={setBoxRef} onClick={handleClick} backgroundColor={BackgroundColor.primaryAlternative} style={{
      width: 200,
      height: 200
    }} color={TextColor.primaryInverse} as="button">
        Click to open
      </Box>
      <Popover referenceElement={referenceElement} onPressEscKey={() => setIsOpen(false)} isOpen={isOpen} {...args}>
        Press esc key to close
      </Popover>
    </>;
}`,...OnPressEscKey.parameters?.docs?.source}}},OnClickOutside.parameters={...OnClickOutside.parameters,docs:{...OnClickOutside.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // Set Popover Ref
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = () => {
    setIsOpen(false);
  };
  return <>
      <Box ref={setBoxRef} onClick={handleClick} backgroundColor={BackgroundColor.primaryAlternative} style={{
      width: 200,
      height: 200
    }} color={TextColor.primaryInverse} as="button">
        Click to open
      </Box>
      <Popover referenceElement={referenceElement} onClickOutside={handleClickOutside} isOpen={isOpen} {...args}>
        Click outside to close
      </Popover>
    </>;
}`,...OnClickOutside.parameters?.docs?.source}}},WithPopoverHeader.parameters={...WithPopoverHeader.parameters,docs:{...WithPopoverHeader.parameters?.docs,source:{originalSource:`args => {
  const [refTitleElement, setRefTitleElement] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const setBoxRef = ref => {
    setRefTitleElement(ref);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryDefault} style={{
      width: 200,
      height: 200
    }} onClick={handleClick} />
      <Popover referenceElement={refTitleElement} isOpen={isOpen} hasArrow {...args}>
        <PopoverHeader onClose={handleClick} onBack={() => console.log('back')} color={Color.inherit} marginBottom={4}>
          Popover Title
        </PopoverHeader>
        Title should be short and concise. It should be sentence case and no
        period.
      </Popover>
    </>;
}`,...WithPopoverHeader.parameters?.docs?.source}}},MouseEventDemo.parameters={...MouseEventDemo.parameters,docs:{...MouseEventDemo.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // Set Popover Ref
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };

  // Example of how to use mouse events to open and close popover
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return <>
      <Box ref={setBoxRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} backgroundColor={BackgroundColor.primaryAlternative} style={{
      width: 200,
      height: 200
    }} color={TextColor.primaryInverse}>
        Hover
      </Box>
      <Popover referenceElement={referenceElement} isOpen={isOpen} {...args}>
        onMouseEnter and onMouseLeave
      </Popover>
    </>;
}`,...MouseEventDemo.parameters?.docs?.source}}},OnFocusBlur.parameters={...OnFocusBlur.parameters,docs:{...OnFocusBlur.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // Set Popover Ref
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };

  // Example of how open popover with focus and pair with onBlur to close popover
  const handleFocus = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <Box ref={setBoxRef} onFocus={handleFocus} onBlur={handleClose} backgroundColor={BackgroundColor.primaryAlternative} style={{
      width: 200,
      height: 200
    }} color={TextColor.primaryInverse} as="button">
        Focus to open
      </Box>
      <Popover referenceElement={referenceElement} isOpen={isOpen} {...args}>
        onFocus to open and onBlur to close
      </Popover>
    </>;
}`,...OnFocusBlur.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","ReferenceElement","Children","Position","IsPortal","HasArrow","IsOpen","Flip","PreventOverflow","ReferenceHidden","MatchWidth","Role","Offset","OnPressEscKey","OnClickOutside","WithPopoverHeader","MouseEventDemo","OnFocusBlur"]}}]);
//# sourceMappingURL=components-component-library-popover-popover-stories.56e3e755.iframe.bundle.js.map