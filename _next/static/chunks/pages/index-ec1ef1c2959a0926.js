(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1175)}])},1175:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(4051),o=n.n(r),a=n(5893),u=n(9047),i=n(5152),l=n.n(i),c=n(7294),f=n(8527),s=n(1604),d=n(5193),y=n(9116),b=n(4651),m=n(1876).Buffer;function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t,n,r,o,a,u){try{var i=e[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(r,o)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=function(e){var t=e.deck,n=e.index,r=w(e,["deck","index"]),u=(0,c.useState)(null),i=u[0],l=u[1],s=(0,c.useState)("#000000"),v=s[0],h=s[1],S=(0,c.useState)(null),j=S[0],O=S[1],k=x((0,c.useState)(null),2),I=k[0],E=k[1],C=(0,c.useState)(!1),A=C[0],P=C[1],_=(0,c.useState)(0),D=_[0],T=_[1],N=(0,c.useRef)(null);(0,c.useEffect)((function(){if(t){var e=document.createElement("canvas");e.width=t.ICON_SIZE,e.height=t.ICON_SIZE,O(t.ICON_SIZE),E(e.getContext("2d")),t.setBrightness(100)}}),[t]);var R,M=(0,c.useCallback)((R=o().mark((function e(){var r,a,u,l,c,f,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&I&&j){e.next=2;break}return e.abrupt("return");case 2:if(I.beginPath(),I.rect(0,0,j,j),I.fillStyle=v,I.fill(),!i){e.next=17;break}return e.next=9,new Promise((function(e){var t=new Image;t.addEventListener("load",(function(){return e(t)})),t.src=i}));case 9:return r=e.sent,a=r.naturalWidth/r.naturalHeight,u=0,l=0,c=j,f=j,a>1?l=(j-(f=c/a))/2:a<1&&(u=(j-(c=f*a))/2),I.drawImage(r,u,l,c,f),s=I.getImageData(0,0,j,j),e.next=17,t.fillKeyBuffer(n,m.from(s.data),{format:"rgba"});case 17:T((function(e){return e+1}));case 18:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(n,r){var o=R.apply(e,t);function a(e){p(o,n,r,a,u,"next",e)}function u(e){p(o,n,r,a,u,"throw",e)}a(void 0)}))}),[t,I,j,v,n,i]),B=(0,c.useRef)(null);(0,c.useEffect)((function(){B.current=window.requestAnimationFrame(M)}),[D]),(0,c.useEffect)((function(){B.current&&window.cancelAnimationFrame(B.current),M()}),[M,v,i]);var K=(0,c.useCallback)((function(e){e.preventDefault();var t=e.target.files,n=x(Array.from(null!==t&&void 0!==t?t:[]),1)[0];if(n){var r=n.type;if(n.name.endsWith("svg")&&(r="image/svg+xml"),n){var o=new FileReader;o.onload=function(e){var t,n=(null!==(t=e.target)&&void 0!==t?t:{}).result;if(n){var o=new Blob([n],{type:r});l(URL.createObjectURL(o))}},o.readAsArrayBuffer(n)}}}),[]),z=(0,c.useCallback)((function(e){var t=e.target.value;h(t),M()}),[M]),U=(0,c.useCallback)((function(e){var t,n,r;(n=e.target,null!=(r=HTMLButtonElement)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r)&&(e.ctrlKey?P(!0):null===(t=N.current)||void 0===t||t.click())}),[]);return(0,a.jsx)(a.Fragment,{children:A?(0,a.jsxs)(f.Kq,{as:"form",align:"center",onSubmit:function(e){e.preventDefault(),P(!1)},children:[(0,a.jsx)(y.II,{value:v,type:"color",onInput:z}),(0,a.jsx)(d.zx,{type:"submit",children:"OK"})]}):(0,a.jsxs)(d.zx,g({border:"4px solid black",borderRadius:15},r,{bg:v,_hover:{background:v,opacity:.5},onClick:U,p:0,children:[i&&(0,a.jsx)(b.Ee,{alt:"Button ".concat(n+1),src:i,pointerEvents:"none"}),(0,a.jsx)(f.xu,{as:"form",visibility:"hidden",w:0,children:(0,a.jsx)(y.II,{type:"file",onChange:K,ref:N})})]}))})},j=n(3580),O=n.n(j),k=n(1876).Buffer;function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t,n,r,o,a,u){try{var i=e[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(r,o)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){C(e,t,n[t])}))}return e}function P(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var D=function(e){var t=e.deck,n=e.index,r=P(e,["deck","index"]),u=(0,c.useState)("#000000"),i=u[0],l=u[1],s=(0,c.useState)(null),b=s[0],m=s[1],v=(0,c.useState)(""),p=v[0],h=v[1],g=_((0,c.useState)(null),2),w=g[0],x=g[1],S=(0,c.useState)(!1),j=S[0],I=S[1];(0,c.useEffect)((function(){if(t){var e=document.createElement("canvas");e.width=t.ICON_SIZE,e.height=t.ICON_SIZE,m(t.ICON_SIZE),x(e.getContext("2d")),t.setBrightness(100)}}),[t]);var C,D=(0,c.useCallback)((C=o().mark((function e(){var r,a,u,l,c,f,s,d,y,m;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=new Date,a=new Date(r.getFullYear(),r.getMonth(),r.getDate()),u=r.getTime()-a.getTime(),l=u/864e5,c=Math.floor(10*l),f=Math.floor(1e3*l)-100*c,s=Math.floor(1e5*l)-1e4*c-100*f,d="".concat(c,":").concat(f.toString().padStart(2,"0"),":").concat(s.toString().padStart(2,"0")),h(d),console.info({index:n,t:"redrawing",deck:t,ctx:w,size:b}),t&&w&&b){e.next=12;break}return e.abrupt("return");case 12:return w.clearRect(0,0,b,b),w.beginPath(),w.rect(0,0,b,b),w.fillStyle=i,w.fill(),w.font="".concat(.9*b,'px "Arial"'),w.strokeStyle="blue",w.lineWidth=1,w.strokeText(d,.05*b,.8*b,.9*b),w.fillStyle="white",w.fillText(d,.05*b,.8*b,.9*b),y=w.getImageData(0,0,b,b),m=y.data,e.next=26,t.fillKeyBuffer(n,k.from(m),{format:"rgba"});case 26:console.info({index:n,t:"redraw()"});case 27:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(n,r){var o=C.apply(e,t);function a(e){E(o,n,r,a,u,"next",e)}function u(e){E(o,n,r,a,u,"throw",e)}a(void 0)}))}),[t,w,b,n,i]);O()(D,[]);var T=(0,c.useCallback)((function(e){var t=e.target.value;l(t)}),[]),N=(0,c.useCallback)((function(e){var t,n;t=e.target,(null!=(n=HTMLButtonElement)&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](t):t instanceof n)&&I(!0)}),[]);return(0,a.jsx)(a.Fragment,{children:j?(0,a.jsxs)(f.Kq,{as:"form",align:"center",onSubmit:function(e){e.preventDefault(),I(!1)},children:[(0,a.jsx)(y.II,{value:i,type:"color",onInput:T}),(0,a.jsx)(d.zx,{type:"submit",children:"OK"})]}):(0,a.jsx)(d.zx,A({border:"4px solid black",borderRadius:15},r,{bg:i,_hover:{background:i,opacity:.5},onClick:N,p:0,children:(0,a.jsx)(f.xv,{children:p})}))})};function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(e,t,n,r,o,a,u){try{var i=e[a](u),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(r,o)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,i=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||K(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||K(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){if(e){if("string"===typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}l()((function(){return n.e(127).then(n.t.bind(n,2138,23))}),{loadableGenerated:{webpack:function(){return[2138]}},ssr:!1});var z=function(){var e,t=(0,c.useState)(null),n=t[0],r=t[1],i=(0,c.useState)(3),l=(i[0],i[1]),y=(0,c.useState)(5),b=y[0],m=y[1],v=(0,c.useState)([]),p=v[0],h=v[1],g=(0,c.useCallback)((e=o().mark((function e(){var t,n,i,c,f;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=M,e.next=3,(0,u.kX)();case 3:if(e.t1=e.sent,t=(0,e.t0)(e.t1,1),n=t[0]){e.next=15;break}return e.t2=M,e.next=11,(0,u.zh)();case 11:e.t3=e.sent,i=(0,e.t2)(e.t3,1),n=i[0];case 15:n?(r(n),c=n.KEY_ROWS,f=n.KEY_COLUMNS,l(c),m(f),h(Array.from({length:c*f},(function(e,t){var r="min(".concat(100/f,"vw, ").concat(70/c,"vh)");return{lastRelease:0,type:"img",img:(0,a.jsx)(S,{h:r,w:r,index:t,deck:n},t),time:(0,a.jsx)(D,{h:r,w:r,index:t,deck:n},t)}})))):console.error("Couldn\u2019t get a Stream Deck");case 16:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function u(e){N(a,r,o,u,i,"next",e)}function i(e){N(a,r,o,u,i,"throw",e)}u(void 0)}))}),[]);return(0,c.useEffect)((function(){var e=function(e){var t=Date.now(),n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){R(e,t,n[t])}))}return e}({},p[e]);t-n.lastRelease<1e3&&(n.type="img"===n.type?"time":"img"),h((function(t){return B(t.slice(0,e)).concat([n],B(t.slice(e+1)))}))},t=function(e){p[e].lastRelease=Date.now()};return null===n||void 0===n||n.on("down",e),null===n||void 0===n||n.on("up",t),function(){null===n||void 0===n||n.off("down",e),null===n||void 0===n||n.off("up",t)}}),[p,n]),(0,a.jsxs)(f.xu,{children:[(0,a.jsx)(s.m$.header,{children:(0,a.jsx)(f.X6,{textAlign:"center",children:"Stream Deck Testing"})}),(0,a.jsxs)(s.m$.main,{children:[(0,a.jsx)(f.kC,{justify:"center",children:n?(0,a.jsxs)(f.xv,{my:5,children:["Connected: ",n.PRODUCT_NAME]}):(0,a.jsx)(d.zx,{my:5,onClick:g,children:"Connect"})}),(0,a.jsx)(f.MI,{columns:b,spacing:1,w:"fit-content",m:"auto",children:p.map((function(e){return e[e.type]}))})]}),(0,a.jsx)(s.m$.footer,{})]})}}},function(e){e.O(0,[261,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);