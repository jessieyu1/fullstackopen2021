(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(16),o=t.n(c),r=t(7),a=t(3),u=t(2),i=t(4),s=t.n(i),l="api/persons",d={getAll:function(){return s.a.get(l).then((function(e){return e.data}))},create:function(e){return s.a.post(l,e).then((function(e){return e.data}))},remove:function(e){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},update:function(e,n){var t=s.a.put("".concat(l,"/").concat(e),n),c={id:1e4,name:"The information has been removed.",number:"000"};return t.then((function(e){return e.data.concat(c)}))}},j=t(0),b=function(e){var n=e.persons,t=e.handleRemoveName;return Object(j.jsx)("div",{children:n.map((function(e){return Object(j.jsxs)("p",{children:[e.name," ",e.number,Object(j.jsx)("button",{onClick:function(){return t(e)},children:"delete"})]},e.id)}))})},h=function(e){return Object(j.jsxs)("div",{children:[e.text,Object(j.jsx)("input",{value:e.value,onChange:e.onChange})]})},f=function(e){return Object(j.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(j.jsxs)("div",{children:[e.text1,":",Object(j.jsx)("input",{value:e.value1,onChange:e.onChange1})]}),Object(j.jsxs)("div",{children:[e.text2,":",Object(j.jsx)("input",{value:e.value2,onChange:e.onChange2})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:e.type,children:e.text3})})]})},m=function(e){var n=e.message;return null===n?null:Object(j.jsx)("div",{className:"newMessage",children:n})},v=function(e){var n=e.message;return null===n?null:Object(j.jsx)("div",{className:"error",children:n})},O=function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],o=Object(u.useState)(""),i=Object(a.a)(o,2),s=i[0],l=i[1],O=Object(u.useState)(""),x=Object(a.a)(O,2),p=x[0],g=x[1],w=Object(u.useState)(""),C=Object(a.a)(w,2),S=C[0],k=C[1],y=Object(u.useState)(null),N=Object(a.a)(y,2),A=N[0],T=N[1],D=Object(u.useState)(null),E=Object(a.a)(D,2),I=E[0],J=E[1];Object(u.useEffect)((function(){d.getAll().then((function(e){c(e)}))}),[]),console.log("render",t.length,"persons");var L=t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsx)(m,{message:A}),Object(j.jsx)(v,{message:I}),Object(j.jsx)("div",{children:Object(j.jsx)(h,{value:S,onChange:function(e){k(e.target.value)},text:"Filter shown with"})}),Object(j.jsx)("h3",{children:"Add a new"}),Object(j.jsx)(f,{onSubmit:function(e){if(e.preventDefault(),t.every((function(e){return e.name!==s}))){var n={name:s,number:p};d.create(n).then((function(e){c(t.concat(e)),l(""),g(""),T("Added ".concat(s)),setTimeout((function(){T(null)}),3e3)}))}else if(t.every((function(e){return e.number!==p}))){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var o=t.find((function(e){return e.name===s})),a=Object(r.a)(Object(r.a)({},o),{},{number:p});d.update(o.id,a).then((function(e){c(t.map((function(n){return n.id!==o.id?n:e}))),T("Changed ".concat(s,"'s number")),setTimeout((function(){T(null)}),3e3)})).catch((function(e){J("Information of ".concat(s," has been removed from server")),setTimeout((function(){J(null)}),5e3),c(t.filter((function(e){return e.id!==o.id})))}))}}else window.alert("".concat(s," is already added to phonebook"))},text1:"name",value1:s,onChange1:function(e){l(e.target.value)},text2:"number",value2:p,onChange2:function(e){g(e.target.value)},text3:"add",type:"submit"}),Object(j.jsx)("h3",{children:"Numbers"}),Object(j.jsx)(b,{persons:L,handleRemoveName:function(e){window.confirm("Delete ".concat(e.name,"?"))&&d.remove(e.id).then(c(t.filter((function(n){return n.id!==e.id}))))}})]})};t(41);o.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.68472ae6.chunk.js.map