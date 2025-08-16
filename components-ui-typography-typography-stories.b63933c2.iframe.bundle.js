"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[37374],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/ui/actionable-message/actionable-message.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ActionableMessage,V:()=>typeHash});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_info_tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/ui/info-tooltip/index.js"),_info_tooltip_info_tooltip_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/ui/info-tooltip/info-tooltip-icon.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var typeHash={warning:"actionable-message--warning",danger:"actionable-message--danger",success:"actionable-message--success",default:""};function ActionableMessage(param){var _param_message=param.message,_param_primaryAction=param.primaryAction,primaryAction=void 0===_param_primaryAction?null:_param_primaryAction,_param_primaryActionV2=param.primaryActionV2,primaryActionV2=void 0===_param_primaryActionV2?null:_param_primaryActionV2,_param_secondaryAction=param.secondaryAction,secondaryAction=void 0===_param_secondaryAction?null:_param_secondaryAction,_param_className=param.className,_param_infoTooltipText=param.infoTooltipText,infoTooltipText=void 0===_param_infoTooltipText?"":_param_infoTooltipText,_param_withRightButton=param.withRightButton,_param_type=param.type,type=void 0===_param_type?"default":_param_type,_param_useIcon=param.useIcon,useIcon=void 0!==_param_useIcon&&_param_useIcon,icon=param.icon,_param_iconFillColor=param.iconFillColor,roundedButtons=param.roundedButtons,dataTestId=param.dataTestId,_param_autoHideTime=param.autoHideTime,autoHideTime=void 0===_param_autoHideTime?0:_param_autoHideTime,onAutoHide=param.onAutoHide,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),2),shouldDisplay=_useState[0],setShouldDisplay=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(0!==autoHideTime){var timeout=setTimeout(function(){null==onAutoHide||onAutoHide(),setShouldDisplay(!1)},autoHideTime);return function(){clearTimeout(timeout)}}},[autoHideTime,onAutoHide]);var actionableMessageClassName=classnames__WEBPACK_IMPORTED_MODULE_1___default()("actionable-message",typeHash[type],void 0!==_param_withRightButton&&_param_withRightButton?"actionable-message--with-right-button":null,void 0===_param_className?"":_param_className,{"actionable-message--with-icon":useIcon}),onlyOneAction=primaryAction&&!secondaryAction||secondaryAction&&!primaryAction;return shouldDisplay?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:actionableMessageClassName,"data-testid":dataTestId},useIcon?icon||react__WEBPACK_IMPORTED_MODULE_0__.createElement(_info_tooltip_info_tooltip_icon__WEBPACK_IMPORTED_MODULE_3__.A,{fillColor:void 0===_param_iconFillColor?"":_param_iconFillColor}):null,infoTooltipText&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_info_tooltip__WEBPACK_IMPORTED_MODULE_2__.A,{position:"left",contentText:infoTooltipText,wrapperClassName:"actionable-message__info-tooltip-wrapper"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"actionable-message__message"},void 0===_param_message?"":_param_message),primaryActionV2&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"actionable-message__action-v2",onClick:primaryActionV2.onClick},primaryActionV2.label),(primaryAction||secondaryAction)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("actionable-message__actions",{"actionable-message__actions--single":onlyOneAction})},primaryAction&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("actionable-message__action","actionable-message__action--primary","actionable-message__action-".concat(type),{"actionable-message__action--rounded":roundedButtons}),onClick:primaryAction.onClick},primaryAction.label),secondaryAction&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("actionable-message__action","actionable-message__action--secondary","actionable-message__action-".concat(type),{"actionable-message__action--rounded":roundedButtons}),onClick:secondaryAction.onClick},secondaryAction.label))):null}ActionableMessage.propTypes={message:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired,primaryAction:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({label:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func}),primaryActionV2:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({label:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func}),secondaryAction:prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({label:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func}),className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,type:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(Object.keys(typeHash)),withRightButton:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,infoTooltipText:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,useIcon:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,icon:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,iconFillColor:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,roundedButtons:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,autoHideTime:prop_types__WEBPACK_IMPORTED_MODULE_4___default().number,onAutoHide:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func},ActionableMessage.__docgenInfo={description:`@deprecated \`<ActionableMessage />\` has been deprecated in favor of the \`<BannerAlert />\`
component in ./ui/components/component-library/banner-alert/banner-alert.js.
See storybook documentation for BannerAlert here:
{@see {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-banneralert--default-story#banneralert}}

Help to replace \`ActionableMessage\` with \`BannerAlert\` by submitting a PR against
{@link https://github.com/MetaMask/metamask-extension/issues/19528}`,methods:[],displayName:"ActionableMessage",props:{message:{defaultValue:{value:"''",computed:!1},description:"Text inside actionable message",type:{name:"node"},required:!1},primaryAction:{defaultValue:{value:"null",computed:!1},description:"First button props that have label and onClick props",type:{name:"shape",value:{label:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},primaryActionV2:{defaultValue:{value:"null",computed:!1},description:`Another style of primary action.
This probably shouldn't have been added. A \`children\` prop might have been more appropriate.`,type:{name:"shape",value:{label:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},secondaryAction:{defaultValue:{value:"null",computed:!1},description:"Second button props that have label and onClick props",type:{name:"shape",value:{label:{name:"string",required:!1},onClick:{name:"func",required:!1}}},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"Additional css className for the component based on the parent css",type:{name:"string"},required:!1},infoTooltipText:{defaultValue:{value:"''",computed:!1},description:"Add tooltip and custom message",type:{name:"string"},required:!1},withRightButton:{defaultValue:{value:"false",computed:!1},description:"change text align to left and button to bottom right",type:{name:"bool"},required:!1},type:{defaultValue:{value:"'default'",computed:!1},description:"change color theme for the component that already predefined in css",type:{name:"enum",value:[{value:'"warning"',computed:!1},{value:'"danger"',computed:!1},{value:'"success"',computed:!1},{value:'"default"',computed:!1}]},required:!1},useIcon:{defaultValue:{value:"false",computed:!1},description:"Add tooltip icon in the left component without message",type:{name:"bool"},required:!1},iconFillColor:{defaultValue:{value:"''",computed:!1},description:"change tooltip icon color",type:{name:"string"},required:!1},autoHideTime:{defaultValue:{value:"0",computed:!1},description:"Whether the actionable message should auto-hide itself after a given amount of time",type:{name:"number"},required:!1},icon:{description:"Custom icon component",type:{name:"node"},required:!1},roundedButtons:{description:"Whether the buttons are rounded",type:{name:"bool"},required:!1},dataTestId:{description:"",type:{name:"string"},required:!1},onAutoHide:{description:"Callback when autoHide time expires",type:{name:"func"},required:!1}}}},"./ui/components/ui/actionable-message/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_actionable_message__WEBPACK_IMPORTED_MODULE_0__.A});var _actionable_message__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/actionable-message/actionable-message.js")},"./ui/components/ui/box/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>_box__WEBPACK_IMPORTED_MODULE_0__.Ay,Ve:()=>_box__WEBPACK_IMPORTED_MODULE_0__.Ve});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/box/box.js")},"./ui/components/ui/info-tooltip/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_info_tooltip__WEBPACK_IMPORTED_MODULE_0__.A});var _info_tooltip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/info-tooltip/info-tooltip.js")},"./ui/components/ui/info-tooltip/info-tooltip-icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InfoTooltipIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js");function InfoTooltipIcon(param){var _param_fillColor=param.fillColor;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M5 0C2.2 0 0 2.2 0 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.2-.7-.6.3-.8.7-.8zm.7 6H4.3V4.3h1.5V8z",fill:void 0===_param_fillColor?"var(--color-icon-default)":_param_fillColor}))}InfoTooltipIcon.propTypes={fillColor:__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__)().string},InfoTooltipIcon.__docgenInfo={description:"",methods:[],displayName:"InfoTooltipIcon",props:{fillColor:{defaultValue:{value:"'var(--color-icon-default)'",computed:!1},description:"",type:{name:"string"},required:!1}}}},"./ui/components/ui/info-tooltip/info-tooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InfoTooltip});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/ui/tooltip/index.js"),_info_tooltip_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/ui/info-tooltip/info-tooltip-icon.js"),positionArrowClassMap={top:"info-tooltip__top-tooltip-arrow",bottom:"info-tooltip__bottom-tooltip-arrow",left:"info-tooltip__left-tooltip-arrow",right:"info-tooltip__right-tooltip-arrow"};function InfoTooltip(param){var _param_contentText=param.contentText,_param_position=param.position,position=void 0===_param_position?"":_param_position,containerClassName=param.containerClassName,wrapperClassName=param.wrapperClassName,_param_iconFillColor=param.iconFillColor;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"info-tooltip","data-testid":"info-tooltip"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_2__.A,{interactive:!0,position:position,containerClassName:classnames__WEBPACK_IMPORTED_MODULE_1___default()("info-tooltip__tooltip-container",containerClassName),wrapperClassName:wrapperClassName,tooltipInnerClassName:"info-tooltip__tooltip-content",tooltipArrowClassName:positionArrowClassMap[position],html:void 0===_param_contentText?"":_param_contentText,theme:"tippy-tooltip-info"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_info_tooltip_icon__WEBPACK_IMPORTED_MODULE_3__.A,{fillColor:void 0===_param_iconFillColor?"var(--color-icon-alternative)":_param_iconFillColor})))}InfoTooltip.propTypes={contentText:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().node]),position:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["top","left","bottom","right"]),containerClassName:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,iconFillColor:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string},InfoTooltip.__docgenInfo={description:"",methods:[],displayName:"InfoTooltip",props:{contentText:{defaultValue:{value:"''",computed:!1},description:"Text label that shows up after hover",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},position:{defaultValue:{value:"''",computed:!1},description:"Shows position of the tooltip",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'left'",computed:!1},{value:"'bottom'",computed:!1},{value:"'right'",computed:!1}]},required:!1},iconFillColor:{defaultValue:{value:"'var(--color-icon-alternative)'",computed:!1},description:"Add color for the icon",type:{name:"string"},required:!1},containerClassName:{description:"Add custom CSS class for container",type:{name:"string"},required:!1},wrapperClassName:{description:"Add custom CSS class for the wrapper",type:{name:"string"},required:!1}}}},"./ui/components/ui/tooltip/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_tooltip__WEBPACK_IMPORTED_MODULE_0__.A});var _tooltip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/tooltip/tooltip.js")},"./ui/components/ui/tooltip/tooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Tooltip});var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_tippy__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-tippy/dist/react-tippy.js");function _assert_this_initialized(self){if(void 0===self)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _call_super(_this,derived,args){return derived=_get_prototype_of(derived),_possible_constructor_return(_this,_is_native_reflect_construct()?Reflect.construct(derived,args||[],_get_prototype_of(_this).constructor):derived.apply(_this,args))}function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _get_prototype_of(o){return(_get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}function _possible_constructor_return(self,call){return call&&("object"===_type_of(call)||"function"==typeof call)?call:_assert_this_initialized(self)}function _set_prototype_of(o,p){return(_set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _is_native_reflect_construct(){try{var result=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(_){}return(_is_native_reflect_construct=function(){return!!result})()}var Tooltip=function(PureComponent){function Tooltip(){return _class_call_check(this,Tooltip),_call_super(this,Tooltip,arguments)}return _inherits(Tooltip,PureComponent),_create_class(Tooltip,[{key:"render",value:function render(){var _this_props=this.props,arrow=_this_props.arrow,children=_this_props.children,containerClassName=_this_props.containerClassName,disabled=_this_props.disabled,position=_this_props.position,html=_this_props.html,interactive=_this_props.interactive,size=_this_props.size,distance=_this_props.distance,title=_this_props.title,trigger=_this_props.trigger,onHidden=_this_props.onHidden,offset=_this_props.offset,open=_this_props.open,wrapperClassName=_this_props.wrapperClassName,style=_this_props.style,wrapperStyle=_this_props.wrapperStyle,theme=_this_props.theme,tabIndex=_this_props.tabIndex,tag=_this_props.tag;return title||html?react__WEBPACK_IMPORTED_MODULE_0__.createElement(tag,{className:wrapperClassName,style:wrapperStyle},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_tippy__WEBPACK_IMPORTED_MODULE_1__.Tooltip,{arrow:arrow,className:containerClassName,disabled:disabled,hideOnClick:!1,distance:distance,html:html,interactive:interactive,onHidden:onHidden,position:position,size:size,offset:offset,style:style,title:disabled?"":title,trigger:trigger,open:open,theme:"tippy-tooltip--mm-custom ".concat(theme),tabIndex:tabIndex||0,tag:tag},children)):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:wrapperClassName},children)}}]),Tooltip}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);_define_property(Tooltip,"defaultProps",{arrow:!0,children:null,containerClassName:"",html:null,interactive:void 0,onHidden:null,distance:0,position:"left",offset:0,open:void 0,size:"small",title:null,trigger:"mouseenter focus",wrapperClassName:void 0,theme:"",tag:"div",wrapperStyle:{}}),_define_property(Tooltip,"propTypes",{arrow:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,containerClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,html:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,distance:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,interactive:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,offset:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,onHidden:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,open:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,position:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["top","right","bottom","left"]),size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["small","regular","big"]),title:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,trigger:prop_types__WEBPACK_IMPORTED_MODULE_2___default().any,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,style:prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,wrapperStyle:prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,theme:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,tabIndex:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string}),Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{arrow:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},containerClassName:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},html:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},interactive:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"bool"},required:!1},onHidden:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},distance:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},position:{defaultValue:{value:"'left'",computed:!1},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},offset:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},open:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'small'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'regular'",computed:!1},{value:"'big'",computed:!1}]},required:!1},title:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},trigger:{defaultValue:{value:"'mouseenter focus'",computed:!1},description:"",type:{name:"any"},required:!1},wrapperClassName:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},theme:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},tag:{defaultValue:{value:"'div'",computed:!1},description:"",type:{name:"string"},required:!1},wrapperStyle:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},style:{description:"",type:{name:"object"},required:!1},tabIndex:{description:"",type:{name:"number"},required:!1}}}},"./ui/components/ui/typography/typography.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Align:()=>Align,As:()=>As,BoxPropsStory:()=>BoxPropsStory,Color:()=>Color,DefaultStory:()=>DefaultStory,FontStyle:()=>FontStyle,FontWeight:()=>FontWeight,Margin:()=>Margin,OverflowWrap:()=>OverflowWrap,Variant:()=>Variant,__namedExportsOrder:()=>__namedExportsOrder,default:()=>typography_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),box=__webpack_require__("./ui/components/ui/box/index.js"),banner_alert=__webpack_require__("./ui/components/component-library/banner-alert/index.ts"),typography=__webpack_require__("./ui/components/ui/typography/typography.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),actionable_message=__webpack_require__("./ui/components/ui/actionable-message/index.js"),ui_typography=__webpack_require__("./ui/components/ui/typography/index.js");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(banner_alert.b,{severity:design_system.oC.WARNING,title:"Deprecated",description:"<Typography/> has been deprecated in favor of the <Text /> component",actionButtonLabel:"See details",actionButtonProps:{href:"https://github.com/MetaMask/metamask-extension/issues/17670"}}),`
`,(0,jsx_runtime.jsx)(_components.h1,{id:"typography",children:"Typography"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Good typography improves readability, legibility and hierarchy of information."}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-typography--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:ui_typography.A}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"The following describes the props and example usage for this component."}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"variant",children:"Variant"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"variant"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"TYPOGRAPHY"})," object from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.js"})," to change the font size of the Typography component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-typography--variant"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// If importing from ui/components/app/[YOUR_COMPONENT]/ directory
import Typography from '../../ui/typography';
import { TypographyVariant } from '../../../helpers/constants/design-system';

<Typography variant="TypographyVariant.H1">h1</Typography>
<Typography variant="TypographyVariant.H2">h2</Typography>
<Typography variant="TypographyVariant.H3">h3</Typography>
<Typography variant="TypographyVariant.H4">h4</Typography>
<Typography variant="TypographyVariant.H5">h5</Typography>
<Typography variant="TypographyVariant.H6">h6</Typography>
<Typography variant="TypographyVariant.H7">h7</Typography>
<Typography variant="TypographyVariant.H8">h8</Typography>
<Typography variant="TypographyVariant.H9">h9</Typography>
<Typography variant="TypographyVariant.paragraph">p</Typography>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"color",children:"Color"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"color"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"COLOR"})," object from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.js"})," to change the color of the Typography component."]}),`
`,(0,jsx_runtime.jsx)(actionable_message.A,{type:"warning",message:"Do not use any colors in the DEPRECATED COLORS list. This will ensure themability and consistency across the codebase."}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-typography--color"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// If importing from ui/components/app/[YOUR_COMPONENT]/ directory
import Typography from '../../ui/typography';
import { TextColor, Color, BackgroundColor } from '../../../helpers/constants/design-system';

<Typography color={TextColor.textDefault}>
  text-default
</Typography>
<Typography color={TextColor.textAlternative}>
  text-alternative
</Typography>
<Typography color={TextColor.textMuted}>
  text-muted
</Typography>
<Typography color={Color.overlayInverse} boxProps={{backgroundColor:{BackgroundColor.overlayDefault}}}>
  overlay-inverse
</Typography>
<Typography color={TextColor.primaryDefault}>
  primary-default
</Typography>
<Typography color={TextColor.primaryInverse} boxProps={{backgroundColor:{BackgroundColor.primaryDefault}}}>
  primary-inverse
</Typography>
<Typography color={TextColor.errorDefault}>
  error-default
</Typography>
<Typography color={TextColor.errorInverse} boxProps={{backgroundColor:{BackgroundColor.errorDefault}}}>
  error-inverse
</Typography>
<Typography color={TextColor.successDefault}>
  success-default
</Typography>
<Typography color={TextColor.successInverse} boxProps={{backgroundColor:{BackgroundColor.successDefault}}}>
  success-inverse
</Typography>
<Typography color={TextColor.warningInverse} boxProps={{backgroundColor:{BackgroundColor.warningDefault}}}>
  warning-inverse
</Typography>
<Typography color={TextColor.infoDefault}>
  info-default
</Typography>
<Typography color={TextColor.infoInverse} boxProps={{backgroundColor:{BackgroundColor.infoDefault}}}>
  info-inverse
</Typography>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"font-weight",children:"Font Weight"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"fontWeight"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"FONT_WEIGHT"})," object from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.js"})," to change the font weight of the Typography component. There are 2 font weights:"]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"FONT_WEIGHT.NORMAL"})," = ",(0,jsx_runtime.jsx)(_components.code,{children:"normal"})," || ",(0,jsx_runtime.jsx)(_components.code,{children:"400"})]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"FONT_WEIGHT.BOLD"})," = ",(0,jsx_runtime.jsx)(_components.code,{children:"bold"})," || ",(0,jsx_runtime.jsx)(_components.code,{children:"700"})]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-typography--font-weight"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// If importing from ui/components/app/[YOUR_COMPONENT]/ directory
import Typography from '../../ui/typography';
import { FONT_WEIGHT } from '../../../helpers/constants/design-system';

