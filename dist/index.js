(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},447:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"@import url(https://fonts.cdnfonts.com/css/cocogoose);"]),i.push([t.id,"@import url(https://fonts.cdnfonts.com/css/Lato);"]),i.push([t.id,'main{display:inline-grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:repeat(3, 1fr);padding:30px 30px;gap:50px 10px;width:100%}main .item-box{display:flex;flex-direction:column;row-gap:10px;background-color:#d8e0e7;padding:10px;height:100%}main .item-box img{display:block;max-width:100%;min-height:50%;margin-left:auto;margin-right:auto}main .item-box strong{font-family:"Lato",sans-serif;font-size:medium;font-weight:900}main .item-box p{font-family:"cocogoose",sans-serif;color:#111416;font-size:small;height:25%;font-style:italic}main .item-box .interact-icon{display:flex;justify-content:space-between}main .item-box .interact-icon span{cursor:pointer}main .item-box .reserve-btn{display:block;text-align:center;border:none;height:55px;background-color:#3e6f9e;cursor:pointer;color:azure}@media(max-width: 768px){main{grid-template-columns:1fr;grid-template-rows:repeat(10, 1fr);padding:30px 30px}}',""]);const c=i},192:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"@import url(https://fonts.googleapis.com/css?family=Karla:weight@400;700&display=swap);"]),i.push([t.id,"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);"]),i.push([t.id,"@import url(https://fonts.cdnfonts.com/css/cocogoose);"]),i.push([t.id,"@import url(https://fonts.cdnfonts.com/css/Lato);"]),i.push([t.id,'body{font-family:"Karla",sans-serif;color:#3e6f9e}p{color:#19d862}',""]);const c=i},426:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"*,\r\n::before,\r\n::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--color);\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n  background-color: aliceblue;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nmain {\r\n  z-index: 5;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100vh;\r\n  margin: auto;\r\n  background-color: rgb(24, 23, 23);\r\n  color: white;\r\n  border: 3px solid black;\r\n  overflow: auto;\r\n}\r\n\r\n.modal-header {\r\n  width: 80%;\r\n  height: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgb(24, 23, 23);\r\n  margin: auto;\r\n  margin-top: 40px;\r\n  justify-content: center;\r\n}\r\n\r\n.comment-span {\r\n  padding: 2px;\r\n}\r\n\r\n.dn {\r\n  display: none;\r\n}\r\n\r\n.containComment {\r\n  overflow: auto;\r\n}\r\n\r\nfooter {\r\n  height: 60px;\r\n  padding: 3% 5%;\r\n  border-top: 1.5px solid #aaa;\r\n  text-align: center;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  width: 80%;\r\n  margin: auto;\r\n  margin-top: 14px;\r\n  position: relative;\r\n}\r\n\r\n.logo {\r\n  border: 1px solid blue;\r\n  border-radius: 50%;\r\n  padding: 1em;\r\n  margin: auto;\r\n}\r\n\r\n.nav-tab {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-left: auto;\r\n  list-style: none;\r\n  gap: 1em;\r\n}\r\n\r\n.nav-tab li {\r\n  margin-right: 1em;\r\n  margin-left: 2em;\r\n}\r\n\r\nhr {\r\n  width: 100%;\r\n  margin-top: 14px;\r\n}\r\n",""]);const c=i},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw a;return O()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?m:f,s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=m,n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var p="suspendedStart",f="suspendedYield",d="executing",m="completed",h={};function v(){}function y(){}function g(){}var x={};s(x,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(A([])));w&&w!==n&&r.call(w,a)&&(x=w);var E=g.prototype=v.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function n(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(p).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return y.prototype=g,s(E,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(C.prototype),s(C.prototype,i,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new C(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),s(E,c,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=A,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var f=n(p),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var m=o(d,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var l=n(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function c(e){t(i,o,a,c,s,"next",e)}function s(e){t(i,o,a,c,s,"throw",e)}c(void 0)}))}}var r=n(757),o=n.n(r),a=n(379),i=n.n(a),c=n(795),s=n.n(c),u=n(569),l=n.n(u),p=n(565),f=n.n(p),d=n(216),m=n.n(d),h=n(589),v=n.n(h),y=n(426),g={};g.styleTagTransform=v(),g.setAttributes=f(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=m(),i()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals;var x=n(192),b={};b.styleTagTransform=v(),b.setAttributes=f(),b.insert=l().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=m(),i()(x.Z,b),x.Z&&x.Z.locals&&x.Z.locals;var w=n(447),E={};function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t,e,n){return e&&L(t.prototype,e),n&&L(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}E.styleTagTransform=v(),E.setAttributes=f(),E.insert=l().bind(null,"head"),E.domAPI=s(),E.insertStyleElement=m(),i()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals;var k=C((function t(){var n,r,a,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r="getArticles",a=e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(i.url).then((function(t){return t.json()})).catch((function(t){return new Error(t)}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))),r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,this.url="https://api.spaceflightnewsapi.net/v3/articles"}));function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=document.querySelector("main"),A=function(){var t=document.createElement("div");return t.className="item-box",t},O=function(){var t=document.createElement("img"),e=document.createElement("strong"),n=document.createElement("p"),r=document.createElement("div");r.className="interact-icon";var o=document.createElement("button");return o.className="reserve-btn",o.textContent="Reservation",[t,e,n,r,o]},_=function(){var t=document.createElement("span");t.innerHTML='comment <i class="fa fa-comment"></i>',t.classList.add("comment-span");var e=document.createElement("span");return e.innerHTML='like <i class="fa fa-heart"></i>',[t,e]};const N=function(){var t=e(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S.innerHTML="",e.forEach((function(t){var e=j(O(),5),n=e[0],r=e[1],o=e[2],a=e[3],i=e[4],c=A();n.src=t.imageUrl,r.textContent=t.title,o.textContent=t.summary;var s=j(_(),2),u=s[0],l=s[1];u.id=t.id,[u,l].forEach((function(t){return a.appendChild(t)})),[n,r,o,a,i].forEach((function(t){c.appendChild(t)})),S.appendChild(c)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var P="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/",M="4hAiwRDAyz2SaKqGrhTt",Z=function(){var t=e(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(P).concat(M,"/comments?item_id=").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=function(){var t=e(o().mark((function t(e,n,r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(P).concat(M,"/comments"),{method:"POST",body:JSON.stringify({item_id:e,username:n,comment:r}),headers:{"Content-Type":"application/json"}});case 2:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),G=document.querySelector("body"),H=document.createElement("section");H.classList.add("modal");var q=document.createElement("i");q.classList.add("fa","fa-times","fa-2x"),q.style.border="1px solid black",q.style.cursor="pointer",q.style.color="black",q.style.background="white",H.appendChild(q),document.querySelector(".modal");var F=function(){var t=document.createElement("input"),e=document.createElement("input"),n=document.createElement("button");return t.type="text",t.id="username",t.placeholder="name",e.type="text",e.id="username",e.placeholder="Comment",n.type="button",n.textContent="Comment",[t,e,n]};const R=function(){var t=e(o().mark((function t(n){var r,a,i,c,s,u,l,p,f,d,m,h,v,y,g,x,b,w,E,L;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(H.style.display="block";H.children.length>1;)H.removeChild(H.children[1]);return(r=document.createElement("div")).classList.add("modal-header"),H.appendChild(r),G.appendChild(H),a=[document.createElement("img"),document.createElement("strong"),document.createElement("a"),document.createElement("a"),document.createElement("p"),document.createElement("p"),document.createElement("p")],i=j(a,7),c=i[0],s=i[1],u=i[2],l=i[3],p=i[4],f=i[5],d=i[6],c.src=n.imageUrl,u.href=n.url,u.textContent="Visit website",l.href=n.newsSite,p.textContent=n.summary,f.textContent=n.publishedAt,d.textContent=n.updatedAt,s.textContent=n.title,u.textContent=n.summary,m=F(),h=j(m,3),v=h[0],y=h[1],g=h[2],x=document.createElement("form"),[v,y,g].forEach((function(t){x.appendChild(t)})),b=document.createElement("div"),w=document.createElement("h2"),E=document.createElement("div"),b.style.width="80%",b.style.margin="auto",b.style.color="white",w.textContent="No Comments",b.appendChild(w),b.appendChild(E),[c,s,u,l,p,f,d,b,x].forEach((function(t){r.appendChild(t)})),g.addEventListener("click",e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return I(n.id,v.value,y.value),w.textContent="Comments",E.innerHTML="",t.next=5,Z(n.id);case 5:(e=t.sent).forEach((function(t){e.innerHTML+="\n      <p> ".concat(t.username," : ").concat(t.creation_date," </p>\n      <p> ").concat(t.comment," </p>\n      <hr>\n      <br>")}));case 7:case"end":return t.stop()}}),t)})))),t.next=34,Z(n.id);case 34:(L=t.sent).length>0&&(w.textContent="Comments",E.innerHTML=""),L.forEach((function(t){E.innerHTML+="\n    <p> ".concat(t.username," : ").concat(t.creation_date," </p>\n    <p> ").concat(t.comment," </p>\n    <hr>\n    <br>")}));case 37:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var z,U=new k;(U.getArticles(),function(){var t=e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.getArticles();case 2:e=t.sent,N(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}())();var D=function(){var t=e(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spaceflightnewsapi.net/v3/articles/".concat(e)).then((function(t){return t.json()})).catch((function(t){return new Error(t)}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();document.addEventListener("click",function(){var t=e(o().mark((function t(e){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!e.target.classList.contains("comment-span")){t.next=10;break}return z=e.target.getAttribute("id"),n=Number(z),t.next=7,D(n);case 7:r=t.sent,R(r),document.querySelector("main").classList.toggle("dn");case 10:e.target.classList.contains("comment-span");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),document.addEventListener("click",function(){var t=e(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),e.target.classList.contains("fa-times")&&(document.querySelector("section").style.display="none",document.querySelector("main").classList.remove("dn"));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})()})();