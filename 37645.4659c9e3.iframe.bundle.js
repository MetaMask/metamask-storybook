"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[37645],{"./ui/components/component-library/form-text-field/deprecated/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>FormTextField});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),box=__webpack_require__("./ui/components/ui/box/box.js"),text_field=__webpack_require__("./ui/components/component-library/text-field/index.ts"),help_text=__webpack_require__("./ui/components/component-library/help-text/index.ts"),component_library_label=__webpack_require__("./ui/components/component-library/label/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var FormTextField=function(_param){var _obj,autoComplete=_param.autoComplete,autoFocus=_param.autoFocus,className=_param.className,defaultValue=_param.defaultValue,disabled=_param.disabled,error=_param.error,helpText=_param.helpText,helpTextProps=_param.helpTextProps,id=_param.id,inputProps=_param.inputProps,inputRef=_param.inputRef,label=_param.label,labelProps=_param.labelProps,startAccessory=_param.startAccessory,maxLength=_param.maxLength,name=_param.name,onBlur=_param.onBlur,onChange=_param.onChange,onFocus=_param.onFocus,placeholder=_param.placeholder,readOnly=_param.readOnly,required=_param.required,endAccessory=_param.endAccessory,_param_size=_param.size,size=void 0===_param_size?design_system.or.MD:_param_size,textFieldProps=_param.textFieldProps,truncate=_param.truncate,_param_type=_param.type,value=_param.value,props=_object_without_properties(_param,["autoComplete","autoFocus","className","defaultValue","disabled","error","helpText","helpTextProps","id","inputProps","inputRef","label","labelProps","startAccessory","maxLength","name","onBlur","onChange","onFocus","placeholder","readOnly","required","endAccessory","size","textFieldProps","truncate","type","value"]);return react.createElement(box.Ay,_object_spread({className:classnames_default()("mm-form-text-field",{"mm-form-text-field--disabled":disabled},className),display:design_system.nl.Flex,flexDirection:design_system.bo.Column},props),label&&react.createElement(component_library_label.J,_object_spread_props(_object_spread({htmlFor:id},labelProps),{className:classnames_default()("mm-form-text-field__label",null==labelProps?void 0:labelProps.className)}),label),react.createElement(text_field.A_,_object_spread((_define_property(_obj={className:classnames_default()("mm-form-text-field__text-field",null==textFieldProps?void 0:textFieldProps.className),id:id,autoComplete:autoComplete,autoFocus:autoFocus,defaultValue:defaultValue,disabled:disabled,error:error},"id",id),_define_property(_obj,"inputProps",inputProps),_define_property(_obj,"inputRef",inputRef),_define_property(_obj,"startAccessory",startAccessory),_define_property(_obj,"maxLength",maxLength),_define_property(_obj,"name",name),_define_property(_obj,"onBlur",onBlur),_define_property(_obj,"onChange",onChange),_define_property(_obj,"onFocus",onFocus),_define_property(_obj,"placeholder",placeholder),_define_property(_obj,"readOnly",readOnly),_define_property(_obj,"required",required),_define_property(_obj,"endAccessory",endAccessory),_define_property(_obj,"size",size),_define_property(_obj,"truncate",truncate),_define_property(_obj,"type",void 0===_param_type?"text":_param_type),_define_property(_obj,"value",value),_obj),textFieldProps)),helpText&&react.createElement(help_text.$,_object_spread_props(_object_spread({severity:error&&help_text.e.Danger,marginTop:1},helpTextProps),{className:classnames_default()("mm-form-text-field__help-text",null==helpTextProps?void 0:helpTextProps.className)}),helpText))};FormTextField.propTypes=_object_spread({className:prop_types_default().string,id:function(props,propName,componentName){return props.label&&!props[propName]?Error("If a label prop exists you must provide an ".concat(propName," prop for the label's htmlFor attribute for accessibility. Warning coming from ").concat(componentName," ui/components/component-library/form-text-field/form-text-field.js")):null},label:prop_types_default().string,labelProps:prop_types_default().object,helpText:prop_types_default().oneOfType([prop_types_default().node,prop_types_default().string]),helpTextProps:prop_types_default().object,textFieldProps:prop_types_default().object},text_field.A_.propTypes),FormTextField.__docgenInfo={description:"@deprecated This has been deprecated in favor of the TypeScript version `<FormTextField />` component in ./ui/components/component-library/form-text-field/form-text-field.tsx\nSee storybook documentation for FormTextField here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-formtextfield--docs",methods:[],displayName:"FormTextField",props:{size:{defaultValue:{value:"Size.MD",computed:!0},required:!1},type:{defaultValue:{value:"'text'",computed:!1},required:!1},className:{description:"An additional className to apply to the form-text-field",type:{name:"string"},required:!1},id:{description:"The id of the FormTextField\nRequired if label prop exists to ensure accessibility\n\n@param {object} props - The props passed to the component.\n@param {string} propName - The prop name in this case 'id'.\n@param {string} componentName - The name of the component.",type:{name:"custom",raw:"(props, propName, componentName) => {\n  if (props.label && !props[propName]) {\n    return new Error(\n      `If a label prop exists you must provide an ${propName} prop for the label's htmlFor attribute for accessibility. Warning coming from ${componentName} ui/components/component-library/form-text-field/form-text-field.js`,\n    );\n  }\n  return null;\n}"},required:!1},label:{description:"The content of the Label component",type:{name:"string"},required:!1},labelProps:{description:"Props that are applied to the Label component",type:{name:"object"},required:!1},helpText:{description:"The content of the HelpText component",type:{name:"union",value:[{name:"node"},{name:"string"}]},required:!1},helpTextProps:{description:"Props that are applied to the HelpText component",type:{name:"object"},required:!1},textFieldProps:{description:"Props that are applied to the TextField component",type:{name:"object"},required:!1}},composes:["react"]}},"./ui/components/ui/form-combo-field/form-combo-field.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>FormComboField});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_component_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/index.ts"),_component_library_form_text_field_deprecated__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/form-text-field/deprecated/index.js"),_contexts_i18n__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/contexts/i18n.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/helpers/constants/design-system.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function Option(param){var option=param.option,onClick=param.onClick,handleClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e){e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),onClick(option)},[onClick,option]),primaryLabel=option.primaryLabel,secondaryLabel=option.secondaryLabel,value=option.value;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{tabIndex:0,className:"form-combo-field__option",onClick:handleClick},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"form-combo-field__option-primary"},null!=primaryLabel?primaryLabel:value),secondaryLabel?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"form-combo-field__option-secondary"},secondaryLabel):null)}function Dropdown(param){var hideDropdownIfNoOptions=param.hideDropdownIfNoOptions,maxDropdownHeight=param.maxDropdownHeight,noOptionsText=param.noOptionsText,onOptionClick=param.onOptionClick,options=param.options,width=param.width,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_i18n__WEBPACK_IMPORTED_MODULE_4__.gJ),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),maxHeight=null!=maxDropdownHeight?maxDropdownHeight:179,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),dropdownHeight=_useState[0],setDropdownHeight=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var _ref_current,_ref_current_scrollHeight;setDropdownHeight(null!==(_ref_current_scrollHeight=null===(_ref_current=ref.current)||void 0===_ref_current?void 0:_ref_current.scrollHeight)&&void 0!==_ref_current_scrollHeight?_ref_current_scrollHeight:0)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:ref,style:{width:width,maxHeight:maxHeight},className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"form-combo-field__dropdown":!0,"form-combo-field__dropdown__scroll":dropdownHeight>maxHeight})},0===options.length&&!hideDropdownIfNoOptions&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option,{option:{primaryLabel:null!=noOptionsText?noOptionsText:t("comboNoOptions"),value:""},onClick:function(){return onOptionClick(void 0)}}),options.map(function(option,index){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option,{key:index,option:option,onClick:function(){onOptionClick(option)}})}))}function FormComboField(param){var _param_hideDropdownIfNoOptions=param.hideDropdownIfNoOptions,maxDropdownHeight=param.maxDropdownHeight,noOptionsText=param.noOptionsText,onChange=param.onChange,onOptionClick=param.onOptionClick,options=param.options,placeholder=param.placeholder,value=param.value,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),dropdownVisible=_useState[0],setDropdownVisible=_useState[1],valueRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2),valueWidth=_useState1[0],setValueWidth=_useState1[1],inputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_i18n__WEBPACK_IMPORTED_MODULE_4__.gJ);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var _valueRef_current;setValueWidth(null===(_valueRef_current=valueRef.current)||void 0===_valueRef_current?void 0:_valueRef_current.offsetWidth)});var handleBlur=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e){var _e_relatedTarget;(null==e?void 0:null===(_e_relatedTarget=e.relatedTarget)||void 0===_e_relatedTarget?void 0:_e_relatedTarget.className)!=="form-combo-field__option"&&setDropdownVisible(!1)},[setDropdownVisible]),handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e){null==onChange||onChange(e.target.value)},[onChange]),handleOptionClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(option){var _inputRef_current;setDropdownVisible(!1),option&&(handleChange({target:{value:option.value}}),null==onOptionClick||onOptionClick(option)),null===(_inputRef_current=inputRef.current)||void 0===_inputRef_current||_inputRef_current.focus()},[setDropdownVisible,handleChange]),handleClearClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){var _inputRef_current;handleChange({target:{value:""}}),null===(_inputRef_current=inputRef.current)||void 0===_inputRef_current||_inputRef_current.focus()},[handleChange]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"form-combo-field",ref:valueRef},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{onClick:function(){setDropdownVisible(!0)}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library_form_text_field_deprecated__WEBPACK_IMPORTED_MODULE_3__.Y,{autoFocus:!0,inputRef:inputRef,placeholder:placeholder,onBlur:handleBlur,onKeyUp:function(e){"Enter"===e.key&&handleBlur()},value:value,onChange:handleChange,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"form-combo-field__value":!0,"form-combo-field__value-dropdown-visible":dropdownVisible}),endAccessory:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.a2,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.nl.Flex,iconName:_component_library__WEBPACK_IMPORTED_MODULE_2__.$M.Close,size:_component_library__WEBPACK_IMPORTED_MODULE_2__.f3.Sm,onClick:function(){return handleClearClick()},color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.Li.iconMuted,ariaLabel:t("clear")})})),dropdownVisible&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Dropdown,{hideDropdownIfNoOptions:void 0!==_param_hideDropdownIfNoOptions&&_param_hideDropdownIfNoOptions,maxDropdownHeight:maxDropdownHeight,noOptionsText:noOptionsText,onOptionClick:handleOptionClick,options:options,width:valueWidth}))}try{formcombofield.displayName="formcombofield",formcombofield.__docgenInfo={description:"",displayName:"formcombofield",props:{hideDropdownIfNoOptions:{defaultValue:{value:"false"},description:"Whether to hide the 'no option' when there are no options to display.",name:"hideDropdownIfNoOptions",required:!1,type:{name:"boolean"}},maxDropdownHeight:{defaultValue:null,description:"The maximum height of the dropdown in pixels.",name:"maxDropdownHeight",required:!1,type:{name:"number"}},noOptionsText:{defaultValue:null,description:"The text to display in the dropdown when there are no options to display.",name:"noOptionsText",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback function to invoke when the value changes.",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onOptionClick:{defaultValue:null,description:"Callback function to invoke when a dropdown option is clicked.",name:"onOptionClick",required:!1,type:{name:"((option: Option) => void)"}},options:{defaultValue:null,description:"The options to display in the dropdown.",name:"options",required:!0,type:{name:"Option[]"}},placeholder:{defaultValue:null,description:"The placeholder text to display in the field when the value is empty.",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"The value to display in the field.",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/ui/form-combo-field/form-combo-field.tsx#formcombofield"]={docgenInfo:formcombofield.__docgenInfo,name:"formcombofield",path:"ui/components/ui/form-combo-field/form-combo-field.tsx#formcombofield"})}catch(__react_docgen_typescript_loader_error){}}}]);