(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[13936],{"./ui/components/ui/button/button.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var CLASSNAME_DEFAULT="btn-default",typeHash={default:CLASSNAME_DEFAULT,primary:"btn-primary",secondary:"btn-secondary",warning:"btn-warning",danger:"btn-danger","danger-primary":"btn-danger-primary",link:"btn-link",inline:"btn--inline",raised:"btn-raised"},Button=function(_param){var _onKeyUp,_role,_tabIndex,type=_param.type,_param_submit=_param.submit,large=_param.large,children=_param.children,icon=_param.icon,className=_param.className,_param_rounded=_param.rounded,buttonProps=_object_without_properties(_param,["type","submit","large","children","icon","className","rounded"]),Tag="button";return"link"===type?Tag="a":void 0!==_param_submit&&_param_submit&&(buttonProps.type="submit"),"link"===type&&"function"==typeof buttonProps.onClick&&(null!==(_onKeyUp=buttonProps.onKeyUp)&&void 0!==_onKeyUp||(buttonProps.onKeyUp=function(event){"Enter"===event.key&&buttonProps.onClick()}),null!==(_role=buttonProps.role)&&void 0!==_role||(buttonProps.role="button"),null!==(_tabIndex=buttonProps.tabIndex)&&void 0!==_tabIndex||(buttonProps.tabIndex=0)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag,_object_spread({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("button",(void 0===_param_rounded||_param_rounded)&&"link"!==type&&"inline"!==type&&"btn--rounded",typeHash[type]||CLASSNAME_DEFAULT,large&&"btn--large",className)},buttonProps),icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"button__icon"},icon):null,children)};Button.propTypes={type:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,submit:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,large:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,rounded:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool};let __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"@deprecated The <Button /> component has been deprecated in favor of the new <Button> component from the component-library.\nPlease update your code to use the new <Button> component instead, which can be found at ./ui/components/component-library/button/button.js.\nYou can find documentation for the new Button component in the MetaMask Storybook:\n{@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}\nIf you would like to help with the replacement of the old Button component, please submit a pull request against this GitHub issue:\n{@link https://github.com/MetaMask/metamask-extension/issues/18896}\n@see {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}",methods:[],displayName:"Button",props:{submit:{defaultValue:{value:"false",computed:!1},description:"If true sets the html 'type' attribute to type=\"submit\"",type:{name:"bool"},required:!1},rounded:{defaultValue:{value:"true",computed:!1},description:"Buttons are rounded by default.",type:{name:"bool"},required:!1},type:{description:"The type of variation a button can be.\nCan be one of 'default','primary','secondary','warning','danger','danger-primary' or 'link'",type:{name:"string"},required:!1},large:{description:"Increase the height of the button to 54px",type:{name:"bool"},required:!1},className:{description:"Additional className to provide on the root element of the button",type:{name:"string"},required:!1},children:{description:"The children of the button component",type:{name:"node"},required:!1},icon:{description:"Provide an icon component for an icon to appear on the left side of the button",type:{name:"node"},required:!1}}}},"./ui/components/ui/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/button/button.component.js");let __WEBPACK_DEFAULT_EXPORT__=_button_component__WEBPACK_IMPORTED_MODULE_0__.A;_button_component__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"@deprecated The <Button /> component has been deprecated in favor of the new <Button> component from the component-library.\nPlease update your code to use the new <Button> component instead, which can be found at ./ui/components/component-library/button/button.js.\nYou can find documentation for the new Button component in the MetaMask Storybook:\n{@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}\nIf you would like to help with the replacement of the old Button component, please submit a pull request against this GitHub issue:\n{@link https://github.com/MetaMask/metamask-extension/issues/18896}\n@see {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}",methods:[],displayName:"Button",props:{submit:{defaultValue:{value:"false",computed:!1},description:"If true sets the html 'type' attribute to type=\"submit\"",type:{name:"bool"},required:!1},rounded:{defaultValue:{value:"true",computed:!1},description:"Buttons are rounded by default.",type:{name:"bool"},required:!1},type:{description:"The type of variation a button can be.\nCan be one of 'default','primary','secondary','warning','danger','danger-primary' or 'link'",type:{name:"string"},required:!1},large:{description:"Increase the height of the button to 54px",type:{name:"bool"},required:!1},className:{description:"Additional className to provide on the root element of the button",type:{name:"string"},required:!1},children:{description:"The children of the button component",type:{name:"node"},required:!1},icon:{description:"Provide an icon component for an icon to appear on the left side of the button",type:{name:"node"},required:!1}}}},"./ui/components/ui/page-container/page-container-footer/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>PageContainerFooter});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),ui_button=__webpack_require__("./ui/components/ui/button/index.js");function _assert_this_initialized(self){if(void 0===self)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _get_prototype_of(o){return(_get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}function _possible_constructor_return(self,call){return call&&("object"===_type_of(call)||"function"==typeof call)?call:_assert_this_initialized(self)}function _set_prototype_of(o,p){return(_set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _create_super(Derived){var hasNativeReflectConstruct=_is_native_reflect_construct();return function _createSuperInternal(){var result,Super=_get_prototype_of(Derived);return result=hasNativeReflectConstruct?Reflect.construct(Super,arguments,_get_prototype_of(this).constructor):Super.apply(this,arguments),_possible_constructor_return(this,result)}}var PageContainerFooter=function(Component){_inherits(PageContainerFooter,Component);var _super=_create_super(PageContainerFooter);function PageContainerFooter(){return _class_call_check(this,PageContainerFooter),_super.apply(this,arguments)}return _create_class(PageContainerFooter,[{key:"render",value:function render(){var _this_props=this.props,children=_this_props.children,onCancel=_this_props.onCancel,cancelText=_this_props.cancelText,onSubmit=_this_props.onSubmit,submitText=_this_props.submitText,disabled=_this_props.disabled,submitButtonType=_this_props.submitButtonType,hideCancel=_this_props.hideCancel,cancelButtonType=_this_props.cancelButtonType,_this_props_buttonSizeLarge=_this_props.buttonSizeLarge,buttonSizeLarge=void 0!==_this_props_buttonSizeLarge&&_this_props_buttonSizeLarge,footerClassName=_this_props.footerClassName,footerButtonClassName=_this_props.footerButtonClassName;return react.createElement("div",{className:classnames_default()("page-container__footer",footerClassName)},react.createElement("footer",null,!hideCancel&&react.createElement(ui_button.A,{type:cancelButtonType||"secondary",large:buttonSizeLarge,className:classnames_default()("page-container__footer-button","page-container__footer-button__cancel",footerButtonClassName),onClick:function(e){return onCancel(e)},"data-testid":"page-container-footer-cancel"},cancelText||this.context.t("cancel")),react.createElement(ui_button.A,{type:submitButtonType||"primary",large:buttonSizeLarge,className:classnames_default()("page-container__footer-button",footerButtonClassName),disabled:disabled,onClick:function(e){return onSubmit(e)},"data-testid":"page-container-footer-next"},submitText||this.context.t("next"))),children&&react.createElement("div",{className:"page-container__footer-secondary"},children))}}]),PageContainerFooter}(react.Component);_define_property(PageContainerFooter,"propTypes",{children:prop_types_default().node,onCancel:prop_types_default().func,cancelText:prop_types_default().string,cancelButtonType:prop_types_default().string,onSubmit:prop_types_default().func,submitText:prop_types_default().string,disabled:prop_types_default().bool,submitButtonType:prop_types_default().string,hideCancel:prop_types_default().bool,buttonSizeLarge:prop_types_default().bool,footerClassName:prop_types_default().string,footerButtonClassName:prop_types_default().string}),_define_property(PageContainerFooter,"contextTypes",{t:prop_types_default().func}),PageContainerFooter.__docgenInfo={description:"",methods:[],displayName:"PageContainerFooter",props:{children:{description:"",type:{name:"node"},required:!1},onCancel:{description:"",type:{name:"func"},required:!1},cancelText:{description:"",type:{name:"string"},required:!1},cancelButtonType:{description:"",type:{name:"string"},required:!1},onSubmit:{description:"",type:{name:"func"},required:!1},submitText:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},submitButtonType:{description:"",type:{name:"string"},required:!1},hideCancel:{description:"",type:{name:"bool"},required:!1},buttonSizeLarge:{description:"",type:{name:"bool"},required:!1},footerClassName:{description:"",type:{name:"string"},required:!1},footerButtonClassName:{description:"",type:{name:"string"},required:!1}},context:{t:{type:{name:"func"},required:!1}}}},"./ui/pages/swaps/swaps-footer/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>SwapsFooter});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),i18n=__webpack_require__("./ui/contexts/i18n.js"),page_container_footer=__webpack_require__("./ui/components/ui/page-container/page-container-footer/index.js");function SwapsFooter(param){var onCancel=param.onCancel,hideCancel=param.hideCancel,onSubmit=param.onSubmit,submitText=param.submitText,disabled=param.disabled,showTermsOfService=param.showTermsOfService,showTopBorder=param.showTopBorder,_param_className=param.className,className=void 0===_param_className?"":_param_className,cancelText=param.cancelText,t=(0,react.useContext)(i18n.gJ);return react.createElement("div",{className:"swaps-footer"},react.createElement("div",{className:classnames_default()("swaps-footer__buttons",className,{"swaps-footer__buttons--border":showTopBorder})},react.createElement(page_container_footer.A,{onCancel:onCancel,hideCancel:hideCancel,cancelText:cancelText||t("back"),onSubmit:onSubmit,submitText:submitText,footerClassName:classnames_default()("swaps-footer__custom-page-container-footer-class",className),footerButtonClassName:classnames_default()("swaps-footer__custom-page-container-footer-button-class",{"swaps-footer__custom-page-container-footer-button-class--single":hideCancel}),disabled:disabled})),showTermsOfService&&react.createElement("div",{className:"swaps-footer__bottom-text",onClick:function(){return __webpack_require__.g.platform.openTab({url:"https://metamask.io/terms.html"})}},t("termsOfService")))}SwapsFooter.propTypes={onCancel:prop_types_default().func,hideCancel:prop_types_default().bool,onSubmit:prop_types_default().func,submitText:prop_types_default().string,disabled:prop_types_default().bool,showTermsOfService:prop_types_default().bool,showTopBorder:prop_types_default().bool,className:prop_types_default().string,cancelText:prop_types_default().string},SwapsFooter.__docgenInfo={description:"",methods:[],displayName:"SwapsFooter",props:{className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},onCancel:{description:"",type:{name:"func"},required:!1},hideCancel:{description:"",type:{name:"bool"},required:!1},onSubmit:{description:"",type:{name:"func"},required:!1},submitText:{description:"",type:{name:"string"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},showTermsOfService:{description:"",type:{name:"bool"},required:!1},showTopBorder:{description:"",type:{name:"bool"},required:!1},cancelText:{description:"",type:{name:"string"},required:!1}}}},"./node_modules/lodash/isEqual.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIsEqual=__webpack_require__("./node_modules/lodash/_baseIsEqual.js");function isEqual(value,other){return baseIsEqual(value,other)}module.exports=isEqual}}]);