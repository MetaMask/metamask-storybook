"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[46460],{"./ui/pages/confirmations/confirmation/stories/success.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomMessageStory:()=>CustomMessageStory,DefaultStory:()=>DefaultStory,TemplateOnlyStory:()=>TemplateOnlyStory,TemplateStory:()=>TemplateStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_metamask_controller_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@metamask/controller-utils/dist/constants.mjs"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/lodash.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_components_component_library__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/index.ts"),_confirmation__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/pages/confirmations/confirmation/confirmation.js"),_util__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/pages/confirmations/confirmation/stories/util.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let __WEBPACK_DEFAULT_EXPORT__={title:"Pages/ConfirmationPage/ResultSuccess",component:_confirmation__WEBPACK_IMPORTED_MODULE_4__.A,argTypes:{redirectToHomeOnZeroConfirmations:{table:{disable:!0}},message:{control:"text",description:"The message text in the center of the page under the title.<br/><br/>Also supports result component configurations.<br/>See `header` argument for example.",table:{defaultValue:{summary:"The operation completed successfully."}}},title:{control:"text",description:"The title text in the center of the page.<br/>Can be hidden with `null`.",table:{defaultValue:{summary:"Success"}}},icon:{control:"text",description:"The name of the icon.<br/>Can be hidden with `null`.",table:{defaultValue:{summary:"confirmation"}}},header:{control:"array",description:'An array of result component configurations to be rendered at the top of the page. For example: ```[{"name": "SnapAuthorshipHeader", "key": "snapHeader", "properties": { "snapId": "npm:@test/test-snap" }}]```',table:{defaultValue:{summary:"[]"}}},flowToEnd:{control:"text",description:"The ID of an approval flow to end once this success confirmation is confirmed."}},args:{},parameters:{docs:{description:{component:`A standard success confirmation to be reused across confirmation flows with minimal code.<br/><br/>
Automatically displayed via the \`ConfirmationPage\` component when using the \`ApprovalController.success\` method.<br/><br/>
The below arguments are properties in the \`ApprovalController.success\` request.`}}}};var DefaultStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util__WEBPACK_IMPORTED_MODULE_5__.v,{type:_metamask_controller_utils__WEBPACK_IMPORTED_MODULE_6__.s.ResultSuccess,requestData:_object_spread_props(_object_spread({},args),{header:(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isArray)(args.header)?args.header:void 0})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_confirmation__WEBPACK_IMPORTED_MODULE_4__.A,null))};DefaultStory.storyName="Default";var CustomMessageStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util__WEBPACK_IMPORTED_MODULE_5__.v,{type:_metamask_controller_utils__WEBPACK_IMPORTED_MODULE_6__.s.ResultSuccess,requestData:{message:"Custom Message"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_confirmation__WEBPACK_IMPORTED_MODULE_4__.A,null))};CustomMessageStory.storyName="Custom Message";var TemplateStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util__WEBPACK_IMPORTED_MODULE_5__.v,{type:_metamask_controller_utils__WEBPACK_IMPORTED_MODULE_6__.s.ResultSuccess,requestData:{title:"Account created",icon:_components_component_library__WEBPACK_IMPORTED_MODULE_3__.$M.UserCircleAdd,message:[{name:"Box",key:"container",properties:{style:{minWidth:"100%",borderRadius:"10px",boxShadow:"var(--shadow-size-lg) var(--color-shadow-default)"},key:"snapAccountSuccessMessage"},children:[{name:"AccountListItem",key:"accountListItem",properties:{account:{address:"0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc",id:"cf8dace4-9439-4bd4-b3a8-88c821c8fcb3",metadata:{name:"Test Account",keyring:{type:"HD Key Tree"}},options:{},methods:["personal_sign","eth_signTransaction","eth_signTypedData_v1","eth_signTypedData_v3","eth_signTypedData_v4"],type:"eip155:eoa",keyring:"HD Key Tree",label:null,name:"Test Account"}}}]},{name:"Box",key:"description",properties:{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.nl.Flex,style:{fontSize:"14px",gap:"5px"}},children:["Your new account is ready to use.",{name:"a",key:"link",properties:{href:"https://consensys.com",target:"__blank"},children:"Learn more"}]}],header:[{name:"SnapAuthorshipHeader",key:"snapAccountSuccessMessage",properties:{snapId:"npm:@test/test-snap"}}]}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_confirmation__WEBPACK_IMPORTED_MODULE_4__.A,null))};TemplateStory.storyName="Templates + Custom Icon + Custom Title";var TemplateOnlyStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util__WEBPACK_IMPORTED_MODULE_5__.v,{type:_metamask_controller_utils__WEBPACK_IMPORTED_MODULE_6__.s.ResultSuccess,requestData:{message:{name:"AccountListItem",key:"accountListItem",properties:{account:{address:"0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc",id:"cf8dace4-9439-4bd4-b3a8-88c821c8fcb3",metadata:{name:"Test Account",keyring:{type:"HD Key Tree"}},options:{},methods:["personal_sign","eth_signTransaction","eth_signTypedData_v1","eth_signTypedData_v3","eth_signTypedData_v4"],scopes:["eip155:0"],type:"eip155:eoa",keyring:"HD Key Tree",label:null,balance:"0xFFFFFFFFFFFFFFFFFF"}}},icon:null,title:null}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_confirmation__WEBPACK_IMPORTED_MODULE_4__.A,null))};TemplateOnlyStory.storyName="Template Only",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  return <PendingApproval type={ApprovalType.ResultSuccess} requestData={{
    ...args,
    header: isArray(args.header) ? args.header : undefined
  }}>
      <ConfirmationPage />
    </PendingApproval>;
}`,...DefaultStory.parameters?.docs?.source}}},CustomMessageStory.parameters={...CustomMessageStory.parameters,docs:{...CustomMessageStory.parameters?.docs,source:{originalSource:`() => {
  return <PendingApproval type={ApprovalType.ResultSuccess} requestData={{
    message: 'Custom Message'
  }}>
      <ConfirmationPage />
    </PendingApproval>;
}`,...CustomMessageStory.parameters?.docs?.source}}},TemplateStory.parameters={...TemplateStory.parameters,docs:{...TemplateStory.parameters?.docs,source:{originalSource:`() => {
  return <PendingApproval type={ApprovalType.ResultSuccess} requestData={{
    title: 'Account created',
    icon: IconName.UserCircleAdd,
    message: [{
      name: 'Box',
      key: 'container',
      properties: {
        style: {
          minWidth: '100%',
          borderRadius: '10px',
          boxShadow: 'var(--shadow-size-lg) var(--color-shadow-default)'
        },
        key: 'snapAccountSuccessMessage'
      },
      children: [{
        name: 'AccountListItem',
        key: 'accountListItem',
        properties: {
          account: {
            address: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
            id: 'cf8dace4-9439-4bd4-b3a8-88c821c8fcb3',
            metadata: {
              name: 'Test Account',
              keyring: {
                type: 'HD Key Tree'
              }
            },
            options: {},
            methods: ['personal_sign', 'eth_signTransaction', 'eth_signTypedData_v1', 'eth_signTypedData_v3', 'eth_signTypedData_v4'],
            type: 'eip155:eoa',
            keyring: 'HD Key Tree',
            label: null,
            name: 'Test Account'
          }
        }
      }]
    }, {
      name: 'Box',
      key: 'description',
      properties: {
        display: Display.Flex,
        style: {
          fontSize: '14px',
          gap: '5px'
        }
      },
      children: ['Your new account is ready to use.', {
        name: 'a',
        key: 'link',
        properties: {
          href: 'https://consensys.com',
          target: '__blank'
        },
        children: 'Learn more'
      }]
    }],
    header: [{
      name: 'SnapAuthorshipHeader',
      key: 'snapAccountSuccessMessage',
      properties: {
        snapId: 'npm:@test/test-snap'
      }
    }]
  }}>
      <ConfirmationPage />
    </PendingApproval>;
}`,...TemplateStory.parameters?.docs?.source}}},TemplateOnlyStory.parameters={...TemplateOnlyStory.parameters,docs:{...TemplateOnlyStory.parameters?.docs,source:{originalSource:`() => {
  return <PendingApproval type={ApprovalType.ResultSuccess} requestData={{
    message: {
      name: 'AccountListItem',
      key: 'accountListItem',
      properties: {
        account: {
          address: '0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc',
          id: 'cf8dace4-9439-4bd4-b3a8-88c821c8fcb3',
          metadata: {
            name: 'Test Account',
            keyring: {
              type: 'HD Key Tree'
            }
          },
          options: {},
          methods: ['personal_sign', 'eth_signTransaction', 'eth_signTypedData_v1', 'eth_signTypedData_v3', 'eth_signTypedData_v4'],
          scopes: ['eip155:0'],
          type: 'eip155:eoa',
          keyring: 'HD Key Tree',
          label: null,
          balance: '0xFFFFFFFFFFFFFFFFFF'
        }
      }
    },
    icon: null,
    title: null
  }}>
      <ConfirmationPage />
    </PendingApproval>;
}`,...TemplateOnlyStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","CustomMessageStory","TemplateStory","TemplateOnlyStory"]}}]);
//# sourceMappingURL=pages-confirmations-confirmation-stories-success-stories.55ae9ae2.iframe.bundle.js.map