"use strict";(globalThis.webpackChunkmetamask_crx=globalThis.webpackChunkmetamask_crx||[]).push([[83005],{"./ui/components/ui/mascot/mascot.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var events__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/events/events.js"),events__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./ui/components/ui/button/index.js"),_button_group__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./ui/components/ui/button-group/index.js"),_mascot_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./ui/components/ui/mascot/mascot.component.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var animationEventEmitter=new(events__WEBPACK_IMPORTED_MODULE_0___default()),containerStyle={height:"600px",width:"400px",border:"1px solid black",display:"flex",flexFlow:"column",justifyContent:"center",alignItems:"center"},buttonStyle={marginTop:"16px"};let __WEBPACK_DEFAULT_EXPORT__={title:"Components/UI/Mascot"};var DefaultStory=function(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),2),lookAtDirection=_useState[0],setLookAtDirection=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),followMouseMode=_useState1[0],setFollowMouseMode=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),clickToLookMode=_useState2[0],setClickToLookMode=_useState2[1],_useState3=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),2),clickedTarget=_useState3[0],setClickedTarget=_useState3[1],createDirectionOnClick=function(direction){return function(){setFollowMouseMode(!1),setClickToLookMode(!1),setLookAtDirection(direction)}};return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:containerStyle,onClick:function(event){var isButtonClick=event.target.classList.contains("button-group__button");clickToLookMode&&!isButtonClick&&(setLookAtDirection(null),setClickedTarget({x:event.clientX,y:event.clientY}))}},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mascot_component__WEBPACK_IMPORTED_MODULE_4__.A,{animationEventEmitter:animationEventEmitter,width:"120",height:"120",followMouse:followMouseMode,lookAtTarget:clickedTarget,lookAtDirection:lookAtDirection}),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{style:buttonStyle},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button_group__WEBPACK_IMPORTED_MODULE_3__.A,{style:{width:"300px",flexFlow:"column"},defaultActiveButtonIndex:4},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__.A,{onClick:createDirectionOnClick("up")},"Up"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__.A,{onClick:createDirectionOnClick("down")},"Down"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__.A,{onClick:createDirectionOnClick("left")},"Left"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__.A,{onClick:createDirectionOnClick("right")},"Right"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__.A,{onClick:createDirectionOnClick("middle")},"Middle"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__.A,{onClick:function(){setFollowMouseMode(!0),setClickToLookMode(!1)}},"Follow Mouse mode"),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__.A,{onClick:function(){setFollowMouseMode(!1),setClickToLookMode(!0)}},"Look a clicked location mode"))))};DefaultStory.storyName="Default",DefaultStory.parameters={...DefaultStory.parameters,docs:{...DefaultStory.parameters?.docs,source:{originalSource:`() => {
  const [lookAtDirection, setLookAtDirection] = useState(null);
  const [followMouseMode, setFollowMouseMode] = useState(false);
  const [clickToLookMode, setClickToLookMode] = useState(false);
  const [clickedTarget, setClickedTarget] = useState(null);
  const createDirectionOnClick = direction => () => {
    setFollowMouseMode(false);
    setClickToLookMode(false);
    setLookAtDirection(direction);
  };
  return <div style={containerStyle} onClick={event => {
    const isButtonClick = event.target.classList.contains('button-group__button');
    if (clickToLookMode && !isButtonClick) {
      setLookAtDirection(null);
      setClickedTarget({
        x: event.clientX,
        y: event.clientY
      });
    }
  }}>
      <Mascot animationEventEmitter={animationEventEmitter} width="120" height="120" followMouse={followMouseMode} lookAtTarget={clickedTarget} lookAtDirection={lookAtDirection} />
      <div style={buttonStyle}>
        <ButtonGroup style={{
        width: '300px',
        flexFlow: 'column'
      }} defaultActiveButtonIndex={4}>
          <Button onClick={createDirectionOnClick('up')}>Up</Button>
          <Button onClick={createDirectionOnClick('down')}>Down</Button>
          <Button onClick={createDirectionOnClick('left')}>Left</Button>
          <Button onClick={createDirectionOnClick('right')}>Right</Button>
          <Button onClick={createDirectionOnClick('middle')}>Middle</Button>
          <Button onClick={() => {
          setFollowMouseMode(true);
          setClickToLookMode(false);
        }}>
            Follow Mouse mode
          </Button>
          <Button onClick={() => {
          setFollowMouseMode(false);
          setClickToLookMode(true);
        }}>
            Look a clicked location mode
          </Button>
        </ButtonGroup>
      </div>
    </div>;
}`,...DefaultStory.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultStory"]}}]);
//# sourceMappingURL=components-ui-mascot-mascot-stories.0b3b5862.iframe.bundle.js.map