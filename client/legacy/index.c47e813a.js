import{_ as t,a as n,b as e,c as s,i as a,d as r,S as c,s as o,f,e as i,g as u,q as l,j as v,k as h,h as $,l as p,n as m,o as d,r as g,u as y,p as E,v as R,w as j,x as w,y as x}from"./client.1a33ff42.js";import{E as P}from"./EventsRoll.c2080550.js";function z(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=n(t);if(s){var c=n(this).constructor;a=Reflect.construct(r,arguments,c)}else a=r.apply(this,arguments);return e(this,a)}}function B(t){var n,e,s,a,r,c,o,z;return s=new P({props:{events:t[0]}}),o=new P({props:{events:t[0],isPast:!0,title:"Past Events"}}),{c:function(){n=f(),e=i("div"),u(s.$$.fragment),a=f(),r=i("div"),c=f(),u(o.$$.fragment),this.h()},l:function(t){l('[data-svelte="svelte-ynwe2a"]',document.head).forEach(v),n=h(t),e=$(t,"DIV",{id:!0,class:!0});var f=p(e);m(s.$$.fragment,f),a=h(f),r=$(f,"DIV",{id:!0,class:!0}),p(r).forEach(v),c=h(f),m(o.$$.fragment,f),f.forEach(v),this.h()},h:function(){document.title="Events",d(r,"id","spacer"),d(r,"class","svelte-1n663pz"),d(e,"id","container"),d(e,"class","svelte-1n663pz")},m:function(t,f){g(t,n,f),g(t,e,f),y(s,e,null),E(e,a),E(e,r),E(e,c),y(o,e,null),z=!0},p:function(t,n){var e=R(n,1)[0],a={};1&e&&(a.events=t[0]),s.$set(a);var r={};1&e&&(r.events=t[0]),o.$set(r)},i:function(t){z||(j(s.$$.fragment,t),j(o.$$.fragment,t),z=!0)},o:function(t){w(s.$$.fragment,t),w(o.$$.fragment,t),z=!1},d:function(t){t&&v(n),t&&v(e),x(s),x(o)}}}function D(){return this.fetch("events.json").then((function(t){return t.json()})).then((function(t){return{events:t}}))}function I(t,n,e){var s=n.events;return t.$$set=function(t){"events"in t&&e(0,s=t.events)},[s]}var V=function(n){t(f,c);var e=z(f);function f(t){var n;return s(this,f),n=e.call(this),a(r(n),t,I,B,o,{events:0}),n}return f}();export default V;export{D as preload};
