"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[167],{167:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r,c=n(885),u=n(791),i=n(596),a=n(184),o=function(t){var e=t.onSubmit,n=(0,u.useState)(""),r=(0,c.Z)(n,2),o=r[0],s=r[1];return(0,a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==o.trim()?e(o):i.Am.info("The search field is empty!")},children:[(0,a.jsx)("input",{type:"text",value:o,onChange:function(t){s(t.currentTarget.value)}}),(0,a.jsx)("button",{type:"submit",children:"Search"})]})},s=n(731),f=n(689),l=n(168),h=n(444).ZP.li(r||(r=(0,l.Z)(["\n  margin-top: 5px;\n"]))),d=function(){var t,e=(0,u.useState)(""),n=(0,c.Z)(e,2),r=n[0],i=n[1],l=(0,u.useState)([]),d=(0,c.Z)(l,2),m=d[0],p=d[1],v=(0,s.lr)(),x=(0,c.Z)(v,2),b=x[0],j=x[1],k=null!==(t=b.get("q"))&&void 0!==t?t:"",S=(0,f.TH)();(0,u.useEffect)((function(){i(k),""!==r&&fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat("a0d13cdb64d238d9f40292183aa77574","&query=").concat(r)).then((function(t){return t.json()})).then((function(t){var e=t.results;p(e)})).catch((function(t){alert(t)}))}),[r,k]);return(0,a.jsxs)("div",{children:[(0,a.jsx)(o,{onSubmit:function(t){i(t),j({q:t})}}),(0,a.jsx)("ul",{children:m.map((function(t){var e=t.id,n=t.title;return(0,a.jsx)(h,{children:(0,a.jsx)(s.rU,{to:"".concat(e),state:{from:S},children:n})},e)}))})]})}}}]);
//# sourceMappingURL=167.53275656.chunk.js.map