<Typography fontWeight={FONT_WEIGHT.NORMAL}>
  normal
</Typography>
<Typography fontWeight={FONT_WEIGHT.BOLD}>
  bold
</Typography>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"font-style",children:"Font Style"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"fontStyle"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"FONT_STYLE"})," object from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.js"})," to change the font style of the Typography component. There are 2 font styles:"]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"FONT_STYLE.NORMAL"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"FONT_STYLE.ITALIC"})}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-typography--font-style"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// If importing from ui/components/app/[YOUR_COMPONENT]/ directory
import Typography from '../../ui/typography';
import { FONT_STYLE } from '../../../helpers/constants/design-system';

<Typography fontStyle={FONT_STYLE.NORMAL}>
  normal
</Typography>
<Typography fontStyle={FONT_STYLE.ITALIC}>
  bold
</Typography>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"align",children:"Align"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"align"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextAlign"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.js"})," to change the text alignment of the Typography component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-typography--align"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// If importing from ui/components/app/[YOUR_COMPONENT]/ directory
import Typography from '../../ui/typography';
import { TextAlign } from '../../../helpers/constants/design-system';

<Typography align={TextAlign.Left}>
  left
</Typography>
<Typography align={TextAlign.Center}>
  center
</Typography>
<Typography align={TextAlign.Right}>
  right
