(this["webpackJsonpbibble-site"]=this["webpackJsonpbibble-site"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(5),a=n.n(s),i=(n(11),n(4)),u=n.n(i),o=n(6),j=n(2),l=(n(13),n(0)),b=function(e){return e[Math.floor(Math.random()*e.length)]},f=function(){var e=r.a.useState(),t=Object(j.a)(e,2),n=t[0],c=t[1],s=function(){var e=r.a.useState(),t=Object(j.a)(e,2),n=t[0],c=t[1];return r.a.useEffect((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data.json");case 2:return t=e.sent,e.t0=c,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),n}();return r.a.useEffect((function(){if(s&&!n){var e=b(["real_verses","fake_verses"]),t=b(s[e]);c({key:e,text:t})}}),[s,n]),[n,function(){return c(void 0)}]},h=function(e){var t=e.onChoose;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"Real",onClick:function(){return t("real_verses")},children:"Real"}),Object(l.jsx)("button",{className:"Fake",onClick:function(){return t("fake_verses")},children:"Fake"})]})},d=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Real"}),Object(l.jsx)("img",{src:"real.jpg",alt:"buddy christ",className:"Real"})]})},x=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Fake"}),Object(l.jsx)("img",{src:"fake.jpg",alt:"the charletan",className:"Fake"})]})},O={real_verses:Object(l.jsx)(d,{}),fake_verses:Object(l.jsx)(x,{})};var v=function(){var e=f(),t=Object(j.a)(e,2),n=t[0],c=t[1],s=r.a.useState(!0),a=Object(j.a)(s,2),i=a[0],u=a[1];return n?Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"Content",children:[Object(l.jsx)("p",{children:n.text}),i||O[n.key],i?Object(l.jsx)(h,{onChoose:function(){return u(!1)}}):Object(l.jsx)("button",{className:"Try-Again",onClick:function(){u(!0),c()},children:"Try Again"})]})}):null},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.67612ef6.chunk.js.map