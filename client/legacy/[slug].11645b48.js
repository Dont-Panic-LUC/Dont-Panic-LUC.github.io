import{L as t,_ as n,a as e,b as r,c as a,i as s,d as c,S as o,s as i,f as u,e as f,t as l,q as h,j as v,k as p,h as m,l as d,m as y,o as x,r as w,p as R,v as b,D as j,E}from"./client.e2c78aac.js";function g(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,s=e(t);if(n){var c=e(this).constructor;a=Reflect.construct(s,arguments,c)}else a=s.apply(this,arguments);return r(this,a)}}function k(t){var n,e,r,a,s,c,o=t[0].title+"",i=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=u(),r=f("h1"),a=l(o),s=u(),c=f("div"),this.h()},l:function(t){h('[data-svelte="svelte-1uty71u"]',document.head).forEach(v),e=p(t),r=m(t,"H1",{});var n=d(r);a=y(n,o),n.forEach(v),s=p(t),c=m(t,"DIV",{class:!0}),d(c).forEach(v),this.h()},h:function(){x(c,"class","content svelte-emm3f3")},m:function(t,n){w(t,e,n),w(t,r,n),R(r,a),w(t,s,n),w(t,c,n),c.innerHTML=i},p:function(t,e){var r=b(e,1)[0];1&r&&n!==(n=t[0].title)&&(document.title=n),1&r&&o!==(o=t[0].title+"")&&j(a,o),1&r&&i!==(i=t[0].html+"")&&(c.innerHTML=i)},i:E,o:E,d:function(t){t&&v(e),t&&v(r),t&&v(s),t&&v(c)}}}var H=function(t,n,e,r){return new(e||(e=Promise))((function(a,s){function c(t){try{i(r.next(t))}catch(t){s(t)}}function o(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var n;t.done?a(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,o)}i((r=r.apply(t,n||[])).next())}))};function L(n){var e=n.params;return H(this,void 0,void 0,t.mark((function n(){var r,a;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("blog/".concat(e.slug,".json"));case 2:return r=t.sent,t.next=5,r.json();case 5:if(a=t.sent,200!==r.status){t.next=10;break}return t.abrupt("return",{post:a});case 10:this.error(r.status,a.message);case 11:case"end":return t.stop()}}),n,this)})))}function _(t,n,e){this&&this.__awaiter;var r=n.post;return t.$$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var B=function(t){n(r,o);var e=g(r);function r(t){var n;return a(this,r),n=e.call(this),s(c(n),t,_,k,i,{post:0}),n}return r}();export{B as default,L as preload};
