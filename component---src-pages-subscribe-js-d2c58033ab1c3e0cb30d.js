(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(234),i=a(184),l=a(181);t.default=function(e){return r.a.createElement(i.a,null,r.a.createElement(l.a,null,r.a.createElement(o.a,null)))}},152:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(151),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(160),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},161:function(e,t,a){e.exports={nav:"DesktopHeader-module--nav--2zrh7",navLeft:"DesktopHeader-module--nav-left--2TxDW",navCenter:"DesktopHeader-module--nav-center--ttWLF",navRight:"DesktopHeader-module--nav-right--2D3-i",home:"DesktopHeader-module--home--1UYi5",center:"DesktopHeader-module--center--26bDH"}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Secret Unspoken",tagline:"The secret most men have",description:"A blog discussing sexual addiction among men",gaTrackingId:"UA-127453671-1"}}}}},163:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(51),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},164:function(e,t,a){e.exports={navLink:"NavLink-module--nav-link--3_r93"}},167:function(e,t,a){e.exports={nav:"MobileHeader-module--nav--16cOU"}},169:function(e,t,a){e.exports={bottomNav:"MobileFooter-module--bottom-nav--DYFFf",selected:"MobileFooter-module--selected--2EPyE"}},172:function(e,t,a){e.exports={copyright:"CopyrightNotice-module--copyright--jOFQ3"}},174:function(e,t,a){e.exports={disclaimer:"GoogleAnalyticsDisclaimer-module--disclaimer--2qTBA"}},176:function(e,t,a){e.exports={bottomPadding:"BottomPadding-module--bottom-padding--1APOt"}},178:function(e,t,a){e.exports={layout:"Layout-module--layout--3AkVA"}},181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(182),i=a.n(o),l=function(e){return r.a.createElement("div",{className:i.a.column,style:{maxWidth:e.maxWidth}},e.children)};l.defaultProps={maxWidth:500},t.a=l},182:function(e,t,a){e.exports={column:"Column-module--column--3xN4I"}},184:function(e,t,a){"use strict";var n=a(162),r=a(0),o=a.n(r),i=a(152),l=a(164),s=a.n(l),c=function(e){return o.a.createElement(i.Link,{className:s.a.navLink,to:e.to},e.children)},u=a(161),m=a.n(u),d=function(e){return o.a.createElement("nav",{className:m.a.nav},o.a.createElement("div",{className:m.a.navLeft}),o.a.createElement("div",{className:m.a.navCenter},o.a.createElement(i.Link,{to:"/",className:m.a.home},o.a.createElement("h1",{className:m.a.center},e.title),o.a.createElement("h4",{className:m.a.center},e.subtitle))),o.a.createElement("div",{className:m.a.navRight},o.a.createElement(c,{to:"/"},"Home"),o.a.createElement(c,{to:"/posts"},"Posts"),o.a.createElement(c,{to:"/me"},"Me")))},p=a(167),h=a.n(p),f=function(e){return o.a.createElement("nav",{className:h.a.nav},o.a.createElement(i.Link,{to:"/",className:m.a.home},o.a.createElement("h1",{className:m.a.center},e.title),o.a.createElement("h4",{className:m.a.center},e.subtitle)))},g=a(7),v=a.n(g),E=a(189),b=a.n(E),y=a(192),k=a.n(y),w=a(196),x=a.n(w),S=a(197),N=a.n(S),C=a(194),D=a.n(C),O=a(206),L=a(169),M=a.n(L),P=Object(O.a)(O.b,Object(O.d)(O.c),Object(O.e)("/")),q={home:0,posts:1,me:2},T=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={value:null},t.handleChange=function(e,a){t.setState({value:a})},t}v()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=P(this.props.location.pathname);this.setState({value:q[e]||0})},a.render=function(){return o.a.createElement(b.a,{className:M.a.bottomNav,value:this.state.value,onChange:this.handleChange,showLabels:!0},o.a.createElement(k.a,{classes:{selected:M.a.selected},label:"Home",icon:o.a.createElement(D.a,null),component:i.Link,to:"/"}),o.a.createElement(k.a,{classes:{selected:M.a.selected},label:"Posts",icon:o.a.createElement(x.a,null),component:i.Link,to:"/posts"}),o.a.createElement(k.a,{classes:{selected:M.a.selected},label:"Me",icon:o.a.createElement(N.a,null),component:i.Link,to:"/me"}))},t}(o.a.Component),A=a(198),U=a.n(A),F=a(172),H=a.n(F),I=function(e){return o.a.createElement("div",{className:H.a.copyright},"Secret Unspoken © ",(new Date).getFullYear())},j=a(174),R=a.n(j),W=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={optOut:!1},t.key="ga-disable-"+t.props.gaTrackingId,t.initWindowVar=function(){return window[t.key]=void 0!==localStorage.getItem(t.key)&&"true"===localStorage.getItem(t.key)},t.toggle=function(e){e.preventDefault();var a=localStorage.getItem(t.key);localStorage.setItem(t.key,"true"===a?"false":"true");var n=t.initWindowVar();t.setState({optOut:n})},t}v()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.initWindowVar();this.setState({optOut:e})},a.render=function(){return o.a.createElement("div",{key:this.state.optOut,className:R.a.disclaimer},o.a.createElement("pre",null,"This site uses Google Analytics. "),o.a.createElement("a",{href:"/#",onClick:this.toggle},this.state.optOut?"Opt in.":"Opt out."))},t}(o.a.Component),G=a(13),Q=a(176),V=a.n(Q),z=function(){return o.a.createElement("div",{className:V.a.bottomPadding})},Y=a(180),B=a.n(Y),J=a(178),K=a.n(J);t.a=function(e){return o.a.createElement(i.StaticQuery,{query:"688602459",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(U.a,null,o.a.createElement("title",null,t.site.siteMetadata.title),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Unica+One&text=Secret%20Unspoken",rel:"stylesheet"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Spectral|Karla",rel:"stylesheet"}),o.a.createElement("meta",{name:"Description",content:t.site.siteMetadata.description}),o.a.createElement("html",{lang:"en"})),o.a.createElement(B.a,{smDown:!0},o.a.createElement(d,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.tagline})),o.a.createElement(B.a,{mdUp:!0},o.a.createElement(f,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.tagline})),o.a.createElement("div",{className:K.a.layout},e.children),o.a.createElement(I,null),o.a.createElement(W,{gaTrackingId:t.site.siteMetadata.gaTrackingId}),o.a.createElement(B.a,{mdUp:!0},o.a.createElement(z,null),o.a.createElement(G.Location,null,function(e){var t=e.location;return o.a.createElement(T,{location:t})})))},data:n})}},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(230),i=a.n(o),l=a(180),s=a.n(l);t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{smDown:!0},r.a.createElement(i.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.msg,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("div",{id:"message-id"},e.msg)})),r.a.createElement(s.a,{mdUp:!0},r.a.createElement(i.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:e.msg,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("div",{id:"message-id"},e.msg)})))}},234:function(e,t,a){"use strict";var n=a(262),r=a.n(n),o=(a(235),a(263)),i=a.n(o),l=a(7),s=a.n(l),c=a(0),u=a.n(c),m=a(265),d=a.n(m),p=a(232),h=a.n(p),f=a(221),g=a(200),v=a(264),E=a.n(v),b=a(236),y=a.n(b),k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={email:null,msg:null},t.handleChange=function(e){t.setState({email:e.target.value,msg:null})},t.handleSubmit=function(){var e=i()(r.a.mark(function e(a){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,E()(t.state.email);case 3:n=e.sent,t.setState({msg:n.msg}),setTimeout(function(){return t.setState({msg:null})},5e3),"success"===n.result&&window.ga&&window.ga("send","event",{eventCategory:"Subscribe",eventAction:"subscribe success",eventLabel:"Subscribe Campaign",eventValue:1});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t}return s()(t,e),t.prototype.render=function(){return u.a.createElement("div",{className:y.a.container},u.a.createElement(d.a,{id:"email",label:"Email",type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined",className:this.props.classes.input,value:this.state.email,onChange:this.handleChange}),u.a.createElement(h.a,{variant:"outlined",color:"primary",onClick:this.handleSubmit,classes:{root:this.props.classes.button}},"Subscribe"),u.a.createElement(g.a,{msg:this.state.msg}))},t}(u.a.Component);t.a=Object(f.withStyles)({button:{border:"1px solid #8d8d8d",color:"#00867d","&:hover":{backgroundColor:"#efefef",border:"1px solid #8d8d8d"}}})(k)},236:function(e,t,a){e.exports={container:"Subscribe-module--container--3qvxO"}}}]);
//# sourceMappingURL=component---src-pages-subscribe-js-d2c58033ab1c3e0cb30d.js.map