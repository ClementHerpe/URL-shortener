(function(e){function t(t){for(var r,u,l=t[0],i=t[1],a=t[2],d=0,p=[];d<l.length;d++)u=l[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1dec":function(e,t,n){},3068:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("cf05"),c=n.n(o),u={class:"content__container"},l=Object(r["d"])("img",{alt:"Vue logo",src:c.a},null,-1);function i(e,t,n,o,c,i){var a=Object(r["h"])("HelloWorld");return Object(r["e"])(),Object(r["b"])("div",u,[l,Object(r["d"])(a,{msg:"Bienvenue sur SimpleURL"})])}var a=Object(r["l"])("data-v-77842a68");Object(r["g"])("data-v-77842a68");var s=Object(r["d"])("p",null,[Object(r["c"])(" Un projet cours pour apprendre les bases de Vue, pratiquer Node et s'entrainer à déployer un site ! "),Object(r["d"])("span",{style:{"font-size":"30px"}},"😁")],-1),d=Object(r["d"])("div",{class:"visible content"},"Générer mon lien",-1),p=Object(r["d"])("div",{class:"hidden content"},[Object(r["d"])("i",{class:"right arrow icon"})],-1),b={id:"result"};Object(r["f"])();var f=a((function(e,t,n,o,c,u){var l=this;return Object(r["e"])(),Object(r["b"])("div",null,[Object(r["d"])("h1",null,Object(r["i"])(n.msg),1),s,Object(r["d"])("form",null,[Object(r["k"])(Object(r["d"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.url=e}),name:"url",id:"url",placeholder:"Le lien à simplifer"},null,512),[[r["j"],c.url]]),Object(r["k"])(Object(r["d"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.slug=e}),name:"slug",id:"slug",placeholder:"Raccourci souhaité"},null,512),[[r["j"],c.slug]]),Object(r["d"])("div",{id:"create--url--button",onClick:t[3]||(t[3]=function(e){return u.createUrl()}),class:"ui animated button",tabindex:"0"},[d,p])]),Object(r["d"])("div",b,Object(r["i"])(c.created),1),Object(r["d"])("button",{id:"copy--url--button",class:"ui toggle button invisible",onClick:t[4]||(t[4]=function(e){return u.copyLink("localhost:3000/".concat(l.slug))})}," Copier ")])})),v=(n("d3b7"),n("96cf"),n("1da1")),O={name:"HelloWorld",props:{msg:String},data:function(){return{url:"http://",slug:"",created:""}},methods:{createUrl:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.url,e.slug),t.next=3,fetch("/url",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({url:e.url,slug:e.slug})}).then((function(t){if(200===t.status){e.created="Lien crée et disponible : localhost:3000/".concat(e.slug);var n=document.getElementById("copy--url--button");n.classList.remove("invisible")}else console.log(t),e.created="Oups, veuillez réessayer"}));case 3:case"end":return t.stop()}}),t)})))()},copyLink:function(e){var t=document.getElementById("copy--url--button");t.classList.add("success");var n=document.createElement("textarea");document.body.appendChild(n),n.value=e,n.select(),document.execCommand("copy"),document.body.removeChild(n)}}};n("eb11");O.render=f,O.__scopeId="data-v-77842a68";var j=O,m={name:"App",components:{HelloWorld:j}};n("64be");m.render=i;var g=m;Object(r["a"])(g).mount("#app")},"64be":function(e,t,n){"use strict";n("3068")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},eb11:function(e,t,n){"use strict";n("1dec")}});
//# sourceMappingURL=app.13bd46d0.js.map