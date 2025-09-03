"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[14701],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/text-field/text-field.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoComplete:()=>AutoComplete,AutoFocus:()=>AutoFocus,DefaultStory:()=>DefaultStory,DefaultValue:()=>DefaultValue,Disabled:()=>Disabled,ErrorStory:()=>ErrorStory,InputComponentStory:()=>InputComponentStory,InputRef:()=>InputRef,MaxLength:()=>MaxLength,ReadOnly:()=>ReadOnly,RequiredStory:()=>RequiredStory,SizeStory:()=>SizeStory,StartAccessoryEndAccessory:()=>StartAccessoryEndAccessory,Truncate:()=>Truncate,Type:()=>Type,__namedExportsOrder:()=>__namedExportsOrder,default:()=>text_field_stories});var react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),avatar_token=__webpack_require__("./ui/components/component-library/avatar-token/index.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),input=__webpack_require__("./ui/components/component-library/input/index.ts"),text_field_types=__webpack_require__("./ui/components/component-library/text-field/text-field.types.ts"),text_field=__webpack_require__("./ui/components/component-library/text-field/text-field.tsx"),button_icon=__webpack_require__("./ui/components/component-library/button-icon/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"textfield",children:"TextField"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TextField"})," lets user enter a text data into a boxed field. It can sometimes contain related information or controls."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.ov,{of:text_field.A}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop to set the height of the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Possible sizes include:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Sm"})," 32px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Md"})," 40px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Lg"})," 48px"]}),`
`]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"md"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--size-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextField, TextFieldSize } from '../../component-library';

<TextField size={TextFieldSize.Sm} />
<TextField size={TextFieldSize.Md} />
<TextField size={TextFieldSize.Lg} />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"type",children:"Type"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"type"})," prop to change the type of input."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Possible types include:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"text"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"number"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"password"})}),`
`]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"text"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--type"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextField, TextFieldType } from '../../component-library';

<TextField  placeholder="Default" />
<TextField  type={TextFieldType.Password} placeholder="Password" />
<TextField  type={TextFieldType.Number} placeholder="Number" />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"truncate",children:"Truncate"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"truncate"})," prop to truncate the text of the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--truncate"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextField } from '../../component-library';

<TextField truncate />; // truncate is set to \`true\` by default
<TextField truncate={false} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"start-accessory-end-accessory",children:"Start accessory End Accessory"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"startAccessory"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"endAccessory"})," props to add components such as icons or buttons to either side of the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--start-accessory-end-accessory"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Color, IconColor, SIZES, DISPLAY } from '../../../helpers/constants/design-system';
import { TextField, Icon, IconName, ButtonIcon } from '../../component-library';

<TextField
  placeholder="Search"
  startAccessory={
    <Icon
      color={IconColor.iconAlternative}
      name={IconName.Search}
    />
  }
/>

<TextField
  placeholder="Public address (0x), or ENS"
  endAccessory={
    <ButtonIcon
      iconName={IconName.ScanBarcode}
      ariaLabel="Scan QR code"
      iconProps={{ color: IconColor.primaryDefault }}
    />
  }
/>

<TextField
  placeholder="Enter amount"
  type="number"
  truncate
  startAccessory={<SelectTokenComponent />}
  endAccessory={<TokenValueInUSDComponent />}
/>

<TextField
  placeholder="Public address (0x), or ENS"
  truncate
  startAccessory={<AvatarAccount />}
  endAccessory={
    isAddressValid && (
      <Icon
        name={IconName.Check}
        color={IconColor.successDefault}
      />
    )
  }
/>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"input-ref",children:"Input Ref"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"inputRef"})," prop to access the ref of the ",(0,jsx_runtime.jsx)(_components.code,{children:"<input />"})," html element of ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"}),". This is useful for focusing the input from a button or other component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--input-ref"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Button, TextField } from '../../component-library';

const inputRef = useRef(null);
const [value, setValue] = useState('');
const handleOnClick = () => {
  inputRef.current.focus();
};
const handleOnChange = (e) => {
  setValue(e.target.value);
};

<TextField
  inputRef={inputRef}
  value={value}
  onChange={handleOnChange}
/>
<Button marginLeft={1} onClick={handleOnClick}>
  Edit
</Button>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"input-component",children:"Input Component"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"InputComponent"})," prop change the component used for the input element. This is useful for replacing the base input with a custom input while retaining the functionality of the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"}),"."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to the ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-text--default-story",children:"Text"})," component"]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"To function fully the custom component should accept the following props:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"aria-invalid"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"as"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"autoComplete"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"autoFocus"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"backgroundColor"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"disabled"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"focused"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"id"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"margin"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"maxLength"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"name"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"onBlur"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"onChange"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"onFocus"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"padding"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"paddingLeft"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"paddingRight"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"readOnly"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"ref"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"required"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"value"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"variant"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"type"})}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--input-component-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextField, Icon, IconName } from '../../component-library';

// should map the props to the custom input component
const CustomInputComponent = () => <div>{/* Custom input component */}</div>;

const TextFieldCustomInput = (args) => (
  <TextField
    size={SIZES.LG}
    InputComponent={CustomInputComponent}
    startAccessory={
      <Icon color={IconColor.iconAlternative} name={IconName.Wallet} />
    }
  />
);
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"auto-complete",children:"Auto Complete"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"autoComplete"})," prop to set the autocomplete html attribute. It allows the browser to predict the value based on earlier typed values."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--auto-complete"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextField } from '../../component-library';

<TextField type="password" autoComplete />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"auto-focus",children:"Auto Focus"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"autoFocus"})," prop to focus the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"})," during the first mount"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["To view story see ",(0,jsx_runtime.jsx)(_components.a,{href:"/story/components-componentlibrary-textfield--auto-complete",children:"Canvas tab"}),". Removing it from docs because created annoying reading experience 😁"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextField } from '../../component-library';

<TextField autoFocus />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"default-value",children:"Default Value"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"})," prop to set the default value of the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--default-value"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextField } from '../../component-library';

<TextField defaultValue="default value" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"disabled"})," prop to set the disabled state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--disabled"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextField } from '../../component-library';

<TextField disabled />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"error",children:"Error"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"error"})," prop to set the error state of the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--error-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextField } from '../../component-library';

<TextField error />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"max-length",children:"Max Length"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"maxLength"})," prop to set the maximum allowed input characters for the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--max-length"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextField } from '../../component-library';

<TextField maxLength={10} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"read-only",children:"Read Only"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"readOnly"})," prop to set the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"})," to read only. When ",(0,jsx_runtime.jsx)(_components.code,{children:"readOnly"})," is true ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"})," will not have a focus state."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--read-only"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextField } from '../../component-library';

<TextField readOnly />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"required",children:"Required"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"required"})," prop to set the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"})," to required. Currently there is no visual difference to the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextField"})," when required."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-textfield--required-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextField } from '../../component-library';

// Currently no visual difference
<TextField required />;
`})})]})}var icon=__webpack_require__("./ui/components/component-library/icon/index.ts"),avatar_account=__webpack_require__("./ui/components/component-library/avatar-account/index.ts"),component_library_button=__webpack_require__("./ui/components/component-library/button/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let text_field_stories={title:"Components/ComponentLibrary/TextField",component:text_field.A,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{autoComplete:{control:"boolean"},autoFocus:{control:"boolean"},className:{control:"text"},defaultValue:{control:"text"},disabled:{control:"boolean"},error:{control:"boolean"},id:{control:"text"},inputProps:{control:"object"},startAccessory:{control:"text"},maxLength:{control:"number"},name:{control:"text"},onBlur:{action:"onBlur"},onChange:{action:"onChange"},onClick:{action:"onClick"},onFocus:{action:"onFocus"},placeholder:{control:"text"},readOnly:{control:"boolean"},required:{control:"boolean"},endAccessory:{control:"text"},size:{control:"select",options:Object.values(text_field_types.B)},type:{control:"select",options:Object.values(text_field_types.u)},value:{control:"text"}},args:{placeholder:"Placeholder..."}};var Template=function(args){var _useArgs=_sliced_to_array((0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),2),value=_useArgs[0].value,updateArgs=_useArgs[1];return react.createElement(text_field.A,_object_spread_props(_object_spread({},args),{value:value,onChange:function(e){updateArgs({value:e.target.value})}}))},DefaultStory=Template.bind({});DefaultStory.storyName="Default",DefaultStory.args={value:""};var SizeStory=function(args){return react.createElement(box.a,{display:design_system.nl.InlineFlex,flexDirection:design_system.bo.Column,gap:4},react.createElement(text_field.A,_object_spread_props(_object_spread({},args),{placeholder:"TextFieldSize.Sm (32px)",size:text_field_types.B.Sm})),react.createElement(text_field.A,_object_spread_props(_object_spread({},args),{placeholder:"TextFieldSize.Md (40px)",size:text_field_types.B.Md})),react.createElement(text_field.A,_object_spread_props(_object_spread({},args),{placeholder:"TextFieldSize.Lg (48px)",size:text_field_types.B.Lg})))};SizeStory.storyName="Size";var Type=function(args){return react.createElement(box.a,{display:design_system.nl.InlineFlex,flexDirection:design_system.bo.Column,gap:4},react.createElement(text_field.A,_object_spread_props(_object_spread({},args),{placeholder:"Default"})),react.createElement(text_field.A,_object_spread_props(_object_spread({},args),{type:text_field_types.u.Password,placeholder:"Password"})),react.createElement(text_field.A,_object_spread_props(_object_spread({},args),{type:text_field_types.u.Number,placeholder:"Number"})))},Truncate=Template.bind({});Truncate.args={placeholder:"Truncate",value:"Truncated text when truncate and width is set",truncate:!0,style:{width:240}};var StartAccessoryEndAccessory=function(args){var _useState=_sliced_to_array((0,react.useState)({search:"",address:"",amount:1,accountAddress:"0x514910771af9ca656af840dff83e8264ecf986ca"}),2),value=_useState[0],setValue=_useState[1],handleOnChange=function(e){setValue(_object_spread_props(_object_spread({},value),_define_property({},e.target.name,e.target.value)))};return react.createElement(box.a,{display:design_system.nl.InlineFlex,flexDirection:design_system.bo.Column,gap:4},react.createElement(text_field.A,_object_spread_props(_object_spread({},args),{placeholder:"Search",value:value.search,name:"search",onChange:handleOnChange,startAccessory:react.createElement(icon.In,{color:design_system.Li.iconAlternative,name:icon.$M.Search})})),react.createElement(text_field.A,_object_spread_props(_object_spread({},args),{placeholder:"Public address (0x), or ENS",value:value.address,name:"address",onChange:handleOnChange,endAccessory:react.createElement(button_icon.a,{iconName:icon.$M.ScanBarcode,ariaLabel:"Scan QR code",iconProps:{color:design_system.Li.primaryDefault}})})),react.createElement(text_field.A,_object_spread_props(_object_spread({},args),{placeholder:"Enter amount",value:value.amount,name:"amount",onChange:handleOnChange,type:"number",truncate:!0,startAccessory:react.createElement(box.a,{as:"button",style:{padding:0},backgroundColor:design_system.i0.transparent,gap:1,display:design_system.nl.Flex,alignItems:design_system.k2.center},react.createElement(avatar_token.h,{name:"eth",src:"./images/eth_logo.svg",size:avatar_token.g.Sm}),react.createElement(component_library_text.EY,null,"ETH"),react.createElement(icon.In,{name:icon.$M.ArrowDown,color:design_system.Li.iconDefault,size:icon.lK.Sm})),endAccessory:react.createElement(component_library_text.EY,{variant:design_system.J3.bodySm,color:design_system.r7.textAlternative,style:{whiteSpace:"nowrap"}},"= $",1173.58*value.amount)})),react.createElement(text_field.A,_object_spread_props(_object_spread({},args),{placeholder:"Public address (0x), or ENS",value:value.accountAddress,name:"accountAddress",onChange:handleOnChange,truncate:!0,startAccessory:value.accountAddress&&react.createElement(avatar_account.vs,{size:avatar_account.oG.Sm,address:value.accountAddress}),endAccessory:42===value.accountAddress.length&&react.createElement(icon.In,{name:icon.$M.Check,color:design_system.Li.successDefault})})))},InputRef=function(args){var inputRef=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(""),2),value=_useState[0],setValue=_useState[1];return react.createElement(box.a,{display:design_system.nl.Flex},react.createElement(text_field.A,_object_spread_props(_object_spread({},args),{inputRef:inputRef,value:value,onChange:function(e){setValue(e.target.value)}})),react.createElement(component_library_button.$n,{marginLeft:1,onClick:function(){var _inputRef_current;null==(_inputRef_current=inputRef.current)||_inputRef_current.focus()}},"Edit"))},CustomInputComponent=react.forwardRef(function(_param,ref){var padding=_param.padding,paddingLeft=_param.paddingLeft,paddingRight=_param.paddingRight,props=_object_without_properties(_param,["padding","paddingLeft","paddingRight"]);return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,padding:padding,paddingLeft:paddingLeft,paddingRight:paddingRight},react.createElement(box.a,{display:design_system.nl.InlineFlex},react.createElement(input.p,_object_spread({ref:ref},props)),react.createElement(component_library_text.EY,{variant:design_system.J3.bodyXs,color:design_system.r7.textAlternative},"GoerliETH")),react.createElement(component_library_text.EY,{variant:design_system.J3.bodyXs},"No conversion rate available"))}),InputComponentStory=Template.bind({});InputComponentStory.storyName="InputComponent",InputComponentStory.args={placeholder:0,type:"number",size:design_system.or.LG,InputComponent:CustomInputComponent,startAccessory:react.createElement(icon.In,{color:design_system.Li.iconAlternative,name:icon.$M.Wallet}),value:""};var AutoComplete=Template.bind({});AutoComplete.args={autoComplete:!0,type:"password",placeholder:"Enter password",value:""};var AutoFocus=Template.bind({});AutoFocus.args={autoFocus:!0,placeholder:"AutoFocus",value:""};var DefaultValue=Template.bind({});DefaultValue.args={defaultValue:"Default value"},DefaultValue.args={value:DefaultValue.args.defaultValue||""};var Disabled=Template.bind({});Disabled.args={disabled:!0};var ErrorStory=Template.bind({});ErrorStory.args={error:!0,value:""},ErrorStory.storyName="Error";var MaxLength=Template.bind({});MaxLength.args={maxLength:10,placeholder:"Max length 10",value:""};var ReadOnly=Template.bind({});ReadOnly.args={readOnly:!0,value:"Read only"};var RequiredStory=Template.bind({});RequiredStory.args={required:!0,placeholder:"Required",value:""},RequiredStory.storyName="Required",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <TextField {...args} value={value} onChange={handleOnChange} />;
}`,...DefaultStory.parameters?.docs?.source}}},SizeStory.parameters={...SizeStory.parameters,docs:{...SizeStory.parameters?.docs,source:{originalSource:`args => {
  return <Box display={Display.InlineFlex} flexDirection={FlexDirection.Column} gap={4}>
      <TextField {...args} placeholder="TextFieldSize.Sm (32px)" size={TextFieldSize.Sm} />
      <TextField {...args} placeholder="TextFieldSize.Md (40px)" size={TextFieldSize.Md} />
      <TextField {...args} placeholder="TextFieldSize.Lg (48px)" size={TextFieldSize.Lg} />
    </Box>;
}`,...SizeStory.parameters?.docs?.source}}},Type.parameters={...Type.parameters,docs:{...Type.parameters?.docs,source:{originalSource:`args => <Box display={Display.InlineFlex} flexDirection={FlexDirection.Column} gap={4}>
    <TextField {...args} placeholder="Default" />
    <TextField {...args} type={TextFieldType.Password} placeholder="Password" />
    <TextField {...args} type={TextFieldType.Number} placeholder="Number" />
  </Box>`,...Type.parameters?.docs?.source}}},Truncate.parameters={...Truncate.parameters,docs:{...Truncate.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <TextField {...args} value={value} onChange={handleOnChange} />;
}`,...Truncate.parameters?.docs?.source}}},StartAccessoryEndAccessory.parameters={...StartAccessoryEndAccessory.parameters,docs:{...StartAccessoryEndAccessory.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState({
    search: '',
    address: '',
    amount: 1,
    accountAddress: '0x514910771af9ca656af840dff83e8264ecf986ca'
  });
  const handleOnChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };
  const handleTokenPrice = (tokenAmount, priceUSD) => {
    return tokenAmount * priceUSD;
  };
  return <Box display={Display.InlineFlex} flexDirection={FlexDirection.Column} gap={4}>
      <TextField {...args} placeholder="Search" value={value.search} name="search" onChange={handleOnChange} startAccessory={<Icon color={IconColor.iconAlternative} name={IconName.Search} />} />
      <TextField {...args} placeholder="Public address (0x), or ENS" value={value.address} name="address" onChange={handleOnChange} endAccessory={<ButtonIcon iconName={IconName.ScanBarcode} ariaLabel="Scan QR code" iconProps={{
      color: IconColor.primaryDefault
    }} />} />
      <TextField {...args} placeholder="Enter amount" value={value.amount} name="amount" onChange={handleOnChange} type="number" truncate startAccessory={<Box as="button" style={{
      padding: 0
    }} backgroundColor={BackgroundColor.transparent} gap={1} display={Display.Flex} alignItems={AlignItems.center}>
            <AvatarToken name="eth" src="./images/eth_logo.svg" size={AvatarTokenSize.Sm} />
            <Text>ETH</Text>
            <Icon name={IconName.ArrowDown} color={IconColor.iconDefault} size={IconSize.Sm} />
          </Box>} endAccessory={<Text variant={TextVariant.bodySm} color={TextColor.textAlternative} style={{
      whiteSpace: 'nowrap'
    }}>
            = \${handleTokenPrice(value.amount, 1173.58)}
          </Text>} />
      <TextField {...args} placeholder="Public address (0x), or ENS" value={value.accountAddress} name="accountAddress" onChange={handleOnChange} truncate startAccessory={value.accountAddress && <AvatarAccount size={AvatarAccountSize.Sm} address={value.accountAddress} />} endAccessory={value.accountAddress.length === 42 && <Icon name={IconName.Check} color={IconColor.successDefault} />} />
    </Box>;
}`,...StartAccessoryEndAccessory.parameters?.docs?.source}}},InputRef.parameters={...InputRef.parameters,docs:{...InputRef.parameters?.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const handleOnClick = () => {
    inputRef.current?.focus();
  };
  const handleOnChange = e => {
    setValue(e.target.value);
  };
  return <Box display={Display.Flex}>
      <TextField {...args} inputRef={inputRef} value={value} onChange={handleOnChange} />
      <Button marginLeft={1} onClick={handleOnClick}>
        Edit
      </Button>
    </Box>;
}`,...InputRef.parameters?.docs?.source}}},InputComponentStory.parameters={...InputComponentStory.parameters,docs:{...InputComponentStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <TextField {...args} value={value} onChange={handleOnChange} />;
}`,...InputComponentStory.parameters?.docs?.source}}},AutoComplete.parameters={...AutoComplete.parameters,docs:{...AutoComplete.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <TextField {...args} value={value} onChange={handleOnChange} />;
}`,...AutoComplete.parameters?.docs?.source}}},AutoFocus.parameters={...AutoFocus.parameters,docs:{...AutoFocus.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <TextField {...args} value={value} onChange={handleOnChange} />;
}`,...AutoFocus.parameters?.docs?.source}}},DefaultValue.parameters={...DefaultValue.parameters,docs:{...DefaultValue.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <TextField {...args} value={value} onChange={handleOnChange} />;
}`,...DefaultValue.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <TextField {...args} value={value} onChange={handleOnChange} />;
}`,...Disabled.parameters?.docs?.source}}},ErrorStory.parameters={...ErrorStory.parameters,docs:{...ErrorStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <TextField {...args} value={value} onChange={handleOnChange} />;
}`,...ErrorStory.parameters?.docs?.source}}},MaxLength.parameters={...MaxLength.parameters,docs:{...MaxLength.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <TextField {...args} value={value} onChange={handleOnChange} />;
}`,...MaxLength.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <TextField {...args} value={value} onChange={handleOnChange} />;
}`,...ReadOnly.parameters?.docs?.source}}},RequiredStory.parameters={...RequiredStory.parameters,docs:{...RequiredStory.parameters?.docs,source:{originalSource:`args => {
  const [{
    value
  }, updateArgs] = useArgs();
  const handleOnChange = e => {
    updateArgs({
      value: e.target.value
    });
  };
  return <TextField {...args} value={value} onChange={handleOnChange} />;
}`,...RequiredStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","SizeStory","Type","Truncate","StartAccessoryEndAccessory","InputRef","InputComponentStory","AutoComplete","AutoFocus","DefaultValue","Disabled","ErrorStory","MaxLength","ReadOnly","RequiredStory"];try{Type.displayName="Type",Type.__docgenInfo={description:"",displayName:"Type",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text-field/text-field.stories.tsx#Type"]={docgenInfo:Type.__docgenInfo,name:"Type",path:"ui/components/component-library/text-field/text-field.stories.tsx#Type"})}catch(__react_docgen_typescript_loader_error){}try{StartAccessoryEndAccessory.displayName="StartAccessoryEndAccessory",StartAccessoryEndAccessory.__docgenInfo={description:"",displayName:"StartAccessoryEndAccessory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text-field/text-field.stories.tsx#StartAccessoryEndAccessory"]={docgenInfo:StartAccessoryEndAccessory.__docgenInfo,name:"StartAccessoryEndAccessory",path:"ui/components/component-library/text-field/text-field.stories.tsx#StartAccessoryEndAccessory"})}catch(__react_docgen_typescript_loader_error){}try{InputRef.displayName="InputRef",InputRef.__docgenInfo={description:"",displayName:"InputRef",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text-field/text-field.stories.tsx#InputRef"]={docgenInfo:InputRef.__docgenInfo,name:"InputRef",path:"ui/components/component-library/text-field/text-field.stories.tsx#InputRef"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-component-library-text-field-text-field-stories.7a388d1e.iframe.bundle.js.map