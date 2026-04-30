"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[59911],{"./ui/components/component-library/header-search/header-search.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Inline:()=>Inline,InlineWithValue:()=>InlineWithValue,Screen:()=>Screen,ScreenWithValue:()=>ScreenWithValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_header_search__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/component-library/header-search/header-search.tsx"),_header_search_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/header-search/header-search.types.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__={title:"Components/ComponentLibrary/HeaderSearch",component:_header_search__WEBPACK_IMPORTED_MODULE_1__.m,argTypes:{variant:{control:"select",options:Object.values(_header_search_types__WEBPACK_IMPORTED_MODULE_2__.X)},onClickBackButton:{action:"onClickBackButton"},onClickCancelButton:{action:"onClickCancelButton"}},args:{variant:_header_search_types__WEBPACK_IMPORTED_MODULE_2__.X.Screen,onClickBackButton:function(){},textFieldSearchProps:{value:"",placeholder:"Search"}}};var Template=function(args){var _args_textFieldSearchProps,_args_textFieldSearchProps_value,initialValue=null!=(_args_textFieldSearchProps_value=null==(_args_textFieldSearchProps=args.textFieldSearchProps)?void 0:_args_textFieldSearchProps.value)?_args_textFieldSearchProps_value:"",_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),2),value=_useState[0],setValue=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){setValue(initialValue)},[initialValue]);var searchProps=_object_spread_props(_object_spread({},args.textFieldSearchProps),{value:value,onChangeText:function(text){setValue(text)},onClickClearButton:function(){setValue("")}});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_header_search__WEBPACK_IMPORTED_MODULE_1__.m,_object_spread_props(_object_spread({},args),{textFieldSearchProps:searchProps}))},Screen=Template.bind({});Screen.args={variant:_header_search_types__WEBPACK_IMPORTED_MODULE_2__.X.Screen,onClickBackButton:function(){},textFieldSearchProps:{value:"",placeholder:"Search"}};var Inline=Template.bind({});Inline.args={variant:_header_search_types__WEBPACK_IMPORTED_MODULE_2__.X.Inline,onClickCancelButton:function(){},textFieldSearchProps:{value:"",placeholder:"Search"}};var ScreenWithValue=Template.bind({});ScreenWithValue.args={variant:_header_search_types__WEBPACK_IMPORTED_MODULE_2__.X.Screen,onClickBackButton:function(){},textFieldSearchProps:{value:"Search query",placeholder:"Search"}};var InlineWithValue=Template.bind({});InlineWithValue.args={variant:_header_search_types__WEBPACK_IMPORTED_MODULE_2__.X.Inline,onClickCancelButton:function(){},textFieldSearchProps:{value:"Search query",placeholder:"Search"}},Screen.parameters={...Screen.parameters,docs:{...Screen.parameters?.docs,source:{originalSource:`args => {
  const initialValue = args.textFieldSearchProps?.value as string ?? '';
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  const handleChangeText = (text: string) => {
    setValue(text);
  };
  const handleClickClearButton = () => {
    setValue('');
  };
  const searchProps = {
    ...args.textFieldSearchProps,
    value,
    onChangeText: handleChangeText,
    onClickClearButton: handleClickClearButton
  };
  return <HeaderSearch {...args} textFieldSearchProps={searchProps} />;
}`,...Screen.parameters?.docs?.source}}},Inline.parameters={...Inline.parameters,docs:{...Inline.parameters?.docs,source:{originalSource:`args => {
  const initialValue = args.textFieldSearchProps?.value as string ?? '';
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  const handleChangeText = (text: string) => {
    setValue(text);
  };
  const handleClickClearButton = () => {
    setValue('');
  };
  const searchProps = {
    ...args.textFieldSearchProps,
    value,
    onChangeText: handleChangeText,
    onClickClearButton: handleClickClearButton
  };
  return <HeaderSearch {...args} textFieldSearchProps={searchProps} />;
}`,...Inline.parameters?.docs?.source}}},ScreenWithValue.parameters={...ScreenWithValue.parameters,docs:{...ScreenWithValue.parameters?.docs,source:{originalSource:`args => {
  const initialValue = args.textFieldSearchProps?.value as string ?? '';
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  const handleChangeText = (text: string) => {
    setValue(text);
  };
  const handleClickClearButton = () => {
    setValue('');
  };
  const searchProps = {
    ...args.textFieldSearchProps,
    value,
    onChangeText: handleChangeText,
    onClickClearButton: handleClickClearButton
  };
  return <HeaderSearch {...args} textFieldSearchProps={searchProps} />;
}`,...ScreenWithValue.parameters?.docs?.source}}},InlineWithValue.parameters={...InlineWithValue.parameters,docs:{...InlineWithValue.parameters?.docs,source:{originalSource:`args => {
  const initialValue = args.textFieldSearchProps?.value as string ?? '';
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  const handleChangeText = (text: string) => {
    setValue(text);
  };
  const handleClickClearButton = () => {
    setValue('');
  };
  const searchProps = {
    ...args.textFieldSearchProps,
    value,
    onChangeText: handleChangeText,
    onClickClearButton: handleClickClearButton
  };
  return <HeaderSearch {...args} textFieldSearchProps={searchProps} />;
}`,...InlineWithValue.parameters?.docs?.source}}};let __namedExportsOrder=["Screen","Inline","ScreenWithValue","InlineWithValue"]}}]);
//# sourceMappingURL=components-component-library-header-search-header-search-stories.c116b0f7.iframe.bundle.js.map