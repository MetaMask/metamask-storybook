"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[49425],{"./.storybook/3.COLORS.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>_3_COLORS_stories}),__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");let design_token_graphic_namespaceObject=__webpack_require__.p+"static/media/design.token.graphic.8d23ec03.svg";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",strong:"strong",h4:"h4",pre:"pre",code:"code",ul:"ul",li:"li"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Foundations / Color"}),`
`,(0,jsx_runtime.jsx)(_components.h1,{id:"color",children:"Color"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Color is used to express style and communicate meaning."}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"design-tokens",children:"Design tokens"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["We are importing design tokens as CSS variables from ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/MetaMask/design-tokens",target:"_blank",rel:"nofollow noopener noreferrer",children:"@metamask/design-tokens"})," repo to help consolidate colors and enable theming across all MetaMask products."]}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"token-tiers",children:"Token tiers"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"We follow a 3 tiered system for color design tokens and css variables."}),`
`,(0,jsx_runtime.jsx)("div",{style:{textAlign:"center",backgroundColor:"var(--brand-colors-white)",padding:32},children:(0,jsx_runtime.jsx)("img",{width:"80%",src:design_token_graphic_namespaceObject})}),`
`,(0,jsx_runtime.jsx)("br",{}),`
`,(0,jsx_runtime.jsx)("br",{}),`
`,(0,jsx_runtime.jsxs)(_components.h3,{id:"brand-colors-tier-1",children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Brand colors"})," (tier 1)"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["These colors ",(0,jsx_runtime.jsx)(_components.strong,{children:"SHOULD NOT"})," be used in your styles directly. They are used as a reference for the ",(0,jsx_runtime.jsx)(_components.a,{href:"#theme-colors-tier-2",children:"theme colors"}),". Brand colors should just keep track of every color used in our app."]}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"example-of-brand-color-css-variables",children:"Example of brand color css variables"}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-css",children:`/** !!!DO NOT USE BRAND COLORS DIRECTLY IN YOUR CODE!!! */
var(--brand-colors-white)
var(--brand-colors-black)
var(--brand-colors-grey-grey800)
`})}),`
`,(0,jsx_runtime.jsxs)(_components.h3,{id:"theme-colors-tier-2",children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Theme colors"})," (tier 2)"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Theme colors are color agnostic, semantically neutral and theme compatible design tokens that you can use in your code and styles. Please refer to the description of each token for it's intended purpose in ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/MetaMask/design-tokens/blob/main/src/figma/tokens.json#L329-L554",target:"_blank",rel:"nofollow noopener noreferrer",children:"@metamask/design-tokens"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"example-of-theme-color-css-variables",children:"Example of theme color css variables"}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-css",children:`/** Backgrounds */
var(--color-background-default)
var(--color-background-default-hover)
var(--color-background-default-pressed)
var(--color-background-alternative)
var(--color-background-alternative-hover)
var(--color-background-alternative-pressed)
var(--color-background-hover)
var(--color-background-pressed)

/** Text */
var(--color-text-default)
var(--color-text-alternative)
var(--color-text-muted)

/** Icons */
var(--color-icon-default)
var(--color-icon-alternative)
var(--color-icon-muted)

/** Borders */
var(--color-border-default)
var(--color-border-muted)

/** Overlays */
var(--color-overlay-default)
var(--color-overlay-alternative)
var(--color-overlay-inverse)

/** User Actions */
var(--color-primary-default)
var(--color-primary-default-hover)
var(--color-primary-default-pressed)
var(--color-primary-alternative)
var(--color-primary-muted)
var(--color-primary-inverse)

/** States */
/** Error */
var(--color-error-default)
var(--color-error-default-hover)
var(--color-error-default-pressed)
var(--color-error-alternative)
var(--color-error-default-hover)
var(--color-error-default-pressed)
var(--color-error-muted)
var(--color-error-inverse)

