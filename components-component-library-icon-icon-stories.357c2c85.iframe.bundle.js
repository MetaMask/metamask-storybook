"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[55531],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/icon/icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorStory:()=>ColorStory,DefaultStory:()=>DefaultStory,LayoutAndSpacing:()=>LayoutAndSpacing,Name:()=>Name,SizeStory:()=>SizeStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>icon_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),icon=__webpack_require__("./ui/components/component-library/icon/icon.tsx"),icon_types=__webpack_require__("./ui/components/component-library/icon/icon.types.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li",h4:"h4",strong:"strong"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"icon",children:"Icon"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Icon"})," component in conjunction with ",(0,jsx_runtime.jsx)(_components.code,{children:"IconName"})," can be used for all icons in the extension"]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-icon--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:icon.I}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"name",children:"Name"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"name"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"IconName"})," enum to change the icon."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.a,{href:"/story/components-componentlibrary-icon--default-story",children:"IconSearch"})," story to find the icon you want to use."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-icon--name"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Icon, IconName } from '../../component-library';

<Icon name={IconName.AddSquare} />
<Icon name={IconName.Bank} />
<Icon name={IconName.Calculator} />
<Icon name={IconName.Coin} />
// etc...
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"IconSize"})," enum to change the size of ",(0,jsx_runtime.jsx)(_components.code,{children:"Icon"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"IconSize.Sm"})]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Possible sizes include:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"IconSize.Xs"})," 12px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"IconSize.Sm"})," 16px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"IconSize.Md"})," 20px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"IconSize.Lg"})," 24px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"IconSize.Xl"})," 32px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"IconSize.Inherit"})," inherits the font-size from parent element. This is useful for inline icons in text."]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-icon--size-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { TextVariant } from '../../../helpers/constants/design-system';
import { Icon, IconName, IconSize, Text } from '../../component-library';

<Icon name={IconName.AddSquare} size={IconSize.Xs} />
<Icon name={IconName.AddSquare} size={IconSize.Sm} />
<Icon name={IconName.AddSquare} size={IconSize.Md} />
<Icon name={IconName.AddSquare} size={IconSize.Lg} />
<Icon name={IconName.AddSquare} size={IconSize.Xl} />
<Text as="p" variant={TextVariant.bodySm}>
    <Icon size={IconSize.Inherit} />  inherits the
    font-size of the parent element.
</Text>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"color",children:"Color"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"color"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"IconColor"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/helpers/constants/design-system.js"})," to change the color of ",(0,jsx_runtime.jsx)(_components.code,{children:"Icon"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"IconColor.inherit"})," which will use the text color of the parent element. This is useful for inline icons."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-icon--color-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { IconColor } from '../../../helpers/constants/design-system';
import { Icon, IconName } from '../../component-library';

<Icon name={IconName.AddSquare} color={IconColor.inherit} />
<Icon name={IconName.AddSquare} color={IconColor.iconDefault} />
<Icon name={IconName.AddSquare} color={IconColor.iconAlternative} />
<Icon name={IconName.AddSquare} color={IconColor.iconMuted} />
<Icon name={IconName.AddSquare} color={IconColor.overlayInverse} />
<Icon name={IconName.AddSquare} color={IconColor.primaryDefault} />
<Icon name={IconName.AddSquare} color={IconColor.primaryInverse} />
<Icon name={IconName.AddSquare} color={IconColor.errorDefault} />
<Icon name={IconName.AddSquare} color={IconColor.errorInverse} />
<Icon name={IconName.AddSquare} color={IconColor.successDefault} />
<Icon name={IconName.AddSquare} color={IconColor.successInverse} />
<Icon name={IconName.AddSquare} color={IconColor.warningDefault} />
<Icon name={IconName.AddSquare} color={IconColor.warningInverse} />
<Icon name={IconName.AddSquare} color={IconColor.infoDefault} />
<Icon name={IconName.AddSquare} color={IconColor.infoInverse} />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"layout--spacing",children:"Layout & Spacing"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Icon"})," component accepts all ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-ui-box--default-story#props",children:"Box"})," component props including ",(0,jsx_runtime.jsx)(_components.code,{children:"marginTop"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"marginRight"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:" marginBottom"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"marginLeft"})," which you can use directly to adjust the space between icons and other components like ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Some examples of ",(0,jsx_runtime.jsx)(_components.code,{children:"Icon"})," with ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," using ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-ui-box--default-story#props",children:"Box"})," component props"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-icon--layout-and-spacing"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  AlignItems,
  Display,
  IconColor,
  FlexDirection,
  BorderColor,
  BorderRadius,
} from '../../../helpers/constants/design-system';

