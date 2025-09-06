"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[81476],{"./ui/components/multichain-accounts/multichain-site-cell/avatar-group/multichain-avatar-group.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EmptyGroup:()=>EmptyGroup,HighLimit:()=>HighLimit,ManyMembers:()=>ManyMembers,NoSymbols:()=>NoSymbols,SingleMember:()=>SingleMember,WithCustomClassName:()=>WithCustomClassName,WithLimit:()=>WithLimit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_multichain_avatar_group__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/multichain-accounts/multichain-site-cell/avatar-group/multichain-avatar-group.tsx"),mockAvatar1={avatarValue:"0x0dcd5d886577d5081b0c52e242ef29e70be3e7bc",symbol:"ETH"},mockAvatar2={avatarValue:"0x123456789abcdef0123456789abcdef012345678",symbol:"MATIC"},mockAvatar3={avatarValue:"0xabcdef1234567890abcdef1234567890abcdef12",symbol:"BNB"};let __WEBPACK_DEFAULT_EXPORT__={title:"Components/MultichainAccounts/MultichainAccountAvatarGroup",component:_multichain_avatar_group__WEBPACK_IMPORTED_MODULE_1__.W,parameters:{docs:{description:{component:"A component that displays a group of account avatars with configurable limits and styling"}}},argTypes:{className:{control:"text",description:"Additional CSS class name for styling"},limit:{control:{type:"number",min:1,max:10},description:"Maximum number of avatars to display"},members:{control:"object",description:"Array of member objects with avatarValue and optional symbol"}}};var Template=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"300px",height:"100px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid #ccc",borderRadius:"8px",padding:"16px",backgroundColor:"#f5f5f5"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_multichain_avatar_group__WEBPACK_IMPORTED_MODULE_1__.W,args))},Default=Template.bind({});Default.args={members:[mockAvatar1,mockAvatar2,mockAvatar3]};var WithLimit=Template.bind({});WithLimit.args={members:[mockAvatar1,mockAvatar2,mockAvatar3,{avatarValue:"0x987654321fedcba0987654321fedcba0987654321",symbol:"USDC"},{avatarValue:"0x5555555555555555555555555555555555555555",symbol:"DAI"}],limit:3};var ManyMembers=Template.bind({});ManyMembers.args={members:Array.from({length:10},function(_,index){return{avatarValue:"0x".concat(index.toString().padStart(40,"0")),symbol:"TOKEN".concat(index)}}),limit:4};var SingleMember=Template.bind({});SingleMember.args={members:[mockAvatar1]};var NoSymbols=Template.bind({});NoSymbols.args={members:[{avatarValue:mockAvatar1.avatarValue},{avatarValue:mockAvatar2.avatarValue},{avatarValue:mockAvatar3.avatarValue}]};var EmptyGroup=Template.bind({});EmptyGroup.args={members:[]};var WithCustomClassName=Template.bind({});WithCustomClassName.args={members:[mockAvatar1,mockAvatar2,mockAvatar3],className:"custom-avatar-group-class"};var HighLimit=Template.bind({});HighLimit.args={members:[mockAvatar1,mockAvatar2,mockAvatar3],limit:10},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:`args => <div style={{
  width: '300px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: '#f5f5f5'
}}>
    <MultichainAccountAvatarGroup {...args} />
  </div>`,...Default.parameters?.docs?.source}}},WithLimit.parameters={...WithLimit.parameters,docs:{...WithLimit.parameters?.docs,source:{originalSource:`args => <div style={{
  width: '300px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: '#f5f5f5'
}}>
    <MultichainAccountAvatarGroup {...args} />
  </div>`,...WithLimit.parameters?.docs?.source}}},ManyMembers.parameters={...ManyMembers.parameters,docs:{...ManyMembers.parameters?.docs,source:{originalSource:`args => <div style={{
  width: '300px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: '#f5f5f5'
}}>
    <MultichainAccountAvatarGroup {...args} />
  </div>`,...ManyMembers.parameters?.docs?.source}}},SingleMember.parameters={...SingleMember.parameters,docs:{...SingleMember.parameters?.docs,source:{originalSource:`args => <div style={{
  width: '300px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: '#f5f5f5'
}}>
    <MultichainAccountAvatarGroup {...args} />
  </div>`,...SingleMember.parameters?.docs?.source}}},NoSymbols.parameters={...NoSymbols.parameters,docs:{...NoSymbols.parameters?.docs,source:{originalSource:`args => <div style={{
  width: '300px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: '#f5f5f5'
}}>
    <MultichainAccountAvatarGroup {...args} />
  </div>`,...NoSymbols.parameters?.docs?.source}}},EmptyGroup.parameters={...EmptyGroup.parameters,docs:{...EmptyGroup.parameters?.docs,source:{originalSource:`args => <div style={{
  width: '300px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: '#f5f5f5'
}}>
    <MultichainAccountAvatarGroup {...args} />
  </div>`,...EmptyGroup.parameters?.docs?.source}}},WithCustomClassName.parameters={...WithCustomClassName.parameters,docs:{...WithCustomClassName.parameters?.docs,source:{originalSource:`args => <div style={{
  width: '300px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: '#f5f5f5'
}}>
    <MultichainAccountAvatarGroup {...args} />
  </div>`,...WithCustomClassName.parameters?.docs?.source}}},HighLimit.parameters={...HighLimit.parameters,docs:{...HighLimit.parameters?.docs,source:{originalSource:`args => <div style={{
  width: '300px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: '#f5f5f5'
}}>
    <MultichainAccountAvatarGroup {...args} />
  </div>`,...HighLimit.parameters?.docs?.source}}};let __namedExportsOrder=["Default","WithLimit","ManyMembers","SingleMember","NoSymbols","EmptyGroup","WithCustomClassName","HighLimit"]},"./ui/components/multichain-accounts/multichain-site-cell/avatar-group/multichain-avatar-group.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>MultichainAccountAvatarGroup});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_component_library__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/index.ts"),MultichainAccountAvatarGroup=function(param){var _param_className=param.className,_param_limit=param.limit,_param_members=param.members,visibleMembers=(void 0===_param_members?[]:_param_members).slice(0,void 0===_param_limit?4:_param_limit).reverse();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.az,{alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.k2.center,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.nl.Flex,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("multichain-avatar-group",void 0===_param_className?"":_param_className),"data-testid":"avatar-group",gap:1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.az,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.nl.Flex,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.k2.center,gap:1},visibleMembers.map(function(member,i){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.az,{borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Z6.full,key:i},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.vs,{"data-testid":"avatar-account-".concat(i),size:_component_library__WEBPACK_IMPORTED_MODULE_3__.oG.Xs,address:member.avatarValue,variant:_component_library__WEBPACK_IMPORTED_MODULE_3__.Uj.Blockies}))})))};try{MultichainAccountAvatarGroup.displayName="MultichainAccountAvatarGroup",MultichainAccountAvatarGroup.__docgenInfo={description:"",displayName:"MultichainAccountAvatarGroup",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},limit:{defaultValue:{value:"4"},description:"",name:"limit",required:!1,type:{name:"number"}},members:{defaultValue:{value:"[]"},description:"",name:"members",required:!1,type:{name:"{ avatarValue: string; symbol?: string; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/multichain-accounts/multichain-site-cell/avatar-group/multichain-avatar-group.tsx#MultichainAccountAvatarGroup"]={docgenInfo:MultichainAccountAvatarGroup.__docgenInfo,name:"MultichainAccountAvatarGroup",path:"ui/components/multichain-accounts/multichain-site-cell/avatar-group/multichain-avatar-group.tsx#MultichainAccountAvatarGroup"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-multichain-accounts-multichain-site-cell-avatar-group-multichain-avatar-group-stories.0b362e29.iframe.bundle.js.map