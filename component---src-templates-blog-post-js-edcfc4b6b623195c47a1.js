(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{yZlL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("6Gk8"),m=a("Bl7J"),o=a("vrFN"),c=a("p3AD");t.default=function(e){var t=Object(n.useState)({minutes:0}),a=t[0],s=t[1];Object(n.useEffect)((function(){var t=document.createElement("span");t.innerHTML=e.data.markdownRemark.html,s({minutes:t.textContent.split(" ").length/200})}),[e.data.markdownRemark.html]);var d=e.data.markdownRemark,u=e.data.site.siteMetadata.title,p=e.pageContext,f=p.previous,E=p.next;return l.a.createElement(m.a,{location:e.location,title:u},l.a.createElement(o.a,{title:d.frontmatter.title,description:d.frontmatter.description||d.excerpt}),l.a.createElement("h1",null,d.frontmatter.title),l.a.createElement("p",{style:Object.assign({},Object(c.b)(-.2),{display:"block",marginBottom:Object(c.a)(1),marginTop:Object(c.a)(-1)})},d.frontmatter.date," • ",a.minutes.toFixed(0)," min read"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.html}}),l.a.createElement("hr",{style:{marginBottom:Object(c.a)(1)}}),l.a.createElement(i.a,null),l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,f&&l.a.createElement(r.Link,{to:f.fields.slug,rel:"prev"},"← ",f.frontmatter.title)),l.a.createElement("li",null,E&&l.a.createElement(r.Link,{to:E.fields.slug,rel:"next"},E.frontmatter.title," →"))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-edcfc4b6b623195c47a1.js.map