import Box from '../../ui/box/box';

import { IconName, Icon, IconSize, Text, Label } from '../../component-library';

<Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={4}>
  <Box display={Display.Flex} alignItems={AlignItems.center}>
    <Icon
      name={IconName.Check}
      color={IconColor.successDefault}
      marginRight={1}
    />
    <Text>Always allow you to opt-out via Settings</Text>
  </Box>
  <Box
    as="button"
    display={Display.Flex}
    alignItems={AlignItems.center}
    borderRadius={BorderRadius.pill}
    backgroundColor={BackgroundColor.primaryMuted}
    marginRight="auto"
  >
    <Text color={Color.primaryDefault}>
      0x79fAaFe7B6D5DB5D8c63FE88DFF0AF1Fe53358db
    </Text>
    <Icon
      name={IconName.Copy}
      color={IconColor.primaryDefault}
      marginLeft={1}
    />
  </Box>
  <Box
    as="button"
    display={Display.Flex}
    alignItems={AlignItems.center}
    padding={4}
    borderColor={BorderColor.borderMuted}
    backgroundColor={BackgroundColor.backgroundDefault}
  >
    <Icon name={IconName.Add} color={IconColor.iconDefault} marginRight={2} />
    <Text>Create account</Text>
  </Box>
  <Label>
    Custom spending cap{' '}
    <Icon name={IconName.Info} size={IconSize.Inherit} marginLeft={1} />
  </Label>
  <div>
    <Text>
      <Icon
        name={IconName.Warning}
        size={IconSize.Inherit}
        marginLeft={1}
        color={IconColor.warningDefault}
      />{' '}
      Warning
    </Text>
  </div>
