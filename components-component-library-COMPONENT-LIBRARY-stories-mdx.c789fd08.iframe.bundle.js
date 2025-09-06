"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[74345],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/COMPONENT-LIBRARY.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>COMPONENT_LIBRARY_stories}),__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_LOGGER_=__webpack_require__("@storybook/client-logger"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,external_STORYBOOK_MODULE_CLIENT_LOGGER_.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");let README_namespaceObject=`# Component Library

This folder contains design system components that are built 1:1 with the Figma [DS Components](https://www.figma.com/file/HKpPKij9V3TpsyMV1TpV7C/DS-Components?node-id=16-6) UI kit and should be used where possible in all UI feature work. If you are a designer you can visit the [MetaMask Design System Guides (Design)](https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940?pvs=4).

## Architecture

All components are built on top of the \`Box\` component and accept all \`Box\` component props.

### Layout

\`component-library\` components accept all \`Box\` component style utility props for layout. They can be used in conjunction with the enums from \`ui/helpers/constants/design-system.ts\`

\`\`\`jsx
import { Display } from '../../../helpers/constants/design-system';
import { Text } from '../../component-library';

<Text marginBottom={4} display={Display.Flex} gap={4}>
  <span>This text has a margin-bottom of 16px</span>
  <span>It also has a display of flex and gap of 16px</span>
</Text>;
\`\`\`

### Polymorphic \`as\` prop and semantic HTML

\`component-library\` components accept a polymorphic \`as\` prop to change the root html element of a component

\`\`\`jsx
import { Text } from '../../component-library';

<ul>
  <Text as="li">This renders as list item html element</Text>
</ul>;
\`\`\`

### Style customization and access child components

We understand some customization to styles or access to children components is necessary when building UI. To ensure our components are flexible we intend to allow for customization and access though a pattern called inversion of control.

#### Styles

> Note:
>
> - If you are seeing a disparity between styles in Figma and code that's a red flag and could mean there is bug between design system Figma and code component. We recommend posting it on our slack channel [#metamask-design-system](https://consensys.slack.com/archives/C0354T27M5M) so we can support you on it
> - If you come across the warning \`Unexpected hex color\` when using a hex value in a stylesheet, it is there to encourage the use of [MetaMask's design-tokens](https://github.com/MetaMask/design-tokens/) color variables instead of hardcoding hex values. This helps maintain consistency and makes updating colors across the app easier.

We try to utilize the \`Box\` component style utility props as much as possible in our components. Style utility prop overrides should be your first option. This allows you to change styles right inside of the component and reduces the amount of CSS in the codebase. If there are no style utility props for the customization required you can attach a class name to the component using the \`className\` prop and add styling using CSS.

\`\`\`jsx
import { BackgroundColor } from '../../../helpers/constants/design-system';
import { Button } from '../../component-library';

// Overriding the browser default styling using style utility props
<Text
  as="button"
  backgroundColor={BackgroundColor.transparent}
  onClick={handleOnClick}
>
  Renders as a button but has a transparent background
</Text>;

<Text
  as="button"
  backgroundColor={BackgroundColor.transparent}
  onClick={handleOnClick}
  className="nft-feature__title"
>
  Adding a custom className to add additional styles using CSS
</Text>;
\`\`\`

### Access to child components

All of our components should allow access to children components through an object prop. The example below adds a data test id to the child \`Text\` component inside \`BannerAlert\`.

\`\`\`jsx
import { BannerAlert, BannerAlertSeverity } from '../../component-library';

<BannerAlert
  severity={Severity.Danger}
  title="This allows a third party to access and transfer all of your NFTs"
  titleProps={{ 'data-testid': 'approve-token-banner-title' }}
/>;
\`\`\`

### Accessibility

Allowing everyone to access web3 regardless of disability is an important part of what we do at MetaMask. Ensuring accessibility in our components is a priority. We strive to achieve this by maintaining proper color contrast in our components and implementing necessary aria label props. If you have any questions regarding accessibility reach out and we will support you as much as possible. Additionally, your suggestions for improvement are welcome, as we continue our journey towards greater accessibility. Together, let's create an inclusive web3 experience for all 🦾

## Support

If internal folks have any questions please reach out the design system team via the internal slack channel [#metamask-design-system](https://consensys.slack.com/archives/C0354T27M5M) 💁

[DS components figma file](https://www.figma.com/file/HKpPKij9V3TpsyMV1TpV7C/DS-Components?node-id=16%3A6)
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Components/ComponentLibrary/Introduction"}),`
`,(0,jsx_runtime.jsx)(blocks_dist.oz,{children:README_namespaceObject})]})}function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}let __page=()=>{throw Error("Docs-only story")};__page.parameters={docsOnly:!0};let componentMeta={title:"Components/ComponentLibrary/Introduction",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:MDXContent};let COMPONENT_LIBRARY_stories=componentMeta,__namedExportsOrder=["__page"]}}]);
//# sourceMappingURL=components-component-library-COMPONENT-LIBRARY-stories-mdx.c789fd08.iframe.bundle.js.map