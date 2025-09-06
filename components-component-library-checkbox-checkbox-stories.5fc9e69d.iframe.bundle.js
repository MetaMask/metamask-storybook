"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[45755],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/checkbox/checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,Id:()=>Id,InputProps:()=>InputProps,IsChecked:()=>IsChecked,IsDisabled:()=>IsDisabled,IsIndeterminate:()=>IsIndeterminate,IsReadOnly:()=>IsReadOnly,IsRequired:()=>IsRequired,Label:()=>Label,Name:()=>Name,OnChange:()=>OnChange,Title:()=>Title,__namedExportsOrder:()=>__namedExportsOrder,default:()=>checkbox_stories});var external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),checkbox_checkbox=__webpack_require__("./ui/components/component-library/checkbox/checkbox.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",code:"code",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"checkbox",children:"Checkbox"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Checkbox is a graphical element that allows users to select one or more options from a set of choices."}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-checkbox--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:checkbox_checkbox.S}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"label",children:"Label"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," string prop to set the label of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-checkbox--label"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Checkbox } from '../../component-library';

<Checkbox label="Checkbox Label" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"ischecked",children:"IsChecked"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isChecked"})," boolean prop to set the checked state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-checkbox--is-checked"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Checkbox } from '../../component-library';

<Checkbox isChecked={true} label="isChecked demo" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"isindeterminate",children:"IsIndeterminate"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isIndeterminate"})," boolean prop to set the indeterminate state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-checkbox--is-indeterminate"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React from 'react';
import { Checkbox, Box } from '../../component-library';

const [checkedItems, setCheckedItems] = React.useState([false, true, false]);

const allChecked = checkedItems.every(Boolean);
const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

const handleIndeterminateChange = () => {
  if (allChecked || isIndeterminate) {
    setCheckedItems([false, false, false]);
  } else {
    setCheckedItems([true, true, true]);
  }
};

const handleCheckboxChange = (index, value) => {
  const newCheckedItems = [...checkedItems];
  newCheckedItems[index] = value;
  setCheckedItems(newCheckedItems);
};

<Checkbox
    label="isIndeterminate demo"
    isChecked={allChecked}
    isIndeterminate={isIndeterminate}
    onChange={handleIndeterminateChange}
    marginBottom={2}
/>
<Box
  marginLeft={2}
  gap={1}
  display={Display.Flex}
  flexDirection={FlexDirection.Column}
>
  <Checkbox
    isChecked={checkedItems[0]}
    onChange={(e) => handleCheckboxChange(0, e.target.checked)}
    label="Checkbox 1"
  />
  <Checkbox
    isChecked={checkedItems[1]}
    onChange={(e) => handleCheckboxChange(1, e.target.checked)}
    label="Checkbox 2"
  />
  <Checkbox
    isChecked={checkedItems[2]}
    onChange={(e) => handleCheckboxChange(2, e.target.checked)}
    label="Checkbox 3"
  />
</Box>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"isdisabled",children:"IsDisabled"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isDisabled"})," boolean prop to set the disabled state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-checkbox--is-disabled"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Checkbox } from '../../component-library';

<Checkbox isDisabled={true} label="isDisabled demo" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"isreadonly",children:"IsReadOnly"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isReadOnly"})," boolean prop to set the readOnly attribute of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-checkbox--is-read-only"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Checkbox } from '../../component-library';

<Checkbox isReadOnly={true} label="isReadOnly demo" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"onchange",children:"OnChange"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"onChange"})," function prop to set the onChange handler of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-checkbox--on-change"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React from 'react';
import { Checkbox } from '../../component-library';

const [isChecked, setIsChecked] = React.useState(false);

<Checkbox
  onChange={() => setIsChecked(!isChecked)}
  isChecked={isChecked}
  label="isReadOnly demo"
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"isrequired",children:"IsRequired"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isRequired"})," boolean prop to set the required attribute of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-checkbox--is-required"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Checkbox } from '../../component-library';

<Checkbox isRequired={true} label="isRequired demo" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"title",children:"Title"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"title"})," string prop to set the title attribute of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"}),`
The title attribute is used to provide additional context or information about the checkbox. It is primarily used for browser native tooltip functionality.`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-checkbox--title"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Checkbox } from '../../component-library';

<Checkbox title="Apples" label="Inspect to see title attribute" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"name",children:"Name"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"name"})," string prop to set the name attribute of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"}),`
This is best used when working with a form and submitting the value of the `,(0,jsx_runtime.jsx)(_components.code,{children:"Checkbox"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-checkbox--name"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Checkbox } from '../../component-library';

<Checkbox name="pineapple" label="Inspect to see name attribute" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"inputprops",children:"InputProps"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"inputProps"}),` object prop to add additonal props or attributes to the hidden input element
If needing to pass a ref to the input element, use the `,(0,jsx_runtime.jsx)(_components.code,{children:"inputRef"})," prop"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-checkbox--input-props"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Checkbox } from '../../component-library';

