"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[4499],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/container/container.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,MaxWidth:()=>MaxWidth,__namedExportsOrder:()=>__namedExportsOrder,default:()=>container_stories});var react=__webpack_require__("./node_modules/react/index.js"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",code:"code",ul:"ul",li:"li",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"container",children:"Container"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Containers are used to constrain a content's width to the current breakpoint, while keeping it fluid"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:DefaultStory}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.H2,{of:DefaultStory}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"maxwidth",children:"MaxWidth"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Using the ",(0,jsx_runtime.jsx)(_components.code,{children:"maxWidth"})," prop with ",(0,jsx_runtime.jsx)(_components.code,{children:"ContainerMaxWidth"})," enum values, you can set the maximum width of the container"]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Possible values are:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ContainerMaxWidth.Sm"})," (max-width: 360px)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ContainerMaxWidth.Md"})," (max-width: 480px)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ContainerMaxWidth.Lg"})," (max-width: 720px)"]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:MaxWidth}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { BackgroundColor } from '../../../helpers/constants/design-system';
import { Container, ContainerMaxWidth } from '../../component-library';

<Container
  maxWidth={ContainerMaxWidth.Sm}
  backgroundColor={BackgroundColor.primaryMuted}
  padding={4}
>
  Size "sm" container
</Container>
<Container
  maxWidth={ContainerMaxWidth.Md}
  backgroundColor={BackgroundColor.successMuted}
  padding={4}
>
  Size "md" container
</Container>
<Container
  maxWidth={ContainerMaxWidth.Lg}
  backgroundColor={BackgroundColor.warningMuted}
  padding={4}
>
  Size "lg" container
</Container>
<Container
  backgroundColor={BackgroundColor.errorMuted}
  padding={4}
>
  no max-width container
</Container>
`})})]})}var container_types=__webpack_require__("./ui/components/component-library/container/container.types.ts"),container=__webpack_require__("./ui/components/component-library/container/container.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let container_stories={title:"Components/ComponentLibrary/Container",component:container.m,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},args:{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam, nisl eget aliquam ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc. Nullam aliquam, nisl eget aliquam ultrices, nunc nunc aliquam nunc, vitae aliquam nunc nunc eget nunc.",maxWidth:container_types.A.Sm}};var DefaultStory=(function(args){return react.createElement(container.m,args)}).bind({});DefaultStory.storyName="Default";var MaxWidth=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:8},react.createElement(container.m,_object_spread_props(_object_spread({},args),{maxWidth:container_types.A.Sm,backgroundColor:design_system.i0.primaryMuted,padding:4}),'Size "sm" container'),react.createElement(container.m,_object_spread_props(_object_spread({},args),{maxWidth:container_types.A.Md,backgroundColor:design_system.i0.successMuted,padding:4}),'Size "md" container'),react.createElement(container.m,_object_spread_props(_object_spread({},args),{maxWidth:container_types.A.Lg,backgroundColor:design_system.i0.warningMuted,padding:4}),'Size "lg" container'),react.createElement(container.m,_object_spread_props(_object_spread({},args),{backgroundColor:design_system.i0.errorMuted,padding:4}),"no max-width container"))};MaxWidth.args={maxWidth:void 0},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  return <Container {...args} />;
}`,...DefaultStory.parameters?.docs?.source}}},MaxWidth.parameters={...MaxWidth.parameters,docs:{...MaxWidth.parameters?.docs,source:{originalSource:`args => {
  return <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={8}>
      <Container {...args} maxWidth={ContainerMaxWidth.Sm} backgroundColor={BackgroundColor.primaryMuted} padding={4}>
        Size "sm" container
      </Container>
      <Container {...args} maxWidth={ContainerMaxWidth.Md} backgroundColor={BackgroundColor.successMuted} padding={4}>
        Size "md" container
      </Container>
      <Container {...args} maxWidth={ContainerMaxWidth.Lg} backgroundColor={BackgroundColor.warningMuted} padding={4}>
        Size "lg" container
      </Container>
      <Container {...args} backgroundColor={BackgroundColor.errorMuted} padding={4}>
        no max-width container
      </Container>
    </Box>;
}`,...MaxWidth.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","MaxWidth"]}}]);
//# sourceMappingURL=components-component-library-container-container-stories.73483275.iframe.bundle.js.map