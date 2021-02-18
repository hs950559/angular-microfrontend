(self.webpackChunkmfe1=self.webpackChunkmfe1||[]).push([[980],{980:function(e,t,n){"use strict";n.r(t);var r=n(737),o=n(285);
/**
 * @license Angular v11.0.0
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class s extends r["\u0275DomAdapter"]{constructor(){super()}supportsDOMEvents(){return!0}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class i extends s{static makeCurrent(){(0,r["\u0275setRootDomAdapter"])(new i)}getProperty(e,t){return e[t]}log(e){window.console&&window.console.log&&window.console.log(e)}logGroup(e){window.console&&window.console.group&&window.console.group(e)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(e,t,n){return e.addEventListener(t,n,!1),()=>{e.removeEventListener(t,n,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){return e.parentNode&&e.parentNode.removeChild(e),e}getValue(e){return e.value}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(e){const t=l||(l=document.querySelector("base"),l)?l.getAttribute("href"):null;return null==t?null:(n=t,a||(a=document.createElement("a")),a.setAttribute("href",n),"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}resetBaseElement(){l=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(e){return(0,r["\u0275parseCookieValue"])(document.cookie,e)}}let a,l=null;const d=new o.InjectionToken("TRANSITION_ID"),u=[{provide:o.APP_INITIALIZER,useFactory:function(e,t,n){return()=>{n.get(o.ApplicationInitStatus).donePromise.then(()=>{const n=(0,r["\u0275getDOM"])();Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t=>t.getAttribute("ng-transition")===e).forEach(e=>n.remove(e))})}},deps:[d,r.DOCUMENT,o.Injector],multi:!0}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class c{static init(){(0,o.setTestabilityGetter)(new c)}addToWindow(e){o["\u0275global"].getAngularTestability=(t,n=!0)=>{const r=e.findTestabilityInTree(t,n);if(null==r)throw new Error("Could not find testability for element.");return r},o["\u0275global"].getAllAngularTestabilities=()=>e.getAllTestabilities(),o["\u0275global"].getAllAngularRootElements=()=>e.getAllRootElements(),o["\u0275global"].frameworkStabilizers||(o["\u0275global"].frameworkStabilizers=[]),o["\u0275global"].frameworkStabilizers.push(e=>{const t=o["\u0275global"].getAllAngularTestabilities();let n=t.length,r=!1;const s=function(t){r=r||t,n--,0==n&&e(r)};t.forEach(function(e){e.whenStable(s)})})}findTestabilityInTree(e,t,n){if(null==t)return null;const o=e.getTestability(t);return null!=o?o:n?(0,r["\u0275getDOM"])().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const p=new o.InjectionToken("EventManagerPlugins");let h=(()=>{class e{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(e=>e.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)}addGlobalEventListener(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const n=this._plugins;for(let r=0;r<n.length;r++){const t=n[r];if(t.supports(e))return this._eventNameToPlugin.set(e,t),t}throw new Error(`No event manager plugin found for event ${e}`)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](p),o["\u0275\u0275inject"](o.NgZone))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class m{constructor(e){this._doc=e}addGlobalEventListener(e,t,n){const o=(0,r["\u0275getDOM"])().getGlobalEventTarget(this._doc,e);if(!o)throw new Error(`Unsupported event target ${o} for event ${t}`);return this.addEventListener(o,t,n)}}let f=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach(e=>{this._stylesSet.has(e)||(this._stylesSet.add(e),t.add(e))}),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),g=(()=>{class e extends f{constructor(e){super(),this._doc=e,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(e.head)}_addStylesToHost(e,t){e.forEach(e=>{const n=this._doc.createElement("style");n.textContent=e,this._styleNodes.add(t.appendChild(n))})}addHost(e){this._addStylesToHost(this._stylesSet,e),this._hostNodes.add(e)}removeHost(e){this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach(t=>this._addStylesToHost(e,t))}ngOnDestroy(){this._styleNodes.forEach(e=>(0,r["\u0275getDOM"])().remove(e))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const w={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},v=/%COMP%/g;function y(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?y(e,o,n):(o=o.replace(v,e),n.push(o))}return n}function E(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let C=(()=>{class e{constructor(e,t,n){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new S(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case o.ViewEncapsulation.Emulated:{let n=this.rendererByCompId.get(t.id);return n||(n=new b(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}case 1:case o.ViewEncapsulation.ShadowDom:return new T(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const e=y(t.id,t.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](h),o["\u0275\u0275inject"](g),o["\u0275\u0275inject"](o.APP_ID))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class S{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,t){return t?document.createElementNS(w[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,n){e&&e.insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;const o=w[r];o?e.setAttributeNS(o,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){const r=w[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&o.RendererStyleFlags2.DashCase?e.style.setProperty(t,n,r&o.RendererStyleFlags2.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&o.RendererStyleFlags2.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e[t]=n}setValue(e,t){e.nodeValue=t}listen(e,t,n){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,E(n)):this.eventManager.addEventListener(e,t,E(n))}}class b extends S{constructor(e,t,n,r){super(e),this.component=n;const o=y(r+"-"+n.id,n.styles,[]);t.addStyles(o),this.contentAttr="_ngcontent-%COMP%".replace(v,r+"-"+n.id),this.hostAttr="_nghost-%COMP%".replace(v,r+"-"+n.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}}class T extends S{constructor(e,t,n,r){super(e),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const o=y(r.id,r.styles,[]);for(let s=0;s<o.length;s++){const e=document.createElement("style");e.textContent=o[s],this.shadowRoot.appendChild(e)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}let A=(()=>{class e extends m{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,n){return e.addEventListener(t,n,!1),()=>this.removeEventListener(e,t,n)}removeEventListener(e,t,n){return e.removeEventListener(t,n)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const I=["alt","control","meta","shift"],M={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},N={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},_={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let D=(()=>{class e extends m{constructor(e){super(e)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,n,o){const s=e.parseEventName(n),i=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,r["\u0275getDOM"])().onAndCancel(t,s.domEventName,i))}static parseEventName(t){const n=t.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const o=e._normalizeKey(n.pop());let s="";if(I.forEach(e=>{const t=n.indexOf(e);t>-1&&(n.splice(t,1),s+=e+".")}),s+=o,0!=n.length||0===o.length)return null;const i={};return i.domEventName=r,i.fullKey=s,i}static getEventFullKey(e){let t="",n=function(e){let t=e.key;if(null==t){if(t=e.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&N.hasOwnProperty(t)&&(t=N[t]))}return M[t]||t}(e);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),I.forEach(r=>{r!=n&&(0,_[r])(e)&&(t+=r+".")}),t+=n,t}static eventCallback(t,n,r){return o=>{e.getEventFullKey(o)===t&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const O=[{provide:o.PLATFORM_ID,useValue:r["\u0275PLATFORM_BROWSER_ID"]},{provide:o.PLATFORM_INITIALIZER,useValue:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){i.makeCurrent(),c.init()},multi:!0},{provide:r.DOCUMENT,useFactory:function(){return(0,o["\u0275setDocument"])(document),document},deps:[]}],R=[[],{provide:o["\u0275INJECTOR_SCOPE"],useValue:"root"},{provide:o.ErrorHandler,useFactory:function(){return new o.ErrorHandler},deps:[]},{provide:p,useClass:A,multi:!0,deps:[r.DOCUMENT,o.NgZone,o.PLATFORM_ID]},{provide:p,useClass:D,multi:!0,deps:[r.DOCUMENT]},[],{provide:C,useClass:C,deps:[h,g,o.APP_ID]},{provide:o.RendererFactory2,useExisting:C},{provide:f,useExisting:g},{provide:g,useClass:g,deps:[r.DOCUMENT]},{provide:o.Testability,useClass:o.Testability,deps:[o.NgZone]},{provide:h,useClass:h,deps:[p,o.NgZone]},[]];let P=(()=>{class e{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:e,providers:[{provide:o.APP_ID,useValue:t.appId},{provide:d,useExisting:o.APP_ID},u]}}}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)(o["\u0275\u0275inject"](e,12))},providers:R,imports:[r.CommonModule,o.ApplicationModule]}),e})();"undefined"!=typeof window&&window;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var L=n(521);let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){1&e&&o["\u0275\u0275element"](0,"router-outlet")},directives:[L.RouterOutlet],encapsulation:2}),e})();var j=n(9);let x=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule,L.RouterModule.forChild(j.z)]]}),e})();const F=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-home"]],decls:7,vars:0,consts:[["src","../../assets/angular.png","width","50"],["routerLink","/flights-search"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div"),o["\u0275\u0275element"](1,"img",0),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](2,"h1"),o["\u0275\u0275text"](3,"Welcome!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"p"),o["\u0275\u0275elementStart"](5,"a",1),o["\u0275\u0275text"](6,"Search Flights"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]())},directives:[L.RouterLinkWithHref],encapsulation:2}),e})(),pathMatch:"full"}];let H=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e,bootstrap:[k]}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[],imports:[[P,x,L.RouterModule.forRoot(F)]]}),e})();var B=function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}({});"undefined"!=typeof window&&window,"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,"undefined"!=typeof global&&global;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class W{get(e){return""}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class U{constructor({defaultEncapsulation:e=B.Emulated,useJit:t=!0,jitDevMode:n=!1,missingTranslation:r=null,preserveWhitespaces:o,strictInjectionParameters:s}={}){var i;this.defaultEncapsulation=e,this.useJit=!!t,this.jitDevMode=!!n,this.missingTranslation=r,this.preserveWhitespaces=function(e,t=!1){return null===e?t:e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(void 0===(i=o)?null:i),this.strictInjectionParameters=!0===s}}const V=[{provide:o.Compiler,useFactory:()=>new o.Compiler}];function G(e){for(let t=e.length-1;t>=0;t--)if(void 0!==e[t])return e[t]}function K(e){const t=[];return e.forEach(e=>e&&t.push(...e)),t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const z=(0,o.createPlatformFactory)(o.platformCore,"coreDynamic",[{provide:o.COMPILER_OPTIONS,useValue:{},multi:!0},{provide:o.CompilerFactory,useClass:class{constructor(e){this._defaultOptions=[{useJit:!0,defaultEncapsulation:o.ViewEncapsulation.Emulated,missingTranslation:o.MissingTranslationStrategy.Warning},...e]}createCompiler(e=[]){const t={useJit:G((n=this._defaultOptions.concat(e)).map(e=>e.useJit)),defaultEncapsulation:G(n.map(e=>e.defaultEncapsulation)),providers:K(n.map(e=>e.providers)),missingTranslation:G(n.map(e=>e.missingTranslation)),preserveWhitespaces:G(n.map(e=>e.preserveWhitespaces))};var n;return o.Injector.create([V,{provide:U,useFactory:()=>new U({useJit:t.useJit,jitDevMode:(0,o.isDevMode)(),defaultEncapsulation:t.defaultEncapsulation,missingTranslation:t.missingTranslation,preserveWhitespaces:t.preserveWhitespaces}),deps:[]},t.providers]).get(o.Compiler)}},deps:[o.COMPILER_OPTIONS]}]);let J=(()=>{class e extends W{get(e){let t,n;const r=new Promise((e,r)=>{t=e,n=r}),o=new XMLHttpRequest;return o.open("GET",e,!0),o.responseType="text",o.onload=function(){const r=o.response||o.responseText;let s=1223===o.status?204:o.status;0===s&&(s=r?200:0),200<=s&&s<=300?t(r):n(`Failed to load ${e}`)},o.onerror=function(){n(`Failed to load ${e}`)},o.send(),r}}return e.\u0275fac=function(t){return Z(t||e)},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const Z=o["\u0275\u0275getInheritedFactory"](J),$=(0,o.createPlatformFactory)(z,"browserDynamic",[O,{provide:o.COMPILER_OPTIONS,useValue:{providers:[{provide:W,useClass:J,deps:[]}]},multi:!0},{provide:o.PLATFORM_ID,useValue:r["\u0275PLATFORM_BROWSER_ID"]}]);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(0,o.enableProdMode)(),$().bootstrapModule(H).catch(e=>console.error(e))}}]);