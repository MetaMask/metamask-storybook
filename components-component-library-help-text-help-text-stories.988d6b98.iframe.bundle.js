(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[9395],{"./node_modules/@mdx-js/react/lib/index.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{RP:()=>useMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-16.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kQ;return new Promise((resolve,reject)=>{__webpack_require__.e(21294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ov,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/memoizerific sync recursive"(module){function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./ui/components/component-library/help-text/help-text.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,ColorStory:()=>ColorStory,DefaultStory:()=>DefaultStory,SeverityStory:()=>SeverityStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>help_text_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),help_text=__webpack_require__("./ui/components/component-library/help-text/help-text.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"helptext",children:"HelpText"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"HelpText"})," is used to provide instructions or feedback text under a form field including error, and success messages."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-helptext--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:help_text.$}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"HelpText"})," accepts all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-text--default-story#props",children:"Text"})," component props"]}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:component_library_text.EY}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"HelpText"})," renders as a ",(0,jsx_runtime.jsx)(_components.code,{children:"<p>"})," tag if the child is a ",(0,jsx_runtime.jsx)(_components.code,{children:"string"})," or a ",(0,jsx_runtime.jsx)(_components.code,{children:"<div>"})," if the child is an ",(0,jsx_runtime.jsx)(_components.code,{children:"object"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { IconColor } from '../../../helpers/constants/design-system';
import { HelpText, Icon, IconName, IconSize } from '../../component-library';

<HelpText>Plain text</HelpText> // renders as <p>Plain text</p>
<HelpText>
  <span>Text and icon</span>
  <Icon
    marginLeft={1}
    color={IconColor.iconAlternative}
    name={IconName.Warning}
    size={IconSize.Inherit}
  />
</HelpText> // renders as <div><span>Text and icon</span> <div style={{background: icon/warning.svg}} /></div>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"severity",children:"Severity"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"severity"})," prop and ",(0,jsx_runtime.jsx)(_components.code,{children:"HelpTextSeverity"})," enum to change the severity of the ",(0,jsx_runtime.jsx)(_components.code,{children:"HelpText"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-helptext--severity-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { HelpText, HelpTextSeverity } from '../../component-library';

<HelpText>HelpText without severity prop</HelpText>
<HelpText severity={HelpTextSeverity.Danger}>
  HelpText with severity: SEVERITY.DANGER
</HelpText>
<HelpText severity={HelpTextSeverity.Success}>
  HelpText with severity: SEVERITY.SUCCESS
</HelpText>
<HelpText severity={HelpTextSeverity.Warning}>
  HelpText with severity: SEVERITY.WARNING
</HelpText>
<HelpText severity={HelpTextSeverity.Info}>
  HelpText with severity: SEVERITY.INFO
</HelpText>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"color",children:"Color"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["It may be useful to change the color of the ",(0,jsx_runtime.jsx)(_components.code,{children:"HelpText"}),". Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"color"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextColor"})," enum to change the color of the ",(0,jsx_runtime.jsx)(_components.code,{children:"HelpText"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"TextColor.textDefault"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-helptext--color-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextColor } from '../../../helpers/constants/design-system';
import { HelpText } from '../../component-library';

<HelpText color={TextColor.textDefault}>
  This HelpText default color is TextColor.textDefault
</HelpText>
<HelpText color={TextColor.textAlternative}>
  This HelpText color is TextColor.textAlternative
</HelpText>
<HelpText color={TextColor.textMuted}>
  This HelpText color is TextColor.textMuted
</HelpText>
`})})]})}var design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),help_text_types=__webpack_require__("./ui/components/component-library/help-text/help-text.types.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),icon=__webpack_require__("./ui/components/component-library/icon/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let help_text_stories={title:"Components/ComponentLibrary/HelpText",component:help_text.$,tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{children:{control:"text"},className:{control:"text"},severity:{control:"select",options:Object.values(help_text_types.e)},color:{control:"select",options:Object.values(design_system.r7)}},args:{children:"Help text"}};var DefaultStory=(function(args){return react.createElement(help_text.$,args)}).bind({});DefaultStory.storyName="Default";var Children=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:2},react.createElement(help_text.$,args,"Plain text"),react.createElement(help_text.$,null,react.createElement("span",null,"Text and icon"),react.createElement(icon.In,{marginLeft:1,color:design_system.Li.iconAlternative,name:icon.$M.Warning,size:icon.lK.Inherit,as:"span"})))},SeverityStory=function(args){return react.createElement(react.Fragment,null,react.createElement(help_text.$,args,"HelpText without severity prop"),react.createElement(help_text.$,_object_spread_props(_object_spread({},args),{severity:help_text_types.e.Danger}),"HelpText with severity: HelpTextSeverity.Danger"),react.createElement(help_text.$,_object_spread_props(_object_spread({},args),{severity:help_text_types.e.Success}),"HelpText with severity: HelpTextSeverity.Success"),react.createElement(help_text.$,_object_spread_props(_object_spread({},args),{severity:help_text_types.e.Warning}),"HelpText with severity: HelpTextSeverity.Warning"),react.createElement(help_text.$,_object_spread_props(_object_spread({},args),{severity:help_text_types.e.Info}),"HelpText with severity: HelpTextSeverity.Info"))};SeverityStory.storyName="Severity";var ColorStory=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:2},react.createElement(help_text.$,_object_spread({color:design_system.r7.textDefault},args),"This HelpText default color is TextColor.textDefault"),react.createElement(help_text.$,_object_spread({color:design_system.r7.textAlternative},args),"This HelpText color is TextColor.textAlternative"),react.createElement(help_text.$,_object_spread({color:design_system.r7.textMuted},args),"This HelpText color is TextColor.textMuted"))};ColorStory.storyName="Color",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <HelpText {...args} />",...DefaultStory.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={2}>
    <HelpText {...args}>Plain text</HelpText>
    <HelpText>
      <span>Text and icon</span>
      <Icon marginLeft={1} color={IconColor.iconAlternative} name={IconName.Warning} size={IconSize.Inherit} as="span" />
    </HelpText>
  </Box>`,...Children.parameters?.docs?.source}}},SeverityStory.parameters={...SeverityStory.parameters,docs:{...SeverityStory.parameters?.docs,source:{originalSource:`args => <>
    <HelpText {...args}>HelpText without severity prop</HelpText>
    <HelpText {...args} severity={HelpTextSeverity.Danger}>
      HelpText with severity: HelpTextSeverity.Danger
    </HelpText>
    <HelpText {...args} severity={HelpTextSeverity.Success}>
      HelpText with severity: HelpTextSeverity.Success
    </HelpText>
    <HelpText {...args} severity={HelpTextSeverity.Warning}>
      HelpText with severity: HelpTextSeverity.Warning
    </HelpText>
    <HelpText {...args} severity={HelpTextSeverity.Info}>
      HelpText with severity: HelpTextSeverity.Info
    </HelpText>
  </>`,...SeverityStory.parameters?.docs?.source}}},ColorStory.parameters={...ColorStory.parameters,docs:{...ColorStory.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={2}>
    <HelpText color={TextColor.textDefault} {...args}>
      This HelpText default color is TextColor.textDefault
    </HelpText>
    <HelpText color={TextColor.textAlternative} {...args}>
      This HelpText color is TextColor.textAlternative
    </HelpText>
    <HelpText color={TextColor.textMuted} {...args}>
      This HelpText color is TextColor.textMuted
    </HelpText>
  </Box>`,...ColorStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Children","SeverityStory","ColorStory"]}}]);
//# sourceMappingURL=components-component-library-help-text-help-text-stories.988d6b98.iframe.bundle.js.map