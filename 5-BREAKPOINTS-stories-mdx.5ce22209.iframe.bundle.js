"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[96501],{"./.storybook/5.BREAKPOINTS.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _home_runner_work_metamask_extension_metamask_extension_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3",pre:"pre"},(0,_home_runner_work_metamask_extension_metamask_extension_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Foundations / Breakpoints"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"breakpoints",children:"Breakpoints"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Breakpoints are used for responsive layout"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"screen-sizes",children:"Screen Sizes"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"There are 4 screen sizes that make up the breakpoints for the MetaMask extension"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:[`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["base: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"0px"})]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["sm: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"576px"})]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["md: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"768px"})]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["lg: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"1280px"})]}),`
`]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"scss",children:"SCSS"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"There are Sass variables and mixins available for use for both min and max screens sizes"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"variables",children:"Variables"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-css",children:`$screen-sm-max /* 575px */
$screen-md-max /* 767px */
$screen-lg-max /* 1279px */

$screen-sm-min /* 576px */
$screen-md-min /* 768px */
$screen-lg-min /* 1280px */
`})}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"mixins",children:"Mixins"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-css",children:`@use 'design-system';

/* Max screen size */
@include design-system.screen-sm-max {
  /* equivalent css @media screen and (max-width: 575px) */
}
@include design-system.screen-md-max {
  /* equivalent css @media screen and (max-width: 767px) */
}
@include design-system.screen-lg-max {
  /* equivalent css @media screen and (max-width: 1279px) */
}

/* Min screen size */
@include design-system.screen-sm-min {
  /* equivalent css @media screen and (min-width: 576px) */
}
@include design-system.screen-md-min {
  /* equivalent css @media screen and (min-width: 768px) */
}
@include design-system.screen-lg-min {
  /* equivalent css @media screen and (min-width: 1280px) */
}
`})}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Migrating from the old sass variables to the new mixins looks like this"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-css",children:`@use 'design-system';

/* Max width */
/* Instead of the media query and sass variable */
@media screen and (max-width: design-system.$break-small) {
  right: 16px;
}

/* Use the sass mixin */
@include design-system.screen-sm-max {
  right: 16px;
}

/* Min width */
/* Instead of the media query and sass variable */
@media screen and (min-width: design-system.$break-large) {
  left: 16px;
}

/* Use the sass mixin */
@include design-system.screen-sm-min {
  left: 16px;
}
`})}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"takeaways",children:"Takeaways"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:[`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:"Try to avoid using static media queries in your code."}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:"Try to use the provided SCSS mixins"}),`
`]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"-dont-do-this",children:"❌ Don't do this"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Don't use static media queries in your code."}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-css",children:`/**
* Don't do this
* Static media queries create inconsistency and could break the UI if we want to update them in future
**/
.account-menu {
  @media screen and (min-width: 769px) {
    right: calc((100vw - 80vw) / 2);
  }

  @media screen and (min-width: 1281px) {
    right: calc((100vw - 65vw) / 2);
  }
}
`})}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"-do-this",children:"✅ Do this"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Do use the provided Sass mixins"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-css",children:`@use 'design-system';

.account-menu {
  @include design-system.screen-md-min {
    right: calc((100vw - 80vw) / 2);
  }

  @include design-system.screen-lg-min {
    right: calc((100vw - 65vw) / 2);
  }
}
`})})]})}function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_metamask_extension_metamask_extension_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}let __page=()=>{throw Error("Docs-only story")};__page.parameters={docsOnly:!0};let componentMeta={title:"Foundations / Breakpoints",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:MDXContent};let __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=5-BREAKPOINTS-stories-mdx.5ce22209.iframe.bundle.js.map