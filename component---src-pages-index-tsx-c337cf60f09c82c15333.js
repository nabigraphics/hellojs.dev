(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{249:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(20),c=n.n(s),u=n(60),l=(n(32),n(85)),v=n(128),f=n.n(v),d=n(244),p=n.n(d),m=c.a.bind(p.a),h=function(e){var t=e.className,n=e.queue,a=e.interval,r=e.style,s=Object(o.useState)(0),c=s[0],u=s[1],v=Object(o.useState)({width:0,height:0}),d=v[0],p=v[1],h=Object(o.useRef)(null),y=Object(o.useRef)(null);Object(o.useEffect)(function(){if(n.length>1){var e=performance.now();y.current=f()(function(){return w(e)})}return function(){f.a.cancel(y.current)}},[c]);var w=function e(t){performance.now()-t>a?b():y.current=f()(function(){return e(t)})},b=function(){var e=(c+1)%n.length;u(e)},g=Object(l.useTransition)(n[c],function(e){return e},{native:!0,from:{opacity:0,transform:"translate3d(0,100%,0)"},enter:{opacity:1,transform:"translate3d(0,0%,0)"},leave:{opacity:0,transform:"translate3d(0,-50%,0)"},onFrame:function(e,t){var a=n[c];if(a&&a===e&&"enter"===t){var r=h.current.offsetWidth,o=h.current.offsetHeight;p({width:r,height:o})}}});return i.a.createElement("div",{className:m(t,"container"),style:Object.assign({},r,d)},g.map(function(e){var t=e.item,n=e.props,a=e.key;return i.a.createElement(l.animated.div,{ref:h,key:a,className:m("item"),style:n},t)}))};h.defaultProps={queue:[],interval:1e3};var y=h,w=n(245),b=n.n(w),g=c.a.bind(b.a),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:g("container")},i.a.createElement("div",{className:g("hellojs")},i.a.createElement("span",{className:g("hello")},"hello,"),i.a.createElement(y,{interval:3e3,className:g("loop"),queue:["JS","Jusung","Jason","Javascript","JSON"]})))},t}(o.Component),N=n(49);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var L="touchmove",x="touchend",A="mousemove",S="mouseup",M={touch:!0,mouse:!0,passive:{passive:!0},onAction:void 0,onDown:void 0,onUp:void 0,onMove:void 0},D={event:void 0,args:void 0,temp:void 0,target:void 0,time:void 0,xy:[0,0],delta:[0,0],initial:[0,0],previous:[0,0],direction:[0,0],local:[0,0],lastLocal:[0,0],velocity:0,distance:0,down:!1,first:!0,shiftKey:!1};function J(e,t,n){void 0===t&&(t={});var a=function(n,a){e(function(e){var r=O({},e,{down:!1,first:!1}),o=t.onAction&&t.onAction(r);return t.onUp&&t.onUp(r),O({},r,{event:n,shiftKey:a,lastLocal:e.local,temp:o||r.temp})})},r=function(n){var a=n.touches?n.touches[0]:n,r=a.pageX,o=a.pageY,i=a.shiftKey;e(function(e){var a=Date.now(),s=r-e.xy[0],c=o-e.xy[1],u=r-e.initial[0],l=o-e.initial[1],v=Math.sqrt(u*u+l*l),f=Math.sqrt(s*s+c*c),d=1/(f||1),p=O({},e,{event:n,time:a,shiftKey:i,xy:[r,o],delta:[u,l],local:[e.lastLocal[0]+r-e.initial[0],e.lastLocal[1]+o-e.initial[1]],velocity:f/(a-e.time),distance:v,direction:[s*d,c*d],previous:e.xy,first:!1}),m=t.onAction&&t.onAction(p);return t.onMove&&t.onMove(p),O({},p,{temp:m||p.temp})})},o=function(o){var c,u,l,v,f,d;t.mouse&&(window.addEventListener(A,r,t.passive),window.addEventListener(S,s,t.passive)),t.touch&&(window.addEventListener(L,r,t.passive),window.addEventListener(x,s,t.passive)),u=(c=o).touches?c.touches[0]:c,l=u.target,v=u.pageX,f=u.pageY,d=u.shiftKey,e(function(e){var r=e.lastLocal||D.lastLocal,o=O({},D,{event:c,target:l,args:n,lastLocal:r,shiftKey:d,local:r,xy:[v,f],initial:[v,f],previous:[v,f],down:!0,time:Date.now(),cancel:function(){i(),requestAnimationFrame(function(){return a(c)})}}),s=t.onAction&&t.onAction(o);return t.onDown&&t.onDown(o),O({},o,{temp:s})})},i=function(){t.mouse&&(window.removeEventListener(A,r,t.passive),window.removeEventListener(S,s,t.passive)),t.touch&&(window.removeEventListener(L,r,t.passive),window.removeEventListener(x,s,t.passive))},s=function(e){var t=e.shiftKey;i(),a(e,t)},c={},u=t.passive.capture?"Capture":"";return t.mouse&&(c["onMouseDown"+u]=o),t.touch&&(c["onTouchStart"+u]=o),c}var K=function(e){var t,n;function a(t){var n;(n=e.call(this,t)||this).state=D;var a=n.setState.bind(j(j(n)));return t.onAction&&(n._state=D,a=function(e){return n._state=e(n._state)}),n.handlers=J(a,t),n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.style,n=e.children,a=e.className;return i.a.createElement("div",O({},this.handlers,{style:O({display:"contents"},t),className:a}),n(this.state))},a}(i.a.Component);K.defaultProps=M;var _=n(246),q=n.n(_),k=c.a.bind(q.a),C=function(){var e,t=Object(o.useState)(),n=t[0],a=t[1],r=Object(l.useSpring)(function(){return{xy:[0,0],config:{mass:1,tension:475,friction:10},onRest:function(e){var t=e.xy;0===t[0]&&0===t[1]&&a("")}}}),s=r[0].xy,c=r[1],u=function(e){var t=i.a.useState(D),n=t[0],a=t[1],r=i.a.useRef(D);"function"==typeof e&&(e={onAction:e}),e=O({},M,e);var o=i.a.useState(function(){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return J(e.onAction?function(e){return r.current=e(r.current)}:a,e,n)}})[0];return e.onAction?o:[o,n]}(function(e){var t=e.down,n=e.delta;e.distance,e.xy;a(t?"down":"up");c({xy:t?n:[0,0]})});return i.a.createElement(l.animated.div,Object.assign({},u(),{className:k("mochi",(e={},e[n]=n,e)),style:{transform:s.interpolate(function(e,t){return"translate3d("+e+"px,"+t+"px,0)"}),cursor:"down"===n?"grabbing":"grab"}}))},R=n(247),P=n.n(R),T=c.a.bind(P.a),U=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:T("topSection")},i.a.createElement("div",{className:T("left")},i.a.createElement(E,null),i.a.createElement(N.a,{onClick:function(){return Object(u.b)("/about")},theme:"secondary",rounded:!0,className:T("aboutMe")},"About Me ",i.a.createElement("i",{className:"eva eva-chevron-right-outline"}))),i.a.createElement("div",{className:T("right")},i.a.createElement(C,null),i.a.createElement("p",{className:T("dragText")},i.a.createElement("i",{className:"eva eva-arrowhead-up-outline","aria-disabled":!0}),"(Drag Me 🙂)")))},t}(o.Component);t.default=U}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c337cf60f09c82c15333.js.map