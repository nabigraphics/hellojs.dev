(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{162:function(e,t,n){"use strict";n.r(t);var a,r=n(7),i=n.n(r),o=n(0),s=n.n(o),c=n(55),l=n.n(c),u=(n(32),n(77)),d=n.n(u);!function(e){e.Light="light",e.Dark="dark"}(a||(a={}));var m=a,h=n(156),p=n.n(h),f=l.a.bind(p.a),w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).renderButton=function(){var e=t.props,n=e.className,a=e.children,r=e.theme,i=e.disabled,o=e.href,c=e.target,l=e.onClick,u=d()(e,["className","children","theme","disabled","href","target","onClick"]);if(void 0!==o){var m=f("button",{href:o},n,r,{disabled:i});return s.a.createElement("a",Object.assign({href:o},u,{target:c,className:m}),a)}var h=f("button",n,r,{disabled:i});return s.a.createElement("button",{onClick:l,className:h},a)},t}return i()(t,e),t.prototype.render=function(){return this.renderButton()},t}(o.Component);w.defaultProps={theme:m.Light,disabled:!1};var v=w,b=n(157),g=n.n(b),N=l.a.bind(g.a),y=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:N("list")},s.a.createElement(v,{"aria-label":"github",href:"https://github.com/nabigraphics",target:"_blank",className:N("item")},s.a.createElement("i",{className:N("eva eva-github","icon"),"aria-disabled":!0})),s.a.createElement(v,{"aria-label":"twitter",href:"https://twitter.com/nabigraphics",target:"_blank",className:N("item")},s.a.createElement("i",{className:N("eva eva-twitter","icon"),"aria-disabled":!0})),s.a.createElement(v,{"aria-label":"linkedin",href:"https://www.linkedin.com/in/nabigraphics/",target:"_blank",className:N("item")},s.a.createElement("i",{className:N("eva eva-linkedin","icon"),"aria-disabled":!0})))},t}(o.Component),E=n(163),k=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),q=n(158),C=n.n(q),x=l.a.bind(C.a),A=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={index:0,width:0,height:0},t.tick=function(e,n){performance.now()-e>=n?(t.nextQueue(),k(function(){return t.tick(performance.now(),n)})):k(function(){return t.tick(e,n)})},t.nextQueue=function(){var e=t.props.queue,n=(t.state.index+1)%e.length;t.setState({index:n})},t.updateContainer=function(e,n,a){var r=t.props.queue[t.state.index];if(r&&r===e&&"enter"===n){var i=a.width,o=a.height;t.setState({width:i,height:o})}},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=this.props,n=t.interval;if(t.queue.length>1){var a=performance.now();k(function(){return e.tick(a,n)})}},n.render=function(){var e=this.props,t=e.className,n=e.queue,a=e.style,r=this.state,i=r.index,o=r.width,c=r.height;return n.length?s.a.createElement("div",{className:x(t,"container"),style:Object.assign({},a,{width:o,height:c})},s.a.createElement(E.Transition,{native:!0,items:n[i],update:function(e){return e},from:{opacity:0,transform:"translate3d(0,100%,0)"},enter:{opacity:1,transform:"translate3d(0,0%,0)",width:"auto",height:"auto"},leave:{opacity:0,transform:"translate3d(0,-50%,0)"},config:E.config.stiff,onFrame:this.updateContainer},function(e){return function(t){return s.a.createElement(E.animated.div,{onLoad:function(){return console.log("loaded!")},className:x("item"),style:t},e)}})):null},t}(o.Component);A.defaultProps={queue:[],interval:1e3};var J=A,F=n(159),R=n.n(F),S=l.a.bind(R.a),j=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:S("container")},s.a.createElement("div",{className:S("hellojs")},s.a.createElement("span",{className:S("hello")},"👋 hello,"),s.a.createElement(J,{interval:3e3,className:S("loop"),queue:["JS","Jusung","Jason","Javascript","JSON"]})))},t}(o.Component),L=n(160),O=n.n(L),_=l.a.bind(O.a),B=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return s.a.createElement("div",{className:_("container")},s.a.createElement(j,null),s.a.createElement(y,null))},t}(o.Component);t.default=B}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3c9b9de8bff914a5ba9a.js.map