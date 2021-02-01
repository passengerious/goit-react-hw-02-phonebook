(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"Filter_label___TYw0",input:"Filter_input__jkfqL"}},13:function(t,e,n){t.exports={container:"Container_container__1aA3s"}},2:function(t,e,n){t.exports={form:"ContactForm_form__1d6tq",label:"ContactForm_label__3xL5J",input:"ContactForm_input__2sy8j",button:"ContactForm_button__3VOIg"}},21:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n.n(r),o=n(12),i=n.n(o),s=(n(21),n(15)),l=n(5),u=n(6),b=n(8),m=n(7),h=n(3),d=n.n(h),j=n(13),f=n.n(j);var p=function(t){var e=t.children;return Object(a.jsx)("div",{className:f.a.container,children:e})},C=n(14),O=n(2),x=n.n(O),_={name:"",number:""},g=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state=_,t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(C.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){return t.setState(_)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:x.a.form,children:[Object(a.jsxs)("label",{className:x.a.label,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChange,className:x.a.input})]}),Object(a.jsxs)("label",{className:x.a.label,children:["Number",Object(a.jsx)("input",{type:"number",name:"number",placeholder:"Enter phone number",value:n,onChange:this.handleChange,className:x.a.input})]}),Object(a.jsx)("button",{type:"submit",className:x.a.button,children:"Add contact"})]})}}]),n}(r.Component),v=n(9),y=n.n(v),F=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:y.a.list,children:e.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(a.jsxs)("li",{className:y.a.item,children:[Object(a.jsxs)("p",{children:[r,": ",c]}),Object(a.jsx)("button",{type:"button",className:y.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},N=n(11),S=n.n(N),w=function(t){var e=t.filter,n=t.onChange;return Object(a.jsxs)("label",{className:S.a.label,children:["Find contact by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n,placeholder:"Enter name for search",className:S.a.input})]})},L=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:d.a.generate(),name:"Rosie Simpson",number:"459-12-56"},{id:d.a.generate(),name:"Hermione Kline",number:"443-89-12"},{id:d.a.generate(),name:"Eden Clements",number:"645-17-79"},{id:d.a.generate(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){var n=e.name,a=e.number,r=t.state.contacts,c={id:d.a.generate(),name:n,number:a};r.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("Contact is already exists!"):n&&a?t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}})):alert("The field cannot be empty!")},t.handleChangeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.handleDeleteContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts(),e=this.state.filter;return Object(a.jsxs)("div",{children:[Object(a.jsxs)(p,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(g,{onSubmit:this.handleAddContact})]}),Object(a.jsxs)(p,{children:[Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(w,{filter:e,onChange:this.handleChangeFilter}),Object(a.jsx)(F,{contacts:t,onDeleteContact:this.handleDeleteContact})]})]})}}]),n}(r.Component),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),k()},9:function(t,e,n){t.exports={list:"ContactList_list__14XTC",item:"ContactList_item__3WwSL",button:"ContactList_button__1fsyj"}}},[[30,1,2]]]);
//# sourceMappingURL=main.c103d679.chunk.js.map