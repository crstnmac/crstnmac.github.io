(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[457,281,962,588,346],{5637:function(e,t,s){Promise.resolve().then(s.bind(s,2626))},2626:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return r}});var n=s(9268),i=s(724),l=s(6006);async function c(){let e=await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@devcriston");if(!e.ok)throw Error("Failed to fetch data");return e.json()}async function r(){let[e,t]=(0,l.useState)({items:[]}),s=(0,l.useCallback)(async()=>{let e=await c();t(e)},[]);return(0,l.useEffect)(()=>{s()},[s]),(0,n.jsxs)(i.xu,{as:"section",className:"h-full flex flex-col justify-between",children:[e&&e.items&&e.items.map((e,t)=>(0,n.jsx)("ol",{children:(0,n.jsx)("li",{children:(0,n.jsx)(i.rU,{href:e.link,animatedUnderline:!0,children:e.title})})},t)),(0,n.jsx)(i.xu,{fullSize:!0,className:"mt-auto mb-0 mx-0",children:(0,n.jsx)(i.x$,{})})]})}}},function(e){e.O(0,[611,24,526,667,488,744],function(){return e(e.s=5637)}),_N_E=e.O()}]);