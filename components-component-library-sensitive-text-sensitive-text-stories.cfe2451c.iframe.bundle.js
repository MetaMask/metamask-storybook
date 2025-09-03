"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[82089],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/sensitive-text/sensitive-text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,DefaultStory:()=>DefaultStory,IsHidden:()=>IsHidden,Length:()=>Length,__namedExportsOrder:()=>__namedExportsOrder,default:()=>sensitive_text_stories});var react=__webpack_require__("./node_modules/react/index.js"),sensitive_text=__webpack_require__("./ui/components/component-library/sensitive-text/sensitive-text.tsx"),sensitive_text_types=__webpack_require__("./ui/components/component-library/sensitive-text/sensitive-text.types.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"sensitivetext",children:"SensitiveText"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"SensitiveText is a component that extends the Text component to handle sensitive information. It provides the ability to hide or show the text content, replacing it with dots when hidden."}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:DefaultStory}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"SensitiveText"})," component extends the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component. See the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component for an extended list of props."]}),`
`,(0,jsx_runtime.jsx)(dist.H2,{of:DefaultStory}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"The text content to be displayed or hidden."}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:Children}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SensitiveText } from '../../component-library';

<SensitiveText>Sensitive Information</SensitiveText>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"ishidden",children:"IsHidden"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isHidden"})," prop to determine whether the text should be hidden or visible. When ",(0,jsx_runtime.jsx)(_components.code,{children:"isHidden"})," is ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),", the component will display dots instead of the actual text."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:IsHidden}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SensitiveText } from '../../component-library';

<SensitiveText isHidden>Sensitive Information</SensitiveText>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"length",children:"Length"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"length"})," prop to determine the length of the hidden text (number of dots). Can be a predefined ",(0,jsx_runtime.jsx)(_components.code,{children:"SensitiveTextLength"})," or a custom string number."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"The following predefined length options are available:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"SensitiveTextLength.Short"}),": ",(0,jsx_runtime.jsx)(_components.code,{children:"6"})]}),`
`]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"SensitiveTextLength.Medium"}),": ",(0,jsx_runtime.jsx)(_components.code,{children:"9"})]}),`
`]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"SensitiveTextLength.Long"}),": ",(0,jsx_runtime.jsx)(_components.code,{children:"12"})]}),`
`]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"SensitiveTextLength.ExtraLong"}),": ",(0,jsx_runtime.jsx)(_components.code,{children:"20"})]}),`
`]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The number of dots displayed is determined by the ",(0,jsx_runtime.jsx)(_components.code,{children:"length"})," prop."]}),`
`]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["If an invalid ",(0,jsx_runtime.jsx)(_components.code,{children:"length"})," is provided, the component will fall back to ",(0,jsx_runtime.jsx)(_components.code,{children:"SensitiveTextLength.Short"})," and log a warning."]}),`
`]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Custom length values can be provided as strings, e.g. ",(0,jsx_runtime.jsx)(_components.code,{children:"15"}),"."]}),`
`]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:Length}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SensitiveText, SensitiveTextLength } from '../../component-library';

<SensitiveText length={SensitiveTextLength.Short}>
  Length "short" (6 characters)
</SensitiveText>
<SensitiveText length={SensitiveTextLength.Medium}>
  Length "medium" (9 characters)
</SensitiveText>
<SensitiveText length={SensitiveTextLength.Long}>
  Length "long" (12 characters)
</SensitiveText>
<SensitiveText length={SensitiveTextLength.ExtraLong}>
  Length "extra long" (20 characters)
</SensitiveText>
<SensitiveText length="15">
  Length "15" (15 characters)
</SensitiveText>
`})})]})}var box=__webpack_require__("./ui/components/component-library/box/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let sensitive_text_stories={title:"Components/ComponentLibrary/SensitiveText",component:sensitive_text.E,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},args:{children:"Sensitive information",isHidden:!1,length:sensitive_text_types.C.Short}};var DefaultStory={};DefaultStory.storyName="Default";var Children={args:{children:"Sensitive information"},render:function(args){return react.createElement(sensitive_text.E,args)}},IsHidden={args:{isHidden:!0},render:function(args){return react.createElement(sensitive_text.E,args)}},Length={args:{isHidden:!0},render:function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:2},react.createElement(sensitive_text.E,_object_spread_props(_object_spread({},args),{length:sensitive_text_types.C.Short}),'Length "short" (6 characters)'),react.createElement(sensitive_text.E,_object_spread_props(_object_spread({},args),{length:sensitive_text_types.C.Medium}),'Length "medium" (9 characters)'),react.createElement(sensitive_text.E,_object_spread_props(_object_spread({},args),{length:sensitive_text_types.C.Long}),'Length "long" (12 characters)'),react.createElement(sensitive_text.E,_object_spread_props(_object_spread({},args),{length:sensitive_text_types.C.ExtraLong}),'Length "extra long" (20 characters)'),react.createElement(sensitive_text.E,_object_spread_props(_object_spread({},args),{length:"15"}),'Length "15" (15 characters)'))}};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"{}",...DefaultStory.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Sensitive information'
  },
  render: args => <SensitiveText {...args} />
}`,...Children.parameters?.docs?.source}}},IsHidden.parameters={...IsHidden.parameters,docs:{...IsHidden.parameters?.docs,source:{originalSource:`{
  args: {
    isHidden: true
  },
  render: args => <SensitiveText {...args} />
}`,...IsHidden.parameters?.docs?.source}}},Length.parameters={...Length.parameters,docs:{...Length.parameters?.docs,source:{originalSource:`{
  args: {
    isHidden: true
  },
  render: args => <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={2}>
      <SensitiveText {...args} length={SensitiveTextLength.Short}>
        Length "short" (6 characters)
      </SensitiveText>
      <SensitiveText {...args} length={SensitiveTextLength.Medium}>
        Length "medium" (9 characters)
      </SensitiveText>
      <SensitiveText {...args} length={SensitiveTextLength.Long}>
        Length "long" (12 characters)
      </SensitiveText>
      <SensitiveText {...args} length={SensitiveTextLength.ExtraLong}>
        Length "extra long" (20 characters)
      </SensitiveText>
      <SensitiveText {...args} length="15">
        Length "15" (15 characters)
      </SensitiveText>
    </Box>
}`,...Length.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Children","IsHidden","Length"]}}]);
//# sourceMappingURL=components-component-library-sensitive-text-sensitive-text-stories.cfe2451c.iframe.bundle.js.map