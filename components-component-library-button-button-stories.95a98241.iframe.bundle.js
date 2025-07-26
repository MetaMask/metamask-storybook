"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[30621],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/button/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{As:()=>As,Block:()=>Block,Danger:()=>Danger,DefaultStory:()=>DefaultStory,Disabled:()=>Disabled,EndIconName:()=>EndIconName,Href:()=>Href,Loading:()=>Loading,SizeStory:()=>SizeStory,StartIconName:()=>StartIconName,Variant:()=>Variant,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),button_button=__webpack_require__("./ui/components/component-library/button/button.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"button",children:"Button"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," is used for user actions. It unifies ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonPrimary"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonSecondary"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonLink"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-button--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:button_button.$}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"variant",children:"Variant"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"variant"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonVariant"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/components/component-library"})," to change the ",(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," variant."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Possible variants include:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ButtonVariant.Primary"})," (default)"]}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"ButtonVariant.Secondary"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"ButtonVariant.Link"})}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-button--variant"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Button, ButtonVariant } from '../ui/component-library/button';

<Button variant={ButtonVariant.Primary}>Button Primary</Button>
<Button variant={ButtonVariant.Secondary}>Button Secondary</Button>
<Button variant={ButtonVariant.Link}>Button Link</Button>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"ButtonSize"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/components/component-library"})," to change the size of ",(0,jsx_runtime.jsx)(_components.code,{children:"Button"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"Buttonsize.Md"})]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Possible sizes include:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Buttonsize.Inherit"})," inherits the font-size of the parent element. For ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-buttonlink--default-story",children:"ButtonLink"})," uses only"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Buttonsize.Auto"})," inherits auto height, but keeps the same button font-size. For ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-buttonlink--default-story",children:"ButtonLink"})," uses only"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Buttonsize.Sm"})," 32px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Buttonsize.Md"})," 40px"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Buttonsize.Lg"})," 48px"]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-button--size-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Button, ButtonSize } from '../../component-library';

<Button size={Buttonsize.Inherit} />
<Button size={Buttonsize.Sm} />
<Button size={Buttonsize.Md} />
<Button size={Buttonsize.Lg} />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"danger",children:"Danger"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"danger"})," boolean prop to change the ",(0,jsx_runtime.jsx)(_components.code,{children:"Button"})," to danger color."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-button--danger"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Button } from '../../component-library';

<Button>Normal</Button>
<Button danger>Danger</Button>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"href",children:"Href"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["When an ",(0,jsx_runtime.jsx)(_components.code,{children:"href"})," prop is passed it will change the element to an anchor(",(0,jsx_runtime.jsx)(_components.code,{children:"a"}),") tag."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-button--href"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Button } from '../../component-library';

<Button href="/">Anchor Element</Button>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"block",children:"Block"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use boolean ",(0,jsx_runtime.jsx)(_components.code,{children:"block"})," prop to quickly enable a full width block button"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-button--block"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Button } from '../../component-library';

<Button>Default Button</Button>
<Button block>Block Button</Button>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"as",children:"As"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," box prop to change the element of ",(0,jsx_runtime.jsx)(_components.code,{children:"Button"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"button"}),"."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["When an ",(0,jsx_runtime.jsx)(_components.code,{children:"href"})," prop is passed it will change the element to an anchor(",(0,jsx_runtime.jsx)(_components.code,{children:"a"}),") tag."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Button ",(0,jsx_runtime.jsx)(_components.code,{children:"as"})," options:"]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"button"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"a"})}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-button--as"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Button } from '../../component-library';


<Button as="button">Button Element</Button>
<Button as="a" href="#">
  Anchor Element
</Button>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the boolean ",(0,jsx_runtime.jsx)(_components.code,{children:"disabled"})," prop to disable button"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-button--disabled"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Button } from '../../component-library';