</Typography>
<Typography align={TextAlign.Justify}>
  justify
</Typography>
<Typography align={TextAlign.End}>
  end
</Typography>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"overflow-wrap",children:"Overflow Wrap"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"overflowWrap"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"OVERFLOW_WRAP"})," object from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.js"})," to change the overflow wrap of the Typography component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-typography--overflow-wrap"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// If importing from ui/components/app/[YOUR_COMPONENT]/ directory
import Typography from '../../ui/typography';
import { OVERFLOW_WRAP } from '../../../helpers/constants/design-system';

<div
  style={{
    width: 250,
    border: '1px solid var(--color-error-default)',
    display: 'block',
  }}
>
  <Typography overflowWrap={OVERFLOW_WRAP.NORMAL}>
    {OVERFLOW_WRAP.NORMAL}: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
  </Typography>
  <Typography overflowWrap={OVERFLOW_WRAP.BREAK_WORD}>
    {OVERFLOW_WRAP.BREAK_WORD}: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
  </Typography>
</div>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"as",children:"As"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," prop to change the root html element of the Typography component"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-typography--as"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// If importing from ui/components/app/[YOUR_COMPONENT]/ directory
import Typography from '../../ui/typography';

<Typography as="dd">dd</Typography>
<Typography as="div">div</Typography>
<Typography as="dt">dt</Typography>
<Typography as="em">em</Typography>
<Typography as="h1">h1</Typography>
<Typography as="h2">h2</Typography>
<Typography as="h3">h3</Typography>
<Typography as="h4">h4</Typography>
<Typography as="h5">h5</Typography>
<Typography as="h6">h6</Typography>
<Typography as="li">li</Typography>
<Typography as="p">p</Typography>
<Typography as="span">span</Typography>
<Typography as="strong">strong</Typography>
`})}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Renders the html:"}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:`<dd>dd</dd>

