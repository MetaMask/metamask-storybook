"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[29047],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/form-text-field/form-text-field.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomLabelOrHelpText:()=>CustomLabelOrHelpText,DefaultStory:()=>DefaultStory,FormExample:()=>FormExample,HelpTextStory:()=>HelpTextStory,Id:()=>Id,LabelStory:()=>LabelStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>form_text_field_stories});var react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),form_text_field=__webpack_require__("./ui/components/component-library/form-text-field/form-text-field.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),component_library=__webpack_require__("./ui/components/component-library/index.ts");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"formtextfield",children:"FormTextField"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," is an input component to create forms. It bundles the ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-textfield--default-story",children:"TextField"}),", ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-label--default-story",children:"Label"})," and ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-helptext--default-story",children:"HelpText"})," components together."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-formtextfield--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," accepts all props below as well as all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-ui-box--default-story#props",children:"Box"})," component props"]}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:form_text_field.Y}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," accepts all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-textfield--default-story#props",children:"TextField"}),`
component props`]}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:component_library.A_}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," accepts all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-textfield--default-story#props",children:"TextField"}),`
component props`]}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:component_library.A_}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"id",children:"Id"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"id"})," prop to set the ",(0,jsx_runtime.jsx)(_components.code,{children:"id"})," of the ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," component. This is required for accessibility when the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," prop is set. It is also used internally to link the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"input"})," elements using ",(0,jsx_runtime.jsx)(_components.code,{children:"htmlFor"}),", so clicking on the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," will focus the ",(0,jsx_runtime.jsx)(_components.code,{children:"input"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-formtextfield--id"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { FormTextField } from '../../component-library';

<FormTextField
  id="accessible-input-id"
  label="If label prop exists id prop is required for accessibility"
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"label",children:"Label"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," prop to add a label to the ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," component. Uses the ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-label--default-story",children:"Label"})," component. Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"labelProps"})," prop to pass props to the ",(0,jsx_runtime.jsx)(_components.code,{children:"Label"})," component. To use a custom label component see the ",(0,jsx_runtime.jsx)(_components.a,{href:"#custom-label-or-helptext",children:"Custom Label or HelpText"})," story example."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-formtextfield--label-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { FormTextField } from '../../component-library';

<FormTextField id="input-with-label" label="Label content appears here" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"helptext",children:"HelpText"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"helpText"})," prop to add help text to the ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," component. Uses the ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-helptext--default-story",children:"HelpText"})," component. Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"helpTextProps"})," prop to pass props to the ",(0,jsx_runtime.jsx)(_components.code,{children:"HelpText"})," component. To use a custom help text component see the ",(0,jsx_runtime.jsx)(_components.a,{href:"#custom-helpText-or-helptext",children:"Custom Label or HelpText"})," story example. When ",(0,jsx_runtime.jsx)(_components.code,{children:"error"})," is true the ",(0,jsx_runtime.jsx)(_components.code,{children:"helpText"})," will be rendered as an error message."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-formtextfield--help-text-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { FormTextField } from '../../component-library';

<FormTextField helpText="HelpText content appears here" />;
<FormTextField
  error
  helpText="When error is true the help text will be rendered as an error message"
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"form-example",children:"Form Example"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["An example of a form using the ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-formtextfield--form-example"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React, { useState, useEffect } from 'react';
import {
  Display,
  TextColor,
  AlignItems,
  TextVariant,
} from '../../../helpers/constants/design-system';

import Box from '../../ui/box/box';

import {
  ButtonPrimary,
  ButtonSecondary,
  FormTextField,
  IconName,
  Text,
} from '../../component-library';

const FORM_STATE = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error',
};

const VALIDATED_VALUES = {
  NETWORK_NAME: 'network name',
  NEW_RPC_URL: 'new rpc url',
  CHAIN_ID: 'chain id',
};

