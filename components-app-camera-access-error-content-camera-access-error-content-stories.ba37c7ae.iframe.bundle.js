"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[53133],{"./ui/components/app/camera-access-error-content/camera-access-error-content.stories.tsx"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BlockedChromium:()=>BlockedChromium,BlockedFirefox:()=>BlockedFirefox,Needed:()=>Needed,NeededContinueLoading:()=>NeededContinueLoading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_metamask_design_system_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Box/Box.types.mjs"),_metamask_design_system_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Box/Box.mjs"),_camera_access_error_content__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/app/camera-access-error-content/camera-access-error-content.tsx");let __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/CameraAccessErrorContent",component:_camera_access_error_content__WEBPACK_IMPORTED_MODULE_3__.l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
Locale copy lives inside the component (\`useI18nContext\`).

**Variants**
- **needed** — User dismissed the permission prompt (Chromium-style flow); primary action retries the prompt.
- **blocked** — Camera denied / blocked. **Firefox**: numbered steps (step 2 uses \`mozExtensionDisplay\`). **Chromium**: Videocam hint callout, **Open settings**, and primary **Continue**.

**Blocked props (type-level)**
\`mozExtensionDisplay\` and \`onOpenSettings\` are required for \`blocked\` even though only one branch uses them at runtime (Firefox vs Chromium).

**Optional (both variants)**
\`continueLoading\` — primary button loading/disabled state.
\`rootPaddingHorizontal\` / \`rootPaddingBottom\` — outer wrapper padding on the design-system scale (default \`4\` each). Use \`0\` when embedded in a padded container (e.g. \`ModalBody\`).
`.trim()}}},decorators:[function(Story){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_metamask_design_system_react__WEBPACK_IMPORTED_MODULE_2__.a,{backgroundColor:_metamask_design_system_react__WEBPACK_IMPORTED_MODULE_1__.v$.BackgroundDefault,padding:4,style:{width:"100%",maxWidth:400}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))}],argTypes:{variant:{control:"select",options:[_camera_access_error_content__WEBPACK_IMPORTED_MODULE_3__.A.Needed,_camera_access_error_content__WEBPACK_IMPORTED_MODULE_3__.A.Blocked],description:"`needed` — prompt dismissed. `blocked` — denied (UI branches on `isFirefox`)."},onContinue:{action:"onContinue",description:"Primary button handler. Label is always the `continue` locale string."},continueLoading:{control:"boolean",description:"Disables the primary button and shows a loading state."},rootPaddingHorizontal:{control:{type:"number",min:0,max:12,step:1},description:"Root horizontal padding (0–12). Default 4; use 0 inside padded parents."},rootPaddingBottom:{control:{type:"number",min:0,max:12,step:1},description:"Root bottom padding (0–12). Default 4; use 0 inside padded parents."},isFirefox:{control:"boolean",description:"`blocked` only: Firefox steps vs Chromium hint + Open settings.",if:{arg:"variant",eq:_camera_access_error_content__WEBPACK_IMPORTED_MODULE_3__.A.Blocked}},mozExtensionDisplay:{control:"text",description:"`blocked` only: Firefox step 2; ignored when `isFirefox` is false.",if:{arg:"variant",eq:_camera_access_error_content__WEBPACK_IMPORTED_MODULE_3__.A.Blocked}},onOpenSettings:{action:"onOpenSettings",description:"`blocked` only: Chromium secondary; not shown for Firefox.",if:{arg:"variant",eq:_camera_access_error_content__WEBPACK_IMPORTED_MODULE_3__.A.Blocked}}}};var Needed={args:{variant:_camera_access_error_content__WEBPACK_IMPORTED_MODULE_3__.A.Needed,onContinue:function(){}}},NeededContinueLoading={storyName:"Needed (continue loading)",args:{variant:_camera_access_error_content__WEBPACK_IMPORTED_MODULE_3__.A.Needed,continueLoading:!0,onContinue:function(){}}},BlockedChromium={storyName:"Blocked (Chrome / Chromium)",args:{variant:_camera_access_error_content__WEBPACK_IMPORTED_MODULE_3__.A.Blocked,isFirefox:!1,mozExtensionDisplay:"",onContinue:function(){},onOpenSettings:function(){}}},BlockedFirefox={storyName:"Blocked (Firefox)",args:{variant:_camera_access_error_content__WEBPACK_IMPORTED_MODULE_3__.A.Blocked,isFirefox:!0,mozExtensionDisplay:"moz-extension://ab5f75ae…d4aa03",onContinue:function(){},onOpenSettings:function(){}}};Needed.parameters={...Needed.parameters,docs:{...Needed.parameters?.docs,source:{originalSource:`{
  args: {
    variant: CameraAccessErrorContentVariant.Needed,
    onContinue: () => undefined
  } satisfies CameraAccessErrorContentNeededProps
}`,...Needed.parameters?.docs?.source},description:{story:"Default “needed” state; use Controls for `continueLoading` and root padding.",...Needed.parameters?.docs?.description}}},NeededContinueLoading.parameters={...NeededContinueLoading.parameters,docs:{...NeededContinueLoading.parameters?.docs,source:{originalSource:`{
  storyName: 'Needed (continue loading)',
  args: {
    variant: CameraAccessErrorContentVariant.Needed,
    continueLoading: true,
    onContinue: () => undefined
  } satisfies CameraAccessErrorContentNeededProps
}`,...NeededContinueLoading.parameters?.docs?.source},description:{story:"Primary button in a loading state.",...NeededContinueLoading.parameters?.docs?.description}}},BlockedChromium.parameters={...BlockedChromium.parameters,docs:{...BlockedChromium.parameters?.docs,source:{originalSource:`{
  storyName: 'Blocked (Chrome / Chromium)',
  args: {
    variant: CameraAccessErrorContentVariant.Blocked,
    isFirefox: false,
    mozExtensionDisplay: '',
    onContinue: () => undefined,
    onOpenSettings: () => undefined
  } satisfies CameraAccessErrorContentBlockedProps
}`,...BlockedChromium.parameters?.docs?.source}}},BlockedFirefox.parameters={...BlockedFirefox.parameters,docs:{...BlockedFirefox.parameters?.docs,source:{originalSource:`{
  storyName: 'Blocked (Firefox)',
  args: {
    variant: CameraAccessErrorContentVariant.Blocked,
    isFirefox: true,
    mozExtensionDisplay: MOZ_EXTENSION_DISPLAY_MOCK,
    onContinue: () => undefined,
    onOpenSettings: () => undefined
  } satisfies CameraAccessErrorContentBlockedProps
}`,...BlockedFirefox.parameters?.docs?.source}}};let __namedExportsOrder=["Needed","NeededContinueLoading","BlockedChromium","BlockedFirefox"];try{Needed.displayName="Needed",Needed.__docgenInfo={description:"Default “needed” state; use Controls for `continueLoading` and root padding.",displayName:"Needed",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/app/camera-access-error-content/camera-access-error-content.stories.tsx#Needed"]={docgenInfo:Needed.__docgenInfo,name:"Needed",path:"ui/components/app/camera-access-error-content/camera-access-error-content.stories.tsx#Needed"})}catch(__react_docgen_typescript_loader_error){}try{NeededContinueLoading.displayName="NeededContinueLoading",NeededContinueLoading.__docgenInfo={description:"Primary button in a loading state.",displayName:"NeededContinueLoading",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["ui/components/app/camera-access-error-content/camera-access-error-content.stories.tsx#NeededContinueLoading"]={docgenInfo:NeededContinueLoading.__docgenInfo,name:"NeededContinueLoading",path:"ui/components/app/camera-access-error-content/camera-access-error-content.stories.tsx#NeededContinueLoading"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-app-camera-access-error-content-camera-access-error-content-stories.ba37c7ae.iframe.bundle.js.map