<div>div</div>

<dt>dt</dt>

<em>em</em>

<h1>h1</h1>

<h2>h2</h2>

<h3>h3</h3>

<h4>h4</h4>

<h5>h5</h5>

<h6>h6</h6>

<li>li</li>

<p>p</p>

<span>span</span>

<strong>strong</strong>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"margin",children:"Margin"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"margin"})," prop to change margin of the Typography component. For more control over bounding box properties use the ",(0,jsx_runtime.jsx)(_components.code,{children:"boxProps"})," props object."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-typography--margin"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// If importing from ui/components/app/[YOUR_COMPONENT]/ directory
import Typography from '../../ui/typography';

<Typography margin={4}>This uses the boxProps prop</Typography>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"box-props",children:"Box Props"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"boxProps"})," prop object to pass any valid ",(0,jsx_runtime.jsx)(_components.a,{href:"/?path=/story/components-ui-box--default-story",children:"Box"})," component props to the Typography component. ",(0,jsx_runtime.jsx)(_components.code,{children:"boxProps"})," will overwrite the ",(0,jsx_runtime.jsx)(_components.code,{children:"margin"})," prop"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-ui-typography--box-props-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// If importing from ui/components/app/[YOUR_COMPONENT]/ directory
import Typography from '../../ui/typography';
import { Color } from '../../../helpers/constants/design-system';

