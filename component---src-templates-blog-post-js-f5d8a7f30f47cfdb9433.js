(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(164),a=n(163),u=n(354),s=n.n(u),c=(n(358),n(7)),l=n.n(c),d=n(379),p=n.n(d),f=n(213),m=function(e){return r.a.createElement(f.a,e,e.children)},h=n(360),y=n.n(h),v=n(362),w=n(232),b=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).state={copied:!1,href:null},t.handleCopy=function(e){clearTimeout(t.copyId),t.setState({copied:!0}),t.copyId=setTimeout(function(){return t.setState({copied:!1})},5e3),window.ga&&window.ga("send","event",{eventCategory:"Sharing",eventAction:e,eventLabel:"Sharing Campaign",eventValue:1})},t}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){if(window.URL){var e=new window.URL(this.props.url);e.searchParams.append("suid",Date.now()),this.setState({href:e.href})}else this.setState({href:this.props.url})},n.componentWillUnmount=function(){clearTimeout(this.copyId)},n.render=function(){return this.state.href?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.container},r.a.createElement(m,null,r.a.createElement(v.CopyToClipboard,{text:this.state.href,onCopy:this.handleCopy},r.a.createElement("div",{className:y.a.buttonContent},r.a.createElement(p.a,null),r.a.createElement("pre",null," Copy Page URL"))))),r.a.createElement(w.a,{msg:this.state.copied&&"URL copied to clipboard"})):null},t}(r.a.Component),g=n(203),C=n(4),E=n.n(C),_=n(150),S=n(380),O=n.n(S),k=r.a.createElement("span",null,"→"),x=r.a.createElement("span",null,"←"),P=function(){window.ga&&window.ga("send","event",{eventCategory:"Retention",eventAction:"next post",eventLabel:"Retention Campaign",eventValue:1})},j=function(e){return r.a.createElement("div",{className:O.a.container},r.a.createElement("pre",null,r.a.createElement(_.Link,{onClick:P,to:e.to},e.isNext?null:x," ",e.children," ",e.isNext?k:null)))};j.propTypes={isNext:E.a.bool.isRequired},j.defaultProps={isNext:!0};var I=j;n.d(t,"query",function(){return D});t.default=function(e){var t=e.data,n=e.location,o=e.pageContext,u=t.site.siteMetadata,c=t.markdownRemark,l={url:n.href,identifier:c.fields.slug,title:c.frontmatter.title},d=o.prev,p=o.next;return r.a.createElement(i.a,null,r.a.createElement(a.a,null,r.a.createElement(g.a,{title:c.frontmatter.title,date:c.frontmatter.date,wordCount:c.wordCount.words}),r.a.createElement(b,{url:n.href}),r.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:c.html}}),p&&r.a.createElement(I,{isNext:!0,to:p.fields.slug},p.frontmatter.title),d&&r.a.createElement(I,{isNext:!1,to:d.fields.slug},d.frontmatter.title),r.a.createElement(s.a.DiscussionEmbed,{shortname:u.shortname,config:l})))};var D="3523184500"},199:function(e,t,n){e.exports={meta:"HeaderMeta-module--meta--1iWAQ"}},201:function(e,t,n){e.exports={metaHeading:"PostHeader-module--meta-heading--2nY_2"}},203:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(199),a=n.n(i),u=function(e){return r.a.createElement("span",{className:a.a.meta},e.prefix,e.children)};u.defaultProps={prefix:""};var s=u,c=n(201),l=n.n(c);t.a=function(e){return r.a.createElement("div",{className:l.a.metaHeading},r.a.createElement("div",null,r.a.createElement(s,null,e.date),e.wordCount&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null,"•"),r.a.createElement(s,null,(t=e.wordCount,Math.round(t/250))," min read"))),r.a.createElement("h2",null,e.title));var t}},260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,i=arguments,a=n&&!o;window.clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(r,i)},t),a&&e.apply(r,i)}}},354:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n(355),r=n(356),i=n(357);t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},355:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),a=(o=i)&&o.__esModule?o:{default:o},u=n(260);var s=(0,u.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?s():(0,u.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,u.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},356:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),a=(o=i)&&o.__esModule?o:{default:o};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),a=(o=i)&&o.__esModule?o:{default:o},u=n(260);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,u.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,u.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}()},358:function(e,t,n){var o=n(6);o(o.S,"Date",{now:function(){return(new Date).getTime()}})},360:function(e,t,n){e.exports={container:"StoryEngagement-module--container--2vsAN",buttonContent:"StoryEngagement-module--button-content--mOe6Z"}},362:function(e,t,n){"use strict";var o=n(363).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},363:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=u(n(0)),a=u(n(364));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(t.CopyToClipboard=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,u=Array(r),c=0;c<r;c++)u[c]=arguments[c];return n=o=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.onClick=function(e){var t=o.props,n=t.text,r=t.onCopy,u=t.children,s=t.options,c=i.default.Children.only(u),l=(0,a.default)(n,s);r&&r(n,l),c&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(e)},s(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.PureComponent),r(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["text","onCopy","options","children"]),r=i.default.Children.only(t);return i.default.cloneElement(r,o({},n,{onClick:this.onClick}))}}]),t}()).defaultProps={onCopy:void 0,options:void 0}},364:function(e,t,n){"use strict";var o=n(365),r="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var n,i,a,u,s,c,l=!1;t||(t={}),n=t.debug||!1;try{if(a=o(),u=document.createRange(),s=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",document.body.appendChild(c),u.selectNode(c),s.addRange(u),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");l=!0}catch(o){n&&console.error("unable to copy using execCommand: ",o),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",e),l=!0}catch(o){n&&console.error("unable to copy using clipboardData: ",o),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:r),window.prompt(i,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(u):s.removeAllRanges()),c&&document.body.removeChild(c),a()}return l}},365:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},379:function(e,t,n){"use strict";var o=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),i=(0,o(n(162)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})),"Link");t.default=i},380:function(e,t,n){e.exports={container:"PostLink-module--container--L5cIX"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f5d8a7f30f47cfdb9433.js.map