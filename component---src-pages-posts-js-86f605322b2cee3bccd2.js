(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,a){"use strict";a.r(t);a(52);var n=a(0),r=a.n(n),l=a(182),o=a(179),i=(a(216),a(152)),c=a(198),s=a(438),u=a.n(s),m=function(e){return r.a.createElement("div",{className:u.a.blogListItem},r.a.createElement(i.Link,{className:u.a.link,to:e.to},r.a.createElement(c.a,null,e.date),r.a.createElement("h2",{className:u.a.title},e.title),r.a.createElement("span",{className:u.a.excerpt},e.excerpt)))};a.d(t,"query",function(){return d});t.default=function(e){return r.a.createElement(l.a,null,r.a.createElement(o.a,null,e.data.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement(m,{to:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.date,excerpt:t.excerpt})})))};var d="4187023549"},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(151),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var s=a(160),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},160:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},161:function(e,t,a){e.exports={nav:"DesktopHeader-module--nav--2zrh7",navLeft:"DesktopHeader-module--nav-left--2TxDW",navCenter:"DesktopHeader-module--nav-center--ttWLF",navRight:"DesktopHeader-module--nav-right--2D3-i",home:"DesktopHeader-module--home--1UYi5",center:"DesktopHeader-module--center--26bDH"}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Secret Unspoken",tagline:"The secret most men have",description:"A blog discussing sexual addiction among men",gaTrackingId:"UA-127453671-1"}}}}},163:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(51),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},164:function(e,t,a){e.exports={navLink:"NavLink-module--nav-link--3_r93"}},167:function(e,t,a){e.exports={nav:"MobileHeader-module--nav--16cOU"}},169:function(e,t,a){e.exports={bottomNav:"MobileFooter-module--bottom-nav--DYFFf",selected:"MobileFooter-module--selected--2EPyE"}},172:function(e,t,a){e.exports={copyright:"CopyrightNotice-module--copyright--jOFQ3"}},174:function(e,t,a){e.exports={disclaimer:"GoogleAnalyticsDisclaimer-module--disclaimer--2qTBA"}},176:function(e,t,a){e.exports={layout:"Layout-module--layout--3AkVA"}},179:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(180),o=a.n(l),i=function(e){return r.a.createElement("div",{className:o.a.column,style:{maxWidth:e.maxWidth}},e.children)};i.defaultProps={maxWidth:500},t.a=i},180:function(e,t,a){e.exports={column:"Column-module--column--3xN4I"}},182:function(e,t,a){"use strict";var n=a(162),r=a(0),l=a.n(r),o=a(152),i=a(164),c=a.n(i),s=function(e){return l.a.createElement(o.Link,{className:c.a.navLink,to:e.to},e.children)},u=a(161),m=a.n(u),d=function(e){return l.a.createElement("nav",{className:m.a.nav},l.a.createElement("div",{className:m.a.navLeft}),l.a.createElement("div",{className:m.a.navCenter},l.a.createElement(o.Link,{to:"/",className:m.a.home},l.a.createElement("h1",{className:m.a.center},e.title),l.a.createElement("h4",{className:m.a.center},e.subtitle))),l.a.createElement("div",{className:m.a.navRight},l.a.createElement(s,{to:"/"},"Home"),l.a.createElement(s,{to:"/posts"},"Posts"),l.a.createElement(s,{to:"/me"},"Me")))},p=a(167),f=a.n(p),g=function(e){return l.a.createElement("nav",{className:f.a.nav},l.a.createElement(o.Link,{to:"/",className:m.a.home},l.a.createElement("h1",{className:m.a.center},e.title),l.a.createElement("h4",{className:m.a.center},e.subtitle)))},h=a(7),v=a.n(h),E=a(187),y=a.n(E),k=a(190),b=a.n(k),w=a(194),x=a.n(w),N=a(195),L=a.n(N),S=a(192),D=a.n(S),I=a(203),M=a(169),q=a.n(M),C=Object(I.a)(I.b,Object(I.d)(I.c),Object(I.e)("/")),P={home:0,posts:1,me:2},T=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={value:null},t.handleChange=function(e,a){t.setState({value:a})},t}v()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=C(this.props.location.pathname);this.setState({value:P[e]||0})},a.render=function(){return l.a.createElement(y.a,{className:q.a.bottomNav,value:this.state.value,onChange:this.handleChange,showLabels:!0},l.a.createElement(b.a,{classes:{selected:q.a.selected},label:"Home",icon:l.a.createElement(D.a,null),component:o.Link,to:"/"}),l.a.createElement(b.a,{classes:{selected:q.a.selected},label:"Posts",icon:l.a.createElement(x.a,null),component:o.Link,to:"/posts"}),l.a.createElement(b.a,{classes:{selected:q.a.selected},label:"Me",icon:l.a.createElement(L.a,null),component:o.Link,to:"/me"}))},t}(l.a.Component),U=a(196),F=a.n(U),H=a(172),O=a.n(H),A=function(e){return l.a.createElement("div",{className:O.a.copyright},"Secret Unspoken © ",(new Date).getFullYear())},R=a(174),j=a.n(R),B=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={redrawKey:0},t.key="ga-disable-"+t.props.gaTrackingId,t.redraw=function(){return t.setState({redrawKey:t.state.redrawKey+1})},t.toggle=function(e){e.preventDefault();var a=localStorage.getItem(t.key);localStorage.setItem(t.key,"true"===a?"false":"true"),t.redraw(),window[t.key]="true"===localStorage.getItem(t.key)},t}v()(t,e);var a=t.prototype;return a.componentDidMount=function(){window[this.key]=void 0!==localStorage.getItem(this.key)&&localStorage.getItem(this.key)},a.render=function(){return l.a.createElement("div",{key:this.state.redrawKey,className:j.a.disclaimer},l.a.createElement("pre",null,"This site uses Google Analytics. "),l.a.createElement("a",{href:"#",onClick:this.toggle},"true"===localStorage.getItem(this.key)?"Opt in.":"Opt out."))},t}(l.a.Component),G=a(13),K=a(178),Q=a.n(K),W=a(176),Y=a.n(W);t.a=function(e){return l.a.createElement(o.StaticQuery,{query:"688602459",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,null,l.a.createElement("title",null,t.site.siteMetadata.title),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Unica+One&text=Secret%20Unspoken",rel:"stylesheet"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Spectral|Karla",rel:"stylesheet"}),l.a.createElement("meta",{name:"Description",content:t.site.siteMetadata.description}),l.a.createElement("html",{lang:"en"})),l.a.createElement(Q.a,{smDown:!0},l.a.createElement(d,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.tagline})),l.a.createElement(Q.a,{mdUp:!0},l.a.createElement(g,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.tagline})),l.a.createElement("div",{className:Y.a.layout},e.children),l.a.createElement(A,null),window&&l.a.createElement(B,{gaTrackingId:t.site.siteMetadata.gaTrackingId}),l.a.createElement(Q.a,{mdUp:!0},l.a.createElement(G.Location,null,function(e){var t=e.location;return l.a.createElement(T,{location:t})})))},data:n})}},198:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(199),o=a.n(l),i=function(e){return r.a.createElement("span",{className:o.a.date},e.prefix,e.children)};i.defaultProps={prefix:""},t.a=i},199:function(e,t,a){e.exports={date:"DateOfPost-module--date--DJNDV"}},216:function(e,t,a){"use strict";a(229)("link",function(e){return function(t){return e(this,"a","href",t)}})},229:function(e,t,a){var n=a(6),r=a(16),l=a(25),o=/"/g,i=function(e,t,a,n){var r=String(l(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),i+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(i),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},438:function(e,t,a){e.exports={blogListItem:"BlogListItem-module--blog-list-item--1T4sV",date:"BlogListItem-module--date--2mU19",title:"BlogListItem-module--title--3e9YB",link:"BlogListItem-module--link--2XuP4"}}}]);
//# sourceMappingURL=component---src-pages-posts-js-86f605322b2cee3bccd2.js.map