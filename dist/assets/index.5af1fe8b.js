var A=Object.defineProperty,E=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var k=(r,t,a)=>t in r?A(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,S=(r,t)=>{for(var a in t||(t={}))H.call(t,a)&&k(r,a,t[a]);if(w)for(var a of w(t))P.call(t,a)&&k(r,a,t[a]);return r},R=(r,t)=>E(r,j(t));import{j as v,r as i,N as x,L as N,u as q,a as O,b as C,B,R as _,c as g,d as T,e as F,f as M}from"./vendor.0c7ffe26.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}};W();const e=v.exports.jsx,l=v.exports.jsxs,L=v.exports.Fragment;let f;const p=i.exports.createContext({token:"",isLoggedIn:!1,login:r=>{},logout:()=>{}}),D=r=>{const t=new Date().getTime();return new Date(r).getTime()-t},$=()=>{const r=localStorage.getItem("superToken"),t=localStorage.getItem("superExpirationTime"),a=D(t);return a<=6e4?(localStorage.removeItem("superToken"),localStorage.removeItem("superExpirationTime"),null):{token:r,duration:a}},z=({children:r})=>{const t=$();let a;t&&(a=t.token);const[d,n]=i.exports.useState(a),o=!!d;console.log(o);const s=i.exports.useCallback(()=>{n(null),localStorage.removeItem("superToken"),localStorage.removeItem("superExpirationTime"),f&&clearTimeout(f)},[]),m=(c,h)=>{n(c),localStorage.setItem("superToken",c),localStorage.setItem("superExpirationTime",h);const b=D(h);f=setTimeout(s,b)};i.exports.useEffect(()=>{t&&(console.log(t.duration),f=setTimeout(s,t.duration))},[t,s]);const u={token:d,isLoggedIn:o,login:m,logout:s};return e(p.Provider,{value:u,children:r})},U=()=>{const[r,t]=i.exports.useState(!1),a=()=>{t(s=>!s)},d=i.exports.useContext(p),n=d.isLoggedIn;return e("div",{className:"fixed top-0 left-0 z-50 w-full shadow-lg opacity-100 bg-secondary",children:l("nav",{className:"shadow-lg bg-secondary font-rubik",children:[l("div",{className:"container flex flex-wrap items-center justify-between py-3 md:py-4",children:[e(x,{to:"/",exact:"true",className:"text-3xl font-semibold text-gray-100 md:text-4xl",children:"Logo"}),e("div",{className:"lg:hidden",children:e("i",{className:"text-gray-200 transition-all duration-200 fa fa-bars fa-2x hover:text-brand-text",onClick:a})}),e("div",{className:"hidden lg:block",children:l("ul",{className:"hidden list-none lg:flex",children:[n&&e("li",{className:"py-2 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text",children:e(x,{to:"/",className:({isActive:s})=>s?"text-brand-text":"text-gray-300 transition-all duration-200 hover:text-brand-text",children:"Dashboard"})}),n&&e("li",{className:"py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text",children:e(x,{to:"/profile",className:({isActive:s})=>s?"text-brand-text":"text-gray-300 transition-all duration-200 hover:text-brand-text",children:"My Profile"})}),n&&e("li",{className:"py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text",onClick:()=>{d.logout()},children:e(x,{to:"/signin",className:({isActive:s})=>s?"text-brand-text":"text-gray-300 transition-all duration-200 hover:text-brand-text",children:"Logout"})})]})})]}),e("div",{className:"container transition-all duration-300 "+(r?" translate-y-0 py-4 opacity-100 h-full":" -translate-y-96 opacity-0 h-0"),children:l("ul",{className:"grid grid-cols-3 gap-6 list-none place-items-center",children:[e("li",{className:"py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text",children:e(x,{to:"/",children:"Dashboard"})}),e("li",{className:"py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text",children:e(x,{to:"/profile",children:"My Profile"})})]})})]})})},K=()=>e("div",{className:"font-rubik container mt-28 md:mt-32 lg:mt-48",children:e("h1",{className:"text-gray-200 leading-relaxed text-lg lg:text-2xl font-medium",children:"Hi, Welcome Back, User"})}),y=({figures:r,type:t,figureStyle:a,className:d,typeStyle:n})=>l("div",{className:d,children:[e("h2",{className:`${a}`,children:r}),e("h6",{className:`${n}`,children:t})]}),Y=()=>l("div",{className:"container grid gap-8 mt-16 font-rubik md:grid-cols-2 lg:grid-cols-4 md:place-content-center place-items-center md:mt-24 lg:mt-32",children:[e(y,{figures:"10.4k",className:"w-full transition-all duration-200 bg-green-100 shadow-lg rounded-xl py-14 hover:-translate-y-3",figureStyle:"text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-green-900 text-center",type:"Users",typeStyle:"text-xl lg:text-2xl text-green-700 text-center font-medium"}),e(N,{to:"/restaurants",children:e(y,{figures:"1.5k",className:"w-full transition-all duration-200 bg-red-100 shadow-lg rounded-xl py-14 hover:-translate-y-3",figureStyle:"text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-red-900 text-center",type:"Restaurants",typeStyle:"text-xl lg:text-2xl text-red-700 text-center font-medium"})}),e(y,{figures:"100",className:"w-full transition-all duration-200 bg-yellow-100 shadow-lg rounded-xl py-14 hover:-translate-y-3",figureStyle:"text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-yellow-900 text-center",type:"Blogs",typeStyle:"text-xl lg:text-2xl text-yellow-700 text-center font-medium"}),e(y,{figures:"7.2m",className:"w-full transition-all duration-200 bg-blue-100 shadow-lg rounded-xl py-14 hover:-translate-y-3",figureStyle:"text-4xl lg:text-5xl font-semibold mb-3 md:mb-5 text-blue-900 text-center",type:"Yearly Revenue",typeStyle:"text-xl lg:text-2xl text-blue-700 text-center font-medium"})]}),G=()=>l("div",{children:[e(K,{}),e(Y,{})]}),J=r=>{const t=q();return i.exports.useEffect(()=>{window.scrollTo(0,0)},[t]),e(L,{children:r.children})},Q=()=>e("div",{children:e("div",{className:"bg-no-repeat font-rubik bg-error",children:l("div",{className:"container py-24 lg:py-40",children:[e("h1",{className:"mb-6 text-5xl font-semibold text-center md:text-6xl lg:text-7xl text-cta md:mb-10 lg:mb-14",children:"Error"}),e("h2",{className:"mb-10 text-5xl font-semibold text-center md:text-6xl lg:text-7xl text-brand-text md:mb-12 lg:mb-16",children:"404"}),e("h4",{className:"mb-10 text-3xl text-center md:text-4xl lg:text-5xl text-brand-text md:mb-14 lg:mb-20",children:"Opps, Went The Wrong Way!!"}),e("div",{className:"max-w-sm mx-auto",children:e(N,{to:"/",children:e("button",{className:"w-full px-8 py-3 text-xl font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-2xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark",children:"Back To Dashboard"})})})]})})}),V=()=>{const[r,t]=i.exports.useState({email:"",password:""}),a=s=>{t(R(S({},r),{[s.target.name]:s.target.value}))},d=O(),n=i.exports.useContext(p);return l(L,{children:[e("h1",{className:"mb-12 text-4xl font-bold text-center text-gray-100 lg:text-5xl font-rubik mt-28 md:mt-40 lg:mt-48 lg:mb-20",children:"Super Admin Signin"}),e("div",{className:"container mb-10 font-rubik md:mb-28",children:e("div",{className:"max-w-lg px-10 py-10 mx-auto shadow-lg bg-secondary rounded-xl",children:l("form",{onSubmit:async s=>{s.preventDefault();const m=await C.post("https://achievexsolutions.in/current_work/eatiano/api/auth/super_admin/login",{email:r.email,password:r.password});if(t({email:"",password:""}),m.status===200){const u=await m.data,c=new Date(new Date().getTime()+ +u.expires_in*1e3);n.login(u.access_token,c.toISOString()),console.log(u),d("/",{replace:!0})}else return alert("Error")},children:[l("div",{className:"mb-6 md:mb-9",children:[e("h6",{className:"mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5",children:e("label",{children:"Email"})}),e("input",{type:"email",required:!0,name:"email",value:r.email,onChange:a,className:"w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary"})]}),l("div",{className:"mb-6 md:mb-9",children:[e("h6",{className:"mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5",children:e("label",{children:"Password"})}),e("input",{type:"password",required:!0,name:"password",value:r.password,onChange:a,className:"w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary"})]}),e("button",{type:"submit",className:"w-full px-8 py-2 my-6 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark",children:"Signin"})]})})})]})},I=i.exports.createContext({allRestaurants:[]}),X=({children:r})=>{const[t,a]=i.exports.useState([]),n=i.exports.useContext(p).token;i.exports.useEffect(()=>{(async()=>{let m={headers:{Authorization:`Bearer ${n}`}};const c=await(await C.get("https://achievexsolutions.in/current_work/eatiano/api/super_admin/all_restaurant",m)).data;console.log(c.data),a(c.data)})()},[]);const o={allRestaurants:t};return e(I.Provider,{value:o,children:r})},Z=()=>e("div",{children:"RestaurantItem"}),ee=({allRestaurants:r})=>{const t=r.map(a=>e(Z,{restaurantData:a},a.restaurant_id));return e("div",{className:"grid grid-cols-2 gap-12 md:grid-cols-3 place-content-center place-items-center",children:t})},te=()=>{const[r,t]=i.exports.useState([]),[a,d]=i.exports.useState(""),o=i.exports.useContext(I).allRestaurants,s=i.exports.useRef();return l("div",{className:"container mt-24 md:mt-32 lg:mt-48 font-rubik",children:[e("h2",{className:"mb-10 text-center text-gray-100 lg:text-left md:text-2xl lg:text-3xl md:mb-16",children:"All Restaurants"}),l("div",{className:"grid gap-2 md:gap-6 md:grid-cols-4 lg:grid-cols-7 md:place-content-center md:place-items-center",children:[e("div",{className:"w-full md:col-span-2 lg:col-span-5",children:e("form",{onSubmit:c=>{c.preventDefault(),d("")},children:e("input",{type:"text",placeholder:"Search Restaurants By Name Or Area...",className:"w-full px-4 py-2 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary",ref:s,onChange:c=>{if(d(c.target.value),a!==""){const h=o.filter(b=>Object.values(b).join(" ").toLowerCase().includes(a.toLowerCase()));t(h)}else t(o)},value:a})})}),e("div",{className:"md:col-span-2 lg:col-span-2",children:e(N,{to:"/restaurants/add",children:e("button",{className:"w-full px-8 py-2 my-6 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg md:w-auto hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark",children:"Add New Restaurant"})})})]}),e(ee,{allRestaurants:a.length<1?o:r})]})},re=()=>l("div",{className:"container my-24 md:my-32 lg:my-44 font-rubik",children:[e("h1",{className:"mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16",children:"Add New Restaurant"}),e("div",{className:"max-w-4xl p-10 mx-auto rounded-lg shadow-lg bg-secondary",children:e("form",{children:l("div",{className:"grid gap-8 md:grid-cols-2",children:[l("div",{children:[e("h6",{className:"mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5",children:e("label",{children:"Restaurant Name*"})}),e("input",{type:"text",required:!0,className:"w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary"})]}),l("div",{children:[e("h6",{className:"mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5",children:e("label",{children:"Restaurant Phone*"})}),e("input",{type:"number",required:!0,className:"w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary"})]}),l("div",{children:[e("h6",{className:"mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5",children:e("label",{children:"Restaurant Latitude*"})}),e("input",{type:"number",required:!0,className:"w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary"})]}),l("div",{children:[e("h6",{className:"mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5",children:e("label",{children:"Restaurant Longitude*"})}),e("input",{type:"number",required:!0,className:"w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary"})]}),l("div",{children:[e("h6",{className:"mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5",children:e("label",{children:"Restaurant Meta Data*"})}),e("input",{type:"text",required:!0,className:"w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary"})]}),l("div",{children:[e("h6",{className:"mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5",children:e("label",{children:"Restaurant Image*"})}),e("input",{type:"file",required:!0,className:"w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary"})]}),l("div",{className:"col-span-2",children:[e("h6",{className:"mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5",children:e("label",{children:"Restaurant Address*"})}),e("textarea",{cols:"30",rows:"3",className:"w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary"})]})]})})})]});function ae(){const t=i.exports.useContext(p).isLoggedIn;return l(B,{children:[e(U,{}),e(J,{children:l(_,{children:[t&&e(g,{path:"/",element:e(G,{})}),!t&&e(g,{path:"/signin",element:e(V,{})}),!t&&e(g,{path:"/",element:e(T,{replace:!0,to:"/signin"})}),t&&e(g,{path:"/signin",element:e(T,{replace:!0,to:"/"})}),e(g,{path:"/restaurants",element:e(te,{})}),e(g,{path:"/restaurants/add",element:e(re,{})}),e(g,{path:"*",element:e(Q,{})})]})})]})}F.render(e(z,{children:e(X,{children:e(M.StrictMode,{children:e(ae,{})})})}),document.getElementById("root"));