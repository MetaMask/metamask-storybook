"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[8353],{"./ui/components/app/transaction-activity-log/transaction-activity-log-icon/transaction-activity-log-icon.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_transaction_activity_log_icon_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/app/transaction-activity-log/transaction-activity-log-icon/transaction-activity-log-icon.component.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/app/transaction-activity-log/transaction-activity-log-icon/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/TransactionActivityLog/TransactionActivityLogIcon",argTypes:{className:{control:"text"},eventKey:{control:"select",options:Object.keys(_transaction_activity_log_icon_component__WEBPACK_IMPORTED_MODULE_1__.N)}},args:{eventKey:Object.keys(_transaction_activity_log_icon_component__WEBPACK_IMPORTED_MODULE_1__.N)[0]}};var DefaultStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_2__.Z,args)};DefaultStory.storyName="Default",DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"args => <TransactionActivityLogIcon {...args} />"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})})},"./ui/components/app/transaction-activity-log/transaction-activity-log-icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_transaction_activity_log_icon_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _transaction_activity_log_icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/app/transaction-activity-log/transaction-activity-log-icon/transaction-activity-log-icon.component.js")},"./ui/components/app/transaction-activity-log/transaction-activity-log-icon/transaction-activity-log-icon.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ACTIVITY_ICONS,Z:()=>TransactionActivityLogIcon});var _obj,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_transaction_activity_log_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/app/transaction-activity-log/transaction-activity-log.constants.js"),_component_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/index.ts"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts");function _assert_this_initialized(self){if(void 0===self)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _get_prototype_of(o){return(_get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}function _possible_constructor_return(self,call){return call&&("object"===_type_of(call)||"function"==typeof call)?call:_assert_this_initialized(self)}function _set_prototype_of(o,p){return(_set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _create_super(Derived){var hasNativeReflectConstruct=_is_native_reflect_construct();return function _createSuperInternal(){var result,Super=_get_prototype_of(Derived);if(hasNativeReflectConstruct){var NewTarget=_get_prototype_of(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possible_constructor_return(this,result)}}var ACTIVITY_ICONS=(_define_property(_obj={},_transaction_activity_log_constants__WEBPACK_IMPORTED_MODULE_4__._,_component_library__WEBPACK_IMPORTED_MODULE_2__.uH.Add),_define_property(_obj,_transaction_activity_log_constants__WEBPACK_IMPORTED_MODULE_4__.Ru,_component_library__WEBPACK_IMPORTED_MODULE_2__.uH.ArrowUp),_define_property(_obj,_transaction_activity_log_constants__WEBPACK_IMPORTED_MODULE_4__.Xf,_component_library__WEBPACK_IMPORTED_MODULE_2__.uH.ProgrammingArrows),_define_property(_obj,_transaction_activity_log_constants__WEBPACK_IMPORTED_MODULE_4__.CQ,_component_library__WEBPACK_IMPORTED_MODULE_2__.uH.Check),_define_property(_obj,_transaction_activity_log_constants__WEBPACK_IMPORTED_MODULE_4__.xs,_component_library__WEBPACK_IMPORTED_MODULE_2__.uH.Close),_define_property(_obj,_transaction_activity_log_constants__WEBPACK_IMPORTED_MODULE_4__.lO,_component_library__WEBPACK_IMPORTED_MODULE_2__.uH.Danger),_define_property(_obj,_transaction_activity_log_constants__WEBPACK_IMPORTED_MODULE_4__.Zn,_component_library__WEBPACK_IMPORTED_MODULE_2__.uH.Close),_define_property(_obj,_transaction_activity_log_constants__WEBPACK_IMPORTED_MODULE_4__.qg,_component_library__WEBPACK_IMPORTED_MODULE_2__.uH.Close),_obj),TransactionActivityLogIcon=function(PureComponent){_inherits(TransactionActivityLogIcon,PureComponent);var _super=_create_super(TransactionActivityLogIcon);function TransactionActivityLogIcon(){return _class_call_check(this,TransactionActivityLogIcon),_super.apply(this,arguments)}return _create_class(TransactionActivityLogIcon,[{key:"render",value:function render(){var _this_props=this.props,className=_this_props.className,icon=ACTIVITY_ICONS[_this_props.eventKey];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("transaction-activity-log-icon",className)},icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.JO,{name:icon,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Il.iconDefault,size:_component_library__WEBPACK_IMPORTED_MODULE_2__.Jh.Sm}):null)}}]),TransactionActivityLogIcon}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);_define_property(TransactionActivityLogIcon,"contextTypes",{t:prop_types__WEBPACK_IMPORTED_MODULE_5___default().func}),_define_property(TransactionActivityLogIcon,"propTypes",{className:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,eventKey:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(Object.keys(ACTIVITY_ICONS))})},"./ui/components/app/transaction-activity-log/transaction-activity-log.constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{CQ:()=>TRANSACTION_CONFIRMED_EVENT,Oh:()=>CONFIRMED_STATUS,Ru:()=>TRANSACTION_SUBMITTED_EVENT,Wr:()=>TRANSACTION_UPDATED_EVENT,Xf:()=>TRANSACTION_RESUBMITTED_EVENT,Zn:()=>TRANSACTION_CANCEL_ATTEMPTED_EVENT,_:()=>TRANSACTION_CREATED_EVENT,af:()=>DROPPED_STATUS,lO:()=>TRANSACTION_ERRORED_EVENT,qg:()=>TRANSACTION_CANCEL_SUCCESS_EVENT,rS:()=>SUBMITTED_STATUS,xs:()=>TRANSACTION_DROPPED_EVENT});var TRANSACTION_CREATED_EVENT="transactionCreated",TRANSACTION_SUBMITTED_EVENT="transactionSubmitted",TRANSACTION_RESUBMITTED_EVENT="transactionResubmitted",TRANSACTION_CONFIRMED_EVENT="transactionConfirmed",TRANSACTION_DROPPED_EVENT="transactionDropped",TRANSACTION_UPDATED_EVENT="transactionUpdated",TRANSACTION_ERRORED_EVENT="transactionErrored",TRANSACTION_CANCEL_ATTEMPTED_EVENT="transactionCancelAttempted",TRANSACTION_CANCEL_SUCCESS_EVENT="transactionCancelSuccess",SUBMITTED_STATUS="submitted",CONFIRMED_STATUS="confirmed",DROPPED_STATUS="dropped"}}]);