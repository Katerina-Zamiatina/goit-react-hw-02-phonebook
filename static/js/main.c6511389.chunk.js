(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(e,n,t){e.exports={container:"Form_container___cwBN",label:"Form_label__15SAE",label__text:"Form_label__text__2_UXB",input:"Form_input__2ESfd",button:"Form_button__243jh"}},,,,,function(e,n,t){e.exports={label:"Filter_label__3DcZT",label__text:"Filter_label__text__140-_",input:"Filter_input__2DoVp"}},,,,function(e,n,t){e.exports={button:"Contacts_button__3OGpI"}},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(10),i=t.n(r),l=(t(17),t(12)),o=t(4),u=(t(18),t(19),t(0)),s=function(e){var n=e.children;return Object(u.jsx)("div",{className:"Container",children:n})},b=t(6),j=t(9),m=t(23),d=t(2),_=t.n(d),h=function(e){var n=e.onAdd,t=e.isUnique,c=Object(a.useState)({name:"",number:""}),r=Object(o.a)(c,2),i=r[0],l=r[1],s=function(e){return l(Object(j.a)(Object(j.a)({},i),{},Object(b.a)({},e.target.name,e.target.value)))},d=function(){l({name:"",number:""})};return Object(u.jsxs)("form",{className:_.a.container,onSubmit:function(e){e.preventDefault();var a={id:Object(m.a)(),name:i.name,number:i.number};t(i.name)&&n(a),d()},children:[Object(u.jsxs)("label",{className:_.a.label,children:[Object(u.jsx)("span",{className:_.a.label__text,children:"Name"}),Object(u.jsx)("input",{className:_.a.input,type:"text",name:"name",placeholder:"Enter name",value:i.name,onChange:s,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(u.jsxs)("label",{className:_.a.label,children:[Object(u.jsx)("span",{className:_.a.label__text,children:"Number"}),Object(u.jsx)("input",{className:_.a.input,type:"tel",name:"number",placeholder:"Enter number",value:i.number,onChange:s,required:!0})]}),Object(u.jsx)("button",{type:"submit",className:_.a.button,children:"Add contact"})]})},p=t(11),x=t.n(p),O=function(e){var n=e.contact,t=e.onDelete;return Object(u.jsxs)("li",{children:[Object(u.jsxs)("span",{children:[n.name," : "]}),Object(u.jsx)("span",{children:n.number}),Object(u.jsx)("button",{className:x.a.button,onClick:function(){return t(n.id)},children:"Delete"})]})},f=function(e){var n=e.contacts,t=e.onDelete;return Object(u.jsx)("ul",{children:n.map((function(e){return Object(u.jsx)(O,{contact:e,onDelete:t},e.id)}))})},v=t(7),N=t.n(v),C=function(e){var n=e.value,t=e.onChange;return Object(u.jsxs)("label",{className:N.a.label,children:[Object(u.jsx)("span",{className:N.a.label__text,children:"Filter by name"}),Object(u.jsx)("input",{className:N.a.input,type:"text",value:n,onChange:t,placeholder:"Enter name for search"})]})},g=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),n=Object(o.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),b=i[0],j=i[1];return Object(u.jsxs)(s,{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(h,{onAdd:function(e){return c((function(n){return[].concat(Object(l.a)(n),[e])}))},isUnique:function(e){var n=!!t.find((function(n){return n.name===e}));return n&&alert("".concat(e," is already in contacts")),!n}}),Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(C,{value:b,onChange:function(e){j(e.currentTarget.value)}}),Object(u.jsx)(f,{contacts:function(){var e=b.toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(e)}))}(),onDelete:function(e){c((function(n){return n.filter((function(n){return n.id!==e}))}))}})]})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.c6511389.chunk.js.map