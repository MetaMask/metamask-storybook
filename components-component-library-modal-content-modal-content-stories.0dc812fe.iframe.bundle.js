(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[68491],{"./node_modules/@mdx-js/react/lib/index.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{RP:()=>useMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-16.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.kQ;return new Promise((resolve,reject)=>{__webpack_require__.e(21294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_1__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{H2:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.H2,Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ov,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/memoizerific sync recursive"(module){function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./ui/components/component-library/modal-content/modal-content.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Children:()=>Children,DefaultStory:()=>DefaultStory,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_content_stories});var ModalContentSizeStoryOption,react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),modal_content=__webpack_require__("./ui/components/component-library/modal-content/modal-content.tsx");function _createMdxContent(props){let _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"modalcontent",children:"ModalContent"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ModalContent"})," is the container for the modal dialog's content. It uses context supplied by the ",(0,jsx_runtime.jsx)(_components.code,{children:"Modal"})," component and cannot be used without it."]}),`
`,(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",target:"_blank",rel:"nofollow noopener noreferrer",children:"MetaMask Design System Guides"})}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modalcontent--default-story"})}),`
`,(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),`
`,(0,jsx_runtime.jsx)(dist.uY,{of:modal_content.$}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"children",children:"Children"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})," prop to render the content of ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalContent"}),". The ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalContent"})," should generally be used with the ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalHeader"})," component."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modalcontent--children"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Text, Button, ButtonVariant } from '../../component-library';

const [show, setShow] = useState(false);
const handleOnClick = () => {
  setShow(!show);
};

<Button variant={ButtonVariant.Primary} onClick={handleOnClick}>
  Open
</Button>
<Modal isOpen={show} onClose={handleOnClick}>
  <ModalContent {...args}>
    <ModalHeader marginBottom={4}>Modal Header</ModalHeader>
    <ModalBody>
      <Text marginBottom={4}>Modal Content</Text>
      <Button variant={ButtonVariant.Primary} onClick={handleOnClick}>
        Close
      </Button>
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
    </ModalBody>
  </ModalContent>
</Modal>
`})}),`
`,(0,jsx_runtime.jsx)(_components.h3,{id:"size",children:"Size"}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"size"})," prop to set the size of the ",(0,jsx_runtime.jsx)(_components.code,{children:"ModalContent"})]}),`
`,(0,jsx_runtime.jsxs)(_components.ul,{children:[`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ModalContentSize.Sm"})," (360px)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ModalContentSize.Md"})," (480px)"]}),`
`,(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ModalContentSize.Lg"})," (720px)"]}),`
`]}),`
`,(0,jsx_runtime.jsxs)(_components.p,{children:["To set a custom size, use the ",(0,jsx_runtime.jsx)(_components.code,{children:"modalDialogProps"})," prop and pass in a ",(0,jsx_runtime.jsx)(_components.code,{children:"className"})," with a max width."]}),`
`,(0,jsx_runtime.jsx)(dist.Hl,{children:(0,jsx_runtime.jsx)(dist.gG,{id:"components-componentlibrary-modalcontent--size"})}),`
`,(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:`import {
  ModalContent,
  ModalContentSize,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '../../component-library';

<ModalContent size={ModalContentSize.Sm}>
  <ModalHeader marginBottom={4}>
    This ModalContent is using size: sm
  </ModalHeader>
  <ModalBody>
    <Text marginBottom={4}>This ModalContent is using size: sm</Text>
  </ModalBody>
  <ModalFooter onSubmit={handleOnClose}>
</ModalContent>;

<ModalContent size={ModalContentSize.Md}>
  <ModalHeader marginBottom={4}>
    This ModalContent is using size: md
  </ModalHeader>
  <Text marginBottom={4}>This ModalContent is using size: md</Text>
</ModalContent>;

<ModalContent size={ModalContentSize.Lg}>
  <ModalHeader marginBottom={4}>
    This ModalContent is using size: lg
  </ModalHeader>
  <Text marginBottom={4}>This ModalContent is using size: lg</Text>
  <ModalFooter onSubmit={handleOnClose}>
</ModalContent>;

/* Using a className
  .max-width-800 {
    max-width: 800px;
  }
*/
<ModalContent modalDialogProps={{ className: 'max-width-800' }}>
  <ModalHeader marginBottom={4}>
    This ModalContent is using size: className
  </ModalHeader>
  <Text marginBottom={4}>
    This ModalContent has size set using modalDialogProps and adding a className
    setting a max width (max-width: 800px)
  </Text>
  <ModalFooter onSubmit={handleOnClose}>
</ModalContent>;
`})})]})}var design_system=__webpack_require__("./ui/helpers/constants/design-system.ts"),component_library_text=__webpack_require__("./ui/components/component-library/text/index.ts"),modal_content_types=__webpack_require__("./ui/components/component-library/modal-content/modal-content.types.ts"),component_library_button=__webpack_require__("./ui/components/component-library/button/index.ts"),modal=__webpack_require__("./ui/components/component-library/modal/index.ts"),modal_header=__webpack_require__("./ui/components/component-library/modal-header/index.ts"),modal_body=__webpack_require__("./ui/components/component-library/modal-body/index.ts"),modal_footer=__webpack_require__("./ui/components/component-library/modal-footer/index.ts"),box=__webpack_require__("./ui/components/component-library/box/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let modal_content_stories={title:"Components/ComponentLibrary/ModalContent",component:modal_content.$,tags:["autodocs"],parameters:{docs:{page:function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}},argTypes:{children:{control:"text"},size:{control:"select",options:Object.values(modal_content_types.E)},modalDialogProps:{control:"object"}}};var LoremIpsum=function(){return react.createElement(component_library_text.EY,{marginBottom:4},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod tortor vitae nisi blandit, eu aliquam nisl ultricies. Donec euismod scelerisque nisl, sit amet aliquet nunc. Donec euismod, nisl vitae consectetur aliquam, nunc nunc ultricies nunc, eget aliquam nisl nisl vitae nunc. Donec euismod, nisl vitae consectetur aliquam, nunc nunc ultricies nunc, eget aliquam nisl nisl vitae nunc. Donec euismod, nisl vitae consectetur aliquam, nunc nunc ultricies nunc, eget aliquam nisl nisl vitae nunc. Donec euismod, nisl vitae consectetur aliquam, nunc")},DefaultStory=function(args){var _useState=_sliced_to_array((0,react.useState)(!1),2),show=_useState[0],setShow=_useState[1],handleOnClick=function(){setShow(!show)};return react.createElement(react.Fragment,null,react.createElement(component_library_button.$n,{variant:component_library_button.Ak.Primary,onClick:handleOnClick},"Open"),react.createElement(modal.a,{isOpen:show,onClose:handleOnClick},react.createElement(modal_content.$,args,react.createElement(modal_header.r,null,"Modal Header"),react.createElement(modal_body.c,null,react.createElement(component_library_text.EY,null,"Modal Body")),react.createElement(modal_footer.j,{onSubmit:handleOnClick,submitButtonProps:{children:"Close"}}))))};DefaultStory.storyName="Default";var Children=function(args){var _useState=_sliced_to_array((0,react.useState)(!1),2),show=_useState[0],setShow=_useState[1],handleOnClick=function(){setShow(!show)};return react.createElement(react.Fragment,null,react.createElement(component_library_button.$n,{variant:component_library_button.Ak.Primary,onClick:handleOnClick},"Open"),react.createElement(modal.a,{isOpen:show,onClose:handleOnClick},react.createElement(modal_content.$,args,react.createElement(modal_header.r,{marginBottom:4},"Modal Header"),react.createElement(modal_body.c,null,react.createElement(component_library_text.EY,{marginBottom:4},"The ModalContent with ModalHeader, ModalBody, ModalFooter as children"),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null),react.createElement(LoremIpsum,null)),react.createElement(modal_footer.j,{onSubmit:handleOnClick,submitButtonProps:{children:"Close"}}))))},ModalContentSizeStoryOption1=((ModalContentSizeStoryOption=ModalContentSizeStoryOption1||{}).Sm="sm",ModalContentSizeStoryOption.Md="md",ModalContentSizeStoryOption.Lg="lg",ModalContentSizeStoryOption.ClassName="className",ModalContentSizeStoryOption),Size=function(args){var _useState=_sliced_to_array((0,react.useState)(null),2),currentSize=_useState[0],setCurrentSize=_useState[1],handleOnClick=function(size){setCurrentSize(currentSize===size?null:size)};return react.createElement(react.Fragment,null,react.createElement(box.a,{display:design_system.nl.Flex,flexWrap:design_system.I4.Wrap,gap:4},Object.values(ModalContentSizeStoryOption1).map(function(size){return react.createElement(component_library_button.$n,{key:size,variant:component_library_button.Ak.Secondary,onClick:function(){return handleOnClick(size)}},"Show ".concat(size," size"))})),currentSize&&react.createElement(modal.a,{isOpen:!0,onClose:function(){return setCurrentSize(null)}},react.createElement(modal_content.$,_object_spread_props(_object_spread({},args),{size:function(size){switch(size){case"sm":default:return modal_content_types.E.Sm;case"md":return modal_content_types.E.Md;case"lg":return modal_content_types.E.Lg}}(currentSize),modalDialogProps:"className"===currentSize?{className:"max-width-800"}:{}}),react.createElement(modal_header.r,{marginBottom:4,onClose:function(){return setCurrentSize(null)}},"ModalContent size: ".concat(currentSize)),react.createElement(modal_body.c,null,react.createElement(component_library_text.EY,{marginBottom:4},"className"===currentSize?react.createElement(react.Fragment,null,"This ModalContent has size set using modalDialogProps and adding a className setting a max width (max-width: 800px)"," "):react.createElement(react.Fragment,null,"This ModalContent is using size: ",currentSize))),react.createElement(modal_footer.j,{onSubmit:function(){return setCurrentSize(null)},submitButtonProps:{children:"Close"}}))))};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`args => {
  const [show, setShow] = useState(false);
  const handleOnClick = () => {
    setShow(!show);
  };
  return <>
      <Button variant={ButtonVariant.Primary} onClick={handleOnClick}>
        Open
      </Button>
      <Modal isOpen={show} onClose={handleOnClick}>
        <ModalContent {...args}>
          <ModalHeader>Modal Header</ModalHeader>
          <ModalBody>
            <Text>Modal Body</Text>
          </ModalBody>
          <ModalFooter onSubmit={handleOnClick} submitButtonProps={{
          children: 'Close'
        }} />
        </ModalContent>
      </Modal>
    </>;
}`,...DefaultStory.parameters?.docs?.source}}},Children.parameters={...Children.parameters,docs:{...Children.parameters?.docs,source:{originalSource:`args => {
  const [show, setShow] = useState(false);
  const handleOnClick = () => {
    setShow(!show);
  };
  return <>
      <Button variant={ButtonVariant.Primary} onClick={handleOnClick}>
        Open
      </Button>
      <Modal isOpen={show} onClose={handleOnClick}>
        <ModalContent {...args}>
          <ModalHeader marginBottom={4}>Modal Header</ModalHeader>
          <ModalBody>
            <Text marginBottom={4}>
              The ModalContent with ModalHeader, ModalBody, ModalFooter as
              children
            </Text>
            <LoremIpsum />
            <LoremIpsum />
            <LoremIpsum />
            <LoremIpsum />
            <LoremIpsum />
          </ModalBody>
          <ModalFooter onSubmit={handleOnClick} submitButtonProps={{
          children: 'Close'
        }} />
        </ModalContent>
      </Modal>
    </>;
}`,...Children.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:`args => {
  const [currentSize, setCurrentSize] = useState<ModalContentSizeStoryOption | null>(null);
  const handleOnClick = (size: ModalContentSizeStoryOption) => {
    setCurrentSize(currentSize === size ? null : size);
  };
  const getSize = (size: ModalContentSizeStoryOption) => {
    switch (size) {
      case ModalContentSizeStoryOption.Sm:
        return ModalContentSize.Sm;
      case ModalContentSizeStoryOption.Md:
        return ModalContentSize.Md;
      case ModalContentSizeStoryOption.Lg:
        return ModalContentSize.Lg;
      default:
        return ModalContentSize.Sm;
    }
  };
  return <>
      <Box display={Display.Flex} flexWrap={FlexWrap.Wrap} gap={4}>
        {Object.values(ModalContentSizeStoryOption).map(size => <Button key={size} variant={ButtonVariant.Secondary} onClick={() => handleOnClick(size)}>
            {\`Show \${size} size\`}
          </Button>)}
      </Box>
      {currentSize && <Modal isOpen={true} onClose={() => setCurrentSize(null)}>
          <ModalContent {...args} size={getSize(currentSize)} modalDialogProps={currentSize === ModalContentSizeStoryOption.ClassName ? {
        className: 'max-width-800'
      } : {}}>
            <ModalHeader marginBottom={4} onClose={() => setCurrentSize(null)}>
              {\`ModalContent size: \${currentSize}\`}
            </ModalHeader>
            <ModalBody>
              <Text marginBottom={4}>
                {currentSize === ModalContentSizeStoryOption.ClassName ? <>
                    This ModalContent has size set using modalDialogProps and
                    adding a className setting a max width (max-width:
                    800px){' '}
                  </> : <>This ModalContent is using size: {currentSize}</>}
              </Text>
            </ModalBody>
            <ModalFooter onSubmit={() => setCurrentSize(null)} submitButtonProps={{
          children: 'Close'
        }} />
          </ModalContent>
        </Modal>}
    </>;
}`,...Size.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","Children","Size"]}}]);
//# sourceMappingURL=components-component-library-modal-content-modal-content-stories.0dc812fe.iframe.bundle.js.map