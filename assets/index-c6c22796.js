(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const a=document.querySelector(".header__menu-btn input"),m=document.querySelector(".overlay"),d=document.querySelector(".nav");function g(){m.classList.toggle("_show"),d.classList.toggle("_show"),document.body.classList.toggle("_lock"),d.querySelector("._active a").focus()}function f(){a.checked=!1,m.classList.remove("_show"),d.classList.remove("_show"),document.body.classList.remove("_lock")}a.addEventListener("input",g);m.addEventListener("click",f);document.addEventListener("keyup",e=>{e.key==="Escape"&&(g(),a.checked=!a.checked),e.code==="KeyS"&&(e.shiftKey||e.metaKey)&&console.log("Пидарасина!")});function _(e,c,l){e.addEventListener("click",s=>{let t=document.querySelector("._show._page"),o=document.querySelector(".nav__item._active"),n=s.target.closest(".nav__item");t.classList.remove("_show"),c.classList.add("_show"),o.classList.remove("_active"),n.classList.add("_active"),localStorage.setItem("page",c.id),setTimeout(()=>{window.scrollTo(0,0)},30),l()})}function v(e,c,l){let s=document.querySelector(".mask"),t=document.querySelector(".nav__item._active"),o=document.querySelector("._page._show"),n=window.location.hash.slice(1);l(),s.classList.add("hide");for(let r=0;r<e.length;r++){let p=e[r].closest(".nav__item"),i=c[r];n===i.id?(o.classList.remove("_show"),i.classList.add("_show"),t.classList.remove("_active"),p.classList.add("_active"),localStorage.setItem("page",i.id)):n||(window.location.hash="#home",localStorage.setItem("page","home"))}setTimeout(()=>{s.remove()},500)}function L(){const e=document.querySelector(".theme-btn #toggle");e.addEventListener("input",c),e.checked=!0,localStorage.getItem("theme")==="dark"&&(e.checked=!1,document.body.classList.add("dark"));function c(){e.checked?(localStorage.setItem("theme","light"),document.body.classList.remove("dark")):(localStorage.setItem("theme","dark"),document.body.classList.add("dark"))}}const h=e=>new Promise((c,l)=>fetch(e).then(s=>s.json()).then(s=>c(s)).catch(s=>l(s)));function k(){return h("https://jsonplaceholder.typicode.com/todos").then(e=>console.log("Todos:",e)).catch(e=>console.log(e.message))}function w(){return h("https://jsonplaceholder.typicode.com/users").then(e=>console.log("Users:",e)).catch(e=>console.error(e.message))}function S(){return h("https://jsonplaceholder.typicode.com/comments").then(e=>console.log("Comments:",e)).catch(e=>console.error(e.message))}let u=document.querySelectorAll(".nav__item a"),y=document.querySelectorAll("._page");for(let e=0;e<u.length;e++)_(u[e],y[e],f);window.addEventListener("load",()=>{v(u,y,L)});k();w();S();