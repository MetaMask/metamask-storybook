(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[89971],{"./node_modules/@mdx-js/react/lib/index.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{RP:()=>useMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-16.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kQ;return new Promise((resolve,reject)=>{__webpack_require__.e(21294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ov,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/memoizerific sync recursive"(module){function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js"(__unused_webpack_module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js"(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/box/box.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Box});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var BASE_CLASS_NAME="mm-box";function isValidSize(styleProp,value){return"number"==typeof value||("margin"===styleProp||"margin-top"===styleProp||"margin-right"===styleProp||"margin-bottom"===styleProp||"margin-left"===styleProp||"margin-inline"===styleProp||"margin-inline-start"===styleProp||"margin-inline-end"===styleProp)&&"auto"===value}function isValidString(type,value){return"string"==typeof type&&"string"==typeof value}var generateClassNames=(0,lodash__WEBPACK_IMPORTED_MODULE_2__.memoize)(function(styleDeclaration,value,validatorFn){if(!value&&"number"!=typeof value)return{};var singleValue,classNamesObject={},singleArrayItemProp=Array.isArray(value)&&1===value.length?value[0]:void 0,singleValueProp=(Array.isArray(value)||"string"!=typeof value)&&"number"!=typeof value?void 0:value;if((singleValueProp||0===singleValueProp)&&(singleValue=singleValueProp),(singleArrayItemProp||0===singleArrayItemProp)&&(singleValue=singleArrayItemProp),singleValue||0===singleValue)classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(styleDeclaration,"-").concat(singleValue)]=validatorFn(styleDeclaration,singleValue);else if(Array.isArray(value))switch(value.length){case 4:classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(styleDeclaration,"-").concat(value[0])]=validatorFn(styleDeclaration,value[0]),classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.LO[1],":").concat(styleDeclaration,"-").concat(value[1])]=validatorFn(styleDeclaration,value[1]),classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.LO[2],":").concat(styleDeclaration,"-").concat(value[2])]=validatorFn(styleDeclaration,value[2]),classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.LO[3],":").concat(styleDeclaration,"-").concat(value[3])]=validatorFn(styleDeclaration,value[3]);break;case 3:classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(styleDeclaration,"-").concat(value[0])]=validatorFn(styleDeclaration,value[0]),classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.LO[1],":").concat(styleDeclaration,"-").concat(value[1])]=validatorFn(styleDeclaration,value[1]),classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.LO[2],":").concat(styleDeclaration,"-").concat(value[2])]=validatorFn(styleDeclaration,value[2]);break;case 2:classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(styleDeclaration,"-").concat(value[0])]=validatorFn(styleDeclaration,value[0]),classNamesObject["".concat(BASE_CLASS_NAME,"--").concat(_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.LO[1],":").concat(styleDeclaration,"-").concat(value[1])]=validatorFn(styleDeclaration,value[1]);break;default:console.log("Invalid array prop length: ".concat(value.length))}return classNamesObject},function(styleDeclaration,value){return"".concat(styleDeclaration).concat(value)}),Box=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var as=_param.as,padding=_param.padding,paddingTop=_param.paddingTop,paddingRight=_param.paddingRight,paddingBottom=_param.paddingBottom,paddingLeft=_param.paddingLeft,paddingInline=_param.paddingInline,paddingInlineStart=_param.paddingInlineStart,paddingInlineEnd=_param.paddingInlineEnd,margin=_param.margin,marginTop=_param.marginTop,marginRight=_param.marginRight,marginBottom=_param.marginBottom,marginLeft=_param.marginLeft,marginInline=_param.marginInline,marginInlineStart=_param.marginInlineStart,marginInlineEnd=_param.marginInlineEnd,borderColor=_param.borderColor,borderWidth=_param.borderWidth,borderRadius=_param.borderRadius,borderStyle=_param.borderStyle,alignItems=_param.alignItems,justifyContent=_param.justifyContent,textAlign=_param.textAlign,flexDirection=_param.flexDirection,flexWrap=_param.flexWrap,gap=_param.gap,display=_param.display,width=_param.width,minWidth=_param.minWidth,height=_param.height,children=_param.children,_param_className=_param.className,backgroundColor=_param.backgroundColor,color=_param.color,props=_object_without_properties(_param,["as","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingInline","paddingInlineStart","paddingInlineEnd","margin","marginTop","marginRight","marginBottom","marginLeft","marginInline","marginInlineStart","marginInlineEnd","borderColor","borderWidth","borderRadius","borderStyle","alignItems","justifyContent","textAlign","flexDirection","flexWrap","gap","display","width","minWidth","height","children","className","backgroundColor","color"]),boxClassName=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)(BASE_CLASS_NAME,void 0===_param_className?"":_param_className,generateClassNames("margin",margin,isValidSize),generateClassNames("margin-top",marginTop,isValidSize),generateClassNames("margin-right",marginRight,isValidSize),generateClassNames("margin-bottom",marginBottom,isValidSize),generateClassNames("margin-left",marginLeft,isValidSize),generateClassNames("margin-inline",marginInline,isValidSize),generateClassNames("margin-inline-start",marginInlineStart,isValidSize),generateClassNames("margin-inline-end",marginInlineEnd,isValidSize),generateClassNames("padding",padding,isValidSize),generateClassNames("padding-top",paddingTop,isValidSize),generateClassNames("padding-right",paddingRight,isValidSize),generateClassNames("padding-bottom",paddingBottom,isValidSize),generateClassNames("padding-left",paddingLeft,isValidSize),generateClassNames("padding-inline",paddingInline,isValidSize),generateClassNames("padding-inline-start",paddingInlineStart,isValidSize),generateClassNames("padding-inline-end",paddingInlineEnd,isValidSize),generateClassNames("display",display,isValidString),generateClassNames("gap",gap,isValidSize),generateClassNames("flex-direction",flexDirection,isValidString),generateClassNames("flex-wrap",flexWrap,isValidString),generateClassNames("justify-content",justifyContent,isValidString),generateClassNames("align-items",alignItems,isValidString),generateClassNames("text-align",textAlign,isValidString),generateClassNames("width",width,isValidString),generateClassNames("min-width",minWidth,isValidString),generateClassNames("height",height,isValidString),generateClassNames("color",color,isValidString),generateClassNames("background-color",backgroundColor,isValidString),generateClassNames("rounded",borderRadius,isValidString),generateClassNames("border-style",borderStyle,isValidString),generateClassNames("border-color",borderColor,isValidString),generateClassNames("border-width",borderWidth,isValidSize),{"box--border-style-solid":!borderStyle&&(!!borderWidth||!!borderColor),"box--border-width-1":!borderWidth&&!!borderColor});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(as||"div",_object_spread({className:boxClassName,ref:ref},props),children)});try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{children:{defaultValue:null,description:"The content of the Box component.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional className to apply to the Box component.",name:"className",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/box/box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"ui/components/component-library/box/box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/box/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>_box__WEBPACK_IMPORTED_MODULE_0__.a});var _box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/box/box.tsx")},"./ui/components/component-library/button-icon/button-icon.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>ButtonIcon});var _obj,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/box/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/icon/index.ts"),_button_icon_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/component-library/button-icon/button-icon.types.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var buttonIconSizeToIconSize=(_define_property(_obj={},_button_icon_types__WEBPACK_IMPORTED_MODULE_5__.f.Sm,_icon__WEBPACK_IMPORTED_MODULE_4__.lK.Sm),_define_property(_obj,_button_icon_types__WEBPACK_IMPORTED_MODULE_5__.f.Md,_icon__WEBPACK_IMPORTED_MODULE_4__.lK.Md),_define_property(_obj,_button_icon_types__WEBPACK_IMPORTED_MODULE_5__.f.Lg,_icon__WEBPACK_IMPORTED_MODULE_4__.lK.Lg),_obj),ButtonIcon=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var ariaLabel=_param.ariaLabel,as=_param.as,_param_className=_param.className,_param_color=_param.color,color=void 0===_param_color?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Li.iconDefault:_param_color,href=_param.href,_param_size=_param.size,size=void 0===_param_size?_button_icon_types__WEBPACK_IMPORTED_MODULE_5__.f.Lg:_param_size,iconName=_param.iconName,disabled=_param.disabled,iconProps=_param.iconProps,props=_object_without_properties(_param,["ariaLabel","as","className","color","href","size","iconName","disabled","iconProps"]),tag=href?"a":as||"button",isDisabled=disabled&&"button"===tag;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_3__.a,_object_spread(_object_spread_props(_object_spread(_object_spread_props(_object_spread({"aria-label":ariaLabel,as:tag,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-button-icon","mm-button-icon--size-".concat(String(size)),{"mm-button-icon--disabled":!!disabled},void 0===_param_className?"":_param_className),color:color},isDisabled?{disabled:!0}:{}),{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.nl.InlineFlex,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.A9.center,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.k2.center,borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Z6.LG,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.transparent}),href?{href:href}:{}),{ref:ref}),props),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon__WEBPACK_IMPORTED_MODULE_4__.In,_object_spread({name:iconName,size:buttonIconSizeToIconSize[size]},iconProps)))});try{ButtonIcon.displayName="ButtonIcon",ButtonIcon.__docgenInfo={description:"",displayName:"ButtonIcon",props:{ariaLabel:{defaultValue:null,description:"String that adds an accessible name for ButtonIcon",name:"ariaLabel",required:!0,type:{name:"string"}},as:{defaultValue:null,description:`The polymorphic \`as\` prop allows you to change the root HTML element of the Button component between \`button\` and \`a\` tag
An override of the default HTML tag.
Can also be a React component.`,name:"as",required:!1,type:{name:'("a" & ElementType<any>) | ("button" & ElementType<any>)'}},className:{defaultValue:{value:""},description:"An additional className to apply to the ButtonIcon.",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:{value:"IconColor.iconDefault"},description:`The color of the ButtonIcon component should use the IconColor object from
./ui/helpers/constants/design-system.js`,name:"color",required:!1,type:{name:"enum",value:[{value:'"icon-default"'},{value:'"icon-alternative"'},{value:'"icon-muted"'},{value:'"icon-inverse"'},{value:'"overlay-inverse"'},{value:'"primary-default"'},{value:'"primary-inverse"'},{value:'"error-default"'},{value:'"error-inverse"'},{value:'"success-default"'},{value:'"success-inverse"'},{value:'"warning-default"'},{value:'"warning-inverse"'},{value:'"info-default"'},{value:'"info-inverse"'},{value:'"inherit"'},{value:'"goerli"'},{value:'"sepolia"'},{value:'"linea-goerli"'},{value:'"linea-goerli-inverse"'},{value:'"linea-sepolia"'},{value:'"linea-sepolia-inverse"'},{value:'"linea-mainnet"'},{value:'"linea-mainnet-inverse"'},{value:'"goerli-inverse"'},{value:'"sepolia-inverse"'},{value:'"transparent"'}]}},disabled:{defaultValue:null,description:"Boolean to disable button",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"When an `href` prop is passed, ButtonIcon will automatically change the root element to be an `a` (anchor) tag",name:"href",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"The name of the icon to display. Should be one of IconName",name:"iconName",required:!0,type:{name:"enum",value:[{value:'"accessibility"'},{value:'"activity"'},{value:'"add-card"'},{value:'"add-circle"'},{value:'"add-square"'},{value:'"add"'},{value:'"ai"'},{value:'"alternate-email"'},{value:'"apple"'},{value:'"apps"'},{value:'"arrow-2-down"'},{value:'"arrow-2-left"'},{value:'"arrow-2-right"'},{value:'"arrow-2-up-right"'},{value:'"arrow-2-up"'},{value:'"arrow-circle-down"'},{value:'"arrow-circle-up"'},{value:'"arrow-double-left"'},{value:'"arrow-double-right"'},{value:'"arrow-down"'},{value:'"arrow-drop-down-circle"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-up"'},{value:'"attachment"'},{value:'"ban"'},{value:'"bank-assured"'},{value:'"bank"'},{value:'"bold"'},{value:'"book"'},{value:'"bookmark"'},{value:'"bridge"'},{value:'"briefcase"'},{value:'"bulb"'},{value:'"buy-sell"'},{value:'"cake"'},{value:'"calculator"'},{value:'"calendar"'},{value:'"call"'},{value:'"camera"'},{value:'"campaign"'},{value:'"card-pos"'},{value:'"card"'},{value:'"cash"'},{value:'"category"'},{value:'"chart"'},{value:'"check-bold"'},{value:'"check"'},{value:'"circle-x"'},{value:'"clock-filled"'},{value:'"clock"'},{value:'"close"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"cloud"'},{value:'"code-circle"'},{value:'"code"'},{value:'"coin"'},{value:'"collapse"'},{value:'"confirmation"'},{value:'"connect"'},{value:'"copy-success"'},{value:'"copy"'},{value:'"credit-check"'},{value:'"currency-franc"'},{value:'"currency-lira"'},{value:'"currency-pound"'},{value:'"currency-yuan"'},{value:'"customize"'},{value:'"danger"'},{value:'"dark-filled"'},{value:'"dark"'},{value:'"data"'},{value:'"description"'},{value:'"details"'},{value:'"diagram"'},{value:'"document-code"'},{value:'"dollar"'},{value:'"download"'},{value:'"draft"'},{value:'"eco-leaf"'},{value:'"edit-square"'},{value:'"edit"'},{value:'"encrypted-add"'},{value:'"eraser"'},{value:'"error"'},{value:'"ethereum"'},{value:'"exchange"'},{value:'"expand-vertical"'},{value:'"expand"'},{value:'"explore-filled"'},{value:'"explore"'},{value:'"export"'},{value:'"extension"'},{value:'"eye-slash"'},{value:'"eye"'},{value:'"face-id"'},{value:'"feedback"'},{value:'"file"'},{value:'"filter"'},{value:'"fingerprint"'},{value:'"fire"'},{value:'"first-page"'},{value:'"flag"'},{value:'"flash-slash"'},{value:'"flash"'},{value:'"flask"'},{value:'"flower"'},{value:'"folder"'},{value:'"forest"'},{value:'"full-circle"'},{value:'"gas"'},{value:'"gift"'},{value:'"global-search"'},{value:'"global"'},{value:'"graph"'},{value:'"hardware"'},{value:'"hash-tag"'},{value:'"heart-filled"'},{value:'"heart"'},{value:'"hierarchy"'},{value:'"home-filled"'},{value:'"home"'},{value:'"image"'},{value:'"info"'},{value:'"inventory"'},{value:'"joystick"'},{value:'"keep-filled"'},{value:'"keep"'},{value:'"key"'},{value:'"last-page"'},{value:'"light-filled"'},{value:'"light"'},{value:'"link"'},{value:'"loading"'},{value:'"location"'},{value:'"lock-slash"'},{value:'"lock"'},{value:'"locked-filled"'},{value:'"login"'},{value:'"logout"'},{value:'"mail"'},{value:'"map"'},{value:'"menu"'},{value:'"message-question"'},{value:'"messages"'},{value:'"mic"'},{value:'"minus-bold"'},{value:'"minus-square"'},{value:'"minus"'},{value:'"mobile"'},{value:'"money-bag"'},{value:'"money"'},{value:'"monitor"'},{value:'"more-horizontal"'},{value:'"more-vertical"'},{value:'"mountain-flag"'},{value:'"music-note"'},{value:'"notification"'},{value:'"page-info"'},{value:'"palette"'},{value:'"password-check"'},{value:'"pending"'},{value:'"people"'},{value:'"person-cancel"'},{value:'"pin"'},{value:'"plant"'},{value:'"plug"'},{value:'"plus-and-minus"'},{value:'"policy-alert"'},{value:'"popup"'},{value:'"print"'},{value:'"priority-high"'},{value:'"privacy-tip"'},{value:'"programming-arrows"'},{value:'"publish"'},{value:'"qr-code"'},{value:'"question"'},{value:'"receive"'},{value:'"received"'},{value:'"refresh"'},{value:'"remove-minus"'},{value:'"report"'},{value:'"rocket"'},{value:'"save-filled"'},{value:'"save"'},{value:'"saving"'},{value:'"scan-barcode"'},{value:'"scan-focus"'},{value:'"scan"'},{value:'"search"'},{value:'"security-alert"'},{value:'"security-cross"'},{value:'"security-key"'},{value:'"security-search"'},{value:'"security-slash"'},{value:'"security-tick"'},{value:'"security-time"'},{value:'"security-user"'},{value:'"security"'},{value:'"send"'},{value:'"sentiment-dissatisfied"'},{value:'"sentiment-neutral"'},{value:'"sentiment-satisfied"'},{value:'"sentiment-very-satisfied"'},{value:'"setting-filled"'},{value:'"setting"'},{value:'"share"'},{value:'"shield-lock"'},{value:'"shopping-bag"'},{value:'"shopping-cart"'},{value:'"sidepanel"'},{value:'"signal-cellular"'},{value:'"slash"'},{value:'"sms"'},{value:'"snaps-mobile"'},{value:'"snaps-plus"'},{value:'"snaps-round"'},{value:'"snaps"'},{value:'"sort-by-alpha"'},{value:'"sort"'},{value:'"sparkle"'},{value:'"speed"'},{value:'"speedometer"'},{value:'"square"'},{value:'"stake"'},{value:'"star-filled"'},{value:'"star"'},{value:'"start"'},{value:'"storefront"'},{value:'"student"'},{value:'"swap-horizontal"'},{value:'"swap-vertical"'},{value:'"tab-close"'},{value:'"table-row"'},{value:'"tablet"'},{value:'"tag"'},{value:'"thumb-down-filled"'},{value:'"thumb-down"'},{value:'"thumb-up-filled"'},{value:'"thumb-up"'},{value:'"tint"'},{value:'"tooltip"'},{value:'"translate"'},{value:'"trash"'},{value:'"trend-down"'},{value:'"trend-up"'},{value:'"triangle-up"'},{value:'"triangle-down"'},{value:'"undo"'},{value:'"unfold"'},{value:'"unlocked-filled"'},{value:'"unpin"'},{value:'"upload-file"'},{value:'"upload"'},{value:'"usb"'},{value:'"user-check"'},{value:'"user-circle-add"'},{value:'"user-circle-remove"'},{value:'"user-circle"'},{value:'"user"'},{value:'"verified-filled"'},{value:'"verified"'},{value:'"videocam"'},{value:'"view-column"'},{value:'"view-in-ar"'},{value:'"volume-off"'},{value:'"volume-up"'},{value:'"wallet-filled"'},{value:'"wallet"'},{value:'"warning"'},{value:'"web-traffic"'},{value:'"widgets"'},{value:'"wifi-off"'},{value:'"wifi"'},{value:'"x"'}]}},iconProps:{defaultValue:null,description:"iconProps accepts all the props from Icon",name:"iconProps",required:!1,type:{name:'MakePropsOptional<IconProps<"span">>'}},size:{defaultValue:{value:"ButtonIconSize.Lg"},description:`The size of the ButtonIcon.
Possible values could be 'ButtonIconSize.Sm' 24px, 'ButtonIconSize.Lg' 32px,`,name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Accepts responsive props in the form of an array.`,name:"backgroundColor",required:!1,type:{name:"BackgroundColor | BackgroundColorArray"}},"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
TypeScript is complaining about data- attributes which means we need to explicitly define this as a prop.
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/button-icon/button-icon.tsx#ButtonIcon"]={docgenInfo:ButtonIcon.__docgenInfo,name:"ButtonIcon",path:"ui/components/component-library/button-icon/button-icon.tsx#ButtonIcon"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/button-icon/button-icon.types.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>ButtonIconSize1});var ButtonIconSize,ButtonIconSize1=((ButtonIconSize={}).Sm="sm",ButtonIconSize.Md="md",ButtonIconSize.Lg="lg",ButtonIconSize)},"./ui/components/component-library/button-icon/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>_button_icon__WEBPACK_IMPORTED_MODULE_0__.a,f:()=>_button_icon_types__WEBPACK_IMPORTED_MODULE_1__.f});var _button_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/button-icon/button-icon.tsx"),_button_icon_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/component-library/button-icon/button-icon.types.ts")},"./ui/components/component-library/header-base/header-base.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>HeaderBase});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/box/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var HeaderBase=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var startAccessory=_param.startAccessory,endAccessory=_param.endAccessory,_param_className=_param.className,children=_param.children,childrenWrapperProps=_param.childrenWrapperProps,startAccessoryWrapperProps=_param.startAccessoryWrapperProps,endAccessoryWrapperProps=_param.endAccessoryWrapperProps,props=_object_without_properties(_param,["startAccessory","endAccessory","className","children","childrenWrapperProps","startAccessoryWrapperProps","endAccessoryWrapperProps"]),startAccessoryRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),endAccessoryRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),2),accessoryMinWidth=_useState[0],setAccessoryMinWidth=_useState[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handleResize=function handleResize(){startAccessoryRef.current&&endAccessoryRef.current?setAccessoryMinWidth(Math.max(startAccessoryRef.current.scrollWidth,endAccessoryRef.current.scrollWidth)):startAccessoryRef.current&&!endAccessoryRef.current?setAccessoryMinWidth(startAccessoryRef.current.scrollWidth):!startAccessoryRef.current&&endAccessoryRef.current?setAccessoryMinWidth(endAccessoryRef.current.scrollWidth):setAccessoryMinWidth(0)};return handleResize(),window.addEventListener("resize",handleResize),function(){window.removeEventListener("resize",handleResize)}},[startAccessoryRef,endAccessoryRef,children]);var getTitleStyles=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return startAccessory&&!endAccessory&&accessoryMinWidth?{marginRight:"".concat(accessoryMinWidth,"px"),width:"calc(100% - ".concat(2*accessoryMinWidth,"px)")}:!startAccessory&&endAccessory&&accessoryMinWidth?{marginLeft:"".concat(accessoryMinWidth,"px"),width:"calc(100% - ".concat(2*accessoryMinWidth,"px)")}:startAccessory&&endAccessory&&accessoryMinWidth?{width:"calc(100% - ".concat(2*accessoryMinWidth,"px)")}:{}},[accessoryMinWidth,startAccessory,endAccessory]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_3__.a,_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-header-base",void 0===_param_className?"":_param_className),ref:ref,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.nl.Flex,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.A9.spaceBetween},props),startAccessory&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_3__.a,_object_spread({ref:startAccessoryRef,style:children?{minWidth:"".concat(accessoryMinWidth,"px")}:void 0},startAccessoryWrapperProps),startAccessory),children&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_3__.a,_object_spread({style:getTitleStyles},childrenWrapperProps),children),endAccessory&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_3__.a,_object_spread({display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.nl.Flex,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.A9.flexEnd,ref:endAccessoryRef,style:children?{minWidth:"".concat(accessoryMinWidth,"px")}:void 0},endAccessoryWrapperProps),endAccessory))});try{HeaderBase.displayName="HeaderBase",HeaderBase.__docgenInfo={description:"",displayName:"HeaderBase",props:{children:{defaultValue:null,description:"The children is the title area of the HeaderBase",name:"children",required:!1,type:{name:"ReactNode"}},childrenWrapperProps:{defaultValue:null,description:"Use the `childrenWrapperProps` prop to define the props to the children wrapper",name:"childrenWrapperProps",required:!1,type:{name:'BoxProps<"div">'}},startAccessory:{defaultValue:null,description:"The start(default left) content area of HeaderBase",name:"startAccessory",required:!1,type:{name:"ReactNode"}},startAccessoryWrapperProps:{defaultValue:null,description:"Use the `startAccessoryWrapperProps` prop to define the props to the start accessory wrapper",name:"startAccessoryWrapperProps",required:!1,type:{name:'BoxProps<"div">'}},endAccessory:{defaultValue:null,description:"The end (default right) content area of HeaderBase",name:"endAccessory",required:!1,type:{name:"ReactNode"}},endAccessoryWrapperProps:{defaultValue:null,description:"Use the `endAccessoryWrapperProps` prop to define the props to the end accessory wrapper",name:"endAccessoryWrapperProps",required:!1,type:{name:'BoxProps<"div">'}},className:{defaultValue:{value:""},description:"An additional className to apply to the HeaderBase",name:"className",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/header-base/header-base.tsx#HeaderBase"]={docgenInfo:HeaderBase.__docgenInfo,name:"HeaderBase",path:"ui/components/component-library/header-base/header-base.tsx#HeaderBase"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/header-base/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>_header_base__WEBPACK_IMPORTED_MODULE_0__.H});var _header_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/header-base/header-base.tsx")},"./ui/components/component-library/icon/icon.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/box/index.ts"),_icon_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/icon/icon.types.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Icon=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var name=_param.name,_param_size=_param.size,size=void 0===_param_size?_icon_types__WEBPACK_IMPORTED_MODULE_4__.l.Md:_param_size,_param_color=_param.color,color=void 0===_param_color?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Li.inherit:_param_color,_param_className=_param.className,style=_param.style,props=_object_without_properties(_param,["name","size","color","className","style"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_3__.a,_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)(void 0===_param_className?"":_param_className,"mm-icon","mm-icon--size-".concat(size)),ref:ref,as:"span",display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.nl.InlineBlock,color:color,style:_object_spread({maskImage:"url('./images/icons/".concat(String(name),".svg')"),WebkitMaskImage:"url('./images/icons/".concat(String(name),".svg')")},style)},props))});try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:`The name of the icon to display. Use the IconName enum
Search for an icon: https://metamask.github.io/metamask-storybook/?path=/story/components-componentlibrary-icon--default-story`,name:"name",required:!0,type:{name:"enum",value:[{value:'"accessibility"'},{value:'"activity"'},{value:'"add-card"'},{value:'"add-circle"'},{value:'"add-square"'},{value:'"add"'},{value:'"ai"'},{value:'"alternate-email"'},{value:'"apple"'},{value:'"apps"'},{value:'"arrow-2-down"'},{value:'"arrow-2-left"'},{value:'"arrow-2-right"'},{value:'"arrow-2-up-right"'},{value:'"arrow-2-up"'},{value:'"arrow-circle-down"'},{value:'"arrow-circle-up"'},{value:'"arrow-double-left"'},{value:'"arrow-double-right"'},{value:'"arrow-down"'},{value:'"arrow-drop-down-circle"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"arrow-up"'},{value:'"attachment"'},{value:'"ban"'},{value:'"bank-assured"'},{value:'"bank"'},{value:'"bold"'},{value:'"book"'},{value:'"bookmark"'},{value:'"bridge"'},{value:'"briefcase"'},{value:'"bulb"'},{value:'"buy-sell"'},{value:'"cake"'},{value:'"calculator"'},{value:'"calendar"'},{value:'"call"'},{value:'"camera"'},{value:'"campaign"'},{value:'"card-pos"'},{value:'"card"'},{value:'"cash"'},{value:'"category"'},{value:'"chart"'},{value:'"check-bold"'},{value:'"check"'},{value:'"circle-x"'},{value:'"clock-filled"'},{value:'"clock"'},{value:'"close"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"cloud"'},{value:'"code-circle"'},{value:'"code"'},{value:'"coin"'},{value:'"collapse"'},{value:'"confirmation"'},{value:'"connect"'},{value:'"copy-success"'},{value:'"copy"'},{value:'"credit-check"'},{value:'"currency-franc"'},{value:'"currency-lira"'},{value:'"currency-pound"'},{value:'"currency-yuan"'},{value:'"customize"'},{value:'"danger"'},{value:'"dark-filled"'},{value:'"dark"'},{value:'"data"'},{value:'"description"'},{value:'"details"'},{value:'"diagram"'},{value:'"document-code"'},{value:'"dollar"'},{value:'"download"'},{value:'"draft"'},{value:'"eco-leaf"'},{value:'"edit-square"'},{value:'"edit"'},{value:'"encrypted-add"'},{value:'"eraser"'},{value:'"error"'},{value:'"ethereum"'},{value:'"exchange"'},{value:'"expand-vertical"'},{value:'"expand"'},{value:'"explore-filled"'},{value:'"explore"'},{value:'"export"'},{value:'"extension"'},{value:'"eye-slash"'},{value:'"eye"'},{value:'"face-id"'},{value:'"feedback"'},{value:'"file"'},{value:'"filter"'},{value:'"fingerprint"'},{value:'"fire"'},{value:'"first-page"'},{value:'"flag"'},{value:'"flash-slash"'},{value:'"flash"'},{value:'"flask"'},{value:'"flower"'},{value:'"folder"'},{value:'"forest"'},{value:'"full-circle"'},{value:'"gas"'},{value:'"gift"'},{value:'"global-search"'},{value:'"global"'},{value:'"graph"'},{value:'"hardware"'},{value:'"hash-tag"'},{value:'"heart-filled"'},{value:'"heart"'},{value:'"hierarchy"'},{value:'"home-filled"'},{value:'"home"'},{value:'"image"'},{value:'"info"'},{value:'"inventory"'},{value:'"joystick"'},{value:'"keep-filled"'},{value:'"keep"'},{value:'"key"'},{value:'"last-page"'},{value:'"light-filled"'},{value:'"light"'},{value:'"link"'},{value:'"loading"'},{value:'"location"'},{value:'"lock-slash"'},{value:'"lock"'},{value:'"locked-filled"'},{value:'"login"'},{value:'"logout"'},{value:'"mail"'},{value:'"map"'},{value:'"menu"'},{value:'"message-question"'},{value:'"messages"'},{value:'"mic"'},{value:'"minus-bold"'},{value:'"minus-square"'},{value:'"minus"'},{value:'"mobile"'},{value:'"money-bag"'},{value:'"money"'},{value:'"monitor"'},{value:'"more-horizontal"'},{value:'"more-vertical"'},{value:'"mountain-flag"'},{value:'"music-note"'},{value:'"notification"'},{value:'"page-info"'},{value:'"palette"'},{value:'"password-check"'},{value:'"pending"'},{value:'"people"'},{value:'"person-cancel"'},{value:'"pin"'},{value:'"plant"'},{value:'"plug"'},{value:'"plus-and-minus"'},{value:'"policy-alert"'},{value:'"popup"'},{value:'"print"'},{value:'"priority-high"'},{value:'"privacy-tip"'},{value:'"programming-arrows"'},{value:'"publish"'},{value:'"qr-code"'},{value:'"question"'},{value:'"receive"'},{value:'"received"'},{value:'"refresh"'},{value:'"remove-minus"'},{value:'"report"'},{value:'"rocket"'},{value:'"save-filled"'},{value:'"save"'},{value:'"saving"'},{value:'"scan-barcode"'},{value:'"scan-focus"'},{value:'"scan"'},{value:'"search"'},{value:'"security-alert"'},{value:'"security-cross"'},{value:'"security-key"'},{value:'"security-search"'},{value:'"security-slash"'},{value:'"security-tick"'},{value:'"security-time"'},{value:'"security-user"'},{value:'"security"'},{value:'"send"'},{value:'"sentiment-dissatisfied"'},{value:'"sentiment-neutral"'},{value:'"sentiment-satisfied"'},{value:'"sentiment-very-satisfied"'},{value:'"setting-filled"'},{value:'"setting"'},{value:'"share"'},{value:'"shield-lock"'},{value:'"shopping-bag"'},{value:'"shopping-cart"'},{value:'"sidepanel"'},{value:'"signal-cellular"'},{value:'"slash"'},{value:'"sms"'},{value:'"snaps-mobile"'},{value:'"snaps-plus"'},{value:'"snaps-round"'},{value:'"snaps"'},{value:'"sort-by-alpha"'},{value:'"sort"'},{value:'"sparkle"'},{value:'"speed"'},{value:'"speedometer"'},{value:'"square"'},{value:'"stake"'},{value:'"star-filled"'},{value:'"star"'},{value:'"start"'},{value:'"storefront"'},{value:'"student"'},{value:'"swap-horizontal"'},{value:'"swap-vertical"'},{value:'"tab-close"'},{value:'"table-row"'},{value:'"tablet"'},{value:'"tag"'},{value:'"thumb-down-filled"'},{value:'"thumb-down"'},{value:'"thumb-up-filled"'},{value:'"thumb-up"'},{value:'"tint"'},{value:'"tooltip"'},{value:'"translate"'},{value:'"trash"'},{value:'"trend-down"'},{value:'"trend-up"'},{value:'"triangle-up"'},{value:'"triangle-down"'},{value:'"undo"'},{value:'"unfold"'},{value:'"unlocked-filled"'},{value:'"unpin"'},{value:'"upload-file"'},{value:'"upload"'},{value:'"usb"'},{value:'"user-check"'},{value:'"user-circle-add"'},{value:'"user-circle-remove"'},{value:'"user-circle"'},{value:'"user"'},{value:'"verified-filled"'},{value:'"verified"'},{value:'"videocam"'},{value:'"view-column"'},{value:'"view-in-ar"'},{value:'"volume-off"'},{value:'"volume-up"'},{value:'"wallet-filled"'},{value:'"wallet"'},{value:'"warning"'},{value:'"web-traffic"'},{value:'"widgets"'},{value:'"wifi-off"'},{value:'"wifi"'},{value:'"x"'}]}},size:{defaultValue:{value:"IconSize.Md"},description:`The size of the Icon.
Possible values could be IconSize.Xs (12px), IconSize.Sm (16px), IconSize.Md (20px), IconSize.Lg (24px), IconSize.Xl (32px), IconSize.Inherit (inherits font-size).
Default value is IconSize.Md (20px).`,name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"inherit"'}]}},color:{defaultValue:{value:"IconColor.inherit"},description:`The color of the icon.
Defaults to IconColor.inherit.`,name:"color",required:!1,type:{name:"enum",value:[{value:'"icon-default"'},{value:'"icon-alternative"'},{value:'"icon-muted"'},{value:'"icon-inverse"'},{value:'"overlay-inverse"'},{value:'"primary-default"'},{value:'"primary-inverse"'},{value:'"error-default"'},{value:'"error-inverse"'},{value:'"success-default"'},{value:'"success-inverse"'},{value:'"warning-default"'},{value:'"warning-inverse"'},{value:'"info-default"'},{value:'"info-inverse"'},{value:'"inherit"'},{value:'"goerli"'},{value:'"sepolia"'},{value:'"linea-goerli"'},{value:'"linea-goerli-inverse"'},{value:'"linea-sepolia"'},{value:'"linea-sepolia-inverse"'},{value:'"linea-mainnet"'},{value:'"linea-mainnet-inverse"'},{value:'"goerli-inverse"'},{value:'"sepolia-inverse"'},{value:'"transparent"'}]}},className:{defaultValue:{value:""},description:"An additional className to apply to the icon.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Addition style properties to apply to the icon.
The Icon component uses inline styles to apply the icon's mask-image so be wary of overriding`,name:"style",required:!1,type:{name:"CSSProperties"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Accepts responsive props in the form of an array.`,name:"backgroundColor",required:!1,type:{name:"BackgroundColor | BackgroundColorArray"}},"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
TypeScript is complaining about data- attributes which means we need to explicitly define this as a prop.
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}},as:{defaultValue:null,description:`An override of the default HTML tag.
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/icon/icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"ui/components/component-library/icon/icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/icon/icon.types.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>IconName1,l:()=>IconSize1});var IconSize,IconName,IconSize1=((IconSize={}).Xs="xs",IconSize.Sm="sm",IconSize.Md="md",IconSize.Lg="lg",IconSize.Xl="xl",IconSize.Inherit="inherit",IconSize),IconName1=((IconName={}).Accessibility="accessibility",IconName.Activity="activity",IconName.AddCard="add-card",IconName.AddCircle="add-circle",IconName.AddSquare="add-square",IconName.Add="add",IconName.Ai="ai",IconName.AlternateEmail="alternate-email",IconName.Apple="apple",IconName.Apps="apps",IconName.Arrow2Down="arrow-2-down",IconName.Arrow2Left="arrow-2-left",IconName.Arrow2Right="arrow-2-right",IconName.Arrow2UpRight="arrow-2-up-right",IconName.Arrow2Up="arrow-2-up",IconName.ArrowCircleDown="arrow-circle-down",IconName.ArrowCircleUp="arrow-circle-up",IconName.ArrowDoubleLeft="arrow-double-left",IconName.ArrowDoubleRight="arrow-double-right",IconName.ArrowDown="arrow-down",IconName.ArrowDropDownCircle="arrow-drop-down-circle",IconName.ArrowLeft="arrow-left",IconName.ArrowRight="arrow-right",IconName.ArrowUp="arrow-up",IconName.Attachment="attachment",IconName.Ban="ban",IconName.BankAssured="bank-assured",IconName.Bank="bank",IconName.Bold="bold",IconName.Book="book",IconName.Bookmark="bookmark",IconName.Bridge="bridge",IconName.Briefcase="briefcase",IconName.Bulb="bulb",IconName.BuySell="buy-sell",IconName.Cake="cake",IconName.Calculator="calculator",IconName.Calendar="calendar",IconName.Call="call",IconName.Camera="camera",IconName.Campaign="campaign",IconName.CardPos="card-pos",IconName.Card="card",IconName.Cash="cash",IconName.Category="category",IconName.Chart="chart",IconName.CheckBold="check-bold",IconName.Check="check",IconName.CircleX="circle-x",IconName.ClockFilled="clock-filled",IconName.Clock="clock",IconName.Close="close",IconName.CloudDownload="cloud-download",IconName.CloudUpload="cloud-upload",IconName.Cloud="cloud",IconName.CodeCircle="code-circle",IconName.Code="code",IconName.Coin="coin",IconName.Collapse="collapse",IconName.Confirmation="confirmation",IconName.Connect="connect",IconName.CopySuccess="copy-success",IconName.Copy="copy",IconName.CreditCheck="credit-check",IconName.CurrencyFranc="currency-franc",IconName.CurrencyLira="currency-lira",IconName.CurrencyPound="currency-pound",IconName.CurrencyYuan="currency-yuan",IconName.Customize="customize",IconName.Danger="danger",IconName.DarkFilled="dark-filled",IconName.Dark="dark",IconName.Data="data",IconName.Description="description",IconName.Details="details",IconName.Diagram="diagram",IconName.DocumentCode="document-code",IconName.Dollar="dollar",IconName.Download="download",IconName.Draft="draft",IconName.EcoLeaf="eco-leaf",IconName.EditSquare="edit-square",IconName.Edit="edit",IconName.EncryptedAdd="encrypted-add",IconName.Eraser="eraser",IconName.Error="error",IconName.Ethereum="ethereum",IconName.Exchange="exchange",IconName.ExpandVertical="expand-vertical",IconName.Expand="expand",IconName.ExploreFilled="explore-filled",IconName.Explore="explore",IconName.Export="export",IconName.Extension="extension",IconName.EyeSlash="eye-slash",IconName.Eye="eye",IconName.FaceId="face-id",IconName.Feedback="feedback",IconName.File="file",IconName.Filter="filter",IconName.Fingerprint="fingerprint",IconName.Fire="fire",IconName.FirstPage="first-page",IconName.Flag="flag",IconName.FlashSlash="flash-slash",IconName.Flash="flash",IconName.Flask="flask",IconName.Flower="flower",IconName.Folder="folder",IconName.Forest="forest",IconName.FullCircle="full-circle",IconName.Gas="gas",IconName.Gift="gift",IconName.GlobalSearch="global-search",IconName.Global="global",IconName.Graph="graph",IconName.Hardware="hardware",IconName.HashTag="hash-tag",IconName.HeartFilled="heart-filled",IconName.Heart="heart",IconName.Hierarchy="hierarchy",IconName.HomeFilled="home-filled",IconName.Home="home",IconName.Image="image",IconName.Info="info",IconName.Inventory="inventory",IconName.Joystick="joystick",IconName.KeepFilled="keep-filled",IconName.Keep="keep",IconName.Key="key",IconName.LastPage="last-page",IconName.LightFilled="light-filled",IconName.Light="light",IconName.Link="link",IconName.Loading="loading",IconName.Location="location",IconName.LockSlash="lock-slash",IconName.Lock="lock",IconName.LockedFilled="locked-filled",IconName.Login="login",IconName.Logout="logout",IconName.Mail="mail",IconName.Map="map",IconName.Menu="menu",IconName.MessageQuestion="message-question",IconName.Messages="messages",IconName.Mic="mic",IconName.MinusBold="minus-bold",IconName.MinusSquare="minus-square",IconName.Minus="minus",IconName.Mobile="mobile",IconName.MoneyBag="money-bag",IconName.Money="money",IconName.Monitor="monitor",IconName.MoreHorizontal="more-horizontal",IconName.MoreVertical="more-vertical",IconName.MountainFlag="mountain-flag",IconName.MusicNote="music-note",IconName.Notification="notification",IconName.PageInfo="page-info",IconName.Palette="palette",IconName.PasswordCheck="password-check",IconName.Pending="pending",IconName.People="people",IconName.PersonCancel="person-cancel",IconName.Pin="pin",IconName.Plant="plant",IconName.Plug="plug",IconName.PlusAndMinus="plus-and-minus",IconName.PolicyAlert="policy-alert",IconName.Popup="popup",IconName.Print="print",IconName.PriorityHigh="priority-high",IconName.PrivacyTip="privacy-tip",IconName.ProgrammingArrows="programming-arrows",IconName.Publish="publish",IconName.QrCode="qr-code",IconName.Question="question",IconName.Receive="receive",IconName.Received="received",IconName.Refresh="refresh",IconName.RemoveMinus="remove-minus",IconName.Report="report",IconName.Rocket="rocket",IconName.SaveFilled="save-filled",IconName.Save="save",IconName.Saving="saving",IconName.ScanBarcode="scan-barcode",IconName.ScanFocus="scan-focus",IconName.Scan="scan",IconName.Search="search",IconName.SecurityAlert="security-alert",IconName.SecurityCross="security-cross",IconName.SecurityKey="security-key",IconName.SecuritySearch="security-search",IconName.SecuritySlash="security-slash",IconName.SecurityTick="security-tick",IconName.SecurityTime="security-time",IconName.SecurityUser="security-user",IconName.Security="security",IconName.Send="send",IconName.SentimentDissatisfied="sentiment-dissatisfied",IconName.SentimentNeutral="sentiment-neutral",IconName.SentimentSatisfied="sentiment-satisfied",IconName.SentimentVerySatisfied="sentiment-very-satisfied",IconName.SettingFilled="setting-filled",IconName.Setting="setting",IconName.Share="share",IconName.ShieldLock="shield-lock",IconName.ShoppingBag="shopping-bag",IconName.ShoppingCart="shopping-cart",IconName.Sidepanel="sidepanel",IconName.SignalCellular="signal-cellular",IconName.Slash="slash",IconName.Sms="sms",IconName.SnapsMobile="snaps-mobile",IconName.SnapsPlus="snaps-plus",IconName.SnapsRound="snaps-round",IconName.Snaps="snaps",IconName.SortByAlpha="sort-by-alpha",IconName.Sort="sort",IconName.Sparkle="sparkle",IconName.Speed="speed",IconName.Speedometer="speedometer",IconName.Square="square",IconName.Stake="stake",IconName.StarFilled="star-filled",IconName.Star="star",IconName.Start="start",IconName.Storefront="storefront",IconName.Student="student",IconName.SwapHorizontal="swap-horizontal",IconName.SwapVertical="swap-vertical",IconName.TabClose="tab-close",IconName.TableRow="table-row",IconName.Tablet="tablet",IconName.Tag="tag",IconName.ThumbDownFilled="thumb-down-filled",IconName.ThumbDown="thumb-down",IconName.ThumbUpFilled="thumb-up-filled",IconName.ThumbUp="thumb-up",IconName.Tint="tint",IconName.Tooltip="tooltip",IconName.Translate="translate",IconName.Trash="trash",IconName.TrendDown="trend-down",IconName.TrendUp="trend-up",IconName.TriangleUp="triangle-up",IconName.TriangleDown="triangle-down",IconName.Undo="undo",IconName.Unfold="unfold",IconName.UnlockedFilled="unlocked-filled",IconName.Unpin="unpin",IconName.UploadFile="upload-file",IconName.Upload="upload",IconName.Usb="usb",IconName.UserCheck="user-check",IconName.UserCircleAdd="user-circle-add",IconName.UserCircleRemove="user-circle-remove",IconName.UserCircle="user-circle",IconName.User="user",IconName.VerifiedFilled="verified-filled",IconName.Verified="verified",IconName.Videocam="videocam",IconName.ViewColumn="view-column",IconName.ViewInAr="view-in-ar",IconName.VolumeOff="volume-off",IconName.VolumeUp="volume-up",IconName.WalletFilled="wallet-filled",IconName.Wallet="wallet",IconName.Warning="warning",IconName.WebTraffic="web-traffic",IconName.Widgets="widgets",IconName.WifiOff="wifi-off",IconName.Wifi="wifi",IconName.X="x",IconName)},"./ui/components/component-library/icon/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$M:()=>_icon_types__WEBPACK_IMPORTED_MODULE_1__.$,In:()=>_icon__WEBPACK_IMPORTED_MODULE_0__.I,lK:()=>_icon_types__WEBPACK_IMPORTED_MODULE_1__.l});var _icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/icon/icon.tsx"),_icon_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/component-library/icon/icon.types.ts")},"./ui/components/component-library/popover-header/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>_popover_header__WEBPACK_IMPORTED_MODULE_0__.D});var _popover_header__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/popover-header/popover-header.tsx")},"./ui/components/component-library/popover-header/popover-header.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>PopoverHeader});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/text/index.ts"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/hooks/useI18nContext.js"),_header_base__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/component-library/header-base/index.ts"),_button_icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/components/component-library/button-icon/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ui/components/component-library/icon/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var PopoverHeader=function(_param){var children=_param.children,_param_className=_param.className,startAccessory=_param.startAccessory,endAccessory=_param.endAccessory,onClose=_param.onClose,closeButtonProps=_param.closeButtonProps,onBack=_param.onBack,backButtonProps=_param.backButtonProps,props=_object_without_properties(_param,["children","className","startAccessory","endAccessory","onClose","closeButtonProps","onBack","backButtonProps"]),t=(0,_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_4__.P)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_header_base__WEBPACK_IMPORTED_MODULE_5__.H,_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-popover-header",void 0===_param_className?"":_param_className),startAccessory:startAccessory||onBack&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_icon__WEBPACK_IMPORTED_MODULE_6__.a,_object_spread({iconName:_icon__WEBPACK_IMPORTED_MODULE_7__.$M.ArrowLeft,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Li.inherit,ariaLabel:t("back"),size:_button_icon__WEBPACK_IMPORTED_MODULE_6__.f.Sm,onClick:onBack},backButtonProps)),endAccessory:endAccessory||onClose&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_icon__WEBPACK_IMPORTED_MODULE_6__.a,_object_spread({iconName:_icon__WEBPACK_IMPORTED_MODULE_7__.$M.Close,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Li.inherit,ariaLabel:t("close"),size:_button_icon__WEBPACK_IMPORTED_MODULE_6__.f.Sm,onClick:onClose},closeButtonProps))},props),"string"==typeof children?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text__WEBPACK_IMPORTED_MODULE_2__.EY,{variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.J3.headingSm,textAlign:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.nO.Center,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.r7.inherit},children):children)};try{PopoverHeader.displayName="PopoverHeader",PopoverHeader.__docgenInfo={description:"",displayName:"PopoverHeader",props:{children:{defaultValue:null,description:"The contents within the PopoverHeader positioned middle (popular for title use case)",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional classNames to be added to the PopoverHeader component",name:"className",required:!1,type:{name:"string"}},onBack:{defaultValue:null,description:`The onClick handler for the back \`ButtonIcon\`
When passed this will allow for the back \`ButtonIcon\` to show`,name:"onBack",required:!1,type:{name:"(() => void)"}},backButtonProps:{defaultValue:null,description:"The props to pass to the back `ButtonIcon`",name:"backButtonProps",required:!1,type:{name:'ButtonIconProps<"button">'}},startAccessory:{defaultValue:null,description:`The start (left) content area of PopoverHeader
Default to have the back \`ButtonIcon\` when \`onBack\` is passed, but passing a  \`startAccessory\` will override this`,name:"startAccessory",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:`The onClick handler for the close \`ButtonIcon\`
When passed this will allow for the close \`ButtonIcon\` to show`,name:"onClose",required:!1,type:{name:"(() => void)"}},closeButtonProps:{defaultValue:null,description:"The props to pass to the close `ButtonIcon`",name:"closeButtonProps",required:!1,type:{name:'ButtonIconProps<"button">'}},endAccessory:{defaultValue:null,description:`The end (right) content area of PopoverHeader
Default to have the close \`ButtonIcon\` when \`onClose\` is passed, but passing a  \`endAccessory\` will override this`,name:"endAccessory",required:!1,type:{name:"ReactNode"}},childrenWrapperProps:{defaultValue:null,description:"Use the `childrenWrapperProps` prop to define the props to the children wrapper",name:"childrenWrapperProps",required:!1,type:{name:'BoxProps<"div">'}},startAccessoryWrapperProps:{defaultValue:null,description:"Use the `startAccessoryWrapperProps` prop to define the props to the start accessory wrapper",name:"startAccessoryWrapperProps",required:!1,type:{name:'BoxProps<"div">'}},endAccessoryWrapperProps:{defaultValue:null,description:"Use the `endAccessoryWrapperProps` prop to define the props to the end accessory wrapper",name:"endAccessoryWrapperProps",required:!1,type:{name:'BoxProps<"div">'}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/popover-header/popover-header.tsx#PopoverHeader"]={docgenInfo:PopoverHeader.__docgenInfo,name:"PopoverHeader",path:"ui/components/component-library/popover-header/popover-header.tsx#PopoverHeader"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/popover/popover.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,DefaultStory:()=>DefaultStory,Flip:()=>Flip,HasArrow:()=>HasArrow,IsOpen:()=>IsOpen,IsPortal:()=>IsPortal,MatchWidth:()=>MatchWidth,MouseEventDemo:()=>MouseEventDemo,Offset:()=>Offset,OnClickOutside:()=>OnClickOutside,OnFocusBlur:()=>OnFocusBlur,OnPressEscKey:()=>OnPressEscKey,Position:()=>Position,PreventOverflow:()=>PreventOverflow,ReferenceElement:()=>ReferenceElement,ReferenceHidden:()=>ReferenceHidden,Role:()=>Role,WithPopoverHeader:()=>WithPopoverHeader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>popover_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),popover=__webpack_require__("./ui/components/component-library/popover/popover.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",code:"code",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"popover",children:"Popover"}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Popover is an overlay that appears by the trigger used for menus, additional contents, and contains at least one focusable element."}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-popover--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:popover.A}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"reference-element",children:"Reference Element"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"referenceElement"})," prop is required and used to position the popover relative to the reference element."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { useState } from 'react';
import { BackgroundColor } from '../../../helpers/constants/design-system'
import { Popover, Box } from '../../component-library';

const [referenceElement, setReferenceElement] = useState();

const setBoxRef = (ref) => {
setReferenceElement(ref);
};

<Box
  ref={setBoxRef}
  backgroundColor={BackgroundColor.primaryDefault}
  style={{ width: 200, height: 200 }}
/>
<Popover referenceElement={referenceElement}>Reference element</Popover>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Popover accepts any children and has a default padding of ",(0,jsx_runtime.jsx)(_components.code,{children:"4"})," (16px)."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  Popover,
  Text,
  Icon,
  IconSize,
  IconName,
} from '../../component-library';

