"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[10675],{"./node_modules/@metamask/account-api/dist/index.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var AccountGroupType,wallet_AccountWalletType,AccountGroupType1,AccountWalletType;__webpack_require__.d(__webpack_exports__,{Bp:()=>AccountGroupType,ZG:()=>wallet_AccountWalletType,TK:()=>parseAccountGroupId,TQ:()=>toAccountWalletId}),(AccountGroupType1=AccountGroupType||(AccountGroupType={})).MultichainAccount="multichain-account",AccountGroupType1.SingleAccount="single-account";let ACCOUNT_GROUP_ID_REGEX=/^(?<walletId>(?<walletType>entropy|snap|keyring):(?<walletSubId>.+))\/(?<groupSubId>[^/]+)$/u;function parseAccountGroupId(groupId){let match=ACCOUNT_GROUP_ID_REGEX.exec(groupId);if(!match?.groups)throw Error(`Invalid account group ID: "${groupId}"`);let walletId=match.groups.walletId;return{wallet:{id:walletId,type:match.groups.walletType,subId:match.groups.walletSubId},subId:match.groups.groupSubId}}function toAccountWalletId(type,id){return`${type}:${id}`}(AccountWalletType=wallet_AccountWalletType||(wallet_AccountWalletType={})).Entropy="entropy",AccountWalletType.Keyring="keyring",AccountWalletType.Snap="snap",__webpack_require__("./node_modules/@metamask/keyring-utils/dist/index.mjs")},"./ui/components/multichain-accounts/multichain-account-menu/multichain-account-menu.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,RemovableAccount:()=>RemovableAccount,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Components/MultichainAccounts/MultichainAccountMenu",component:__webpack_require__("./ui/components/multichain-accounts/multichain-account-menu/multichain-account-menu.tsx").x,parameters:{backgrounds:{default:"light"},docs:{description:{component:"A menu component for multichain accounts that displays a popover when clicked."}}},argTypes:{isRemovable:{control:"boolean",description:"Whether the account is removable. When true, a remove option appears in the menu."},accountGroupId:{control:"text",description:"ID of an account group"}},decorators:[function(Story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{padding:"50px",display:"flex",justifyContent:"center"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"300px",border:"1px solid #ccc",padding:"16px",borderRadius:"8px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",{style:{marginTop:0,marginBottom:"16px"}},"Account Options"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{style:{marginTop:"16px",fontSize:"12px",color:"#666"}},"Click the icon to toggle menu options")))}]};var Default={args:{accountGroupId:"entropy:01JKAF3DSGM3AB87EM9N0K41AJ/0",isRemovable:!1},parameters:{docs:{description:{story:"Default state of MultichainAccountMenu with non-removable account. The menu will not include a remove option."}}}},RemovableAccount={args:{accountGroupId:"entropy:01JKAF3DSGM3AB87EM9N0K41AJ/0",isRemovable:!0},parameters:{docs:{description:{story:"MultichainAccountMenu with a removable account. The menu includes a remove option highlighted in error color."}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:`{
  args: {
    accountGroupId: 'entropy:01JKAF3DSGM3AB87EM9N0K41AJ/0',
    isRemovable: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Default state of MultichainAccountMenu with non-removable account. The menu will not include a remove option.'
      }
    }
  }
}`,...Default.parameters?.docs?.source}}},RemovableAccount.parameters={...RemovableAccount.parameters,docs:{...RemovableAccount.parameters?.docs,source:{originalSource:`{
  args: {
    accountGroupId: 'entropy:01JKAF3DSGM3AB87EM9N0K41AJ/0',
    isRemovable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'MultichainAccountMenu with a removable account. The menu includes a remove option highlighted in error color.'
      }
    }
  }
}`,...RemovableAccount.parameters?.docs?.source}}};let __namedExportsOrder=["Default","RemovableAccount"]}}]);
//# sourceMappingURL=components-multichain-accounts-multichain-account-menu-multichain-account-menu-stories.ab5fddb5.iframe.bundle.js.map