(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[59655],{"./node_modules/@lavamoat/lavadome-react/build/main.js"(__unused_webpack_module,exports,__webpack_require__){(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{LavaDome:()=>me,toLavaDomeToken:()=>de});let o=__webpack_require__("./node_modules/react/index.js");var n=e.n(o);let{Object:a,Array:r,Function:s,Math:l,parseInt:i,WeakMap:u,Error:p,JSON:c,navigation:d}=globalThis,{defineProperties:m,assign:f,getOwnPropertyDescriptor:v,entries:g,create:h,hasOwn:y}=a,{from:b}=r,{random:w}=l,{stringify:T}=c,O=(e,t,o)=>e&&s.prototype.call.bind(v(e,t)[o]),S=O(globalThis?.Node?.prototype,"ownerDocument","get"),D=O(globalThis?.EventTarget?.prototype,"addEventListener","value"),M=O(globalThis?.DocumentFragment?.prototype,"replaceChildren","value"),E=O(globalThis?.Element?.prototype,"attachShadow","value"),x1=O(globalThis?.Document?.prototype,"createElement","value"),_=O(globalThis?.Node?.prototype,"appendChild","value"),k=O(globalThis?.Node?.prototype,"textContent","set"),I=O(globalThis?.Element?.prototype,"setAttribute","value"),L=O(globalThis?.String?.prototype,"toUpperCase","value"),N=O(globalThis?.String?.prototype,"includes","value"),j=O(globalThis?.Array?.prototype,"map","value"),P=O(globalThis?.Array?.prototype,"join","value"),C=O(globalThis?.Array?.prototype,"keys","value"),A=O(globalThis?.Array?.prototype,"at","value"),$=O(globalThis?.WeakMap?.prototype,"get","value"),F=O(globalThis?.WeakMap?.prototype,"set","value"),z=O(globalThis?.Number?.prototype,"toFixed","value"),R=O(globalThis?.NavigateEvent?.prototype,"destination","get"),U=O(globalThis?.NavigationDestination?.prototype,"url","get"),W=O(globalThis?.Event?.prototype,"preventDefault","value"),q=O(globalThis?.Event?.prototype,"stopPropagation","value"),G={isInnerInstance:Symbol("isInnerInstance"),unsafeOpenModeShadow:"unsafeOpenModeShadow"},Y="abcdefghijklmnopqrstuvwxyz",B="0123456789",H="!@#$%^&*()?.;:\"'[]{}+=-_/",K={letters:Y,digits:B,symbols:H,alphanumeric:Y+B,all:Y+L(Y)+B+H},{letters:Q,alphanumeric:V,all:X}=K,Z=(e,t)=>e[i(z(w()*t))],ee=e=>Z(Q,26)+P(j(b(C(r(e))),()=>Z(V,36)),"");function te(e,t,o=""){return e=P(j(g(e),([e,t])=>`${e}: ${t} !important`),"; "),function(){let n=x1(document,t());return I(n,"style",e),k(n,o),n}}let oe=e=>()=>e(),ne=oe(te({"font-family":ee(20),"-webkit-user-modify":"unset","-webkit-user-select":"none","user-select":"none"},()=>ee(7))),ae=oe(te({top:"-10px",right:"-10px",position:"fixed","font-size":"1px"},()=>"span",X)),re=oe(te({display:"none"},()=>"iframe")),se=new u;function le(e,t){t=function(e={}){let e1,{unsafeOpenModeShadow:t,isInnerInstance:o}=G,n=(e1=f(h(null),e),function(t,o,n){let a=e1[t];return y(e1,t)?typeof a!==o?n:a:n}),a=h(null);return a.isInnerInstance=n(o,"boolean",!1),a.unsafeOpenModeShadow=n(t,"boolean",!1),a}(t),m(this,{text:{value:function(e){if("string"!=typeof e)throw new p(`LavaDomeCore: first argument must be a string, instead got ${T(e)}`);if(void 0===A(b(e),1))return k(a,e);_(o,n),j(b(e),e=>{let o=x1(document,"span");t[G.isInnerInstance]=!0,new le(o,t).text(e),_(a,o)}),_(a,ae())}}});let o=function(e,t){let{unsafeOpenModeShadow:o,isInnerInstance:n}=t,a=$(se,e);if(!a){let t={mode:"closed"};o&&(t.mode="open",n||console.warn("LavaDome:",`Initiated with "${G.unsafeOpenModeShadow}" set to true.`,"This leaves LavaDome fully vulnerable, ONLY USE FOR TESTING!")),a=E(e,t),F(se,e,a)}return a}(e,t);M(o);let n=re();D(n,"load",()=>{if(S(n)!==document)throw M(o),new p("LavaDomeCore: The document to which LavaDome was originally introduced must be the same as the one this instance is inserted to")});let a=ne();_(o,a)}d?.addEventListener("navigate",e=>{if(N(U(R(e)),":~:"))throw W(e),q(e),new p("LavaDomeCore: in-app redirection to text-fragments links is blocked to ensure security")});let{all:ie}=K,ue=new u,pe=new u,ce=h(null),de=e=>{if("string"!=typeof e)throw Error(`LavaDomeReact: first argument must be a string, instead got ${T(e)}`);if(!y(ce,e)){let t=h(null);ce[e]=t,F(ue,t,e)}return ce[e]},me=({text:e,unsafeOpenModeShadow:t})=>{let r=(0,o.useRef)(null);return n().createElement("span",{ref:r,__source:{fileName:"/Users/weizman/Documents/lavamoat/lavadome/packages/react/src/lavadome.jsx",lineNumber:57,columnNumber:9},__self:void 0},n().createElement(fe,{host:r,token:e,unsafeOpenModeShadow:t,__source:{fileName:"/Users/weizman/Documents/lavamoat/lavadome/packages/react/src/lavadome.jsx",lineNumber:58,columnNumber:13},__self:void 0}))};function fe({host:e,token:t,unsafeOpenModeShadow:a}){let t1,r=function(e){let t=$(ue,e);if(!y(ce,t))throw Error("LavaDomeReact: first argument must be a valid LavaDome token (replace \"text={'secret'}\" with \"text={toLavaDomeToken('secret')}\")");return t}(t),s=((t1=$(pe,t))||F(pe,t,t1=h(null)),t1);return(0,o.useEffect)(()=>{new le(e.current,{unsafeOpenModeShadow:a}).text(r)},[s]),n().createElement(n().Fragment,null)}for(var ge in t)exports[ge]=t[ge];t.__esModule&&Object.defineProperty(exports,"__esModule",{value:!0})})()},"./node_modules/@metamask/design-system-react/dist/components/BannerAlert/BannerAlert.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>BannerAlert});var module,module1,BannerAlert_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/BannerAlert/BannerAlert.types.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Icon_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Icon/Icon.types.mjs"),tw_merge=__webpack_require__("./node_modules/@metamask/design-system-react/dist/utils/tw-merge.mjs"),Box_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Box/Box.types.mjs"),Text_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Text/Text.types.mjs"),types=__webpack_require__("./node_modules/@metamask/design-system-react/dist/types/index.mjs"),Box=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Box/Box.mjs"),Button=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Button/Button.mjs"),ButtonIcon=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/ButtonIcon/ButtonIcon.mjs"),Text=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Text/Text.mjs");let React=(module=react,module?.__esModule?module.default:module),isTextContent=content=>"string"==typeof content||"number"==typeof content,BannerBase=(0,react.forwardRef)(({title,titleProps,description,descriptionProps,children,childrenWrapperProps,actionButtonLabel,actionButtonOnClick,actionButtonProps,startAccessory,onClose,closeButtonProps,className,...props},ref)=>{let{ariaLabel:closeButtonAriaLabel="Close banner",onClick:closeButtonPropsOnClick,className:closeButtonClassName,...resolvedCloseButtonProps}=closeButtonProps??{},shouldShowCloseButton=!!(onClose||closeButtonProps);return React.createElement(Box.a,{ref:ref,flexDirection:Box_types.uV.Row,alignItems:Box_types.RE.Start,gap:2,backgroundColor:Box_types.v$.BackgroundDefault,padding:3,className:(0,tw_merge.Q)("rounded-sm",className),...props},startAccessory,React.createElement(Box.a,{className:"min-w-0 flex-1"},null!=title&&(isTextContent(title)?React.createElement(Text.E,{variant:Text_types.J3.BodyMd,fontWeight:Text_types.IT.Medium,...titleProps},title):title),null!=description&&React.createElement(Box.a,{className:null!=title?"mt-1":void 0},isTextContent(description)?React.createElement(Text.E,{variant:Text_types.J3.BodySm,...descriptionProps},description):description),null!=children&&(isTextContent(children)?React.createElement(Text.E,{variant:Text_types.J3.BodyMd,...childrenWrapperProps},children):children),!!actionButtonOnClick&&React.createElement(Box.a,{className:"mt-4"},React.createElement(Button.$,{size:types.Mp.Md,onClick:actionButtonOnClick,...actionButtonProps??{}},actionButtonLabel))),shouldShowCloseButton&&React.createElement(ButtonIcon.a,{className:(0,tw_merge.Q)("ml-3 self-start",closeButtonClassName),iconName:Icon_types.$M.Close,size:types.f3.Sm,ariaLabel:closeButtonAriaLabel,onClick:onClose??closeButtonPropsOnClick,...resolvedCloseButtonProps}))});BannerBase.displayName="BannerBase";var Icon=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Icon/Icon.mjs");let MAP_BANNER_ALERT_SEVERITY_ICON_NAME={info:Icon_types.$M.Info,success:Icon_types.$M.Confirmation,warning:Icon_types.$M.Danger,danger:Icon_types.$M.Danger},MAP_BANNER_ALERT_SEVERITY_ICON_COLOR={info:Icon_types.Li.PrimaryDefault,success:Icon_types.Li.SuccessDefault,warning:Icon_types.Li.WarningDefault,danger:Icon_types.Li.ErrorDefault},MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR={info:Box_types.v$.PrimaryMuted,success:Box_types.v$.SuccessMuted,warning:Box_types.v$.WarningMuted,danger:Box_types.v$.ErrorMuted},MAP_BANNER_ALERT_SEVERITY_BORDER_COLOR={info:Box_types.fu.PrimaryDefault,success:Box_types.fu.SuccessDefault,warning:Box_types.fu.WarningDefault,danger:Box_types.fu.ErrorDefault},BannerAlert_React=(module1=react,module1?.__esModule?module1.default:module1),BannerAlert=(0,react.forwardRef)(({severity=BannerAlert_types.O.Info,iconProps,className,...props},ref)=>{let iconName=MAP_BANNER_ALERT_SEVERITY_ICON_NAME[severity],iconColor=MAP_BANNER_ALERT_SEVERITY_ICON_COLOR[severity],backgroundColor=MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR[severity],borderColorClass=MAP_BANNER_ALERT_SEVERITY_BORDER_COLOR[severity],mergedClassName=(0,tw_merge.Q)("border-l-4",borderColorClass,className);return BannerAlert_React.createElement(BannerBase,{ref:ref,startAccessory:BannerAlert_React.createElement(Icon.I,{name:iconName,color:iconColor,size:Icon_types.lK.Lg,...iconProps}),backgroundColor:backgroundColor,paddingLeft:2,className:mergedClassName,...props})});BannerAlert.displayName="BannerAlert"},"./node_modules/@metamask/design-system-shared/dist/types/BannerAlert/BannerAlert.types.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>BannerAlertSeverity});let BannerAlertSeverity={Info:"info",Success:"success",Warning:"warning",Danger:"danger"}},"./node_modules/react-hot-toast/dist/index.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";let e,e1;__webpack_require__.d(__webpack_exports__,{oR:()=>dist_n});var react=__webpack_require__("./node_modules/react/index.js");let e2={data:""},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e};function u(e){let t,r,r1=this||{},l1=e.call?e(r1.p):e;return((e,t,r,i,p)=>{var e1;let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),e1=c[d],f?t.data=t.data.replace(f,e1):-1===t.data.indexOf(e1)&&(t.data=i?e1+t.data:t.data+e1),d})(l1.unshift?l1.raw?(t=[].slice.call(arguments,1),r=r1.p,l1.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==n?"":n)},"")):l1.reduce((e,t)=>Object.assign(e,t&&t.call?t(r1.p):t),{}):l1,(t=>{if("object"==typeof window){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||e2})(r1.target),r1.g,r1.o,r1.k)}u.bind({g:1});let d,f,g,h=u.bind({k:1});function m(e,t,r,l){o.p=t,d=e,f=r,g=l}function w(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g&&i[0]&&g(c),d(i,c)}return t?t(a):a}}var dist_h=(e,t)=>"function"==typeof e?e(t):e,W=(e=0,()=>(++e).toString()),E=()=>{if(void 0===e1&&"u">typeof window){let t=matchMedia("(prefers-reduced-motion: reduce)");e1=!t||t.matches}return e1},k="default",H=(e,t)=>{let{toastLimit:o}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,o)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:s}=t;return H(e,{type:+!!e.toasts.find(r=>r.id===s.id),toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(r=>r.id===a||void 0===a?{...r,dismissed:!0,visible:!1}:r)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},v=[],j={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},dist_f={},Y=(e,t=k)=>{dist_f[t]=H(dist_f[t]||j,e),v.forEach(([o,s])=>{o===t&&s(dist_f[t])})},_=e=>Object.keys(dist_f).forEach(t=>Y(e,t)),S=(e=k)=>t=>{Y(t,e)},P=e=>(t,o)=>{let e1,s=((e,t="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(null==o?void 0:o.id)||W()}))(t,e,o);return S(s.toasterId||(e1=s.id,Object.keys(dist_f).find(t=>dist_f[t].toasts.some(o=>o.id===e1))))({type:2,toast:s}),s.id},dist_n=(e,t)=>P("blank")(e,t);dist_n.error=P("error"),dist_n.success=P("success"),dist_n.loading=P("loading"),dist_n.custom=P("custom"),dist_n.dismiss=(e,t)=>{let o={type:3,toastId:e};t?S(t)(o):_(o)},dist_n.dismissAll=e=>dist_n.dismiss(void 0,e),dist_n.remove=(e,t)=>{let o={type:4,toastId:e};t?S(t)(o):_(o)},dist_n.removeAll=e=>dist_n.remove(void 0,e),dist_n.promise=(e,t,o)=>{let s=dist_n.loading(t.loading,{...o,...null==o?void 0:o.loading});return"function"==typeof e&&(e=e()),e.then(a=>{let i=t.success?dist_h(t.success,a):void 0;return i?dist_n.success(i,{id:s,...o,...null==o?void 0:o.success}):dist_n.dismiss(s),a}).catch(a=>{let i=t.error?dist_h(t.error,a):void 0;i?dist_n.error(i,{id:s,...o,...null==o?void 0:o.error}):dist_n.dismiss(s)}),e};var de=h`
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
`},"./node_modules/react-simple-file-input/lib/index.js"(__unused_webpack_module,exports,__webpack_require__){"use strict";var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=__webpack_require__("./node_modules/react/index.js"),_react2=_interopRequireDefault(_react),_propTypes2=_interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return call&&("object"==typeof call||"function"==typeof call)?call:self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var READ_METHOD_ALIASES={buffer:"readAsArrayBuffer",binary:"readAsBinaryString",dataUrl:"readAsDataURL",text:"readAsText"},SUPPORTED_EVENTS=["onLoadStart","onLoadEnd","onLoad","onAbort","onError"],UNSUPPORTED_BY_INPUT={readAs:!0,abortIf:!0,cancelIf:!0,onCancel:!0},FileInput=function(_Component){function FileInput(props,context){_classCallCheck(this,FileInput);var _this=_possibleConstructorReturn(this,(FileInput.__proto__||Object.getPrototypeOf(FileInput)).call(this,props,context));return _this.handleChange=_this.handleChange.bind(_this),_this}return _inherits(FileInput,_Component),_createClass(FileInput,[{key:"componentDidMount",value:function componentDidMount(){(!window||window.File)&&window.FileReader||console.warn("Browser does not appear to support API react-simple-file-input relies upon")}},{key:"handleChange",value:function handleChange(event){var _this2=this,_props=this.props,readAs=_props.readAs,cancelIf=_props.cancelIf,onCancel=_props.onCancel,onProgress=_props.onProgress,abortIf=_props.abortIf,onChange=_props.onChange,multiple=_props.multiple,files=event.target.files;if(onChange&&onChange(multiple?files:files[0]),readAs)for(var i=0;i<files.length;i++){var _ret=function _loop(i){var file=files[i];if(cancelIf&&cancelIf(file))return onCancel&&onCancel(file),{v:void 0};for(var fileReader=new window.FileReader,_i=0;_i<SUPPORTED_EVENTS.length;_i++)!function _loop2(_i){var handlerName=SUPPORTED_EVENTS[_i];_this2.props[handlerName]&&(fileReader[handlerName.toLowerCase()]=function(fileReadEvent){_this2.props[handlerName](fileReadEvent,file)})}(_i);void 0!==abortIf?fileReader.onprogress=function(event){abortIf(event,file)?fileReader.abort():onProgress&&onProgress(event,file)}:onProgress&&(fileReader.onprogress=onProgress),fileReader[READ_METHOD_ALIASES[readAs]](file)}(i);if((void 0===_ret?"undefined":_typeof(_ret))==="object")return _ret.v}}},{key:"render",value:function render(){var inputProps={};for(var property in this.props)this.props.hasOwnProperty(property)&&!UNSUPPORTED_BY_INPUT[property]&&(inputProps[property]=this.props[property]);return _react2.default.createElement("input",_extends({},inputProps,{type:"file",ref:"inputField",onChange:this.handleChange}))}}]),FileInput}(_react.Component);FileInput.propTypes={id:_propTypes2.default.string,className:_propTypes2.default.string,multiple:_propTypes2.default.bool,readAs:_propTypes2.default.oneOf(Object.keys(READ_METHOD_ALIASES)),onLoadStart:_propTypes2.default.func,onLoadEnd:_propTypes2.default.func,onLoad:_propTypes2.default.func,onAbort:_propTypes2.default.func,onCancel:_propTypes2.default.func,onChange:_propTypes2.default.func,onError:_propTypes2.default.func,onProgress:_propTypes2.default.func,cancelIf:_propTypes2.default.func,abortIf:_propTypes2.default.func},exports.A=FileInput}}]);
//# sourceMappingURL=59655.8be562e1.iframe.bundle.js.map