(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const d=document.querySelector(".header__menu-btn input"),u=document.querySelector(".overlay"),h=document.querySelector(".nav");function v(){u.classList.toggle("_show"),h.classList.toggle("_show"),document.body.classList.toggle("_lock")}function m(){d.checked=!1,u.classList.remove("_show"),h.classList.remove("_show"),document.body.classList.remove("_lock")}d.addEventListener("input",v);u.addEventListener("click",m);document.addEventListener("keyup",t=>{t.key==="Escape"&&d.checked&&m()});function _(t,s,n){t.addEventListener("click",l=>{let e=document.querySelector("._show._page"),o=document.querySelector(".nav__item._active"),c=l.target.closest(".nav__item");e.classList.remove("_show"),s.classList.add("_show"),o.classList.remove("_active"),c.classList.add("_active"),localStorage.setItem("page",s.id),setTimeout(()=>{window.scrollTo(0,0)},30),n()})}function L(t,s,n){let l=document.querySelector(".mask"),e=document.querySelector(".nav__item._active"),o=document.querySelector("._page._show"),c=window.location.hash.slice(1);n(),l.classList.add("hide");for(let i=0;i<t.length;i++){let g=t[i].closest(".nav__item"),r=s[i];c===r.id?(o.classList.remove("_show"),r.classList.add("_show"),e.classList.remove("_active"),g.classList.add("_active"),localStorage.setItem("page",r.id)):c||(window.location.hash="#home",localStorage.setItem("page","home"))}setTimeout(()=>{l.remove()},500)}function y(){const t=document.querySelector(".theme-btn #toggle");t.addEventListener("input",s),t.checked=!0,localStorage.getItem("theme")==="dark"&&(t.checked=!1,document.body.classList.add("dark"));function s(){t.checked?(localStorage.setItem("theme","light"),document.body.classList.remove("dark")):(localStorage.setItem("theme","dark"),document.body.classList.add("dark"))}}let a=document.querySelectorAll(".nav__item a"),f=document.querySelectorAll("._page");for(let t=0;t<a.length;t++)_(a[t],f[t],m);window.addEventListener("load",()=>{L(a,f,y),setTimeout(()=>{window.scrollTo(0,0)},30)});