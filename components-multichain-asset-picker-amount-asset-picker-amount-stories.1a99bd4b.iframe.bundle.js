"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[62002],{"./ui/components/multichain/asset-picker-amount/asset-picker-amount.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,ErrorStory:()=>ErrorStory,FungibleTokenStory:()=>FungibleTokenStory,LongFungibleTokenStory:()=>LongFungibleTokenStory,NFTStory:()=>NFTStory,TokenStory:()=>TokenStory,TokenStoryWithLargeNameAndValue:()=>TokenStoryWithLargeNameAndValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_store_store__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/store/store.ts"),_ducks_send__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/ducks/send/index.js"),_shared_constants_transaction__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./shared/constants/transaction.ts"),_test_data_mock_state_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./test/data/mock-state.json"),_asset_picker_amount__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/components/multichain/asset-picker-amount/asset-picker-amount.tsx"),_helpers_constants_error_keys__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ui/helpers/constants/error-keys.js"),_test_stub_networks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./test/stub/networks.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var noop=function(){};let __WEBPACK_DEFAULT_EXPORT__={title:"Components/Multichain/AssetPickerAmount",component:_asset_picker_amount__WEBPACK_IMPORTED_MODULE_6__.J};var store=(0,_store_store__WEBPACK_IMPORTED_MODULE_2__.A)(_object_spread_props(_object_spread({},_test_data_mock_state_json__WEBPACK_IMPORTED_MODULE_5__),{metamask:_object_spread_props(_object_spread(_object_spread_props(_object_spread({},_test_data_mock_state_json__WEBPACK_IMPORTED_MODULE_5__.metamask),{currentCurrency:"usd",currencyRates:{ETH:{conversionRate:231.06}},marketData:_object_spread_props(_object_spread({},_test_data_mock_state_json__WEBPACK_IMPORTED_MODULE_5__.metamask.marketData),{"0x1":_object_spread_props(_object_spread({},_test_data_mock_state_json__WEBPACK_IMPORTED_MODULE_5__.metamask.marketData["0x1"]),{"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e":{price:.01}})}),tokens:[{address:"0x0000000000000000000000000000000000000000",symbol:"TEST",decimals:"6"},{address:"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",symbol:"TEST",decimals:"6"},{address:"0xd8f6a2ffb0fc5952d16c9768b71cfd35b6399aa5",decimals:"8",symbol:"TEST2"},{address:"0x617b3f8050a0bd94b6b1da02b4384ee5b4df13f4",symbol:"META",decimals:"18"}]}),(0,_test_stub_networks__WEBPACK_IMPORTED_MODULE_7__.gX)({chainId:"0x1"})),{preferences:{showFiatInTestnets:!0},useCurrencyRateCheck:!0}),send:_object_spread_props(_object_spread({},_test_data_mock_state_json__WEBPACK_IMPORTED_MODULE_5__.send),{selectedAccount:{address:"0x0",balance:"0x1"},currentTransactionUUID:"1-tx",draftTransactions:{"1-tx":{amount:{error:null,value:"0xde0b6b3a7640000"},sendAsset:{balance:"0x1158e460913d00000",details:null,error:null,type:"NATIVE"},receiveAsset:{balance:"0x1158e460913d00000",details:null,error:null,type:"NATIVE"},fromAccount:null,gas:{error:null,gasLimit:"0x5208",gasPrice:"0x0",gasTotal:"0x1ca62a544678",maxFeePerGas:"0x59682f0f",maxPriorityFeePerGas:"0x59682f00",wasManuallyEdited:!1},history:[],id:null,recipient:{address:"0xec1adf982415d2ef5ec55899b9bfb8bc0f29251b",error:null,nickname:"Account 2",warning:null,type:"",recipientWarningAcknowledged:!1},status:"VALID",transactionType:"0x2",userInputHexData:null}}})})),DefaultStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"400px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_asset_picker_amount__WEBPACK_IMPORTED_MODULE_6__.J,{onAmountChange:function(newAmount){store.dispatch((0,_ducks_send__WEBPACK_IMPORTED_MODULE_3__.gk)(newAmount))},onAssetChange:noop,amount:{value:"100"},asset:{type:_shared_constants_transaction__WEBPACK_IMPORTED_MODULE_4__.PW.native,balance:"100"}}))};DefaultStory.storyName="Default",DefaultStory.decorators=[function(story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Kq,{store:store},story())}];var TokenStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"400px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_asset_picker_amount__WEBPACK_IMPORTED_MODULE_6__.J,{onAmountChange:function(newAmount){return store.dispatch((0,_ducks_send__WEBPACK_IMPORTED_MODULE_3__.gk)(newAmount))},onAssetChange:noop,amount:{value:"0xff"},asset:{type:_shared_constants_transaction__WEBPACK_IMPORTED_MODULE_4__.PW.token,balance:"0xfff",details:{address:"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",symbol:"YFI"}}})," ")};TokenStory.storyName="ERC20 Token",TokenStory.decorators=[function(story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Kq,{store:store},story())}];var FungibleTokenStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"400px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_asset_picker_amount__WEBPACK_IMPORTED_MODULE_6__.J,{onAmountChange:function(newAmount){return store.dispatch((0,_ducks_send__WEBPACK_IMPORTED_MODULE_3__.gk)(newAmount))},onAssetChange:noop,amount:{value:"0xff"},asset:{type:_shared_constants_transaction__WEBPACK_IMPORTED_MODULE_4__.PW.NFT,balance:"0xfff",details:{address:"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",symbol:"BAYC",isERC721:!0,tokenId:1,standard:"ERC721"}}})," ")};FungibleTokenStory.storyName="ERC721 Token",FungibleTokenStory.decorators=[function(story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Kq,{store:store},story())}];var LongFungibleTokenStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"400px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_asset_picker_amount__WEBPACK_IMPORTED_MODULE_6__.J,{onAmountChange:function(newAmount){return store.dispatch((0,_ducks_send__WEBPACK_IMPORTED_MODULE_3__.gk)(newAmount))},onAssetChange:noop,amount:{value:"0xff"},asset:{type:_shared_constants_transaction__WEBPACK_IMPORTED_MODULE_4__.PW.NFT,balance:"0xfff",details:{address:"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",symbol:"BAYCBAYCBAYCBAYCBAYCBAYCBAYC BAYCBAYCBAYCBAYCBAYCBAYCBAYCBAYCBAYC",isERC721:!0,tokenId:1,standard:"ERC721"}}})," ")};LongFungibleTokenStory.storyName="Long ERC721 Token",LongFungibleTokenStory.decorators=[function(story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Kq,{store:store},story())}];var NFTStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"400px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_asset_picker_amount__WEBPACK_IMPORTED_MODULE_6__.J,{onAmountChange:function(newAmount){return store.dispatch((0,_ducks_send__WEBPACK_IMPORTED_MODULE_3__.gk)(newAmount))},onAssetChange:noop,amount:{value:"0xff"},asset:{type:_shared_constants_transaction__WEBPACK_IMPORTED_MODULE_4__.PW.NFT,balance:"0xfff",details:{address:"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",symbol:"BAYC",isERC721:!1,tokenId:1}}})," ")};NFTStory.storyName="ERC1155 Token",NFTStory.decorators=[function(story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Kq,{store:store},story())}];var TokenStoryWithLargeNameAndValue=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"400px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_asset_picker_amount__WEBPACK_IMPORTED_MODULE_6__.J,{onAmountChange:function(newAmount){return store.dispatch((0,_ducks_send__WEBPACK_IMPORTED_MODULE_3__.gk)(newAmount))},onAssetChange:noop,amount:{value:"0x1ED09BEAD87C0378D8E6400000000"},asset:{type:_shared_constants_transaction__WEBPACK_IMPORTED_MODULE_4__.PW.token,balance:"0x1ED0",details:{address:"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",symbol:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",isERC721:!1,standard:"ERC1155"}}}))};TokenStoryWithLargeNameAndValue.storyName="ERC20 Token with large name and value",TokenStoryWithLargeNameAndValue.decorators=[function(story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Kq,{store:store},story())}];var ErrorStory=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"400px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_asset_picker_amount__WEBPACK_IMPORTED_MODULE_6__.J,{onAmountChange:function(newAmount){return store.dispatch((0,_ducks_send__WEBPACK_IMPORTED_MODULE_3__.gk)(newAmount))},onAssetChange:noop,amount:{error:_helpers_constants_error_keys__WEBPACK_IMPORTED_MODULE_8__.uo,value:"100"},asset:{type:_shared_constants_transaction__WEBPACK_IMPORTED_MODULE_4__.PW.native,balance:"0"}})," ")};ErrorStory.storyName="Error",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '400px'
}}>
    <AssetPickerAmount onAmountChange={(newAmount: string) => {
    store.dispatch(updateSendAmount(newAmount));
  }} onAssetChange={noop} amount={{
    value: '100'
  }} asset={{
    type: AssetType.native,
    balance: '100'
  }} />
  </div>`,...DefaultStory.parameters?.docs?.source}}},TokenStory.parameters={...TokenStory.parameters,docs:{...TokenStory.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '400px'
}}>
    <AssetPickerAmount onAmountChange={(newAmount: string) => store.dispatch(updateSendAmount(newAmount))} onAssetChange={noop} amount={{
    value: '0xff'
  }} asset={{
    type: AssetType.token,
    balance: '0xfff',
    details: {
      address: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
      symbol: 'YFI'
    }
  }} />{' '}
  </div>`,...TokenStory.parameters?.docs?.source}}},FungibleTokenStory.parameters={...FungibleTokenStory.parameters,docs:{...FungibleTokenStory.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '400px'
}}>
    <AssetPickerAmount onAmountChange={(newAmount: string) => store.dispatch(updateSendAmount(newAmount))} onAssetChange={noop} amount={{
    value: '0xff'
  }} asset={{
    type: AssetType.NFT,
    balance: '0xfff',
    details: {
      address: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
      symbol: 'BAYC',
      isERC721: true,
      tokenId: 1,
      standard: 'ERC721'
    }
  }} />{' '}
  </div>`,...FungibleTokenStory.parameters?.docs?.source}}},LongFungibleTokenStory.parameters={...LongFungibleTokenStory.parameters,docs:{...LongFungibleTokenStory.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '400px'
}}>
    <AssetPickerAmount onAmountChange={(newAmount: string) => store.dispatch(updateSendAmount(newAmount))} onAssetChange={noop} amount={{
    value: '0xff'
  }} asset={{
    type: AssetType.NFT,
    balance: '0xfff',
    details: {
      address: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
      symbol: 'BAYCBAYCBAYCBAYCBAYCBAYCBAYC BAYCBAYCBAYCBAYCBAYCBAYCBAYCBAYCBAYC',
      isERC721: true,
      tokenId: 1,
      standard: 'ERC721'
    }
  }} />{' '}
  </div>`,...LongFungibleTokenStory.parameters?.docs?.source}}},NFTStory.parameters={...NFTStory.parameters,docs:{...NFTStory.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '400px'
}}>
    <AssetPickerAmount onAmountChange={(newAmount: string) => store.dispatch(updateSendAmount(newAmount))} onAssetChange={noop} amount={{
    value: '0xff'
  }} asset={{
    type: AssetType.NFT,
    balance: '0xfff',
    details: {
      address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      symbol: 'BAYC',
      isERC721: false,
      tokenId: 1
    }
  }} />{' '}
  </div>`,...NFTStory.parameters?.docs?.source}}},TokenStoryWithLargeNameAndValue.parameters={...TokenStoryWithLargeNameAndValue.parameters,docs:{...TokenStoryWithLargeNameAndValue.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '400px'
}}>
    <AssetPickerAmount onAmountChange={(newAmount: string) => store.dispatch(updateSendAmount(newAmount))} onAssetChange={noop} amount={{
    value: '0x1ED09BEAD87C0378D8E6400000000'
  }} asset={{
    type: AssetType.token,
    balance: '0x1ED0',
    details: {
      address: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
      symbol: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      isERC721: false,
      standard: 'ERC1155'
    }
  }} />
  </div>`,...TokenStoryWithLargeNameAndValue.parameters?.docs?.source}}},ErrorStory.parameters={...ErrorStory.parameters,docs:{...ErrorStory.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '400px'
}}>
    <AssetPickerAmount onAmountChange={(newAmount: string) => store.dispatch(updateSendAmount(newAmount))} onAssetChange={noop} amount={{
    error: INSUFFICIENT_FUNDS_ERROR_KEY,
    value: '100'
  }} asset={{
    type: AssetType.native,
    balance: '0'
  }} />{' '}
  </div>`,...ErrorStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","TokenStory","FungibleTokenStory","LongFungibleTokenStory","NFTStory","TokenStoryWithLargeNameAndValue","ErrorStory"]}}]);
//# sourceMappingURL=components-multichain-asset-picker-amount-asset-picker-amount-stories.1a99bd4b.iframe.bundle.js.map