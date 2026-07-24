"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[686],{"./ui/components/ui/numeric-input/numeric-input.stories.js"(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,WithDetail:()=>WithDetail,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>numeric_input_stories});var react=__webpack_require__("./node_modules/react/index.js"),numeric_input_component=__webpack_require__("./ui/components/ui/numeric-input/numeric-input.component.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let numeric_input_stories={title:"Components/UI/NumericInput"};var DefaultStory=function(){var _useState=_sliced_to_array((0,react.useState)(0),2),value=_useState[0],setValue=_useState[1];return react.createElement("div",{style:{width:"600px"}},react.createElement(numeric_input_component.A,{onChange:setValue,value:value}))};DefaultStory.storyName="Default";var WithDetail=function(){var _useState=_sliced_to_array((0,react.useState)(0),2),value=_useState[0],setValue=_useState[1];return react.createElement("div",{style:{width:"600px"}},react.createElement(numeric_input_component.A,{detailText:"= $0.06",onChange:setValue,value:value}))},WithError=function(){var _useState=_sliced_to_array((0,react.useState)(0),2),value=_useState[0],setValue=_useState[1];return react.createElement("div",{style:{width:"600px"}},react.createElement(numeric_input_component.A,{detailText:"= $0.06",error:"This number isn't great",onChange:setValue,value:value}))};DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  return <div style={{
    width: '600px'
  }}>
      <NumericInput onChange={setValue} value={value} />
    </div>;
}`,...DefaultStory.parameters?.docs?.source}}},WithDetail.parameters={...WithDetail.parameters,docs:{...WithDetail.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  return <div style={{
    width: '600px'
  }}>
      <NumericInput detailText="= $0.06" onChange={setValue} value={value} />
    </div>;
}`,...WithDetail.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  return <div style={{
    width: '600px'
  }}>
      <NumericInput detailText="= $0.06" error="This number isn't great" onChange={setValue} value={value} />
    </div>;
}`,...WithError.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory","WithDetail","WithError"]}}]);
//# sourceMappingURL=components-ui-numeric-input-numeric-input-stories.5d4b4dab.iframe.bundle.js.map