"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[70147],{"./ui/components/multichain-accounts/multichain-account-menu-items/multichain-account-menu-items.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithCustomTextColor:()=>WithCustomTextColor,WithDisabledItems:()=>WithDisabledItems,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_component_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__={title:"Components/MultichainAccounts/MultichainAccountMenuItems",component:__webpack_require__("./ui/components/multichain-accounts/multichain-account-menu-items/multichain-account-menu-items.tsx").N,parameters:{backgrounds:{default:"light"},docs:{description:{component:"A menu items component for displaying a list of configurable menu options."}}},argTypes:{menuConfig:{description:"Configuration array for menu items",control:"object"}},decorators:[function(Story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{padding:"20px",maxWidth:"300px",border:"1px solid #eee",borderRadius:"8px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}]};var defaultMenuConfig=[{textKey:"accountDetails",iconName:_component_library__WEBPACK_IMPORTED_MODULE_2__.$M.Details,onClick:function(){return console.log("Account details clicked")}},{textKey:"rename",iconName:_component_library__WEBPACK_IMPORTED_MODULE_2__.$M.Edit,onClick:function(){return console.log("Rename clicked")}},{textKey:"pin",iconName:_component_library__WEBPACK_IMPORTED_MODULE_2__.$M.Pin,onClick:function(){return console.log("Pin clicked")}}],Default={args:{menuConfig:defaultMenuConfig},parameters:{docs:{description:{story:"Default state of MultichainAccountMenuItems with standard menu options."}}}},WithDisabledItems={args:{menuConfig:[{textKey:"accountDetails",iconName:_component_library__WEBPACK_IMPORTED_MODULE_2__.$M.Details,onClick:function(){return console.log("Account details clicked")}},{textKey:"rename",iconName:_component_library__WEBPACK_IMPORTED_MODULE_2__.$M.Edit,onClick:function(){return console.log("Rename clicked")},disabled:!0},{textKey:"pin",iconName:_component_library__WEBPACK_IMPORTED_MODULE_2__.$M.Pin,onClick:function(){return console.log("Pin clicked")}}]},parameters:{docs:{description:{story:"MultichainAccountMenuItems with some disabled options. Disabled items have reduced opacity and are non-clickable."}}}},WithCustomTextColor={args:{menuConfig:_to_consumable_array(defaultMenuConfig).concat([{textKey:"remove",iconName:_component_library__WEBPACK_IMPORTED_MODULE_2__.$M.Trash,onClick:function(){return console.log("Remove clicked")},textColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_1__.r7.errorDefault}])},parameters:{docs:{description:{story:"MultichainAccountMenuItems with a custom text color for certain options, such as using an error color for destructive actions."}}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:`{
  args: {
    menuConfig: defaultMenuConfig
  },
  parameters: {
    docs: {
      description: {
        story: 'Default state of MultichainAccountMenuItems with standard menu options.'
      }
    }
  }
}`,...Default.parameters?.docs?.source}}},WithDisabledItems.parameters={...WithDisabledItems.parameters,docs:{...WithDisabledItems.parameters?.docs,source:{originalSource:`{
  args: {
    menuConfig: [{
      textKey: 'accountDetails',
      iconName: IconName.Details,
      onClick: () => console.log('Account details clicked')
    }, {
      textKey: 'rename',
      iconName: IconName.Edit,
      onClick: () => console.log('Rename clicked'),
      disabled: true
    }, {
      textKey: 'pin',
      iconName: IconName.Pin,
      onClick: () => console.log('Pin clicked')
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'MultichainAccountMenuItems with some disabled options. Disabled items have reduced opacity and are non-clickable.'
      }
    }
  }
}`,...WithDisabledItems.parameters?.docs?.source}}},WithCustomTextColor.parameters={...WithCustomTextColor.parameters,docs:{...WithCustomTextColor.parameters?.docs,source:{originalSource:`{
  args: {
    menuConfig: [...defaultMenuConfig, {
      textKey: 'remove',
      iconName: IconName.Trash,
      onClick: () => console.log('Remove clicked'),
      textColor: TextColor.errorDefault
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'MultichainAccountMenuItems with a custom text color for certain options, such as using an error color for destructive actions.'
      }
    }
  }
}`,...WithCustomTextColor.parameters?.docs?.source}}};let __namedExportsOrder=["Default","WithDisabledItems","WithCustomTextColor"]},"./ui/components/multichain-accounts/multichain-account-menu-items/multichain-account-menu-items.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>MultichainAccountMenuItems});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_component_library__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/index.ts"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/hooks/useI18nContext.js"),MultichainAccountMenuItems=function(param){var menuConfig=param.menuConfig,t=(0,_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_4__.P)(),menuItems=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return menuConfig.map(function(item,index,menuConfigurations){var isLast=index===menuConfigurations.length-1,isDisabled=!!item.disabled;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.az,{key:item.textKey,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("multichain-account-cell-menu-item",{"multichain-account-cell-menu-item--with-border":!isLast,"multichain-account-cell-menu-item--disabled":isDisabled,"multichain-account-cell-menu-item--enabled":!isDisabled}),paddingLeft:8,paddingRight:4,paddingTop:3,paddingBottom:3,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.nl.Flex,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.A9.spaceBetween,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.k2.center,onClick:item.onClick},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.EY,{fontWeight:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.IT.Medium,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.J3.bodyMdMedium,color:item.textColor},t(item.textKey)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_2__.In,{name:item.iconName,size:_component_library__WEBPACK_IMPORTED_MODULE_2__.lK.Md}))})},[menuConfig,t]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,menuItems)};try{MultichainAccountMenuItems.displayName="MultichainAccountMenuItems",MultichainAccountMenuItems.__docgenInfo={description:"",displayName:"MultichainAccountMenuItems",props:{menuConfig:{defaultValue:null,description:"Configuration array for menu items.",name:"menuConfig",required:!0,type:{name:"MenuItemConfig[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/multichain-accounts/multichain-account-menu-items/multichain-account-menu-items.tsx#MultichainAccountMenuItems"]={docgenInfo:MultichainAccountMenuItems.__docgenInfo,name:"MultichainAccountMenuItems",path:"ui/components/multichain-accounts/multichain-account-menu-items/multichain-account-menu-items.tsx#MultichainAccountMenuItems"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-multichain-accounts-multichain-account-menu-items-multichain-account-menu-items-stories.90c96e35.iframe.bundle.js.map