(this["webpackJsonpbibble-site"]=this["webpackJsonpbibble-site"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(6),s=n.n(c),i=(n(11),n(2)),u=n.n(i),o=n(4),f=n(3),l=(n(13),n(0)),j=function(e){return e[Math.floor(Math.random()*e.length)]},b=function(){var e=a.a.useState(),t=Object(f.a)(e,2),n=t[0],r=t[1],c=function(){var e=a.a.useState(),t=Object(f.a)(e,2),n=t[0],r=t[1];return a.a.useEffect((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data.json");case 2:return t=e.sent,e.t0=r,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n}();return a.a.useEffect((function(){if(c&&!n){var e=j(["real_verses","fake_verses"]),t=j(c[e]);r({key:e,text:t})}}),[c,n]),[n,function(){return r(void 0)}]},h=function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://bibble-worker.loqwai.workers.dev/guesses",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.onAnswer;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"Real",onClick:function(){return t("real")},children:"Real"}),Object(l.jsx)("button",{className:"Fake",onClick:function(){return t("fake")},children:"Fake"})]})},p=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Real"}),Object(l.jsx)("img",{src:"real.jpg",alt:"buddy christ",className:"Real"})]})},v=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Fake"}),Object(l.jsx)("img",{src:"fake.jpg",alt:"the charletan",className:"Fake"})]})},x={real_verses:Object(l.jsx)(p,{}),fake_verses:Object(l.jsx)(v,{})};var O=function(){var e=b(),t=Object(f.a)(e,2),n=t[0],r=t[1],c=a.a.useState(!0),s=Object(f.a)(c,2),i=s[0],j=s[1];if(!n)return null;var p=function(){var e=Object(o.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!1),r="fake_verses"===n.key?"fake":"real",e.next=4,h({verse:n.text,answer:t,correctAnswer:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"Content",children:[Object(l.jsx)("p",{children:n.text}),i||x[n.key],i?Object(l.jsx)(d,{onAnswer:p}):Object(l.jsx)("button",{className:"Try-Again",onClick:function(){j(!0),r()},children:"Try Again"})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),k()}},[[15,1,2]]]);
//# sourceMappingURL=main.63ed1e79.chunk.js.map