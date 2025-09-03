"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[27367],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/input/input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoComplete:()=>AutoComplete,AutoFocus:()=>AutoFocus,DefaultStory:()=>DefaultStory,DefaultValue:()=>DefaultValue,DisableStateStyles:()=>DisableStateStyles,Disabled:()=>Disabled,ErrorStory:()=>ErrorStory,MaxLength:()=>MaxLength,ReadOnly:()=>ReadOnly,Ref:()=>Ref,RequiredStory:()=>RequiredStory,TextVariantStory:()=>TextVariantStory,Type:()=>Type,__namedExportsOrder:()=>__namedExportsOrder,default:()=>input_stories});var react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),input_types=__webpack_require__("./ui/components/component-library/input/input.types.ts"),input=__webpack_require__("./ui/components/component-library/input/input.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre",h4:"h4"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"input",children:"Input"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Input"})," lets user enter a text data. It’s a light-weighted borderless input used inside of custom inputs. See ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-textfield--default-story#textfield",children:"TextField"})," for common text input."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-input--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:input.p}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"type",children:"Type"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"type"})," prop to change the type of input."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Possible types include:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"InputType.Text"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"InputType.Number"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"InputType.Password"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"InputType.Search"})}),`
`]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"InputType.Text"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-input--type"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Input, InputType } from '../../component-library';

<Input type={InputType.Text} />
<Input type={InputType.Number} />
<Input type={InputType.Password} />
<Input type={InputType.Search} />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"ref",children:"Ref"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"ref"})," prop to access the ref of the ",(0,jsx_runtime.jsx)(_components.code,{children:"<input />"})," html element of ",(0,jsx_runtime.jsx)(_components.code,{children:"Input"}),". This is useful for focusing the input from a button or other component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-input--ref"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Button, Input } from '../../component-library';

const inputRef = useRef(null);
const [value, setValue] = useState('');
const handleOnClick = () => {
  inputRef.current.focus();
};
const handleOnChange = (e) => {
  setValue(e.target.value);
};

<Input
  ref={inputRef}
  value={value}
  onChange={handleOnChange}
/>
<Button marginLeft={1} onClick={handleOnClick}>
  Edit
</Button>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"auto-complete",children:"Auto Complete"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"autoComplete"})," prop to set the autocomplete html attribute. It allows the browser to predict the value based on earlier typed values."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-input--auto-complete"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Input, InputType } from '../../component-library';

<Input type={InputType.Password} autoComplete />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"auto-focus",children:"Auto Focus"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"autoFocus"})," prop to focus the ",(0,jsx_runtime.jsx)(_components.code,{children:"Input"})," during the first mount"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["To view story see ",(0,jsx_runtime.jsx)(_components.a,{href:"/story/components-componentlibrary-input--auto-focus",children:"Canvas tab"}),". Removing it from docs because created annoying reading experience 😁"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Input } from '../../component-library';

<Input autoFocus />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"default-value",children:"Default Value"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"})," prop to set the default value of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Input"}),". Used for uncontrolled inputs."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-input--default-value"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Input } from '../../component-library';

<Input defaultValue="default value" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"disabled"})," prop to set the disabled state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Input"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-input--disabled"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Input } from '../../component-library';

<Input disabled />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"error",children:"Error"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"error"})," prop to set ",(0,jsx_runtime.jsx)(_components.code,{children:'aria-invalid="true"'}),". This helps with screen readers for accessibility. There is no visual indicator for ",(0,jsx_runtime.jsx)(_components.code,{children:"error"})," this should be handled in the parent component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-input--error-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Input } from '../../component-library';

<Input error />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"max-length",children:"Max Length"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"maxLength"})," prop to set the maximum allowed input characters for the ",(0,jsx_runtime.jsx)(_components.code,{children:"Input"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-input--max-length"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Input } from '../../component-library';

<Input maxLength={10} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"read-only",children:"Read Only"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"readOnly"})," prop to set the ",(0,jsx_runtime.jsx)(_components.code,{children:"Input"})," to read only"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-input--read-only"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Input } from '../../component-library';

<Input readOnly />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"required",children:"Required"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"required"})," prop to set the html ",(0,jsx_runtime.jsx)(_components.code,{children:"required"})," attribute used by the browser api. There is no visual indicator for ",(0,jsx_runtime.jsx)(_components.code,{children:"required"})," this should be handled in the parent component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-input--required"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Input } from '../../component-library';

