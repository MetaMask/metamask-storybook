(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[19877],{"./ui/components/app/snaps/copyable/copyable.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,SensitiveStory:()=>SensitiveStory,ShowMoreStory:()=>ShowMoreStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_copyable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/app/snaps/copyable/copyable.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/Snaps/Copyable",component:_copyable__WEBPACK_IMPORTED_MODULE_1__.a,argTypes:{text:{control:"text"},sensitive:{control:"boolean"}}};var DefaultStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_copyable__WEBPACK_IMPORTED_MODULE_1__.a,args)};DefaultStory.storyName="Default",DefaultStory.args={text:"Content to copy"};var SensitiveStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_copyable__WEBPACK_IMPORTED_MODULE_1__.a,args)};SensitiveStory.storyName="Sensitive",SensitiveStory.args={text:"Sensitive informations",sensitive:!0};var ShowMoreStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_copyable__WEBPACK_IMPORTED_MODULE_1__.a,args)};ShowMoreStory.storyName="Show More",ShowMoreStory.args={text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices arcu quis lorem luctus, consequat vulputate leo viverra. Phasellus vulputate nulla libero, vel mollis justo dapibus sed. Donec suscipit nisl et posuere mollis. Integer varius magna id fringilla finibus. Duis porttitor nisi ante, id viverra nibh aliquam vel. Aliquam in malesuada urna, ac dictum sem. Cras dictum sagittis turpis, sed molestie justo ornare feugiat. Morbi laoreet pulvinar arcu, id maximus sapien tempor eget. Nulla gravida elementum rutrum. Sed at dui efficitur, commodo ipsum sit amet, tempor elit. Donec sagittis mi at libero mollis elementum. Cras et justo at orci porttitor mollis. Nullam ac sapien a ex varius hendrerit iaculis ac leo. Curabitur ut dui finibus, faucibus nisl eu, pharetra quam. Mauris vulputate sapien quis malesuada commodo. Pellentesque ullamcorper pellentesque leo eu dictum. Nam accumsan tincidunt dolor, sit amet fringilla orci aliquet at. Etiam eget lorem nunc. Fusce nec lacus sed risus vestibulum congue. Integer massa ante, mattis in finibus dictum, luctus non lectus. Ut scelerisque aliquet felis, id lacinia lacus dictum eget. Sed consequat est nec sem maximus facilisis. Nam sit amet cursus augue. Quisque elit ipsum, cursus et ipsum quis, euismod ornare arcu. Quisque consectetur est purus, laoreet mattis mauris malesuada non. Vestibulum congue nibh nec sollicitudin mollis. In gravida quam quam, ut mollis ante sodales a. Morbi auctor dui ut mauris aliquet consequat. Morbi elementum semper dui, pulvinar dapibus ipsum gravida ac. Vivamus fringilla tortor libero, iaculis tincidunt sapien iaculis vitae. Duis sollicitudin tempor massa, quis commodo nisl ultricies nec. Pellentesque vitae enim felis. Sed ac felis nec odio viverra eleifend ut et velit. Sed volutpat, massa a porttitor efficitur, erat eros tincidunt dolor, eu feugiat nisi velit ac orci. In fermentum aliquet blandit. Praesent et ligula at justo tristique placerat. In et ligula magna. Proin vel condimentum eros, sit amet gravida erat. Fusce in augue sed metus imperdiet posuere in in ex. Nunc tempor, leo et mollis pharetra, sapien orci euismod diam, sit amet dictum erat magna vitae sapien. Duis egestas tortor non turpis tincidunt gravida vitae a ipsum. Vivamus in sapien sed diam aliquet tincidunt. Suspendisse potenti. Curabitur scelerisque euismod neque a vestibulum. Phasellus dolor ante, aliquet ullamcorper dui non, laoreet interdum lectus. Sed nec suscipit orci, vitae aliquet ligula. Cras ex velit, mollis in sollicitudin at, ornare non quam. Nunc ultricies nibh vitae ultricies semper. Vivamus eget diam vestibulum, maximus est sed, condimentum elit. Vivamus efficitur cursus nibh eget tempus. Donec sagittis maximus rhoncus. Vivamus fermentum magna id molestie congue. Fusce quam augue, egestas id molestie sed, finibus eu arcu. In et nunc porttitor, scelerisque turpis sit amet, interdum lectus. Suspendisse eu metus magna. Vestibulum lorem felis, aliquam quis porta vel, dictum non lectus. Vivamus consectetur nec quam vitae."},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <Copyable {...args} />",...DefaultStory.parameters?.docs?.source}}},SensitiveStory.parameters={...SensitiveStory.parameters,docs:{...SensitiveStory.parameters?.docs,source:{originalSource:"args => <Copyable {...args} />",...SensitiveStory.parameters?.docs?.source}}},ShowMoreStory.parameters={...ShowMoreStory.parameters,docs:{...ShowMoreStory.parameters?.docs,source:{originalSource:"args => <Copyable {...args} />",...ShowMoreStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","SensitiveStory","ShowMoreStory"]},"./ui/components/app/snaps/copyable/copyable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Copyable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_hooks_useCopyToClipboard__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/hooks/useCopyToClipboard.js"),_component_library__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/index.ts"),_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/hooks/useI18nContext.js"),_ui_tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/components/ui/tooltip/index.js"),_show_more__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ui/components/app/snaps/show-more/index.js"),_shared_constants_time__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./shared/constants/time.ts"),_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./ui/hooks/useTimeout.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Copyable=function(param){var text=param.text,_param_sensitive=param.sensitive,sensitive=void 0!==_param_sensitive&&_param_sensitive,marginTop=param.marginTop,marginBottom=param.marginBottom,t=(0,_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_5__.P)(),handleCopy=_sliced_to_array((0,_hooks_useCopyToClipboard__WEBPACK_IMPORTED_MODULE_3__.C)(),2)[1],_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!sensitive),2),isVisible=_useState[0],setIsVisible=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isClicked=_useState1[0],setIsClicked=_useState1[1],startTimeout=(0,_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_9__.Z)(function(){return setIsClicked(!1)},3*_shared_constants_time__WEBPACK_IMPORTED_MODULE_8__.Z2,!1),handleVisibilityClick=function(e){e.stopPropagation(),setIsVisible(function(state){return!state})};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.az,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.nl.Flex,onClick:sensitive&&!isVisible?handleVisibilityClick:function(e){e.stopPropagation(),handleCopy(text),setIsClicked(!0),startTimeout()},className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("copyable",{sensitive:sensitive,clicked:isClicked,visible:isVisible}),backgroundColor:isVisible&&sensitive?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.errorMuted:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.primaryMuted,borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Z6.LG,padding:2,marginTop:marginTop,marginBottom:marginBottom},sensitive&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.az,{marginRight:2,className:"copyable__icon"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_tooltip__WEBPACK_IMPORTED_MODULE_6__.A,{wrapperClassName:"copyable__tooltip",html:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.EY,null,t(isVisible?"hideSentitiveInfo":"doNotShare")),position:"bottom"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.In,{name:isVisible?_component_library__WEBPACK_IMPORTED_MODULE_4__.$M.EyeSlash:_component_library__WEBPACK_IMPORTED_MODULE_4__.$M.Eye,onClick:handleVisibilityClick,color:isVisible&&sensitive?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Q1.errorAlternative:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Li.iconAlternative,"data-testid":"reveal-icon"}))),sensitive&&!isVisible&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.EY,{color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Q1.textAlternative,marginRight:2,marginBottom:0,overflowWrap:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Np.Anywhere},t("revealSensitiveContent")),isVisible&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_show_more__WEBPACK_IMPORTED_MODULE_7__.x,{marginRight:2,buttonBackground:isVisible&&sensitive?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.errorMuted:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.backgroundAlternative},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.EY,{color:isVisible&&sensitive?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Q1.errorAlternative:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.r7.textAlternative,marginBottom:0,overflowWrap:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Np.Anywhere},text)),isVisible&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.In,{className:"copyable__icon",name:isClicked?_component_library__WEBPACK_IMPORTED_MODULE_4__.$M.CopySuccess:_component_library__WEBPACK_IMPORTED_MODULE_4__.$M.Copy,color:isVisible&&sensitive?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Q1.errorAlternative:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Li.iconAlternative,marginLeft:"auto","data-testid":"copy-icon"}))};Copyable.propTypes={text:prop_types__WEBPACK_IMPORTED_MODULE_10___default().string,sensitive:prop_types__WEBPACK_IMPORTED_MODULE_10___default().bool,marginTop:prop_types__WEBPACK_IMPORTED_MODULE_10___default().number,marginBottom:prop_types__WEBPACK_IMPORTED_MODULE_10___default().number},Copyable.__docgenInfo={description:"",methods:[],displayName:"Copyable",props:{sensitive:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},text:{description:"",type:{name:"string"},required:!1},marginTop:{description:"",type:{name:"number"},required:!1},marginBottom:{description:"",type:{name:"number"},required:!1}}}},"./ui/components/app/snaps/show-more/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>ShowMore});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useIsOverflowing=__webpack_require__("./ui/hooks/snaps/useIsOverflowing.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var ShowMore=function(_param){var children=_param.children,_param_className=_param.className,props=_object_without_properties(_param,["children","className"]),t=(0,useI18nContext.P)(),_useIsOverflowing=(0,useIsOverflowing.A)(),contentRef=_useIsOverflowing.contentRef,isOverflowing=_useIsOverflowing.isOverflowing,_useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1];return react.createElement(component_library.az,_object_spread({className:classnames_default()("show-more",void 0===_param_className?"":_param_className),style:{position:"relative",overflow:"hidden",maxHeight:isOpen?"none":void 0},ref:contentRef},props),children,isOverflowing&&!isOpen&&react.createElement(component_library.az,{style:{position:"absolute",bottom:0,right:0,background:"linear-gradient(90deg, transparent 0%, var(--color-".concat(design_system.i0.backgroundAlternative,") 33%)")}},react.createElement(component_library.$n,{className:"show-more__button",padding:0,paddingLeft:8,variant:component_library.Ak.Link,onClick:function(e){e.stopPropagation(),setIsOpen(!0)}},react.createElement(component_library.EY,{color:design_system.r7.infoDefault},t("more")))))};ShowMore.propTypes={children:prop_types_default().node,buttonBackground:prop_types_default().string,className:prop_types_default().string},ShowMore.__docgenInfo={description:"",methods:[],displayName:"ShowMore",props:{className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},buttonBackground:{description:"",type:{name:"string"},required:!1}}}},"./ui/components/ui/tooltip/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_tooltip__WEBPACK_IMPORTED_MODULE_0__.A});var _tooltip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/tooltip/tooltip.js")},"./ui/components/ui/tooltip/tooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Tooltip});var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_tippy__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-tippy/dist/react-tippy.js");function _assert_this_initialized(self){if(void 0===self)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _get_prototype_of(o){return(_get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}function _possible_constructor_return(self,call){return call&&("object"===_type_of(call)||"function"==typeof call)?call:_assert_this_initialized(self)}function _set_prototype_of(o,p){return(_set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _create_super(Derived){var hasNativeReflectConstruct=_is_native_reflect_construct();return function _createSuperInternal(){var result,Super=_get_prototype_of(Derived);return result=hasNativeReflectConstruct?Reflect.construct(Super,arguments,_get_prototype_of(this).constructor):Super.apply(this,arguments),_possible_constructor_return(this,result)}}var Tooltip=function(PureComponent){_inherits(Tooltip,PureComponent);var _super=_create_super(Tooltip);function Tooltip(){return _class_call_check(this,Tooltip),_super.apply(this,arguments)}return _create_class(Tooltip,[{key:"render",value:function render(){var _this_props=this.props,arrow=_this_props.arrow,children=_this_props.children,containerClassName=_this_props.containerClassName,disabled=_this_props.disabled,position=_this_props.position,html=_this_props.html,interactive=_this_props.interactive,size=_this_props.size,distance=_this_props.distance,title=_this_props.title,trigger=_this_props.trigger,onHidden=_this_props.onHidden,offset=_this_props.offset,open=_this_props.open,wrapperClassName=_this_props.wrapperClassName,style=_this_props.style,wrapperStyle=_this_props.wrapperStyle,theme=_this_props.theme,tabIndex=_this_props.tabIndex,tag=_this_props.tag;return title||html?react__WEBPACK_IMPORTED_MODULE_0__.createElement(tag,{className:wrapperClassName,style:wrapperStyle},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_tippy__WEBPACK_IMPORTED_MODULE_1__.Tooltip,{arrow:arrow,className:containerClassName,disabled:disabled,hideOnClick:!1,distance:distance,html:html,interactive:interactive,onHidden:onHidden,position:position,size:size,offset:offset,style:style,title:disabled?"":title,trigger:trigger,open:open,theme:"tippy-tooltip--mm-custom ".concat(theme),tabIndex:tabIndex||0,tag:tag},children)):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:wrapperClassName},children)}}]),Tooltip}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);_define_property(Tooltip,"defaultProps",{arrow:!0,children:null,containerClassName:"",html:null,interactive:void 0,onHidden:null,distance:0,position:"left",offset:0,open:void 0,size:"small",title:null,trigger:"mouseenter focus",wrapperClassName:void 0,theme:"",tag:"div",wrapperStyle:{}}),_define_property(Tooltip,"propTypes",{arrow:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,containerClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,html:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,distance:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,interactive:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,offset:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,onHidden:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,open:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,position:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["top","right","bottom","left"]),size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["small","regular","big"]),title:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,trigger:prop_types__WEBPACK_IMPORTED_MODULE_2___default().any,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,style:prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,wrapperStyle:prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,theme:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,tabIndex:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string}),Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{arrow:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},containerClassName:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},html:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},interactive:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"bool"},required:!1},onHidden:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},distance:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},position:{defaultValue:{value:"'left'",computed:!1},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},offset:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},open:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'small'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'regular'",computed:!1},{value:"'big'",computed:!1}]},required:!1},title:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},trigger:{defaultValue:{value:"'mouseenter focus'",computed:!1},description:"",type:{name:"any"},required:!1},wrapperClassName:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},theme:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},tag:{defaultValue:{value:"'div'",computed:!1},description:"",type:{name:"string"},required:!1},wrapperStyle:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},style:{description:"",type:{name:"object"},required:!1},tabIndex:{description:"",type:{name:"number"},required:!1}}}},"./ui/hooks/snaps/useIsOverflowing.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__=function(){var contentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isOverflowing=_useState[0],setIsOverflowing=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){setIsOverflowing(contentRef.current&&contentRef.current.offsetHeight<contentRef.current.scrollHeight)},[contentRef]),{contentRef:contentRef,isOverflowing:isOverflowing}}},"./ui/hooks/useCopyToClipboard.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>useCopyToClipboard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/copy-to-clipboard/index.js"),copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__),_shared_constants_time__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./shared/constants/time.ts"),_shared_constants_copy__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./shared/constants/copy.ts"),_useTimeout__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/hooks/useTimeout.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var DEFAULT_DELAY=_shared_constants_time__WEBPACK_IMPORTED_MODULE_2__.pY;function useCopyToClipboard(){var delay=arguments.length>0&&void 0!==arguments[0]?arguments[0]:DEFAULT_DELAY,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),copied=_useState[0],setCopied=_useState[1],startTimeout=(0,_useTimeout__WEBPACK_IMPORTED_MODULE_4__.Z)(function(){copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(" ",_shared_constants_copy__WEBPACK_IMPORTED_MODULE_3__.T),setCopied(!1)},delay,!1);return[copied,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(text){setCopied(!0),startTimeout(),copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(text,_shared_constants_copy__WEBPACK_IMPORTED_MODULE_3__.T)},[startTimeout])]}},"./ui/hooks/useTimeout.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useTimeout});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function useTimeout(cb,delay){var immediate=!(arguments.length>2)||void 0===arguments[2]||arguments[2],saveCb=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),timeoutId=_useState[0],setTimeoutId=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){saveCb.current=cb},[cb]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if("start"===timeoutId)return setTimeoutId(setTimeout(function(){saveCb.current()},delay)),function(){clearTimeout(timeoutId)}},[delay,timeoutId]);var startTimeout=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){clearTimeout(timeoutId),setTimeoutId("start")},[timeoutId]);return immediate&&startTimeout(),startTimeout}},"./shared/constants/copy.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>COPY_OPTIONS});var COPY_OPTIONS={format:"text/plain"}},"./node_modules/copy-to-clipboard/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var deselectCurrent=__webpack_require__("./node_modules/toggle-selection/index.js"),clipboardToIE11Formatting={"text/plain":"Text","text/html":"Url",default:"Text"};function format(message){var copyKey=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return message.replace(/#{\s*key\s*}/g,copyKey)}function copy(text,options){var debug,message,reselectPrevious,range,selection,mark,success=!1;options||(options={}),debug=options.debug||!1;try{if(reselectPrevious=deselectCurrent(),range=document.createRange(),selection=document.getSelection(),(mark=document.createElement("span")).textContent=text,mark.ariaHidden="true",mark.style.all="unset",mark.style.position="fixed",mark.style.top=0,mark.style.clip="rect(0, 0, 0, 0)",mark.style.whiteSpace="pre",mark.style.webkitUserSelect="text",mark.style.MozUserSelect="text",mark.style.msUserSelect="text",mark.style.userSelect="text",mark.addEventListener("copy",function(e){if(e.stopPropagation(),options.format){if(e.preventDefault(),void 0===e.clipboardData){debug&&console.warn("unable to use e.clipboardData"),debug&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var format=clipboardToIE11Formatting[options.format]||clipboardToIE11Formatting.default;window.clipboardData.setData(format,text)}else e.clipboardData.clearData(),e.clipboardData.setData(options.format,text)}options.onCopy&&(e.preventDefault(),options.onCopy(e.clipboardData))}),document.body.appendChild(mark),range.selectNodeContents(mark),selection.addRange(range),!document.execCommand("copy"))throw Error("copy command was unsuccessful");success=!0}catch(err){debug&&console.error("unable to copy using execCommand: ",err),debug&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(options.format||"text",text),options.onCopy&&options.onCopy(window.clipboardData),success=!0}catch(err){debug&&console.error("unable to copy using clipboardData: ",err),debug&&console.error("falling back to prompt"),message=format("message"in options?options.message:"Copy to clipboard: #{key}, Enter"),window.prompt(message,text)}}finally{selection&&("function"==typeof selection.removeRange?selection.removeRange(range):selection.removeAllRanges()),mark&&document.body.removeChild(mark),reselectPrevious()}return success}module.exports=copy},"./node_modules/toggle-selection/index.js":module=>{module.exports=function(){var selection=document.getSelection();if(!selection.rangeCount)return function(){};for(var active=document.activeElement,ranges=[],i=0;i<selection.rangeCount;i++)ranges.push(selection.getRangeAt(i));switch(active.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":active.blur();break;default:active=null}return selection.removeAllRanges(),function(){"Caret"===selection.type&&selection.removeAllRanges(),selection.rangeCount||ranges.forEach(function(range){selection.addRange(range)}),active&&active.focus()}}}}]);