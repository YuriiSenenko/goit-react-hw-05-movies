"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,t,n){n.r(t);var r=n(885),i=n(791),s=n(689),a=n(731),o=n(184);t.default=function(){var e,t,n=(0,s.UO)().movieId,c=(0,i.useState)(null),l=(0,r.Z)(c,2),h=l[0],d=l[1],v=(0,s.TH)();if((0,i.useEffect)((function(){fetch("\nhttps://api.themoviedb.org/3/movie/".concat(n,"?api_key=a0d13cdb64d238d9f40292183aa77574&language=en-US")).then((function(e){return e.json()})).then(console.log()).then((function(e){var t=e.title,n=e.overview,r=e.vote_average,i=e.genres,s=e.poster_path,a=e.release_date;d({title:t,overview:n,vote_average:r,genres:i,poster_path:s,release_date:a})})).catch((function(e){alert(e)}))}),[n]),h){var u=h.title,j=h.overview,p=h.vote_average,f=h.genres,x=h.poster_path,m=h.release_date,g=null!==(e=null===(t=v.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(a.rU,{to:g,children:"Go back"}),(0,o.jsx)("img",{src:"https://www.themoviedb.org/t/p/w500".concat(x),alt:""}),(0,o.jsxs)("h1",{children:[u," (",function(){if(m)return m.slice(0,4)}(),")"]}),(0,o.jsxs)("p",{children:["Rating: ",p.toFixed(1)]}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:j}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("p",{children:f.map((function(e){return e.name})).join(" ")})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h4",{children:"Additional information"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"cast",state:v.state,children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"reviews",state:v.state,children:"Reviews"})})]}),(0,o.jsx)(s.j3,{})]})]})}}}}]);
//# sourceMappingURL=884.326149ff.chunk.js.map