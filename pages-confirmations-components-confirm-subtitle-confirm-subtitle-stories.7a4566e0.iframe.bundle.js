"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[3341],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/pages/confirmations/components/confirm-subtitle/confirm-subtitle.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomSubTitleStory:()=>CustomSubTitleStory,DefaultStory:()=>DefaultStory,default:()=>confirm_subtitle_stories});var _DefaultStory_parameters,_DefaultStory_parameters_docs,_DefaultStory_parameters1,_CustomSubTitleStory_parameters,_CustomSubTitleStory_parameters_docs,_CustomSubTitleStory_parameters1,react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),mock_state=__webpack_require__("./test/data/mock-state.json"),store=__webpack_require__("./ui/store/store.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"confirm-sub-title",children:"Confirm Sub Title"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Confirm Sub Title is used on confirmation screen to display transaction amoutn in header."}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{children:(0,jsx_runtime.jsx)(dist.oG,{id:"components-app-ConfirmSubTitle--default-story"})})]})}__webpack_require__("./ui/pages/confirmations/components/confirm-subtitle/index.js");var confirm_subtitle_confirm_subtitle=__webpack_require__("./ui/pages/confirmations/components/confirm-subtitle/confirm-subtitle.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}mock_state.metamask.preferences.showFiatInTestnets=!0;var confirm_subtitle_stories_store=(0,store.Z)(mock_state);let confirm_subtitle_stories={title:"Confirmations/Components/ConfirmSubTitle",component:confirm_subtitle_confirm_subtitle.Z,decorators:[function(story){return react.createElement(es.zt,{store:confirm_subtitle_stories_store},story())}],parameters:{docs:{page:function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{txData:"object",hexTransactionAmount:"number",title:"string"},args:{txData:{txParams:{},type:"transfer"},hexTransactionAmount:"0x9184e72a000",subtitleComponent:void 0}};var DefaultStory=function(args){return react.createElement(confirm_subtitle_confirm_subtitle.Z,args)};DefaultStory.storyName="Default";var CustomSubTitleStory=function(args){return react.createElement(confirm_subtitle_confirm_subtitle.Z,args)};CustomSubTitleStory.storyName="CustomSubTitle",CustomSubTitleStory.args={subtitleComponent:"Any custom sub title passed"},DefaultStory.parameters=_object_spread_props(_object_spread({},DefaultStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_DefaultStory_parameters=DefaultStory.parameters)||void 0===_DefaultStory_parameters?void 0:_DefaultStory_parameters.docs),{source:_object_spread({originalSource:"args => {\n  return <ConfirmSubTitle {...args} />;\n}"},null===(_DefaultStory_parameters1=DefaultStory.parameters)||void 0===_DefaultStory_parameters1?void 0:null===(_DefaultStory_parameters_docs=_DefaultStory_parameters1.docs)||void 0===_DefaultStory_parameters_docs?void 0:_DefaultStory_parameters_docs.source)})}),CustomSubTitleStory.parameters=_object_spread_props(_object_spread({},CustomSubTitleStory.parameters),{docs:_object_spread_props(_object_spread({},null===(_CustomSubTitleStory_parameters=CustomSubTitleStory.parameters)||void 0===_CustomSubTitleStory_parameters?void 0:_CustomSubTitleStory_parameters.docs),{source:_object_spread({originalSource:"args => {\n  return <ConfirmSubTitle {...args} />;\n}"},null===(_CustomSubTitleStory_parameters1=CustomSubTitleStory.parameters)||void 0===_CustomSubTitleStory_parameters1?void 0:null===(_CustomSubTitleStory_parameters_docs=_CustomSubTitleStory_parameters1.docs)||void 0===_CustomSubTitleStory_parameters_docs?void 0:_CustomSubTitleStory_parameters_docs.source)})})},"./ui/components/app/user-preferenced-currency-display/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_user_preferenced_currency_display_component__WEBPACK_IMPORTED_MODULE_0__.Z});var _user_preferenced_currency_display_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/app/user-preferenced-currency-display/user-preferenced-currency-display.component.js")},"./ui/pages/confirmations/components/confirm-subtitle/confirm-subtitle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>confirm_subtitle});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),es=__webpack_require__("./node_modules/react-redux/es/index.js"),common=__webpack_require__("./ui/helpers/constants/common.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),transactions_util=__webpack_require__("./ui/helpers/utils/transactions.util.js"),selectors=__webpack_require__("./ui/selectors/index.js"),metamask=__webpack_require__("./ui/ducks/metamask/metamask.js"),string_utils=__webpack_require__("./shared/modules/string-utils.ts"),useTransactionInfo=function(){var _allNftContracts_selectedAddress_chainId,_allNftContracts_selectedAddress,txData=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_useSelector=(0,es.v9)(function(state){return state.metamask}),allNftContracts=_useSelector.allNftContracts,selectedAddress=_useSelector.selectedAddress,chainId=(0,es.v9)(metamask.Vu).chainId;return{isNftTransfer:!!(null==allNftContracts?void 0:null===(_allNftContracts_selectedAddress=allNftContracts[selectedAddress])||void 0===_allNftContracts_selectedAddress?void 0:null===(_allNftContracts_selectedAddress_chainId=_allNftContracts_selectedAddress[chainId])||void 0===_allNftContracts_selectedAddress_chainId?void 0:_allNftContracts_selectedAddress_chainId.find(function(contract){return(0,string_utils.J)(contract.address,txData.txParams.to)}))}},component_library=__webpack_require__("./ui/components/component-library/index.ts"),user_preferenced_currency_display=__webpack_require__("./ui/components/app/user-preferenced-currency-display/index.js"),ConfirmSubTitle=function(param){var txData=param.txData,hexTransactionAmount=param.hexTransactionAmount,subtitleComponent=param.subtitleComponent,assetStandard=param.assetStandard,shouldShowFiat=(0,es.v9)(selectors.i8I),isNftTransfer=useTransactionInfo(txData).isNftTransfer;return shouldShowFiat||isNftTransfer||(0,transactions_util.Tp)(assetStandard)?subtitleComponent||react.createElement(component_library.xv,{as:"h5",ellipsis:!0,variant:design_system.rK.bodyMd,color:design_system.Il.textAlternative},react.createElement(user_preferenced_currency_display.Z,{value:hexTransactionAmount,type:common.Vb,showEthLogo:!0,hideLabel:!0})):null};ConfirmSubTitle.propTypes={assetStandard:prop_types_default().string,hexTransactionAmount:prop_types_default().string,subtitleComponent:prop_types_default().element,txData:prop_types_default().object.isRequired};let confirm_subtitle=ConfirmSubTitle},"./ui/pages/confirmations/components/confirm-subtitle/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>_confirm_subtitle__WEBPACK_IMPORTED_MODULE_0__.Z});var _confirm_subtitle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/pages/confirmations/components/confirm-subtitle/confirm-subtitle.js")}}]);
//# sourceMappingURL=pages-confirmations-components-confirm-subtitle-confirm-subtitle-stories.7a4566e0.iframe.bundle.js.map