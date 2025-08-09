"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[59491],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/select-button/select-button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,DefaultStory:()=>DefaultStory,DefaultValue:()=>DefaultValue,Description:()=>Description,EndAccessory:()=>EndAccessory,IsBlock:()=>IsBlock,IsDanger:()=>IsDanger,IsDisabled:()=>IsDisabled,Label:()=>Label,Placeholder:()=>Placeholder,SelectWrapperDemo:()=>SelectWrapperDemo,Size:()=>Size,StartAccessory:()=>StartAccessory,Value:()=>Value,__namedExportsOrder:()=>__namedExportsOrder,default:()=>select_button_stories});var react=__webpack_require__("./node_modules/react/index.js"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),select_button=__webpack_require__("./ui/components/component-library/select-button/select-button.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"selectbutton",children:"SelectButton"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The trigger for the ",(0,jsx_runtime.jsx)(_components.code,{children:"Select"})," component"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["When using ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," you can use the supplied props or use the object prop shape recommendation below for ",(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"}),", and ",(0,jsx_runtime.jsx)(_components.code,{children:"value"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Prop Shape Recommendation Example:"}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:`{
  label: 'Label',
  description: 'Description',
  startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
  endAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
}
`})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:select_button.J}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButtonSize"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/components/component-library"})," to change the size of ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButtonSize.Md"})]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Please be sure to take note of the size used for the ",(0,jsx_runtime.jsx)(_components.code,{children:"startAccessory"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"endAccessory"})," components based on the design."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--size"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectButton,
  SelectButtonSize,
} from '../../component-library';

<SelectButton size={SelectButtonSize.Sm} label={SelectButtonSize.Sm} />
<SelectButton size={SelectButtonSize.Md} label={SelectButtonSize.Md} />
<SelectButton size={SelectButtonSize.Lg} label={SelectButtonSize.Lg} />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"isblock",children:"isBlock"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isBlock"})," boolean prop to make the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component full width. Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"false"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--is-block"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SelectButton } from '../../component-library';

<SelectButton size={SelectButtonSize.Sm} isBlock={true} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"isdanger",children:"isDanger"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isDanger"})," boolean prop to make the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component danger/error. Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"false"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--is-danger"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SelectButton } from '../../component-library';

<SelectButton size={SelectButtonSize.Sm} isDanger={true} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"isdisabled",children:"isDisabled"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isDisabled"})," boolean prop to make the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component disabled. Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"false"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--is-disabled"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SelectButton } from '../../component-library';

<SelectButton size={SelectButtonSize.Sm} isDisabled={true} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"label",children:"Label"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," prop to add a label to the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--label"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SelectButton } from '../../component-library';

<SelectButton size={SelectButtonSize.Sm} label="This is the label" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"description",children:"Description"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"description"})," prop to add a description to the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--description"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SelectButton } from '../../component-library';

<SelectButton description="This is a demo of description" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"startaccessory",children:"StartAccessory"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"startAccessory"})," prop to add a component to the start of the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--start-accessory"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectButton,
  AvatarAccount,
  AvatarAccountSize,
} from '../../component-library';

<SelectButton
  startAccessory={
    <AvatarAccount
      address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
      size={AvatarAccountSize.Sm}
    />
  }
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"endaccessory",children:"EndAccessory"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"endAccessory"})," prop to add a component to the start of the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--end-accessory"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectButton,
  AvatarAccount,
  AvatarAccountSize,
} from '../../component-library';

<SelectButton
  endAccessory={
    <AvatarAccount
      address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
      size={AvatarAccountSize.Sm}
    />
  }
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Any children passed to the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component will render in the same content area as the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"description"}),". This does not interfere with the usage of ",(0,jsx_runtime.jsx)(_components.code,{children:"startAccessory"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"endAccessory"}),", which can still be utilized as needed."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--children"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectButton,
  Text,
  TextVariant,
  TextColor,
} from '../../component-library';

<SelectButton>
  <Text variant={TextVariant.bodySm} color={TextColor.sepolia}>
    Children demo text
  </Text>
