(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{195:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(194),function(e){var t="https://instagram.com/p/"+e.photo.id;return r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"card",id:"ig-card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:e.photo.preview,id:"img",alt:e.photo.caption})),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-5"},e.photo.caption),r.a.createElement("p",{className:"subtitle is-6"},"@",e.photo.username))))))))}),o=a(204),c=a(203),s=a(200);a.d(t,"photosQuery",function(){return m});var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.blogTitle,a=e.allInstaNode.edges;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(c.a,{location:this.props.location,title:t},r.a.createElement(s.a,{title:"Photos",description:"Thanmatt's instagram photos!"}),r.a.createElement("div",{className:"columns is-centered is-multiline"},a.map(function(e,t){var a=e.node;return r.a.createElement("div",{className:"column is-6",key:t},r.a.createElement(i,{photo:a}))}))))},n}(r.a.Component),m=(t.default=l,"1381763607")},197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(58),o=a.n(i);a.d(t,"a",function(){return o.a});a(198),a(7),r.a.createContext({})},198:function(e,t,a){var n;e.exports=(n=a(202))&&n.default||n},199:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return l});var n=a(211),r=a.n(n),i=a(212),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var s=c.rhythm,l=c.scale},200:function(e,t,a){"use strict";var n=a(201),r=a(0),i=a.n(r),o=a(209),c=a.n(o);function s(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,s=n.data.site,l=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},201:function(e){e.exports={data:{site:{siteMetadata:{title:"Aethan Ilagan",description:"Welcome to my website!",author:"Aethan Ilagan"}}}}},202:function(e,t,a){"use strict";a.r(t);a(17);var n=a(0),r=a.n(n),i=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},203:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(199);var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(24),padding:Object(i.a)(1.5)+" "+Object(i.a)(.75)}},r.a.createElement("main",{className:"animated fadeIn faster"},e))},n}(r.a.Component);t.a=o},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(197),o=a(213),c=a.n(o),s=a(214);a(182),a(183);t.a=function(){var e=Object(s.a)(c.a).withConfig({displayName:"NavBar__StyledScrollTop",componentId:"bl7r5v-0"})(["border-color:#707070;border-radius:15px;border-width:1px;:hover{background:#dbdbdb;color:black;}"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(e,{distance:500,className:"has-text-weight-light is-5"}),r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("label",{className:"title navbar-item has-text-weight-light"},"AethanIlagan"))),r.a.createElement("nav",{className:"navbar is-transparent"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(i.a,{to:"/",activeStyle:{color:"blue"},className:"subtitle navbar-item is-right has-text-weight-light"},"Home"),r.a.createElement(i.a,{to:"/blog",activeStyle:{color:"blue"},partiallyActive:!0,className:"subtitle navbar-item is-right has-text-weight-light"},"Blog"),r.a.createElement(i.a,{to:"/photos",activeStyle:{color:"blue"},className:"subtitle navbar-item is-right has-text-weight-light"},"Photos"),r.a.createElement(i.a,{to:"/404",className:"subtitle navbar-item is-right has-text-weight-light"},"Archive"))))}}}]);
//# sourceMappingURL=component---src-pages-photos-js-4336c1402b443844e1db.js.map