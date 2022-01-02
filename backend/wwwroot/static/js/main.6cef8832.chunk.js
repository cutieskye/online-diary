(this.webpackJsonpdiary=this.webpackJsonpdiary||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),s=n(18),i=n(9),u=n(14),l=n(4),j=n(7),d=n(19),b=function(){return Object(s.b)()},f=n(6),h=n(3),p=n.n(h),O=n(5),m="https://localhost:6969/api",x=(new Date((new Date).setHours((new Date).getHours()+1)).toString(),Object(f.b)("user/login",function(){var e=Object(O.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return n="".concat(m,"/login/"),e.next=5,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:if((a=e.sent).ok){e.next=8;break}throw new Error(a.statusText);case 8:return e.next=10,a.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),g=x,N=Object(f.b)("user/register",function(){var e=Object(O.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return n="".concat(m,"/register/"),e.next=5,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:if((a=e.sent).ok){e.next=8;break}throw new Error(a.statusText);case 8:return e.next=10,a.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=N,w={userName:localStorage.getItem("USERNAME"),auth:{token:localStorage.getItem("TOKEN"),expiration:localStorage.getItem("EXPIRATION")}},S=Object(f.c)({name:"user",initialState:w,reducers:{setUsername:function(e,t){e.userName=t.payload},logout:function(e){e.auth.token=null,e.auth.expiration=void 0,e.userName=void 0,localStorage.removeItem("USERNAME"),localStorage.removeItem("TOKEN"),localStorage.removeItem("EXPIRATION")}},extraReducers:function(e){e.addMatcher(Object(f.d)(v.fulfilled,g.fulfilled),(function(e,t){e.auth=t.payload}))}}),y=S.actions,k=y.setUsername,E=y.logout,T=S.reducer,I=n(17),B=n.n(I),D=(n(37),n(2)),C=function(e){var t=e.children,n=e.className;return Object(D.jsx)("div",{className:B()("container",n),children:t})},A=(n(39),n(40),function(){return Object(D.jsx)("div",{className:"footer",children:Object(D.jsxs)(C,{className:"flex justify-between align-center",children:[Object(D.jsx)("p",{children:"\xa9 Web Application Programming, 2021-2022"}),Object(D.jsx)("p",{children:"Bohdan Soproniuk & Akmalkhon Mukhiddinov"})]})})}),M=n.p+"static/media/LargeLogo.e6a559ef.png",U=function(e){var t=e.children,n=e.className;return Object(D.jsxs)("section",{className:"page",children:[Object(D.jsx)("img",{src:M,alt:"Logo",className:"logo"}),Object(D.jsx)("main",{className:B()("page__content",n),children:t}),Object(D.jsx)(A,{})]})},L=function(){var e=b(),t=Object(d.a)(),n=t.register,a=t.handleSubmit;return Object(D.jsx)(U,{children:Object(D.jsxs)(C,{children:[Object(D.jsxs)("form",{onSubmit:a((function(t){e(k(t.userName)),e(g(t))})),className:"loginForm",children:[Object(D.jsx)("input",Object(j.a)(Object(j.a)({},n("userName",{required:!0})),{},{type:"text",className:"loginInput",placeholder:"Username"})),Object(D.jsx)("input",Object(j.a)(Object(j.a)({},n("password",{required:!0})),{},{type:"password",className:"loginInput",placeholder:"Password"})),Object(D.jsx)("input",{type:"submit",className:"primaryButton loginButton",value:"Log In"})]}),Object(D.jsx)("div",{className:"loginSubform",children:Object(D.jsxs)("p",{children:["Don't have an account?\xa0",Object(D.jsx)(i.b,{to:"/registration",children:"Sign Up"})]})})]})})},P=function(){var e=b(),t=Object(l.f)(),n=Object(d.a)(),a=n.register,r=n.handleSubmit;return Object(D.jsx)(U,{children:Object(D.jsxs)(C,{children:[Object(D.jsxs)("form",{onSubmit:r((function(n){e(k(n.userName)),e(v(n)),t("/")})),className:"loginForm",children:[Object(D.jsx)("input",Object(j.a)(Object(j.a)({},a("userName",{required:!0})),{},{type:"text",className:"loginInput",placeholder:"Username"})),Object(D.jsx)("input",Object(j.a)(Object(j.a)({},a("password",{required:!0})),{},{type:"password",className:"loginInput",placeholder:"Password"})),Object(D.jsx)("input",{type:"submit",className:"primaryButton loginButton",value:"Sign Up"})]}),Object(D.jsx)("div",{className:"loginSubform",children:Object(D.jsxs)("p",{children:["Have an account?\xa0",Object(D.jsx)(i.b,{to:"/",children:"Log In"})]})})]})})},R=(n(41),s.c),F=function(e){return e.note},q=function(e){var t=e.user.auth.token;return t||(t=localStorage.getItem("TOKEN")),t},H=Object(f.b)("notes/deleteNote",function(){var e=Object(O.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return a=q(n.getState()),e.next=5,fetch("".concat(m,"/notes/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(a)}});case 5:if((r=e.sent).ok){e.next=8;break}throw new Error(r.statusText);case 8:return e.abrupt("return",r.status);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),J=H,K=864e5,z=(new Date).setUTCHours(0,0,0,0),W=function(e){return function(e){return Math.abs(e.getTime()-z)===K}(e)||function(e){return e.getTime()===z}(e)},X=Object(f.b)("notes/fetchNote",function(){var e=Object(O.a)(p.a.mark((function e(t,n){var a,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=4;break;case 3:throw new Error("Mock write");case 4:return a=q(n.getState()),e.next=7,fetch("".concat(m,"/notes/").concat(t),{headers:{Authorization:"Bearer ".concat(a)}});case 7:if((r=e.sent).ok){e.next=10;break}throw new Error(r.statusText);case 10:return e.next=12,r.json();case 12:return c=e.sent,e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),_=X,V=Object(f.b)("notes/postNote",function(){var e=Object(O.a)(p.a.mark((function e(t,n){var a,r,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return a="".concat(m,"/notes/"),r=q(n.getState()),e.next=6,fetch(a,{method:"POST",headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"},body:JSON.stringify(t)});case 6:if((c=e.sent).ok){e.next=9;break}throw new Error(c.statusText);case 9:return e.next=11,c.json();case 11:return o=e.sent,e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Y=V,$=Object(f.b)("notes/putNote",function(){var e=Object(O.a)(p.a.mark((function e(t,n){var a,r,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return a="".concat(m,"/notes/").concat(t.initialDate),r=q(n.getState()),e.next=6,fetch(a,{method:"PUT",headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"},body:JSON.stringify({heading:t.heading,content:t.content,modificationDate:t.modificationDate})});case 6:if((c=e.sent).ok){e.next=9;break}throw new Error(c.statusText);case 9:return e.next=11,c.json();case 11:return o=e.sent,e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),G=$,Q={heading:void 0,content:void 0,initialDate:void 0,modificationDate:void 0,status:"write"},Z=Object(f.c)({name:"note",initialState:Q,reducers:{setNote:function(e,t){t.payload},setStatus:function(e,t){e.status=t.payload}},extraReducers:function(e){e.addCase(_.rejected,(function(e){e.status="write"})),e.addCase(Y.fulfilled,(function(){u.b.success("Note was saved!")})).addCase(G.fulfilled,(function(){u.b.success("Note was updated!")})).addCase(J.fulfilled,(function(e){e.status="write",u.b.success("Note was deleted!")})),e.addMatcher(Object(f.d)(_.pending,Y.pending,G.pending,J.pending),(function(e){e.status="loading"})),e.addMatcher(Object(f.d)(_.fulfilled,Y.fulfilled,G.fulfilled),(function(e,t){var n=t.payload,a=n.heading,r=n.content;e.heading=a,e.content=r,e.status="show"})),e.addMatcher(Object(f.d)(Y.rejected,G.rejected,J.rejected),(function(e,t){u.b.error(t.error.message)}))}}),ee=Z.actions,te=(ee.setNote,ee.setStatus),ne=Z.reducer,ae=(n(42),function(){return Object(D.jsx)("div",{className:"loader",children:"Loading..."})}),re=(n(43),function(){var e=b(),t=Object(l.f)();return Object(D.jsx)("div",{className:"header",children:Object(D.jsxs)(C,{className:"flex justify-between align-center",children:[Object(D.jsx)(i.b,{to:"/",children:Object(D.jsx)("img",{src:M,alt:"Logo",className:"logo"})}),Object(D.jsx)("input",{type:"button",className:"redButton logoutButton",value:"Log out",onClick:function(){e(E()),t("/")}})]})})}),ce=(n(44),function(e){var t=e.children,n=e.className;return Object(D.jsxs)("section",{className:"page",children:[Object(D.jsx)(re,{}),Object(D.jsx)("main",{className:B()("page__content",n),children:t}),Object(D.jsx)(A,{})]})}),oe=(n(45),function(e){var t=e.note,n=b(),a=t.heading,r=t.content,c=Object(l.g)().date,o=new Date(c),s=W(o);return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"showNote",children:[Object(D.jsx)("h1",{className:"showHeading",children:a}),Object(D.jsx)("hr",{className:"headingContentLine"}),Object(D.jsx)("p",{className:"showContent",children:r})]}),Object(D.jsxs)("div",{className:"showContentControlButtons",children:[s&&Object(D.jsx)("input",{type:"button",className:"secondaryButton editButton",value:"Edit",onClick:function(){return n(te("update"))}}),Object(D.jsx)("input",{type:"button",className:"redButton deleteButton",value:"Delete",onClick:function(){n(J(c))}})]})]})}),se=n(26),ie=(n(46),function(e){var t=e.getFullYear().toString(),n=(e.getMonth()+1).toString(),a=e.getDate().toString();return n.length<2&&(n="0".concat(n)),a.length<2&&(a="0".concat(a)),"".concat(t,"-").concat(n,"-").concat(a)}),ue=function(e){var t=e.note,n=b(),a=Object(d.a)(),r=a.register,c=a.handleSubmit,o=Object(l.g)().date,s=t.heading,i=t.content,u=t.status;return Object(D.jsxs)("form",{onSubmit:c((function(e){e.initialDate=o,"write"===u?n(Y(e)):"update"===u&&(e.modificationDate=ie(new Date),n(G(e)))})),className:"noteForm",children:[Object(D.jsx)("input",Object(j.a)(Object(j.a)({},r("heading",{required:!0})),{},{className:"writeHeading inputField",placeholder:"Title",defaultValue:s})),Object(D.jsx)(se.a,Object(j.a)(Object(j.a)({},r("content",{required:!0})),{},{className:"writeContent inputField",placeholder:"Write your note...",defaultValue:i})),Object(D.jsx)("input",{type:"submit",className:"primaryButton saveButton",value:"Save"})]})},le=function(){var e=b(),t=R(F),n=Object(l.g)().date;return Object(a.useLayoutEffect)((function(){e(_(n))}),[e,n]),Object(D.jsx)(ce,{children:Object(D.jsxs)(C,{children:["loading"===t.status&&Object(D.jsx)(ae,{}),"show"===t.status&&Object(D.jsx)(oe,{note:t}),"write"===t.status&&Object(D.jsx)(ue,{note:Q}),"update"===t.status&&Object(D.jsx)(ue,{note:t})]})})},je=function(e){var t=new Date(e).getTime();return Date.now()<t},de=function(e){return e.user.auth.expiration},be=function(e){return Boolean(q(e))},fe=n(25),he=(n(47),n(48),function(){var e=Object(l.f)();return Object(D.jsx)(ce,{children:Object(D.jsx)(C,{children:Object(D.jsx)(fe.a,{className:"calendar",onClickDay:function(t){var n="/note/".concat(ie(t));e(n)}})})})}),pe=function(){var e=R(be),t=b(),n=Object(l.e)(),r=R(de),c=Object(l.f)();return Object(a.useEffect)((function(){"string"!==typeof r||je(r)||(t(E()),c("/"))}),[n,t,r,c]),e?Object(D.jsxs)(l.c,{children:[Object(D.jsx)(l.a,{path:"/",element:Object(D.jsx)(he,{})}),Object(D.jsx)(l.a,{path:"/note/:date",element:Object(D.jsx)(le,{})})]}):Object(D.jsxs)(l.c,{children:[Object(D.jsx)(l.a,{path:"/",element:Object(D.jsx)(L,{})}),Object(D.jsx)(l.a,{path:"/registration",element:Object(D.jsx)(P,{})})]})},Oe=Object(f.a)({reducer:{note:ne,user:T}});Oe.subscribe((function(){var e=Oe.getState().user.userName,t=Oe.getState().user.auth,n=t.token,a=t.expiration;"string"===typeof n&&je(a)?(localStorage.setItem("USERNAME",e),localStorage.setItem("TOKEN",n),localStorage.setItem("EXPIRATION",a)):(localStorage.removeItem("USERNAME"),localStorage.removeItem("TOKEN"),localStorage.removeItem("EXPIRATION"))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(49),n(50),n(51),n(52),n(53),n(54);o.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(s.a,{store:Oe,children:Object(D.jsxs)(i.a,{children:[Object(D.jsx)(u.a,{className:"toast"}),Object(D.jsx)(pe,{})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.6cef8832.chunk.js.map