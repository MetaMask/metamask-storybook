"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[25883],{"./ui/components/ui/currency-display/currency-display.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>CurrencyDisplay});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_hooks_useCurrencyDisplay__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/hooks/useCurrencyDisplay.js"),_shared_constants_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./shared/constants/common.ts"),_component_library__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/index.ts"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/helpers/constants/design-system.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function CurrencyDisplay(_param){var account=_param.account,value=_param.value,displayValue=_param.displayValue,dataTestId=_param["data-testid"],style=_param.style,className=_param.className,prefix=_param.prefix,prefixComponent=_param.prefixComponent,hideLabel=_param.hideLabel,hideTitle=_param.hideTitle,numberOfDecimals=_param.numberOfDecimals,denomination=_param.denomination,currency=_param.currency,suffix=_param.suffix,_param_prefixComponentWrapperProps=_param.prefixComponentWrapperProps,_param_textProps=_param.textProps,_param_suffixProps=_param.suffixProps,_param_isAggregatedFiatOverviewBalance=_param.isAggregatedFiatOverviewBalance,_param_privacyMode=_param.privacyMode,privacyMode=void 0!==_param_privacyMode&&_param_privacyMode,props=_object_without_properties(_param,["account","value","displayValue","data-testid","style","className","prefix","prefixComponent","hideLabel","hideTitle","numberOfDecimals","denomination","currency","suffix","prefixComponentWrapperProps","textProps","suffixProps","isAggregatedFiatOverviewBalance","privacyMode"]),_useCurrencyDisplay=_sliced_to_array((0,_hooks_useCurrencyDisplay__WEBPACK_IMPORTED_MODULE_2__.pf)(value,{account:account,displayValue:displayValue,prefix:prefix,numberOfDecimals:numberOfDecimals,hideLabel:hideLabel,denomination:denomination,currency:currency,suffix:suffix,isAggregatedFiatOverviewBalance:void 0!==_param_isAggregatedFiatOverviewBalance&&_param_isAggregatedFiatOverviewBalance}),2),title=_useCurrencyDisplay[0],parts=_useCurrencyDisplay[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.az,_object_spread({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("currency-display-component",className),"data-testid":dataTestId,style:style,title:!hideTitle&&title||null,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.nl.Flex,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.k2.center,flexWrap:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.I4.Wrap},props),prefixComponent?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.az,_object_spread({className:"currency-display-component__prefix",marginInlineEnd:1,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.J3.inherit},void 0===_param_prefixComponentWrapperProps?{}:_param_prefixComponentWrapperProps),prefixComponent):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.EN,_object_spread({as:"span",className:"currency-display-component__text",ellipsis:!0,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.J3.inherit,isHidden:privacyMode,"data-testid":"account-value-and-suffix"},void 0===_param_textProps?{}:_param_textProps),parts.prefix,parts.value),parts.suffix?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_4__.EN,_object_spread({as:"span",className:privacyMode?"currency-display-component__text":"currency-display-component__suffix",marginInlineStart:privacyMode?0:1,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.J3.inherit,isHidden:privacyMode},void 0===_param_suffixProps?{}:_param_suffixProps),parts.suffix):null)}var CurrencyDisplayPropTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,account:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object,currency:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,"data-testid":prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,denomination:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf([_shared_constants_common__WEBPACK_IMPORTED_MODULE_3__.sk.GWEI,_shared_constants_common__WEBPACK_IMPORTED_MODULE_3__.sk.ETH]),displayValue:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,hideLabel:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,hideTitle:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,numberOfDecimals:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,prop_types__WEBPACK_IMPORTED_MODULE_6___default().number]),prefix:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,prefixComponent:prop_types__WEBPACK_IMPORTED_MODULE_6___default().node,style:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object,suffix:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool]),value:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,prefixComponentWrapperProps:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object,textProps:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object,suffixProps:prop_types__WEBPACK_IMPORTED_MODULE_6___default().object,isAggregatedFiatOverviewBalance:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,privacyMode:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool};CurrencyDisplay.propTypes=CurrencyDisplayPropTypes,CurrencyDisplay.__docgenInfo={description:"@param {PropTypes.InferProps<typeof CurrencyDisplayPropTypes>>}",methods:[],displayName:"CurrencyDisplay",props:{prefixComponentWrapperProps:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},textProps:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},suffixProps:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},isAggregatedFiatOverviewBalance:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},privacyMode:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},className:{description:"",type:{name:"string"},required:!1},account:{description:"",type:{name:"object"},required:!1},currency:{description:"",type:{name:"string"},required:!1},"data-testid":{description:"",type:{name:"string"},required:!1},denomination:{description:"",type:{name:"enum",value:[{value:"EtherDenomination.GWEI",computed:!0},{value:"EtherDenomination.ETH",computed:!0}]},required:!1},displayValue:{description:"",type:{name:"string"},required:!1},hideLabel:{description:"",type:{name:"bool"},required:!1},hideTitle:{description:"",type:{name:"bool"},required:!1},numberOfDecimals:{description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},prefix:{description:"",type:{name:"string"},required:!1},prefixComponent:{description:"",type:{name:"node"},required:!1},style:{description:"",type:{name:"object"},required:!1},suffix:{description:"",type:{name:"union",value:[{name:"string"},{name:"bool"}]},required:!1},value:{description:"",type:{name:"string"},required:!1}}}},"./ui/components/ui/currency-display/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_currency_display_component__WEBPACK_IMPORTED_MODULE_0__.A});var _currency_display_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/currency-display/currency-display.component.js")},"./ui/hooks/useCurrencyDisplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ke:()=>MIN_AMOUNT,Vi:()=>DEFAULT_PRECISION,pf:()=>useCurrencyDisplay});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),bignumber_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/bignumber.js/bignumber.js"),bignumber_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__),_helpers_utils_confirm_tx_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/utils/confirm-tx.util.ts"),_selectors_multichain__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/selectors/multichain.ts"),_shared_modules_conversion_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./shared/modules/conversion.utils.ts"),_shared_constants_network__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./shared/constants/network.ts"),_shared_modules_Numeric__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./shared/modules/Numeric.ts"),_shared_constants_common__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./shared/constants/common.ts"),_helpers_utils_token_util__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ui/helpers/utils/token-util.js"),_useMultichainSelector__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./ui/hooks/useMultichainSelector.ts");function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var MIN_AMOUNT=1e-6,MIN_AMOUNT_DISPLAY="<".concat(MIN_AMOUNT),DEFAULT_PRECISION=new(bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(MIN_AMOUNT).decimalPlaces();function formatEthCurrencyDisplay(param){var isNativeCurrency=param.isNativeCurrency,isUserPreferredCurrency=param.isUserPreferredCurrency,currency=param.currency,nativeCurrency=param.nativeCurrency,inputValue=param.inputValue,conversionRate=param.conversionRate,denomination=param.denomination,numberOfDecimals=param.numberOfDecimals;if(!isNativeCurrency&&(isUserPreferredCurrency||nativeCurrency)){if(isUserPreferredCurrency&&conversionRate)return(0,_helpers_utils_confirm_tx_util__WEBPACK_IMPORTED_MODULE_2__.vv)((0,_shared_modules_conversion_utils__WEBPACK_IMPORTED_MODULE_4__.gh)({value:inputValue,fromCurrency:nativeCurrency,toCurrency:currency,conversionRate:conversionRate,numberOfDecimals:numberOfDecimals||2,toDenomination:denomination}),currency)}else{var ethDisplayValue=new _shared_modules_Numeric__WEBPACK_IMPORTED_MODULE_6__.e(inputValue,16,_shared_constants_common__WEBPACK_IMPORTED_MODULE_7__.sk.WEI).toDenomination(denomination||_shared_constants_common__WEBPACK_IMPORTED_MODULE_7__.sk.ETH).round(numberOfDecimals||DEFAULT_PRECISION).toBase(10).toString();return"0"===ethDisplayValue&&inputValue&&0!==Number(inputValue)?MIN_AMOUNT_DISPLAY:ethDisplayValue}return null}function formatNonEvmAssetCurrencyDisplay(param){var tokenSymbol=param.tokenSymbol,isNativeCurrency=param.isNativeCurrency,isUserPreferredCurrency=param.isUserPreferredCurrency,currency=param.currency,currentCurrency=param.currentCurrency,nativeCurrency=param.nativeCurrency,inputValue=param.inputValue,conversionRate=param.conversionRate;if(isNativeCurrency||!isUserPreferredCurrency&&!nativeCurrency)return new _shared_modules_Numeric__WEBPACK_IMPORTED_MODULE_6__.e(inputValue,10).toString();if(isUserPreferredCurrency&&conversionRate){var _getTokenFiatAmount,amount=null!==(_getTokenFiatAmount=(0,_helpers_utils_token_util__WEBPACK_IMPORTED_MODULE_8__.aQ)(1,Number(conversionRate),currentCurrency,inputValue,tokenSymbol,!1,!1))&&void 0!==_getTokenFiatAmount?_getTokenFiatAmount:"0";return(0,_helpers_utils_confirm_tx_util__WEBPACK_IMPORTED_MODULE_2__.vv)(amount,currency)}return null}function useCurrencyDisplay(inputValue,_param){var suffix,account=_param.account,displayValue=_param.displayValue,prefix=_param.prefix,numberOfDecimals=_param.numberOfDecimals,denomination=_param.denomination,currency=_param.currency,isAggregatedFiatOverviewBalance=_param.isAggregatedFiatOverviewBalance,opts=_object_without_properties(_param,["account","displayValue","prefix","numberOfDecimals","denomination","currency","isAggregatedFiatOverviewBalance"]),isEvm=(0,_useMultichainSelector__WEBPACK_IMPORTED_MODULE_9__.t)(_selectors_multichain__WEBPACK_IMPORTED_MODULE_3__.Bu,account),currentCurrency=(0,_useMultichainSelector__WEBPACK_IMPORTED_MODULE_9__.t)(_selectors_multichain__WEBPACK_IMPORTED_MODULE_3__.H5,account),nativeCurrency=(0,_useMultichainSelector__WEBPACK_IMPORTED_MODULE_9__.t)(_selectors_multichain__WEBPACK_IMPORTED_MODULE_3__.zz,account),conversionRate=(0,_useMultichainSelector__WEBPACK_IMPORTED_MODULE_9__.t)(_selectors_multichain__WEBPACK_IMPORTED_MODULE_3__.RP,account),isUserPreferredCurrency=currency===currentCurrency,isNativeCurrency=currency===nativeCurrency,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return displayValue||(isEvm?isAggregatedFiatOverviewBalance?(0,_helpers_utils_confirm_tx_util__WEBPACK_IMPORTED_MODULE_2__.vv)(inputValue,currency):formatEthCurrencyDisplay({isNativeCurrency:isNativeCurrency,isUserPreferredCurrency:isUserPreferredCurrency,currency:currency,nativeCurrency:nativeCurrency,inputValue:inputValue,conversionRate:conversionRate,denomination:denomination,numberOfDecimals:numberOfDecimals}):formatNonEvmAssetCurrencyDisplay({tokenSymbol:nativeCurrency,isNativeCurrency:isNativeCurrency,isUserPreferredCurrency:isUserPreferredCurrency,currency:currency,currentCurrency:currentCurrency,nativeCurrency:nativeCurrency,inputValue:inputValue,conversionRate:conversionRate}))},[displayValue,isEvm,isNativeCurrency,isUserPreferredCurrency,currency,nativeCurrency,inputValue,conversionRate,denomination,numberOfDecimals,currentCurrency,isAggregatedFiatOverviewBalance]);if(!opts.hideLabel){var currencyTickerSymbol=Object.values(_shared_constants_network__WEBPACK_IMPORTED_MODULE_5__.SL).includes(currency)?currency:null==currency?void 0:currency.toUpperCase();suffix=opts.suffix||currencyTickerSymbol}return["".concat(prefix||"").concat(value).concat(suffix?" ".concat(suffix):""),{prefix:prefix,value:value,suffix:suffix}]}},"./ui/hooks/useMultichainSelector.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useMultichainSelector});var react_redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-redux/es/index.js"),_selectors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/selectors/index.js");function useMultichainSelector(selector,account){return(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.d4)(function(state){return selector(state,account||(0,_selectors__WEBPACK_IMPORTED_MODULE_1__._rF)(state))})}}}]);