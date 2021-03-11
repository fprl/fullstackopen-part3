(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(14),a=n.n(o),c=n(3),i=n(4),u=n.n(i),s="/api/persons",l={getAll:function(){return u.a.get(s).then((function(e){return e.data}))},create:function(e){return u.a.post(s,e).then((function(e){return e.data}))},deletePerson:function(e){return u.a.delete("".concat(s,"/").concat(e))},updatePerson:function(e,t){return u.a.put("".concat(s,"/").concat(e),t)}},d=n(0),j=function(e){var t=e.message,n=t.text,r=t.action;if(null===n)return null;var o=r||"none";return Object(d.jsx)("div",{className:o,children:n})},b=function(e){var t=e.setShowAll;return Object(d.jsxs)("div",{children:["filter shown with ",Object(d.jsx)("input",{onChange:function(e){return t(e.target.value)}})]})},f=function(e){var t=e.persons,n=e.setNewRequest,o=e.handleNotification,a=Object(r.useState)(""),i=Object(c.a)(a,2),u=i[0],s=i[1],j=Object(r.useState)(""),b=Object(c.a)(j,2),f=b[0],h=b[1];return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r={name:u,number:f},a=t.find((function(e){return e.name.toLowerCase()===r.name.toLowerCase()})),c=t.find((function(e){return e.number===r.number}));a&&c?alert("".concat(a.name," is already added to phonebook")):a&&!c?window.confirm("".concat(a.name," is already added to phonebook, replace the old number with a new one?"))&&(l.updatePerson(a.id,r),n(new Date),o("update",a.name),s(""),h("")):(l.create(r),n(new Date),o("add",r.name),s(""),h(""))},children:[Object(d.jsxs)("div",{children:["name: ",Object(d.jsx)("input",{type:"text",value:u,onChange:function(e){return s(e.target.value)}})]}),Object(d.jsxs)("div",{children:["number: ",Object(d.jsx)("input",{type:"tel",value:f,onChange:function(e){return h(e.target.value)}})]}),Object(d.jsx)("button",{type:"submit",children:"add"})]})},h=function(e){var t=e.person,n=e.setNewRequest,r=e.handleNotification;return Object(d.jsxs)("li",{children:[t.firstName," ",t.phoneNumber," "," ",Object(d.jsx)("button",{onClick:function(){return e=t.id,void(window.confirm("Delete ".concat(t.name,"?"))&&(l.deletePerson(e).catch((function(e){return r("error",t.name)})).then((function(){return n(new Date)})),n(new Date),r("remove",t.name)));var e},children:"delete"})]})},O=function(e){var t=e.persons,n=e.setNewRequest,r=e.handleNotification;return Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)(h,{person:e,setNewRequest:n,handleNotification:r},e.id)}))})},m=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)(""),i=Object(c.a)(a,2),u=i[0],s=i[1],h=Object(r.useState)(new Date),m=Object(c.a)(h,2),p=m[0],w=m[1],v=Object(r.useState)({text:null,action:null}),x=Object(c.a)(v,2),N=x[0],g=x[1];Object(r.useEffect)((function(){l.getAll().then((function(e){return o(e)}))}),[p]);var S=function(e,t){var n={text:"error"===e?"Information of ".concat(t," has already been removed from server"):"".concat(e," ").concat(t),action:e};g(Object.assign(N,n)),setTimeout((function(){return g(Object.assign({text:null,action:null}))}),5e3)},k=""===u?n:n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(j,{message:N}),Object(d.jsx)(b,{setShowAll:s}),Object(d.jsx)("h2",{children:"Add a new"}),Object(d.jsx)(f,{persons:n,setNewRequest:w,handleNotification:S}),Object(d.jsx)("h2",{children:"Numbers"}),Object(d.jsx)(O,{persons:k,setNewRequest:w,handleNotification:S})]})};n(38);a.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b6ccdb6a.chunk.js.map