"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[73875],{"./ui/components/app/assets/nfts/nft-details/nft-detail-description.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_nft_detail_description__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/app/assets/nfts/nft-details/nft-detail-description.tsx");let __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/NftDetailDescription",args:{value:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}};var DefaultStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_nft_detail_description__WEBPACK_IMPORTED_MODULE_1__.A,args)};DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => {\n  return <NftDetailDescription {...args} />;\n}",...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]},"./ui/hooks/snaps/useIsOverflowing.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__=function(){var contentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isOverflowing=_useState[0],setIsOverflowing=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){setIsOverflowing(contentRef.current&&contentRef.current.offsetHeight<contentRef.current.scrollHeight)},[contentRef]),{contentRef:contentRef,isOverflowing:isOverflowing}}},"./ui/components/app/assets/nfts/nft-details/nft-detail-description.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hooks_snaps_useIsOverflowing__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/hooks/snaps/useIsOverflowing.js"),_component_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/index.ts"),_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/hooks/useI18nContext.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/helpers/constants/design-system.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__=function(param){var value=param.value,t=(0,_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_3__.P)(),_useIsOverflowing=(0,_hooks_snaps_useIsOverflowing__WEBPACK_IMPORTED_MODULE_1__.A)(),contentRef=_useIsOverflowing.contentRef,isOverflowing=_useIsOverflowing.isOverflowing,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],handleClick=function(e){e.stopPropagation(),setIsOpen(!isOpen)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.az,{marginTop:2,className:"nft-details__show-more",style:{position:"relative",overflow:"hidden",maxHeight:isOpen?"none":void 0},ref:contentRef},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.EY,{variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.J3.bodySm,fontWeight:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.IT.Medium,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.r7.textAlternative,"data-testid":"nft-details__description"},value),!isOpen&&isOverflowing&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.az,{className:"buttonDescriptionContainer"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.$n,{className:"nft-details__show-more__button",padding:0,paddingLeft:9,variant:_component_library__WEBPACK_IMPORTED_MODULE_2__.Ak.Link,onClick:handleClick},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.EY,{color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.r7.infoDefault},t("showMore"))))),isOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.az,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.$n,{padding:0,variant:_component_library__WEBPACK_IMPORTED_MODULE_2__.Ak.Link,onClick:handleClick},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.EY,{color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.r7.infoDefault},t("showLess")))))};try{nftdetaildescription.displayName="nftdetaildescription",nftdetaildescription.__docgenInfo={description:"",displayName:"nftdetaildescription",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/app/assets/nfts/nft-details/nft-detail-description.tsx#nftdetaildescription"]={docgenInfo:nftdetaildescription.__docgenInfo,name:"nftdetaildescription",path:"ui/components/app/assets/nfts/nft-details/nft-detail-description.tsx#nftdetaildescription"})}catch(__react_docgen_typescript_loader_error){}}}]);