</SelectButton>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"placeholder",children:"Placeholder"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"})," prop to add a placeholder to the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"}),` component.
Recommended to use the object prop shape recommendation when using `,(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"})," so that it will align with the ",(0,jsx_runtime.jsx)(_components.code,{children:"value"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"})," prop shape recommendation."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Example Prop Shape Recommendation:"}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:`{
  label: 'Label',
  description: 'Description',
  startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
  endAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
}
`})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--placeholder"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SelectButton } from '../../component-library';

<SelectButton placeholder="Placeholder as simple string" />
<SelectButton
  placeholder={{
    label: 'Placeholder label',
    description: 'Placeholder example using prop shape recommendation',
  }}
/>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"value",children:"Value"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"value"})," prop to add a value to the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Recommended to use the object prop shape recommendation when using ",(0,jsx_runtime.jsx)(_components.code,{children:"value"})," so that it will align with the ",(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"}),` prop shape recommendation.
Example Prop Shape Recommendation:`]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:`{
  label: 'Label',
  description: 'Description',
  startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
  endAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
}
`})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--value"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  AvatarAccount,
  AvatarAccountSize,
  SelectButton,
} from '../../component-library';

<SelectButton
  value={{
    startAccessory: (
      <AvatarAccount
        address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
        size={AvatarAccountSize.Sm}
      />
    ),
    label: 'Option 1',
    description: 'Option 1 using prop shape recommendation',
  }}
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"default-value",children:"Default Value"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"})," prop to add a default value to the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"}),` component.
Recommend using the object prop shape recommendation when using `,(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"})," so that it will align with the ",(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"value"}),` prop shape recommendation.
Example Prop Shape Recommendation:`]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:`{
  label: 'Label',
  description: 'Description',
  startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
  endAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
}
`})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--default-value"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  AvatarAccount,
  AvatarAccountSize,
  SelectButton,
} from '../../component-library';

<SelectButton
  defaultValue={{
    startAccessory: (
      <AvatarAccount
        address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
        size={AvatarAccountSize.Sm}
      />
    ),
    label: 'Option 1',
    description: 'Option 1 using prop shape recommendation',
  }}
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"use-selectwrapper",children:"Use SelectWrapper"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," is built to work as a triggerComponent for ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," and will work with the ",(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"}),", and ",(0,jsx_runtime.jsx)(_components.code,{children:"value"})," prop shape recommendation when set at the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"}),` level.
Example Prop Shape Recommendation:`]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:`{
  label: 'Label',
  description: 'Description',
  startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
  endAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
}
`})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--use-select-wrapper"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  AvatarAccount,
  AvatarAccountSize,
  SelectButton,
  SelectWrapper,
} from '../../component-library';

<SelectWrapper
  placeholder={{
    label: 'Please select an option',
    description:
      'This demo is using SelectWrapper and utilizing the prop shape recommendation',
  }}
  triggerComponent={<SelectButton />}
>
  <SelectOption
    value={{
      startAccessory: (
        <AvatarAccount
          address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
          size={AvatarAccountSize.Sm}
        />
      ),
      label: 'Option 1',
      description: 'You have selected option 1',
    }}
  >
    Option 1
  </SelectOption>
  <SelectOption
    value={{
      startAccessory: (
        <AvatarAccount
          address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
          size={AvatarAccountSize.Sm}
        />
      ),
      label: 'Option 2',
      description: 'You have selected option 2',
    }}
  >
    Option 2
  </SelectOption>
  <SelectOption
    value={{
      startAccessory: (
        <AvatarAccount
          address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
          size={AvatarAccountSize.Sm}
        />
      ),
      label: 'Option 3',
      description: 'You have selected option 3',
    }}
  >
    Option 3
  </SelectOption>
</SelectWrapper>;
`})})]})}var select_button_types=__webpack_require__("./ui/components/component-library/select-button/select-button.types.ts"),avatar_base=__webpack_require__("./ui/components/component-library/avatar-base/index.ts"),select_wrapper=__webpack_require__("./ui/components/component-library/select-wrapper/index.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),avatar_account=__webpack_require__("./ui/components/component-library/avatar-account/index.ts"),select_option=__webpack_require__("./ui/components/component-library/select-option/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let select_button_stories={title:"Components/ComponentLibrary/SelectButton",component:select_button.J,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{},args:{startAccessory:react.createElement(avatar_base.d,{size:avatar_base.S.Sm}),label:"Label",description:"Lorem ipsum Lorem ipsum",endAccessory:react.createElement(avatar_base.d,{size:avatar_base.S.Sm})}};var Template=function(args){return react.createElement(select_button.J,args)},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var Size=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,gap:3},react.createElement(select_button.J,_object_spread_props(_object_spread({},args),{size:select_button_types.U.Sm,label:select_button_types.U.Sm,startAccessory:react.createElement(avatar_base.d,{size:avatar_base.S.Xs}),endAccessory:react.createElement(avatar_base.d,{size:avatar_base.S.Xs})})),react.createElement(select_button.J,_object_spread_props(_object_spread({},args),{size:select_button_types.U.Md,label:select_button_types.U.Md})),react.createElement(select_button.J,_object_spread_props(_object_spread({},args),{size:select_button_types.U.Lg,label:select_button_types.U.Lg})))},IsBlock=Template.bind({});IsBlock.args={isBlock:!0},IsBlock.storyName="isBlock";var IsDanger=Template.bind({});IsDanger.args={isDanger:!0},IsDanger.storyName="isDanger";var IsDisabled=Template.bind({});IsDisabled.args={isDisabled:!0},IsDisabled.storyName="isDisabled";var Label=Template.bind({});Label.args={label:"This is the label",description:"",endAccessory:""};var Description=Template.bind({});Description.args={description:"This is a demo of description",endAccessory:""};var StartAccessory=Template.bind({});StartAccessory.args={startAccessory:react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:avatar_account.oG.Sm}),endAccessory:""};var EndAccessory=Template.bind({});EndAccessory.args={endAccessory:react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:avatar_account.oG.Sm}),startAccessory:""};var Children=Template.bind({});Children.args={description:"",startAccessory:"",endAccessory:"",children:react.createElement(component_library_text.EY,{variant:design_system.J3.bodySm,color:design_system.r7.warningDefault},"Children demo text")};var Placeholder=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,gap:3},react.createElement(select_button.J,args),react.createElement(select_button.J,_object_spread_props(_object_spread({},args),{placeholder:{label:"Placeholder label",description:"Placeholder example using prop shape recommendation"}})))};Placeholder.args={label:"",description:"",startAccessory:"",endAccessory:"",placeholder:"Placeholder as simple string"};var Value=Template.bind({});Value.args={value:{startAccessory:react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:avatar_account.oG.Sm}),label:"Option 1",description:"Option 1 using prop shape recommendation"},endAccessory:""};var DefaultValue=Template.bind({});DefaultValue.args={defaultValue:{startAccessory:react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:avatar_account.oG.Sm}),label:"Option 1",description:"Option 1 using prop shape recommendation"},endAccessory:""};var SelectWrapperDemo=function(args){return react.createElement(select_wrapper.SK,{placeholder:{label:"Please select an option",description:"This demo is using SelectWrapper and utilizing the prop shape recommendation"},triggerComponent:react.createElement(select_button.J,args)},react.createElement(select_option.O,{value:{startAccessory:react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:avatar_account.oG.Sm}),label:"Option 1",description:"You have selected option 1"}},"Option 1"),react.createElement(select_option.O,{value:{startAccessory:react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:avatar_account.oG.Sm}),label:"Option 2",description:"You have selected option 2"}},"Option 2"),react.createElement(select_option.O,{value:{startAccessory:react.createElement(avatar_account.vs,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:avatar_account.oG.Sm}),label:"Option 3",description:"You have selected option 3"}},"Option 3"))};SelectWrapperDemo.args={startAccessory:"",endAccessory:""},SelectWrapperDemo.storyName="Using SelectWrapper",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...DefaultStory.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:`args => {
  return <Box display={Display.Flex} gap={3}>
      <SelectButton {...args} size={SelectButtonSize.Sm} label={SelectButtonSize.Sm} startAccessory={<AvatarBase size={AvatarBaseSize.Xs} />} endAccessory={<AvatarBase size={AvatarBaseSize.Xs} />} />
      <SelectButton {...args} size={SelectButtonSize.Md} label={SelectButtonSize.Md} />
      <SelectButton {...args} size={SelectButtonSize.Lg} label={SelectButtonSize.Lg} />
    </Box>;
}`,...Size.parameters?.docs?.source}}},IsBlock.parameters={...IsBlock.parameters,docs:{...IsBlock.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...IsBlock.parameters?.docs?.source}}},IsDanger.parameters={...IsDanger.parameters,docs:{...IsDanger.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...IsDanger.parameters?.docs?.source}}},IsDisabled.parameters={...IsDisabled.parameters,docs:{...IsDisabled.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...IsDisabled.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...Label.parameters?.docs?.source}}},Description.parameters={...Description.parameters,docs:{...Description.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...Description.parameters?.docs?.source}}},StartAccessory.parameters={...StartAccessory.parameters,docs:{...StartAccessory.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...StartAccessory.parameters?.docs?.source}}},EndAccessory.parameters={...EndAccessory.parameters,docs:{...EndAccessory.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...EndAccessory.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...Children.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:`args => {
  return <Box display={Display.Flex} gap={3}>
      <SelectButton {...args} />
      <SelectButton {...args} placeholder={{
      label: 'Placeholder label',
      description: 'Placeholder example using prop shape recommendation'
    }} />
    </Box>;
}`,...Placeholder.parameters?.docs?.source}}},Value.parameters={...Value.parameters,docs:{...Value.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...Value.parameters?.docs?.source}}},DefaultValue.parameters={...DefaultValue.parameters,docs:{...DefaultValue.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...DefaultValue.parameters?.docs?.source}}},SelectWrapperDemo.parameters={...SelectWrapperDemo.parameters,docs:{...SelectWrapperDemo.parameters?.docs,source:{originalSource:`args => {
  return <SelectWrapper placeholder={{
    label: 'Please select an option',
    description: 'This demo is using SelectWrapper and utilizing the prop shape recommendation'
  }} triggerComponent={<SelectButton {...args} />}>
      <SelectOption value={{
      startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
      label: 'Option 1',
      description: 'You have selected option 1'
    }}>
        Option 1
      </SelectOption>
      <SelectOption value={{
      startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
      label: 'Option 2',
      description: 'You have selected option 2'
    }}>
        Option 2
      </SelectOption>
      <SelectOption value={{
      startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
      label: 'Option 3',
      description: 'You have selected option 3'
    }}>
        Option 3
      </SelectOption>
    </SelectWrapper>;
}`,...SelectWrapperDemo.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Size","IsBlock","IsDanger","IsDisabled","Label","Description","StartAccessory","EndAccessory","Children","Placeholder","Value","DefaultValue","SelectWrapperDemo"]}}]);
//# sourceMappingURL=components-component-library-select-button-select-button-stories.db2e8241.iframe.bundle.js.map