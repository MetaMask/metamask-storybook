"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[22185,44566,93054],{"./node_modules/@metamask/design-system-react/dist/components/Button/Button.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:()=>Button});var module,module1,module2,module3,react=__webpack_require__("./node_modules/react/index.js"),types=__webpack_require__("./node_modules/@metamask/design-system-react/dist/types/index.mjs"),tw_merge=__webpack_require__("./node_modules/@metamask/design-system-react/dist/utils/tw-merge.mjs"),ButtonBase=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/ButtonBase/ButtonBase.mjs");let React=(module=react,module?.__esModule?module.default:module),ButtonPrimary=(0,react.forwardRef)(({className,isDanger,isInverse,isDisabled,isLoading,...props},ref)=>{let isInteractive=!(isDisabled??isLoading),mergedClassName=(0,tw_merge.Q)(!isDanger&&!isInverse&&["bg-icon-default text-primary-inverse",isLoading&&"bg-icon-default-pressed"],isDanger&&!isInverse&&["bg-error-default text-error-inverse",isLoading&&"bg-error-default-pressed"],isInverse&&!isDanger&&["bg-default text-default",isLoading&&"bg-default-pressed"],isInverse&&isDanger&&["bg-default text-error-default",isLoading&&"bg-default-pressed"],isInteractive&&[!isDanger&&!isInverse&&["hover:bg-icon-default-hover","active:bg-icon-default-pressed"],isDanger&&!isInverse&&["hover:bg-error-default-hover","active:bg-error-default-pressed"],isInverse&&!isDanger&&["hover:bg-default-hover","active:bg-default-pressed"],isInverse&&isDanger&&["hover:bg-default-hover","active:bg-default-pressed"]],"focus-visible:outline-none focus-visible:ring-0",isInverse?"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background-default":"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-default",isLoading&&"cursor-not-allowed",isDisabled&&!isLoading&&["opacity-50","cursor-not-allowed"],className);return React.createElement(ButtonBase.u,{ref:ref,className:mergedClassName,isDisabled:isDisabled,isLoading:isLoading,...props})});ButtonPrimary.displayName="ButtonPrimary";let ButtonSecondary_React=(module1=react,module1?.__esModule?module1.default:module1),ButtonSecondary=(0,react.forwardRef)(({className,isDanger,isInverse,isDisabled,isLoading,...props},ref)=>{let isInteractive=!(isDisabled??isLoading),mergedClassName=(0,tw_merge.Q)(!isDanger&&!isInverse&&["bg-muted text-default",isLoading&&"bg-muted-pressed"],isDanger&&!isInverse&&["bg-muted text-error-default",isLoading&&"bg-muted-pressed"],isInverse&&!isDanger&&["border-2 border-primary-inverse bg-transparent text-primary-inverse",isLoading&&"bg-pressed"],isInverse&&isDanger&&["border-0 bg-default text-error-default",isLoading&&"bg-default-pressed"],isInteractive&&[!isDanger&&!isInverse&&["hover:bg-muted-hover","active:bg-muted-pressed"],isDanger&&!isInverse&&["hover:bg-muted-hover","active:bg-muted-pressed"],isInverse&&!isDanger&&["hover:bg-hover","active:bg-pressed"],isInverse&&isDanger&&["hover:bg-default-hover","active:bg-default-pressed"]],"focus-visible:outline-none focus-visible:ring-0",isInverse?"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background-default":"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-default",isLoading&&"cursor-not-allowed",isDisabled&&!isLoading&&["opacity-50","cursor-not-allowed"],className);return ButtonSecondary_React.createElement(ButtonBase.u,{ref:ref,className:mergedClassName,isDisabled:isDisabled,isLoading:isLoading,...props})});ButtonSecondary.displayName="ButtonSecondary";let ButtonTertiary_React=(module2=react,module2?.__esModule?module2.default:module2),ButtonTertiary=(0,react.forwardRef)(({className,isDanger,isInverse,isDisabled,isLoading,...props},ref)=>{let isInteractive=!(isDisabled??isLoading),mergedClassName=(0,tw_merge.Q)(!isDanger&&!isInverse&&["bg-transparent text-default",isLoading&&"bg-pressed"],isDanger&&!isInverse&&["bg-transparent text-error-default",isLoading&&"bg-error-muted-pressed text-error-default-pressed"],isInverse&&!isDanger&&["bg-transparent text-primary-inverse",isLoading&&"bg-pressed"],isInverse&&isDanger&&["bg-default text-error-default",isLoading&&"bg-default-pressed"],isInteractive&&["hover:bg-hover","active:bg-pressed",isInverse&&isDanger&&["hover:bg-default-hover","active:bg-default-pressed"],isDanger&&!isInverse&&["hover:bg-error-muted-hover","active:bg-error-muted-pressed"]],"focus-visible:outline-none focus-visible:ring-0",isInverse?"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background-default":"focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-default",isLoading&&"cursor-not-allowed",isDisabled&&!isLoading&&["opacity-50","cursor-not-allowed"],className);return ButtonTertiary_React.createElement(ButtonBase.u,{ref:ref,className:mergedClassName,isDisabled:isDisabled,isLoading:isLoading,...props})});ButtonTertiary.displayName="ButtonTertiary";let Button_React=(module3=react,module3?.__esModule?module3.default:module3),Button=(0,react.forwardRef)(({variant=types.Ak.Primary,...props},ref)=>{switch(variant){case types.Ak.Primary:return Button_React.createElement(ButtonPrimary,{ref:ref,...props});case types.Ak.Secondary:return Button_React.createElement(ButtonSecondary,{ref:ref,...props});case types.Ak.Tertiary:return Button_React.createElement(ButtonTertiary,{ref:ref,...props});default:return Button_React.createElement(ButtonPrimary,{ref:ref,...props})}});Button.displayName="Button"},"./node_modules/@metamask/design-system-react/dist/components/ButtonBase/ButtonBase.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{u:()=>ButtonBase});var module,dist=__webpack_require__("./node_modules/@metamask/design-system-react/node_modules/@radix-ui/react-slot/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),types=__webpack_require__("./node_modules/@metamask/design-system-react/dist/types/index.mjs"),tw_merge=__webpack_require__("./node_modules/@metamask/design-system-react/dist/utils/tw-merge.mjs"),Icon=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Icon/Icon.mjs"),Icon_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Icon/Icon.types.mjs"),Text=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Text/Text.mjs"),Text_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Text/Text.types.mjs");let TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION={[types.PH.Sm]:"h-8",[types.PH.Md]:"h-10",[types.PH.Lg]:"h-12"},React=(module=react,module?.__esModule?module.default:module),ButtonBase=(0,react.forwardRef)(({children,className,size=types.PH.Lg,isFullWidth,asChild,isDisabled,isLoading,loadingText,loadingIconProps,loadingTextProps,startIconName,startIconProps,startAccessory,endIconName,endIconProps,endAccessory,textProps,style,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby,"aria-describedby":ariaDescribedby,"aria-pressed":ariaPressed,"aria-expanded":ariaExpanded,"aria-controls":ariaControls,"aria-haspopup":ariaHaspopup,...props},ref)=>{let Component=asChild?dist.DX:"button",isInteractive=!(isDisabled??isLoading),mergedClassName=(0,tw_merge.Q)("inline-flex items-center justify-center","rounded-xl px-4","font-medium text-default","bg-muted","min-w-20 overflow-hidden","relative",TWCLASSMAP_BUTTONBASE_SIZE_DIMENSION[size],isFullWidth&&"w-full",isInteractive&&["transition-all","duration-100","ease-linear","active:scale-[0.97]","active:ease-[cubic-bezier(0.3,0.8,0.3,1)]"],(isDisabled||isLoading)&&"cursor-not-allowed",isDisabled&&"opacity-50",className);return React.createElement(Component,{ref:ref,className:mergedClassName,disabled:asChild?void 0:isDisabled??isLoading,"aria-disabled":isDisabled?"true":void 0,"aria-busy":isLoading?"true":void 0,"aria-label":ariaLabel,"aria-labelledby":ariaLabelledby,"aria-describedby":ariaDescribedby,"aria-pressed":ariaPressed,"aria-expanded":ariaExpanded,"aria-controls":ariaControls,"aria-haspopup":ariaHaspopup,role:asChild?void 0:"button",tabIndex:(()=>{if(!asChild)return isDisabled?-1:void 0})(),style:style,...props},startIconName?React.createElement(Icon.I,{name:startIconName,size:Icon_types.lK.Sm,className:(0,tw_merge.Q)("mr-2 shrink-0 text-inherit",startIconProps?.className),"aria-hidden":"true",...startIconProps}):startAccessory?React.createElement("span",{className:"mr-2","aria-hidden":"true"},startAccessory):null,React.createElement(dist.xV,null,isLoading?React.createElement(React.Fragment,null,React.createElement("span",{className:"absolute inline-flex items-center","aria-hidden":"true"},React.createElement(Icon.I,{name:Icon_types.$M.Loading,size:Icon_types.lK.Sm,className:(0,tw_merge.Q)("mr-2 animate-spin text-inherit",loadingIconProps?.className),...loadingIconProps}),React.createElement(Text.E,{fontWeight:Text_types.IT.Medium,color:Text_types.r7.Inherit,asChild:!0,...loadingTextProps},React.createElement("span",null,loadingText))),React.createElement("span",{className:"invisible inline-flex items-center"},children),React.createElement("span",{className:"sr-only","aria-live":"polite","aria-atomic":"true"},loadingText||"Loading")):children&&"string"==typeof children?React.createElement(Text.E,{fontWeight:Text_types.IT.Medium,color:Text_types.r7.Inherit,asChild:!0,...textProps},React.createElement("span",null,children)):children),endIconName?React.createElement(Icon.I,{name:endIconName,size:Icon_types.lK.Sm,className:(0,tw_merge.Q)("ml-2 shrink-0 text-inherit",endIconProps?.className),"aria-hidden":"true",...endIconProps}):endAccessory?React.createElement("span",{className:"ml-2","aria-hidden":"true"},endAccessory):null)});ButtonBase.displayName="ButtonBase"},"./node_modules/@metamask/design-system-react/dist/components/Checkbox/Checkbox.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{S:()=>Checkbox});var module,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_tw_merge_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@metamask/design-system-react/dist/utils/tw-merge.mjs"),_Icon_index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Icon/Icon.types.mjs"),_Icon_index_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Icon/Icon.mjs"),_Text_index_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Text/Text.mjs");let React=(module=react__WEBPACK_IMPORTED_MODULE_0__,module?.__esModule?module.default:module),Checkbox=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({id,isSelected,isDisabled=!1,isInvalid=!1,label,labelProps,onChange,inputProps,checkboxContainerProps,checkedIconProps,className,style,...props},ref)=>{let handleClick=()=>{isDisabled||onChange?.(!isSelected)};(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,()=>({toggle:handleClick}),[handleClick]);let outerClassName=(0,_utils_tw_merge_mjs__WEBPACK_IMPORTED_MODULE_1__.Q)("inline-flex items-center",isDisabled&&"cursor-not-allowed opacity-50",className),baseBorder="border-default";isSelected?baseBorder="border-primary-default":isInvalid&&(baseBorder="border-error-default");let checkboxClasses=(0,_utils_tw_merge_mjs__WEBPACK_IMPORTED_MODULE_1__.Q)("relative flex size-6 items-center justify-center rounded border-2 p-0 transition-transform active:scale-95 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary-default",isSelected?"bg-primary-default hover:bg-primary-default-hover active:bg-primary-default-pressed":"bg-default hover:bg-default-hover active:bg-default-pressed",baseBorder,checkboxContainerProps?.className),iconClasses=(0,_utils_tw_merge_mjs__WEBPACK_IMPORTED_MODULE_1__.Q)("pointer-events-none transition-opacity",isSelected?"opacity-100":"opacity-0",checkedIconProps?.className);return React.createElement("label",{htmlFor:id,className:outerClassName,style:style,...props},React.createElement("div",{className:"relative"},React.createElement("input",{type:"checkbox",id:id,checked:isSelected,disabled:isDisabled,"aria-invalid":isInvalid,onChange:event=>{isDisabled||onChange?.(event.target.checked)},onKeyDown:event=>{"Enter"===event.key&&(event.preventDefault(),handleClick())},className:"peer absolute inset-0 size-full cursor-pointer opacity-0 disabled:cursor-not-allowed",...inputProps}),React.createElement("div",{className:checkboxClasses,...checkboxContainerProps},React.createElement(_Icon_index_mjs__WEBPACK_IMPORTED_MODULE_3__.I,{name:_Icon_index_mjs__WEBPACK_IMPORTED_MODULE_2__.$M.Check,color:_Icon_index_mjs__WEBPACK_IMPORTED_MODULE_2__.Li.PrimaryInverse,size:_Icon_index_mjs__WEBPACK_IMPORTED_MODULE_2__.lK.Sm,...checkedIconProps,className:iconClasses}))),label?React.createElement(_Text_index_mjs__WEBPACK_IMPORTED_MODULE_4__.E,{asChild:!0,...labelProps,className:(0,_utils_tw_merge_mjs__WEBPACK_IMPORTED_MODULE_1__.Q)("ml-3",labelProps?.className)},React.createElement("span",null,label)):null)});Checkbox.displayName="Checkbox"},"./node_modules/react-hot-toast/dist/index.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){let e,e1;__webpack_require__.d(__webpack_exports__,{oR:()=>dist_n});var react=__webpack_require__("./node_modules/react/index.js");let e2={data:""},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e};function u(e){let t,r,r1=this||{},l1=e.call?e(r1.p):e;return((e,t,r,i,p)=>{var e1;let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),e1=c[d],f?t.data=t.data.replace(f,e1):-1===t.data.indexOf(e1)&&(t.data=i?e1+t.data:t.data+e1),d})(l1.unshift?l1.raw?(t=[].slice.call(arguments,1),r=r1.p,l1.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==n?"":n)},"")):l1.reduce((e,t)=>Object.assign(e,t&&t.call?t(r1.p):t),{}):l1,(t=>{if("object"==typeof window){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||e2})(r1.target),r1.g,r1.o,r1.k)}u.bind({g:1});let d,f,g,h=u.bind({k:1});function m(e,t,r,l){o.p=t,d=e,f=r,g=l}function w(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g&&i[0]&&g(c),d(i,c)}return t?t(a):a}}var dist_h=(e,t)=>"function"==typeof e?e(t):e,W=(e=0,()=>(++e).toString()),E=()=>{if(void 0===e1&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");e1=!t||t.matches}return e1},k="default",H=(e,t)=>{let{toastLimit:o}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,o)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:s}=t;return H(e,{type:+!!e.toasts.find(r=>r.id===s.id),toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(r=>r.id===a||void 0===a?{...r,dismissed:!0,visible:!1}:r)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},v=[],j={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},dist_f={},Y=(e,t=k)=>{dist_f[t]=H(dist_f[t]||j,e),v.forEach(([o,s])=>{o===t&&s(dist_f[t])})},_=e=>Object.keys(dist_f).forEach(t=>Y(e,t)),S=(e=k)=>t=>{Y(t,e)},P=e=>(t,o)=>{let e1,s=((e,t="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(null==o?void 0:o.id)||W()}))(t,e,o);return S(s.toasterId||(e1=s.id,Object.keys(dist_f).find(t=>dist_f[t].toasts.some(o=>o.id===e1))))({type:2,toast:s}),s.id},dist_n=(e,t)=>P("blank")(e,t);dist_n.error=P("error"),dist_n.success=P("success"),dist_n.loading=P("loading"),dist_n.custom=P("custom"),dist_n.dismiss=(e,t)=>{let o={type:3,toastId:e};t?S(t)(o):_(o)},dist_n.dismissAll=e=>dist_n.dismiss(void 0,e),dist_n.remove=(e,t)=>{let o={type:4,toastId:e};t?S(t)(o):_(o)},dist_n.removeAll=e=>dist_n.remove(void 0,e),dist_n.promise=(e,t,o)=>{let s=dist_n.loading(t.loading,{...o,...null==o?void 0:o.loading});return"function"==typeof e&&(e=e()),e.then(a=>{let i=t.success?dist_h(t.success,a):void 0;return i?dist_n.success(i,{id:s,...o,...null==o?void 0:o.success}):dist_n.dismiss(s),a}).catch(a=>{let i=t.error?dist_h(t.error,a):void 0;i?dist_n.error(i,{id:s,...o,...null==o?void 0:o.error}):dist_n.dismiss(s)}),e};var de=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,me=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,le=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,C=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${de} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${me} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Te=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Te} 1s linear infinite;
`,ge=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,he=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,L=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ge} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${he} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,be=w("div")`
  position: absolute;
`,Se=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ae=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Pe=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ae} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$=({toast:e})=>{let{icon:t,type:o,iconTheme:s}=e;return void 0!==t?"string"==typeof t?react.createElement(Pe,null,t):t:"blank"===o?null:react.createElement(Se,null,react.createElement(F,{...s}),"loading"!==o&&react.createElement(be,null,"error"===o?react.createElement(C,{...s}):react.createElement(L,{...s})))},Oe=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ie=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`;react.memo(({toast:e,position:t,style:o,children:s})=>{let a=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,i]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${h(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=react.createElement($,{toast:e}),r=react.createElement(Ie,{...e.ariaProps},dist_h(e.message,e));return react.createElement(Oe,{className:e.className,style:{...a,...o,...e.style}},"function"==typeof s?s({icon:i,message:r}):react.createElement(react.Fragment,null,i,r))}),m(react.createElement),u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}}]);
//# sourceMappingURL=93054.6908657f.iframe.bundle.js.map