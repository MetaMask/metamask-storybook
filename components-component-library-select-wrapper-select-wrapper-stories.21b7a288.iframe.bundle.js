"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[3505],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/select-wrapper/select-wrapper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,ControlledOpen:()=>ControlledOpen,ControlledValue:()=>ControlledValue,DefaultStory:()=>DefaultStory,IsDanger:()=>IsDanger,IsDisabled:()=>IsDisabled,IsMultiSelect:()=>IsMultiSelect,OnBlur:()=>OnBlur,Placeholder:()=>Placeholder,PopoverProps:()=>PopoverProps,TriggerComponent:()=>TriggerComponent,UncontrolledOpen:()=>UncontrolledOpen,UncontrolledValue:()=>UncontrolledValue,UseSelectContext:()=>UseSelectContext,__namedExportsOrder:()=>__namedExportsOrder,default:()=>select_wrapper_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),select_button=__webpack_require__("./ui/components/component-library/select-button/index.ts"),select_option=__webpack_require__("./ui/components/component-library/select-option/index.ts"),component_library_button=__webpack_require__("./ui/components/component-library/button/index.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),addon_docs_dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),select_wrapper=__webpack_require__("./ui/components/component-library/select-wrapper/select-wrapper.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre",a:"a"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"selectwrapper",children:"SelectWrapper"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," wraps and handles the state and logic for ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectOption"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})]}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.uY,{of:select_wrapper.S}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"triggercomponent",children:"triggerComponent"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"triggerComponent"})," prop to pass in a component that will be used as the trigger for the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"}),`.
`,(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," is a component that can be used as the ",(0,jsx_runtime.jsx)(_components.code,{children:"triggerComponent"})," or used for reference when creating a custom ",(0,jsx_runtime.jsx)(_components.code,{children:"triggerComponent"}),"."]}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--trigger-component"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectWrapper,
  SelectButton,
  SelectOption,
} from '../../component-library';

<SelectWrapper
  triggerComponent={<SelectButton>Trigger Component</SelectButton>}
>
  <SelectOption value="Value">Value</SelectOption>
