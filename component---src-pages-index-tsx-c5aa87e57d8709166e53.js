(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{172:function(e,t,n){"use strict";n.r(t);var r=n(5),o=n.n(r),a=n(0),i=n.n(a),c=n(9),u=n.n(c),s=n(39),l=(n(15),n(40)),f=n(194),p=n.n(f),v=n(167),m=n.n(v),d=u.a.bind(m.a),h=function(e){var t=e.className,n=e.queue,r=e.interval,o=e.style,c=Object(a.useState)(0),u=c[0],s=c[1],f=Object(a.useState)({width:0,height:0}),v=f[0],m=f[1],h=Object(a.useRef)(null),w=Object(a.useRef)(null);Object(a.useEffect)(function(){if(n.length>1){var e=performance.now();w.current=p()(function(){return y(e)})}return function(){p.a.cancel(w.current)}},[u]);var y=function e(t){performance.now()-t>r?g():w.current=p()(function(){return e(t)})},g=function(){var e=(u+1)%n.length;s(e)},b=Object(l.useTransition)(n[u],function(e){return e},{native:!0,from:{opacity:0,transform:"translate3d(0,100%,0)"},enter:{opacity:1,transform:"translate3d(0,0%,0)"},leave:{opacity:0,transform:"translate3d(0,-50%,0)"},onFrame:function(e,t){var r=n[u];if(r&&r===e&&"enter"===t){var o=h.current.offsetWidth,a=h.current.offsetHeight;m({width:o,height:a})}}});return i.a.createElement("div",{className:d(t,"container"),style:Object.assign({},o,v)},b.map(function(e){var t=e.item,n=e.props,r=e.key;return i.a.createElement(l.animated.div,{ref:h,key:r,className:d("item"),style:n},t)}))};h.defaultProps={queue:[],interval:1e3};var w=h,y=n(168),g=n.n(y),b=u.a.bind(g.a),E=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:b("container")},i.a.createElement("div",{className:b("hellojs")},i.a.createElement("span",{className:b("hello")},"hello,"),i.a.createElement(w,{interval:3e3,className:b("loop"),queue:["JS","Jusung","Jason","Javascript","JSON"]})))},t}(a.Component),x=n(27);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var A="touchmove",N="touchend",O="mousemove",j="mouseup",D={touch:!0,mouse:!0,passive:{passive:!0},onAction:void 0,onDown:void 0,onUp:void 0,onMove:void 0},q={event:void 0,args:void 0,temp:void 0,target:void 0,time:void 0,xy:[0,0],delta:[0,0],initial:[0,0],previous:[0,0],direction:[0,0],local:[0,0],lastLocal:[0,0],velocity:0,distance:0,down:!1,first:!0,shiftKey:!1};function M(e,t,n){void 0===t&&(t={});var r=function(n,r){e(function(e){var o=T({},e,{down:!1,first:!1}),a=t.onAction&&t.onAction(o);return t.onUp&&t.onUp(o),T({},o,{event:n,shiftKey:r,lastLocal:e.local,temp:a||o.temp})})},o=function(n){var r=n.touches?n.touches[0]:n,o=r.pageX,a=r.pageY,i=r.shiftKey;e(function(e){var r=Date.now(),c=o-e.xy[0],u=a-e.xy[1],s=o-e.initial[0],l=a-e.initial[1],f=Math.sqrt(s*s+l*l),p=Math.sqrt(c*c+u*u),v=1/(p||1),m=T({},e,{event:n,time:r,shiftKey:i,xy:[o,a],delta:[s,l],local:[e.lastLocal[0]+o-e.initial[0],e.lastLocal[1]+a-e.initial[1]],velocity:p/(r-e.time),distance:f,direction:[c*v,u*v],previous:e.xy,first:!1}),d=t.onAction&&t.onAction(m);return t.onMove&&t.onMove(m),T({},m,{temp:d||m.temp})})},a=function(a){var u,s,l,f,p,v;t.mouse&&(window.addEventListener(O,o,t.passive),window.addEventListener(j,c,t.passive)),t.touch&&(window.addEventListener(A,o,t.passive),window.addEventListener(N,c,t.passive)),s=(u=a).touches?u.touches[0]:u,l=s.target,f=s.pageX,p=s.pageY,v=s.shiftKey,e(function(e){var o=e.lastLocal||q.lastLocal,a=T({},q,{event:u,target:l,args:n,lastLocal:o,shiftKey:v,local:o,xy:[f,p],initial:[f,p],previous:[f,p],down:!0,time:Date.now(),cancel:function(){i(),requestAnimationFrame(function(){return r(u)})}}),c=t.onAction&&t.onAction(a);return t.onDown&&t.onDown(a),T({},a,{temp:c})})},i=function(){t.mouse&&(window.removeEventListener(O,o,t.passive),window.removeEventListener(j,c,t.passive)),t.touch&&(window.removeEventListener(A,o,t.passive),window.removeEventListener(N,c,t.passive))},c=function(e){var t=e.shiftKey;i(),r(e,t)},u={},s=t.passive.capture?"Capture":"";return t.mouse&&(u["onMouseDown"+s]=a),t.touch&&(u["onTouchStart"+s]=a),u}var S=function(e){var t,n;function r(t){var n;(n=e.call(this,t)||this).state=q;var r=n.setState.bind(L(L(n)));return t.onAction&&(n._state=q,r=function(e){return n._state=e(n._state)}),n.handlers=M(r,t),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.style,n=e.children,r=e.className;return i.a.createElement("div",T({},this.handlers,{style:T({display:"contents"},t),className:r}),n(this.state))},r}(i.a.Component);S.defaultProps=D;var k=n(169),R=n.n(k),C=u.a.bind(R.a),J=function(){var e,t=Object(a.useState)(),n=t[0],r=t[1],o=Object(l.useSpring)(function(){return{xy:[0,0],config:{mass:1,tension:475,friction:10},onRest:function(e){var t=e.xy;0===t[0]&&0===t[1]&&r("")}}}),c=o[0].xy,u=o[1],s=function(e){var t=i.a.useState(q),n=t[0],r=t[1],o=i.a.useRef(q);"function"==typeof e&&(e={onAction:e}),e=T({},D,e);var a=i.a.useState(function(){return function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return M(e.onAction?function(e){return o.current=e(o.current)}:r,e,n)}})[0];return e.onAction?a:[a,n]}(function(e){var t=e.down,n=e.delta;e.distance,e.xy;r(t?"down":"up");u({xy:t?n:[0,0]})});return i.a.createElement(l.animated.div,Object.assign({},s(),{className:C("mochi",(e={},e[n]=n,e)),style:{transform:c.interpolate(function(e,t){return"translate3d("+e+"px,"+t+"px,0)"}),cursor:"down"===n?"grabbing":"grab"}}))},K=n(170),_=n.n(K),F=u.a.bind(_.a),P=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:F("topSection")},i.a.createElement("div",{className:F("left")},i.a.createElement(E,null),i.a.createElement(x.a,{onClick:function(){return Object(s.b)("/about")},theme:"secondary",rounded:!0,className:F("aboutMe")},"About Me ",i.a.createElement("i",{className:"eva eva-chevron-right-outline"}))),i.a.createElement("div",{className:F("right")},i.a.createElement(J,null),i.a.createElement("p",{className:F("dragText")},i.a.createElement("i",{className:"eva eva-arrowhead-up-outline","aria-disabled":!0}),"(Drag Me 🙂)")))},t}(a.Component);t.default=P},194:function(e,t,n){(function(t){for(var r=n(195),o="undefined"==typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",c=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],s=0;!c&&s<a.length;s++)c=o[a[s]+"Request"+i],u=o[a[s]+"Cancel"+i]||o[a[s]+"CancelRequest"+i];if(!c||!u){var l=0,f=0,p=[];c=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-l));l=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return c.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=c,e.cancelAnimationFrame=u}}).call(this,n(65))},195:function(e,t,n){(function(t){(function(){var n,r,o,a,i,c;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),c=1e9*t.uptime(),i=a-c):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(196))},196:function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,s=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&v())}function v(){if(!l){var e=c(p);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||l||c(v)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c5aa87e57d8709166e53.js.map