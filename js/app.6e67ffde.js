(function(e){function t(t){for(var n,c,o=t[0],i=t[1],l=t[2],d=0,p=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},s=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},a41b:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.spreadsheetsID?r("ScanPage",{attrs:{authToken:e.authToken,spreadsheetsID:e.spreadsheetsID},on:{previousPage:function(t){e.spreadsheetsID=""}}}):r("Home",{attrs:{semesters:e.semesters},on:{verified:e.verified,go:e.go}})},s=[],c=r("a6f4"),o=(r("a41b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"home"}},[r("div",{staticClass:"card"},[r("div",{staticClass:"title"}),0!==e.semesters.length?r("div",{staticClass:"content"},[r("div",{staticClass:"select-warp"},[r("label",[e._v("選擇學期：")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedSemesterCourses,expression:"selectedSemesterCourses"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedSemesterCourses=t.target.multiple?r:r[0]}}},e._l(e.semesters,(function(t){return r("option",{key:t.name,domProps:{value:t.activeCourses}},[e._v(e._s(t.name))])})),0)]),r("div",{staticClass:"select-warp"},[r("label",[e._v("選擇課程：")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selcetedCourseSpreadsheetsID,expression:"selcetedCourseSpreadsheetsID"}],attrs:{disabled:0===e.selectedSemesterCourses.length},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selcetedCourseSpreadsheetsID=t.target.multiple?r:r[0]}}},e._l(e.selectedSemesterCourses,(function(t){return r("option",{key:t.spreadsheetsID,domProps:{value:t.spreadsheetsID}},[e._v(e._s(t.name))])})),0)]),r("button",{attrs:{disabled:!e.checkInput},on:{click:e.goClick}},[e._v("Go!")])]):r("div",{staticClass:"content"},[r("div",[r("label",[e._v("通關密語：")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.verify(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("button",{attrs:{disabled:e.verifying},on:{click:e.verify}},[e._v("驗證")])])]),e.verifying?r("circular-progress"):e._e()],1)}),i=[],l=(r("96cf"),r("1da1")),u=r("bc3a"),d=r.n(u),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circular-progress-warp"},[r("div",{staticClass:"gray-div"}),r("div",{staticClass:"circular-progress"},[r("svg",{staticStyle:{transform:"rotate(0deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"22.857142857142858 22.857142857142858 45.714285714285715 45.714285714285715"}},[r("circle",{staticClass:"v-progress-circular__overlay",attrs:{fill:"transparent",cx:"45.714285714285715",cy:"45.714285714285715",r:"20","stroke-width":"5.714285714285714","stroke-dasharray":"125.664","stroke-dashoffset":"125.66370614359172px"}})])])])},v=[],f=Object(c["c"])({name:"CircularProgress"}),m=f,h=r("2877"),g=Object(h["a"])(m,p,v,!1,null,null,null),b=g.exports,k=Object(c["c"])({name:"Home",props:["semesters"],components:{CircularProgress:b},setup:function(e,t){var r=t.emit,n=Object(c["d"])([]),a=Object(c["d"])(""),s=Object(c["d"])(""),o=Object(c["a"])((function(){return""!==a.value})),i=Object(c["d"])(""),u=Object(c["d"])(!1);function p(){return v.apply(this,arguments)}function v(){return v=Object(l["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u.value=!0,e.prev=1,e.next=4,d.a.post("https://script.google.com/macros/s/AKfycbyj-Vl_UrnG9jRrt3BBD9kNew0PhnXVKVQgXTeP/exec",{password:s.value},{headers:{"Content-Type":"text/plain"}});case 4:t=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e["catch"](1),u.value=!1,alert("通關密語錯誤"),e.abrupt("return");case 12:u.value=!1,r("verified",t.data.authToken,t.data.semesters);case 14:case"end":return e.stop()}}),e,null,[[1,7]])}))),v.apply(this,arguments)}function f(){r("go",a)}return{goClick:f,selectedSemesterCourses:n,selcetedCourseSpreadsheetsID:a,password:s,checkInput:o,verify:p,authToken:i,verifying:u}}}),y=k,C=Object(h["a"])(y,o,i,!1,null,null,null),O=C.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"scan-page"}},[r("div",{staticClass:"navbar"},[r("button",{on:{click:e.previousPage}},[r("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}})])])]),r("QRCodeScanner",{attrs:{camera:e.camera},on:{signin:e.signin}}),e.successDialog?r("SuccessDialog",{on:{close:e.successClose}}):e._e(),e.failDialog?r("FailDialog",{on:{close:e.failClose,confirm:e.failConfirm}}):e._e(),e.waiting?r("CircularProgress"):e._e()],1)},w=[],x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"qrcode-scanner"}},[r("div",{staticClass:"qrcode"},[r("qrcode-stream",{attrs:{camera:e.camera},on:{decode:e.onDecode,init:e.onInit}})],1)])},j=[],S=(r("b0c0"),r("6d12")),R=Object(c["c"])({name:"QRCodeScanner",props:{camera:String},components:{QrcodeStream:S["QrcodeStream"]},setup:function(e,t){var r=t.emit,n=Object(c["d"])("");function a(e){r("signin",e)}function s(e){return o.apply(this,arguments)}function o(){return o=Object(l["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:e.next=9;break;case 5:e.prev=5,e.t0=e["catch"](0),"NotAllowedError"===e.t0.name?n.value="ERROR: you need to grant camera access permisson":"NotFoundError"===e.t0.name?n.value="ERROR: no camera on this device":"NotSupportedError"===e.t0.name?n.value="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===e.t0.name?n.value="ERROR: is the camera already in use?":"OverconstrainedError"===e.t0.name?n.value="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===e.t0.name&&(n.value="ERROR: Stream API is not supported in this browser"),console.log(n);case 9:case"end":return e.stop()}}),e,null,[[0,5]])}))),o.apply(this,arguments)}return{error:n,onDecode:a,onInit:s}}}),D=R,P=Object(h["a"])(D,x,j,!1,null,null,null),E=P.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"success-dialog"}},[r("div",{staticClass:"title"}),r("div",{staticClass:"content"},[r("p",{staticClass:"content-text"},[e._v("簽到成功")]),r("button",{staticClass:"content-button",on:{click:e.comfirmClick}},[e._v("確認")])])])},T=[],A=Object(c["c"])({name:"SuccessDialog",setup:function(e,t){var r=t.emit;function n(){r("close")}return{confirmClick:n}}}),N=A,L=Object(h["a"])(N,I,T,!1,null,null,null),V=L.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"fail-dialog"}},[r("div",{staticClass:"title"}),r("div",{staticClass:"content"},[r("p",{staticClass:"content-text"},[e._v("此學員非社員")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"content-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var r=e.checked,n=t.target,a=!!n.checked;if(Array.isArray(r)){var s=null,c=e._i(r,s);n.checked?c<0&&(e.checked=r.concat([s])):c>-1&&(e.checked=r.slice(0,c).concat(r.slice(c+1)))}else e.checked=a}}}),r("label",{staticClass:"content-checkbox-label"},[e._v("已繳錢或加入社團")])]),r("div",{staticClass:"content-button-warp"},[r("button",{staticClass:"content-button",attrs:{disabled:!e.checked},on:{click:e.confirmClick}},[e._v(" 確認 ")]),r("button",{staticClass:"content-button orange",on:{click:e.cancelClick}},[e._v("取消")])])])])},q=[],H=Object(c["c"])({name:"FailDialog",setup:function(e,t){var r=t.emit,n=Object(c["d"])(!1);function a(){r("confirm")}function s(){r("close")}return{checked:n,confirmClick:a,cancelClick:s}}}),M=H,Q=Object(h["a"])(M,$,q,!1,null,null,null),B=Q.exports,F=Object(c["c"])({name:"ScanPage",props:["authToken","spreadsheetsID"],components:{QRCodeScanner:E,SuccessDialog:V,FailDialog:B,CircularProgress:b},setup:function(e,t){var r=t.emit,n=Object(c["d"])(!1),a=Object(c["d"])(!1),s=Object(c["d"])("auto"),o=Object(c["d"])(!1),i="";function u(){r("previousPage")}function p(e,t){return v.apply(this,arguments)}function v(){return v=Object(l["a"])(regeneratorRuntime.mark((function t(r,c){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s.value="off",o.value=!0,t.prev=2,t.next=5,d.a.post("https://script.google.com/macros/s/AKfycbxWVyyeUqu2HvGtLBqctPtMkptXeqzvaKPD9LLZ6Wvn7-lV6Vzp/exec",{authToken:e.authToken,spreadsheetsID:e.spreadsheetsID.value,studentToken:r,paid:c},{headers:{"Content-Type":"text/plain"}});case 5:t.next=13;break;case 7:return t.prev=7,t.t0=t["catch"](2),o.value=!1,i=r,n.value=!0,t.abrupt("return");case 13:o.value=!1,a.value=!0;case 15:case"end":return t.stop()}}),t,null,[[2,7]])}))),v.apply(this,arguments)}function f(){a.value=!1,s.value="auto"}function m(){n.value=!1,s.value="auto"}function h(){n.value=!1,p(i,!0)}return{failDialog:n,successDialog:a,signin:p,camera:s,successClose:f,failClose:m,waiting:o,previousPage:u,failConfirm:h}}}),K=F,G=Object(h["a"])(K,_,w,!1,null,null,null),X=G.exports,z=Object(c["c"])({name:"App",components:{Home:O,ScanPage:X},setup:function(){var e=Object(c["d"])(!1),t=Object(c["d"])(""),r=Object(c["d"])([]),n=Object(c["d"])("");function a(e,n){t.value=e,r.value=n,console.log("cc")}function s(e){n.value=e}return{isVerified:e,verified:a,semesters:r,authToken:t,spreadsheetsID:n,go:s}}}),J=z,U=Object(h["a"])(J,a,s,!1,null,null,null),W=U.exports;n["default"].use(c["b"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(W)}}).$mount("#app")}});
//# sourceMappingURL=app.6e67ffde.js.map