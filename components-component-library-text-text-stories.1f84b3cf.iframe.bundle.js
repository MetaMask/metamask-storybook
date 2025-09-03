"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[1363],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/text/text.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{As:()=>As,ColorStory:()=>ColorStory,DefaultStory:()=>DefaultStory,Ellipsis:()=>Ellipsis,FontFamilyStory:()=>FontFamilyStory,FontStyleStory:()=>FontStyleStory,FontWeightStory:()=>FontWeightStory,OverflowWrapStory:()=>OverflowWrapStory,Strong:()=>Strong,TextAlignStory:()=>TextAlignStory,TextDirectionStory:()=>TextDirectionStory,TextTransformStory:()=>TextTransformStory,Variant:()=>Variant,__namedExportsOrder:()=>__namedExportsOrder,default:()=>text_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",code:"code",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre",hr:"hr",h4:"h4"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"text",children:"Text"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Good typography improves readability, legibility and hierarchy of information."}),`
`,(0,jsx_runtime.jsxs)(_components.blockquote,{children:[`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Contribute to improving the UI consistency of the extension by helping to replace the deprecated ",(0,jsx_runtime.jsx)(_components.code,{children:"<Typography>"})," with ",(0,jsx_runtime.jsx)(_components.code,{children:"<Text>"}),". ",(0,jsx_runtime.jsx)(_components.a,{href:"#converting-from-typography-to-text",children:"See details"})]}),`
`]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-text--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:component_library_text.EY}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"variant",children:"Variant"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"variant"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextVariant"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.js"})," to change the font size of the component."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TextVariant"})," options:"]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.displayMd (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"h1"})," tag)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.headingLg (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"h2"})," tag)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.headingMd (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"h3"})," tag)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.headingSm (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"h4"})," tag)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.bodyLgMedium (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"p"})," tag)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.bodyMd (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"p"})," tag)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.bodyMdBold (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"p"})," tag)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.bodyMdMedium (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"p"})," tag)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.bodySm (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"p"})," tag)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.bodySmMedium (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"p"})," tag)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.bodySmBold (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"p"})," tag)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.bodyXs (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"p"})," tag)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.bodyXsMedium (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"p"})," tag)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["TextVariant.inherit (default renders as ",(0,jsx_runtime.jsx)(_components.code,{children:"span"})," tag)"]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-text--variant"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Text } from '../../component-library';
import { TextVariant } from '../../../helpers/constants/design-system';

<Text variant={TextVariant.displayMd}>display-md</Text>
<Text variant={TextVariant.headingLg}>heading-lg</Text>
<Text variant={TextVariant.headingMd}>heading-md</Text>
<Text variant={TextVariant.headingSm}>heading-sm</Text>
<Text variant={TextVariant.bodyLgMedium}>body-lg-medium</Text>
<Text variant={TextVariant.bodyMd}>body-md</Text>
<Text variant={TextVariant.bodyMdBold}>body-md-bold</Text>
<Text variant={TextVariant.bodyMdMedium}>body-md-medium</Text>
<Text variant={TextVariant.bodySm}>body-sm</Text>
<Text variant={TextVariant.bodySmMedium}>body-sm-medium</Text>
<Text variant={TextVariant.bodySmBold}>body-sm-bold</Text>
<Text variant={TextVariant.bodyXs}>body-xs</Text>
<Text variant={TextVariant.bodyXsMedium}>body-xs-medium</Text>
<Text variant={TextVariant.inherit}>inherit</Text>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"color",children:"Color"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"color"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextColor"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.js"})," to change the color of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-text--color-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Text } from '../../component-library';
import { TextColor, BackgroundColor } from '../../../helpers/constants/design-system';

<Text color={TextColor.textDefault}>
  text-default
</Text>
<Text color={TextColor.textAlternative}>
  text-alternative
</Text>
<Text color={TextColor.textMuted}>
  text-muted
</Text>
<Text color={TextColor.primaryDefault}>
  primary-default
</Text>
<Text color={TextColor.primaryInverse} backgroundColor={BackgroundColor.primaryDefault}>
  primary-inverse
</Text>
<Text color={TextColor.errorDefault}>
  error-default
</Text>
<Text color={TextColor.errorInverse} backgroundColor={BackgroundColor.errorDefault}>
  error-inverse
</Text>
<Text color={TextColor.successDefault}>
  success-default
</Text>
<Text color={TextColor.successInverse} backgroundColor={BackgroundColor.successDefault}>
  success-inverse
</Text>
<Text color={TextColor.warningDefault}>
  warning-default
</Text>
<Text color={TextColor.warningInverse} backgroundColor={BackgroundColor.warningDefault}>
  warning-inverse
</Text>
<Text color={TextColor.infoDefault}>
  info-default
</Text>
<Text color={TextColor.infoInverse} backgroundColor={BackgroundColor.infoDefault}>
  info-inverse
</Text>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"font-weight",children:"Font Weight"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"fontWeight"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"FontWeight"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.js"})," to change the font weight of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component. There are 3 font weights:"]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"FontWeight.Normal"})," = ",(0,jsx_runtime.jsx)(_components.code,{children:"normal"})," || ",(0,jsx_runtime.jsx)(_components.code,{children:"400"})]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"FontWeight.Medium"})," = ",(0,jsx_runtime.jsx)(_components.code,{children:"medium"})," || ",(0,jsx_runtime.jsx)(_components.code,{children:"500"})]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"FontWeight.Bold"})," = ",(0,jsx_runtime.jsx)(_components.code,{children:"bold"})," || ",(0,jsx_runtime.jsx)(_components.code,{children:"700"})]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-text--font-weight-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Text } from '../../component-library';
import { FontWeight } from '../../../helpers/constants/design-system';

<Text fontWeight={FontWeight.Normal}>
  normal
</Text>
<Text fontWeight={FontWeight.Medium}>
  medium
</Text>
<Text fontWeight={FontWeight.Bold}>
  bold
</Text>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"font-style",children:"Font Style"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"fontStyle"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"FontStyle"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.js"})," to change the font style of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component. There are 2 font styles:"]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"FontStyle.Normal"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"FontStyle.Italic"})}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-text--font-style-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Text } from '../../component-library';
import { FontStyle } from '../../../helpers/constants/design-system';

<Text fontStyle={FontStyle.Normal}>
  normal
</Text>
<Text fontStyle={FontStyle.Italic}>
  bold
</Text>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"font-family",children:"Font Family"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"fontFamily"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"FontFamily"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./text.types"})," to change the font family of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component. There are 3 font families:"]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"FontFamily.Default"})," (Geist)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"FontFamily.Accent"})," (MMSans)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"FontFamily.Hero"})," (MMPoly)"]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-text--font-family-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Text } from '../../component-library';
import { FontFamily } from '../../../helpers/constants/design-system';

<Text fontFamily={FontFamily.Default}>
  Default Font (Geist)
</Text>
<Text fontFamily={FontFamily.Accent}>
  Accent Font (MMSans)
</Text>
<Text fontFamily={FontFamily.Hero}>
  Hero Font (MMPoly)
</Text>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"text-transform",children:"Text Transform"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"textTransform"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextTransform"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.ts"})," to change the text alignment of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-text--text-transform-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Text } from '../../component-library';
import { TextTransform } from '../../../helpers/constants/design-system';

<Text textAlign={TextTransform.Uppercase}>
  uppercase
</Text>
<Text textAlign={TextTransform.Lowercase}>
  lowercase
</Text>
<Text textAlign={TextTransform.Capitalize}>
  capitalize
</Text>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"text-align",children:"Text Align"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"textAlign"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextAlign"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.ts"})," to change the text alignment of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-text--text-align-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Text } from '../../component-library';
import { TextAlign } from '../../../helpers/constants/design-system';

<Text textAlign={TextAlign.Left}>
  left
</Text>
<Text textAlign={TextAlign.Center}>
  center
</Text>
<Text textAlign={TextAlign.Right}>
  right
</Text>
<Text textAlign={TextAlign.Justify}>
  justify
</Text>
<Text textAlign={TextAlign.End}>
  end
</Text>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"overflow-wrap",children:"Overflow Wrap"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"overflowWrap"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"OverflowWrap"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.ts"})," to change the overflow wrap of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-text--overflow-wrap-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Text } from '../../component-library';
import { OverflowWrap } from '../../../helpers/constants/design-system';

<div
  style={{
    width: 250,
    border: '1px solid var(--color-error-default)',
    display: 'block',
  }}
>
  <Text overflowWrap={OverflowWrap.Normal}>
    {OverflowWrap.Normal}: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
  </Text>
  <Text overflowWrap={OverflowWrap.BreakWord}>
    {OverflowWrap.BreakWord}: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
  </Text>
</div>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"ellipsis",children:"Ellipsis"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the boolean ",(0,jsx_runtime.jsx)(_components.code,{children:"ellipsis"})," prop to change the if the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component to have an ellipsis."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-text--ellipsis"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Text } from '../../component-library';

<div
  style={{
    width: 250,
    border: '1px solid var(--color-error-default)',
    display: 'block',
  }}
>
  <Text ellipsis>Ellipsis: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d</Text>
  <Text>No Ellipsis: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d</Text>
</div>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"as",children:"As"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," prop to change the root html element of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["You can also utilize the ",(0,jsx_runtime.jsx)(_components.code,{children:"ValidTag"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./text.types"})," to ensure that you are using a valid html element"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-text--as"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Display } from '../../../helpers/constants/design-system';
import { Text } from '../../component-library'

<Text as="dd">dd</Text>
<Text as="div">div</Text>
<Text as="dt">dt</Text>
<Text as="em">em</Text>
<Text as="h1">h1</Text>
<Text as="h2">h2</Text>
<Text as="h3">h3</Text>
<Text as="h4">h4</Text>
<Text as="h5">h5</Text>
<Text as="h6">h6</Text>
<Text as="li">li</Text>
<Text as="p">p</Text>
<Text display={Display.Block} as="span">span</Text>
<Text display={Display.Block} as="strong">strong</Text>
<Text as="ul">ul</Text>
<Text as="label">label</Text>
<Text as="header">header</Text>
<Text as="input" placeholder="input" />
`})}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Renders the html:"}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:`<dd>dd</dd>
<div>div</div>
<dt>dt</dt>
<em>em</em>
<h1>h1</h1>
<h2>h2</h2>
<h3>h3</h3>
<h4>h4</h4>
<h5>h5</h5>
<h6>h6</h6>
<li>li</li>
<p>p</p>
<span>span</span>
<strong>strong</strong>
<ul>
  ul
