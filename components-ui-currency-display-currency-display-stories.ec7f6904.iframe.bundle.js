"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[80624],{"./ui/components/ui/currency-display/currency-display.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,DisplayValueStory:()=>DisplayValueStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_shared_modules_conversion_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./shared/modules/conversion.utils.ts"),_shared_constants_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./shared/constants/common.ts"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/ui/currency-display/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/CurrencyDisplay",argTypes:{className:{control:"text"},currency:{control:"text"},"data-testid":{control:"text"},denomination:{control:"select",options:[_shared_constants_common__WEBPACK_IMPORTED_MODULE_2__.sk.ETH,_shared_constants_common__WEBPACK_IMPORTED_MODULE_2__.sk.GWEI]},displayValue:{control:"text"},hideLabel:{control:"boolean"},hideTitle:{control:"boolean"},numberOfDecimals:{control:"number"},prefix:{control:"text"},prefixComponent:{control:"text"},style:{control:"object"},suffix:{control:"text"},value:{control:"text"},prefixComponentWrapperProps:{control:"object"},textProps:{control:"object"},suffixProps:{control:"object"},boxProps:{control:"object"}},args:{denomination:_shared_constants_common__WEBPACK_IMPORTED_MODULE_2__.sk.ETH,value:(0,_shared_modules_conversion_utils__WEBPACK_IMPORTED_MODULE_1__.Ao)("123.45"),numberOfDecimals:"2",currency:"USD",prefix:"$"}};var DefaultStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.A,args)};DefaultStory.storyName="Default";var DisplayValueStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.A,_object_spread_props(_object_spread({},args),{displayValue:"44.43"}))};DefaultStory.storyName="Display Value",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <CurrencyDisplay {...args} />",...DefaultStory.parameters?.docs?.source}}},DisplayValueStory.parameters={...DisplayValueStory.parameters,docs:{...DisplayValueStory.parameters?.docs,source:{originalSource:'args => <CurrencyDisplay {...args} displayValue="44.43" />',...DisplayValueStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","DisplayValueStory"]}}]);