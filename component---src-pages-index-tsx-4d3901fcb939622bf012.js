(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{194:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(0),i=n.n(c),s=n(10),o=n.n(s),l=(n(39),n(195)),u=n(196),m=n.n(u),f=n(189),d=n.n(f),p=o.a.bind(d.a),v=function(e){var t=e.className,n=e.queue,a=e.interval,r=e.style,s=Object(c.useState)(0),o=s[0],u=s[1],f=Object(c.useState)({width:0,height:0}),d=f[0],v=f[1],h=Object(c.useRef)(null);Object(c.useEffect)(function(){if(n.length>1){var e=performance.now();m()(function(){return b(e)})}},[o]);var b=function e(t){performance.now()-t>a?y():m()(function(){return e(t)})},y=function(){var e=(o+1)%n.length;u(e)},g=Object(l.useTransition)(n[o],function(e){return e},{native:!0,from:{opacity:0,transform:"translate3d(0,100%,0)"},enter:{opacity:1,transform:"translate3d(0,0%,0)"},leave:{opacity:0,transform:"translate3d(0,-50%,0)"},onFrame:function(e,t){var a=n[o];if(a&&a===e&&"enter"===t){var r=h.current.offsetWidth,c=h.current.offsetHeight;v({width:r,height:c})}}});return i.a.createElement("div",{className:p(t,"container"),style:Object.assign({},r,d)},g.map(function(e){var t=e.item,n=e.props,a=e.key;return i.a.createElement(l.animated.div,{ref:h,key:a,className:p("item"),style:n},t)}))};v.defaultProps={queue:[],interval:1e3};var h=v,b=n(190),y=n.n(b),g=o.a.bind(y.a),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:g("container")},i.a.createElement("div",{className:g("hellojs")},i.a.createElement("span",{className:g("hello")},"hello,"),i.a.createElement(h,{interval:3e3,className:g("loop"),queue:["JS","Jusung","Jason","Javascript","JSON"]})))},t}(c.Component),N=n(37),w=n(199),j=n(191),O=n.n(j),x=o.a.bind(O.a),J=function(){var e,t=Object(c.useState)(),n=t[0],a=t[1],r=Object(l.useSpring)(function(){return{xy:[0,0],config:{mass:1,tension:475,friction:10},onRest:function(e){var t=e.xy;0===t[0]&&0===t[1]&&a("")}}}),s=r[0].xy,o=r[1],u=Object(w.a)(function(e){var t=e.down,n=e.delta;e.distance,e.xy;a(t?"down":"up");o({xy:t?n:[0,0]})});return i.a.createElement(l.animated.div,Object.assign({},u(),{className:x("mochi",(e={},e[n]=n,e)),style:{transform:s.interpolate(function(e,t){return"translate3d("+e+"px,"+t+"px,0)"}),cursor:"down"===n?"grabbing":"grab"}}))},S=n(192),k=n.n(S),q=o.a.bind(k.a),M=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:q("topSection")},i.a.createElement("div",{className:q("left")},i.a.createElement(E,null),i.a.createElement(N.a,{theme:"secondary",rounded:!0,className:q("aboutMe")},"About Me ",i.a.createElement("i",{className:"eva eva-chevron-right-outline"}))),i.a.createElement("div",{className:q("right")},i.a.createElement(J,null),i.a.createElement("p",{className:q("dragText")},i.a.createElement("i",{className:"eva eva-arrowhead-up-outline","aria-disabled":!0}),"(Drag Me 🙂)")))},t}(c.Component);t.default=M}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4d3901fcb939622bf012.js.map