"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[828],{828:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(885),c=n(791),u=n(596),i=n(184),a=function(t){var e=t.onSubmit,n=(0,c.useState)(""),a=(0,r.Z)(n,2),o=a[0],s=a[1];return(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==o.trim()?e(o):u.Am.info("The search field is empty!")},children:[(0,i.jsx)("input",{type:"text",value:o,onChange:function(t){s(t.currentTarget.value)}}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})},o=n(731),s=n(689),f=function(){var t,e=(0,c.useState)(""),n=(0,r.Z)(e,2),u=n[0],f=n[1],l=(0,c.useState)([]),h=(0,r.Z)(l,2),d=h[0],m=h[1],p=(0,o.lr)(),v=(0,r.Z)(p,2),b=v[0],j=v[1],x=null!==(t=b.get("q"))&&void 0!==t?t:"",k=(0,s.TH)();(0,c.useEffect)((function(){f(x),""!==u&&fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("a0d13cdb64d238d9f40292183aa77574","&query=").concat(u)).then((function(t){return t.json()})).then((function(t){var e=t.results;m(e)})).catch((function(t){alert(t)}))}),[u,x]);return(0,i.jsxs)("div",{children:[(0,i.jsx)(a,{onSubmit:function(t){f(t),j({q:t})}}),(0,i.jsx)("ul",{children:d.map((function(t){var e=t.id,n=t.title;return(0,i.jsx)("li",{children:(0,i.jsx)(o.rU,{to:"".concat(e),state:{from:k},children:n})},e)}))})]})}}}]);
//# sourceMappingURL=828.793d878d.chunk.js.map