(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var A=a(0),n=a.n(A),r=a(197),i=a(212),c=a(201),l=a(198),o=a(196),s=a(202);var m=function(e){var t,a;function A(){return e.apply(this,arguments)||this}return a=e,(t=A).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,A.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.blogTitle,a=e.allMarkdownRemark.edges;return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null),n.a.createElement(c.a,{location:this.props.location,title:t},n.a.createElement(l.a,{title:"Blog"}),n.a.createElement(i.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.a.createElement("div",{key:t.fields.slug},n.a.createElement("br",null),n.a.createElement("p",{className:"subtitle is-5",style:{marginBottom:Object(o.a)(.25)}},n.a.createElement(r.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),n.a.createElement("small",null,t.frontmatter.date),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))})))},A}(n.a.Component);t.default=m;var u="1623555389"},195:function(e,t,a){var A;e.exports=(A=a(200))&&A.default||A},196:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return o});var A=a(209),n=a.n(A),r=a(210),i=a.n(r);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new n.a(i.a);var l=c.rhythm,o=c.scale},197:function(e,t,a){"use strict";var A=a(0),n=a.n(A),r=a(58),i=a.n(r);a.d(t,"a",function(){return i.a});a(195),a(7),n.a.createContext({})},198:function(e,t,a){"use strict";var A=a(199),n=a(0),r=a.n(n),i=a(204),c=a.n(i);function l(e){var t=e.description,a=e.lang,n=e.meta,i=e.title,l=A.data.site,o=t||l.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:i},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:o}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},199:function(e){e.exports={data:{site:{siteMetadata:{title:"Aethan Ilagan",description:"Welcome to my website!",author:"Aethan Ilagan"}}}}},200:function(e,t,a){"use strict";a.r(t);a(16);var A=a(0),n=a.n(A),r=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},201:function(e,t,a){"use strict";var A=a(0),n=a.n(A),r=a(196);var i=function(e){var t,a;function A(){return e.apply(this,arguments)||this}return a=e,(t=A).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,A.prototype.render=function(){var e=this.props.children;return n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(r.a)(24),padding:Object(r.a)(1.5)+" "+Object(r.a)(.75)}},n.a.createElement("main",{className:"animated fadeIn faster"},e))},A}(n.a.Component);t.a=i},202:function(e,t,a){"use strict";var A=a(0),n=a.n(A),r=a(203),i=a.n(r),c=a(197);a(182),a(183);t.a=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar is-transparent"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement("label",{className:"title navbar-item has-text-weight-light"},"AethanIlagan"))),n.a.createElement(i.a,null,n.a.createElement("nav",{className:"navbar is-transparent"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement(c.a,{to:"/",activeStyle:{color:"blue"},className:"subtitle navbar-item is-right has-text-weight-light"},"Home"),n.a.createElement(c.a,{to:"/blog",activeStyle:{color:"blue"},className:"subtitle navbar-item is-right has-text-weight-light"},"Blog"),n.a.createElement(c.a,{to:"/photos",activeStyle:{color:"blue"},className:"subtitle navbar-item is-right has-text-weight-light"},"Photos"),n.a.createElement(c.a,{to:"/404",className:"subtitle navbar-item is-right has-text-weight-light"},"Archive")))))}},212:function(e,t,a){"use strict";a(213);var A=a(214),n=a(0),r=a.n(n),i=a(215),c=a.n(i),l=a(196);t.a=function(){var e=A.data,t=e.site.siteMetadata.author;return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},r.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.a.createElement("p",null,"Written by ",r.a.createElement("strong",null,t)," who lives in the Philippines."," ",r.a.createElement("div",null,r.a.createElement("span",{className:"icon is-large"},r.a.createElement("a",{href:"https://www.instagram.com/8tanilagan",title:"Instagram",className:"button is-white hvr-grow",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-instagram fa-2x"}))),r.a.createElement("span",{className:"icon is-large"},r.a.createElement("a",{href:"https://github.com/ThanMatt",className:"button is-white hvr-grow",title:"Github",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github fa-2x"}))))))}},214:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMFBP/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABhzbsA81dHf5xUBZ//8QAHxAAAgAFBQAAAAAAAAAAAAAAAgMAAQQSExARISIy/9oACAEBAAEFAnXkVjFaEvcSXknimMHLpTeajhn/xAAWEQEBAQAAAAAAAAAAAAAAAAAQQRH/2gAIAQMBAT8BmkP/xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAgEBPwEp/8QAHxAAAgECBwAAAAAAAAAAAAAAAAERAiIQITFRUmGB/9oACAEBAAY/AlRQ2XaThx7RbU/SGyCTLY//xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhMUFRYf/aAAgBAQABPyG6IK2S4O2jAxqEdrSFoteuMd4pzAvoeQZJVe55F2n/2gAMAwEAAgADAAAAEEP/AEH/xAAYEQEBAAMAAAAAAAAAAAAAAAABABARMf/aAAgBAwEBPxABjcdY/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhEP/aAAgBAgEBPxCqYwz/xAAdEAEBAAICAwEAAAAAAAAAAAABEQAhMUFRccHR/9oACAEBAAE/EE49GZHWr2H7g7tTdQzkMWscTTlYRvjFBfHcBO55xkJzgOSbgA4TJqH2+2NOtBe6nzP/2Q==",width:50,height:50,src:"/static/c9cce62e2b5d88f068aa9eb7af33d499/0ed99/profile-pic.jpg",srcSet:"/static/c9cce62e2b5d88f068aa9eb7af33d499/0ed99/profile-pic.jpg 1x,\n/static/c9cce62e2b5d88f068aa9eb7af33d499/66b42/profile-pic.jpg 1.5x,\n/static/c9cce62e2b5d88f068aa9eb7af33d499/fc007/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Aethan Ilagan"}}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-aacedc5fc02575ad8e18.js.map