const ERROR_MESSAGES = {
  NETWORK_NAME: \`Please enter "\${VALIDATED_VALUES.NETWORK_NAME}"\`,
  NEW_RPC_URL: \`Please enter "\${VALIDATED_VALUES.NEW_RPC_URL}"\`,
  CHAIN_ID: \`Please enter "\${VALIDATED_VALUES.CHAIN_ID}"\`,
};

const [submitted, setSubmitted] = useState(FORM_STATE.DEFAULT);

const [values, setValues] = useState({
  networkName: '',
  newRpcUrl: '',
  chainId: '',
});

const [errors, setErrors] = useState({
  networkName: '',
  newRpcUrl: '',
  chainId: '',
});

useEffect(() => {
  setErrors({
    networkName:
      values.networkName &&
      values.networkName.toLowerCase() !== VALIDATED_VALUES.NETWORK_NAME
        ? ERROR_MESSAGES.NETWORK_NAME
        : '',
    newRpcUrl:
      values.newRpcUrl &&
      values.newRpcUrl.toLowerCase() !== VALIDATED_VALUES.NEW_RPC_URL
        ? ERROR_MESSAGES.NEW_RPC_URL
        : '',
    chainId:
      values.chainId &&
      values.chainId.toLowerCase() !== VALIDATED_VALUES.CHAIN_ID
        ? ERROR_MESSAGES.CHAIN_ID
        : '',
  });
}, [values]);

const handleClearForm = () => {
  setValues({ networkName: '', newRpcUrl: '', chainId: '' });
  setErrors({ networkName: '', newRpcUrl: '', chainId: '' });
  setSubmitted(FORM_STATE.DEFAULT);
};

const handleOnChange = (e) => {
  if (submitted === FORM_STATE.ERROR) {
    setErrors({ networkName: '', newRpcUrl: '', chainId: '' });
    setSubmitted(FORM_STATE.DEFAULT);
  }
  setValues({
    ...values,
    [e.target.name]: e.target.value,
  });
};

const handleOnSubmit = (e) => {
  e.preventDefault();
  if (errors.networkName || errors.newRpcUrl || errors.chainId) {
    setSubmitted(FORM_STATE.ERROR);
  } else {
    setSubmitted(FORM_STATE.SUCCESS);
  }
};

return (
  <>
    <Box
      as="form"
      onSubmit={handleOnSubmit}
      marginBottom={4}
      style={{ width: '100%', maxWidth: '420px' }}
    >
      <FormTextField
        marginBottom={4}
        label="Network name"
        placeholder="Enter 'network name'"
        required
        name="networkName"
        id="networkName"
        onChange={handleOnChange}
        value={values.networkName}
        error={Boolean(submitted === FORM_STATE.ERROR && errors.networkName)}
        helpText={submitted === FORM_STATE.ERROR ? errors.networkName : null}
      />
      <FormTextField
        marginBottom={4}
        label="New RPC URL"
        placeholder="Enter 'new RPC URL'"
        required
        name="newRpcUrl"
        id="newRpcUrl"
        onChange={handleOnChange}
        value={values.newRpcUrl}
        error={Boolean(submitted === FORM_STATE.ERROR && errors.newRpcUrl)}
        helpText={submitted === FORM_STATE.ERROR ? errors.newRpcUrl : null}
      />
      <FormTextField
        label="Chain ID"
        marginBottom={4}
        placeholder="Enter 'chain ID'"
        required
        name="chainId"
        id="chainId"
        onChange={handleOnChange}
        value={values.chainId}
        error={Boolean(submitted === FORM_STATE.ERROR && errors.chainId)}
        helpText={submitted === FORM_STATE.ERROR ? errors.chainId : null}
      />
      <Box display={Display.Flex} alignItems={AlignItems.center} gap={1}>
        <ButtonPrimary type="submit">Submit</ButtonPrimary>
      </Box>
    </Box>
    <ButtonSecondary icon={IconName.Close} onClick={handleClearForm} danger>
      Clear form
    </ButtonSecondary>
    {submitted === FORM_STATE.SUCCESS && (
      <Text
        variant={TextVariant.bodyMd}
        color={TextColor.successDefault}
        marginTop={4}
      >
        Form successfully submitted!
      </Text>
    )}
  </>
);
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"custom-label-or-helptext",children:"Custom Label or HelpText"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["There will be times when you will want to use a custom ",(0,jsx_runtime.jsx)(_components.code,{children:"Label"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"HelpText"}),". This can be done by simply not providing ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"helpText"})," props to the ",(0,jsx_runtime.jsx)(_components.code,{children:"FormTextField"})," component. You can then use the ",(0,jsx_runtime.jsx)(_components.code,{children:"Label"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"HelpText"})," components to create your own custom label or help text."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-formtextfield--custom-label-or-help-text"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  Size,
  Display,
  IconColor,
  AlignItems,
  JustifyContent,
} from '../../../helpers/constants/design-system';

import Box from '../../ui/box/box';

import { Icon, IconName } from '..'
import {
  ButtonLink,
  FormTextField,
  HelpText,
  Label,
  TextFieldType,
  Text,
} from '../../component-library';

<Text marginBottom={4}>
  Examples of how one might customize the Label or HelpText within the
  FormTextField component
</Text>
<Box
  display={Display.Flex}
  justifyContent={JustifyContent.spaceBetween}
  alignItems={AlignItems.flexEnd}
>
  <Box display={Display.Flex} alignItems={AlignItems.center}>
    {/**
      * If you need a custom label
      * or require adding some form of customization
      * import the Label component separately
      */}
    <Label htmlFor="custom-spending-cap">
      Custom spending cap
    </Label>
    <Icon
      name={IconName.Info}
      size={IconSize.Sm}
      marginLeft={1}
      color={IconColor.iconAlternative}
    />
  </Box>
  <ButtonLink>Use default</ButtonLink>
</Box>
<FormTextField
  id="custom-spending-cap"
  placeholder="Enter a number"
  endAccessory={<ButtonLink>Max</ButtonLink>}
  marginBottom={4}
  type={TextFieldType.Number}
/>
<FormTextField
  label="Swap from"
  placeholder="0"
  type={TextFieldType.Number}
/>
<Box
  display={Display.Flex}
  alignItems={AlignItems.flexStart}
  justifyContent={JustifyContent.spaceBetween}
  marginTop={1}
>
  {/**
    * If you need a custom help text
    * or require adding some form of customization
    * import the HelpText component separately and handle the error
    * logic yourself
    */}
  <HelpText htmlFor="chainId" marginRight={2}>
    Only enter a number that you're comfortable with the contract accessing
    now or in the future. You can always increase the token limit later.
  </HelpText>
  <ButtonLink marginLeft="auto">
    Max
  </ButtonLink>
</Box>
`})})]})}var component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),button_secondary=__webpack_require__("./ui/components/component-library/button-secondary/index.ts"),button_primary=__webpack_require__("./ui/components/component-library/button-primary/index.ts"),icon=__webpack_require__("./ui/components/component-library/icon/index.ts"),label=__webpack_require__("./ui/components/component-library/label/index.ts"),button_link=__webpack_require__("./ui/components/component-library/button-link/index.ts"),help_text=__webpack_require__("./ui/components/component-library/help-text/index.ts"),text_field=__webpack_require__("./ui/components/component-library/text-field/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let form_text_field_stories={title:"Components/ComponentLibrary/FormTextField",component:form_text_field.Y,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},args:{placeholder:"Form text field",label:"Label",id:"form-text-field",helpText:"Help text"}};var Template=function(args){var _useArgs=_sliced_to_array((0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),2),_useArgs__value=_useArgs[0].value,updateArgs=_useArgs[1];return react.createElement(form_text_field.Y,_object_spread_props(_object_spread({},args),{value:void 0===_useArgs__value?"":_useArgs__value,onChange:function(e){updateArgs({value:e.target.value})}}))},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var Id=Template.bind({});Id.args={id:"accessible-input-id",label:"If label prop exists id prop is required for accessibility",helpText:""};var LabelStory=Template.bind({});LabelStory.storyName="Label",LabelStory.args={id:"input-with-label",label:"Label content appears here",helpText:""};var HelpTextStory=function(args){var _useArgs=_sliced_to_array((0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),2),_useArgs__value=_useArgs[0].value,value=void 0===_useArgs__value?"":_useArgs__value,updateArgs=_useArgs[1],handleOnChange=function(e){updateArgs({value:e.target.value})};return react.createElement(react.Fragment,null,react.createElement(form_text_field.Y,_object_spread_props(_object_spread({},args),{id:"input-with-help-text",value:value,onChange:handleOnChange,marginBottom:4})),react.createElement(form_text_field.Y,_object_spread_props(_object_spread({},args),{id:"input-with-help-text-as-error",error:!0,helpText:"When error is true the help text will be rendered as an error message",value:value,onChange:handleOnChange})))};HelpTextStory.storyName="HelpText",HelpTextStory.args={label:"",helpText:"HelpText content appears here"};var FormExample=function(){var FORM_STATE_DEFAULT="default",FORM_STATE_SUCCESS="success",FORM_STATE_ERROR="error",VALIDATED_VALUES_NETWORK_NAME="network name",VALIDATED_VALUES_NEW_RPC_URL="new rpc url",VALIDATED_VALUES_CHAIN_ID="chain id",ERROR_MESSAGES={NETWORK_NAME:'Please enter "'.concat(VALIDATED_VALUES_NETWORK_NAME,'"'),NEW_RPC_URL:'Please enter "'.concat(VALIDATED_VALUES_NEW_RPC_URL,'"'),CHAIN_ID:'Please enter "'.concat(VALIDATED_VALUES_CHAIN_ID,'"')},_useState=_sliced_to_array((0,react.useState)(FORM_STATE_DEFAULT),2),submitted=_useState[0],setSubmitted=_useState[1],_useState1=_sliced_to_array((0,react.useState)({networkName:"",newRpcUrl:"",chainId:""}),2),values=_useState1[0],setValues=_useState1[1],_useState2=_sliced_to_array((0,react.useState)({networkName:"",newRpcUrl:"",chainId:""}),2),errors=_useState2[0],setErrors=_useState2[1];(0,react.useEffect)(function(){setErrors({networkName:values.networkName&&values.networkName.toLowerCase()!==VALIDATED_VALUES_NETWORK_NAME?ERROR_MESSAGES.NETWORK_NAME:"",newRpcUrl:values.newRpcUrl&&values.newRpcUrl.toLowerCase()!==VALIDATED_VALUES_NEW_RPC_URL?ERROR_MESSAGES.NEW_RPC_URL:"",chainId:values.chainId&&values.chainId.toLowerCase()!==VALIDATED_VALUES_CHAIN_ID?ERROR_MESSAGES.CHAIN_ID:""})},[values,ERROR_MESSAGES.CHAIN_ID,ERROR_MESSAGES.NETWORK_NAME,ERROR_MESSAGES.NEW_RPC_URL,VALIDATED_VALUES_CHAIN_ID,VALIDATED_VALUES_NETWORK_NAME,VALIDATED_VALUES_NEW_RPC_URL]);var handleOnChange=function(e){submitted===FORM_STATE_ERROR&&(setErrors({networkName:"",newRpcUrl:"",chainId:""}),setSubmitted(FORM_STATE_DEFAULT)),setValues(_object_spread_props(_object_spread({},values),_define_property({},e.target.name,e.target.value)))};return react.createElement(react.Fragment,null,react.createElement(box.a,{as:"form",onSubmit:function(e){e.preventDefault(),errors.networkName||errors.newRpcUrl||errors.chainId?setSubmitted(FORM_STATE_ERROR):setSubmitted(FORM_STATE_SUCCESS)},marginBottom:4,style:{width:"100%",maxWidth:"420px"}},react.createElement(form_text_field.Y,{marginBottom:4,label:"Network name",placeholder:"Enter 'network name'",required:!0,name:"networkName",id:"networkName",onChange:handleOnChange,value:values.networkName,error:!!(submitted===FORM_STATE_ERROR&&errors.networkName),helpText:submitted===FORM_STATE_ERROR?errors.networkName:null}),react.createElement(form_text_field.Y,{marginBottom:4,label:"New RPC URL",placeholder:"Enter 'new RPC URL'",required:!0,name:"newRpcUrl",id:"newRpcUrl",onChange:handleOnChange,value:values.newRpcUrl,error:!!(submitted===FORM_STATE_ERROR&&errors.newRpcUrl),helpText:submitted===FORM_STATE_ERROR?errors.newRpcUrl:null}),react.createElement(form_text_field.Y,{label:"Chain ID",marginBottom:4,placeholder:"Enter 'chain ID'",required:!0,name:"chainId",id:"chainId",onChange:handleOnChange,value:values.chainId,error:!!(submitted===FORM_STATE_ERROR&&errors.chainId),helpText:submitted===FORM_STATE_ERROR?errors.chainId:null}),react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.center,gap:1},react.createElement(button_primary.$,{type:"submit"},"Submit"))),react.createElement(button_secondary.n,{endIconName:icon.$M.Close,onClick:function(){setValues({networkName:"",newRpcUrl:"",chainId:""}),setErrors({networkName:"",newRpcUrl:"",chainId:""}),setSubmitted(FORM_STATE_DEFAULT)},danger:!0},"Clear form"),submitted===FORM_STATE_SUCCESS&&react.createElement(component_library_text.EY,{variant:design_system.J3.bodyLgMedium,color:design_system.r7.successDefault,marginTop:4},"Form successfully submitted!"))},CustomLabelOrHelpText=function(){return react.createElement(react.Fragment,null,react.createElement(component_library_text.EY,{marginBottom:4},"Examples of how one might customize the Label or HelpText within the FormTextField component"),react.createElement(box.a,{display:design_system.nl.Flex,justifyContent:design_system.A9.spaceBetween,alignItems:design_system.k2.flexEnd},react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.center},react.createElement(label.J,{htmlFor:"custom-spending-cap"},"Custom spending cap"),react.createElement(icon.In,{name:icon.$M.Info,size:icon.lK.Sm,marginLeft:1,color:design_system.Li.iconAlternative})),react.createElement(button_link.v,null,"Use default")),react.createElement(form_text_field.Y,{id:"custom-spending-cap",placeholder:"Enter a number",endAccessory:react.createElement(button_link.v,null,"Max"),marginBottom:4,type:text_field.ux.Number}),react.createElement(form_text_field.Y,{label:"Swap from",id:"swap-from",placeholder:"0",type:text_field.ux.Number}),react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.flexStart,justifyContent:design_system.A9.spaceBetween},react.createElement(help_text.$,{paddingRight:2,marginTop:1},"Only enter a number that you're comfortable with the contract accessing now or in the future. You can always increase the token limit later."),react.createElement(button_link.v,{marginLeft:"auto",marginTop:1},"Max")))};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value = ''
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <FormTextField {...args} value={value} onChange={handleOnChange} />;
}`,...DefaultStory.parameters?.docs?.source}}},Id.parameters={...Id.parameters,docs:{...Id.parameters?.docs,source:{originalSource:`args => {
  const [{
    value = ''
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <FormTextField {...args} value={value} onChange={handleOnChange} />;
}`,...Id.parameters?.docs?.source}}},LabelStory.parameters={...LabelStory.parameters,docs:{...LabelStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value = ''
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <FormTextField {...args} value={value} onChange={handleOnChange} />;
}`,...LabelStory.parameters?.docs?.source}}},HelpTextStory.parameters={...HelpTextStory.parameters,docs:{...HelpTextStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value = ''
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <>
      <FormTextField {...args} id="input-with-help-text" value={value} onChange={handleOnChange} marginBottom={4} />
      <FormTextField {...args} id="input-with-help-text-as-error" error helpText="When error is true the help text will be rendered as an error message" value={value} onChange={handleOnChange} />
    </>;
}`,...HelpTextStory.parameters?.docs?.source}}},FormExample.parameters={...FormExample.parameters,docs:{...FormExample.parameters?.docs,source:{originalSource:`() => {
  const FORM_STATE = {
    DEFAULT: 'default',
    SUCCESS: 'success',
    ERROR: 'error'
  };
  const VALIDATED_VALUES = {
    NETWORK_NAME: 'network name',
    NEW_RPC_URL: 'new rpc url',
    CHAIN_ID: 'chain id'
  };
  const ERROR_MESSAGES = {
    NETWORK_NAME: \`Please enter "\${VALIDATED_VALUES.NETWORK_NAME}"\`,
    NEW_RPC_URL: \`Please enter "\${VALIDATED_VALUES.NEW_RPC_URL}"\`,
    CHAIN_ID: \`Please enter "\${VALIDATED_VALUES.CHAIN_ID}"\`
  };
  const [submitted, setSubmitted] = useState(FORM_STATE.DEFAULT);
  const [values, setValues] = useState({
    networkName: '',
    newRpcUrl: '',
    chainId: ''
  });
  const [errors, setErrors] = useState({
    networkName: '',
    newRpcUrl: '',
    chainId: ''
  });
  useEffect(() => {
    setErrors({
      networkName: values.networkName && values.networkName.toLowerCase() !== VALIDATED_VALUES.NETWORK_NAME ? ERROR_MESSAGES.NETWORK_NAME : '',
      newRpcUrl: values.newRpcUrl && values.newRpcUrl.toLowerCase() !== VALIDATED_VALUES.NEW_RPC_URL ? ERROR_MESSAGES.NEW_RPC_URL : '',
      chainId: values.chainId && values.chainId.toLowerCase() !== VALIDATED_VALUES.CHAIN_ID ? ERROR_MESSAGES.CHAIN_ID : ''
    });
  }, [values, ERROR_MESSAGES.CHAIN_ID, ERROR_MESSAGES.NETWORK_NAME, ERROR_MESSAGES.NEW_RPC_URL, VALIDATED_VALUES.CHAIN_ID, VALIDATED_VALUES.NETWORK_NAME, VALIDATED_VALUES.NEW_RPC_URL]);
  const handleClearForm = () => {
    setValues({
      networkName: '',
      newRpcUrl: '',
      chainId: ''
    });
    setErrors({
      networkName: '',
      newRpcUrl: '',
      chainId: ''
    });
    setSubmitted(FORM_STATE.DEFAULT);
  };
  const handleOnChange = e => {
    if (submitted === FORM_STATE.ERROR) {
      setErrors({
        networkName: '',
        newRpcUrl: '',
        chainId: ''
      });
      setSubmitted(FORM_STATE.DEFAULT);
    }
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    if (errors.networkName || errors.newRpcUrl || errors.chainId) {
      setSubmitted(FORM_STATE.ERROR);
    } else {
      setSubmitted(FORM_STATE.SUCCESS);
    }
  };
  return <>
      <Box as="form" onSubmit={handleOnSubmit} marginBottom={4} style={{
      width: '100%',
      maxWidth: '420px'
    }}>
        <FormTextField marginBottom={4} label="Network name" placeholder="Enter 'network name'" required name="networkName" id="networkName" onChange={handleOnChange} value={values.networkName} error={Boolean(submitted === FORM_STATE.ERROR && errors.networkName)} helpText={submitted === FORM_STATE.ERROR ? errors.networkName : null} />
        <FormTextField marginBottom={4} label="New RPC URL" placeholder="Enter 'new RPC URL'" required name="newRpcUrl" id="newRpcUrl" onChange={handleOnChange} value={values.newRpcUrl} error={Boolean(submitted === FORM_STATE.ERROR && errors.newRpcUrl)} helpText={submitted === FORM_STATE.ERROR ? errors.newRpcUrl : null} />
        <FormTextField label="Chain ID" marginBottom={4} placeholder="Enter 'chain ID'" required name="chainId" id="chainId" onChange={handleOnChange} value={values.chainId} error={Boolean(submitted === FORM_STATE.ERROR && errors.chainId)} helpText={submitted === FORM_STATE.ERROR ? errors.chainId : null} />
        <Box display={Display.Flex} alignItems={AlignItems.center} gap={1}>
          <ButtonPrimary type="submit">Submit</ButtonPrimary>
        </Box>
      </Box>
      <ButtonSecondary endIconName={IconName.Close} onClick={handleClearForm} danger>
        Clear form
      </ButtonSecondary>
      {submitted === FORM_STATE.SUCCESS && <Text variant={TextVariant.bodyLgMedium} color={TextColor.successDefault} marginTop={4}>
          Form successfully submitted!
        </Text>}
    </>;
}`,...FormExample.parameters?.docs?.source}}},CustomLabelOrHelpText.parameters={...CustomLabelOrHelpText.parameters,docs:{...CustomLabelOrHelpText.parameters?.docs,source:{originalSource:`() => <>
    <Text marginBottom={4}>
      Examples of how one might customize the Label or HelpText within the
      FormTextField component
    </Text>
    <Box display={Display.Flex} justifyContent={JustifyContent.spaceBetween} alignItems={AlignItems.flexEnd}>
      <Box display={Display.Flex} alignItems={AlignItems.center}>
        {/* If you need a custom label
         or require adding some form of customization
         import the Label component separately */}
        <Label htmlFor="custom-spending-cap">Custom spending cap</Label>
        <Icon name={IconName.Info} size={IconSize.Sm} marginLeft={1} color={IconColor.iconAlternative} />
      </Box>
      <ButtonLink>Use default</ButtonLink>
    </Box>
    <FormTextField id="custom-spending-cap" placeholder="Enter a number" endAccessory={<ButtonLink>Max</ButtonLink>} marginBottom={4} type={TextFieldType.Number} />
    <FormTextField label="Swap from" id="swap-from" placeholder="0" type={TextFieldType.Number} />
    <Box display={Display.Flex} alignItems={AlignItems.flexStart} justifyContent={JustifyContent.spaceBetween}>
      {/* If you need a custom help text
       or require adding some form of customization
       import the HelpText component separately and handle the error
       logic yourself */}
      <HelpText paddingRight={2} marginTop={1}>
        Only enter a number that you&apos;re comfortable with the contract
        accessing now or in the future. You can always increase the token limit
        later.
      </HelpText>
      <ButtonLink marginLeft="auto" marginTop={1}>
        Max
      </ButtonLink>
    </Box>
  </>`,...CustomLabelOrHelpText.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Id","LabelStory","HelpTextStory","FormExample","CustomLabelOrHelpText"]}}]);
//# sourceMappingURL=components-component-library-form-text-field-form-text-field-stories.f93dfe13.iframe.bundle.js.map