<Checkbox
  label="inputProps demo"
  inputProps={{ borderColor: BorderColor.errorDefault }}
/>;
`})})]})}var box=__webpack_require__("./ui/components/component-library/box/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let checkbox_stories={title:"Components/ComponentLibrary/Checkbox",component:checkbox_checkbox.S,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{label:{control:"text"},name:{control:"text"},id:{control:"text"}}};var Template=function(args){var _useArgs=_sliced_to_array((0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),2),isChecked=_useArgs[0].isChecked,updateArgs=_useArgs[1];return react.createElement(checkbox_checkbox.S,_object_spread_props(_object_spread({},args),{onChange:function(){return updateArgs({isChecked:!isChecked})},isChecked:isChecked}))},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var Label=Template.bind({});Label.args={label:"Checkbox label"};var Id=Template.bind({});Id.args={label:"Id demo",id:"id-demo"};var IsChecked=Template.bind({});IsChecked.args={isChecked:!0,label:"isChecked demo"};var IsIndeterminate=function(args){var _React_useState=_sliced_to_array(react.useState([!1,!0,!1]),2),checkedItems=_React_useState[0],setCheckedItems=_React_useState[1],allChecked=checkedItems.every(Boolean),isIndeterminate=checkedItems.some(Boolean)&&!allChecked,handleCheckboxChange=function(index,value){var newCheckedItems=_to_consumable_array(checkedItems);newCheckedItems[index]=value,setCheckedItems(newCheckedItems)};return react.createElement("div",null,react.createElement(checkbox_checkbox.S,_object_spread_props(_object_spread({},args),{isChecked:allChecked,isIndeterminate:isIndeterminate,onChange:function(){allChecked||isIndeterminate?setCheckedItems([!1,!1,!1]):setCheckedItems([!0,!0,!0])},marginBottom:2})),react.createElement(box.a,{marginLeft:2,gap:1,display:design_system.nl.Flex,flexDirection:design_system.bo.Column},react.createElement(checkbox_checkbox.S,{isChecked:checkedItems[0],onChange:function(e){return handleCheckboxChange(0,e.target.checked)},label:"Checkbox 1"}),react.createElement(checkbox_checkbox.S,{isChecked:checkedItems[1],onChange:function(e){return handleCheckboxChange(1,e.target.checked)},label:"Checkbox 2"}),react.createElement(checkbox_checkbox.S,{isChecked:checkedItems[2],onChange:function(e){return handleCheckboxChange(2,e.target.checked)},label:"Checkbox 3"})))};IsIndeterminate.args={label:"isIndeterminate demo",isIndeterminate:!0};var IsDisabled=Template.bind({});IsDisabled.args={isDisabled:!0,label:"isDisabled demo"};var IsReadOnly=Template.bind({});IsReadOnly.args={isReadOnly:!0,isChecked:!0,label:"isReadOnly demo"};var OnChange=Template.bind({});OnChange.args={label:"onChange demo"};var IsRequired=Template.bind({});IsRequired.args={isRequired:!0,isChecked:!0,label:"isRequired demo"};var Title=Template.bind({});Title.args={title:"Apples",label:"Inspect to see title attribute"};var Name=Template.bind({});Name.args={name:"pineapple",label:"Inspect to see name attribute"};var InputProps=Template.bind({});InputProps.args={inputProps:{borderColor:design_system.cG.errorDefault},label:"inputProps demo"},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    isChecked
  }, updateArgs] = useArgs();
  return <Checkbox {...args} onChange={() => updateArgs({
    isChecked: !isChecked
  })} isChecked={isChecked} />;
}`,...DefaultStory.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:`args => {
  const [{
    isChecked
  }, updateArgs] = useArgs();
  return <Checkbox {...args} onChange={() => updateArgs({
    isChecked: !isChecked
  })} isChecked={isChecked} />;
}`,...Label.parameters?.docs?.source}}},Id.parameters={...Id.parameters,docs:{...Id.parameters?.docs,source:{originalSource:`args => {
  const [{
    isChecked
  }, updateArgs] = useArgs();
  return <Checkbox {...args} onChange={() => updateArgs({
    isChecked: !isChecked
  })} isChecked={isChecked} />;
}`,...Id.parameters?.docs?.source}}},IsChecked.parameters={...IsChecked.parameters,docs:{...IsChecked.parameters?.docs,source:{originalSource:`args => {
  const [{
    isChecked
  }, updateArgs] = useArgs();
  return <Checkbox {...args} onChange={() => updateArgs({
    isChecked: !isChecked
  })} isChecked={isChecked} />;
}`,...IsChecked.parameters?.docs?.source}}},IsIndeterminate.parameters={...IsIndeterminate.parameters,docs:{...IsIndeterminate.parameters?.docs,source:{originalSource:`args => {
  const [checkedItems, setCheckedItems] = React.useState([false, true, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  const handleIndeterminateChange = () => {
    if (allChecked || isIndeterminate) {
      setCheckedItems([false, false, false]);
    } else {
      setCheckedItems([true, true, true]);
    }
  };
  const handleCheckboxChange = (index, value) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = value;
    setCheckedItems(newCheckedItems);
  };
  return <div>
      <Checkbox {...args} isChecked={allChecked} isIndeterminate={isIndeterminate} onChange={handleIndeterminateChange} marginBottom={2} />
      <Box marginLeft={2} gap={1} display={Display.Flex} flexDirection={FlexDirection.Column}>
        <Checkbox isChecked={checkedItems[0]} onChange={e => handleCheckboxChange(0, e.target.checked)} label="Checkbox 1" />
        <Checkbox isChecked={checkedItems[1]} onChange={e => handleCheckboxChange(1, e.target.checked)} label="Checkbox 2" />
        <Checkbox isChecked={checkedItems[2]} onChange={e => handleCheckboxChange(2, e.target.checked)} label="Checkbox 3" />
      </Box>
    </div>;
}`,...IsIndeterminate.parameters?.docs?.source}}},IsDisabled.parameters={...IsDisabled.parameters,docs:{...IsDisabled.parameters?.docs,source:{originalSource:`args => {
  const [{
    isChecked
  }, updateArgs] = useArgs();
  return <Checkbox {...args} onChange={() => updateArgs({
    isChecked: !isChecked
  })} isChecked={isChecked} />;
}`,...IsDisabled.parameters?.docs?.source}}},IsReadOnly.parameters={...IsReadOnly.parameters,docs:{...IsReadOnly.parameters?.docs,source:{originalSource:`args => {
  const [{
    isChecked
  }, updateArgs] = useArgs();
  return <Checkbox {...args} onChange={() => updateArgs({
    isChecked: !isChecked
  })} isChecked={isChecked} />;
}`,...IsReadOnly.parameters?.docs?.source}}},OnChange.parameters={...OnChange.parameters,docs:{...OnChange.parameters?.docs,source:{originalSource:`args => {
  const [{
    isChecked
  }, updateArgs] = useArgs();
  return <Checkbox {...args} onChange={() => updateArgs({
    isChecked: !isChecked
  })} isChecked={isChecked} />;
}`,...OnChange.parameters?.docs?.source}}},IsRequired.parameters={...IsRequired.parameters,docs:{...IsRequired.parameters?.docs,source:{originalSource:`args => {
  const [{
    isChecked
  }, updateArgs] = useArgs();
  return <Checkbox {...args} onChange={() => updateArgs({
    isChecked: !isChecked
  })} isChecked={isChecked} />;
}`,...IsRequired.parameters?.docs?.source}}},Title.parameters={...Title.parameters,docs:{...Title.parameters?.docs,source:{originalSource:`args => {
  const [{
    isChecked
  }, updateArgs] = useArgs();
  return <Checkbox {...args} onChange={() => updateArgs({
    isChecked: !isChecked
  })} isChecked={isChecked} />;
}`,...Title.parameters?.docs?.source}}},Name.parameters={...Name.parameters,docs:{...Name.parameters?.docs,source:{originalSource:`args => {
  const [{
    isChecked
  }, updateArgs] = useArgs();
  return <Checkbox {...args} onChange={() => updateArgs({
    isChecked: !isChecked
  })} isChecked={isChecked} />;
}`,...Name.parameters?.docs?.source}}},InputProps.parameters={...InputProps.parameters,docs:{...InputProps.parameters?.docs,source:{originalSource:`args => {
  const [{
    isChecked
  }, updateArgs] = useArgs();
  return <Checkbox {...args} onChange={() => updateArgs({
    isChecked: !isChecked
  })} isChecked={isChecked} />;
}`,...InputProps.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Label","Id","IsChecked","IsIndeterminate","IsDisabled","IsReadOnly","OnChange","IsRequired","Title","Name","InputProps"];try{IsIndeterminate.displayName="IsIndeterminate",IsIndeterminate.__docgenInfo={description:"",displayName:"IsIndeterminate",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/checkbox/checkbox.stories.tsx#IsIndeterminate"]={docgenInfo:IsIndeterminate.__docgenInfo,name:"IsIndeterminate",path:"ui/components/component-library/checkbox/checkbox.stories.tsx#IsIndeterminate"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-component-library-checkbox-checkbox-stories.5fc9e69d.iframe.bundle.js.map