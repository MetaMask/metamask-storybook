"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[16302],{"./ui/components/ui/icon-border/icon-border.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>icon_border_stories});var react=__webpack_require__("./node_modules/react/index.js"),design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library=__webpack_require__("./ui/components/component-library/index.ts"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function IconBorder(param){var children=param.children,size=param.size,className=param.className;return react.createElement("div",{className:classnames_default()("icon-border",className),style:{height:"".concat(size,"px"),width:"".concat(size,"px")}},children)}IconBorder.propTypes={className:prop_types_default().string,children:prop_types_default().node.isRequired,size:prop_types_default().number.isRequired},IconBorder.__docgenInfo={description:"@deprecated The `<IconBorder />` component has been deprecated in favor of the `<AvatarBase />` component from the component-library.\nPlease update your code to use the new `<AvatarBase>` component instead, which can be found at ./ui/components/component-library/avatar-base/avatar-base.js.\nYou can find documentation for the new AvatarBase component in the MetaMask Storybook:\n{@link https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-avatarbase--docs}\nIf you would like to help with the replacement of the old IconBorder component, please submit a pull request",methods:[],displayName:"IconBorder",props:{className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!0},size:{description:"",type:{name:"number"},required:!0}}};let icon_border_stories={title:"Components/UI/IconBorder",component:IconBorder,argTypes:{className:{control:"text"},children:{control:"text"},size:{control:"number"}},args:{className:"",children:"D",size:32}};var DefaultStory=function(args){return react.createElement(react.Fragment,null,react.createElement(component_library.b8,{severity:design_system.AI.Warning,title:"Deprecated",description:"<IconBorder/> has been deprecated in favor of the <AvatarBase /> component",marginBottom:4}),react.createElement(IconBorder,args))};DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:'args => <>\n    <BannerAlert severity={Severity.Warning} title="Deprecated" description="<IconBorder/> has been deprecated in favor of the <AvatarBase /> component" marginBottom={4} />\n    <IconBorder {...args} />\n  </>',...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]}}]);