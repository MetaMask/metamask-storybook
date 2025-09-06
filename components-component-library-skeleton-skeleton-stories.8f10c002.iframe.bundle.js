"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[90163],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/skeleton/skeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BorderRadiusStory:()=>BorderRadiusStory,Children:()=>Children,DefaultStory:()=>DefaultStory,HideChildren:()=>HideChildren,TokenListSkeleton:()=>TokenListSkeleton,WidthHeight:()=>WidthHeight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>skeleton_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"skeleton",children:"Skeleton"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Skeleton"})," is a placeholder component that is used while the content is loading."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:DefaultStory}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.H2,{of:DefaultStory}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"width-height",children:"Width Height"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"width"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"height"})," props to specify the width and height of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Skeleton"})," component. It accepts both numbers and strings."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:WidthHeight}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Skeleton } from '../../component-library';

<Skeleton height={32} width={300} />
<Skeleton height={16} width={250} />
<Skeleton height={16} width={250} />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," prop to pass the ",(0,jsx_runtime.jsx)(_components.code,{children:"Skeleton"})," children."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["This is useful to create a ",(0,jsx_runtime.jsx)(_components.code,{children:"Skeleton"})," component that has a similar layout to the content that will be loaded."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:Children}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  Display,
  FlexDirection,
  BackgroundColor,
  BorderRadius,
} from '../../../helpers/constants/design-system';
import { Skeleton } from '../../component-library';

<Skeleton
  display={Display.Flex}
  flexDirection={FlexDirection.Column}
  gap={4}
  backgroundColor={BackgroundColor.backgroundAlternative}
  borderRadius={BorderRadius.LG}
  padding={4}
>
  <Skeleton height={32} width="100%" />
  <Skeleton height={16} width="95%" />
  <Skeleton height={16} width="95%" />
</Skeleton>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"hide-children",children:"Hide Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"hideChildren"})," prop to hide the ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Skeleton"})," component. This is useful to make sure the ",(0,jsx_runtime.jsx)(_components.code,{children:"Skeleton"})," component is the same size as the content that will be loaded."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:HideChildren}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Skeleton, Text, TextVariant } from '../../component-library';

isLoaded ? (
  <Text variant={TextVariant.headingMd}>Content to load</Text>
) : (
  <Skeleton width="max-content" hideChildren={true}>
    <Text variant={TextVariant.headingMd}>Hidden placeholder text</Text>
  </Skeleton>
);
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"border-radius",children:"Border Radius"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"borderRadius"})," prop and ",(0,jsx_runtime.jsx)(_components.code,{children:"BorderRadius"})," enum to specify the border radius of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Skeleton"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:BorderRadiusStory}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { BorderRadius } from '../../../helpers/constants/design-system'
import { Skeleton } from '../../component-library';

