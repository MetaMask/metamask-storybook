(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[59491],{"./node_modules/@mdx-js/react/lib/index.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{RP:()=>useMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/memoizerific sync recursive"(module){function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./ui/components/component-library/avatar-base/avatar-base.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>AvatarBase});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/text/index.ts"),_avatar_base_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/avatar-base/avatar-base.types.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var AvatarBase=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var fallbackTextVariant,_param_size=_param.size,size=void 0===_param_size?_avatar_base_types__WEBPACK_IMPORTED_MODULE_4__.S.Md:_param_size,children=_param.children,_param_backgroundColor=_param.backgroundColor,backgroundColor=void 0===_param_backgroundColor?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.backgroundAlternative:_param_backgroundColor,_param_color=_param.color,color=void 0===_param_color?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.r7.textDefault:_param_color,_param_className=_param.className,props=_object_without_properties(_param,["size","children","backgroundColor","color","className"]);return fallbackTextVariant=size===_avatar_base_types__WEBPACK_IMPORTED_MODULE_4__.S.Lg||size===_avatar_base_types__WEBPACK_IMPORTED_MODULE_4__.S.Xl?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.bodyLgMedium:size===_avatar_base_types__WEBPACK_IMPORTED_MODULE_4__.S.Sm||size===_avatar_base_types__WEBPACK_IMPORTED_MODULE_4__.S.Md?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.bodySm:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.bodyXs,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text__WEBPACK_IMPORTED_MODULE_3__.EY,_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-avatar-base","mm-avatar-base--size-".concat(size),void 0===_param_className?"":_param_className),ref:ref,as:"div",display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.nl.Flex,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.A9.center,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.k2.center,borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Z6.full,variant:fallbackTextVariant,textTransform:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.Ms.Uppercase,backgroundColor:backgroundColor,color:color},props),children)});try{AvatarBase.displayName="AvatarBase",AvatarBase.__docgenInfo={description:"",displayName:"AvatarBase",props:{size:{defaultValue:{value:"AvatarBaseSize.Md"},description:`The size of the AvatarBase.
Possible values could be 'AvatarBaseSize.Xs'(16px), 'AvatarBaseSize.Sm'(24px),
'AvatarBaseSize.Md'(32px), 'AvatarBaseSize.Lg'(40px), 'AvatarBaseSize.Xl'(48px)
Defaults to AvatarBaseSize.Md`,name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},children:{defaultValue:null,description:"The children to be rendered inside the AvatarBase",name:"children",required:!1,type:{name:"ReactNode"}},backgroundColor:{defaultValue:{value:"BackgroundColor.backgroundAlternative"},description:`The background color of the AvatarBase
Defaults to Color.backgroundAlternative`,name:"backgroundColor",required:!1,type:{name:"enum",value:[{value:'"background-default"'},{value:'"background-alternative"'},{value:'"background-muted"'},{value:'"background-section"'},{value:'"background-subsection"'},{value:'"background-hover"'},{value:'"background-pressed"'},{value:'"icon-default"'},{value:'"icon-alternative"'},{value:'"icon-muted"'},{value:'"overlay-default"'},{value:'"overlay-alternative"'},{value:'"primary-default"'},{value:'"primary-alternative"'},{value:'"primary-muted"'},{value:'"error-default"'},{value:'"error-alternative"'},{value:'"error-muted"'},{value:'"warning-default"'},{value:'"warning-muted"'},{value:'"success-default"'},{value:'"success-muted"'},{value:'"info-default"'},{value:'"info-muted"'},{value:'"mainnet"'},{value:'"goerli"'},{value:'"sepolia"'},{value:'"linea-goerli"'},{value:'"linea-sepolia"'},{value:'"linea-mainnet"'},{value:'"transparent"'},{value:'"localhost"'}]}},borderColor:{defaultValue:null,description:`The background color of the AvatarBase
Defaults to Color.borderDefault`,name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"border-default"'},{value:'"border-muted"'},{value:'"primary-default"'},{value:'"primary-alternative"'},{value:'"primary-muted"'},{value:'"error-default"'},{value:'"error-alternative"'},{value:'"error-muted"'},{value:'"warning-default"'},{value:'"warning-muted"'},{value:'"success-default"'},{value:'"success-muted"'},{value:'"info-default"'},{value:'"info-muted"'},{value:'"mainnet"'},{value:'"goerli"'},{value:'"sepolia"'},{value:'"linea-goerli"'},{value:'"linea-sepolia"'},{value:'"linea-mainnet"'},{value:'"transparent"'},{value:'"localhost"'},{value:'"background-default"'}]}},color:{defaultValue:{value:"TextColor.textDefault"},description:`The color of the text inside the AvatarBase
Defaults to TextColor.textDefault`,name:"color",required:!1,type:{name:"enum",value:[{value:'"text-default"'},{value:'"text-alternative"'},{value:'"text-muted"'},{value:'"icon-default"'},{value:'"icon-alternative"'},{value:'"icon-muted"'},{value:'"icon-inverse"'},{value:'"overlay-inverse"'},{value:'"primary-default"'},{value:'"primary-inverse"'},{value:'"error-default"'},{value:'"error-alternative"'},{value:'"error-inverse"'},{value:'"success-default"'},{value:'"success-inverse"'},{value:'"warning-default"'},{value:'"warning-inverse"'},{value:'"info-default"'},{value:'"info-inverse"'},{value:'"inherit"'},{value:'"goerli"'},{value:'"sepolia"'},{value:'"linea-goerli"'},{value:'"linea-goerli-inverse"'},{value:'"linea-sepolia"'},{value:'"linea-sepolia-inverse"'},{value:'"linea-mainnet"'},{value:'"linea-mainnet-inverse"'},{value:'"goerli-inverse"'},{value:'"sepolia-inverse"'},{value:'"transparent"'}]}},className:{defaultValue:{value:""},description:"Additional classNames to be added to the AvatarBase",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:`The variation of font styles including sizes and weights of the Text component
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
Accepts responsive props in the form of an array.`,name:"paddingInlineEnd",required:!1,type:{name:"SizeNumber | SizeNumberArray"}},borderWidth:{defaultValue:null,description:`The border-width of the component.
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
Accepts responsive props in the form of an array.`,name:"height",required:!1,type:{name:"BlockSize | BlockSizeArray"}},"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
TypeScript is complaining about data- attributes which means we need to explicitly define this as a prop.
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}},as:{defaultValue:null,description:`An override of the default HTML tag.
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/avatar-base/avatar-base.tsx#AvatarBase"]={docgenInfo:AvatarBase.__docgenInfo,name:"AvatarBase",path:"ui/components/component-library/avatar-base/avatar-base.tsx#AvatarBase"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/avatar-base/avatar-base.types.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>AvatarBaseSize1});var AvatarBaseSize,AvatarBaseSize1=((AvatarBaseSize={}).Xs="xs",AvatarBaseSize.Sm="sm",AvatarBaseSize.Md="md",AvatarBaseSize.Lg="lg",AvatarBaseSize.Xl="xl",AvatarBaseSize)},"./ui/components/component-library/avatar-base/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>_avatar_base_types__WEBPACK_IMPORTED_MODULE_1__.S,d:()=>_avatar_base__WEBPACK_IMPORTED_MODULE_0__.d});var _avatar_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/avatar-base/avatar-base.tsx"),_avatar_base_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/component-library/avatar-base/avatar-base.types.ts")},"./ui/components/component-library/label/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>_label__WEBPACK_IMPORTED_MODULE_0__.J});var _label__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/label/label.tsx")},"./ui/components/component-library/label/label.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/text/index.ts"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/helpers/constants/design-system.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var htmlFor=_param.htmlFor,className=_param.className,children=_param.children,props=_object_without_properties(_param,["htmlFor","className","children"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text__WEBPACK_IMPORTED_MODULE_2__.EY,_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-label",{"mm-label--html-for":!!htmlFor},null!=className?className:""),as:"label",htmlFor:htmlFor,variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.J3.bodyMd,fontWeight:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.IT.Medium,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.nl.InlineFlex,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_3__.k2.center,ref:ref},props),children)});try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{htmlFor:{defaultValue:null,description:"The id of the input associated with the label",name:"htmlFor",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional classNames to assign to the Label component",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content of the Label component",name:"children",required:!1,type:{name:"ReactNode"}},"data-testid":{defaultValue:null,description:"Data test id",name:"data-testid",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:`The variation of font styles including sizes and weights of the Text component
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
Accepts responsive props in the form of an array.`,name:"color",required:!1,type:{name:"IconColor | TextColor | TextColorArray | IconColorArray"}},as:{defaultValue:null,description:`An override of the default HTML tag.
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/label/label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"ui/components/component-library/label/label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/popover/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$x:()=>_popover_types__WEBPACK_IMPORTED_MODULE_1__.$,AM:()=>_popover__WEBPACK_IMPORTED_MODULE_0__.A,c6:()=>_popover_types__WEBPACK_IMPORTED_MODULE_1__.c});var _popover__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/popover/popover.tsx"),_popover_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/component-library/popover/popover.types.ts")},"./ui/components/component-library/popover/popover.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Popover});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react_popper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_metamask_design_system_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/PureBlackProvider/PureBlackProvider.mjs"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_box__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/components/component-library/box/index.ts"),_popover_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ui/components/component-library/popover/popover.types.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var CAPTURE_EVENT_LISTENER_OPTIONS={capture:!0},Popover=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var children=_param.children,_param_className=_param.className,_param_position=_param.position,position=void 0===_param_position?_popover_types__WEBPACK_IMPORTED_MODULE_7__.$.Auto:_param_position,_param_role=_param.role,role=void 0===_param_role?_popover_types__WEBPACK_IMPORTED_MODULE_7__.c.Tooltip:_param_role,_param_hasArrow=_param.hasArrow,hasArrow=void 0!==_param_hasArrow&&_param_hasArrow,matchWidth=_param.matchWidth,_param_preventOverflow=_param.preventOverflow,_param_offset=_param.offset,_param_flip=_param.flip,_param_referenceHidden=_param.referenceHidden,referenceElement=_param.referenceElement,isOpen=_param.isOpen,_param_isPortal=(_param.title,_param.isPortal),arrowProps=_param.arrowProps,onClickOutside=_param.onClickOutside,onPressEscKey=_param.onPressEscKey,props=_object_without_properties(_param,["children","className","position","role","hasArrow","matchWidth","preventOverflow","offset","flip","referenceHidden","referenceElement","isOpen","title","isPortal","arrowProps","onClickOutside","onPressEscKey"]),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),popperElement=_useState[0],setPopperElement=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),arrowElement=_useState1[0],setArrowElement=_useState1[1],popoverRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),_usePopper=(0,react_popper__WEBPACK_IMPORTED_MODULE_2__.E)(referenceElement,popperElement,{placement:position,modifiers:[{name:"preventOverflow",enabled:position===_popover_types__WEBPACK_IMPORTED_MODULE_7__.$.Auto||void 0!==_param_preventOverflow&&_param_preventOverflow},{name:"flip",enabled:position===_popover_types__WEBPACK_IMPORTED_MODULE_7__.$.Auto||void 0!==_param_flip&&_param_flip},{name:"arrow",enabled:hasArrow,options:{element:arrowElement}},{name:"offset",options:{offset:void 0===_param_offset?[0,8]:_param_offset}}]}),styles=_usePopper.styles,attributes=_usePopper.attributes,contentStyle={width:matchWidth?null==referenceElement?void 0:referenceElement.clientWidth:"auto"};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(isOpen&&(onPressEscKey||onClickOutside)){var handleEscKey=function(event){"Escape"===event.key&&(null==onPressEscKey||onPressEscKey())},handleClickOutside=function(event){!popoverRef.current||popoverRef.current.contains(event.target)||(null==referenceElement?void 0:referenceElement.contains(event.target))||null==onClickOutside||onClickOutside()};return onPressEscKey&&document.addEventListener("keydown",handleEscKey,CAPTURE_EVENT_LISTENER_OPTIONS),onClickOutside&&document.addEventListener("click",handleClickOutside,CAPTURE_EVENT_LISTENER_OPTIONS),function(){onPressEscKey&&document.removeEventListener("keydown",handleEscKey,CAPTURE_EVENT_LISTENER_OPTIONS),onClickOutside&&document.removeEventListener("click",handleClickOutside,CAPTURE_EVENT_LISTENER_OPTIONS)}}},[onPressEscKey,isOpen,onClickOutside,referenceElement]);var isPureBlack=(0,_metamask_design_system_react__WEBPACK_IMPORTED_MODULE_4__.L)(),PopoverContent=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_6__.a,_object_spread_props(_object_spread({borderColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.cG.borderMuted,borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.Z6.LG,backgroundColor:isPureBlack?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.i0.backgroundAlternative:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.i0.backgroundDefault,padding:4,role:role,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.A)("mm-popover",{"mm-popover--open":!!isOpen,"mm-popover--reference-hidden":!!(void 0===_param_referenceHidden||_param_referenceHidden)},void 0===_param_className?"":_param_className),ref:function(element){ref&&("function"==typeof ref?ref(element):ref.current=element),setPopperElement(element),popoverRef.current=element}},attributes.popper,props),{style:_object_spread({},styles.popper,contentStyle,props.style)}),children,hasArrow&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_6__.a,_object_spread({borderColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.cG.borderMuted,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.A)("mm-popover__arrow"),ref:setArrowElement,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.nl.Flex,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.A9.center,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.k2.center,style:styles.arrow},attributes.arrow,arrowProps)));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,void 0!==_param_isPortal&&_param_isPortal?isOpen&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(PopoverContent,document.body):isOpen&&PopoverContent)});try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{children:{defaultValue:null,description:"The contents within the Popover",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional classNames to be added to the Popover component",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:{value:"PopoverPosition.Auto"},description:"The position of the Popover. Possible values could be  PopoverPosition.Auto, PopoverPosition.AutoStart, PopoverPosition.AutoEnd, PopoverPosition.Top, PopoverPosition.TopStart, PopoverPosition.TopEnd, PopoverPosition.Right, PopoverPosition.RightStart, PopoverPosition.RightEnd, PopoverPosition.Bottom, PopoverPosition.BottomStart, PopoverPosition.BottomEnd, PopoverPosition.Left, PopoverPosition.LeftStart, PopoverPosition.LeftEnd",name:"position",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'}]}},role:{defaultValue:{value:"PopoverRole.Tooltip"},description:"Use `PopoverRole.Dialog` if the content is interactive, or `PopoverRole.Tooltip` for purely informational popovers.",name:"role",required:!1,type:{name:"enum",value:[{value:'"tooltip"'},{value:'"dialog"'}]}},hasArrow:{defaultValue:{value:"false"},description:`Boolean to show or hide the Popover arrow pointing to the reference element
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
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/popover/popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"ui/components/component-library/popover/popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/popover/popover.types.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>PopoverPosition1,c:()=>PopoverRole1});var PopoverPosition,PopoverRole,PopoverPosition1=((PopoverPosition={}).Auto="auto",PopoverPosition.Top="top",PopoverPosition.TopStart="top-start",PopoverPosition.TopEnd="top-end",PopoverPosition.Right="right",PopoverPosition.RightStart="right-start",PopoverPosition.RightEnd="right-end",PopoverPosition.Bottom="bottom",PopoverPosition.BottomStart="bottom-start",PopoverPosition.BottomEnd="bottom-end",PopoverPosition.Left="left",PopoverPosition.LeftStart="left-start",PopoverPosition.LeftEnd="left-end",PopoverPosition),PopoverRole1=((PopoverRole={}).Tooltip="tooltip",PopoverRole.Dialog="dialog",PopoverRole)},"./ui/components/component-library/select-button/select-button.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,DefaultStory:()=>DefaultStory,DefaultValue:()=>DefaultValue,Description:()=>Description,EndAccessory:()=>EndAccessory,IsBlock:()=>IsBlock,IsDanger:()=>IsDanger,IsDisabled:()=>IsDisabled,Label:()=>Label,Placeholder:()=>Placeholder,SelectWrapperDemo:()=>SelectWrapperDemo,Size:()=>Size,StartAccessory:()=>StartAccessory,Value:()=>Value,__namedExportsOrder:()=>__namedExportsOrder,default:()=>select_button_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),select_button=__webpack_require__("./ui/components/component-library/select-button/select-button.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"selectbutton",children:"SelectButton"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The trigger for the ",(0,jsx_runtime.jsx)(_components.code,{children:"Select"})," component"]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["When using ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," you can use the supplied props or use the object prop shape recommendation below for ",(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"}),", and ",(0,jsx_runtime.jsx)(_components.code,{children:"value"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Prop Shape Recommendation Example:"}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:`{
  label: 'Label',
  description: 'Description',
  startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
  endAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
}
`})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:select_button.J}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButtonSize"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"./ui/components/component-library"})," to change the size of ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"}),". Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButtonSize.Md"})]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Please be sure to take note of the size used for the ",(0,jsx_runtime.jsx)(_components.code,{children:"startAccessory"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"endAccessory"})," components based on the design."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--size"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectButton,
  SelectButtonSize,
} from '../../component-library';

<SelectButton size={SelectButtonSize.Sm} label={SelectButtonSize.Sm} />
<SelectButton size={SelectButtonSize.Md} label={SelectButtonSize.Md} />
<SelectButton size={SelectButtonSize.Lg} label={SelectButtonSize.Lg} />
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"isblock",children:"isBlock"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isBlock"})," boolean prop to make the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component full width. Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"false"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--is-block"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SelectButton } from '../../component-library';

<SelectButton size={SelectButtonSize.Sm} isBlock={true} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"isdanger",children:"isDanger"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isDanger"})," boolean prop to make the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component danger/error. Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"false"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--is-danger"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SelectButton } from '../../component-library';

<SelectButton size={SelectButtonSize.Sm} isDanger={true} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"isdisabled",children:"isDisabled"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"isDisabled"})," boolean prop to make the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component disabled. Defaults to ",(0,jsx_runtime.jsx)(_components.code,{children:"false"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--is-disabled"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SelectButton } from '../../component-library';

<SelectButton size={SelectButtonSize.Sm} isDisabled={true} />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"label",children:"Label"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," prop to add a label to the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--label"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SelectButton } from '../../component-library';

<SelectButton size={SelectButtonSize.Sm} label="This is the label" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"description",children:"Description"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"description"})," prop to add a description to the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--description"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SelectButton } from '../../component-library';

<SelectButton description="This is a demo of description" />;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"startaccessory",children:"StartAccessory"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"startAccessory"})," prop to add a component to the start of the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--start-accessory"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectButton,
  AvatarAccount,
  AvatarAccountSize,
} from '../../component-library';

<SelectButton
  startAccessory={
    <AvatarAccount
      address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
      size={AvatarAccountSize.Sm}
    />
  }
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"endaccessory",children:"EndAccessory"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"endAccessory"})," prop to add a component to the start of the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--end-accessory"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectButton,
  AvatarAccount,
  AvatarAccountSize,
} from '../../component-library';

<SelectButton
  endAccessory={
    <AvatarAccount
      address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
      size={AvatarAccountSize.Sm}
    />
  }
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Any children passed to the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component will render in the same content area as the ",(0,jsx_runtime.jsx)(_components.code,{children:"label"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"description"}),". This does not interfere with the usage of ",(0,jsx_runtime.jsx)(_components.code,{children:"startAccessory"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"endAccessory"}),", which can still be utilized as needed."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--children"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  SelectButton,
  Text,
  TextVariant,
  TextColor,
} from '../../component-library';

<SelectButton>
  <Text variant={TextVariant.bodySm} color={TextColor.sepolia}>
    Children demo text
  </Text>
</SelectButton>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"placeholder",children:"Placeholder"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"})," prop to add a placeholder to the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"}),` component.
Recommended to use the object prop shape recommendation when using `,(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"})," so that it will align with the ",(0,jsx_runtime.jsx)(_components.code,{children:"value"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"})," prop shape recommendation."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Example Prop Shape Recommendation:"}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:`{
  label: 'Label',
  description: 'Description',
  startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
  endAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
}
`})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--placeholder"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { SelectButton } from '../../component-library';

<SelectButton placeholder="Placeholder as simple string" />
<SelectButton
  placeholder={{
    label: 'Placeholder label',
    description: 'Placeholder example using prop shape recommendation',
  }}
/>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"value",children:"Value"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"value"})," prop to add a value to the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," component."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Recommended to use the object prop shape recommendation when using ",(0,jsx_runtime.jsx)(_components.code,{children:"value"})," so that it will align with the ",(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"}),` prop shape recommendation.
Example Prop Shape Recommendation:`]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:`{
  label: 'Label',
  description: 'Description',
  startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
  endAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
}
`})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--value"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  AvatarAccount,
  AvatarAccountSize,
  SelectButton,
} from '../../component-library';

<SelectButton
  value={{
    startAccessory: (
      <AvatarAccount
        address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
        size={AvatarAccountSize.Sm}
      />
    ),
    label: 'Option 1',
    description: 'Option 1 using prop shape recommendation',
  }}
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"default-value",children:"Default Value"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"})," prop to add a default value to the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"}),` component.
Recommend using the object prop shape recommendation when using `,(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"})," so that it will align with the ",(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"value"}),` prop shape recommendation.
Example Prop Shape Recommendation:`]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:`{
  label: 'Label',
  description: 'Description',
  startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
  endAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
}
`})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--default-value"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  AvatarAccount,
  AvatarAccountSize,
  SelectButton,
} from '../../component-library';

<SelectButton
  defaultValue={{
    startAccessory: (
      <AvatarAccount
        address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
        size={AvatarAccountSize.Sm}
      />
    ),
    label: 'Option 1',
    description: 'Option 1 using prop shape recommendation',
  }}
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"use-selectwrapper",children:"Use SelectWrapper"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"SelectButton"})," is built to work as a triggerComponent for ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"})," and will work with the ",(0,jsx_runtime.jsx)(_components.code,{children:"placeholder"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"defaultValue"}),", and ",(0,jsx_runtime.jsx)(_components.code,{children:"value"})," prop shape recommendation when set at the ",(0,jsx_runtime.jsx)(_components.code,{children:"SelectWrapper"}),` level.
Example Prop Shape Recommendation:`]}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:`{
  label: 'Label',
  description: 'Description',
  startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
  endAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
}
`})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-selectbutton--use-select-wrapper"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  AvatarAccount,
  AvatarAccountSize,
  SelectButton,
  SelectWrapper,
} from '../../component-library';

<SelectWrapper
  placeholder={{
    label: 'Please select an option',
    description:
      'This demo is using SelectWrapper and utilizing the prop shape recommendation',
  }}
  triggerComponent={<SelectButton />}
>
  <SelectOption
    value={{
      startAccessory: (
        <AvatarAccount
          address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
          size={AvatarAccountSize.Sm}
        />
      ),
      label: 'Option 1',
      description: 'You have selected option 1',
    }}
  >
    Option 1
  </SelectOption>
  <SelectOption
    value={{
      startAccessory: (
        <AvatarAccount
          address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
          size={AvatarAccountSize.Sm}
        />
      ),
      label: 'Option 2',
      description: 'You have selected option 2',
    }}
  >
    Option 2
  </SelectOption>
  <SelectOption
    value={{
      startAccessory: (
        <AvatarAccount
          address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1"
          size={AvatarAccountSize.Sm}
        />
      ),
      label: 'Option 3',
      description: 'You have selected option 3',
    }}
  >
    Option 3
  </SelectOption>
</SelectWrapper>;
`})})]})}var component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),select_button_types=__webpack_require__("./ui/components/component-library/select-button/select-button.types.ts"),avatar_base=__webpack_require__("./ui/components/component-library/avatar-base/index.ts"),select_wrapper=__webpack_require__("./ui/components/component-library/select-wrapper/index.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),AvatarAccount=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/AvatarAccount/AvatarAccount.mjs"),AvatarAccount_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarAccount/AvatarAccount.types.mjs"),select_option=__webpack_require__("./ui/components/component-library/select-option/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let select_button_stories={title:"Components/ComponentLibrary/SelectButton",component:select_button.J,tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{},args:{startAccessory:react.createElement(avatar_base.d,{size:avatar_base.S.Sm}),label:"Label",description:"Lorem ipsum Lorem ipsum",endAccessory:react.createElement(avatar_base.d,{size:avatar_base.S.Sm})}};var Template=function(args){return react.createElement(select_button.J,args)},DefaultStory=Template.bind({});DefaultStory.storyName="Default";var Size=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,gap:3},react.createElement(select_button.J,_object_spread_props(_object_spread({},args),{size:select_button_types.U.Sm,label:select_button_types.U.Sm,startAccessory:react.createElement(avatar_base.d,{size:avatar_base.S.Xs}),endAccessory:react.createElement(avatar_base.d,{size:avatar_base.S.Xs})})),react.createElement(select_button.J,_object_spread_props(_object_spread({},args),{size:select_button_types.U.Md,label:select_button_types.U.Md})),react.createElement(select_button.J,_object_spread_props(_object_spread({},args),{size:select_button_types.U.Lg,label:select_button_types.U.Lg})))},IsBlock=Template.bind({});IsBlock.args={isBlock:!0},IsBlock.storyName="isBlock";var IsDanger=Template.bind({});IsDanger.args={isDanger:!0},IsDanger.storyName="isDanger";var IsDisabled=Template.bind({});IsDisabled.args={isDisabled:!0},IsDisabled.storyName="isDisabled";var Label=Template.bind({});Label.args={label:"This is the label",description:"",endAccessory:""};var Description=Template.bind({});Description.args={description:"This is a demo of description",endAccessory:""};var StartAccessory=Template.bind({});StartAccessory.args={startAccessory:react.createElement(AvatarAccount.v,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:AvatarAccount_types.o.Sm}),endAccessory:""};var EndAccessory=Template.bind({});EndAccessory.args={endAccessory:react.createElement(AvatarAccount.v,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:AvatarAccount_types.o.Sm}),startAccessory:""};var Children=Template.bind({});Children.args={description:"",startAccessory:"",endAccessory:"",children:react.createElement(component_library_text.EY,{variant:design_system.J3.bodySm,color:design_system.r7.warningDefault},"Children demo text")};var Placeholder=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,gap:3},react.createElement(select_button.J,args),react.createElement(select_button.J,_object_spread_props(_object_spread({},args),{placeholder:{label:"Placeholder label",description:"Placeholder example using prop shape recommendation"}})))};Placeholder.args={label:"",description:"",startAccessory:"",endAccessory:"",placeholder:"Placeholder as simple string"};var Value=Template.bind({});Value.args={value:{startAccessory:react.createElement(AvatarAccount.v,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:AvatarAccount_types.o.Sm}),label:"Option 1",description:"Option 1 using prop shape recommendation"},endAccessory:""};var DefaultValue=Template.bind({});DefaultValue.args={defaultValue:{startAccessory:react.createElement(AvatarAccount.v,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:AvatarAccount_types.o.Sm}),label:"Option 1",description:"Option 1 using prop shape recommendation"},endAccessory:""};var SelectWrapperDemo=function(args){return react.createElement(select_wrapper.SK,{placeholder:{label:"Please select an option",description:"This demo is using SelectWrapper and utilizing the prop shape recommendation"},triggerComponent:react.createElement(select_button.J,args)},react.createElement(select_option.O,{value:{startAccessory:react.createElement(AvatarAccount.v,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:AvatarAccount_types.o.Sm}),label:"Option 1",description:"You have selected option 1"}},"Option 1"),react.createElement(select_option.O,{value:{startAccessory:react.createElement(AvatarAccount.v,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:AvatarAccount_types.o.Sm}),label:"Option 2",description:"You have selected option 2"}},"Option 2"),react.createElement(select_option.O,{value:{startAccessory:react.createElement(AvatarAccount.v,{address:"0x5CfE73b6021E818B776b421B1c4Db2474086a7e1",size:AvatarAccount_types.o.Sm}),label:"Option 3",description:"You have selected option 3"}},"Option 3"))};SelectWrapperDemo.args={startAccessory:"",endAccessory:""},SelectWrapperDemo.storyName="Using SelectWrapper",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...DefaultStory.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:`args => {
  return <Box display={Display.Flex} gap={3}>
      <SelectButton {...args} size={SelectButtonSize.Sm} label={SelectButtonSize.Sm} startAccessory={<AvatarBase size={AvatarBaseSize.Xs} />} endAccessory={<AvatarBase size={AvatarBaseSize.Xs} />} />
      <SelectButton {...args} size={SelectButtonSize.Md} label={SelectButtonSize.Md} />
      <SelectButton {...args} size={SelectButtonSize.Lg} label={SelectButtonSize.Lg} />
    </Box>;
}`,...Size.parameters?.docs?.source}}},IsBlock.parameters={...IsBlock.parameters,docs:{...IsBlock.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...IsBlock.parameters?.docs?.source}}},IsDanger.parameters={...IsDanger.parameters,docs:{...IsDanger.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...IsDanger.parameters?.docs?.source}}},IsDisabled.parameters={...IsDisabled.parameters,docs:{...IsDisabled.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...IsDisabled.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...Label.parameters?.docs?.source}}},Description.parameters={...Description.parameters,docs:{...Description.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...Description.parameters?.docs?.source}}},StartAccessory.parameters={...StartAccessory.parameters,docs:{...StartAccessory.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...StartAccessory.parameters?.docs?.source}}},EndAccessory.parameters={...EndAccessory.parameters,docs:{...EndAccessory.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...EndAccessory.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...Children.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:`args => {
  return <Box display={Display.Flex} gap={3}>
      <SelectButton {...args} />
      <SelectButton {...args} placeholder={{
      label: 'Placeholder label',
      description: 'Placeholder example using prop shape recommendation'
    }} />
    </Box>;
}`,...Placeholder.parameters?.docs?.source}}},Value.parameters={...Value.parameters,docs:{...Value.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...Value.parameters?.docs?.source}}},DefaultValue.parameters={...DefaultValue.parameters,docs:{...DefaultValue.parameters?.docs,source:{originalSource:`args => {
  return <SelectButton {...args} />;
}`,...DefaultValue.parameters?.docs?.source}}},SelectWrapperDemo.parameters={...SelectWrapperDemo.parameters,docs:{...SelectWrapperDemo.parameters?.docs,source:{originalSource:`args => {
  return <SelectWrapper placeholder={{
    label: 'Please select an option',
    description: 'This demo is using SelectWrapper and utilizing the prop shape recommendation'
  }} triggerComponent={<SelectButton {...args} />}>
      <SelectOption value={{
      startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
      label: 'Option 1',
      description: 'You have selected option 1'
    }}>
        Option 1
      </SelectOption>
      <SelectOption value={{
      startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
      label: 'Option 2',
      description: 'You have selected option 2'
    }}>
        Option 2
      </SelectOption>
      <SelectOption value={{
      startAccessory: <AvatarAccount address="0x5CfE73b6021E818B776b421B1c4Db2474086a7e1" size={AvatarAccountSize.Sm} />,
      label: 'Option 3',
      description: 'You have selected option 3'
    }}>
        Option 3
      </SelectOption>
    </SelectWrapper>;
}`,...SelectWrapperDemo.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Size","IsBlock","IsDanger","IsDisabled","Label","Description","StartAccessory","EndAccessory","Children","Placeholder","Value","DefaultValue","SelectWrapperDemo"]},"./ui/components/component-library/select-button/select-button.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>SelectButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_select_wrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/select-wrapper/index.ts"),_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/box/index.ts"),_text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/text/index.ts"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_label__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/components/component-library/label/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./ui/components/component-library/icon/index.ts"),_select_button_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ui/components/component-library/select-button/select-button.types.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}var SelectButton=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var _param_className=_param.className,placeholderProp=_param.placeholder,children=_param.children,_param_size=_param.size,size=void 0===_param_size?_select_button_types__WEBPACK_IMPORTED_MODULE_8__.U.Md:_param_size,isBlock=_param.isBlock,isDangerProp=_param.isDanger,isDisabledProp=_param.isDisabled,disabled=_param.disabled,startAccessory=_param.startAccessory,endAccessory=_param.endAccessory,label=_param.label,description=(_param.labelProps,_param.description),descriptionProps=_param.descriptionProps,caretIconProps=_param.caretIconProps,valueProp=_param.value,uncontrolledValueProp=_param.uncontrolledValue,defaultValueProp=_param.defaultValue,props=_object_without_properties(_param,["className","placeholder","children","size","isBlock","isDanger","isDisabled","disabled","startAccessory","endAccessory","label","labelProps","description","descriptionProps","caretIconProps","value","uncontrolledValue","defaultValue"]),selectContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_select_wrapper__WEBPACK_IMPORTED_MODULE_2__.CW),_ref=selectContext||{},_ref_isOpen=_ref.isOpen,_ref_isUncontrolledOpen=_ref.isUncontrolledOpen,toggleUncontrolledOpen=_ref.toggleUncontrolledOpen,_ref_isDanger=_ref.isDanger,_ref_isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref_isDisabled&&_ref_isDisabled,_ref_value=_ref.value,_ref_uncontrolledValue=_ref.uncontrolledValue,_ref_defaultValue=_ref.defaultValue,_ref_placeholder=_ref.placeholder,contentToRender=valueProp||uncontrolledValueProp||(void 0===_ref_value?"":_ref_value)||(void 0===_ref_uncontrolledValue?"":_ref_uncontrolledValue)||defaultValueProp||(void 0===_ref_defaultValue?"":_ref_defaultValue)||placeholderProp||(void 0===_ref_placeholder?"":_ref_placeholder)||children,labelRender=label,descriptionRender=description,startAccessoryRender=startAccessory,endAccessoryRender=endAccessory,contentIsPlainObject=(void 0===contentToRender?"undefined":_type_of(contentToRender))==="object"&&null!==contentToRender&&contentToRender.constructor===Object&&!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(contentToRender);contentIsPlainObject&&(contentToRender.label&&(labelRender=contentToRender.label),contentToRender.description&&(descriptionRender=contentToRender.description),contentToRender.startAccessory&&(startAccessoryRender=contentToRender.startAccessory),contentToRender.endAccessory&&(endAccessoryRender=contentToRender.endAccessory));var getPaddingBySize=function(){switch(size){case _select_button_types__WEBPACK_IMPORTED_MODULE_8__.U.Sm:return 1;case _select_button_types__WEBPACK_IMPORTED_MODULE_8__.U.Md:return 2;case _select_button_types__WEBPACK_IMPORTED_MODULE_8__.U.Lg:return 3;default:return 1}};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text__WEBPACK_IMPORTED_MODULE_4__.EY,_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-select-button",_define_property({"mm-select-button--type-danger":!!(void 0!==_ref_isDanger&&_ref_isDanger)||!!isDangerProp,"mm-select-button--disabled":!!isDisabled||!!isDisabledProp,"mm-select-button--block":!!isBlock,"mm-select-button--open":!!(void 0!==_ref_isOpen&&_ref_isOpen)||!!(void 0!==_ref_isUncontrolledOpen&&_ref_isUncontrolledOpen)},"mm-select-button--size-".concat(size),Object.values(_select_button_types__WEBPACK_IMPORTED_MODULE_8__.U).includes(size)),void 0===_param_className?"":_param_className),ref:ref,disabled:isDisabled||isDisabledProp||disabled,as:"button",onClick:selectContext?toggleUncontrolledOpen:void 0,borderColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.cG.borderDefault,borderRadius:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.Z6.MD,backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.i0.backgroundDefault,paddingTop:getPaddingBySize(),paddingBottom:getPaddingBySize(),paddingLeft:4,paddingRight:4,display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.nl.Flex,height:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.Zf.Full,width:isBlock&&_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.Zf.Full,alignItems:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.k2.center,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.A9.spaceBetween,gap:2},props),startAccessoryRender,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_3__.a,{as:"span",display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.nl.Flex,flexDirection:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.bo.Column,width:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.Zf.Full,className:"mm-select-button__content"},labelRender&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_label__WEBPACK_IMPORTED_MODULE_6__.J,null,labelRender),descriptionRender&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_text__WEBPACK_IMPORTED_MODULE_4__.EY,_object_spread({variant:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.J3.bodySm,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_5__.r7.textAlternative,ellipsis:!0},descriptionProps),descriptionRender),!contentIsPlainObject&&contentToRender),endAccessoryRender,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_icon__WEBPACK_IMPORTED_MODULE_7__.In,_object_spread({name:_icon__WEBPACK_IMPORTED_MODULE_7__.$M.ArrowDown,size:size===_select_button_types__WEBPACK_IMPORTED_MODULE_8__.U.Sm?_icon__WEBPACK_IMPORTED_MODULE_7__.lK.Xs:_icon__WEBPACK_IMPORTED_MODULE_7__.lK.Sm},caretIconProps)))});try{SelectButton.displayName="SelectButton",SelectButton.__docgenInfo={description:"",displayName:"SelectButton",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},size:{defaultValue:{value:"SelectButtonSize.Md"},description:`The size of the SelectButton using SelectButtonSize enum
Possible values: 'SelectButtonSize.Sm', 'SelectButtonSize.Md', 'SelectButtonSize.Lg'`,name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"any"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"any"}},isBlock:{defaultValue:null,description:"",name:"isBlock",required:!1,type:{name:"boolean"}},isDanger:{defaultValue:null,description:"",name:"isDanger",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:"LabelStyleUtilityProps"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},descriptionProps:{defaultValue:null,description:"",name:"descriptionProps",required:!1,type:{name:"TextStyleUtilityProps"}},startAccessory:{defaultValue:null,description:"",name:"startAccessory",required:!1,type:{name:"ReactNode"}},endAccessory:{defaultValue:null,description:"",name:"endAccessory",required:!1,type:{name:"ReactNode"}},caretIconProps:{defaultValue:null,description:"",name:"caretIconProps",required:!1,type:{name:'IconProps<"span">'}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/select-button/select-button.tsx#SelectButton"]={docgenInfo:SelectButton.__docgenInfo,name:"SelectButton",path:"ui/components/component-library/select-button/select-button.tsx#SelectButton"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/select-button/select-button.types.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>SelectButtonSize1});var SelectButtonSize,SelectButtonSize1=((SelectButtonSize={}).Sm="sm",SelectButtonSize.Md="md",SelectButtonSize.Lg="lg",SelectButtonSize)},"./ui/components/component-library/select-option/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>SelectOption});var react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),select_wrapper=__webpack_require__("./ui/components/component-library/select-wrapper/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var SelectOption=react.forwardRef(function(_param,ref){var _param_className=_param.className,value=_param.value,children=_param.children,props=_object_without_properties(_param,["className","value","children"]),selectContext=(0,react.useContext)(select_wrapper.CW);if(!selectContext)throw Error("SelectOption must be used within a SelectWrapper.");var setUncontrolledValue=selectContext.setUncontrolledValue,onValueChange=selectContext.onValueChange,isMultiSelect=selectContext.isMultiSelect,isOpen=selectContext.isOpen,onOpenChange=selectContext.onOpenChange,toggleUncontrolledOpen=selectContext.toggleUncontrolledOpen;return react.createElement(box.a,_object_spread({className:(0,clsx.A)("mm-select-option",void 0===_param_className?"":_param_className),ref:ref,onClick:function(){onValueChange?onValueChange(value):setUncontrolledValue(value),!isMultiSelect&&isOpen?onOpenChange(!isOpen):isMultiSelect||toggleUncontrolledOpen()},as:"button",display:design_system.nl.Block},props),children)});try{SelectOption.displayName="SelectOption",SelectOption.__docgenInfo={description:"",displayName:"SelectOption",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/select-option/select-option.tsx#SelectOption"]={docgenInfo:SelectOption.__docgenInfo,name:"SelectOption",path:"ui/components/component-library/select-option/select-option.tsx#SelectOption"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/select-wrapper/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{CW:()=>_select_wrapper_context__WEBPACK_IMPORTED_MODULE_1__.C,SK:()=>_select_wrapper__WEBPACK_IMPORTED_MODULE_0__.S});var _select_wrapper__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/component-library/select-wrapper/select-wrapper.tsx"),_select_wrapper_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/component-library/select-wrapper/select-wrapper.context.ts")},"./ui/components/component-library/select-wrapper/select-wrapper.context.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>SelectContext,h:()=>useSelectContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),SelectContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),useSelectContext=function(){var context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SelectContext);if(!context)throw Error("useSelectContext must be used within a SelectWrapper");return context}},"./ui/components/component-library/select-wrapper/select-wrapper.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>SelectWrapper});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/component-library/box/index.ts"),_popover__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/popover/index.ts"),_select_wrapper_context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/component-library/select-wrapper/select-wrapper.context.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var SelectWrapper=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var _param_className=_param.className,defaultValue=_param.defaultValue,value=_param.value,onValueChange=_param.onValueChange,placeholder=_param.placeholder,isDanger=_param.isDanger,isDisabled=_param.isDisabled,isOpen=_param.isOpen,onOpenChange=_param.onOpenChange,isMultiSelect=_param.isMultiSelect,triggerComponent=_param.triggerComponent,popoverProps=_param.popoverProps,children=_param.children,onBlur=_param.onBlur,props=_object_without_properties(_param,["className","defaultValue","value","onValueChange","placeholder","isDanger","isDisabled","isOpen","onOpenChange","isMultiSelect","triggerComponent","popoverProps","children","onBlur"]),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),2),uncontrolledValue=_useState[0],setUncontrolledValue=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isUncontrolledOpen=_useState1[0],setIsUncontrolledOpen=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),2),referenceElement=_useState2[0],setReferenceElement=_useState2[1],popoverRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),wrapperRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_select_wrapper_context__WEBPACK_IMPORTED_MODULE_4__.C.Provider,{value:{isOpen:isOpen,onOpenChange:onOpenChange,isUncontrolledOpen:isUncontrolledOpen,setIsUncontrolledOpen:setIsUncontrolledOpen,toggleUncontrolledOpen:function(){isUncontrolledOpen&&onBlur&&onBlur(),setIsUncontrolledOpen(!isUncontrolledOpen)},isDisabled:isDisabled,isDanger:isDanger,defaultValue:defaultValue,value:value,onValueChange:onValueChange,uncontrolledValue:uncontrolledValue,setUncontrolledValue:setUncontrolledValue,placeholder:placeholder,isMultiSelect:isMultiSelect}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_2__.a,_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-select-wrapper",void 0===_param_className?"":_param_className),ref:wrapperRef&&ref},props),triggerComponent&&react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(triggerComponent,{ref:function(anchorRef){setReferenceElement(anchorRef)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popover__WEBPACK_IMPORTED_MODULE_3__.AM,_object_spread_props(_object_spread({isOpen:isOpen||isUncontrolledOpen,position:_popover__WEBPACK_IMPORTED_MODULE_3__.$x.Bottom,onClickOutside:function(){setIsUncontrolledOpen(!1),onOpenChange&&onOpenChange(!1),onBlur&&onBlur()},matchWidth:!0,referenceElement:referenceElement,referenceHidden:!1,padding:0,ref:popoverRef},popoverProps),{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-select-wrapper__popover",(null==popoverProps?void 0:popoverProps.className)||"")}),children)))});try{SelectWrapper.displayName="SelectWrapper",SelectWrapper.__docgenInfo={description:"",displayName:"SelectWrapper",props:{className:{defaultValue:{value:""},description:"Additional classNames to be added to the SelectWrapper component.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Children of SelectWrapper component are put inside the select menu which uses the Popover component.",name:"children",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:`Placeholder for SelectWrapper component to be displayed when no value or defaultValue is set.
Can be accessed within any component inside the SelectWrapper.`,name:"placeholder",required:!1,type:{name:"any"}},value:{defaultValue:null,description:`Selected value of SelectWrapper component.
Can be accessed within any component inside the SelectWrapper.`,name:"value",required:!1,type:{name:"any"}},defaultValue:{defaultValue:null,description:`Default value of SelectWrapper component.
Can be accessed within any component inside the SelectWrapper.`,name:"defaultValue",required:!1,type:{name:"any"}},onValueChange:{defaultValue:null,description:`Callback function that is called when the value of the SelectWrapper component changes.
The new value is passed as an argument to the function.`,name:"onValueChange",required:!1,type:{name:"((newValue: any) => void)"}},isOpen:{defaultValue:null,description:"isOpen boolean determines whether the SelectWrapper popover is open or closed.",name:"isOpen",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"isDisabled boolean determines whether the SelectWrapper component is disabled or not.",name:"isDisabled",required:!1,type:{name:"boolean"}},isDanger:{defaultValue:null,description:"isDanger boolean determines whether the SelectWrapper component is danger",name:"isDanger",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"onOpenChange callback function is called when the SelectWrapper popover is opened or closed.",name:"onOpenChange",required:!1,type:{name:"any"}},onBlur:{defaultValue:null,description:`Callback function that is called when the SelectWrapper component loses focus.
The event object is passed as an argument to the function.`,name:"onBlur",required:!1,type:{name:"(() => void)"}},triggerComponent:{defaultValue:null,description:`The trigger component that will commonly be used with components like SelectButton.
SelectWrapper's popover will be anchored to this component.`,name:"triggerComponent",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | null"}},popoverProps:{defaultValue:null,description:"Use props from the Popover component to customize the SelectWrapper popover via popoverProps.",name:"popoverProps",required:!1,type:{name:"PopoverStyleUtilityProps"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Can also be a React component.`,name:"as",required:!1,type:{name:"ElementType<any>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/component-library/select-wrapper/select-wrapper.tsx#SelectWrapper"]={docgenInfo:SelectWrapper.__docgenInfo,name:"SelectWrapper",path:"ui/components/component-library/select-wrapper/select-wrapper.tsx#SelectWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/component-library/text/index.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{jM:()=>InvisibleCharacter,EY:()=>text_text.E});var text_text=__webpack_require__("./ui/components/component-library/text/text.tsx"),InvisibleCharacter="​"},"./ui/components/component-library/text/text.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Text});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/box/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var getTextElementDefault=function(variant){switch(variant){case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.displayMd:return"h1";case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.headingLg:return"h2";case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.headingMd:return"h3";case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.headingSm:return"h4";case _helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.inherit:return"span";default:return"p"}},Text=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(_param,ref){var _obj,_param_variant=_param.variant,variant=void 0===_param_variant?_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.J3.bodyMd:_param_variant,fontWeight=_param.fontWeight,fontStyle=_param.fontStyle,fontFamily=_param.fontFamily,textTransform=_param.textTransform,textAlign=_param.textAlign,textDirection=_param.textDirection,overflowWrap=_param.overflowWrap,ellipsis=_param.ellipsis,_param_className=_param.className,children=_param.children,props=_object_without_properties(_param,["variant","fontWeight","fontStyle","fontFamily","textTransform","textAlign","textDirection","overflowWrap","ellipsis","className","children"]),tag=getTextElementDefault(variant),computedClassName=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("mm-text",void 0===_param_className?"":_param_className,"mm-text--".concat(variant),(_define_property(_obj={},"mm-text--font-weight-".concat(fontWeight),!!fontWeight),_define_property(_obj,"mm-text--font-style-".concat(fontStyle),!!fontStyle),_define_property(_obj,"mm-text--font-family-".concat(fontFamily),!!fontFamily),_define_property(_obj,"mm-text--ellipsis",!!ellipsis),_define_property(_obj,"mm-text--text-transform-".concat(textTransform),!!textTransform),_define_property(_obj,"mm-text--text-align-".concat(textAlign),!!textAlign),_define_property(_obj,"mm-text--overflow-wrap-".concat(overflowWrap),!!overflowWrap),_obj));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_box__WEBPACK_IMPORTED_MODULE_3__.a,_object_spread({className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)(computedClassName),as:tag,dir:textDirection,ref:ref,color:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.r7.textDefault},props),children)});try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:{value:""},description:"Additional className to assign the Text component",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The text content of the Text component",name:"children",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"TextVariant.bodyMd"},description:`The variation of font styles including sizes and weights of the Text component
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
//# sourceMappingURL=components-component-library-select-button-select-button-stories.e6abc60a.iframe.bundle.js.map