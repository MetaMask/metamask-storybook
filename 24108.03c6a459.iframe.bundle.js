"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[24108],{"./node_modules/@metamask/snaps-utils/dist/base64.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>encodeBase64});var esm=__webpack_require__("./node_modules/@scure/base/lib/esm/index.js"),dist_assert=__webpack_require__("./node_modules/@metamask/snaps-utils/node_modules/@metamask/utils/dist/assert.mjs"),refinements=__webpack_require__("./node_modules/@metamask/superstruct/dist/structs/refinements.mjs"),types=__webpack_require__("./node_modules/@metamask/superstruct/dist/structs/types.mjs");(0,refinements.T1)((0,types.Yj)(),/^(?:0x)?[0-9a-f]+$/iu),(0,refinements.T1)((0,types.Yj)(),/^0x[0-9a-f]+$/iu);let HexChecksumAddressStruct=((0,refinements.T1)((0,types.Yj)(),/^0x[0-9a-f]{40}$/u),(0,refinements.T1)((0,types.Yj)(),/^0x[0-9a-fA-F]{40}$/u));function add0x(hexadecimal){return hexadecimal.startsWith("0x")?hexadecimal:hexadecimal.startsWith("0X")?`0x${hexadecimal.substring(2)}`:`0x${hexadecimal}`}function hex_remove0x(hexadecimal){return hexadecimal.startsWith("0x")||hexadecimal.startsWith("0X")?hexadecimal.substring(2):hexadecimal}__webpack_require__("./node_modules/buffer/index.js").Buffer;let getPrecomputedHexValues=function getPrecomputedHexValuesBuilder(){let lookupTable=[];return()=>{if(0===lookupTable.length)for(let i=0;i<256;i++)lookupTable.push(i.toString(16).padStart(2,"0"));return lookupTable}}();function isBytes(value){return value instanceof Uint8Array}function assertIsBytes(value){(0,dist_assert.vA)(isBytes(value),"Value must be a Uint8Array.")}function bytes_bytesToHex(bytes){if(assertIsBytes(bytes),0===bytes.length)return"0x";let lookupTable=getPrecomputedHexValues(),hexadecimal=Array(bytes.length);for(let i=0;i<bytes.length;i++)hexadecimal[i]=lookupTable[bytes[i]];return add0x(hexadecimal.join(""))}function bytesToBase64(bytes){return assertIsBytes(bytes),esm.K3.encode(bytes)}function hexToBytes(value){if(value?.toLowerCase?.()==="0x")return new Uint8Array;assertIsHexString(value);let strippedValue=remove0x(value).toLowerCase(),normalizedValue=strippedValue.length%2==0?strippedValue:`0${strippedValue}`,bytes=new Uint8Array(normalizedValue.length/2);for(let i=0;i<bytes.length;i++){let c1=normalizedValue.charCodeAt(2*i),c2=normalizedValue.charCodeAt(2*i+1),n1=c1-(c1<58?48:87),n2=c2-(c2<58?48:87);bytes[i]=16*n1+n2}return bytes}function stringToBytes(value){return(0,dist_assert.vA)("string"==typeof value,"Value must be a string."),new TextEncoder().encode(value)}var rfdc=__webpack_require__("./node_modules/rfdc/index.js");let deepClone=(function $importDefault(module){return module?.__esModule?module.default:module})(__webpack_require__.n(rfdc)())({proto:!1,circles:!1});class VirtualFile{constructor(value){let options;"string"==typeof value||value instanceof Uint8Array?options={value}:options=value,this.value=options?.value??"",this.result=options?.result??void 0,this.data=options?.data??{},this.path=options?.path??"/"}get size(){return"string"==typeof this.value?this.value.length:this.value.byteLength}toString(encoding){return"string"==typeof this.value?((0,dist_assert.vA)(void 0===encoding,"Tried to encode string."),this.value):this.value instanceof Uint8Array&&"hex"===encoding?bytes_bytesToHex(this.value):this.value instanceof Uint8Array&&"base64"===encoding?esm.K3.encode(this.value):new TextDecoder(encoding).decode(this.value)}clone(){let vfile=new VirtualFile;return"string"==typeof this.value?vfile.value=this.value:vfile.value=this.value.slice(0),vfile.result=deepClone(this.result),vfile.data=deepClone(this.data),vfile.path=this.path,vfile}}function getBytes(bytes){let unwrapped=bytes instanceof VirtualFile?bytes.value:bytes;return"string"==typeof unwrapped?stringToBytes(unwrapped):unwrapped}async function encodeBase64(input){let bytes=getBytes(input);return"FileReader"in globalThis?await new Promise((resolve,reject)=>{let reader=Object.assign(new FileReader,{onload:()=>resolve(reader.result.replace("data:application/octet-stream;base64,","")),onerror:()=>reject(reader.error)});reader.readAsDataURL(new File([bytes],"",{type:"application/octet-stream"}))}):bytesToBase64(bytes)}},"./node_modules/rfdc/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Buffer=__webpack_require__("./node_modules/buffer/index.js").Buffer;function copyBuffer(cur){return cur instanceof Buffer?Buffer.from(cur):new cur.constructor(cur.buffer.slice(),cur.byteOffset,cur.length)}function rfdc(opts){if((opts=opts||{}).circles)return rfdcCircles(opts);return opts.proto?cloneProto:clone;function cloneArray(a,fn){for(var keys=Object.keys(a),a2=Array(keys.length),i=0;i<keys.length;i++){var k=keys[i],cur=a[k];"object"!=typeof cur||null===cur?a2[k]=cur:cur instanceof Date?a2[k]=new Date(cur):ArrayBuffer.isView(cur)?a2[k]=copyBuffer(cur):a2[k]=fn(cur)}return a2}function clone(o){if("object"!=typeof o||null===o)return o;if(o instanceof Date)return new Date(o);if(Array.isArray(o))return cloneArray(o,clone);if(o instanceof Map)return new Map(cloneArray(Array.from(o),clone));if(o instanceof Set)return new Set(cloneArray(Array.from(o),clone));var o2={};for(var k in o)if(!1!==Object.hasOwnProperty.call(o,k)){var cur=o[k];"object"!=typeof cur||null===cur?o2[k]=cur:cur instanceof Date?o2[k]=new Date(cur):cur instanceof Map?o2[k]=new Map(cloneArray(Array.from(cur),clone)):cur instanceof Set?o2[k]=new Set(cloneArray(Array.from(cur),clone)):ArrayBuffer.isView(cur)?o2[k]=copyBuffer(cur):o2[k]=clone(cur)}return o2}function cloneProto(o){if("object"!=typeof o||null===o)return o;if(o instanceof Date)return new Date(o);if(Array.isArray(o))return cloneArray(o,cloneProto);if(o instanceof Map)return new Map(cloneArray(Array.from(o),cloneProto));if(o instanceof Set)return new Set(cloneArray(Array.from(o),cloneProto));var o2={};for(var k in o){var cur=o[k];"object"!=typeof cur||null===cur?o2[k]=cur:cur instanceof Date?o2[k]=new Date(cur):cur instanceof Map?o2[k]=new Map(cloneArray(Array.from(cur),cloneProto)):cur instanceof Set?o2[k]=new Set(cloneArray(Array.from(cur),cloneProto)):ArrayBuffer.isView(cur)?o2[k]=copyBuffer(cur):o2[k]=cloneProto(cur)}return o2}}function rfdcCircles(opts){var refs=[],refsNew=[];return opts.proto?cloneProto:clone;function cloneArray(a,fn){for(var keys=Object.keys(a),a2=Array(keys.length),i=0;i<keys.length;i++){var k=keys[i],cur=a[k];if("object"!=typeof cur||null===cur)a2[k]=cur;else if(cur instanceof Date)a2[k]=new Date(cur);else if(ArrayBuffer.isView(cur))a2[k]=copyBuffer(cur);else{var index=refs.indexOf(cur);-1!==index?a2[k]=refsNew[index]:a2[k]=fn(cur)}}return a2}function clone(o){if("object"!=typeof o||null===o)return o;if(o instanceof Date)return new Date(o);if(Array.isArray(o))return cloneArray(o,clone);if(o instanceof Map)return new Map(cloneArray(Array.from(o),clone));if(o instanceof Set)return new Set(cloneArray(Array.from(o),clone));var o2={};for(var k in refs.push(o),refsNew.push(o2),o)if(!1!==Object.hasOwnProperty.call(o,k)){var cur=o[k];if("object"!=typeof cur||null===cur)o2[k]=cur;else if(cur instanceof Date)o2[k]=new Date(cur);else if(cur instanceof Map)o2[k]=new Map(cloneArray(Array.from(cur),clone));else if(cur instanceof Set)o2[k]=new Set(cloneArray(Array.from(cur),clone));else if(ArrayBuffer.isView(cur))o2[k]=copyBuffer(cur);else{var i=refs.indexOf(cur);-1!==i?o2[k]=refsNew[i]:o2[k]=clone(cur)}}return refs.pop(),refsNew.pop(),o2}function cloneProto(o){if("object"!=typeof o||null===o)return o;if(o instanceof Date)return new Date(o);if(Array.isArray(o))return cloneArray(o,cloneProto);if(o instanceof Map)return new Map(cloneArray(Array.from(o),cloneProto));if(o instanceof Set)return new Set(cloneArray(Array.from(o),cloneProto));var o2={};for(var k in refs.push(o),refsNew.push(o2),o){var cur=o[k];if("object"!=typeof cur||null===cur)o2[k]=cur;else if(cur instanceof Date)o2[k]=new Date(cur);else if(cur instanceof Map)o2[k]=new Map(cloneArray(Array.from(cur),cloneProto));else if(cur instanceof Set)o2[k]=new Set(cloneArray(Array.from(cur),cloneProto));else if(ArrayBuffer.isView(cur))o2[k]=copyBuffer(cur);else{var i=refs.indexOf(cur);-1!==i?o2[k]=refsNew[i]:o2[k]=cloneProto(cur)}}return refs.pop(),refsNew.pop(),o2}}module.exports=rfdc}}]);