<Skeleton borderRadius={BorderRadius.full} height={32} width={32} />
<Skeleton borderRadius={BorderRadius.pill} height={32} width="100%" />
<Skeleton borderRadius={BorderRadius.LG} height={32} width="100%" />
<Skeleton borderRadius={BorderRadius.MD} height={32} width="100%" />
<Skeleton borderRadius={BorderRadius.SM} height={32} width="100%" />
<Skeleton borderRadius={BorderRadius.XS} height={32} width="100%" />
`})})]})}var skeleton=__webpack_require__("./ui/components/component-library/skeleton/skeleton.tsx"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),component_library_button=__webpack_require__("./ui/components/component-library/button/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let skeleton_stories={title:"Components/ComponentLibrary/Skeleton",component:skeleton.E,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{className:{control:"text"}},args:{className:""}};var DefaultStory={args:{height:32,width:300}};DefaultStory.storyName="Default";var WidthHeight={render:function(){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:4},react.createElement(skeleton.E,{height:32,width:300}),react.createElement(skeleton.E,{height:16,width:250}),react.createElement(skeleton.E,{height:16,width:250}))}},Children={render:function(){return react.createElement(skeleton.E,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:4,backgroundColor:design_system.i0.backgroundAlternative,borderRadius:design_system.Z6.LG,padding:4},react.createElement(skeleton.E,{height:32,width:"100%"}),react.createElement(skeleton.E,{height:16,width:"95%"}),react.createElement(skeleton.E,{height:16,width:"95%"}))}},HideChildren={args:{width:"max-content",hideChildren:!0},render:function(args){var _React_useState=_sliced_to_array(react.useState(!1),2),isLoaded=_React_useState[0],setIsLoaded=_React_useState[1];return react.createElement(box.a,null,react.createElement(component_library_button.$n,{onClick:function(){return setIsLoaded(!isLoaded)},variant:component_library_button.Ak.Secondary,marginBottom:4},"Toggle isLoading"),isLoaded?react.createElement("div",null,react.createElement(component_library_text.EY,{variant:design_system.J3.headingMd},"Content to load")):react.createElement(skeleton.E,args,react.createElement(component_library_text.EY,{variant:design_system.J3.headingMd},"Hidden placeholder text")))}},BorderRadiusStory={render:function(){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:4},react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.center,gap:4},react.createElement(component_library_text.EY,null,"BorderRadius.full"),react.createElement(skeleton.E,{borderRadius:design_system.Z6.full,height:32,width:32})),react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.center,gap:4},react.createElement(component_library_text.EY,null,"BorderRadius.full"),react.createElement(skeleton.E,{borderRadius:design_system.Z6.pill,height:32,width:"100%"})),react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.center,gap:4},react.createElement(component_library_text.EY,null,"BorderRadius.LG"),react.createElement(skeleton.E,{borderRadius:design_system.Z6.LG,height:32,width:"100%"})),react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.center,gap:4},react.createElement(component_library_text.EY,null,"BorderRadius.MD"),react.createElement(skeleton.E,{borderRadius:design_system.Z6.MD,height:32,width:"100%"})),react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.center,gap:4},react.createElement(component_library_text.EY,null,"BorderRadius.SM"),react.createElement(skeleton.E,{borderRadius:design_system.Z6.SM,height:32,width:"100%"})),react.createElement(box.a,{display:design_system.nl.Flex,alignItems:design_system.k2.center,gap:4},react.createElement(component_library_text.EY,null,"BorderRadius.XS"),react.createElement(skeleton.E,{borderRadius:design_system.Z6.XS,height:32,width:"100%"})))}};BorderRadiusStory.storyName="BorderRadius";var TokenListSkeleton={render:function(){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Row,gap:4},react.createElement(skeleton.E,{width:32,height:32,borderRadius:design_system.Z6.full,style:{minWidth:32}}),react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:1,width:design_system.Zf.Full,paddingRight:12},react.createElement(skeleton.E,{width:"100%",height:16}),react.createElement(skeleton.E,{width:"70%",height:16})),react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:1,width:design_system.Zf.OneThird},react.createElement(skeleton.E,{width:"100%",height:16}),react.createElement(skeleton.E,{width:"100%",height:16})))}};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`{
  args: {
    height: 32,
    width: 300
  }
}`,...DefaultStory.parameters?.docs?.source}}},WidthHeight.parameters={...WidthHeight.parameters,docs:{...WidthHeight.parameters?.docs,source:{originalSource:`{
  render: () => <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={4}>
      <Skeleton height={32} width={300} />
      <Skeleton height={16} width={250} />
      <Skeleton height={16} width={250} />
    </Box>
}`,...WidthHeight.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`{
  render: () => <Skeleton display={Display.Flex} flexDirection={FlexDirection.Column} gap={4} backgroundColor={BackgroundColor.backgroundAlternative} borderRadius={BorderRadius.LG} padding={4}>
      <Skeleton height={32} width="100%" />
      <Skeleton height={16} width="95%" />
      <Skeleton height={16} width="95%" />
    </Skeleton>
}`,...Children.parameters?.docs?.source}}},HideChildren.parameters={...HideChildren.parameters,docs:{...HideChildren.parameters?.docs,source:{originalSource:`{
  args: {
    width: 'max-content',
    hideChildren: true
  },
  render: args => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    return <Box>
        <Button onClick={() => setIsLoaded(!isLoaded)} variant={ButtonVariant.Secondary} marginBottom={4}>
          Toggle isLoading
        </Button>
        {isLoaded ? <div>
            <Text variant={TextVariant.headingMd}>Content to load</Text>
          </div> : <Skeleton {...args}>
            <Text variant={TextVariant.headingMd}>Hidden placeholder text</Text>
          </Skeleton>}
      </Box>;
  }
}`,...HideChildren.parameters?.docs?.source}}},BorderRadiusStory.parameters={...BorderRadiusStory.parameters,docs:{...BorderRadiusStory.parameters?.docs,source:{originalSource:`{
  render: () => <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={4}>
      <Box display={Display.Flex} alignItems={AlignItems.center} gap={4}>
        <Text>BorderRadius.full</Text>
        <Skeleton borderRadius={BorderRadius.full} height={32} width={32} />
      </Box>
      <Box display={Display.Flex} alignItems={AlignItems.center} gap={4}>
        <Text>BorderRadius.full</Text>
        <Skeleton borderRadius={BorderRadius.pill} height={32} width="100%" />
      </Box>
      <Box display={Display.Flex} alignItems={AlignItems.center} gap={4}>
        <Text>BorderRadius.LG</Text>
        <Skeleton borderRadius={BorderRadius.LG} height={32} width="100%" />
      </Box>
      <Box display={Display.Flex} alignItems={AlignItems.center} gap={4}>
        <Text>BorderRadius.MD</Text>
        <Skeleton borderRadius={BorderRadius.MD} height={32} width="100%" />
      </Box>
      <Box display={Display.Flex} alignItems={AlignItems.center} gap={4}>
        <Text>BorderRadius.SM</Text>
        <Skeleton borderRadius={BorderRadius.SM} height={32} width="100%" />
      </Box>
      <Box display={Display.Flex} alignItems={AlignItems.center} gap={4}>
        <Text>BorderRadius.XS</Text>
        <Skeleton borderRadius={BorderRadius.XS} height={32} width="100%" />
      </Box>
    </Box>
}`,...BorderRadiusStory.parameters?.docs?.source}}},TokenListSkeleton.parameters={...TokenListSkeleton.parameters,docs:{...TokenListSkeleton.parameters?.docs,source:{originalSource:`{
  render: () => <Box display={Display.Flex} flexDirection={FlexDirection.Row} gap={4}>
      <Skeleton width={32} height={32} borderRadius={BorderRadius.full} style={{
      minWidth: 32 // add classname with this style attached
    }} />
      <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={1} width={BlockSize.Full} paddingRight={12}>
        <Skeleton width="100%" height={16} />
        <Skeleton width="70%" height={16} />
      </Box>
      <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={1} width={BlockSize.OneThird}>
        <Skeleton width="100%" height={16} />
        <Skeleton width="100%" height={16} />
      </Box>
    </Box>
}`,...TokenListSkeleton.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","WidthHeight","Children","HideChildren","BorderRadiusStory","TokenListSkeleton"]},"./ui/components/component-library/skeleton/skeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Skeleton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/box/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Skeleton=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var _param_className=_param.className,height=_param.height,width=_param.width,children=_param.children,hideChildren=_param.hideChildren,props=_object_without_properties(_param,["className","height","width","children","hideChildren"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_3__.a,_object_spread_props(_object_spread({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("mm-skeleton",{"mm-skeleton--hide-children":hideChildren},void 0===_param_className?"":_param_className),backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.iconAlternative,borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Z6.SM,ref:ref},props),{style:_object_spread_props(_object_spread({},null==props?void 0:props.style),{height:height,width:width})}),children)});try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"",displayName:"Skeleton",props:{"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
TypeScript is complaining about data- attributes which means we need to explicitly define this as a prop.
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
Use the FlexDirection enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"flexDirection",required:!1,type:{name:"FlexDirection | FlexDirectionArray"}},flexWrap:{defaultValue:null,description:`The flex wrap of the component.
Use the FlexWrap enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"flexWrap",required:!1,type:{name:"FlexWrap | FlexWrapArray"}},gap:{defaultValue:null,description:`The gap between the component's children.
Use 1-12 for a gap of 4px-48px.
Accepts responsive props in the form of an array.`,name:"gap",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},margin:{defaultValue:null,description:`The margin of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"margin",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginTop:{defaultValue:null,description:`The margin-top of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginTop",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginBottom:{defaultValue:null,description:`The margin-bottom of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginBottom",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginRight:{defaultValue:null,description:`The margin-right of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginRight",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginLeft:{defaultValue:null,description:`The margin-left of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginLeft",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginInline:{defaultValue:null,description:`The margin-inline of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginInline",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginInlineStart:{defaultValue:null,description:`The margin-inline-start of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginInlineStart",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},marginInlineEnd:{defaultValue:null,description:`The margin-inline-end of the component.
Use 1-12 for 4px-48px or 'auto'.
Accepts responsive props in the form of an array.`,name:"marginInlineEnd",required:!1,type:{name:"SizeNumberAndAuto | SizeNumberAndAutoArray"}},padding:{defaultValue:null,description:`The padding of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"padding",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingTop:{defaultValue:null,description:`The padding-top of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingTop",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingBottom:{defaultValue:null,description:`The padding-bottom of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingBottom",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingRight:{defaultValue:null,description:`The padding-right of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingRight",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingLeft:{defaultValue:null,description:`The padding-left of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingLeft",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingInline:{defaultValue:null,description:`The padding-inline of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingInline",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingInlineStart:{defaultValue:null,description:`The padding-inline-start of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingInlineStart",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},paddingInlineEnd:{defaultValue:null,description:`The padding-inline-end of the component.
Use 1-12 for 4px-48px.
Accepts responsive props in the form of an array.`,name:"paddingInlineEnd",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},borderColor:{defaultValue:null,description:`The border-color of the component.
Use BorderColor enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"borderColor",required:!1,type:{name:"BorderColor | BorderColorArray"}},borderWidth:{defaultValue:null,description:`The border-width of the component.
Use 1-12 for 1px-12px.
Accepts responsive props in the form of an array.`,name:"borderWidth",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},borderRadius:{defaultValue:null,description:`The border-radius of the component.
Use BorderRadius enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"borderRadius",required:!1,type:{name:"BorderRadius | BorderRadiusArray"}},borderStyle:{defaultValue:null,description:`The border-style of the component.
Use BorderStyle enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"borderStyle",required:!1,type:{name:"BorderStyle | BorderStyleArray"}},alignItems:{defaultValue:null,description:`The align-items of the component.
Use AlignItems enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"alignItems",required:!1,type:{name:"AlignItems | AlignItemsArray"}},justifyContent:{defaultValue:null,description:`The justify-content of the component.
Use JustifyContent enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"justifyContent",required:!1,type:{name:"JustifyContent | JustifyContentArray"}},textAlign:{defaultValue:null,description:`The text-align of the component.
Use TextAlign enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"textAlign",required:!1,type:{name:"TextAlign | TextAlignArray"}},display:{defaultValue:null,description:`The display of the component.
Use Display enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"display",required:!1,type:{name:"Display | DisplayArray"}},minWidth:{defaultValue:null,description:`The min-width of the component.
Use BlockSize enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"minWidth",required:!1,type:{name:"BlockSize | BlockSizeArray"}},backgroundColor:{defaultValue:null,description:`The background-color of the component.
Use BackgroundColor enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"backgroundColor",required:!1,type:{name:"BackgroundColor | BackgroundColorArray"}},color:{defaultValue:null,description:`The text-color of the component.
Use TextColor enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"color",required:!1,type:{name:"TextColor | TextColorArray | IconColor | IconColorArray"}},className:{defaultValue:{value:""},description:"Additional className to add to the Skeleton",name:"className",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"The height of the Skeleton",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:null,description:"The width of the Skeleton",name:"width",required:!1,type:{name:"string | number"}},children:{defaultValue:null,description:"The children of the Skeleton",name:"children",required:!1,type:{name:"ReactNode"}},as:{defaultValue:null,description:`An override of the default HTML tag.
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/skeleton/skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"ui/components/component-library/skeleton/skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-component-library-skeleton-skeleton-stories.8f10c002.iframe.bundle.js.map