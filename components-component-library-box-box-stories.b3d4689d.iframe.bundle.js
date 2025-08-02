"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[33739],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/box/box.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{As:()=>As,BackgroundColorStory:()=>BackgroundColorStory,BorderColorStory:()=>BorderColorStory,BorderRadiusStory:()=>BorderRadiusStory,BoxDefaultStory:()=>BoxDefaultStory,ColorStory:()=>ColorStory,Margin:()=>Margin,Padding:()=>Padding,ResponsiveProps:()=>ResponsiveProps,Width:()=>Width,__namedExportsOrder:()=>__namedExportsOrder,default:()=>box_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),box=__webpack_require__("./ui/components/component-library/box/box.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"box",children:"Box"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Box"})," is a utility component that accepts many helper props to make styling easier."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-box--box-default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:box.a}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"The following describes the props and example usage for this component."}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"margin",children:"Margin"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The margin props ",(0,jsx_runtime.jsx)(_components.code,{children:"margin"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"marginTop"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"marginRight"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"marginBottom"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"marginLeft"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"marginInline"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"marginInlineStart"}),", and ",(0,jsx_runtime.jsx)(_components.code,{children:"marginInlineEnd"})," can be used to set the margins of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Box"})," component. All of the margin props accept ",(0,jsx_runtime.jsx)(_components.a,{href:"#responsive-props",children:"responsive props"})," in the form of array props"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Accepted props are: ",(0,jsx_runtime.jsx)(_components.code,{children:"0, 1, 2, 4, 6, 8, 9, 10, 12, 'auto"})," or array of these values"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-box--margin"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`<Box margin={4} />
<Box marginTop={4} />
<Box marginRight={4} />
<Box marginBottom={4} />
<Box marginLeft={'auto'} />
<Box marginInline={4} />
<Box marginInlineStart={4} />
<Box marginInlineEnd={4} />

// Responsive props
<Box margin={[4, 8]} />
<Box marginTop={[4, 8]} />
<Box marginRight={[4, 8]} />
<Box marginBottom={[4, 8]} />
<Box marginLeft={['auto', 8]} />
<Box marginInline={['auto', 8]} />
<Box marginInlineStart={['auto', 8]} />
<Box marginInlineEnd={['auto', 8]} />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"padding",children:"Padding"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The padding props work very similarly to margin. The padding props ",(0,jsx_runtime.jsx)(_components.code,{children:"padding"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"paddingTop"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"paddingRight"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"paddingBottom"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"paddingLeft"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"paddingInline"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"paddingInlineStart"}),", and ",(0,jsx_runtime.jsx)(_components.code,{children:"paddingInlineEnd"})," can be used to set the paddings of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Box"})," component. All of the padding props accept ",(0,jsx_runtime.jsx)(_components.a,{href:"#responsive-props",children:"responsive props"})," in the form of array props"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Accepted props are: ",(0,jsx_runtime.jsx)(_components.code,{children:"0, 1, 2, 4, 6, 8, 9, 10, 12"})," or array of these values"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-box--padding"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`<Box padding={4} />
<Box paddingTop={4} />
<Box paddingRight={4} />
<Box paddingBottom={4} />
<Box paddingLeft={4} />

