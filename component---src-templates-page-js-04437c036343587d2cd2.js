(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),o=a(182),l=a(179),i=a(198);a(75);t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement(i.a,{prefix:"Last Modified: "},t.frontmatter.date),r.a.createElement("h2",null,t.frontmatter.title),r.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t.html}})))};var c="844253289"},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(151),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var s=a(160),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},160:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},161:function(e,t,a){e.exports={nav:"DesktopHeader-module--nav--2zrh7",navLeft:"DesktopHeader-module--nav-left--2TxDW",navCenter:"DesktopHeader-module--nav-center--ttWLF",navRight:"DesktopHeader-module--nav-right--2D3-i",home:"DesktopHeader-module--home--1UYi5",center:"DesktopHeader-module--center--26bDH"}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Secret Unspoken",tagline:"The secret most men have",description:"A blog discussing sexual addiction among men",gaTrackingId:"UA-127453671-1"}}}}},163:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(51),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},164:function(e,t,a){e.exports={navLink:"NavLink-module--nav-link--3_r93"}},167:function(e,t,a){e.exports={nav:"MobileHeader-module--nav--16cOU"}},169:function(e,t,a){e.exports={bottomNav:"MobileFooter-module--bottom-nav--DYFFf",selected:"MobileFooter-module--selected--2EPyE"}},172:function(e,t,a){e.exports={copyright:"CopyrightNotice-module--copyright--jOFQ3"}},174:function(e,t,a){e.exports={disclaimer:"GoogleAnalyticsDisclaimer-module--disclaimer--2qTBA"}},176:function(e,t,a){e.exports={layout:"Layout-module--layout--3AkVA"}},179:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(180),l=a.n(o),i=function(e){return r.a.createElement("div",{className:l.a.column,style:{maxWidth:e.maxWidth}},e.children)};i.defaultProps={maxWidth:500},t.a=i},180:function(e,t,a){e.exports={column:"Column-module--column--3xN4I"}},182:function(e,t,a){"use strict";var n=a(162),r=a(0),o=a.n(r),l=a(152),i=a(164),c=a.n(i),s=function(e){return o.a.createElement(l.Link,{className:c.a.navLink,to:e.to},e.children)},u=a(161),m=a.n(u),d=function(e){return o.a.createElement("nav",{className:m.a.nav},o.a.createElement("div",{className:m.a.navLeft}),o.a.createElement("div",{className:m.a.navCenter},o.a.createElement(l.Link,{to:"/",className:m.a.home},o.a.createElement("h1",{className:m.a.center},e.title),o.a.createElement("h4",{className:m.a.center},e.subtitle))),o.a.createElement("div",{className:m.a.navRight},o.a.createElement(s,{to:"/"},"Home"),o.a.createElement(s,{to:"/posts"},"Posts"),o.a.createElement(s,{to:"/me"},"Me")))},p=a(167),f=a.n(p),h=function(e){return o.a.createElement("nav",{className:f.a.nav},o.a.createElement(l.Link,{to:"/",className:m.a.home},o.a.createElement("h1",{className:m.a.center},e.title),o.a.createElement("h4",{className:m.a.center},e.subtitle)))},v=a(7),g=a.n(v),E=a(187),y=a.n(E),k=a(190),b=a.n(k),w=a(194),x=a.n(w),N=a(195),D=a.n(N),L=a(192),S=a.n(L),M=a(203),O=a(169),q=a.n(O),C=Object(M.a)(M.b,Object(M.d)(M.c),Object(M.e)("/")),T={home:0,posts:1,me:2},H=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={value:null},t.handleChange=function(e,a){t.setState({value:a})},t}g()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=C(this.props.location.pathname);this.setState({value:T[e]||0})},a.render=function(){return o.a.createElement(y.a,{className:q.a.bottomNav,value:this.state.value,onChange:this.handleChange,showLabels:!0},o.a.createElement(b.a,{classes:{selected:q.a.selected},label:"Home",icon:o.a.createElement(S.a,null),component:l.Link,to:"/"}),o.a.createElement(b.a,{classes:{selected:q.a.selected},label:"Posts",icon:o.a.createElement(x.a,null),component:l.Link,to:"/posts"}),o.a.createElement(b.a,{classes:{selected:q.a.selected},label:"Me",icon:o.a.createElement(D.a,null),component:l.Link,to:"/me"}))},t}(o.a.Component),I=a(196),P=a.n(I),U=a(172),A=a.n(U),F=function(e){return o.a.createElement("div",{className:A.a.copyright},"Secret Unspoken © ",(new Date).getFullYear())},R=a(174),W=a.n(R),j=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={optOut:!1},t.key="ga-disable-"+t.props.gaTrackingId,t.initWindowVar=function(){return window[t.key]=void 0!==localStorage.getItem(t.key)&&"true"===localStorage.getItem(t.key)},t.toggle=function(e){e.preventDefault();var a=localStorage.getItem(t.key);localStorage.setItem(t.key,"true"===a?"false":"true");var n=t.initWindowVar();t.setState({optOut:n})},t}g()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.initWindowVar();this.setState({optOut:e})},a.render=function(){return o.a.createElement("div",{key:this.state.optOut,className:W.a.disclaimer},o.a.createElement("pre",null,"This site uses Google Analytics. "),o.a.createElement("a",{href:"/#",onClick:this.toggle},this.state.optOut?"Opt in.":"Opt out."))},t}(o.a.Component),G=a(13),Q=a(178),V=a.n(Q),J=a(176),Y=a.n(J);t.a=function(e){return o.a.createElement(l.StaticQuery,{query:"688602459",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(P.a,null,o.a.createElement("title",null,t.site.siteMetadata.title),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Unica+One&text=Secret%20Unspoken",rel:"stylesheet"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Spectral|Karla",rel:"stylesheet"}),o.a.createElement("meta",{name:"Description",content:t.site.siteMetadata.description}),o.a.createElement("html",{lang:"en"})),o.a.createElement(V.a,{smDown:!0},o.a.createElement(d,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.tagline})),o.a.createElement(V.a,{mdUp:!0},o.a.createElement(h,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.tagline})),o.a.createElement("div",{className:Y.a.layout},e.children),o.a.createElement(F,null),o.a.createElement(j,{gaTrackingId:t.site.siteMetadata.gaTrackingId}),o.a.createElement(V.a,{mdUp:!0},o.a.createElement(G.Location,null,function(e){var t=e.location;return o.a.createElement(H,{location:t})})))},data:n})}},198:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(199),l=a.n(o),i=function(e){return r.a.createElement("span",{className:l.a.date},e.prefix,e.children)};i.defaultProps={prefix:""},t.a=i},199:function(e,t,a){e.exports={date:"DateOfPost-module--date--DJNDV"}}}]);
//# sourceMappingURL=component---src-templates-page-js-04437c036343587d2cd2.js.map