</ul>
<label>label</label>
<header>header</header>
<input placeholder="input" />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"text-direction",children:"Text Direction"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"textDirection"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextDirection"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./text.types"})," to change the text direction of ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-text--text-direction-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Text, TextDirection } from '../../component-library';

<Text textDirection={TextDirection.LeftToRight}>
  This is left to right (ltr) for English and most languages
</Text>
<Text textDirection={TextDirection.RightToLeft}>
  This is right to left (rtl) for use with other languages such as Arabic. This English example is incorrect usage.
</Text>
<Text textDirection={TextDirection.Auto}>
  Let the user agent decide with the auto option
</Text>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"strong",children:"Strong"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Using the ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," prop with the value of ",(0,jsx_runtime.jsx)(_components.code,{children:"strong"})," will render the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component as a ",(0,jsx_runtime.jsx)(_components.code,{children:"strong"})," element and any ",(0,jsx_runtime.jsx)(_components.code,{children:"strong"})," emlements used within a ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component will be supported with bold styles."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-text--strong"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Text } from '../../component-library';

<Text as="strong">
  This is an as="strong" demo.
</Text>
<Text>
  This is a <strong>strong element</strong> demo.
</Text>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"class-name",children:"Class Name"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Adds an additional class to the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component"]}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The text content of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component"]}),`
`,(0,jsx_runtime.jsx)(_components.hr,{}),`
`,(0,jsx_runtime.jsxs)(_components.h1,{id:"converting-from-typography-to-text",children:["Converting from ",(0,jsx_runtime.jsx)(_components.code,{children:"Typography"})," to ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Typography"})," component has been deprecated in favor of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component. You can contribute by submitting a PR against ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/MetaMask/metamask-extension/issues/17670",target:"_blank",rel:"nofollow noopener noreferrer",children:"Replace deprecated Typography with Text component"})," on GitHub. Below are code examples converting from ",(0,jsx_runtime.jsx)(_components.code,{children:"Typography"})," to ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"variant-1",children:"Variant"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Table below is the 1:1 mapping of ",(0,jsx_runtime.jsx)(_components.code,{children:"TypographyVariant"})," to ",(0,jsx_runtime.jsx)(_components.code,{children:"TextVariant"})," and the html element that needs to be rendered."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The new ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component does not have matching default elements for ",(0,jsx_runtime.jsx)(_components.code,{children:"TypographyVariant.H5"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"TypographyVariant.H6"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"TypographyVariant.H7"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"TypographyVariant.H8"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"TypographyVariant.H9"})," variant."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["If you need to use these variants, please use the ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," prop to render the correct html element."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[`| TypographyVariant                                          | Typography Tag | TextVariant           | Text Default Tag |
| ---------------------------------------------------------- | -------------- | --------------------- | ---------------- |
| `,(0,jsx_runtime.jsx)(_components.a,{href:"#typographyvarianth1",children:"TypographyVariant.H1"}),`               | h1             | TextVariant.displayMd | h1               |
| `,(0,jsx_runtime.jsx)(_components.a,{href:"#typographyvarianth2",children:"TypographyVariant.H2"}),`               | h2             | TextVariant.headingLg | h2               |
| `,(0,jsx_runtime.jsx)(_components.a,{href:"#typographyvarianth3",children:"TypographyVariant.H3"}),`               | h3             | TextVariant.headingMd | h3               |
| `,(0,jsx_runtime.jsx)(_components.a,{href:"#typographyvarianth4",children:"TypographyVariant.H4"}),`               | h4             | TextVariant.headingSm | h4               |
| `,(0,jsx_runtime.jsx)(_components.a,{href:"#typographyvarianth5",children:"TypographyVariant.H5"}),`               | h5             | TextVariant.bodyMd    | p                |
| `,(0,jsx_runtime.jsx)(_components.a,{href:"#typographyvarianth6",children:"TypographyVariant.H6"}),`               | h6             | TextVariant.bodySm    | p                |
| `,(0,jsx_runtime.jsx)(_components.a,{href:"#typographyvariantparagraph",children:"TypographyVariant.Paragraph"}),` | p              | TextVariant.bodyMd    | p                |
| `,(0,jsx_runtime.jsx)(_components.a,{href:"#typographyvarianth7",children:"TypographyVariant.H7"}),`               | h6             | TextVariant.bodySm    | p                |
| `,(0,jsx_runtime.jsx)(_components.a,{href:"#typographyvarianth8",children:"TypographyVariant.H8"}),`               | h6             | TextVariant.bodyXs    | p                |
| `,(0,jsx_runtime.jsx)(_components.a,{href:"#typographyvarianth9",children:"TypographyVariant.H9"}),"               | h6             | TextVariant.bodyXs    | p                |"]}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"typographyvarianth1",children:"TypographyVariant.H1"}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// Before
import { TypographyVariant } from '../../../helpers/constants/design-system';