// Responsive props
<Box padding={[4, 8]} />
<Box paddingTop={[4, 8]} />
<Box paddingRight={[4, 8]} />
<Box paddingBottom={[4, 8]} />
<Box paddingLeft={[4, 8]} />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"display",children:"Display"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"display"})," prop can be used to set the display of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Box"})," component. All of the display props accept ",(0,jsx_runtime.jsx)(_components.a,{href:"#responsive-props",children:"responsive props"})," in the form of array props."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Accepted props imported from the design system ",(0,jsx_runtime.jsx)(_components.code,{children:"Display"})," const are:"]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"Display.Block"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"Display.Flex"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"Display.Grid"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"Display.InlineBlock"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"Display.InlineFlex"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"Display.InlineGrid"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"Display.Inline"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"Display.ListItem"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"Display.None"})}),`
`]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"or array of these values."}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Display } from '../../../helpers/constants/design-system';
import Box from '../ui/box';

<Box display={Display.Block} />
<Box display={Display.Flex} />
<Box display={Display.Grid} />
<Box display={Display.InlineBlock} />
<Box display={Display.InlineFlex} />
<Box display={Display.Inline} />
<Box display={Display.None} />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"color",children:"Color"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"color"})," prop can be used to set the color of the content in Box component. The ",(0,jsx_runtime.jsx)(_components.code,{children:"color"})," prop accepts ",(0,jsx_runtime.jsx)(_components.a,{href:"#responsive-props",children:"responsive props"})," in the form of array props. Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"Color.textDefault"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-box--color-story"})}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Example of importing ",(0,jsx_runtime.jsx)(_components.code,{children:"TextColor"})," object with ",(0,jsx_runtime.jsx)(_components.code,{children:"Box"})," component"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextColor } from '../../../helpers/constants/design-system';
import Box from '../ui/box';

<Box color={TextColor.textDefault}>Text goes here</Box>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"background-color",children:"Background Color"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"backgroundColor"})," prop along with the ",(0,jsx_runtime.jsx)(_components.code,{children:"Color"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"BackgroundColor"})," object from ",(0,jsx_runtime.jsx)(_components.code,{children:"ui/helpers/constants/design-system.js"})," to change background color. The ",(0,jsx_runtime.jsx)(_components.code,{children:"backgroundColor"})," prop accepts ",(0,jsx_runtime.jsx)(_components.a,{href:"#responsive-props",children:"responsive props"})," in the form of array props."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-box--background-color-story"})}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Example of importing ",(0,jsx_runtime.jsx)(_components.code,{children:"BackgroundColor"})," object with ",(0,jsx_runtime.jsx)(_components.code,{children:"Box"})," component"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  BackgroundColor,
  TextColor,
} from '../../../helpers/constants/design-system';
import Box from '../ui/box';

<Box backgroundColor={BackgroundColor.backgroundDefault}>
  <Text color={TextColor.textDefault}>BackgroundColor.backgroundDefault</Text>
</Box>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"border-color",children:"Border Color"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"borderColor"})," prop along with the ",(0,jsx_runtime.jsx)(_components.code,{children:"Color"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"BorderColor"})," object from ",(0,jsx_runtime.jsx)(_components.code,{children:"ui/helpers/constants/design-system.js"})," to change border color. The ",(0,jsx_runtime.jsx)(_components.code,{children:"borderColor"})," prop accepts ",(0,jsx_runtime.jsx)(_components.a,{href:"#responsive-props",children:"responsive props"})," in the form of array props."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-box--border-color-story"})}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Example of importing ",(0,jsx_runtime.jsx)(_components.code,{children:"BorderColor"})," object with ",(0,jsx_runtime.jsx)(_components.code,{children:"Box"})," component"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  BackgroundColor,
  BorderColor,
  TextColor,
} from '../../../helpers/constants/design-system';
import Box from '../ui/box';

<Box
  backgroundColor={BackgroundColor.backgroundDefault}
  borderColor={BorderColor.borderDefault}
>
  <Text color={TextColor.textDefault}>BorderColor.borderDefault</Text>
</Box>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"border-radius",children:"Border Radius"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"borderRadius"})," prop along with the ",(0,jsx_runtime.jsx)(_components.code,{children:"BorderRadius"})," object from ",(0,jsx_runtime.jsx)(_components.code,{children:"ui/helpers/constants/design-system.js"})," to change border radius. The ",(0,jsx_runtime.jsx)(_components.code,{children:"borderRadius"})," prop accepts ",(0,jsx_runtime.jsx)(_components.a,{href:"#responsive-props",children:"responsive props"})," in the form of array props."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-box--border-radius-story"})}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Example of importing ",(0,jsx_runtime.jsx)(_components.code,{children:"BorderRadius"})," object with ",(0,jsx_runtime.jsx)(_components.code,{children:"Box"})," component"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { BorderRadius } from '../../../helpers/constants/design-system';
import Box from '../ui/box';

<Box borderRadius={BorderRadius.none}>BorderRadius.none 0px</Box>
<Box borderRadius={BorderRadius.XS}>BorderRadius.XS 2px</Box>
<Box borderRadius={BorderRadius.SM}>BorderRadius.SM 4px</Box>
<Box borderRadius={BorderRadius.MD}>BorderRadius.MD 6px</Box>
<Box borderRadius={BorderRadius.LG}>BorderRadius.LG 8px</Box>
<Box borderRadius={BorderRadius.XL}>BorderRadius.XL 12px</Box>
<Box borderRadius={BorderRadius.pill}>BorderRadius.pill 9999px</Box>
<Box borderRadius={BorderRadius.full}>BorderRadius.full 50%</Box>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"responsive-props",children:"Responsive Props"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The box component provides a responsive props api in the form of array props. Array props are inspired by ",(0,jsx_runtime.jsx)(_components.a,{href:"https://styled-system.com/guides/array-props",target:"_blank",rel:"nofollow noopener noreferrer",children:"styled-systems array props"}),". The responsive props follow a mobile first methodology with the first item in the array applying the style to the base level size e.g. ",(0,jsx_runtime.jsx)(_components.code,{children:"0px"})," and up. The second item overwrites the first items styles at the next breakpoint."]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:"All Box props accept the responsive props format"}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["To skip a breakpoint use ",(0,jsx_runtime.jsx)(_components.code,{children:"null"})," as the skipped item's value e.g. ",(0,jsx_runtime.jsx)(_components.code,{children:"<Box display={['display', null, ;flex']} />"})]}),`
`]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{children:`// the responsive props
<Box display={['block', 'flex']} />

