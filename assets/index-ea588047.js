(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();const a=document.querySelector(".header__menu-btn input"),m=document.querySelector(".overlay"),d=document.querySelector(".nav");function h(){m.classList.toggle("_show"),d.classList.toggle("_show"),document.body.classList.toggle("_lock"),d.querySelector("._active a").focus()}function g(){a.checked=!1,m.classList.remove("_show"),d.classList.remove("_show"),document.body.classList.remove("_lock")}a.addEventListener("input",h);m.addEventListener("click",g);document.addEventListener("keyup",e=>{e.key==="Escape"&&(h(),a.checked=!a.checked),e.code==="KeyS"&&(e.shiftKey||e.metaKey)&&console.log("Пидарасина!")});function v(e,o,c){e.addEventListener("click",r=>{let t=document.querySelector("._show._page"),s=document.querySelector(".nav__item._active"),n=r.target.closest(".nav__item");t.classList.remove("_show"),o.classList.add("_show"),s.classList.remove("_active"),n.classList.add("_active"),localStorage.setItem("page",o.id),setTimeout(()=>{window.scrollTo(0,0)},30),c()})}function L(e,o,c){let r=document.querySelector(".mask"),t=document.querySelector(".nav__item._active"),s=document.querySelector("._page._show"),n=window.location.hash.slice(1);c(),r.classList.add("hide");for(let l=0;l<e.length;l++){let _=e[l].closest(".nav__item"),i=o[l];n===i.id?(s.classList.remove("_show"),i.classList.add("_show"),t.classList.remove("_active"),_.classList.add("_active"),localStorage.setItem("page",i.id)):n||(window.location.hash="#home",localStorage.setItem("page","home"))}setTimeout(()=>{r.remove()},500)}function p(){const e=document.querySelector(".theme-btn #toggle");e.addEventListener("input",o),e.checked=!0,localStorage.getItem("theme")==="dark"&&(e.checked=!1,document.body.classList.add("dark"));function o(){e.checked?(localStorage.setItem("theme","light"),document.body.classList.remove("dark")):(localStorage.setItem("theme","dark"),document.body.classList.add("dark"))}}const y=async e=>await(await fetch(e)).json(),w=async()=>{const o=await y("https://jsonplaceholder.typicode.com/todos");try{console.log("Todos: ",o)}catch(c){console.error(c.message)}},k=async()=>{const o=await y("https://jsonplaceholder.typicode.com/comments");try{console.log("Comments: ",o)}catch(c){console.error(c.message)}};let u=document.querySelectorAll(".nav__item a"),f=document.querySelectorAll("._page");for(let e=0;e<u.length;e++)v(u[e],f[e],g);window.addEventListener("load",()=>{L(u,f,p)});w();k();
