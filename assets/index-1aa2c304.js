(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const r=document.querySelector(".header__menu-btn input"),m=document.querySelector(".overlay"),d=document.querySelector(".nav");function h(){m.classList.toggle("_show"),d.classList.toggle("_show"),document.body.classList.toggle("_lock"),d.querySelector("._active a").focus()}function f(){r.checked=!1,m.classList.remove("_show"),d.classList.remove("_show"),document.body.classList.remove("_lock")}r.addEventListener("input",h);m.addEventListener("click",f);document.addEventListener("keyup",e=>{e.key==="Escape"&&(h(),r.checked=!r.checked),e.code==="KeyS"&&(e.shiftKey||e.metaKey)&&console.log("Пидарасина!")});function _(e,s,i){e.addEventListener("click",l=>{let t=document.querySelector("._show._page"),o=document.querySelector(".nav__item._active"),c=l.target.closest(".nav__item");t.classList.remove("_show"),s.classList.add("_show"),o.classList.remove("_active"),c.classList.add("_active"),localStorage.setItem("page",s.id),setTimeout(()=>{window.scrollTo(0,0)},30),i()})}function v(e,s,i){let l=document.querySelector(".mask"),t=document.querySelector(".nav__item._active"),o=document.querySelector("._page._show"),c=window.location.hash.slice(1);i(),l.classList.add("hide");for(let n=0;n<e.length;n++){let y=e[n].closest(".nav__item"),a=s[n];c===a.id?(o.classList.remove("_show"),a.classList.add("_show"),t.classList.remove("_active"),y.classList.add("_active"),localStorage.setItem("page",a.id)):c||(window.location.hash="#home",localStorage.setItem("page","home"))}setTimeout(()=>{l.remove()},500)}function L(){const e=document.querySelector(".theme-btn #toggle");e.addEventListener("input",s),e.checked=!0,localStorage.getItem("theme")==="dark"&&(e.checked=!1,document.body.classList.add("dark"));function s(){e.checked?(localStorage.setItem("theme","light"),document.body.classList.remove("dark")):(localStorage.setItem("theme","dark"),document.body.classList.add("dark"))}}let u=document.querySelectorAll(".nav__item a"),g=document.querySelectorAll("._page");for(let e=0;e<u.length;e++)_(u[e],g[e],f);window.addEventListener("load",()=>{v(u,g,L)});