// is equivalent to the css
.box {
  display: block;

  @media screen and (max-width: $breakpoint-sm) {
    display: flex;
  }
}
`})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-box--responsive-props"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  BorderColor,
  BackgroundColor,
} from '../../../helpers/constants/design-system';
import Box from '../ui/box';

<Box
  padding={[2, 4]}
  gap={[2, 4]}
  display={['flex']}
  flexDirection={['column', 'row']}
  borderColor={BorderColor.borderDefault}
>
  <Box
    padding={[4, 8]}
    backgroundColor={BackgroundColor.backgroundAlternative}
    borderColor={BorderColor.borderMuted}
  >
    responsive
  </Box>
  <Box
    padding={[4, 8]}
    backgroundColor={BackgroundColor.backgroundAlternative}
    borderColor={BorderColor.borderMuted}
  >
    props
  </Box>
  <Box
    padding={[4, 8]}
    backgroundColor={BackgroundColor.backgroundAlternative}
    borderColor={BorderColor.borderMuted}
  >
    example
  </Box>
</Box>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"as",children:"As"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The polymorphic ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," prop allows you to change the root HTML element of the Box component. Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"'div'"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-box--as"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import Box from '../../ui/box';

<Box>div(default)</Box>
<Box as="ul">ul</Box>
<Box as="li">li</Box>
<Box as="button">button</Box>
<Box as="header">header</Box>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"width",children:"Width"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"width"})," prop to pass a singular ",(0,jsx_runtime.jsx)(_components.code,{children:"BlockSize"})," or for a responsive width pass an array up to 4 ",(0,jsx_runtime.jsx)(_components.code,{children:"BlockSize"})]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Responsive widths go from smallest to largest screen sizes"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Example: [BlockSize.Half, BlockSize.ThreeFourths, BlockSize.OneFifth, BlockSize.ThreeSixths]"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["BlockSize.Half is the default width for ",(0,jsx_runtime.jsx)(_components.code,{children:"base screen size (0px)"})," and up"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["BlockSize.ThreeFourths is the width for ",(0,jsx_runtime.jsx)(_components.code,{children:"small screen size (576px) "})," and up"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["BlockSize.OneFifth is the width for ",(0,jsx_runtime.jsx)(_components.code,{children:"medium screen size (768px)"})," and up"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["BlockSize.ThreeSixths is the width for ",(0,jsx_runtime.jsx)(_components.code,{children:"large screen size (1280px)"})," and up"]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-box--width"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  BlockSize,
  Display,
  FlexWrap,
} from '../../../helpers/constants/design-system';
import Box from '../../ui/box';

<>
  <p>Static widths</p>

  <Box display={Display.Flex}>
    <Box width={BlockSize.Full}>BlockSize.Full</Box>
    <Box width={BlockSize.Half}>BlockSize.Half</Box>
    <Box width={BlockSize.Half}>BlockSize.Half</Box>
    <Box width={BlockSize.OneThird}>BlockSize.OneThird</Box>
    <Box width={BlockSize.OneThird}>BlockSize.OneThird</Box>
    <Box width={BlockSize.OneThird}>BlockSize.OneThird</Box>
    <Box width={BlockSize.OneFourth}>BlockSize.OneFourth</Box>
    <Box width={BlockSize.OneFourth}>BlockSize.OneFourth</Box>
    <Box width={BlockSize.OneFourth}>BlockSize.OneFourth</Box>
    <Box width={BlockSize.OneFourth}>BlockSize.OneFourth</Box>
  </Box>

  <p>Responsive widths</p>

  <Box display={Display.Flex} flexWrap={FlexWrap.Wrap}>
    <Box
      width={[
        BlockSize.Full,
        BlockSize.Half,
        BlockSize.OneThird,
        BlockSize.OneFourth,
      ]}
    >
      BlockSize.Full, BlockSize.Half, BlockSize.OneThird, BlockSize.OneFourth,
    </Box>
    <Box
      width={[
        BlockSize.Full,
        BlockSize.Half,
        BlockSize.OneThird,
        BlockSize.OneFourth,
      ]}
    >
      BlockSize.Full, BlockSize.Half, BlockSize.OneThird, BlockSize.OneFourth,
    </Box>
    <Box
      width={[
        BlockSize.Full,
        BlockSize.Half,
        BlockSize.OneThird,
        BlockSize.OneFourth,
      ]}
    >
      BlockSize.Full, BlockSize.Half, BlockSize.OneThird, BlockSize.OneFourth,
    </Box>
    <Box
      width={[
        BlockSize.Full,
        BlockSize.Half,
        BlockSize.OneThird,
        BlockSize.OneFourth,
      ]}
    >
      BlockSize.Full, BlockSize.Half, BlockSize.OneThird, BlockSize.OneFourth,
    </Box>
  </Box>
</>;
`})})]})}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var sizeControlOptions=[void 0,0,1,2,3,4,5,6,7,8,9,10,11,12],marginSizeControlOptions=(function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()})(sizeControlOptions).concat(["auto"]);let box_stories={title:"Components/ComponentLibrary/Box",component:box.a,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{children:{table:{category:"children"}},display:{options:Object.values(design_system.nl),control:"select",table:{category:"display"}},width:{options:Object.values(design_system.Zf),control:"multi-select",table:{category:"display"}},minWidth:{options:Object.values(design_system.Zf),control:"multi-select",table:{category:"display"}},height:{options:Object.values(design_system.Zf),control:"select",table:{category:"display"}},gap:{control:"select",options:sizeControlOptions,table:{category:"display"}},backgroundColor:{options:Object.values(design_system.i0),control:"select",table:{category:"background"}},color:{options:Object.values(design_system.r7),control:"select",table:{category:"color"}},borderStyle:{options:Object.values(design_system.kD),control:"select",table:{category:"border"}},borderWidth:{options:sizeControlOptions,control:"select",table:{category:"border"}},borderColor:{options:Object.values(design_system.cG),control:"select",table:{category:"border"}},borderRadius:{options:Object.values(design_system.Z6),control:"select",table:{category:"border"}},flexWrap:{options:Object.values(design_system.I4),control:"select",table:{category:"display"}},flexDirection:{options:Object.values(design_system.bo),control:"select",table:{category:"display"}},justifyContent:{options:Object.values(design_system.A9),control:"select",table:{category:"display"}},alignItems:{options:Object.values(design_system.k2),control:"select",table:{category:"display"}},textAlign:{options:Object.values(design_system.nO),control:"select",table:{category:"text"}},margin:{options:marginSizeControlOptions,control:"select",table:{category:"margin"}},marginTop:{options:marginSizeControlOptions,control:"select",table:{category:"margin"}},marginRight:{options:marginSizeControlOptions,control:"select",table:{category:"margin"}},marginBottom:{options:marginSizeControlOptions,control:"select",table:{category:"margin"}},marginLeft:{options:marginSizeControlOptions,control:"select",table:{category:"margin"}},marginInline:{options:marginSizeControlOptions,control:"select",table:{category:"margin"}},marginInlineStart:{options:marginSizeControlOptions,control:"select",table:{category:"margin"}},marginInlineEnd:{options:marginSizeControlOptions,control:"select",table:{category:"margin"}},padding:{options:sizeControlOptions,control:"select",table:{category:"padding"}},paddingTop:{options:sizeControlOptions,control:"select",table:{category:"padding"}},paddingRight:{options:sizeControlOptions,control:"select",table:{category:"padding"}},paddingBottom:{options:sizeControlOptions,control:"select",table:{category:"padding"}},paddingLeft:{options:sizeControlOptions,control:"select",table:{category:"padding"}},paddingInline:{options:sizeControlOptions,control:"select",table:{category:"padding"}},paddingInlineStart:{options:sizeControlOptions,control:"select",table:{category:"padding"}},paddingInlineEnd:{options:sizeControlOptions,control:"select",table:{category:"padding"}},as:{control:"select",options:["div","ul","li","span","a","button"],table:{category:"as (root html element)"}}}};var BoxDefaultStory=function(args){return react.createElement(box.a,args)};BoxDefaultStory.args={children:"Box component",display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,minWidth:design_system.Zf.Zero,width:design_system.Zf.Half,height:design_system.Zf.Half,borderColor:design_system.cG.borderDefault,padding:4},BoxDefaultStory.storyName="Default";var Margin=function(args){return react.createElement(box.a,{borderColor:design_system.cG.borderMuted},react.createElement(box.a,_object_spread_props(_object_spread({},args),{margin:2,padding:4,backgroundColor:design_system.i0.backgroundAlternative,borderColor:design_system.cG.borderMuted}),"Static margin"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{margin:[2,4,8,12],padding:[4],backgroundColor:design_system.i0.backgroundAlternative,borderColor:design_system.cG.borderMuted}),"Responsive margin changes based on breakpoint"))},Padding=function(args){return react.createElement(box.a,{borderColor:design_system.cG.borderMuted},react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:4,backgroundColor:design_system.i0.backgroundAlternative,borderColor:design_system.cG.borderMuted}),"Static padding"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:[4,8,12],backgroundColor:design_system.i0.backgroundAlternative,borderColor:design_system.cG.borderMuted}),"Responsive padding changes based on breakpoint"))},ColorStory=function(args){return react.createElement(react.Fragment,null,react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.textDefault}),"TextColor.textDefault"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.textAlternative}),"TextColor.textAlternative"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.textMuted}),"TextColor.textMuted"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.primaryDefault}),"TextColor.primaryDefault"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.primaryInverse,backgroundColor:design_system.i0.primaryDefault}),"TextColor.primaryInverse"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.errorDefault}),"TextColor.errorDefault"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.errorInverse,backgroundColor:design_system.i0.errorDefault}),"TextColor.errorInverse"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.successDefault}),"TextColor.successDefault"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.successInverse,backgroundColor:design_system.i0.successDefault}),"TextColor.successInverse"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.warningDefault}),"TextColor.warningDefault"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.warningInverse,backgroundColor:design_system.i0.warningDefault}),"TextColor.warningInverse"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.infoDefault}),"TextColor.infoDefault"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.infoInverse,backgroundColor:design_system.i0.infoDefault}),"TextColor.infoInverse"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,color:design_system.r7.inherit}),"TextColor.inherit"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,backgroundColor:design_system.i0.sepolia,color:design_system.r7.sepoliaInverse}),"TextColor.sepoliaInverse"),react.createElement(box.a,_object_spread_props(_object_spread({},args),{padding:3,backgroundColor:design_system.i0.goerli,color:design_system.r7.goerliInverse}),"TextColor.goerliInverse"))};ColorStory.storyName="Color";var BackgroundColorStory=function(){return react.createElement(react.Fragment,null,react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundDefault},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BackgroundColor.backgroundDefault")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundAlternative},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BackgroundColor.backgroundAlternative")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundSection},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BackgroundColor.backgroundSection")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundSubsection},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BackgroundColor.backgroundSubsection")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundMuted},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BackgroundColor.backgroundMuted (transparent)")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.overlayDefault},react.createElement(component_library_text.EY,{color:design_system.r7.overlayInverse},"BackgroundColor.overlayDefault")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.overlayAlternative},react.createElement(component_library_text.EY,{color:design_system.r7.overlayInverse},"BackgroundColor.overlayAlternative")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.primaryDefault},react.createElement(component_library_text.EY,{color:design_system.r7.primaryInverse},"BackgroundColor.primaryDefault")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.primaryMuted},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BackgroundColor.primaryMuted")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.errorDefault},react.createElement(component_library_text.EY,{color:design_system.r7.errorInverse},"BackgroundColor.errorDefault")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.errorMuted},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BackgroundColor.errorMuted")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.successDefault},react.createElement(component_library_text.EY,{color:design_system.r7.successInverse},"BackgroundColor.successDefault")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.successMuted},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BackgroundColor.successMuted")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.warningDefault},react.createElement(component_library_text.EY,{color:design_system.r7.warningInverse},"BackgroundColor.warningDefault")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.warningMuted},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BackgroundColor.warningMuted")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.sepolia},react.createElement(component_library_text.EY,{color:design_system.r7.sepoliaInverse},"BackgroundColor.sepolia")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.goerli},react.createElement(component_library_text.EY,{color:design_system.r7.goerliInverse},"BackgroundColor.goerli")))};BackgroundColorStory.storyName="BackgroundColor";var BorderColorStory=function(){return react.createElement(react.Fragment,null,react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundDefault,borderColor:design_system.cG.borderDefault,borderWidth:2,marginBottom:1},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BorderColor.borderDefault")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundDefault,borderColor:design_system.cG.borderMuted,borderWidth:2,marginBottom:1},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BorderColor.borderMuted")),react.createElement(box.a,{padding:3,borderColor:design_system.cG.primaryDefault,borderWidth:2,marginBottom:1,backgroundColor:design_system.i0.primaryMuted},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BorderColor.primaryDefault")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.errorMuted,borderColor:design_system.cG.errorDefault,borderWidth:2,marginBottom:1},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BorderColor.errorDefault")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.successMuted,borderColor:design_system.cG.successDefault,borderWidth:2,marginBottom:1},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BorderColor.successDefault")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.warningMuted,borderColor:design_system.cG.warningDefault,borderWidth:2},react.createElement(component_library_text.EY,{color:design_system.r7.textDefault},"BorderColor.warningDefault")))};BorderColorStory.storyName="BorderColor";var BorderRadiusStory=function(){return react.createElement(react.Fragment,null,react.createElement(box.a,{display:design_system.nl.Grid,style:{gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))"},gap:4},react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundAlternative,borderColor:design_system.cG.borderDefault,borderWidth:2,borderRadius:design_system.Z6.none},"BorderRadius.NONE 0px"),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundAlternative,borderColor:design_system.cG.borderDefault,borderWidth:2,borderRadius:design_system.Z6.XS},"BorderRadius.XS 2px"),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundAlternative,borderColor:design_system.cG.borderDefault,borderWidth:2,borderRadius:design_system.Z6.SM},"BorderRadius.SM 4px"),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundAlternative,borderColor:design_system.cG.borderDefault,borderWidth:2,borderRadius:design_system.Z6.MD},"BorderRadius.MD 6px"),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundAlternative,borderColor:design_system.cG.borderDefault,borderWidth:2,borderRadius:design_system.Z6.LG},"BorderRadius.LG 8px"),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundAlternative,borderColor:design_system.cG.borderDefault,borderWidth:2,borderRadius:design_system.Z6.XL},"BorderRadius.XL 12px"),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundAlternative,borderColor:design_system.cG.borderDefault,borderWidth:2,borderRadius:design_system.Z6.pill},"BorderRadius.pill 9999px")),react.createElement(box.a,{padding:3,backgroundColor:design_system.i0.backgroundAlternative,borderColor:design_system.cG.borderDefault,borderWidth:2,borderRadius:design_system.Z6.full,margin:4,display:design_system.nl.Flex,alignItems:design_system.k2.center,style:{height:"250px",width:"250px"}},"BorderRadius.full 50%"))};BorderRadiusStory.storyName="BorderRadius";var ResponsiveProps=function(){return react.createElement(react.Fragment,null,react.createElement(component_library_text.EY,{marginBottom:4},"Responsive props example. Stacks vertically on small screens and aligns horizontally on large screens. Padding is also adjusted between small and large screens"),react.createElement(box.a,{marginTop:"auto",marginBottom:[0],padding:[2,4],gap:[2,4],display:[design_system.nl.Flex,null,null,design_system.nl.None],flexDirection:[design_system.bo.Column,design_system.bo.Column,design_system.bo.Row],borderColor:design_system.cG.borderDefault},react.createElement(box.a,{padding:[4,8],backgroundColor:[design_system.i0.backgroundAlternative,design_system.i0.primaryMuted],borderColor:design_system.cG.borderMuted},"responsive"),react.createElement(box.a,{padding:[4,8],backgroundColor:[design_system.i0.backgroundAlternative,design_system.i0.primaryMuted],borderColor:design_system.cG.borderMuted},"props"),react.createElement(box.a,{padding:[4,8],backgroundColor:[design_system.i0.backgroundAlternative,design_system.i0.primaryMuted],borderColor:design_system.cG.borderMuted},"example"),react.createElement(box.a,{padding:[4,8],borderRadius:[design_system.Z6.XS,design_system.Z6.SM,design_system.Z6.MD,design_system.Z6.LG],backgroundColor:[design_system.i0.backgroundAlternative,design_system.i0.primaryMuted],borderColor:design_system.cG.borderMuted},"Responsive Border Radius 1"),react.createElement(box.a,{padding:[4,8],borderRadius:[design_system.Z6.XL,design_system.Z6.pill,design_system.Z6.none,design_system.Z6.full],backgroundColor:[design_system.i0.backgroundAlternative,design_system.i0.primaryMuted],borderColor:design_system.cG.borderMuted},"Responsive Border Radius 2")))},As=function(args){return react.createElement(react.Fragment,null,react.createElement(component_library_text.EY,{marginBottom:4},"You can change the root element of the Box component using the as prop. Inspect the below elements to see the underlying HTML elements"),react.createElement(box.a,args,"div(default)"),react.createElement(box.a,{as:"button",disabled:!0},"Box as 'button' tag"),react.createElement("br",null),react.createElement(box.a,{as:"button",disabled:!0},"Box as 'button' tag and disabled"),react.createElement("br",null),react.createElement(box.a,{as:"a",href:"https://metamask.io"},"Box as 'a' tag with href"),react.createElement("br",null),react.createElement(box.a,{as:"p",href:"https://metamask.io","data-testid":"hello"},"Box as 'p' tag with href and data-testid"),react.createElement("br",null),react.createElement(box.a,{as:"p",disabled:!0},"Box as 'p' tag and disabled"),react.createElement("br",null),react.createElement(box.a,null,"Box as 'span' tag (default)"),react.createElement("br",null),react.createElement(box.a,{as:"p"},"Box as 'p' tag"),react.createElement("br",null),react.createElement(box.a,{as:"li"},"Box as 'li' tag"),react.createElement("br",null),react.createElement(box.a,{as:"h1"},"Box as 'h1' tag"))},Width=function(){var getColumns=function(){for(var content=[],i=0;i<12;i++)content.push(react.createElement(box.a,{key:i,backgroundColor:i%2==0?design_system.i0.errorMuted:design_system.i0.warningMuted,width:design_system.Zf.OneTwelfth}));return content};return react.createElement(react.Fragment,null,react.createElement("p",null,react.createElement("b",null,"Static widths")),react.createElement(box.a,{display:design_system.nl.Flex,borderColor:design_system.cG.borderMuted,style:{height:"100vh",position:"relative"},marginBottom:6},getColumns(),react.createElement(box.a,{width:design_system.Zf.Full,display:design_system.nl.Flex,flexWrap:design_system.I4.Wrap,style:{position:"absolute",top:0,bottom:0,left:0,right:0}},react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,marginBottom:6,width:design_system.Zf.Full,display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.Full"),react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,marginBottom:6,width:design_system.Zf.Half,display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.Half"),react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,marginBottom:6,width:design_system.Zf.Half,display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.Half"),react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,marginBottom:6,width:design_system.Zf.OneThird,display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.OneThird"),react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,marginBottom:6,width:design_system.Zf.OneThird,display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.OneThird"),react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,marginBottom:6,width:design_system.Zf.OneThird,display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.OneThird"),react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,width:design_system.Zf.OneFourth,display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.OneFourth"),react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,width:design_system.Zf.OneFourth,display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.OneFourth"),react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,width:design_system.Zf.OneFourth,display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.OneFourth"),react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,width:design_system.Zf.OneFourth,display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.OneFourth"))),react.createElement("p",null,react.createElement("b",null,"Responsive widths")),react.createElement(box.a,{display:design_system.nl.Flex,borderColor:design_system.cG.borderMuted,style:{height:"100vh",position:"relative",textAlign:"center"}},getColumns(),react.createElement(box.a,{width:design_system.Zf.Full,display:design_system.nl.Flex,flexWrap:design_system.I4.Wrap,style:{position:"absolute",top:0,bottom:0,left:0,right:0}},react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,width:[design_system.Zf.Full,design_system.Zf.Half,design_system.Zf.OneThird,design_system.Zf.OneFourth],display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.Full, BlockSize.Half, BlockSize.OneThird, BlockSize.OneFourth,"),react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,width:[design_system.Zf.Full,design_system.Zf.Half,design_system.Zf.OneThird,design_system.Zf.OneFourth],display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.Full, BlockSize.Half, BlockSize.OneThird, BlockSize.OneFourth,"),react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,width:[design_system.Zf.Full,design_system.Zf.Half,design_system.Zf.OneThird,design_system.Zf.OneFourth],display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.Full, BlockSize.Half, BlockSize.OneThird, BlockSize.OneFourth,"),react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderWidth:6,width:[design_system.Zf.Full,design_system.Zf.Half,design_system.Zf.OneThird,design_system.Zf.OneFourth],display:design_system.nl.Flex,alignItems:design_system.k2.center,justifyContent:design_system.A9.center},"BlockSize.Full, BlockSize.Half, BlockSize.OneThird, BlockSize.OneFourth,"))))};BoxDefaultStory.parameters={...BoxDefaultStory.parameters,docs:{...BoxDefaultStory.parameters?.docs,source:{originalSource:"args => <Box {...args} />",...BoxDefaultStory.parameters?.docs?.source}}},Margin.parameters={...Margin.parameters,docs:{...Margin.parameters?.docs,source:{originalSource:`args => {
  return <Box borderColor={BorderColor.borderMuted}>
      <Box {...args} margin={2} padding={4} backgroundColor={BackgroundColor.backgroundAlternative} borderColor={BorderColor.borderMuted}>
        Static margin
      </Box>
      <Box {...args} margin={[2, 4, 8, 12]} padding={[4]} backgroundColor={BackgroundColor.backgroundAlternative} borderColor={BorderColor.borderMuted}>
        Responsive margin changes based on breakpoint
      </Box>
    </Box>;
}`,...Margin.parameters?.docs?.source}}},Padding.parameters={...Padding.parameters,docs:{...Padding.parameters?.docs,source:{originalSource:`args => {
  return <Box borderColor={BorderColor.borderMuted}>
      <Box {...args} padding={4} backgroundColor={BackgroundColor.backgroundAlternative} borderColor={BorderColor.borderMuted}>
        Static padding
      </Box>
      <Box {...args} padding={[4, 8, 12]} backgroundColor={BackgroundColor.backgroundAlternative} borderColor={BorderColor.borderMuted}>
        Responsive padding changes based on breakpoint
      </Box>
    </Box>;
}`,...Padding.parameters?.docs?.source}}},ColorStory.parameters={...ColorStory.parameters,docs:{...ColorStory.parameters?.docs,source:{originalSource:`args => {
  return <>
      <Box {...args} padding={3} color={TextColor.textDefault}>
        TextColor.textDefault
      </Box>
      <Box {...args} padding={3} color={TextColor.textAlternative}>
        TextColor.textAlternative
      </Box>
      <Box {...args} padding={3} color={TextColor.textMuted}>
        TextColor.textMuted
      </Box>
      <Box {...args} padding={3} color={TextColor.primaryDefault}>
        TextColor.primaryDefault
      </Box>
      <Box {...args} padding={3} color={TextColor.primaryInverse} backgroundColor={BackgroundColor.primaryDefault}>
        TextColor.primaryInverse
      </Box>
      <Box {...args} padding={3} color={TextColor.errorDefault}>
        TextColor.errorDefault
      </Box>
      <Box {...args} padding={3} color={TextColor.errorInverse} backgroundColor={BackgroundColor.errorDefault}>
        TextColor.errorInverse
      </Box>
      <Box {...args} padding={3} color={TextColor.successDefault}>
        TextColor.successDefault
      </Box>
      <Box {...args} padding={3} color={TextColor.successInverse} backgroundColor={BackgroundColor.successDefault}>
        TextColor.successInverse
      </Box>
      <Box {...args} padding={3} color={TextColor.warningDefault}>
        TextColor.warningDefault
      </Box>
      <Box {...args} padding={3} color={TextColor.warningInverse} backgroundColor={BackgroundColor.warningDefault}>
        TextColor.warningInverse
      </Box>
      <Box {...args} padding={3} color={TextColor.infoDefault}>
        TextColor.infoDefault
      </Box>
      <Box {...args} padding={3} color={TextColor.infoInverse} backgroundColor={BackgroundColor.infoDefault}>
        TextColor.infoInverse
      </Box>
      <Box {...args} padding={3} color={TextColor.inherit}>
        TextColor.inherit
      </Box>
      <Box {...args} padding={3} backgroundColor={BackgroundColor.sepolia} color={TextColor.sepoliaInverse}>
        TextColor.sepoliaInverse
      </Box>
      <Box {...args} padding={3} backgroundColor={BackgroundColor.goerli} color={TextColor.goerliInverse}>
        TextColor.goerliInverse
      </Box>
    </>;
}`,...ColorStory.parameters?.docs?.source}}},BackgroundColorStory.parameters={...BackgroundColorStory.parameters,docs:{...BackgroundColorStory.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Box padding={3} backgroundColor={BackgroundColor.backgroundDefault}>
        <Text color={TextColor.textDefault}>
          BackgroundColor.backgroundDefault
        </Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.backgroundAlternative}>
        <Text color={TextColor.textDefault}>
          BackgroundColor.backgroundAlternative
        </Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.backgroundSection}>
        <Text color={TextColor.textDefault}>
          BackgroundColor.backgroundSection
        </Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.backgroundSubsection}>
        <Text color={TextColor.textDefault}>
          BackgroundColor.backgroundSubsection
        </Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.backgroundMuted}>
        <Text color={TextColor.textDefault}>
          BackgroundColor.backgroundMuted (transparent)
        </Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.overlayDefault}>
        <Text color={TextColor.overlayInverse}>
          BackgroundColor.overlayDefault
        </Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.overlayAlternative}>
        <Text color={TextColor.overlayInverse}>
          BackgroundColor.overlayAlternative
        </Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.primaryDefault}>
        <Text color={TextColor.primaryInverse}>
          BackgroundColor.primaryDefault
        </Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.primaryMuted}>
        <Text color={TextColor.textDefault}>BackgroundColor.primaryMuted</Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.errorDefault}>
        <Text color={TextColor.errorInverse}>BackgroundColor.errorDefault</Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.errorMuted}>
        <Text color={TextColor.textDefault}>BackgroundColor.errorMuted</Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.successDefault}>
        <Text color={TextColor.successInverse}>
          BackgroundColor.successDefault
        </Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.successMuted}>
        <Text color={TextColor.textDefault}>BackgroundColor.successMuted</Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.warningDefault}>
        <Text color={TextColor.warningInverse}>
          BackgroundColor.warningDefault
        </Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.warningMuted}>
        <Text color={TextColor.textDefault}>BackgroundColor.warningMuted</Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.sepolia}>
        <Text color={TextColor.sepoliaInverse}>BackgroundColor.sepolia</Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.goerli}>
        <Text color={TextColor.goerliInverse}>BackgroundColor.goerli</Text>
      </Box>
    </>;
}`,...BackgroundColorStory.parameters?.docs?.source}}},BorderColorStory.parameters={...BorderColorStory.parameters,docs:{...BorderColorStory.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Box padding={3} backgroundColor={BackgroundColor.backgroundDefault} borderColor={BorderColor.borderDefault} borderWidth={2} marginBottom={1}>
        <Text color={TextColor.textDefault}>BorderColor.borderDefault</Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.backgroundDefault} borderColor={BorderColor.borderMuted} borderWidth={2} marginBottom={1}>
        <Text color={TextColor.textDefault}>BorderColor.borderMuted</Text>
      </Box>
      <Box padding={3} borderColor={BorderColor.primaryDefault} borderWidth={2} marginBottom={1} backgroundColor={BackgroundColor.primaryMuted}>
        <Text color={TextColor.textDefault}>BorderColor.primaryDefault</Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.errorMuted} borderColor={BorderColor.errorDefault} borderWidth={2} marginBottom={1}>
        <Text color={TextColor.textDefault}>BorderColor.errorDefault</Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.successMuted} borderColor={BorderColor.successDefault} borderWidth={2} marginBottom={1}>
        <Text color={TextColor.textDefault}>BorderColor.successDefault</Text>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.warningMuted} borderColor={BorderColor.warningDefault} borderWidth={2}>
        <Text color={TextColor.textDefault}>BorderColor.warningDefault</Text>
      </Box>
    </>;
}`,...BorderColorStory.parameters?.docs?.source}}},BorderRadiusStory.parameters={...BorderRadiusStory.parameters,docs:{...BorderRadiusStory.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Box display={Display.Grid} style={{
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
    }} gap={4}>
        <Box padding={3} backgroundColor={BackgroundColor.backgroundAlternative} borderColor={BorderColor.borderDefault} borderWidth={2} borderRadius={BorderRadius.none}>
          BorderRadius.NONE 0px
        </Box>
        <Box padding={3} backgroundColor={BackgroundColor.backgroundAlternative} borderColor={BorderColor.borderDefault} borderWidth={2} borderRadius={BorderRadius.XS}>
          BorderRadius.XS 2px
        </Box>
        <Box padding={3} backgroundColor={BackgroundColor.backgroundAlternative} borderColor={BorderColor.borderDefault} borderWidth={2} borderRadius={BorderRadius.SM}>
          BorderRadius.SM 4px
        </Box>
        <Box padding={3} backgroundColor={BackgroundColor.backgroundAlternative} borderColor={BorderColor.borderDefault} borderWidth={2} borderRadius={BorderRadius.MD}>
          BorderRadius.MD 6px
        </Box>
        <Box padding={3} backgroundColor={BackgroundColor.backgroundAlternative} borderColor={BorderColor.borderDefault} borderWidth={2} borderRadius={BorderRadius.LG}>
          BorderRadius.LG 8px
        </Box>
        <Box padding={3} backgroundColor={BackgroundColor.backgroundAlternative} borderColor={BorderColor.borderDefault} borderWidth={2} borderRadius={BorderRadius.XL}>
          BorderRadius.XL 12px
        </Box>
        <Box padding={3} backgroundColor={BackgroundColor.backgroundAlternative} borderColor={BorderColor.borderDefault} borderWidth={2} borderRadius={BorderRadius.pill}>
          BorderRadius.pill 9999px
        </Box>
      </Box>
      <Box padding={3} backgroundColor={BackgroundColor.backgroundAlternative} borderColor={BorderColor.borderDefault} borderWidth={2} borderRadius={BorderRadius.full} margin={4} display={Display.Flex} alignItems={AlignItems.center} style={{
      height: '250px',
      width: '250px'
    }}>
        BorderRadius.full 50%
      </Box>
    </>;
}`,...BorderRadiusStory.parameters?.docs?.source}}},ResponsiveProps.parameters={...ResponsiveProps.parameters,docs:{...ResponsiveProps.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Text marginBottom={4}>
        Responsive props example. Stacks vertically on small screens and aligns
        horizontally on large screens. Padding is also adjusted between small
        and large screens
      </Text>
      <Box marginTop="auto" marginBottom={[0]} padding={[2, 4]} gap={[2, 4]} display={[Display.Flex, null, null, Display.None]} flexDirection={[FlexDirection.Column, FlexDirection.Column, FlexDirection.Row]} borderColor={BorderColor.borderDefault}>
        <Box padding={[4, 8]} backgroundColor={[BackgroundColor.backgroundAlternative, BackgroundColor.primaryMuted]} borderColor={BorderColor.borderMuted}>
          responsive
        </Box>
        <Box padding={[4, 8]} backgroundColor={[BackgroundColor.backgroundAlternative, BackgroundColor.primaryMuted]} borderColor={BorderColor.borderMuted}>
          props
        </Box>
        <Box padding={[4, 8]} backgroundColor={[BackgroundColor.backgroundAlternative, BackgroundColor.primaryMuted]} borderColor={BorderColor.borderMuted}>
          example
        </Box>
        <Box padding={[4, 8]} borderRadius={[BorderRadius.XS, BorderRadius.SM, BorderRadius.MD, BorderRadius.LG]} backgroundColor={[BackgroundColor.backgroundAlternative, BackgroundColor.primaryMuted]} borderColor={BorderColor.borderMuted}>
          Responsive Border Radius 1
        </Box>
        <Box padding={[4, 8]} borderRadius={[BorderRadius.XL, BorderRadius.pill, BorderRadius.none, BorderRadius.full]} backgroundColor={[BackgroundColor.backgroundAlternative, BackgroundColor.primaryMuted]} borderColor={BorderColor.borderMuted}>
          Responsive Border Radius 2
        </Box>
      </Box>
    </>;
}`,...ResponsiveProps.parameters?.docs?.source}}},As.parameters={...As.parameters,docs:{...As.parameters?.docs,source:{originalSource:`args => {
  return <>
      <Text marginBottom={4}>
        You can change the root element of the Box component using the as prop.
        Inspect the below elements to see the underlying HTML elements
      </Text>
      <Box {...args}>div(default)</Box>
      <Box as="button" disabled>
        Box as 'button' tag
      </Box>
      <br />
      <Box as="button" disabled>
        Box as 'button' tag and disabled
      </Box>
      <br />
      <Box as="a" href="https://metamask.io">
        Box as 'a' tag with href
      </Box>
      <br />
      <Box as="p" href="https://metamask.io" data-testid="hello">
        Box as 'p' tag with href and data-testid
      </Box>
      <br />
      <Box as="p" disabled>
        Box as 'p' tag and disabled
      </Box>
      <br />
      <Box>Box as 'span' tag (default)</Box>
      <br />
      <Box as="p">Box as 'p' tag</Box>
      <br />
      <Box as="li">Box as 'li' tag</Box>
      <br />
      <Box as="h1">Box as 'h1' tag</Box>
    </>;
}`,...As.parameters?.docs?.source}}},Width.parameters={...Width.parameters,docs:{...Width.parameters?.docs,source:{originalSource:`() => {
  const getColumns = (): JSX.Element[] => {
    const content: JSX.Element[] = [];
    for (let i = 0; i < 12; i++) {
      content.push(<Box key={i} backgroundColor={i % 2 === 0 ? BackgroundColor.errorMuted : BackgroundColor.warningMuted} width={BlockSize.OneTwelfth} />);
    }
    return content;
  };
  return <>
      <p>
        <b>Static widths</b>
      </p>
      <Box display={Display.Flex} borderColor={BorderColor.borderMuted} style={{
      height: '100vh',
      position: 'relative'
    }} marginBottom={6}>
        {getColumns()}

        <Box width={BlockSize.Full} display={Display.Flex} flexWrap={FlexWrap.Wrap} style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }}>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} marginBottom={6} width={BlockSize.Full} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.Full
          </Box>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} marginBottom={6} width={BlockSize.Half} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.Half
          </Box>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} marginBottom={6} width={BlockSize.Half} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.Half
          </Box>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} marginBottom={6} width={BlockSize.OneThird} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.OneThird
          </Box>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} marginBottom={6} width={BlockSize.OneThird} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.OneThird
          </Box>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} marginBottom={6} width={BlockSize.OneThird} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.OneThird
          </Box>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} width={BlockSize.OneFourth} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.OneFourth
          </Box>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} width={BlockSize.OneFourth} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.OneFourth
          </Box>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} width={BlockSize.OneFourth} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.OneFourth
          </Box>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} width={BlockSize.OneFourth} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.OneFourth
          </Box>
        </Box>
      </Box>
      <p>
        <b>Responsive widths</b>
      </p>
      <Box display={Display.Flex} borderColor={BorderColor.borderMuted} style={{
      height: '100vh',
      position: 'relative',
      textAlign: 'center'
    }}>
        {getColumns()}

        <Box width={BlockSize.Full} display={Display.Flex} flexWrap={FlexWrap.Wrap} style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }}>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} width={[BlockSize.Full, BlockSize.Half, BlockSize.OneThird, BlockSize.OneFourth]} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.Full, BlockSize.Half, BlockSize.OneThird,
            BlockSize.OneFourth,
          </Box>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} width={[BlockSize.Full, BlockSize.Half, BlockSize.OneThird, BlockSize.OneFourth]} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.Full, BlockSize.Half, BlockSize.OneThird,
            BlockSize.OneFourth,
          </Box>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} width={[BlockSize.Full, BlockSize.Half, BlockSize.OneThird, BlockSize.OneFourth]} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.Full, BlockSize.Half, BlockSize.OneThird,
            BlockSize.OneFourth,
          </Box>
          <Box borderColor={BorderColor.borderMuted} borderWidth={6} width={[BlockSize.Full, BlockSize.Half, BlockSize.OneThird, BlockSize.OneFourth]} display={Display.Flex} alignItems={AlignItems.center} justifyContent={JustifyContent.center}>
            BlockSize.Full, BlockSize.Half, BlockSize.OneThird,
            BlockSize.OneFourth,
          </Box>
        </Box>
      </Box>
    </>;
}`,...Width.parameters?.docs?.source}}};let __namedExportsOrder=["BoxDefaultStory","Margin","Padding","ColorStory","BackgroundColorStory","BorderColorStory","BorderRadiusStory","ResponsiveProps","As","Width"]}}]);
//# sourceMappingURL=components-component-library-box-box-stories.b3d4689d.iframe.bundle.js.map