<Popover>
  <Text>
    Demo of popover with children.
    <Icon size={IconSize.Inherit} name={IconName.Info} />
  </Text>
</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"position",children:"Position"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"position"})," prop with the ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverPosition"})," enum to set the position of the popover relative to the reference element."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Default is ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverPosition.Auto"})]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover, PopoverPosition } from '../../component-library';

<Popover position={PopoverPosition.Auto}>Auto</Popover>
<Popover position={PopoverPosition.AutoStart}>AutoStart</Popover>
<Popover position={PopoverPosition.AutoEnd}>AutoEnd</Popover>
<Popover position={PopoverPosition.Top}>Top</Popover>
<Popover position={PopoverPosition.TopStart}>TopStart</Popover>
<Popover position={PopoverPosition.TopEnd}>TopEnd</Popover>
<Popover position={PopoverPosition.Right}>Right</Popover>
<Popover position={PopoverPosition.RightStart}>RightStart</Popover>
<Popover position={PopoverPosition.RightEnd}>RightEnd</Popover>
<Popover position={PopoverPosition.Bottom}>Bottom</Popover>
<Popover position={PopoverPosition.BottomStart}>BottomStart</Popover>
<Popover position={PopoverPosition.BottomEnd}>BottomEnd</Popover>
<Popover position={PopoverPosition.Left}>Left</Popover>
<Popover position={PopoverPosition.LeftStart}>LeftStart</Popover>
<Popover position={PopoverPosition.LeftEnd}>LeftEnd</Popover>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"is-portal",children:"Is Portal"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"isPortal"}),` prop is a boolean that when set to true, causes the Popover to be rendered as a separate DOM element at the end of the document body.
Default `,(0,jsx_runtime.jsx)(_components.code,{children:"false"})]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover isPortal={true}>Popover using create portal</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"has-arrow",children:"Has Arrow"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"hasArrow"})," boolean to add an arrow to the popover."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover hasArrow>Popover with arrow</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"is-open",children:"Is Open"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isOpen"})," boolean to control the visibility of the popover."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover isOpen={true}>Popover with arrow</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"flip",children:"Flip"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"flip"}),` boolean to flip the popover to the opposite side of the reference element if there is not enough space.
For `,(0,jsx_runtime.jsx)(_components.code,{children:"PopoverPosition.Auto"})," this will become true."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover flip={true}>Flip demo</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"prevent-overflow",children:"Prevent Overflow"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"preventOverflow"}),` boolean to prevent the popover from overflowing the viewport.
For `,(0,jsx_runtime.jsx)(_components.code,{children:"PopoverPosition.Auto"})," this will become true."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover preventOverflow={true}>Prevent overflow demo</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"reference-hidden",children:"Reference Hidden"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"referenceHidden"})," boolean to hide the Popover when the reference element is no longer visible in the viewport."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover referenceHidden={true}>Reference hidden demo</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"match-width",children:"Match Width"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"matchWidth"})," boolean to match the width of the popover to the reference element."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover matchWidth={true}>Match width demo</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"role",children:"Role"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"role"})," prop with ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverRole"}),` enum to set the role of the popover.
`,(0,jsx_runtime.jsx)(_components.code,{children:"PopoverRole.Dialog"})," if the content is interactive, or ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverRole.Tooltip"})," for purely informational popovers."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Default: ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverRole.Tooltip"})]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover, PopoverRole } from '../../component-library';

<Popover role={PopoverRole.Tooltip}>PopoverRole.Tooltip</Popover>;
<Popover role={PopoverRole.Dialog}>PopoverRole.Dialog</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"offset",children:"Offset"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"offset"}),` prop to pass an array of two numbers to offset the popover from the reference element.
Default is `,(0,jsx_runtime.jsx)(_components.code,{children:"[0, 8]"}),`
First number controls the skidding offset and the second number controls the distance offset.`]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover offset={[0, 32]}>offset override to [0,32]</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"on-press-esc-key",children:"On Press Esc Key"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"onPressEscKey"})," is a callback function that is invoked when the 'Escape' key is pressed within the ",(0,jsx_runtime.jsx)(_components.code,{children:"Popover"})," component"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen(!isOpen);
};

<Popover onPressEscKey={() => setIsOpen(false)}>
  Press esc key to close
</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"onclickoutside",children:"onClickOutside"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"onClickOutside"})," is a callback function that is invoked when the user clicks outside of the ",(0,jsx_runtime.jsx)(_components.code,{children:"Popover"})," component"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen(!isOpen);
};

<Popover onClickOutside={() => setIsOpen(false)}>
  Press esc key to close
</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"with-popoverheader",children:"With PopoverHeader"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Using the ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverHeader"})," component to add a header to the ",(0,jsx_runtime.jsx)(_components.code,{children:"Popover"})," component. The ",(0,jsx_runtime.jsx)(_components.code,{children:"PopoverHeader"})," is used to show common elements such as title, back button, and close button."]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

<Popover>
  <PopoverHeader
    onClose={() => console.log('close')}
    onBack={() => console.log('back')}
  >
    Popover Title
  </PopoverHeader>
  Title should be short and concise. It should be sentence case and no period.
</Popover>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"mouse-event-demo",children:"Mouse Event Demo"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Not built into the ",(0,jsx_runtime.jsx)(_components.code,{children:"Popover"})," component, but a demo of ",(0,jsx_runtime.jsx)(_components.code,{children:"onMouseEnter"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"onMouseLeave"})," events on the reference element to control the visibility of the popover"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

const [isOpen, setIsOpen] = useState(false);

const handleMouseEnter = () => {
  setIsOpen(true);
};

const handleMouseLeave = () => {
  setIsOpen(false);
};

<>
  <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    Hover
  </Box>
  <Popover isOpen={isOpen}>onMouseEnter and onMouseLeave</Popover>
</>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"on-focusblur-demo",children:"On Focus/Blur Demo"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Not built into the ",(0,jsx_runtime.jsx)(_components.code,{children:"Popover"})," component, but a demo of ",(0,jsx_runtime.jsx)(_components.code,{children:"onFocus"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"onBlur"})," events on the reference element to control the visibility of the popover"]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Popover } from '../../component-library';

const [isOpen, setIsOpen] = useState(false);

// Example of how open popover with focus and pair with onBlur to close popover
const handleFocus = () => {
  setIsOpen(true);
};

const handleClose = () => {
  setIsOpen(false);
};

<>
  <Box onFocus={handleFocus} onBlur={handleClose} as="button">
    Focus to open
  </Box>
  <Popover>onFocus to open and onBlur to close</Popover>
</>;
`})})]})}var component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),popover_types=__webpack_require__("./ui/components/component-library/popover/popover.types.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),popover_header=__webpack_require__("./ui/components/component-library/popover-header/index.ts"),icon=__webpack_require__("./ui/components/component-library/icon/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let popover_stories={title:"Components/ComponentLibrary/Popover",component:popover.A,tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{children:{control:"text"},position:{options:popover_types.$,control:"select"},role:{options:popover_types.c,control:"select"},className:{control:"text"}},args:{children:"Popover"}};var DefaultStory=(function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!0),2),isOpen=_useState1[0],setIsOpen=_useState1[1],handleKeyDown=function(e){"Escape"===e.key&&setIsOpen(!1)};return(0,react.useEffect)(function(){isOpen?document.addEventListener("keydown",handleKeyDown):document.removeEventListener("keydown",handleKeyDown)},[isOpen]),react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},onClick:function(){setIsOpen(!isOpen)},backgroundColor:design_system.i0.primaryAlternative,style:{width:200,height:200},color:design_system.r7.primaryInverse,as:"button"},"Click to toggle popover"),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,isOpen:isOpen},args)))}).bind({});DefaultStory.storyName="Default",DefaultStory.args={position:popover_types.$.BottomStart,children:"Popover demo without PopoverHeader",isPortal:!1,hasArrow:!0};var ReferenceElement=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryDefault,style:{width:200,height:200}}),react.createElement(popover.A,_object_spread({position:popover_types.$.Bottom,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"Reference Element")))},Children=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryDefault,style:{width:200,height:200}}),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"Demo of popover with children."," ",react.createElement(icon.In,{size:icon.lK.Inherit,name:icon.$M.Info}))))},Position=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(),2),referenceAutoElement=_useState1[0],setReferenceAutoElement=_useState1[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{style:{width:"90vw",minWidth:"650px",height:"90vh",minHeight:"400px"},borderColor:design_system.cG.borderDefault,display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,marginBottom:4},react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:400,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,textAlign:design_system.nO.Center},"Position"),react.createElement(popover.A,_object_spread({position:popover_types.$.TopStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.TopStart),react.createElement(popover.A,_object_spread({position:popover_types.$.Top,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.Top),react.createElement(popover.A,_object_spread({position:popover_types.$.TopEnd,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.TopEnd),react.createElement(popover.A,_object_spread({position:popover_types.$.RightStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.RightStart),react.createElement(popover.A,_object_spread({position:popover_types.$.Right,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.Right),react.createElement(popover.A,_object_spread({position:popover_types.$.RightEnd,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.RightEnd),react.createElement(popover.A,_object_spread({position:popover_types.$.BottomStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.BottomStart),react.createElement(popover.A,_object_spread({position:popover_types.$.Bottom,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.Bottom),react.createElement(popover.A,_object_spread({position:popover_types.$.BottomEnd,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.BottomEnd),react.createElement(popover.A,_object_spread({position:popover_types.$.LeftStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.LeftStart),react.createElement(popover.A,_object_spread({position:popover_types.$.Left,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.Left),react.createElement(popover.A,_object_spread({position:popover_types.$.LeftEnd,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),popover_types.$.LeftEnd)),react.createElement(box.a,{style:{width:"90vw",minWidth:"650px",height:"90vh",minHeight:"400px",overflow:"scroll"},borderColor:design_system.cG.borderDefault},react.createElement(box.a,{style:{width:"200vw",height:"200vh"},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center},react.createElement(box.a,{ref:function(ref){setReferenceAutoElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:400,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,textAlign:design_system.nO.Center},"Position"),react.createElement(popover.A,_object_spread({position:popover_types.$.Auto,referenceElement:referenceAutoElement,isOpen:!0,hasArrow:!0},args),popover_types.$.Auto))))},IsPortal=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryDefault,style:{width:200,height:200}}),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,position:popover_types.$.RightEnd,isOpen:!0,isPortal:!0,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"Inspect to view the popover in the DOM (isPortal true)")),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,position:popover_types.$.RightStart,isOpen:!0,isPortal:!1,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"Inspect to view the popover in the DOM (isPortal false)")))},HasArrow=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryDefault,style:{width:200,height:200}}),react.createElement(popover.A,_object_spread({position:popover_types.$.RightStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"Popover with arrow")),react.createElement(popover.A,_object_spread({position:popover_types.$.RightEnd,referenceElement:referenceElement,isOpen:!0},args),react.createElement(component_library_text.EY,null,"Popover with no arrow")))},IsOpen=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!0),2),isOpen=_useState1[0],setIsOpen=_useState1[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:200,height:200},onClick:function(){setIsOpen(!isOpen)},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center},"Click to toggle popover"),react.createElement(popover.A,_object_spread({position:popover_types.$.RightStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"isOpen always true")),react.createElement(popover.A,_object_spread({position:popover_types.$.RightEnd,referenceElement:referenceElement,hasArrow:!0,isOpen:isOpen},args),react.createElement(component_library_text.EY,null,"isOpen tied to boolean")))},Flip=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(box.a,{style:{height:"200vh"},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center},react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:200,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center},"Scroll to see popover flip"),react.createElement(popover.A,_object_spread({position:popover_types.$.TopStart,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),"false"),react.createElement(popover.A,_object_spread({position:popover_types.$.TopEnd,referenceElement:referenceElement,hasArrow:!0,flip:!0,isOpen:!0},args),"true"))},PreventOverflow=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(box.a,{style:{height:"200vh",width:"100vw"},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center},react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:200,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,textAlign:design_system.nO.Center},"Scroll to see popover preventOverflow"),react.createElement(popover.A,_object_spread({position:popover_types.$.Left,referenceElement:referenceElement,isOpen:!0,hasArrow:!0},args),"false"),react.createElement(popover.A,_object_spread({position:popover_types.$.Right,referenceElement:referenceElement,hasArrow:!0,preventOverflow:!0,isOpen:!0},args),"true"))},ReferenceHidden=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(box.a,{style:{height:"200vh",width:"100vw"},display:design_system.nl.Flex,justifyContent:design_system.A9.center},react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:200,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,textAlign:design_system.nO.Center},"Scroll to see popover referenceHidden"),react.createElement(popover.A,_object_spread({position:popover_types.$.BottomStart,referenceElement:referenceElement,isOpen:!0,referenceHidden:!1,hasArrow:!0},args),react.createElement(component_library_text.EY,null,"false")),react.createElement(popover.A,_object_spread({position:popover_types.$.BottomEnd,referenceElement:referenceElement,hasArrow:!0,isOpen:!0},args),react.createElement(component_library_text.EY,null,"true")))},MatchWidth=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryDefault,style:{width:200,height:200}}),react.createElement(popover.A,_object_spread({position:popover_types.$.Bottom,referenceElement:referenceElement,isOpen:!0,matchWidth:!0},args),react.createElement(component_library_text.EY,null,"Setting matchWidth to true will make the popover match the width of the reference element")))},Role=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(box.a,{style:{height:"100vh",width:"100vw"},display:design_system.nl.Flex,justifyContent:design_system.A9.center},react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:200,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,textAlign:design_system.nO.Center},"Inspect to view role"),react.createElement(popover.A,_object_spread({position:popover_types.$.Left,role:popover_types.c.Dialog,referenceElement:referenceElement,isOpen:!0},args),react.createElement(component_library_text.EY,null,popover_types.c.Dialog)),react.createElement(popover.A,_object_spread({position:popover_types.$.Right,role:popover_types.c.Tooltip,referenceElement:referenceElement,isOpen:!0},args),react.createElement(component_library_text.EY,null,popover_types.c.Tooltip)))},Offset=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1];return react.createElement(box.a,{style:{height:"200vh",width:"100vw"},display:design_system.nl.Flex,justifyContent:design_system.A9.center},react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},backgroundColor:design_system.i0.primaryMuted,style:{width:200,height:200},display:design_system.nl.Flex,justifyContent:design_system.A9.center,alignItems:design_system.k2.center,textAlign:design_system.nO.Center},"Offset Demo"),react.createElement(popover.A,_object_spread({position:popover_types.$.Left,referenceElement:referenceElement,isOpen:!0},args),react.createElement(component_library_text.EY,null,"offset default")),react.createElement(popover.A,_object_spread({position:popover_types.$.Right,referenceElement:referenceElement,isOpen:!0,offset:[0,32]},args),react.createElement(component_library_text.EY,null,"offset override to [0,32]")))},OnPressEscKey=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState1[0],setIsOpen=_useState1[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},onClick:function(){setIsOpen(!isOpen)},backgroundColor:design_system.i0.primaryAlternative,style:{width:200,height:200},color:design_system.r7.primaryInverse,as:"button"},"Click to open"),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,onPressEscKey:function(){return setIsOpen(!1)},isOpen:isOpen},args),"Press esc key to close"))},OnClickOutside=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState1[0],setIsOpen=_useState1[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},onClick:function(){setIsOpen(!isOpen)},backgroundColor:design_system.i0.primaryAlternative,style:{width:200,height:200},color:design_system.r7.primaryInverse,as:"button"},"Click to open"),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,onClickOutside:function(){setIsOpen(!1)},isOpen:isOpen},args),"Click outside to close"))};OnClickOutside.storyName="onClickOutside";var WithPopoverHeader=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),refTitleElement=_useState[0],setRefTitleElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!0),2),isOpen=_useState1[0],setIsOpen=_useState1[1],handleClick=function(){setIsOpen(!isOpen)};return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setRefTitleElement(ref)},backgroundColor:design_system.i0.primaryDefault,style:{width:200,height:200},onClick:handleClick}),react.createElement(popover.A,_object_spread({referenceElement:refTitleElement,isOpen:isOpen,hasArrow:!0},args),react.createElement(popover_header.D,{onClose:handleClick,onBack:function(){return console.log("back")},color:design_system.Q1.inherit,marginBottom:4},"Popover Title"),"Title should be short and concise. It should be sentence case and no period."))},MouseEventDemo=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState1[0],setIsOpen=_useState1[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},onMouseEnter:function(){setIsOpen(!0)},onMouseLeave:function(){setIsOpen(!1)},backgroundColor:design_system.i0.primaryAlternative,style:{width:200,height:200},color:design_system.r7.primaryInverse},"Hover"),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,isOpen:isOpen},args),"onMouseEnter and onMouseLeave"))},OnFocusBlur=function(args){var _useState=_sliced_to_array((0,react.useState)(),2),referenceElement=_useState[0],setReferenceElement=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState1[0],setIsOpen=_useState1[1];return react.createElement(react.Fragment,null,react.createElement(box.a,{ref:function(ref){setReferenceElement(ref)},onFocus:function(){setIsOpen(!0)},onBlur:function(){setIsOpen(!1)},backgroundColor:design_system.i0.primaryAlternative,style:{width:200,height:200},color:design_system.r7.primaryInverse,as:"button"},"Focus to open"),react.createElement(popover.A,_object_spread({referenceElement:referenceElement,isOpen:isOpen},args),"onFocus to open and onBlur to close"))};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  // Example of how to use keyboard events to close popover with escape key
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  // Example of how to use ref to open popover
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <>
      <Box ref={setBoxRef} onClick={handleClick} backgroundColor={BackgroundColor.primaryAlternative} style={{
      width: 200,
      height: 200
    }} color={TextColor.primaryInverse} as="button">
        Click to toggle popover
      </Box>
      <Popover referenceElement={referenceElement} isOpen={isOpen} {...args} />
    </>;
}`,...DefaultStory.parameters?.docs?.source}}},ReferenceElement.parameters={...ReferenceElement.parameters,docs:{...ReferenceElement.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryDefault} style={{
      width: 200,
      height: 200
    }} />
      <Popover position={PopoverPosition.Bottom} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
        <Text>Reference Element</Text>
      </Popover>
    </>;
}`,...ReferenceElement.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryDefault} style={{
      width: 200,
      height: 200
    }} />
      <Popover referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
        <Text>
          Demo of popover with children.{' '}
          <Icon size={IconSize.Inherit} name={IconName.Info} />
        </Text>
      </Popover>
    </>;
}`,...Children.parameters?.docs?.source}}},Position.parameters={...Position.parameters,docs:{...Position.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [referenceAutoElement, setReferenceAutoElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  const setRefAuto = ref => {
    setReferenceAutoElement(ref);
  };
  return <>
      <Box style={{
      width: '90vw',
      minWidth: '650px',
      height: '90vh',
      minHeight: '400px'
    }} borderColor={BorderColor.borderDefault} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} marginBottom={4}>
        <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
        width: 400,
        height: 200
      }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} textAlign={TextAlign.Center}>
          Position
        </Box>
        <Popover position={PopoverPosition.TopStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.TopStart}
        </Popover>
        <Popover position={PopoverPosition.Top} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.Top}
        </Popover>
        <Popover position={PopoverPosition.TopEnd} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.TopEnd}
        </Popover>
        <Popover position={PopoverPosition.RightStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.RightStart}
        </Popover>
        <Popover position={PopoverPosition.Right} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.Right}
        </Popover>
        <Popover position={PopoverPosition.RightEnd} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.RightEnd}
        </Popover>
        <Popover position={PopoverPosition.BottomStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.BottomStart}
        </Popover>
        <Popover position={PopoverPosition.Bottom} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.Bottom}
        </Popover>
        <Popover position={PopoverPosition.BottomEnd} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.BottomEnd}
        </Popover>
        <Popover position={PopoverPosition.LeftStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.LeftStart}
        </Popover>
        <Popover position={PopoverPosition.Left} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.Left}
        </Popover>
        <Popover position={PopoverPosition.LeftEnd} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
          {PopoverPosition.LeftEnd}
        </Popover>
      </Box>
      <Box style={{
      width: '90vw',
      minWidth: '650px',
      height: '90vh',
      minHeight: '400px',
      overflow: 'scroll'
    }} borderColor={BorderColor.borderDefault}>
        <Box style={{
        width: '200vw',
        height: '200vh'
      }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
          <Box ref={setRefAuto} backgroundColor={BackgroundColor.primaryMuted} style={{
          width: 400,
          height: 200
        }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} textAlign={TextAlign.Center}>
            Position
          </Box>
          <Popover position={PopoverPosition.Auto} referenceElement={referenceAutoElement} isOpen={true} hasArrow {...args}>
            {PopoverPosition.Auto}
          </Popover>
        </Box>
      </Box>
    </>;
}`,...Position.parameters?.docs?.source}}},IsPortal.parameters={...IsPortal.parameters,docs:{...IsPortal.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryDefault} style={{
      width: 200,
      height: 200
    }} />
      <Popover referenceElement={referenceElement} position={PopoverPosition.RightEnd} isOpen={true} isPortal={true} hasArrow {...args}>
        <Text>Inspect to view the popover in the DOM (isPortal true)</Text>
      </Popover>
      <Popover referenceElement={referenceElement} position={PopoverPosition.RightStart} isOpen={true} isPortal={false} hasArrow {...args}>
        <Text>Inspect to view the popover in the DOM (isPortal false)</Text>
      </Popover>
    </>;
}`,...IsPortal.parameters?.docs?.source}}},HasArrow.parameters={...HasArrow.parameters,docs:{...HasArrow.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryDefault} style={{
      width: 200,
      height: 200
    }} />
      <Popover position={PopoverPosition.RightStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
        <Text>Popover with arrow</Text>
      </Popover>
      <Popover position={PopoverPosition.RightEnd} referenceElement={referenceElement} isOpen={true} {...args}>
        <Text>Popover with no arrow</Text>
      </Popover>
    </>;
}`,...HasArrow.parameters?.docs?.source}}},IsOpen.parameters={...IsOpen.parameters,docs:{...IsOpen.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
      width: 200,
      height: 200
    }} onClick={handleClick} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
        Click to toggle popover
      </Box>

      <Popover position={PopoverPosition.RightStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
        <Text>isOpen always true</Text>
      </Popover>

      <Popover position={PopoverPosition.RightEnd} referenceElement={referenceElement} hasArrow isOpen={isOpen} {...args}>
        <Text>isOpen tied to boolean</Text>
      </Popover>
    </>;
}`,...IsOpen.parameters?.docs?.source}}},Flip.parameters={...Flip.parameters,docs:{...Flip.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <Box style={{
    height: '200vh'
  }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
      width: 200,
      height: 200
    }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
        Scroll to see popover flip
      </Box>
      <Popover position={PopoverPosition.TopStart} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
        false
      </Popover>
      <Popover position={PopoverPosition.TopEnd} referenceElement={referenceElement} hasArrow flip isOpen={true} {...args}>
        true
      </Popover>
    </Box>;
}`,...Flip.parameters?.docs?.source}}},PreventOverflow.parameters={...PreventOverflow.parameters,docs:{...PreventOverflow.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <Box style={{
    height: '200vh',
    width: '100vw'
  }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center}>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
      width: 200,
      height: 200
    }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} textAlign={TextAlign.Center}>
        Scroll to see popover preventOverflow
      </Box>
      <Popover position={PopoverPosition.Left} referenceElement={referenceElement} isOpen={true} hasArrow {...args}>
        false
      </Popover>
      <Popover position={PopoverPosition.Right} referenceElement={referenceElement} hasArrow preventOverflow isOpen={true} {...args}>
        true
      </Popover>
    </Box>;
}`,...PreventOverflow.parameters?.docs?.source}}},ReferenceHidden.parameters={...ReferenceHidden.parameters,docs:{...ReferenceHidden.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <Box style={{
    height: '200vh',
    width: '100vw'
  }} display={Display.Flex} justifyContent={JustifyContent.center}>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
      width: 200,
      height: 200
    }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} textAlign={TextAlign.Center}>
        Scroll to see popover referenceHidden
      </Box>
      <Popover position={PopoverPosition.BottomStart} referenceElement={referenceElement} isOpen={true} referenceHidden={false} hasArrow {...args}>
        <Text>false</Text>
      </Popover>
      <Popover position={PopoverPosition.BottomEnd} referenceElement={referenceElement} hasArrow isOpen={true} {...args}>
        <Text>true</Text>
      </Popover>
    </Box>;
}`,...ReferenceHidden.parameters?.docs?.source}}},MatchWidth.parameters={...MatchWidth.parameters,docs:{...MatchWidth.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryDefault} style={{
      width: 200,
      height: 200
    }} />
      <Popover position={PopoverPosition.Bottom} referenceElement={referenceElement} isOpen={true} matchWidth {...args}>
        <Text>
          Setting matchWidth to true will make the popover match the width of
          the reference element
        </Text>
      </Popover>
    </>;
}`,...MatchWidth.parameters?.docs?.source}}},Role.parameters={...Role.parameters,docs:{...Role.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <Box style={{
    height: '100vh',
    width: '100vw'
  }} display={Display.Flex} justifyContent={JustifyContent.center}>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
      width: 200,
      height: 200
    }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} textAlign={TextAlign.Center}>
        Inspect to view role
      </Box>
      <Popover position={PopoverPosition.Left} role={PopoverRole.Dialog} referenceElement={referenceElement} isOpen={true} {...args}>
        <Text>{PopoverRole.Dialog}</Text>
      </Popover>
      <Popover position={PopoverPosition.Right} role={PopoverRole.Tooltip} referenceElement={referenceElement} isOpen={true} {...args}>
        <Text>{PopoverRole.Tooltip}</Text>
      </Popover>
    </Box>;
}`,...Role.parameters?.docs?.source}}},Offset.parameters={...Offset.parameters,docs:{...Offset.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  return <Box style={{
    height: '200vh',
    width: '100vw'
  }} display={Display.Flex} justifyContent={JustifyContent.center}>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryMuted} style={{
      width: 200,
      height: 200
    }} display={Display.Flex} justifyContent={JustifyContent.center} alignItems={AlignItems.center} textAlign={TextAlign.Center}>
        Offset Demo
      </Box>
      <Popover position={PopoverPosition.Left} referenceElement={referenceElement} isOpen={true} {...args}>
        <Text>offset default</Text>
      </Popover>
      <Popover position={PopoverPosition.Right} referenceElement={referenceElement} isOpen={true} offset={[0, 32]} {...args}>
        <Text>offset override to [0,32]</Text>
      </Popover>
    </Box>;
}`,...Offset.parameters?.docs?.source}}},OnPressEscKey.parameters={...OnPressEscKey.parameters,docs:{...OnPressEscKey.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // Set Popover Ref
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return <>
      <Box ref={setBoxRef} onClick={handleClick} backgroundColor={BackgroundColor.primaryAlternative} style={{
      width: 200,
      height: 200
    }} color={TextColor.primaryInverse} as="button">
        Click to open
      </Box>
      <Popover referenceElement={referenceElement} onPressEscKey={() => setIsOpen(false)} isOpen={isOpen} {...args}>
        Press esc key to close
      </Popover>
    </>;
}`,...OnPressEscKey.parameters?.docs?.source}}},OnClickOutside.parameters={...OnClickOutside.parameters,docs:{...OnClickOutside.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // Set Popover Ref
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = () => {
    setIsOpen(false);
  };
  return <>
      <Box ref={setBoxRef} onClick={handleClick} backgroundColor={BackgroundColor.primaryAlternative} style={{
      width: 200,
      height: 200
    }} color={TextColor.primaryInverse} as="button">
        Click to open
      </Box>
      <Popover referenceElement={referenceElement} onClickOutside={handleClickOutside} isOpen={isOpen} {...args}>
        Click outside to close
      </Popover>
    </>;
}`,...OnClickOutside.parameters?.docs?.source}}},WithPopoverHeader.parameters={...WithPopoverHeader.parameters,docs:{...WithPopoverHeader.parameters?.docs,source:{originalSource:`args => {
  const [refTitleElement, setRefTitleElement] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const setBoxRef = ref => {
    setRefTitleElement(ref);
  };
  return <>
      <Box ref={setBoxRef} backgroundColor={BackgroundColor.primaryDefault} style={{
      width: 200,
      height: 200
    }} onClick={handleClick} />
      <Popover referenceElement={refTitleElement} isOpen={isOpen} hasArrow {...args}>
        <PopoverHeader onClose={handleClick} onBack={() => console.log('back')} color={Color.inherit} marginBottom={4}>
          Popover Title
        </PopoverHeader>
        Title should be short and concise. It should be sentence case and no
        period.
      </Popover>
    </>;
}`,...WithPopoverHeader.parameters?.docs?.source}}},MouseEventDemo.parameters={...MouseEventDemo.parameters,docs:{...MouseEventDemo.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // Set Popover Ref
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };

  // Example of how to use mouse events to open and close popover
  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return <>
      <Box ref={setBoxRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} backgroundColor={BackgroundColor.primaryAlternative} style={{
      width: 200,
      height: 200
    }} color={TextColor.primaryInverse}>
        Hover
      </Box>
      <Popover referenceElement={referenceElement} isOpen={isOpen} {...args}>
        onMouseEnter and onMouseLeave
      </Popover>
    </>;
}`,...MouseEventDemo.parameters?.docs?.source}}},OnFocusBlur.parameters={...OnFocusBlur.parameters,docs:{...OnFocusBlur.parameters?.docs,source:{originalSource:`args => {
  const [referenceElement, setReferenceElement] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // Set Popover Ref
  const setBoxRef = ref => {
    setReferenceElement(ref);
  };

  // Example of how open popover with focus and pair with onBlur to close popover
  const handleFocus = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <>
      <Box ref={setBoxRef} onFocus={handleFocus} onBlur={handleClose} backgroundColor={BackgroundColor.primaryAlternative} style={{
      width: 200,
      height: 200
    }} color={TextColor.primaryInverse} as="button">
        Focus to open
      </Box>
      <Popover referenceElement={referenceElement} isOpen={isOpen} {...args}>
        onFocus to open and onBlur to close
      </Popover>
    </>;
}`,...OnFocusBlur.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","ReferenceElement","Children","Position","IsPortal","HasArrow","IsOpen","Flip","PreventOverflow","ReferenceHidden","MatchWidth","Role","Offset","OnPressEscKey","OnClickOutside","WithPopoverHeader","MouseEventDemo","OnFocusBlur"]},"./ui/components/component-library/popover/popover.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Popover});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react_popper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_box__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/component-library/box/index.ts"),_popover_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/components/component-library/popover/popover.types.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var CAPTURE_EVENT_LISTENER_OPTIONS={capture:!0},Popover=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var children=_param.children,_param_className=_param.className,_param_position=_param.position,position=void 0===_param_position?_popover_types__WEBPACK_IMPORTED_MODULE_6__.$.Auto:_param_position,_param_role=_param.role,role=void 0===_param_role?_popover_types__WEBPACK_IMPORTED_MODULE_6__.c.Tooltip:_param_role,_param_hasArrow=_param.hasArrow,hasArrow=void 0!==_param_hasArrow&&_param_hasArrow,matchWidth=_param.matchWidth,_param_preventOverflow=_param.preventOverflow,_param_offset=_param.offset,_param_flip=_param.flip,_param_referenceHidden=_param.referenceHidden,referenceElement=_param.referenceElement,isOpen=_param.isOpen,_param_isPortal=(_param.title,_param.isPortal),arrowProps=_param.arrowProps,onClickOutside=_param.onClickOutside,onPressEscKey=_param.onPressEscKey,props=_object_without_properties(_param,["children","className","position","role","hasArrow","matchWidth","preventOverflow","offset","flip","referenceHidden","referenceElement","isOpen","title","isPortal","arrowProps","onClickOutside","onPressEscKey"]),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),popperElement=_useState[0],setPopperElement=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),arrowElement=_useState1[0],setArrowElement=_useState1[1],popoverRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),_usePopper=(0,react_popper__WEBPACK_IMPORTED_MODULE_2__.E)(referenceElement,popperElement,{placement:position,modifiers:[{name:"preventOverflow",enabled:position===_popover_types__WEBPACK_IMPORTED_MODULE_6__.$.Auto||void 0!==_param_preventOverflow&&_param_preventOverflow},{name:"flip",enabled:position===_popover_types__WEBPACK_IMPORTED_MODULE_6__.$.Auto||void 0!==_param_flip&&_param_flip},{name:"arrow",enabled:hasArrow,options:{element:arrowElement}},{name:"offset",options:{offset:void 0===_param_offset?[0,8]:_param_offset}}]}),styles=_usePopper.styles,attributes=_usePopper.attributes,contentStyle={width:matchWidth?null==referenceElement?void 0:referenceElement.clientWidth:"auto"};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(isOpen&&(onPressEscKey||onClickOutside)){var handleEscKey=function(event){"Escape"===event.key&&(null==onPressEscKey||onPressEscKey())},handleClickOutside=function(event){!popoverRef.current||popoverRef.current.contains(event.target)||(null==referenceElement?void 0:referenceElement.contains(event.target))||null==onClickOutside||onClickOutside()};return onPressEscKey&&document.addEventListener("keydown",handleEscKey,CAPTURE_EVENT_LISTENER_OPTIONS),onClickOutside&&document.addEventListener("click",handleClickOutside,CAPTURE_EVENT_LISTENER_OPTIONS),function(){onPressEscKey&&document.removeEventListener("keydown",handleEscKey,CAPTURE_EVENT_LISTENER_OPTIONS),onClickOutside&&document.removeEventListener("click",handleClickOutside,CAPTURE_EVENT_LISTENER_OPTIONS)}}},[onPressEscKey,isOpen,onClickOutside,referenceElement]);var PopoverContent=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_5__.a,_object_spread_props(_object_spread({borderColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.cG.borderMuted,borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.Z6.LG,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.i0.backgroundDefault,padding:4,role:role,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.A)("mm-popover",{"mm-popover--open":!!isOpen,"mm-popover--reference-hidden":!!(void 0===_param_referenceHidden||_param_referenceHidden)},void 0===_param_className?"":_param_className),ref:function(element){ref&&("function"==typeof ref?ref(element):ref.current=element),setPopperElement(element),popoverRef.current=element}},attributes.popper,props),{style:_object_spread({},styles.popper,contentStyle,props.style)}),children,hasArrow&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_5__.a,_object_spread({borderColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.cG.borderMuted,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.A)("mm-popover__arrow"),ref:setArrowElement,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.nl.Flex,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.A9.center,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_4__.k2.center,style:styles.arrow},attributes.arrow,arrowProps)));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,void 0!==_param_isPortal&&_param_isPortal?isOpen&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(PopoverContent,document.body):isOpen&&PopoverContent)});try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{children:{defaultValue:null,description:"The contents within the Popover",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional classNames to be added to the Popover component",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:{value:"PopoverPosition.Auto"},description:"The position of the Popover. Possible values could be  PopoverPosition.Auto, PopoverPosition.AutoStart, PopoverPosition.AutoEnd, PopoverPosition.Top, PopoverPosition.TopStart, PopoverPosition.TopEnd, PopoverPosition.Right, PopoverPosition.RightStart, PopoverPosition.RightEnd, PopoverPosition.Bottom, PopoverPosition.BottomStart, PopoverPosition.BottomEnd, PopoverPosition.Left, PopoverPosition.LeftStart, PopoverPosition.LeftEnd",name:"position",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'}]}},role:{defaultValue:{value:"PopoverRole.Tooltip"},description:"Use `PopoverRole.Dialog` if the content is interactive, or `PopoverRole.Tooltip` for purely informational popovers.",name:"role",required:!1,type:{name:"enum",value:[{value:'"tooltip"'},{value:'"dialog"'}]}},hasArrow:{defaultValue:{value:"false"},description:`Boolean to show or hide the Popover arrow pointing to the reference element
Default: false`,name:"hasArrow",required:!1,type:{name:"boolean"}},arrowProps:{defaultValue:null,description:"Pass any `BoxProps` to the Popover arrow",name:"arrowProps",required:!1,type:{name:'BoxProps<"div">'}},matchWidth:{defaultValue:null,description:`Boolean to control the width of the Popover to match the width of the reference element
Default: false`,name:"matchWidth",required:!1,type:{name:"boolean"}},preventOverflow:{defaultValue:{value:"false"},description:`Boolean to control the Popover overflow from the page
When PopoverPosition.Auto this becomes true
Default: false`,name:"preventOverflow",required:!1,type:{name:"boolean"}},flip:{defaultValue:{value:"false"},description:`Boolean to allow the Popover to flip to the opposite side if there is not enough space in the current position
When PopoverPosition.Auto this becomes true
Default: false`,name:"flip",required:!1,type:{name:"boolean"}},referenceHidden:{defaultValue:{value:"true"},description:`Boolean to allow the Popover to hide fully if the reference element is hidden
Default: false`,name:"referenceHidden",required:!1,type:{name:"boolean"}},referenceElement:{defaultValue:null,description:"Reference element to position the Popover",name:"referenceElement",required:!1,type:{name:"HTMLElement | null"}},isOpen:{defaultValue:null,description:"Boolean to let the Popover know if it is open or not",name:"isOpen",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"[0, 8]"},description:`Offset to be applied to the Popover horizontal and vertical offsets in pixels
Requires an array of two numbers
default: [0, 8]`,name:"offset",required:!1,type:{name:"[number, number]"}},isPortal:{defaultValue:{value:"false"},description:"Boolean to allow the Popover to be rendered in a createPortal",name:"isPortal",required:!1,type:{name:"boolean"}},onPressEscKey:{defaultValue:null,description:"Pass a close function for the escape key callback to close the Popover",name:"onPressEscKey",required:!1,type:{name:"(() => void)"}},onClickOutside:{defaultValue:null,description:"On click outside callback to close the Popover",name:"onClickOutside",required:!1,type:{name:"(() => void)"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/popover/popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"ui/components/component-library/popover/popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/popover/popover.types.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>PopoverPosition1,c:()=>PopoverRole1});var PopoverPosition,PopoverRole,PopoverPosition1=((PopoverPosition={}).Auto="auto",PopoverPosition.Top="top",PopoverPosition.TopStart="top-start",PopoverPosition.TopEnd="top-end",PopoverPosition.Right="right",PopoverPosition.RightStart="right-start",PopoverPosition.RightEnd="right-end",PopoverPosition.Bottom="bottom",PopoverPosition.BottomStart="bottom-start",PopoverPosition.BottomEnd="bottom-end",PopoverPosition.Left="left",PopoverPosition.LeftStart="left-start",PopoverPosition.LeftEnd="left-end",PopoverPosition),PopoverRole1=((PopoverRole={}).Tooltip="tooltip",PopoverRole.Dialog="dialog",PopoverRole)},"./ui/components/component-library/text/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{jM:()=>InvisibleCharacter,EY:()=>text_text.E});var text_text=__webpack_require__("./ui/components/component-library/text/text.tsx"),InvisibleCharacter="​"},"./ui/components/component-library/text/text.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Text});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/box/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var getTextElementDefault=function(variant){switch(variant){case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.displayMd:return"h1";case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.headingLg:return"h2";case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.headingMd:return"h3";case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.headingSm:return"h4";case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.inherit:return"span";default:return"p"}},Text=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var _obj,_param_variant=_param.variant,variant=void 0===_param_variant?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.bodyMd:_param_variant,fontWeight=_param.fontWeight,fontStyle=_param.fontStyle,fontFamily=_param.fontFamily,textTransform=_param.textTransform,textAlign=_param.textAlign,textDirection=_param.textDirection,overflowWrap=_param.overflowWrap,ellipsis=_param.ellipsis,_param_className=_param.className,children=_param.children,props=_object_without_properties(_param,["variant","fontWeight","fontStyle","fontFamily","textTransform","textAlign","textDirection","overflowWrap","ellipsis","className","children"]),tag=getTextElementDefault(variant),computedClassName=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-text",void 0===_param_className?"":_param_className,"mm-text--".concat(variant),(_define_property(_obj={},"mm-text--font-weight-".concat(fontWeight),!!fontWeight),_define_property(_obj,"mm-text--font-style-".concat(fontStyle),!!fontStyle),_define_property(_obj,"mm-text--font-family-".concat(fontFamily),!!fontFamily),_define_property(_obj,"mm-text--ellipsis",!!ellipsis),_define_property(_obj,"mm-text--text-transform-".concat(textTransform),!!textTransform),_define_property(_obj,"mm-text--text-align-".concat(textAlign),!!textAlign),_define_property(_obj,"mm-text--overflow-wrap-".concat(overflowWrap),!!overflowWrap),_obj));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_3__.a,_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)(computedClassName),as:tag,dir:textDirection,ref:ref,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.r7.textDefault},props),children)});try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:{value:""},description:"Additional className to assign the Text component",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The text content of the Text component",name:"children",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"TextVariant.bodyMd"},description:`The variation of font styles including sizes and weights of the Text component
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
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text/text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"ui/components/component-library/text/text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./ui/hooks/useI18nContext.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>useI18nContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_contexts_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/contexts/i18n.js");function useI18nContext(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_i18n__WEBPACK_IMPORTED_MODULE_1__.gJ)}}}]);
//# sourceMappingURL=components-component-library-popover-popover-stories.07e3f73d.iframe.bundle.js.map