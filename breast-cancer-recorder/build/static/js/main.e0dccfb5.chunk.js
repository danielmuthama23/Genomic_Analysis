(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){},37:function(e,a,t){e.exports=t(48)},48:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(33),c=t.n(r),i=(t(30),t(54)),o=t(55),m=t(50),s=t(34),d=t(51);var u=e=>{let{onAddPatient:a}=e;const[t,r]=Object(n.useState)({name:"",email:"",age:"",weight:"",location:"",stage:"",dateDiagnosed:""}),[c,u]=Object(n.useState)({}),[E,g]=Object(n.useState)(!1),p=e=>{const{name:a,value:t}=e.target;r(e=>({...e,[a]:t}))};return l.a.createElement("div",{className:"form-container"},l.a.createElement("h2",null,"Patient Information"),l.a.createElement(i.a,{onSubmit:e=>{e.preventDefault();const n=(e=>{const a={};return e.name.trim()?e.name.length<2&&(a.name="Name must be at least 2 characters"):a.name="Name is required",e.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(a.email="Email is invalid"):a.email="Email is required",e.age?(e.age<18||e.age>120)&&(a.age="Age must be between 18 and 120"):a.age="Age is required",e.weight?(e.weight<30||e.weight>300)&&(a.weight="Weight must be between 30 and 300 kg"):a.weight="Weight is required",e.location.trim()||(a.location="Location is required"),e.stage||(a.stage="Cancer stage is required"),e.dateDiagnosed?new Date(e.dateDiagnosed)>new Date&&(a.dateDiagnosed="Date cannot be in the future"):a.dateDiagnosed="Diagnosis date is required",a})(t);Object.keys(n).length>0?(u(n),g(!1)):(u({}),a(t),r({name:"",email:"",age:"",weight:"",location:"",stage:"",dateDiagnosed:""}),g(!0),setTimeout(()=>g(!1),3e3))}},E&&l.a.createElement(o.a,{variant:"success"},"Patient data recorded successfully!"),l.a.createElement(m.a,null,l.a.createElement(s.a,{md:6},l.a.createElement(i.a.Group,{controlId:"name"},l.a.createElement(i.a.Label,null,"Full Name"),l.a.createElement(i.a.Control,{type:"text",name:"name",value:t.name,onChange:p,isInvalid:!!c.name}),l.a.createElement(i.a.Control.Feedback,{type:"invalid"},c.name))),l.a.createElement(s.a,{md:6},l.a.createElement(i.a.Group,{controlId:"email"},l.a.createElement(i.a.Label,null,"Email"),l.a.createElement(i.a.Control,{type:"email",name:"email",value:t.email,onChange:p,isInvalid:!!c.email}),l.a.createElement(i.a.Control.Feedback,{type:"invalid"},c.email)))),l.a.createElement(m.a,null,l.a.createElement(s.a,{md:4},l.a.createElement(i.a.Group,{controlId:"age"},l.a.createElement(i.a.Label,null,"Age"),l.a.createElement(i.a.Control,{type:"number",name:"age",value:t.age,onChange:p,isInvalid:!!c.age}),l.a.createElement(i.a.Control.Feedback,{type:"invalid"},c.age))),l.a.createElement(s.a,{md:4},l.a.createElement(i.a.Group,{controlId:"weight"},l.a.createElement(i.a.Label,null,"Weight (kg)"),l.a.createElement(i.a.Control,{type:"number",name:"weight",value:t.weight,onChange:p,isInvalid:!!c.weight}),l.a.createElement(i.a.Control.Feedback,{type:"invalid"},c.weight))),l.a.createElement(s.a,{md:4},l.a.createElement(i.a.Group,{controlId:"stage"},l.a.createElement(i.a.Label,null,"Cancer Stage"),l.a.createElement(i.a.Control,{as:"select",name:"stage",value:t.stage,onChange:p,isInvalid:!!c.stage},l.a.createElement("option",{value:""},"Select stage"),l.a.createElement("option",{value:"0"},"0 - Carcinoma in situ"),l.a.createElement("option",{value:"I"},"I"),l.a.createElement("option",{value:"II"},"II"),l.a.createElement("option",{value:"III"},"III"),l.a.createElement("option",{value:"IV"},"IV")),l.a.createElement(i.a.Control.Feedback,{type:"invalid"},c.stage)))),l.a.createElement(i.a.Group,{controlId:"location"},l.a.createElement(i.a.Label,null,"Location (City/Region)"),l.a.createElement(i.a.Control,{type:"text",name:"location",value:t.location,onChange:p,isInvalid:!!c.location}),l.a.createElement(i.a.Control.Feedback,{type:"invalid"},c.location)),l.a.createElement(i.a.Group,{controlId:"dateDiagnosed"},l.a.createElement(i.a.Label,null,"Date Diagnosed"),l.a.createElement(i.a.Control,{type:"date",name:"dateDiagnosed",value:t.dateDiagnosed,onChange:p,isInvalid:!!c.dateDiagnosed}),l.a.createElement(i.a.Control.Feedback,{type:"invalid"},c.dateDiagnosed)),l.a.createElement(d.a,{variant:"primary",type:"submit",className:"submit-btn"},"Record Patient Data")))},E=t(52),g=t(56),p=t(53);const v=e=>{switch(e){case"0":return"info";case"I":return"primary";case"II":return"warning";case"III":return"danger";case"IV":return"dark";default:return"secondary"}};var h=e=>{let{patients:a,onDeletePatient:t,onUpdatePatient:r}=e;const[c,o]=Object(n.useState)(1),[m]=Object(n.useState)(5),[s,u]=Object(n.useState)(!1),[h,b]=Object(n.useState)(!1),[C,y]=Object(n.useState)(null),I=c*m,w=I-m,D=a.slice(w,I),k=Math.ceil(a.length/m);return l.a.createElement("div",{className:"table-container"},l.a.createElement("h2",null,"Recorded Patients"),a.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{striped:!0,bordered:!0,hover:!0,responsive:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Weight"),l.a.createElement("th",null,"Location"),l.a.createElement("th",null,"Stage"),l.a.createElement("th",null,"Diagnosed"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,D.map((e,a)=>l.a.createElement("tr",{key:a},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.age),l.a.createElement("td",null,e.weight," kg"),l.a.createElement("td",null,e.location),l.a.createElement("td",null,l.a.createElement("span",{className:`badge bg-${v(e.stage)}`},e.stage)),l.a.createElement("td",null,e.dateDiagnosed),l.a.createElement("td",null,l.a.createElement(d.a,{variant:"outline-primary",size:"sm",onClick:()=>(e=>{y(e),u(!0)})(e)},"Edit")," ",l.a.createElement(d.a,{variant:"outline-danger",size:"sm",onClick:()=>(e=>{y(e),b(!0)})(e)},"Delete")))))),k>1&&l.a.createElement(g.a,{className:"justify-content-center mt-3"},l.a.createElement(g.a.Prev,{onClick:()=>o(e=>Math.max(e-1,1)),disabled:1===c}),Array.from({length:k},(e,a)=>l.a.createElement(g.a.Item,{key:a+1,active:a+1===c,onClick:()=>o(a+1)},a+1)),l.a.createElement(g.a.Next,{onClick:()=>o(e=>Math.min(e+1,k)),disabled:c===k})),l.a.createElement(d.a,{variant:"success",onClick:()=>{const e=(e=>{const a=e.map(e=>[e.name,e.email,e.age,e.weight,e.location,e.stage,e.dateDiagnosed]);return[["Name","Email","Age","Weight (kg)","Location","Cancer Stage","Date Diagnosed"].join(","),...a.map(e=>e.map(e=>`"${String(e).replace(/"/g,'""')}"`).join(","))].join("\n")})(a),t=new Blob([e],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(t),l=document.createElement("a");l.setAttribute("href",n),l.setAttribute("download","breast_cancer_patients.csv"),document.body.appendChild(l),l.click(),document.body.removeChild(l)},className:"mt-3"},"Download CSV")):l.a.createElement("p",null,"No patient data recorded yet."),l.a.createElement(p.a,{show:s,onHide:()=>u(!1)},l.a.createElement(p.a.Header,{closeButton:!0},l.a.createElement(p.a.Title,null,"Edit Patient")),l.a.createElement(p.a.Body,null,l.a.createElement(i.a.Group,{className:"mb-3"},l.a.createElement(i.a.Label,null,"Name"),l.a.createElement(i.a.Control,{type:"text",value:(null===C||void 0===C?void 0:C.name)||"",onChange:e=>y({...C,name:e.target.value})}))),l.a.createElement(p.a.Footer,null,l.a.createElement(d.a,{variant:"secondary",onClick:()=>u(!1)},"Cancel"),l.a.createElement(d.a,{variant:"primary",onClick:()=>{r(C),u(!1)}},"Save Changes"))),l.a.createElement(p.a,{show:h,onHide:()=>b(!1)},l.a.createElement(p.a.Header,{closeButton:!0},l.a.createElement(p.a.Title,null,"Confirm Delete")),l.a.createElement(p.a.Body,null,"Are you sure you want to delete ",null===C||void 0===C?void 0:C.name,"'s record?"),l.a.createElement(p.a.Footer,null,l.a.createElement(d.a,{variant:"secondary",onClick:()=>b(!1)},"Cancel"),l.a.createElement(d.a,{variant:"danger",onClick:()=>{t(C),b(!1)}},"Delete"))))};t(32);var b=function(){const[e,a]=Object(n.useState)([]),[t,r]=Object(n.useState)(!1);return l.a.createElement("div",{className:"app-container"},l.a.createElement("header",{className:"app-header"},l.a.createElement("h1",null,"Breast Cancer Patient Recorder"),l.a.createElement("p",{className:"lead"},"Record and manage patient data efficiently")),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(u,{onAddPatient:t=>{a([...e,t]),r(!0)}})),l.a.createElement("div",{className:"col-lg-6"},t&&l.a.createElement(h,{patients:e,onDeletePatient:t=>{a(e.filter(e=>e.email!==t.email))},onUpdatePatient:t=>{a(e.map(e=>e.email===t.email?t:e))}})))))};var C=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then(a=>{let{getCLS:t,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=a;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.e0dccfb5.chunk.js.map