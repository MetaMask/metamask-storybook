"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[981],{"./ui/components/app/incoming-trasaction-toggle/network-toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_network_toggle__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/app/incoming-trasaction-toggle/network-toggle.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/IncomingTransactionToggle/NetworkToggle",component:_network_toggle__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{chainId:{control:"text"},networkPreferences:{control:"object"},toggleSingleNetwork:{action:"toggleSingleNetwork"}},args:{networkPreferences:{isShowIncomingTransactions:!0,label:"Ethereum or long network name",imageUrl:"./images/ethereum.svg"},chainId:"0x1"}};var DefaultStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_network_toggle__WEBPACK_IMPORTED_MODULE_1__.Z,args)};DefaultStory.storyName="Default",DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"args => <NetworkToggle {...args} />"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})})},"./ui/components/app/incoming-trasaction-toggle/network-toggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_shared_constants_network__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./shared/constants/network.ts"),_contexts_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/contexts/i18n.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_component_library__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/index.ts"),_ui_toggle_button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/ui/toggle-button/index.js"),_ui_tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/components/ui/tooltip/index.js"),NetworkToggle=function(param){var _domain_charAt,networkPreferences=param.networkPreferences,toggleSingleNetwork=param.toggleSingleNetwork,chainId=param.chainId,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_i18n__WEBPACK_IMPORTED_MODULE_2__.OO),isShowIncomingTransactions=networkPreferences.isShowIncomingTransactions,networkName=networkPreferences.label,networkDomainAndSubdomain=null===_shared_constants_network__WEBPACK_IMPORTED_MODULE_1__.YV||void 0===_shared_constants_network__WEBPACK_IMPORTED_MODULE_1__.YV?void 0:_shared_constants_network__WEBPACK_IMPORTED_MODULE_1__.YV[chainId],domain=null==networkDomainAndSubdomain?void 0:networkDomainAndSubdomain.domain,upperCaseDomain=(null==domain?void 0:null===(_domain_charAt=domain.charAt(0))||void 0===_domain_charAt?void 0:_domain_charAt.toUpperCase())+(null==domain?void 0:domain.slice(1));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xu,{marginTop:6,marginBottom:6,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.sS.Flex,flexDirection:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Qb.Row,gap:4,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.E0.spaceBetween,"data-testid":"network-toggle-".concat(chainId),className:"network-toggle-wrapper"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xu,{backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.lP.transparent,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.sS.Flex,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.g1.center,width:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Sw.Full,gap:4,className:"network-toggle-wrapper__overflow-container"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.OQ,{size:_component_library__WEBPACK_IMPORTED_MODULE_4__.NI.Sm,src:networkPreferences.imageUrl,name:networkName}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xu,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.sS.Flex,flexDirection:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Qb.Column,className:"network-toggle-wrapper__overflow-container"},networkName.length>20?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_tooltip__WEBPACK_IMPORTED_MODULE_6__.Z,{position:"bottom"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xv,{color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.d9.textDefault,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.lP.transparent,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.rK.bodyMd,ellipsis:!0},networkName)):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xv,{color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.d9.textDefault,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.lP.transparent,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.rK.bodyMd,ellipsis:!0},networkName),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xv,{color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.d9.primaryDefault,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.lP.transparent,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.rK.bodySm,ellipsis:!0},domain&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{key:"network_".concat(domain,"_link"),href:"https://".concat(domain),rel:"noreferrer",target:"_blank"},upperCaseDomain)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.xu,{marginLeft:"auto"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_toggle_button__WEBPACK_IMPORTED_MODULE_5__.Z,{value:isShowIncomingTransactions,onToggle:function(value){return toggleSingleNetwork(chainId,!value)},offLabel:t("off"),onLabel:t("on")})))};let __WEBPACK_DEFAULT_EXPORT__=NetworkToggle;NetworkToggle.propTypes={chainId:prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired,networkPreferences:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired,toggleSingleNetwork:prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired};try{networktoggle.displayName="networktoggle",networktoggle.__docgenInfo={description:"",displayName:"networktoggle",props:{networkPreferences:{defaultValue:null,description:"",name:"networkPreferences",required:!0,type:{name:"NetworkPreferences"}},toggleSingleNetwork:{defaultValue:null,description:"",name:"toggleSingleNetwork",required:!0,type:{name:"(chainId: string, value: boolean) => void"}},chainId:{defaultValue:null,description:"",name:"chainId",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/app/incoming-trasaction-toggle/network-toggle.tsx#networktoggle"]={docgenInfo:networktoggle.__docgenInfo,name:"networktoggle",path:"ui/components/app/incoming-trasaction-toggle/network-toggle.tsx#networktoggle"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/ui/toggle-button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./ui/components/ui/toggle-button/toggle-button.component.js").Z},"./ui/components/ui/toggle-button/toggle-button.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_toggle_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-toggle-button/lib/index.js"),react_toggle_button__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_toggle_button__WEBPACK_IMPORTED_MODULE_1__),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}var trackStyle={width:"40px",height:"24px",padding:"0px",borderRadius:"26px",border:"2px solid var(--color-primary-default)",display:"flex",alignItems:"center",justifyContent:"center"},offTrackStyle=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},trackStyle),{border:"2px solid var(--color-border-default)"}),thumbStyle={width:"18px",height:"18px",display:"flex",boxShadow:"none",alignSelf:"center",borderRadius:"50%",position:"relative"},colors={activeThumb:{base:"#037DD6"},inactiveThumb:{base:"#6A737D"},active:{base:"#F2F4F6",hover:"#F2F4F6"},inactive:{base:"#F2F4F6",hover:"#F2F4F6"}},ToggleButton=function(props){var value=props.value,onToggle=props.onToggle,offLabel=props.offLabel,onLabel=props.onLabel,disabled=props.disabled,className=props.className,dataTestId=props.dataTestId,modifier=value?"on":"off";return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{tabIndex:"0",onKeyDown:function(e){"Enter"===e.key&&onToggle(value)},className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("toggle-button","toggle-button--".concat(modifier),{"toggle-button--disabled":disabled},className)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_toggle_button__WEBPACK_IMPORTED_MODULE_1___default(),{value:value,onToggle:disabled?void 0:onToggle,activeLabel:"",inactiveLabel:"",trackStyle:value?trackStyle:offTrackStyle,thumbStyle:thumbStyle,thumbAnimateRange:[3,18],colors:colors,passThroughInputProps:{"data-testid":dataTestId}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"toggle-button__status"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"toggle-button__label-off"},offLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"toggle-button__label-on"},onLabel)))};ToggleButton.propTypes={value:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,onToggle:prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,offLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,onLabel:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};let __WEBPACK_DEFAULT_EXPORT__=ToggleButton},"./ui/components/ui/tooltip/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_tooltip__WEBPACK_IMPORTED_MODULE_0__.Z});var _tooltip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/tooltip/tooltip.js")},"./ui/components/ui/tooltip/tooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Tooltip});var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_tippy__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-tippy/dist/react-tippy.js");function _assert_this_initialized(self){if(void 0===self)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _get_prototype_of(o){return(_get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}function _possible_constructor_return(self,call){return call&&("object"===_type_of(call)||"function"==typeof call)?call:_assert_this_initialized(self)}function _set_prototype_of(o,p){return(_set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _create_super(Derived){var hasNativeReflectConstruct=_is_native_reflect_construct();return function _createSuperInternal(){var result,Super=_get_prototype_of(Derived);if(hasNativeReflectConstruct){var NewTarget=_get_prototype_of(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possible_constructor_return(this,result)}}var Tooltip=function(PureComponent){_inherits(Tooltip,PureComponent);var _super=_create_super(Tooltip);function Tooltip(){return _class_call_check(this,Tooltip),_super.apply(this,arguments)}return _create_class(Tooltip,[{key:"render",value:function render(){var _this_props=this.props,arrow=_this_props.arrow,children=_this_props.children,containerClassName=_this_props.containerClassName,disabled=_this_props.disabled,position=_this_props.position,html=_this_props.html,interactive=_this_props.interactive,size=_this_props.size,title=_this_props.title,trigger=_this_props.trigger,onHidden=_this_props.onHidden,offset=_this_props.offset,open=_this_props.open,wrapperClassName=_this_props.wrapperClassName,style=_this_props.style,theme=_this_props.theme,tabIndex=_this_props.tabIndex,tag=_this_props.tag;return title||html?react__WEBPACK_IMPORTED_MODULE_0__.createElement(tag,{className:wrapperClassName},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_tippy__WEBPACK_IMPORTED_MODULE_1__.Tooltip,{arrow:arrow,className:containerClassName,disabled:disabled,hideOnClick:!1,html:html,interactive:interactive,onHidden:onHidden,position:position,size:size,offset:offset,style:style,title:disabled?"":title,trigger:trigger,open:open,theme:"tippy-tooltip--mm-custom ".concat(theme),tabIndex:tabIndex||0,tag:tag},children)):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:wrapperClassName},children)}}]),Tooltip}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);_define_property(Tooltip,"defaultProps",{arrow:!0,children:null,containerClassName:"",html:null,interactive:void 0,onHidden:null,position:"left",offset:0,open:void 0,size:"small",title:null,trigger:"mouseenter focus",wrapperClassName:void 0,theme:"",tag:"div"}),_define_property(Tooltip,"propTypes",{arrow:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,containerClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,html:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,interactive:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,offset:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,onHidden:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,open:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,position:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["top","right","bottom","left"]),size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["small","regular","big"]),title:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,trigger:prop_types__WEBPACK_IMPORTED_MODULE_2___default().any,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,style:prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,theme:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,tabIndex:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string})}}]);