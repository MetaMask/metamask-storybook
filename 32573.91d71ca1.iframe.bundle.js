"use strict";(globalThis.webpackChunkmetamask_crx||=[]).push([[32573],{"./node_modules/@metamask/design-system-react/dist/components/AvatarNetwork/AvatarNetwork.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarNetwork/AvatarNetwork.types.mjs"),_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarBase/AvatarBase.types.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_utils_tw_merge_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@metamask/design-system-react/dist/utils/tw-merge.mjs"),_AvatarBase_index_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/AvatarBase/AvatarBase.mjs");const React=function $importDefault(module){return module?.__esModule?module.default:module}(react__WEBPACK_IMPORTED_MODULE_2__),AvatarNetwork=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({src,name="",fallbackText,fallbackTextProps,className,size=_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_0__.L.Md,imageProps,...props},ref)=>{const[finalFallbackText,setFinalFallbackText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),backupFallbackText=fallbackText||name?.[0]||"?",altText=name||"Network logo";return React.createElement(_AvatarBase_index_mjs__WEBPACK_IMPORTED_MODULE_4__.d,{ref,shape:_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_1__.G.Square,size,className:(0,_utils_tw_merge_mjs__WEBPACK_IMPORTED_MODULE_3__.Q)(src&&!finalFallbackText?"bg-white":void 0,className),fallbackText:src?finalFallbackText:backupFallbackText,fallbackTextProps,...props},src&&React.createElement("img",{src,alt:altText,className:"size-full object-cover",...imageProps,onError:e=>{setFinalFallbackText(backupFallbackText),imageProps?.onError?.(e)}}))});AvatarNetwork.displayName="AvatarNetwork",__webpack_require__.d(__webpack_exports__,["G",0,AvatarNetwork])},"./node_modules/@metamask/design-system-react/dist/components/AvatarToken/AvatarToken.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarToken/AvatarToken.types.mjs"),_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarBase/AvatarBase.types.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_utils_tw_merge_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@metamask/design-system-react/dist/utils/tw-merge.mjs"),_AvatarBase_index_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@metamask/design-system-react/dist/components/AvatarBase/AvatarBase.mjs");const React=function $importDefault(module){return module?.__esModule?module.default:module}(react__WEBPACK_IMPORTED_MODULE_2__),AvatarToken=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({src,name="",fallbackText,fallbackTextProps,className,size=_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_0__.g.Md,imageProps,...props},ref)=>{const[finalFallbackText,setFinalFallbackText]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),backupFallbackText=fallbackText||name?.[0]||"?",altText=name||"Token logo";return React.createElement(_AvatarBase_index_mjs__WEBPACK_IMPORTED_MODULE_4__.d,{ref,shape:_metamask_design_system_shared__WEBPACK_IMPORTED_MODULE_1__.G.Circle,size,className:(0,_utils_tw_merge_mjs__WEBPACK_IMPORTED_MODULE_3__.Q)(src&&!finalFallbackText?"bg-white":void 0,className),fallbackText:src?finalFallbackText:backupFallbackText,fallbackTextProps,...props},src&&React.createElement("img",{src,alt:altText,className:"size-full object-cover",...imageProps,onError:e=>{setFinalFallbackText(backupFallbackText),imageProps?.onError?.(e)}}))});AvatarToken.displayName="AvatarToken",__webpack_require__.d(__webpack_exports__,["h",0,AvatarToken])},"./node_modules/@metamask/design-system-shared/dist/types/AvatarNetwork/AvatarNetwork.types.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){const AvatarNetworkSize=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarBase/AvatarBase.types.mjs").S;__webpack_require__.d(__webpack_exports__,["L",0,AvatarNetworkSize])},"./node_modules/@metamask/design-system-shared/dist/types/AvatarToken/AvatarToken.types.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){const AvatarTokenSize=__webpack_require__("./node_modules/@metamask/design-system-shared/dist/types/AvatarBase/AvatarBase.types.mjs").S;__webpack_require__.d(__webpack_exports__,["g",0,AvatarTokenSize])},"./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{t:()=>useBaseQuery});var _QueryClientProvider_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),_IsRestoringProvider_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js"),_QueryErrorResetBoundary_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js"),_errorBoundaryUtils_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js"),_suspense_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/suspense.js"),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),_tanstack_query_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/utils.js"),_tanstack_query_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/notifyManager.js");function useBaseQuery(options,Observer,queryClient){const isRestoring=(0,_IsRestoringProvider_js__WEBPACK_IMPORTED_MODULE_1__.w)(),errorResetBoundary=(0,_QueryErrorResetBoundary_js__WEBPACK_IMPORTED_MODULE_2__.h)(),client=(0,_QueryClientProvider_js__WEBPACK_IMPORTED_MODULE_0__.jE)(queryClient),defaultedOptions=client.defaultQueryOptions(options),query=client.getQueryCache().get(defaultedOptions.queryHash);const subscribed=!1!==options.subscribed;defaultedOptions._optimisticResults=isRestoring?"isRestoring":subscribed?"optimistic":void 0,(0,_suspense_js__WEBPACK_IMPORTED_MODULE_4__.jv)(defaultedOptions),(0,_errorBoundaryUtils_js__WEBPACK_IMPORTED_MODULE_3__.LJ)(defaultedOptions,errorResetBoundary,query),(0,_errorBoundaryUtils_js__WEBPACK_IMPORTED_MODULE_3__.wZ)(errorResetBoundary);const[observer]=react__WEBPACK_IMPORTED_MODULE_5__.useState(()=>new Observer(client,defaultedOptions)),result=observer.getOptimisticResult(defaultedOptions),shouldSubscribe=!isRestoring&&subscribed;if(react__WEBPACK_IMPORTED_MODULE_5__.useSyncExternalStore(react__WEBPACK_IMPORTED_MODULE_5__.useCallback(onStoreChange=>{const unsubscribe=shouldSubscribe?observer.subscribe(_tanstack_query_core__WEBPACK_IMPORTED_MODULE_7__.jG.batchCalls(onStoreChange)):_tanstack_query_core__WEBPACK_IMPORTED_MODULE_6__.lQ;return observer.updateResult(),unsubscribe},[observer,shouldSubscribe]),()=>observer.getCurrentResult(),()=>observer.getCurrentResult()),react__WEBPACK_IMPORTED_MODULE_5__.useEffect(()=>{observer.setOptions(defaultedOptions)},[defaultedOptions,observer]),(0,_suspense_js__WEBPACK_IMPORTED_MODULE_4__.EU)(defaultedOptions,result))throw(0,_suspense_js__WEBPACK_IMPORTED_MODULE_4__.iL)(defaultedOptions,observer,errorResetBoundary);if((0,_errorBoundaryUtils_js__WEBPACK_IMPORTED_MODULE_3__.$1)({result,errorResetBoundary,throwOnError:defaultedOptions.throwOnError,query,suspense:defaultedOptions.suspense}))throw result.error;return defaultedOptions.notifyOnChangeProps?result:observer.trackResult(result)}},"./node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{q:()=>useInfiniteQuery});var useBaseQuery=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/useBaseQuery.js"),infiniteQueryBehavior=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js"),queryObserver=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/queryObserver.js"),InfiniteQueryObserver=class extends queryObserver.${constructor(client,options){super(client,options)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(options){options._type="infinite",super.setOptions(options)}getOptimisticResult(options){return options._type="infinite",super.getOptimisticResult(options)}fetchNextPage(options){return this.fetch({...options,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(options){return this.fetch({...options,meta:{fetchMore:{direction:"backward"}}})}createResult(query,options){const{state}=query,parentResult=super.createResult(query,options),{isFetching,isRefetching,isError,isRefetchError}=parentResult,fetchDirection=state.fetchMeta?.fetchMore?.direction,isFetchNextPageError=isError&&"forward"===fetchDirection,isFetchingNextPage=isFetching&&"forward"===fetchDirection,isFetchPreviousPageError=isError&&"backward"===fetchDirection,isFetchingPreviousPage=isFetching&&"backward"===fetchDirection;return{...parentResult,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,infiniteQueryBehavior.rB)(options,state.data),hasPreviousPage:(0,infiniteQueryBehavior.RQ)(options,state.data),isFetchNextPageError,isFetchingNextPage,isFetchPreviousPageError,isFetchingPreviousPage,isRefetchError:isRefetchError&&!isFetchNextPageError&&!isFetchPreviousPageError,isRefetching:isRefetching&&!isFetchingNextPage&&!isFetchingPreviousPage}}};function useInfiniteQuery(options,queryClient){return(0,useBaseQuery.t)(options,InfiniteQueryObserver,queryClient)}},"./node_modules/@tanstack/react-query/build/modern/useQueries.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:()=>useQueries});var QueryClientProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),IsRestoringProvider=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js"),QueryErrorResetBoundary=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js"),errorBoundaryUtils=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js"),suspense=__webpack_require__("./node_modules/@tanstack/react-query/build/modern/suspense.js"),react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/utils.js"),subscribable=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/subscribable.js"),notifyManager=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/notifyManager.js"),modern_queryObserver=__webpack_require__("./node_modules/@tanstack/query-core/build/modern/queryObserver.js");function difference(array1,array2){const excludeSet=new Set(array2);return array1.filter(x=>!excludeSet.has(x))}var QueriesObserver=class extends subscribable.Q{#client;#result;#queries;#options;#observers;#combinedResult;#lastCombine;#lastResult;#lastQueryHashes;#observerMatches=[];constructor(client,queries,options){super(),this.#client=client,this.#options=options,this.#queries=[],this.#observers=[],this.#result=[],this.setQueries(queries)}onSubscribe(){1===this.listeners.size&&this.#observers.forEach(observer=>{observer.subscribe(result=>{this.#onUpdate(observer,result)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.#observers.forEach(observer=>{observer.destroy()})}setQueries(queries,options){this.#queries=queries,this.#options=options,notifyManager.jG.batch(()=>{const prevObservers=this.#observers,newObserverMatches=this.#findMatchingObservers(this.#queries);newObserverMatches.forEach(match=>match.observer.setOptions(match.defaultedQueryOptions));const newObservers=newObserverMatches.map(match=>match.observer),newResult=newObservers.map(observer=>observer.getCurrentResult()),hasLengthChange=prevObservers.length!==newObservers.length,hasIndexChange=newObservers.some((observer,index)=>observer!==prevObservers[index]),hasStructuralChange=hasLengthChange||hasIndexChange,hasResultChange=!!hasStructuralChange||newResult.some((result,index)=>{const prev=this.#result[index];return!prev||!(0,utils.f8)(result,prev)});(hasStructuralChange||hasResultChange)&&(hasStructuralChange&&(this.#observerMatches=newObserverMatches,this.#observers=newObservers),this.#result=newResult,this.hasListeners()&&(hasStructuralChange&&(difference(prevObservers,newObservers).forEach(observer=>{observer.destroy()}),difference(newObservers,prevObservers).forEach(observer=>{observer.subscribe(result=>{this.#onUpdate(observer,result)})})),this.#notify()))})}getCurrentResult(){return this.#result}getQueries(){return this.#observers.map(observer=>observer.getCurrentQuery())}getObservers(){return this.#observers}getOptimisticResult(queries,combine){const matches=this.#findMatchingObservers(queries),result=matches.map(match=>match.observer.getOptimisticResult(match.defaultedQueryOptions)),queryHashes=matches.map(match=>match.defaultedQueryOptions.queryHash);return[result,r=>this.#combineResult(r??result,combine,queryHashes),()=>this.#trackResult(result,matches)]}#trackResult(result,matches){const trackedProps=new Set;return matches.map((match,index)=>{const observerResult=result[index];return match.defaultedQueryOptions.notifyOnChangeProps?observerResult:match.observer.trackResult(observerResult,accessedProp=>{trackedProps.has(accessedProp)||(trackedProps.add(accessedProp),matches.forEach(m=>{m.observer.trackProp(accessedProp)}))})})}#combineResult(input,combine,queryHashes){if(combine){const lastHashes=this.#lastQueryHashes,queryHashesChanged=void 0!==queryHashes&&void 0!==lastHashes&&(lastHashes.length!==queryHashes.length||queryHashes.some((hash,i)=>hash!==lastHashes[i]));return(this.#result!==this.#lastResult||queryHashesChanged||combine!==this.#lastCombine)&&(this.#lastCombine=combine,this.#lastResult=this.#result,void 0!==queryHashes&&(this.#lastQueryHashes=queryHashes),this.#combinedResult=(0,utils.BH)(this.#combinedResult,combine(input))),this.#combinedResult}return input}#shouldSkipCombine(){return!this.#options?.combine||this.#observers.some((observer,index)=>observer.options.suspense&&void 0===this.#result[index]?.data)}#findMatchingObservers(queries){const prevObserversMap=new Map;this.#observers.forEach(observer=>{const key=observer.options.queryHash;if(!key)return;const previousObservers=prevObserversMap.get(key);previousObservers?previousObservers.push(observer):prevObserversMap.set(key,[observer])});const observers=[];return queries.forEach(options=>{const defaultedOptions=this.#client.defaultQueryOptions(options),observer=prevObserversMap.get(defaultedOptions.queryHash)?.shift()??new modern_queryObserver.$(this.#client,defaultedOptions);observers.push({defaultedQueryOptions:defaultedOptions,observer})}),observers}#onUpdate(observer,result){const index=this.#observers.indexOf(observer);-1!==index&&(this.#result=this.#result.slice(),this.#result[index]=result,this.#notify())}#notify(){if(this.hasListeners()){const shouldSkipCombine=this.#shouldSkipCombine(),previousResult=this.#combinedResult,newResult=shouldSkipCombine?previousResult:this.#combineResult(this.#trackResult(this.#result,this.#observerMatches),this.#options?.combine);(shouldSkipCombine||previousResult!==newResult)&&notifyManager.jG.batch(()=>{this.listeners.forEach(listener=>{listener(this.#result)})})}}};function useQueries({queries,...options},queryClient){const client=(0,QueryClientProvider.jE)(queryClient),isRestoring=(0,IsRestoringProvider.w)(),errorResetBoundary=(0,QueryErrorResetBoundary.h)(),subscribed=!1!==options.subscribed,defaultedQueries=react.useMemo(()=>queries.map(opts=>{const defaultedOptions=client.defaultQueryOptions(opts);return defaultedOptions._optimisticResults=isRestoring?"isRestoring":subscribed?"optimistic":void 0,defaultedOptions}),[queries,client,isRestoring,subscribed]);defaultedQueries.forEach(queryOptions=>{(0,suspense.jv)(queryOptions);const query=client.getQueryCache().get(queryOptions.queryHash);(0,errorBoundaryUtils.LJ)(queryOptions,errorResetBoundary,query)}),(0,errorBoundaryUtils.wZ)(errorResetBoundary);const[observer]=react.useState(()=>new QueriesObserver(client,defaultedQueries,options)),[optimisticResult,getCombinedResult,trackResult]=observer.getOptimisticResult(defaultedQueries,options.combine),shouldSubscribe=!isRestoring&&subscribed;react.useSyncExternalStore(react.useCallback(onStoreChange=>shouldSubscribe?observer.subscribe(notifyManager.jG.batchCalls(onStoreChange)):utils.lQ,[observer,shouldSubscribe]),()=>observer.getCurrentResult(),()=>observer.getCurrentResult()),react.useEffect(()=>{observer.setQueries(defaultedQueries,options)},[defaultedQueries,options,observer]);const suspensePromises=optimisticResult.some((result,index)=>(0,suspense.EU)(defaultedQueries[index],result))?optimisticResult.flatMap((result,index)=>{const opts=defaultedQueries[index];if(opts&&(0,suspense.EU)(opts,result)){const queryObserver=new modern_queryObserver.$(client,opts);return(0,suspense.iL)(opts,queryObserver,errorResetBoundary)}return[]}):[];if(suspensePromises.length>0)throw Promise.all(suspensePromises);const firstSingleResultWhichShouldThrow=optimisticResult.find((result,index)=>{const query=defaultedQueries[index];return query&&(0,errorBoundaryUtils.$1)({result,errorResetBoundary,throwOnError:query.throwOnError,query:client.getQueryCache().get(query.queryHash),suspense:query.suspense})});if(firstSingleResultWhichShouldThrow)throw firstSingleResultWhichShouldThrow.error;return getCombinedResult(trackResult())}},"./node_modules/react-hot-toast/dist/index.mjs"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{oR:()=>dist_n});var react=__webpack_require__("./node_modules/react/index.js");let e={data:""},t=t=>{if("object"==typeof window){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||e},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e},i=(e,t,r,i,p)=>{let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[d],t,i,f),d};function u(e){let r=this||{},l=e.call?e(r.p):e;return i(l.unshift?l.raw?((e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(n??"")},""))(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):l,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let d,f,g,h=u.bind({k:1});function w(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g&&i[0]&&g(c),d(i,c)}return t?t(a):a}}var dist_h=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,W=(()=>{let e=0;return()=>(++e).toString()})(),E=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),k="default",H=(e,t)=>{let{toastLimit:o}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,o)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:s}=t;return H(e,{type:e.toasts.find(r=>r.id===s.id)?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(r=>r.id===a||void 0===a?{...r,dismissed:!0,visible:!1}:r)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+i}))}}},v=[],j={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},dist_f={},Y=(e,t=k)=>{dist_f[t]=H(dist_f[t]||j,e),v.forEach(([o,s])=>{o===t&&s(dist_f[t])})},_=e=>Object.keys(dist_f).forEach(t=>Y(e,t)),S=(e=k)=>t=>{Y(t,e)},P=e=>(t,o)=>{let s=((e,t="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(null==o?void 0:o.id)||W()}))(t,e,o);return S(s.toasterId||(e=>Object.keys(dist_f).find(t=>dist_f[t].toasts.some(o=>o.id===e)))(s.id))({type:2,toast:s}),s.id},dist_n=(e,t)=>P("blank")(e,t);dist_n.error=P("error"),dist_n.success=P("success"),dist_n.loading=P("loading"),dist_n.custom=P("custom"),dist_n.dismiss=(e,t)=>{let o={type:3,toastId:e};t?S(t)(o):_(o)},dist_n.dismissAll=e=>dist_n.dismiss(void 0,e),dist_n.remove=(e,t)=>{let o={type:4,toastId:e};t?S(t)(o):_(o)},dist_n.removeAll=e=>dist_n.remove(void 0,e),dist_n.promise=(e,t,o)=>{let s=dist_n.loading(t.loading,{...o,...null==o?void 0:o.loading});return"function"==typeof e&&(e=e()),e.then(a=>{let i=t.success?dist_h(t.success,a):void 0;return i?dist_n.success(i,{id:s,...o,...null==o?void 0:o.success}):dist_n.dismiss(s),a}).catch(a=>{let i=t.error?dist_h(t.error,a):void 0;i?dist_n.error(i,{id:s,...o,...null==o?void 0:o.error}):dist_n.dismiss(s)}),e};var de=h`
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
//# sourceMappingURL=32573.91d71ca1.iframe.bundle.js.map