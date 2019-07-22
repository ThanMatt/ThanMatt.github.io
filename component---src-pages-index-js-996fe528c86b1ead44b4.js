(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{194:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(202),o=(n(182),n(188),n(189),n(226)),l=n.n(o),s=function(e){return r.a.createElement("div",{className:"hero is-medium"},e.children,r.a.createElement("div",{className:"hero-body animated fadeIn"},r.a.createElement("label",{className:"label has-text-weight-light has-text-centered is-size-4"},"Welcome to my site"),r.a.createElement("div",{className:"icon-container"},r.a.createElement("span",{className:"icon is-large"},r.a.createElement("a",{href:"https://www.instagram.com/8tanilagan",title:"Instagram",className:"button is-white hvr-grow",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-instagram fa-2x"}))),r.a.createElement("span",{className:"icon is-large"},r.a.createElement("a",{href:"https://github.com/ThanMatt",className:"button is-white hvr-grow",title:"Github",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github fa-2x"})))),r.a.createElement("figure",{className:"image is-128x128",id:"cat"},r.a.createElement("img",{src:l.a,alt:"cat gif"}))))},c=n(198);n(190),n(191),t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:"Home"}),r.a.createElement(s,null,r.a.createElement(i.a,null)))}},195:function(e,t,n){var a;e.exports=(a=n(200))&&a.default||a},197:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(58),o=n.n(i);n.d(t,"a",function(){return o.a});n(195),n(7),r.a.createContext({})},198:function(e,t,n){"use strict";var a=n(199),r=n(0),i=n.n(r),o=n(204),l=n.n(o);function s(e){var t=e.description,n=e.lang,r=e.meta,o=e.title,s=a.data.site,c=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},199:function(e){e.exports={data:{site:{siteMetadata:{title:"Aethan Ilagan",description:"Welcome to my website!",author:"Aethan Ilagan"}}}}},200:function(e,t,n){"use strict";n.r(t);n(16);var a=n(0),r=n.n(a),i=n(84);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},202:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(203),o=n.n(i),l=n(197);n(182),n(183);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("label",{className:"title navbar-item has-text-weight-light"},"AethanIlagan"))),r.a.createElement(o.a,null,r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(l.a,{to:"/",activeStyle:{color:"blue"},className:"subtitle navbar-item is-right has-text-weight-light"},"Home"),r.a.createElement(l.a,{to:"/blog",activeStyle:{color:"blue"},greedyActive:!0,className:"subtitle navbar-item is-right has-text-weight-light"},"Blog"),r.a.createElement(l.a,{to:"/photos",activeStyle:{color:"blue"},className:"subtitle navbar-item is-right has-text-weight-light"},"Photos"),r.a.createElement(l.a,{to:"/404",className:"subtitle navbar-item is-right has-text-weight-light"},"Archive")))))}},203:function(e,t,n){"use strict";n(123),n(16),Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),o=p(i),l=p(n(59)),s=p(n(211)),c=p(n(205)),u=p(n(208));function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}var f=function(){},h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e){return n.inner=e},n.setHeightOffset=function(){n.setState({height:n.inner?n.inner.offsetHeight:""}),n.resizeTicking=!1},n.getScrollY=function(){return void 0!==n.props.parent().pageYOffset?n.props.parent().pageYOffset:void 0!==n.props.parent().scrollTop?n.props.parent().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},n.getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},n.getDocumentHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,e.clientHeight,t.clientHeight)},n.getElementPhysicalHeight=function(e){return Math.max(e.offsetHeight,e.clientHeight)},n.getElementHeight=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},n.getScrollerPhysicalHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getViewportHeight():n.getElementPhysicalHeight(e)},n.getScrollerHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getDocumentHeight():n.getElementHeight(e)},n.isOutOfBound=function(e){var t=e<0,a=n.getScrollerPhysicalHeight(),r=n.getScrollerHeight();return t||e+a>r},n.handleScroll=function(){n.scrollTicking||(n.scrollTicking=!0,(0,c.default)(n.update))},n.handleResize=function(){n.resizeTicking||(n.resizeTicking=!0,(0,c.default)(n.setHeightOffset))},n.unpin=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned",animation:!0,state:"unpinned"})},n.unpinSnap=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned headroom-disable-animation",animation:!1,state:"unpinned"})},n.pin=function(){n.props.onPin(),n.setState({translateY:0,className:"headroom headroom--pinned",animation:!0,state:"pinned"})},n.unfix=function(){n.props.onUnfix(),n.setState({translateY:0,className:"headroom headroom--unfixed headroom-disable-animation",animation:!1,state:"unfixed"})},n.update=function(){if(n.currentScrollY=n.getScrollY(),!n.isOutOfBound(n.currentScrollY)){var e=(0,u.default)(n.lastKnownScrollY,n.currentScrollY,n.props,n.state).action;"pin"===e?n.pin():"unpin"===e?n.unpin():"unpin-snap"===e?n.unpinSnap():"unfix"===e&&n.unfix()}n.lastKnownScrollY=n.currentScrollY,n.scrollTicking=!1},n.currentScrollY=0,n.lastKnownScrollY=0,n.scrollTicking=!1,n.resizeTicking=!1,n.state={state:"unfixed",translateY:0,className:"headroom headroom--unfixed"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"componentDidMount",value:function(){this.setHeightOffset(),this.props.disable||(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"componentWillReceiveProps",value:function(e){e.disable&&!this.props.disable?(this.unfix(),this.props.parent().removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)):!e.disable&&this.props.disable&&(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,s.default)(this.props,e)||!(0,s.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.setHeightOffset()}},{key:"componentWillUnmount",value:function(){this.props.parent().removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this.props,t=e.className,n=d(e,["className"]);delete n.onUnpin,delete n.onPin,delete n.onUnfix,delete n.disableInlineStyles,delete n.disable,delete n.parent,delete n.children,delete n.upTolerance,delete n.downTolerance,delete n.pinStart,delete n.calcHeightOnResize;var r=n.style,i=n.wrapperStyle,l=d(n,["style","wrapperStyle"]),s={position:this.props.disable||"unfixed"===this.state.state?"relative":"fixed",top:0,left:0,right:0,zIndex:1,WebkitTransform:"translate3D(0, "+this.state.translateY+", 0)",MsTransform:"translate3D(0, "+this.state.translateY+", 0)",transform:"translate3D(0, "+this.state.translateY+", 0)"},c=this.state.className;this.state.animation&&(s=a({},s,{WebkitTransition:"all .2s ease-in-out",MozTransition:"all .2s ease-in-out",OTransition:"all .2s ease-in-out",transition:"all .2s ease-in-out"}),c+=" headroom--scrolled"),s=this.props.disableInlineStyles?r:a({},s,r);var u=a({},i,{height:this.state.height?this.state.height:null}),p=t?t+" headroom-wrapper":"headroom-wrapper";return o.default.createElement("div",{style:u,className:p},o.default.createElement("div",a({ref:this.setRef},l,{style:s,className:c}),this.props.children))}}]),t}();h.propTypes={className:l.default.string,parent:l.default.func,children:l.default.any.isRequired,disableInlineStyles:l.default.bool,disable:l.default.bool,upTolerance:l.default.number,downTolerance:l.default.number,onPin:l.default.func,onUnpin:l.default.func,onUnfix:l.default.func,wrapperStyle:l.default.object,pinStart:l.default.number,style:l.default.object,calcHeightOnResize:l.default.bool},h.defaultProps={parent:function(){return window},disableInlineStyles:!1,disable:!1,upTolerance:5,downTolerance:0,onPin:f,onUnpin:f,onUnfix:f,wrapperStyle:{},pinStart:0,calcHeightOnResize:!0},t.default=h},205:function(e,t,n){(function(t){for(var a=n(206),r="undefined"==typeof window?t:window,i=["moz","webkit"],o="AnimationFrame",l=r["request"+o],s=r["cancel"+o]||r["cancelRequest"+o],c=0;!l&&c<i.length;c++)l=r[i[c]+"Request"+o],s=r[i[c]+"Cancel"+o]||r[i[c]+"CancelRequest"+o];if(!l||!s){var u=0,p=0,d=[];l=function(e){if(0===d.length){var t=a(),n=Math.max(0,1e3/60-(t-u));u=n+t,setTimeout(function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return d.push({handle:++p,callback:e,cancelled:!1}),p},s=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return l.call(r,e)},e.exports.cancel=function(){s.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=l,e.cancelAnimationFrame=s}}).call(this,n(122))},206:function(e,t,n){(function(t){(function(){var n,a,r,i,o,l;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},a=t.hrtime,i=(n=function(){var e;return 1e9*(e=a())[0]+e[1]})(),l=1e9*t.uptime(),o=i-l):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(this,n(207))},207:function(e,t){var n,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var s,c=[],u=!1,p=-1;function d(){u&&s&&(u=!1,s.length?c=s.concat(c):p=-1,c.length&&f())}function f(){if(!u){var e=l(d);u=!0;for(var t=c.length;t;){for(s=c,c=[];++p<t;)s&&s[p].run();p=-1,t=c.length}s=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||u||l(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=t>=e?"down":"up",i=Math.abs(t-e);return n.disable?{action:"none",scrollDirection:r,distanceScrolled:i}:t<=n.pinStart&&"unfixed"!==a.state?{action:"unfix",scrollDirection:r,distanceScrolled:i}:t<=a.height&&"down"===r&&"unfixed"===a.state?{action:"none",scrollDirection:r,distanceScrolled:i}:t>a.height+n.pinStart&&"down"===r&&"unfixed"===a.state?{action:"unpin-snap",scrollDirection:r,distanceScrolled:i}:"down"===r&&["pinned","unfixed"].indexOf(a.state)>=0&&t>a.height+n.pinStart&&i>n.downTolerance?{action:"unpin",scrollDirection:r,distanceScrolled:i}:"up"===r&&i>n.upTolerance&&["pinned","unfixed"].indexOf(a.state)<0?{action:"pin",scrollDirection:r,distanceScrolled:i}:"up"===r&&t<=a.height&&["pinned","unfixed"].indexOf(a.state)<0?{action:"pin",scrollDirection:r,distanceScrolled:i}:{action:"none",scrollDirection:r,distanceScrolled:i}}},226:function(e,t,n){e.exports=n.p+"static/cat-c79f228e19a0bba313fc3520ec7f61cd.gif"}}]);
//# sourceMappingURL=component---src-pages-index-js-996fe528c86b1ead44b4.js.map