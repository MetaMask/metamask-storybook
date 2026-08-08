"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[56816],{"./ui/components/ui/tabs/tabs.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/ui/tabs/index.ts");let __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/Tabs",component:_index__WEBPACK_IMPORTED_MODULE_1__.t,argTypes:{activeTab:{control:"text"},onTabClick:{action:"tab-clicked"}}};var Default={args:{children:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.o,{key:"tab1",name:"Tab 1",tabKey:"tab1"},"Content 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.o,{key:"tab2",name:"Tab 2",tabKey:"tab2"},"Content 2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.o,{key:"tab3",name:"Tab 3",tabKey:"tab3"},"Content 3")]}},Disabled={args:{children:[react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.o,{key:"tab1",name:"Tab 1",tabKey:"tab1"},"Content 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.o,{key:"tab2",name:"Tab 2",tabKey:"tab2",disabled:!0},"Content 2 (Disabled)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.o,{key:"tab3",name:"Tab 3",tabKey:"tab3"},"Content 3")]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Tab key="tab1" name="Tab 1" tabKey="tab1">
        Content 1
      </Tab>, <Tab key="tab2" name="Tab 2" tabKey="tab2">
        Content 2
      </Tab>, <Tab key="tab3" name="Tab 3" tabKey="tab3">
        Content 3
      </Tab>]
  }
}`,...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Tab key="tab1" name="Tab 1" tabKey="tab1">
        Content 1
      </Tab>, <Tab key="tab2" name="Tab 2" tabKey="tab2" disabled>
        Content 2 (Disabled)
      </Tab>, <Tab key="tab3" name="Tab 3" tabKey="tab3">
        Content 3
      </Tab>]
  }
}`,...Disabled.parameters?.docs?.source}}};let __namedExportsOrder=["Default","Disabled"]},"./ui/components/ui/transition.ts"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{hv:()=>isViewTransitionSupported,ni:()=>transitionForward,vv:()=>transitionBack});var _shared_lib_browser_runtime_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./shared/lib/browser-runtime.utils.ts"),_shared_constants_app__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./shared/constants/app.ts"),isViewTransitionSupported=function(){return(0,_shared_lib_browser_runtime_utils__WEBPACK_IMPORTED_MODULE_0__.Y0)()!==_shared_constants_app__WEBPACK_IMPORTED_MODULE_1__.Yb&&!!document.startViewTransition},startTransition=function(direction,callback){if(!isViewTransitionSupported())return void callback();document.documentElement.dataset.pageTransition=direction,document.startViewTransition(callback).finished.finally(function(){delete document.documentElement.dataset.pageTransition})},transitionForward=function(callback){startTransition("forward",callback)},transitionBack=function(callback){startTransition("back",callback)}}}]);
//# sourceMappingURL=components-ui-tabs-tabs-stories.0492db1a.iframe.bundle.js.map