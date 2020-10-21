(this["webpackJsonpusers-jobs-usecontext"]=this["webpackJsonpusers-jobs-usecontext"]||[]).push([[0],{34:function(e,t,n){e.exports=n.p+"static/media/icon-nav.18b6fa13.svg"},36:function(e,t,n){e.exports=n.p+"static/media/close-button.aeec2863.svg"},38:function(e,t,n){e.exports=n(72)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),u=n.n(c),o=(n(43),n(44),n(45),n(34)),l=n.n(o),s=n(12),i=function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{className:"icon-nav",src:l.a})),r.a.createElement("li",null,r.a.createElement(s.b,{className:"link",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(s.b,{className:"link",to:"/users"},"Users")),r.a.createElement("li",null,r.a.createElement(s.b,{className:"link",to:"/jobs"},"Jobs"))))},m=function(e){var t=e.children;return r.a.createElement("section",{className:"content-init"},t)},d=function(){return r.a.createElement(m,null,r.a.createElement("div",{className:"container-home"},r.a.createElement("div",{className:"content-home"},r.a.createElement("h1",{className:"home-title"},"Users and Jobs App"),r.a.createElement("h3",{className:"home-subtitle"},"This app was created to implement hook: useContext."),r.a.createElement("p",null,"In the Users Section you can add a new user. You can also edit and delete an existing user. In the Jobs Section you can edit and delete."))))},p=n(2),f=n.n(p),E=n(4),b=n(5),v=(n(51),function(e){var t=e.headers,n=e.children;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,t.map((function(e){return r.a.createElement("th",null,e)}))),r.a.createElement("tbody",null,n))}),h=(n(52),function(e){var t=e.children;return r.a.createElement("section",{className:"content-container"},t)}),j=Object(a.createContext)(null),O=(n(53),n(36)),w=n.n(O),y=function(e){var t=e.title,n=e.children,c=e.close;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"overlay"}),r.a.createElement("section",{className:"modal"},r.a.createElement("header",null,r.a.createElement("h2",{className:"modal-title"},t),r.a.createElement("button",{className:"close-button",type:"button",onClick:c},r.a.createElement("img",{src:w.a}))),r.a.createElement("article",{className:"modal-content"},n)))},x=n(37),N=function(e,t){switch(t.type){case"USERS_INIT":return t.users;case"USERS_ADD":return[].concat(Object(x.a)(e),[t.addU]);case"USERS_EDIT":return e.map((function(e){return e.id===t.editU.id&&(e.name=t.editU.name,e.jobId=t.editU.jobId),e}));case"USERS_DELETE":return e.filter((function(e){return e.id!==t.deleteU.id}));default:return e}},U=n(16),S=n(9),g=n.n(S),k="https://5f518d325e98480016123ada.mockapi.io/api/v1/users/",D=function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(k);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Unhandled - getUsers: ".concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(E.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={name:t,jobId:n},e.next=4,g.a.post(k,a);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Unhandled - addUser: ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(E.a)(f.a.mark((function e(t,n,a){var r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=Object(U.a)({},t,{name:n,jobId:a}),e.next=4,g.a.put(k+r.id,r);case 4:return c=e.sent,e.abrupt("return",c.data);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Unhandled - editUser: ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(E.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.delete(k+t.id);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Unhandled - deleteUser: ".concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(a.useContext)(j),t=e.jobs,n=e.setDisplayUserModal,c=e.selectedUser,u=e.usersDispatch,o=Object(a.useState)(c),l=Object(b.a)(o,2),s=l[0],i=l[1],m=Object(a.useState)(c.jobId),d=Object(b.a)(m,2),p=d[0],v=d[1],h=function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(c,s,p);case 2:t=e.sent,u({type:"USERS_EDIT",editU:t}),O();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){return n(!1)};return r.a.createElement(y,{title:"Edit User",close:O},r.a.createElement("form",null,r.a.createElement("input",{type:"text",defaultValue:c.name,onChange:function(e){return i(e.target.value)}}),r.a.createElement("select",{defaultValue:c.jobId,onChange:function(e){return v(e.target.value)}},t.map((function(e){return r.a.createElement("option",{value:e.id},e.name)}))),r.a.createElement("button",{className:"button-modal",type:"button",onClick:h},"Save")))},_=function(){var e=Object(a.useContext)(j),t=e.jobs,n=e.setDisplayNewUser,c=e.usersDispatch,u=Object(a.useState)(""),o=Object(b.a)(u,2),l=o[0],s=o[1],i=Object(a.useState)(""),m=Object(b.a)(i,2),d=m[0],p=m[1],v=function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(l,d);case 2:t=e.sent,c({type:"USERS_ADD",addU:t}),h();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return n(!1)};return r.a.createElement(y,{title:"New User",close:h},r.a.createElement("form",null,r.a.createElement("input",{type:"text",onChange:function(e){return s(e.target.value)},placeholder:"Full name"}),r.a.createElement("select",{defaultValue:"-1",onChange:function(e){return p(e.target.value)}},r.a.createElement("option",{value:"-1",disabled:!0,selected:!0},"Choose job"),t.map((function(e){return r.a.createElement("option",{value:e.id},e.name)}))),r.a.createElement("button",{className:"button-modal",type:"button",onClick:v},"Add New User")))},R=function(e,t){switch(t.type){case"JOBS_INIT":return t.jobs;case"JOBS_EDIT":return e.map((function(e){return e.id===t.editJ.id&&(e.name=t.editJ.name),e}));case"JOBS_DELETE":return e.filter((function(e){return e.id!==t.deleteJ.id}));default:return e}},L=n(10),A=n(11),B="https://5f518d325e98480016123ada.mockapi.io/api/v1/jobs/",M=function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(B);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Unhandled - getJobs: ".concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(E.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(U.a)({},t,{name:n}),e.next=4,g.a.put(B+a.id,a);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Unhandled - editJob: ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(E.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.delete(B+t.id);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Unhandled - deleteJob: ".concat(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(a.useReducer)(N,[]),t=Object(b.a)(e,2),n=t[0],c=t[1],u=Object(a.useReducer)(R,[]),o=Object(b.a)(u,2),l=o[0],s=o[1],i=Object(a.useState)(),m=Object(b.a)(i,2),d=m[0],p=m[1],O=Object(a.useState)(!1),w=Object(b.a)(O,2),y=w[0],x=w[1],U=Object(a.useState)(!1),S=Object(b.a)(U,2),g=S[0],k=S[1];Object(a.useEffect)((function(){D().then((function(e){return c({type:"USERS_INIT",users:e})}))}),[]),Object(a.useEffect)((function(){M().then((function(e){return s({type:"JOBS_INIT",jobs:e})}))}),[]);var J=function(){var e=Object(E.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:n=e.sent,c({type:"USERS_DELETE",deleteU:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container-page"},r.a.createElement(j.Provider,{value:{jobs:l,setDisplayUserModal:k,selectedUser:d,usersDispatch:c,setDisplayNewUser:x}},r.a.createElement("button",{className:"button-new-user",type:"button",onClick:function(){return x(!0)}},"ADD NEW USER",r.a.createElement(L.a,{icon:A.c,style:{marginLeft:"5px"}})),r.a.createElement(h,null,r.a.createElement(v,{headers:["Name","Avatar","Job Title","Actions"]},n.map((function(e){var t=l.find((function(t){return t.id==e.jobId}))||{name:"Not Found"};return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement("img",{className:"avatar-img",src:e.avatar})),r.a.createElement("td",null,t.name),r.a.createElement("td",null,r.a.createElement("button",{className:"button-edit",onClick:function(){return function(e){p(e),k(!0)}(e)}},"EDIT",r.a.createElement(L.a,{icon:A.b,style:{marginLeft:"5px"}})),r.a.createElement("button",{className:"button-delete",onClick:function(){return J(e)}},"DELETE",r.a.createElement(L.a,{icon:A.a,style:{marginLeft:"5px"}}))))})))),g?r.a.createElement(T,null):null,y?r.a.createElement(_,null):null))},P=Object(a.createContext)(null),H=function(){var e=Object(a.useContext)(P),t=e.setDisplayJobModal,n=e.selectedJob,c=e.jobsDispatch,u=Object(a.useState)(n),o=Object(b.a)(u,2),l=o[0],s=o[1],i=function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(n,l);case 2:t=e.sent,c({type:"JOBS_EDIT",editJ:t}),m();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return t(!1)};return r.a.createElement(y,{title:"Edit Job",close:m},r.a.createElement("form",null,r.a.createElement("input",{type:"text",defaultValue:n.name,onChange:function(e){return s(e.target.value)}}),r.a.createElement("button",{className:"button-modal",type:"button",onClick:i},"Save")))},Y=function(){var e=Object(a.useReducer)(R,[]),t=Object(b.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(!1),o=Object(b.a)(u,2),l=o[0],s=o[1],i=Object(a.useState)(),m=Object(b.a)(i,2),d=m[0],p=m[1];Object(a.useEffect)((function(){M().then((function(e){return c({type:"JOBS_INIT",jobs:e})}))}),[]);var j=function(){var e=Object(E.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:n=e.sent,c({type:"JOBS_DELETE",deleteJ:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container-page"},r.a.createElement(P.Provider,{value:{selectedJob:d,setDisplayJobModal:s,jobsDispatch:c}},r.a.createElement(h,null,r.a.createElement(v,{headers:["Job Title","Actions"]},n.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement("button",{className:"button-edit",onClick:function(){return function(e){p(e),s(!0)}(e)}},"EDIT",r.a.createElement(L.a,{icon:A.b,style:{marginLeft:"5px"}})),r.a.createElement("button",{className:"button-delete",onClick:function(){return j(e)}},"DELETE",r.a.createElement(L.a,{icon:A.a,style:{marginLeft:"5px"}}))))})))),l?r.a.createElement(H,null):null))},$=function(){return r.a.createElement("footer",null,"\xa9 - Created by Maria Alarcon\ud83d\udc96")},q=n(3),z=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(q.c,null,r.a.createElement(q.a,{exact:!0,path:"/",component:d}),r.a.createElement(q.a,{path:"/users",component:W}),r.a.createElement(q.a,{path:"/jobs",component:Y})),r.a.createElement($,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.6fb28007.chunk.js.map