"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[4431],{"./ui/components/institutional/jwt-url-form/jwt-url-form.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/institutional/jwt-url-form/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let __WEBPACK_DEFAULT_EXPORT__={title:"Components/Institutional/JwtUrlForm",component:___WEBPACK_IMPORTED_MODULE_1__.Z,args:{jwtList:["jwt1","jwt2","jwt3"],currentJwt:"jwt1",jwtInputText:"some input text",onJwtChange:function(){},onUrlChange:function(){}}};var DefaultStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_1__.Z,args)};DefaultStory.storyName="JwtUrlForm",DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"args => <JwtUrlForm {...args} />"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})})},"./ui/components/institutional/jwt-dropdown/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>jwt_dropdown});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),dropdown=__webpack_require__("./ui/components/ui/dropdown/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var JwtDropdown=function(props){var t=(0,useI18nContext.C)(),currentJwt=props.currentJwt,jwtList=props.jwtList;return react.createElement(component_library.xu,null,react.createElement(component_library.xv,{padding:1,color:design_system.Il.textDefault,className:"custody-search-jwt__select-title"},t("selectJWT")),react.createElement(dropdown.Z,{"data-testid":"jwt-dropdown",className:"custody-search-jwt__select",name:"jwt-select",selectedOption:currentJwt,options:_to_consumable_array(jwtList.find(function(item){return item===currentJwt})?[]:[{value:currentJwt,name:currentJwt.length>9?"...".concat(currentJwt.slice(-9)):currentJwt}]).concat(_to_consumable_array(jwtList.map(function(text){return{value:text,name:"...".concat(null==text?void 0:text.slice(-9))}}))),onChange:function(opt){return props.onChange(opt.value)}}))};JwtDropdown.propTypes={jwtList:prop_types_default().array,currentJwt:prop_types_default().string,onChange:prop_types_default().func};let jwt_dropdown=JwtDropdown},"./ui/components/institutional/jwt-url-form/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>jwt_url_form});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),ui_textarea=__webpack_require__("./ui/components/ui/textarea/index.js"),jwt_dropdown=__webpack_require__("./ui/components/institutional/jwt-dropdown/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var JwtUrlForm=function(props){var t=(0,useI18nContext.C)(),_useState=_sliced_to_array((0,react.useState)(!1),2),addNewTokenClicked=_useState[0],setAddNewTokenClicked=_useState[1],showJwtDropdown=props.jwtList.length>=1;return react.createElement(component_library.xu,{display:design_system.sS.Flex,flexDirection:design_system.Qb.Column,alignItems:design_system.g1.flexStart,marginBottom:8},react.createElement(component_library.xu,{width:design_system.Sw.Full,display:design_system.sS.Flex,flexDirection:design_system.Qb.Column,marginTop:4,alignItems:design_system.g1.center,marginBottom:4},showJwtDropdown&&react.createElement(jwt_dropdown.Z,{key:props.currentJwt,"data-testid":"jwt-dropdown",currentJwt:props.currentJwt?props.currentJwt:props.jwtList[0],jwtList:props.jwtList,onChange:function(value){props.onJwtChange(value)}}),showJwtDropdown&&!addNewTokenClicked&&react.createElement(component_library.xu,{width:design_system.Sw.Full,display:design_system.sS.Flex,flexDirection:design_system.Qb.Column,alignItems:design_system.g1.center,marginTop:2},react.createElement(component_library.xv,null,t("or")),react.createElement(component_library.zx,{"data-testid":"addNewToken-btn",variant:component_library.Wu.Secondary,onClick:function(){props.onJwtChange(""),setAddNewTokenClicked(!0)}},t("addNewToken"))),(!showJwtDropdown||addNewTokenClicked)&&react.createElement(component_library.xu,{width:design_system.Sw.Full},react.createElement(component_library.xv,{display:design_system.sS.Block,variant:design_system.rK.bodyMd,marginBottom:4},props.jwtInputText),react.createElement(ui_textarea.Z,{"data-testid":"jwt-input",id:"jwt-box",onChange:function(e){props.onJwtChange(e.target.value)},value:props.currentJwt,autoFocus:!0,height:"154px",resize:"both",boxProps:{borderRadius:design_system.cM.SM,borderStyle:design_system.N4.solid,backgroundColor:design_system.lP.backgroundDefault,color:design_system.d9.textDefault,padding:2}}))))};JwtUrlForm.propTypes={jwtList:prop_types_default().array.isRequired,onJwtChange:prop_types_default().func.isRequired,currentJwt:prop_types_default().string,jwtInputText:prop_types_default().string};let jwt_url_form=JwtUrlForm},"./ui/components/ui/dropdown/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>dropdown});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),component_library=__webpack_require__("./ui/components/component-library/index.ts"),Dropdown=function(param){var className=param.className,_param_disabled=param.disabled,onChange=param.onChange,options=param.options,_param_selectedOption=param.selectedOption,style=param.style,title=param.title,dataTestId=param["data-testid"],_onChange=(0,react.useCallback)(function(event){event.preventDefault(),event.stopPropagation(),onChange(event.target.value)},[onChange]);return react.createElement("div",{className:classnames_default()("dropdown",className)},react.createElement("select",{className:"dropdown__select","data-testid":dataTestId,disabled:void 0!==_param_disabled&&_param_disabled,title:title,onChange:_onChange,style:style,value:void 0===_param_selectedOption?"":_param_selectedOption},options.map(function(option){return react.createElement("option",{key:option.value,value:option.value},option.name||option.value)})),react.createElement(component_library.JO,{name:component_library.uH.ArrowDown,size:component_library.Jh.Sm,className:"dropdown__icon-caret-down"}))};Dropdown.propTypes={className:prop_types_default().string,disabled:prop_types_default().bool,title:prop_types_default().string,onChange:prop_types_default().func.isRequired,options:prop_types_default().arrayOf(prop_types_default().exact({name:prop_types_default().string,value:prop_types_default().string.isRequired})).isRequired,selectedOption:prop_types_default().string,style:prop_types_default().object,"data-testid":prop_types_default().string};let dropdown=Dropdown}}]);