<Button disabled>Disabled Button</Button>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"loading",children:"Loading"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the boolean ",(0,jsx_runtime.jsx)(_components.code,{children:"loading"})," prop to set loading spinner"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-button--loading"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Button } from '../../component-library';

<Button loading>Loading Button</Button>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"icon-name",children:"Icon Name"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"startIconName"})," and/or ",(0,jsx_runtime.jsx)(_components.code,{children:"endIconName"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"IconName"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/components/component-library/icon"})," to select icon."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.a,{href:"/story/components-componentlibrary-icon--default-story",children:"IconSearch"})," story to find the icon you want to use."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-button--start-icon-name"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Button, IconName } from '../../component-library';

<Button startIconName={IconName.AddSquare}>Button</Button>;
`})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-button--end-icon-name"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Button, IconName } from '../../component-library';

<Button endIconName={IconName.Arrow2Right}>Button</Button>;
`})})]})}__webpack_require__("./ui/components/component-library/button-base/index.ts"),__webpack_require__("./ui/components/component-library/button-link/index.ts");var icon=__webpack_require__("./ui/components/component-library/icon/index.ts"),button_types=__webpack_require__("./ui/components/component-library/button/button.types.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let button_stories={title:"Components/ComponentLibrary/Button",component:button_button.$,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},controls:{sort:"alpha"}},argTypes:{as:{control:"select",options:["button","a"]},block:{control:"boolean"},children:{control:"text"},className:{control:"text"},danger:{control:"boolean"},disabled:{control:"boolean"},href:{control:"text"},startIconName:{control:"select",options:Object.values(icon.$M)},endIconName:{control:"select",options:Object.values(icon.$M)},startIconProps:{control:"object"},endIconProps:{control:"object"},loading:{control:"boolean"},size:{control:"select",options:Object.values(button_types.M)},variant:{options:Object.values(button_types.A),control:"select"}},args:{children:"Button"}};var Template=function(args){return react.createElement(button_button.$,args)},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var Variant=function(){return react.createElement(box.a,{display:design_system.nl.Flex,gap:1},react.createElement(button_button.$,{variant:button_types.A.Primary},"Button Primary"),react.createElement(button_button.$,{variant:button_types.A.Secondary},"Button Secondary"),react.createElement(button_button.$,{variant:button_types.A.Link},"Button Link"))},SizeStory=function(args){return react.createElement(react.Fragment,null,react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.baseline,gap:1,marginBottom:3},react.createElement(button_button.$,_object_spread_props(_object_spread({},args),{variant:button_types.A.Primary,size:button_types.M.Sm}),"Small Button"),react.createElement(button_button.$,_object_spread_props(_object_spread({},args),{size:button_types.M.Md}),"Medium (Default) Button"),react.createElement(button_button.$,_object_spread_props(_object_spread({},args),{size:button_types.M.Lg}),"Large Button"),react.createElement(button_button.$,_object_spread_props(_object_spread({},args),{variant:button_types.A.Link}),"Auto ButtonLink")),react.createElement(component_library_text.EY,{variant:design_system.J3.bodySm},react.createElement(button_button.$,_object_spread_props(_object_spread({},args),{variant:button_types.A.Link,size:button_types.M.Inherit}),"Button Inherit")," ","inherits the font-size of the parent element. Inherit size only used for ButtonLink."))};SizeStory.storyName="Size";var Danger=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,gap:4},react.createElement(button_button.$,{danger:!0},"Danger"),react.createElement(button_button.$,{variant:button_types.A.Secondary,danger:!0},"Danger"),react.createElement(button_button.$,_object_spread_props(_object_spread({},args),{variant:button_types.A.Link,danger:!0}),"Danger"))},Href=function(args){return react.createElement(button_button.$,args,"Anchor Element")};Href.args={href:"/metamask"};var Block=function(args){return react.createElement(react.Fragment,null,react.createElement(button_button.$,_object_spread_props(_object_spread({},args),{marginBottom:2}),"Default Button"),react.createElement(button_button.$,_object_spread_props(_object_spread({},args),{block:!0,marginBottom:2}),"Block Button"))},As=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Row,gap:2},react.createElement(button_button.$,args,"Button Element"),react.createElement(button_button.$,_object_spread({as:"a",href:"#"},args),"Anchor Element"))},Disabled=Template.bind({});Disabled.args={disabled:!0};var Loading=Template.bind({});Loading.args={loading:!0};var StartIconName=Template.bind({});StartIconName.args={startIconName:icon.$M.AddSquare};var EndIconName=Template.bind({});EndIconName.args={endIconName:icon.$M.AddSquare},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...DefaultStory.parameters?.docs?.source}}},Variant.parameters={...Variant.parameters,docs:{...Variant.parameters?.docs,source:{originalSource:`() => <Box display={Display.Flex} gap={1}>
    <Button variant={ButtonVariant.Primary}>Button Primary</Button>
    <Button variant={ButtonVariant.Secondary}>Button Secondary</Button>
    <Button variant={ButtonVariant.Link}>Button Link</Button>
  </Box>`,...Variant.parameters?.docs?.source}}},SizeStory.parameters={...SizeStory.parameters,docs:{...SizeStory.parameters?.docs,source:{originalSource:`args => <>
    <Box display={Display.Flex} alignItems={AlignItems.baseline} gap={1} marginBottom={3}>
      <Button {...args} variant={ButtonVariant.Primary} size={ButtonSize.Sm}>
        Small Button
      </Button>
      <Button {...args} size={ButtonSize.Md}>
        Medium (Default) Button
      </Button>
      <Button {...args} size={ButtonSize.Lg}>
        Large Button
      </Button>
      <Button {...args} variant={ButtonVariant.Link}>
        Auto ButtonLink
      </Button>
    </Box>
    <Text variant={TextVariant.bodySm}>
      <Button {...args} variant={ButtonVariant.Link} size={ButtonSize.Inherit}>
        Button Inherit
      </Button>{' '}
      inherits the font-size of the parent element. Inherit size only used for
      ButtonLink.
    </Text>
  </>`,...SizeStory.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} gap={4}>
    <Button danger>
      Danger
    </Button>
    <Button variant={ButtonVariant.Secondary} danger>
      Danger
    </Button>
    <Button {...args} variant={ButtonVariant.Link} danger>
      Danger
    </Button>
  </Box>`,...Danger.parameters?.docs?.source}}},Href.parameters={...Href.parameters,docs:{...Href.parameters?.docs,source:{originalSource:"args => <Button {...args}>Anchor Element</Button>",...Href.parameters?.docs?.source}}},Block.parameters={...Block.parameters,docs:{...Block.parameters?.docs,source:{originalSource:`args => <>
    <Button {...args} marginBottom={2}>
      Default Button
    </Button>
    <Button {...args} block marginBottom={2}>
      Block Button
    </Button>
  </>`,...Block.parameters?.docs?.source}}},As.parameters={...As.parameters,docs:{...As.parameters?.docs,source:{originalSource:`args => <Box display={Display.Flex} flexDirection={FlexDirection.Row} gap={2}>
    <Button {...args}>Button Element</Button>
    <Button as="a" href="#" {...args}>
      Anchor Element
    </Button>
  </Box>`,...As.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Disabled.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Loading.parameters?.docs?.source}}},StartIconName.parameters={...StartIconName.parameters,docs:{...StartIconName.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...StartIconName.parameters?.docs?.source}}},EndIconName.parameters={...EndIconName.parameters,docs:{...EndIconName.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...EndIconName.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Variant","SizeStory","Danger","Href","Block","As","Disabled","Loading","StartIconName","EndIconName"]}}]);
//# sourceMappingURL=components-component-library-button-button-stories.95a98241.iframe.bundle.js.map