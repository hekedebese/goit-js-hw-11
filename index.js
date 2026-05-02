import{a as u,S as d,i as a}from"./assets/vendor-DVVTzMB1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m="55672071-de73ab20c9a46d751cd90c1a4";function p(n){return u.get(f,{params:{key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:o})=>o)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const o=n.map(r=>`
        <li>
        <a href='${r.largeImageURL}'>
        <img src='${r.webformatURL}' 
        alt='${r.tags}'
        />
        </a>

        <div class="gallery-info">
            <p><b>Likes</b><br>${r.likes}</p>
            <p><b>Views</b><br>${r.views}</p>
            <p><b>Comments</b><br>${r.comments}</p>
            <p><b>Downloads</b><br>${r.downloads}</p>
          </div>
        </li>
        `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",S);function S(n){n.preventDefault();const o=n.currentTarget.elements["search-text"].value.trim();if(!o){a.error({message:"Please enter a search query!"});return}h(),b(),p(o).then(({hits:r})=>{if(r.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(r)}).catch(r=>{a.error({message:"Something went wrong. Please try again later!"}),console.log(r.message)}).finally(()=>{n.target.reset(),L()})}
//# sourceMappingURL=index.js.map
