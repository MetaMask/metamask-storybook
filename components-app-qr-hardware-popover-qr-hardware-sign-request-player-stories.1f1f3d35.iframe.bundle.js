"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[14913],{"./ui/components/app/qr-hardware-popover/qr-hardware-sign-request/player.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>player_stories});var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/qrcode.react/lib/esm/index.js"),dist=__webpack_require__("./node_modules/@ngraveio/bc-ur/dist/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),page_container=__webpack_require__("./ui/components/ui/page-container/index.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),Buffer=__webpack_require__("./node_modules/buffer/index.js").Buffer;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Player=function(param){var type=param.type,cbor=param.cbor,cancelQRHardwareSignRequest=param.cancelQRHardwareSignRequest,toRead=param.toRead,t=(0,useI18nContext.P)(),urEncoder=(0,react.useMemo)(function(){return new dist.UREncoder(new dist.UR(Buffer.from(cbor,"hex"),type),200)},[cbor,type]),_useState=_sliced_to_array((0,react.useState)(urEncoder.nextPart()),2),currentQRCode=_useState[0],setCurrentQRCode=_useState[1];return(0,react.useEffect)(function(){var id=setInterval(function(){setCurrentQRCode(urEncoder.nextPart())},100);return function(){clearInterval(id)}},[urEncoder]),react.createElement(react.Fragment,null,react.createElement(component_library.az,null,react.createElement(component_library.EY,{align:design_system.nO.Center},t("QRHardwareSignRequestSubtitle"))),react.createElement(component_library.az,{paddingTop:4,paddingBottom:4,display:design_system.nl.Flex,alignItems:design_system.k2.center,flexDirection:design_system.bo.Column},react.createElement("div",{style:{padding:20,backgroundColor:"var(--qr-code-white-background)"}},react.createElement(esm.Ay,{value:currentQRCode.toUpperCase(),size:250}))),react.createElement(component_library.az,{paddingBottom:4,paddingLeft:4,paddingRight:4},react.createElement(component_library.EY,{align:design_system.nO.Center},t("QRHardwareSignRequestDescription"))),react.createElement(page_container.QY,{onCancel:cancelQRHardwareSignRequest,onSubmit:toRead,cancelText:t("QRHardwareSignRequestCancel"),submitText:t("QRHardwareSignRequestGetSignature"),submitButtonType:"confirm"}))};Player.propTypes={type:prop_types_default().string.isRequired,cbor:prop_types_default().string.isRequired,cancelQRHardwareSignRequest:prop_types_default().func.isRequired,toRead:prop_types_default().func.isRequired},Player.__docgenInfo={description:"",methods:[],displayName:"Player",props:{type:{description:"",type:{name:"string"},required:!0},cbor:{description:"",type:{name:"string"},required:!0},cancelQRHardwareSignRequest:{description:"",type:{name:"func"},required:!0},toRead:{description:"",type:{name:"func"},required:!0}}};let player_stories={title:"Components/App/Player",component:Player,argTypes:{type:{control:"text"},cbor:{control:"text"},cancelQRHardwareSignRequest:{action:"cancelQRHardwareSignRequest"},toRead:{action:"toRead"}},args:{type:"abc",cbor:"abc"}};var DefaultStory=function(args){return react.createElement(Player,args)};DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <Player {...args} />",...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]},"./ui/components/ui/button/button.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var CLASSNAME_DEFAULT="btn-default",typeHash={default:CLASSNAME_DEFAULT,primary:"btn-primary",secondary:"btn-secondary",warning:"btn-warning",danger:"btn-danger","danger-primary":"btn-danger-primary",link:"btn-link",inline:"btn--inline",raised:"btn-raised"},Button=function(_param){var _onKeyUp,_role,_tabIndex,type=_param.type,_param_submit=_param.submit,large=_param.large,children=_param.children,icon=_param.icon,className=_param.className,_param_rounded=_param.rounded,buttonProps=_object_without_properties(_param,["type","submit","large","children","icon","className","rounded"]),Tag="button";return"link"===type?Tag="a":void 0!==_param_submit&&_param_submit&&(buttonProps.type="submit"),"link"===type&&"function"==typeof buttonProps.onClick&&(null!==(_onKeyUp=buttonProps.onKeyUp)&&void 0!==_onKeyUp||(buttonProps.onKeyUp=function(event){"Enter"===event.key&&buttonProps.onClick()}),null!==(_role=buttonProps.role)&&void 0!==_role||(buttonProps.role="button"),null!==(_tabIndex=buttonProps.tabIndex)&&void 0!==_tabIndex||(buttonProps.tabIndex=0)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag,_object_spread({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("button",(void 0===_param_rounded||_param_rounded)&&"link"!==type&&"inline"!==type&&"btn--rounded",typeHash[type]||CLASSNAME_DEFAULT,large&&"btn--large",className)},buttonProps),icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"button__icon"},icon):null,children)};Button.propTypes={type:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,submit:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,large:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,rounded:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool};let __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"@deprecated The <Button /> component has been deprecated in favor of the new <Button> component from the component-library.\nPlease update your code to use the new <Button> component instead, which can be found at ./ui/components/component-library/button/button.js.\nYou can find documentation for the new Button component in the MetaMask Storybook:\n{@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}\nIf you would like to help with the replacement of the old Button component, please submit a pull request against this GitHub issue:\n{@link https://github.com/MetaMask/metamask-extension/issues/18896}\n@see {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}",methods:[],displayName:"Button",props:{submit:{defaultValue:{value:"false",computed:!1},description:"If true sets the html 'type' attribute to type=\"submit\"",type:{name:"bool"},required:!1},rounded:{defaultValue:{value:"true",computed:!1},description:"Buttons are rounded by default.",type:{name:"bool"},required:!1},type:{description:"The type of variation a button can be.\nCan be one of 'default','primary','secondary','warning','danger','danger-primary' or 'link'",type:{name:"string"},required:!1},large:{description:"Increase the height of the button to 54px",type:{name:"bool"},required:!1},className:{description:"Additional className to provide on the root element of the button",type:{name:"string"},required:!1},children:{description:"The children of the button component",type:{name:"node"},required:!1},icon:{description:"Provide an icon component for an icon to appear on the left side of the button",type:{name:"node"},required:!1}}}},"./ui/components/ui/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/button/button.component.js");let __WEBPACK_DEFAULT_EXPORT__=_button_component__WEBPACK_IMPORTED_MODULE_0__.A;_button_component__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"@deprecated The <Button /> component has been deprecated in favor of the new <Button> component from the component-library.\nPlease update your code to use the new <Button> component instead, which can be found at ./ui/components/component-library/button/button.js.\nYou can find documentation for the new Button component in the MetaMask Storybook:\n{@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}\nIf you would like to help with the replacement of the old Button component, please submit a pull request against this GitHub issue:\n{@link https://github.com/MetaMask/metamask-extension/issues/18896}\n@see {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}",methods:[],displayName:"Button",props:{submit:{defaultValue:{value:"false",computed:!1},description:"If true sets the html 'type' attribute to type=\"submit\"",type:{name:"bool"},required:!1},rounded:{defaultValue:{value:"true",computed:!1},description:"Buttons are rounded by default.",type:{name:"bool"},required:!1},type:{description:"The type of variation a button can be.\nCan be one of 'default','primary','secondary','warning','danger','danger-primary' or 'link'",type:{name:"string"},required:!1},large:{description:"Increase the height of the button to 54px",type:{name:"bool"},required:!1},className:{description:"Additional className to provide on the root element of the button",type:{name:"string"},required:!1},children:{description:"The children of the button component",type:{name:"node"},required:!1},icon:{description:"Provide an icon component for an icon to appear on the left side of the button",type:{name:"node"},required:!1}}}}}]);