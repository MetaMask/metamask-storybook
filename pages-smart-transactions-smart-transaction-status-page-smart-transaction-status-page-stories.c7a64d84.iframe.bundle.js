(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[14961],{"./ui/pages/smart-transactions/smart-transaction-status-page/smart-transaction-status-page.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Failed:()=>Failed,Pending:()=>Pending,Success:()=>Success,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_store_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/store/store.ts"),_smart_transaction_status_page__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/pages/smart-transactions/smart-transaction-status-page/smart-transaction-status-page.tsx"),_test_stub_networks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./test/stub/networks.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var TX_MOCK={id:"txId",simulationData:{nativeBalanceChange:{previousBalance:"0x0",newBalance:"0x0",difference:"0x12345678912345678",isDecrease:!0},tokenBalanceChanges:[]},chainId:"0x1"},storeMock=(0,_store_store__WEBPACK_IMPORTED_MODULE_2__.A)({metamask:_object_spread_props(_object_spread({preferences:{useNativeCurrencyAsPrimaryCurrency:!1}},(0,_test_stub_networks__WEBPACK_IMPORTED_MODULE_4__.g)({chainId:"0x1"})),{transactions:[TX_MOCK],currentNetworkTxList:[TX_MOCK]})});let __WEBPACK_DEFAULT_EXPORT__={title:"Pages/SmartTransactions/SmartTransactionStatusPage",component:_smart_transaction_status_page__WEBPACK_IMPORTED_MODULE_3__.Ay,decorators:[function(story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Kq,{store:storeMock},story())}]};var Pending={args:{requestState:{smartTransaction:{status:"pending",creationTime:Date.now(),uuid:"uuid",chainId:"0x1"},isDapp:!1,txId:"txId"},onCloseExtension:function(){},onViewActivity:function(){}}},Success={args:{requestState:{smartTransaction:{status:"success",creationTime:Date.now()-6e4,uuid:"uuid-success",chainId:"0x1"},isDapp:!1,txId:"txId-success"},onCloseExtension:function(){},onViewActivity:function(){}}},Failed={args:{requestState:{smartTransaction:{status:"unknown",creationTime:Date.now()-18e4,uuid:"uuid-failed",chainId:"0x1"},isDapp:!1,txId:"txId-failed"},onCloseExtension:function(){},onViewActivity:function(){}}};Pending.parameters={...Pending.parameters,docs:{...Pending.parameters?.docs,source:{originalSource:"{\n  args: {\n    requestState: {\n      smartTransaction: {\n        status: 'pending',\n        creationTime: Date.now(),\n        uuid: 'uuid',\n        chainId: '0x1'\n      },\n      isDapp: false,\n      txId: 'txId'\n    },\n    onCloseExtension: () => {},\n    onViewActivity: () => {}\n  }\n}",...Pending.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"{\n  args: {\n    requestState: {\n      smartTransaction: {\n        status: 'success',\n        creationTime: Date.now() - 60000,\n        // 1 minute ago\n        uuid: 'uuid-success',\n        chainId: '0x1'\n      },\n      isDapp: false,\n      txId: 'txId-success'\n    },\n    onCloseExtension: () => {},\n    onViewActivity: () => {}\n  }\n}",...Success.parameters?.docs?.source}}},Failed.parameters={...Failed.parameters,docs:{...Failed.parameters?.docs,source:{originalSource:"{\n  args: {\n    requestState: {\n      smartTransaction: {\n        status: 'unknown',\n        creationTime: Date.now() - 180000,\n        // 3 minutes ago\n        uuid: 'uuid-failed',\n        chainId: '0x1'\n      },\n      isDapp: false,\n      txId: 'txId-failed'\n    },\n    onCloseExtension: () => {},\n    onViewActivity: () => {}\n  }\n}",...Failed.parameters?.docs?.source}}};let __namedExportsOrder=["Pending","Success","Failed"]},"./ui/components/ui/icon/preloader/preloader-icon.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),Preloader=function(param){var className=param.className,size=param.size;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("preloader__icon",className),width:size,height:size,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 13.7143C4.84409 13.7143 2.28571 11.1559 2.28571 8C2.28571 4.84409 4.84409 2.28571 8 2.28571C11.1559 2.28571 13.7143 4.84409 13.7143 8C13.7143 11.1559 11.1559 13.7143 8 13.7143ZM8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z",fill:"var(--color-primary-muted)"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask",{id:"mask0","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"16",height:"16"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 13.7143C4.84409 13.7143 2.28571 11.1559 2.28571 8C2.28571 4.84409 4.84409 2.28571 8 2.28571C11.1559 2.28571 13.7143 4.84409 13.7143 8C13.7143 11.1559 11.1559 13.7143 8 13.7143ZM8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16Z",fill:"var(--color-primary-default)"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{mask:"url(#mask0)"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M6.85718 17.9999V11.4285V8.28564H-4.85711V17.9999H6.85718Z",fill:"var(--color-primary-default)"})))};Preloader.defaultProps={className:void 0},Preloader.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired};let __WEBPACK_DEFAULT_EXPORT__=Preloader;Preloader.__docgenInfo={description:"",methods:[],displayName:"Preloader",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},size:{description:"",type:{name:"number"},required:!0}}}},"./ui/components/ui/tooltip/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_tooltip__WEBPACK_IMPORTED_MODULE_0__.A});var _tooltip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/tooltip/tooltip.js")},"./ui/hooks/useCurrencyDisplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ke:()=>MIN_AMOUNT,Vi:()=>DEFAULT_PRECISION,pf:()=>useCurrencyDisplay});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),bignumber_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/bignumber.js/bignumber.js"),bignumber_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__),_helpers_utils_confirm_tx_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/utils/confirm-tx.util.ts"),_selectors_multichain__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/selectors/multichain.ts"),_shared_modules_conversion_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./shared/modules/conversion.utils.ts"),_shared_constants_network__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./shared/constants/network.ts"),_shared_modules_Numeric__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./shared/modules/Numeric.ts"),_shared_constants_common__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./shared/constants/common.ts"),_helpers_utils_token_util__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ui/helpers/utils/token-util.js"),_useMultichainSelector__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./ui/hooks/useMultichainSelector.ts");function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var MIN_AMOUNT=1e-6,MIN_AMOUNT_DISPLAY="<".concat(MIN_AMOUNT),DEFAULT_PRECISION=new(bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(MIN_AMOUNT).decimalPlaces();function formatEthCurrencyDisplay(param){var isNativeCurrency=param.isNativeCurrency,isUserPreferredCurrency=param.isUserPreferredCurrency,currency=param.currency,nativeCurrency=param.nativeCurrency,inputValue=param.inputValue,conversionRate=param.conversionRate,denomination=param.denomination,numberOfDecimals=param.numberOfDecimals;if(!isNativeCurrency&&(isUserPreferredCurrency||nativeCurrency)){if(isUserPreferredCurrency&&conversionRate)return(0,_helpers_utils_confirm_tx_util__WEBPACK_IMPORTED_MODULE_2__.vv)((0,_shared_modules_conversion_utils__WEBPACK_IMPORTED_MODULE_4__.gh)({value:inputValue,fromCurrency:nativeCurrency,toCurrency:currency,conversionRate:conversionRate,numberOfDecimals:numberOfDecimals||2,toDenomination:denomination}),currency)}else{var ethDisplayValue=new _shared_modules_Numeric__WEBPACK_IMPORTED_MODULE_6__.e(inputValue,16,_shared_constants_common__WEBPACK_IMPORTED_MODULE_7__.sk.WEI).toDenomination(denomination||_shared_constants_common__WEBPACK_IMPORTED_MODULE_7__.sk.ETH).round(numberOfDecimals||DEFAULT_PRECISION).toBase(10).toString();return"0"===ethDisplayValue&&inputValue&&0!==Number(inputValue)?MIN_AMOUNT_DISPLAY:ethDisplayValue}return null}function formatNonEvmAssetCurrencyDisplay(param){var tokenSymbol=param.tokenSymbol,isNativeCurrency=param.isNativeCurrency,isUserPreferredCurrency=param.isUserPreferredCurrency,currency=param.currency,currentCurrency=param.currentCurrency,nativeCurrency=param.nativeCurrency,inputValue=param.inputValue,conversionRate=param.conversionRate;if(isNativeCurrency||!isUserPreferredCurrency&&!nativeCurrency)return new _shared_modules_Numeric__WEBPACK_IMPORTED_MODULE_6__.e(inputValue,10).toString();if(isUserPreferredCurrency&&conversionRate){var _getTokenFiatAmount,amount=null!==(_getTokenFiatAmount=(0,_helpers_utils_token_util__WEBPACK_IMPORTED_MODULE_8__.aQ)(1,Number(conversionRate),currentCurrency,inputValue,tokenSymbol,!1,!1))&&void 0!==_getTokenFiatAmount?_getTokenFiatAmount:"0";return(0,_helpers_utils_confirm_tx_util__WEBPACK_IMPORTED_MODULE_2__.vv)(amount,currency)}return null}function useCurrencyDisplay(inputValue,_param){var suffix,account=_param.account,displayValue=_param.displayValue,prefix=_param.prefix,numberOfDecimals=_param.numberOfDecimals,denomination=_param.denomination,currency=_param.currency,isAggregatedFiatOverviewBalance=_param.isAggregatedFiatOverviewBalance,opts=_object_without_properties(_param,["account","displayValue","prefix","numberOfDecimals","denomination","currency","isAggregatedFiatOverviewBalance"]),isEvm=(0,_useMultichainSelector__WEBPACK_IMPORTED_MODULE_9__.t)(_selectors_multichain__WEBPACK_IMPORTED_MODULE_3__.Bu,account),currentCurrency=(0,_useMultichainSelector__WEBPACK_IMPORTED_MODULE_9__.t)(_selectors_multichain__WEBPACK_IMPORTED_MODULE_3__.H5,account),nativeCurrency=(0,_useMultichainSelector__WEBPACK_IMPORTED_MODULE_9__.t)(_selectors_multichain__WEBPACK_IMPORTED_MODULE_3__.zz,account),conversionRate=(0,_useMultichainSelector__WEBPACK_IMPORTED_MODULE_9__.t)(_selectors_multichain__WEBPACK_IMPORTED_MODULE_3__.RP,account),isUserPreferredCurrency=currency===currentCurrency,isNativeCurrency=currency===nativeCurrency,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return displayValue||(isEvm?isAggregatedFiatOverviewBalance?(0,_helpers_utils_confirm_tx_util__WEBPACK_IMPORTED_MODULE_2__.vv)(inputValue,currency):formatEthCurrencyDisplay({isNativeCurrency:isNativeCurrency,isUserPreferredCurrency:isUserPreferredCurrency,currency:currency,nativeCurrency:nativeCurrency,inputValue:inputValue,conversionRate:conversionRate,denomination:denomination,numberOfDecimals:numberOfDecimals}):formatNonEvmAssetCurrencyDisplay({tokenSymbol:nativeCurrency,isNativeCurrency:isNativeCurrency,isUserPreferredCurrency:isUserPreferredCurrency,currency:currency,currentCurrency:currentCurrency,nativeCurrency:nativeCurrency,inputValue:inputValue,conversionRate:conversionRate}))},[displayValue,isEvm,isNativeCurrency,isUserPreferredCurrency,currency,nativeCurrency,inputValue,conversionRate,denomination,numberOfDecimals,currentCurrency,isAggregatedFiatOverviewBalance]);if(!opts.hideLabel){var currencyTickerSymbol=Object.values(_shared_constants_network__WEBPACK_IMPORTED_MODULE_5__.SL).includes(currency)?currency:null==currency?void 0:currency.toUpperCase();suffix=opts.suffix||currencyTickerSymbol}return["".concat(prefix||"").concat(value).concat(suffix?" ".concat(suffix):""),{prefix:prefix,value:value,suffix:suffix}]}},"./shared/constants/urls.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var BaseUrl,SurveyUrl;__webpack_require__.d(__webpack_exports__,{A:()=>SurveyUrl,B:()=>BaseUrl}),(BaseUrl||(BaseUrl={})).Portfolio="https://portfolio.metamask.io",(SurveyUrl||(SurveyUrl={})).BtcSupport="https://www.getfeedback.com/r/yG6FbiW5"},"./ui/hooks/useMultichainSelector.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>useMultichainSelector});var react_redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-redux/es/index.js"),_selectors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/selectors/index.js");function useMultichainSelector(selector,account){return(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.d4)(function(state){return selector(state,account||(0,_selectors__WEBPACK_IMPORTED_MODULE_1__._rF)(state))})}},"./ui/pages/confirmations/components/simulation-details/formatAmount.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>formatAmount,o:()=>formatAmountMaxPrecision});var bignumber_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/bignumber.js/bignumber.js"),_hooks_useCurrencyDisplay__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/hooks/useCurrencyDisplay.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function formatAmountMaxPrecision(locale,num){var bigNumberValue=new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.BigNumber(num),numberOfDecimals=bigNumberValue.decimalPlaces(),_formattedValue_split=_sliced_to_array(bigNumberValue.toFixed(numberOfDecimals).split("."),2),integerPart=_formattedValue_split[0],fractionalPart=_formattedValue_split[1],formattedIntegerPart=new Intl.NumberFormat(locale).format(integerPart);return fractionalPart?"".concat(formattedIntegerPart,".").concat(fractionalPart):formattedIntegerPart}function formatAmount(locale,amount){if(amount.isZero())return"0";if(amount.abs().lessThan(_hooks_useCurrencyDisplay__WEBPACK_IMPORTED_MODULE_1__.Ke))return"<".concat(formatAmountMaxPrecision(locale,_hooks_useCurrencyDisplay__WEBPACK_IMPORTED_MODULE_1__.Ke));if(amount.abs().lessThan(1))return new Intl.NumberFormat(locale,{maximumSignificantDigits:3}).format(amount.round(_hooks_useCurrencyDisplay__WEBPACK_IMPORTED_MODULE_1__.Vi).toNumber());var maximumFractionDigits=Math.max(0,3-amount.abs().truncated().toString().length+1);return new Intl.NumberFormat(locale,{maximumFractionDigits:maximumFractionDigits}).format(amount.toFixed(maximumFractionDigits))}},"./ui/pages/confirmations/components/simulation-details/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>_simulation_details__WEBPACK_IMPORTED_MODULE_0__._});var _simulation_details__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/pages/confirmations/components/simulation-details/simulation-details.tsx")},"./ui/pages/smart-transactions/smart-transaction-status-page/smart-transaction-status-page.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>smart_transaction_status_page});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),types=__webpack_require__("./node_modules/@metamask/smart-transactions-controller/dist/types.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),useI18nContext=__webpack_require__("./ui/hooks/useI18nContext.js"),networks=__webpack_require__("./shared/modules/selectors/networks.ts"),selectors=__webpack_require__("./ui/selectors/index.js"),urls=__webpack_require__("./shared/constants/urls.ts"),actions=__webpack_require__("./ui/__mocks__/actions.js"),conversion_utils=__webpack_require__("./shared/modules/conversion.utils.ts"),simulation_details=__webpack_require__("./ui/pages/confirmations/components/simulation-details/index.ts"),lottie_light=__webpack_require__("./node_modules/lottie-web/build/player/lottie_light.js"),lottie_light_default=__webpack_require__.n(lottie_light);function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var LottieAnimation=function(param){var data=param.data,path=param.path,_param_loop=param.loop,loop=void 0===_param_loop||_param_loop,_param_autoplay=param.autoplay,autoplay=void 0===_param_autoplay||_param_autoplay,_param_style=param.style,_param_className=param.className,_param_onComplete=param.onComplete,onComplete=void 0===_param_onComplete?function(){return null}:_param_onComplete,containerRef=(0,react.useRef)(null),animationInstance=(0,react.useRef)(null);return(0,react.useEffect)(function(){if(!containerRef.current)return console.error("LottieAnimation: containerRef is null"),function(){return null};if(!!data==!!path)return console.error("LottieAnimation: Exactly one of data or path must be provided"),function(){return null};var animationConfig=_object_spread({container:containerRef.current,renderer:"svg",loop:loop,autoplay:autoplay},data?{animationData:data}:{path:path});try{animationInstance.current=lottie_light_default().loadAnimation(animationConfig),animationInstance.current.addEventListener("complete",onComplete),animationInstance.current.addEventListener("error",function(error){console.error("LottieAnimation error:",error)})}catch(error){console.error("Failed to load animation:",error)}return function(){animationInstance.current&&(animationInstance.current.removeEventListener("complete",onComplete),animationInstance.current.destroy(),animationInstance.current=null)}},[data,path,loop,autoplay,onComplete]),react.createElement("div",{ref:containerRef,style:void 0===_param_style?{}:_param_style,className:void 0===_param_className?"":_param_className})};try{LottieAnimation.displayName="LottieAnimation",LottieAnimation.__docgenInfo={description:"",displayName:"LottieAnimation",props:{data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"object"}},path:{defaultValue:null,description:"",name:"path",required:!1,type:{name:"string"}},loop:{defaultValue:{value:"true"},description:"",name:"loop",required:!1,type:{name:"boolean"}},autoplay:{defaultValue:{value:"true"},description:"",name:"autoplay",required:!1,type:{name:"boolean"}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onComplete:{defaultValue:{value:"() => null"},description:"",name:"onComplete",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/lottie-animation/lottie-animation.tsx#LottieAnimation"]={docgenInfo:LottieAnimation.__docgenInfo,name:"LottieAnimation",path:"ui/components/component-library/lottie-animation/lottie-animation.tsx#LottieAnimation"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var ANIMATIONS_FOLDER="images/animations/smart-transaction-status",Animations={Failed:{path:"".concat(ANIMATIONS_FOLDER,"/failed.lottie.json"),loop:!1},Confirmed:{path:"".concat(ANIMATIONS_FOLDER,"/confirmed.lottie.json"),loop:!1},SubmittingIntro:{path:"".concat(ANIMATIONS_FOLDER,"/submitting-intro.lottie.json"),loop:!1},SubmittingLoop:{path:"".concat(ANIMATIONS_FOLDER,"/submitting-loop.lottie.json"),loop:!0},Processing:{path:"".concat(ANIMATIONS_FOLDER,"/processing.lottie.json"),loop:!0}},SmartTransactionStatusAnimation=function(param){var animation,status=param.status,_useState=_sliced_to_array((0,react.useState)(!0),2),isIntro=_useState[0],setIsIntro=_useState[1];if(status===types.CO.PENDING)animation=isIntro?Animations.SubmittingIntro:Animations.SubmittingLoop;else switch(status){case types.CO.SUCCESS:animation=Animations.Confirmed;break;case types.CO.REVERTED:case types.CO.UNKNOWN:animation=Animations.Failed;break;default:animation=Animations.Processing}var handleAnimationComplete=(0,react.useCallback)(function(){status===types.CO.PENDING&&isIntro&&setIsIntro(!1)},[status,isIntro]);return react.createElement(component_library.az,{display:design_system.nl.Flex,style:{width:"96px",height:"96px"}},react.createElement(LottieAnimation,{path:animation.path,loop:animation.loop,autoplay:!0,onComplete:handleAnimationComplete}))};try{SmartTransactionStatusAnimation.displayName="SmartTransactionStatusAnimation",SmartTransactionStatusAnimation.__docgenInfo={description:"",displayName:"SmartTransactionStatusAnimation",props:{status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"pending"'},{value:'"success"'},{value:'"reverted"'},{value:'"unknown"'},{value:'"cancelled"'},{value:'"cancelled_user_cancelled"'},{value:'"resolved"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/pages/smart-transactions/smart-transaction-status-page/smart-transaction-status-animation.tsx#SmartTransactionStatusAnimation"]={docgenInfo:SmartTransactionStatusAnimation.__docgenInfo,name:"SmartTransactionStatusAnimation",path:"ui/pages/smart-transactions/smart-transaction-status-page/smart-transaction-status-animation.tsx#SmartTransactionStatusAnimation"})}catch(__react_docgen_typescript_loader_error){}var showRemainingTimeInMinAndSec=function(remainingTimeInSec){if(!Number.isInteger(remainingTimeInSec))return"0:00";var minutes=Math.floor(remainingTimeInSec/60);return"".concat(minutes,":").concat((remainingTimeInSec%60).toString().padStart(2,"0"))},getDisplayValues=function(param){var t=param.t,isSmartTransactionPending=param.isSmartTransactionPending,isSmartTransactionSuccess=param.isSmartTransactionSuccess,isSmartTransactionCancelled=param.isSmartTransactionCancelled;return isSmartTransactionPending?{title:t("smartTransactionPending"),iconName:component_library.$M.Clock,iconColor:design_system.Li.primaryDefault}:isSmartTransactionSuccess?{title:t("smartTransactionSuccess"),iconName:component_library.$M.Confirmation,iconColor:design_system.Li.successDefault}:isSmartTransactionCancelled?{title:t("smartTransactionCancelled"),description:t("smartTransactionCancelledDescription"),iconName:component_library.$M.Danger,iconColor:design_system.Li.errorDefault}:{title:t("smartTransactionError"),description:t("smartTransactionErrorDescription"),iconName:component_library.$M.Danger,iconColor:design_system.Li.errorDefault}},Description=function(param){var description=param.description;return description?react.createElement(component_library.az,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,alignItems:design_system.k2.center,className:"smart-transaction-status-page__description"},react.createElement(component_library.EY,{marginTop:2,color:design_system.r7.textAlternative,variant:design_system.J3.bodySm},description)):null},PortfolioSmartTransactionStatusUrl=function(param){var portfolioSmartTransactionStatusUrl=param.portfolioSmartTransactionStatusUrl,isSmartTransactionPending=param.isSmartTransactionPending,onCloseExtension=param.onCloseExtension,t=(0,useI18nContext.P)();if(!portfolioSmartTransactionStatusUrl)return null;var handleViewTransactionLinkClick=(0,react.useCallback)(function(){var isWiderThanNotificationWidth=window.innerWidth>360;(!isSmartTransactionPending||isWiderThanNotificationWidth)&&onCloseExtension(),__webpack_require__.g.platform.openTab({url:portfolioSmartTransactionStatusUrl})},[isSmartTransactionPending,onCloseExtension,portfolioSmartTransactionStatusUrl]);return react.createElement(component_library.az,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,marginTop:2},react.createElement(component_library.$n,{type:"link",variant:component_library.Ak.Link,onClick:handleViewTransactionLinkClick},t("viewTransaction")))},CloseExtensionButton=function(param){var isDapp=param.isDapp,onCloseExtension=param.onCloseExtension,t=(0,useI18nContext.P)();return isDapp?react.createElement(component_library.nR,{"data-testid":"smart-transaction-status-page-footer-close-button",onClick:onCloseExtension,width:design_system.Zf.Full,marginTop:3},t("closeExtension")):null},FooterText=function(param){var isDapp=param.isDapp,isSmartTransactionPending=param.isSmartTransactionPending,t=(0,useI18nContext.P)();return isDapp&&isSmartTransactionPending?react.createElement(component_library.EY,{marginTop:2,color:design_system.r7.textAlternative,variant:design_system.J3.bodySm},t("closeWindowAnytime")):null},ViewActivityButton=function(param){var isDapp=param.isDapp,onViewActivity=param.onViewActivity,t=(0,useI18nContext.P)();return isDapp?null:react.createElement(component_library.nR,{"data-testid":"smart-transaction-status-page-footer-close-button",onClick:onViewActivity,width:design_system.Zf.Full,marginTop:3},t("viewActivity"))},SmartTransactionsStatusPageFooter=function(param){var isDapp=param.isDapp,isSmartTransactionPending=param.isSmartTransactionPending,onCloseExtension=param.onCloseExtension,onViewActivity=param.onViewActivity;return react.createElement(component_library.az,{className:"smart-transaction-status-page__footer",display:design_system.nl.Flex,flexDirection:design_system.bo.Column,width:design_system.Zf.Full,padding:4,paddingBottom:0},react.createElement(FooterText,{isDapp:isDapp,isSmartTransactionPending:isSmartTransactionPending}),react.createElement(CloseExtensionButton,{isDapp:isDapp,onCloseExtension:onCloseExtension}),react.createElement(ViewActivityButton,{isDapp:isDapp,onViewActivity:onViewActivity}))},Title=function(param){var title=param.title;return react.createElement(component_library.EY,{color:design_system.r7.textDefault,variant:design_system.J3.headingMd,as:"h4",fontWeight:design_system.IT.Bold},title)},SmartTransactionStatusPage=function(param){var _smartTransaction_status,_fullTxData_simulationData_tokenBalanceChanges,_fullTxData_simulationData,_fullTxData_simulationData1,requestState=param.requestState,_param_onCloseExtension=param.onCloseExtension,onCloseExtension=void 0===_param_onCloseExtension?function(){return null}:_param_onCloseExtension,_param_onViewActivity=param.onViewActivity,t=(0,useI18nContext.P)(),dispatch=(0,es.wA)(),smartTransaction=requestState.smartTransaction,isDapp=requestState.isDapp,txId=requestState.txId,isSmartTransactionPending=!smartTransaction||smartTransaction.status===types.CO.PENDING,isSmartTransactionSuccess=(null==smartTransaction?void 0:smartTransaction.status)===types.CO.SUCCESS,isSmartTransactionCancelled=!!(null==smartTransaction?void 0:null===(_smartTransaction_status=smartTransaction.status)||void 0===_smartTransaction_status?void 0:_smartTransaction_status.startsWith(types.CO.CANCELLED)),chainId=(0,es.d4)(networks.gr),fullTxData=(0,es.d4)(function(state){return(0,selectors.aVK)(state,txId)})||{},_getDisplayValues=getDisplayValues({t:t,isSmartTransactionPending:isSmartTransactionPending,isSmartTransactionSuccess:isSmartTransactionSuccess,isSmartTransactionCancelled:isSmartTransactionCancelled}),title=_getDisplayValues.title,description=_getDisplayValues.description;(0,react.useEffect)(function(){dispatch((0,actions.hideLoadingIndication)())},[]);var canShowSimulationDetails=(null===(_fullTxData_simulationData=fullTxData.simulationData)||void 0===_fullTxData_simulationData?void 0:null===(_fullTxData_simulationData_tokenBalanceChanges=_fullTxData_simulationData.tokenBalanceChanges)||void 0===_fullTxData_simulationData_tokenBalanceChanges?void 0:_fullTxData_simulationData_tokenBalanceChanges.length)>0||(null===(_fullTxData_simulationData1=fullTxData.simulationData)||void 0===_fullTxData_simulationData1?void 0:_fullTxData_simulationData1.nativeBalanceChange),uuid=null==smartTransaction?void 0:smartTransaction.uuid,portfolioSmartTransactionStatusUrl=uuid&&chainId?"".concat(urls.B.Portfolio,"/networks/").concat(Number((0,conversion_utils.I0)(chainId)),"/smart-transactions/").concat(uuid):void 0;return react.createElement(component_library.az,{className:"smart-transaction-status-page",height:design_system.Zf.Full,width:design_system.Zf.Full,display:design_system.nl.Flex,borderStyle:design_system.kD.none,flexDirection:design_system.bo.Column,alignItems:design_system.k2.center,marginBottom:0},react.createElement(component_library.az,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,alignItems:design_system.k2.center,justifyContent:design_system.A9.center,paddingLeft:4,paddingRight:4,width:design_system.Zf.Full,style:{flexGrow:1}},react.createElement(component_library.az,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,alignItems:design_system.k2.center,paddingLeft:6,paddingRight:6,width:design_system.Zf.Full},react.createElement(SmartTransactionStatusAnimation,{status:null==smartTransaction?void 0:smartTransaction.status}),react.createElement(Title,{title:title}),react.createElement(Description,{description:description}),react.createElement(PortfolioSmartTransactionStatusUrl,{portfolioSmartTransactionStatusUrl:portfolioSmartTransactionStatusUrl,isSmartTransactionPending:isSmartTransactionPending,onCloseExtension:onCloseExtension})),canShowSimulationDetails&&react.createElement(component_library.az,{width:design_system.Zf.Full},react.createElement(simulation_details._,{transaction:fullTxData}))),react.createElement(SmartTransactionsStatusPageFooter,{isDapp:isDapp,isSmartTransactionPending:isSmartTransactionPending,onCloseExtension:onCloseExtension,onViewActivity:void 0===_param_onViewActivity?function(){return null}:_param_onViewActivity}))};let smart_transaction_status_page=SmartTransactionStatusPage;try{showRemainingTimeInMinAndSec.displayName="showRemainingTimeInMinAndSec",showRemainingTimeInMinAndSec.__docgenInfo={description:"",displayName:"showRemainingTimeInMinAndSec",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/pages/smart-transactions/smart-transaction-status-page/smart-transaction-status-page.tsx#showRemainingTimeInMinAndSec"]={docgenInfo:showRemainingTimeInMinAndSec.__docgenInfo,name:"showRemainingTimeInMinAndSec",path:"ui/pages/smart-transactions/smart-transaction-status-page/smart-transaction-status-page.tsx#showRemainingTimeInMinAndSec"})}catch(__react_docgen_typescript_loader_error){}try{SmartTransactionStatusPage.displayName="SmartTransactionStatusPage",SmartTransactionStatusPage.__docgenInfo={description:"",displayName:"SmartTransactionStatusPage",props:{requestState:{defaultValue:null,description:"",name:"requestState",required:!0,type:{name:"RequestState"}},onCloseExtension:{defaultValue:{value:"() => null"},description:"",name:"onCloseExtension",required:!1,type:{name:"(() => void)"}},onViewActivity:{defaultValue:{value:"() => null"},description:"",name:"onViewActivity",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/pages/smart-transactions/smart-transaction-status-page/smart-transaction-status-page.tsx#SmartTransactionStatusPage"]={docgenInfo:SmartTransactionStatusPage.__docgenInfo,name:"SmartTransactionStatusPage",path:"ui/pages/smart-transactions/smart-transaction-status-page/smart-transaction-status-page.tsx#SmartTransactionStatusPage"})}catch(__react_docgen_typescript_loader_error){}try{smarttransactionstatuspage.displayName="smarttransactionstatuspage",smarttransactionstatuspage.__docgenInfo={description:"",displayName:"smarttransactionstatuspage",props:{requestState:{defaultValue:null,description:"",name:"requestState",required:!0,type:{name:"RequestState"}},onCloseExtension:{defaultValue:{value:"() => null"},description:"",name:"onCloseExtension",required:!1,type:{name:"(() => void)"}},onViewActivity:{defaultValue:{value:"() => null"},description:"",name:"onViewActivity",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/pages/smart-transactions/smart-transaction-status-page/smart-transaction-status-page.tsx#smarttransactionstatuspage"]={docgenInfo:smarttransactionstatuspage.__docgenInfo,name:"smarttransactionstatuspage",path:"ui/pages/smart-transactions/smart-transaction-status-page/smart-transaction-status-page.tsx#smarttransactionstatuspage"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/lodash/isEqual.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIsEqual=__webpack_require__("./node_modules/lodash/_baseIsEqual.js");function isEqual(value,other){return baseIsEqual(value,other)}module.exports=isEqual}}]);