"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[76017],{"./ui/pages/onboarding-flow/recovery-phrase/confirm-srp-modal.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_client_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/client-api"),_components_component_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/index.ts"),_confirm_srp_modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/pages/onboarding-flow/recovery-phrase/confirm-srp-modal.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__={title:"Pages/OnboardingFlow/RecoveryPhrase/ConfirmSrpModal",component:_confirm_srp_modal__WEBPACK_IMPORTED_MODULE_3__.A,argTypes:{isShowingModal:{control:"boolean",defaultValue:!0,table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},isError:{control:"boolean",defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{isShowingModal:!1,isError:!1}};var DefaultStory=function(){var _useArgs=_sliced_to_array((0,_storybook_client_api__WEBPACK_IMPORTED_MODULE_1__.useArgs)(),2),_useArgs_=_useArgs[0],isShowingModal=_useArgs_.isShowingModal,isError=_useArgs_.isError,updateArgs=_useArgs[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_2__.$n,{marginRight:2,onClick:function(){return updateArgs({isShowingModal:!0,isError:!1})}},"Open success modal"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_2__.$n,{onClick:function(){return updateArgs({isShowingModal:!0,isError:!0})}},"Open error modal"),isShowingModal&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_confirm_srp_modal__WEBPACK_IMPORTED_MODULE_3__.A,{onContinue:function(){return console.log("continue")},onClose:function(){return updateArgs({isShowingModal:!1})},isError:isError}))};DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`() => {
  const [{
    isShowingModal,
    isError
  }, updateArgs] = useArgs();
  return <>
      <Button marginRight={2} onClick={() => updateArgs({
      isShowingModal: true,
      isError: false
    })}>
        Open success modal
      </Button>
      <Button onClick={() => updateArgs({
      isShowingModal: true,
      isError: true
    })}>
        Open error modal
      </Button>
      {isShowingModal && <ConfirmSrpModal onContinue={() => console.log('continue')} onClose={() => updateArgs({
      isShowingModal: false
    })} isError={isError} />}
    </>;
}`,...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]}}]);
//# sourceMappingURL=pages-onboarding-flow-recovery-phrase-confirm-srp-modal-stories.efcb5b75.iframe.bundle.js.map