/** Warning */
var(--color-warning-default)
var(--color-warning-default-hover)
var(--color-warning-default-pressed)
var(--color-warning-muted)
var(--color-warning-inverse)

/** Success */
var(--color-success-default)
var(--color-success-default-hover)
var(--color-success-default-pressed)
var(--color-success-muted)
var(--color-success-inverse)

/** Info */
var(--color-info-default)
var(--color-info-muted)
var(--color-info-inverse)
`})}),`
`,(0,jsx_runtime.jsxs)(_components.h3,{id:"component-colors-tier-3",children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Component colors"})," (tier 3)"]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Another level of abstraction is component tier colors that you can define at the top of your styles and use at the component specific level."}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-scss",children:`.button {
  --color-background-primary: var(--color-primary-default);
  --color-text-primary: var(--color-primary-inverse);
  --color-border-primary: var(--color-primary-default);

  --color-background-primary-hover: var(--color-primary-default-hover);
  --color-border-primary-hover: var(--color-primary-default-hover);

  .btn-primary {
    background-color: var(--color-background-primary);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border-primary);

    &:hover {
      background-color: var(--color-background-primary-hover);
      border: 1px solid var(--color-border-primary-hover);
    }

    /** btn-primary css continued... */
  }
}
`})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"takeaways",children:"Takeaways"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["Do not use static HEX values in your code. Use the ",(0,jsx_runtime.jsx)(_components.a,{href:"#theme-colors-tier-2",children:"theme colors"}),". If one does not exist for your use case ask the designer or ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/MetaMask/metamask-extension/issues/new",target:"_blank",rel:"nofollow noopener noreferrer",children:"create an issue"})," and tag it with a ",(0,jsx_runtime.jsx)(_components.code,{children:"design-system"})," label."]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["Make sure the design token you are using is for it's intended purpose. Please refer to the description of each token in ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/MetaMask/design-tokens/blob/main/src/figma/tokens.json#L329-L554",target:"_blank",rel:"nofollow noopener noreferrer",children:"@metamask/design-tokens"}),"."]}),`
`]}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"-dont-do-this",children:"❌ Don't do this"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Don't use static hex values or brand color tokens in your code."}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-css",children:`/**
* Don't do this
* Static hex values create inconsistency and will break UI when using dark mode
**/
.card {
  background-color: #ffffff;
  color: #24272a;
}

/**
* Don't do this
* Not theme compatible and will break UI when using dark theme
**/
.card {
  background-color: var(--brand-colors-white);
  color: var(--brand-colors-grey-grey800);
}
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"-do-this",children:"✅ Do this"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Do use component tiered and ",(0,jsx_runtime.jsx)(_components.a,{href:"#theme-colors-tier-2",children:"theme colors"})," in your styles and code"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-css",children:`.card {
  --color-background: var(--color-background-default);
  --color-text: var(--color-text-default);

  background-color: var(--color-background);
  color: var(--color-text);
}
`})}),`
`,(0,jsx_runtime.jsx)("br",{}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"references",children:"References"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/MetaMask/design-tokens",target:"_blank",rel:"nofollow noopener noreferrer",children:"@metamask/design-tokens"})}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/cBAUPFMnbv6tHR1J8KvBI2/Brand-Colors?node-id=0%3A1",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma brand colors library"})," (internal use only)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/kdFzEC7xzSNw7cXteqgzDW/Light-Theme-Colors?node-id=0%3A1",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma theme colors library"})," (internal use only)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/rLKsoqpjyoKauYnFDcBIbO/Dark-Theme-Colors?node-id=0%3A1",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma dark theme colors library"})," (internal use only)"]}),`
`]})]})}function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}let __page=()=>{throw Error("Docs-only story")};__page.parameters={docsOnly:!0};let componentMeta={title:"Foundations / Color",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:MDXContent};let _3_COLORS_stories=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=3-COLORS-stories-mdx.9af522d0.iframe.bundle.js.map