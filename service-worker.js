!function(){"use strict";const e=1616128836366,t=`cache${e}`,n=["/client/client.08f9e4ab.js","/client/inject_styles.5607aec6.js","/client/index.2327b884.js","/client/contact.33a5091e.js","/client/e-board.616fefdb.js","/client/events.72ec1f43.js","/client/about.88a4fc8b.js","/client/index.10fb630b.js","/client/[slug].7604e85b.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/normalize.css"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!c||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
