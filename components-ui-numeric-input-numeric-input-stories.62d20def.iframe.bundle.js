"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[2557],{"./ui/components/ui/numeric-input/numeric-input.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,WithDetail:()=>WithDetail,WithError:()=>WithError,default:()=>numeric_input_stories});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,_WithDetail_parameters,_WithDetail_parameters_docs,_WithDetail_parameters1,_WithError_parameters,_WithError_parameters_docs,_WithError_parameters1,react=__webpack_require__("./node_modules/react/index.js"),numeric_input_component=__webpack_require__("./ui/components/ui/numeric-input/numeric-input.component.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let numeric_input_stories={title:"Components/UI/NumericInput"};var DefaultStory=function(){var _useState=_sliced_to_array((0,react.useState)(0),2),value=_useState[0],setValue=_useState[1];return react.createElement("div",{style:{width:"600px"}},react.createElement(numeric_input_component.Z,{onChange:setValue,value:value}))};DefaultStory.storyName="Default";var WithDetail=function(){var _useState=_sliced_to_array((0,react.useState)(0),2),value=_useState[0],setValue=_useState[1];return react.createElement("div",{style:{width:"600px"}},react.createElement(numeric_input_component.Z,{detailText:"= $0.06",onChange:setValue,value:value}))},WithError=function(){var _useState=_sliced_to_array((0,react.useState)(0),2),value=_useState[0],setValue=_useState[1];return react.createElement("div",{style:{width:"600px"}},react.createElement(numeric_input_component.Z,{detailText:"= $0.06",error:"This number isn't great",onChange:setValue,value:value}))};DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"() => {\n  const [value, setValue] = useState(0);\n  return <div style={{\n    width: '600px'\n  }}>\n      <NumericInput onChange={setValue} value={value} />\n    </div>;\n}"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})}),WithDetail.parameters=_object_spread_props(_object_spread({},WithDetail.parameters),{docs:_object_spread_props(_object_spread({},null===(_WithDetail_parameters=WithDetail.parameters)||void 0===_WithDetail_parameters?void 0:_WithDetail_parameters.docs),{source:_object_spread({originalSource:"() => {\n  const [value, setValue] = useState(0);\n  return <div style={{\n    width: '600px'\n  }}>\n      <NumericInput detailText=\"= $0.06\" onChange={setValue} value={value} />\n    </div>;\n}"},null===(_WithDetail_parameters1=WithDetail.parameters)||void 0===_WithDetail_parameters1?void 0:null===(_WithDetail_parameters_docs=_WithDetail_parameters1.docs)||void 0===_WithDetail_parameters_docs?void 0:_WithDetail_parameters_docs.source)})}),WithError.parameters=_object_spread_props(_object_spread({},WithError.parameters),{docs:_object_spread_props(_object_spread({},null===(_WithError_parameters=WithError.parameters)||void 0===_WithError_parameters?void 0:_WithError_parameters.docs),{source:_object_spread({originalSource:'() => {\n  const [value, setValue] = useState(0);\n  return <div style={{\n    width: \'600px\'\n  }}>\n      <NumericInput detailText="= $0.06" error="This number isn\'t great" onChange={setValue} value={value} />\n    </div>;\n}'},null===(_WithError_parameters1=WithError.parameters)||void 0===_WithError_parameters1?void 0:null===(_WithError_parameters_docs=_WithError_parameters1.docs)||void 0===_WithError_parameters_docs?void 0:_WithError_parameters_docs.source)})})},"./ui/components/ui/numeric-input/numeric-input.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>NumericInput});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_shared_constants_tokens__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./shared/constants/tokens.js"),_component_library__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/index.ts");function NumericInput(param){var _param_detailText=param.detailText,detailText=void 0===_param_detailText?"":_param_detailText,_param_value=param.value,onChange=param.onChange,_param_error=param.error,_param_autoFocus=param.autoFocus,_param_allowDecimals=param.allowDecimals,allowDecimals=void 0===_param_allowDecimals||_param_allowDecimals,_param_disabled=param.disabled,dataTestId=param.dataTestId,placeholder=param.placeholder,id=param.id,name=param.name,inputRef=param.inputRef;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("numeric-input",{"numeric-input--error":void 0===_param_error?"":_param_error})},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type:"number",value:void 0===_param_value?0:_param_value,onKeyDown:function(e){allowDecimals||"."!==e.key||e.preventDefault()},onChange:function(e){var _match_,newValue=e.target.value,match=_shared_constants_tokens__WEBPACK_IMPORTED_MODULE_3__.BZ.exec(newValue);(null==match?void 0:null===(_match_=match[1])||void 0===_match_?void 0:_match_.length)>=15||null==onChange||onChange(parseFloat(newValue||0,10))},min:"0",autoFocus:void 0!==_param_autoFocus&&_param_autoFocus,disabled:void 0!==_param_disabled&&_param_disabled,"data-testid":dataTestId,placeholder:placeholder,id:id,name:name,ref:inputRef}),detailText&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xv,{color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.d9.textAlternative,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.rK.bodySm,as:"span"},detailText))}NumericInput.propTypes={value:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default().number,prop_types__WEBPACK_IMPORTED_MODULE_5___default().string]),detailText:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,onChange:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func,error:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,autoFocus:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,allowDecimals:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,placeholder:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,name:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,id:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,inputRef:prop_types__WEBPACK_IMPORTED_MODULE_5___default().object}}}]);