!function(){"use strict";const e=1618446519150,t=`cache${e}`,s=["/client/client.e3948bd6.js","/client/inject_styles.5607aec6.js","/client/index.369cf951.js","/client/EventsRoll.6e5ffb40.js","/client/contact.f0af98aa.js","/client/e-board.673ca044.js","/client/index.a7b54856.js","/client/about.964a3cad.js","/client/index.8320f8ba.js","/client/[slug].2941031d.js"].concat(["/service-worker-index.html","/assets/content/events/2021-01-kickoff-game-night.png","/assets/content/events/2021-02-tips-from-a-hiring-perspective.jpg","/assets/content/events/2021-03-creating-a-portfolio.png","/assets/content/events/tbd.png","/assets/e-board/alex.jpg","/assets/e-board/anon.png","/assets/e-board/anran.png","/assets/e-board/henry.jpg","/assets/e-board/iqra.jpg","/assets/e-board/makenna.jpg","/assets/e-board/rayyan.jpg","/assets/e-board/tien.jpg","/assets/misc/googlePassport.jpg","/components.css","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/normalize.css","/robots.txt"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),a=s.protocol.startsWith("http"),c=s.hostname===self.location.hostname&&s.port!==self.location.port,o=s.host===self.location.host&&n.has(s.pathname),i="only-if-cached"===t.request.cache&&!o;!a||c||i||t.respondWith((async()=>o&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const n=await s.match(t);if(n)return n;throw e}}(t.request))())}))}();