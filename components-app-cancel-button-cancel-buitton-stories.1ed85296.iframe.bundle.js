"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[1207],{"./ui/components/app/cancel-button/cancel-buitton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_cancel_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/app/cancel-button/cancel-button.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/CancelButton",component:_cancel_button__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{transaction:{control:"object"},cancelTransaction:{control:"cancelTransaction"},detailsModal:{control:"boolean"}},args:{detailsModal:!0,transaction:{id:"12345",status:"pending"}}};var DefaultStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cancel_button__WEBPACK_IMPORTED_MODULE_1__.Z,args)};DefaultStory.storyName="Default",DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"args => <CancelButton {...args} />"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})})},"./ui/components/app/cancel-button/cancel-button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CancelButton});var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),_metamask_transaction_controller__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@metamask/transaction-controller/dist/index.js"),_ui_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/ui/button/index.js"),_shared_modules_gas_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./shared/modules/gas.utils.js"),_ducks_metamask_metamask__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/ducks/metamask/metamask.js"),_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ui/hooks/useI18nContext.js"),_pages_confirmations_hooks_useIncrementedGasFees__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ui/pages/confirmations/hooks/useIncrementedGasFees.js"),_pages_confirmations_send_send_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./ui/pages/confirmations/send/send.utils.js"),_selectors__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./ui/selectors/index.js");function CancelButton(param){var cancelTransaction=param.cancelTransaction,transaction=param.transaction,detailsModal=param.detailsModal,t=(0,_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_7__.C)(),status=transaction.status,customCancelGasSettings=(0,_pages_confirmations_hooks_useIncrementedGasFees__WEBPACK_IMPORTED_MODULE_8__.N)(transaction),selectedAccount=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.v9)(_selectors__WEBPACK_IMPORTED_MODULE_10__.uWD),conversionRate=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.v9)(_ducks_metamask_metamask__WEBPACK_IMPORTED_MODULE_6__.PC),isDisabled=status!==_metamask_transaction_controller__WEBPACK_IMPORTED_MODULE_3__.TransactionStatus.approved&&!(0,_pages_confirmations_send_send_utils__WEBPACK_IMPORTED_MODULE_9__.UV)({amount:"0x0",gasTotal:(0,_shared_modules_gas_utils__WEBPACK_IMPORTED_MODULE_5__.a)(customCancelGasSettings),balance:selectedAccount.balance,conversionRate:conversionRate}),btn=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_button__WEBPACK_IMPORTED_MODULE_4__.Z,{onClick:cancelTransaction,type:"secondary",className:classnames__WEBPACK_IMPORTED_MODULE_2___default()({"transaction-list-item__header-button":!detailsModal,"transaction-list-item-details__header-button-rounded-button":detailsModal}),disabled:isDisabled,"data-testid":"cancel-button"},t("cancel"));return isDisabled?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.ZP,{title:t("notEnoughGas"),"data-testid":"not-enough-gas__tooltip",position:"bottom"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,btn)):btn}CancelButton.propTypes={transaction:prop_types__WEBPACK_IMPORTED_MODULE_12___default().object,cancelTransaction:prop_types__WEBPACK_IMPORTED_MODULE_12___default().func,detailsModal:prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool}},"./ui/components/ui/button/button.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var CLASSNAME_DEFAULT="btn-default",typeHash={default:CLASSNAME_DEFAULT,primary:"btn-primary",secondary:"btn-secondary",warning:"btn-warning",danger:"btn-danger","danger-primary":"btn-danger-primary",link:"btn-link",inline:"btn--inline",raised:"btn-raised"},Button=function(_param){var _onKeyUp,_role,_tabIndex,type=_param.type,_param_submit=_param.submit,large=_param.large,children=_param.children,icon=_param.icon,className=_param.className,_param_rounded=_param.rounded,buttonProps=_object_without_properties(_param,["type","submit","large","children","icon","className","rounded"]),Tag="button";return"link"===type?Tag="a":void 0!==_param_submit&&_param_submit&&(buttonProps.type="submit"),"link"===type&&"function"==typeof buttonProps.onClick&&(null!==(_onKeyUp=buttonProps.onKeyUp)&&void 0!==_onKeyUp||(buttonProps.onKeyUp=function(event){"Enter"===event.key&&buttonProps.onClick()}),null!==(_role=buttonProps.role)&&void 0!==_role||(buttonProps.role="button"),null!==(_tabIndex=buttonProps.tabIndex)&&void 0!==_tabIndex||(buttonProps.tabIndex=0)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag,_object_spread({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("button",(void 0===_param_rounded||_param_rounded)&&"link"!==type&&"inline"!==type&&"btn--rounded",typeHash[type]||CLASSNAME_DEFAULT,large&&"btn--large",className)},buttonProps),icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"button__icon"},icon):null,children)};Button.propTypes={type:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,submit:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,large:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,rounded:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool};let __WEBPACK_DEFAULT_EXPORT__=Button},"./ui/components/ui/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./ui/components/ui/button/button.component.js").Z},"./ui/helpers/utils/gas.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DW:()=>isMetamaskSuggestedGasEstimate,Ll:()=>gasEstimateGreaterThanGasUsedPlusTenPercent,VS:()=>editGasModeIsSpeedUpOrCancel,Vc:()=>addTenPercentAndRound,m5:()=>formatGasFeeOrFeeRange});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/lodash.js"),bignumber_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/bignumber.js/bignumber.js"),bignumber_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__),_shared_constants_gas__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./shared/constants/gas.ts"),_shared_modules_conversion_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./shared/modules/conversion.utils.ts"),_shared_modules_Numeric__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./shared/modules/Numeric.ts"),_util__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/helpers/utils/util.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var TEN_PERCENT_NUMERIC=new _shared_modules_Numeric__WEBPACK_IMPORTED_MODULE_4__.D(1.1,10),gasEstimateGreaterThanGasUsedPlusTenPercent=function(gasUsed,gasFeeEstimates,estimate){var _gasFeeEstimates_estimate,maxFeePerGasInTransaction=gasUsed.maxFeePerGas;maxFeePerGasInTransaction=new(bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())((0,_shared_modules_conversion_utils__WEBPACK_IMPORTED_MODULE_3__.Yg)(addTenPercentAndRound(maxFeePerGasInTransaction)));var maxFeePerGasFromEstimate=null===(_gasFeeEstimates_estimate=gasFeeEstimates[estimate])||void 0===_gasFeeEstimates_estimate?void 0:_gasFeeEstimates_estimate.suggestedMaxFeePerGas;return(0,_util__WEBPACK_IMPORTED_MODULE_5__.Xn)(maxFeePerGasFromEstimate,maxFeePerGasInTransaction)};function addTenPercentAndRound(hexStringValue){if(void 0!==hexStringValue)return new _shared_modules_Numeric__WEBPACK_IMPORTED_MODULE_4__.D(hexStringValue,16).times(TEN_PERCENT_NUMERIC).round(0).toPrefixedHexString()}function isMetamaskSuggestedGasEstimate(estimate){return[_shared_constants_gas__WEBPACK_IMPORTED_MODULE_2__.RQ.high,_shared_constants_gas__WEBPACK_IMPORTED_MODULE_2__.RQ.medium,_shared_constants_gas__WEBPACK_IMPORTED_MODULE_2__.RQ.low].includes(estimate)}function formatGasFeeOrFeeRange(feeOrFeeRange){var _ref=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},tmp=_ref.precision,precisionOrPrecisions=void 0===tmp?2:tmp;if((0,_util__WEBPACK_IMPORTED_MODULE_5__.Rw)(feeOrFeeRange)||Array.isArray(feeOrFeeRange)&&0===feeOrFeeRange.length)return null;var range=Array.isArray(feeOrFeeRange)?feeOrFeeRange.slice(0,2):[feeOrFeeRange],precisions=Array.isArray(precisionOrPrecisions)?precisionOrPrecisions.slice(0,2):(0,lodash__WEBPACK_IMPORTED_MODULE_0__.times)(range.length,(0,lodash__WEBPACK_IMPORTED_MODULE_0__.constant)(precisionOrPrecisions)),formattedRange=(0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.zip)(range,precisions).map(function(param){var _param=_sliced_to_array(param,2),fee=_param[0],precision=_param[1];return void 0===precision?fee:(0,_util__WEBPACK_IMPORTED_MODULE_5__.YQ)(fee,precision)})).join(" - ");return"".concat(formattedRange," GWEI")}function editGasModeIsSpeedUpOrCancel(editGasMode){return editGasMode===_shared_constants_gas__WEBPACK_IMPORTED_MODULE_2__.G_.cancel||editGasMode===_shared_constants_gas__WEBPACK_IMPORTED_MODULE_2__.G_.speedUp}},"./ui/hooks/useGasFeeEstimates.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>useGasFeeEstimates});var isEqual=__webpack_require__("./node_modules/lodash/isEqual.js"),isEqual_default=__webpack_require__.n(isEqual),es=__webpack_require__("./node_modules/react-redux/es/index.js"),metamask=__webpack_require__("./ui/ducks/metamask/metamask.js"),react=__webpack_require__("./node_modules/react/index.js"),actions=__webpack_require__("./ui/store/actions.ts");function useSafeGasEstimatePolling(){(0,react.useEffect)(function(){var pollToken,active=!0,cleanup=function(){active=!1,pollToken&&((0,actions.T_6)(pollToken),(0,actions.hUm)(pollToken))};return(0,actions.mhS)().then(function(newPollToken){active?(pollToken=newPollToken,(0,actions.lTb)(pollToken)):((0,actions.T_6)(newPollToken),(0,actions.hUm)(pollToken))}),window.addEventListener("beforeunload",cleanup),function(){cleanup(),window.removeEventListener("beforeunload",cleanup)}},[])}function useGasFeeEstimates(){var gasEstimateType=(0,es.v9)(metamask.xP),gasFeeEstimates=(0,es.v9)(metamask.lq,isEqual_default()),isGasEstimatesLoading=(0,es.v9)(metamask.rc),isNetworkBusy=(0,es.v9)(metamask.tg);return useSafeGasEstimatePolling(),{gasFeeEstimates:gasFeeEstimates,gasEstimateType:gasEstimateType,isGasEstimatesLoading:isGasEstimatesLoading,isNetworkBusy:isNetworkBusy}}},"./ui/pages/confirmations/hooks/useIncrementedGasFees.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>useIncrementedGasFees});var bignumber_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/bignumber.js/bignumber.js"),bignumber_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_shared_modules_conversion_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./shared/modules/conversion.utils.ts"),_shared_modules_transaction_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./shared/modules/transaction.utils.js"),_helpers_utils_gas__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/helpers/utils/gas.js"),_hooks_useGasFeeEstimates__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/hooks/useGasFeeEstimates.js");function getHighestIncrementedFee(originalFee,currentEstimate){var buffedOriginalHexWei=(0,_helpers_utils_gas__WEBPACK_IMPORTED_MODULE_4__.Vc)(originalFee),currentEstimateHexWei=(0,_shared_modules_conversion_utils__WEBPACK_IMPORTED_MODULE_2__.Kn)(currentEstimate);return new(bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(buffedOriginalHexWei,16).greaterThan(new(bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(currentEstimateHexWei,16))?buffedOriginalHexWei:currentEstimateHexWei}function useIncrementedGasFees(transaction){var _useGasFeeEstimates_gasFeeEstimates=(0,_hooks_useGasFeeEstimates__WEBPACK_IMPORTED_MODULE_5__.a)().gasFeeEstimates,gasFeeEstimates=void 0===_useGasFeeEstimates_gasFeeEstimates?{}:_useGasFeeEstimates_gasFeeEstimates;return(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){var temporaryGasSettings={gasLimit:null===(_transaction_txParams=transaction.txParams)||void 0===_transaction_txParams?void 0:_transaction_txParams.gas,gas:null===(_transaction_txParams1=transaction.txParams)||void 0===_transaction_txParams1?void 0:_transaction_txParams1.gas},suggestedMaxFeePerGas=null!==(_gasFeeEstimates_medium_suggestedMaxFeePerGas=null==gasFeeEstimates?void 0:null===(_gasFeeEstimates_medium=gasFeeEstimates.medium)||void 0===_gasFeeEstimates_medium?void 0:_gasFeeEstimates_medium.suggestedMaxFeePerGas)&&void 0!==_gasFeeEstimates_medium_suggestedMaxFeePerGas?_gasFeeEstimates_medium_suggestedMaxFeePerGas:"0",suggestedMaxPriorityFeePerGas=null!==(_gasFeeEstimates_medium_suggestedMaxPriorityFeePerGas=null==gasFeeEstimates?void 0:null===(_gasFeeEstimates_medium1=gasFeeEstimates.medium)||void 0===_gasFeeEstimates_medium1?void 0:_gasFeeEstimates_medium1.suggestedMaxPriorityFeePerGas)&&void 0!==_gasFeeEstimates_medium_suggestedMaxPriorityFeePerGas?_gasFeeEstimates_medium_suggestedMaxPriorityFeePerGas:"0";if((0,_shared_modules_transaction_utils__WEBPACK_IMPORTED_MODULE_3__.K3)(transaction)){var _transaction_txParams,_transaction_txParams1,_gasFeeEstimates_medium,_gasFeeEstimates_medium1,_gasFeeEstimates_medium_suggestedMaxFeePerGas,_gasFeeEstimates_medium_suggestedMaxPriorityFeePerGas,_transaction_txParams2,_transaction_txParams3,transactionMaxFeePerGas=null===(_transaction_txParams2=transaction.txParams)||void 0===_transaction_txParams2?void 0:_transaction_txParams2.maxFeePerGas,transactionMaxPriorityFeePerGas=null===(_transaction_txParams3=transaction.txParams)||void 0===_transaction_txParams3?void 0:_transaction_txParams3.maxPriorityFeePerGas;temporaryGasSettings.maxFeePerGas=void 0===transactionMaxFeePerGas||transactionMaxFeePerGas.startsWith("-")?"0x0":getHighestIncrementedFee(transactionMaxFeePerGas,suggestedMaxFeePerGas),temporaryGasSettings.maxPriorityFeePerGas=void 0===transactionMaxPriorityFeePerGas||transactionMaxPriorityFeePerGas.startsWith("-")?"0x0":getHighestIncrementedFee(transactionMaxPriorityFeePerGas,suggestedMaxPriorityFeePerGas)}else{var _transaction_txParams4,transactionGasPrice=null===(_transaction_txParams4=transaction.txParams)||void 0===_transaction_txParams4?void 0:_transaction_txParams4.gasPrice;temporaryGasSettings.gasPrice=void 0===transactionGasPrice||transactionGasPrice.startsWith("-")?"0x0":getHighestIncrementedFee(transactionGasPrice,suggestedMaxFeePerGas)}return temporaryGasSettings},[transaction,gasFeeEstimates])}}}]);