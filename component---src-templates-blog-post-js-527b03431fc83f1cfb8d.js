(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{185:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});a(16);var r=a(0),i=a.n(r),n=a(197),s=a(209),o=a(201),l=a(198),c=a(196),d=a(202);var u=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,u=a.next;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,null),i.a.createElement(o.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("h1",{className:"subtitle is-5",style:{marginTop:Object(c.a)(1),marginBottom:0}},e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(c.b)(-.2),{display:"block",marginBottom:Object(c.a)(1)})},e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(c.a)(1)}}),i.a.createElement(s.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(n.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,u&&i.a.createElement(n.a,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →")))))},r}(i.a.Component);t.default=u;var f="2761936148"},195:function(e,t,a){var r;e.exports=(r=a(200))&&r.default||r},196:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(205),i=a.n(r),n=a(206),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new i.a(s.a);var l=o.rhythm,c=o.scale},197:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(58),s=a.n(n);a.d(t,"a",function(){return s.a});a(195),a(7),i.a.createContext({})},198:function(e,t,a){"use strict";var r=a(199),i=a(0),n=a.n(i),s=a(204),o=a.n(s);function l(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,l=r.data.site,c=t||l.siteMetadata.description;return n.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},199:function(e){e.exports={data:{site:{siteMetadata:{title:"Aethan Ilagan",description:"Welcome to my website!",author:"Aethan Ilagan"}}}}},200:function(e,t,a){"use strict";a.r(t);a(16);var r=a(0),i=a.n(r),n=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},201:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(196);var s=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(n.a)(24),padding:Object(n.a)(1.5)+" "+Object(n.a)(.75)}},i.a.createElement("main",{className:"animated fadeIn faster"},e))},r}(i.a.Component);t.a=s},202:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(207),s=a.n(n),o=a(197),l=a(208),c=a.n(l);a(182),a(183);t.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{distance:500,className:"has-text-weight-bold is-6"}),i.a.createElement("nav",{className:"navbar is-transparent"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("label",{className:"title navbar-item has-text-weight-light"},"AethanIlagan"))),i.a.createElement(s.a,null,i.a.createElement("nav",{className:"navbar is-transparent"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(o.a,{to:"/",activeStyle:{color:"blue"},className:"subtitle navbar-item is-right has-text-weight-light"},"Home"),i.a.createElement(o.a,{to:"/blog",activeStyle:{color:"blue"},partiallyActive:!0,className:"subtitle navbar-item is-right has-text-weight-light"},"Blog"),i.a.createElement(o.a,{to:"/photos",activeStyle:{color:"blue"},className:"subtitle navbar-item is-right has-text-weight-light"},"Photos"),i.a.createElement(o.a,{to:"/404",className:"subtitle navbar-item is-right has-text-weight-light"},"Archive")))))}},203:function(e,t,a){"use strict";a(210)("fixed",function(e){return function(){return e(this,"tt","","")}})},209:function(e,t,a){"use strict";a(203);var r=a(211),i=a(0),n=a.n(i),s=a(212),o=a.n(s),l=a(196);t.a=function(){var e=r.data,t=e.site.siteMetadata.author;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,t)," who lives in the Philippines."," ",n.a.createElement("div",null,n.a.createElement("span",{className:"icon is-large"},n.a.createElement("a",{href:"https://www.instagram.com/8tanilagan",title:"Instagram",className:"button is-white hvr-grow",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-instagram fa-2x"}))),n.a.createElement("span",{className:"icon is-large"},n.a.createElement("a",{href:"https://github.com/ThanMatt",className:"button is-white hvr-grow",title:"Github",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fab fa-github fa-2x"}))))))}},210:function(e,t,a){var r=a(5),i=a(8),n=a(36),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},211:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMFBP/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABhzbsA81dHf5xUBZ//8QAHxAAAgAFBQAAAAAAAAAAAAAAAgMAAQQSExARISIy/9oACAEBAAEFAnXkVjFaEvcSXknimMHLpTeajhn/xAAWEQEBAQAAAAAAAAAAAAAAAAAQQRH/2gAIAQMBAT8BmkP/xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAgEBPwEp/8QAHxAAAgECBwAAAAAAAAAAAAAAAAERAiIQITFRUmGB/9oACAEBAAY/AlRQ2XaThx7RbU/SGyCTLY//xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhMUFRYf/aAAgBAQABPyG6IK2S4O2jAxqEdrSFoteuMd4pzAvoeQZJVe55F2n/2gAMAwEAAgADAAAAEEP/AEH/xAAYEQEBAAMAAAAAAAAAAAAAAAABABARMf/aAAgBAwEBPxABjcdY/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhEP/aAAgBAgEBPxCqYwz/xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhMUFRccHR/9oACAEBAAE/EE49GZHWr2H7g7tTdQzkMWscTTlYRvjFBfHcBO55xkJzgOSbgA4TJqH2+2NOtBe6nzP/2Q==",width:50,height:50,src:"/static/c9cce62e2b5d88f068aa9eb7af33d499/0ed99/profile-pic.jpg",srcSet:"/static/c9cce62e2b5d88f068aa9eb7af33d499/0ed99/profile-pic.jpg 1x,\n/static/c9cce62e2b5d88f068aa9eb7af33d499/66b42/profile-pic.jpg 1.5x,\n/static/c9cce62e2b5d88f068aa9eb7af33d499/fc007/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Aethan Ilagan"}}}}},212:function(e,t,a){"use strict";a(28),a(24),a(12),a(62),a(125),a(203);var r=a(15);t.__esModule=!0,t.default=void 0;var i,n=r(a(61)),s=r(a(63)),o=r(a(126)),l=r(a(127)),c=r(a(0)),d=r(a(59)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),g=function(e){var t=u(e),a=f(t);return A[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function y(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)}).join("")+"<img "+c+s+o+a+r+t+n+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(R,(0,l.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},R=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,g=e.fluid,p=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,v=e.itemProp,w=e.loading,j=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:N?1:0,transition:I?"opacity "+h+"ms":"none"},o),L="boolean"==typeof m?"lightgray":m,Q={transitionDelay:h+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&Q,o,f),M={title:t,alt:this.state.isVisible?"":a,style:C,className:A};if(g){var T=g,z=T[0];return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),L&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&Q)}),z.base64&&c.default.createElement(B,{src:z.base64,spreadProps:M,imageVariants:T,generateSources:S}),z.tracedSVG&&c.default.createElement(B,{src:z.tracedSVG,spreadProps:M,imageVariants:T,generateSources:y}),this.state.isVisible&&c.default.createElement("picture",null,E(T),c.default.createElement(R,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:w},z,{imageVariants:T}))}}))}if(p){var P=p,k=P[0],V=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete V.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},L&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:L,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},I&&Q)}),k.base64&&c.default.createElement(B,{src:k.base64,spreadProps:M,imageVariants:P,generateSources:S}),k.tracedSVG&&c.default.createElement(B,{src:k.tracedSVG,spreadProps:M,imageVariants:P,generateSources:y}),this.state.isVisible&&c.default.createElement("picture",null,E(P),c.default.createElement(R,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,l.default)({alt:a,title:t,loading:w},k,{imageVariants:P}))}}))}return null},t}(c.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),O=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});N.propTypes={resolutions:I,sizes:O,fixed:d.default.oneOfType([I,d.default.arrayOf(I)]),fluid:d.default.oneOfType([O,d.default.arrayOf(O)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var L=N;t.default=L}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-527b03431fc83f1cfb8d.js.map