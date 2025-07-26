"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[1571],{"./ui/components/app/flask/experimental-area/experimental-area.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>experimental_area_stories});var react=__webpack_require__("./node_modules/react/index.js"),react_router=__webpack_require__("./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),i18n=__webpack_require__("./ui/contexts/i18n.js"),ui_button=__webpack_require__("./ui/components/ui/button/index.js");function lineBreaksToBr(source){return source.split(`
`).map(function(value,index){return react.createElement(react.Fragment,{key:index},value,react.createElement("br",null))})}var METAMASK_LOGO=lineBreaksToBr(`MMm*mmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmm*mMM
MM*./***mMMMMMMMMMMMMMMMMMMMMMMMMMMm***/.*MM
MM/...///*mMMMMMMMMMMMMMMMMMMMMMMm*///.../MM
Mm.....//../*mMMMMMMMMMMMMMMMMm*/..//.....mM
M*....../*....*mMMMMMMMMMMMMm*....*/......*M
M/........*.....*//////////*...../......../M
m..........*/...//........//.../*..........m
M/..........//.../......../...//........../M
M/.........../*/./.......//./*/.........../M
M*.............////......////.............*M
Mm...............**......**...............mM
Mm/...............*/..../*.............../mM
MM/............../*/..../*/............../MM
Mm..............//./...././/..............mM
MM*............*/../..../../*............*MM
MM/........../*..../..../....*/........../MM
MMm.........//...../..../.....//.........mMM
MMm......//**....../..../......**//......mMM
MMM/..////.*......./..../......././///../MMM
MMMm*//..../......./..../......./....//*mMMM
MMMm......*////////*....*////////*......mMMM
MMM*......*////////*....*////////*......*MMM
MMM/....../*......./..../.......*/....../MMM
MMm........**/./m*./..../.**/..**........mMM
MM*........//*mMMM///..///mMMm*//........*MM
MM/........././*mM*//..//*Mm*/./........./MM
Mm..........//.../**/../**/...//..........mM
M*...........*..../*/../*/..../...........*M
M*///////////*/.../m/../m/.../*///////////*M
M*.........../*/...m/../m.../*/...........*M
Mm.........../..//.*....*./*../...........mM
MM/........../...//******//.../........../MM
MM*........../....*MMMMMM*..../..........*MM
MMm........../....*MMMMMM*..../..........mMM
MMm/........//....*MMMMMM*....//......../mMM
MMM/....../*mm*...*mmmmmm*...*mm*/....../MMM
MMM*../*mmMMMMMm///......//*mMMMMMmm*/..*MMM
MMMm*mMMMMMMMMMMm**......**mMMMMMMMMMMm*mMMM
MMMMMMMMMMMMMMMMMm/....../mMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMmmmmmmmmMMMMMMMMMMMMMMMMMM`),EXPERIMENTAL_AREA=lineBreaksToBr(`█▀▀ ▄▀█ █░█ ▀█▀ █ █▀█ █▄░█ ▀  
  █▄▄ █▀█ █▄█ ░█░ █ █▄█ █░▀█ ▄  
  
  █▀▀ ▀▄▀ █▀█ █▀▀ █▀█ █ █▀▄▀█ █▀▀ █▄░█ ▀█▀ ▄▀█ █░░  
  ██▄ █░█ █▀▀ ██▄ █▀▄ █ █░▀░█ ██▄ █░▀█ ░█░ █▀█ █▄▄  
  
  █▀ █▀█ █▀▀ ▀█▀ █░█░█ ▄▀█ █▀█ █▀▀
  ▄█ █▄█ █▀░ ░█░ ▀▄▀▄▀ █▀█ █▀▄ ██▄`);function ExperimentalArea(param){var redirectTo=param.redirectTo,t=(0,react.useContext)(i18n.gJ),history=(0,react_router.W6)();return react.createElement("div",{className:"experimental-area","data-testid":"experimental-area"},react.createElement("div",{className:"logo"},METAMASK_LOGO),react.createElement("div",{className:"experimental-text"},EXPERIMENTAL_AREA),react.createElement("div",{className:"text"},react.createElement("p",null,t("flaskWelcomeWarning1",[react.createElement("b",{key:"doNotUse"},t("flaskWelcomeUninstall"))])),react.createElement("br",null),react.createElement("p",null,t("flaskWelcomeWarning2")),react.createElement("br",null),react.createElement("p",null,t("flaskWelcomeWarning3")),react.createElement("br",null),react.createElement("p",null,t("flaskWelcomeWarning4"))),react.createElement(ui_button.A,{type:"primary",onClick:function(){history.push(redirectTo)}},t("flaskWelcomeWarningAcceptButton")))}ExperimentalArea.propTypes={redirectTo:prop_types_default().string},ExperimentalArea.__docgenInfo={description:"",methods:[],displayName:"ExperimentalArea",props:{redirectTo:{description:"",type:{name:"string"},required:!1}}};let experimental_area_stories={title:"Components/App/Flask/ExperimentalArea",component:ExperimentalArea};var DefaultStory=function(){return react.createElement(ExperimentalArea,null)};DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"() => <ExperimentalArea />",...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]},"./ui/components/ui/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ui_button});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var CLASSNAME_DEFAULT="btn-default",typeHash={default:CLASSNAME_DEFAULT,primary:"btn-primary",secondary:"btn-secondary",warning:"btn-warning",danger:"btn-danger","danger-primary":"btn-danger-primary",link:"btn-link",inline:"btn--inline",raised:"btn-raised"},Button=function(_param){var type=_param.type,_param_submit=_param.submit,large=_param.large,children=_param.children,icon=_param.icon,className=_param.className,_param_rounded=_param.rounded,buttonProps=_object_without_properties(_param,["type","submit","large","children","icon","className","rounded"]),Tag="button";return"link"===type?Tag="a":void 0!==_param_submit&&_param_submit&&(buttonProps.type="submit"),"link"===type&&"function"==typeof buttonProps.onClick&&(null!=buttonProps.onKeyUp||(buttonProps.onKeyUp=function(event){"Enter"===event.key&&buttonProps.onClick()}),null!=buttonProps.role||(buttonProps.role="button"),null!=buttonProps.tabIndex||(buttonProps.tabIndex=0)),react.createElement(Tag,_object_spread({className:classnames_default()("button",void 0!==_param_rounded&&_param_rounded&&"link"!==type&&"inline"!==type&&"btn--rounded",typeHash[type]||CLASSNAME_DEFAULT,large&&"btn--large",className)},buttonProps),icon?react.createElement("span",{className:"button__icon"},icon):null,children)};Button.propTypes={type:prop_types_default().string,submit:prop_types_default().bool,large:prop_types_default().bool,className:prop_types_default().string,children:prop_types_default().node,icon:prop_types_default().node,rounded:prop_types_default().bool},Button.__docgenInfo={description:`@deprecated The <Button /> component has been deprecated in favor of the new <Button> component from the component-library.
Please update your code to use the new <Button> component instead, which can be found at ./ui/components/component-library/button/button.js.
You can find documentation for the new Button component in the MetaMask Storybook:
{@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}
If you would like to help with the replacement of the old Button component, please submit a pull request against this GitHub issue:
{@link https://github.com/MetaMask/metamask-extension/issues/18896}
@see {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}`,methods:[],displayName:"Button",props:{submit:{defaultValue:{value:"false",computed:!1},description:"If true sets the html 'type' attribute to type=\"submit\"",type:{name:"bool"},required:!1},rounded:{defaultValue:{value:"false",computed:!1},description:"Buttons are rounded by default.",type:{name:"bool"},required:!1},type:{description:`The type of variation a button can be.
Can be one of 'default','primary','secondary','warning','danger','danger-primary' or 'link'`,type:{name:"string"},required:!1},large:{description:"Increase the height of the button to 54px",type:{name:"bool"},required:!1},className:{description:"Additional className to provide on the root element of the button",type:{name:"string"},required:!1},children:{description:"The children of the button component",type:{name:"node"},required:!1},icon:{description:"Provide an icon component for an icon to appear on the left side of the button",type:{name:"node"},required:!1}}};let ui_button=Button;Button.__docgenInfo={description:`@deprecated The <Button /> component has been deprecated in favor of the new <Button> component from the component-library.
Please update your code to use the new <Button> component instead, which can be found at ./ui/components/component-library/button/button.js.
You can find documentation for the new Button component in the MetaMask Storybook:
{@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}
If you would like to help with the replacement of the old Button component, please submit a pull request against this GitHub issue:
{@link https://github.com/MetaMask/metamask-extension/issues/18896}
@see {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}`,methods:[],displayName:"Button",props:{submit:{defaultValue:{value:"false",computed:!1},description:"If true sets the html 'type' attribute to type=\"submit\"",type:{name:"bool"},required:!1},rounded:{defaultValue:{value:"false",computed:!1},description:"Buttons are rounded by default.",type:{name:"bool"},required:!1},type:{description:`The type of variation a button can be.
Can be one of 'default','primary','secondary','warning','danger','danger-primary' or 'link'`,type:{name:"string"},required:!1},large:{description:"Increase the height of the button to 54px",type:{name:"bool"},required:!1},className:{description:"Additional className to provide on the root element of the button",type:{name:"string"},required:!1},children:{description:"The children of the button component",type:{name:"node"},required:!1},icon:{description:"Provide an icon component for an icon to appear on the left side of the button",type:{name:"node"},required:!1}}}}}]);
//# sourceMappingURL=components-app-flask-experimental-area-experimental-area-stories.e88c8ebd.iframe.bundle.js.map