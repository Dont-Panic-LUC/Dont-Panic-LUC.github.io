import{_ as t,a as n,b as a,c as r,i as c,s as e,d as s,S as i,e as o,f,t as l,H as u,h as v,l as h,k as d,m,j as p,z as g,o as E,r as y,p as D,v as k,A as I,B as q,C as P,D as R}from"./client.9e7bd665.js";import{d as B}from"./dayjs.min.231f525f.js";function V(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,e=n(t);if(r){var s=n(this).constructor;c=Reflect.construct(e,arguments,s)}else c=e.apply(this,arguments);return a(this,c)}}function j(t,n,a){var r=t.slice();return r[5]=n[a],r}function x(t){var n,a,r=B(t[5].date).format("MMM DD, hh:mma")+"";return{c:function(){n=o("p"),a=l(r)},l:function(t){n=v(t,"P",{});var c=h(n);a=m(c,r),c.forEach(p)},m:function(t,r){y(t,n,r),D(n,a)},p:q,d:function(t){t&&p(n)}}}function M(t){var n,a;return{c:function(){n=o("p"),a=l("Exact Time Forthcoming")},l:function(t){n=v(t,"P",{});var r=h(n);a=m(r,"Exact Time Forthcoming"),r.forEach(p)},m:function(t,r){y(t,n,r),D(n,a)},p:q,d:function(t){t&&p(n)}}}function T(t){var n,a,r,c,e,s,i,k,I,P,B=t[5].title+"",V=t[5].html+"",j=t[5].image&&function(t){var n,a,r;return{c:function(){n=o("div"),a=o("img"),this.h()},l:function(t){n=v(t,"DIV",{class:!0});var r=h(n);a=v(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(p),this.h()},h:function(){R(a.src,r="assets/content/events/".concat(t[5].image))||E(a,"src",r),E(a,"alt","Banner for the event ".concat(t[5].title)),E(a,"class","svelte-rykq7e"),E(n,"class","card-image-container svelte-rykq7e")},m:function(t,r){y(t,n,r),D(n,a)},p:q,d:function(t){t&&p(n)}}}(t);var T=function(t,n){return"TBD"===t[5].date||"Upcoming"===t[5].date?M:t[5].date?x:void 0}(t),H=T&&T(t);return{c:function(){n=o("article"),j&&j.c(),a=f(),r=o("div"),c=o("div"),H&&H.c(),e=f(),s=o("h2"),i=l(B),k=f(),I=new u,P=f(),this.h()},l:function(t){n=v(t,"ARTICLE",{class:!0});var o=h(n);j&&j.l(o),a=d(o),r=v(o,"DIV",{class:!0});var f=h(r);c=v(f,"DIV",{class:!0});var l=h(c);H&&H.l(l),e=d(l),s=v(l,"H2",{class:!0});var u=h(s);i=m(u,B),u.forEach(p),l.forEach(p),k=d(f),I=g(f),f.forEach(p),P=d(o),o.forEach(p),this.h()},h:function(){E(s,"class","svelte-rykq7e"),E(c,"class","card-top svelte-rykq7e"),I.a=null,E(r,"class","card-content svelte-rykq7e"),E(n,"class","card svelte-rykq7e")},m:function(t,o){y(t,n,o),j&&j.m(n,null),D(n,a),D(n,r),D(r,c),H&&H.m(c,null),D(c,e),D(c,s),D(s,i),D(r,k),I.m(V,r),D(n,P)},p:function(t,n){t[5].image&&j.p(t,n),H&&H.p(t,n)},d:function(t){t&&p(n),j&&j.d(),H&&H.d()}}}function H(t){for(var n,a,r,c,e,s=t[1],i=[],u=0;u<s.length;u+=1)i[u]=T(j(t,s,u));return{c:function(){n=o("div"),a=o("h1"),r=l(t[0]),c=f(),e=o("div");for(var s=0;s<i.length;s+=1)i[s].c();this.h()},l:function(s){n=v(s,"DIV",{id:!0});var o=h(n);a=v(o,"H1",{class:!0});var f=h(a);r=m(f,t[0]),f.forEach(p),c=d(o),e=v(o,"DIV",{class:!0});for(var l=h(e),u=0;u<i.length;u+=1)i[u].l(l);l.forEach(p),o.forEach(p),this.h()},h:function(){E(a,"class","svelte-rykq7e"),E(e,"class","card-container"),E(n,"id","container")},m:function(t,s){y(t,n,s),D(n,a),D(a,r),D(n,c),D(n,e);for(var o=0;o<i.length;o+=1)i[o].m(e,null)},p:function(t,n){var a=k(n,1)[0];if(1&a&&I(r,t[0]),2&a){var c;for(s=t[1],c=0;c<s.length;c+=1){var o=j(t,s,c);i[c]?i[c].p(o,a):(i[c]=T(o),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=s.length}},i:q,o:q,d:function(t){t&&p(n),P(i,t)}}}function S(t,n,a){var r=n.events,c=n.title,e=void 0===c?"Upcoming Events":c,s=n.isPast,i=void 0!==s&&s,o=(new Date).toISOString(),f=r.filter((function(t){return i?t.date<o:t.date>=o})).sort((function(t,n){return t.date<n.date?1:-1}));return t.$$set=function(t){"events"in t&&a(2,r=t.events),"title"in t&&a(0,e=t.title),"isPast"in t&&a(3,i=t.isPast)},[e,f,r,i]}var b=function(n){t(o,i);var a=V(o);function o(t){var n;return r(this,o),n=a.call(this),c(s(n),t,S,H,e,{events:2,title:0,isPast:3}),n}return o}();export{b as E};
