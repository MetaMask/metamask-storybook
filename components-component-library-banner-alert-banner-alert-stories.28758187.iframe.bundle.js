"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[11827],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./ui/components/component-library/banner-alert/banner-alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActionButton:()=>ActionButton,Children:()=>Children,DefaultStory:()=>DefaultStory,Description:()=>Description,OnClose:()=>OnClose,SeverityStory:()=>SeverityStory,Title:()=>Title,__namedExportsOrder:()=>__namedExportsOrder,default:()=>banner_alert_stories});var react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_ADDONS_=__webpack_require__("@storybook/addons"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),banner_alert=__webpack_require__("./ui/components/component-library/banner-alert/banner-alert.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"banneralert",children:"BannerAlert"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"BannerAlert"})," is an inline notification that notifies users of important information & sometimes time-sensitive changes."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-banneralert--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:banner_alert.b}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"severity",children:"Severity"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"severity"})," prop and the ",(0,jsx_runtime.jsx)(_components.code,{children:"BannerAlertSeverity"})," enum from ",(0,jsx_runtime.jsx)(_components.code,{children:"../../component-library"})," to change the context of ",(0,jsx_runtime.jsx)(_components.code,{children:"BannerAlert"}),"."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:"Possible options:"}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"BannerAlertSeverity.Info"})," Default"]}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"BannerAlertSeverity.Warning"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"BannerAlertSeverity.Danger"})}),`
`,(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.code,{children:"BannerAlertSeverity.Success"})}),`
`]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-banneralert--severity-story"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { BannerAlert, BannerAlertSeverity } from '../../component-library';

<BannerAlert title="Info">
  This is a demo of severity Info.
</BannerAlert>
<BannerAlert severity={BannerAlertSeverity.Warning} title="Warning">
  This is a demo of severity Warning.
</BannerAlert>
<BannerAlert severity={BannerAlertSeverity.Danger} title="Danger">
  This is a demo of severity Danger.
</BannerAlert>
<BannerAlert severity={BannerAlertSeverity.Success} title="Success">
  This is a demo of severity Success.
</BannerAlert>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"title",children:"Title"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"title"})," prop to pass a string that is sentence case no period. Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"titleProps"})," prop to pass additional props to the ",(0,jsx_runtime.jsx)(_components.code,{children:"Text"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-banneralert--title"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { BannerAlert } from '../../component-library';

<BannerAlert title="Title is sentence case no period">
  Pass only a string through the title prop
