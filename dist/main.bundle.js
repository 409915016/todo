!function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=f.p+""+e+"."+b+".hot-update.js",t.appendChild(n)}function o(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var o=new XMLHttpRequest,r=f.p+""+b+".hot-update.json";o.open("GET",r,!0),o.timeout=e,o.send(null)}catch(e){return n(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===o.status)t();else if(200!==o.status&&304!==o.status)n(new Error("Manifest request to "+r+" failed."));else{try{var e=JSON.parse(o.responseText)}catch(e){return void n(e)}t(e)}}})}function r(e){var t=P[e];if(!t)return f;var n=function(n){return t.hot.active?(P[n]?P[n].parents.indexOf(e)<0&&P[n].parents.push(e):(E=[e],v=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),E=[]),f(n)};for(var o in f)Object.prototype.hasOwnProperty.call(f,o)&&"e"!==o&&Object.defineProperty(n,o,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(t){f[e]=t}}}(o));return n.e=function(e){function t(){M--,"prepare"===D&&(H[e]||s(e),0===M&&0===I&&u())}return"ready"===D&&c("prepare"),M++,f.e(e).then(t,function(e){throw t(),e})},n}function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:a,apply:p,status:function(e){if(!e)return D;_.push(e)},addStatusHandler:function(e){_.push(e)},removeStatusHandler:function(e){var t=_.indexOf(e);t>=0&&_.splice(t,1)},data:x[e]};return v=void 0,t}function c(e){D=e;for(var t=0;t<_.length;t++)_[t].call(null,e)}function i(e){return+e+""===e?+e:e}function a(e){if("idle"!==D)throw new Error("check() is only allowed in idle status");return w=e,c("check"),o(O).then(function(e){if(!e)return c("idle"),null;k={},H={},L=e.c,y=e.h,c("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});g={};return s(0),"prepare"===D&&0===M&&0===I&&u(),t})}function l(e,t){if(L[e]&&k[e]){k[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0==--I&&0===M&&u()}}function s(e){L[e]?(k[e]=!0,I++,n(e)):H[e]=!0}function u(){c("ready");var e=m;if(m=null,e)if(w)Promise.resolve().then(function(){return p(w)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(i(n));e.resolve(t)}}function p(n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];e.indexOf(o)<0&&e.push(o)}}if("ready"!==D)throw new Error("apply() is only allowed in ready status");n=n||{};var r,d,a,l,s,u={},p=[],h={},v=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var m in g)if(Object.prototype.hasOwnProperty.call(g,m)){s=i(m);var w;w=g[m]?function(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var d=r.pop(),c=d.id,i=d.chain;if((l=P[c])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(l.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var a=0;a<l.parents.length;a++){var s=l.parents[a],u=P[s];if(u){if(u.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([s]),moduleId:c,parentId:s};t.indexOf(s)>=0||(u.hot._acceptedDependencies[c]?(n[s]||(n[s]=[]),o(n[s],[c])):(delete n[s],t.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(s):{type:"disposed",moduleId:m};var O=!1,j=!1,_=!1,I="";switch(w.chain&&(I="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":n.onDeclined&&n.onDeclined(w),n.ignoreDeclined||(O=new Error("Aborted because of self decline: "+w.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(w),n.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(w),n.ignoreUnaccepted||(O=new Error("Aborted because "+s+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(w),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(w),_=!0;break;default:throw new Error("Unexception type "+w.type)}if(O)return c("abort"),Promise.reject(O);if(j){h[s]=g[s],o(p,w.outdatedModules);for(s in w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,s)&&(u[s]||(u[s]=[]),o(u[s],w.outdatedDependencies[s]))}_&&(o(p,[w.moduleId]),h[s]=v)}var M=[];for(d=0;d<p.length;d++)s=p[d],P[s]&&P[s].hot._selfAccepted&&M.push({module:s,errorHandler:P[s].hot._selfAccepted});c("dispose"),Object.keys(L).forEach(function(e){!1===L[e]&&t(e)});for(var H,k=p.slice();k.length>0;)if(s=k.pop(),l=P[s]){var C={},T=l.hot._disposeHandlers;for(a=0;a<T.length;a++)(r=T[a])(C);for(x[s]=C,l.hot.active=!1,delete P[s],delete u[s],a=0;a<l.children.length;a++){var N=P[l.children[a]];N&&((H=N.parents.indexOf(s))>=0&&N.parents.splice(H,1))}}var B,A;for(s in u)if(Object.prototype.hasOwnProperty.call(u,s)&&(l=P[s]))for(A=u[s],a=0;a<A.length;a++)B=A[a],(H=l.children.indexOf(B))>=0&&l.children.splice(H,1);c("apply"),b=y;for(s in h)Object.prototype.hasOwnProperty.call(h,s)&&(e[s]=h[s]);var U=null;for(s in u)if(Object.prototype.hasOwnProperty.call(u,s)&&(l=P[s])){A=u[s];var S=[];for(d=0;d<A.length;d++)if(B=A[d],r=l.hot._acceptedDependencies[B]){if(S.indexOf(r)>=0)continue;S.push(r)}for(d=0;d<S.length;d++){r=S[d];try{r(A)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:A[d],error:e}),n.ignoreErrored||U||(U=e)}}}for(d=0;d<M.length;d++){var z=M[d];s=z.module,E=[s];try{f(s)}catch(e){if("function"==typeof z.errorHandler)try{z.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:t,orginalError:e,originalError:e}),n.ignoreErrored||U||(U=t),U||(U=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||U||(U=e)}}return U?(c("fail"),Promise.reject(U)):(c("idle"),new Promise(function(e){e(p)}))}function f(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:d(t),parents:(j=E,E=[],j),children:[]};return e[t].call(n.exports,n,n.exports,r(t)),n.l=!0,n.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){l(e,t),h&&h(e,t)};var v,m,g,y,w=!0,b="ba8d92dcca35b8df9b1a",O=1e4,x={},E=[],j=[],_=[],D="idle",I=0,M=0,H={},k={},L={},P={};f.m=e,f.c=P,f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="",f.h=function(){return b},r("./src/main.js")(f.s="./src/main.js")}({"./src/less/main.less":function(e,t){},"./src/main.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){l.default.todo.push(e),i.default.dataObjectUpdate(),console.log(l.default),i.default.addItemToDOM(e)}var d=n("./src/less/main.less"),c=(o(d),n("./src/modules/item.js")),i=o(c),a=n("./src/modules/data.js"),l=o(a);console.log(localStorage.getItem("todoList")),i.default.renderTodoList(),document.getElementById("add").addEventListener("click",function(){var e=document.getElementById("item").value;console.log(),e&&r(e)}),document.getElementById("item").addEventListener("keydown",function(e){var t=this.value;console.log(e.code),"Enter"===e.code&&t&&r(t)})},"./src/modules/data.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=localStorage.getItem("todoList")?JSON.parse(localStorage.getItem("todoList")):{todo:[],completed:[]};t.default=o},"./src/modules/item.js":function(e,t,n){"use strict";function o(){var e=this.parentNode.parentNode,t=e.parentNode,n=t.id,o=e.innerText;"todo"===n?c.default.todo.splice(c.default.todo.indexOf(o),1):c.default.completed.splice(c.default.todo.indexOf(o),1),l.dataObjectUpdate(),console.log(c.default),t.removeChild(e)}function r(){var e=this.parentNode.parentNode,t=e.parentNode,n=t.id,o="todo"===n?document.getElementById("completed"):document.getElementById("todo"),r=e.innerText;"todo"===n?(c.default.todo.splice(c.default.todo.indexOf(r),1),c.default.completed.push(r)):(c.default.completed.splice(c.default.todo.indexOf(r),1),c.default.todo.push(r)),l.dataObjectUpdate(),console.log(c.default),t.removeChild(e),o.insertBefore(e,o.childNodes[0])}Object.defineProperty(t,"__esModule",{value:!0});var d=n("./src/modules/data.js"),c=function(e){return e&&e.__esModule?e:{default:e}}(d),i='<?xml version="1.0" encoding="utf-8"?><svg style="enable-background:new 0 0 22 22"version=1.1 viewBox="0 0 22 22"x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink y=0px><rect class=noFill height=22 width=22 /><g><g><path class=fill d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3\n\t\t\tc0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9\n\t\t\tC18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7\n\t\t\tc0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2\n\t\t\tc0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class=fill d=M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z /></g><g><path class=fill d=M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z /></g><g><path class=fill d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8\n\t\t\t\tC14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>',a='<?xml version="1.0" encoding="utf-8"?><svg style="enable-background:new 0 0 22 22"version=1.1 viewBox="0 0 22 22"x=0px xml:space=preserve xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink y=0px><rect class=noFill height=22 width=22 y=0 /><g><path class=fill d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8\n\t\tc0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>',l={renderTodoList:function(){if(c.default.todo.length||c.default.completed.length){for(var e=0;e<c.default.todo.length;e++){var t=c.default.todo[e];l.addItemToDOM(t)}for(var n=0;n<c.default.completed.length;n++){var o=c.default.completed[n];l.addItemToDOM(o,!0)}}},dataObjectUpdate:function(){localStorage.setItem("todoList",JSON.stringify(c.default)),console.log(this)},addItemToDOM:function(e,t){var n=t?document.getElementById("completed"):document.getElementById("todo"),d=document.createElement("li");d.innerText=e;var c=document.createElement("div");c.classList.add("buttons");var l=document.createElement("button");l.classList.add("remove"),l.innerHTML=i,l.addEventListener("click",o);var s=document.createElement("button");s.classList.add("complete"),s.innerHTML=a,s.addEventListener("click",r),c.appendChild(l),c.appendChild(s),d.appendChild(c),n.insertBefore(d,n.childNodes[0])}};t.default=l}});