!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";n.r(e),n.d(e,"app",(function(){return o.b})),n.d(e,"Component",(function(){return m})),n.d(e,"on",(function(){return u})),n.d(e,"update",(function(){return c})),n.d(e,"Fragment",(function(){return i.a})),n.d(e,"event",(function(){return c})),n.d(e,"ROUTER_EVENT",(function(){return b})),n.d(e,"ROUTER_404_EVENT",(function(){return v})),n.d(e,"customElement",(function(){return l}));var o=n(1),i=n(2);const r=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(e.observedAttributes||[]).map(t=>t.toLowerCase())}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const o=n.observedAttributes||[],i=o.reduce((t,e)=>{const n=e.toLowerCase();return n!==e&&(t[n]=e),t},{});this._attrMap=t=>i[t]||t;const r={};Array.from(this.attributes).forEach(t=>r[this._attrMap(t.name)]=t.value),o.forEach(t=>{void 0!==this[t]&&(r[t]=this[t]),Object.defineProperty(this,t,{get:()=>r[t],set(e){this.attributeChangedCallback(t,r[t],e)},configurable:!0,enumerable:!0})});const s=this.children?Array.from(this.children):[];if(s.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign(Object.assign({},r),{children:s})).mount(this._shadowRoot,n),this._component._props=r,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(r,s,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){var t,e,n,o;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(o=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===o||o.call(n),this._component=null}attributeChangedCallback(t,n,o){if(this._component){const i=this._attrMap(t);this._component._props[i]=o,this._component.run("attributeChanged",i,n,o),o!==n&&!1!==e.render&&window.requestAnimationFrame(()=>{this._component.run(".")})}}};var s=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,r(e,n))};const a={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function c(t,e={}){return(n,o,i)=>{const r=t?t.toString():o;return a.defineMetadata(`apprun-update:${r}`,{name:r,key:o,options:e},n),i}}function u(t,e={}){return function(n,o){const i=t?t.toString():o;a.defineMetadata(`apprun-update:${i}`,{name:i,key:o,options:e},n)}}function l(t,e){return function(n){return s(t,n,e),n}}const d=(t,e)=>(e?t.state[e]:t.state)||"",h=(t,e,n)=>{if(e){const o=t.state||{};o[e]=n,t.setState(o)}else t.setState(n)};const f={};o.b.on("get-components",t=>t.components=f);const p=t=>t;class m{constructor(t,e,n,i){this.state=t,this.view=e,this.update=n,this.options=i,this._app=new o.a,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){o.b.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=o.b.createElement;o.b.createElement=(t,e,...i)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(((t,e,n,i)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>i.run(t,e);else if("string"==typeof n)e[t]=t=>i.run(n,t);else if("function"==typeof n)e[t]=t=>i.setState(n(i.state,t));else if(Array.isArray(n)){const[o,...r]=n;"string"==typeof o?e[t]=t=>i.run(o,...r,t):"function"==typeof o&&(e[t]=t=>i.setState(o(i.state,...r,t)))}}else if("$bind"===t){const o=e.type||"text",r="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(o){case"checkbox":e.checked=d(i,r),e.onclick=t=>h(i,r||t.target.name,t.target.checked);break;case"radio":e.checked=d(i,r)===e.value,e.onclick=t=>h(i,r||t.target.name,t.target.value);break;case"number":case"range":e.value=d(i,r),e.oninput=t=>h(i,r||t.target.name,Number(t.target.value));break;default:e.value=d(i,r),e.oninput=t=>h(i,r||t.target.name,t.target.value)}else"select"===n?(e.value=d(i,r),e.onchange=t=>{t.target.multiple||h(i,r||t.target.name,t.target.value)}):"option"===n?(e.selected=d(i,r),e.onclick=t=>h(i,r||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=d(i,r),e.oninput=t=>h(i,r||t.target.name,t.target.value))}else o.b.run("$",{key:t,tag:n,props:e,component:i})})(n,e,t,this),delete e[n])}),n(t,e,...i));const i=e?this.view(t,e):this.view(t);return o.b.createElement=n,i}renderState(t,e=null){if(!this.view)return;let n=e||this._view(t);if(o.b.debug&&o.b.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"!=typeof document)return;const i="string"==typeof this.element?document.getElementById(this.element):this.element;if(i){const t="_c";this.unload?i._component===this&&i.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),i.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver(t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(i)||(this.unload(this.state),this.observer.disconnect(),this.observer=null,this.save_vdom=[])})),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):i.removeAttribute&&i.removeAttribute(t),i._component=this}e||this.render(i,n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,i;if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]=p),this.add_actions(),this.state=null!==(i=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==i?i:{},e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),o.b.debug){const e="string"==typeof t?t:t.id;f[e]=f[e]||[],f[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...i)=>{const r=e(this.state,...i);o.b.debug&&o.b.run("debug",{component:this,event:t,e:i,state:this.state,newState:r,options:n}),this.setState(r,n)},n))}add_actions(){const t=this.update||{};a.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=a.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,o,i]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[o,i])}):Object.keys(t).forEach(n=>{const o=t[n];("function"==typeof o||Array.isArray(o))&&n.split(",").forEach(t=>e[t.trim()]=o)}),e["."]||(e["."]=p),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?o.b.run(n,...e):this._app.run(n,...e)}on(t,e,n){const i=t.toString();return this._actions.push({name:i,fn:e}),this.is_global_event(i)?o.b.on(i,e,n):this._app.on(i,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?o.b.off(e,n):this._app.off(e,n)})}}m.__isAppRunComponent=!0;const b="//",v="///",g=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");o.b.run(e,...n)||o.b.run(v,e,...n),o.b.run(b,e,...n)}else if(t.startsWith("/")){const[e,n,...i]=t.split("/");o.b.run("/"+n,...i)||o.b.run(v,"/"+n,...i),o.b.run(b,"/"+n,...i)}else o.b.run(t)||o.b.run(v,t),o.b.run(b,t)};o.b.h=o.b.createElement=i.b,o.b.render=function(t,e,n){Object(i.c)(t,e,n)},o.b.Fragment=i.a,o.b.webComponent=s,o.b.start=(t,e,n,o,i)=>{const r=Object.assign(Object.assign({},i),{render:!0,global_event:!0}),s=new m(e,n,o);return i&&i.rendered&&(s.rendered=i.rendered),s.mount(t,r),s};const _=t=>{};o.b.on("$",_),o.b.on("debug",t=>_),o.b.on(b,_),o.b.on("#",_),o.b.route=g,o.b.on("route",t=>o.b.route&&o.b.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{o.b.route===g&&(window.onpopstate=()=>g(location.hash),g(location.hash))});e.default=o.b;"object"==typeof window&&(window.Component=m,window.React=o.b,window.on=u,window.customElement=l)},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));class o{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter(t=>t.fn!==e)}find(t){return this._events[t]}run(t,...e){const n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter(t=>!t.options.once),n.forEach(n=>{const{fn:o,options:i}=n;return i.delay?this.delay(t,o,e,i):o.apply(this,e),!n.options.once}),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,o){o._t&&clearTimeout(o._t),o._t=setTimeout(()=>{clearTimeout(o._t),e.apply(this,n)},o.delay)}}let i;const r="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t;r.app&&r._AppRunVersions?i=r.app:(i=new o,r.app=i,r._AppRunVersions="AppRun-2"),e.b=i}).call(this,n(3))},function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return p}));var o=n(1);function i(t,e,n=0){var r;if("string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>i(t,e,n++));let s=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(s=function(t,e,n){const{tag:i,props:r,children:s}=t;let a=`_${n}`,c=r&&r.id;c?a=c:c=`_${n}${Date.now()}`,e.__componentCache||(e.__componentCache={});let u=e.__componentCache[a];u&&u instanceof i||(u=e.__componentCache[a]=new i(Object.assign(Object.assign({},r),{children:s})).mount(c));let l=u.state;if(u.mounted){const t=u.mounted(r,s,l);void 0!==t&&(l=u.state=t)}if(l instanceof Promise){const t=t=>{u.element=t,u.setState(l)};return o.b.createElement("section",Object.assign({},r,{ref:e=>t(e),_component:u}))}{const t=u._view(l,r),e=e=>{u.element=e,u.renderState(l,t)};return o.b.createElement("section",Object.assign({},r,{ref:t=>e(t),_component:u}),t)}}(t,e,n)),s&&Array.isArray(s.children)){const t=null===(r=s.props)||void 0===r?void 0:r._component;if(t){let e=0;s.children=s.children.map(n=>i(n,t,e++))}else s.children=s.children.map(t=>i(t,e,n++))}return s}function r(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}function s(t,e,...n){const o=r(n);if("string"==typeof t)return{tag:t,props:e,children:o};if(Array.isArray(t))return t;if(void 0===t&&n)return o;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:o};if("function"==typeof t)return t(e,o);throw new Error(`Unknown tag in vdom ${t}`)}const a=new WeakMap,c=function(t,e,n={}){if(null==e||!1===e)return;e=i(e,n);const o="SVG"===(null==t?void 0:t.nodeName);if(!t)return;Array.isArray(e)?l(t,e,o):l(t,[e],o)};function u(t,e,n){3!==e._op&&(n=n||"svg"===e.tag,!function(t,e){const n=t.nodeName,o=`${e.tag||""}`;return n.toUpperCase()===o.toUpperCase()}(t,e)?t.parentNode.replaceChild(h(e,n),t):(!(2&e._op)&&l(t,e.children,n),!(1&e._op)&&f(t,e.props,n)))}function l(t,e,n){var o;const i=(null===(o=t.childNodes)||void 0===o?void 0:o.length)||0,r=(null==e?void 0:e.length)||0,s=Math.min(i,r);for(let o=0;o<s;o++){const i=e[o];if(3===i._op)continue;const r=t.childNodes[o];if("string"==typeof i)r.textContent!==i&&(3===r.nodeType?r.nodeValue=i:t.replaceChild(d(i),r));else if(i instanceof HTMLElement||i instanceof SVGElement)t.insertBefore(i,r);else{const e=i.props&&i.props.key;if(e)if(r.key===e)u(t.childNodes[o],i,n);else{const s=a[e];if(s){const e=s.nextSibling;t.insertBefore(s,r),e?t.insertBefore(r,e):t.appendChild(r)}u(t.childNodes[o],i,n)}else u(t.childNodes[o],i,n)}}let c=t.childNodes.length;for(;c>s;)t.removeChild(t.lastChild),c--;if(r>s){const o=document.createDocumentFragment();for(let t=s;t<e.length;t++)o.appendChild(h(e[t],n));t.appendChild(o)}}function d(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function h(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return d(t);if(!t.tag||"function"==typeof t.tag)return d(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return f(n,t.props,e),t.children&&t.children.forEach(t=>n.appendChild(h(t,e))),n}function f(t,e,n){const o=t._props||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(o,e||{}),t._props=e;for(const o in e){const i=e[o];if(o.startsWith("data-")){const e=o.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==i&&(i||""===i?t.dataset[e]=i:delete t.dataset[e])}else if("style"===o)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof i)t.style.cssText=i;else for(const e in i)t.style[e]!==i[e]&&(t.style[e]=i[e]);else if(o.startsWith("xlink")){const e=o.replace("xlink","").toLowerCase();null==i||!1===i?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,i)}else o.startsWith("on")?i&&"function"!=typeof i?"string"==typeof i&&(i?t.setAttribute(o,i):t.removeAttribute(o)):t[o]=i:/^id$|^class$|^readonly$|^contenteditable$|^role|-/g.test(o)||n?t.getAttribute(o)!==i&&(i?t.setAttribute(o,i):t.removeAttribute(o)):t[o]!==i&&(t[o]=i);"key"===o&&i&&(a[i]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame(()=>e.ref(t))}function p(t,...e){return r(e)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e),n.d(e,"app",(function(){return i.app})),n.d(e,"Component",(function(){return i.Component})),n.d(e,"on",(function(){return i.on})),n.d(e,"update",(function(){return i.update})),n.d(e,"event",(function(){return i.event})),n.d(e,"customElement",(function(){return i.customElement})),n.d(e,"ROUTER_404_EVENT",(function(){return i.ROUTER_404_EVENT})),n.d(e,"ROUTER_EVENT",(function(){return i.ROUTER_EVENT}));var o,i=n(0),r=n(2);var s="undefined"==typeof document?void 0:document,a=!!s&&"content"in s.createElement("template"),c=!!s&&s.createRange&&"createContextualFragment"in s.createRange();function u(t){return t=t.trim(),a?function(t){var e=s.createElement("template");return e.innerHTML=t,e.content.childNodes[0]}(t):c?function(t){return o||(o=s.createRange()).selectNode(s.body),o.createContextualFragment(t).childNodes[0]}(t):function(t){var e=s.createElement("body");return e.innerHTML=t,e.childNodes[0]}(t)}function l(t,e){var n,o,i=t.nodeName,r=e.nodeName;return i===r||(n=i.charCodeAt(0),o=r.charCodeAt(0),n<=90&&o>=97?i===r.toUpperCase():o<=90&&n>=97&&r===i.toUpperCase())}function d(t,e,n){t[n]!==e[n]&&(t[n]=e[n],t[n]?t.setAttribute(n,""):t.removeAttribute(n))}var h={OPTION:function(t,e){var n=t.parentNode;if(n){var o=n.nodeName.toUpperCase();"OPTGROUP"===o&&(o=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==o||n.hasAttribute("multiple")||(t.hasAttribute("selected")&&!e.selected&&(t.setAttribute("selected","selected"),t.removeAttribute("selected")),n.selectedIndex=-1)}d(t,e,"selected")},INPUT:function(t,e){d(t,e,"checked"),d(t,e,"disabled"),t.value!==e.value&&(t.value=e.value),e.hasAttribute("value")||t.removeAttribute("value")},TEXTAREA:function(t,e){var n=e.value;t.value!==n&&(t.value=n);var o=t.firstChild;if(o){var i=o.nodeValue;if(i==n||!n&&i==t.placeholder)return;o.nodeValue=n}},SELECT:function(t,e){if(!e.hasAttribute("multiple")){for(var n,o,i=-1,r=0,s=t.firstChild;s;)if("OPTGROUP"===(o=s.nodeName&&s.nodeName.toUpperCase()))s=(n=s).firstChild;else{if("OPTION"===o){if(s.hasAttribute("selected")){i=r;break}r++}!(s=s.nextSibling)&&n&&(s=n.nextSibling,n=null)}t.selectedIndex=i}}};function f(){}function p(t){if(t)return t.getAttribute&&t.getAttribute("id")||t.id}var m=function(t){return function(e,n,o){if(o||(o={}),"string"==typeof n)if("#document"===e.nodeName||"HTML"===e.nodeName||"BODY"===e.nodeName){var i=n;(n=s.createElement("html")).innerHTML=i}else n=u(n);var r=o.getNodeKey||p,a=o.onBeforeNodeAdded||f,c=o.onNodeAdded||f,d=o.onBeforeElUpdated||f,m=o.onElUpdated||f,b=o.onBeforeNodeDiscarded||f,v=o.onNodeDiscarded||f,g=o.onBeforeElChildrenUpdated||f,_=!0===o.childrenOnly,y=Object.create(null),E=[];function w(t){E.push(t)}function A(t,e,n){!1!==b(t)&&(e&&e.removeChild(t),v(t),function t(e,n){if(1===e.nodeType)for(var o=e.firstChild;o;){var i=void 0;n&&(i=r(o))?w(i):(v(o),o.firstChild&&t(o,n)),o=o.nextSibling}}(t,n))}function C(t){c(t);for(var e=t.firstChild;e;){var n=e.nextSibling,o=r(e);if(o){var i=y[o];i&&l(e,i)?(e.parentNode.replaceChild(i,e),N(i,e)):C(e)}else C(e);e=n}}function N(e,n,o){var i=r(n);if(i&&delete y[i],!o){if(!1===d(e,n))return;if(t(e,n),m(e),!1===g(e,n))return}"TEXTAREA"!==e.nodeName?function(t,e){var n,o,i,c,u,d=e.firstChild,f=t.firstChild;t:for(;d;){for(c=d.nextSibling,n=r(d);f;){if(i=f.nextSibling,d.isSameNode&&d.isSameNode(f)){d=c,f=i;continue t}o=r(f);var p=f.nodeType,m=void 0;if(p===d.nodeType&&(1===p?(n?n!==o&&((u=y[n])?i===u?m=!1:(t.insertBefore(u,f),o?w(o):A(f,t,!0),f=u):m=!1):o&&(m=!1),(m=!1!==m&&l(f,d))&&N(f,d)):3!==p&&8!=p||(m=!0,f.nodeValue!==d.nodeValue&&(f.nodeValue=d.nodeValue))),m){d=c,f=i;continue t}o?w(o):A(f,t,!0),f=i}if(n&&(u=y[n])&&l(u,d))t.appendChild(u),N(u,d);else{var b=a(d);!1!==b&&(b&&(d=b),d.actualize&&(d=d.actualize(t.ownerDocument||s)),t.appendChild(d),C(d))}d=c,f=i}!function(t,e,n){for(;e;){var o=e.nextSibling;(n=r(e))?w(n):A(e,t,!0),e=o}}(t,f,o);var v=h[t.nodeName];v&&v(t,e)}(e,n):h.TEXTAREA(e,n)}!function t(e){if(1===e.nodeType||11===e.nodeType)for(var n=e.firstChild;n;){var o=r(n);o&&(y[o]=n),t(n),n=n.nextSibling}}(e);var O,x,S=e,T=S.nodeType,j=n.nodeType;if(!_)if(1===T)1===j?l(e,n)||(v(e),S=function(t,e){for(var n=t.firstChild;n;){var o=n.nextSibling;e.appendChild(n),n=o}return e}(e,(O=n.nodeName,(x=n.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==x?s.createElementNS(x,O):s.createElement(O)))):S=n;else if(3===T||8===T){if(j===T)return S.nodeValue!==n.nodeValue&&(S.nodeValue=n.nodeValue),S;S=n}if(S===n)v(e);else{if(n.isSameNode&&n.isSameNode(S))return;if(N(S,n,_),E)for(var k=0,R=E.length;k<R;k++){var M=y[E[k]];M&&A(M,M.parentNode,!1)}}return!_&&S!==e&&e.parentNode&&(S.actualize&&(S=S.actualize(e.ownerDocument||s)),e.parentNode.replaceChild(S,e)),S}}((function(t,e){var n,o,i,r,s=e.attributes;if(11!==e.nodeType&&11!==t.nodeType){for(var a=s.length-1;a>=0;a--)o=(n=s[a]).name,i=n.namespaceURI,r=n.value,i?(o=n.localName||o,t.getAttributeNS(i,o)!==r&&("xmlns"===n.prefix&&(o=n.name),t.setAttributeNS(i,o,r))):t.getAttribute(o)!==r&&t.setAttribute(o,r);for(var c=t.attributes,u=c.length-1;u>=0;u--)o=(n=c[u]).name,(i=n.namespaceURI)?(o=n.localName||o,e.hasAttributeNS(i,o)||t.removeAttributeNS(i,o)):e.hasAttribute(o)||t.removeAttribute(o)}}));i.default.createElement=r.b,i.default.render=function(t,e,n){if("string"==typeof e)if(e=e.trim(),t.firstChild){const n=t.cloneNode(!1);n.innerHTML=e,m(t,n)}else t.innerHTML=e;else Object(r.c)(t,e,n)},i.default.Fragment=r.a;e.default=i.default}])}));
//# sourceMappingURL=apprun-html.js.map