</BannerAlert>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"description",children:"Description"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"description"})," is the content area of the ",(0,jsx_runtime.jsx)(_components.code,{children:"BannerAlert"})," that must be a string. Description shouldn't repeat title and only 1-3 lines."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["If content requires more than a string, see ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," prop below."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-banneralert--description"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { BannerAlert } from '../../component-library';
<BannerAlert
  title="Description vs children"
  description="Pass only a string through the description prop or you can use children if the contents require more"
/>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," prop is an alternative to ",(0,jsx_runtime.jsx)(_components.code,{children:"description"})," for ",(0,jsx_runtime.jsx)(_components.code,{children:"BannerAlert"})," when more than a string is needed. Children content shouldn't repeat title and only 1-3 lines."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-banneralert--children"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { BannerAlert, ButtonLinkSize } from '../../component-library';

<BannerAlert>
  {\`Description shouldn't repeat title. 1-3 lines. Can contain a \`}
  <ButtonLink
    size={ButtonLinkSize.Auto}
    href="https://metamask.io/"
    target="_blank"
  >
    hyperlink.
  </ButtonLink>
</BannerAlert>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"action-button-label-onclick--props",children:"Action Button Label, onClick, & Props"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"actionButtonLabel"})," prop to pass text, ",(0,jsx_runtime.jsx)(_components.code,{children:"actionButtonOnClick"})," prop to pass an onClick handler, and ",(0,jsx_runtime.jsx)(_components.code,{children:"actionButtonProps"})," prop to pass an object of ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/components-componentlibrary-buttonlink--default-story",children:"ButtonLink props"})," for the action"]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-banneralert--action-button"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { BannerAlert, IconName } from '../../component-library';

<BannerAlert
  title="Action prop demo"
  actionButtonLabel="Action"
  actionButtonProps={{
    endIconName: IconName.Arrow2Right,
  }}
  actionButtonOnClick={() => console.log('ButtonLink actionButtonOnClick demo')}
>
  Use actionButtonLabel for action text, actionButtonOnClick for the onClick
  handler, and actionButtonProps to pass any ButtonLink prop types such as
  iconName
</BannerAlert>;
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"on-close",children:"On Close"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"onClose"})," prop to pass a function to the close button. The close button will appear when this prop is used."]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Additional props can be passed to the close button with ",(0,jsx_runtime.jsx)(_components.code,{children:"closeButtonProps"})]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-banneralert--on-close"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import { BannerAlert } from '../../component-library';

<BannerAlert
  title="onClose demo"
  onClose={() => console.log('close button clicked')}
>
  Click the close button icon to hide this notifcation
</BannerAlert>;
`})})]})}__webpack_require__("./ui/components/component-library/banner-base/index.ts");var banner_alert_types=__webpack_require__("./ui/components/component-library/banner-alert/banner-alert.types.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts"),button_link=__webpack_require__("./ui/components/component-library/button-link/index.ts"),icon=__webpack_require__("./ui/components/component-library/icon/index.ts"),button_primary=__webpack_require__("./ui/components/component-library/button-primary/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let banner_alert_stories={title:"Components/ComponentLibrary/BannerAlert",component:banner_alert.b,parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{severity:{control:"select",options:Object.values(banner_alert_types.O)},className:{control:"text"},title:{control:"text"},description:{control:"text"},children:{control:"text"},actionButtonLabel:{control:"text"},actionButtonOnClick:{action:"actionButtonOnClick"},actionButtonProps:{control:"object"},onClose:{action:"onClose"}}};var Template=function(args){return react.createElement(banner_alert.b,args)},DefaultStory=Template.bind({});DefaultStory.storyName="Default",DefaultStory.args={title:"Title is sentence case no period",children:"Description shouldn't repeat title. 1-3 lines.",actionButtonLabel:"Action"};var SeverityStory=function(args){return react.createElement(box.a,{display:design_system.nl.Flex,flexDirection:design_system.bo.Column,gap:3},react.createElement(banner_alert.b,_object_spread_props(_object_spread({},args),{severity:banner_alert_types.O.Info,title:"Info"}),"This is a demo of severity Info."),react.createElement(banner_alert.b,_object_spread_props(_object_spread({},args),{severity:banner_alert_types.O.Warning,title:"Warning"}),"This is a demo of severity Warning."),react.createElement(banner_alert.b,_object_spread_props(_object_spread({},args),{severity:banner_alert_types.O.Danger,title:"Danger"}),"This is a demo of severity Danger."),react.createElement(banner_alert.b,_object_spread_props(_object_spread({},args),{severity:banner_alert_types.O.Success,title:"Success"}),"This is a demo of severity Success."))};SeverityStory.storyName="Severity";var Title=Template.bind({});Title.args={title:"Title is sentence case no period",children:"Pass only a string through the title prop"};var Description=Template.bind({});Description.args={title:"Description vs children",description:"Pass only a string through the description prop or you can use children if the contents require more"};var Children=Template.bind({});Children.args={children:react.createElement(react.Fragment,null,"Description shouldn't repeat title. 1-3 lines. Can contain a ",react.createElement(button_link.v,{size:button_link.w.Auto,href:"https://metamask.io/",externalLink:!0},"hyperlink."))};var ActionButton=Template.bind({});ActionButton.args={title:"Action prop demo",actionButtonLabel:"Action",actionButtonOnClick:function(){return console.log("ButtonLink actionButtonOnClick demo")},actionButtonProps:{endIconName:icon.$M.Arrow2Right},children:"Use actionButtonLabel for action text, actionButtonOnClick for the onClick handler, and actionButtonProps to pass any ButtonLink prop types such as iconName"};var OnClose=function(args){var _useState=_sliced_to_array((0,external_STORYBOOK_MODULE_ADDONS_.useState)(!0),2),isShown=_useState[0],setShown=_useState[1],bannerAlertToggle=function(){isShown&&console.log("close button clicked"),setShown(!isShown)};return react.createElement(react.Fragment,null,isShown?react.createElement(banner_alert.b,_object_spread_props(_object_spread({},args),{onClose:bannerAlertToggle})):react.createElement(button_primary.$,{onClick:bannerAlertToggle},"View BannerAlert"))};OnClose.args={title:"onClose demo",children:"Click the close button icon to hide this notifcation"},DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <BannerAlert {...args} />",...DefaultStory.parameters?.docs?.source}}},SeverityStory.parameters={...SeverityStory.parameters,docs:{...SeverityStory.parameters?.docs,source:{originalSource:`args => {
  return <Box display={Display.Flex} flexDirection={FlexDirection.Column} gap={3}>
      <BannerAlert {...args} severity={BannerAlertSeverity.Info} title="Info">
        This is a demo of severity Info.
      </BannerAlert>
      <BannerAlert {...args} severity={BannerAlertSeverity.Warning} title="Warning">
        This is a demo of severity Warning.
      </BannerAlert>
      <BannerAlert {...args} severity={BannerAlertSeverity.Danger} title="Danger">
        This is a demo of severity Danger.
      </BannerAlert>
      <BannerAlert {...args} severity={BannerAlertSeverity.Success} title="Success">
        This is a demo of severity Success.
      </BannerAlert>
    </Box>;
}`,...SeverityStory.parameters?.docs?.source}}},Title.parameters={...Title.parameters,docs:{...Title.parameters?.docs,source:{originalSource:"args => <BannerAlert {...args} />",...Title.parameters?.docs?.source}}},Description.parameters={...Description.parameters,docs:{...Description.parameters?.docs,source:{originalSource:"args => <BannerAlert {...args} />",...Description.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:"args => <BannerAlert {...args} />",...Children.parameters?.docs?.source}}},ActionButton.parameters={...ActionButton.parameters,docs:{...ActionButton.parameters?.docs,source:{originalSource:"args => <BannerAlert {...args} />",...ActionButton.parameters?.docs?.source}}},OnClose.parameters={...OnClose.parameters,docs:{...OnClose.parameters?.docs,source:{originalSource:`args => {
  const [isShown, setShown] = useState(true);
  const bannerAlertToggle = () => {
    if (isShown) {
      console.log('close button clicked');
    }
    setShown(!isShown);
  };
  return <>
      {isShown ? <BannerAlert {...args} onClose={bannerAlertToggle} /> : <ButtonPrimary onClick={bannerAlertToggle}>
          View BannerAlert
        </ButtonPrimary>}
    </>;
}`,...OnClose.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","SeverityStory","Title","Description","Children","ActionButton","OnClose"]}}]);
//# sourceMappingURL=components-component-library-banner-alert-banner-alert-stories.28758187.iframe.bundle.js.map