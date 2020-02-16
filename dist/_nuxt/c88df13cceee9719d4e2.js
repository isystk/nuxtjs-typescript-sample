/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{179:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},180:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},181:function(t,e,n){"use strict";var r=n(20);function o(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",(function(){return o}))},182:function(t,e,n){"use strict";function r(t,p){return(r=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},183:function(t,e,n){"use strict";var r=n(0);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function d(t,e){v(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){v(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){v(t,e,n)}))}function v(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,o,t,n):Reflect.defineMetadata(r,o,t)}))}var y={__proto__:[]}instanceof Array;function h(t){return function(e,n,r){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof r&&(r=void 0),o.__decorators__.push((function(e){return t(e,n,r)}))}}function O(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach((function(n){"_"!==n.charAt(0)&&Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var data=new e;e.prototype._init=n;var r={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(r[t]=data[t])})),r}var _=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(_.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"==typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){return c({},t,r.value)}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return O(this,t)}});var o=t.__decorators__;o&&(o.forEach((function(t){return t(e)})),delete t.__decorators__);var f=Object.getPrototypeOf(t.prototype),v=f instanceof r.a?f.constructor:r.a,y=v.extend(e);return m(y,t,v),l()&&d(y,t),y}var T={prototype:!0,arguments:!0,callee:!0,caller:!0};function m(t,e,n){Object.getOwnPropertyNames(e).forEach((function(r){if(!T[r]){var c=Object.getOwnPropertyDescriptor(t,r);if(!c||c.configurable){var f,l,d=Object.getOwnPropertyDescriptor(e,r);if(!y){if("cid"===r)return;var v=Object.getOwnPropertyDescriptor(n,r);if(f=d.value,l=o(f),null!=f&&("object"===l||"function"===l)&&v&&v.value===d.value)return}0,Object.defineProperty(t,r,d)}}}))}function E(t){return"function"==typeof t?j(t):function(e){return j(e,t)}}E.registerHooks=function(t){_.push.apply(_,f(t))};var w=E;n.d(e,"b",(function(){return X})),n.d(e,"a",(function(){return w})),n.d(e,"c",(function(){return r.a}));var P="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function R(t,e,n){P&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,n)))}function X(t){return void 0===t&&(t={}),function(e,n){R(t,e,n),h((function(e,n){(e.props||(e.props={}))[n]=t}))(e,n)}}},184:function(t,e,n){"use strict";var r=n(179),o=n(181),c=n(180),f=n(182),l=n(20),d=n(183),v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(f.a)(e,t),e}(d.c),h=y=v([d.a],y),O=n(38),component=Object(O.a)(h,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("div",{staticClass:"header-image"},[e("div",{staticClass:"logo"},[this._v("Nuxt.js サンプル")])])])}],!1,null,null,null);e.a=component.exports},185:function(t,e,n){"use strict";var r=n(179),o=n(181),c=n(180),f=n(182),l=n(20),d=n(183),v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(f.a)(e,t),e}(d.c),h=y=v([d.a],y),O=n(38),component=Object(O.a)(h,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("section",{staticClass:"footer1"}),this._v(" "),e("section",{staticClass:"footer2"},[this._v("© 2020 isystk.com")])])}],!1,null,null,null);e.a=component.exports},186:function(t,e,n){"use strict";var r=n(179),o=n(181),c=n(180),f=n(182),l=n(20),d=n(183),v=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(o.a)(this,Object(c.a)(e).apply(this,arguments))).STATIC_PATH="/nuxtjs",t}return Object(f.a)(e,t),e}(d.c),h=y=v([d.a],y),O=n(38),component=Object(O.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"side-menu side-left"},[e("div",{staticClass:"sidebar-wrapper"},[e("h4",{staticClass:"sidebar-title"},[this._v("メニュー")]),this._v(" "),e("ul",[e("li",[e("nuxt-link",{attrs:{to:this.STATIC_PATH}},[this._v("TOPページ")])],1),this._v(" "),e("li",[e("nuxt-link",{attrs:{to:this.STATIC_PATH+"company/"}},[this._v("会社概要")])],1)])])])}),[],!1,null,null,null);e.a=component.exports},189:function(t,e,n){"use strict";n.r(e);var r=n(179),o=n(181),c=n(180),f=n(182),l=n(20),d=n(183),v=n(184),y=n(185),h=n(186),O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(f.a)(e,t),e}(d.c),j=_=O([Object(d.a)({components:{Header:v.a,Footer:y.a,SideMenu:h.a}})],_),T=n(38),component=Object(T.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("Header"),this._v(" "),e("div",{staticClass:"content"},[this._m(0),this._v(" "),e("side-menu")],1),this._v(" "),e("Footer")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("article",{staticClass:"detail"},[n("div",{staticClass:"entry-header"},[n("h1",{staticClass:"entry-title"},[t._v("会社概要")])]),t._v(" "),n("div",{staticClass:"entry-content"},[n("h2",[t._v("INFORMATION")]),t._v(" "),n("table",{},[n("tbody",[n("tr",[n("td",[t._v("会社名")]),n("td",[t._v("TEXTTEXTTEXTTEXT")])]),n("tr",[n("td",[t._v("所在地")]),n("td",[t._v("TEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXTTEXT")])]),n("tr",[n("td",[t._v("代表者")]),n("td",[t._v("TEXTTEXTTEXT")])]),n("tr",[n("td",[t._v("設立年月日")]),n("td",[t._v("YYYY年MM月")])]),n("tr",[n("td",[t._v("お問い合わせ")]),n("td",[t._v("TEXTTEXTTEXTTEXTTEXTTEXT")])])])])]),t._v(" "),n("div",{staticClass:"clearfix"})])])}],!1,null,null,null);e.default=component.exports}}]);