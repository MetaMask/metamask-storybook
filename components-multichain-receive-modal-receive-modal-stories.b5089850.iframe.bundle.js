(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[66126],{"./ui/components/multichain/receive-modal/receive-modal.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_storybook_test_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/test-data.js"),_store_store__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/store/store.ts"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/multichain/receive-modal/index.js"),store=(0,_store_store__WEBPACK_IMPORTED_MODULE_3__.A)(_storybook_test_data__WEBPACK_IMPORTED_MODULE_2__.A);let __WEBPACK_DEFAULT_EXPORT__={title:"Components/Multichain/ReceiveModal",component:___WEBPACK_IMPORTED_MODULE_4__.t,argTypes:{address:{control:"text"},onClose:{action:"onClose"}},args:{address:"0x64a845a5b02460acf8a3d84503b0d68d028b4bb4",onClose:function(){}}};var DefaultStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_4__.t,args)};DefaultStory.decorators=[function(story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Kq,{store:store},story())}],DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <ReceiveModal {...args} />",...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]},"./ui/components/multichain/receive-modal/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>ReceiveModal});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),component_library=__webpack_require__("./ui/components/component-library/index.ts"),qr_code_view=__webpack_require__("./ui/components/ui/qr-code-view/index.js"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),selectors=__webpack_require__("./ui/selectors/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),ReceiveModal=function(param){var address=param.address,onClose=param.onClose,t=(0,useI18nContext.P)(),name=(0,es.d4)(function(state){return(0,selectors.wV5)(state,address)}).metadata.name;return react.createElement(component_library.aF,{isOpen:!0,onClose:onClose},react.createElement(component_library.mH,null),react.createElement(component_library.$m,null,react.createElement(component_library.rQ,{marginBottom:4,onClose:onClose},t("receive")),react.createElement(component_library.az,{display:design_system.nl.Flex,alignItems:design_system.k2.center,flexDirection:design_system.bo.Column,paddingInlineEnd:4,paddingInlineStart:4},react.createElement(qr_code_view.A,{Qr:{data:address},accountName:name}))))};ReceiveModal.propTypes={address:prop_types_default().string.isRequired,onClose:prop_types_default().func.isRequired},ReceiveModal.__docgenInfo={description:"",methods:[],displayName:"ReceiveModal",props:{address:{description:"",type:{name:"string"},required:!0},onClose:{description:"",type:{name:"func"},required:!0}}}},"./ui/components/ui/qr-code-view/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>qr_code_view});var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__("./node_modules/react/index.js"),qrcode=__webpack_require__("./node_modules/qrcode-generator/qrcode.js"),qrcode_default=__webpack_require__.n(qrcode),es=__webpack_require__("./node_modules/react-redux/es/index.js"),dist_browser=__webpack_require__("./node_modules/ethereumjs-util/dist.browser/index.js"),multichain_address=__webpack_require__("./app/scripts/lib/multichain/address.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),metametrics=__webpack_require__("./ui/contexts/metametrics.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),time=__webpack_require__("./shared/constants/time.ts"),constants_metametrics=__webpack_require__("./shared/constants/metametrics.ts"),useCopyToClipboard=__webpack_require__("./ui/hooks/useCopyToClipboard.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function mapStateToProps(state){var _state_appState=state.appState;return{buyView:_state_appState.buyView,warning:_state_appState.warning}}function QrCodeView(param){var Qr=param.Qr,warning=param.warning,accountName=param.accountName,trackEvent=(0,react.useContext)(metametrics.O2),_useCopyToClipboard=_sliced_to_array((0,useCopyToClipboard.C)(time.pY),2),copied=_useCopyToClipboard[0],handleCopy=_useCopyToClipboard[1],t=(0,useI18nContext.P)(),message=Qr.message,data=Qr.data,checksummedAddress=(0,multichain_address.Nf)(data),address="".concat((0,dist_browser.isHexPrefixed)(data)?"ethereum:":"").concat(checksummedAddress),qrImage=qrcode_default()(4,"M");qrImage.addData(address),qrImage.make();var header=message?react.createElement("div",{className:"qr-code__header"},message):null,addressStart=data.substring(0,6),addressMiddle=data.substring(6,data.length-5),addressEnd=data.substring(data.length-5);return react.createElement("div",{className:"qr-code"},Array.isArray(message)?react.createElement("div",{className:"qr-code__message-container"},message.map(function(msg,index){return react.createElement(component_library.EY,{key:index,variant:design_system.J3.bodyXs,color:design_system.r7.warningDefault},msg)})):header,warning?react.createElement("span",{className:"qr-code__error"},warning):null,react.createElement(component_library.az,{className:"qr-code__wrapper",marginBottom:4},react.createElement(component_library.az,{"data-testid":"qr-code-image",className:"qr-code__image",dangerouslySetInnerHTML:{__html:qrImage.createTableTag(5,16)}}),react.createElement(component_library.az,{className:"qr-code__logo"},react.createElement("img",{src:"images/logo/metamask-fox.svg",alt:"Logo"}))),accountName?react.createElement(component_library.EY,{variant:design_system.J3.bodyLgMedium,textAlign:design_system.nO.Center,marginBottom:4},accountName):null,react.createElement(component_library.EY,{variant:design_system.J3.bodyMd,className:"qr-code__address-segments",marginBottom:4},addressStart,react.createElement(component_library.EY,{variant:design_system.J3.bodyMd,color:design_system.r7.textMuted,className:"qr-code__address-inner-segment"},addressMiddle),addressEnd),react.createElement(component_library.az,{display:design_system.nl.Flex,marginBottom:4,gap:2,alignItems:design_system.k2.center,color:design_system.r7.primaryDefault,className:"qr-code__copy-button","data-testid":"address-copy-button-text",onClick:function(){handleCopy(checksummedAddress),trackEvent({category:constants_metametrics.FZ.Accounts,event:constants_metametrics.gP.PublicAddressCopied,properties:{location:"Account Details Modal"}})}},react.createElement(component_library.In,{name:copied?component_library.$M.CopySuccess:component_library.$M.Copy,size:component_library.lK.Sm,color:design_system.Li.primaryDefault}),t("copyAddressShort")))}QrCodeView.propTypes={warning:prop_types_default().node,Qr:prop_types_default().shape({message:prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().node),prop_types_default().node]),data:prop_types_default().string.isRequired}).isRequired};let qr_code_view=(0,es.Ng)(mapStateToProps)(QrCodeView);try{qrcodeview.displayName="qrcodeview",qrcodeview.__docgenInfo={description:"",displayName:"qrcodeview",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/ui/qr-code-view/qr-code-view.tsx#qrcodeview"]={docgenInfo:qrcodeview.__docgenInfo,name:"qrcodeview",path:"ui/components/ui/qr-code-view/qr-code-view.tsx#qrcodeview"})}catch(__react_docgen_typescript_loader_error){}},"./ui/hooks/useCopyToClipboard.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>useCopyToClipboard});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/copy-to-clipboard/index.js"),copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__),_shared_constants_time__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./shared/constants/time.ts"),_shared_constants_copy__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./shared/constants/copy.ts"),_useTimeout__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/hooks/useTimeout.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var DEFAULT_DELAY=_shared_constants_time__WEBPACK_IMPORTED_MODULE_2__.pY;function useCopyToClipboard(){var delay=arguments.length>0&&void 0!==arguments[0]?arguments[0]:DEFAULT_DELAY,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),copied=_useState[0],setCopied=_useState[1],startTimeout=(0,_useTimeout__WEBPACK_IMPORTED_MODULE_4__.Z)(function(){copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(" ",_shared_constants_copy__WEBPACK_IMPORTED_MODULE_3__.T),setCopied(!1)},delay,!1);return[copied,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(text){setCopied(!0),startTimeout(),copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(text,_shared_constants_copy__WEBPACK_IMPORTED_MODULE_3__.T)},[startTimeout])]}},"./ui/hooks/useTimeout.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useTimeout});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function useTimeout(cb,delay){var immediate=!(arguments.length>2)||void 0===arguments[2]||arguments[2],saveCb=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),timeoutId=_useState[0],setTimeoutId=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){saveCb.current=cb},[cb]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if("start"===timeoutId)return setTimeoutId(setTimeout(function(){saveCb.current()},delay)),function(){clearTimeout(timeoutId)}},[delay,timeoutId]);var startTimeout=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){clearTimeout(timeoutId),setTimeoutId("start")},[timeoutId]);return immediate&&startTimeout(),startTimeout}},"./shared/constants/copy.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>COPY_OPTIONS});var COPY_OPTIONS={format:"text/plain"}},"./node_modules/copy-to-clipboard/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var deselectCurrent=__webpack_require__("./node_modules/toggle-selection/index.js"),clipboardToIE11Formatting={"text/plain":"Text","text/html":"Url",default:"Text"};function format(message){var copyKey=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return message.replace(/#{\s*key\s*}/g,copyKey)}function copy(text,options){var debug,message,reselectPrevious,range,selection,mark,success=!1;options||(options={}),debug=options.debug||!1;try{if(reselectPrevious=deselectCurrent(),range=document.createRange(),selection=document.getSelection(),(mark=document.createElement("span")).textContent=text,mark.ariaHidden="true",mark.style.all="unset",mark.style.position="fixed",mark.style.top=0,mark.style.clip="rect(0, 0, 0, 0)",mark.style.whiteSpace="pre",mark.style.webkitUserSelect="text",mark.style.MozUserSelect="text",mark.style.msUserSelect="text",mark.style.userSelect="text",mark.addEventListener("copy",function(e){if(e.stopPropagation(),options.format){if(e.preventDefault(),void 0===e.clipboardData){debug&&console.warn("unable to use e.clipboardData"),debug&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var format=clipboardToIE11Formatting[options.format]||clipboardToIE11Formatting.default;window.clipboardData.setData(format,text)}else e.clipboardData.clearData(),e.clipboardData.setData(options.format,text)}options.onCopy&&(e.preventDefault(),options.onCopy(e.clipboardData))}),document.body.appendChild(mark),range.selectNodeContents(mark),selection.addRange(range),!document.execCommand("copy"))throw Error("copy command was unsuccessful");success=!0}catch(err){debug&&console.error("unable to copy using execCommand: ",err),debug&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(options.format||"text",text),options.onCopy&&options.onCopy(window.clipboardData),success=!0}catch(err){debug&&console.error("unable to copy using clipboardData: ",err),debug&&console.error("falling back to prompt"),message=format("message"in options?options.message:"Copy to clipboard: #{key}, Enter"),window.prompt(message,text)}}finally{selection&&("function"==typeof selection.removeRange?selection.removeRange(range):selection.removeAllRanges()),mark&&document.body.removeChild(mark),reselectPrevious()}return success}module.exports=copy},"./node_modules/toggle-selection/index.js":module=>{module.exports=function(){var selection=document.getSelection();if(!selection.rangeCount)return function(){};for(var active=document.activeElement,ranges=[],i=0;i<selection.rangeCount;i++)ranges.push(selection.getRangeAt(i));switch(active.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":active.blur();break;default:active=null}return selection.removeAllRanges(),function(){"Caret"===selection.type&&selection.removeAllRanges(),selection.rangeCount||ranges.forEach(function(range){selection.addRange(range)}),active&&active.focus()}}}}]);