</Box>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"adding-a-new-icon",children:"Adding a new icon"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"In order to ensure that a new icon is added correctly, there are a few steps that need to be followed:"}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"step-1",children:"Step 1."}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Optimize the svg using ",(0,jsx_runtime.jsx)(_components.a,{href:"https://fontastic.me/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Fontastic"}),". This will remove any unnecessary code from the svg. Your svg should only contain a single path."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Example of a correctly optimized svg ",(0,jsx_runtime.jsx)(_components.code,{children:"add-square-filled.svg"}),":"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-xml",children:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path d="m337 51l-171 0c-75 0-119 45-119 119l0 172c0 74 44 119 119 119l171 0c75 0 119-45 119-119l0-172c1-74-44-119-119-119z m-3 220l-67 0 0 67c0 8-7 15-15 15-9 0-16-7-16-15l0-67-66 0c-9 0-16-7-16-15 0-8 7-15 16-15l66 0 0-67c0-8 7-15 16-15 8 0 15 7 15 15l0 67 67 0c8 0 15 7 15 15 0 8-7 15-15 15z" />
</svg>
`})}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["If your svg ",(0,jsx_runtime.jsx)(_components.strong,{children:"does not"})," contain a single path, you will need to get a designer to join all paths and outline strokes into a single path."]}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"step-2",children:"Step 2."}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Add your optimized svg file to ",(0,jsx_runtime.jsx)(_components.code,{children:"app/images/icons"})]}),`
`,(0,jsx_runtime.jsx)(_components.h4,{id:"step-3",children:"Step 3."}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Add your icon to the ",(0,jsx_runtime.jsx)(_components.code,{children:"IconName"})," enum in ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/components/ui/icon/icon.types.ts"})]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["If you have any questions please reach out to the design system team in the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://consensys.slack.com/archives/C0354T27M5M",target:"_blank",rel:"nofollow noopener noreferrer",children:"#metamask-design-system"})," channel on slack."]})]})}var box=__webpack_require__("./ui/components/component-library/box/index.ts"),label=__webpack_require__("./ui/components/component-library/label/index.ts"),text_field_search=__webpack_require__("./ui/components/component-library/text-field-search/index.ts"),text_field=__webpack_require__("./ui/components/component-library/text-field/index.ts"),button_icon=__webpack_require__("./ui/components/component-library/button-icon/index.ts"),button_link=__webpack_require__("./ui/components/component-library/button-link/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let icon_stories={title:"Components/ComponentLibrary/Icon",component:icon.I,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},args:{name:icon_types.$.AddSquare,color:design_system.Li.inherit,size:icon_types.l.Md}};var DefaultStory=function(args){var _useState=_sliced_to_array((0,react.useState)(""),2),search=_useState[0],setSearch=_useState[1],iconList=Object.keys(icon_types.$).filter(function(item){return""===search||item.toLowerCase().includes(search.toLowerCase().replace(" ","_"))}).sort();return react.createElement(react.Fragment,null,react.createElement(component_library_text.EY,{as:"h2",marginBottom:2,variant:design_system.J3.headingMd},"Icon search"),react.createElement(box.a,{display:design_system.nl.Grid,gap:2,style:{gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))"}},react.createElement(box.a,{style:{gridColumnStart:1,gridColumnEnd:3},display:design_system.nl.Flex,flexDirection:design_system.bo.Column},react.createElement(label.J,{htmlFor:"icon-search"},"IconName"),react.createElement(text_field_search.m,{id:"icon-search",marginBottom:4,onChange:function(e){setSearch(e.target.value)},clearButtonOnClick:function(){setSearch("")},value:search,placeholder:"Search icon name"}))),iconList.length>0?react.createElement(box.a,{display:design_system.nl.Grid,gap:2,style:{gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))"}},iconList.map(function(item){return react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderRadius:design_system.Z6.MD,display:design_system.nl.Flex,flexDirection:design_system.bo.Column,alignItems:design_system.k2.center,justifyContent:design_system.A9.center,padding:4,key:item},react.createElement(icon.I,_object_spread_props(_object_spread({marginBottom:2},args),{name:icon_types.$[item]})),react.createElement(text_field.A_,{placeholder:item,value:item,readOnly:!0,size:text_field.BD.Sm,inputProps:{variant:design_system.J3.bodyXs,textAlign:design_system.nO.Center},backgroundColor:design_system.i0.backgroundAlternative,endAccessory:react.createElement(button_icon.a,{iconName:icon_types.$.Copy,size:button_icon.f.Sm,color:design_system.Li.iconAlternative,ariaLabel:"Copy to clipboard",title:"Copy to clipboard",onClick:function(){var tempEl=document.createElement("textarea");tempEl.value=item,document.body.appendChild(tempEl),tempEl.select(),document.execCommand("copy"),document.body.removeChild(tempEl)}})}))})):react.createElement(component_library_text.EY,null,"No matches. Please try again or ask in the"," ",react.createElement(button_link.v,{size:button_link.w.Inherit,color:design_system.r7.primaryDefault,href:"https://consensys.slack.com/archives/C0354T27M5M",target:"_blank"},"#metamask-design-system")," ","channel on slack."))};DefaultStory.storyName="Default";var Name=function(args){return react.createElement(react.Fragment,null,react.createElement(box.a,{display:design_system.nl.Flex,flexWrap:design_system.I4.Wrap,gap:2},Object.keys(icon_types.$).map(function(item){return react.createElement(box.a,{borderColor:design_system.cG.borderMuted,borderRadius:design_system.Z6.MD,display:design_system.nl.Flex,flexDirection:design_system.bo.Column,alignItems:design_system.k2.center,justifyContent:design_system.A9.center,padding:4,key:item},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{name:icon_types.$[item]})))})))},SizeStory=function(args){return react.createElement(react.Fragment,null,react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.baseline,gap:1,marginBottom:4},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{size:icon_types.l.Xs})),react.createElement(icon.I,_object_spread_props(_object_spread({},args),{size:icon_types.l.Sm})),react.createElement(icon.I,_object_spread_props(_object_spread({},args),{size:icon_types.l.Md})),react.createElement(icon.I,_object_spread_props(_object_spread({},args),{size:icon_types.l.Lg})),react.createElement(icon.I,_object_spread_props(_object_spread({},args),{size:icon_types.l.Xl}))),react.createElement(component_library_text.EY,{variant:design_system.J3.displayMd},"inherits the font-size of the parent element."," ",react.createElement(icon.I,_object_spread_props(_object_spread({},args),{size:icon_types.l.Inherit}))),react.createElement(component_library_text.EY,{variant:design_system.J3.headingLg},"inherits the font-size of the parent element."," ",react.createElement(icon.I,_object_spread_props(_object_spread({},args),{size:icon_types.l.Inherit}))),react.createElement(component_library_text.EY,{variant:design_system.J3.headingMd},"inherits the font-size of the parent element."," ",react.createElement(icon.I,_object_spread_props(_object_spread({},args),{size:icon_types.l.Inherit}))),react.createElement(component_library_text.EY,{variant:design_system.J3.headingSm},"inherits the font-size of the parent element."," ",react.createElement(icon.I,_object_spread_props(_object_spread({},args),{size:icon_types.l.Inherit}))),react.createElement(component_library_text.EY,{variant:design_system.J3.bodyLgMedium},"inherits the font-size of the parent element."," ",react.createElement(icon.I,_object_spread_props(_object_spread({},args),{size:icon_types.l.Inherit}))),react.createElement(component_library_text.EY,{variant:design_system.J3.bodyMd},"inherits the font-size of the parent element."," ",react.createElement(icon.I,_object_spread_props(_object_spread({},args),{size:icon_types.l.Inherit}))),react.createElement(component_library_text.EY,{variant:design_system.J3.bodySm},"inherits the font-size of the parent element."," ",react.createElement(icon.I,_object_spread_props(_object_spread({},args),{size:icon_types.l.Inherit}))),react.createElement(component_library_text.EY,{variant:design_system.J3.bodyXs},"inherits the font-size of the parent element."," ",react.createElement(icon.I,_object_spread_props(_object_spread({},args),{size:icon_types.l.Inherit}))))};SizeStory.storyName="Size";var ColorStory=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.baseline},react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.inherit}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.iconDefault}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.iconAlternative}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.iconMuted}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center,backgroundColor:design_system.i0.overlayDefault},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.overlayInverse}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.primaryDefault}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center,backgroundColor:design_system.i0.primaryDefault},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.primaryInverse}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.errorDefault}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center,backgroundColor:design_system.i0.errorDefault},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.errorInverse}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.successDefault}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center,backgroundColor:design_system.i0.successDefault},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.successInverse}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.warningDefault}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center,backgroundColor:design_system.i0.warningDefault},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.warningInverse}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.infoDefault}))),react.createElement(box.a,{padding:1,display:design_system.nl.Flex,alignItems:design_system.k2.center,backgroundColor:design_system.i0.infoDefault},react.createElement(icon.I,_object_spread_props(_object_spread({},args),{color:design_system.Li.infoInverse}))))};ColorStory.storyName="Color";var LayoutAndSpacing=function(){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:4},react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.center},react.createElement(icon.I,{name:icon_types.$.Check,color:design_system.Li.successDefault,marginRight:1}),react.createElement(component_library_text.EY,null,"Always allow you to opt-out via Settings")),react.createElement(box.a,{as:"button",display:design_system.nl.Flex,alignItems:design_system.k2.center,borderRadius:design_system.Z6.pill,backgroundColor:design_system.i0.primaryMuted,marginRight:"auto"},react.createElement(component_library_text.EY,{color:design_system.Q1.primaryDefault},"0x79fAaFe7B6D5DB5D8c63FE88DFF0AF1Fe53358db"),react.createElement(icon.I,{name:icon_types.$.Copy,color:design_system.Li.primaryDefault,marginLeft:1})),react.createElement(box.a,{as:"button",display:design_system.nl.Flex,alignItems:design_system.k2.center,padding:4,borderColor:design_system.cG.borderMuted,backgroundColor:design_system.i0.backgroundDefault},react.createElement(icon.I,{name:icon_types.$.Add,color:design_system.Li.iconDefault,marginRight:2}),react.createElement(component_library_text.EY,null,"Create account")),react.createElement(label.J,null,"Custom spending cap"," ",react.createElement(icon.I,{name:icon_types.$.Info,size:icon_types.l.Inherit,marginLeft:1})),react.createElement("div",null,react.createElement(component_library_text.EY,null,react.createElement(icon.I,{name:icon_types.$.Warning,size:icon_types.l.Inherit,marginLeft:1,color:design_system.Li.warningDefault})," ","Warning")))};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  const [search, setSearch] = useState('');
  const iconList = Object.keys(IconName).filter(item => search === '' || item.toLowerCase().includes(search.toLowerCase().replace(' ', '_'))).sort();
  const handleSearch = e => {
    setSearch(e.target.value);
  };
  const handleOnClear = () => {
    setSearch('');
  };
  return <>
      <Text as="h2" marginBottom={2} variant={TextVariant.headingMd}>
        Icon search
      </Text>
      <Box display={Display.Grid} gap={2} style={{
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'
    }}>
        <Box style={{
        gridColumnStart: 1,
        gridColumnEnd: 3
      }} display={Display.Flex} flexDirection={FlexDirection.Column}>
          {/* TODO replace with FormTextField */}
          <Label htmlFor="icon-search">IconName</Label>
          <TextFieldSearch id="icon-search" marginBottom={4} onChange={handleSearch} clearButtonOnClick={handleOnClear} value={search} placeholder="Search icon name" />
        </Box>
      </Box>
      {iconList.length > 0 ? <Box display={Display.Grid} gap={2} style={{
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'
    }}>
          {iconList.map(item => {
        return <Box borderColor={BorderColor.borderMuted} borderRadius={BorderRadius.MD} display={Display.Flex} flexDirection={FlexDirection.Column} alignItems={AlignItems.center} justifyContent={JustifyContent.center} padding={4} key={item}>
                <Icon marginBottom={2} {...args} name={IconName[item]} />
                <TextField placeholder={item} value={item} readOnly size={TextFieldSize.Sm} inputProps={{
            variant: TextVariant.bodyXs,
            textAlign: TextAlign.Center
          }} backgroundColor={BackgroundColor.backgroundAlternative} endAccessory={<ButtonIcon iconName={IconName.Copy} size={ButtonIconSize.Sm} color={IconColor.iconAlternative} ariaLabel="Copy to clipboard" title="Copy to clipboard" onClick={() => {
            const tempEl = document.createElement('textarea');
            tempEl.value = item;
            document.body.appendChild(tempEl);
            tempEl.select();
            document.execCommand('copy');
            document.body.removeChild(tempEl);
          }} />} />
              </Box>;
      })}
        </Box> : <Text>
          No matches. Please try again or ask in the{' '}
          <ButtonLink size={ButtonLinkSize.Inherit} color={TextColor.primaryDefault} href="https://consensys.slack.com/archives/C0354T27M5M" target="_blank">
            #metamask-design-system
          </ButtonLink>{' '}
          channel on slack.
        </Text>}
    </>;
}`,...DefaultStory.parameters?.docs?.source}}},Name.parameters={...Name.parameters,docs:{...Name.parameters?.docs,source:{originalSource:`args => <>
    <Box display={Display.Flex} flexWrap={FlexWrap.Wrap} gap={2}>
      {Object.keys(IconName).map(item => {
      return <Box borderColor={BorderColor.borderMuted} borderRadius={BorderRadius.MD} display={Display.Flex} flexDirection={FlexDirection.Column} alignItems={AlignItems.center} justifyContent={JustifyContent.center} padding={4} key={item}>
            <Icon {...args} name={IconName[item]} />
          </Box>;
    })}
    </Box>
  </>`,...Name.parameters?.docs?.source}}},SizeStory.parameters={...SizeStory.parameters,docs:{...SizeStory.parameters?.docs,source:{originalSource:`args => <>
    <Box display={Display.Flex} alignItems={AlignItems.baseline} gap={1} marginBottom={4}>
      <Icon {...args} size={IconSize.Xs} />
      <Icon {...args} size={IconSize.Sm} />
      <Icon {...args} size={IconSize.Md} />
      <Icon {...args} size={IconSize.Lg} />
      <Icon {...args} size={IconSize.Xl} />
    </Box>
    <Text variant={TextVariant.displayMd}>
      inherits the font-size of the parent element.{' '}
      <Icon {...args} size={IconSize.Inherit} />
    </Text>
    <Text variant={TextVariant.headingLg}>
      inherits the font-size of the parent element.{' '}
      <Icon {...args} size={IconSize.Inherit} />
    </Text>
    <Text variant={TextVariant.headingMd}>
      inherits the font-size of the parent element.{' '}
      <Icon {...args} size={IconSize.Inherit} />
    </Text>
    <Text variant={TextVariant.headingSm}>
      inherits the font-size of the parent element.{' '}
      <Icon {...args} size={IconSize.Inherit} />
    </Text>
    <Text variant={TextVariant.bodyLgMedium}>
      inherits the font-size of the parent element.{' '}
      <Icon {...args} size={IconSize.Inherit} />
    </Text>
    <Text variant={TextVariant.bodyMd}>
      inherits the font-size of the parent element.{' '}
      <Icon {...args} size={IconSize.Inherit} />
    </Text>
    <Text variant={TextVariant.bodySm}>
      inherits the font-size of the parent element.{' '}
      <Icon {...args} size={IconSize.Inherit} />
    </Text>
    <Text variant={TextVariant.bodyXs}>
      inherits the font-size of the parent element.{' '}
      <Icon {...args} size={IconSize.Inherit} />
    </Text>
  </>`,...SizeStory.parameters?.docs?.source}}},ColorStory.parameters={...ColorStory.parameters,docs:{...ColorStory.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} alignItems={AlignItems.baseline}>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center}>
      <Icon {...args} color={IconColor.inherit} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center}>
      <Icon {...args} color={IconColor.iconDefault} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center}>
      <Icon {...args} color={IconColor.iconAlternative} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center}>
      <Icon {...args} color={IconColor.iconMuted} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center} backgroundColor={BackgroundColor.overlayDefault}>
      <Icon {...args} color={IconColor.overlayInverse} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center}>
      <Icon {...args} color={IconColor.primaryDefault} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center} backgroundColor={BackgroundColor.primaryDefault}>
      <Icon {...args} color={IconColor.primaryInverse} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center}>
      <Icon {...args} color={IconColor.errorDefault} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center} backgroundColor={BackgroundColor.errorDefault}>
      <Icon {...args} color={IconColor.errorInverse} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center}>
      <Icon {...args} color={IconColor.successDefault} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center} backgroundColor={BackgroundColor.successDefault}>
      <Icon {...args} color={IconColor.successInverse} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center}>
      <Icon {...args} color={IconColor.warningDefault} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center} backgroundColor={BackgroundColor.warningDefault}>
      <Icon {...args} color={IconColor.warningInverse} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center}>
      <Icon {...args} color={IconColor.infoDefault} />
    </Box>
    <Box padding={1} display={Display.Flex} alignItems={AlignItems.center} backgroundColor={BackgroundColor.infoDefault}>
      <Icon {...args} color={IconColor.infoInverse} />
    </Box>
  </Box>`,...ColorStory.parameters?.docs?.source}}},LayoutAndSpacing.parameters={...LayoutAndSpacing.parameters,docs:{...LayoutAndSpacing.parameters?.docs,source:{originalSource:`() => <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={4}>
    <Box display={Display.Flex} alignItems={AlignItems.center}>
      <Icon name={IconName.Check} color={IconColor.successDefault} marginRight={1} />
      <Text>Always allow you to opt-out via Settings</Text>
    </Box>
    <Box as="button" display={Display.Flex} alignItems={AlignItems.center} borderRadius={BorderRadius.pill} backgroundColor={BackgroundColor.primaryMuted} marginRight="auto">
      <Text color={Color.primaryDefault}>
        0x79fAaFe7B6D5DB5D8c63FE88DFF0AF1Fe53358db
      </Text>
      <Icon name={IconName.Copy} color={IconColor.primaryDefault} marginLeft={1} />
    </Box>
    <Box as="button" display={Display.Flex} alignItems={AlignItems.center} padding={4} borderColor={BorderColor.borderMuted} backgroundColor={BackgroundColor.backgroundDefault}>
      <Icon name={IconName.Add} color={IconColor.iconDefault} marginRight={2} />
      <Text>Create account</Text>
    </Box>
    <Label>
      Custom spending cap{' '}
      <Icon name={IconName.Info} size={IconSize.Inherit} marginLeft={1} />
    </Label>
    <div>
      <Text>
        <Icon name={IconName.Warning} size={IconSize.Inherit} marginLeft={1} color={IconColor.warningDefault} />{' '}
        Warning
      </Text>
    </div>
  </Box>`,...LayoutAndSpacing.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Name","SizeStory","ColorStory","LayoutAndSpacing"]}}]);
//# sourceMappingURL=components-component-library-icon-icon-stories.357c2c85.iframe.bundle.js.map