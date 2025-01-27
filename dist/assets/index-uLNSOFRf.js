(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const d=document.querySelector('input[type="text"]'),a=document.querySelector("select"),u=document.querySelector("#electronics-button"),p=document.querySelector("#jewellery-button"),f=document.querySelector("#mens-clothing-button"),m=document.querySelector("#womens-clothing-button"),y="https://fakestoreapi.com/products";async function g(){try{const t=await(await fetch(y)).json();d.addEventListener("input",c=>{const r=c.target.value.toLowerCase(),e=t.filter(o=>o.title.toLowerCase().includes(r));n(e)}),a.addEventListener("change",c=>{const r=c.target.value;r==="price"?t.sort((e,o)=>e.price-o.price):r==="name"&&t.sort((e,o)=>e.title.localeCompare(o.title)),n(t)}),u.addEventListener("click",()=>{const c=t.filter(r=>r.category==="electronics");n(c)}),p.addEventListener("click",()=>{const c=t.filter(r=>r.category==="jewelery");n(c)}),f.addEventListener("click",()=>{const c=t.filter(r=>r.category==="men's clothing");n(c)}),m.addEventListener("click",()=>{const c=t.filter(r=>r.category==="women's clothing");n(c)}),n(t)}catch(s){console.error(s)}}const l=document.createElement("div");l.className="product-grid";document.body.appendChild(l);function n(s){l.innerHTML=s.map(t=>`
    <div class="product-card">
      <div class="product-image-container">
        <img src="${t.image}" alt="${t.title}" class="product-image">
      </div>
      <div class="product-details">
        <p class="product-title">${t.title}</p>
        <div class="line"></div>
        <div class="add-to-cart-container">
          <p class="product-price">${t.price.toFixed(2)} $</p>
          <button class="add-to-cart" onclick="animateButton(event)">Add to cart</button>
        </div>
      </div>
    </div>
  `).join("")}g();
