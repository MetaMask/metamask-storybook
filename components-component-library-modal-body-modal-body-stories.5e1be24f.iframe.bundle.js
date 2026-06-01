(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[41033],{"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_inheritsLoose});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inheritsLoose(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t,o)}},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}__webpack_require__.d(__webpack_exports__,{A:()=>_setPrototypeOf})},"./node_modules/@mdx-js/react/lib/index.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{RP:()=>useMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/clsx/dist/clsx.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/memoizerific sync recursive"(module){function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js"(__unused_webpack_module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js"(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/box/box.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Box});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var BASE_CLASS_NAME="mm-box";function isValidSize(styleProp,value){return"number"==typeof value||("margin"===styleProp||"margin-top"===styleProp||"margin-right"===styleProp||"margin-bottom"===styleProp||"margin-left"===styleProp||"margin-inline"===styleProp||"margin-inline-start"===styleProp||"margin-inline-end"===styleProp)&&"auto"===value}function isValidString(type,value){return"string"==typeof type&&"string"==typeof value}var generateClassNames=(0,lodash__WEBPACK_IMPORTED_MODULE_2__.memoize)(function(styleDeclaration,value,validatorFn){if(!value&&"number"!=typeof value)return{};var singleValue,classNamesObject={},singleArrayItemProp=Array.isArray(value)&&1===value.length?value[0]:void 0,singleValueProp=(Array.isArray(value)||"string"!=typeof value)&&"number"!=typeof value?void 0:value;if((singleValueProp||0===singleValueProp)&&(singleValue=singleValueProp),(singleArrayItemProp||0===singleArrayItemProp)&&(singleValue=singleArrayItemProp),singleValue||0===singleValue)classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(styleDeclaration,"-").concat(singleValue)]=validatorFn(styleDeclaration,singleValue);else if(Array.isArray(value))switch(value.length){case 4:classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(styleDeclaration,"-").concat(value[0])]=validatorFn(styleDeclaration,value[0]),classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.LO[1],":").concat(styleDeclaration,"-").concat(value[1])]=validatorFn(styleDeclaration,value[1]),classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.LO[2],":").concat(styleDeclaration,"-").concat(value[2])]=validatorFn(styleDeclaration,value[2]),classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.LO[3],":").concat(styleDeclaration,"-").concat(value[3])]=validatorFn(styleDeclaration,value[3]);break;case 3:classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(styleDeclaration,"-").concat(value[0])]=validatorFn(styleDeclaration,value[0]),classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.LO[1],":").concat(styleDeclaration,"-").concat(value[1])]=validatorFn(styleDeclaration,value[1]),classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.LO[2],":").concat(styleDeclaration,"-").concat(value[2])]=validatorFn(styleDeclaration,value[2]);break;case 2:classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(styleDeclaration,"-").concat(value[0])]=validatorFn(styleDeclaration,value[0]),classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.LO[1],":").concat(styleDeclaration,"-").concat(value[1])]=validatorFn(styleDeclaration,value[1]);break;default:console.log("Invalid array prop length: ".concat(value.length))}return classNamesObject},function(styleDeclaration,value){return"".concat(styleDeclaration).concat(value)}),Box=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var as=_param.as,padding=_param.padding,paddingTop=_param.paddingTop,paddingRight=_param.paddingRight,paddingBottom=_param.paddingBottom,paddingLeft=_param.paddingLeft,paddingInline=_param.paddingInline,paddingInlineStart=_param.paddingInlineStart,paddingInlineEnd=_param.paddingInlineEnd,margin=_param.margin,marginTop=_param.marginTop,marginRight=_param.marginRight,marginBottom=_param.marginBottom,marginLeft=_param.marginLeft,marginInline=_param.marginInline,marginInlineStart=_param.marginInlineStart,marginInlineEnd=_param.marginInlineEnd,borderColor=_param.borderColor,borderWidth=_param.borderWidth,borderRadius=_param.borderRadius,borderStyle=_param.borderStyle,alignItems=_param.alignItems,justifyContent=_param.justifyContent,textAlign=_param.textAlign,flexDirection=_param.flexDirection,flexWrap=_param.flexWrap,gap=_param.gap,display=_param.display,width=_param.width,minWidth=_param.minWidth,height=_param.height,children=_param.children,_param_className=_param.className,backgroundColor=_param.backgroundColor,color=_param.color,props=_object_without_properties(_param,["as","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingInline","paddingInlineStart","paddingInlineEnd","margin","marginTop","marginRight","marginBottom","marginLeft","marginInline","marginInlineStart","marginInlineEnd","borderColor","borderWidth","borderRadius","borderStyle","alignItems","justifyContent","textAlign","flexDirection","flexWrap","gap","display","width","minWidth","height","children","className","backgroundColor","color"]),boxClassName=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)(BASE_CLASS_NAME,void 0===_param_className?"":_param_className,generateClassNames("margin",margin,isValidSize),generateClassNames("margin-top",marginTop,isValidSize),generateClassNames("margin-right",marginRight,isValidSize),generateClassNames("margin-bottom",marginBottom,isValidSize),generateClassNames("margin-left",marginLeft,isValidSize),generateClassNames("margin-inline",marginInline,isValidSize),generateClassNames("margin-inline-start",marginInlineStart,isValidSize),generateClassNames("margin-inline-end",marginInlineEnd,isValidSize),generateClassNames("padding",padding,isValidSize),generateClassNames("padding-top",paddingTop,isValidSize),generateClassNames("padding-right",paddingRight,isValidSize),generateClassNames("padding-bottom",paddingBottom,isValidSize),generateClassNames("padding-left",paddingLeft,isValidSize),generateClassNames("padding-inline",paddingInline,isValidSize),generateClassNames("padding-inline-start",paddingInlineStart,isValidSize),generateClassNames("padding-inline-end",paddingInlineEnd,isValidSize),generateClassNames("display",display,isValidString),generateClassNames("gap",gap,isValidSize),generateClassNames("flex-direction",flexDirection,isValidString),generateClassNames("flex-wrap",flexWrap,isValidString),generateClassNames("justify-content",justifyContent,isValidString),generateClassNames("align-items",alignItems,isValidString),generateClassNames("text-align",textAlign,isValidString),generateClassNames("width",width,isValidString),generateClassNames("min-width",minWidth,isValidString),generateClassNames("height",height,isValidString),generateClassNames("color",color,isValidString),generateClassNames("background-color",backgroundColor,isValidString),generateClassNames("rounded",borderRadius,isValidString),generateClassNames("border-style",borderStyle,isValidString),generateClassNames("border-color",borderColor,isValidString),generateClassNames("border-width",borderWidth,isValidSize),{"box--border-style-solid":!borderStyle&&(!!borderWidth||!!borderColor),"box--border-width-1":!borderWidth&&!!borderColor});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(as||"div",_object_spread({className:boxClassName,ref:ref},props),children)});try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{children:{defaultValue:null,description:"The content of the Box component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional className to apply to the Box component.",name:"className",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Accepts responsive props in the form of an array.`,name:"display",required:!1,type:{name:"Display | DisplayArray"}},width:{defaultValue:null,description:`The width of the component.
Use BlockSize enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"width",required:!1,type:{name:"BlockSize | BlockSizeArray"}},minWidth:{defaultValue:null,description:`The min-width of the component.
Use BlockSize enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"minWidth",required:!1,type:{name:"BlockSize | BlockSizeArray"}},height:{defaultValue:null,description:`The height of the component.
Use BlockSize enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"height",required:!1,type:{name:"BlockSize | BlockSizeArray"}},backgroundColor:{defaultValue:null,description:`The background-color of the component.
Use BackgroundColor enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"backgroundColor",required:!1,type:{name:"BackgroundColor | BackgroundColorArray"}},color:{defaultValue:null,description:`The text-color of the component.
Use TextColor enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"color",required:!1,type:{name:"IconColor | TextColor | TextColorArray | IconColorArray"}},"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
TypeScript is complaining about data- attributes which means we need to explicitly define this as a prop.
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}},as:{defaultValue:null,description:`An override of the default HTML tag.
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/box/box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"ui/components/component-library/box/box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/box/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>_box__WEBPACK_IMPORTED_MODULE_0__.a});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/box/box.tsx")},"./ui/components/component-library/modal-body/modal-body.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,DefaultStory:()=>DefaultStory,Padding:()=>Padding,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_body_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"modalbody",children:"ModalBody"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ModalBody"})," is a container component that handles the scrolling of the ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/components-componentlibrary-modal--docs",children:(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})})," content."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:DefaultStory}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.H2,{of:DefaultStory}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," prop to pass in any valid React children. The ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalBody"}),"'s purpose is to handle the scrolling of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," content when the content extends beyond the viewport."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:Children}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { ModalBody } from '../../component-library';

<div style={{ height: 100, width: 200 }}>
  <ModalBody>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
    libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id
    elit. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper
    nulla non metus auctor fringilla..
  </ModalBody>
</div>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"padding",children:"Padding"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalBody"})," has default padding to align with the rest of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," components. You can override this padding by passing in a ",(0,jsx_runtime.jsx)(_components.code,{children:"padding"}),` prop.
Defaults:`]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:"paddingLeft: 4 (16px)"}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"paddingRight: 4 (16px)"}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"paddingBottom: 2 (8px)"}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"paddingTop: 2 (8px)"}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{of:Padding}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  BackgroundColor,
  Display,
  FlexDirection,
} from '../../../helpers/constants/design-system';
import { ModalBody, Text } from '../../component-library';

<div style={{ height: 200, width: 300 }}>
  <ModalBody
    display={Display.Flex}
    flexDirection={FlexDirection.Column}
    paddingLeft={0} // removing horizontal padding from ModalBody
    paddingRight={0}
  >
    <Text paddingLeft={4} paddingRight={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
      libero, a pharetra augue. Nullam id
    </Text>
    <Text
      backgroundColor={BackgroundColor.primaryMuted}
      paddingLeft={4}
      paddingRight={4}
    >
      Element touches edge of ModalBody
    </Text>
    <Text paddingLeft={4} paddingRight={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit
      libero, a pharetra augue. Nullam id
    </Text>
  </ModalBody>
</div>;
`})})]})}var design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),modal_body=__webpack_require__("./ui/components/component-library/modal-body/modal-body.tsx");let modal_body_stories={title:"Components/ComponentLibrary/ModalBody",component:modal_body.c,tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{className:{control:"text"},children:{control:"text"}},args:{className:"",children:"Modal Body"}};var DefaultStory={};DefaultStory.storyName="Default";var Children={args:{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla."},render:function(args){return react.createElement("div",{style:{height:100,width:300}},react.createElement(modal_body.c,args))}},Padding={args:{paddingLeft:0,paddingRight:0,gap:4,display:design_system.nl.Flex,flexDirection:design_system.bo.Column},render:function(args){return react.createElement("div",{style:{height:200,width:300}},react.createElement(modal_body.c,args,react.createElement(component_library_text.EY,{paddingLeft:4,paddingRight:4},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id"),react.createElement(component_library_text.EY,{backgroundColor:design_system.i0.primaryMuted,paddingLeft:4,paddingRight:4},"Element touches edge of ModalBody"),react.createElement(component_library_text.EY,{paddingLeft:4,paddingRight:4},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id")))}};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"{}",...DefaultStory.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.'
  },
  render: args => <div style={{
    height: 100,
    width: 300
  }}>
      <ModalBody {...args} />
    </div>
}`,...Children.parameters?.docs?.source}}},Padding.parameters={...Padding.parameters,docs:{...Padding.parameters?.docs,source:{originalSource:`{
  args: {
    paddingLeft: 0,
    paddingRight: 0,
    gap: 4,
    display: Display.Flex,
    flexDirection: FlexDirection.Column
  },
  render: args => <div style={{
    height: 200,
    width: 300
  }}>
      <ModalBody {...args}>
        <Text paddingLeft={4} paddingRight={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          elit libero, a pharetra augue. Nullam id
        </Text>
        <Text backgroundColor={BackgroundColor.primaryMuted} paddingLeft={4} paddingRight={4}>
          Element touches edge of ModalBody
        </Text>
        <Text paddingLeft={4} paddingRight={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          elit libero, a pharetra augue. Nullam id
        </Text>
      </ModalBody>
    </div>
}`,...Padding.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Children","Padding"]},"./ui/components/component-library/modal-body/modal-body.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>ModalBody});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/box/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var ModalBody=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var _param_className=_param.className,children=_param.children,props=_object_without_properties(_param,["className","children"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_2__.a,_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-modal-body",void 0===_param_className?"":_param_className),ref:ref,paddingLeft:4,paddingRight:4},props),children)});try{ModalBody.displayName="ModalBody",ModalBody.__docgenInfo={description:"",displayName:"ModalBody",props:{className:{defaultValue:{value:""},description:"Additional className to add to the ModalBody",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content of the ModalBody",name:"children",required:!1,type:{name:"ReactNode"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Accepts responsive props in the form of an array.`,name:"display",required:!1,type:{name:"Display | DisplayArray"}},width:{defaultValue:null,description:`The width of the component.
Use BlockSize enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"width",required:!1,type:{name:"BlockSize | BlockSizeArray"}},minWidth:{defaultValue:null,description:`The min-width of the component.
Use BlockSize enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"minWidth",required:!1,type:{name:"BlockSize | BlockSizeArray"}},height:{defaultValue:null,description:`The height of the component.
Use BlockSize enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"height",required:!1,type:{name:"BlockSize | BlockSizeArray"}},backgroundColor:{defaultValue:null,description:`The background-color of the component.
Use BackgroundColor enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"backgroundColor",required:!1,type:{name:"BackgroundColor | BackgroundColorArray"}},color:{defaultValue:null,description:`The text-color of the component.
Use TextColor enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"color",required:!1,type:{name:"IconColor | TextColor | TextColorArray | IconColorArray"}},"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
TypeScript is complaining about data- attributes which means we need to explicitly define this as a prop.
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}},as:{defaultValue:null,description:`An override of the default HTML tag.
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/modal-body/modal-body.tsx#ModalBody"]={docgenInfo:ModalBody.__docgenInfo,name:"ModalBody",path:"ui/components/component-library/modal-body/modal-body.tsx#ModalBody"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/text/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{jM:()=>InvisibleCharacter,EY:()=>text_text.E});var text_text=__webpack_require__("./ui/components/component-library/text/text.tsx"),InvisibleCharacter="​"},"./ui/components/component-library/text/text.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Text});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/box/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var getTextElementDefault=function(variant){switch(variant){case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.displayMd:return"h1";case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.headingLg:return"h2";case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.headingMd:return"h3";case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.headingSm:return"h4";case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.inherit:return"span";default:return"p"}},Text=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var _obj,_param_variant=_param.variant,variant=void 0===_param_variant?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.bodyMd:_param_variant,fontWeight=_param.fontWeight,fontStyle=_param.fontStyle,fontFamily=_param.fontFamily,textTransform=_param.textTransform,textAlign=_param.textAlign,textDirection=_param.textDirection,overflowWrap=_param.overflowWrap,ellipsis=_param.ellipsis,_param_className=_param.className,children=_param.children,props=_object_without_properties(_param,["variant","fontWeight","fontStyle","fontFamily","textTransform","textAlign","textDirection","overflowWrap","ellipsis","className","children"]),tag=getTextElementDefault(variant),computedClassName=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-text",void 0===_param_className?"":_param_className,"mm-text--".concat(variant),(_define_property(_obj={},"mm-text--font-weight-".concat(fontWeight),!!fontWeight),_define_property(_obj,"mm-text--font-style-".concat(fontStyle),!!fontStyle),_define_property(_obj,"mm-text--font-family-".concat(fontFamily),!!fontFamily),_define_property(_obj,"mm-text--ellipsis",!!ellipsis),_define_property(_obj,"mm-text--text-transform-".concat(textTransform),!!textTransform),_define_property(_obj,"mm-text--text-align-".concat(textAlign),!!textAlign),_define_property(_obj,"mm-text--overflow-wrap-".concat(overflowWrap),!!overflowWrap),_obj));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_3__.a,_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)(computedClassName),as:tag,dir:textDirection,ref:ref,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.r7.textDefault},props),children)});try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:{value:""},description:"Additional className to assign the Text component",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The text content of the Text component",name:"children",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"TextVariant.bodyMd"},description:`The variation of font styles including sizes and weights of the Text component
Possible values:
\`displayMd\` large screen: 48px / small screen: 32px,
\`headingLg\` large screen: 32px / small screen: 24px,
\`headingMd\` large screen: 24px / small screen: 18px,
\`headingSm\` large screen: 18px / small screen: 16px,
\`bodyLgMedium\` large screen: 18px / small screen: 16px,
\`bodyMd\` large screen: 16px / small screen: 14px,
\`bodyMdMedium\` large screen: 16px / small screen: 14px,
\`bodyMdBold\` large screen: 16px / small screen: 14px,
\`bodySm\` large screen: 14px / small screen: 12px,
\`bodySmMedium\` large screen: 14px / small screen: 12px,
\`bodySmBold\` large screen: 14px / small screen: 12px,
\`bodyXsMedium\` large screen: 12px / small screen: 10px,
\`bodyXs\` large screen: 12px / small screen: 10px,
\`inherit\``,name:"variant",required:!1,type:{name:"enum",value:[{value:'"display-md"'},{value:'"heading-lg"'},{value:'"heading-md"'},{value:'"heading-sm"'},{value:'"body-lg-medium"'},{value:'"body-md"'},{value:'"body-md-medium"'},{value:'"body-md-bold"'},{value:'"body-sm"'},{value:'"body-sm-medium"'},{value:'"body-sm-bold"'},{value:'"body-xs"'},{value:'"body-xs-medium"'},{value:'"inherit"'}]}},fontWeight:{defaultValue:null,description:`The font-weight of the Text component. Should use the FontWeight enum from
./ui/helpers/constants/design-system.js`,name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"medium"'},{value:'"normal"'}]}},fontStyle:{defaultValue:null,description:`The font-style of the Text component. Should use the FontStyle enum from
./ui/helpers/constants/design-system.js`,name:"fontStyle",required:!1,type:{name:"enum",value:[{value:'"italic"'},{value:'"normal"'}]}},fontFamily:{defaultValue:null,description:"The font family of the Text component. Should use the FontFamily enum",name:"fontFamily",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"accent"'},{value:'"hero"'}]}},textTransform:{defaultValue:null,description:`The textTransform of the Text component. Should use the TextTransform enum from
./ui/helpers/constants/design-system.js`,name:"textTransform",required:!1,type:{name:"enum",value:[{value:'"uppercase"'},{value:'"lowercase"'},{value:'"capitalize"'}]}},textDirection:{defaultValue:null,description:`Change the dir (direction) global attribute of text to support the direction a language is written
Possible values: \`LEFT_TO_RIGHT\` (default), \`RIGHT_TO_LEFT\`, \`AUTO\` (user agent decides)`,name:"textDirection",required:!1,type:{name:"enum",value:[{value:'"ltr"'},{value:'"rtl"'},{value:'"auto"'}]}},overflowWrap:{defaultValue:null,description:`The overflow-wrap of the Text component. Should use the OverflowWrap enum from
./ui/helpers/constants/design-system.js`,name:"overflowWrap",required:!1,type:{name:"enum",value:[{value:'"break-word"'},{value:'"anywhere"'},{value:'"normal"'}]}},ellipsis:{defaultValue:null,description:"Used for long strings that can be cut off...",name:"ellipsis",required:!1,type:{name:"boolean"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Accepts responsive props in the form of an array.`,name:"display",required:!1,type:{name:"Display | DisplayArray"}},width:{defaultValue:null,description:`The width of the component.
Use BlockSize enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"width",required:!1,type:{name:"BlockSize | BlockSizeArray"}},minWidth:{defaultValue:null,description:`The min-width of the component.
Use BlockSize enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"minWidth",required:!1,type:{name:"BlockSize | BlockSizeArray"}},height:{defaultValue:null,description:`The height of the component.
Use BlockSize enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"height",required:!1,type:{name:"BlockSize | BlockSizeArray"}},backgroundColor:{defaultValue:null,description:`The background-color of the component.
Use BackgroundColor enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"backgroundColor",required:!1,type:{name:"BackgroundColor | BackgroundColorArray"}},color:{defaultValue:null,description:`The text-color of the component.
Use TextColor enum from '../../../helpers/constants/design-system';
Accepts responsive props in the form of an array.`,name:"color",required:!1,type:{name:"IconColor | TextColor | TextColorArray | IconColorArray"}},"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
TypeScript is complaining about data- attributes which means we need to explicitly define this as a prop.
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}},as:{defaultValue:null,description:`An override of the default HTML tag.
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text/text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"ui/components/component-library/text/text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-component-library-modal-body-modal-body-stories.5e1be24f.iframe.bundle.js.map