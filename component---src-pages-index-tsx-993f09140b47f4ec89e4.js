(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{245:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(0),i=n.n(c),o=n(18),s=n.n(o),l=(n(42),n(251)),u=n(246),m=n.n(u),f=n(240),d=n.n(f),p=s.a.bind(d.a),v=function(e){var t=e.className,n=e.queue,a=e.interval,r=e.style,o=Object(c.useState)(0),s=o[0],u=o[1],f=Object(c.useState)({width:0,height:0}),d=f[0],v=f[1],h=Object(c.useRef)(null);Object(c.useEffect)(function(){if(n.length>1){var e=performance.now();m()(function(){return b(e)})}},[s]);var b=function e(t){performance.now()-t>a?y():m()(function(){return e(t)})},y=function(){var e=(s+1)%n.length;u(e)},g=Object(l.b)(n[s],function(e){return e},{native:!0,from:{opacity:0,transform:"translate3d(0,100%,0)"},enter:{opacity:1,transform:"translate3d(0,0%,0)"},leave:{opacity:0,transform:"translate3d(0,-50%,0)"},onFrame:function(e,t){var a=n[s];if(a&&a===e&&"enter"===t){var r=h.current.offsetWidth,c=h.current.offsetHeight;v({width:r,height:c})}}});return i.a.createElement("div",{className:p(t,"container"),style:Object.assign({},r,d)},g.map(function(e){var t=e.item,n=e.props,a=e.key;return i.a.createElement(l.a.div,{ref:h,key:a,className:p("item"),style:n},t)}))};v.defaultProps={queue:[],interval:1e3};var h=v,b=n(241),y=n.n(b),g=s.a.bind(y.a),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:g("container")},i.a.createElement("div",{className:g("hellojs")},i.a.createElement("span",{className:g("hello")},"hello,"),i.a.createElement(h,{interval:3e3,className:g("loop"),queue:["JS","Jusung","Jason","Javascript","JSON"]})))},t}(c.Component),N=n(40),w=n(250),j=n(249),O=n(242),x=n.n(O),J=s.a.bind(x.a),S=function(){var e,t=Object(c.useState)(),n=t[0],a=t[1],r=Object(j.useSpring)(function(){return{xy:[0,0],config:{mass:1,tension:475,friction:10},onRest:function(e){var t=e.xy;0===t[0]&&0===t[1]&&a("")}}}),o=r[0].xy,s=r[1],l=Object(w.a)(function(e){var t=e.down,n=e.delta;e.distance,e.xy;a(t?"down":"up");s({xy:t?n:[0,0]})});return i.a.createElement(j.animated.div,Object.assign({},l(),{className:J("mochi",(e={},e[n]=n,e)),style:{transform:o.interpolate(function(e,t){return"translate3d("+e+"px,"+t+"px,0)"}),cursor:"down"===n?"grabbing":"grab"}}))},k=n(243),q=n.n(k),M=s.a.bind(q.a),C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:M("topSection")},i.a.createElement("div",{className:M("left")},i.a.createElement(E,null),i.a.createElement(N.a,{theme:"secondary",rounded:!0,className:M("aboutMe")},"About Me ",i.a.createElement("i",{className:"eva eva-chevron-right-outline"}))),i.a.createElement("div",{className:M("right")},i.a.createElement(S,null),i.a.createElement("p",{className:M("dragText")},i.a.createElement("i",{className:"eva eva-arrowhead-up-outline","aria-disabled":!0}),"(Drag Me 🙂)")))},t}(c.Component);t.default=C}}]);
//# sourceMappingURL=component---src-pages-index-tsx-993f09140b47f4ec89e4.js.map