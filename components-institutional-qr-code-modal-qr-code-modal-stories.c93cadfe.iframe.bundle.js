(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[43993],{"./ui/components/institutional/qr-code-modal/qr-code-modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),redux_mock_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/redux-mock-store/lib/index.js"),_qr_code_modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/institutional/qr-code-modal/qr-code-modal.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var store=(0,redux_mock_store__WEBPACK_IMPORTED_MODULE_2__.A)()({metamask:{institutionalFeatures:{channelId:"channel123",connectionRequest:{payload:"encryptedPayload"}}}});let __WEBPACK_DEFAULT_EXPORT__={title:"Components/Institutional/QRCodeModal",decorators:[function(storyFn){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Kq,{store:store},storyFn())}],component:_qr_code_modal__WEBPACK_IMPORTED_MODULE_3__.A,argTypes:{onClose:{action:"closed"},custodianName:{control:"text"},custodianURL:{control:"text"}}};var Template=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_qr_code_modal__WEBPACK_IMPORTED_MODULE_3__.A,args)},Default=Template.bind({});Default.args={custodianName:"Test Custodian",custodianURL:"http://testcustodian.com"};var WithError=Template.bind({});WithError.args=_object_spread_props(_object_spread({},Default.args),{error:"Failed to load data"}),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: QRCodeModalArgs) => <QRCodeModal {...args} />",...Default.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"(args: QRCodeModalArgs) => <QRCodeModal {...args} />",...WithError.parameters?.docs?.source}}};let __namedExportsOrder=["Default","WithError"]},"./node_modules/lodash.isplainobject/index.js":module=>{function isHostObject(value){var result=!1;if(null!=value&&"function"!=typeof value.toString)try{result=!!(value+"")}catch(e){}return result}function overArg(func,transform){return function(arg){return func(transform(arg))}}var objectProto=Object.prototype,funcToString=Function.prototype.toString,hasOwnProperty=objectProto.hasOwnProperty,objectCtorString=funcToString.call(Object),objectToString=objectProto.toString,getPrototype=overArg(Object.getPrototypeOf,Object);function isObjectLike(value){return!!value&&"object"==typeof value}function isPlainObject(value){if(!isObjectLike(value)||"[object Object]"!=objectToString.call(value)||isHostObject(value))return!1;var proto=getPrototype(value);if(null===proto)return!0;var Ctor=hasOwnProperty.call(proto,"constructor")&&proto.constructor;return"function"==typeof Ctor&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString}module.exports=isPlainObject},"./node_modules/redux-mock-store/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";exports.A=configureStore;var _redux=__webpack_require__("./node_modules/redux/es/redux.js"),_lodash2=_interopRequireDefault(__webpack_require__("./node_modules/lodash.isplainobject/index.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _toConsumableArray(arr){if(!Array.isArray(arr))return Array.from(arr);for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}var isFunction=function isFunction(arg){return"function"==typeof arg};function configureStore(){var middlewares=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function mockStore(){var _getState=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};function mockStoreWithoutMiddleware(){var actions=[],listeners=[];return{getState:function getState(){return isFunction(_getState)?_getState(actions):_getState},getActions:function getActions(){return actions},dispatch:function dispatch(action){if(!(0,_lodash2.default)(action))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===action.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant? Action: '+JSON.stringify(action));actions.push(action);for(var i=0;i<listeners.length;i++)listeners[i]();return action},clearActions:function clearActions(){actions=[]},subscribe:function subscribe(cb){return isFunction(cb)&&listeners.push(cb),function(){var index=listeners.indexOf(cb);index<0||listeners.splice(index,1)}},replaceReducer:function replaceReducer(nextReducer){if(!isFunction(nextReducer))throw Error("Expected the nextReducer to be a function.")}}}return _redux.applyMiddleware.apply(void 0,_toConsumableArray(middlewares))(mockStoreWithoutMiddleware)()}}}}]);