<Typography variant={TypographyVariant.H1}>Demo</Typography>;

// After
import { TextVariant } from '../../../helpers/constants/design-system';

<Text variant={TextVariant.displayMd}>Demo</Text>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"typographyvarianth2",children:"TypographyVariant.H2"}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// Before
import { TypographyVariant } from '../../../helpers/constants/design-system';

<Typograpghy variant={TypographyVariant.H2}>Demo</Typograpghy>;

// After
import { TextVariant } from '../../../helpers/constants/design-system';

<Text variant={TextVariant.headingLg}>Demo</Text>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"typographyvarianth3",children:"TypographyVariant.H3"}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// Before
import { TypographyVariant } from '../../../helpers/constants/design-system';

<Typograpghy variant={TypographyVariant.H3}>Demo</Typograpghy>;

// After
import { TextVariant } from '../../../helpers/constants/design-system';

<Text variant={TextVariant.headingMd}>Demo</Text>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"typographyvarianth4",children:"TypographyVariant.H4"}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// Before
import { TypographyVariant } from '../../../helpers/constants/design-system';

<Typograpghy variant={TypographyVariant.H4}>Demo</Typograpghy>;

// After
import { TextVariant } from '../../../helpers/constants/design-system';

<Text variant={TextVariant.headingSm}>Demo</Text>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"typographyvarianth5",children:"TypographyVariant.H5"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Requires ",(0,jsx_runtime.jsx)(_components.code,{children:'as="h6"'})," prop for 1:1 conversion"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// Before
import { TypographyVariant } from '../../../helpers/constants/design-system';