// No visual indicator. Used by the browser api
<Input required />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"disable-style-states",children:"Disable Style States"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"disableStyleStates"})," to remove disabled and focus styles"]}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"important-note",children:"IMPORTANT NOTE"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["This sets the CSS to ",(0,jsx_runtime.jsx)(_components.code,{children:"outline: none"})," so ensure there is a proper fallback to enable accessibility for keyboard only and vision impaired users. Check ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"})," source code to see how it is done properly."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-input--disable-state-styles"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Input } from '../../component-library';

<Input disableStyleStates />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"text-variant",children:"Text Variant"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"textVariant"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"TextVariant"})," enum to change the font size and style of the input"]}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"important-note-1",children:"IMPORTANT NOTE"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"This should RARELY be used but it is available for custom inputs that require larger text"}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-input--text-variant-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextVariant } from '../../../helpers/constants/design-system';
import { Input } from '../../component-library';

<Input
  value={value}
  onChange={handleOnChange}
  textVariant={TextVariant.displayMd}
/>
<Input
  value={value}
  onChange={handleOnChange}
  textVariant={TextVariant.headingLg}
/>
<Input
  value={value}
  onChange={handleOnChange}
  textVariant={TextVariant.headingMd}
/>
<Input
  value={value}
  onChange={handleOnChange}
  textVariant={TextVariant.headingSm}
/>
<Input
  value={value}
  onChange={handleOnChange}
  textVariant={TextVariant.bodyLgMedium}
/>
<Input
  value={value}
  onChange={handleOnChange}
  textVariant={TextVariant.bodyMdBold}
/>
<Input
  value={value}
  onChange={handleOnChange}
  textVariant={TextVariant.bodyMd}
/>
<Input
  value={value}
  onChange={handleOnChange}
  textVariant={TextVariant.bodySm}
/>
<Input
  value={value}
  onChange={handleOnChange}
  textVariant={TextVariant.bodySmBold}
/>
<Input
  value={value}
  onChange={handleOnChange}
  textVariant={TextVariant.bodyXs}
