(this.webpackJsonpdiary=this.webpackJsonpdiary||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(17),c=n.n(s),o=n(19),i=n(10),u=n(14),l=n(4),d=n(7),j=n(3),b=n.n(j),h=n(5),f=n(6),p=n(13),m=n(11),O=n.n(m),x=n(2),g=function(e){var t=e.value,n=e.className,a=e.isDisabled,r=e.onClick;return Object(x.jsx)("input",{type:"submit",className:O()("primaryButton",n),value:t,disabled:a,onClick:r})},v="https://localhost:6969/api",w=(new Date((new Date).setHours((new Date).getHours()+1)).toString(),function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return n="".concat(v,"/login/"),e.next=5,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:if(a=e.sent,401,401!==a.status){e.next=9;break}throw new Error("Username and password do not match");case 9:if(a.ok){e.next=11;break}throw new Error(a.statusText);case 11:return e.next=13,a.json();case 13:return r=e.sent,e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=w,k=function(){return Object(o.b)()},S=n(8),y={userName:localStorage.getItem("USERNAME"),auth:{token:localStorage.getItem("TOKEN"),expiration:localStorage.getItem("EXPIRATION")}},E=Object(S.c)({name:"user",initialState:y,reducers:{setUsername:function(e,t){e.userName=t.payload},setAuth:function(e,t){e.auth=t.payload},logout:function(e){e.auth.token=null,e.auth.expiration=void 0,e.userName=void 0,localStorage.removeItem("USERNAME"),localStorage.removeItem("TOKEN"),localStorage.removeItem("EXPIRATION"),u.b.warn("Logged out")}}}),C=E.actions,T=C.setUsername,D=C.setAuth,I=C.logout,B=E.reducer,L=(n(39),function(e){var t=e.children,n=e.className;return Object(x.jsx)("div",{className:O()("container",n),children:t})}),P=(n(40),n(41),function(){return Object(x.jsx)("div",{className:"footer",children:Object(x.jsxs)(L,{className:"flex justify-between align-center",children:[Object(x.jsx)("p",{children:"\xa9 Web Application Programming, 2021-2022"}),Object(x.jsx)("p",{children:"Bohdan Soproniuk & Akmalkhon Mukhiddinov"})]})})}),A=n.p+"static/media/LargeLogo.e6a559ef.png",U=function(e){var t=e.children,n=e.className;return Object(x.jsxs)("section",{className:"page",children:[Object(x.jsx)("img",{src:A,alt:"Logo",className:"logo"}),Object(x.jsx)("main",{className:O()("page__content",n),children:t}),Object(x.jsx)(P,{})]})},M=function(){var e=k(),t=Object(p.b)(),n=t.register,r=t.handleSubmit,s=t.setError,c=t.formState.errors,o=Object(a.useState)(!1),u=Object(f.a)(o,2),l=u[0],j=u[1],m=function(){var t=Object(h.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.prev=1,t.next=4,N(n);case 4:a=t.sent,e(T(n.userName)),e(D(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),s("password",{type:"incorrectPassword",message:t.t0.message});case 12:return t.prev=12,j(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)(U,{children:Object(x.jsxs)(L,{children:[Object(x.jsxs)("form",{onSubmit:r(m),className:"authForm",children:[Object(x.jsx)("input",Object(d.a)(Object(d.a)({},n("userName",{required:!0})),{},{type:"text",className:"authInput",placeholder:"Username"})),Object(x.jsx)("input",Object(d.a)(Object(d.a)({},n("password",{required:!0})),{},{type:"password",className:"authInput",placeholder:"Password"})),c.password&&Object(x.jsx)("p",{className:"errorMessage",children:c.password.message}),Object(x.jsx)(g,{value:"Log In",className:"authButton",isDisabled:l})]}),Object(x.jsx)("div",{className:"authSubform",children:Object(x.jsxs)("p",{children:["Don't have an account?\xa0",Object(x.jsx)(i.b,{to:"/registration",children:"Sign Up"})]})})]})})},F=n(25),R=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return n="".concat(v,"/register/"),e.next=5,fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:if(a=e.sent,409,409!==a.status){e.next=9;break}throw new Error("Username already exists");case 9:if(a.ok){e.next=11;break}throw new Error(a.statusText);case 11:return e.next=13,a.json();case 13:return r=e.sent,e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=R,H=(n(42),function(){var e=k(),t=Object(p.b)({criteriaMode:"all"}),n=t.register,r=t.handleSubmit,s=t.formState.errors,c=t.setError,o=Object(a.useState)(!1),u=Object(f.a)(o,2),l=u[0],j=u[1],m=function(){var t=Object(h.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.prev=1,t.next=4,q(n);case 4:a=t.sent,e(T(n.userName)),e(D(a)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),c("userName",{type:"unavailableUsername",message:t.t0.message});case 12:return t.prev=12,j(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)(U,{children:Object(x.jsxs)(L,{children:[Object(x.jsxs)("form",{onSubmit:r(m),className:"authForm",children:[Object(x.jsx)("input",Object(d.a)(Object(d.a)({},n("userName",{required:!0})),{},{type:"text",className:"authInput",placeholder:"Username"})),s.userName&&Object(x.jsx)("p",{className:"errorMessage",children:s.userName.message}),Object(x.jsx)("input",Object(d.a)(Object(d.a)({},n("password",{required:"Password cannot be empty",validate:{minLen:function(e){return e.length>=6||"Password must be at least 6 characters"},hasLowerCaseLetter:function(e){return e.toUpperCase()!==e||"Password must have at least one lowercase letter"},hasUpperCaseLetter:function(e){return e.toLowerCase()!==e||"Password must have at least one uppercase letter"},hasDigit:function(e){return/\d/.test(e)||"Password must have at least one digit"},hasNonAlphanumericSymbol:function(e){return/[^a-zA-Z0-9]/.test(e)||"Password must have at least one non-alphanumeric symbol"}}})),{},{type:"password",className:"authInput",placeholder:"Password"})),Object(x.jsx)(F.a,{errors:s,name:"password",render:function(e){var t=e.messages;return t&&Object.entries(t).map((function(e){var t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(x.jsx)("p",{className:"errorMessage",children:a},n)}))}}),Object(x.jsx)(g,{value:"Sign Up",className:"authButton",isDisabled:l})]}),Object(x.jsx)("div",{className:"authSubform",children:Object(x.jsxs)("p",{children:["Have an account?\xa0",Object(x.jsx)(i.b,{to:"/",children:"Log In"})]})})]})})}),J=(n(43),o.c),z=function(e){return e.note},K=function(e){return e.user.auth.expiration},W=function(e){var t=e.user.auth.token;return t||(t=localStorage.getItem("TOKEN")),t},_=Object(S.b)("notes/deleteNote",function(){var e=Object(h.a)(b.a.mark((function e(t,n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return a=W(n.getState()),e.next=5,fetch("".concat(v,"/notes/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer ".concat(a)}});case 5:if((r=e.sent).ok){e.next=8;break}throw new Error(r.statusText);case 8:return e.abrupt("return",r.status);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),X=_,V=864e5,Y=(new Date).setUTCHours(0,0,0,0),Z=function(e){return function(e){return Math.abs(e.getTime()-Y)===V}(e)||function(e){return e.getTime()===Y}(e)},$=Object(S.b)("notes/fetchNote",function(){var e=Object(h.a)(b.a.mark((function e(t,n){var a,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=4;break;case 3:throw new Error("Mock write");case 4:return a=W(n.getState()),e.next=7,fetch("".concat(v,"/notes/").concat(t),{headers:{Authorization:"Bearer ".concat(a)}});case 7:if((r=e.sent).ok){e.next=10;break}throw new Error(r.statusText);case 10:return e.next=12,r.json();case 12:return s=e.sent,e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),G=$,Q=Object(S.b)("notes/postNote",function(){var e=Object(h.a)(b.a.mark((function e(t,n){var a,r,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return a="".concat(v,"/notes/"),r=W(n.getState()),e.next=6,fetch(a,{method:"POST",headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"},body:JSON.stringify(t)});case 6:if((s=e.sent).ok){e.next=9;break}throw new Error(s.statusText);case 9:return e.next=11,s.json();case 11:return c=e.sent,e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),ee=Q,te=Object(S.b)("notes/putNote",function(){var e=Object(h.a)(b.a.mark((function e(t,n){var a,r,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return a="".concat(v,"/notes/").concat(t.initialDate),r=W(n.getState()),e.next=6,fetch(a,{method:"PUT",headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"},body:JSON.stringify({heading:t.heading,content:t.content,modificationDate:t.modificationDate})});case 6:if((s=e.sent).ok){e.next=9;break}throw new Error(s.statusText);case 9:return e.next=11,s.json();case 11:return c=e.sent,e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),ne=te,ae={heading:void 0,content:void 0,initialDate:void 0,modificationDate:void 0,status:"write"},re=Object(S.c)({name:"note",initialState:ae,reducers:{setNote:function(e,t){t.payload},setStatus:function(e,t){e.status=t.payload}},extraReducers:function(e){e.addCase(G.rejected,(function(e){e.status="write"})),e.addCase(ee.fulfilled,(function(){u.b.success("Note was saved!")})).addCase(ne.fulfilled,(function(){u.b.success("Note was updated!")})).addCase(X.fulfilled,(function(e){e.status="write",u.b.success("Note was deleted!")})),e.addMatcher(Object(S.d)(G.pending,ee.pending,ne.pending,X.pending),(function(e){e.status="loading"})),e.addMatcher(Object(S.d)(G.fulfilled,ee.fulfilled,ne.fulfilled),(function(e,t){var n=t.payload,a=n.heading,r=n.content;e.heading=a,e.content=r,e.status="show"})),e.addMatcher(Object(S.d)(ee.rejected,ne.rejected,X.rejected),(function(e,t){u.b.error(t.error.message)}))}}),se=re.actions,ce=(se.setNote,se.setStatus),oe=re.reducer,ie=(n(44),function(){return Object(x.jsx)("div",{className:"loader",children:"Loading..."})}),ue=function(e){var t=e.value,n=e.className,a=e.onClick,r=e.isDisabled;return Object(x.jsx)("input",{type:"submit",className:O()("redButton",n),value:t,disabled:r,onClick:a})},le=(n(45),function(){var e=k(),t=Object(l.g)();return Object(x.jsx)("div",{className:"header",children:Object(x.jsxs)(L,{className:"flex justify-between align-center",children:[Object(x.jsx)(i.b,{to:"/",children:Object(x.jsx)("img",{src:A,alt:"Logo",className:"logo"})}),Object(x.jsx)(ue,{value:"Log Out",className:"logoutButton",onClick:function(){e(I()),t("/")}})]})})}),de=(n(46),function(e){var t=e.children,n=e.className;return Object(x.jsxs)("section",{className:"page",children:[Object(x.jsx)(le,{}),Object(x.jsx)("main",{className:O()("page__content",n),children:t}),Object(x.jsx)(P,{})]})}),je=(n(47),function(e){var t=e.value,n=e.className,a=e.onClick,r=e.isDisabled;return Object(x.jsx)("input",{type:"submit",className:O()("secondaryButton",n),value:t,disabled:r,onClick:a})}),be=function(e){var t=e.note,n=k(),a=t.heading,r=t.content,s=Object(l.h)().date,c=new Date(s),o=Z(c);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"showNote",children:[Object(x.jsx)("h1",{className:"showHeading",children:a}),Object(x.jsx)("hr",{className:"headingContentLine"}),Object(x.jsx)("p",{className:"showContent",children:r})]}),Object(x.jsxs)("div",{className:"showContentControlButtons",children:[o&&Object(x.jsx)(je,{value:"Edit",className:"editButton",onClick:function(){return n(ce("update"))}}),Object(x.jsx)(ue,{value:"Delete",className:"deleteButton",onClick:function(){n(X(s))}})]})]})},he=n(27),fe=(n(48),function(e){var t=e.getFullYear().toString(),n=(e.getMonth()+1).toString(),a=e.getDate().toString();return n.length<2&&(n="0".concat(n)),a.length<2&&(a="0".concat(a)),"".concat(t,"-").concat(n,"-").concat(a)}),pe=function(e){var t=e.note,n=k(),a=Object(p.b)(),r=a.register,s=a.handleSubmit,c=Object(l.h)().date,o=t.heading,i=t.content,u=t.status;return Object(x.jsxs)("form",{onSubmit:s((function(e){e.initialDate=c,"write"===u?n(ee(e)):"update"===u&&(e.modificationDate=fe(new Date),n(ne(e)))})),className:"noteForm",children:[Object(x.jsx)("input",Object(d.a)(Object(d.a)({},r("heading",{required:!0})),{},{className:"writeHeading inputField",placeholder:"Title",defaultValue:o,maxLength:100})),Object(x.jsx)(he.a,Object(d.a)(Object(d.a)({},r("content",{required:!0})),{},{className:"writeContent inputField",placeholder:"Write your note...",defaultValue:i})),Object(x.jsx)(g,{value:"Save",className:"saveButton"})]})},me=function(){var e=k(),t=J(z),n=Object(l.h)().date;return Object(a.useLayoutEffect)((function(){e(G(n))}),[e,n]),Object(x.jsx)(de,{children:Object(x.jsxs)(L,{children:["loading"===t.status&&Object(x.jsx)(ie,{}),"show"===t.status&&Object(x.jsx)(be,{note:t}),"write"===t.status&&Object(x.jsx)(pe,{note:ae}),"update"===t.status&&Object(x.jsx)(pe,{note:t})]})})},Oe=function(e){var t=new Date(e).getTime();return Date.now()<t},xe=function(e){return Boolean(W(e))},ge=n(26),ve=(n(49),n(50),function(){var e=Object(l.g)();return Object(x.jsx)(de,{children:Object(x.jsx)(L,{children:Object(x.jsx)(ge.a,{className:"calendar",onClickDay:function(t){var n="/note/".concat(fe(t));e(n)}})})})}),we=function(){var e=J(xe),t=k(),n=Object(l.f)(),r=J(K),s=Object(l.g)();return Object(a.useEffect)((function(){"string"!==typeof r||Oe(r)||(t(I()),s("/"))}),[n,t,r,s]),e?Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{path:"/",element:Object(x.jsx)(ve,{})}),Object(x.jsx)(l.b,{path:"/note/:date",element:Object(x.jsx)(me,{})}),Object(x.jsx)(l.b,{path:"/registration",element:Object(x.jsx)(l.a,{replace:!0,to:"/"})})]}):Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{path:"/",element:Object(x.jsx)(M,{})}),Object(x.jsx)(l.b,{path:"/registration",element:Object(x.jsx)(H,{})}),Object(x.jsx)(l.b,{path:"/note/:date",element:Object(x.jsx)(l.a,{replace:!0,to:"/"})})]})},Ne=Object(S.a)({reducer:{user:B,note:oe}});Ne.subscribe((function(){var e=Ne.getState().user.userName,t=Ne.getState().user.auth,n=t.token,a=t.expiration;"string"===typeof n&&Oe(a)?(localStorage.setItem("USERNAME",e),localStorage.setItem("TOKEN",n),localStorage.setItem("EXPIRATION",a)):n&&Ne.dispatch(I())}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(51),n(52),n(53),n(54),n(55),n(56);c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(o.a,{store:Ne,children:Object(x.jsxs)(i.a,{children:[Object(x.jsx)(u.a,{className:"toast",autoClose:4e3,limit:3}),Object(x.jsx)(we,{})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.6906340c.chunk.js.map