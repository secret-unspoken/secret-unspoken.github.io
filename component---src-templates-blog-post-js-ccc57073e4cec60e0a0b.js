(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(181),l=a(178),i=a(197),c=a(349),s=a.n(c),u=a(7),m=a.n(u),d=a(377),p=a.n(d),f=a(353),h=a.n(f),v=a(355),E=a(200),g=a(369),y=a.n(g),b=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={copied:!1},t.handleCopy=function(){t.setState({copied:!0}),t.copyId=setTimeout(function(){return t.setState({copied:!1})},5e3)},t}m()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){clearTimeout(this.copyId)},a.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:h.a.container},r.a.createElement(v.CopyToClipboard,{className:h.a.share,text:this.props.url,onCopy:this.handleCopy},r.a.createElement(y.a,{title:"Share"},r.a.createElement(p.a,null)))),r.a.createElement(E.a,{msg:this.state.copied&&"Link copied to clipboard"}))},t}(r.a.Component);a.d(t,"query",function(){return k});t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata,c=t.markdownRemark,u={url:a.href,identifier:c.fields.slug,title:c.frontmatter.title};return r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement(i.a,null,c.frontmatter.date),r.a.createElement("h2",null,c.frontmatter.title),r.a.createElement(b,{url:a.href}),r.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:c.html}}),r.a.createElement(s.a.DiscussionEmbed,{shortname:n.shortname,config:u})))};var k="4288110627"},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(151),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var s=a(160),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},160:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},161:function(e,t,a){e.exports={nav:"DesktopHeader-module--nav--2zrh7",navLeft:"DesktopHeader-module--nav-left--2TxDW",navCenter:"DesktopHeader-module--nav-center--ttWLF",navRight:"DesktopHeader-module--nav-right--2D3-i",title:"DesktopHeader-module--title--1J792"}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Secret Unspoken",subtitle:"Talking about the secret most men have but won't share"}}}}},163:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(51),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},164:function(e,t,a){e.exports={navLink:"NavLink-module--nav-link--3_r93"}},167:function(e,t,a){e.exports={nav:"MobileHeader-module--nav--16cOU"}},169:function(e,t,a){e.exports={bottomNav:"MobileFooter-module--bottom-nav--DYFFf",selected:"MobileFooter-module--selected--2EPyE"}},173:function(e,t,a){e.exports={copyright:"CopyrightNotice-module--copyright--jOFQ3"}},175:function(e,t,a){e.exports={layout:"Layout-module--layout--3AkVA"}},178:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(179),l=a.n(o),i=function(e){return r.a.createElement("div",{className:l.a.column,style:{maxWidth:e.maxWidth}},e.children)};i.defaultProps={maxWidth:500},t.a=i},179:function(e,t,a){e.exports={column:"Column-module--column--3xN4I"}},181:function(e,t,a){"use strict";var n=a(162),r=a(0),o=a.n(r),l=a(152),i=a(164),c=a.n(i),s=function(e){return o.a.createElement(l.Link,{className:c.a.navLink,to:e.to},e.children)},u=a(161),m=a.n(u),d=function(e){return o.a.createElement("nav",{className:m.a.nav},o.a.createElement("div",{className:m.a.navLeft}),o.a.createElement("div",{className:m.a.navCenter},o.a.createElement(l.Link,{to:"/",className:m.a.title},o.a.createElement("h1",null,e.title))),o.a.createElement("div",{className:m.a.navRight},o.a.createElement(s,{to:"/"},"Home"),o.a.createElement(s,{to:"/posts"},"Posts"),o.a.createElement(s,{to:"/me"},"Me")))},p=a(167),f=a.n(p),h=function(e){return o.a.createElement("nav",{className:f.a.nav},o.a.createElement(l.Link,{to:"/",className:m.a.title},o.a.createElement("h1",null,e.title)))},v=a(7),E=a.n(v),g=a(186),y=a.n(g),b=a(190),k=a.n(b),x=a(194),w=a.n(x),N=a(195),C=a.n(N),L=a(192),D=a.n(L),S=a(202),M=a(169),P=a.n(M),q=Object(S.a)(S.b,Object(S.d)(S.c),Object(S.e)("/")),F={home:0,posts:1,me:2},U=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={value:null},t.handleChange=function(e,a){t.setState({value:a})},t}E()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=q(this.props.location.pathname);this.setState({value:F[e]||0})},a.render=function(){return o.a.createElement(y.a,{className:P.a.bottomNav,value:this.state.value,onChange:this.handleChange,showLabels:!0},o.a.createElement(k.a,{classes:{selected:P.a.selected},label:"Home",icon:o.a.createElement(D.a,null),component:l.Link,to:"/"}),o.a.createElement(k.a,{classes:{selected:P.a.selected},label:"Posts",icon:o.a.createElement(w.a,null),component:l.Link,to:"/posts"}),o.a.createElement(k.a,{classes:{selected:P.a.selected},label:"Me",icon:o.a.createElement(C.a,null),component:l.Link,to:"/me"}))},t}(o.a.Component),O=a(196),T=a.n(O),H=a(173),R=a.n(H),j=function(e){return o.a.createElement("div",{className:R.a.copyright},"Secret Unspoken © ",(new Date).getFullYear())},A=a(13),W=a(177),I=a.n(W),Q=a(175),G=a.n(Q);t.a=function(e){return o.a.createElement(l.StaticQuery,{query:"3289377477",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(T.a,null,o.a.createElement("title",null,t.site.siteMetadata.title),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Unica+One&text=Secret%20Unspoken",rel:"stylesheet"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Spectral|Karla",rel:"stylesheet"}),o.a.createElement("meta",{name:"Description",content:"A blog about men's sexuality and sexual addiction"}),o.a.createElement("html",{lang:"en"})),o.a.createElement(I.a,{smDown:!0},o.a.createElement(d,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.subtitle})),o.a.createElement(I.a,{mdUp:!0},o.a.createElement(h,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.subtitle})),o.a.createElement("div",{className:G.a.layout},e.children),o.a.createElement(j,null),o.a.createElement(I.a,{mdUp:!0},o.a.createElement(A.Location,null,function(e){var t=e.location;return o.a.createElement(U,{location:t})})))},data:n})}},197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(198),l=a.n(o),i=function(e){return r.a.createElement("span",{className:l.a.date},e.prefix,e.children)};i.defaultProps={prefix:""},t.a=i},198:function(e,t,a){e.exports={date:"DateOfPost-module--date--DJNDV"}},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(223),l=a.n(o),i=a(177),c=a.n(i);t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{smDown:!0},r.a.createElement(l.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.msg,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("div",{id:"message-id"},e.msg)})),r.a.createElement(c.a,{mdUp:!0},r.a.createElement(l.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:e.msg,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("div",{id:"message-id"},e.msg)})))}},353:function(e,t,a){e.exports={container:"StoryEngagement-module--container--2vsAN",share:"StoryEngagement-module--share--Kf9fP"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ccc57073e4cec60e0a0b.js.map