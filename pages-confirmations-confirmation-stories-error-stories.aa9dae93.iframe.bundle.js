"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[6262],{"./ui/pages/confirmations/confirmation/stories/error.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomErrorStory:()=>CustomErrorStory,DefaultStory:()=>DefaultStory,TemplateOnlyStory:()=>TemplateOnlyStory,TemplateStory:()=>TemplateStory,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,_CustomErrorStory_parameters,_CustomErrorStory_parameters_docs,_CustomErrorStory_parameters1,_TemplateStory_parameters,_TemplateStory_parameters_docs,_TemplateStory_parameters1,_TemplateOnlyStory_parameters,_TemplateOnlyStory_parameters_docs,_TemplateOnlyStory_parameters1,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_metamask_controller_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@metamask/controller-utils/dist/index.js"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_components_component_library__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/index.ts"),_confirmation__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/pages/confirmations/confirmation/confirmation.js"),_util__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/pages/confirmations/confirmation/stories/util.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let __WEBPACK_DEFAULT_EXPORT__={title:"Pages/ConfirmationPage/ResultError",component:_confirmation__WEBPACK_IMPORTED_MODULE_5__.Z,argTypes:{redirectToHomeOnZeroConfirmations:{table:{disable:!0}},error:{control:"text",description:"The error message text in the center of the page under the title.<br/><br/>Also supports result component configurations.<br/>See `header` argument for example.",table:{defaultValue:{summary:"The operation failed."}}},title:{control:"text",description:"The title text in the center of the page.<br/>Can be hidden with `null`.",table:{defaultValue:{summary:"Error"}}},icon:{control:"text",description:"The name of the icon.<br/>Can be hidden with `null`.",table:{defaultValue:{summary:"warning"}}},header:{control:"array",description:'An array of result component configurations to be rendered at the top of the page. For example: ```[{"name": "SnapAuthorshipHeader", "key": "snapHeader", "properties": { "snapId": "npm:@test/test-snap" }}]```',table:{defaultValue:{summary:"[]"}}},flowToEnd:{control:"text",description:"The ID of an approval flow to end once this success confirmation is confirmed."}},args:{},parameters:{docs:{description:{component:"A standard error confirmation to be reused across confirmation flows with minimal code.<br/><br/>\nAutomatically displayed via the `ConfirmationPage` component when using the `ApprovalController.error` method.<br/><br/>\nThe below arguments are properties in the `ApprovalController.error` request."}}}};var DefaultStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util__WEBPACK_IMPORTED_MODULE_6__.y,{type:_metamask_controller_utils__WEBPACK_IMPORTED_MODULE_1__.ApprovalType.ResultError,requestData:_object_spread_props(_object_spread({},args),{header:(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isArray)(args.header)?args.header:void 0})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_confirmation__WEBPACK_IMPORTED_MODULE_5__.Z,null))};DefaultStory.storyName="Default";var CustomErrorStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util__WEBPACK_IMPORTED_MODULE_6__.y,{type:_metamask_controller_utils__WEBPACK_IMPORTED_MODULE_1__.ApprovalType.ResultError,requestData:{error:"Custom Error"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_confirmation__WEBPACK_IMPORTED_MODULE_5__.Z,null))};CustomErrorStory.storyName="Custom Error";var TemplateStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util__WEBPACK_IMPORTED_MODULE_6__.y,{type:_metamask_controller_utils__WEBPACK_IMPORTED_MODULE_1__.ApprovalType.ResultError,requestData:{title:"Account creation failed",icon:_components_component_library__WEBPACK_IMPORTED_MODULE_4__.uH.UserCircleAdd,error:[{name:"Box",key:"container",properties:{style:{minWidth:"100%",borderRadius:"10px",boxShadow:"var(--shadow-size-lg) var(--color-shadow-default)"}},children:[{name:"AccountListItem",key:"accountListItem",properties:{identity:{address:"0x71C7656EC7ab88b098defB751B7401B5f6d8976F",balance:"0xFFFFFFFFFFFFFFFFFF",name:"Test Account"}}}]},{name:"Box",key:"description",properties:{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.sS.Flex,flexDirection:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Qb.Column,style:{fontSize:"14px",gap:"5px"}},children:["Your new account could not be created.",{name:"a",key:"link",properties:{href:"https://consensys.com",target:"__blank"},children:"Learn more"}]}],header:[{name:"SnapAuthorshipHeader",key:"snapHeader",properties:{snapId:"npm:@test/test-snap"}}]}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_confirmation__WEBPACK_IMPORTED_MODULE_5__.Z,null))};TemplateStory.storyName="Templates + Custom Icon + Custom Title";var TemplateOnlyStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util__WEBPACK_IMPORTED_MODULE_6__.y,{type:_metamask_controller_utils__WEBPACK_IMPORTED_MODULE_1__.ApprovalType.ResultError,requestData:{error:{name:"AccountListItem",key:"accountListItem",properties:{identity:{address:"0x71C7656EC7ab88b098defB751B7401B5f6d8976F",balance:"0xFFFFFFFFFFFFFFFFFF",name:"Test Account"}}},icon:null,title:null}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_confirmation__WEBPACK_IMPORTED_MODULE_5__.Z,null))};TemplateOnlyStory.storyName="Template Only",DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"args => {\n  return <PendingApproval type={ApprovalType.ResultError} requestData={{\n    ...args,\n    header: isArray(args.header) ? args.header : undefined\n  }}>\n      <ConfirmationPage />\n    </PendingApproval>;\n}"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})}),CustomErrorStory.parameters=_object_spread_props(_object_spread({},CustomErrorStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_CustomErrorStory_parameters=CustomErrorStory.parameters)||void 0===_CustomErrorStory_parameters?void 0:_CustomErrorStory_parameters.docs),{source:_object_spread({originalSource:"() => {\n  return <PendingApproval type={ApprovalType.ResultError} requestData={{\n    error: 'Custom Error'\n  }}>\n      <ConfirmationPage />\n    </PendingApproval>;\n}"},null===(_CustomErrorStory_parameters1=CustomErrorStory.parameters)||void 0===_CustomErrorStory_parameters1?void 0:null===(_CustomErrorStory_parameters_docs=_CustomErrorStory_parameters1.docs)||void 0===_CustomErrorStory_parameters_docs?void 0:_CustomErrorStory_parameters_docs.source)})}),TemplateStory.parameters=_object_spread_props(_object_spread({},TemplateStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_TemplateStory_parameters=TemplateStory.parameters)||void 0===_TemplateStory_parameters?void 0:_TemplateStory_parameters.docs),{source:_object_spread({originalSource:"() => {\n  return <PendingApproval type={ApprovalType.ResultError} requestData={{\n    title: 'Account creation failed',\n    icon: IconName.UserCircleAdd,\n    error: [{\n      name: 'Box',\n      key: 'container',\n      properties: {\n        style: {\n          minWidth: '100%',\n          borderRadius: '10px',\n          boxShadow: 'var(--shadow-size-lg) var(--color-shadow-default)'\n        }\n      },\n      children: [{\n        name: 'AccountListItem',\n        key: 'accountListItem',\n        properties: {\n          identity: {\n            address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',\n            balance: '0xFFFFFFFFFFFFFFFFFF',\n            name: 'Test Account'\n          }\n        }\n      }]\n    }, {\n      name: 'Box',\n      key: 'description',\n      properties: {\n        display: Display.Flex,\n        flexDirection: FlexDirection.Column,\n        style: {\n          fontSize: '14px',\n          gap: '5px'\n        }\n      },\n      children: ['Your new account could not be created.', {\n        name: 'a',\n        key: 'link',\n        properties: {\n          href: 'https://consensys.com',\n          target: '__blank'\n        },\n        children: 'Learn more'\n      }]\n    }],\n    header: [{\n      name: 'SnapAuthorshipHeader',\n      key: 'snapHeader',\n      properties: {\n        snapId: 'npm:@test/test-snap'\n      }\n    }]\n  }}>\n      <ConfirmationPage />\n    </PendingApproval>;\n}"},null===(_TemplateStory_parameters1=TemplateStory.parameters)||void 0===_TemplateStory_parameters1?void 0:null===(_TemplateStory_parameters_docs=_TemplateStory_parameters1.docs)||void 0===_TemplateStory_parameters_docs?void 0:_TemplateStory_parameters_docs.source)})}),TemplateOnlyStory.parameters=_object_spread_props(_object_spread({},TemplateOnlyStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_TemplateOnlyStory_parameters=TemplateOnlyStory.parameters)||void 0===_TemplateOnlyStory_parameters?void 0:_TemplateOnlyStory_parameters.docs),{source:_object_spread({originalSource:"() => {\n  return <PendingApproval type={ApprovalType.ResultError} requestData={{\n    error: {\n      name: 'AccountListItem',\n      key: 'accountListItem',\n      properties: {\n        identity: {\n          address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',\n          balance: '0xFFFFFFFFFFFFFFFFFF',\n          name: 'Test Account'\n        }\n      }\n    },\n    icon: null,\n    title: null\n  }}>\n      <ConfirmationPage />\n    </PendingApproval>;\n}"},null===(_TemplateOnlyStory_parameters1=TemplateOnlyStory.parameters)||void 0===_TemplateOnlyStory_parameters1?void 0:null===(_TemplateOnlyStory_parameters_docs=_TemplateOnlyStory_parameters1.docs)||void 0===_TemplateOnlyStory_parameters_docs?void 0:_TemplateOnlyStory_parameters_docs.source)})})},"./ui/pages/confirmations/confirmation/stories/util.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>PendingApproval});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_metamask_network_controller__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@metamask/network-controller/dist/index.js"),_metamask_controller_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@metamask/controller-utils/dist/index.js"),_store_store__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/store/store.ts"),_storybook_test_data__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./.storybook/test-data.js"),_components_component_library__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/components/component-library/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var STORE_MOCK={metamask:{approvalFlows:[],currentCurrency:"USD",keyrings:[{accounts:["0x71C7656EC7ab88b098defB751B7401B5f6d8976F"],type:"TestKeyring"}].concat(function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}(_storybook_test_data__WEBPACK_IMPORTED_MODULE_5__.Z.metamask.keyrings)),networksMetadata:{testNetworkClientId:{status:_metamask_network_controller__WEBPACK_IMPORTED_MODULE_2__.NetworkStatus.Available}},pendingApprovals:{testId:{id:"testId",origin:"npm:@test/test-snap"}},providerConfig:{type:_metamask_controller_utils__WEBPACK_IMPORTED_MODULE_3__.NetworkType.rpc,nickname:"Test Network"},selectedNetworkClientId:"testNetworkClientId",subjectMetadata:{"npm:@test/test-snap":{name:"Test Snap",version:"1.0.0"}},tokenList:{},accounts:_storybook_test_data__WEBPACK_IMPORTED_MODULE_5__.Z.metamask.accounts,identities:_storybook_test_data__WEBPACK_IMPORTED_MODULE_5__.Z.metamask.identities,internalAccounts:_storybook_test_data__WEBPACK_IMPORTED_MODULE_5__.Z.metamask.internalAccounts,accountsByChainId:_storybook_test_data__WEBPACK_IMPORTED_MODULE_5__.Z.metamask.accountsByChainId}};function PendingApproval(param){var children=param.children,requestData=param.requestData,type=param.type,mockState=_object_spread({},STORE_MOCK),pendingApproval=mockState.metamask.pendingApprovals.testId;return pendingApproval.type=type,pendingApproval.requestData=requestData,react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.zt,{store:(0,_store_store__WEBPACK_IMPORTED_MODULE_4__.Z)(mockState)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_component_library__WEBPACK_IMPORTED_MODULE_6__.xu,{style:{height:"592px",width:"360px",border:"1px solid lightgrey",margin:"0 auto"}},children))}}}]);