"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[29530],{"./ui/components/ui/editable-label/editable-label.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>editable_label_stories});var react=__webpack_require__("./node_modules/react/index.js"),editable_label=__webpack_require__("./ui/components/ui/editable-label/editable-label.js");let editable_label_stories={title:"Components/UI/EditableLabel",argTypes:{onSubmit:{action:"onSubmit"},defaultValue:{control:"text"},className:{control:"text"},accounts:{control:"array"}},args:{defaultValue:"Account 3",accounts:[{name:"Account 1"},{name:"Account 2"}]}};var DefaultStory=function(args){return react.createElement("div",{style:{position:"relative",width:335}},react.createElement(editable_label.A,args))};DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <div style={{\n  position: 'relative',\n  width: 335\n}}>\n    <EditableLabel {...args} />\n  </div>",...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]},"./app/scripts/translate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>t});var _locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/_locales/en/messages.json"),_shared_modules_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./shared/modules/i18n.ts");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var currentLocale=_shared_modules_i18n__WEBPACK_IMPORTED_MODULE_1__.MY;function t(key){for(var _len=arguments.length,substitutions=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)substitutions[_key-1]=arguments[_key];return(0,_shared_modules_i18n__WEBPACK_IMPORTED_MODULE_1__.I4)(currentLocale,_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0__,key,substitutions)||(0,_shared_modules_i18n__WEBPACK_IMPORTED_MODULE_1__.I4)(_shared_modules_i18n__WEBPACK_IMPORTED_MODULE_1__.MY,_locales_en_messages_json__WEBPACK_IMPORTED_MODULE_0__,key,substitutions)}},"./ui/components/component-library/form-text-field/deprecated/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>FormTextField});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),box=__webpack_require__("./ui/components/ui/box/box.js"),text_field=__webpack_require__("./ui/components/component-library/text-field/index.ts"),help_text=__webpack_require__("./ui/components/component-library/help-text/index.ts"),component_library_label=__webpack_require__("./ui/components/component-library/label/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var FormTextField=function(_param){var _obj,autoComplete=_param.autoComplete,autoFocus=_param.autoFocus,className=_param.className,defaultValue=_param.defaultValue,disabled=_param.disabled,error=_param.error,helpText=_param.helpText,helpTextProps=_param.helpTextProps,id=_param.id,inputProps=_param.inputProps,inputRef=_param.inputRef,label=_param.label,labelProps=_param.labelProps,startAccessory=_param.startAccessory,maxLength=_param.maxLength,name=_param.name,onBlur=_param.onBlur,onChange=_param.onChange,onFocus=_param.onFocus,placeholder=_param.placeholder,readOnly=_param.readOnly,required=_param.required,endAccessory=_param.endAccessory,_param_size=_param.size,size=void 0===_param_size?design_system.or.MD:_param_size,textFieldProps=_param.textFieldProps,truncate=_param.truncate,_param_type=_param.type,value=_param.value,props=_object_without_properties(_param,["autoComplete","autoFocus","className","defaultValue","disabled","error","helpText","helpTextProps","id","inputProps","inputRef","label","labelProps","startAccessory","maxLength","name","onBlur","onChange","onFocus","placeholder","readOnly","required","endAccessory","size","textFieldProps","truncate","type","value"]);return react.createElement(box.Ay,_object_spread({className:classnames_default()("mm-form-text-field",{"mm-form-text-field--disabled":disabled},className),display:design_system.nl.Flex,flexDirection:design_system.bo.Column},props),label&&react.createElement(component_library_label.J,_object_spread_props(_object_spread({htmlFor:id},labelProps),{className:classnames_default()("mm-form-text-field__label",null==labelProps?void 0:labelProps.className)}),label),react.createElement(text_field.A_,_object_spread((_define_property(_obj={className:classnames_default()("mm-form-text-field__text-field",null==textFieldProps?void 0:textFieldProps.className),id:id,autoComplete:autoComplete,autoFocus:autoFocus,defaultValue:defaultValue,disabled:disabled,error:error},"id",id),_define_property(_obj,"inputProps",inputProps),_define_property(_obj,"inputRef",inputRef),_define_property(_obj,"startAccessory",startAccessory),_define_property(_obj,"maxLength",maxLength),_define_property(_obj,"name",name),_define_property(_obj,"onBlur",onBlur),_define_property(_obj,"onChange",onChange),_define_property(_obj,"onFocus",onFocus),_define_property(_obj,"placeholder",placeholder),_define_property(_obj,"readOnly",readOnly),_define_property(_obj,"required",required),_define_property(_obj,"endAccessory",endAccessory),_define_property(_obj,"size",size),_define_property(_obj,"truncate",truncate),_define_property(_obj,"type",void 0===_param_type?"text":_param_type),_define_property(_obj,"value",value),_obj),textFieldProps)),helpText&&react.createElement(help_text.$,_object_spread_props(_object_spread({severity:error&&help_text.e.Danger,marginTop:1},helpTextProps),{className:classnames_default()("mm-form-text-field__help-text",null==helpTextProps?void 0:helpTextProps.className)}),helpText))};FormTextField.propTypes=_object_spread({className:prop_types_default().string,id:function(props,propName,componentName){return props.label&&!props[propName]?Error("If a label prop exists you must provide an ".concat(propName," prop for the label's htmlFor attribute for accessibility. Warning coming from ").concat(componentName," ui/components/component-library/form-text-field/form-text-field.js")):null},label:prop_types_default().string,labelProps:prop_types_default().object,helpText:prop_types_default().oneOfType([prop_types_default().node,prop_types_default().string]),helpTextProps:prop_types_default().object,textFieldProps:prop_types_default().object},text_field.A_.propTypes),FormTextField.__docgenInfo={description:"@deprecated This has been deprecated in favor of the TypeScript version `<FormTextField />` component in ./ui/components/component-library/form-text-field/form-text-field.tsx\nSee storybook documentation for FormTextField here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-formtextfield--docs",methods:[],displayName:"FormTextField",props:{size:{defaultValue:{value:"Size.MD",computed:!0},required:!1},type:{defaultValue:{value:"'text'",computed:!1},required:!1},className:{description:"An additional className to apply to the form-text-field",type:{name:"string"},required:!1},id:{description:"The id of the FormTextField\nRequired if label prop exists to ensure accessibility\n\n@param {object} props - The props passed to the component.\n@param {string} propName - The prop name in this case 'id'.\n@param {string} componentName - The name of the component.",type:{name:"custom",raw:"(props, propName, componentName) => {\n  if (props.label && !props[propName]) {\n    return new Error(\n      `If a label prop exists you must provide an ${propName} prop for the label's htmlFor attribute for accessibility. Warning coming from ${componentName} ui/components/component-library/form-text-field/form-text-field.js`,\n    );\n  }\n  return null;\n}"},required:!1},label:{description:"The content of the Label component",type:{name:"string"},required:!1},labelProps:{description:"Props that are applied to the Label component",type:{name:"object"},required:!1},helpText:{description:"The content of the HelpText component",type:{name:"union",value:[{name:"node"},{name:"string"}]},required:!1},helpTextProps:{description:"Props that are applied to the HelpText component",type:{name:"object"},required:!1},textFieldProps:{description:"Props that are applied to the TextField component",type:{name:"object"},required:!1}},composes:["react"]}},"./ui/components/ui/editable-label/editable-label.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>EditableLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_helpers_utils_accounts__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/utils/accounts.js"),_component_library__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/index.ts"),_component_library_form_text_field_deprecated__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/component-library/form-text-field/deprecated/index.js");function _assert_this_initialized(self){if(void 0===self)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _get_prototype_of(o){return(_get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}function _possible_constructor_return(self,call){return call&&("object"===_type_of(call)||"function"==typeof call)?call:_assert_this_initialized(self)}function _set_prototype_of(o,p){return(_set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _create_super(Derived){var hasNativeReflectConstruct=_is_native_reflect_construct();return function _createSuperInternal(){var result,Super=_get_prototype_of(Derived);return result=hasNativeReflectConstruct?Reflect.construct(Super,arguments,_get_prototype_of(this).constructor):Super.apply(this,arguments),_possible_constructor_return(this,result)}}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}var EditableLabel=function(Component){_inherits(EditableLabel,Component);var _super=_create_super(EditableLabel);function EditableLabel(){var _this;return _class_call_check(this,EditableLabel),_this=_super.apply(this,arguments),_define_property(_assert_this_initialized(_this),"state",{isEditing:!1,value:_this.props.defaultValue||""}),_this}return _create_class(EditableLabel,[{key:"handleSubmit",value:function handleSubmit(isValidAccountName){var _this=this;return _async_to_generator(function(){return _ts_generator(this,function(_state){switch(_state.label){case 0:if(!isValidAccountName)return[2];return[4,_this.props.onSubmit(_this.state.value.trim())];case 1:return _state.sent(),_this.setState({isEditing:!1}),[2]}})})()}},{key:"renderEditing",value:function renderEditing(){var _this=this,_getAccountNameErrorMessage=(0,_helpers_utils_accounts__WEBPACK_IMPORTED_MODULE_3__.kN)(this.props.accounts,this.context,this.state.value,this.props.defaultValue),isValidAccountName=_getAccountNameErrorMessage.isValidAccountName,errorMessage=_getAccountNameErrorMessage.errorMessage;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.az,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("editable-label",this.props.className),display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.nl.Flex,gap:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library_form_text_field_deprecated__WEBPACK_IMPORTED_MODULE_5__.Y,{required:!0,value:this.state.value,onKeyPress:function(event){"Enter"===event.key&&_this.handleSubmit(isValidAccountName)},onChange:function(event){_this.setState({value:event.target.value})},"data-testid":"editable-input",error:!isValidAccountName,helpText:errorMessage,autoFocus:!0,placeholder:this.context.t("accountName")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.a2,{iconName:_component_library__WEBPACK_IMPORTED_MODULE_4__.$M.Check,onClick:function(){return _this.handleSubmit(isValidAccountName)},"data-testid":"save-account-label-input"}))}},{key:"renderReadonly",value:function renderReadonly(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.az,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.nl.Flex,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.k2.center,gap:3},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.EY,{variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.bodyLgMedium,style:{wordBreak:"break-word"}},this.state.value),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.a2,{iconName:_component_library__WEBPACK_IMPORTED_MODULE_4__.$M.Edit,ariaLabel:this.context.t("edit"),"data-testid":"editable-label-button",onClick:function(){return _this.setState({isEditing:!0})},color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Q1.iconDefault}))}},{key:"render",value:function render(){return this.state.isEditing?this.renderEditing():this.renderReadonly()}}]),EditableLabel}(react__WEBPACK_IMPORTED_MODULE_0__.Component);_define_property(EditableLabel,"propTypes",{onSubmit:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired,defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,accounts:prop_types__WEBPACK_IMPORTED_MODULE_6___default().array}),_define_property(EditableLabel,"contextTypes",{t:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func}),EditableLabel.__docgenInfo={description:"",methods:[{name:"handleSubmit",docblock:null,modifiers:["async"],params:[{name:"isValidAccountName",optional:!1,type:null}],returns:null},{name:"renderEditing",docblock:null,modifiers:[],params:[],returns:null},{name:"renderReadonly",docblock:null,modifiers:[],params:[],returns:null}],displayName:"EditableLabel",props:{onSubmit:{description:"",type:{name:"func"},required:!0},defaultValue:{description:"",type:{name:"string"},required:!1},className:{description:"",type:{name:"string"},required:!1},accounts:{description:"",type:{name:"array"},required:!1}},context:{t:{type:{name:"func"},required:!1}}}},"./ui/helpers/utils/accounts.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KM:()=>getAccountLabel,ZX:()=>getAvatarNetworkColor,kN:()=>getAccountNameErrorMessage});var _components_component_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/index.ts"),_shared_constants_network__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./shared/constants/network.ts"),_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_shared_constants_keyring__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./shared/constants/keyring.ts"),_shared_constants_hardware_wallets__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./shared/constants/hardware-wallets.ts"),_app_scripts_translate__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./app/scripts/translate.ts");function getAccountNameErrorMessage(accounts,context,newAccountName,defaultAccountName){var errorMessage,isDuplicateAccountName=accounts.some(function(item){return item.metadata.name.toLowerCase()===newAccountName.toLowerCase()}),isEmptyAccountName=""===newAccountName,localizedWordForAccount=context.t("newAccountNumberName").replace(" $1",""),isReservedAccountName=RegExp("^\\s*".concat(localizedWordForAccount," \\d+\\s*$"),"iu").test(newAccountName),isValidAccountName=newAccountName.toLowerCase()===defaultAccountName.toLowerCase()||!isDuplicateAccountName&&!isReservedAccountName&&!isEmptyAccountName;return isValidAccountName?errorMessage=_components_component_library__WEBPACK_IMPORTED_MODULE_0__.jM:isDuplicateAccountName?errorMessage=context.t("accountNameDuplicate"):isReservedAccountName?errorMessage=context.t("accountNameReserved"):isEmptyAccountName&&(errorMessage=context.t("required")),{isValidAccountName:isValidAccountName,errorMessage:errorMessage}}function getAvatarNetworkColor(name){switch(name){case _shared_constants_network__WEBPACK_IMPORTED_MODULE_1__.iq:return _constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.goerli;case _shared_constants_network__WEBPACK_IMPORTED_MODULE_1__.u$:return _constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.lineaGoerli;case _shared_constants_network__WEBPACK_IMPORTED_MODULE_1__.Zk:return _constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.lineaSepolia;case _shared_constants_network__WEBPACK_IMPORTED_MODULE_1__.hR:return _constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.sepolia;default:return}}function getAccountLabel(type,account,snapName){if(!account)return null;switch(type){case _shared_constants_keyring__WEBPACK_IMPORTED_MODULE_3__.ci.hdKeyTree:return null;case _shared_constants_keyring__WEBPACK_IMPORTED_MODULE_3__.ci.imported:return(0,_app_scripts_translate__WEBPACK_IMPORTED_MODULE_5__.t)("imported");case _shared_constants_keyring__WEBPACK_IMPORTED_MODULE_3__.ci.qr:return _shared_constants_hardware_wallets__WEBPACK_IMPORTED_MODULE_4__.GZ.qr;case _shared_constants_keyring__WEBPACK_IMPORTED_MODULE_3__.ci.trezor:return _shared_constants_hardware_wallets__WEBPACK_IMPORTED_MODULE_4__.GZ.trezor;case _shared_constants_keyring__WEBPACK_IMPORTED_MODULE_3__.ci.ledger:return _shared_constants_hardware_wallets__WEBPACK_IMPORTED_MODULE_4__.GZ.ledger;case _shared_constants_keyring__WEBPACK_IMPORTED_MODULE_3__.ci.lattice:return _shared_constants_hardware_wallets__WEBPACK_IMPORTED_MODULE_4__.GZ.lattice;case _shared_constants_keyring__WEBPACK_IMPORTED_MODULE_3__.ci.snap:if(snapName)return"".concat(snapName," (").concat((0,_app_scripts_translate__WEBPACK_IMPORTED_MODULE_5__.t)("beta"),")");return"".concat((0,_app_scripts_translate__WEBPACK_IMPORTED_MODULE_5__.t)("snaps")," (").concat((0,_app_scripts_translate__WEBPACK_IMPORTED_MODULE_5__.t)("beta"),")");default:return null}}}}]);