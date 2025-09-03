"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[83603],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/text-field-search/text-field-search.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ClearButtonOnClick:()=>ClearButtonOnClick,ClearButtonProps:()=>ClearButtonProps,DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>text_field_search_stories});var react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),text_field=__webpack_require__("./ui/components/component-library/text-field/index.ts"),text_field_search=__webpack_require__("./ui/components/component-library/text-field-search/text-field-search.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",strong:"strong",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"textfieldsearch",children:"TextFieldSearch"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"TextFieldSearch"})," allows users to enter text to search"]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfieldsearch--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"TextFieldSearch"})," accepts all props below as well as all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-ui-box--default-story#props",children:"Box"})," component props"]}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:text_field_search.m}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TextFieldSearch"})," accepts all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-textfield--default-story#props",children:"TextField"}),`
component props`]}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:text_field.A_}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"clear-button-on-click",children:"Clear Button On Click"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TextFieldSearch"})," displays a clear button when text is entered into the input. Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"clearButtonOnClick"})," prop to pass an ",(0,jsx_runtime.jsx)(_components.code,{children:"onClick"})," event handler to clear the value of the input. To hide the clear button, pass ",(0,jsx_runtime.jsx)(_components.code,{children:"false"})," to the ",(0,jsx_runtime.jsx)(_components.code,{children:"showClearButton"})," prop."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The clear button uses ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-buttonicon--default-story",children:"ButtonIcon"})," and accepts all props from that component."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsxs)(_components.strong,{children:["NOTE: The ",(0,jsx_runtime.jsx)(_components.code,{children:"showClearButton"})," only works with a controlled input."]})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfieldsearch--clear-button-on-click"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextFieldSearch } from '../../component-library';

const [value, setValue] = useState('show clear');

const handleOnChange = (e) => {
  setValue(e.target.value);
};

const handleOnClear = () => {
  setValue('');
};

<TextFieldSearch
  placeholder="Enter text to show clear"
  value={value}
  onChange={handleOnChange}
  clearButtonOnClick={handleOnClear}
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"clear-button-props",children:"Clear Button Props"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"clearButtonProps"})," to access other props of the clear button."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfieldsearch--clear-button-props"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React, { useState } from 'react';
import { Color, BorderRadius } from '../../../helpers/constants/design-system';

import { TextFieldSearch } from '../../component-library';

const [value, setValue] = useState('show clear');

const handleOnChange = (e) => {
  setValue(e.target.value);
};

const handleOnClear = () => {
  setValue('');
};

<TextFieldSearch
  value={value}
  onChange={handleOnChange}
  clearButtonOnClick={handleOnClear}
  clearButtonProps={{
    backgroundColor: Color.backgroundAlternative,
    borderRadius: BorderRadius.XS,
    'data-testid': 'clear-button',
  }}
/>;
`})})]})}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let text_field_search_stories={title:"Components/ComponentLibrary/TextFieldSearch",component:text_field_search.m,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{value:{control:"text"},onChange:{action:"onChange"},clearButtonOnClick:{action:"clearButtonOnClick"},clearButtonProps:{control:"object"},autoComplete:{control:"boolean",table:{category:"text field base props"}},autoFocus:{control:"boolean",table:{category:"text field base props"}},className:{control:"text",table:{category:"text field base props"}},disabled:{control:"boolean",table:{category:"text field base props"}},error:{control:"boolean",table:{category:"text field base props"}},id:{control:"text",table:{category:"text field base props"}},inputProps:{control:"object",table:{category:"text field base props"}},startAccessory:{control:"text",table:{category:"text field base props"}},maxLength:{control:"number",table:{category:"text field base props"}},name:{control:"text",table:{category:"text field base props"}},onBlur:{action:"onBlur",table:{category:"text field base props"}},onClick:{action:"onClick",table:{category:"text field base props"}},onFocus:{action:"onFocus",table:{category:"text field base props"}},onKeyDown:{action:"onKeyDown",table:{category:"text field base props"}},onKeyUp:{action:"onKeyUp",table:{category:"text field base props"}},placeholder:{control:"text",table:{category:"text field base props"}},readOnly:{control:"boolean",table:{category:"text field base props"}},required:{control:"boolean",table:{category:"text field base props"}},endAccessory:{control:"text",table:{category:"text field base props"}},size:{control:"select",options:Object.values(text_field.BD),table:{category:"text field base props"}},type:{control:"select",options:Object.values(text_field.ux),table:{category:"text field base props"}},truncate:{control:"boolean",table:{category:"text field base props"}}},args:{placeholder:"Search",value:""}};var Template=function(args){var _useArgs=_sliced_to_array((0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),2),value=_useArgs[0].value,updateArgs=_useArgs[1];return react.createElement(text_field_search.m,_object_spread_props(_object_spread({},args),{value:value,onChange:function(e){updateArgs({value:e.target.value})},clearButtonOnClick:function(){updateArgs({value:""})}}))},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var ClearButtonOnClick=Template.bind({});ClearButtonOnClick.args={value:"Text to clear"};var ClearButtonProps=Template.bind({});ClearButtonProps.args={value:"clear button props",size:design_system.or.LG,clearButtonProps:{backgroundColor:design_system.Q1.backgroundAlternative,borderRadius:design_system.Z6.XS}},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  const handleOnClear = () => {
    updateArgs({
      value: ''
    });
  };
  return <TextFieldSearch {...args} value={value} onChange={handleOnChange} clearButtonOnClick={handleOnClear} />;
}`,...DefaultStory.parameters?.docs?.source}}},ClearButtonOnClick.parameters={...ClearButtonOnClick.parameters,docs:{...ClearButtonOnClick.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  const handleOnClear = () => {
    updateArgs({
      value: ''
    });
  };
  return <TextFieldSearch {...args} value={value} onChange={handleOnChange} clearButtonOnClick={handleOnClear} />;
}`,...ClearButtonOnClick.parameters?.docs?.source}}},ClearButtonProps.parameters={...ClearButtonProps.parameters,docs:{...ClearButtonProps.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  const handleOnClear = () => {
    updateArgs({
      value: ''
    });
  };
  return <TextFieldSearch {...args} value={value} onChange={handleOnChange} clearButtonOnClick={handleOnClear} />;
}`,...ClearButtonProps.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","ClearButtonOnClick","ClearButtonProps"];try{DefaultStory.displayName="DefaultStory",DefaultStory.__docgenInfo={description:"",displayName:"DefaultStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text-field-search/text-field-search.stories.tsx#DefaultStory"]={docgenInfo:DefaultStory.__docgenInfo,name:"DefaultStory",path:"ui/components/component-library/text-field-search/text-field-search.stories.tsx#DefaultStory"})}catch(__react_docgen_typescript_loader_error){}try{ClearButtonOnClick.displayName="ClearButtonOnClick",ClearButtonOnClick.__docgenInfo={description:"",displayName:"ClearButtonOnClick",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text-field-search/text-field-search.stories.tsx#ClearButtonOnClick"]={docgenInfo:ClearButtonOnClick.__docgenInfo,name:"ClearButtonOnClick",path:"ui/components/component-library/text-field-search/text-field-search.stories.tsx#ClearButtonOnClick"})}catch(__react_docgen_typescript_loader_error){}try{ClearButtonProps.displayName="ClearButtonProps",ClearButtonProps.__docgenInfo={description:"",displayName:"ClearButtonProps",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text-field-search/text-field-search.stories.tsx#ClearButtonProps"]={docgenInfo:ClearButtonProps.__docgenInfo,name:"ClearButtonProps",path:"ui/components/component-library/text-field-search/text-field-search.stories.tsx#ClearButtonProps"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-component-library-text-field-search-text-field-search-stories.e41977b1.iframe.bundle.js.map