<Typography
  boxProps={{
    backgroundColor: Color.infoMuted,
    borderColor: Color.infoDefault,
    padding: 4,
    borderRadius: 4,
  }}
  color={Color.textDefault}
>
  This uses the boxProps prop
</Typography>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"class-name",children:"Class Name"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Adds an additional class to the Typography component"}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"The text content of the typography component"})]})}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var marginSizeKnobOptions=(function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()})([0,1,2,3,4,5,6,7,8,9,10,11,12]).concat(["auto"]);let typography_stories={title:"Components/UI/Typography",parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{variant:{control:{type:"select"},options:Object.values(design_system.PT)},color:{control:{type:"select"},options:typography.Lp},fontWeight:{control:{type:"select"},options:Object.values(design_system.zN)},fontStyle:{control:{type:"select"},options:Object.values(design_system.Ec)},align:{control:{type:"select"},options:Object.values(design_system.nO)},overflowWrap:{control:{type:"select"},options:Object.values(design_system.uU)},as:{control:{type:"select"},options:typography.gn},margin:{options:marginSizeKnobOptions,control:"select"},boxProps:{control:"object"},className:{control:{type:"text"}},children:{control:{type:"text"}}}};function renderBackgroundColor(color){var bgColor;switch(color){case design_system.Q1.overlayInverse:bgColor=design_system.i0.overlayDefault;break;case design_system.Q1.primaryInverse:bgColor=design_system.i0.primaryDefault;break;case design_system.Q1.errorInverse:bgColor=design_system.i0.errorDefault;break;case design_system.Q1.warningInverse:bgColor=design_system.i0.warningDefault;break;case design_system.Q1.successInverse:bgColor=design_system.i0.successDefault;break;case design_system.Q1.infoInverse:bgColor=design_system.i0.infoDefault;break;default:bgColor=null}return bgColor}var DefaultStory=function(args){return react.createElement(react.Fragment,null,react.createElement(banner_alert.b,{severity:design_system.oC.WARNING,title:"Deprecated",description:"<Typography/> has been deprecated in favor of the <Text /> component",actionButtonLabel:"See details",actionButtonProps:{href:"https://github.com/MetaMask/metamask-extension/issues/17670"}}),react.createElement(ui_typography.A,_object_spread({boxProps:{backgroundColor:renderBackgroundColor(args.color)}},args),args.children))};DefaultStory.storyName="Default",DefaultStory.args={children:"The quick orange fox jumped over the lazy dog."};var Variant=function(args){return react.createElement(react.Fragment,null,react.createElement(banner_alert.b,{severity:design_system.oC.WARNING,title:"Deprecated",description:"<Typography/> has been deprecated in favor of the <Text /> component",actionButtonLabel:"See details",actionButtonProps:{href:"https://github.com/MetaMask/metamask-extension/issues/17670"}}),Object.values(design_system.PT).map(function(variant){return react.createElement(ui_typography.A,_object_spread_props(_object_spread({boxProps:{backgroundColor:renderBackgroundColor(args.color)}},args),{variant:variant,key:variant}),args.children||variant)}))},Color=function(args){return react.createElement(react.Fragment,null,react.createElement(banner_alert.b,{severity:design_system.oC.WARNING,title:"Deprecated",description:"<Typography/> has been deprecated in favor of the <Text /> component",actionButtonLabel:"See details",actionButtonProps:{href:"https://github.com/MetaMask/metamask-extension/issues/17670"}}),Object.values(typography.Lp).map(function(color,index){return 16===index?react.createElement(react.Fragment,{key:color},react.createElement(ui_typography.A,{color:design_system.r7.textDefault,align:design_system.nO.Center,boxProps:{backgroundColor:design_system.i0.warningMuted,padding:4,borderColor:design_system.cG.warningDefault}},"DEPRECATED COLORS - DO NOT USE"),react.createElement(ui_typography.A,_object_spread_props(_object_spread({},args),{boxProps:{backgroundColor:renderBackgroundColor(color)},color:color}),react.createElement("strike",null,color))):index>=16?react.createElement(ui_typography.A,_object_spread_props(_object_spread({},args),{boxProps:{backgroundColor:renderBackgroundColor(color)},color:color,key:color}),react.createElement("strike",null,color)):react.createElement(ui_typography.A,_object_spread_props(_object_spread({},args),{boxProps:{backgroundColor:renderBackgroundColor(color)},color:color,key:color}),color)}))},FontWeight=function(args){return react.createElement(react.Fragment,null,react.createElement(banner_alert.b,{severity:design_system.oC.WARNING,title:"Deprecated",description:"<Typography/> has been deprecated in favor of the <Text /> component",actionButtonLabel:"See details",actionButtonProps:{href:"https://github.com/MetaMask/metamask-extension/issues/17670"}}),Object.values(design_system.zN).map(function(weight){return react.createElement(ui_typography.A,_object_spread_props(_object_spread({boxProps:{backgroundColor:renderBackgroundColor(args.color)}},args),{fontWeight:weight,key:weight}),weight)}))},FontStyle=function(args){return react.createElement(react.Fragment,null,react.createElement(banner_alert.b,{severity:design_system.oC.WARNING,title:"Deprecated",description:"<Typography/> has been deprecated in favor of the <Text /> component",actionButtonLabel:"See details",actionButtonProps:{href:"https://github.com/MetaMask/metamask-extension/issues/17670"}}),Object.values(design_system.Ec).map(function(style){return react.createElement(ui_typography.A,_object_spread_props(_object_spread({boxProps:{backgroundColor:renderBackgroundColor(args.color)}},args),{fontStyle:style,key:style}),style)}))},Align=function(args){return react.createElement(react.Fragment,null,react.createElement(banner_alert.b,{severity:design_system.oC.WARNING,title:"Deprecated",description:"<Typography/> has been deprecated in favor of the <Text /> component",actionButtonLabel:"See details",actionButtonProps:{href:"https://github.com/MetaMask/metamask-extension/issues/17670"}}),Object.values(design_system.nO).map(function(align){return react.createElement(ui_typography.A,_object_spread_props(_object_spread({boxProps:{backgroundColor:renderBackgroundColor(args.color)}},args),{align:align,key:align}),align)}))},OverflowWrap=function(args){return react.createElement(react.Fragment,null,react.createElement(banner_alert.b,{severity:design_system.oC.WARNING,title:"Deprecated",description:"<Typography/> has been deprecated in favor of the <Text /> component",actionButtonLabel:"See details",actionButtonProps:{href:"https://github.com/MetaMask/metamask-extension/issues/17670"}}),react.createElement("div",{style:{width:250,border:"1px solid var(--color-error-default)",display:"block"}},react.createElement(ui_typography.A,_object_spread_props(_object_spread({},args),{overflowWrap:design_system.uU.NORMAL}),design_system.uU.NORMAL,": 0x39013f961c378f02c2b82a6e1d31e9812786fd9d"),react.createElement(ui_typography.A,_object_spread_props(_object_spread({},args),{overflowWrap:design_system.uU.BREAK_WORD}),design_system.uU.BREAK_WORD,": 0x39013f961c378f02c2b82a6e1d31e9812786fd9d")))},As=function(args){return react.createElement(react.Fragment,null,react.createElement(banner_alert.b,{severity:design_system.oC.WARNING,title:"Deprecated",description:"<Typography/> has been deprecated in favor of the <Text /> component",actionButtonLabel:"See details",actionButtonProps:{href:"https://github.com/MetaMask/metamask-extension/issues/17670"}}),react.createElement(ui_typography.A,{boxProps:{display:design_system.Nu.BLOCK},marginBottom:4},"You can change the root element of the Typography component using the as prop. Inspect the below elements to see the underlying HTML elements"),react.createElement(box.Ay,{gap:4},Object.values(typography.gn).map(function(as){return react.createElement(ui_typography.A,_object_spread_props(_object_spread({},args),{as:as,key:as,boxProps:{backgroundColor:renderBackgroundColor(args.color),display:design_system.Nu.BLOCK}}),as)})))},Margin=function(args){return react.createElement(react.Fragment,null,react.createElement(banner_alert.b,{severity:design_system.oC.WARNING,title:"Deprecated",description:"<Typography/> has been deprecated in favor of the <Text /> component",actionButtonLabel:"See details",actionButtonProps:{href:"https://github.com/MetaMask/metamask-extension/issues/17670"}}),react.createElement(ui_typography.A,args,"This Typography component has a margin of ",4*args.margin,"px"))};Margin.args={margin:4};var BoxPropsStory=function(args){return react.createElement(react.Fragment,null,react.createElement(banner_alert.b,{severity:design_system.oC.WARNING,title:"Deprecated",description:"<Typography/> has been deprecated in favor of the <Text /> component",actionButtonLabel:"See details",actionButtonProps:{href:"https://github.com/MetaMask/metamask-extension/issues/17670"}}),react.createElement(ui_typography.A,args,"This uses the boxProps prop"))};BoxPropsStory.args={color:design_system.r7.textDefault,boxProps:{backgroundColor:design_system.i0.infoMuted,borderColor:design_system.cG.infoDefault,padding:4,borderRadius:4}},BoxPropsStory.storyName="BoxProps",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => <>
    <BannerAlert severity={SEVERITIES.WARNING} title="Deprecated" description="<Typography/> has been deprecated in favor of the <Text /> component" actionButtonLabel="See details" actionButtonProps={{
    href: 'https://github.com/MetaMask/metamask-extension/issues/17670'
  }} />
    <Typography boxProps={{
    backgroundColor: renderBackgroundColor(args.color)
  }} {...args}>
      {args.children}
    </Typography>
  </>`,...DefaultStory.parameters?.docs?.source}}},Variant.parameters={...Variant.parameters,docs:{...Variant.parameters?.docs,source:{originalSource:`args => <>
    <BannerAlert severity={SEVERITIES.WARNING} title="Deprecated" description="<Typography/> has been deprecated in favor of the <Text /> component" actionButtonLabel="See details" actionButtonProps={{
    href: 'https://github.com/MetaMask/metamask-extension/issues/17670'
  }} />
    {Object.values(TypographyVariant).map(variant => <Typography boxProps={{
    backgroundColor: renderBackgroundColor(args.color)
  }} {...args} variant={variant} key={variant}>
        {args.children || variant}
      </Typography>)}
  </>`,...Variant.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:`args => {
  // Index of last valid color in ValidColors array
  const LAST_VALID_COLORS_ARRAY_INDEX = 16;
  return <>
      <BannerAlert severity={SEVERITIES.WARNING} title="Deprecated" description="<Typography/> has been deprecated in favor of the <Text /> component" actionButtonLabel="See details" actionButtonProps={{
      href: 'https://github.com/MetaMask/metamask-extension/issues/17670'
    }} />
      {Object.values(ValidColors).map((color, index) => {
      if (index === LAST_VALID_COLORS_ARRAY_INDEX) {
        return <React.Fragment key={color}>
              <Typography color={TextColor.textDefault} align={TextAlign.Center} boxProps={{
            backgroundColor: BackgroundColor.warningMuted,
            padding: 4,
            borderColor: BorderColor.warningDefault
          }}>
                DEPRECATED COLORS - DO NOT USE
              </Typography>
              <Typography {...args} boxProps={{
            backgroundColor: renderBackgroundColor(color)
          }} color={color}>
                <strike>{color}</strike>
              </Typography>
            </React.Fragment>;
      } else if (index >= LAST_VALID_COLORS_ARRAY_INDEX) {
        return <Typography {...args} boxProps={{
          backgroundColor: renderBackgroundColor(color)
        }} color={color} key={color}>
              <strike>{color}</strike>
            </Typography>;
      }
      return <Typography {...args} boxProps={{
        backgroundColor: renderBackgroundColor(color)
      }} color={color} key={color}>
            {color}
          </Typography>;
    })}
    </>;
}`,...Color.parameters?.docs?.source}}},FontWeight.parameters={...FontWeight.parameters,docs:{...FontWeight.parameters?.docs,source:{originalSource:`args => <>
    <BannerAlert severity={SEVERITIES.WARNING} title="Deprecated" description="<Typography/> has been deprecated in favor of the <Text /> component" actionButtonLabel="See details" actionButtonProps={{
    href: 'https://github.com/MetaMask/metamask-extension/issues/17670'
  }} />
    {Object.values(FONT_WEIGHT).map(weight => <Typography boxProps={{
    backgroundColor: renderBackgroundColor(args.color)
  }} {...args} fontWeight={weight} key={weight}>
        {weight}
      </Typography>)}
  </>`,...FontWeight.parameters?.docs?.source}}},FontStyle.parameters={...FontStyle.parameters,docs:{...FontStyle.parameters?.docs,source:{originalSource:`args => <>
    <BannerAlert severity={SEVERITIES.WARNING} title="Deprecated" description="<Typography/> has been deprecated in favor of the <Text /> component" actionButtonLabel="See details" actionButtonProps={{
    href: 'https://github.com/MetaMask/metamask-extension/issues/17670'
  }} />
    {Object.values(FONT_STYLE).map(style => <Typography boxProps={{
    backgroundColor: renderBackgroundColor(args.color)
  }} {...args} fontStyle={style} key={style}>
        {style}
      </Typography>)}
  </>`,...FontStyle.parameters?.docs?.source}}},Align.parameters={...Align.parameters,docs:{...Align.parameters?.docs,source:{originalSource:`args => <>
    <BannerAlert severity={SEVERITIES.WARNING} title="Deprecated" description="<Typography/> has been deprecated in favor of the <Text /> component" actionButtonLabel="See details" actionButtonProps={{
    href: 'https://github.com/MetaMask/metamask-extension/issues/17670'
  }} />
    {Object.values(TextAlign).map(align => <Typography boxProps={{
    backgroundColor: renderBackgroundColor(args.color)
  }} {...args} align={align} key={align}>
        {align}
      </Typography>)}
  </>`,...Align.parameters?.docs?.source}}},OverflowWrap.parameters={...OverflowWrap.parameters,docs:{...OverflowWrap.parameters?.docs,source:{originalSource:`args => <>
    <BannerAlert severity={SEVERITIES.WARNING} title="Deprecated" description="<Typography/> has been deprecated in favor of the <Text /> component" actionButtonLabel="See details" actionButtonProps={{
    href: 'https://github.com/MetaMask/metamask-extension/issues/17670'
  }} />
    <div style={{
    width: 250,
    border: '1px solid var(--color-error-default)',
    display: 'block'
  }}>
      <Typography {...args} overflowWrap={OVERFLOW_WRAP.NORMAL}>
        {OVERFLOW_WRAP.NORMAL}: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
      </Typography>
      <Typography {...args} overflowWrap={OVERFLOW_WRAP.BREAK_WORD}>
        {OVERFLOW_WRAP.BREAK_WORD}: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
      </Typography>
    </div>
  </>`,...OverflowWrap.parameters?.docs?.source}}},As.parameters={...As.parameters,docs:{...As.parameters?.docs,source:{originalSource:`args => <>
    <BannerAlert severity={SEVERITIES.WARNING} title="Deprecated" description="<Typography/> has been deprecated in favor of the <Text /> component" actionButtonLabel="See details" actionButtonProps={{
    href: 'https://github.com/MetaMask/metamask-extension/issues/17670'
  }} />
    <Typography boxProps={{
    display: DISPLAY.BLOCK
  }} marginBottom={4}>
      You can change the root element of the Typography component using the as
      prop. Inspect the below elements to see the underlying HTML elements
    </Typography>
    <Box gap={4}>
      {Object.values(ValidTags).map(as => <Typography {...args} as={as} key={as} boxProps={{
      backgroundColor: renderBackgroundColor(args.color),
      display: DISPLAY.BLOCK
    }}>
          {as}
        </Typography>)}
    </Box>
  </>`,...As.parameters?.docs?.source}}},Margin.parameters={...Margin.parameters,docs:{...Margin.parameters?.docs,source:{originalSource:`args => <>
    <BannerAlert severity={SEVERITIES.WARNING} title="Deprecated" description="<Typography/> has been deprecated in favor of the <Text /> component" actionButtonLabel="See details" actionButtonProps={{
    href: 'https://github.com/MetaMask/metamask-extension/issues/17670'
  }} />
    <Typography {...args}>
      This Typography component has a margin of {args.margin * 4}px
    </Typography>
  </>`,...Margin.parameters?.docs?.source}}},BoxPropsStory.parameters={...BoxPropsStory.parameters,docs:{...BoxPropsStory.parameters?.docs,source:{originalSource:`args => <>
    <BannerAlert severity={SEVERITIES.WARNING} title="Deprecated" description="<Typography/> has been deprecated in favor of the <Text /> component" actionButtonLabel="See details" actionButtonProps={{
    href: 'https://github.com/MetaMask/metamask-extension/issues/17670'
  }} />
    <Typography {...args}>This uses the boxProps prop</Typography>
  </>`,...BoxPropsStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Variant","Color","FontWeight","FontStyle","Align","OverflowWrap","As","Margin","BoxPropsStory"]}}]);
//# sourceMappingURL=components-ui-typography-typography-stories.b63933c2.iframe.bundle.js.map