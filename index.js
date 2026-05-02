import{a as l,S as u,i as d}from"./assets/vendor-DVVTzMB1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const f="https://pixabay.com/api/",p="55672071-de73ab20c9a46d751cd90c1a4";function m(n){return l.get(f,{params:{key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:o})=>o)}const i=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const o=n.map(e=>`
        <li>
        <a href='${e.largeImageURL}'>
        <img src='${e.webformatURL}' 
        alt='${e.tags}'
        />
        </a>

        <div class="gallery-info">
            <p><b>Likes</b><br>${e.likes}</p>
            <p><b>Views</b><br>${e.views}</p>
            <p><b>Comments</b><br>${e.comments}</p>
            <p><b>Downloads</b><br>${e.downloads}</p>
          </div>
        </li>
        `).join("");i.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){i.innerHTML=""}function b(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",v);function v(n){n.preventDefault();const o=n.currentTarget.elements["search-text"].value;h(),b(),m(o).then(({hits:e})=>{console.log(e),e.length===0&&d.error({message:"Sorry, there are no images matching your search query. Please try again!"}),g(e)}).catch(e=>{console.log(e.message)}).finally(()=>{n.target.reset(),L()})}
//# sourceMappingURL=index.js.map
