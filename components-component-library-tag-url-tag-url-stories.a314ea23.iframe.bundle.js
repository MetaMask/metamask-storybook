"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[58879],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/tag-url/tag-url.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActionButtonLabel:()=>ActionButtonLabel,DefaultStory:()=>DefaultStory,Label:()=>Label,ShowLockIcon:()=>ShowLockIcon,Src:()=>Src,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tag_url_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),tag_url=__webpack_require__("./ui/components/component-library/tag-url/tag-url.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"tag-url",children:"Tag Url"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"TagUrl"})," is a component used to display dApp information"]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-tagurl--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:tag_url.e}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"action-button-label",children:"Action Button Label"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"actionButtonLabel"})," to add a ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLink"})," inside of ",(0,jsx_runtime.jsx)(_components.code,{children:"TagUrl"}),". Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"actionButtonProps"})," prop object to add the necessary ",(0,jsx_runtime.jsx)(_components.code,{children:"href"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"onClick"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-tagurl--action-button-label"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TagUrl } from '../../ui/component-library/tag-url';

<TagUrl
  label="app.uniswap.org"
  src="https://uniswap.org/favicon.ico"
  showLockIcon
  actionButtonLabel="Permissions"
  actionButtonProps={{
    externalLink: true,
    href: 'https://metamask.io',
  }}
/>
<TagUrl
  label="app.uniswap.org"
  src="https://uniswap.org/favicon.ico"
  showLockIcon
  actionButtonLabel="Action"
  actionButtonProps={{
    externalLink: true,
    href: 'https://metamask.io',
  }}
/>
<TagUrl
  label="app.uniswap.org"
  src="https://uniswap.org/favicon.ico"
  showLockIcon
  actionButtonLabel="Click"
  actionButtonProps={{
    externalLink: true,
    href: 'https://metamask.io',
  }}
/>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"show-lock-icon",children:"Show Lock Icon"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"showLockIcon"})," prop to render a lock icon next to the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"}),". It's intended use is to display if the url uses ",(0,jsx_runtime.jsx)(_components.code,{children:"https"}),". This logic should be added during implementation and is not included in the component."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"false"})," by default."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Props for the lock icon can be changed using the ",(0,jsx_runtime.jsx)(_components.code,{children:"lockIconProps"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-tagurl--show-lock-icon"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TagUrl } from '../../ui/component-library';

<TagUrl
  label="app.uniswap.org"
  src="https://uniswap.org/favicon.ico"
  showLockIcon
  actionButtonLabel="Permissions"
/>

