(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(186),i=n(183),c=n(354),l=n.n(c),s=(n(358),n(7)),u=n.n(s),d=n(376),m=n.n(d),p=n(233),f=n.n(p),h=n(359),y=n.n(h),v=n(361),g=n(202),b=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={copied:!1,href:null},t.handleCopy=function(e){clearTimeout(t.copyId),t.setState({copied:!0}),t.copyId=setTimeout(function(){return t.setState({copied:!1})},5e3),window.ga&&window.ga("send","event",{eventCategory:"Sharing",eventAction:e,eventLabel:"Sharing Campaign",eventValue:1})},t}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){if(window.URL){var e=new window.URL(this.props.url);e.searchParams.append("suid",Date.now()),this.setState({href:e.href})}else this.setState({href:this.props.url})},n.componentWillUnmount=function(){clearTimeout(this.copyId)},n.render=function(){return this.state.href?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:y.a.container},o.a.createElement(f.a,null,o.a.createElement(v.CopyToClipboard,{text:this.state.href,onCopy:this.handleCopy},o.a.createElement("div",{className:y.a.buttonContent},o.a.createElement(m.a,null),o.a.createElement("pre",null," Copy Page URL"))))),o.a.createElement(g.a,{msg:this.state.copied&&"URL copied to clipboard"})):null},t}(o.a.Component),w=n(209),E=n(4),C=n.n(E),k=n(152),S=n(377),_=n.n(S),O=o.a.createElement("span",null,"→"),x=o.a.createElement("span",null,"←"),D=function(){window.ga&&window.ga("send","event",{eventCategory:"Retention",eventAction:"next post",eventLabel:"Retention Campaign",eventValue:1})},P=function(e){return o.a.createElement("div",{className:_.a.container},o.a.createElement("pre",null,o.a.createElement(k.Link,{onClick:D,to:e.to},e.isNext?null:x," ",e.children," ",e.isNext?O:null)))};P.propTypes={isNext:C.a.bool.isRequired},P.defaultProps={isNext:!0};var I=P;n.d(t,"query",function(){return N});t.default=function(e){var t=e.data,n=e.location,a=e.pageContext,c=t.site.siteMetadata,s=t.markdownRemark,u={url:n.href,identifier:s.fields.slug,title:s.frontmatter.title},d=a.prev,m=a.next;return o.a.createElement(r.a,null,o.a.createElement(i.a,null,o.a.createElement(w.a,{title:s.frontmatter.title,date:s.frontmatter.date,wordCount:s.wordCount.words}),o.a.createElement(b,{url:n.href}),o.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:s.html}}),m&&o.a.createElement(I,{isNext:!0,to:m.fields.slug},m.frontmatter.title),d&&o.a.createElement(I,{isNext:!1,to:d.fields.slug},d.frontmatter.title),o.a.createElement(l.a.DiscussionEmbed,{shortname:c.shortname,config:u})))};var N="3523184500"},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),o=n.n(a),r=n(4),i=n.n(r),c=n(151),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(160),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(35);n.d(t,"parsePath",function(){return d.a});var m=o.a.createContext({}),p=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t,n){var a;e.exports=(a=n(163))&&a.default||a},161:function(e,t,n){e.exports={nav:"DesktopHeader-module--nav--2zrh7",navLeft:"DesktopHeader-module--nav-left--2TxDW",navCenter:"DesktopHeader-module--nav-center--ttWLF",navRight:"DesktopHeader-module--nav-right--2D3-i",home:"DesktopHeader-module--home--1UYi5",center:"DesktopHeader-module--center--26bDH"}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Secret Unspoken",tagline:"The secret most men have",description:"A blog discussing sexual addiction among men",gaTrackingId:"UA-127453671-1"}}}}},163:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),c=n(51),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},164:function(e,t,n){e.exports={navLink:"NavLink-module--nav-link--3_r93"}},167:function(e,t,n){e.exports={nav:"MobileHeader-module--nav--16cOU"}},169:function(e,t,n){e.exports={bottomNav:"MobileFooter-module--bottom-nav--DYFFf",selected:"MobileFooter-module--selected--2EPyE"}},172:function(e,t,n){e.exports={copyright:"CopyrightNotice-module--copyright--jOFQ3"}},174:function(e,t,n){e.exports={disclaimer:"GoogleAnalyticsDisclaimer-module--disclaimer--2qTBA"}},176:function(e,t,n){e.exports={bottomPadding:"BottomPadding-module--bottom-padding--1APOt"}},178:function(e,t,n){e.exports={container:"Support-module--container--tmS_l"}},180:function(e,t,n){e.exports={layout:"Layout-module--layout--3AkVA"}},183:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(184),i=n.n(r),c=function(e){return o.a.createElement("div",{className:i.a.column,style:{maxWidth:e.maxWidth}},e.children)};c.defaultProps={maxWidth:500},t.a=c},184:function(e,t,n){e.exports={column:"Column-module--column--3xN4I"}},186:function(e,t,n){"use strict";var a=n(162),o=n(0),r=n.n(o),i=n(152),c=n(164),l=n.n(c),s=function(e){return r.a.createElement(i.Link,{className:l.a.navLink,to:e.to},e.children)},u=n(161),d=n.n(u),m=function(e){return r.a.createElement("nav",{className:d.a.nav},r.a.createElement("div",{className:d.a.navLeft}),r.a.createElement("div",{className:d.a.navCenter},r.a.createElement(i.Link,{to:"/",className:d.a.home},r.a.createElement("h1",{className:d.a.center},e.title),r.a.createElement("h4",{className:d.a.center},e.subtitle))),r.a.createElement("div",{className:d.a.navRight},r.a.createElement(s,{to:"/"},"Home"),r.a.createElement(s,{to:"/posts"},"Posts"),r.a.createElement(s,{to:"/me"},"Me")))},p=n(167),f=n.n(p),h=function(e){return r.a.createElement("nav",{className:f.a.nav},r.a.createElement(i.Link,{to:"/",className:d.a.home},r.a.createElement("h1",{className:d.a.center},e.title),r.a.createElement("h4",{className:d.a.center},e.subtitle)))},y=n(7),v=n.n(y),g=n(191),b=n.n(g),w=n(194),E=n.n(w),C=n(198),k=n.n(C),S=n(199),_=n.n(S),O=n(196),x=n.n(O),D=n(208),P=n(169),I=n.n(P),N=Object(D.a)(D.b,Object(D.d)(D.c),Object(D.e)("/")),j={home:0,posts:1,me:2},M=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={value:null},t.handleChange=function(e,n){t.setState({value:n})},t}v()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=N(this.props.location.pathname);this.setState({value:j[e]||0})},n.render=function(){return r.a.createElement(b.a,{className:I.a.bottomNav,value:this.state.value,onChange:this.handleChange,showLabels:!0},r.a.createElement(E.a,{classes:{selected:I.a.selected},label:"Home",icon:r.a.createElement(x.a,null),component:i.Link,to:"/"}),r.a.createElement(E.a,{classes:{selected:I.a.selected},label:"Posts",icon:r.a.createElement(k.a,null),component:i.Link,to:"/posts"}),r.a.createElement(E.a,{classes:{selected:I.a.selected},label:"Me",icon:r.a.createElement(_.a,null),component:i.Link,to:"/me"}))},t}(r.a.Component),T=n(200),U=n.n(T),q=n(172),R=n.n(q),L=function(e){return r.a.createElement("div",{className:R.a.copyright},"Secret Unspoken © ",(new Date).getFullYear())},A=n(174),H=n.n(A),W=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={optOut:!1},t.key="ga-disable-"+t.props.gaTrackingId,t.initWindowVar=function(){return window[t.key]=void 0!==localStorage.getItem(t.key)&&"true"===localStorage.getItem(t.key)},t.toggle=function(e){e.preventDefault();var n=localStorage.getItem(t.key);localStorage.setItem(t.key,"true"===n?"false":"true");var a=t.initWindowVar();t.setState({optOut:a})},t}v()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.initWindowVar();this.setState({optOut:e})},n.render=function(){return r.a.createElement("div",{key:this.state.optOut,className:H.a.disclaimer},r.a.createElement("pre",null,"This site uses Google Analytics. "),r.a.createElement("a",{href:"/#",onClick:this.toggle},this.state.optOut?"Opt in.":"Opt out."))},t}(r.a.Component),Q=n(13),F=n(176),G=n.n(F),z=function(){return r.a.createElement("div",{className:G.a.bottomPadding})},V=n(178),B=n.n(V),Y=function(){return r.a.createElement("div",{className:B.a.container},r.a.createElement("span",null,"Support Secret Unspoken through ",r.a.createElement("a",{href:"https://flattr.com/"},"Flattr"),"."))},J=n(182),X=n.n(J),K=n(180),Z=n.n(K);t.a=function(e){return r.a.createElement(i.StaticQuery,{query:"688602459",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement("title",null,t.site.siteMetadata.title),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Unica+One&text=Secret%20Unspoken",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Spectral|Karla",rel:"stylesheet"}),r.a.createElement("meta",{name:"Description",content:t.site.siteMetadata.description}),r.a.createElement("meta",{name:"flattr:id",content:"vlp70e"}),r.a.createElement("html",{lang:"en"})),r.a.createElement(X.a,{smDown:!0},r.a.createElement(m,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.tagline})),r.a.createElement(X.a,{mdUp:!0},r.a.createElement(h,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.tagline})),r.a.createElement("div",{className:Z.a.layout},e.children),r.a.createElement(L,null),r.a.createElement(Y,null),r.a.createElement(W,{gaTrackingId:t.site.siteMetadata.gaTrackingId}),r.a.createElement(z,null),r.a.createElement(X.a,{mdUp:!0},r.a.createElement(Q.Location,null,function(e){var t=e.location;return r.a.createElement(M,{location:t})})))},data:a})}},202:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(231),i=n.n(r),c=n(182),l=n.n(c);t.a=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{smDown:!0},o.a.createElement(i.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.msg,ContentProps:{"aria-describedby":"message-id"},message:o.a.createElement("div",{id:"message-id"},e.msg)})),o.a.createElement(l.a,{mdUp:!0},o.a.createElement(i.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:e.msg,ContentProps:{"aria-describedby":"message-id"},message:o.a.createElement("div",{id:"message-id"},e.msg)})))}},203:function(e,t,n){e.exports={meta:"HeaderMeta-module--meta--1iWAQ"}},205:function(e,t,n){e.exports={metaHeading:"PostHeader-module--meta-heading--2nY_2"}},209:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(203),i=n.n(r),c=function(e){return o.a.createElement("span",{className:i.a.meta},e.prefix,e.children)};c.defaultProps={prefix:""};var l=c,s=n(205),u=n.n(s);t.a=function(e){return o.a.createElement("div",{className:u.a.metaHeading},o.a.createElement("div",null,o.a.createElement(l,null,e.date),e.wordCount&&o.a.createElement(o.a.Fragment,null,o.a.createElement(l,null,"•"),o.a.createElement(l,null,(t=e.wordCount,Math.round(t/250))," min read"))),o.a.createElement("h2",null,e.title));var t}},262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a=void 0;return function(){var o=this,r=arguments,i=n&&!a;window.clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(o,r)},t),i&&e.apply(o,r)}}},354:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var a=n(355),o=n(356),r=n(357);t.CommentCount=a.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=r.DiscussionEmbed;var i={CommentCount:a.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:r.DiscussionEmbed};t.default=i},355:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a},c=n(262);var l=(0,c.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},356:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a},c=n(262);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()},358:function(e,t,n){var a=n(6);a(a.S,"Date",{now:function(){return(new Date).getTime()}})},359:function(e,t,n){e.exports={container:"StoryEngagement-module--container--2vsAN",buttonContent:"StoryEngagement-module--button-content--mOe6Z"}},361:function(e,t,n){"use strict";var a=n(362).CopyToClipboard;a.CopyToClipboard=a,e.exports=a},362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=c(n(0)),i=c(n(363));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(t.CopyToClipboard=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,c=Array(o),s=0;s<o;s++)c[s]=arguments[s];return n=a=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.onClick=function(e){var t=a.props,n=t.text,o=t.onCopy,c=t.children,l=t.options,s=r.default.Children.only(c),u=(0,i.default)(n,l);o&&o(n,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e)},l(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default.PureComponent),o(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,a({},n,{onClick:this.onClick}))}}]),t}()).defaultProps={onCopy:void 0,options:void 0}},363:function(e,t,n){"use strict";var a=n(364),o="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var n,r,i,c,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(i=a(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",document.body.appendChild(s),c.selectNode(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(a){n&&console.error("unable to copy using execCommand: ",a),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",e),u=!0}catch(a){n&&console.error("unable to copy using clipboardData: ",a),n&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:o),window.prompt(r,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},364:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},376:function(e,t,n){"use strict";var a=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=(0,a(n(197)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),o.default.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})),"Link");t.default=r},377:function(e,t,n){e.exports={container:"PostLink-module--container--L5cIX"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-16099f9eb9bb78dc98fa.js.map