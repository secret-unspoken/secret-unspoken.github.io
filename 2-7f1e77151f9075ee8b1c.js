(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return M}),a.d(t,"StaticQuery",function(){return d});var n=a(0),l=a.n(n),i=a(4),r=a.n(i),o=a(152),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(160),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(36);a.d(t,"parsePath",function(){return m.a});var M=l.a.createContext({}),d=function(e){return l.a.createElement(M.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},160:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},161:function(e,t,a){e.exports={nav:"DesktopHeader-module--nav--2zrh7",topBar:"DesktopHeader-module--top-bar--xNzmP",navLeft:"DesktopHeader-module--nav-left--2TxDW",navCenter:"DesktopHeader-module--nav-center--ttWLF",navRight:"DesktopHeader-module--nav-right--2D3-i",home:"DesktopHeader-module--home--1UYi5",center:"DesktopHeader-module--center--26bDH",navLink:"DesktopHeader-module--navLink--1HNAg"}},163:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(197),r=a.n(i),o=function(e){return l.a.createElement("div",{className:r.a.column,style:{maxWidth:e.maxWidth}},e.children)};o.defaultProps={maxWidth:500},t.a=o},164:function(e,t,a){"use strict";var n=a(167),l=a(0),i=a.n(l),r=a(150),o=a(169),s=a.n(o),c=function(e){return i.a.createElement(r.Link,{className:s.a.navLink,to:e.to},e.children)},u=a(161),m=a.n(u),M=(a(216),a(7)),d=a.n(M),g=a(4),L=a.n(g),p=a(217),w=a.n(p),N=a(223),y=a.n(N),D=a(172),j=a.n(D),I=a(153),E=a.n(I),h={small:"nameSmall",medium:"nameMedium",large:"nameLarge"},C=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={day:"dark"!==localStorage.getItem("theme")},t.toggleTheme=function(){return t.setState({day:!t.state.day})},t}d()(t,e);var a=t.prototype;return a.componentDidUpdate=function(){var e=document.documentElement;e.classList.add("color-theme-in-transition"),setTimeout(function(){return e.classList.remove("color-theme-in-transition")},1e3),this.state.day?(e.setAttribute("data-theme","light"),localStorage.setItem("theme","light")):(e.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark"))},a.componentDidMount=function(){html.setAttribute("data-theme",this.state.day?"light":"dark")},a.render=function(){var e=h[this.props.size];return console.log(this.props.size,e,j.a[e]),i.a.createElement("div",{className:j.a.container},this.state.day&&i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:E()(j.a.name,j.a[e])},"light"),i.a.createElement(w.a,{fontSize:this.props.size,onClick:this.toggleTheme})),!this.state.day&&i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:E()(j.a.name,j.a[e])},"dark"),i.a.createElement(y.a,{fontSize:this.props.size,onClick:this.toggleTheme})))},t}(i.a.Component);C.propTypes={size:L.a.oneOf(["small","medium","large"]).isRequired},C.defaultProps={size:"medium"};var k=C,T=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:m.a.topBar},i.a.createElement(k,null)),i.a.createElement("nav",{className:m.a.nav},i.a.createElement("div",{className:m.a.navLeft}),i.a.createElement("div",{className:m.a.navCenter},i.a.createElement(r.Link,{to:"/",className:m.a.home},i.a.createElement("h1",{className:m.a.center},e.title),i.a.createElement("h4",{className:m.a.center},e.subtitle))),i.a.createElement("div",{className:m.a.navRight},i.a.createElement(c,{className:m.a.navLink,to:"/"},"Home"),i.a.createElement(c,{className:m.a.navLink,to:"/posts"},"Posts"),i.a.createElement(c,{className:m.a.navLink,to:"/me"},"Me"))))},x=a(176),v=a.n(x),z=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:m.a.topBar},i.a.createElement(k,null)),i.a.createElement("nav",{className:v.a.nav},i.a.createElement(r.Link,{to:"/",className:m.a.home},i.a.createElement("h1",{className:m.a.center},e.title),i.a.createElement("h4",{className:m.a.center},e.subtitle))))},b=a(224),f=a.n(b),S=a(225),P=a.n(S),A=a(228),U=a.n(A),Y=a(229),O=a.n(Y),G=a(227),Z=a.n(G),Q=a(238),H=a(178),B=a.n(H),F=Object(Q.a)(Q.b,Object(Q.d)(Q.c),Object(Q.e)("/")),R={home:0,posts:1,me:2},J=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={value:null},t.handleChange=function(e,a){t.setState({value:a})},t}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=F(this.props.location.pathname);this.setState({value:R[e]||0})},a.render=function(){return i.a.createElement(f.a,{classes:{root:B.a.bottomNav},value:this.state.value,onChange:this.handleChange,showLabels:!0},i.a.createElement(P.a,{classes:{wrapper:B.a.wrapper,selected:B.a.selected},label:"Home",icon:i.a.createElement(Z.a,null),component:r.Link,to:"/"}),i.a.createElement(P.a,{classes:{wrapper:B.a.wrapper,selected:B.a.selected},label:"Posts",icon:i.a.createElement(U.a,null),component:r.Link,to:"/posts"}),i.a.createElement(P.a,{classes:{wrapper:B.a.wrapper,selected:B.a.selected},label:"Me",icon:i.a.createElement(O.a,null),component:r.Link,to:"/me"}))},t}(i.a.Component),W=a(230),V=a.n(W),K=a(180),X=a.n(K),q=function(e){return i.a.createElement("div",{className:X.a.copyright},"Secret Unspoken © ",(new Date).getFullYear())},_=a(182),$=a.n(_),ee=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={optOut:!1},t.key="ga-disable-"+t.props.gaTrackingId,t.initWindowVar=function(){return window[t.key]=void 0!==localStorage.getItem(t.key)&&"true"===localStorage.getItem(t.key)},t.toggle=function(e){e.preventDefault();var a=localStorage.getItem(t.key);localStorage.setItem(t.key,"true"===a?"false":"true");var n=t.initWindowVar();t.setState({optOut:n})},t}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.initWindowVar();this.setState({optOut:e})},a.render=function(){return i.a.createElement("div",{key:this.state.optOut,className:$.a.disclaimer},i.a.createElement("pre",null,"This site uses Google Analytics. "),i.a.createElement("a",{href:"/#",onClick:this.toggle},this.state.optOut?"Opt in.":"Opt out."))},t}(i.a.Component),te=a(15),ae=a(166),ne=a(186),le=a.n(ne),ie=function(){return i.a.createElement("div",{className:le.a.container},i.a.createElement("span",null,"Support Secret Unspoken through ",i.a.createElement("a",{href:"https://flattr.com/"},"Flattr"),"."))},re=(a(188),a(231)),oe=a.n(re),se=a(189),ce=a.n(se),ue=a(191),me=a.n(ue),Me=a(192),de=a.n(Me),ge=a(193),Le=a.n(ge),pe=function(e){return i.a.createElement("div",{className:ce.a.container},i.a.createElement("a",{className:E()(ce.a.link,ce.a.linkTwBlue),href:e.twitterUrl,alt:"Twitter"},i.a.createElement("img",{src:me.a,height:24,width:24,alt:"Twitter"})),i.a.createElement("a",{className:E()(ce.a.link,ce.a.linkFbBlue),href:e.facebookUrl,alt:"Facebook"},i.a.createElement("img",{src:de.a,height:24,width:24,alt:"Facebook"})),i.a.createElement("a",{className:E()(ce.a.link,ce.a.linkIPink),href:e.instagramUrl,alt:"Instagram"},i.a.createElement("img",{src:Le.a,height:20,width:20,alt:"Instagram"})),i.a.createElement(r.Link,{className:E()(ce.a.link,ce.a.linkRssOrange),to:"/rss.xml",alt:"RSS"},i.a.createElement(oe.a,{height:24,width:24})))},we=a(196),Ne=a.n(we),ye=a(194),De=a.n(ye);t.a=function(e){return i.a.createElement(r.StaticQuery,{query:"2607622021",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(V.a,null,i.a.createElement("title",null,t.site.siteMetadata.title),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Unica+One&text=Secret%20Unspoken",rel:"stylesheet"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Spectral|Karla",rel:"stylesheet"}),i.a.createElement("meta",{name:"Description",content:t.site.siteMetadata.description}),i.a.createElement("meta",{name:"flattr:id",content:"vlp70e"}),i.a.createElement("html",{lang:"en"})),i.a.createElement(Ne.a,{smDown:!0},i.a.createElement(T,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.tagline})),i.a.createElement(Ne.a,{mdUp:!0},i.a.createElement(z,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.tagline})),i.a.createElement("div",{className:De.a.layout},e.children),i.a.createElement(ae.a,null),i.a.createElement(pe,{twitterUrl:t.site.siteMetadata.twitterUrl,facebookUrl:t.site.siteMetadata.facebookUrl,instagramUrl:t.site.siteMetadata.instagramUrl}),i.a.createElement(q,null),i.a.createElement(ie,null),i.a.createElement(ee,{gaTrackingId:t.site.siteMetadata.gaTrackingId}),i.a.createElement(ae.a,null),i.a.createElement(Ne.a,{mdUp:!0},i.a.createElement(te.Location,null,function(e){var t=e.location;return i.a.createElement(J,{location:t})})))},data:n})}},166:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(184),r=a.n(i);t.a=function(){return l.a.createElement("div",{className:r.a.bottomPadding})}},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Secret Unspoken",tagline:"The secret most men have",description:"A blog discussing sexual addiction among men",gaTrackingId:"UA-127453671-1",twitterUrl:"https://twitter.com/SecretUnspoken1",facebookUrl:"https://www.facebook.com/secretunspoken",instagramUrl:"https://www.instagram.com/secretunspoken"}}}}},168:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),l=a.n(n),i=a(4),r=a.n(i),o=a(51),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return l.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},169:function(e,t,a){e.exports={navLink:"NavLink-module--nav-link--3_r93"}},172:function(e,t,a){e.exports={container:"ThemeToggle-module--container--2gD24",name:"ThemeToggle-module--name--3P5sx",nameSmall:"ThemeToggle-module--name--small--2rC08",nameMedium:"ThemeToggle-module--name--medium--3EN2a",nameLarge:"ThemeToggle-module--name--large--1plZ7"}},176:function(e,t,a){e.exports={nav:"MobileHeader-module--nav--16cOU"}},178:function(e,t,a){e.exports={bottomNav:"MobileFooter-module--bottom-nav--DYFFf",wrapper:"MobileFooter-module--wrapper--2EIAQ",selected:"MobileFooter-module--selected--2EPyE"}},180:function(e,t,a){e.exports={copyright:"CopyrightNotice-module--copyright--jOFQ3"}},182:function(e,t,a){e.exports={disclaimer:"GoogleAnalyticsDisclaimer-module--disclaimer--2qTBA"}},184:function(e,t,a){e.exports={bottomPadding:"BottomPadding-module--bottom-padding--1APOt"}},186:function(e,t,a){e.exports={container:"Support-module--container--tmS_l"}},189:function(e,t,a){e.exports={container:"FollowUs-module--container--2c5Ac",link:"FollowUs-module--link--2llzx",linkIPink:"FollowUs-module--link--i-pink--3wXjc",linkFbBlue:"FollowUs-module--link--fb-blue--2l_gi",linkTwBlue:"FollowUs-module--link--tw-blue--2X_L5",linkRssOrange:"FollowUs-module--link--rss-orange--1Y5ac"}},191:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIwLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMURBMUYyO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPGcgaWQ9IkRhcmtfQmx1ZSI+Cgk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjIwMCIvPgo8L2c+CjxnIGlkPSJMb2dvX194MjAxNF9fRklYRUQiPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE2My40LDMwNS41Yzg4LjcsMCwxMzcuMi03My41LDEzNy4yLTEzNy4yYzAtMi4xLDAtNC4yLTAuMS02LjJjOS40LTYuOCwxNy42LTE1LjMsMjQuMS0yNQoJCWMtOC42LDMuOC0xNy45LDYuNC0yNy43LDcuNmMxMC02LDE3LjYtMTUuNCwyMS4yLTI2LjdjLTkuMyw1LjUtMTkuNiw5LjUtMzAuNiwxMS43Yy04LjgtOS40LTIxLjMtMTUuMi0zNS4yLTE1LjIKCQljLTI2LjYsMC00OC4yLDIxLjYtNDguMiw0OC4yYzAsMy44LDAuNCw3LjUsMS4zLDExYy00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNGMtNC4xLDcuMS02LjUsMTUuNC02LjUsMjQuMgoJCWMwLDE2LjcsOC41LDMxLjUsMjEuNSw0MC4xYy03LjktMC4yLTE1LjMtMi40LTIxLjgtNmMwLDAuMiwwLDAuNCwwLDAuNmMwLDIzLjQsMTYuNiw0Mi44LDM4LjcsNDcuM2MtNCwxLjEtOC4zLDEuNy0xMi43LDEuNwoJCWMtMy4xLDAtNi4xLTAuMy05LjEtMC45YzYuMSwxOS4yLDIzLjksMzMuMSw0NSwzMy41Yy0xNi41LDEyLjktMzcuMywyMC42LTU5LjksMjAuNmMtMy45LDAtNy43LTAuMi0xMS41LTAuNwoJCUMxMTAuOCwyOTcuNSwxMzYuMiwzMDUuNSwxNjMuNCwzMDUuNSIvPgo8L2c+Cjwvc3ZnPgo="},192:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTQgMTE0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQyNjdiMjt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmZsb2dvX1JHQl9IRVgtMTE0PC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDcuNzEsMEg2LjI5QTYuMjksNi4yOSwwLDAsMCwwLDYuMjlWMTA3LjcxQTYuMjksNi4yOSwwLDAsMCw2LjI5LDExNEg2MC45VjY5LjkxSDQ2LjA5VjUyLjY2SDYwLjlWNDBjMC0xNC43Myw5LTIyLjc0LDIyLjEyLTIyLjc0YTEyNS4zLDEyNS4zLDAsMCwxLDEzLjI4LjY3VjMzLjI4SDg3LjI0Yy03LjE1LDAtOC41MywzLjM5LTguNTMsOC4zOHYxMUg5NS44TDkzLjU3LDY5LjkxSDc4LjcxVjExNGgyOWE2LjI5LDYuMjksMCwwLDAsNi4yOS02LjI5VjYuMjlBNi4yOSw2LjI5LDAsMCwwLDEwNy43MSwwWiIvPjxwYXRoIGlkPSJmIiBjbGFzcz0iY2xzLTIiIGQ9Ik03OC43MSwxMTRWNjkuOTFIOTMuNTdMOTUuOCw1Mi42Nkg3OC43MXYtMTFjMC01LDEuMzgtOC4zOCw4LjUzLTguMzhIOTYuM1YxNy44OUExMjUuMywxMjUuMywwLDAsMCw4MywxNy4yMmMtMTMuMTMsMC0yMi4xMiw4LTIyLjEyLDIyLjc0djEyLjdINDYuMDlWNjkuOTFINjAuOVYxMTRaIi8+PC9zdmc+"},193:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNTIsMEgxNjBDNzEuNjQ4LDAsMCw3MS42NDgsMCwxNjB2MTkyYzAsODguMzUyLDcxLjY0OCwxNjAsMTYwLDE2MGgxOTJjODguMzUyLDAsMTYwLTcxLjY0OCwxNjAtMTYwVjE2MA0KCQkJQzUxMiw3MS42NDgsNDQwLjM1MiwwLDM1MiwweiBNNDY0LDM1MmMwLDYxLjc2LTUwLjI0LDExMi0xMTIsMTEySDE2MGMtNjEuNzYsMC0xMTItNTAuMjQtMTEyLTExMlYxNjBDNDgsOTguMjQsOTguMjQsNDgsMTYwLDQ4DQoJCQloMTkyYzYxLjc2LDAsMTEyLDUwLjI0LDExMiwxMTJWMzUyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjU2LDEyOGMtNzAuNjg4LDAtMTI4LDU3LjMxMi0xMjgsMTI4czU3LjMxMiwxMjgsMTI4LDEyOHMxMjgtNTcuMzEyLDEyOC0xMjhTMzI2LjY4OCwxMjgsMjU2LDEyOHogTTI1NiwzMzYNCgkJCWMtNDQuMDk2LDAtODAtMzUuOTA0LTgwLTgwYzAtNDQuMTI4LDM1LjkwNC04MCw4MC04MHM4MCwzNS44NzIsODAsODBDMzM2LDMwMC4wOTYsMzAwLjA5NiwzMzYsMjU2LDMzNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iMzkzLjYiIGN5PSIxMTguNCIgcj0iMTcuMDU2Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="},194:function(e,t,a){e.exports={layout:"Layout-module--layout--3AkVA"}},197:function(e,t,a){e.exports={column:"Column-module--column--3xN4I"}},213:function(e,t,a){"use strict";a(34);var n=a(215),l=a.n(n),i=a(0),r=a.n(i),o=a(153),s=a.n(o),c=a(214),u=a.n(c);t.a=function(e){var t=e.className,a=l()(e,["className"]);return r.a.createElement("button",Object.assign({},a,{className:s()(u.a.btn,t)}),e.children)}},214:function(e,t,a){e.exports={btn:"ButtonBase-module--btn--VIkqv",btnShadow:"ButtonBase-module--btn--shadow--2enFj",btnContained:"ButtonBase-module--btn--contained--2lS1t",btnOutlined:"ButtonBase-module--btn--outlined--2IVX3"}},232:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(366),r=a.n(i),o=a(196),s=a.n(o);t.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{smDown:!0},l.a.createElement(r.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.msg,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("div",{id:"message-id"},e.msg)})),l.a.createElement(s.a,{mdUp:!0},l.a.createElement(r.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:e.msg,ContentProps:{"aria-describedby":"message-id"},message:l.a.createElement("div",{id:"message-id"},e.msg)})))}}}]);
//# sourceMappingURL=2-7f1e77151f9075ee8b1c.js.map