"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[52564],{"./.storybook/2.DOCUMENTATION.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _home_runner_work_metamask_extension_metamask_extension_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){let _components=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",strong:"strong",pre:"pre"},(0,_home_runner_work_metamask_extension_metamask_extension_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Getting Started / Documentation Guidelines"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"documentation-guidelines",children:"Documentation Guidelines"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.blockquote,{children:[`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["💡 To improve the quality of our component documentation we are currently in the process of updating our storybook to use Storyboook's ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://storybook.js.org/addons/@storybook/addon-controls/",target:"_blank",rel:"nofollow noopener noreferrer",children:"controls"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://storybook.js.org/addons/@storybook/addon-a11y/",target:"_blank",rel:"nofollow noopener noreferrer",children:"a11y"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://storybook.js.org/addons/@storybook/addon-docs/",target:"_blank",rel:"nofollow noopener noreferrer",children:"docs"})," plugins. Want to contribute?"]}),`
`]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"general-guidelines",children:"General Guidelines"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Thorough documentation makes it much easier for a component to be found, adapted and reused. It also provides space for explanation and reasoning for a component. This is useful as components become more complex."}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Some general documentation best practices to follow:"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.ul,{children:[`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.li,{children:"Put yourself in the shoes of another developer trying to use the component you just created for the first time"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["Write a brief description of the component and what it's used for in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"README.mdx"})," file"]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["Display the component's API using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"<ArgsTable of={YourComponent} />"})," component from storybook docs. Add descriptions of each prop by using jsDoc style comments in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"propTypes"}),"."]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://storybook.js.org/addons/@storybook/addon-controls/",target:"_blank",rel:"nofollow noopener noreferrer",children:"controls"})," over ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://storybook.js.org/addons/@storybook/addon-knobs",target:"_blank",rel:"nofollow noopener noreferrer",children:"knobs"}),"(deprecated)"]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.li,{children:["Use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://storybook.js.org/docs/react/essentials/actions#action-argtype-annotation",target:"_blank",rel:"nofollow noopener noreferrer",children:"action argType annotation"})," over importing the actions plugin directly"]}),`
`]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["See the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://metamask.github.io/metamask-storybook/index.html?path=/story/components-ui-button--default-story",target:"_blank",rel:"nofollow noopener noreferrer",children:"Button"}),"(",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"ui/components/ui/button/button.stories.js"}),") component for reference"]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"creating-a-story",children:"Creating a Story"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://storybook.js.org/docs/react/api/csf",target:"_blank",rel:"nofollow noopener noreferrer",children:"Component Story Format (CSF)"})," is the recommended way to write stories. It's an open standard based on ES6 modules."]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["A story ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.strong,{children:"without MDX"})," documentation can be as simple as:"]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-jsx",children:`import React from 'react';
import MyComponent from '.';

export default {
  title: 'Components/UI/MyComponent', // title should follow the folder structure location of the component. Don't use spaces.
};

export const DefaultStory = () => <MyComponent />;

DefaultStory.storyName = 'Default';
`})}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:[`For a more in-depth and higher quality form of story and documentation, you can use controls and MDX docs.
The example below displays the `,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"Button"})," component and it explains how we should write our stories:"]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-jsx",children:`// Button component example story

import React from 'react';

import IconTokenSearch from '../icon/icon-token-search';

// The mdx file to document props and usage
import README from './README.mdx';
import Button from '.';

// The default storybook component export should always follow the same template
export default {
  // The \`title\` effects the components tile and location in storybook
  // It should follow the folder structure location of the component. Don't use spaces.
  title: 'Components/UI/Button',
  component: Button, // The component you are documenting
  parameters: {
    docs: {
      page: README, // Reference to the docs page MDX file
    },
  },
  // the controls plugin argTypes are used for the interactivity of the component
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    // use the updated action API to log actions in the actions tab
    onClick: { action: 'clicked' },
    type: {
      control: {
        type: 'select',
      },
      options: [
        'default',
        'primary',
        'secondary',
        'warning',
        'danger',
        'danger-primary',
        'link',
      ],
    },
    submit: { control: 'boolean' },
    large: { control: 'boolean' },
    className: { control: 'text' },
    icon: {
      control: {
        type: 'select',
      },
      options: ['IconTokenSearch'],
      mapping: {
        IconTokenSearch: <IconTokenSearch />,
      },
    },
  },
};

// First story component should always be called "DefaultStory"
// The \`DefaultStory\` should include argTypes and controls where appropriate
export const DefaultStory = (args) => (
  <Button {...args}>{args.children}</Button>
);

// The name of the DefaultStory component can be renamed to simply "Default"
DefaultStory.storyName = 'Default';

// More stories should be added for different usage examples
// You can add as many stories as you think appropriate to comprehensively document the component
// A good convention is to name the story component after the prop you are highlighting
export const Type = (args) => (
  <>
    <Button {...args} type="default">
      {args.children || 'Default'}
    </Button>
    <Button {...args} type="primary">
      {args.children || 'Primary'}
    </Button>
    <Button {...args} type="secondary">
      {args.children || 'Secondary'}
    </Button>
    <Button {...args} type="warning">
      {args.children || 'Warning'}
    </Button>
    <Button {...args} type="danger">
      {args.children || 'Danger'}
    </Button>
    <Button {...args} type="danger-primary">
      {args.children || 'Danger primary'}
    </Button>
    <Button {...args} type="link">
      {args.children || 'Link'}
    </Button>
  </>
);
`})}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"writing-mdx-documentation",children:"Writing MDX Documentation"}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Now the storybook components are complete, the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"README.mdx"})," documentation should explain the component in detail. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.a,{href:"https://mdxjs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDX"})," format lets you seamlessly use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{children:"JSX"})," in your markdown documents. You can import react components and stories into your documentation to enhance the developer experience."]}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-md",children:`<!-- import the necessary blocks from storybook docs  -->

import { Story, Canvas, ArgsTable } from '@storybook/addon-docs';

<!-- import the component to use for the ArgsTable under ## Props  -->

import Button from '.';

<!-- Title of the component  -->

# Button

<!-- Brief description of the component  -->

Buttons communicate actions that users can take.

<!-- Embed the DefaultStory using the storybook url  -->

<Canvas>
  <Story id="components-ui-button--default-story" />
</Canvas>

## Props

<!-- Display the Props using the ArgsTable. Use JSDoc style comments in the PropTypes of your component to add descriptions for props. See button.component.js Button.propTypes for an example of jsDoc style comments
-->

<ArgsTable of={Button} />

## Usage

<!-- Further documentation on usage of the component  -->

The following describes the props and example usage for this component.

### Type

By changing the \`type\` prop you can use different styles of the button.

| type              | Description                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| \`default\`         | default style of the button                                                                           |
| \`primary\`         | the principle call to action on the page                                                              |
| \`secondary\`       | secondary actions on each page                                                                        |
| \`warning\`         | a warning action in the page                                                                          |
| \`danger\`          | a negative action (such as Delete) on the page                                                        |
| \`danger--primary\` | a negative principle call to action (such as Delete) on the page                                      |
| \`link\`            | an optional action or navigation action out of the app changes root html tag from \`<button>\` to \`<a>\` |

<!-- Embed other stories to further illustrate component usage  -->

<Canvas>
  <Story id="components-ui-button--type" />
</Canvas>
`})}),`
`,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Nice work! You're now ready to start creating comprehensive documentation using storybook 🎉👍"})]})}function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_metamask_extension_metamask_extension_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}let __page=()=>{throw Error("Docs-only story")};__page.parameters={docsOnly:!0};let componentMeta={title:"Getting Started / Documentation Guidelines",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:MDXContent};let __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=2-DOCUMENTATION-stories-mdx.3e18577b.iframe.bundle.js.map