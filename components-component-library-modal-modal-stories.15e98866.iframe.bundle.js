(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[61027],{"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_inheritsLoose});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inheritsLoose(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t,o)}},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}__webpack_require__.d(__webpack_exports__,{A:()=>_setPrototypeOf})},"./node_modules/@mdx-js/react/lib/index.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{RP:()=>useMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-16.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kQ;return new Promise((resolve,reject)=>{__webpack_require__.e(21294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ov,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/clsx/dist/clsx.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/memoizerific sync recursive"(module){function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js"(__unused_webpack_module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js"(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/input/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>_input_types__WEBPACK_IMPORTED_MODULE_1__.N,p:()=>_input__WEBPACK_IMPORTED_MODULE_0__.p});var _input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/input/input.tsx"),_input_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/component-library/input/input.types.ts")},"./ui/components/component-library/input/input.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/text/index.ts"),_input_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/input/input.types.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Input=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var autoComplete=_param.autoComplete,autoFocus=_param.autoFocus,_param_className=_param.className,defaultValue=_param.defaultValue,disabled=_param.disabled,error=_param.error,id=_param.id,maxLength=_param.maxLength,name=_param.name,onBlur=_param.onBlur,onChange=_param.onChange,onFocus=_param.onFocus,placeholder=_param.placeholder,readOnly=_param.readOnly,required=_param.required,_param_type=_param.type,type=void 0===_param_type?_input_types__WEBPACK_IMPORTED_MODULE_4__.N.Text:_param_type,value=_param.value,_param_textVariant=_param.textVariant,textVariant=void 0===_param_textVariant?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.bodyMd:_param_textVariant,disableStateStyles=_param.disableStateStyles,props=_object_without_properties(_param,["autoComplete","autoFocus","className","defaultValue","disabled","error","id","maxLength","name","onBlur","onChange","onFocus","placeholder","readOnly","required","type","value","textVariant","disableStateStyles"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text__WEBPACK_IMPORTED_MODULE_3__.EY,_object_spread(_object_spread_props(_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-input",{"mm-input--disable-state-styles":!!disableStateStyles,"mm-input--disabled":!!disabled&&!!disableStateStyles},void 0===_param_className?"":_param_className)},error&&{"aria-invalid":error}),{as:"input",autoComplete:autoComplete?"on":"off",autoFocus:autoFocus,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.transparent,borderStyle:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.kD.none,defaultValue:defaultValue,disabled:disabled,id:id,margin:0,maxLength:maxLength,name:name,onBlur:onBlur,onChange:onChange,onFocus:onFocus,padding:0,placeholder:placeholder,readOnly:readOnly,ref:ref,required:required,value:value,variant:textVariant,type:type}),props))});try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{autoComplete:{defaultValue:null,description:"Autocomplete allows the browser to predict the value based on earlier typed values",name:"autoComplete",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"If `true`, the input will be focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"An additional className to apply to the input",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default input value, useful when not controlling the component.",name:"defaultValue",required:!1,type:{name:"string | number"}},disabled:{defaultValue:null,description:"If `true`, the input will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},disableStateStyles:{defaultValue:null,description:`Disables focus state by setting CSS outline: none;
!!IMPORTANT!!
If this is set to true ensure there is a proper fallback
to enable accessibility for keyboard only and vision impaired users`,name:"disableStateStyles",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"If `true`, aria-invalid will be true",name:"error",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"Max number of characters to allow",name:"maxLength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"Callback fired on blur",name:"onBlur",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"Callback fired when the value is changed.",name:"onChange",required:!1,type:{name:"(() => void)"}},onFocus:{defaultValue:null,description:"Callback fired on focus",name:"onFocus",required:!1,type:{name:"(() => void)"}},placeholder:{defaultValue:null,description:"The short hint displayed in the input before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"It prevents the user from changing the value of the field (not from interacting with the field).",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"If `true`, the input will be required. Currently no visual difference is shown.",name:"required",required:!1,type:{name:"boolean"}},textVariant:{defaultValue:{value:"TextVariant.bodyMd"},description:`Use this to override the text variant of the Text component.
Should only be used for approved custom input components
Use the TextVariant enum`,name:"textVariant",required:!1,type:{name:"enum",value:[{value:'"display-md"'},{value:'"heading-lg"'},{value:'"heading-md"'},{value:'"heading-sm"'},{value:'"body-lg-medium"'},{value:'"body-md"'},{value:'"body-md-medium"'},{value:'"body-md-bold"'},{value:'"body-sm"'},{value:'"body-sm-medium"'},{value:'"body-sm-bold"'},{value:'"body-xs"'},{value:'"body-xs-medium"'},{value:'"inherit"'}]}},type:{defaultValue:{value:"InputType.Text"},description:`Type of the input element. Can be InputType.Text, InputType.Password, InputType.Number
Defaults to InputType.Text ('text')
If you require another type add it to InputType`,name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"number"'},{value:'"password"'},{value:'"search"'}]}},value:{defaultValue:null,description:"The input value, required for a controlled component.",name:"value",required:!1,type:{name:"string | number"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/input/input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"ui/components/component-library/input/input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/input/input.types.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>InputType1});var InputType,InputType1=((InputType={}).Text="text",InputType.Number="number",InputType.Password="password",InputType.Search="search",InputType)},"./ui/components/component-library/modal-content/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>_modal_content__WEBPACK_IMPORTED_MODULE_0__.$,E:()=>_modal_content_types__WEBPACK_IMPORTED_MODULE_1__.E});var _modal_content__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/modal-content/modal-content.tsx"),_modal_content_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/component-library/modal-content/modal-content.types.ts")},"./ui/components/component-library/modal-overlay/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>_modal_overlay__WEBPACK_IMPORTED_MODULE_0__.m});var _modal_overlay__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/modal-overlay/modal-overlay.tsx")},"./ui/components/component-library/modal-overlay/modal-overlay.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>ModalOverlay});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/box/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var ModalOverlay=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var onClick=_param.onClick,_param_className=_param.className,props=_object_without_properties(_param,["onClick","className"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_3__.a,_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-modal-overlay",void 0===_param_className?"":_param_className),ref:ref,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.overlayDefault,width:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Zf.Full,height:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Zf.Full,onClick:onClick,"aria-hidden":"true"},props))});try{ModalOverlay.displayName="ModalOverlay",ModalOverlay.__docgenInfo={description:"",displayName:"ModalOverlay",props:{onClick:{defaultValue:null,description:`onClick handler for the overlay
Not necessary when used with Modal and closeOnClickOutside is true`,name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},className:{defaultValue:{value:""},description:"Additional className to add to the ModalOverlay",name:"className",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/modal-overlay/modal-overlay.tsx#ModalOverlay"]={docgenInfo:ModalOverlay.__docgenInfo,name:"ModalOverlay",path:"ui/components/component-library/modal-overlay/modal-overlay.tsx#ModalOverlay"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/modal/modal.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AutoFocus:()=>AutoFocus,DefaultStory:()=>DefaultStory,FinalFocusRef:()=>FinalFocusRef,InitialFocusRef:()=>InitialFocusRef,IsClosedOnEscapeKey:()=>IsClosedOnEscapeKey,IsClosedOnOutsideClick:()=>IsClosedOnOutsideClick,RestoreFocus:()=>RestoreFocus,Usage:()=>Usage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),modal=__webpack_require__("./ui/components/component-library/modal/modal.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"modal",children:"Modal"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," focuses the user's attention exclusively on information via a window that is overlaid on primary content. It should be used with the ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalOverlay"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalContent"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalHeader"})," components to create a complete modal."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:modal.a}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," component is a very atomic level component that is meant to be used with ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalOverlay"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalContent"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalHeader"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"When the modal opens:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:"Focus is trapped within the modal and set to the first tabbable element."}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"Content behind a modal dialog is inert, meaning that users cannot interact with it."}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isOpen"})," prop to control whether the modal is open or closed."]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"onClose"})," prop to fire a callback when the modal is closed. This is used for the ",(0,jsx_runtime.jsx)(_components.code,{children:"isClosedOnOutsideClick"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"isClosedOnEscapeKey"}),"."]}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--usage"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React, { useState, useRef } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Text, Button } from '../../component-library';

const [open, setOpen] = useState(false);

const handleOnClick = () => {
  setOpen(true);
};

const handleOnClose = () => {
  setOpen(false);
};

<Button onClick={handleOnClick}>OpenModal</Button>
<Modal
  isOpen={open}
  onClose={handleOnClose}
>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader onClose={handleOnClose} onBack={handleOnClose}>
      Modal Header
    </ModalHeader>
    <ModalBody>
      <Text>ModalBody children</Text>
    </ModalBody>
    <ModalFooter onSubmit={handleOnClose} onCancel={handleOnCancel}>
  </ModalContent>
</Modal>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"is-closed-on-outside-click",children:"Is Closed On Outside Click"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isClosedOnOutsideClick"})," prop to control whether the modal should close when the user clicks outside of the modal."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--is-closed-on-outside-click"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Modal } from '../../component-library';

<Modal isClosedOnOutsideClick={false} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"is-closed-on-escape-key",children:"Is Closed On Escape Key"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isClosedOnEscapeKey"})," prop to control whether the modal should close when the user presses the escape key."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),"."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--is-closed-on-escape-key"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Modal } from '../../component-library';

<Modal isClosedOnEscapeKey={false} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"initial-focus-ref",children:"Initial Focus Ref"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"initialFocusRef"})," to set the ",(0,jsx_runtime.jsx)(_components.code,{children:"ref"})," of the element to receive focus initially. This is useful for input elements that should receive focus when the modal opens."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--initial-focus-ref"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React, { useState, useRef } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, TextFieldSearch, Button } from '../../component-library';

// Ref to set initial focus
const inputRef = React.useRef<HTMLDivElement>(null);

const [open, setOpen] = useState(false);

const handleOnClick = () => {
  setOpen(true);
};

const handleOnClose = () => {
  setOpen(false);
};

<Button onClick={handleOnClick}>Open modal</Button>
<Modal
  isOpen={isOpen}
  onClose={handleOnClose}
  initialFocusRef={inputRef}
>
  <ModalOverlay />
  <ModalContent >
    <ModalHeader
      onClose={handleOnClose}
      onBack={handleOnClose}
      marginBottom={4}
    >
      Modal Header
    </ModalHeader>
    <TextFieldSearch
      placeholder="Search"
      inputProps={{ ref: inputRef }}
      width={BLOCK_SIZES.FULL}
    />
    <ModalBody>
      <Text>ModalBody children</Text>
    </ModalBody>
  </ModalContent>
</Modal>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"final-focus-ref",children:"Final Focus Ref"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"finalFocusRef"})," to set the ",(0,jsx_runtime.jsx)(_components.code,{children:"ref"})," of the element to receive focus when the modal closes."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--final-focus-ref"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React, { useState, useRef } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, TextFieldSearch, Button } from '../../component-library';

// Ref to set focus after modal closes
const buttonRef = React.useRef<HTMLButtonElement>(null);

const [open, setOpen] = useState(false);

const handleOnClick = () => {
  setOpen(true);
};

const handleOnClose = () => {
  setOpen(false);
};

<Button onClick={handleOnClick} marginRight={4}>
  Open modal
</Button>
<button ref={buttonRef}>Receives focus after close</button>
<Modal
  isOpen={isOpen}
  onClose={handleOnClose}
  finalFocusRef={buttonRef}
>
  <ModalOverlay />
  <ModalContent >
    <ModalHeader
      onClose={handleOnClose}
      onBack={handleOnClose}
      marginBottom={4}
    >
      Modal Header
    </ModalHeader>
    <ModalBody>
      <Text>ModalBody children</Text>
    </ModalBody>
  </ModalContent>
</Modal>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"restore-focus",children:"Restore Focus"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"restoreFocus"})," prop to restore focus to the element that triggered the ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," once it unmounts"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"false"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--restore-focus"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Modal } from '../../component-library';

<Modal restoreFocus={true} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"auto-focus",children:"Auto Focus"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["If ",(0,jsx_runtime.jsx)(_components.code,{children:"true"}),", the first focusable element within the ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," will auto-focused once ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," mounts. Depending on the content of ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," this is usually the back or close button in the ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalHeader"}),"."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modal--auto-focus"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { Modal } from '../../component-library';

<Modal autoFocus={false} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"accessibility",children:"Accessibility"}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"keyboard-and-focus-management",children:"Keyboard and Focus Management"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsx)(_components.li,{children:"When the modal opens, focus is trapped within it."}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["When the modal opens, focus is automatically set to the first enabled element, or the element from ",(0,jsx_runtime.jsx)(_components.code,{children:"initialFocusRef"}),"."]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["When the modal closes, focus returns to the element that was focused before the modal activated, or the element from ",(0,jsx_runtime.jsx)(_components.code,{children:"finalFocusRef"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"Clicking on the overlay closes the Modal."}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"Pressing ESC closes the Modal."}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"Scrolling is blocked on the elements behind the modal."}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:"The modal is rendered in a portal attached to the end of document.body to break it out of the source order and make it easy to add aria-hidden to its siblings."}),`
`]}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"aria",children:"ARIA"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalContent"}),' has aria-modal="true" and role="dialog"']}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalOverlay"}),' has aria-hidden="true"']}),`
`]})]})}var design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),button_link=__webpack_require__("./ui/components/component-library/button-link/index.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),component_library_button=__webpack_require__("./ui/components/component-library/button/index.ts"),icon=__webpack_require__("./ui/components/component-library/icon/index.ts"),modal_overlay=__webpack_require__("./ui/components/component-library/modal-overlay/index.ts"),modal_content=__webpack_require__("./ui/components/component-library/modal-content/index.ts"),modal_header=__webpack_require__("./ui/components/component-library/modal-header/index.ts"),modal_body=__webpack_require__("./ui/components/component-library/modal-body/index.ts"),modal_footer=__webpack_require__("./ui/components/component-library/modal-footer/index.ts"),text_field_search=__webpack_require__("./ui/components/component-library/text-field-search/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let modal_stories={title:"Components/ComponentLibrary/Modal",component:modal.a,tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{isOpen:{control:"boolean"},onClose:{action:"onClose"},children:{control:"node"},className:{control:"string"},isClosedOnOutsideClick:{control:"boolean"},isClosedOnEscapeKey:{control:"boolean"},initialFocusRef:{control:"object"},finalFocusRef:{control:"object"},restoreFocus:{control:"boolean"},autoFocus:{control:"boolean"}},args:{children:react.createElement(component_library_text.EY,null,"ModalBody children")}};var LoremIpsum=function(props){return react.createElement(component_library_text.EY,_object_spread({marginBottom:8},props),"Lorem ipsum dolor sit amet, conse"," ",react.createElement(button_link.v,{size:button_link.w.Inherit},"random focusable button")," ","ctetur adipiscing elit. Phasellus posuere nunc enim, quis efficitur dolor tempus viverra. Vivamus pharetra tempor pulvinar. Sed at dui in nisi fermentum volutpat. Proin ut tortor quis eros tincidunt molestie. Suspendisse dictum ex vitae metus consequat, et efficitur dolor luctus. Integer ultricies hendrerit turpis sed faucibus. Nam pellentesque metus a turpis sollicitudin vehicula. Phasellus rutrum luctus pulvinar. Phasellus quis accumsan urna. Praesent justo erat, bibendum ac volutpat ac, placerat in dui. Cras gravida mi et risus feugiat vulputate. Integer vulputate diam eu vehicula euismod. In laoreet quis eros sed tincidunt. Pellentesque purus dui, luctus id sem sit amet, varius congue dui")},Template=function(args){var _useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!0),2),showLoremIpsum=_useState1[0],setShowLoremIpsum=_useState1[1],_useState2=_sliced_to_array((0,react.useState)(!0),2),showMoreModalContent=_useState2[0],setShowMoreModalContent=_useState2[1],handleOnClose=function(){setIsOpen(!1)};return react.createElement(box.a,{width:design_system.Zf.Full,style:{maxWidth:"700px"}},react.createElement(box.a,{display:design_system.nl.Flex,gap:4},react.createElement(component_library_button.$n,{onClick:function(){setIsOpen(!0)}},"Open modal"),react.createElement(button_link.v,{endIconName:showLoremIpsum?icon.$M.Arrow2Up:icon.$M.Arrow2Down,onClick:function(){setShowLoremIpsum(!showLoremIpsum)}},showLoremIpsum?"Hide":"Show"," scrollable content")),react.createElement(modal.a,_object_spread_props(_object_spread({},args),{isOpen:isOpen,onClose:handleOnClose}),react.createElement(modal_overlay.m,null),react.createElement(modal_content.$,null,react.createElement(modal_header.r,{onClose:handleOnClose},"Modal Header"),react.createElement(modal_body.c,null,args.children,react.createElement(component_library_text.EY,null,"Show more content to check scrolling"),react.createElement(button_link.v,{endIconName:showLoremIpsum?icon.$M.Arrow2Up:icon.$M.Arrow2Down,onClick:function(){setShowMoreModalContent(!showMoreModalContent)},size:button_link.w.Inherit,marginBottom:2},showMoreModalContent?"Hide":"Show more"),showMoreModalContent&&react.createElement(react.Fragment,null,react.createElement(LoremIpsum,{marginTop:8}),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null))),react.createElement(modal_footer.j,{onSubmit:handleOnClose,onCancel:handleOnClose}))),showLoremIpsum&&react.createElement(react.Fragment,null,react.createElement(LoremIpsum,{marginTop:8}),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null)))},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var Usage=Template.bind({}),IsClosedOnOutsideClick=Template.bind({});IsClosedOnOutsideClick.args={isClosedOnOutsideClick:!1,children:react.createElement(component_library_text.EY,{paddingTop:4},"This Modal has set isClosedOnOutsideClick: false. Clicking outside this Modal ",react.createElement("strong",null,"WILL NOT")," close it")};var IsClosedOnEscapeKey=Template.bind({});IsClosedOnEscapeKey.args={isClosedOnEscapeKey:!1,children:react.createElement(component_library_text.EY,{paddingTop:4},"This Modal has set isClosedOnEscapeKey: false. Pressing the ESC key"," ",react.createElement("strong",null,"WILL NOT")," close it")};var InitialFocusRef=function(args){var inputRef=react.useRef(null),_useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],handleOnClose=function(){setIsOpen(!1)};return react.createElement(react.Fragment,null,react.createElement(component_library_button.$n,{onClick:function(){setIsOpen(!0)}},"Open modal"),react.createElement(modal.a,_object_spread_props(_object_spread({},args),{isOpen:isOpen,onClose:handleOnClose,initialFocusRef:inputRef}),react.createElement(modal_overlay.m,null),react.createElement(modal_content.$,null,react.createElement(modal_header.r,{onClose:handleOnClose,onBack:handleOnClose,marginBottom:4},"Modal Header"),react.createElement(text_field_search.m,{placeholder:"Search",inputProps:{ref:inputRef},width:design_system.Zf.Full}),react.createElement(modal_body.c,null,args.children))))};InitialFocusRef.args={children:react.createElement(component_library_text.EY,{paddingTop:4},"This Modal has set initialFocusRef to the TextFieldSearch component. When the Modal opens, the TextFieldSearch component will be focused.")};var FinalFocusRef=function(args){var buttonRef=react.useRef(null),_useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1],handleOnClose=function(){setIsOpen(!1)};return react.createElement(react.Fragment,null,react.createElement(component_library_button.$n,{onClick:function(){setIsOpen(!0)},marginRight:4},"Open modal"),react.createElement("button",{ref:buttonRef},"Receives focus after close"),react.createElement(modal.a,_object_spread_props(_object_spread({},args),{isOpen:isOpen,onClose:handleOnClose,finalFocusRef:buttonRef}),react.createElement(modal_overlay.m,null),react.createElement(modal_content.$,null,react.createElement(modal_header.r,{onClose:handleOnClose,onBack:handleOnClose,marginBottom:4},"Modal Header"),react.createElement(modal_body.c,null,react.createElement(component_library_text.EY,null,args.children)))))};FinalFocusRef.args={children:react.createElement(component_library_text.EY,{paddingTop:4},"This Modal has set finalFocusRef to the second button element. When the Modal closes, the second button component will be focused. Use keyboard navigation to see it clearly.")};var RestoreFocus=Template.bind({});RestoreFocus.args={restoreFocus:!0,children:react.createElement(component_library_text.EY,{paddingTop:4},"This Modal has set restoreFocus: true. When the Modal closes, the Button component will be focused. Use keyboard navigation to see it clearly.")};var AutoFocus=Template.bind({});AutoFocus.args={autoFocus:!1,children:react.createElement(component_library_text.EY,{paddingTop:4},"This Modal has set autoFocus: false. When the Modal opens the first element to focus ",react.createElement("strong",null,"WILL NOT")," be the first focusable element in the Modal.")},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(true);
  const [showMoreModalContent, setShowMoreModalContent] = useState(true);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleHideLoremIpsum = () => {
    setShowLoremIpsum(!showLoremIpsum);
  };
  const handleMoreContent = () => {
    setShowMoreModalContent(!showMoreModalContent);
  };
  return <Box width={BlockSize.Full} style={{
    maxWidth: '700px'
  }}>
      <Box display={Display.Flex} gap={4}>
        <Button onClick={handleOnClick}>Open modal</Button>
        <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleHideLoremIpsum}>
          {showLoremIpsum ? 'Hide' : 'Show'} scrollable content
        </ButtonLink>
      </Box>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose}>Modal Header</ModalHeader>
          <ModalBody>
            {args.children}
            <Text>Show more content to check scrolling</Text>
            <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleMoreContent} size={ButtonLinkSize.Inherit} marginBottom={2}>
              {showMoreModalContent ? 'Hide' : 'Show more'}
            </ButtonLink>
            {showMoreModalContent && <>
                <LoremIpsum marginTop={8} />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
              </>}
          </ModalBody>
          <ModalFooter onSubmit={handleOnClose} onCancel={handleOnClose} />
        </ModalContent>
      </Modal>
      {showLoremIpsum && <>
          <LoremIpsum marginTop={8} />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </>}
    </Box>;
}`,...DefaultStory.parameters?.docs?.source}}},Usage.parameters={...Usage.parameters,docs:{...Usage.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(true);
  const [showMoreModalContent, setShowMoreModalContent] = useState(true);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleHideLoremIpsum = () => {
    setShowLoremIpsum(!showLoremIpsum);
  };
  const handleMoreContent = () => {
    setShowMoreModalContent(!showMoreModalContent);
  };
  return <Box width={BlockSize.Full} style={{
    maxWidth: '700px'
  }}>
      <Box display={Display.Flex} gap={4}>
        <Button onClick={handleOnClick}>Open modal</Button>
        <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleHideLoremIpsum}>
          {showLoremIpsum ? 'Hide' : 'Show'} scrollable content
        </ButtonLink>
      </Box>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose}>Modal Header</ModalHeader>
          <ModalBody>
            {args.children}
            <Text>Show more content to check scrolling</Text>
            <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleMoreContent} size={ButtonLinkSize.Inherit} marginBottom={2}>
              {showMoreModalContent ? 'Hide' : 'Show more'}
            </ButtonLink>
            {showMoreModalContent && <>
                <LoremIpsum marginTop={8} />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
              </>}
          </ModalBody>
          <ModalFooter onSubmit={handleOnClose} onCancel={handleOnClose} />
        </ModalContent>
      </Modal>
      {showLoremIpsum && <>
          <LoremIpsum marginTop={8} />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </>}
    </Box>;
}`,...Usage.parameters?.docs?.source}}},IsClosedOnOutsideClick.parameters={...IsClosedOnOutsideClick.parameters,docs:{...IsClosedOnOutsideClick.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(true);
  const [showMoreModalContent, setShowMoreModalContent] = useState(true);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleHideLoremIpsum = () => {
    setShowLoremIpsum(!showLoremIpsum);
  };
  const handleMoreContent = () => {
    setShowMoreModalContent(!showMoreModalContent);
  };
  return <Box width={BlockSize.Full} style={{
    maxWidth: '700px'
  }}>
      <Box display={Display.Flex} gap={4}>
        <Button onClick={handleOnClick}>Open modal</Button>
        <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleHideLoremIpsum}>
          {showLoremIpsum ? 'Hide' : 'Show'} scrollable content
        </ButtonLink>
      </Box>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose}>Modal Header</ModalHeader>
          <ModalBody>
            {args.children}
            <Text>Show more content to check scrolling</Text>
            <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleMoreContent} size={ButtonLinkSize.Inherit} marginBottom={2}>
              {showMoreModalContent ? 'Hide' : 'Show more'}
            </ButtonLink>
            {showMoreModalContent && <>
                <LoremIpsum marginTop={8} />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
              </>}
          </ModalBody>
          <ModalFooter onSubmit={handleOnClose} onCancel={handleOnClose} />
        </ModalContent>
      </Modal>
      {showLoremIpsum && <>
          <LoremIpsum marginTop={8} />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </>}
    </Box>;
}`,...IsClosedOnOutsideClick.parameters?.docs?.source}}},IsClosedOnEscapeKey.parameters={...IsClosedOnEscapeKey.parameters,docs:{...IsClosedOnEscapeKey.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(true);
  const [showMoreModalContent, setShowMoreModalContent] = useState(true);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleHideLoremIpsum = () => {
    setShowLoremIpsum(!showLoremIpsum);
  };
  const handleMoreContent = () => {
    setShowMoreModalContent(!showMoreModalContent);
  };
  return <Box width={BlockSize.Full} style={{
    maxWidth: '700px'
  }}>
      <Box display={Display.Flex} gap={4}>
        <Button onClick={handleOnClick}>Open modal</Button>
        <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleHideLoremIpsum}>
          {showLoremIpsum ? 'Hide' : 'Show'} scrollable content
        </ButtonLink>
      </Box>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose}>Modal Header</ModalHeader>
          <ModalBody>
            {args.children}
            <Text>Show more content to check scrolling</Text>
            <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleMoreContent} size={ButtonLinkSize.Inherit} marginBottom={2}>
              {showMoreModalContent ? 'Hide' : 'Show more'}
            </ButtonLink>
            {showMoreModalContent && <>
                <LoremIpsum marginTop={8} />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
              </>}
          </ModalBody>
          <ModalFooter onSubmit={handleOnClose} onCancel={handleOnClose} />
        </ModalContent>
      </Modal>
      {showLoremIpsum && <>
          <LoremIpsum marginTop={8} />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </>}
    </Box>;
}`,...IsClosedOnEscapeKey.parameters?.docs?.source}}},InitialFocusRef.parameters={...InitialFocusRef.parameters,docs:{...InitialFocusRef.parameters?.docs,source:{originalSource:`args => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button onClick={handleOnClick}>Open modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose} initialFocusRef={inputRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose} onBack={handleOnClose} marginBottom={4}>
            Modal Header
          </ModalHeader>
          <TextFieldSearch placeholder="Search" inputProps={{
          ref: inputRef
        }} width={BlockSize.Full} />
          <ModalBody>{args.children}</ModalBody>
        </ModalContent>
      </Modal>
    </>;
}`,...InitialFocusRef.parameters?.docs?.source}}},FinalFocusRef.parameters={...FinalFocusRef.parameters,docs:{...FinalFocusRef.parameters?.docs,source:{originalSource:`args => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  return <>
      <Button onClick={handleOnClick} marginRight={4}>
        Open modal
      </Button>
      <button ref={buttonRef}>Receives focus after close</button>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose} finalFocusRef={buttonRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose} onBack={handleOnClose} marginBottom={4}>
            Modal Header
          </ModalHeader>
          <ModalBody>
            <Text>{args.children}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>;
}`,...FinalFocusRef.parameters?.docs?.source}}},RestoreFocus.parameters={...RestoreFocus.parameters,docs:{...RestoreFocus.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(true);
  const [showMoreModalContent, setShowMoreModalContent] = useState(true);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleHideLoremIpsum = () => {
    setShowLoremIpsum(!showLoremIpsum);
  };
  const handleMoreContent = () => {
    setShowMoreModalContent(!showMoreModalContent);
  };
  return <Box width={BlockSize.Full} style={{
    maxWidth: '700px'
  }}>
      <Box display={Display.Flex} gap={4}>
        <Button onClick={handleOnClick}>Open modal</Button>
        <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleHideLoremIpsum}>
          {showLoremIpsum ? 'Hide' : 'Show'} scrollable content
        </ButtonLink>
      </Box>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose}>Modal Header</ModalHeader>
          <ModalBody>
            {args.children}
            <Text>Show more content to check scrolling</Text>
            <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleMoreContent} size={ButtonLinkSize.Inherit} marginBottom={2}>
              {showMoreModalContent ? 'Hide' : 'Show more'}
            </ButtonLink>
            {showMoreModalContent && <>
                <LoremIpsum marginTop={8} />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
              </>}
          </ModalBody>
          <ModalFooter onSubmit={handleOnClose} onCancel={handleOnClose} />
        </ModalContent>
      </Modal>
      {showLoremIpsum && <>
          <LoremIpsum marginTop={8} />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </>}
    </Box>;
}`,...RestoreFocus.parameters?.docs?.source}}},AutoFocus.parameters={...AutoFocus.parameters,docs:{...AutoFocus.parameters?.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoremIpsum, setShowLoremIpsum] = useState(true);
  const [showMoreModalContent, setShowMoreModalContent] = useState(true);
  const handleOnClick = () => {
    setIsOpen(true);
  };
  const handleOnClose = () => {
    setIsOpen(false);
  };
  const handleHideLoremIpsum = () => {
    setShowLoremIpsum(!showLoremIpsum);
  };
  const handleMoreContent = () => {
    setShowMoreModalContent(!showMoreModalContent);
  };
  return <Box width={BlockSize.Full} style={{
    maxWidth: '700px'
  }}>
      <Box display={Display.Flex} gap={4}>
        <Button onClick={handleOnClick}>Open modal</Button>
        <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleHideLoremIpsum}>
          {showLoremIpsum ? 'Hide' : 'Show'} scrollable content
        </ButtonLink>
      </Box>
      <Modal {...args} isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader onClose={handleOnClose}>Modal Header</ModalHeader>
          <ModalBody>
            {args.children}
            <Text>Show more content to check scrolling</Text>
            <ButtonLink endIconName={showLoremIpsum ? IconName.Arrow2Up : IconName.Arrow2Down} onClick={handleMoreContent} size={ButtonLinkSize.Inherit} marginBottom={2}>
              {showMoreModalContent ? 'Hide' : 'Show more'}
            </ButtonLink>
            {showMoreModalContent && <>
                <LoremIpsum marginTop={8} />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
              </>}
          </ModalBody>
          <ModalFooter onSubmit={handleOnClose} onCancel={handleOnClose} />
        </ModalContent>
      </Modal>
      {showLoremIpsum && <>
          <LoremIpsum marginTop={8} />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
          <LoremIpsum />
        </>}
    </Box>;
}`,...AutoFocus.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Usage","IsClosedOnOutsideClick","IsClosedOnEscapeKey","InitialFocusRef","FinalFocusRef","RestoreFocus","AutoFocus"]},"./ui/components/component-library/text-field-search/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>text_field_search.m,z:()=>TextFieldSearchSize1});var TextFieldSearchSize,text_field_search=__webpack_require__("./ui/components/component-library/text-field-search/text-field-search.tsx"),TextFieldSearchSize1=((TextFieldSearchSize={}).Sm="sm",TextFieldSearchSize.Md="md",TextFieldSearchSize.Lg="lg",TextFieldSearchSize)},"./ui/components/component-library/text-field-search/text-field-search.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>TextFieldSearch});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/hooks/useI18nContext.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_text_field_text_field_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/text-field/text-field.types.ts"),_text_field__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/component-library/text-field/index.ts"),_button_icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/components/component-library/button-icon/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ui/components/component-library/icon/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var TextFieldSearch=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var _param_className=_param.className,_param_showClearButton=_param.showClearButton,showClearButton=void 0===_param_showClearButton||_param_showClearButton,clearButtonOnClick=_param.clearButtonOnClick,clearButtonProps=_param.clearButtonProps,endAccessory=_param.endAccessory,inputProps=_param.inputProps,value=_param.value,onChange=_param.onChange,props=_object_without_properties(_param,["className","showClearButton","clearButtonOnClick","clearButtonProps","endAccessory","inputProps","value","onChange"]),t=(0,_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_2__.P)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text_field__WEBPACK_IMPORTED_MODULE_5__.A_,_object_spread_props(_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-text-field-search",void 0===_param_className?"":_param_className),ref:ref,value:value,onChange:onChange,type:_text_field_text_field_types__WEBPACK_IMPORTED_MODULE_4__.u.Search,endAccessory:value&&showClearButton?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_button_icon__WEBPACK_IMPORTED_MODULE_6__.a,_object_spread({className:"mm-text-field__button-clear","data-testid":"text-field-search-clear-button",ariaLabel:t("clear"),iconName:_icon__WEBPACK_IMPORTED_MODULE_7__.$M.CircleX,size:_button_icon__WEBPACK_IMPORTED_MODULE_6__.f.Sm,onClick:clearButtonOnClick},clearButtonProps)),endAccessory):endAccessory,startAccessory:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon__WEBPACK_IMPORTED_MODULE_7__.In,{name:_icon__WEBPACK_IMPORTED_MODULE_7__.$M.Search,size:_icon__WEBPACK_IMPORTED_MODULE_7__.lK.Sm,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Li.iconAlternative}),inputProps:_object_spread({marginRight:6*!!showClearButton},inputProps)},props),{backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.i0.backgroundMuted,borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.Z6.pill}))});try{TextFieldSearch.displayName="TextFieldSearch",TextFieldSearch.__docgenInfo={description:"",displayName:"TextFieldSearch",props:{value:{defaultValue:null,description:"The value of the TextFieldSearch",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"The onChange handler of the TextFieldSearch",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},showClearButton:{defaultValue:{value:"true"},description:`The clear button for the TextFieldSearch.
Defaults to true`,name:"showClearButton",required:!1,type:{name:"boolean"}},clearButtonOnClick:{defaultValue:null,description:`The onClick handler for the clear button
Required unless showClearButton is false`,name:"clearButtonOnClick",required:!1,type:{name:"(() => void)"}},clearButtonProps:{defaultValue:null,description:"The props to pass to the clear button",name:"clearButtonProps",required:!1,type:{name:'MakePropsOptional<ButtonIconProps<"button">>'}},className:{defaultValue:{value:""},description:"An additional className to apply to the TextFieldSearch",name:"className",required:!1,type:{name:"string"}},endAccessory:{defaultValue:null,description:"Component to appear on the right side of the input",name:"endAccessory",required:!1,type:{name:"ReactNode"}},inputProps:{defaultValue:null,description:"Attributes applied to the `input` element.",name:"inputProps",required:!1,type:{name:'InputProps<"input">'}},size:{defaultValue:null,description:"The size of the TextFieldSearch",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"If `true`, the input will indicate an error",name:"error",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
TypeScript is complaining about data- attributes which means we need to explicitly define this as a prop.
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"If `true`, the input will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Callback fired when the TextField is clicked on",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLInputElement, MouseEvent>) => void)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}},autoFocus:{defaultValue:null,description:"If `true`, the input will be focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},testId:{defaultValue:null,description:"Data test ID for the InputComponent component",name:"testId",required:!1,type:{name:"string"}},as:{defaultValue:null,description:`An override of the default HTML tag.
Can also be a React component.`,name:"as",required:!1,type:{name:'("input" & ElementType<any>)'}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Accepts responsive props in the form of an array.`,name:"color",required:!1,type:{name:"IconColor | TextColor | TextColorArray | IconColorArray"}},onFocus:{defaultValue:null,description:"Callback fired on focus",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"Callback fired on blur",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},defaultValue:{defaultValue:null,description:"The default input value, useful when not controlling the component.",name:"defaultValue",required:!1,type:{name:"string | number"}},placeholder:{defaultValue:null,description:"The short hint displayed in the input before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"Autocomplete allows the browser to predict the value based on earlier typed values",name:"autoComplete",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"If `true`, the input will be required. Currently no visual difference is shown.",name:"required",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Max number of characters to allow",name:"maxLength",required:!1,type:{name:"number"}},readOnly:{defaultValue:null,description:"It prevents the user from changing the value of the field (not from interacting with the field).",name:"readOnly",required:!1,type:{name:"boolean"}},startAccessory:{defaultValue:null,description:"Component to appear on the left side of the input",name:"startAccessory",required:!1,type:{name:"ReactNode"}},InputComponent:{defaultValue:null,description:`The component that is rendered as the input
Defaults to the Text component`,name:"InputComponent",required:!1,type:{name:"InputComponent"}},inputRef:{defaultValue:null,description:"Use inputRef to pass a ref to the html input element.",name:"inputRef",required:!1,type:{name:"MutableRefObject<HTMLInputElement | null> | ((instance: HTMLInputElement | null) => void)"}},truncate:{defaultValue:null,description:`If true will ellipse the text of the input
Defaults to true`,name:"truncate",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text-field-search/text-field-search.tsx#TextFieldSearch"]={docgenInfo:TextFieldSearch.__docgenInfo,name:"TextFieldSearch",path:"ui/components/component-library/text-field-search/text-field-search.tsx#TextFieldSearch"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/text-field/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A_:()=>_text_field__WEBPACK_IMPORTED_MODULE_0__.A,BD:()=>_text_field_types__WEBPACK_IMPORTED_MODULE_1__.B,ux:()=>_text_field_types__WEBPACK_IMPORTED_MODULE_1__.u});var _text_field__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/text-field/text-field.tsx"),_text_field_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/component-library/text-field/text-field.types.ts")},"./ui/components/component-library/text-field/text-field.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>TextField});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/box/index.ts"),_input__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/input/index.ts"),_text_field_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/component-library/text-field/text-field.types.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var TextField=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var _inputProps_className,autoComplete=_param.autoComplete,autoFocus=_param.autoFocus,_param_className=_param.className,defaultValue=_param.defaultValue,disabled=_param.disabled,error=_param.error,id=_param.id,inputProps=_param.inputProps,inputRef=_param.inputRef,startAccessory=_param.startAccessory,endAccessory=_param.endAccessory,maxLength=_param.maxLength,name=_param.name,onBlur=_param.onBlur,onChange=_param.onChange,onClick=_param.onClick,onFocus=_param.onFocus,placeholder=_param.placeholder,readOnly=_param.readOnly,required=_param.required,_param_size=_param.size,size=void 0===_param_size?_text_field_types__WEBPACK_IMPORTED_MODULE_5__.B.Md:_param_size,testId=_param.testId,_param_type=_param.type,type=void 0===_param_type?_text_field_types__WEBPACK_IMPORTED_MODULE_5__.u.Text:_param_type,_param_truncate=_param.truncate,value=_param.value,_param_InputComponent=_param.InputComponent,InputComponent=void 0===_param_InputComponent?_input__WEBPACK_IMPORTED_MODULE_4__.p:_param_InputComponent,props=_object_without_properties(_param,["autoComplete","autoFocus","className","defaultValue","disabled","error","id","inputProps","inputRef","startAccessory","endAccessory","maxLength","name","onBlur","onChange","onClick","onFocus","placeholder","readOnly","required","size","testId","type","truncate","value","InputComponent"]),internalInputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),focused=_useState[0],setFocused=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){disabled&&setFocused(!1)},[disabled]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_3__.a,_object_spread({ref:ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-text-field","mm-text-field--size-".concat(size),{"mm-text-field--focused":focused&&!disabled,"mm-text-field--error":!!error,"mm-text-field--disabled":!!disabled,"mm-text-field--truncate":void 0===_param_truncate||_param_truncate},void 0===_param_className?"":_param_className),display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.nl.InlineFlex,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.backgroundDefault,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.k2.center,borderWidth:1,borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Z6.LG,paddingLeft:4*!!startAccessory,paddingRight:4*!!endAccessory,onClick:function(event){var current=internalInputRef.current;current&&(current.focus(),setFocused(!0)),onClick&&!disabled&&(null==onClick||onClick(event))}},props),startAccessory,react__WEBPACK_IMPORTED_MODULE_0__.createElement(InputComponent,_object_spread_props(_object_spread(_object_spread_props(_object_spread({},error&&{"aria-invalid":error}),{autoComplete:autoComplete,autoFocus:autoFocus,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.transparent,"data-testid":testId,defaultValue:defaultValue,disabled:disabled,focused:focused.toString(),id:id,margin:0,maxLength:maxLength,name:name,onBlur:function(event){setFocused(!1),null==onBlur||onBlur(event)},onChange:onChange,onFocus:function(event){setFocused(!0),null==onFocus||onFocus(event)},padding:0,paddingLeft:startAccessory?2:4,paddingRight:endAccessory?2:4,placeholder:placeholder,readOnly:readOnly,ref:function(inputElementRef){internalInputRef.current=inputElementRef,inputRef&&"current"in inputRef?inputRef.current=inputElementRef:"function"==typeof inputRef&&inputRef(inputElementRef)},required:required,value:value,type:type,disableStateStyles:!0}),inputProps),{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-text-field__input",null!=(_inputProps_className=null==inputProps?void 0:inputProps.className)?_inputProps_className:"")})),endAccessory)});try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{autoComplete:{defaultValue:null,description:"Autocomplete allows the browser to predict the value based on earlier typed values",name:"autoComplete",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"If `true`, the input will be focused during the first mount.",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"An additional className to apply to the text-field",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"The default input value, useful when not controlling the component.",name:"defaultValue",required:!1,type:{name:"string | number"}},disabled:{defaultValue:null,description:"If `true`, the input will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"If `true`, the input will indicate an error",name:"error",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The id of the `input` element.",name:"id",required:!1,type:{name:"string"}},InputComponent:{defaultValue:{value:`React.forwardRef(
  // TODO: Fix in https://github.com/MetaMask/metamask-extension/issues/31860
  // eslint-disable-next-line @typescript-eslint/naming-convention
  <C extends React.ElementType = 'input'>(
    {
      autoComplete,
      autoFocus,
      className = '',
      defaultValue,
      disabled,
      error,
      id,
      maxLength,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      readOnly,
      required,
      type = InputType.Text,
      value,
      textVariant = TextVariant.bodyMd,
      disableStateStyles,
      ...props
    }: InputProps<C>,
    ref: PolymorphicRef<C>,
  ) => (
    <Text
      className={classnames(
        'mm-input',
        {
          'mm-input--disable-state-styles': Boolean(disableStateStyles),
          'mm-input--disabled':
            Boolean(disabled) && Boolean(disableStateStyles),
        },
        className,
      )}
      {...(error && { 'aria-invalid': error })}
      as="input"
      autoComplete={autoComplete ? 'on' : 'off'}
      autoFocus={autoFocus}
      backgroundColor={BackgroundColor.transparent}
      borderStyle={BorderStyle.none}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      margin={0}
      maxLength={maxLength}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      padding={0}
      placeholder={placeholder}
      readOnly={readOnly}
      ref={ref}
      required={required}
      value={value}
      variant={textVariant}
      type={type}
      {...(props as TextProps<C>)}
    />
  ),
)`},description:`The component that is rendered as the input
Defaults to the Text component`,name:"InputComponent",required:!1,type:{name:"InputComponent"}},inputProps:{defaultValue:null,description:"Attributes applied to the `input` element.",name:"inputProps",required:!1,type:{name:'InputProps<"input">'}},startAccessory:{defaultValue:null,description:"Component to appear on the left side of the input",name:"startAccessory",required:!1,type:{name:"ReactNode"}},endAccessory:{defaultValue:null,description:"Component to appear on the right side of the input",name:"endAccessory",required:!1,type:{name:"ReactNode"}},inputRef:{defaultValue:null,description:"Use inputRef to pass a ref to the html input element.",name:"inputRef",required:!1,type:{name:"MutableRefObject<HTMLInputElement | null> | ((instance: HTMLInputElement | null) => void)"}},maxLength:{defaultValue:null,description:"Max number of characters to allow",name:"maxLength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"Name attribute of the `input` element.",name:"name",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"Callback fired on blur",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},onChange:{defaultValue:null,description:"Callback fired when the value is changed.",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},onClick:{defaultValue:null,description:"Callback fired when the TextField is clicked on",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLInputElement, MouseEvent>) => void)"}},onFocus:{defaultValue:null,description:"Callback fired on focus",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},placeholder:{defaultValue:null,description:"The short hint displayed in the input before the user enters a value.",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"It prevents the user from changing the value of the field (not from interacting with the field).",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"If `true`, the input will be required. Currently no visual difference is shown.",name:"required",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"TextFieldSize.Md"},description:`The size of the text field. Changes the height of the component
Accepts TextFieldSize.Sm(32px), TextFieldSize.Md(40px), TextFieldSize.Lg(48px)`,name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},type:{defaultValue:{value:"TextFieldType.Text"},description:`Type of the input element. Can be TextFieldType.Text, TextFieldType.Password, TextFieldType.Number
Defaults to TextFieldType.Text ('text')`,name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"number"'},{value:'"password"'},{value:'"search"'}]}},truncate:{defaultValue:{value:"true"},description:`If true will ellipse the text of the input
Defaults to true`,name:"truncate",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The input value, required for a controlled component.",name:"value",required:!1,type:{name:"string | number"}},testId:{defaultValue:null,description:"Data test ID for the InputComponent component",name:"testId",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
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
Accepts responsive props in the form of an array.`,name:"color",required:!1,type:{name:"IconColor | TextColor | TextColorArray | IconColorArray"}},as:{defaultValue:null,description:`An override of the default HTML tag.
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/text-field/text-field.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"ui/components/component-library/text-field/text-field.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/text-field/text-field.types.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>TextFieldSize1,u:()=>TextFieldType1});var TextFieldSize,TextFieldType,TextFieldSize1=((TextFieldSize={}).Sm="sm",TextFieldSize.Md="md",TextFieldSize.Lg="lg",TextFieldSize),TextFieldType1=((TextFieldType={}).Text="text",TextFieldType.Number="number",TextFieldType.Password="password",TextFieldType.Search="search",TextFieldType)}}]);
//# sourceMappingURL=components-component-library-modal-modal-stories.15e98866.iframe.bundle.js.map