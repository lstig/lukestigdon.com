import{d as It,o as L,c as Q,a as N,t as Ut,u as Wn,b as G,r as Bt,e as St,F as Hn,f as _e,g as Gn,h as gn,w as Oe,_ as Se,i as At,j as Pe,k as Ee}from"./framework.DVYzDn6B.js";const Ce={class:"hero is-dark is-fullheight"},Ne={class:"hero-body"},Ie={class:"container has-text-centered"},Te=N("p",{class:"title"},"404",-1),Me={class:"subtitle"},Le=It({__name:"NotFound",setup(t){const n=["Oops! Nothing to see here..."];function e(){return n[Math.floor(Math.random()*n.length)]}return(a,r)=>(L(),Q("div",Ce,[N("div",Ne,[N("div",Ie,[Te,N("p",Me,Ut(e()),1)])])]))}}),ze={class:"hero is-dark is-fullheight"},Re={class:"hero-body"},je={class:"container has-text-centered"},Fe={class:"title"},De={class:"subtitle"},$e={key:0,class:"hero-foot"},Ye={class:"tabs is-boxed is-large is-centered"},Ue={class:"container"},Be=["href","aria-label"],We=It({__name:"Home",setup(t){const{site:n,frontmatter:e}=Wn(),a=G(()=>e.value.links?e.value.links:[]);return(r,i)=>{const o=Bt("font-awesome-icon"),s=Bt("ClientOnly");return L(),Q("div",ze,[N("div",Re,[N("div",je,[N("p",Fe,Ut(St(n).title),1),N("p",De,Ut(St(n).description),1)])]),a.value.length>0?(L(),Q("div",$e,[N("nav",Ye,[N("div",Ue,[N("ul",null,[(L(!0),Q(Hn,null,_e(a.value,f=>(L(),Q("li",null,[N("a",{href:f.href,"aria-label":f.label},[gn(s,null,{default:Oe(()=>[gn(o,{icon:f.icon},null,8,["icon"])]),_:2},1024)],8,Be)]))),256))])])])])):Gn("",!0)])}}}),He={};function Ge(t,n){const e=Bt("Content");return L(),At(e)}const Ve=Se(He,[["render",Ge]]),Xe=It({__name:"Layout",setup(t){const{page:n,frontmatter:e}=Wn();return(a,r)=>(L(),Q(Hn,null,[St(n).isNotFound?(L(),At(Le,{key:0})):Gn("",!0),St(e).home?(L(),At(We,{key:1})):(L(),At(Ve,{key:2}))],64))}});function bn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?bn(Object(e),!0).forEach(function(a){_(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):bn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Pt(t){"@babel/helpers - typeof";return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pt(t)}function Ke(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function hn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function qe(t,n,e){return n&&hn(t.prototype,n),e&&hn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function _(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function en(t,n){return Ze(t)||ta(t,n)||Vn(t,n)||ea()}function ut(t){return Qe(t)||Je(t)||Vn(t)||na()}function Qe(t){if(Array.isArray(t))return Wt(t)}function Ze(t){if(Array.isArray(t))return t}function Je(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ta(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Vn(t,n){if(t){if(typeof t=="string")return Wt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Wt(t,n)}}function Wt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function na(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ea(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yn=function(){},an={},Xn={},Kn=null,qn={mark:yn,measure:yn};try{typeof window<"u"&&(an=window),typeof document<"u"&&(Xn=document),typeof MutationObserver<"u"&&(Kn=MutationObserver),typeof performance<"u"&&(qn=performance)}catch{}var aa=an.navigator||{},kn=aa.userAgent,wn=kn===void 0?"":kn,B=an,k=Xn,xn=Kn,vt=qn;B.document;var $=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",Qn=~wn.indexOf("MSIE")||~wn.indexOf("Trident/"),pt,gt,bt,ht,yt,j="___FONT_AWESOME___",Ht=16,Zn="fa",Jn="svg-inline--fa",K="data-fa-i2svg",Gt="data-fa-pseudo-element",ra="data-fa-pseudo-element-pending",rn="data-prefix",on="data-icon",An="fontawesome-i2svg",ia="async",oa=["HTML","HEAD","STYLE","SCRIPT"],te=function(){try{return!0}catch{return!1}}(),y="classic",w="sharp",sn=[y,w];function mt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[y]}})}var ot=mt((pt={},_(pt,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),_(pt,w,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),pt)),st=mt((gt={},_(gt,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),_(gt,w,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),gt)),ft=mt((bt={},_(bt,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),_(bt,w,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),bt)),sa=mt((ht={},_(ht,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),_(ht,w,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ht)),fa=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ne="fa-layers-text",la=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ca=mt((yt={},_(yt,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),_(yt,w,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),yt)),ee=[1,2,3,4,5,6,7,8,9,10],ua=ee.concat([11,12,13,14,15,16,17,18,19,20]),ma=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lt=new Set;Object.keys(st[y]).map(lt.add.bind(lt));Object.keys(st[w]).map(lt.add.bind(lt));var da=[].concat(sn,ut(lt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V.GROUP,V.SWAP_OPACITY,V.PRIMARY,V.SECONDARY]).concat(ee.map(function(t){return"".concat(t,"x")})).concat(ua.map(function(t){return"w-".concat(t)})),rt=B.FontAwesomeConfig||{};function va(t){var n=k.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function pa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(k&&typeof k.querySelector=="function"){var ga=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ga.forEach(function(t){var n=en(t,2),e=n[0],a=n[1],r=pa(va(e));r!=null&&(rt[a]=r)})}var ae={styleDefault:"solid",familyDefault:"classic",cssPrefix:Zn,replacementClass:Jn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rt.familyPrefix&&(rt.cssPrefix=rt.familyPrefix);var nt=u(u({},ae),rt);nt.autoReplaceSvg||(nt.observeMutations=!1);var m={};Object.keys(ae).forEach(function(t){Object.defineProperty(m,t,{enumerable:!0,set:function(e){nt[t]=e,it.forEach(function(a){return a(m)})},get:function(){return nt[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){nt.cssPrefix=n,it.forEach(function(e){return e(m)})},get:function(){return nt.cssPrefix}});B.FontAwesomeConfig=m;var it=[];function ba(t){return it.push(t),function(){it.splice(it.indexOf(t),1)}}var U=Ht,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ha(t){if(!(!t||!$)){var n=k.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=k.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return k.head.insertBefore(n,a),t}}var ya="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ct(){for(var t=12,n="";t-- >0;)n+=ya[Math.random()*62|0];return n}function et(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function fn(t){return t.classList?et(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function re(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ka(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(re(t[e]),'" ')},"").trim()}function Tt(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function ln(t){return t.size!==z.size||t.x!==z.x||t.y!==z.y||t.rotate!==z.rotate||t.flipX||t.flipY}function wa(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function xa(t){var n=t.transform,e=t.width,a=e===void 0?Ht:e,r=t.height,i=r===void 0?Ht:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Qn?f+="translate(".concat(n.x/U-a/2,"em, ").concat(n.y/U-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/U,"em), calc(-50% + ").concat(n.y/U,"em)) "):f+="translate(".concat(n.x/U,"em, ").concat(n.y/U,"em) "),f+="scale(".concat(n.size/U*(n.flipX?-1:1),", ").concat(n.size/U*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Aa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ie(){var t=Zn,n=Jn,e=m.cssPrefix,a=m.replacementClass,r=Aa;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var _n=!1;function jt(){m.autoAddCss&&!_n&&(ha(ie()),_n=!0)}var _a={mixout:function(){return{dom:{css:ie,insertCss:jt}}},hooks:function(){return{beforeDOMElementCreation:function(){jt()},beforeI2svg:function(){jt()}}}},F=B||{};F[j]||(F[j]={});F[j].styles||(F[j].styles={});F[j].hooks||(F[j].hooks={});F[j].shims||(F[j].shims=[]);var T=F[j],oe=[],Oa=function t(){k.removeEventListener("DOMContentLoaded",t),Et=1,oe.map(function(n){return n()})},Et=!1;$&&(Et=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),Et||k.addEventListener("DOMContentLoaded",Oa));function Sa(t){$&&(Et?setTimeout(t,0):oe.push(t))}function dt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?re(t):"<".concat(n," ").concat(ka(a),">").concat(i.map(dt).join(""),"</").concat(n,">")}function On(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Pa=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Ft=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?Pa(e,r):e,f,c,l;for(a===void 0?(f=1,l=n[i[0]]):(f=0,l=a);f<o;f++)c=i[f],l=s(l,n[c],c,n);return l};function Ea(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Vt(t){var n=Ea(t);return n.length===1?n[0].toString(16):null}function Ca(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Sn(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Xt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=Sn(n);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,Sn(n)):T.styles[t]=u(u({},T.styles[t]||{}),i),t==="fas"&&Xt("fa",n)}var kt,wt,xt,Z=T.styles,Na=T.shims,Ia=(kt={},_(kt,y,Object.values(ft[y])),_(kt,w,Object.values(ft[w])),kt),cn=null,se={},fe={},le={},ce={},ue={},Ta=(wt={},_(wt,y,Object.keys(ot[y])),_(wt,w,Object.keys(ot[w])),wt);function Ma(t){return~da.indexOf(t)}function La(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Ma(r)?r:null}var me=function(){var n=function(i){return Ft(Z,function(o,s,f){return o[f]=Ft(s,i,{}),o},{})};se=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),fe=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ue=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in Z||m.autoFetchSvg,a=Ft(Na,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});le=a.names,ce=a.unicodes,cn=Mt(m.styleDefault,{family:m.familyDefault})};ba(function(t){cn=Mt(t.styleDefault,{family:m.familyDefault})});me();function un(t,n){return(se[t]||{})[n]}function za(t,n){return(fe[t]||{})[n]}function X(t,n){return(ue[t]||{})[n]}function de(t){return le[t]||{prefix:null,iconName:null}}function Ra(t){var n=ce[t],e=un("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function W(){return cn}var mn=function(){return{prefix:null,iconName:null,rest:[]}};function Mt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?y:e,r=ot[a][t],i=st[a][t]||st[a][r],o=t in T.styles?t:null;return i||o||null}var Pn=(xt={},_(xt,y,Object.keys(ft[y])),_(xt,w,Object.keys(ft[w])),xt);function Lt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},_(n,y,"".concat(m.cssPrefix,"-").concat(y)),_(n,w,"".concat(m.cssPrefix,"-").concat(w)),n),o=null,s=y;(t.includes(i[y])||t.some(function(c){return Pn[y].includes(c)}))&&(s=y),(t.includes(i[w])||t.some(function(c){return Pn[w].includes(c)}))&&(s=w);var f=t.reduce(function(c,l){var d=La(m.cssPrefix,l);if(Z[l]?(l=Ia[s].includes(l)?sa[s][l]:l,o=l,c.prefix=l):Ta[s].indexOf(l)>-1?(o=l,c.prefix=Mt(l,{family:s})):d?c.iconName=d:l!==m.replacementClass&&l!==i[y]&&l!==i[w]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var g=o==="fa"?de(c.iconName):{},b=X(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||b||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!Z.far&&Z.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},mn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===w&&(Z.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=X(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=W()||"fas"),f}var ja=function(){function t(){Ke(this,t),this.definitions={}}return qe(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),o[s]),Xt(s,o[s]);var f=ft[y][s];f&&Xt(f,o[s]),me()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];e[s]||(e[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(e[s][d]=c)}),e[s][f]=c}),e}}]),t}(),En=[],J={},tt={},Fa=Object.keys(tt);function Da(t,n){var e=n.mixoutsTo;return En=t,J={},Object.keys(tt).forEach(function(a){Fa.indexOf(a)===-1&&delete tt[a]}),En.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Pt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){J[o]||(J[o]=[]),J[o].push(i[o])})}a.provides&&a.provides(tt)}),e}function Kt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=J[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function q(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=J[t]||[];r.forEach(function(i){i.apply(null,e)})}function D(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return tt[t]?tt[t].apply(null,n):void 0}function qt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||W();if(n)return n=X(e,n)||n,On(ve.definitions,e,n)||On(T.styles,e,n)}var ve=new ja,$a=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,q("noAuto")},Ya={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(q("beforeI2svg",n),D("pseudoElements2svg",n),D("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Sa(function(){Ba({autoReplaceSvgRoot:e}),q("watch",n)})}},Ua={icon:function(n){if(n===null)return null;if(Pt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:X(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Mt(n[0]);return{prefix:a,iconName:X(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(fa))){var r=Lt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=W();return{prefix:i,iconName:X(i,n)||n}}}},C={noAuto:$a,config:m,dom:Ya,parse:Ua,library:ve,findIconDefinition:qt,toHtml:dt},Ba=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?k:e;(Object.keys(T.styles).length>0||m.autoFetchSvg)&&$&&m.autoReplaceSvg&&C.dom.i2svg({node:a})};function zt(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return dt(a)})}}),Object.defineProperty(t,"node",{get:function(){if($){var a=k.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Wa(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ln(o)&&e.found&&!a.found){var s=e.width,f=e.height,c={x:s/f/2,y:.5};r.style=Tt(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Ha(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function dn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,d=t.extra,g=t.watchable,b=g===void 0?!1:g,O=a.found?a:e,S=O.width,P=O.height,v=r==="fak",p=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(Y){return d.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(d.classes).join(" "),h={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(P)})},x=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/P*16*.0625,"em")}:{};b&&(h.attributes[K]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||ct())},children:[f]}),delete h.attributes.title);var A=u(u({},h),{},{prefix:r,iconName:i,main:e,mask:a,maskId:c,transform:o,symbol:s,styles:u(u({},x),d.styles)}),M=a.found&&e.found?D("generateAbstractMask",A)||{children:[],attributes:{}}:D("generateAbstractIcon",A)||{children:[],attributes:{}},I=M.children,Rt=M.attributes;return A.children=I,A.attributes=Rt,s?Ha(A):Wa(A)}function Cn(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[K]="");var l=u({},o.styles);ln(r)&&(l.transform=xa({transform:r,startCentered:!0,width:e,height:a}),l["-webkit-transform"]=l.transform);var d=Tt(l);d.length>0&&(c.style=d);var g=[];return g.push({tag:"span",attributes:c,children:[n]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Ga(t){var n=t.content,e=t.title,a=t.extra,r=u(u(u({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Tt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Dt=T.styles;function Qt(t){var n=t[0],e=t[1],a=t.slice(4),r=en(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(V.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(V.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(V.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var Va={found:!1,width:512,height:512};function Xa(t,n){!te&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Zt(t,n){var e=n;return n==="fa"&&m.styleDefault!==null&&(n=W()),new Promise(function(a,r){if(D("missingIconAbstract"),e==="fa"){var i=de(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Dt[n]&&Dt[n][t]){var o=Dt[n][t];return a(Qt(o))}Xa(t,n),a(u(u({},Va),{},{icon:m.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}var Nn=function(){},Jt=m.measurePerformance&&vt&&vt.mark&&vt.measure?vt:{mark:Nn,measure:Nn},at='FA "6.5.1"',Ka=function(n){return Jt.mark("".concat(at," ").concat(n," begins")),function(){return pe(n)}},pe=function(n){Jt.mark("".concat(at," ").concat(n," ends")),Jt.measure("".concat(at," ").concat(n),"".concat(at," ").concat(n," begins"),"".concat(at," ").concat(n," ends"))},vn={begin:Ka,end:pe},_t=function(){};function In(t){var n=t.getAttribute?t.getAttribute(K):null;return typeof n=="string"}function qa(t){var n=t.getAttribute?t.getAttribute(rn):null,e=t.getAttribute?t.getAttribute(on):null;return n&&e}function Qa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Za(){if(m.autoReplaceSvg===!0)return Ot.replace;var t=Ot[m.autoReplaceSvg];return t||Ot.replace}function Ja(t){return k.createElementNS("http://www.w3.org/2000/svg",t)}function tr(t){return k.createElement(t)}function ge(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Ja:tr:e;if(typeof t=="string")return k.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(ge(o,{ceFn:a}))}),r}function nr(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Ot={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(ge(r),e)}),e.getAttribute(K)===null&&m.keepOriginalSource){var a=k.createComment(nr(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~fn(e).indexOf(m.replacementClass))return Ot.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return dt(s)}).join(`
`);e.setAttribute(K,""),e.innerHTML=o}};function Tn(t){t()}function be(t,n){var e=typeof n=="function"?n:_t;if(t.length===0)e();else{var a=Tn;m.mutateApproach===ia&&(a=B.requestAnimationFrame||Tn),a(function(){var r=Za(),i=vn.begin("mutate");t.map(r),i(),e()})}}var pn=!1;function he(){pn=!0}function tn(){pn=!1}var Ct=null;function Mn(t){if(xn&&m.observeMutations){var n=t.treeCallback,e=n===void 0?_t:n,a=t.nodeCallback,r=a===void 0?_t:a,i=t.pseudoElementsCallback,o=i===void 0?_t:i,s=t.observeMutationsRoot,f=s===void 0?k:s;Ct=new xn(function(c){if(!pn){var l=W();et(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!In(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&In(d.target)&&~ma.indexOf(d.attributeName))if(d.attributeName==="class"&&qa(d.target)){var g=Lt(fn(d.target)),b=g.prefix,O=g.iconName;d.target.setAttribute(rn,b||l),O&&d.target.setAttribute(on,O)}else Qa(d.target)&&r(d.target)})}}),$&&Ct.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function er(){Ct&&Ct.disconnect()}function ar(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function rr(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Lt(fn(t));return r.prefix||(r.prefix=W()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=za(r.prefix,t.innerText)||un(r.prefix,Vt(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ir(t){var n=et(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(e?n["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||ct()):(n["aria-hidden"]="true",n.focusable="false")),n}function or(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ln(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=rr(t),a=e.iconName,r=e.prefix,i=e.rest,o=ir(t),s=Kt("parseNodeAttributes",{},t),f=n.styleParser?ar(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var sr=T.styles;function ye(t){var n=m.autoReplaceSvg==="nest"?Ln(t,{styleParser:!1}):Ln(t);return~n.extra.classes.indexOf(ne)?D("generateLayersText",t,n):D("generateSvgReplacementMutation",t,n)}var H=new Set;sn.map(function(t){H.add("fa-".concat(t))});Object.keys(ot[y]).map(H.add.bind(H));Object.keys(ot[w]).map(H.add.bind(H));H=ut(H);function zn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();var e=k.documentElement.classList,a=function(d){return e.add("".concat(An,"-").concat(d))},r=function(d){return e.remove("".concat(An,"-").concat(d))},i=m.autoFetchSvg?H:sn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(sr));i.includes("fa")||i.push("fa");var o=[".".concat(ne,":not([").concat(K,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(K,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=et(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=vn.begin("onTree"),c=s.reduce(function(l,d){try{var g=ye(d);g&&l.push(g)}catch(b){te||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,d){Promise.all(c).then(function(g){be(g,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(g){f(),d(g)})})}function fr(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ye(t).then(function(e){e&&be([e],n)})}function lr(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:qt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:qt(r||{})),t(a,u(u({},e),{},{mask:r}))}}var cr=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?z:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,c=e.maskId,l=c===void 0?null:c,d=e.title,g=d===void 0?null:d,b=e.titleId,O=b===void 0?null:b,S=e.classes,P=S===void 0?[]:S,v=e.attributes,p=v===void 0?{}:v,h=e.styles,x=h===void 0?{}:h;if(n){var A=n.prefix,M=n.iconName,I=n.icon;return zt(u({type:"icon"},n),function(){return q("beforeDOMElementCreation",{iconDefinition:n,params:e}),m.autoA11y&&(g?p["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(O||ct()):(p["aria-hidden"]="true",p.focusable="false")),dn({icons:{main:Qt(I),mask:f?Qt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:M,transform:u(u({},z),r),symbol:o,title:g,maskId:l,titleId:O,extra:{attributes:p,styles:x,classes:P}})})}},ur={mixout:function(){return{icon:lr(cr)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=zn,e.nodeCallback=fr,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?k:a,i=e.callback,o=i===void 0?function(){}:i;return zn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,d=a.maskId,g=a.extra;return new Promise(function(b,O){Promise.all([Zt(r,s),l.iconName?Zt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var P=en(S,2),v=P[0],p=P[1];b([e,dn({icons:{main:v,mask:p},prefix:s,iconName:r,transform:f,symbol:c,maskId:d,title:i,titleId:o,extra:g,watchable:!0})])}).catch(O)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Tt(s);f.length>0&&(r.style=f);var c;return ln(o)&&(c=D("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},mr={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return zt({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(ut(i)).join(" ")},children:o}]})}}}},dr={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,c=f===void 0?{}:f,l=a.styles,d=l===void 0?{}:l;return zt({type:"counter",content:e},function(){return q("beforeDOMElementCreation",{content:e,params:a}),Ga({content:e.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(ut(s))}})})}}}},vr={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?z:r,o=a.title,s=o===void 0?null:o,f=a.classes,c=f===void 0?[]:f,l=a.attributes,d=l===void 0?{}:l,g=a.styles,b=g===void 0?{}:g;return zt({type:"text",content:e},function(){return q("beforeDOMElementCreation",{content:e,params:a}),Cn({content:e,transform:u(u({},z),i),title:s,extra:{attributes:d,styles:b,classes:["".concat(m.cssPrefix,"-layers-text")].concat(ut(c))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Qn){var c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/c,f=l.height/c}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Cn({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},pr=new RegExp('"',"ug"),Rn=[1105920,1112319];function gr(t){var n=t.replace(pr,""),e=Ca(n,0),a=e>=Rn[0]&&e<=Rn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Vt(r?n[0]:n),isSecondary:a||r}}function jn(t,n){var e="".concat(ra).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=et(t.children),o=i.filter(function(I){return I.getAttribute(Gt)===n})[0],s=B.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(la),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),g=~["Sharp"].indexOf(f[2])?w:y,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?st[g][f[2].toLowerCase()]:ca[g][c],O=gr(d),S=O.value,P=O.isSecondary,v=f[0].startsWith("FontAwesome"),p=un(b,S),h=p;if(v){var x=Ra(S);x.iconName&&x.prefix&&(p=x.iconName,b=x.prefix)}if(p&&!P&&(!o||o.getAttribute(rn)!==b||o.getAttribute(on)!==h)){t.setAttribute(e,h),o&&t.removeChild(o);var A=or(),M=A.extra;M.attributes[Gt]=n,Zt(p,b).then(function(I){var Rt=dn(u(u({},A),{},{icons:{main:I,mask:mn()},prefix:b,iconName:h,extra:M,watchable:!0})),Y=k.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=Rt.map(function(Ae){return dt(Ae)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function br(t){return Promise.all([jn(t,"::before"),jn(t,"::after")])}function hr(t){return t.parentNode!==document.head&&!~oa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Gt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fn(t){if($)return new Promise(function(n,e){var a=et(t.querySelectorAll("*")).filter(hr).map(br),r=vn.begin("searchPseudoElements");he(),Promise.all(a).then(function(){r(),tn(),n()}).catch(function(){r(),tn(),e()})})}var yr={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Fn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?k:a;m.searchPseudoElements&&Fn(r)}}},Dn=!1,kr={mixout:function(){return{dom:{unwatch:function(){he(),Dn=!0}}}},hooks:function(){return{bootstrap:function(){Mn(Kt("mutationObserverCallbacks",{}))},noAuto:function(){er()},watch:function(e){var a=e.observeMutationsRoot;Dn?tn():Mn(Kt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},$n=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},wr={mixout:function(){return{parse:{transform:function(e){return $n(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=$n(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(c," ").concat(l)},g={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:d,path:g};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),b.path)}]}]}}}},$t={x:0,y:0,width:"100%",height:"100%"};function Yn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function xr(t){return t.tag==="g"?t.children:[t]}var Ar={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Lt(r.split(" ").map(function(o){return o.trim()})):mn();return i.prefix||(i.prefix=W()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,c=i.width,l=i.icon,d=o.width,g=o.icon,b=wa({transform:f,containerWidth:d,iconWidth:c}),O={tag:"rect",attributes:u(u({},$t),{},{fill:"white"})},S=l.children?{children:l.children.map(Yn)}:{},P={tag:"g",attributes:u({},b.inner),children:[Yn(u({tag:l.tag,attributes:u(u({},l.attributes),b.path)},S))]},v={tag:"g",attributes:u({},b.outer),children:[P]},p="mask-".concat(s||ct()),h="clip-".concat(s||ct()),x={tag:"mask",attributes:u(u({},$t),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,v]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:xr(g)},x]};return a.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},$t)}),{children:a,attributes:r}}}},_r={provides:function(n){var e=!1;B.matchMedia&&(e=B.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Or={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Sr=[_a,ur,mr,dr,vr,yr,kr,wr,Ar,_r,Or];Da(Sr,{mixoutsTo:C});C.noAuto;C.config;var Pr=C.library;C.dom;var nn=C.parse;C.findIconDefinition;C.toHtml;var Er=C.icon;C.layer;C.text;C.counter;function Un(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function R(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Un(Object(e),!0).forEach(function(a){E(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Un(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Nt(t){"@babel/helpers - typeof";return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Nt(t)}function E(t,n,e){return n=Tr(n),n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Cr(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function Nr(t,n){if(t==null)return{};var e=Cr(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}function Ir(t,n){if(typeof t!="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var a=e.call(t,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function Tr(t){var n=Ir(t,"string");return typeof n=="symbol"?n:String(n)}var Mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ke={exports:{}};(function(t){(function(n){var e=function(v,p,h){if(!c(p)||d(p)||g(p)||b(p)||f(p))return p;var x,A=0,M=0;if(l(p))for(x=[],M=p.length;A<M;A++)x.push(e(v,p[A],h));else{x={};for(var I in p)Object.prototype.hasOwnProperty.call(p,I)&&(x[v(I,h)]=e(v,p[I],h))}return x},a=function(v,p){p=p||{};var h=p.separator||"_",x=p.split||/(?=[A-Z])/;return v.split(x).join(h)},r=function(v){return O(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(p,h){return h?h.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var p=r(v);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(v,p){return a(v,p).toLowerCase()},s=Object.prototype.toString,f=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},l=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},g=function(v){return s.call(v)=="[object RegExp]"},b=function(v){return s.call(v)=="[object Boolean]"},O=function(v){return v=v-0,v===v},S=function(v,p){var h=p&&"process"in p?p.process:p;return typeof h!="function"?v:function(x,A){return h(x,v,A)}},P={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,p){return e(S(r,p),v)},decamelizeKeys:function(v,p){return e(S(o,p),v,p)},pascalizeKeys:function(v,p){return e(S(i,p),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=P:n.humps=P})(Mr)})(ke);var Lr=ke.exports,zr=["class","style"];function Rr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=Lr.camelize(e.slice(0,a)),i=e.slice(a+1).trim();return n[r]=i,n},{})}function jr(t){return t.split(/\s+/).reduce(function(n,e){return n[e]=!0,n},{})}function we(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return we(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var l=t.attributes[c];switch(c){case"class":f.class=jr(l);break;case"style":f.style=Rr(l);break;default:f.attrs[c]=l}return f},{attrs:{},class:{},style:{}});e.class;var i=e.style,o=i===void 0?{}:i,s=Nr(e,zr);return Ee(t.tag,R(R(R({},n),{},{class:r.class,style:R(R({},r.style),o)},r.attrs),s),a)}var xe=!1;try{xe=!0}catch{}function Fr(){if(!xe&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Yt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?E({},t,n):{}}function Dr(t){var n,e=(n={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},E(n,"fa-".concat(t.size),t.size!==null),E(n,"fa-rotate-".concat(t.rotation),t.rotation!==null),E(n,"fa-pull-".concat(t.pull),t.pull!==null),E(n,"fa-swap-opacity",t.swapOpacity),E(n,"fa-bounce",t.bounce),E(n,"fa-shake",t.shake),E(n,"fa-beat",t.beat),E(n,"fa-fade",t.fade),E(n,"fa-beat-fade",t.beatFade),E(n,"fa-flash",t.flash),E(n,"fa-spin-pulse",t.spinPulse),E(n,"fa-spin-reverse",t.spinReverse),n);return Object.keys(e).map(function(a){return e[a]?a:null}).filter(function(a){return a})}function Bn(t){if(t&&Nt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(nn.icon)return nn.icon(t);if(t===null)return null;if(Nt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var $r=It({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,e){var a=e.attrs,r=G(function(){return Bn(n.icon)}),i=G(function(){return Yt("classes",Dr(n))}),o=G(function(){return Yt("transform",typeof n.transform=="string"?nn.transform(n.transform):n.transform)}),s=G(function(){return Yt("mask",Bn(n.mask))}),f=G(function(){return Er(r.value,R(R(R(R({},i.value),o.value),s.value),{},{symbol:n.symbol,title:n.title,titleId:n.titleId,maskId:n.maskId}))});Pe(f,function(l){if(!l)return Fr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=G(function(){return f.value?we(f.value.abstract[0],{},a):null});return function(){return c.value}}}),Yr={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Ur={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},Br={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};Pr.add(Yr,Ur,Br);const Hr={Layout:Xe,enhanceApp({app:t,router:n,siteData:e}){t.component("font-awesome-icon",$r)}};export{Hr as R};
