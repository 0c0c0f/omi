import{o as omi,W as WeElement,h,i as classNames,g as extractClass,b as tag,j as require$$0,k as commonjsGlobal,t as tw,s as sheet}from"./vendor.7e82e17e.js";import"./index.esm.13df1728.js";import"./index.es.2f1d8385.js";var __defProp2=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,n,t)=>n in e?__defProp2(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,__spreadValues=(e,n)=>{for(var t in n||(n={}))__hasOwnProp.call(n,t)&&__defNormalProp(e,t,n[t]);if(__getOwnPropSymbols)for(var t of __getOwnPropSymbols(n))__propIsEnum.call(n,t)&&__defNormalProp(e,t,n[t]);return e},index=':host {\n  display: block;\n}\n\n.o-step {\n  width: 100%;\n  display: flex;\n  white-space: nowrap;\n}\n\n.o-step.vertical {\n  flex-direction: column;\n}\n\n.vertical ._item {\n  display: block;\n  flex: 1 0 auto;\n  padding-left: 0;\n  overflow: visible;\n}\n\no-icon-done {\n  color: #07c160;\n}\n\no-icon-clear {\n  color: #fa5151;\n}\n\n*, *::before, *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n._item-icon {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  border-radius: 32px;\n  font-size: 16px;\n  margin-right: 8px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n._item-content {\n  display: inline-block;\n  position: relative;\n  top: 5px;\n  vertical-align: top;\n}\n\n._item-finish ._item-icon {\n  border-color: #07c160;\n  background-color: #fff;\n}\n\n._item-process ._item-icon {\n  color: white;\n  border-color: #07c160;\n  background-color: #07c160;\n}\n\n._item-wait {\n  color: rgba(0, 0, 0, 0.45);\n}\n\n._item-block ._item-icon {\n  border-color: #fa5151;\n  background-color: #fff;\n}\n\n._item-block {\n  color: #fa5151;\n}\n\n._item-block ._item-description {\n  color: #fa5151;\n}\n\n._item-description {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 13px;\n}\n\n._item-finish > ._item-content > ._item-title:after {\n  background-color: #07c160;\n}\n\n._item.next-error ._item-title:after {\n  background: #fa5151;\n}\n\n._item-title:after {\n  content: "";\n  height: 1px;\n  width: 9999px;\n  background: #e8e8e8;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 100%;\n}\n\n._item {\n  position: relative;\n  display: inline-block;\n  flex: 1;\n  overflow: hidden;\n  vertical-align: top;\n  height: 60px;\n  margin-right: 16px;\n  white-space: nowrap;\n}\n\n._item:last-child ._item-title:after {\n  display: none;\n}\n\n._item-title {\n  position: relative;\n  display: inline-block;\n  padding-right: 16px;\n}\n\n.vertical ._item {\n  display: block;\n  overflow: visible;\n}\n\n.vertical ._item-tail::after {\n  display: inline-block;\n  background: #e8e8e8;\n  border-radius: 1px;\n  -webkit-transition: background 0.3s;\n  transition: background 0.3s;\n  content: "";\n  width: 1px;\n  height: 100%;\n}\n\n.vertical ._item-finish ._item-tail::after {\n  background: #07c160;\n}\n\n.vertical .next-error ._item-tail::after {\n  background: #fa5151;\n}\n\n.vertical ._item-title:after {\n  display: none;\n}\n\n.vertical > ._item:not(:last-child) > ._item-tail {\n  display: block;\n}\n\n.vertical > ._item > ._item-tail {\n  position: absolute;\n  top: 0px;\n  left: 16px;\n  width: 1px;\n  height: 100%;\n  padding: 38px 0 6px;\n}\n\n._item-tail {\n  position: absolute;\n  top: 12px;\n  left: 0;\n  width: 100%;\n  padding: 0 10px;\n  display: none;\n}\n\n.vertical > _item:not(:last-child) > ._item-tail {\n  display: block;\n}',done={exports:{}};(function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./esm/done.js")}({"./esm/done.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"\n}), \'Done\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/done.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval('\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, \'-$1\').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    omi_1.define(hyphenate(\'OIcon\' + displayName), function (_) {\n        return omi_1.h(\'svg\', __assign({ viewBox: "0 0 24 24", title: displayName }, _.props), path);\n    }, {\n        css: ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}"\n    });\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?')},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(omi)})(done);var clear={exports:{}};(function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./esm/clear.js")}({"./esm/clear.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"\n}), \'Clear\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/clear.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval('\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, \'-$1\').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    omi_1.define(hyphenate(\'OIcon\' + displayName), function (_) {\n        return omi_1.h(\'svg\', __assign({ viewBox: "0 0 24 24", title: displayName }, _.props), path);\n    }, {\n        css: ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}"\n    });\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?')},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(omi)})(clear);var __defProp$1=Object.defineProperty,__getOwnPropDesc$1=Object.getOwnPropertyDescriptor,__decorateClass$1=(e,n,t,r)=>{for(var i,o=r>1?void 0:r?__getOwnPropDesc$1(n,t):n,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r?i(n,t,o):i(o))||o);return r&&o&&__defProp$1(n,t,o),o};const state$1={DONE:0,ERROR:1,DOING:2,TODO:3};let Step=class extends WeElement{render(e){return h("div",__spreadValues({},extractClass(e,"o-step",{vertical:e.vertical})),e.items.map(((n,t)=>h("div",{class:classNames("_item",{"_item-finish":n.state===state$1.DONE,"_item-block":n.state===state$1.ERROR,"_item-process":n.state===state$1.DOING,"_item-wait":n.state===state$1.TODO,"next-error":e.items[t+1]&&e.items[t+1].state===state$1.ERROR})},h("div",{class:"_item-tail"}),h("div",{class:"_item-icon"},h("span",{class:"icon"},n.state===state$1.DONE&&h("i",{class:"anticon anticon-check finish-icon"},h("o-icon-done",null)),n.state===state$1.ERROR&&h("i",{class:"anticon anticon-close error-icon"},h("o-icon-clear",null)),(n.state===state$1.DOING||n.state===state$1.TODO)&&h("span",{class:"icon"},t+1))),h("div",{class:"_item-content"},h("div",{class:"_item-title"},n.name),h("div",{class:"_item-description"},n.description))))))}};Step.css=index,Step.propTypes={items:Object,vertical:Boolean},Step=__decorateClass$1([tag("o-step")],Step);var close={exports:{}};(function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./esm/close.js")}({"./esm/close.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"\n}), \'Close\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/close.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval('\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, \'-$1\').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    omi_1.define(hyphenate(\'OIcon\' + displayName), function (_) {\n        return omi_1.h(\'svg\', __assign({ viewBox: "0 0 24 24", title: displayName }, _.props), path);\n    }, {\n        css: ":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}"\n    });\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?')},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(require$$0)})(close);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(e,n,t,r)=>{for(var i,o=r>1?void 0:r?__getOwnPropDesc(n,t):n,a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r?i(n,t,o):i(o))||o);return r&&o&&__defProp(n,t,o),o};const tagName="step-form",state={DONE:0,ERROR:1,DOING:2,TODO:3};let step_form_default=class extends WeElement{constructor(){super(...arguments),this.itemsA=[{name:"提交开票申请",description:"开票申请需要本人填写",state:state.DOING},{name:"填写发票信息",description:"发票信息请开公司抬头",state:state.TODO},{name:"确认邮寄地址",description:"请写你加里的邮寄地址",state:state.TODO},{name:"完成",description:"",state:state.TODO}],this.itemsB=[{name:"Finished",description:"This is a description.",state:state.DONE},{name:"Error",description:"This is a description.",state:state.ERROR},{name:"Waiting",description:"This is a description.",state:state.TODO}],this.itemsC=[{name:"Finished",description:"This is a description.",state:state.DONE},{name:"Finished",description:"This is a description.",state:state.DONE},{name:"Finished",description:"This is a description.",state:state.DONE}],this.items=[{label:"广东省-深圳市",value:1},{label:"江西省-抚州市",value:2},{label:"河北省-石家庄",value:3}],this.fruits=[{label:"苹果🍎",value:1},{label:"草莓🍓",value:2},{label:"葡萄🍇",value:3},{label:"香蕉🍌",value:4},{label:"梨子🍐",value:5},{label:"橘子🍊",value:6}]}render(){const e=tw`mb-2`,n=tw` leading-8 w-16 float-left align-middle text-sm text-gray-500`;return h("div",{class:tw`py-4 px-4`},h("div",null,h("o-step",{class:tw`py-4 px-4 border-b-1`,items:this.itemsA})),h("o-form",{initialValues:{name:"",email:""},validate:e=>{const n={};return e.name||(n.name="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(n.email="Invalid email address"):n.email="Required",n}},(({values:t,errors:r,touched:i,onChange:o,onSubmit:a,onBlur:s})=>h("div",{class:tw`my-4`},h("div",{class:tw`bg-green-50 relative text-sm flex p-2`},h("div",{class:tw`w-6 inline-block text-green-600`},h("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},h("path",{fill:"currentColor","fill-opacity":".9","fill-rule":"evenodd",d:"M512 96C741.7504576 96 928 282.24954432 928 512 928 741.7504576 741.7504576 928 512 928 282.24954432 928 96 741.7504576 96 512 96 282.24954432 282.24954432 96 512 96ZM544 416L416 416 416 480 480 480 480 736 608 736 608 672 544 672 544 416ZM544 288L480 288 480 352 544 352 544 288Z"}))),h("div",{class:tw`px-1`},h("div",{class:tw`pb-2 font-medium`}," 发票开具规则："),h("div",{class:tw`font-light`},h("p",null,"1、申请开票后，电子发票在1～3个工作日内开具；增值税专用发票（纸质）如资质审核通过，将在电子发票开具后10个工作日内为您寄出；"),h("p",null,"2、开票金额为您实际支付金额；"),h("p",null,"3、如有疑问请直接联系：13300001111。"))),h("div",null,h("o-icon-close",{class:tw`absolute cursor-pointer top-2.5 right-2.5`}))),h("div",{class:tw`pt-6 max-w-lg`},h("div",{class:e},h("label",{class:n},"合同名称"),h("div",{class:tw`leading-8 ml-16`},h("o-select",{block:!0,size:"small",placeholder:"选择合同名称",items:this.items}),h("div",{class:tw`text-red-500 h-6 text-sm`},r.address))),h("div",{class:e},h("label",{class:n},"发票类型"),h("div",{class:tw`leading-8 ml-16`},h("o-select",{block:!0,size:"small",placeholder:"选择发票类型",items:this.items}),h("div",{class:tw`text-red-500 h-6 text-sm`},r.address))),h("div",{class:e},h("label",{class:n}," 金额(元)"),h("div",{class:tw`leading-8 ml-16`},h("o-input",{size:"small",onChange:o,onBlur:s,placeholder:"",value:t.name,name:"name",block:!0}),h("div",{class:tw`text-red-500 h-6 text-sm`},r.name&&i.name&&r.name))),h("div",{class:e},h("label",{class:n}),h("div",{class:tw`leading-8 ml-16`},h("o-button",{size:"small",type:"primary",onclick:a},"下一步"))))))))}};step_form_default.css=sheet.target,step_form_default=__decorateClass([tag(tagName)],step_form_default);export{step_form_default as default};
