(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),l=a.n(n),r=a(164),i=a(163),o=a(203);a(75);t.default=function(e){var t=e.data.markdownRemark;return l.a.createElement(r.a,null,l.a.createElement(i.a,null,l.a.createElement(o.a,{title:t.frontmatter.title,date:t.frontmatter.date}),l.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:t.html}})))};var c="844253289"},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return M}),a.d(t,"StaticQuery",function(){return d});var n=a(0),l=a.n(n),r=a(4),i=a.n(r),o=a(152),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(160),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(36);a.d(t,"parsePath",function(){return m.a});var M=l.a.createContext({}),d=function(e){return l.a.createElement(M.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},161:function(e,t,a){e.exports={nav:"DesktopHeader-module--nav--2zrh7",topBar:"DesktopHeader-module--top-bar--xNzmP",navLeft:"DesktopHeader-module--nav-left--2TxDW",navCenter:"DesktopHeader-module--nav-center--ttWLF",navRight:"DesktopHeader-module--nav-right--2D3-i",home:"DesktopHeader-module--home--1UYi5",center:"DesktopHeader-module--center--26bDH",navLink:"DesktopHeader-module--navLink--1HNAg"}},163:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(197),i=a.n(r),o=function(e){return l.a.createElement("div",{className:i.a.column,style:{maxWidth:e.maxWidth}},e.children)};o.defaultProps={maxWidth:500},t.a=o},164:function(e,t,a){"use strict";var n=a(167),l=a(0),r=a.n(l),i=a(150),o=a(169),c=a.n(o),s=function(e){return r.a.createElement(i.Link,{className:c.a.navLink,to:e.to},e.children)},u=a(161),m=a.n(u),M=(a(216),a(7)),d=a.n(M),g=a(4),L=a.n(g),p=a(217),w=a.n(p),N=a(223),y=a.n(N),D=a(172),j=a.n(D),E=a(153),I=a.n(E),h={small:"nameSmall",medium:"nameMedium",large:"nameLarge"},C=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={day:"dark"!==localStorage.getItem("theme")},t.toggleTheme=function(){return t.setState({day:!t.state.day})},t}d()(t,e);var a=t.prototype;return a.componentDidUpdate=function(){var e=document.documentElement;e.classList.add("color-theme-in-transition"),setTimeout(function(){return e.classList.remove("color-theme-in-transition")},1e3),this.state.day?(e.setAttribute("data-theme","light"),localStorage.setItem("theme","light")):(e.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"))},a.componentDidMount=function(){document.documentElement.setAttribute("data-theme",this.state.day?"light":"dark")},a.render=function(){var e=h[this.props.size];return console.log(this.props.size,e,j.a[e]),r.a.createElement("div",{className:j.a.container},this.state.day&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:I()(j.a.name,j.a[e])},"light"),r.a.createElement(w.a,{fontSize:this.props.size,onClick:this.toggleTheme})),!this.state.day&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:I()(j.a.name,j.a[e])},"dark"),r.a.createElement(y.a,{fontSize:this.props.size,onClick:this.toggleTheme})))},t}(r.a.Component);C.propTypes={size:L.a.oneOf(["small","medium","large"]).isRequired},C.defaultProps={size:"medium"};var k=C,x=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:m.a.topBar},r.a.createElement(k,null)),r.a.createElement("nav",{className:m.a.nav},r.a.createElement("div",{className:m.a.navLeft}),r.a.createElement("div",{className:m.a.navCenter},r.a.createElement(i.Link,{to:"/",className:m.a.home},r.a.createElement("h1",{className:m.a.center},e.title),r.a.createElement("h4",{className:m.a.center},e.subtitle))),r.a.createElement("div",{className:m.a.navRight},r.a.createElement(s,{className:m.a.navLink,to:"/"},"Home"),r.a.createElement(s,{className:m.a.navLink,to:"/posts"},"Posts"),r.a.createElement(s,{className:m.a.navLink,to:"/me"},"Me"))))},T=a(176),f=a.n(T),v=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:m.a.topBar},r.a.createElement(k,null)),r.a.createElement("nav",{className:f.a.nav},r.a.createElement(i.Link,{to:"/",className:m.a.home},r.a.createElement("h1",{className:m.a.center},e.title),r.a.createElement("h4",{className:m.a.center},e.subtitle))))},z=a(224),b=a.n(z),S=a(225),P=a.n(S),A=a(228),U=a.n(A),Y=a(229),O=a.n(Y),G=a(227),Z=a.n(G),Q=a(238),H=a(178),F=a.n(H),B=Object(Q.a)(Q.b,Object(Q.d)(Q.c),Object(Q.e)("/")),R={home:0,posts:1,me:2},J=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={value:null},t.handleChange=function(e,a){t.setState({value:a})},t}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=B(this.props.location.pathname);this.setState({value:R[e]||0})},a.render=function(){return r.a.createElement(b.a,{classes:{root:F.a.bottomNav},value:this.state.value,onChange:this.handleChange,showLabels:!0},r.a.createElement(P.a,{classes:{wrapper:F.a.wrapper,selected:F.a.selected},label:"Home",icon:r.a.createElement(Z.a,null),component:i.Link,to:"/"}),r.a.createElement(P.a,{classes:{wrapper:F.a.wrapper,selected:F.a.selected},label:"Posts",icon:r.a.createElement(U.a,null),component:i.Link,to:"/posts"}),r.a.createElement(P.a,{classes:{wrapper:F.a.wrapper,selected:F.a.selected},label:"Me",icon:r.a.createElement(O.a,null),component:i.Link,to:"/me"}))},t}(r.a.Component),W=a(230),K=a.n(W),V=a(180),X=a.n(V),q=function(e){return r.a.createElement("div",{className:X.a.copyright},"Secret Unspoken © ",(new Date).getFullYear())},_=a(182),$=a.n(_),ee=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={optOut:!1},t.key="ga-disable-"+t.props.gaTrackingId,t.initWindowVar=function(){return window[t.key]=void 0!==localStorage.getItem(t.key)&&"true"===localStorage.getItem(t.key)},t.toggle=function(e){e.preventDefault();var a=localStorage.getItem(t.key);localStorage.setItem(t.key,"true"===a?"false":"true");var n=t.initWindowVar();t.setState({optOut:n})},t}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.initWindowVar();this.setState({optOut:e})},a.render=function(){return r.a.createElement("div",{key:this.state.optOut,className:$.a.disclaimer},r.a.createElement("pre",null,"This site uses Google Analytics. "),r.a.createElement("a",{href:"/#",onClick:this.toggle},this.state.optOut?"Opt in.":"Opt out."))},t}(r.a.Component),te=a(15),ae=a(166),ne=a(186),le=a.n(ne),re=function(){return r.a.createElement("div",{className:le.a.container},r.a.createElement("span",null,"Support Secret Unspoken through ",r.a.createElement("a",{href:"https://flattr.com/"},"Flattr"),"."))},ie=(a(188),a(231)),oe=a.n(ie),ce=a(189),se=a.n(ce),ue=a(191),me=a.n(ue),Me=a(192),de=a.n(Me),ge=a(193),Le=a.n(ge),pe=function(e){return r.a.createElement("div",{className:se.a.container},r.a.createElement("a",{className:I()(se.a.link,se.a.linkTwBlue),href:e.twitterUrl,alt:"Twitter"},r.a.createElement("img",{src:me.a,height:24,width:24,alt:"Twitter"})),r.a.createElement("a",{className:I()(se.a.link,se.a.linkFbBlue),href:e.facebookUrl,alt:"Facebook"},r.a.createElement("img",{src:de.a,height:24,width:24,alt:"Facebook"})),r.a.createElement("a",{className:I()(se.a.link,se.a.linkIPink),href:e.instagramUrl,alt:"Instagram"},r.a.createElement("img",{src:Le.a,height:20,width:20,alt:"Instagram"})),r.a.createElement(i.Link,{className:I()(se.a.link,se.a.linkRssOrange),to:"/rss.xml",alt:"RSS"},r.a.createElement(oe.a,{height:24,width:24})))},we=a(196),Ne=a.n(we),ye=a(194),De=a.n(ye);t.a=function(e){return r.a.createElement(i.StaticQuery,{query:"2607622021",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement("title",null,t.site.siteMetadata.title),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Unica+One&text=Secret%20Unspoken",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Spectral|Karla",rel:"stylesheet"}),r.a.createElement("meta",{name:"Description",content:t.site.siteMetadata.description}),r.a.createElement("meta",{name:"flattr:id",content:"vlp70e"}),r.a.createElement("html",{lang:"en"})),r.a.createElement(Ne.a,{smDown:!0},r.a.createElement(x,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.tagline})),r.a.createElement(Ne.a,{mdUp:!0},r.a.createElement(v,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.tagline})),r.a.createElement("div",{className:De.a.layout},e.children),r.a.createElement(ae.a,null),r.a.createElement(pe,{twitterUrl:t.site.siteMetadata.twitterUrl,facebookUrl:t.site.siteMetadata.facebookUrl,instagramUrl:t.site.siteMetadata.instagramUrl}),r.a.createElement(q,null),r.a.createElement(re,null),r.a.createElement(ee,{gaTrackingId:t.site.siteMetadata.gaTrackingId}),r.a.createElement(ae.a,null),r.a.createElement(Ne.a,{mdUp:!0},r.a.createElement(te.Location,null,function(e){var t=e.location;return r.a.createElement(J,{location:t})})))},data:n})}},166:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(184),i=a.n(r);t.a=function(){return l.a.createElement("div",{className:i.a.bottomPadding})}},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Secret Unspoken",tagline:"The secret most men have",description:"A blog discussing sexual addiction among men",gaTrackingId:"UA-127453671-1",twitterUrl:"https://twitter.com/SecretUnspoken1",facebookUrl:"https://www.facebook.com/secretunspoken",instagramUrl:"https://www.instagram.com/secretunspoken"}}}}},168:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),l=a.n(n),r=a(4),i=a.n(r),o=a(51),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return l.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},169:function(e,t,a){e.exports={navLink:"NavLink-module--nav-link--3_r93"}},172:function(e,t,a){e.exports={container:"ThemeToggle-module--container--2gD24",name:"ThemeToggle-module--name--3P5sx",nameSmall:"ThemeToggle-module--name--small--2rC08",nameMedium:"ThemeToggle-module--name--medium--3EN2a",nameLarge:"ThemeToggle-module--name--large--1plZ7"}},176:function(e,t,a){e.exports={nav:"MobileHeader-module--nav--16cOU"}},178:function(e,t,a){e.exports={bottomNav:"MobileFooter-module--bottom-nav--DYFFf",wrapper:"MobileFooter-module--wrapper--2EIAQ",selected:"MobileFooter-module--selected--2EPyE"}},180:function(e,t,a){e.exports={copyright:"CopyrightNotice-module--copyright--jOFQ3"}},182:function(e,t,a){e.exports={disclaimer:"GoogleAnalyticsDisclaimer-module--disclaimer--2qTBA"}},184:function(e,t,a){e.exports={bottomPadding:"BottomPadding-module--bottom-padding--1APOt"}},186:function(e,t,a){e.exports={container:"Support-module--container--tmS_l"}},189:function(e,t,a){e.exports={container:"FollowUs-module--container--2c5Ac",link:"FollowUs-module--link--2llzx",linkIPink:"FollowUs-module--link--i-pink--3wXjc",linkFbBlue:"FollowUs-module--link--fb-blue--2l_gi",linkTwBlue:"FollowUs-module--link--tw-blue--2X_L5",linkRssOrange:"FollowUs-module--link--rss-orange--1Y5ac"}},191:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIwLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMURBMUYyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9IkRhcmtfQmx1ZSI+Cgk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjIwMCIvPgo8L2c+CjxnIGlkPSJMb2dvX194MjAxNF9fRklYRUQiPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE2My40LDMwNS41Yzg4LjcsMCwxMzcuMi03My41LDEzNy4yLTEzNy4yYzAtMi4xLDAtNC4yLTAuMS02LjJjOS40LTYuOCwxNy42LTE1LjMsMjQuMS0yNQoJCWMtOC42LDMuOC0xNy45LDYuNC0yNy43LDcuNmMxMC02LDE3LjYtMTUuNCwyMS4yLTI2LjdjLTkuMyw1LjUtMTkuNiw5LjUtMzAuNiwxMS43Yy04LjgtOS40LTIxLjMtMTUuMi0zNS4yLTE1LjIKCQljLTI2LjYsMC00OC4yLDIxLjYtNDguMiw0OC4yYzAsMy44LDAuNCw3LjUsMS4zLDExYy00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNGMtNC4xLDcuMS02LjUsMTUuNC02LjUsMjQuMgoJCWMwLDE2LjcsOC41LDMxLjUsMjEuNSw0MC4xYy03LjktMC4yLTE1LjMtMi40LTIxLjgtNmMwLDAuMiwwLDAuNCwwLDAuNmMwLDIzLjQsMTYuNiw0Mi44LDM4LjcsNDcuM2MtNCwxLjEtOC4zLDEuNy0xMi43LDEuNwoJCWMtMy4xLDAtNi4xLTAuMy05LjEtMC45YzYuMSwxOS4yLDIzLjksMzMuMSw0NSwzMy41Yy0xNi41LDEyLjktMzcuMywyMC42LTU5LjksMjAuNmMtMy45LDAtNy43LTAuMi0xMS41LTAuNwoJCUMxMTAuOCwyOTcuNSwxMzYuMiwzMDUuNSwxNjMuNCwzMDUuNSIvPgo8L2c+Cjwvc3ZnPgo="},192:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTQgMTE0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQyNjdiMjt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmZsb2dvX1JHQl9IRVgtMTE0PC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDcuNzEsMEg2LjI5QTYuMjksNi4yOSwwLDAsMCwwLDYuMjlWMTA3LjcxQTYuMjksNi4yOSwwLDAsMCw2LjI5LDExNEg2MC45VjY5LjkxSDQ2LjA5VjUyLjY2SDYwLjlWNDBjMC0xNC43Myw5LTIyLjc0LDIyLjEyLTIyLjc0YTEyNS4zLDEyNS4zLDAsMCwxLDEzLjI4LjY3VjMzLjI4SDg3LjI0Yy03LjE1LDAtOC41MywzLjM5LTguNTMsOC4zOHYxMUg5NS44TDkzLjU3LDY5LjkxSDc4LjcxVjExNGgyOWE2LjI5LDYuMjksMCwwLDAsNi4yOS02LjI5VjYuMjlBNi4yOSw2LjI5LDAsMCwwLDEwNy43MSwwWiIvPjxwYXRoIGlkPSJmIiBjbGFzcz0iY2xzLTIiIGQ9Ik03OC43MSwxMTRWNjkuOTFIOTMuNTdMOTUuOCw1Mi42Nkg3OC43MXYtMTFjMC01LDEuMzgtOC4zOCw4LjUzLTguMzhIOTYuM1YxNy44OUExMjUuMywxMjUuMywwLDAsMCw4MywxNy4yMmMtMTMuMTMsMC0yMi4xMiw4LTIyLjEyLDIyLjc0djEyLjdINDYuMDlWNjkuOTFINjAuOVYxMTRaIi8+PC9zdmc+"},193:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNTIsMEgxNjBDNzEuNjQ4LDAsMCw3MS42NDgsMCwxNjB2MTkyYzAsODguMzUyLDcxLjY0OCwxNjAsMTYwLDE2MGgxOTJjODguMzUyLDAsMTYwLTcxLjY0OCwxNjAtMTYwVjE2MA0KCQkJQzUxMiw3MS42NDgsNDQwLjM1MiwwLDM1MiwweiBNNDY0LDM1MmMwLDYxLjc2LTUwLjI0LDExMi0xMTIsMTEySDE2MGMtNjEuNzYsMC0xMTItNTAuMjQtMTEyLTExMlYxNjBDNDgsOTguMjQsOTguMjQsNDgsMTYwLDQ4DQoJCQloMTkyYzYxLjc2LDAsMTEyLDUwLjI0LDExMiwxMTJWMzUyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjU2LDEyOGMtNzAuNjg4LDAtMTI4LDU3LjMxMi0xMjgsMTI4czU3LjMxMiwxMjgsMTI4LDEyOHMxMjgtNTcuMzEyLDEyOC0xMjhTMzI2LjY4OCwxMjgsMjU2LDEyOHogTTI1NiwzMzYNCgkJCWMtNDQuMDk2LDAtODAtMzUuOTA0LTgwLTgwYzAtNDQuMTI4LDM1LjkwNC04MCw4MC04MHM4MCwzNS44NzIsODAsODBDMzM2LDMwMC4wOTYsMzAwLjA5NiwzMzYsMjU2LDMzNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMzkzLjYiIGN5PSIxMTguNCIgcj0iMTcuMDU2Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="},194:function(e,t,a){e.exports={layout:"Layout-module--layout--3AkVA"}},197:function(e,t,a){e.exports={column:"Column-module--column--3xN4I"}},199:function(e,t,a){e.exports={meta:"HeaderMeta-module--meta--1iWAQ"}},201:function(e,t,a){e.exports={metaHeading:"PostHeader-module--meta-heading--2nY_2"}},203:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(199),i=a.n(r),o=function(e){return l.a.createElement("span",{className:i.a.meta},e.prefix,e.children)};o.defaultProps={prefix:""};var c=o,s=a(201),u=a.n(s);t.a=function(e){return l.a.createElement("div",{className:u.a.metaHeading},l.a.createElement("div",null,l.a.createElement(c,null,e.date),e.wordCount&&l.a.createElement(l.a.Fragment,null,l.a.createElement(c,null,"•"),l.a.createElement(c,null,(t=e.wordCount,Math.round(t/250))," min read"))),l.a.createElement("h2",null,e.title));var t}}}]);
//# sourceMappingURL=component---src-templates-page-js-df4fc6b118ca382c4406.js.map