<Typograpghy variant={TypographyVariant.H5}>Demo</Typograpghy>;

// After
import { TextVariant } from '../../../helpers/constants/design-system';

<Text variant={TextVariant.bodyMd} as="h6">
  Demo
</Text>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"typographyvarianth6",children:"TypographyVariant.H6"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Requires ",(0,jsx_runtime.jsx)(_components.code,{children:'as="h6"'})," prop for 1:1 conversion"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// Before
import { TypographyVariant } from '../../../helpers/constants/design-system';

<Typograpghy variant={TypographyVariant.H6}>Demo</Typograpghy>;

// After
import { TextVariant } from '../../../helpers/constants/design-system';

<Text variant={TextVariant.bodySm} as="h6">
  Demo
</Text>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"typographyvariantparagraph",children:"TypographyVariant.Paragraph"}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// Before
import { TypographyVariant } from '../../../helpers/constants/design-system';

<Typograpghy variant={TypographyVariant.Paragraph}>Demo</Typograpghy>;

// After
import { TextVariant } from '../../../helpers/constants/design-system';

<Text variant={TextVariant.bodyMd}>Demo</Text>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"typographyvarianth7",children:"TypographyVariant.H7"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Requires ",(0,jsx_runtime.jsx)(_components.code,{children:'as="h6"'})," prop for 1:1 conversion"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// Before
import { TypographyVariant } from '../../../helpers/constants/design-system';

