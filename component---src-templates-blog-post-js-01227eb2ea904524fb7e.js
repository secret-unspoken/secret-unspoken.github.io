(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l});var o=n(0),a=n.n(o),r=n(178),i=n(175),s=n(193),c=n(343),u=n.n(c);t.default=function(e){var t=e.data,n=e.location,o=t.site.siteMetadata,c=t.markdownRemark,l={url:n.href,identifier:c.fields.slug,title:c.frontmatter.title};return a.a.createElement(r.a,null,a.a.createElement(i.a,null,a.a.createElement(s.a,null,c.frontmatter.date),a.a.createElement("h2",null,c.frontmatter.title),a.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:c.html}}),a.a.createElement(u.a.DiscussionEmbed,{shortname:o.shortname,config:l})))};var l="4288110627"},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var o=n(0),a=n.n(o),r=n(4),i=n.n(r),s=n(151),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(160),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var d=n(35);n.d(t,"parsePath",function(){return d.a});var m=a.a.createContext({}),f=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t,n){var o;e.exports=(o=n(163))&&o.default||o},161:function(e,t,n){e.exports={nav:"DesktopHeader-module--nav--2zrh7",navLeft:"DesktopHeader-module--nav-left--2TxDW",navCenter:"DesktopHeader-module--nav-center--ttWLF",navRight:"DesktopHeader-module--nav-right--2D3-i",title:"DesktopHeader-module--title--1J792"}},162:function(e){e.exports={data:{site:{siteMetadata:{title:"Secret Unspoken",subtitle:"Talking about the secret most men have but won't share"}}}}},163:function(e,t,n){"use strict";n.r(t);n(36);var o=n(0),a=n.n(o),r=n(4),i=n.n(r),s=n(51),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},164:function(e,t,n){e.exports={navLink:"NavLink-module--nav-link--3_r93"}},167:function(e,t,n){e.exports={nav:"MobileHeader-module--nav--16cOU"}},169:function(e,t,n){e.exports={bottomNav:"MobileFooter-module--bottom-nav--DYFFf",selected:"MobileFooter-module--selected--2EPyE"}},171:function(e,t,n){e.exports={copyright:"CopyrightNotice-module--copyright--jOFQ3"}},173:function(e,t,n){e.exports={layout:"Layout-module--layout--3AkVA"}},175:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(176),i=n.n(r),s=function(e){return a.a.createElement("div",{className:i.a.column,style:{maxWidth:e.maxWidth}},e.children)};s.defaultProps={maxWidth:500},t.a=s},176:function(e,t,n){e.exports={column:"Column-module--column--3xN4I"}},178:function(e,t,n){"use strict";var o=n(162),a=n(0),r=n.n(a),i=n(152),s=n(164),c=n.n(s),u=function(e){return r.a.createElement(i.Link,{className:c.a.navLink,to:e.to},e.children)},l=n(161),d=n.n(l),m=function(e){return r.a.createElement("nav",{className:d.a.nav},r.a.createElement("div",{className:d.a.navLeft}),r.a.createElement("div",{className:d.a.navCenter},r.a.createElement(i.Link,{to:"/",className:d.a.title},r.a.createElement("h1",null,e.title))),r.a.createElement("div",{className:d.a.navRight},r.a.createElement(u,{to:"/"},"Home"),r.a.createElement(u,{to:"/posts"},"Posts"),r.a.createElement(u,{to:"/me"},"Me")))},f=n(167),p=n.n(f),h=function(e){return r.a.createElement("nav",{className:p.a.nav},r.a.createElement(i.Link,{to:"/",className:d.a.title},r.a.createElement("h1",null,e.title)))},v=n(7),y=n.n(v),b=n(184),w=n.n(b),E=n(187),g=n.n(E),C=n(190),k=n.n(C),_=n(191),S=n.n(_),D=n(189),O=n.n(D),q=n(197),j=n(169),I=n.n(j),P=Object(q.a)(q.b,Object(q.d)(q.c),Object(q.e)("/")),x={home:0,posts:1,me:2},M=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))||this).state={value:null},t.handleChange=function(e,n){t.setState({value:n})},t}y()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=P(this.props.location.pathname);this.setState({value:x[e]||0})},n.render=function(){return r.a.createElement(w.a,{className:I.a.bottomNav,value:this.state.value,onChange:this.handleChange,showLabels:!0},r.a.createElement(g.a,{classes:{selected:I.a.selected},label:"Home",icon:r.a.createElement(O.a,null),component:i.Link,to:"/"}),r.a.createElement(g.a,{classes:{selected:I.a.selected},label:"Posts",icon:r.a.createElement(k.a,null),component:i.Link,to:"/posts"}),r.a.createElement(g.a,{classes:{selected:I.a.selected},label:"Me",icon:r.a.createElement(S.a,null),component:i.Link,to:"/me"}))},t}(r.a.Component),N=n(192),U=n.n(N),L=n(171),T=n.n(L),Q=function(e){return r.a.createElement("div",{className:T.a.copyright},"Secret Unspoken © ",(new Date).getFullYear())},R=n(13),W=n(182),F=n.n(W),H=n(173),G=n.n(H);t.a=function(e){return r.a.createElement(i.StaticQuery,{query:"3289377477",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement("title",null,t.site.siteMetadata.title),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Unica+One&text=Secret%20Unspoken",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Spectral|Karla",rel:"stylesheet"}),r.a.createElement("meta",{name:"Description",content:"A blog about men's sexuality and sexual addiction"}),r.a.createElement("html",{lang:"en"})),r.a.createElement(F.a,{smDown:!0},r.a.createElement(m,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.subtitle})),r.a.createElement(F.a,{mdUp:!0},r.a.createElement(h,{title:t.site.siteMetadata.title,subtitle:t.site.siteMetadata.subtitle})),r.a.createElement("div",{className:G.a.layout},e.children),r.a.createElement(Q,null),r.a.createElement(F.a,{mdUp:!0},r.a.createElement(R.Location,null,function(e){var t=e.location;return r.a.createElement(M,{location:t})})))},data:o})}},193:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(194),i=n.n(r),s=function(e){return a.a.createElement("span",{className:i.a.date},e.prefix,e.children)};s.defaultProps={prefix:""},t.a=s},194:function(e,t,n){e.exports={date:"DateOfPost-module--date--DJNDV"}},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var a=this,r=arguments,i=n&&!o;window.clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(a,r)},t),i&&e.apply(a,r)}}},343:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n(344),a=n(345),r=n(346);t.CommentCount=o.CommentCount,t.CommentEmbed=a.CommentEmbed,t.DiscussionEmbed=r.DiscussionEmbed;var i={CommentCount:o.CommentCount,CommentEmbed:a.CommentEmbed,DiscussionEmbed:r.DiscussionEmbed};t.default=i},344:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=(o=r)&&o.__esModule?o:{default:o},s=n(250);var c=(0,s.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?c():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},345:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=(o=r)&&o.__esModule?o:{default:o};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},346:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=(o=r)&&o.__esModule?o:{default:o},s=n(250);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-01227eb2ea904524fb7e.js.map