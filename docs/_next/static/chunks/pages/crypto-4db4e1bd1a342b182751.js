_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(i.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},i=r("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,i=e.hasQuery,s=void 0!==i&&i;return r||o&&s}},"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var n,o=r("q1tI");var i=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),s=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return i.computeId(t,r)})).join(" ")};var o=n.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},n}(o.Component);t.default=s},"6A5Y":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("I4Gv")),i=(r("dTMY"),r("dKXz")),s=r("u2Ne");t.default=function(e,t,r){void 0===t&&(t={});var n=t.convert,a=t.ids,u=t.interval,c={convert:n,ids:a&&a.join(","),interval:u&&u.join(","),key:e};return i.fetchJSON(o.default.NOMICS_API_BASE+"/v1/exchanges/ticker?"+s.objToUrlParams(c),r)}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=(n=r("Xuae"))&&n.__esModule?n:{default:n},s=r("lwAK"),a=r("FYa8"),u=r("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var i=!0,s=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){s=!0;var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var l=d[u];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?i=!1:r.add(l);else{var f=o.props[l],h=n[l]||new Set;"name"===l&&s||!h.has(f)?(h.add(f),n[l]=h):i=!1}}}return i}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}function p(e){var t=e.children,r=(0,o.useContext)(s.AmpStateContext),n=(0,o.useContext)(a.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}p.rewind=function(){};var m=p;t.default=m},"8oxB":function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},I4Gv:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("v+Zy")),i=n(r("LUw5")),s=n(r("6A5Y")),a=r("dTMY");t.IntervalEnum=a.IntervalEnum;var u=r("n6gp"),c=function(){function e(e){this.version=1;var t=e.apiKey,r=e.version;if(u.isEmpty(t))throw new Error("Nomics API Key must be specified");this.apiKey=t,this.version=r||this.version}return Object.defineProperty(e,"NOMICS_API_BASE",{get:function(){return e.baseUrl},set:function(t){e.baseUrl=t},enumerable:!0,configurable:!0}),e.prototype.currenciesTicker=function(e,t){return o.default(this.apiKey,e,t)},e.prototype.exchangesTicker=function(e,t){return s.default(this.apiKey,e,t)},e.prototype.exchangeMarketsTicker=function(e,t){return i.default(this.apiKey,e,t)},e.baseUrl=a.API_BASE,e}();t.default=c},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},LUw5:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("I4Gv")),i=(r("dTMY"),r("dKXz")),s=r("u2Ne");t.default=function(e,t,r){void 0===t&&(t={});var n=t.convert,a=t.currency,u=t.exchange,c=t.interval,l={convert:n,currency:a&&a.join(","),exchange:u&&u.join(","),interval:c&&c.join(","),key:e};return i.fetchJSON(o.default.NOMICS_API_BASE+"/v1/exchange-markets/ticker?"+s.objToUrlParams(l),r)}},LY0y:function(e,t){(function(t){e.exports=function(){var e={880:function(e){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}},r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={exports:{}},i=!0;try{e[t](o,o.exports,n),i=!1}finally{i&&delete r[t]}return o.exports}return n.ab=t+"/",n(880)}()}).call(this,"/")},MX0m:function(e,t,r){e.exports=r("3niX")},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),i=r("ZhPi"),s=r("Bnag");e.exports=function(e){return n(e)||o(e)||i(e)||s()}},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=i(r("9kyW")),o=i(r("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,o=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var o=String(r),i=t+o;return e[i]||(e[i]="jsx-"+(0,n.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=r+n;return t[o]||(t[o]=n.replace(e,r)),t[o]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,o=e.id;if(n){var i=this.computeId(o,n);return{styleId:i,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,r)]}}return{styleId:this.computeId(o),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},VBVC:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/crypto",function(){return r("tXC9")}])},XWHH:function(e,t){var r="undefined"!==typeof self?self:this,n=function(){function e(){this.fetch=!1,this.DOMException=r.DOMException}return e.prototype=r,new e}();!function(e){!function(t){var r="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,o="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),i="FormData"in e,s="ArrayBuffer"in e;if(s)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(e){return e&&a.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function l(e){return"string"!==typeof e&&(e=String(e)),e}function f(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function h(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=p(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"===typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:i&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():s&&o&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(e)||u(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=h(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?h(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var e=h(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=p(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(e,t){e=c(e),t=l(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},d.prototype.delete=function(e){delete this.map[c(e)]},d.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},d.prototype.set=function(e,t){this.map[c(e)]=l(t)},d.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},d.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),f(e)},d.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),f(e)},d.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),f(e)},n&&(d.prototype[Symbol.iterator]=d.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(e,t){var r=(t=t||{}).body;if(e instanceof _){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new d(t.headers)),this.method=function(e){var t=e.toUpperCase();return b.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function g(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function x(e){var t=new d;return e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t}function w(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},v.call(_.prototype),v.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},w.error=function(){var e=new w(null,{status:0,statusText:""});return e.type="error",e};var S=[301,302,303,307,308];w.redirect=function(e,t){if(-1===S.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(A){t.DOMException=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function j(e,r){return new Promise((function(n,i){var s=new _(e,r);if(s.signal&&s.signal.aborted)return i(new t.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function u(){a.abort()}a.onload=function(){var e={status:a.status,statusText:a.statusText,headers:x(a.getAllResponseHeaders()||"")};e.url="responseURL"in a?a.responseURL:e.headers.get("X-Request-URL");var t="response"in a?a.response:a.responseText;n(new w(t,e))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.onabort=function(){i(new t.DOMException("Aborted","AbortError"))},a.open(s.method,s.url,!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&o&&(a.responseType="blob"),s.headers.forEach((function(e,t){a.setRequestHeader(t,e)})),s.signal&&(s.signal.addEventListener("abort",u),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",u)}),a.send("undefined"===typeof s._bodyInit?null:s._bodyInit)}))}j.polyfill=!0,e.fetch||(e.fetch=j,e.Headers=d,e.Request=_,e.Response=w),t.Headers=d,t.Request=_,t.Response=w,t.fetch=j,Object.defineProperty(t,"__esModule",{value:!0})}({})}(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var o=n;(t=o.fetch).default=o.fetch,t.fetch=o.fetch,t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response,e.exports=t},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),o=r("lwsE"),i=r("W8MJ"),s=(r("PJYZ"),r("7W2i")),a=r("a1gu"),u=r("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}t.__esModule=!0,t.default=void 0;var l=r("q1tI"),f=function(e){s(r,e);var t=c(r);function r(e){var i;return o(this,r),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=f},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,u=void 0===a?n:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,i),a&&r(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,r("8oxB"))},dKXz:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("XWHH"));t.fetchJSON=function(e,t){return o.default(e,t).then((function(e){if(!e.ok)throw e;return e})).then((function(e){return e.json()}))}},dTMY:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.API_BASE="https://api.nomics.com",function(e){e.Minute="1m",e.Hour="1h",e.Day="1d",e.Week="7d",e.Month="30d",e.YearToDate="ytd",e.Year="365d",e.All="all"}(t.IntervalEnum||(t.IntervalEnum={}))},g4pe:function(e,t,r){e.exports=r("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},n6gp:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isEmpty=function(e){return null==e||0===e.length}},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(r){"object"===typeof window&&(t=window)}e.exports=t}},r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={exports:{}},i=!0;try{e[t](o,o.exports,n),i=!1}finally{i&&delete r[t]}return o.exports}return n.ab=t+"/",n(149)}()}).call(this,"/")},tXC9:function(e,t,r){"use strict";r.r(t),r.d(t,"config",(function(){return R})),r.d(t,"default",(function(){return N}));var n=r("q1tI"),o=r.n(n),i=r("g4pe"),s=r.n(i),a=r("MX0m"),u=r.n(a),c=o.a.createElement;function l(e){var t=e.children;return c(o.a.Fragment,null,c(s.a,{htmlAttributes:{lang:"en"}},c("title",{className:"jsx-561458035"},"Tyler Buchea | Software Engineer"),c("meta",{charSet:"utf-8",className:"jsx-561458035"}),c("meta",{name:"description",content:"Software Engineer",className:"jsx-561458035"}),c("meta",{property:"og:site_name",content:"Tyler Buchea",className:"jsx-561458035"}),c("meta",{property:"og:title",content:"Tyler Buchea",className:"jsx-561458035"}),c("meta",{property:"og:description",content:"Software Engineer",className:"jsx-561458035"}),c("meta",{property:"og:url",content:"https://tylerbuchea.com/",className:"jsx-561458035"}),c("meta",{property:"og:image",content:"https://tylerbuchea.com/selfie.jpg",className:"jsx-561458035"}),c("meta",{name:"twitter:image:alt",content:"Tyler Buchea",className:"jsx-561458035"}),c("meta",{name:"twitter:card",content:"summary_large_image",className:"jsx-561458035"}),c("meta",{name:"twitter:creator",content:"@tylerbuchea",className:"jsx-561458035"}),c("meta",{name:"twitter:site",content:"@tylerbuchea",className:"jsx-561458035"}),c("meta",{name:"monetization",content:"$ilp.uphold.com/wnXZWApZzyZd",className:"jsx-561458035"}),c("meta",{name:"color-scheme",content:"dark light",className:"jsx-561458035"}),c("link",{rel:"icon",href:"/favicon.png",type:"image/png",className:"jsx-561458035"}),c("link",{href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",type:"text/css",className:"jsx-561458035"}),c("link",{rel:"preconnect",href:"https://fonts.gstatic.com",className:"jsx-561458035"}),c("link",{href:"https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Roboto:wght@400&family=Rock+Salt&display=swap",rel:"stylesheet",className:"jsx-561458035"})),t,c(u.a,{id:"561458035"},["*{box-sizing:border-box;}",":root{--background:#000000;--midground-1:#222222;--foreground:#ffffff;--accent:#3c89d0;--accent-active:#3c89d0aa;--error:red;--success:green;}","@media (prefers-color-scheme:dark){:root{--foreground:#ffffff;--background:#000000;--accent:#1ac4fc;}}","html,body{background:var(--background);font-family:'Roboto',sans-serif;color:var(--foreground);padding:1.5vh 0;font-smooth:always;}","a{color:inherit;-webkit-text-decoration:none;text-decoration:none;}","h1,h2,h3,h4,h5,h6{margin:0px;font-weight:normal;padding-bottom:7vh;font-family:font-family:'DM Serif Text',serif;}","h1{color:var(--accent);font-weight:100;padding-bottom:1vh;font-family:'Rock Salt',cursive;font-size:2rem;}","h2{font-size:2rem;}","h4{font-size:2rem;}",".amp-carousel-button{background:var(--background);color:var(--foreground);border:2px solid var(--foreground);border-radius:50%;outline:none;}",'.amp-carousel-button-prev{background-image:url(\'data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"%3E%3Cpath d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z"/%3E%3C/svg%3E\');}']))}var f=r("o0o1"),d=r.n(f);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t,r,n,o,i,s){try{var a=e[i](s),u=a.value}catch(c){return void r(c)}a.done?t(u):Promise.resolve(u).then(n,o)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function s(e){y(i,n,o,s,a,"next",e)}function a(e){y(i,n,o,s,a,"throw",e)}s(void 0)}))}}var b=r("I4Gv"),_=r.n(b),g=r("LvDl");function x(e,t){return e.then((function(e){return[null,e]})).catch((function(e){return t&&Object.assign(e,t),[e,void 0]}))}var w=o.a.createElement;function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=new _.a({apiKey:"53d8fffd7523f4bf547d31a165a070f84c338df1"}),O=["portfolioValue"],E=["desc"],T={ETH:{quantity:3.717,usdInvested:2779.06},MM4:{quantity:50,usdInvested:50},DOGE:{quantity:23413.5,usdInvested:5e3},SOL:{quantity:89.926,usdInvested:3273.39166},SFAX:{quantity:93919678.97787109,usdInvested:676.713},BABYDOGE2:{quantity:47715996546.54696,usdInvested:276},RUNE:{quantity:50,usdInvested:337.62}};function M(){return(M=v(d.a.mark((function e(){var t,r,n,o,i,s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={interval:["1d"],ids:Object.keys(T),convert:"USD"},e.next=3,x(A.currenciesTicker(t));case 3:if(r=e.sent,n=m(r,2),o=n[0],i=n[1],!o){e.next=9;break}throw o;case 9:return s=i.map((function(e){var t=e.id,r=e.price,n=T[t].quantity,o=T[t].usdInvested;return j(j({},e),{},{portfolioAmount:n,portfolioValue:n*r,profitable:n*r>o,profitDiff:n*r-o})})),a=Object(g.orderBy)(s,O,E),console.log("sortedCurrencies",a),e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){var t=e>2?Math.floor(e):e;return new Intl.NumberFormat("en-US",{maximumSignificantDigits:20}).format(t)}function k(e){return(e<0?"-$":"$")+P(Math.abs(e))}function I(){var e=m(o.a.useState(null),2),t=e[0],r=e[1],n=m(o.a.useState(!1),2),i=n[0],s=n[1],a=m(o.a.useState(!0),2),c=a[0],l=a[1],f=o.a.useMemo((function(){return(t||[]).reduce((function(e,t){return t.portfolioValue+e}),0)}),[t]),d=o.a.useCallback((function(){s(!0),l(null),function(){return M.apply(this,arguments)}().then(r).catch((function(e){return l((null===e||void 0===e?void 0:e.message)||e)})).finally((function(){return s(!1)}))}),[]);return o.a.useEffect(d,[]),w("div",{className:"jsx-3981786565 root"},w("header",{className:"jsx-3981786565"},w("h1",{className:"jsx-3981786565"},"Crypto Dash"),w("button",{onClick:d,className:"jsx-3981786565"}," ",i?"Loading":"Refetch"),c&&w(o.a.Fragment,null,w("br",{className:"jsx-3981786565"}),w("small",{className:"jsx-3981786565"},c)),w("h2",{className:"jsx-3981786565"},"Total",w("br",{className:"jsx-3981786565"}),k(f))),w("main",{className:"jsx-3981786565"},w("ul",{className:"jsx-3981786565"},null===t||void 0===t?void 0:t.map((function(e){var t=e.id,r=e.price,n=e.name,o=e.portfolioValue,i=e.portfolioAmount,s=e.profitable,a=e.profitDiff;return w("li",{key:t,className:"jsx-3981786565"},w("h3",{className:"jsx-3981786565"},n,w("br",{className:"jsx-3981786565"}),w("small",{className:"jsx-3981786565"},"(",t,")")),w("h2",{className:"jsx-3981786565"},k(o),w("br",{className:"jsx-3981786565"}),w("small",{style:{color:s?"var(--success)":"var(--error)"},className:"jsx-3981786565"},k(Math.floor(a)))),w("small",{className:"jsx-3981786565"},P(i)," total"),w("br",{className:"jsx-3981786565"}),w("small",{className:"jsx-3981786565"},k(r)," per token"))})))),w("footer",{className:"jsx-3981786565"},w("a",{href:"https://nomics.com/",className:"jsx-3981786565"},"Crypto Market Cap & Pricing Data Provided By Nomics.")),w(u.a,{id:"3981786565"},[".root.jsx-3981786565{padding:10px 40px 0px 40px;margin:20px 20px 0px 20px;}","button.jsx-3981786565{border:none;background:var(--accent);color:var(--foreground);padding:5px 10px;border-radius:3px;cursor:pointer;}","button.jsx-3981786565:hover,button.jsx-3981786565:active{background:var(--accent-active);}","header.jsx-3981786565 h2.jsx-3981786565{text-align:center;}","header.jsx-3981786565 small.jsx-3981786565{color:var(--error);}","ul.jsx-3981786565{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;grid-gap:10px;list-style-type:none;padding:0px;}","li.jsx-3981786565{background:var(--midground-1);padding:5px 10px 20px 10px;border-radius:5px;text-align:center;}","li.jsx-3981786565 h2.jsx-3981786565{color:var(--foreground);}","li.jsx-3981786565 h2.jsx-3981786565 small.jsx-3981786565{font-size:16px;}","li.jsx-3981786565 h2.jsx-3981786565 small.jsx-3981786565{color:var(--foreground);}","li.jsx-3981786565 h3.jsx-3981786565{margin-top:20px;}","footer.jsx-3981786565{margin-top:100px;}"]))}var C=o.a.createElement,R={amp:!1};function N(){return C(l,null,C(s.a,null,C("title",null,"Tyler Buchea | Crypto"),C("meta",{name:"robots",content:"noindex"})),C(I,null),C("footer",null))}},u2Ne:function(e,t,r){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)n[o]=i[s];return n};Object.defineProperty(t,"__esModule",{value:!0}),t.objToUrlParams=function(e){return Object.keys(e).reduce((function(t,r){return null!=e[r]?n(t,[r+"="+encodeURIComponent(e[r])]):t}),[]).join("&")}},"v+Zy":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("I4Gv")),i=(r("dTMY"),r("dKXz")),s=r("u2Ne");t.default=function(e,t,r){void 0===t&&(t={});var n=t.convert,a=t.ids,u=t.interval,c=t.quoteCurrency,l=t.includeTransparency,f={convert:n,ids:a&&a.join(","),"include-transparency":l,interval:u&&u.join(","),key:e,"quote-currency":c};return i.fetchJSON(o.default.NOMICS_API_BASE+"/v1/currencies/ticker?"+s.objToUrlParams(f),r)}}},[["VBVC",0,1,4,2]]]);