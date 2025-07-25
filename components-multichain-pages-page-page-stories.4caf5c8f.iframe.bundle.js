"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[51277],{"./ui/components/multichain/pages/page/components/footer/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>Footer});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),component_library=__webpack_require__("./ui/components/component-library/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Footer=function(_param){var children=_param.children,_param_className=_param.className,props=_object_without_properties(_param,["children","className"]);return react.createElement(component_library.az,_object_spread({padding:4,display:design_system.nl.Flex,width:design_system.Zf.Full,gap:4,className:classnames_default()("multichain-page-footer",void 0===_param_className?"":_param_className)},props),children)};try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{children:{defaultValue:null,description:"Elements that go in the page footer",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:{value:""},description:"Additional CSS class provided to the footer",name:"className",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Accepts responsive props in the form of an array.`,name:"color",required:!1,type:{name:"TextColor | TextColorArray | IconColor | IconColorArray"}},"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
TypeScript is complaining about data- attributes which means we need to explicitly define this as a prop.
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/multichain/pages/page/components/footer/footer.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"ui/components/multichain/pages/page/components/footer/footer.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/multichain/pages/page/components/header/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Header});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),component_library=__webpack_require__("./ui/components/component-library/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Header=function(_param){var children=_param.children,_param_endAccessory=_param.endAccessory,_param_startAccessory=_param.startAccessory,_param_className=_param.className,textProps=_param.textProps,props=_object_without_properties(_param,["children","endAccessory","startAccessory","className","textProps"]);return react.createElement(component_library.H1,_object_spread({padding:4,width:design_system.Zf.Full,justifyContent:design_system.A9.center,className:classnames_default()("multichain-page-header",void 0===_param_className?"":_param_className),startAccessory:void 0===_param_startAccessory?null:_param_startAccessory,endAccessory:void 0===_param_endAccessory?null:_param_endAccessory},props),react.createElement(component_library.EY,_object_spread({display:design_system.nl.Block,variant:design_system.J3.bodyMdBold,textAlign:design_system.nO.Center,paddingInlineStart:8,paddingInlineEnd:8,ellipsis:!0},textProps),children))};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{children:{defaultValue:null,description:"Elements that go in the page footer",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},endAccessory:{defaultValue:{value:"null"},description:"Elements that go in the header end accessory",name:"endAccessory",required:!1,type:{name:"ReactNode | ReactNode[]"}},startAccessory:{defaultValue:{value:"null"},description:"Elements that go in the header start accessory",name:"startAccessory",required:!1,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:{value:""},description:"Additional CSS class provided to the footer",name:"className",required:!1,type:{name:"string"}},textProps:{defaultValue:null,description:"Additional props to pass to the text",name:"textProps",required:!1,type:{name:'(TextStyleUtilityProps & AsProp<ElementType<any>> & { children?: ReactNode; } & Omit<Omit<any, "ref">, "as" | keyof TextStyleUtilityProps> & { ...; })'}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Accepts responsive props in the form of an array.`,name:"color",required:!1,type:{name:"TextColor | TextColorArray | IconColor | IconColorArray"}},"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
TypeScript is complaining about data- attributes which means we need to explicitly define this as a prop.
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/multichain/pages/page/components/header/header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"ui/components/multichain/pages/page/components/header/header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./ui/components/multichain/pages/page/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UC:()=>Content,wi:()=>footer.w,Y9:()=>header.Y,YW:()=>Page});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react_router=__webpack_require__("./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),utils=__webpack_require__("./ui/pages/routes/utils.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Page=function(_param){var children=_param.children,_param_className=_param.className,props=_object_without_properties(_param,["children","className"]),location=(0,react_router.zy)(),hasAppHeader=null==location||!location.pathname||!(0,utils.Nk)({location:location}),classNames=classnames_default()("multichain-page",{"multichain-page--has-app-header":hasAppHeader});return react.createElement(component_library.az,{width:design_system.Zf.Full,height:design_system.Zf.Full,display:design_system.nl.Flex,flexDirection:design_system.bo.Row,justifyContent:design_system.A9.center,backgroundColor:design_system.i0.backgroundDefault,className:classNames,"data-testid":"multichain-page"},react.createElement(component_library.az,_object_spread({width:design_system.Zf.Full,height:design_system.Zf.Full,display:design_system.nl.Flex,flexDirection:design_system.bo.Column,backgroundColor:design_system.i0.backgroundDefault,className:classnames_default()("multichain-page__inner-container",void 0===_param_className?"":_param_className)},props),children))};Page.propTypes={className:prop_types_default().string,children:prop_types_default().node};try{Page.displayName="Page",Page.__docgenInfo={description:"",displayName:"Page",props:{children:{defaultValue:null,description:"Elements that go in the page footer",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:{value:""},description:"Additional CSS class provided to the footer",name:"className",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Accepts responsive props in the form of an array.`,name:"color",required:!1,type:{name:"TextColor | TextColorArray | IconColor | IconColorArray"}},"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
TypeScript is complaining about data- attributes which means we need to explicitly define this as a prop.
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/multichain/pages/page/page.tsx#Page"]={docgenInfo:Page.__docgenInfo,name:"Page",path:"ui/components/multichain/pages/page/page.tsx#Page"})}catch(__react_docgen_typescript_loader_error){}var header=__webpack_require__("./ui/components/multichain/pages/page/components/header/index.ts");function content_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function content_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){content_define_property(target,key,source[key])})}return target}function content_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=content_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function content_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Content=function(_param){var children=_param.children,_param_className=_param.className,props=content_object_without_properties(_param,["children","className"]);return react.createElement(component_library.az,content_object_spread({display:design_system.nl.Flex,flexDirection:design_system.bo.Column,width:design_system.Zf.Full,padding:4,height:design_system.Zf.Full,className:classnames_default()("multichain-page-content",void 0===_param_className?"":_param_className)},props),children)};try{Content.displayName="Content",Content.__docgenInfo={description:"",displayName:"Content",props:{children:{defaultValue:null,description:"Elements that go in the page content section",name:"children",required:!0,type:{name:"ReactNode | ReactNode[]"}},className:{defaultValue:{value:""},description:"Additional CSS class provided to the content",name:"className",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:`The flex direction of the component.
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
Accepts responsive props in the form of an array.`,name:"color",required:!1,type:{name:"TextColor | TextColorArray | IconColor | IconColorArray"}},"data-testid":{defaultValue:null,description:`An optional data-testid to apply to the component.
TypeScript is complaining about data- attributes which means we need to explicitly define this as a prop.
TODO: Allow data- attributes.`,name:"data-testid",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/multichain/pages/page/components/content/content.tsx#Content"]={docgenInfo:Content.__docgenInfo,name:"Content",path:"ui/components/multichain/pages/page/components/content/content.tsx#Content"})}catch(__react_docgen_typescript_loader_error){}var footer=__webpack_require__("./ui/components/multichain/pages/page/components/footer/index.ts")},"./ui/components/multichain/pages/page/page.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,FullscreenStory:()=>FullscreenStory,HeaderFooterStory:()=>HeaderFooterStory,HeaderStory:()=>HeaderStory,ScrollingStory:()=>ScrollingStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_component_library__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/component-library/index.ts"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/helpers/constants/design-system.ts"),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/multichain/pages/page/index.ts");let __WEBPACK_DEFAULT_EXPORT__={title:"Components/Multichain/Page",component:___WEBPACK_IMPORTED_MODULE_3__.YW,argTypes:{},args:{}};var scrollingContent="Content ".repeat(2e3),DefaultStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.YW,args,"This is the content!")};DefaultStory.storyName="Default",DefaultStory.args={};var pageWrapProps={style:{width:"328px",height:"600px",border:"1px solid var(--color-border-muted)"}},responsivePageWrapProps={style:{width:"100%",height:"600px",border:"1px solid var(--color-border-muted)"}},HeaderStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",pageWrapProps,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.YW,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.Y9,{startAccessory:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_1__.a2,{size:_component_library__WEBPACK_IMPORTED_MODULE_1__.f3.Sm,ariaLabel:"Back",iconName:_component_library__WEBPACK_IMPORTED_MODULE_1__.$M.ArrowLeft}),backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.primaryAlternative},"Connect"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.UC,{backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.successDefault},"Contents!")))},FullscreenStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",responsivePageWrapProps,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.YW,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.Y9,{startAccessory:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_1__.a2,{size:_component_library__WEBPACK_IMPORTED_MODULE_1__.f3.Sm,ariaLabel:"Back",iconName:_component_library__WEBPACK_IMPORTED_MODULE_1__.$M.ArrowLeft}),backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.primaryAlternative},"Connect"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.UC,{backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.successDefault},scrollingContent),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.wi,{backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.warningDefault},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_1__.$$,{block:!0,disabled:!0},"Cancel"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_1__.$$,{block:!0},"Confirm"))))};FullscreenStory.storyName="Fullscreen",FullscreenStory.args={},HeaderStory.storyName="Header",HeaderStory.args={};var HeaderFooterStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",pageWrapProps,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.YW,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.Y9,{startAccessory:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_1__.a2,{size:_component_library__WEBPACK_IMPORTED_MODULE_1__.f3.Sm,ariaLabel:"Back",iconName:_component_library__WEBPACK_IMPORTED_MODULE_1__.$M.ArrowLeft}),backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.primaryAlternative},"Connect"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.UC,{backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.successDefault},"Content"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.wi,{backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.warningDefault},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_1__.$$,{block:!0,disabled:!0},"Cancel"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_1__.$$,{block:!0},"Confirm"))))};HeaderFooterStory.storyName="Header + Footer",HeaderFooterStory.args={};var ScrollingStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",pageWrapProps,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.YW,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.Y9,{startAccessory:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_1__.a2,{size:_component_library__WEBPACK_IMPORTED_MODULE_1__.f3.Sm,ariaLabel:"Back",iconName:_component_library__WEBPACK_IMPORTED_MODULE_1__.$M.ArrowLeft}),backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.primaryAlternative},"Connect"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.UC,{backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.successDefault},scrollingContent),react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_3__.wi,{backgroundColor:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_2__.i0.warningDefault},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_1__.$$,{block:!0,disabled:!0},"Cancel"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_1__.$$,{block:!0},"Confirm"))))};ScrollingStory.storyName="Content Scrolling",ScrollingStory.args={},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <Page {...args}>This is the content!</Page>",...DefaultStory.parameters?.docs?.source}}},HeaderStory.parameters={...HeaderStory.parameters,docs:{...HeaderStory.parameters?.docs,source:{originalSource:`args => <div {...pageWrapProps}>
    <Page {...args}>
      <Header startAccessory={<ButtonIcon size={ButtonIconSize.Sm} ariaLabel="Back" iconName={IconName.ArrowLeft} />} backgroundColor={BackgroundColor.primaryAlternative}>
        Connect
      </Header>
      <Content backgroundColor={BackgroundColor.successDefault}>
        Contents!
      </Content>
    </Page>
  </div>`,...HeaderStory.parameters?.docs?.source}}},FullscreenStory.parameters={...FullscreenStory.parameters,docs:{...FullscreenStory.parameters?.docs,source:{originalSource:`args => <div {...responsivePageWrapProps}>
    <Page {...args}>
      <Header startAccessory={<ButtonIcon size={ButtonIconSize.Sm} ariaLabel="Back" iconName={IconName.ArrowLeft} />} backgroundColor={BackgroundColor.primaryAlternative}>
        Connect
      </Header>
      <Content backgroundColor={BackgroundColor.successDefault}>
        {scrollingContent}
      </Content>
      <Footer backgroundColor={BackgroundColor.warningDefault}>
        <ButtonPrimary block disabled>
          Cancel
        </ButtonPrimary>
        <ButtonPrimary block>Confirm</ButtonPrimary>
      </Footer>
    </Page>
  </div>`,...FullscreenStory.parameters?.docs?.source}}},HeaderFooterStory.parameters={...HeaderFooterStory.parameters,docs:{...HeaderFooterStory.parameters?.docs,source:{originalSource:`args => <div {...pageWrapProps}>
    <Page {...args}>
      <Header startAccessory={<ButtonIcon size={ButtonIconSize.Sm} ariaLabel="Back" iconName={IconName.ArrowLeft} />} backgroundColor={BackgroundColor.primaryAlternative}>
        Connect
      </Header>
      <Content backgroundColor={BackgroundColor.successDefault}>
        Content
      </Content>
      <Footer backgroundColor={BackgroundColor.warningDefault}>
        <ButtonPrimary block disabled>
          Cancel
        </ButtonPrimary>
        <ButtonPrimary block>Confirm</ButtonPrimary>
      </Footer>
    </Page>
  </div>`,...HeaderFooterStory.parameters?.docs?.source}}},ScrollingStory.parameters={...ScrollingStory.parameters,docs:{...ScrollingStory.parameters?.docs,source:{originalSource:`args => <div {...pageWrapProps}>
    <Page {...args}>
      <Header startAccessory={<ButtonIcon size={ButtonIconSize.Sm} ariaLabel="Back" iconName={IconName.ArrowLeft} />} backgroundColor={BackgroundColor.primaryAlternative}>
        Connect
      </Header>
      <Content backgroundColor={BackgroundColor.successDefault}>
        {scrollingContent}
      </Content>
      <Footer backgroundColor={BackgroundColor.warningDefault}>
        <ButtonPrimary block disabled>
          Cancel
        </ButtonPrimary>
        <ButtonPrimary block>Confirm</ButtonPrimary>
      </Footer>
    </Page>
  </div>`,...ScrollingStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","HeaderStory","FullscreenStory","HeaderFooterStory","ScrollingStory"];try{DefaultStory.displayName="DefaultStory",DefaultStory.__docgenInfo={description:"",displayName:"DefaultStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/multichain/pages/page/page.stories.tsx#DefaultStory"]={docgenInfo:DefaultStory.__docgenInfo,name:"DefaultStory",path:"ui/components/multichain/pages/page/page.stories.tsx#DefaultStory"})}catch(__react_docgen_typescript_loader_error){}try{HeaderStory.displayName="HeaderStory",HeaderStory.__docgenInfo={description:"",displayName:"HeaderStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/multichain/pages/page/page.stories.tsx#HeaderStory"]={docgenInfo:HeaderStory.__docgenInfo,name:"HeaderStory",path:"ui/components/multichain/pages/page/page.stories.tsx#HeaderStory"})}catch(__react_docgen_typescript_loader_error){}try{FullscreenStory.displayName="FullscreenStory",FullscreenStory.__docgenInfo={description:"",displayName:"FullscreenStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/multichain/pages/page/page.stories.tsx#FullscreenStory"]={docgenInfo:FullscreenStory.__docgenInfo,name:"FullscreenStory",path:"ui/components/multichain/pages/page/page.stories.tsx#FullscreenStory"})}catch(__react_docgen_typescript_loader_error){}try{HeaderFooterStory.displayName="HeaderFooterStory",HeaderFooterStory.__docgenInfo={description:"",displayName:"HeaderFooterStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/multichain/pages/page/page.stories.tsx#HeaderFooterStory"]={docgenInfo:HeaderFooterStory.__docgenInfo,name:"HeaderFooterStory",path:"ui/components/multichain/pages/page/page.stories.tsx#HeaderFooterStory"})}catch(__react_docgen_typescript_loader_error){}try{ScrollingStory.displayName="ScrollingStory",ScrollingStory.__docgenInfo={description:"",displayName:"ScrollingStory",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/multichain/pages/page/page.stories.tsx#ScrollingStory"]={docgenInfo:ScrollingStory.__docgenInfo,name:"ScrollingStory",path:"ui/components/multichain/pages/page/page.stories.tsx#ScrollingStory"})}catch(__react_docgen_typescript_loader_error){}},"./ui/pages/routes/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nk:()=>hideAppHeader});var react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js"),_app_scripts_lib_util__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/scripts/lib/util.ts"),_shared_constants_app__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./shared/constants/app.ts");__webpack_require__("./shared/constants/network.ts"),__webpack_require__("./shared/constants/preferences.ts");var _helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/helpers/constants/routes.ts");function isConfirmTransactionRoute(pathname){return!!(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.s8,exact:!1})}function onConfirmPage(props){var location=props.location;return!!(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.s8,exact:!1})}function hideAppHeader(props){var location=props.location;if((0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:"".concat(_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.P1),exact:!1})||(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.oU,exact:!1})||(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.su,exact:!1}))return!0;var windowType=(0,_app_scripts_lib_util__WEBPACK_IMPORTED_MODULE_0__.mc)();if(windowType===_shared_constants_app__WEBPACK_IMPORTED_MODULE_1__.XU||(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.Jj,exact:!1})||(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.Uk,exact:!1})||(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.eF,exact:!1})||windowType===_shared_constants_app__WEBPACK_IMPORTED_MODULE_1__.YY&&onConfirmPage(props))return!0;var isHandlingPermissionsRequest=!!(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.Fh,exact:!1});if((0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.xW,exact:!1})||(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.VR,exact:!1})||(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.En,exact:!1})||(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:"".concat(_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.Zj),exact:!1})||(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.Jy,exact:!1})||(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.R5,exact:!1})||(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.pu,exact:!1}))return!0;var isHandlingAddEthereumChainRequest=!!(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.DL,exact:!1}),isImportSrpPage=!!(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.B6)(location.pathname,{path:_helpers_constants_routes__WEBPACK_IMPORTED_MODULE_4__.UK,exact:!1});return isHandlingPermissionsRequest||isHandlingAddEthereumChainRequest||isConfirmTransactionRoute(location.pathname)||isImportSrpPage}}}]);
//# sourceMappingURL=components-multichain-pages-page-page-stories.4caf5c8f.iframe.bundle.js.map