<Typograpghy variant={TypographyVariant.H7}>Demo</Typograpghy>;

// After
import { TextVariant } from '../../../helpers/constants/design-system';

<Text variant={TextVariant.bodySm} as="h6">
  Demo
</Text>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"typographyvarianth8",children:"TypographyVariant.H8"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Requires ",(0,jsx_runtime.jsx)(_components.code,{children:'as="h6"'})," prop for 1:1 conversion"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// Before
import { TypographyVariant } from '../../../helpers/constants/design-system';

<Typograpghy variant={TypographyVariant.H8}>Demo</Typograpghy>;

// After
import { TextVariant } from '../../../helpers/constants/design-system';

<Text variant={TextVariant.bodyXs} as="h6">
  Demo
</Text>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"typographyvarianth9",children:"TypographyVariant.H9"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Requires ",(0,jsx_runtime.jsx)(_components.code,{children:'as="h6"'})," prop for 1:1 conversion"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// Before
import { TypographyVariant } from '../../../helpers/constants/design-system';

<Typograpghy variant={TypographyVariant.H9}>Demo</Typograpghy>;

// After
import { TextVariant } from '../../../helpers/constants/design-system';

<Text variant={TextVariant.bodyXs} as="h6">
  Demo
</Text>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"align",children:"Align"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The prop name ",(0,jsx_runtime.jsx)(_components.code,{children:"align"})," has been deprecated in favor of ",(0,jsx_runtime.jsx)(_components.code,{children:"textAlign"})]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Values using the ",(0,jsx_runtime.jsx)(_components.code,{children:"TextAlign"})," object from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.js"})," remain the same"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// Before
<Typography align={TEXT_ALIGN.CENTER}>Demo</Typography>;

