"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[85556],{"./node_modules/@metamask/design-system-react/dist/components/BannerAlert/BannerAlert.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{b:()=>BannerAlert});var BannerAlert_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/BannerAlert/BannerAlert.types.mjs"),Icon_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Icon/Icon.types.mjs"),react=__webpack_require__("./node_modules/react/index.js"),BannerBase=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/BannerBase/BannerBase.mjs"),Icon=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Icon/Icon.mjs"),Box_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Box/Box.types.mjs");const MAP_BANNER_ALERT_SEVERITY_ICON_NAME={neutral:Icon_types.$M.Info,info:Icon_types.$M.Info,success:Icon_types.$M.Confirmation,warning:Icon_types.$M.Danger,danger:Icon_types.$M.Danger},MAP_BANNER_ALERT_SEVERITY_ICON_COLOR={neutral:Icon_types.Li.IconDefault,info:Icon_types.Li.PrimaryDefault,success:Icon_types.Li.SuccessDefault,warning:Icon_types.Li.WarningDefault,danger:Icon_types.Li.ErrorDefault},MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR={neutral:Box_types.v$.BackgroundSection,info:Box_types.v$.PrimaryMuted,success:Box_types.v$.SuccessMuted,warning:Box_types.v$.WarningMuted,danger:Box_types.v$.ErrorMuted};const React=function $importDefault(module){return module?.__esModule?module.default:module}(react),BannerAlert=(0,react.forwardRef)(({severity=BannerAlert_types.O.Info,iconProps,className,...props},ref)=>{const iconName=MAP_BANNER_ALERT_SEVERITY_ICON_NAME[severity],iconColor=MAP_BANNER_ALERT_SEVERITY_ICON_COLOR[severity],backgroundColor=MAP_BANNER_ALERT_SEVERITY_BACKGROUND_COLOR[severity];return React.createElement(BannerBase.C,{ref,startAccessory:React.createElement(Icon.I,{name:iconName,color:iconColor,size:Icon_types.lK.Lg,...iconProps}),backgroundColor,className,...props})});BannerAlert.displayName="BannerAlert"},"./node_modules/@metamask/design-system-react/dist/components/BannerBase/BannerBase.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C:()=>BannerBase});const BannerBaseActionButtonLayout_Below="below",BannerBaseActionButtonLayout_End="end";var Box_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Box/Box.types.mjs"),ButtonBase_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/ButtonBase/ButtonBase.types.mjs"),Button_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Button/Button.types.mjs"),Text_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Text/Text.types.mjs"),Icon_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/Icon/Icon.types.mjs"),ButtonIcon_types=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/ButtonIcon/ButtonIcon.types.mjs"),react=__webpack_require__("./node_modules/react/index.js"),tw_merge=__webpack_require__("./node_modules/@metamask/design-system-react/dist/utils/tw-merge.mjs"),Box=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Box/Box.mjs"),Button=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Button/Button.mjs"),ButtonIcon=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/ButtonIcon/ButtonIcon.mjs"),Text=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/Text/Text.mjs");const React=function $importDefault(module){return module?.__esModule?module.default:module}(react),isTextContent=content=>"string"==typeof content||"number"==typeof content,hasContent=content=>null!=content,BannerBase=(0,react.forwardRef)(({title,titleProps,description,descriptionProps,children,childrenWrapperProps,actionButtonLabel,actionButtonOnClick,actionButtonProps,actionButtonLayout=BannerBaseActionButtonLayout_Below,startAccessory,onClose,closeButtonProps,className,backgroundColor=Box_types.v$.BackgroundDefault,...props},ref)=>{const resolvedActionButtonProps=actionButtonProps??{},{ariaLabel:closeButtonAriaLabel="Close banner",className:closeButtonClassName,...resolvedCloseButtonProps}=closeButtonProps??{},shouldShowCloseButton=Boolean(onClose),shouldShowActionButton=Boolean(actionButtonOnClick),isActionButtonLayoutEnd=actionButtonLayout===BannerBaseActionButtonLayout_End,hasActionButtonBelow=shouldShowActionButton&&!isActionButtonLayoutEnd,hasTitle=hasContent(title),hasDescription=hasContent(description),hasChildren=hasContent(children),hasUnmeasuredContent=hasTitle&&!isTextContent(title)||hasDescription&&!isTextContent(description)||hasChildren&&!isTextContent(children),contentRef=(0,react.useRef)(null),[isCompactContent,setIsCompactContent]=(0,react.useState)(!1),isSingleTextBlock=1===[hasTitle,hasDescription,hasChildren].filter(Boolean).length,measureContent=(0,react.useCallback)(()=>{if(hasUnmeasuredContent||hasActionButtonBelow||isSingleTextBlock)return void setIsCompactContent(!1);const height=contentRef.current?.getBoundingClientRect().height??0,maxCompactHeight=(({hasTitle,hasDescription,hasChildren})=>{let maxHeight=0;return hasTitle&&(maxHeight+=24),hasDescription&&(hasTitle&&(maxHeight+=2),maxHeight+=22),hasChildren&&(maxHeight+=24),maxHeight+4})({hasTitle,hasDescription,hasChildren});setIsCompactContent(height>0&&height<=maxCompactHeight)},[hasActionButtonBelow,hasChildren,hasDescription,hasTitle,hasUnmeasuredContent,isSingleTextBlock]);(0,react.useLayoutEffect)(()=>{if(measureContent(),"undefined"==typeof ResizeObserver||!contentRef.current)return;const observer=new ResizeObserver(()=>{measureContent()});return observer.observe(contentRef.current),()=>{observer.disconnect()}},[title,description,children,measureContent]);const isCenterAligned=!hasActionButtonBelow&&!hasUnmeasuredContent&&(hasTitle||hasDescription||hasChildren)&&(isSingleTextBlock||isCompactContent),actionButton=shouldShowActionButton?React.createElement(Button.$,{size:ButtonBase_types.Mp.Md,onClick:actionButtonOnClick,...resolvedActionButtonProps,variant:Button_types.A.Secondary},actionButtonLabel):null;return React.createElement(Box.a,{...props,ref,flexDirection:Box_types.uV.Row,alignItems:isCenterAligned?Box_types.RE.Center:Box_types.RE.Start,gap:4,backgroundColor,paddingTop:3,paddingBottom:hasActionButtonBelow?4:3,paddingLeft:4,paddingRight:shouldShowCloseButton?2:4,className:(0,tw_merge.Q)("rounded-xl",className)},startAccessory,React.createElement(Box.a,{className:"min-w-0 flex-1",ref:node=>{contentRef.current=node}},hasTitle&&(isTextContent(title)?React.createElement(Text.E,{variant:Text_types.J3.BodyMd,fontWeight:Text_types.IT.Medium,...titleProps},title):title),hasDescription&&React.createElement(Box.a,{className:hasTitle?"mt-0.5":void 0},isTextContent(description)?React.createElement(Text.E,{variant:Text_types.J3.BodySm,...descriptionProps},description):description),hasChildren&&(isTextContent(children)?React.createElement(Text.E,{variant:Text_types.J3.BodyMd,...childrenWrapperProps},children):children),hasActionButtonBelow&&React.createElement(Box.a,{className:"mt-2"},actionButton)),shouldShowActionButton&&isActionButtonLayoutEnd&&React.createElement(Box.a,{className:"self-center"},actionButton),shouldShowCloseButton&&React.createElement(ButtonIcon.a,{className:(0,tw_merge.Q)(!isCenterAligned&&"-mt-1",closeButtonClassName),iconName:Icon_types.$M.Close,size:ButtonIcon_types.f.Md,ariaLabel:closeButtonAriaLabel,onClick:onClose,...resolvedCloseButtonProps}))});BannerBase.displayName="BannerBase"},"./node_modules/@metamask/design-system-shared/dist/types/BannerAlert/BannerAlert.types.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:()=>BannerAlertSeverity});const BannerAlertSeverity={Neutral:"neutral",Info:"info",Success:"success",Warning:"warning",Danger:"danger"}},"./node_modules/@metamask/phishing-controller/dist/types.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var PhishingDetectorResultType,RecommendedAction,TokenScanResultType;__webpack_require__.d(__webpack_exports__,{Kb:()=>TokenScanResultType,M2:()=>RecommendedAction,Qk:()=>DEFAULT_CHAIN_ID_TO_NAME,VN:()=>ADDRESS_SCAN_SUPPORTED_CHAINS}),function(PhishingDetectorResultType){PhishingDetectorResultType.All="all",PhishingDetectorResultType.Fuzzy="fuzzy",PhishingDetectorResultType.Blocklist="blocklist",PhishingDetectorResultType.Allowlist="allowlist",PhishingDetectorResultType.Blacklist="blacklist",PhishingDetectorResultType.Whitelist="whitelist",PhishingDetectorResultType.C2DomainBlocklist="c2DomainBlocklist"}(PhishingDetectorResultType||(PhishingDetectorResultType={})),function(RecommendedAction){RecommendedAction.None="NONE",RecommendedAction.Warn="WARN",RecommendedAction.Block="BLOCK",RecommendedAction.Verified="VERIFIED"}(RecommendedAction||(RecommendedAction={})),function(TokenScanResultType){TokenScanResultType.Benign="Benign",TokenScanResultType.Warning="Warning",TokenScanResultType.Malicious="Malicious",TokenScanResultType.Spam="Spam"}(TokenScanResultType||(TokenScanResultType={}));const DEFAULT_CHAIN_ID_TO_NAME={"0x1":"ethereum","0x89":"polygon","0x38":"bsc","0xa4b1":"arbitrum","0xa86a":"avalanche","0x2105":"base","0xa":"optimism","0x76adf1":"zora","0xe708":"linea","0x27bc86aa":"degen","0x144":"zksync","0x82750":"scroll","0x13e31":"blast","0x74c":"soneium","0x79a":"soneium-minato","0x14a34":"base-sepolia","0xab5":"abstract","0x849ea":"zero-network","0x138de":"berachain","0x82":"unichain","0x7e4":"ronin","0x127":"hedera","0x12c":"zksync-sepolia","0xaa36a7":"ethereum-sepolia","0xa869":"avalanche-fuji","0x343b":"immutable-zkevm","0x34a1":"immutable-zkevm-testnet","0x64":"gnosis","0x1e0":"worldchain","0x8173":"apechain","0x138c5":"berachain-bartio","0xdef1":"ink","0xba5ed":"ink-sepolia","0x2b74":"abstract-testnet","0x531":"sei","0x2eb":"flow-evm","0x8f":"monad","0x3e7":"hyperevm","0xc4":"xlayer","0x10e6":"megaeth","0x1079":"tempo","0xa5bf":"tempo-testnet","0x2019":"kaia","0x1237":"robinhood","0x13b2":"arc","0x2611":"plasma","0x1388":"mantle","0xb67d2":"katana","0x18232":"plume","0x93e":"kite-ai","0x279f":"monad-testnet",solana:"solana",starknet:"starknet","starknet-sepolia":"starknet-sepolia",stellar:"stellar",bitcoin:"bitcoin",sui:"sui",tron:"tron"};var AddressScanResultType;!function(AddressScanResultType){AddressScanResultType.Benign="Benign",AddressScanResultType.Warning="Warning",AddressScanResultType.Malicious="Malicious",AddressScanResultType.ErrorResult="ErrorResult"}(AddressScanResultType||(AddressScanResultType={}));const ADDRESS_SCAN_SUPPORTED_CHAINS=["arbitrum","avalanche","base","base-sepolia","bsc","ethereum","optimism","polygon","zksync","zksync-sepolia","zora","linea","blast","scroll","ethereum-sepolia","degen","avalanche-fuji","gnosis","worldchain","soneium-minato","ronin","apechain","berachain","berachain-bartio","ink","ink-sepolia","abstract","abstract-testnet","soneium","unichain","sei","flow-evm","hyperevm","megaeth","katana","plume","xlayer","monad","monad-testnet","tempo","tempo-testnet","kite-ai","kaia","plasma","mantle","robinhood","arc"];var ApprovalResultType,ApprovalFeatureType;!function(ApprovalResultType){ApprovalResultType.Malicious="Malicious",ApprovalResultType.Warning="Warning",ApprovalResultType.Benign="Benign",ApprovalResultType.ErrorResult="Error"}(ApprovalResultType||(ApprovalResultType={})),function(ApprovalFeatureType){ApprovalFeatureType.Malicious="Malicious",ApprovalFeatureType.Warning="Warning",ApprovalFeatureType.Benign="Benign",ApprovalFeatureType.Info="Info"}(ApprovalFeatureType||(ApprovalFeatureType={}))},"./node_modules/react-hot-toast/dist/index.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{oR:()=>dist_n});var react=__webpack_require__("./node_modules/react/index.js");let e={data:""},t=t=>{if("object"==typeof window){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||e},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e},i=(e,t,r,i,p)=>{let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[d],t,i,f),d};function u(e){let r=this||{},l=e.call?e(r.p):e;return i(l.unshift?l.raw?((e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==n?"":n)},""))(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):l,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let d,f,g,h=u.bind({k:1});function w(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g&&i[0]&&g(c),d(i,c)}return t?t(a):a}}var dist_h=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,W=(()=>{let e=0;return()=>(++e).toString()})(),E=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),k="default",H=(e,t)=>{let{toastLimit:o}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,o)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:s}=t;return H(e,{type:e.toasts.find(r=>r.id===s.id)?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(r=>r.id===a||void 0===a?{...r,dismissed:!0,visible:!1}:r)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},v=[],j={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},dist_f={},Y=(e,t=k)=>{dist_f[t]=H(dist_f[t]||j,e),v.forEach(([o,s])=>{o===t&&s(dist_f[t])})},_=e=>Object.keys(dist_f).forEach(t=>Y(e,t)),S=(e=k)=>t=>{Y(t,e)},P=e=>(t,o)=>{let s=((e,t="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(null==o?void 0:o.id)||W()}))(t,e,o);return S(s.toasterId||(e=>Object.keys(dist_f).find(t=>dist_f[t].toasts.some(o=>o.id===e)))(s.id))({type:2,toast:s}),s.id},dist_n=(e,t)=>P("blank")(e,t);dist_n.error=P("error"),dist_n.success=P("success"),dist_n.loading=P("loading"),dist_n.custom=P("custom"),dist_n.dismiss=(e,t)=>{let o={type:3,toastId:e};t?S(t)(o):_(o)},dist_n.dismissAll=e=>dist_n.dismiss(void 0,e),dist_n.remove=(e,t)=>{let o={type:4,toastId:e};t?S(t)(o):_(o)},dist_n.removeAll=e=>dist_n.remove(void 0,e),dist_n.promise=(e,t,o)=>{let s=dist_n.loading(t.loading,{...o,...null==o?void 0:o.loading});return"function"==typeof e&&(e=e()),e.then(a=>{let i=t.success?dist_h(t.success,a):void 0;return i?dist_n.success(i,{id:s,...o,...null==o?void 0:o.success}):dist_n.dismiss(s),a}).catch(a=>{let i=t.error?dist_h(t.error,a):void 0;i?dist_n.error(i,{id:s,...o,...null==o?void 0:o.error}):dist_n.dismiss(s)}),e};var de=h`
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
`,$=({toast:e})=>{let{icon:t,type:o,iconTheme:s}=e;return void 0!==t?"string"==typeof t?react.createElement(Pe,null,t):t:"blank"===o?null:react.createElement(Se,null,react.createElement(F,{...s}),"loading"!==o&&react.createElement(be,null,"error"===o?react.createElement(C,{...s}):react.createElement(L,{...s})))},Re=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Ee=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Oe=w("div")`
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
`;react.memo(({toast:e,position:t,style:o,children:s})=>{let a=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[a,i]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Re(s),Ee(s)];return{animation:t?`${h(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=react.createElement($,{toast:e}),r=react.createElement(Ie,{...e.ariaProps},dist_h(e.message,e));return react.createElement(Oe,{className:e.className,style:{...a,...o,...e.style}},"function"==typeof s?s({icon:i,message:r}):react.createElement(react.Fragment,null,i,r))});!function m(e,t,r,l){o.p=t,d=e,f=r,g=l}(react.createElement);u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`}}]);
//# sourceMappingURL=85556.2142e641.iframe.bundle.js.map