</SelectWrapper>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Elements passed in as children will be used in the ",(0,jsx_runtime.jsx)(_components.code,{children:"Popover"}),"(dropdown) for the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"}),`.
`,(0,jsx_runtime.jsx)(_components.code,{children:"SelectOption"})," is a component that can be used as a child or used for reference when creating a custom child."]}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--children"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectWrapper,
  SelectButton,
  SelectOption,
  Text,
} from '../../component-library';

<SelectWrapper
  triggerComponent={<SelectButton>Trigger Component</SelectButton>}
>
  <Text paddingLeft={2} paddingRight={2}>
    All elements contained in SelectWrapper will be rendered within the popover
  </Text>
  <SelectOption value="Child 1">Child 1</SelectOption>
  <SelectOption value="Child 2">Child 2</SelectOption>
  <SelectOption value="Child 3">Child 3</SelectOption>
</SelectWrapper>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"controlled-open-isopen-onopenchange",children:"Controlled Open (isOpen, onOpenChange)"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["For a controlled open experience use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isOpen"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"onOpenChange"}),` props.
Pass a boolean to `,(0,jsx_runtime.jsx)(_components.code,{children:"isOpen"})," to control the open state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"}),`.
Pass a function to `,(0,jsx_runtime.jsx)(_components.code,{children:"onOpenChange"})," to handle the open state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"}),"."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["See ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-selectwrapper--docs#ismultiselect",children:"isMultiSelect"})," for more info on how it impacts the onOpenChange."]}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--controlled-open"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectWrapper,
  SelectButton,
  SelectOption,
} from '../../component-library';

const [isOpen, setIsOpen] = React.useState(false);

<SelectWrapper
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  triggerComponent={
    <SelectButton onClick={() => setIsOpen(!isOpen)}>
      Controlled Open Demo
    </SelectButton>
  }
>
  <SelectOption value="Option 1">Option 1</SelectOption>
  <SelectOption value="Option 2">Option 2</SelectOption>
  <SelectOption value="Option 3">Option 3</SelectOption>
</SelectWrapper>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"uncontrolled-open",children:"Uncontrolled Open"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," will control the open state internally if the ",(0,jsx_runtime.jsx)(_components.code,{children:"isOpen"})," prop is not passed. By default the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," will toggle the open/close state and when selecting an option with ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectOption"})," that will trigger a close."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["See ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-selectwrapper--docs#ismultiselect",children:"isMultiSelect"})," for more info on how it impacts the open state."]}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--uncontrolled-open"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectWrapper,
  SelectButton,
  SelectOption,
} from '../../component-library';

<SelectWrapper
  triggerComponent={<SelectButton>Uncontrolled Open Demo</SelectButton>}
>
  <SelectOption value="Option 1">Option 1</SelectOption>
  <SelectOption value="Option 2">Option 2</SelectOption>
  <SelectOption value="Option 3">Option 3</SelectOption>
</SelectWrapper>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"controlled-value-value-onvaluechange-defaultvalue",children:"Controlled Value (value, onValueChange, defaultValue)"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["For a controlled value dev experience use the ",(0,jsx_runtime.jsx)(_components.code,{children:"value"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"onValueChange"}),", and ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"})," props."]}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--controlled-value"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectWrapper,
  SelectButton,
  SelectOption,
} from '../../component-library';

const [controlledValue, setControlledValue] = React.useState('');

<SelectWrapper
  defaultValue={'DefaultValue'}
  value={controlledValue}
  onValueChange={(value) => setControlledValue(value)}
  triggerComponent={<SelectButton>Controlled </SelectButton>}
>
  <SelectOption value="Option 1">Option 1</SelectOption>
  <SelectOption value="Option 2">Option 2</SelectOption>
  <SelectOption value="Option 3">Option 3</SelectOption>
</SelectWrapper>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"uncontrolled-value",children:"Uncontrolled Value"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["By default the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," will control the value internally if the ",(0,jsx_runtime.jsx)(_components.code,{children:"value"})," prop is not passed."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["When using ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectOption"})," as a child of ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," the ",(0,jsx_runtime.jsx)(_components.code,{children:"value"})," prop of ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectOption"})," will be used as the value of the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"}),` when selected.
Additionally when using `,(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," it will display the value of the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"}),"."]}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--uncontrolled-value"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectWrapper,
  SelectButton,
  SelectOption,
} from '../../component-library';

<SelectWrapper
  triggerComponent={<SelectButton>Uncontrolled Example</SelectButton>}
>
  <SelectOption value="Option 1">Option 1</SelectOption>
  <SelectOption value="Option 2">Option 2</SelectOption>
  <SelectOption value="Option 3">Option 3</SelectOption>
</SelectWrapper>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"ismultiselect",children:"isMultiSelect"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Setting the ",(0,jsx_runtime.jsx)(_components.code,{children:"isMultiSelect"})," to true will disabled the controlled open and uncontrolled open behavior of the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"}),`.
When `,(0,jsx_runtime.jsx)(_components.code,{children:"isMultiSelect"})," is true the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," will not control the open state internally and will not close when an option is selected."]}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--is-multi-select"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectWrapper,
  SelectButton,
  SelectOption,
} from '../../component-library';

<SelectWrapper
  isMultiSelect
  triggerComponent={<SelectButton>Demo</SelectButton>}
>
  <SelectOption value="Option 1">Option 1</SelectOption>
  <SelectOption value="Option 2">Option 2</SelectOption>
  <SelectOption value="Option 3">Option 3</SelectOption>
</SelectWrapper>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"useselectcontext",children:"useSelectContext"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["When building a component to be used inside ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," you can use ",(0,jsx_runtime.jsx)(_components.code,{children:"useSelectContext"})," to access the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," state and logic."]}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--use-select-context"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectWrapper,
  SelectButton,
  SelectOption,
  useSelectContext,
} from '../../component-library';

const CustomClose = () => {
  const { toggleUncontrolledOpen } = useSelectContext();

  return (
    <>
      <Text>Custom close button using SelectContext</Text>
      <Button block onClick={toggleUncontrolledOpen}>
        Close
      </Button>
    </>
  );
};

<SelectWrapper
  triggerComponent={<SelectButton>Uncontrolled Example</SelectButton>}
>
  <CustomClose />
  <SelectOption value="Option 1">Option 1</SelectOption>
  <SelectOption value="Option 2">Option 2</SelectOption>
  <SelectOption value="Option 3">Option 3</SelectOption>
</SelectWrapper>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"placeholder",children:"Placeholder"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"})," prop to set the placeholder value in ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," to be accessed for components within it."]}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--placeholder"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectWrapper,
  SelectButton,
  SelectOption,
} from '../../component-library';

<SelectWrapper placeholder="This is a placeholder" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"isdisabled",children:"isDisabled"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isDisabled"})," prop to set the disable ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," so it can be accessed to components within it."]}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--is-disabled"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectWrapper,
  SelectButton,
  SelectOption,
} from '../../component-library';

<SelectWrapper isDisabled triggerComponent={<SelectButton>Demo</SelectButton>}>
  <SelectOption value="Option 1">Option 1</SelectOption>
  <SelectOption value="Option 2">Option 2</SelectOption>
  <SelectOption value="Option 3">Option 3</SelectOption>
</SelectWrapper>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"isdanger",children:"isDanger"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isDanger"})," prop to set the danger ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," so it can be accessed to components within it."]}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--is-danger"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectWrapper,
  SelectButton,
  SelectOption,
} from '../../component-library';

<SelectWrapper isDanger triggerComponent={<SelectButton>Demo</SelectButton>}>
  <SelectOption value="Option 1">Option 1</SelectOption>
  <SelectOption value="Option 2">Option 2</SelectOption>
  <SelectOption value="Option 3">Option 3</SelectOption>
</SelectWrapper>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"popoverprops",children:"popoverProps"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"popoverProps"})," prop to pass props to the ",(0,jsx_runtime.jsx)(_components.code,{children:"Popover"})," component that wraps the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," children."]}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--popover-props"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectWrapper,
  SelectButton,
  SelectOption,
} from '../../component-library';
import { BackgroundColor } from '../../../helpers/constants/design-system';

<SelectWrapper
  popoverProps={{
    backgroundColor: BackgroundColor.goerli,
    padding: 4,
    isPortal: false,
  }}
  triggerComponent={<SelectButton>Demo</SelectButton>}
>
  <SelectOption value="Option 1">Option 1</SelectOption>
  <SelectOption value="Option 2">Option 2</SelectOption>
  <SelectOption value="Option 3">Option 3</SelectOption>
</SelectWrapper>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"onblur",children:"onBlur"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["By default onBlur is setup to close the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," when the user clicks outside of the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," or when the user tabs out of the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"}),`.
You can use the `,(0,jsx_runtime.jsx)(_components.code,{children:"onBlur"})," prop to pass a custom function to handle the onBlur event. This will override the default onBlur behavior and will require you to have setup a controlled open environment as well."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"The onBlur fires based on the if the Popover is open or closed and is disconnected from the trigger component."}),`
`,(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{id:"components-componentlibrary-selectwrapper--on-blur"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectWrapper,
  SelectButton,
  SelectOption,
} from '../../component-library';

const [onBlur, setOnBlur] = React.useState(0);

<SelectWrapper
  onBlur={() => setOnBlur(onBlur + 1)}
  triggerComponent={<SelectButton>onBlur Count: {onBlur}</SelectButton>}
>
  <Text>This is a demo of controlled onBlur.</Text>
</SelectWrapper>;
`})})]})}var select_wrapper_context=__webpack_require__("./ui/components/component-library/select-wrapper/select-wrapper.context.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let select_wrapper_stories={title:"Components/ComponentLibrary/SelectWrapper",component:select_wrapper.S,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},story:{inline:!1}}},argTypes:{placeholder:{control:{type:"text"}},defaultValue:{control:{type:"text"}},value:{control:{type:"text"}},isUncontrolledOpen:{control:{type:"boolean"}},isDanger:{control:{type:"boolean"}},isDisabled:{control:{type:"boolean"}},isMultiSelect:{control:{type:"boolean"}},onBlur:{action:"onBlur"}},args:{placeholder:"Select an option",triggerComponent:react.createElement(select_button.J,null,"Select an option")}};var Template=function(args){return react.createElement(select_wrapper.S,args,react.createElement(select_option.O,{value:"Option 1"},"Option 1"),react.createElement(select_option.O,{value:"Option 2"},"Option 2"),react.createElement(select_option.O,{value:"Option 3"},"Option 3"))},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var TriggerComponent=Template.bind({});TriggerComponent.args={placeholder:"",triggerComponent:react.createElement(select_button.J,null,"Trigger component")},TriggerComponent.storyName="triggerComponent";var Children=function(args){return react.createElement(react.Fragment,null,react.createElement(select_wrapper.S,_object_spread_props(_object_spread({},args),{triggerComponent:react.createElement(select_button.J,null,"Trigger Component")}),react.createElement(component_library_text.EY,{paddingLeft:2,paddingRight:2},"All elements contained in SelectWrapper will be rendered within the popover"),react.createElement(select_option.O,{value:"Child 1"},"Child 1"),react.createElement(select_option.O,{value:"Child 2"},"Child 2"),react.createElement(select_option.O,{value:"Child 3"},"Child 3")))},ControlledOpen=function(args){var _React_useState=_sliced_to_array(react.useState(!1),2),isOpen=_React_useState[0],setIsOpen=_React_useState[1];return react.createElement(react.Fragment,null,react.createElement(component_library_text.EY,null,"This demo is using props ",react.createElement("strong",null,"isOpen")," and"," ",react.createElement("strong",null,"onOpenChange")),react.createElement(select_wrapper.S,_object_spread_props(_object_spread({placeholder:"Controlled Open Demo",isOpen:isOpen,onOpenChange:setIsOpen},args),{triggerComponent:react.createElement(select_button.J,{onClick:function(){return setIsOpen(!isOpen)}},"Controlled Open Demo")}),react.createElement(select_option.O,{value:"Option 1"},"Option 1"),react.createElement(select_option.O,{value:"Option 2"},"Option 2"),react.createElement(select_option.O,{value:"Option 3"},"Option 3")))},UncontrolledOpen=Template.bind({});UncontrolledOpen.args={placeholder:"Uncontrolled Open Demo"};var ControlledValue=function(args){var _React_useState=_sliced_to_array(react.useState(""),2),controlledValue=_React_useState[0],setControlledValue=_React_useState[1];return react.createElement(react.Fragment,null,react.createElement(component_library_text.EY,null,"This demo is using props ",react.createElement("strong",null,"defaultValue"),","," ",react.createElement("strong",null,"value"),", and ",react.createElement("strong",null,"onValueChange")),react.createElement(select_wrapper.S,_object_spread_props(_object_spread({},args),{defaultValue:"DefaultValue",value:controlledValue,onValueChange:function(value){return setControlledValue(value)},triggerComponent:react.createElement(select_button.J,null,"Controlled ")}),react.createElement(select_option.O,{value:"Option 1"},"Option 1"),react.createElement(select_option.O,{value:"Option 2"},"Option 2"),react.createElement(select_option.O,{value:"Option 3"},"Option 3")))},UncontrolledValue=Template.bind({});UncontrolledValue.args={triggerComponent:react.createElement(select_button.J,null,"Uncontrolled Value Demo"),placeholder:"Uncontrolled Value Demo"};var UseSelectContext=function(args){return react.createElement(react.Fragment,null,react.createElement(select_wrapper.S,_object_spread_props(_object_spread({},args),{triggerComponent:react.createElement(select_button.J,null,"Uncontrolled Example")}),react.createElement(function(){var toggleUncontrolledOpen=(0,select_wrapper_context.h)().toggleUncontrolledOpen;return react.createElement(react.Fragment,null,react.createElement(component_library_text.EY,null,"Custom close button using SelectContext"),react.createElement(component_library_button.$n,{block:!0,onClick:toggleUncontrolledOpen},"Close"))},null),react.createElement(select_option.O,{value:"Option 1"},"Option 1"),react.createElement(select_option.O,{value:"Option 2"},"Option 2"),react.createElement(select_option.O,{value:"Option 3"},"Option 3")))};UseSelectContext.storyName="useSelectContext";var IsMultiSelect=function(args){return react.createElement(react.Fragment,null,react.createElement(component_library_text.EY,null,"When ",react.createElement("strong",null,"isMultiSelect")," prop is ",react.createElement("i",null,"true")," the popover will remain open after a selection is made"),react.createElement(select_wrapper.S,_object_spread_props(_object_spread({},args),{triggerComponent:react.createElement(select_button.J,null,"Demo")}),react.createElement(select_option.O,{value:"Option 1"},"Option 1"),react.createElement(select_option.O,{value:"Option 2"},"Option 2"),react.createElement(select_option.O,{value:"Option 3"},"Option 3")))};IsMultiSelect.args={placeholder:"Select Option",isMultiSelect:!0},IsMultiSelect.storyName="isMultiSelect";var Placeholder=Template.bind({});Placeholder.args={placeholder:"Placeholder demo"};var IsDisabled=Template.bind({});IsDisabled.args={isDisabled:!0},IsDisabled.storyName="isDisabled";var IsDanger=Template.bind({});IsDanger.args={isDanger:!0},IsDanger.storyName="isDanger";var PopoverProps=Template.bind({});PopoverProps.args={popoverProps:{backgroundColor:design_system.i0.goerli,padding:4,isPortal:!1}},PopoverProps.storyName="popoverProps";var OnBlur=function(args){var _React_useState=_sliced_to_array(react.useState(0),2),onBlur=_React_useState[0],setOnBlur=_React_useState[1];return react.createElement(react.Fragment,null,react.createElement(select_wrapper.S,_object_spread_props(_object_spread({},args),{onBlur:function(){setOnBlur(onBlur+1),(0,dist.o1)("onBlur")},placeholder:"",triggerComponent:react.createElement(select_button.J,null,"onBlur Count: ",onBlur)}),react.createElement(component_library_text.EY,null,"This is a demo of controlled onBlur.")))};OnBlur.storyName="onBlur",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  return <SelectWrapper {...args}>
      <SelectOption value="Option 1">Option 1</SelectOption>
      <SelectOption value="Option 2">Option 2</SelectOption>
      <SelectOption value="Option 3">Option 3</SelectOption>
    </SelectWrapper>;
}`,...DefaultStory.parameters?.docs?.source}}},TriggerComponent.parameters={...TriggerComponent.parameters,docs:{...TriggerComponent.parameters?.docs,source:{originalSource:`args => {
  return <SelectWrapper {...args}>
      <SelectOption value="Option 1">Option 1</SelectOption>
      <SelectOption value="Option 2">Option 2</SelectOption>
      <SelectOption value="Option 3">Option 3</SelectOption>
    </SelectWrapper>;
}`,...TriggerComponent.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`args => {
  return <>
      <SelectWrapper {...args} triggerComponent={<SelectButton>Trigger Component</SelectButton>}>
        <Text paddingLeft={2} paddingRight={2}>
          All elements contained in SelectWrapper will be rendered within the
          popover
        </Text>
        <SelectOption value="Child 1">Child 1</SelectOption>
        <SelectOption value="Child 2">Child 2</SelectOption>
        <SelectOption value="Child 3">Child 3</SelectOption>
      </SelectWrapper>
    </>;
}`,...Children.parameters?.docs?.source}}},ControlledOpen.parameters={...ControlledOpen.parameters,docs:{...ControlledOpen.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <>
      <Text>
        This demo is using props <strong>isOpen</strong> and{' '}
        <strong>onOpenChange</strong>
      </Text>
      <SelectWrapper placeholder="Controlled Open Demo" isOpen={isOpen} onOpenChange={setIsOpen} {...args} triggerComponent={<SelectButton onClick={() => setIsOpen(!isOpen)}>
            Controlled Open Demo
          </SelectButton>}>
        <SelectOption value="Option 1">Option 1</SelectOption>
        <SelectOption value="Option 2">Option 2</SelectOption>
        <SelectOption value="Option 3">Option 3</SelectOption>
      </SelectWrapper>
    </>;
}`,...ControlledOpen.parameters?.docs?.source}}},UncontrolledOpen.parameters={...UncontrolledOpen.parameters,docs:{...UncontrolledOpen.parameters?.docs,source:{originalSource:`args => {
  return <SelectWrapper {...args}>
      <SelectOption value="Option 1">Option 1</SelectOption>
      <SelectOption value="Option 2">Option 2</SelectOption>
      <SelectOption value="Option 3">Option 3</SelectOption>
    </SelectWrapper>;
}`,...UncontrolledOpen.parameters?.docs?.source}}},ControlledValue.parameters={...ControlledValue.parameters,docs:{...ControlledValue.parameters?.docs,source:{originalSource:`args => {
  const [controlledValue, setControlledValue] = React.useState<string>('');
  return <>
      <Text>
        This demo is using props <strong>defaultValue</strong>,{' '}
        <strong>value</strong>, and <strong>onValueChange</strong>
      </Text>
      <SelectWrapper {...args} defaultValue={'DefaultValue'} value={controlledValue} onValueChange={value => setControlledValue(value)} triggerComponent={<SelectButton>Controlled </SelectButton>}>
        <SelectOption value="Option 1">Option 1</SelectOption>
        <SelectOption value="Option 2">Option 2</SelectOption>
        <SelectOption value="Option 3">Option 3</SelectOption>
      </SelectWrapper>
    </>;
}`,...ControlledValue.parameters?.docs?.source}}},UncontrolledValue.parameters={...UncontrolledValue.parameters,docs:{...UncontrolledValue.parameters?.docs,source:{originalSource:`args => {
  return <SelectWrapper {...args}>
      <SelectOption value="Option 1">Option 1</SelectOption>
      <SelectOption value="Option 2">Option 2</SelectOption>
      <SelectOption value="Option 3">Option 3</SelectOption>
    </SelectWrapper>;
}`,...UncontrolledValue.parameters?.docs?.source}}},UseSelectContext.parameters={...UseSelectContext.parameters,docs:{...UseSelectContext.parameters?.docs,source:{originalSource:`args => {
  // Note that the SelectContext is being used inside a component, because the SelectContext needs to be called within the SelectWrapper component and not before
  const CustomClose = () => {
    const {
      toggleUncontrolledOpen
    } = useSelectContext();
    return <>
        <Text>Custom close button using SelectContext</Text>
        <Button block onClick={toggleUncontrolledOpen}>
          Close
        </Button>
      </>;
  };
  return <>
      <SelectWrapper {...args} triggerComponent={<SelectButton>Uncontrolled Example</SelectButton>}>
        <CustomClose />
        <SelectOption value="Option 1">Option 1</SelectOption>
        <SelectOption value="Option 2">Option 2</SelectOption>
        <SelectOption value="Option 3">Option 3</SelectOption>
      </SelectWrapper>
    </>;
}`,...UseSelectContext.parameters?.docs?.source}}},IsMultiSelect.parameters={...IsMultiSelect.parameters,docs:{...IsMultiSelect.parameters?.docs,source:{originalSource:`args => {
  return <>
      <Text>
        When <strong>isMultiSelect</strong> prop is <i>true</i> the popover will
        remain open after a selection is made
      </Text>
      <SelectWrapper {...args} triggerComponent={<SelectButton>Demo</SelectButton>}>
        <SelectOption value="Option 1">Option 1</SelectOption>
        <SelectOption value="Option 2">Option 2</SelectOption>
        <SelectOption value="Option 3">Option 3</SelectOption>
      </SelectWrapper>
    </>;
}`,...IsMultiSelect.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:`args => {
  return <SelectWrapper {...args}>
      <SelectOption value="Option 1">Option 1</SelectOption>
      <SelectOption value="Option 2">Option 2</SelectOption>
      <SelectOption value="Option 3">Option 3</SelectOption>
    </SelectWrapper>;
}`,...Placeholder.parameters?.docs?.source}}},IsDisabled.parameters={...IsDisabled.parameters,docs:{...IsDisabled.parameters?.docs,source:{originalSource:`args => {
  return <SelectWrapper {...args}>
      <SelectOption value="Option 1">Option 1</SelectOption>
      <SelectOption value="Option 2">Option 2</SelectOption>
      <SelectOption value="Option 3">Option 3</SelectOption>
    </SelectWrapper>;
}`,...IsDisabled.parameters?.docs?.source}}},IsDanger.parameters={...IsDanger.parameters,docs:{...IsDanger.parameters?.docs,source:{originalSource:`args => {
  return <SelectWrapper {...args}>
      <SelectOption value="Option 1">Option 1</SelectOption>
      <SelectOption value="Option 2">Option 2</SelectOption>
      <SelectOption value="Option 3">Option 3</SelectOption>
    </SelectWrapper>;
}`,...IsDanger.parameters?.docs?.source}}},PopoverProps.parameters={...PopoverProps.parameters,docs:{...PopoverProps.parameters?.docs,source:{originalSource:`args => {
  return <SelectWrapper {...args}>
      <SelectOption value="Option 1">Option 1</SelectOption>
      <SelectOption value="Option 2">Option 2</SelectOption>
      <SelectOption value="Option 3">Option 3</SelectOption>
    </SelectWrapper>;
}`,...PopoverProps.parameters?.docs?.source}}},OnBlur.parameters={...OnBlur.parameters,docs:{...OnBlur.parameters?.docs,source:{originalSource:`args => {
  const [onBlur, setOnBlur] = React.useState(0);
  return <>
      <SelectWrapper {...args} onBlur={() => {
      setOnBlur(onBlur + 1);
      actions('onBlur');
    }} placeholder="" triggerComponent={<SelectButton>onBlur Count: {onBlur}</SelectButton>}>
        <Text>This is a demo of controlled onBlur.</Text>
      </SelectWrapper>
    </>;
}`,...OnBlur.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","TriggerComponent","Children","ControlledOpen","UncontrolledOpen","ControlledValue","UncontrolledValue","UseSelectContext","IsMultiSelect","Placeholder","IsDisabled","IsDanger","PopoverProps","OnBlur"]}}]);
//# sourceMappingURL=components-component-library-select-wrapper-select-wrapper-stories.21b7a288.iframe.bundle.js.map