// After
<Text textAlign={TextAlign.Center}>Demo</Text>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"box-props",children:"Box Props"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Box props are now integrated with the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["You no longer need to pass these props as an object through ",(0,jsx_runtime.jsx)(_components.code,{children:"boxProps"})]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`// Before
<Typography
  boxProps={{
    backgroundColor: Color.infoMuted,
    borderColor: Color.infoDefault,
    padding: 4,
    borderRadius: 4,
  }}
  color={Color.textDefault}
>
  Demo
</Typography>;

// After
<Text
  backgroundColor={Color.infoMuted}
  borderColor={Color.infoDefault}
  padding={4}
  borderRadius={4}
  color={Color.textDefault}
>
  Demo
</Text>;
`})})]})}var text_text=__webpack_require__("./ui/components/component-library/text/text.tsx"),text_types=__webpack_require__("./ui/components/component-library/text/text.types.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let text_stories={title:"Components/ComponentLibrary/Text",component:text_text.E,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}};function renderBackgroundColor(color){var bgColor;switch(color){case design_system.Q1.overlayInverse:bgColor=design_system.i0.overlayDefault;break;case design_system.Q1.primaryInverse:bgColor=design_system.i0.primaryDefault;break;case design_system.Q1.errorInverse:bgColor=design_system.i0.errorDefault;break;case design_system.Q1.warningInverse:bgColor=design_system.i0.warningDefault;break;case design_system.Q1.successInverse:bgColor=design_system.i0.successDefault;break;case design_system.Q1.infoInverse:bgColor=design_system.i0.infoDefault;break;case design_system.Q1.goerliInverse:bgColor=design_system.i0.goerli;break;case design_system.Q1.sepoliaInverse:bgColor=design_system.i0.sepolia;break;case design_system.Q1.lineaGoerliInverse:bgColor=design_system.i0.lineaGoerli;break;case design_system.Q1.lineaSepoliaInverse:bgColor=design_system.i0.lineaSepolia;break;case design_system.Q1.lineaMainnetInverse:bgColor=design_system.i0.lineaMainnet;break;default:bgColor=null}return bgColor}var DefaultStory=(function(args){return react.createElement(text_text.E,args,args.children)}).bind({});DefaultStory.args={children:"The quick orange fox jumped over the lazy dog."},DefaultStory.storyName="Default";var Variant=function(args){return react.createElement(react.Fragment,null,Object.values(design_system.J3).map(function(variant){return react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{variant:variant,key:variant}),args.children||variant)}))},ColorStory=function(args){return react.createElement(react.Fragment,null,Object.values(design_system.r7).map(function(color){return react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{backgroundColor:renderBackgroundColor(color),color:color,key:color}),color)}))};ColorStory.storyName="Color";var FontWeightStory=function(args){return react.createElement(react.Fragment,null,Object.values(design_system.IT).map(function(weight){return react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{fontWeight:weight,key:weight}),weight)}))};FontWeightStory.storyName="Font Weight";var FontStyleStory=function(args){return react.createElement(react.Fragment,null,Object.values(design_system.zz).map(function(style){return react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{fontStyle:style,key:style}),style)}))};FontStyleStory.storyName="Font Style";var FontFamilyStory=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:4},react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{fontFamily:design_system.ay.Default}),"Default Font (Geist) - The quick brown fox jumps over the lazy dog"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{fontFamily:design_system.ay.Accent}),"Accent Font (MMSans) - The quick brown fox jumps over the lazy dog"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{fontFamily:design_system.ay.Hero}),"Hero Font (MMPoly) - The quick brown fox jumps over the lazy dog"))};FontFamilyStory.storyName="Font Family";var TextTransformStory=function(args){return react.createElement(react.Fragment,null,Object.values(design_system.Ms).map(function(transform){return react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{textTransform:transform,key:transform}),transform)}))};TextTransformStory.storyName="Text Transform";var TextAlignStory=function(args){return react.createElement(react.Fragment,null,Object.values(design_system.nO).map(function(align){return react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{textAlign:align,key:align}),align)}))};TextAlignStory.storyName="Text Align";var OverflowWrapStory=function(args){return react.createElement(box.a,{borderColor:design_system.cG.warningDefault,display:design_system.nl.Block,style:{width:200}},react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{overflowWrap:design_system.Np.Normal}),design_system.Np.Normal,": 0x39013f961c378f02c2b82a6e1d31e9812786fd9d"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{overflowWrap:design_system.Np.BreakWord}),design_system.Np.BreakWord,": 0x39013f961c378f02c2b82a6e1d31e9812786fd9d"))};OverflowWrapStory.storyName="Overflow Wrap";var Ellipsis=function(args){return react.createElement(box.a,{borderColor:design_system.cG.primaryDefault,display:design_system.nl.Block,width:design_system.Zf.OneThird},react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{ellipsis:!0}),"Ellipsis: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d"),react.createElement(text_text.E,args,"No Ellipsis: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d"))},As=function(args){return react.createElement(react.Fragment,null,react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"dd"}),"dd"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"div"}),"div"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"dt"}),"dt"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"em"}),"em"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"h1"}),"h1"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"h2"}),"h2"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"h3"}),"h3"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"h4"}),"h4"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"h5"}),"h5"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"h6"}),"h6"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"li"}),"li"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"p"}),"p"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{display:design_system.nl.Block,as:"span"}),"span"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{display:design_system.nl.Block,as:"strong"}),"strong"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"ul"}),"ul"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"label"}),"label"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"header"}),"header"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"input",placeholder:"input"})))},TextDirectionStory=function(args){return react.createElement(box.a,{style:{maxWidth:300},display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:4},react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{textDirection:text_types.z4.LeftToRight}),"This is left to right (ltr) for English and most languages"),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{textDirection:text_types.z4.RightToLeft}),"This is right to left (rtl) for use with other languages such as Arabic. This English example is incorrect usage."),react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{textDirection:text_types.z4.Auto}),"Let the user agent decide with the auto option"))},Strong=function(args){return react.createElement(react.Fragment,null,react.createElement(text_text.E,_object_spread_props(_object_spread({},args),{as:"strong"}),'Text as="strong" tag'),react.createElement(text_text.E,args,"This is a ",react.createElement("strong",null,"strong tag")," as a child inside of Text"))};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <Text {...args}>{args.children}</Text>",...DefaultStory.parameters?.docs?.source}}},Variant.parameters={...Variant.parameters,docs:{...Variant.parameters?.docs,source:{originalSource:`args => <>
    {Object.values(TextVariant).map(variant => <Text {...args} variant={variant} key={variant}>
        {args.children || variant}
      </Text>)}
  </>`,...Variant.parameters?.docs?.source}}},ColorStory.parameters={...ColorStory.parameters,docs:{...ColorStory.parameters?.docs,source:{originalSource:`args => {
  // Index of last valid color in TextColor array
  return <>
      {Object.values(TextColor).map(color => {
      return <Text {...args} backgroundColor={renderBackgroundColor(color)} color={color} key={color}>
            {color}
          </Text>;
    })}
    </>;
}`,...ColorStory.parameters?.docs?.source}}},FontWeightStory.parameters={...FontWeightStory.parameters,docs:{...FontWeightStory.parameters?.docs,source:{originalSource:`args => <>
    {Object.values(FontWeight).map(weight => <Text {...args} fontWeight={weight} key={weight}>
        {weight}
      </Text>)}
  </>`,...FontWeightStory.parameters?.docs?.source}}},FontStyleStory.parameters={...FontStyleStory.parameters,docs:{...FontStyleStory.parameters?.docs,source:{originalSource:`args => <>
    {Object.values(FontStyle).map(style => <Text {...args} fontStyle={style} key={style}>
        {style}
      </Text>)}
  </>`,...FontStyleStory.parameters?.docs?.source}}},FontFamilyStory.parameters={...FontFamilyStory.parameters,docs:{...FontFamilyStory.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={4}>
    <Text {...args} fontFamily={FontFamily.Default}>
      Default Font (Geist) - The quick brown fox jumps over the lazy dog
    </Text>
    <Text {...args} fontFamily={FontFamily.Accent}>
      Accent Font (MMSans) - The quick brown fox jumps over the lazy dog
    </Text>
    <Text {...args} fontFamily={FontFamily.Hero}>
      Hero Font (MMPoly) - The quick brown fox jumps over the lazy dog
    </Text>
  </Box>`,...FontFamilyStory.parameters?.docs?.source}}},TextTransformStory.parameters={...TextTransformStory.parameters,docs:{...TextTransformStory.parameters?.docs,source:{originalSource:`args => <>
    {Object.values(TextTransform).map(transform => <Text {...args} textTransform={transform} key={transform}>
        {transform}
      </Text>)}
  </>`,...TextTransformStory.parameters?.docs?.source}}},TextAlignStory.parameters={...TextAlignStory.parameters,docs:{...TextAlignStory.parameters?.docs,source:{originalSource:`args => <>
    {Object.values(TextAlign).map(align => <Text {...args} textAlign={align} key={align}>
        {align}
      </Text>)}
  </>`,...TextAlignStory.parameters?.docs?.source}}},OverflowWrapStory.parameters={...OverflowWrapStory.parameters,docs:{...OverflowWrapStory.parameters?.docs,source:{originalSource:`args => <Box borderColor={BorderColor.warningDefault} display={Display.Block} style={{
  width: 200
}}>
    <Text {...args} overflowWrap={OverflowWrap.Normal}>
      {OverflowWrap.Normal}: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
    </Text>
    <Text {...args} overflowWrap={OverflowWrap.BreakWord}>
      {OverflowWrap.BreakWord}: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
    </Text>
  </Box>`,...OverflowWrapStory.parameters?.docs?.source}}},Ellipsis.parameters={...Ellipsis.parameters,docs:{...Ellipsis.parameters?.docs,source:{originalSource:`args => <Box borderColor={BorderColor.primaryDefault} display={Display.Block} width={BlockSize.OneThird}>
    <Text {...args} ellipsis>
      Ellipsis: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
    </Text>
    <Text {...args}>
      No Ellipsis: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
    </Text>
  </Box>`,...Ellipsis.parameters?.docs?.source}}},As.parameters={...As.parameters,docs:{...As.parameters?.docs,source:{originalSource:`args => <>
    <Text {...args} as="dd">
      dd
    </Text>
    <Text {...args} as="div">
      div
    </Text>
    <Text {...args} as="dt">
      dt
    </Text>
    <Text {...args} as="em">
      em
    </Text>
    <Text {...args} as="h1">
      h1
    </Text>
    <Text {...args} as="h2">
      h2
    </Text>
    <Text {...args} as="h3">
      h3
    </Text>
    <Text {...args} as="h4">
      h4
    </Text>
    <Text {...args} as="h5">
      h5
    </Text>
    <Text {...args} as="h6">
      h6
    </Text>
    <Text {...args} as="li">
      li
    </Text>
    <Text {...args} as="p">
      p
    </Text>
    <Text {...args} display={Display.Block} as="span">
      span
    </Text>
    <Text {...args} display={Display.Block} as="strong">
      strong
    </Text>
    <Text {...args} as="ul">
      ul
    </Text>
    <Text {...args} as="label">
      label
    </Text>
    <Text {...args} as="header">
      header
    </Text>
    <Text {...args} as="input" placeholder="input" />
  </>`,...As.parameters?.docs?.source}}},TextDirectionStory.parameters={...TextDirectionStory.parameters,docs:{...TextDirectionStory.parameters?.docs,source:{originalSource:`args => <Box style={{
  maxWidth: 300
}} display={Display.Flex} flexDirection={FlexDirection.Column} gap={4}>
    <Text {...args} textDirection={TextDirection.LeftToRight}>
      This is left to right (ltr) for English and most languages
    </Text>
    <Text {...args} textDirection={TextDirection.RightToLeft}>
      This is right to left (rtl) for use with other languages such as Arabic.
      This English example is incorrect usage.
    </Text>
    <Text {...args} textDirection={TextDirection.Auto}>
      Let the user agent decide with the auto option
    </Text>
  </Box>`,...TextDirectionStory.parameters?.docs?.source}}},Strong.parameters={...Strong.parameters,docs:{...Strong.parameters?.docs,source:{originalSource:`args => <>
    <Text {...args} as="strong">
      Text as="strong" tag
    </Text>
    <Text {...args}>
      This is a <strong>strong tag</strong> as a child inside of Text
    </Text>
  </>`,...Strong.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Variant","ColorStory","FontWeightStory","FontStyleStory","FontFamilyStory","TextTransformStory","TextAlignStory","OverflowWrapStory","Ellipsis","As","TextDirectionStory","Strong"];try{Variant.displayName="Variant",Variant.__docgenInfo={description:"",displayName:"Variant",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text/text.stories.tsx#Variant"]={docgenInfo:Variant.__docgenInfo,name:"Variant",path:"ui/components/component-library/text/text.stories.tsx#Variant"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-component-library-text-text-stories.1f84b3cf.iframe.bundle.js.map