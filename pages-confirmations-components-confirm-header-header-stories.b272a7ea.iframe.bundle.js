"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[7192],{"./ui/pages/confirmations/components/confirm/header/header.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,default:()=>header_stories});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),mock_state=__webpack_require__("./test/data/mock-state.json"),store=__webpack_require__("./ui/store/store.ts"),network=__webpack_require__("./shared/constants/network.ts"),selectors=__webpack_require__("./ui/selectors/index.js"),metamask=__webpack_require__("./ui/ducks/metamask/metamask.js"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js");let hooks_useConfirmationNetworkInfo=function(){var _confirmationNetwork_rpcPrefs_imageUrl,currentConfirmation=(0,es.v9)(selectors.Js3),allNetworks=(0,es.v9)(selectors.xw6),providerConfig=(0,es.v9)(metamask.Vu),t=(0,useI18nContext.C)(),networkDisplayName="";if(currentConfirmation){var _confirmationNetwork_rpcPrefs,confirmationNetwork,_currentConfirmation_chainId,currentChainId=null!==(_currentConfirmation_chainId=null==currentConfirmation?void 0:currentConfirmation.chainId)&&void 0!==_currentConfirmation_chainId?_currentConfirmation_chainId:providerConfig.chainId;if(confirmationNetwork=allNetworks.find(function(param){return param.chainId===currentChainId})){var nickname=confirmationNetwork.nickname,providerType=confirmationNetwork.providerType,type=confirmationNetwork.type;networkDisplayName=providerType===network.Qv.RPC||type===network.Qv.RPC?null!=nickname?nickname:t("privateNetwork"):network.kW[null==confirmationNetwork?void 0:confirmationNetwork.chainId]}}return{networkImageUrl:null!==(_confirmationNetwork_rpcPrefs_imageUrl=null==confirmationNetwork?void 0:null===(_confirmationNetwork_rpcPrefs=confirmationNetwork.rpcPrefs)||void 0===_confirmationNetwork_rpcPrefs?void 0:_confirmationNetwork_rpcPrefs.imageUrl)&&void 0!==_confirmationNetwork_rpcPrefs_imageUrl?_confirmationNetwork_rpcPrefs_imageUrl:"",networkDisplayName:networkDisplayName}};var util=__webpack_require__("./ui/helpers/utils/util.js");let hooks_useConfirmationRecipientInfo=function(){var currentConfirmation=(0,es.v9)(selectors.Js3),allAccounts=(0,es.v9)(selectors.QT),recipientAddress="",recipientName="";if(currentConfirmation){var msgParams=currentConfirmation.msgParams;if(msgParams){recipientAddress=msgParams.from;var fromAccount=(0,util.t)(allAccounts,recipientAddress);recipientName=null==fromAccount?void 0:fromAccount.name}}return{recipientAddress:recipientAddress,recipientName:recipientName}};var design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),identicon=__webpack_require__("./ui/components/ui/identicon/index.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts");let header=function(){var _useConfirmationNetworkInfo=hooks_useConfirmationNetworkInfo(),networkImageUrl=_useConfirmationNetworkInfo.networkImageUrl,networkDisplayName=_useConfirmationNetworkInfo.networkDisplayName,_useConfirmationRecipientInfo=hooks_useConfirmationRecipientInfo(),recipientAddress=_useConfirmationRecipientInfo.recipientAddress,recipientName=_useConfirmationRecipientInfo.recipientName;return react.createElement(component_library.xu,{alignItems:design_system.g1.center,display:design_system.sS.Flex,padding:4,className:"confirm_header__wrapper"},react.createElement(component_library.xu,{display:design_system.sS.Flex},react.createElement(identicon.Z,{address:recipientAddress,diameter:32}),react.createElement(component_library.OQ,{src:networkImageUrl,name:networkDisplayName,size:component_library.NI.Xs,className:"confirm_header__avatar-network"})),react.createElement(component_library.xu,{marginInlineStart:4},react.createElement(component_library.xv,null,recipientName),react.createElement(component_library.xv,{color:design_system.d9.textAlternative},networkDisplayName)))};function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var header_stories_store=(0,store.Z)({metamask:_object_spread({},mock_state.metamask),confirm:{currentConfirmation:{msgParams:{from:"0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc"}}}});let header_stories={title:"Confirmations/Components/Confirm/Header",component:header,decorators:[function(story){return react.createElement(es.zt,{store:header_stories_store},story())}]};var DefaultStory=function(){return react.createElement(header,null)};DefaultStory.storyName="Default",DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"() => <Header />"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})})},"./ui/components/ui/identicon/blockieIdenticon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_blockieIdenticon_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _blockieIdenticon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/identicon/blockieIdenticon/blockieIdenticon.component.js")},"./ui/components/ui/identicon/identicon.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Identicon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),_jazzicon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/ui/jazzicon/index.js"),_helpers_utils_util__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/helpers/utils/util.js"),_blockieIdenticon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/ui/identicon/blockieIdenticon/index.js");function _assert_this_initialized(self){if(void 0===self)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _get_prototype_of(o){return(_get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}function _possible_constructor_return(self,call){return call&&("object"===_type_of(call)||"function"==typeof call)?call:_assert_this_initialized(self)}function _set_prototype_of(o,p){return(_set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _create_super(Derived){var hasNativeReflectConstruct=_is_native_reflect_construct();return function _createSuperInternal(){var result,Super=_get_prototype_of(Derived);if(hasNativeReflectConstruct){var NewTarget=_get_prototype_of(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possible_constructor_return(this,result)}}var getStyles=function(diameter){return{height:diameter,width:diameter,borderRadius:diameter/2}},Identicon=function(Component){_inherits(Identicon,Component);var _super=_create_super(Identicon);function Identicon(){var _this;return _class_call_check(this,Identicon),_this=_super.apply(this,arguments),_define_property(_assert_this_initialized(_this),"state",{imageLoadingError:!1}),_this}return _create_class(Identicon,[{key:"renderImage",value:function renderImage(){var _this=this,_this_props=this.props,className=_this_props.className,diameter=_this_props.diameter,alt=_this_props.alt,imageBorder=_this_props.imageBorder,ipfsGateway=_this_props.ipfsGateway,image=this.props.image;return Array.isArray(image)&&image.length&&(image=image[0]),"string"==typeof image&&image.toLowerCase().startsWith("ipfs://")&&(image=(0,_helpers_utils_util__WEBPACK_IMPORTED_MODULE_4__.MP)(image,ipfsGateway)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("identicon",className,{"identicon__image-border":imageBorder}),src:image,style:getStyles(diameter),alt:alt,onError:function(){_this.setState({imageLoadingError:!0})}})}},{key:"renderJazzicon",value:function renderJazzicon(){var _this_props=this.props,address=_this_props.address,className=_this_props.className,diameter=_this_props.diameter,alt=_this_props.alt,tokenList=_this_props.tokenList;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_jazzicon__WEBPACK_IMPORTED_MODULE_3__.Z,{address:address,diameter:diameter,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("identicon",className),style:getStyles(diameter),alt:alt,tokenList:tokenList})}},{key:"renderBlockie",value:function renderBlockie(){var _this_props=this.props,address=_this_props.address,className=_this_props.className,diameter=_this_props.diameter,alt=_this_props.alt;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("identicon",className),style:getStyles(diameter)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blockieIdenticon__WEBPACK_IMPORTED_MODULE_5__.Z,{address:address,diameter:diameter,alt:alt}))}},{key:"renderBlockieOrJazzIcon",value:function renderBlockieOrJazzIcon(){return this.props.useBlockie?this.renderBlockie():this.renderJazzicon()}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(nextProps,nextState){return!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(nextProps,this.props)||!(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEqual)(nextState,this.state)}},{key:"render",value:function render(){var _tokenList_address_toLowerCase,_this_props=this.props,address=_this_props.address,image=_this_props.image,addBorder=_this_props.addBorder,diameter=_this_props.diameter,tokenList=_this_props.tokenList;return this.state.imageLoadingError?this.renderBlockieOrJazzIcon():image?this.renderImage():address?(null===(_tokenList_address_toLowerCase=tokenList[address.toLowerCase()])||void 0===_tokenList_address_toLowerCase?void 0:_tokenList_address_toLowerCase.iconUrl)?this.renderJazzicon():react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"identicon__address-wrapper":addBorder}),style:addBorder?getStyles(diameter+8):null},this.renderBlockieOrJazzIcon()):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:getStyles(diameter),className:"identicon__image-border"})}}]),Identicon}(react__WEBPACK_IMPORTED_MODULE_0__.Component);_define_property(Identicon,"propTypes",{addBorder:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,address:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,diameter:prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,image:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,prop_types__WEBPACK_IMPORTED_MODULE_6___default().array]),useBlockie:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,alt:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,imageBorder:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,tokenList:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object,ipfsGateway:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string}),_define_property(Identicon,"defaultProps",{addBorder:!1,address:void 0,className:void 0,diameter:46,image:void 0,useBlockie:!1,alt:"",tokenList:{}})},"./ui/components/ui/identicon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>identicon_container});var es=__webpack_require__("./node_modules/react-redux/es/index.js"),selectors=__webpack_require__("./ui/selectors/index.js"),identicon_component=__webpack_require__("./ui/components/ui/identicon/identicon.component.js");let identicon_container=(0,es.$j)(function(state){var _state_metamask=state.metamask,useBlockie=_state_metamask.useBlockie,ipfsGateway=_state_metamask.ipfsGateway;return{useBlockie:useBlockie,tokenList:(0,selectors.HJ)(state),ipfsGateway:ipfsGateway}})(identicon_component.Z)},"./ui/components/ui/jazzicon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_jazzicon_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _jazzicon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/jazzicon/jazzicon.component.js")}}]);