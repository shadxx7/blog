(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{187:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),i=a.n(r),n=a(58),o=a.n(n);a.d(t,"a",function(){return o.a});a(189);var s=i.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,r=e.query,n=e.render,o=a?a.data:t[r]&&t[r].data;return i.a.createElement(i.a.Fragment,null,o&&n(o),!o&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,r=e.render,n=e.children;return i.a.createElement(s.Consumer,null,function(e){return i.a.createElement(l,{data:t,query:a,render:r||n,staticQueryData:e})})}},188:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(198),i=a.n(r),n=a(200),o=a.n(n);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new i.a(o.a);var l=s.rhythm,d=s.scale},189:function(e,t,a){var r;e.exports=(r=a(192))&&r.default||r},190:function(e,t,a){"use strict";a(16);var r=a(0),i=a.n(r),n=a(187),o=a(201),s=a(202),l=a.n(s),d=a(188);var c=function(e){var t,r;function s(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){e(a.state.toggle?"dark":"light"),a.setState({toggle:!a.state.toggle})},a.state={toggle:!1},a}return r=e,(t=s).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,s.prototype.render=function(){var e=this,t=this.props,r=t.title,s=t.children,c=i.a.createElement("h1",{style:Object.assign({},Object(d.b)(.8),{marginBottom:Object(d.a)(1.5),marginTop:0,marginRight:"30%"})},i.a.createElement(n.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r));return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(d.a)(24),padding:Object(d.a)(1.5)+" "+Object(d.a)(.75)}},i.a.createElement("header",{style:{display:"flex"}},c,i.a.createElement(o.ThemeToggler,null,function(t){var r=t.theme,n=t.toggleTheme;return i.a.createElement(l.a,{onChange:function(){return e.handleChange(n)},checked:"dark"===r,offColor:"#000",onColor:"#fff",onHandleColor:"#000",checkedIcon:i.a.createElement("img",{src:a(193),style:{margin:6,width:17,height:"auto"},alt:"."}),uncheckedIcon:i.a.createElement("img",{src:a(194),style:{margin:6,width:17,height:"auto"},alt:"."})})})),i.a.createElement("main",null,s),i.a.createElement("footer",null,"© ",(new Date).getFullYear()," Mohamed Shadab, Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},s}(i.a.Component);t.a=c},191:function(e,t,a){"use strict";var r=a(195),i=a(0),n=a.n(i),o=a(203),s=a.n(o);function l(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,l=e.title,d=r.data.site,c=t||d.siteMetadata.description;return n.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},t.a=l},192:function(e,t,a){"use strict";a.r(t);a(16);var r=a(0),i=a.n(r),n=a(88);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},193:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJzdW4iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1zdW4gZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yNTYgMTYwYy01Mi45IDAtOTYgNDMuMS05NiA5NnM0My4xIDk2IDk2IDk2IDk2LTQzLjEgOTYtOTYtNDMuMS05Ni05Ni05NnptMjQ2LjQgODAuNWwtOTQuNy00Ny4zIDMzLjUtMTAwLjRjNC41LTEzLjYtOC40LTI2LjUtMjEuOS0yMS45bC0xMDAuNCAzMy41LTQ3LjQtOTQuOGMtNi40LTEyLjgtMjQuNi0xMi44LTMxIDBsLTQ3LjMgOTQuN0w5Mi43IDcwLjhjLTEzLjYtNC41LTI2LjUgOC40LTIxLjkgMjEuOWwzMy41IDEwMC40LTk0LjcgNDcuNGMtMTIuOCA2LjQtMTIuOCAyNC42IDAgMzFsOTQuNyA0Ny4zLTMzLjUgMTAwLjVjLTQuNSAxMy42IDguNCAyNi41IDIxLjkgMjEuOWwxMDAuNC0zMy41IDQ3LjMgOTQuN2M2LjQgMTIuOCAyNC42IDEyLjggMzEgMGw0Ny4zLTk0LjcgMTAwLjQgMzMuNWMxMy42IDQuNSAyNi41LTguNCAyMS45LTIxLjlsLTMzLjUtMTAwLjQgOTQuNy00Ny4zYzEzLTYuNSAxMy0yNC43LjItMzEuMXptLTE1NS45IDEwNmMtNDkuOSA0OS45LTEzMS4xIDQ5LjktMTgxIDAtNDkuOS00OS45LTQ5LjktMTMxLjEgMC0xODEgNDkuOS00OS45IDEzMS4xLTQ5LjkgMTgxIDAgNDkuOSA0OS45IDQ5LjkgMTMxLjEgMCAxODF6Ij48L3BhdGg+PC9zdmc+"},194:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJtb29uIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtbW9vbiBmYS13LTE2IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMjgzLjIxMSA1MTJjNzguOTYyIDAgMTUxLjA3OS0zNS45MjUgMTk4Ljg1Ny05NC43OTIgNy4wNjgtOC43MDgtLjYzOS0yMS40My0xMS41NjItMTkuMzUtMTI0LjIwMyAyMy42NTQtMjM4LjI2Mi03MS41NzYtMjM4LjI2Mi0xOTYuOTU0IDAtNzIuMjIyIDM4LjY2Mi0xMzguNjM1IDEwMS40OTgtMTc0LjM5NCA5LjY4Ni01LjUxMiA3LjI1LTIwLjE5Ny0zLjc1Ni0yMi4yM0EyNTguMTU2IDI1OC4xNTYgMCAwIDAgMjgzLjIxMSAwYy0xNDEuMzA5IDAtMjU2IDExNC41MTEtMjU2IDI1NiAwIDE0MS4zMDkgMTE0LjUxMSAyNTYgMjU2IDI1NnoiPjwvcGF0aD48L3N2Zz4="},195:function(e){e.exports={data:{site:{siteMetadata:{title:"Mohamed Shadab",description:"A starter blog demonstrating what Gatsby can do.",author:"Mohamed Shadab"}}}}},196:function(e,t,a){"use strict";a(197);var r=a(206),i=a(0),n=a.n(i),o=a(187),s=a(207),l=a.n(s),d=a(188);var c="4007731267";t.a=function(){return n.a.createElement(o.b,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Yeah, I write. Catch up with me on"," ",n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"twitter.")))},data:r})}},197:function(e,t,a){"use strict";a(205)("fixed",function(e){return function(){return e(this,"tt","","")}})},205:function(e,t,a){var r=a(6),i=a(8),n=a(36),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},206:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAbsKjKK6lk0YAsoX/8QAGhAAAwEBAQEAAAAAAAAAAAAAAQIDEQASMv/aAAgBAQABBQL0OteootAV3rOPYsoD/LgY+b//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPwEj/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQIBAT8BY//EAB4QAAEEAQUAAAAAAAAAAAAAAAABECEiAxExQXGB/9oACAEBAAY/AiuTzQRWrJMMvRtwf//EABoQAQADAQEBAAAAAAAAAAAAAAEAETEhYUH/2gAIAQEAAT8h9YpoAeSSHFLiKvtEsH6QYFVZs9GYjAQgFHjZ/9oADAMBAAIAAwAAABA3B8D/xAAYEQADAQEAAAAAAAAAAAAAAAAAARExEP/aAAgBAwEBPxCXpWLOf//EABYRAQEBAAAAAAAAAAAAAAAAAAEQUf/aAAgBAgEBPxBZCf/EAB0QAQADAAMAAwAAAAAAAAAAAAEAESExUWFBgdH/2gAIAQEAAT8Q8MX8gdzwX5f2KpRo6U4loqBapGrKAJeXRVeQRLFnB9y3LRphUCJyX0szcNNPE//Z",width:50,height:50,src:"/blog/static/fbff83cefa7a0ed2bee39186bf089023/9b664/profile-pic.jpg",srcSet:"/blog/static/fbff83cefa7a0ed2bee39186bf089023/9b664/profile-pic.jpg 1x,\n/blog/static/fbff83cefa7a0ed2bee39186bf089023/06a10/profile-pic.jpg 1.5x,\n/blog/static/fbff83cefa7a0ed2bee39186bf089023/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Mohamed Shadab",social:{twitter:"statebait"}}}}}},207:function(e,t,a){"use strict";a(28),a(24),a(12),a(64),a(124),a(197);var r=a(14);t.__esModule=!0,t.default=void 0;var i,n=r(a(60)),o=r(a(62)),s=r(a(125)),l=r(a(126)),d=r(a(0)),c=r(a(61)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=M([].concat(t.fluid))),t.fixed&&(t.fixed=M([].concat(t.fixed))),t},A=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),f=function(e){var t=u(e),a=A(t);return g[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,y=new WeakMap;function b(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function M(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function j(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+d+o+s+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(N,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},N=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},g,{onLoad:o,onError:c,ref:t,loading:u,draggable:A,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var T=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&f(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,A=void 0===c?{}:c,g=e.placeholderClassName,f=e.fluid,p=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,y=e.Tag,M=e.itemProp,S=e.loading,L=e.draggable,T=!1===this.state.fadeIn||this.state.imgLoaded,v=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:T?1:0,transition:v?"opacity "+h+"ms":"none"},s),O="boolean"==typeof m?"lightgray":m,D={transitionDelay:h+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},v&&D,s,A),Q={title:t,alt:this.state.isVisible?"":a,style:z,className:g};if(f){var Y=f,C=Y[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),O&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},v&&D)}),C.base64&&d.default.createElement(w,{src:C.base64,spreadProps:Q,imageVariants:Y,generateSources:j}),C.tracedSVG&&d.default.createElement(w,{src:C.tracedSVG,spreadProps:Q,imageVariants:Y,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,b(Y),d.default.createElement(N,{alt:a,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:M,loading:S,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:S},C,{imageVariants:Y}))}}))}if(p){var B=p,R=B[0],k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete k.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},O&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:O,width:R.width,opacity:this.state.imgLoaded?0:1,height:R.height},v&&D)}),R.base64&&d.default.createElement(w,{src:R.base64,spreadProps:Q,imageVariants:B,generateSources:j}),R.tracedSVG&&d.default.createElement(w,{src:R.tracedSVG,spreadProps:Q,imageVariants:B,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,b(B),d.default.createElement(N,{alt:a,title:t,width:R.width,height:R.height,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:M,loading:S,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,l.default)({alt:a,title:t,loading:S},R,{imageVariants:B}))}}))}return null},t}(d.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});T.propTypes={resolutions:v,sizes:x,fixed:c.default.oneOfType([v,c.default.arrayOf(v)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var O=T;t.default=O}}]);
//# sourceMappingURL=1-13b8dba139bfae59177e.js.map