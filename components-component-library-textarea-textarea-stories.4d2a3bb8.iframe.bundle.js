"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[76341],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/textarea/textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoFocus:()=>AutoFocus,ColsRows:()=>ColsRows,DefaultStory:()=>DefaultStory,DefaultValue:()=>DefaultValue,ErrorStory:()=>ErrorStory,IsDisabled:()=>IsDisabled,MaxLength:()=>MaxLength,ReadOnly:()=>ReadOnly,Required:()=>Required,Resize:()=>Resize,__namedExportsOrder:()=>__namedExportsOrder,default:()=>textarea_stories});var react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),textarea_types=__webpack_require__("./ui/components/component-library/textarea/textarea.types.ts"),textarea_textarea=__webpack_require__("./ui/components/component-library/textarea/textarea.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",a:"a",pre:"pre",ul:"ul",li:"li"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"textarea",children:"Textarea"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Textarea"})," lets user enter multiple lines of text data into a boxed field"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textarea--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.ov,{of:textarea_textarea.T}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"auto-focus",children:"Auto Focus"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"autoFocus"})," prop to focus the ",(0,jsx_runtime.jsx)(_components.code,{children:"Textarea"})," during the first mount"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["To view story see ",(0,jsx_runtime.jsx)(_components.a,{href:"/story/components-componentlibrary-textarea--auto-complete",children:"Canvas tab"}),". Removing it from docs because created annoying reading experience 😁"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Textarea } from '../../component-library';

<Textarea autoFocus />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"cols-rows",children:"Cols Rows"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"cols"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"rows"})," props to set the number of columns and rows of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Textarea"})]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"cols"})," prop specifies the visible width of a ",(0,jsx_runtime.jsx)(_components.code,{children:"Textarea"})]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"rows"})," prop specifies the visible height of a ",(0,jsx_runtime.jsx)(_components.code,{children:"Textarea"}),", in lines."]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textarea--cols-rows"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Textarea } from '../../component-library';

<Textarea cols={50} rows={4} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"default-value",children:"Default Value"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"})," prop to set the default value of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Textarea"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textarea--default-value"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Textarea } from '../../component-library';

<Textarea defaultValue="default value" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"isdisabled",children:"IsDisabled"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isDisabled"})," prop to set the disabled state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Textarea"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textarea--is-disabled"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Textarea } from '../../component-library';

<Textarea isDisabled />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"error",children:"Error"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"error"})," prop to set the error state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Textarea"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textarea--error-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Textarea } from '../../component-library';

<Textarea error />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"max-length",children:"Max Length"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"maxLength"})," prop to set the maximum allowed input characters for the ",(0,jsx_runtime.jsx)(_components.code,{children:"Textarea"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textarea--max-length"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Textarea } from '../../component-library';

<Textarea maxLength={13} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"read-only",children:"Read Only"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"readOnly"})," prop to set the ",(0,jsx_runtime.jsx)(_components.code,{children:"Textarea"})," to read only."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textarea--read-only"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Textarea } from '../../component-library';

<Textarea readOnly />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"required",children:"Required"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"required"})," prop to set the ",(0,jsx_runtime.jsx)(_components.code,{children:"Textarea"})," to required. Currently there is no visual difference to the ",(0,jsx_runtime.jsx)(_components.code,{children:"Textarea"})," when required."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textarea--required"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Textarea } from '../../component-library';

// Currently no visual difference
<Textarea required />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"resize",children:"Resize"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"resize"})," prop to set the resize state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Textarea"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"TextareaResize.Vertical"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textarea--resize"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Textarea, TextareaResize } from '../../component-library';

