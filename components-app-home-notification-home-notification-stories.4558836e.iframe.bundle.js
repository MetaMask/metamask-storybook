"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[44545],{"./ui/components/app/home-notification/home-notification.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,DescriptionAndInfo:()=>DescriptionAndInfo,OnlyAccept:()=>OnlyAccept,OnlyDescription:()=>OnlyDescription,OnlyIgnore:()=>OnlyIgnore,WithIgnoreCheckbox:()=>WithIgnoreCheckbox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>home_notification_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),ui_button=__webpack_require__("./ui/components/ui/button/index.js"),check_box=__webpack_require__("./ui/components/ui/check-box/index.js"),tooltip=__webpack_require__("./ui/components/ui/tooltip/index.js"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var HomeNotification=function(param){var acceptText=param.acceptText,checkboxText=param.checkboxText,checkboxTooltipText=param.checkboxTooltipText,_param_classNames=param.classNames,descriptionText=param.descriptionText,ignoreText=param.ignoreText,infoText=param.infoText,onAccept=param.onAccept,onIgnore=param.onIgnore,_useState=_sliced_to_array((0,react.useState)(!1),2),checkboxState=_useState[0],setCheckBoxState=_useState[1],checkboxElement=checkboxText&&react.createElement(check_box.Ay,{id:"homeNotification_checkbox",checked:checkboxState,className:"home-notification__checkbox",onClick:function(){return setCheckBoxState(function(checked){return!checked})}});return react.createElement("div",{className:classnames_default().apply(void 0,["home-notification"].concat(_to_consumable_array(void 0===_param_classNames?[]:_param_classNames)))},react.createElement("div",{className:"home-notification__content"},react.createElement("div",{className:"home-notification__content-container"},react.createElement("div",{className:"home-notification__text"},descriptionText)),infoText?react.createElement(tooltip.A,{position:"top",title:infoText,wrapperClassName:"home-notification__tooltip-wrapper"},react.createElement(component_library.In,{name:component_library.$M.Info,color:design_system.Li.iconDefault})):null),react.createElement("div",{className:"home-notification__buttons"},onAccept&&acceptText?react.createElement(ui_button.A,{type:"primary",className:"home-notification__accept-button",onClick:onAccept},acceptText):null,onIgnore&&ignoreText?react.createElement(ui_button.A,{type:"secondary",className:"home-notification__ignore-button",onClick:function(){return onIgnore(checkboxState)}},ignoreText):null,checkboxText?react.createElement("div",{className:"home-notification__checkbox-wrapper"},checkboxTooltipText?react.createElement(tooltip.A,{position:"top",title:checkboxTooltipText,wrapperClassName:"home-notification__checkbox-label-tooltip"},checkboxElement):checkboxElement,react.createElement("label",{className:"home-notification__checkbox-label",htmlFor:"homeNotification_checkbox"},checkboxText)):null))};function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}HomeNotification.propTypes={acceptText:prop_types_default().node,checkboxText:prop_types_default().node,checkboxTooltipText:prop_types_default().node,classNames:prop_types_default().array,descriptionText:prop_types_default().node.isRequired,ignoreText:prop_types_default().node,infoText:prop_types_default().node,onAccept:prop_types_default().func,onIgnore:prop_types_default().func},HomeNotification.__docgenInfo={description:"",methods:[],displayName:"HomeNotification",props:{classNames:{defaultValue:{value:"[]",computed:!1},description:"Custom class names.",type:{name:"array"},required:!1},acceptText:{description:'The text for the "Accept" button. This must be accompanied by the `onAccept` prop.\n\nThe "Accept" button is only rendered if this prop is set.',type:{name:"node"},required:!1},checkboxText:{description:"The text to display alongside the checkbox.\n\nThe checkbox state is passed to the `onIgnore` handler, so this should only be used if the `onIgnore` prop is set.\n\nThe checkbox is only rendered if this prop is set.",type:{name:"node"},required:!1},checkboxTooltipText:{description:"The text to display in the checkbox tooltip.\n\nThe tooltip is only rendered if this prop is set.",type:{name:"node"},required:!1},descriptionText:{description:"The notification description.",type:{name:"node"},required:!0},ignoreText:{description:'The text for the "Ignore" button. This must be accompanied by the `onIgnore` prop.\n\nThe "Ignore" button is only rendered if this prop is set.',type:{name:"node"},required:!1},infoText:{description:"The text for the info icon tooltip in the top-right of the notification.\n\nThe info-icon is only rendered if this prop is set.",type:{name:"node"},required:!1},onAccept:{description:'The handler for the "Accept" button. This must be accompanied by the `acceptText` prop.',type:{name:"func"},required:!1},onIgnore:{description:'The handler for the "Ignore" button. This must be accompanied by the `ignoreText` prop.\n\nIf `checkboxText` is set, the checkbox state will be passed to this function as a boolean.',type:{name:"func"},required:!1}}};let home_notification_stories={title:"Components/App/HomeNotification",component:HomeNotification,argTypes:{acceptText:{control:"text"},checkboxText:{control:"text"},checkboxTooltipText:{control:"text"},classNames:{control:"object"},descriptionText:{control:"text"},ignoreText:{control:"text"},infoText:{control:"text"},onAccept:{action:"onAccept"},onIgnore:{action:"onIgnore"}}};var Template=function(args){return react.createElement(HomeNotification,args)},DefaultStory=Template.bind({});DefaultStory.storyName="Default",DefaultStory.args={acceptText:"Accept text",descriptionText:"Description text",ignoreText:"Ignore text",infoText:"Info text"};var WithIgnoreCheckbox=Template.bind({});WithIgnoreCheckbox.storyName="WithIgnoreCheckbox",WithIgnoreCheckbox.args=_object_spread_props(_object_spread({},DefaultStory.args),{checkboxText:"Don't show this again",checkboxTooltipText:"The value of this checkbox is passed to the `onIgnore` function when the ignore button is pressed",descriptionText:"Description text"});var OnlyDescription=Template.bind({});OnlyDescription.storyName="OnlyDescription",OnlyDescription.args={descriptionText:"Non-Interactive notification."};var DescriptionAndInfo=Template.bind({});DescriptionAndInfo.storyName="DescriptionAndInfo",DescriptionAndInfo.args={descriptionText:"Non-Interactive notification.",infoText:"Info text"};var OnlyAccept=Template.bind({});OnlyAccept.storyName="OnlyAccept",OnlyAccept.args={acceptText:"Mandatory Action",descriptionText:"The 'Accept' action for this notification is strongly recommended, so there is no option to dismiss"};var OnlyIgnore=Template.bind({});OnlyIgnore.storyName="OnlyIgnore",OnlyIgnore.args={descriptionText:"This is a dismissable notification.",ignoreText:"Dismiss"},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <HomeNotification {...args} />",...DefaultStory.parameters?.docs?.source}}},WithIgnoreCheckbox.parameters={...WithIgnoreCheckbox.parameters,docs:{...WithIgnoreCheckbox.parameters?.docs,source:{originalSource:"args => <HomeNotification {...args} />",...WithIgnoreCheckbox.parameters?.docs?.source}}},OnlyDescription.parameters={...OnlyDescription.parameters,docs:{...OnlyDescription.parameters?.docs,source:{originalSource:"args => <HomeNotification {...args} />",...OnlyDescription.parameters?.docs?.source}}},DescriptionAndInfo.parameters={...DescriptionAndInfo.parameters,docs:{...DescriptionAndInfo.parameters?.docs,source:{originalSource:"args => <HomeNotification {...args} />",...DescriptionAndInfo.parameters?.docs?.source}}},OnlyAccept.parameters={...OnlyAccept.parameters,docs:{...OnlyAccept.parameters?.docs,source:{originalSource:"args => <HomeNotification {...args} />",...OnlyAccept.parameters?.docs?.source}}},OnlyIgnore.parameters={...OnlyIgnore.parameters,docs:{...OnlyIgnore.parameters?.docs,source:{originalSource:"args => <HomeNotification {...args} />",...OnlyIgnore.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","WithIgnoreCheckbox","OnlyDescription","DescriptionAndInfo","OnlyAccept","OnlyIgnore"]},"./ui/components/ui/button/button.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var CLASSNAME_DEFAULT="btn-default",typeHash={default:CLASSNAME_DEFAULT,primary:"btn-primary",secondary:"btn-secondary",warning:"btn-warning",danger:"btn-danger","danger-primary":"btn-danger-primary",link:"btn-link",inline:"btn--inline",raised:"btn-raised"},Button=function(_param){var _onKeyUp,_role,_tabIndex,type=_param.type,_param_submit=_param.submit,large=_param.large,children=_param.children,icon=_param.icon,className=_param.className,_param_rounded=_param.rounded,buttonProps=_object_without_properties(_param,["type","submit","large","children","icon","className","rounded"]),Tag="button";return"link"===type?Tag="a":void 0!==_param_submit&&_param_submit&&(buttonProps.type="submit"),"link"===type&&"function"==typeof buttonProps.onClick&&(null!==(_onKeyUp=buttonProps.onKeyUp)&&void 0!==_onKeyUp||(buttonProps.onKeyUp=function(event){"Enter"===event.key&&buttonProps.onClick()}),null!==(_role=buttonProps.role)&&void 0!==_role||(buttonProps.role="button"),null!==(_tabIndex=buttonProps.tabIndex)&&void 0!==_tabIndex||(buttonProps.tabIndex=0)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag,_object_spread({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("button",(void 0===_param_rounded||_param_rounded)&&"link"!==type&&"inline"!==type&&"btn--rounded",typeHash[type]||CLASSNAME_DEFAULT,large&&"btn--large",className)},buttonProps),icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"button__icon"},icon):null,children)};Button.propTypes={type:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,submit:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,large:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,rounded:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool};let __WEBPACK_DEFAULT_EXPORT__=Button;Button.__docgenInfo={description:"@deprecated The <Button /> component has been deprecated in favor of the new <Button> component from the component-library.\nPlease update your code to use the new <Button> component instead, which can be found at ./ui/components/component-library/button/button.js.\nYou can find documentation for the new Button component in the MetaMask Storybook:\n{@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}\nIf you would like to help with the replacement of the old Button component, please submit a pull request against this GitHub issue:\n{@link https://github.com/MetaMask/metamask-extension/issues/18896}\n@see {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}",methods:[],displayName:"Button",props:{submit:{defaultValue:{value:"false",computed:!1},description:"If true sets the html 'type' attribute to type=\"submit\"",type:{name:"bool"},required:!1},rounded:{defaultValue:{value:"true",computed:!1},description:"Buttons are rounded by default.",type:{name:"bool"},required:!1},type:{description:"The type of variation a button can be.\nCan be one of 'default','primary','secondary','warning','danger','danger-primary' or 'link'",type:{name:"string"},required:!1},large:{description:"Increase the height of the button to 54px",type:{name:"bool"},required:!1},className:{description:"Additional className to provide on the root element of the button",type:{name:"string"},required:!1},children:{description:"The children of the button component",type:{name:"node"},required:!1},icon:{description:"Provide an icon component for an icon to appear on the left side of the button",type:{name:"node"},required:!1}}}},"./ui/components/ui/button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/button/button.component.js");let __WEBPACK_DEFAULT_EXPORT__=_button_component__WEBPACK_IMPORTED_MODULE_0__.A;_button_component__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"@deprecated The <Button /> component has been deprecated in favor of the new <Button> component from the component-library.\nPlease update your code to use the new <Button> component instead, which can be found at ./ui/components/component-library/button/button.js.\nYou can find documentation for the new Button component in the MetaMask Storybook:\n{@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}\nIf you would like to help with the replacement of the old Button component, please submit a pull request against this GitHub issue:\n{@link https://github.com/MetaMask/metamask-extension/issues/18896}\n@see {@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-button--default-story#button}",methods:[],displayName:"Button",props:{submit:{defaultValue:{value:"false",computed:!1},description:"If true sets the html 'type' attribute to type=\"submit\"",type:{name:"bool"},required:!1},rounded:{defaultValue:{value:"true",computed:!1},description:"Buttons are rounded by default.",type:{name:"bool"},required:!1},type:{description:"The type of variation a button can be.\nCan be one of 'default','primary','secondary','warning','danger','danger-primary' or 'link'",type:{name:"string"},required:!1},large:{description:"Increase the height of the button to 54px",type:{name:"bool"},required:!1},className:{description:"Additional className to provide on the root element of the button",type:{name:"string"},required:!1},children:{description:"The children of the button component",type:{name:"node"},required:!1},icon:{description:"Provide an icon component for an icon to appear on the left side of the button",type:{name:"node"},required:!1}}}},"./ui/components/ui/check-box/check-box.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__,Oi:()=>INDETERMINATE,X:()=>UNCHECKED,kK:()=>CHECKED});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var CHECKBOX_STATE={CHECKED:"CHECKED",INDETERMINATE:"INDETERMINATE",UNCHECKED:"UNCHECKED"},CHECKED=CHECKBOX_STATE.CHECKED,INDETERMINATE=CHECKBOX_STATE.INDETERMINATE,UNCHECKED=CHECKBOX_STATE.UNCHECKED,CheckBox=function(param){var className=param.className,disabled=param.disabled,id=param.id,onClick=param.onClick,checked=param.checked,title=param.title,dataTestId=param.dataTestId;"boolean"==typeof checked&&(checked=checked?CHECKBOX_STATE.CHECKED:CHECKBOX_STATE.UNCHECKED);var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function(){ref.current.indeterminate=checked===CHECKBOX_STATE.INDETERMINATE},[checked]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{checked:checked===CHECKBOX_STATE.CHECKED,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("check-box",className,{"far fa-square":checked===CHECKBOX_STATE.UNCHECKED,"fa fa-check-square check-box__checked":checked===CHECKBOX_STATE.CHECKED,"fa fa-minus-square check-box__indeterminate":checked===CHECKBOX_STATE.INDETERMINATE}),disabled:disabled,id:id,onClick:onClick?function(event){event.preventDefault(),onClick()}:null,readOnly:!0,ref:ref,title:title,"data-testid":dataTestId,type:"checkbox"})};CheckBox.propTypes={className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,id:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,checked:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(_to_consumable_array(Object.keys(CHECKBOX_STATE)).concat([!0,!1])).isRequired,title:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string},CheckBox.defaultProps={className:void 0,disabled:!1,id:void 0};let __WEBPACK_DEFAULT_EXPORT__=CheckBox;CheckBox.__docgenInfo={description:"@deprecated The `<CheckBox />` component has been deprecated in favor of the new `<Checkbox>` component from the component-library.\nPlease update your code to use the new `<Checkbox>` component instead, which can be found at ui/components/component-library/checkbox/checkbox.tsx.\nYou can find documentation for the new Checkbox component in the MetaMask Storybook:\n{@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-checkbox--docs}\nIf you would like to help with the replacement of the old CheckBox component, please submit a pull request against this GitHub issue:\n{@link https://github.com/MetaMask/metamask-extension/issues/20163}",methods:[],displayName:"CheckBox",props:{className:{defaultValue:{value:"undefined",computed:!0},description:"Add custom classname css",type:{name:"string"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"Check if checkbox disabled or not",type:{name:"bool"},required:!1},id:{defaultValue:{value:"undefined",computed:!0},description:"Checkbox ID",type:{name:"string"},required:!1},onClick:{description:"Click handler",type:{name:"func"},required:!1},checked:{description:"Check if the checkbox are checked or not",type:{name:"enum",value:[{value:"...Object.keys(CHECKBOX_STATE)",computed:!0},{value:"true",computed:!1},{value:"false",computed:!1}]},required:!0},title:{description:"Show title",type:{name:"string"},required:!1},dataTestId:{description:"Data test ID for checkbox Component",type:{name:"string"},required:!1}}}},"./ui/components/ui/check-box/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>_check_box_component__WEBPACK_IMPORTED_MODULE_0__.Ay});var _check_box_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/check-box/check-box.component.js")},"./ui/components/ui/tooltip/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_tooltip__WEBPACK_IMPORTED_MODULE_0__.A});var _tooltip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./ui/components/ui/tooltip/tooltip.js")},"./ui/components/ui/tooltip/tooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Tooltip});var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_tippy__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-tippy/dist/react-tippy.js");function _assert_this_initialized(self){if(void 0===self)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _get_prototype_of(o){return(_get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}function _possible_constructor_return(self,call){return call&&("object"===_type_of(call)||"function"==typeof call)?call:_assert_this_initialized(self)}function _set_prototype_of(o,p){return(_set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _create_super(Derived){var hasNativeReflectConstruct=_is_native_reflect_construct();return function _createSuperInternal(){var result,Super=_get_prototype_of(Derived);return result=hasNativeReflectConstruct?Reflect.construct(Super,arguments,_get_prototype_of(this).constructor):Super.apply(this,arguments),_possible_constructor_return(this,result)}}var Tooltip=function(PureComponent){_inherits(Tooltip,PureComponent);var _super=_create_super(Tooltip);function Tooltip(){return _class_call_check(this,Tooltip),_super.apply(this,arguments)}return _create_class(Tooltip,[{key:"render",value:function render(){var _this_props=this.props,arrow=_this_props.arrow,children=_this_props.children,containerClassName=_this_props.containerClassName,disabled=_this_props.disabled,position=_this_props.position,html=_this_props.html,interactive=_this_props.interactive,size=_this_props.size,distance=_this_props.distance,title=_this_props.title,trigger=_this_props.trigger,onHidden=_this_props.onHidden,offset=_this_props.offset,open=_this_props.open,wrapperClassName=_this_props.wrapperClassName,style=_this_props.style,wrapperStyle=_this_props.wrapperStyle,theme=_this_props.theme,tabIndex=_this_props.tabIndex,tag=_this_props.tag;return title||html?react__WEBPACK_IMPORTED_MODULE_0__.createElement(tag,{className:wrapperClassName,style:wrapperStyle},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_tippy__WEBPACK_IMPORTED_MODULE_1__.Tooltip,{arrow:arrow,className:containerClassName,disabled:disabled,hideOnClick:!1,distance:distance,html:html,interactive:interactive,onHidden:onHidden,position:position,size:size,offset:offset,style:style,title:disabled?"":title,trigger:trigger,open:open,theme:"tippy-tooltip--mm-custom ".concat(theme),tabIndex:tabIndex||0,tag:tag},children)):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:wrapperClassName},children)}}]),Tooltip}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);_define_property(Tooltip,"defaultProps",{arrow:!0,children:null,containerClassName:"",html:null,interactive:void 0,onHidden:null,distance:0,position:"left",offset:0,open:void 0,size:"small",title:null,trigger:"mouseenter focus",wrapperClassName:void 0,theme:"",tag:"div",wrapperStyle:{}}),_define_property(Tooltip,"propTypes",{arrow:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,containerClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,html:prop_types__WEBPACK_IMPORTED_MODULE_2___default().node,distance:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,interactive:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,offset:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,onHidden:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func,open:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,position:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["top","right","bottom","left"]),size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["small","regular","big"]),title:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,trigger:prop_types__WEBPACK_IMPORTED_MODULE_2___default().any,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,style:prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,wrapperStyle:prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,theme:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,tabIndex:prop_types__WEBPACK_IMPORTED_MODULE_2___default().number,tag:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string}),Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{arrow:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},containerClassName:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},html:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},interactive:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"bool"},required:!1},onHidden:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},distance:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},position:{defaultValue:{value:"'left'",computed:!1},description:"",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},offset:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},open:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'small'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'regular'",computed:!1},{value:"'big'",computed:!1}]},required:!1},title:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},trigger:{defaultValue:{value:"'mouseenter focus'",computed:!1},description:"",type:{name:"any"},required:!1},wrapperClassName:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"string"},required:!1},theme:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},tag:{defaultValue:{value:"'div'",computed:!1},description:"",type:{name:"string"},required:!1},wrapperStyle:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},style:{description:"",type:{name:"object"},required:!1},tabIndex:{description:"",type:{name:"number"},required:!1}}}}}]);