"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[8136],{"./ui/components/app/confirm/info/row/value-double.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_row__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/app/confirm/info/row/row.tsx"),_value_double__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/app/confirm/info/row/value-double.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var ConfirmInfoRowValueDoubleStory={title:"Components/App/Confirm/InfoRowValueDouble",component:_value_double__WEBPACK_IMPORTED_MODULE_2__.U,argTypes:{variant:{control:"select",options:Object.values(_row__WEBPACK_IMPORTED_MODULE_1__.Mz)},left:{control:"text"},right:{control:"text"}}},DefaultStory=function(param){var variant=param.variant,left=param.left,right=param.right;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_row__WEBPACK_IMPORTED_MODULE_1__.gh,{label:"Account",variant:variant},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_value_double__WEBPACK_IMPORTED_MODULE_2__.U,{left:left,right:right}))};DefaultStory.storyName="Default",DefaultStory.args={left:"$834.32",right:"0.05 ETH"};let __WEBPACK_DEFAULT_EXPORT__=ConfirmInfoRowValueDoubleStory;DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:'({\n  variant,\n  left,\n  right\n}) => <ConfirmInfoRow label="Account" variant={variant}>\n    <ConfirmInfoRowValueDouble left={left} right={right} />\n  </ConfirmInfoRow>'},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})});try{DefaultStory.displayName="DefaultStory",DefaultStory.__docgenInfo={description:"",displayName:"DefaultStory",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"any"}},left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"any"}},right:{defaultValue:null,description:"",name:"right",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/app/confirm/info/row/value-double.stories.tsx#DefaultStory"]={docgenInfo:DefaultStory.__docgenInfo,name:"DefaultStory",path:"ui/components/app/confirm/info/row/value-double.stories.tsx#DefaultStory"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/app/confirm/info/row/row.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ih:()=>ConfirmInfoRowContext,Mz:()=>ConfirmInfoRowVariant,gh:()=>ConfirmInfoRow});var ConfirmInfoRowVariant,_obj,_obj1,_obj2,_obj3,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/ui/tooltip/tooltip.js"),_component_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/index.ts"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}!function(ConfirmInfoRowVariant){ConfirmInfoRowVariant.Default="default",ConfirmInfoRowVariant.Critical="critical",ConfirmInfoRowVariant.Warning="warning"}(ConfirmInfoRowVariant||(ConfirmInfoRowVariant={}));var BACKGROUND_COLORS=(_define_property(_obj={},"default",void 0),_define_property(_obj,"critical",_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.lP.errorMuted),_define_property(_obj,"warning",_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.lP.warningMuted),_obj),TEXT_COLORS=(_define_property(_obj1={},"default",_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.d9.textDefault),_define_property(_obj1,"critical",_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Il.errorAlternative),_define_property(_obj1,"warning",_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Il.warningAlternative),_obj1),TOOLTIP_ICONS=(_define_property(_obj2={},"default",_component_library__WEBPACK_IMPORTED_MODULE_2__.uH.Question),_define_property(_obj2,"critical",_component_library__WEBPACK_IMPORTED_MODULE_2__.uH.Warning),_define_property(_obj2,"warning",_component_library__WEBPACK_IMPORTED_MODULE_2__.uH.Warning),_obj2),TOOLTIP_ICON_COLORS=(_define_property(_obj3={},"default",_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Il.iconMuted),_define_property(_obj3,"critical",_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Il.errorAlternative),_define_property(_obj3,"warning",_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Il.warningAlternative),_obj3),ConfirmInfoRowContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({variant:"default"}),ConfirmInfoRow=function(param){var label=param.label,children=param.children,_param_variant=param.variant,variant=void 0===_param_variant?"default":_param_variant,tooltip=param.tooltip,style=param.style;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ConfirmInfoRowContext.Provider,{value:{variant:variant}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.xu,{className:"confirm-info-row",display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.sS.Flex,flexDirection:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Qb.Row,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.E0.spaceBetween,flexWrap:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.gP.Wrap,backgroundColor:BACKGROUND_COLORS[variant],borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.cM.LG,marginTop:2,marginBottom:2,paddingLeft:2,paddingRight:2,color:TEXT_COLORS[variant],style:_object_spread({overflowWrap:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.mn.Anywhere,minHeight:"24px"},style)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.xu,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.sS.Flex,flexDirection:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Qb.Row,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.E0.center,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.g1.center},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.xv,{variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.rK.bodyMdMedium,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.d9.inherit},label),tooltip&&tooltip.length>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__.Z,{title:tooltip,style:{display:"flex"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.JO,{name:TOOLTIP_ICONS[variant],marginLeft:1,color:TOOLTIP_ICON_COLORS[variant]}))),"string"==typeof children?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.xv,{color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.d9.inherit},children):children))};try{ConfirmInfoRow.displayName="ConfirmInfoRow",ConfirmInfoRow.__docgenInfo={description:"",displayName:"ConfirmInfoRow",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"ConfirmInfoRowVariant.Default"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"critical"'},{value:'"warning"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/app/confirm/info/row/row.tsx#ConfirmInfoRow"]={docgenInfo:ConfirmInfoRow.__docgenInfo,name:"ConfirmInfoRow",path:"ui/components/app/confirm/info/row/row.tsx#ConfirmInfoRow"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/app/confirm/info/row/value-double.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>ConfirmInfoRowValueDouble});var _obj,react=__webpack_require__("./node_modules/react/index.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),row=__webpack_require__("./ui/components/app/confirm/info/row/row.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var LEFT_TEXT_COLORS=(_define_property(_obj={},row.Mz.Default,design_system.d9.textMuted),_define_property(_obj,row.Mz.Critical,design_system.Il.errorAlternative),_define_property(_obj,row.Mz.Warning,design_system.Il.warningAlternative),_obj),ConfirmInfoRowValueDouble=function(param){var left=param.left,right=param.right,variant=(0,react.useContext)(row.Ih).variant;return react.createElement(component_library.xu,{display:design_system.sS.Flex,flexDirection:design_system.Qb.Row,alignItems:design_system.g1.center,flexWrap:design_system.gP.Wrap,style:{columnGap:"8px"}},react.createElement(component_library.xv,{color:LEFT_TEXT_COLORS[variant]},left),react.createElement(component_library.xv,{color:design_system.d9.inherit},right))};try{ConfirmInfoRowValueDouble.displayName="ConfirmInfoRowValueDouble",ConfirmInfoRowValueDouble.__docgenInfo={description:"",displayName:"ConfirmInfoRowValueDouble",props:{left:{defaultValue:null,description:"",name:"left",required:!0,type:{name:"string"}},right:{defaultValue:null,description:"",name:"right",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/app/confirm/info/row/value-double.tsx#ConfirmInfoRowValueDouble"]={docgenInfo:ConfirmInfoRowValueDouble.__docgenInfo,name:"ConfirmInfoRowValueDouble",path:"ui/components/app/confirm/info/row/value-double.tsx#ConfirmInfoRowValueDouble"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/ui/tooltip/tooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Tooltip});var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_tippy__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-tippy/dist/react-tippy.js");function _assert_this_initialized(self){if(void 0===self)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _get_prototype_of(o){return(_get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}function _possible_constructor_return(self,call){return call&&("object"===_type_of(call)||"function"==typeof call)?call:_assert_this_initialized(self)}function _set_prototype_of(o,p){return(_set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _create_super(Derived){var hasNativeReflectConstruct=_is_native_reflect_construct();return function _createSuperInternal(){var result,Super=_get_prototype_of(Derived);if(hasNativeReflectConstruct){var NewTarget=_get_prototype_of(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possible_constructor_return(this,result)}}var Tooltip=function(PureComponent){_inherits(Tooltip,PureComponent);var _super=_create_super(Tooltip);function Tooltip(){return _class_call_check(this,Tooltip),_super.apply(this,arguments)}return _create_class(Tooltip,[{key:"render",value:function render(){var _this_props=this.props,arrow=_this_props.arrow,children=_this_props.children,containerClassName=_this_props.containerClassName,disabled=_this_props.disabled,position=_this_props.position,html=_this_props.html,interactive=_this_props.interactive,size=_this_props.size,title=_this_props.title,trigger=_this_props.trigger,onHidden=_this_props.onHidden,offset=_this_props.offset,open=_this_props.open,wrapperClassName=_this_props.wrapperClassName,style=_this_props.style,theme=_this_props.theme,tabIndex=_this_props.tabIndex,tag=_this_props.tag;return title||html?react__WEBPACK_IMPORTED_MODULE_0__.createElement(tag,{className:wrapperClassName},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_tippy__WEBPACK_IMPORTED_MODULE_1__.Tooltip,{arrow:arrow,className:containerClassName,disabled:disabled,hideOnClick:!1,html:html,interactive:interactive,onHidden:onHidden,position:position,size:size,offset:offset,style:style,title:disabled?"":title,trigger:trigger,open:open,theme:"tippy-tooltip--mm-custom ".concat(theme),tabIndex:tabIndex||0,tag:tag},children)):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:wrapperClassName},children)}}]),Tooltip}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);_define_property(Tooltip,"defaultProps",{arrow:!0,children:null,containerClassName:"",html:null,interactive:void 0,onHidden:null,position:"left",offset:0,open:void 0,size:"small",title:null,trigger:"mouseenter focus",wrapperClassName:void 0,theme:"",tag:"div"}),_define_property(Tooltip,"propTypes",{arrow:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,containerClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,html:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,interactive:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,offset:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,onHidden:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,open:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,position:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["top","right","bottom","left"]),size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["small","regular","big"]),title:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,trigger:prop_types__WEBPACK_IMPORTED_MODULE_2___default().any,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,style:prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,theme:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,tabIndex:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string})}}]);