/>
`})})]})}var box=__webpack_require__("./ui/components/component-library/box/index.ts"),component_library_button=__webpack_require__("./ui/components/component-library/button/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var marginSizeControlOptions=[void 0,0,1,2,3,4,5,6,7,8,9,10,11,12,"auto"];let input_stories={title:"Components/ComponentLibrary/Input",component:input.p,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{autoComplete:{control:"boolean"},autoFocus:{control:"boolean"},className:{control:"text"},defaultValue:{control:"text"},disabled:{control:"boolean"},disableStateStyles:{control:"boolean"},error:{control:"boolean"},id:{control:"text"},maxLength:{control:"number"},name:{control:"text"},onBlur:{action:"onBlur"},onChange:{action:"onChange"},onFocus:{action:"onFocus"},placeholder:{control:"text"},readOnly:{control:"boolean"},required:{control:"boolean"},type:{control:"select",options:Object.values(input_types.N)},value:{control:"text"},textVariant:{control:"select",options:Object.values(design_system.J3)},marginTop:{options:marginSizeControlOptions,control:"select",table:{category:"box props"}},marginRight:{options:marginSizeControlOptions,control:"select",table:{category:"box props"}},marginBottom:{options:marginSizeControlOptions,control:"select",table:{category:"box props"}},marginLeft:{options:marginSizeControlOptions,control:"select",table:{category:"box props"}}},args:{placeholder:"Placeholder...",value:""}};var Template=function(args){var _useArgs=_sliced_to_array((0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),2),value=_useArgs[0].value,updateArgs=_useArgs[1];return react.createElement(input.p,_object_spread_props(_object_spread({},args),{value:value,onChange:function(e){updateArgs({value:e.target.value})}}))},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var Type=function(args){return react.createElement(box.a,{display:design_system.nl.InlineFlex,flexDirection:design_system.bo.Column,gap:4},react.createElement(input.p,_object_spread_props(_object_spread({},args),{placeholder:"Default"})),react.createElement(input.p,_object_spread_props(_object_spread({},args),{type:input_types.N.Password,placeholder:"Password"})),react.createElement(input.p,_object_spread_props(_object_spread({},args),{type:input_types.N.Number,placeholder:"Number"})),react.createElement(input.p,_object_spread_props(_object_spread({},args),{type:input_types.N.Search,placeholder:"Search"})))};Type.args={value:void 0};var Ref=function(args){var _useArgs=_sliced_to_array((0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),2),value=_useArgs[0].value,updateArgs=_useArgs[1],inputRef=(0,react.useRef)(null);return react.createElement(box.a,{display:design_system.nl.Flex},react.createElement(input.p,_object_spread_props(_object_spread({},args),{ref:inputRef,value:value,onChange:function(e){updateArgs({value:e.target.value})}})),react.createElement(component_library_button.$n,{variant:component_library_button.Ak.Primary,marginLeft:1,onClick:function(){var _inputRef_current;null==(_inputRef_current=inputRef.current)||_inputRef_current.focus()}},"Edit"))},AutoComplete=Template.bind({});AutoComplete.args={autoComplete:!0,type:input_types.N.Password,placeholder:"Enter password"};var AutoFocus=Template.bind({});AutoFocus.args={autoFocus:!0};var DefaultValue=function(){return react.createElement(input.p,{placeholder:"Default value",defaultValue:"Default value"})},Disabled=Template.bind({});Disabled.args={disabled:!0};var ErrorStory=Template.bind({});ErrorStory.args={error:!0},ErrorStory.storyName="Error";var MaxLength=Template.bind({});MaxLength.args={maxLength:10,placeholder:"Max length 10"};var ReadOnly=Template.bind({});ReadOnly.args={readOnly:!0,value:"Read only"};var RequiredStory=Template.bind({});RequiredStory.args={required:!0,placeholder:"Required"},RequiredStory.storyName="Required";var DisableStateStyles=Template.bind({});DisableStateStyles.args={disableStateStyles:!0};var TextVariantStory=function(args){var _useArgs=_sliced_to_array((0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),2),value=_useArgs[0].value,updateArgs=_useArgs[1],handleOnChange=function(e){updateArgs({value:e.target.value})};return react.createElement(box.a,{display:design_system.nl.InlineFlex,flexDirection:design_system.bo.Column,gap:4},react.createElement(input.p,_object_spread_props(_object_spread({},args),{value:value,onChange:handleOnChange,textVariant:design_system.J3.displayMd})),react.createElement(input.p,_object_spread_props(_object_spread({},args),{value:value,onChange:handleOnChange,textVariant:design_system.J3.headingLg})),react.createElement(input.p,_object_spread_props(_object_spread({},args),{value:value,onChange:handleOnChange,textVariant:design_system.J3.headingMd})),react.createElement(input.p,_object_spread_props(_object_spread({},args),{value:value,onChange:handleOnChange,textVariant:design_system.J3.headingSm})),react.createElement(input.p,_object_spread_props(_object_spread({},args),{value:value,onChange:handleOnChange,textVariant:design_system.J3.bodyLgMedium})),react.createElement(input.p,_object_spread_props(_object_spread({},args),{value:value,onChange:handleOnChange,textVariant:design_system.J3.bodyMdBold})),react.createElement(input.p,_object_spread_props(_object_spread({},args),{value:value,onChange:handleOnChange,textVariant:design_system.J3.bodyMd})),react.createElement(input.p,_object_spread_props(_object_spread({},args),{value:value,onChange:handleOnChange,textVariant:design_system.J3.bodySm})),react.createElement(input.p,_object_spread_props(_object_spread({},args),{value:value,onChange:handleOnChange,textVariant:design_system.J3.bodySmBold})),react.createElement(input.p,_object_spread_props(_object_spread({},args),{value:value,onChange:handleOnChange,textVariant:design_system.J3.bodyXs})))};TextVariantStory.storyName="Text Variant",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Input {...args} value={value} onChange={handleOnChange} />;
}`,...DefaultStory.parameters?.docs?.source}}},Type.parameters={...Type.parameters,docs:{...Type.parameters?.docs,source:{originalSource:`args => <Box display={Display.InlineFlex} flexDirection={FlexDirection.Column} gap={4}>
    <Input {...args} placeholder="Default" />
    <Input {...args} type={InputType.Password} placeholder="Password" />
    <Input {...args} type={InputType.Number} placeholder="Number" />
    <Input {...args} type={InputType.Search} placeholder="Search" />
  </Box>`,...Type.parameters?.docs?.source}}},Ref.parameters={...Ref.parameters,docs:{...Ref.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnClick = () => {
    inputRef.current?.focus();
  };
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Box display={Display.Flex}>
      <Input {...args} ref={inputRef} value={value} onChange={handleOnChange} />
      <Button variant={ButtonVariant.Primary} marginLeft={1} onClick={handleOnClick}>
        Edit
      </Button>
    </Box>;
}`,...Ref.parameters?.docs?.source}}},AutoComplete.parameters={...AutoComplete.parameters,docs:{...AutoComplete.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Input {...args} value={value} onChange={handleOnChange} />;
}`,...AutoComplete.parameters?.docs?.source}}},AutoFocus.parameters={...AutoFocus.parameters,docs:{...AutoFocus.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Input {...args} value={value} onChange={handleOnChange} />;
}`,...AutoFocus.parameters?.docs?.source}}},DefaultValue.parameters={...DefaultValue.parameters,docs:{...DefaultValue.parameters?.docs,source:{originalSource:'() => <Input placeholder="Default value" defaultValue="Default value" />',...DefaultValue.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Input {...args} value={value} onChange={handleOnChange} />;
}`,...Disabled.parameters?.docs?.source}}},ErrorStory.parameters={...ErrorStory.parameters,docs:{...ErrorStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Input {...args} value={value} onChange={handleOnChange} />;
}`,...ErrorStory.parameters?.docs?.source}}},MaxLength.parameters={...MaxLength.parameters,docs:{...MaxLength.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Input {...args} value={value} onChange={handleOnChange} />;
}`,...MaxLength.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Input {...args} value={value} onChange={handleOnChange} />;
}`,...ReadOnly.parameters?.docs?.source}}},RequiredStory.parameters={...RequiredStory.parameters,docs:{...RequiredStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Input {...args} value={value} onChange={handleOnChange} />;
}`,...RequiredStory.parameters?.docs?.source}}},DisableStateStyles.parameters={...DisableStateStyles.parameters,docs:{...DisableStateStyles.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Input {...args} value={value} onChange={handleOnChange} />;
}`,...DisableStateStyles.parameters?.docs?.source}}},TextVariantStory.parameters={...TextVariantStory.parameters,docs:{...TextVariantStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Box display={Display.InlineFlex} flexDirection={FlexDirection.Column} gap={4}>
      <Input {...args} value={value} onChange={handleOnChange} textVariant={TextVariant.displayMd} />
      <Input {...args} value={value} onChange={handleOnChange} textVariant={TextVariant.headingLg} />
      <Input {...args} value={value} onChange={handleOnChange} textVariant={TextVariant.headingMd} />
      <Input {...args} value={value} onChange={handleOnChange} textVariant={TextVariant.headingSm} />
      <Input {...args} value={value} onChange={handleOnChange} textVariant={TextVariant.bodyLgMedium} />
      <Input {...args} value={value} onChange={handleOnChange} textVariant={TextVariant.bodyMdBold} />
      <Input {...args} value={value} onChange={handleOnChange} textVariant={TextVariant.bodyMd} />
      <Input {...args} value={value} onChange={handleOnChange} textVariant={TextVariant.bodySm} />
      <Input {...args} value={value} onChange={handleOnChange} textVariant={TextVariant.bodySmBold} />
      <Input {...args} value={value} onChange={handleOnChange} textVariant={TextVariant.bodyXs} />
    </Box>;
}`,...TextVariantStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Type","Ref","AutoComplete","AutoFocus","DefaultValue","Disabled","ErrorStory","MaxLength","ReadOnly","RequiredStory","DisableStateStyles","TextVariantStory"];try{DefaultStory.displayName="DefaultStory",DefaultStory.__docgenInfo={description:"",displayName:"DefaultStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/input/input.stories.tsx#DefaultStory"]={docgenInfo:DefaultStory.__docgenInfo,name:"DefaultStory",path:"ui/components/component-library/input/input.stories.tsx#DefaultStory"})}catch(__react_docgen_typescript_loader_error){}try{Type.displayName="Type",Type.__docgenInfo={description:"",displayName:"Type",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/input/input.stories.tsx#Type"]={docgenInfo:Type.__docgenInfo,name:"Type",path:"ui/components/component-library/input/input.stories.tsx#Type"})}catch(__react_docgen_typescript_loader_error){}try{Ref.displayName="Ref",Ref.__docgenInfo={description:"",displayName:"Ref",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/input/input.stories.tsx#Ref"]={docgenInfo:Ref.__docgenInfo,name:"Ref",path:"ui/components/component-library/input/input.stories.tsx#Ref"})}catch(__react_docgen_typescript_loader_error){}try{AutoComplete.displayName="AutoComplete",AutoComplete.__docgenInfo={description:"",displayName:"AutoComplete",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/input/input.stories.tsx#AutoComplete"]={docgenInfo:AutoComplete.__docgenInfo,name:"AutoComplete",path:"ui/components/component-library/input/input.stories.tsx#AutoComplete"})}catch(__react_docgen_typescript_loader_error){}try{AutoFocus.displayName="AutoFocus",AutoFocus.__docgenInfo={description:"",displayName:"AutoFocus",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/input/input.stories.tsx#AutoFocus"]={docgenInfo:AutoFocus.__docgenInfo,name:"AutoFocus",path:"ui/components/component-library/input/input.stories.tsx#AutoFocus"})}catch(__react_docgen_typescript_loader_error){}try{Disabled.displayName="Disabled",Disabled.__docgenInfo={description:"",displayName:"Disabled",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/input/input.stories.tsx#Disabled"]={docgenInfo:Disabled.__docgenInfo,name:"Disabled",path:"ui/components/component-library/input/input.stories.tsx#Disabled"})}catch(__react_docgen_typescript_loader_error){}try{ErrorStory.displayName="ErrorStory",ErrorStory.__docgenInfo={description:"",displayName:"ErrorStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/input/input.stories.tsx#ErrorStory"]={docgenInfo:ErrorStory.__docgenInfo,name:"ErrorStory",path:"ui/components/component-library/input/input.stories.tsx#ErrorStory"})}catch(__react_docgen_typescript_loader_error){}try{MaxLength.displayName="MaxLength",MaxLength.__docgenInfo={description:"",displayName:"MaxLength",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/input/input.stories.tsx#MaxLength"]={docgenInfo:MaxLength.__docgenInfo,name:"MaxLength",path:"ui/components/component-library/input/input.stories.tsx#MaxLength"})}catch(__react_docgen_typescript_loader_error){}try{ReadOnly.displayName="ReadOnly",ReadOnly.__docgenInfo={description:"",displayName:"ReadOnly",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/input/input.stories.tsx#ReadOnly"]={docgenInfo:ReadOnly.__docgenInfo,name:"ReadOnly",path:"ui/components/component-library/input/input.stories.tsx#ReadOnly"})}catch(__react_docgen_typescript_loader_error){}try{RequiredStory.displayName="RequiredStory",RequiredStory.__docgenInfo={description:"",displayName:"RequiredStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/input/input.stories.tsx#RequiredStory"]={docgenInfo:RequiredStory.__docgenInfo,name:"RequiredStory",path:"ui/components/component-library/input/input.stories.tsx#RequiredStory"})}catch(__react_docgen_typescript_loader_error){}try{DisableStateStyles.displayName="DisableStateStyles",DisableStateStyles.__docgenInfo={description:"",displayName:"DisableStateStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/input/input.stories.tsx#DisableStateStyles"]={docgenInfo:DisableStateStyles.__docgenInfo,name:"DisableStateStyles",path:"ui/components/component-library/input/input.stories.tsx#DisableStateStyles"})}catch(__react_docgen_typescript_loader_error){}try{TextVariantStory.displayName="TextVariantStory",TextVariantStory.__docgenInfo={description:"",displayName:"TextVariantStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/input/input.stories.tsx#TextVariantStory"]={docgenInfo:TextVariantStory.__docgenInfo,name:"TextVariantStory",path:"ui/components/component-library/input/input.stories.tsx#TextVariantStory"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-component-library-input-input-stories.6027bdd6.iframe.bundle.js.map