"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[7174],{"./ui/components/ui/icon/search-icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),SearchIcon=function(param){var _param_size=param.size,size=void 0===_param_size?24:_param_size,_param_color=param.color,ariaLabel=param.ariaLabel,className=param.className;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:size,height:size,fill:void 0===_param_color?"currentColor":_param_color,className:className,"aria-label":ariaLabel,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"m235 427c-51 0-100-21-136-57-36-36-56-84-56-135 0-26 5-51 14-74 10-23 24-44 42-62 18-18 39-32 62-42 23-9 48-14 74-14 25 0 50 5 73 14 23 10 45 24 62 42 18 18 32 39 42 62 10 23 15 48 15 74 0 43-15 86-42 119l78 79c2 2 4 4 5 7 1 2 1 5 1 8 0 3 0 6-1 8-1 3-3 5-5 7-2 2-4 4-7 5-2 1-5 1-8 1-3 0-6 0-8-1-3-1-5-3-7-5l-79-78c-33 27-76 42-119 42z m0-43c82 0 149-67 149-149 0-83-67-150-149-150-83 0-150 67-150 150 0 82 67 149 150 149z"}))};SearchIcon.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,color:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,ariaLabel:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string};let __WEBPACK_DEFAULT_EXPORT__=SearchIcon},"./ui/components/ui/text-field/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>text_field});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),withStyles=__webpack_require__("./node_modules/@material-ui/core/esm/styles/withStyles.js"),TextField=__webpack_require__("./node_modules/@material-ui/core/esm/TextField/TextField.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var inputLabelBase={transform:"none",transition:"none",position:"initial",color:"var(--color-text-default)"},styles={materialLabel:{"&$materialFocused":{color:"var(--color-text-alternative)"},"&$materialError":{color:"var(--color-text-alternative)"},fontWeight:"400",color:"var(--color-text-alternative)"},materialFocused:{},materialUnderline:{"&:before":{borderBottom:"1px solid var(--color-text-default) !important"},"&:after":{borderBottom:"2px solid var(--color-primary-default)"}},materialError:{},materialWhitePaddedRoot:{color:"var(--color-text-alternative)"},materialWhitePaddedInput:{padding:"8px","&::placeholder":{color:"var(--color-text-alternative)"}},materialWhitePaddedFocused:{color:"var(--color-background-default)"},materialWhitePaddedUnderline:{"&:after":{borderBottom:"2px solid var(--color-background-default)"}},formLabel:{"&$formLabelFocused":{color:"var(--color-text-alternative)"},"&$materialError":{color:"var(--color-text-alternative)"}},formLabelFocused:{},inputFocused:{},inputRoot:{"label + &":{marginTop:"9px"},backgroundColor:"var(--color-background-default)",border:"1px solid var(--color-border-default)",color:"var(--color-text-default)",height:"48px",borderRadius:"6px",padding:"0 16px",display:"flex",alignItems:"center","&$inputFocused":{border:"1px solid var(--color-primary-default)"}},largeInputLabel:_object_spread_props(_object_spread({},inputLabelBase),{fontSize:"1rem"}),inputLabel:_object_spread_props(_object_spread({},inputLabelBase),{fontSize:".75rem"}),inputMultiline:{lineHeight:"initial !important"}},themeToInputProps={material:function(param){var dir=param.dir,_param_classes=param.classes,materialLabel=_param_classes.materialLabel,materialFocused=_param_classes.materialFocused,materialError=_param_classes.materialError,materialUnderline=_param_classes.materialUnderline;return{InputLabelProps:{classes:{root:materialLabel,focused:materialFocused,error:materialError}},InputProps:{startAdornment:param.startAdornment,endAdornment:param.endAdornment,classes:{underline:materialUnderline},inputProps:{dir:dir,min:param.min,max:param.max,autoComplete:param.autoComplete}}}},bordered:function(param){var dir=param.dir,_param_classes=param.classes,formLabel=_param_classes.formLabel,formLabelFocused=_param_classes.formLabelFocused,materialError=_param_classes.materialError,largeInputLabel=_param_classes.largeInputLabel,inputLabel=_param_classes.inputLabel,inputRoot=_param_classes.inputRoot,input=_param_classes.input,inputFocused=_param_classes.inputFocused;return{InputLabelProps:{shrink:!0,className:param.largeLabel?largeInputLabel:inputLabel,classes:{root:formLabel,focused:formLabelFocused,error:materialError}},InputProps:{startAdornment:param.startAdornment,endAdornment:param.endAdornment,disableUnderline:!0,classes:{root:inputRoot,input:input,focused:inputFocused},inputProps:{dir:dir,min:param.min,max:param.max,autoComplete:param.autoComplete}}}},"material-white-padded":function(param){var dir=param.dir,_param_classes=param.classes,materialWhitePaddedRoot=_param_classes.materialWhitePaddedRoot,materialWhitePaddedFocused=_param_classes.materialWhitePaddedFocused,materialWhitePaddedInput=_param_classes.materialWhitePaddedInput,materialWhitePaddedUnderline=_param_classes.materialWhitePaddedUnderline;return{InputProps:{startAdornment:param.startAdornment,endAdornment:param.endAdornment,classes:{root:materialWhitePaddedRoot,focused:materialWhitePaddedFocused,input:materialWhitePaddedInput,underline:materialWhitePaddedUnderline},inputProps:{dir:dir,min:param.min,max:param.max,autoComplete:param.autoComplete}}}}},text_field_component_TextField=function(_param){var dataTestId=_param["data-testid"],error=_param.error,classes=_param.classes,theme=_param.theme,startAdornment=_param.startAdornment,endAdornment=_param.endAdornment,largeLabel=_param.largeLabel,dir=_param.dir,min=_param.min,max=_param.max,autoComplete=_param.autoComplete,onPaste=_param.onPaste,textFieldProps=_object_without_properties(_param,["data-testid","error","classes","theme","startAdornment","endAdornment","largeLabel","dir","min","max","autoComplete","onPaste"]),inputProps=themeToInputProps[theme]({classes:classes,startAdornment:startAdornment,endAdornment:endAdornment,largeLabel:largeLabel,dir:dir,min:min,max:max,autoComplete:autoComplete});return(onPaste||dataTestId)&&(inputProps.InputProps||(inputProps.InputProps={}),inputProps.InputProps.inputProps||(inputProps.InputProps.inputProps={}),inputProps.InputProps.inputProps.onPaste=onPaste,inputProps.InputProps.inputProps["data-testid"]=dataTestId),react.createElement(TextField.Z,_object_spread({error:!!error,helperText:error},inputProps,textFieldProps))};text_field_component_TextField.defaultProps={error:null,dir:"auto",theme:"bordered"},text_field_component_TextField.propTypes={"data-testid":prop_types_default().string,error:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().element]),classes:prop_types_default().object,dir:prop_types_default().string,theme:prop_types_default().oneOf(["bordered","material","material-white-padded"]),startAdornment:prop_types_default().element,endAdornment:prop_types_default().element,largeLabel:prop_types_default().bool,min:prop_types_default().number,max:prop_types_default().number,autoComplete:prop_types_default().string,onPaste:prop_types_default().func};let text_field=(0,withStyles.Z)(styles)(text_field_component_TextField)},"./ui/hooks/usePrevious.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>usePrevious});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function usePrevious(value){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){ref.current=value},[value]),ref.current}},"./ui/pages/swaps/searchable-item-list/list-item-search/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ListItemSearch});var timeoutIdForSearch,react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),fuse=__webpack_require__("./node_modules/fuse.js/dist/fuse.js"),fuse_default=__webpack_require__.n(fuse),loglevel=__webpack_require__("./node_modules/loglevel/lib/loglevel.js"),loglevel_default=__webpack_require__.n(loglevel),InputAdornment=__webpack_require__("./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js"),text_field=__webpack_require__("./ui/components/ui/text-field/index.js"),usePrevious=__webpack_require__("./ui/hooks/usePrevious.js"),hexstring_utils=__webpack_require__("./shared/modules/hexstring-utils.ts"),swaps_util=__webpack_require__("./ui/pages/swaps/swaps.util.ts"),selectors=__webpack_require__("./ui/selectors/selectors.js"),search_icon=__webpack_require__("./ui/components/ui/icon/search-icon.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function _ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}function ListItemSearch(param){var _ref,_ref1,onSearch=param.onSearch,error=param.error,_param_listToSearch=param.listToSearch,listToSearch=void 0===_param_listToSearch?[]:_param_listToSearch,fuseSearchKeys=param.fuseSearchKeys,searchPlaceholderText=param.searchPlaceholderText,defaultToAll=param.defaultToAll,shouldSearchForImports=param.shouldSearchForImports,searchQuery=param.searchQuery,setSearchQuery=param.setSearchQuery,fuseRef=(0,react.useRef)(),chainId=(0,es.v9)(selectors.BVZ),handleSearchTokenForImport=(_ref=_async_to_generator(function(contractAddress){var token,e;return _ts_generator(this,function(_state){switch(_state.label){case 0:return _state.trys.push([0,2,,3]),[4,(0,swaps_util.EC)(contractAddress,chainId)];case 1:if(token=_state.sent())return token.primaryLabel=token.symbol,token.secondaryLabel=token.name,token.notImported=!0,onSearch({searchQuery:contractAddress,results:[token]}),[2];return[3,3];case 2:return e=_state.sent(),loglevel_default().error("Token not found, show 0 results.",e),[3,3];case 3:return onSearch({searchQuery:contractAddress,results:[]}),[2]}})}),function handleSearchTokenForImport(contractAddress){return _ref.apply(this,arguments)}),handleSearch=(_ref1=_async_to_generator(function(newSearchQuery){return _ts_generator(this,function(_state){return setSearchQuery(newSearchQuery),timeoutIdForSearch&&clearTimeout(timeoutIdForSearch),timeoutIdForSearch=setTimeout(_async_to_generator(function(){var trimmedNewSearchQuery,validHexAddress,fuseSearchResult,results;return _ts_generator(this,function(_state){switch(_state.label){case 0:if(timeoutIdForSearch=null,trimmedNewSearchQuery=newSearchQuery.trim(),validHexAddress=(0,hexstring_utils.Pv)(trimmedNewSearchQuery),fuseSearchResult=fuseRef.current.search(newSearchQuery),results=defaultToAll&&""===newSearchQuery?listToSearch:fuseSearchResult,!(shouldSearchForImports&&0===results.length&&validHexAddress))return[3,2];return[4,handleSearchTokenForImport(trimmedNewSearchQuery)];case 1:return _state.sent(),[2];case 2:return onSearch({searchQuery:newSearchQuery,results:results}),[2]}})}),350),[2]})}),function handleSearch(newSearchQuery){return _ref1.apply(this,arguments)});(0,react.useEffect)(function(){return function(){return clearTimeout(timeoutIdForSearch)}},[]),(0,react.useEffect)(function(){fuseRef.current||(fuseRef.current=new(fuse_default())(listToSearch,{shouldSort:!0,threshold:.45,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:fuseSearchKeys}))},[fuseSearchKeys,listToSearch]);var previousListToSearch=(0,usePrevious.D)(null!=listToSearch?listToSearch:[]);return(0,react.useEffect)(function(){if(fuseRef.current&&searchQuery&&previousListToSearch!==listToSearch){fuseRef.current.setCollection(listToSearch);var fuseSearchResult=fuseRef.current.search(searchQuery);onSearch({searchQuery:searchQuery,results:fuseSearchResult})}},[listToSearch,searchQuery,onSearch,previousListToSearch]),react.createElement(text_field.Z,{"data-testid":"search-list-items",className:"searchable-item-list__search",placeholder:searchPlaceholderText,type:"text",value:searchQuery,onChange:function(e){return handleSearch(e.target.value)},error:error,fullWidth:!0,startAdornment:react.createElement(InputAdornment.Z,{position:"start",style:{marginRight:"12px"}},react.createElement(search_icon.Z,{size:20,color:"var(--color-icon-muted)"})),autoComplete:"off",autoFocus:!0})}ListItemSearch.propTypes={onSearch:prop_types_default().func,error:prop_types_default().string,listToSearch:prop_types_default().array.isRequired,fuseSearchKeys:prop_types_default().arrayOf(prop_types_default().object).isRequired,searchPlaceholderText:prop_types_default().string,defaultToAll:prop_types_default().bool,shouldSearchForImports:prop_types_default().bool,searchQuery:prop_types_default().string,setSearchQuery:prop_types_default().func}}}]);