<TagUrl src="" label="http://notsecure.com" />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"src",children:"Src"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"src"})," prop with an image url to render the ",(0,jsx_runtime.jsx)(_components.code,{children:"AvatarFavicon"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-tagurl--src"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TagUrl } from '../../ui/component-library/tag-url';

<TagUrl
  src="https://uniswap.org/favicon.ico"
  label="app.uniswap.org"
  showLockIcon
/>
<TagUrl
  src="https://metamask.github.io/test-dapp/metamask-fox.svg"
  label="metamask.github.io"
  showLockIcon
/>
<TagUrl
  src="https://1inch.exchange/assets/favicon/favicon-32x32.png"
  label="1inch.exchange"
  showLockIcon
/>
<TagUrl label="fallback" src="" />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"label",children:"Label"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," prop for the text content of the ",(0,jsx_runtime.jsx)(_components.code,{children:"TagUrl"})," component"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Note: ",(0,jsx_runtime.jsx)(_components.code,{children:"TagUrl"})," doesn't not contain string manipulation logic to detect ",(0,jsx_runtime.jsx)(_components.code,{children:"https"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"http"})," it will display whatever is passed to ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-tagurl--label"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TagUrl } from '../../ui/component-library/tag-url';

<TagUrl
  src="https://uniswap.org/favicon.ico"
  showLockIcon
  label="app.uniswap.org"
/>
<TagUrl
  src="https://metamask.github.io/test-dapp/metamask-fox.svg"
  showLockIcon
  label="metamask.github.io"
/>
<TagUrl
  src=""
  showLockIcon
  label="metamask.github.io"
/>
`})})]})}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let tag_url_stories={title:"Components/ComponentLibrary/TagUrl",component:tag_url.e,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{label:{control:"text"},src:{control:"text"},actionButtonLabel:{control:"text"},showLockIcon:{control:"boolean"}},args:{label:"app.uniswap.org",src:"https://uniswap.org/favicon.ico",showLockIcon:!0}};var DefaultStory=(function(args){return react.createElement(tag_url.e,args)}).bind({});DefaultStory.storyName="Default",DefaultStory.args={actionButtonLabel:"Permissions"};var ActionButtonLabel=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:2},react.createElement(tag_url.e,args),react.createElement(tag_url.e,_object_spread_props(_object_spread({},args),{actionButtonLabel:"Action"})),react.createElement(tag_url.e,_object_spread_props(_object_spread({},args),{actionButtonLabel:"Click"})))};ActionButtonLabel.args={actionButtonLabel:"Permissions",actionButtonProps:{externalLink:!0,href:"https://metamask.io"}};var ShowLockIcon=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:2},react.createElement(tag_url.e,_object_spread_props(_object_spread({},args),{label:"app.uniswap.org",src:"https://uniswap.org/favicon.ico",showLockIcon:!0})),react.createElement(tag_url.e,_object_spread_props(_object_spread({},args),{label:"http://notsecure.com",src:"",showLockIcon:!1})))},Src=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:2},react.createElement(tag_url.e,_object_spread_props(_object_spread({},args),{label:"app.uniswap.org",src:"https://uniswap.org/favicon.ico"})),react.createElement(tag_url.e,_object_spread_props(_object_spread({},args),{label:"metamask.github.io",src:"https://metamask.github.io/test-dapp/metamask-fox.svg"})),react.createElement(tag_url.e,_object_spread_props(_object_spread({},args),{label:"1inch.exchange",src:"https://1inch.exchange/assets/favicon/favicon-32x32.png"})),react.createElement(tag_url.e,{label:"fallback",src:""}))},Label=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:2},react.createElement(tag_url.e,args),react.createElement(tag_url.e,_object_spread_props(_object_spread({},args),{label:"metamask.github.io",src:"https://metamask.github.io/test-dapp/metamask-fox.svg"})),react.createElement(tag_url.e,_object_spread_props(_object_spread({},args),{src:"",label:"metamask.github.io"})))};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <TagUrl {...args} />",...DefaultStory.parameters?.docs?.source}}},ActionButtonLabel.parameters={...ActionButtonLabel.parameters,docs:{...ActionButtonLabel.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={2}>
    <TagUrl {...args} />
    <TagUrl {...args} actionButtonLabel="Action" />
    <TagUrl {...args} actionButtonLabel="Click" />
  </Box>`,...ActionButtonLabel.parameters?.docs?.source}}},ShowLockIcon.parameters={...ShowLockIcon.parameters,docs:{...ShowLockIcon.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={2}>
    <TagUrl {...args} label="app.uniswap.org" src="https://uniswap.org/favicon.ico" showLockIcon />
    <TagUrl {...args} label="http://notsecure.com" src="" showLockIcon={false} />
  </Box>`,...ShowLockIcon.parameters?.docs?.source}}},Src.parameters={...Src.parameters,docs:{...Src.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={2}>
    <TagUrl {...args} label="app.uniswap.org" src="https://uniswap.org/favicon.ico" />
    <TagUrl {...args} label="metamask.github.io" src="https://metamask.github.io/test-dapp/metamask-fox.svg" />
    <TagUrl {...args} label="1inch.exchange" src="https://1inch.exchange/assets/favicon/favicon-32x32.png" />
    <TagUrl label="fallback" src="" />
  </Box>`,...Src.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={2}>
    <TagUrl {...args} />
    <TagUrl {...args} label="metamask.github.io" src="https://metamask.github.io/test-dapp/metamask-fox.svg" />
    <TagUrl {...args} src="" label="metamask.github.io" />
  </Box>`,...Label.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","ActionButtonLabel","ShowLockIcon","Src","Label"];try{DefaultStory.displayName="DefaultStory",DefaultStory.__docgenInfo={description:"",displayName:"DefaultStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/tag-url/tag-url.stories.tsx#DefaultStory"]={docgenInfo:DefaultStory.__docgenInfo,name:"DefaultStory",path:"ui/components/component-library/tag-url/tag-url.stories.tsx#DefaultStory"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-component-library-tag-url-tag-url-stories.a314ea23.iframe.bundle.js.map