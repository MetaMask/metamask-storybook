"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[31073],{"./ui/components/app/snaps/update-snap-permission-list/update-snap-permission-list.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_update_snap_permission_list__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./ui/components/app/snaps/update-snap-permission-list/update-snap-permission-list.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Components/App/Snaps/UpdateSnapPermissionList",component:_update_snap_permission_list__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{approvedPermissions:{control:"object"},revokedPermissions:{control:"object"},newPermissions:{control:"object"},targetSubjectMetadata:{control:"object"}},args:{approvedPermissions:{"endowment:network-access":{date:1620710693178},snap_getBip32PublicKey:{date:1620710693178,caveats:[{value:[{path:["m","44'","0'"],curve:"secp256k1"}]}]}},revokedPermissions:{snap_notify:{date:1620710693178},eth_accounts:{date:1620710693178}},newPermissions:{snap_dialog:{date:1620710693178}},targetSubjectMetadata:{extensionId:null,iconUrl:null,name:"TypeScript Example Snap",origin:"local:http://localhost:8080",subjectType:"snap",version:"0.2.2"}}};var DefaultStory=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_update_snap_permission_list__WEBPACK_IMPORTED_MODULE_1__.A,args)};DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:"args => <UpdateSnapPermissionList {...args} />",...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]},"./ui/components/app/snaps/update-snap-permission-list/update-snap-permission-list.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>UpdateSnapPermissionList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__),_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/hooks/useI18nContext.js"),_component_library__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/component-library/index.ts"),_selectors__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/selectors/index.js"),_snap_permission_adapter__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./ui/components/app/snaps/snap-permission-adapter/index.js"),_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./ui/helpers/constants/design-system.ts"),_shared_constants_permissions__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./shared/constants/permissions.ts"),_helpers_utils_util__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./ui/helpers/utils/util.js"),_helpers_utils_permission__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./ui/helpers/utils/permission.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function UpdateSnapPermissionList(param){var approvedPermissions=param.approvedPermissions,revokedPermissions=param.revokedPermissions,newPermissions=param.newPermissions,approvedConnections=param.approvedConnections,revokedConnections=param.revokedConnections,newConnections=param.newConnections,targetSubjectMetadata=param.targetSubjectMetadata,showAllPermissions=param.showAllPermissions,t=(0,_hooks_useI18nContext__WEBPACK_IMPORTED_MODULE_2__.P)(),snapId=targetSubjectMetadata.origin,snapName=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.d4)(function(state){return(0,_selectors__WEBPACK_IMPORTED_MODULE_4__.oeg)(state,targetSubjectMetadata.origin)}).name,targetSubjectsMetadata=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.d4)(function(state){return(0,_selectors__WEBPACK_IMPORTED_MODULE_4__.MJ1)(state,_object_spread({},newConnections,approvedConnections,revokedConnections))}),snapsMetadata=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.d4)(_selectors__WEBPACK_IMPORTED_MODULE_4__.JaC),approvedCombinedPermissions=_object_spread_props(_object_spread({},approvedPermissions),{connection_permission:null!=approvedConnections?approvedConnections:{}}),revokedCombinedPermissions=_object_spread_props(_object_spread({},revokedPermissions),{connection_permission:null!=revokedConnections?revokedConnections:{}}),newCombinedPermissions=_object_spread_props(_object_spread({},newPermissions),{connection_permission:null!=newConnections?newConnections:{}}),newWeightedPermissions=(0,_helpers_utils_permission__WEBPACK_IMPORTED_MODULE_9__.iv)({t:t,permissions:newCombinedPermissions,subjectName:snapName,getSubjectName:(0,_helpers_utils_util__WEBPACK_IMPORTED_MODULE_8__.IB)(snapsMetadata)}),revokedWeightedPermissions=(0,_helpers_utils_permission__WEBPACK_IMPORTED_MODULE_9__.iv)({t:t,permissions:revokedCombinedPermissions,subjectName:snapName,getSubjectName:(0,_helpers_utils_util__WEBPACK_IMPORTED_MODULE_8__.IB)(snapsMetadata)}),approvedWeightedPermissions=(0,_helpers_utils_permission__WEBPACK_IMPORTED_MODULE_9__.iv)({t:t,permissions:approvedCombinedPermissions,subjectName:snapName,getSubjectName:(0,_helpers_utils_util__WEBPACK_IMPORTED_MODULE_8__.IB)(snapsMetadata)}),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Object.keys(approvedWeightedPermissions).length<1),2),showAll=_useState[0],setShowAll=_useState[1],totalNewAndRevokedPermissions=newWeightedPermissions.length+revokedWeightedPermissions.length,minApprovedPermissionsToShow=Math.max(_shared_constants_permissions__WEBPACK_IMPORTED_MODULE_7__.tU-totalNewAndRevokedPermissions,0),filteredApprovedWeightedPermissions=(0,_helpers_utils_util__WEBPACK_IMPORTED_MODULE_8__.k5)(approvedWeightedPermissions,_shared_constants_permissions__WEBPACK_IMPORTED_MODULE_7__.Bo.snapUpdateApprovedPermissions,minApprovedPermissionsToShow),onShowAllPermissions=function(){showAllPermissions(),setShowAll(!0)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.az,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_snap_permission_adapter__WEBPACK_IMPORTED_MODULE_5__.A,{permissions:newWeightedPermissions,snapId:snapId,snapName:snapName,targetSubjectsMetadata:targetSubjectsMetadata}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_snap_permission_adapter__WEBPACK_IMPORTED_MODULE_5__.A,{permissions:revokedWeightedPermissions,snapId:snapId,snapName:snapName,targetSubjectsMetadata:targetSubjectsMetadata,revoked:!0}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_snap_permission_adapter__WEBPACK_IMPORTED_MODULE_5__.A,{permissions:showAll?approvedWeightedPermissions:filteredApprovedWeightedPermissions,snapId:snapId,snapName:snapName,targetSubjectsMetadata:targetSubjectsMetadata,approved:!0}),showAll?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.az,{display:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_6__.nl.Flex,justifyContent:_helpers_constants_design_system__WEBPACK_IMPORTED_MODULE_6__.A9.center,paddingTop:2,paddingBottom:2},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_library__WEBPACK_IMPORTED_MODULE_3__.vx,{onClick:function(){return onShowAllPermissions()}},t("seeAllPermissions"))))}UpdateSnapPermissionList.propTypes={approvedPermissions:prop_types__WEBPACK_IMPORTED_MODULE_10___default().object.isRequired,revokedPermissions:prop_types__WEBPACK_IMPORTED_MODULE_10___default().object.isRequired,newPermissions:prop_types__WEBPACK_IMPORTED_MODULE_10___default().object.isRequired,approvedConnections:prop_types__WEBPACK_IMPORTED_MODULE_10___default().object.isRequired,revokedConnections:prop_types__WEBPACK_IMPORTED_MODULE_10___default().object.isRequired,newConnections:prop_types__WEBPACK_IMPORTED_MODULE_10___default().object.isRequired,showAllPermissions:prop_types__WEBPACK_IMPORTED_MODULE_10___default().func.isRequired,targetSubjectMetadata:prop_types__WEBPACK_IMPORTED_MODULE_10___default().object.isRequired},UpdateSnapPermissionList.__docgenInfo={description:"",methods:[],displayName:"UpdateSnapPermissionList",props:{approvedPermissions:{description:"Permissions that have already been approved",type:{name:"object"},required:!0},revokedPermissions:{description:"Previously used permissions that are now revoked",type:{name:"object"},required:!0},newPermissions:{description:"New permissions that are being requested",type:{name:"object"},required:!0},approvedConnections:{description:"Pre-approved connections that have already been approved",type:{name:"object"},required:!0},revokedConnections:{description:"Previously used pre-approved connections that are now revoked",type:{name:"object"},required:!0},newConnections:{description:"New pre-approved connections that are being requested",type:{name:"object"},required:!0},showAllPermissions:{description:"Callback function used to handle revealing all permissions action in UI.",type:{name:"func"},required:!0},targetSubjectMetadata:{description:"",type:{name:"object"},required:!0}}}}}]);