function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(t);if(e){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var e="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(n,t)})(t)}function _construct(t,e,n){return(_construct=_isNativeReflectConstruct()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&_setPrototypeOf(i,n.prototype),i}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _toArray(t){return _arrayWithHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableRest()}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _iterableToArrayLimit(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}function _arrayWithHoles(t){if(Array.isArray(t))return t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{EFQ4:function(t,e,n){var r,i;void 0===(i="function"==typeof(r=function(){"use strict";function t(t){var e=0,n=1,r=1;return{curr:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t[e+n]},end:function(){return t.length<=e},info:function(){return{index:e,col:n,line:r}},index:function(t){return void 0===t?e:e=t},next:function(){var i=t[e++];return"\n"==i?(r++,n=0):n++,i}}}function e(t){return Array.isArray(t)?t:[t]}function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\n";return(t||[]).join(e)}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t[t.length-e]}function i(t){return t[0]}function o(t,e){return Array.prototype.flatMap?t.flatMap(e):t.reduce((function(t,n){return t.concat(e(n))}),[])}var u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"text",value:t}},a=function(t){return/[\s\n\t]/.test(t)},c={"\u03c0":Math.PI,"\u220f":Math.PI};function s(t){return function(e,n){for(var r=e.index(),i="";!e.end();){var o=e.next();if(t(o))break;i+=o}return n&&e.index(r),i}}function l(t,e){return s((function(t){return/[^\w@]/.test(t)}))(t,e)}function f(t){return s((function(t){return/[\s\{]/.test(t)}))(t)}function p(t,e){return s((function(t){return function(t){return/\n/.test(t)}(t)||"{"==t}))(t,e)}function h(t,e){for(var n,r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"step",name:t,styles:[]}}();!t.end()&&"}"!=(n=t.curr());)if(a(n))t.next();else{if(r.name.length){if(r.styles.push(z(t,e)),"}"==t.curr())break}else r.name=k(t);t.next()}return r}function v(t,e){for(var n,r=[];!t.end()&&"}"!=(n=t.curr());)a(n)||r.push(h(t,e)),t.next();return r}function d(t,e){for(var n,r,i,o,u,a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"keyframes",name:t,steps:[]}}();!t.end()&&"}"!=(n=t.curr());)if(a.name.length){if("{"==n){t.next(),a.steps=v(t,e);break}t.next()}else if(l(t),a.name=f(t),!a.name.length){r="missing keyframes name",i=t.info(),o=void 0,u=void 0,o=i.col,u=i.line,console.error("(at line ".concat(u,", column ").concat(o,") ").concat(r));break}return a}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(t.next();!t.end();){var n=t.curr();if(e.inline){if("\n"==n)break}else if("*"==(n=t.curr())&&"/"==t.curr(1))break;t.next()}e.inline||(t.next(),t.next())}function g(t){for(var e,n="";!t.end()&&":"!=(e=t.curr());)a(e)||(n+=e),t.next();return n}function m(t){for(var e,n,i=[],o=[],a=[],s="";!t.end();){if(e=t.curr(),/[\('"`]/.test(e)&&"\\"!==t.curr(-1))a.length&&"("!=e&&e===r(a)?a.pop():a.push(e),s+=e;else if("@"==e)o.length||(s=s.trimLeft()),s.length&&(o.push(u(s)),s=""),o.push(b(t));else if(/[,)]/.test(e))if(a.length)")"==e&&a.pop(),s+=e;else{var l;if(s.length&&(o.push(u(o.length?s:(n=s).trim().length?isNaN(+n)?n.trim():+n:n)),s.startsWith("\xb1"))){var f=s.substr(1),p=JSON.parse(JSON.stringify(o));r(p).value="-"+f,i.push(_(p)),r(o).value=f}if(i.push(_(o)),o=(l=[[],""])[0],s=l[1],")"==e)break}else c[e]&&(e=c[e]),s+=e;t.next()}return i}function _(t){var e=t.map((function(t){if("text"==t.type&&"string"==typeof t.value){var e=String(t.value);e.includes("`")&&(t.value=e=e.replace(/`/g,'"')),t.value=e.replace(/\n+|\s+/g," ")}return t})),n=i(e)||{},o=r(e)||{};if("text"==n.type&&"text"==o.type){var u=i(n.value),a=r(o.value);"string"==typeof n.value&&"string"==typeof o.value&&['"',"(",")","'"].includes(u)&&{'"':'"',"'":"'","(":")"}[u]==a&&(n.value=n.value.slice(1),o.value=o.value.slice(0,o.value.length-1))}return e}function b(t){var e,n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"func",name:t,arguments:[]}}(),r="@",i=!1;for(t.next();!t.end();){e=t.curr();var o=t.curr(1);if("("==e){i=!0,t.next(),n.arguments=m(t);break}if(!i&&"("!==o&&!/[0-9a-zA-Z_\-.]/.test(o)){r+=e;break}r+=e,t.next()}var u=function(t){var e="",n="";if(/\D$/.test(t))return{fname:t,extra:n};for(var r=t.length-1;r>=0;r--){var i=t[r];if(!/[\d.]/.test(i)){e=t.substring(0,r+1);break}n=i+n}return{fname:e,extra:n}}(r),a=u.fname,c=u.extra;return n.name=a,c.length&&n.arguments.unshift([{type:"text",value:c}]),n.position=t.info().index,n}function x(t){var e,n=u(),r=0,i=!0,o=[],s=[];for(o[r]=[];!t.end();)if(e=t.curr(),i&&a(e))t.next();else{if(i=!1,"\n"!=e||a(t.curr(-1)))if(","!=e||s.length){if(/[;}]/.test(e)){n.value.length&&(o[r].push(n),n=u());break}"@"==e?(n.value.length&&(o[r].push(n),n=u()),o[r].push(b(t))):a(e)&&a(t.curr(-1))||("("==e&&s.push(e),")"==e&&s.pop(),c[e]&&(e=c[e]),n.value+=e)}else n.value.length&&(o[r].push(n),n=u()),o[++r]=[],i=!0;else n.value+=" ";t.next()}return n.value.length&&o[r].push(n),o}function k(t){for(var e,n="";!t.end()&&"{"!=(e=t.curr());)a(e)||(n+=e),t.next();return n}function w(t){for(var e,n={name:"",arguments:[]};!t.end();){if("("==(e=t.curr()))t.next(),n.arguments=m(t);else{if(/[){]/.test(e))break;a(e)||(n.name+=e)}t.next()}return n}function A(t,e){for(var n,r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"pseudo",selector:t,styles:[]}}();!t.end()&&"}"!=(n=t.curr());)if(a(n))t.next();else{if(r.selector){var i=z(t,e);if("@use"==i.property?r.styles=r.styles.concat(i.value):r.styles.push(i),"}"==t.curr())break}else r.selector=k(t);t.next()}return r}function z(t,e){for(var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"rule",property:t,value:[]}}();!t.end()&&";"!=t.curr();){if(n.property.length){n.value=x(t);break}if(n.property=g(t),"@use"==n.property){n.value=O(t,e);break}t.next()}return n}function T(t,e){for(var n,r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"cond",name:t,styles:[],arguments:[]}}();!t.end()&&"}"!=(n=t.curr());){if(r.name.length)if(":"==n){var i=A(t);i.selector&&r.styles.push(i)}else if("@"!=n||p(t,!0).includes(":")){if(!a(n)){var o=z(t,e);if(o.property&&r.styles.push(o),"}"==t.curr())break}}else r.styles.push(T(t));else Object.assign(r,w(t));t.next()}return r}function S(t,e){var n="";return t&&t.get_custom_property_value&&(n=t.get_custom_property_value(e)),n}function O(e,n){return e.next(),(x(e)||[]).reduce((function(e,r){!function e(n,r){n.forEach&&n.forEach((function(n){if("text"==n.type&&n.value){var i=function(e){e=e.trim();var n=[];if(!/^var\(/.test(e))return n;var r=t(e);try{n=function(t){for(var e="",n=[],r=[],i={};!t.end();){var o=t.curr();if("("==o)n.push(o),e="";else if(")"==o||","==o){if(/^\-\-.+/.test(e)&&(i.name?(i.alternative||(i.alternative=[]),i.alternative.push({name:e})):i.name=e),")"==o){if("("!=n[n.length-1])throw new Error("bad match");n.pop()}","==o&&(n.length||(r.push(i),i={})),e=""}else/\s/.test(o)||(e+=o);t.next()}return n.length?[]:(i.name&&r.push(i),r)}(r)}catch(i){console.error(i&&i.message||"Bad variables.")}return n}(n.value);n.value=i.reduce((function(t,e){var n,i="",o="";!(i=S(r,e.name))&&e.alternative&&e.alternative.every((function(t){if(o=S(r,t.name))return i=o,!1}));try{n=C(i,r)}catch(u){}return n&&t.push.apply(t,n),t}),[])}"func"==n.type&&n.arguments&&n.arguments.forEach((function(t){e(t,r)}))}))}(r,n);var i=_slicedToArray(r,1)[0];return i.value&&i.value.length&&e.push.apply(e,_toConsumableArray(i.value)),e}),[])}function C(e,n){for(var r=t(e),i=[];!r.end();){var o=r.curr();if(a(o))r.next();else{if("/"==o&&"*"==r.curr(1))y(r);else if("/"==o&&"/"==r.curr(1))y(r,{inline:!0});else if(":"==o){var u=A(r,n);u.selector&&i.push(u)}else if("@"==o&&"@keyframes"===l(r,!0)){var c=d(r,n);i.push(c)}else if("@"!=o||p(r,!0).includes(":")){if(!a(o)){var s=z(r,n);s.property&&i.push(s)}}else{var f=T(r,n);f.name.length&&i.push(f)}r.next()}}return i}function j(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((function(t,n){return t.apply(null,e(n))}),t)}function M(t,e,n){return Math.max(e,Math.min(n,t))}function E(t,e,n){var r,i=0,o=t,u=function(t){return t>0&&t<1?.1:1},a=arguments.length;1==a&&(t=(r=[u(t),t])[0],e=r[1]),a<3&&(n=u(t));for(var c=[];(n>=0&&t<=e||n<0&&t>e)&&(c.push(t),t+=n,!(i++>=1e3)););return c.length||c.push(o),c}function P(t){return/^[a-zA-Z]$/.test(t)}function I(t){var e=function(){return t};return e.lazy=!0,e}function L(t,e,n){return"cell-"+t+"-"+e+"-"+n}function R(t){var e=_slicedToArray((t+"").replace(/\s+/g,"").replace(/[,\uff0cxX]+/g,"x").split("x").map(Number),3),n=e[0],r=e[1],i=e[2],o=1==n||1==r?1024:32,u=1==n&&1==r?1024:1,a={x:M(n||1,1,o),y:M(r||n||1,1,o),z:M(i||1,1,u)};return Object.assign({},a,{count:a.x*a.y*a.z})}function N(t,e){if(e){var n=new Blob([t],{type:"image/svg+xml"});return"url(".concat(URL.createObjectURL(n),"#").concat(e,")")}return'url("data:image/svg+xml;utf8,'.concat(encodeURIComponent(t),'")')}function H(t){var e='xmlns="http://www.w3.org/2000/svg"';return t.includes("<svg")||(t="<svg ".concat(e,">").concat(t,"</svg>")),t.includes("xmlns")||(t=t.replace(/<svg([\s>])/,"<svg ".concat(e,"$1"))),t}function $(t,e,n){return t*(1-n)+e*n}function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return 1==arguments.length&&(1==t?t=0:t<1?t/=10:t=1),$(t,e,Math.random())}function D(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=function(t){var e="";return t.some((function(t){var n=String(t).trim();if(!n)return"";var r=n.match(/\d(\D+)$/);return e=r?r[1]:""})),e}(n);return function(t,e){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];r=r.map((function(t){return Number(String(t).replace(/\D+$/g,""))}));var o=t.apply(null,r);return e.length?Array.isArray(o)?o.map((function(t){return t+e})):o+e:o}}(t,i).apply(null,n)}}function F(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n.map((function(t){return String(t).charCodeAt(0)})),o=t.apply(null,i);return Array.isArray(o)?o.map((function(t){return String.fromCharCode(t)})):String.fromCharCode(o)}}function J(t){for(var e=function(t){for(var e=function(t){for(var e=String(t),n=[],i="",o=0;o<e.length;++o){var u=e[o];if(U[u])if("-"==u&&"e"==e[o-1])i+=u;else if(n.length||i.length||!/[+-]/.test(u)){var a=r(n)||{},c=a.type,s=a.value;"operator"==c&&!i.length&&/[^()]/.test(u)&&/[^()]/.test(s)?i+=u:(i.length&&(n.push({type:"number",value:i}),i=""),n.push({type:"operator",value:u}))}else i+=u;else/\S/.test(u)&&(i+=u)}return i.length&&n.push({type:"number",value:i}),n}(t),n=[],i=[],o=0;o<e.length;++o){var u=e[o],a=u.type,c=u.value;if("number"==a)i.push(c);else if("operator"==a)if("("==c)n.push(c);else if(")"==c){for(;n.length&&"("!=r(n);)i.push(n.pop());n.pop()}else{for(;n.length&&U[r(n)]>=U[c];){var s=n.pop();/[()]/.test(s)||i.push(s)}n.push(c)}}for(;n.length;)i.push(n.pop());return i}(t),n=[];e.length;){var i=e.shift();if(/\d+/.test(i))n.push(i);else{var o=n.pop(),u=n.pop();n.push(q(i,Number(u),Number(o)))}}return n[0]}var U={"*":3,"/":3,"%":3,"+":2,"-":2,"(":1,")":1};function q(t,e,n){switch(t){case"+":return e+n;case"-":return e-n;case"*":return e*n;case"/":return e/n;case"%":return e%n}}var Z={};function B(t,e){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=t+r.join("-");return Z[o]?Z[o]:Z[o]=e.apply(null,r)}}function Q(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(null,o(n,(function(t){return String(t).startsWith("[")?X(t):t})))}}function V(t,e){return{type:t,value:e}}var X=B("build_range",(function(t){return o(function(t){var e=String(t),n=[],i=[];if(!e.startsWith("[")||!e.endsWith("]"))return n;for(var o=1;o<e.length-1;++o){var u=e[o];if("-"!=u||"-"!=e[o-1])if("-"!=u)if("-"!=r(i))i.length&&n.push(V("char",i.pop())),i.push(u);else{i.pop();var a=i.pop();n.push(a?V("range",[a,u]):V("char",u))}else i.push(u)}return i.length&&n.push(V("char",i.pop())),n}(t),(function(t){var e,n=t.type,r=t.value;if("char"==n)return r;var i=_slicedToArray(r,2),o=i[0],u=i[1],a=!1;o>u&&(o=(e=[u,o])[0],u=e[1],a=!0);var c=F(E)(o,u);return a&&c.reverse(),c}))})),G=function t(e){_classCallCheck(this,t),this.prev=this.next=null,this.data=e},K=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;_classCallCheck(this,t),this._limit=e,this._size=0}return _createClass(t,[{key:"push",value:function(t){this._size>=this._limit&&(this.root=this.root.next,this.root.prev=null);var e=new G(t);this.root?(e.prev=this.tail,this.tail.next=e,this.tail=e):this.root=this.tail=e,this._size++}},{key:"last",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.tail;--t&&e.prev;)e=e.prev;return e.data}}]),t}(),Y=Math.cos,tt=Math.sin,et=Math.sqrt,nt=Math.pow,rt=Math.PI,it=rt/180;function ot(t,e){"function"==typeof arguments[0]&&(e=t,t={}),e||(e=function(t){return[Y(t),tt(t)]});for(var n=t.split||120,r=t.scale||1,i=it*(t.start||0),o=t.deg?t.deg*it:rt/(n/2),u=[],a=0;a<n;++a){var c=i+o*a,s=e(c),l=_slicedToArray(s,2),f=l[0],p=l[1];u.push(50*f*r+50+"% "+(50*p*r+50)+"%")}return t.type?"polygon(".concat(t.type,", ").concat(u.join(","),")"):"polygon(".concat(u.join(","),")")}function ut(t,e,n){var r=it*n;return[t*Y(r)-e*tt(r),e*Y(r)+t*tt(r)]}var at={circle:function(){return"circle(49%)"},triangle:function(){return ot({split:3,start:-90},(function(t){return[1.1*Y(t),1.1*tt(t)+.2]}))},rhombus:function(){return ot({split:4})},pentagon:function(){return ot({split:5,start:54})},hexgon:function(){return ot({split:6,start:30})},hexagon:function(){return ot({split:6,start:30})},heptagon:function(){return ot({split:7,start:-90})},octagon:function(){return ot({split:8,start:22.5})},star:function(){return ot({split:5,start:54,deg:144})},diamond:function(){return"polygon(50% 5%, 80% 50%, 50% 95%, 20% 50%)"},cross:function(){return"polygon(\n      5% 35%,  35% 35%, 35% 5%,  65% 5%,\n      65% 35%, 95% 35%, 95% 65%, 65% 65%,\n      65% 95%, 35% 95%, 35% 65%, 5% 65%\n    )"},clover:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return 4==(t=M(t,3,5))&&(t=2),ot({split:240},(function(e){var n=Y(t*e)*Y(e),r=Y(t*e)*tt(e);return 3==t&&(n-=.2),2==t&&(n/=1.1,r/=1.1),[n,r]}))},hypocycloid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=1-(t=M(t,3,6));return ot({scale:1/t},(function(n){var r=e*Y(n)+Y(e*(n-rt)),i=e*tt(n)+tt(e*(n-rt));return 3==t&&(r=1.1*r-.6,i*=1.1),[r,i]}))},astroid:function(){return at.hypocycloid(4)},infinity:function(){return ot((function(t){var e=.7*et(2)*Y(t),n=nt(tt(t),2)+1;return[e/n,e*tt(t)/n]}))},heart:function(){return ot((function(t){return ut(.75*nt(tt(t),3)*1.2,1.1*(Y(1*t)*(13/18)-Y(2*t)*(5/18)-Y(3*t)/18-Y(4*t)/18+.2),180)}))},bean:function(){return ot((function(t){var e=[nt(tt(t),3),nt(Y(t),3)],n=e[0],r=e[1];return ut((n+r)*Y(t)*1.3-.45,(n+r)*tt(t)*1.3-.45,-90)}))},bicorn:function(){return ot((function(t){return ut(Y(t),nt(tt(t),2)/(2+tt(t))-.5,180)}))},drop:function(){return ot((function(t){return ut(tt(t),(1+tt(t))*Y(t)/1.4,90)}))},pear:function(){return ot((function(t){return[tt(t),(1+tt(t))*Y(t)/1.4]}))},fish:function(){return ot((function(t){return[Y(t)-nt(tt(t),2)/et(2),tt(2*t)/2]}))},whale:function(){return ot({split:240},(function(t){var e=3.4*(nt(tt(t),2)-.5)*Y(t);return ut(Y(t)*e+.75,tt(t)*e*1.2,180)}))},bud:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return t=M(t,3,10),ot({split:240},(function(e){return[(1+.2*Y(t*e))*Y(e)*.8,(1+.2*Y(t*e))*tt(e)*.8]}))},alien:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map((function(t){return M(t,1,9)})),i=_slicedToArray(r,5),o=i[0],u=void 0===o?1:o,a=i[1],c=void 0===a?1:a,s=i[2],l=void 0===s?1:s,f=i[3],p=void 0===f?1:f,h=i[4],v=void 0===h?1:h;return ot({split:480,type:"evenodd"},(function(t){return[.31*(Y(t*u)+Y(t*l)+Y(t*v)),.31*(tt(t*c)+tt(t*p)+tt(t))]}))}};function ct(t){return I((function(e,n){if(!n||!e)return"";var r=M(e(),0,65536);return function(t,e){for(var n=[],r=0;r<t;++r)n.push(e(r));return n}(r,(function(t){return n(t+1,r)})).join(t)}))}function st(t,e,n){return t[e]||(t[e]=new K),t[e].push(n),n}var lt,ft,pt=(lt={index:function(t){var e=t.count;return function(t){return e}},row:function(t){var e=t.x;return function(t){return e}},col:function(t){var e=t.y;return function(t){return e}},depth:function(t){var e=t.z;return function(t){return e}},size:function(t){var e=t.grid;return function(t){return e.count}},"size-row":function(t){var e=t.grid;return function(t){return e.x}},"size-col":function(t){var e=t.grid;return function(t){return e.y}},"size-depth":function(t){var e=t.grid;return function(t){return e.z}},id:function(t){var e=t.x,n=t.y,r=t.z;return function(t){return L(e,n,r)}},n:function(t){var e=t.extra;return function(t){return e[0]||0}},N:function(t){var e=t.extra;return function(t){return e[1]||0}},repeat:ct(""),multiple:ct(","),"multiple-with-space":ct(" "),pick:function(t){var e=t.context;return Q((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return st(e,"last_pick",function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.reduce((function(t,e){return t.concat(e)}),[]);return r[~~(Math.random()*r.length)]}(n))}))},"pick-n":function(t){var e=t.context,n=t.extra,r="pn-counter"+t.position;return Q((function(){var t;e[r]||(e[r]=0),e[r]+=1;var i=arguments.length,o=n||[],u=_slicedToArray(o,1),a=u[0];return st(e,"last_pick",(t=((void 0===a?e[r]:a)-1)%i)<0||arguments.length<=t?void 0:arguments[t])}))},"pick-d":function(t){var e=t.context,n=t.extra,r=t.position,i="pd-counter"+r,o="pd-values"+r;return Q((function(){for(var t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];e[i]||(e[i]=0),e[i]+=1,e[o]||(e[o]=function(t){for(var e=Array.from?Array.from(t):t.slice(),n=t.length;n;){var r=~~(Math.random()*n--),i=e[n];e[n]=e[r],e[r]=i}return e}(r));var a=r.length,c=n||[],s=_slicedToArray(c,1),l=s[0];return st(e,"last_pick",e[o][((void 0===l?e[i]:l)-1)%a])}))},"last-pick":function(t){var e=t.context;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=e.last_pick;return n?n.last(t):""}},rand:function(t){var e=t.context;return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=(n.every(P)?F:D)(W).apply(null,n);return st(e,"last_rand",i)}},"rand-int":function(t){var e=t.context;return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n.every(P)?F:D,o=parseInt(i(W).apply(null,n));return st(e,"last_rand",o)}},"last-rand":function(t){var e=t.context;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=e.last_rand;return n?n.last(t):""}},calc:function(){return function(t){return J(t)}},hex:function(){return function(t){return parseInt(t).toString(16)}},svg:I((function(t){return void 0===t?"":N(H(t().trim()))})),"svg-filter":I((function(t){if(void 0===t)return"";var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t+Math.random().toString(32).substr(2)}("filter-");return N(H(t().trim()).replace(/<filter([\s>])/,'<filter id="'.concat(e,'"$1')),e)})),var:function(){return function(t){return"var(".concat(t,")")}},shape:function(){return memo("shape-function",(function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return t=t.trim(),"function"==typeof at[t]?at[t](n):""}))}},ft={m:"multiple",ms:"multiple-with-space",r:"rand",ri:"rand-int",lr:"last-rand",p:"pick",pn:"pick-n",pd:"pick-d",lp:"last-pick",rep:"repeat",i:"index",x:"row",y:"col",z:"depth",s:"size",sx:"size-row",sy:"size-col",sz:"size-depth","size-x":"size-row","size-y":"size-col","size-z":"size-depth",multi:"multiple","pick-by-turn":"pick-n","max-row":"size-row","max-col":"size-col"},Object.keys(ft).forEach((function(t){lt[t]=lt[ft[t]]})),lt),ht=function(t){return/[,\uff0c\s]/.test(t)};function vt(t){for(;!t.end()&&ht(t.curr(1));)t.next()}function dt(e){for(var n=t(e),r=[],i=[],o="";!n.end();){var u=n.curr();"("==u?(o+=u,i.push(u)):")"==u?(o+=u,i.length&&i.pop()):i.length?o+=u:ht(u)?(r.push(o),o="",vt(n)):o+=u,n.next()}return o&&r.push(o),r}var yt=[];function gt(t){if(!yt.length){var e=new Set;for(var n in document.head.style)n.startsWith("-")||e.add(n.replace(/[A-Z]/g,"-$&").toLowerCase());e.has("grid-gap")||e.add("grid-gap"),yt=Array.from(e)}return t&&t.test?yt.filter((function(e){return t.test(e)})):yt}function mt(t){var e=new RegExp("\\-?".concat(t,"\\-?"));return gt(e).map((function(t){return t.replace(e,"")})).reduce((function(t,e){return t[e]=e,t}),{})}var _t=mt("webkit"),bt=mt("moz");function xt(t,e){return _t[t]?"-webkit-".concat(e," ").concat(e):bt[t]?"-moz-".concat(e," ").concat(e):e}var kt,wt,At={"4a0":[1682,2378],"2a0":[1189,1682],a0:[841,1189],a1:[594,841],a2:[420,594],a3:[297,420],a4:[210,297],a5:[148,210],a6:[105,148],a7:[74,105],a8:[52,74],a9:[37,52],a10:[26,37],b0:[1e3,1414],b1:[707,1e3],b2:[500,707],b3:[353,500],b4:[250,353],b5:[176,250],b6:[125,176],b7:[88,125],b8:[62,88],b9:[44,62],b10:[31,44],b11:[22,32],b12:[16,22],c0:[917,1297],c1:[648,917],c2:[458,648],c3:[324,458],c4:[229,324],c5:[162,229],c6:[114,162],c7:[81,114],c8:[57,81],c9:[40,57],c10:[28,40],c11:[22,32],c12:[16,22],d0:[764,1064],d1:[532,760],d2:[380,528],d3:[264,376],d4:[188,260],d5:[130,184],d6:[92,126],letter:[216,279],legal:[216,356],"junior-legal":[203,127],ledger:[279,432],tabloid:[279,432],executive:[190,254],postcard:[100,148],"business-card":[54,90],poster:[390,540]},zt={portrait:"p",pt:"p",p:"p",landscape:"l",ls:"l",l:"l"},Tt={"@size":function(t,e){var n,r,i=e.is_special_selector,o=_slicedToArray(dt(t),2),u=o[0],a=o[1],c=void 0===a?u:a;return At[u]&&(n=function(t,e){var n;t=String(t).toLowerCase();var r=_slicedToArray(At[t]||[],2),i=r[0],o=r[1];return"p"==zt[e]&&(o=(n=[i,o])[0],i=n[1]),[o,i].map((function(t){return t+"mm"}))}(u,c),u=(r=_slicedToArray(n,2))[0],c=r[1]),"\n      width: ".concat(u,";\n      height: ").concat(c,";\n      ").concat(i?"":"\n        --internal-cell-width: ".concat(u,";\n        --internal-cell-height: ").concat(c,";\n      "),"\n    ")},"@min-size":function(t){var e=_slicedToArray(dt(t),2),n=e[0],r=e[1],i=void 0===r?n:r;return"min-width: ".concat(n,"; min-height: ").concat(i,";")},"@max-size":function(t){var e=_slicedToArray(dt(t),2),n=e[0],r=e[1],i=void 0===r?n:r;return"max-width: ".concat(n,"; max-height: ").concat(i,";")},"@place-cell":(kt={center:"50%",0:"0%",left:"0%",right:"100%",top:"50%",bottom:"50%"},wt={center:"50%",0:"0%",top:"0%",bottom:"100%",left:"50%",right:"50%"},function(t){var e=_slicedToArray(dt(t),2),n=e[0],r=e[1],i=void 0===r?"50%":r;i=wt[i]||i;var o="var(--internal-cell-width, 25%)",u="var(--internal-cell-height, 25%)";return"\n        position: absolute;\n        left: ".concat(n=kt[n]||n,";\n        top: ").concat(i,";\n        width: ").concat(o,";\n        height: ").concat(u,";\n        margin-left: calc(").concat(o," / -2) !important;\n        margin-top: calc(").concat(u," / -2) !important;\n        grid-area: unset !important;\n      ")}),"@grid":function(t,e){var n=_slicedToArray(t.split("/").map((function(t){return t.trim()})),2),r=n[0],i=n[1];return{grid:R(r),size:i?this["@size"](i,e):""}},"@shape":B("shape-property",(function(t){var e=_toArray(dt(t)),n=e[0],r=e.slice(1);return at[n]?xt("clip-path","clip-path: ".concat(at[n].apply(null,r),";"))+"overflow: hidden;":""})),"@use":function(t){if(t.length>2)return t}};function St(t,e,n){for(var r=function(t){return function(e){return String(t).replace(/(\d+)(n)/g,"$1*"+e).replace(/n/g,e)}}(t),i=0;i<=n;++i)if(J(r(i))==e)return!0}var Ot={even:function(t){return!!(t%2)},odd:function(t){return!(t%2)}};function Ct(t){return/^(even|odd)$/.test(t)}var jt={at:function(t){var e=t.x,n=t.y;return function(t,r){return e==t&&n==r}},nth:function(t){var e=t.count,n=t.grid;return function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return r.some((function(t){return Ct(t)?Ot[t](e-1):St(t,e,n.count)}))}},row:function(t){var e=t.x,n=t.grid;return function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return r.some((function(t){return Ct(t)?Ot[t](e-1):St(t,e,n.x)}))}},col:function(t){var e=t.y,n=t.grid;return function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return r.some((function(t){return Ct(t)?Ot[t](e-1):St(t,e,n.y)}))}},even:function(t){var e=t.count;return function(t){return Ot.even(e-1)}},odd:function(t){var e=t.count;return function(t){return Ot.odd(e-1)}},random:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return t>=1&&t<=0&&(t=.5),Math.random()<t}}},Mt=Object.getOwnPropertyNames(Math).reduce((function(t,e){return t[e]=function(){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return"number"==typeof Math[e]?Math[e]:Math[e].apply(null,n.map(J))}},t}),{});function Et(t){return/^\:(host|doodle)/.test(t)}function Pt(t){return/^\:(container|parent)/.test(t)}function It(t){return Et(t)||Pt(t)}var Lt=function(){function t(e){_classCallCheck(this,t),this.tokens=e,this.rules={},this.props={},this.keyframes={},this.grid=null,this.coords=[],this.reset()}return _createClass(t,[{key:"reset",value:function(){for(var t in this.styles={host:"",container:"",cells:"",keyframes:""},this.coords=[],this.rules)t.startsWith("#cell")&&delete this.rules[t]}},{key:"add_rule",value:function(t,n){var r=this.rules[t];r||(r=this.rules[t]=[]),r.push.apply(r,e(n))}},{key:"pick_func",value:function(t){return pt[t]||Mt[t]}},{key:"compose_aname",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.join("-")}},{key:"compose_selector",value:function(t){var e=t.x,n=t.y,r=t.z,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"#".concat(L(e,n,r)).concat(i)}},{key:"compose_argument",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=t.map((function(t){if("text"==t.type)return t.value;if("func"==t.type){var i=n.pick_func(t.name.substr(1));if(i){e.extra=r,e.position=t.position;var o=t.arguments.map((function(t){return i.lazy?function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n.compose_argument(t,e,i)}:n.compose_argument(t,e,r)}));return j(i,e,o)}}}));return i.length>=2?i.join(""):i[0]}},{key:"compose_value",value:function(t,e){var n=this;return t&&t.reduce?t.reduce((function(t,r){switch(r.type){case"text":t+=r.value;break;case"func":var i=r.name.substr(1),o=n.pick_func(i);if(o){e.position=r.position;var u=r.arguments.map((function(t){return o.lazy?function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n.compose_argument(t,e,i)}:n.compose_argument(t,e)})),a=j(o,e,u);null!=a&&(t+=a)}}return t}),""):""}},{key:"compose_rule",value:function(t,e,n){var r=this,i=Object.assign({},e),o=t.property,u=t.value.reduce((function(t,e){var n=r.compose_value(e,i);return n&&t.push(n),t}),[]),a=u.join(", ");if(/^animation(\-name)?$/.test(o)&&(this.props.has_animation=!0,i.count>1)){var c=i.count;switch(o){case"animation-name":a=u.map((function(t){return r.compose_aname(t,c)})).join(", ");break;case"animation":a=u.map((function(t){var e=(t||"").split(/\s+/);return e[0]=r.compose_aname(e[0],c),e.join(" ")})).join(", ")}}"content"==o&&(/["']|^none$|^(var|counter|counters|attr)\(/.test(a)||(a="'".concat(a,"'"))),"transition"==o&&(this.props.has_transition=!0);var s="".concat(o,": ").concat(a,";");if(s=xt(o,s),"clip-path"==o&&(s+=";overflow: hidden;"),"width"!=o&&"height"!=o||It(n)||(s+="--internal-cell-".concat(o,": ").concat(a,";")),Tt[o]){var l=Tt[o](a,{is_special_selector:It(n)});switch(o){case"@grid":Et(n)&&(this.grid=l.grid,s=l.size||"");break;case"@place-cell":Et(n)||(s=l);case"@use":t.value.length&&this.compose(i,t.value),s=Tt[o](t.value);default:s=l}}return s}},{key:"compose",value:function(t,e,r){var i=this;this.coords.push(t),(e||this.tokens).forEach((function(e,o){if(e.skip)return!1;if(r&&i.grid)return!1;switch(e.type){case"rule":i.add_rule(i.compose_selector(t),i.compose_rule(e,t));break;case"pseudo":e.selector.startsWith(":doodle")&&(e.selector=e.selector.replace(/^\:+doodle/,":host"));var u=It(e.selector);u&&(e.skip=!0),e.selector.split(",").forEach((function(n){var r=e.styles.map((function(e){return i.compose_rule(e,t,n)})),o=u?n:i.compose_selector(t,n);i.add_rule(o,r)}));break;case"cond":var a=jt[e.name.substr(1)];if(a){var c=e.arguments.map((function(e){return i.compose_argument(e,t)}));j(a,t,c)&&i.compose(t,e.styles)}break;case"keyframes":i.keyframes[e.name]||(i.keyframes[e.name]=function(t){return"\n              ".concat(n(e.steps.map((function(e){return"\n                ".concat(e.name," {\n                  ").concat(n(e.styles.map((function(e){return i.compose_rule(e,t)}))),"\n                }\n              ")}))),"\n            ")})}}))}},{key:"output",value:function(){var t=this;Object.keys(this.rules).forEach((function(e,r){if(Pt(e))t.styles.container+="\n          .container {\n            ".concat(n(t.rules[e]),"\n          }\n        ");else{var i=Et(e)?"host":"cells";t.styles[i]+="\n          ".concat(e," {\n            ").concat(n(t.rules[e]),"\n          }\n        ")}}));var e=Object.keys(this.keyframes);return this.coords.forEach((function(n,r){e.forEach((function(e){var i,o,u=t.compose_aname(e,n.count);t.styles.keyframes+="\n          ".concat((i=0==r,o="@keyframes ".concat(e," {\n              ").concat(t.keyframes[e](n),"\n            }"),i?"function"==typeof o?o():o:""),"\n          @keyframes ").concat(u," {\n            ").concat(t.keyframes[e](n),"\n          }\n        ")}))})),{props:this.props,styles:this.styles,grid:this.grid}}}]),t}();function Rt(t,e){var n=new Lt(t),r={};n.compose({x:1,y:1,z:1,count:1,context:{},grid:{x:1,y:1,z:1,count:1}},null,!0);var i=n.output().grid;if(i&&(e=i),n.reset(),1==e.z)for(var o=1,u=0;o<=e.x;++o)for(var a=1;a<=e.y;++a)n.compose({x:o,y:a,z:1,count:++u,grid:e,context:r});else for(var c=1,s=0;c<=e.z;++c)n.compose({x:1,y:1,z:c,count:++s,grid:e,context:r});return n.output()}var Nt=function(t){_inherits(n,_wrapNativeSuper(HTMLElement));var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.call(this)).doodle=t.attachShadow({mode:"open"}),t.extra={get_custom_property_value:t.get_custom_property_value.bind(_assertThisInitialized(t))},t}return _createClass(n,[{key:"connectedCallback",value:function(t){var e=this;setTimeout((function(){var n,r=e.getAttribute("use")||"";if(r&&(r="@use:".concat(r,";")),!e.innerHTML.trim()&&!r)return!1;try{var i=C(r+e.innerHTML,e.extra);e.grid_size=R(e.getAttribute("grid")),(n=Rt(i,e.grid_size)).grid&&(e.grid_size=n.grid),e.build_grid(n)}catch(o){e.innerHTML="",console.error(o&&o.message||"Error in css-doodle.")}!t&&e.hasAttribute("click-to-update")&&e.addEventListener("click",(function(t){return e.update()}))}))}},{key:"get_custom_property_value",value:function(t){return getComputedStyle(this).getPropertyValue(t).trim().replace(/^\(|\)$/g,"")}},{key:"cell",value:function(t,e,n){var r=document.createElement("div");return r.id=L(t,e,n),r}},{key:"build_grid",value:function(t){var e=this,n=t.props,r=n.has_transition,i=n.has_animation,o=t.styles,u=o.keyframes,a=o.host,c=o.container,s=o.cells;this.doodle.innerHTML="\n      <style>\n        ".concat(this.style_basic(),'\n      </style>\n      <style class="style-keyframes">\n        ').concat(u,'\n      </style>\n      <style class="style-container">\n        ').concat(this.style_size(),"\n        ").concat(a,"\n        ").concat(c,'\n      </style>\n      <style class="style-cells">\n        ').concat(r||i?"":s,'\n      </style>\n      <div class="container"></div>\n    '),this.doodle.querySelector(".container").appendChild(this.html_cells()),(r||i)&&setTimeout((function(){e.set_style(".style-cells",s)}),50)}},{key:"inherit_props",value:function(t){return gt(/grid/).map((function(t){return t+": inherit;"})).join("")}},{key:"style_basic",value:function(){return"\n      * {\n        box-sizing: border-box;\n      }\n      *::after, *::before {\n        box-sizing: inherit;\n      }\n      :host {\n        display: block;\n        visibility: visible;\n        width: 1em;\n        height: 1em;\n      }\n      .container {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        display: grid;\n        ".concat(this.inherit_props(),"\n      }\n      .container div:empty {\n        position: relative;\n        line-height: 1;\n        display: grid;\n        place-content: center;\n      }\n    ")}},{key:"style_size",value:function(){var t=this.grid_size,e=t.x,n=t.y;return"\n      :host {\n        grid-template-rows: repeat(".concat(e,", 1fr);\n        grid-template-columns: repeat(").concat(n,", 1fr);\n      }\n    ")}},{key:"html_cells",value:function(){var t=this.grid_size,e=t.x,n=t.y,r=t.z,i=document.createDocumentFragment();if(1==r)for(var o=1;o<=e;++o)for(var u=1;u<=n;++u)i.appendChild(this.cell(o,u,1));else{for(var a=null,c=1;c<=r;++c){var s=this.cell(1,1,c);(a||i).appendChild(s),a=s}a=null}return i}},{key:"set_style",value:function(t,e){var n=this.shadowRoot.querySelector(t);n&&(n.styleSheet?n.styleSheet.cssText=e:n.innerHTML=e)}},{key:"update",value:function(t){var e=this,n=this.getAttribute("use")||"";n&&(n="@use:".concat(n,";")),t||(t=this.innerHTML),this.innerHTML=t,this.grid_size||(this.grid_size=R(this.getAttribute("grid")));var r=Rt(C(n+t,this.extra),this.grid_size);if(r.grid){var i=r.grid,o=i.x,u=i.y,a=i.z,c=this.grid_size,s=c.x,l=c.y,f=c.z;if(s!==o||l!==u||f!==a)return Object.assign(this.grid_size,r.grid),this.build_grid(r);Object.assign(this.grid_size,r.grid)}else{var p=R(this.getAttribute("grid")),h=p.x,v=p.y,d=p.z,y=this.grid_size,g=y.x,m=y.y,_=y.z;if(g!==h||m!==v||_!==d)return Object.assign(this.grid_size,p),this.build_grid(Rt(C(n+t,this.extra),this.grid_size))}this.set_style(".style-keyframes",r.styles.keyframes),r.props.has_animation&&(this.set_style(".style-cells",""),this.set_style(".style-container","")),setTimeout((function(){e.set_style(".style-container",e.style_size()+r.styles.host+r.styles.container),e.set_style(".style-cells",r.styles.cells)}))}},{key:"attributeChangedCallback",value:function(t,e,n){if(e==n)return!1;"grid"==t&&e&&(this.grid=n),"use"==t&&e&&(this.use=n)}},{key:"grid",get:function(){return Object.assign({},this.grid_size)},set:function(t){this.setAttribute("grid",t),this.connectedCallback(!0)}},{key:"use",get:function(){return this.getAttribute("use")},set:function(t){this.setAttribute("use",t),this.connectedCallback(!0)}}],[{key:"observedAttributes",get:function(){return["grid","use"]}}]),n}();customElements.get("css-doodle")||customElements.define("css-doodle",Nt)})?r.call(e,n,e,t):r)||(t.exports=i)}}]);