<Textarea resize={TextareaResize.Vertical} />
<Textarea resize={TextareaResize.Horizontal} />
<Textarea resize={TextareaResize.None} />
<Textarea resize={TextareaResize.Both} />
<Textarea resize={TextareaResize.Inherit} />
<Textarea resize={TextareaResize.Initial} />
`})})]})}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let textarea_stories={title:"Components/ComponentLibrary/Textarea",component:textarea_textarea.T,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{autoFocus:{control:"boolean"},className:{control:"text"},cols:{control:"number"},defaultValue:{control:"text"},isDisabled:{control:"boolean"},error:{control:"boolean"},id:{control:"text"},name:{control:"text"},onBlur:{action:"onBlur"},onChange:{action:"onChange"},onClick:{action:"onClick"},onFocus:{action:"onFocus"},placeholder:{control:"text"},readOnly:{control:"boolean"},required:{control:"boolean"},resize:{control:{type:"select",options:Object.values(textarea_types.$)}},rows:{control:"number"},value:{control:"text"}},args:{placeholder:"Placeholder..."}};var Template=function(args){var _useArgs=_sliced_to_array((0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),2),value=_useArgs[0].value,updateArgs=_useArgs[1];return react.createElement(textarea_textarea.T,_object_spread_props(_object_spread({},args),{value:value,onChange:function(e){updateArgs({value:e.target.value})}}))},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var AutoFocus=Template.bind({});AutoFocus.args={autoFocus:!0,placeholder:"Auto focus"};var ColsRows=Template.bind({});ColsRows.args={cols:50,rows:4,placeholder:"cols: 50, rows: 4"};var DefaultValue=Template.bind({});DefaultValue.args={defaultValue:"Default value"};var IsDisabled=Template.bind({});IsDisabled.args={disabled:!0,placeholder:"Disabled"};var ErrorStory=Template.bind({});ErrorStory.args={error:!0,placeholder:"Error"},ErrorStory.storyName="Error";var MaxLength=Template.bind({});MaxLength.args={maxLength:13,value:"Max length 13"};var ReadOnly=Template.bind({});ReadOnly.args={readOnly:!0,value:"Read only"};var Required=Template.bind({});Required.args={required:!0,placeholder:"Required"};var Resize=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:4},react.createElement(textarea_textarea.T,_object_spread_props(_object_spread({},args),{resize:textarea_types.$.Vertical,placeholder:"Resize ".concat(textarea_types.$.Vertical," resize={TextareaResize.Vertical}")})),react.createElement(textarea_textarea.T,_object_spread_props(_object_spread({},args),{resize:textarea_types.$.Horizontal,placeholder:"Resize ".concat(textarea_types.$.Horizontal," resize={TextareaResize.Horizontal}")})),react.createElement(textarea_textarea.T,_object_spread_props(_object_spread({},args),{resize:textarea_types.$.None,placeholder:"Resize ".concat(textarea_types.$.None," resize={TextareaResize.None}")})),react.createElement(textarea_textarea.T,_object_spread_props(_object_spread({},args),{resize:textarea_types.$.Both,placeholder:"Resize ".concat(textarea_types.$.Both," resize={TextareaResize.Both}")})),react.createElement(textarea_textarea.T,_object_spread_props(_object_spread({},args),{resize:textarea_types.$.Inherit,placeholder:"Resize ".concat(textarea_types.$.Inherit," resize={TextareaResize.Inherit}")})),react.createElement(textarea_textarea.T,_object_spread_props(_object_spread({},args),{resize:textarea_types.$.Initial,placeholder:"Resize ".concat(textarea_types.$.Initial," resize={TextareaResize.Initial}")})))};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Textarea {...args} value={value} onChange={handleOnChange} />;
}`,...DefaultStory.parameters?.docs?.source}}},AutoFocus.parameters={...AutoFocus.parameters,docs:{...AutoFocus.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Textarea {...args} value={value} onChange={handleOnChange} />;
}`,...AutoFocus.parameters?.docs?.source}}},ColsRows.parameters={...ColsRows.parameters,docs:{...ColsRows.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Textarea {...args} value={value} onChange={handleOnChange} />;
}`,...ColsRows.parameters?.docs?.source}}},DefaultValue.parameters={...DefaultValue.parameters,docs:{...DefaultValue.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Textarea {...args} value={value} onChange={handleOnChange} />;
}`,...DefaultValue.parameters?.docs?.source}}},IsDisabled.parameters={...IsDisabled.parameters,docs:{...IsDisabled.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Textarea {...args} value={value} onChange={handleOnChange} />;
}`,...IsDisabled.parameters?.docs?.source}}},ErrorStory.parameters={...ErrorStory.parameters,docs:{...ErrorStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Textarea {...args} value={value} onChange={handleOnChange} />;
}`,...ErrorStory.parameters?.docs?.source}}},MaxLength.parameters={...MaxLength.parameters,docs:{...MaxLength.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Textarea {...args} value={value} onChange={handleOnChange} />;
}`,...MaxLength.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Textarea {...args} value={value} onChange={handleOnChange} />;
}`,...ReadOnly.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <Textarea {...args} value={value} onChange={handleOnChange} />;
}`,...Required.parameters?.docs?.source}}},Resize.parameters={...Resize.parameters,docs:{...Resize.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={4}>
    <Textarea {...args} resize={TextareaResize.Vertical} placeholder={\`Resize \${TextareaResize.Vertical} resize={TextareaResize.Vertical}\`} />
    <Textarea {...args} resize={TextareaResize.Horizontal} placeholder={\`Resize \${TextareaResize.Horizontal} resize={TextareaResize.Horizontal}\`} />
    <Textarea {...args} resize={TextareaResize.None} placeholder={\`Resize \${TextareaResize.None} resize={TextareaResize.None}\`} />
    <Textarea {...args} resize={TextareaResize.Both} placeholder={\`Resize \${TextareaResize.Both} resize={TextareaResize.Both}\`} />
    <Textarea {...args} resize={TextareaResize.Inherit} placeholder={\`Resize \${TextareaResize.Inherit} resize={TextareaResize.Inherit}\`} />
    <Textarea {...args} resize={TextareaResize.Initial} placeholder={\`Resize \${TextareaResize.Initial} resize={TextareaResize.Initial}\`} />
  </Box>`,...Resize.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","AutoFocus","ColsRows","DefaultValue","IsDisabled","ErrorStory","MaxLength","ReadOnly","Required","Resize"]},"./ui/components/component-library/textarea/textarea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Textarea});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/text/index.ts"),_textarea_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/textarea/textarea.types.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Textarea=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var autoFocus=_param.autoFocus,_param_className=_param.className,defaultValue=_param.defaultValue,isDisabled=_param.isDisabled,disabled=_param.disabled,error=_param.error,id=_param.id,_param_resize=_param.resize,resize=void 0===_param_resize?_textarea_types__WEBPACK_IMPORTED_MODULE_4__.$.Vertical:_param_resize,rows=_param.rows,cols=_param.cols,maxLength=_param.maxLength,name=_param.name,onBlur=_param.onBlur,onChange=_param.onChange,onClick=_param.onClick,onFocus=_param.onFocus,placeholder=_param.placeholder,readOnly=_param.readOnly,required=_param.required,value=_param.value,props=_object_without_properties(_param,["autoFocus","className","defaultValue","isDisabled","disabled","error","id","resize","rows","cols","maxLength","name","onBlur","onChange","onClick","onFocus","placeholder","readOnly","required","value"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text__WEBPACK_IMPORTED_MODULE_3__.EY,_object_spread(_object_spread_props(_object_spread({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("mm-textarea","mm-textarea--resize-".concat(resize),{"mm-textarea--disabled":!!(isDisabled||disabled)},void 0===_param_className?"":_param_className),as:"textarea",ref:ref,placeholder:placeholder,readOnly:readOnly,required:required,autoFocus:autoFocus,defaultValue:defaultValue,disabled:isDisabled||disabled},error&&{"aria-invalid":error}),{id:id,maxLength:maxLength,name:name,value:value,onBlur:function(event){null==onBlur||onBlur(event)},onChange:onChange,onClick:function(event){!onClick||isDisabled&&disabled||null==onClick||onClick(event)},onFocus:function(event){null==onFocus||onFocus(event)},resize:resize,rows:rows,cols:cols,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.backgroundDefault,borderColor:error?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.cG.errorDefault:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.cG.borderDefault,borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Z6.SM,borderWidth:1,paddingBottom:1,paddingLeft:4,paddingRight:4,paddingTop:1}),props))});try{Textarea.displayName="Textarea",Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{autoFocus:{defaultValue:null,description:"If `true`, the textarea will be focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"An additional className to apply to the textarea",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default textarea value, useful when not controlling the component.",name:"defaultValue",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"If `true`, the textarea will be disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"If `true`, the textarea will indicate an error",name:"error",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The id of the textarea element.",name:"id",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"Max number of characters to allow",name:"maxLength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"Name attribute of the textarea element.",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"Callback fired on blur",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onChange:{defaultValue:null,description:"Callback fired when the value is changed.",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLTextAreaElement>) => void)"}},onClick:{defaultValue:null,description:"Callback fired when the Textarea is clicked on",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLTextAreaElement, MouseEvent>) => void)"}},onFocus:{defaultValue:null,description:"Callback fired on focus",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},placeholder:{defaultValue:null,description:"The short hint displayed in the textarea before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"It prevents the user from changing the value of the field (not from interacting with the field).",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"If `true`, the textarea will be required. Currently no visual difference is shown.",name:"required",required:!1,type:{name:"boolean"}},resize:{defaultValue:{value:"TextareaResize.Vertical"},description:"The resize property specifies whether or not an element is resizable by the user.",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'},{value:'"initial"'},{value:'"inherit"'}]}},rows:{defaultValue:null,description:"Number of rows to display when multiline option is set to true",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:null,description:"Number of columns to display when multiline option is set to true",name:"cols",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"The textarea value, required for a controlled component.",name:"value",required:!1,type:{name:"string | number"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
Use the FlexDirection enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"flexDirection",required:!1,type:{name:"FlexDirection | FlexDirectionArray"}},flexWrap:{defaultValue:null,description:`The flex wrap of the component.
Use the FlexWrap enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"flexWrap",required:!1,type:{name:"FlexWrap | FlexWrapArray"}},gap:{defaultValue:null,description:`The gap between the component's children.
Use 1-12 for a gap of 4px-48px.
Accepts responsive props in the form of an array.`,name:"gap",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},margin:{defaultValue:null,description:`The margin of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"margin",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginTop:{defaultValue:null,description:`The margin-top of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginTop",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginBottom:{defaultValue:null,description:`The margin-bottom of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginBottom",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginRight:{defaultValue:null,description:`The margin-right of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginRight",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginLeft:{defaultValue:null,description:`The margin-left of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginLeft",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginInline:{defaultValue:null,description:`The margin-inline of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginInline",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginInlineStart:{defaultValue:null,description:`The margin-inline-start of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginInlineStart",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginInlineEnd:{defaultValue:null,description:`The margin-inline-end of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginInlineEnd",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},padding:{defaultValue:null,description:`The padding of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"padding",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingTop:{defaultValue:null,description:`The padding-top of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingTop",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingBottom:{defaultValue:null,description:`The padding-bottom of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingBottom",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingRight:{defaultValue:null,description:`The padding-right of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingRight",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingLeft:{defaultValue:null,description:`The padding-left of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingLeft",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingInline:{defaultValue:null,description:`The padding-inline of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingInline",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingInlineStart:{defaultValue:null,description:`The padding-inline-start of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingInlineStart",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingInlineEnd:{defaultValue:null,description:`The padding-inline-end of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingInlineEnd",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},borderColor:{defaultValue:null,description:`The border-color of the component.
Use BorderColor enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"borderColor",required:!1,type:{name:"BorderColor | BorderColorArray"}},borderWidth:{defaultValue:null,description:`The border-width of the component.
Use 1-12 for 1px-12px.
Accepts responsive props in the form of an array.`,name:"borderWidth",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},borderRadius:{defaultValue:null,description:`The border-radius of the component.
Use BorderRadius enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"borderRadius",required:!1,type:{name:"BorderRadius | BorderRadiusArray"}},borderStyle:{defaultValue:null,description:`The border-style of the component.
Use BorderStyle enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"borderStyle",required:!1,type:{name:"BorderStyle | BorderStyleArray"}},alignItems:{defaultValue:null,description:`The align-items of the component.
Use AlignItems enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"alignItems",required:!1,type:{name:"AlignItems | AlignItemsArray"}},justifyContent:{defaultValue:null,description:`The justify-content of the component.
Use JustifyContent enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"justifyContent",required:!1,type:{name:"JustifyContent | JustifyContentArray"}},textAlign:{defaultValue:null,description:`The text-align of the component.
Use TextAlign enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"textAlign",required:!1,type:{name:"TextAlign | TextAlignArray"}},display:{defaultValue:null,description:`The display of the component.
Use Display enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"display",required:!1,type:{name:"Display | DisplayArray"}},width:{defaultValue:null,description:`The width of the component.
Use BlockSize enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"width",required:!1,type:{name:"BlockSize | BlockSizeArray"}},minWidth:{defaultValue:null,description:`The min-width of the component.
Use BlockSize enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"minWidth",required:!1,type:{name:"BlockSize | BlockSizeArray"}},height:{defaultValue:null,description:`The height of the component.
Use BlockSize enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"height",required:!1,type:{name:"BlockSize | BlockSizeArray"}},backgroundColor:{defaultValue:null,description:`The background-color of the component.
Use BackgroundColor enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"backgroundColor",required:!1,type:{name:"BackgroundColor | BackgroundColorArray"}},color:{defaultValue:null,description:`The text-color of the component.
Use TextColor enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"color",required:!1,type:{name:"TextColor | TextColorArray | IconColor | IconColorArray"}},"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
TypeScript is complaining about data- attributes which means we need to explicitly define this as a prop.
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}},as:{defaultValue:null,description:`An override of the default HTML tag.
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/textarea/textarea.tsx#Textarea"]={docgenInfo:Textarea.__docgenInfo,name:"Textarea",path:"ui/components/component-library/textarea/textarea.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/textarea/textarea.types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>TextareaResize});var TextareaResize=function(TextareaResize){return TextareaResize.None="none",TextareaResize.Both="both",TextareaResize.Horizontal="horizontal",TextareaResize.Vertical="vertical",TextareaResize.Initial="initial",TextareaResize.Inherit="inherit",TextareaResize}({})}}]);
//# sourceMappingURL=components-component-library-textarea-textarea-stories.4d2a3bb8.iframe.bundle.js.map