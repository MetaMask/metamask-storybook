"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[24464],{"./ui/components/app/detected-token/detected-token-aggregators/detected-token-aggregators.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_component_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/index.ts"),_detected_token_aggregators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/app/detected-token/detected-token-aggregators/detected-token-aggregators.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/DetectedToken/DetectedTokenAggregators",argTypes:{aggregators:{control:"array"}},args:{aggregators1:["Aave","Bancor","CMC","Crypto.com","CoinGecko","1inch","Paraswap","PMM","Synthetix","Zapper","Zerion","0x"],aggregators2:["Aave","Bancor"]}};var DefaultStory=(function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.az,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_1__.nl.Grid},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_detected_token_aggregators__WEBPACK_IMPORTED_MODULE_3__.A,{aggregators:args.aggregators1}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_detected_token_aggregators__WEBPACK_IMPORTED_MODULE_3__.A,{aggregators:args.aggregators2}))}).bind({});DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => {\n  return <Box display={Display.Grid}>\n      <DetectedTokenAggregators aggregators={args.aggregators1} />\n      <DetectedTokenAggregators aggregators={args.aggregators2} />\n    </Box>;\n}",...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]},"./ui/components/app/detected-token/detected-token-aggregators/detected-token-aggregators.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/hooks/useI18nContext.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_component_library__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var DetectedTokenAggregators=function(param){var aggregators=param.aggregators,t=(0,_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_1__.P)(),numOfHiddenAggregators=parseInt(aggregators.length,10)-2,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),displayMore=_useState[0],setDisplayMore=_useState[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.az,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.nl.InlineFlex,className:"detected-token-aggregators"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.EY,{variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.bodySm,as:"h6",fontWeight:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.IT.Normal},t("fromTokenLists",[numOfHiddenAggregators>0&&!displayMore?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.EY,{as:"h6",fontWeight:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.IT.Normal,key:"detected-token-aggrgators-with-more"},"".concat(aggregators.slice(0,2).join(", ")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.vx,{className:"detected-token-aggregators__link",onClick:function(){return setDisplayMore(!0)},key:"detected-token-aggrgators-link"},t("plusXMore",[numOfHiddenAggregators]))):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.EY,{as:"h6",fontWeight:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.IT.Normal,key:"detected-token-aggrgators-without-more"},"".concat(aggregators.join(", "),"."))])))};DetectedTokenAggregators.propTypes={aggregators:prop_types__WEBPACK_IMPORTED_MODULE_4___default().array.isRequired};let __WEBPACK_DEFAULT_EXPORT__=DetectedTokenAggregators;DetectedTokenAggregators.__docgenInfo={description:"",methods:[],displayName:"DetectedTokenAggregators",props:{aggregators:{description:"",type:{name:"array"},required:!0}}}}}]);