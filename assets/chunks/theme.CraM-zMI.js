import{d as mt,c as H,o as C,a as S,t as _t,u as Ne,b as U,r as St,e as Te,f as ft,F as Fe,g as bn,h as ee,w as vn,_ as xn,i as ot,j as An,k as wn}from"./framework.D4idK3aa.js";const kn={class:"hero is-dark is-fullheight"},On={class:"hero-body"},_n={class:"container has-text-centered"},Sn={class:"subtitle"},Pn=mt({__name:"NotFound",setup(t){const e=["Oops! Nothing to see here..."];function n(){return e[Math.floor(Math.random()*e.length)]}return(a,r)=>(C(),H("div",kn,[S("div",On,[S("div",_n,[r[0]||(r[0]=S("p",{class:"title"},"404",-1)),S("p",Sn,_t(n()),1)])])]))}}),En={class:"hero is-dark is-fullheight"},Cn={class:"hero-body"},In={class:"container has-text-centered"},Nn={class:"title"},Tn={class:"subtitle"},Fn={key:0,class:"hero-foot"},Mn={class:"tabs is-boxed is-large is-centered"},Ln={class:"container"},zn=["href","aria-label"],Dn=mt({__name:"Home",setup(t){const{site:e,frontmatter:n}=Ne(),a=U(()=>n.value.links?n.value.links:[]);return(r,i)=>{const o=St("font-awesome-icon"),s=St("ClientOnly");return C(),H("div",En,[S("div",Cn,[S("div",In,[S("p",Nn,_t(ft(e).title),1),S("p",Tn,_t(ft(e).description),1)])]),a.value.length>0?(C(),H("div",Fn,[S("nav",Mn,[S("div",Ln,[S("ul",null,[(C(!0),H(Fe,null,bn(a.value,f=>(C(),H("li",null,[S("a",{href:f.href,"aria-label":f.label},[ee(s,null,{default:vn(()=>[ee(o,{icon:f.icon},null,8,["icon"])]),_:2},1024)],8,zn)]))),256))])])])])):Te("",!0)])}}}),Rn={};function jn(t,e){const n=St("Content");return C(),ot(n)}const Yn=xn(Rn,[["render",jn]]),Un=mt({__name:"Layout",setup(t){const{page:e,frontmatter:n}=Ne();return(a,r)=>(C(),H(Fe,null,[ft(e).isNotFound?(C(),ot(Pn,{key:0})):Te("",!0),ft(n).home?(C(),ot(Dn,{key:1})):(C(),ot(Yn,{key:2}))],64))}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Bn(t,e,n){return(e=$n(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ne(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ne(Object(n),!0).forEach(function(a){Bn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Wn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function $n(t){var e=Wn(t,"string");return typeof e=="symbol"?e:e+""}const ae=()=>{};let $t={},Me={},Le=null,ze={mark:ae,measure:ae};try{typeof window<"u"&&($t=window),typeof document<"u"&&(Me=document),typeof MutationObserver<"u"&&(Le=MutationObserver),typeof performance<"u"&&(ze=performance)}catch{}const{userAgent:re=""}=$t.navigator||{},D=$t,y=Me,ie=Le,rt=ze;D.document;const L=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",De=~re.indexOf("MSIE")||~re.indexOf("Trident/");var Hn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Gn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Re={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Vn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},je=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],A="classic",gt="duotone",Xn="sharp",Kn="sharp-duotone",Ye=[A,gt,Xn,Kn],qn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Qn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Zn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Jn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ta=["fak","fa-kit","fakd","fa-kit-duotone"],oe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ea=["kit"],na={kit:{"fa-kit":"fak"}},aa=["fak","fakd"],ra={kit:{fak:"fa-kit"}},se={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},it={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ia=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],oa=["fak","fa-kit","fakd","fa-kit-duotone"],sa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},la={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},fa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Pt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ca=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Et=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...ia,...ca],ua=["solid","regular","light","thin","duotone","brands"],Ue=[1,2,3,4,5,6,7,8,9,10],da=Ue.concat([11,12,13,14,15,16,17,18,19,20]),ma=[...Object.keys(fa),...ua,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",it.GROUP,it.SWAP_OPACITY,it.PRIMARY,it.SECONDARY].concat(Ue.map(t=>"".concat(t,"x"))).concat(da.map(t=>"w-".concat(t))),ga={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const F="___FONT_AWESOME___",Ct=16,Be="fa",We="svg-inline--fa",W="data-fa-i2svg",It="data-fa-pseudo-element",pa="data-fa-pseudo-element-pending",Ht="data-prefix",Gt="data-icon",le="fontawesome-i2svg",ha="async",ya=["HTML","HEAD","STYLE","SCRIPT"],$e=(()=>{try{return!0}catch{return!1}})();function et(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[A]}})}const He=l({},Re);He[A]=l(l(l(l({},{"fa-duotone":"duotone"}),Re[A]),oe.kit),oe["kit-duotone"]);const ba=et(He),Nt=l({},Jn);Nt[A]=l(l(l(l({},{duotone:"fad"}),Nt[A]),se.kit),se["kit-duotone"]);const fe=et(Nt),Tt=l({},Pt);Tt[A]=l(l({},Tt[A]),ra.kit);const Vt=et(Tt),Ft=l({},la);Ft[A]=l(l({},Ft[A]),na.kit);et(Ft);const va=Hn,Ge="fa-layers-text",xa=Gn,Aa=l({},qn);et(Aa);const wa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],vt=Vn,ka=[...ea,...ma],Q=D.FontAwesomeConfig||{};function Oa(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function _a(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=_a(Oa(n));r!=null&&(Q[a]=r)});const Ve={styleDefault:"solid",familyDefault:A,cssPrefix:Be,replacementClass:We,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);const X=l(l({},Ve),Q);X.autoReplaceSvg||(X.observeMutations=!1);const u={};Object.keys(Ve).forEach(t=>{Object.defineProperty(u,t,{enumerable:!0,set:function(e){X[t]=e,Z.forEach(n=>n(u))},get:function(){return X[t]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(t){X.cssPrefix=t,Z.forEach(e=>e(u))},get:function(){return X.cssPrefix}});D.FontAwesomeConfig=u;const Z=[];function Sa(t){return Z.push(t),()=>{Z.splice(Z.indexOf(t),1)}}const z=Ct,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Pa(t){if(!t||!L)return;const e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(e,a),t}const Ea="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function J(){let t=12,e="";for(;t-- >0;)e+=Ea[Math.random()*62|0];return e}function K(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Xt(t){return t.classList?K(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Xe(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ca(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Xe(t[n]),'" '),"").trim()}function pt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Kt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function Ia(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Na(t){let{transform:e,width:n=Ct,height:a=Ct,startCentered:r=!1}=t,i="";return r&&De?i+="translate(".concat(e.x/z-n/2,"em, ").concat(e.y/z-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/z,"em), calc(-50% + ").concat(e.y/z,"em)) "):i+="translate(".concat(e.x/z,"em, ").concat(e.y/z,"em) "),i+="scale(".concat(e.size/z*(e.flipX?-1:1),", ").concat(e.size/z*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Ta=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function Ke(){const t=Be,e=We,n=u.cssPrefix,a=u.replacementClass;let r=Ta;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let ce=!1;function xt(){u.autoAddCss&&!ce&&(Pa(Ke()),ce=!0)}var Fa={mixout(){return{dom:{css:Ke,insertCss:xt}}},hooks(){return{beforeDOMElementCreation(){xt()},beforeI2svg(){xt()}}}};const M=D||{};M[F]||(M[F]={});M[F].styles||(M[F].styles={});M[F].hooks||(M[F].hooks={});M[F].shims||(M[F].shims=[]);var N=M[F];const qe=[],Qe=function(){y.removeEventListener("DOMContentLoaded",Qe),ct=1,qe.map(t=>t())};let ct=!1;L&&(ct=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),ct||y.addEventListener("DOMContentLoaded",Qe));function Ma(t){L&&(ct?setTimeout(t,0):qe.push(t))}function nt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Xe(t):"<".concat(e," ").concat(Ca(n),">").concat(a.map(nt).join(""),"</").concat(e,">")}function ue(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var At=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,f,c,m;for(a===void 0?(f=1,m=e[i[0]]):(f=0,m=a);f<o;f++)c=i[f],m=s(m,e[c],c,e);return m};function La(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Mt(t){const e=La(t);return e.length===1?e[0].toString(16):null}function za(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function de(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Lt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=de(e);typeof N.hooks.addPack=="function"&&!a?N.hooks.addPack(t,de(e)):N.styles[t]=l(l({},N.styles[t]||{}),r),t==="fas"&&Lt("fa",e)}const{styles:tt,shims:Da}=N,Ze=Object.keys(Vt),Ra=Ze.reduce((t,e)=>(t[e]=Object.keys(Vt[e]),t),{});let qt=null,Je={},tn={},en={},nn={},an={};function ja(t){return~ka.indexOf(t)}function Ya(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ja(r)?r:null}const rn=()=>{const t=a=>At(tt,(r,i,o)=>(r[o]=At(i,a,{}),r),{});Je=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),tn=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),an=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in tt||u.autoFetchSvg,n=At(Da,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});en=n.names,nn=n.unicodes,qt=ht(u.styleDefault,{family:u.familyDefault})};Sa(t=>{qt=ht(t.styleDefault,{family:u.familyDefault})});rn();function Qt(t,e){return(Je[t]||{})[e]}function Ua(t,e){return(tn[t]||{})[e]}function B(t,e){return(an[t]||{})[e]}function on(t){return en[t]||{prefix:null,iconName:null}}function Ba(t){const e=nn[t],n=Qt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return qt}const sn=()=>({prefix:null,iconName:null,rest:[]});function Wa(t){let e=A;const n=Ze.reduce((a,r)=>(a[r]="".concat(u.cssPrefix,"-").concat(r),a),{});return Ye.forEach(a=>{(t.includes(n[a])||t.some(r=>Ra[a].includes(r)))&&(e=a)}),e}function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=A}=e,a=ba[n][t];if(n===gt&&!t)return"fad";const r=fe[n][t]||fe[n][a],i=t in N.styles?t:null;return r||i||null}function $a(t){let e=[],n=null;return t.forEach(a=>{const r=Ya(u.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function me(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Et.concat(oa),i=me(t.filter(h=>r.includes(h))),o=me(t.filter(h=>!Et.includes(h))),s=i.filter(h=>(a=h,!je.includes(h))),[f=null]=s,c=Wa(i),m=l(l({},$a(o)),{},{prefix:ht(f,{family:c})});return l(l(l({},m),Xa({values:t,family:c,styles:tt,config:u,canonical:m,givenPrefix:a})),Ha(n,a,m))}function Ha(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?on(r):{},o=B(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!tt.far&&tt.fas&&!u.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ga=Ye.filter(t=>t!==A||t!==gt),Va=Object.keys(Pt).filter(t=>t!==A).map(t=>Object.keys(Pt[t])).flat();function Xa(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,s=n===gt,f=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(f||c||m)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ga.includes(n)&&(Object.keys(i).find(p=>Va.includes(p))||o.autoFetchSvg)){const p=Zn.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=B(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=R()||"fas"),a}class Ka{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),Lt(i,r[i]);const o=Vt[A][i];o&&Lt(o,r[i]),rn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],f=s[2];e[i]||(e[i]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(e[i][c]=s)}),e[i][o]=s}),e}}let ge=[],G={};const V={},qa=Object.keys(V);function Qa(t,e){let{mixoutsTo:n}=e;return ge=t,G={},Object.keys(V).forEach(a=>{qa.indexOf(a)===-1&&delete V[a]}),ge.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{G[o]||(G[o]=[]),G[o].push(i[o])})}a.provides&&a.provides(V)}),n}function zt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(G[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function $(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(G[t]||[]).forEach(i=>{i.apply(null,n)})}function j(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return V[t]?V[t].apply(null,e):void 0}function Dt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||R();if(e)return e=B(n,e)||e,ue(ln.definitions,n,e)||ue(N.styles,n,e)}const ln=new Ka,Za=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,$("noAuto")},Ja={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?($("beforeI2svg",t),j("pseudoElements2svg",t),j("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,Ma(()=>{er({autoReplaceSvgRoot:e}),$("watch",t)})}},tr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:B(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ht(t[0]);return{prefix:n,iconName:B(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(u.cssPrefix,"-"))>-1||t.match(va))){const e=yt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||R(),iconName:B(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=R();return{prefix:e,iconName:B(e,t)||t}}}},O={noAuto:Za,config:u,dom:Ja,parse:tr,library:ln,findIconDefinition:Dt,toHtml:nt},er=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=y}=t;(Object.keys(N.styles).length>0||u.autoFetchSvg)&&L&&u.autoReplaceSvg&&O.dom.i2svg({node:e})};function bt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>nt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!L)return;const n=y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function nr(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(Kt(o)&&n.found&&!a.found){const{width:s,height:f}=n,c={x:s/f/2,y:.5};r.style=pt(l(l({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ar(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:o}),children:a}]}]}function Zt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:f,titleId:c,extra:m,watchable:h=!1}=t,{width:p,height:v}=n.found?n:e,E=aa.includes(a),P=[u.replacementClass,r?"".concat(u.cssPrefix,"-").concat(r):""].filter(_=>m.classes.indexOf(_)===-1).filter(_=>_!==""||!!_).concat(m.classes).join(" ");let w={children:[],attributes:l(l({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:P,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(v)})};const d=E&&!~m.classes.indexOf("fa-fw")?{width:"".concat(p/v*16*.0625,"em")}:{};h&&(w.attributes[W]=""),s&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||J())},children:[s]}),delete w.attributes.title);const g=l(l({},w),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:i,symbol:o,styles:l(l({},d),m.styles)}),{children:b,attributes:x}=n.found&&e.found?j("generateAbstractMask",g)||{children:[],attributes:{}}:j("generateAbstractIcon",g)||{children:[],attributes:{}};return g.children=b,g.attributes=x,o?ar(g):nr(g)}function pe(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,f=l(l(l({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(f[W]="");const c=l({},o.styles);Kt(r)&&(c.transform=Na({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const m=pt(c);m.length>0&&(f.style=m);const h=[];return h.push({tag:"span",attributes:f,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function rr(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=pt(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:wt}=N;function Rt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(vt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(vt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const ir={found:!1,width:512,height:512};function or(t,e){!$e&&!u.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function jt(t,e){let n=e;return e==="fa"&&u.styleDefault!==null&&(e=R()),new Promise((a,r)=>{if(n==="fa"){const i=on(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&wt[e]&&wt[e][t]){const i=wt[e][t];return a(Rt(i))}or(t,e),a(l(l({},ir),{},{icon:u.showMissingIcons&&t?j("missingIconAbstract")||{}:{}}))})}const he=()=>{},Yt=u.measurePerformance&&rt&&rt.mark&&rt.measure?rt:{mark:he,measure:he},q='FA "6.7.2"',sr=t=>(Yt.mark("".concat(q," ").concat(t," begins")),()=>fn(t)),fn=t=>{Yt.mark("".concat(q," ").concat(t," ends")),Yt.measure("".concat(q," ").concat(t),"".concat(q," ").concat(t," begins"),"".concat(q," ").concat(t," ends"))};var Jt={begin:sr,end:fn};const st=()=>{};function ye(t){return typeof(t.getAttribute?t.getAttribute(W):null)=="string"}function lr(t){const e=t.getAttribute?t.getAttribute(Ht):null,n=t.getAttribute?t.getAttribute(Gt):null;return e&&n}function fr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(u.replacementClass)}function cr(){return u.autoReplaceSvg===!0?lt.replace:lt[u.autoReplaceSvg]||lt.replace}function ur(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function dr(t){return y.createElement(t)}function cn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ur:dr}=e;if(typeof t=="string")return y.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(cn(i,{ceFn:n}))}),a}function mr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const lt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(cn(n),e)}),e.getAttribute(W)===null&&u.keepOriginalSource){let n=y.createComment(mr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Xt(e).indexOf(u.replacementClass))return lt.replace(t);const a=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===u.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>nt(i)).join(`
`);e.setAttribute(W,""),e.innerHTML=r}};function be(t){t()}function un(t,e){const n=typeof e=="function"?e:st;if(t.length===0)n();else{let a=be;u.mutateApproach===ha&&(a=D.requestAnimationFrame||be),a(()=>{const r=cr(),i=Jt.begin("mutate");t.map(r),i(),n()})}}let te=!1;function dn(){te=!0}function Ut(){te=!1}let ut=null;function ve(t){if(!ie||!u.observeMutations)return;const{treeCallback:e=st,nodeCallback:n=st,pseudoElementsCallback:a=st,observeMutationsRoot:r=y}=t;ut=new ie(i=>{if(te)return;const o=R();K(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!ye(s.addedNodes[0])&&(u.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&u.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&ye(s.target)&&~wa.indexOf(s.attributeName))if(s.attributeName==="class"&&lr(s.target)){const{prefix:f,iconName:c}=yt(Xt(s.target));s.target.setAttribute(Ht,f||o),c&&s.target.setAttribute(Gt,c)}else fr(s.target)&&n(s.target)})}),L&&ut.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function gr(){ut&&ut.disconnect()}function pr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function hr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=yt(Xt(t));return r.prefix||(r.prefix=R()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ua(r.prefix,t.innerText)||Qt(r.prefix,Mt(t.innerText))),!r.iconName&&u.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function yr(t){const e=K(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return u.autoA11y&&(n?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||J()):(e["aria-hidden"]="true",e.focusable="false")),e}function br(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=hr(t),i=yr(t),o=zt("parseNodeAttributes",{},t);let s=e.styleParser?pr(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:vr}=N;function mn(t){const e=u.autoReplaceSvg==="nest"?xe(t,{styleParser:!1}):xe(t);return~e.extra.classes.indexOf(Ge)?j("generateLayersText",t,e):j("generateSvgReplacementMutation",t,e)}function xr(){return[...ta,...Et]}function Ae(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();const n=y.documentElement.classList,a=m=>n.add("".concat(le,"-").concat(m)),r=m=>n.remove("".concat(le,"-").concat(m)),i=u.autoFetchSvg?xr():je.concat(Object.keys(vr));i.includes("fa")||i.push("fa");const o=[".".concat(Ge,":not([").concat(W,"])")].concat(i.map(m=>".".concat(m,":not([").concat(W,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=K(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const f=Jt.begin("onTree"),c=s.reduce((m,h)=>{try{const p=mn(h);p&&m.push(p)}catch(p){$e||p.name==="MissingIcon"&&console.error(p)}return m},[]);return new Promise((m,h)=>{Promise.all(c).then(p=>{un(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),m()})}).catch(p=>{f(),h(p)})})}function Ar(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mn(t).then(n=>{n&&un([n],e)})}function wr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Dt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Dt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const kr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:f=[],attributes:c={},styles:m={}}=e;if(!t)return;const{prefix:h,iconName:p,icon:v}=t;return bt(l({type:"icon"},t),()=>($("beforeDOMElementCreation",{iconDefinition:t,params:e}),u.autoA11y&&(o?c["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(s||J()):(c["aria-hidden"]="true",c.focusable="false")),Zt({icons:{main:Rt(v),mask:r?Rt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:l(l({},I),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:c,styles:m,classes:f}})))};var Or={mixout(){return{icon:wr(kr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ae,t.nodeCallback=Ar,t}}},provides(t){t.i2svg=function(e){const{node:n=y,callback:a=()=>{}}=e;return Ae(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:f,mask:c,maskId:m,extra:h}=n;return new Promise((p,v)=>{Promise.all([jt(a,o),c.iconName?jt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[P,w]=E;p([e,Zt({icons:{main:P,mask:w},prefix:o,iconName:a,transform:s,symbol:f,maskId:m,title:r,titleId:i,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=pt(o);s.length>0&&(a.style=s);let f;return Kt(i)&&(f=j("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},_r={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return bt({type:"layer"},()=>{$("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Sr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return bt({type:"counter",content:t},()=>($("beforeDOMElementCreation",{content:t,params:e}),rr({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(u.cssPrefix,"-layers-counter"),...a]}})))}}}},Pr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return bt({type:"text",content:t},()=>($("beforeDOMElementCreation",{content:t,params:e}),pe({content:t,transform:l(l({},I),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(u.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(De){const f=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/f,s=c.height/f}return u.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,pe({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const Er=new RegExp('"',"ug"),we=[1105920,1112319],ke=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Qn),ga),sa),Bt=Object.keys(ke).reduce((t,e)=>(t[e.toLowerCase()]=ke[e],t),{}),Cr=Object.keys(Bt).reduce((t,e)=>{const n=Bt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ir(t){const e=t.replace(Er,""),n=za(e,0),a=n>=we[0]&&n<=we[1],r=e.length===2?e[0]===e[1]:!1;return{value:Mt(r?e[0]:e),isSecondary:a||r}}function Nr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Bt[n]||{})[r]||Cr[n]}function Oe(t,e){const n="".concat(pa).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=K(t.children).filter(p=>p.getAttribute(It)===e)[0],s=D.getComputedStyle(t,e),f=s.getPropertyValue("font-family"),c=f.match(xa),m=s.getPropertyValue("font-weight"),h=s.getPropertyValue("content");if(o&&!c)return t.removeChild(o),a();if(c&&h!=="none"&&h!==""){const p=s.getPropertyValue("content");let v=Nr(f,m);const{value:E,isSecondary:P}=Ir(p),w=c[0].startsWith("FontAwesome");let d=Qt(v,E),g=d;if(w){const b=Ba(E);b.iconName&&b.prefix&&(d=b.iconName,v=b.prefix)}if(d&&!P&&(!o||o.getAttribute(Ht)!==v||o.getAttribute(Gt)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);const b=br(),{extra:x}=b;x.attributes[It]=e,jt(d,v).then(_=>{const at=Zt(l(l({},b),{},{icons:{main:_,mask:sn()},prefix:v,iconName:g,extra:x,watchable:!0})),Y=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=at.map(yn=>nt(yn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Tr(t){return Promise.all([Oe(t,"::before"),Oe(t,"::after")])}function Fr(t){return t.parentNode!==document.head&&!~ya.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(It)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function _e(t){if(L)return new Promise((e,n)=>{const a=K(t.querySelectorAll("*")).filter(Fr).map(Tr),r=Jt.begin("searchPseudoElements");dn(),Promise.all(a).then(()=>{r(),Ut(),e()}).catch(()=>{r(),Ut(),n()})})}var Mr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=_e,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=y}=e;u.searchPseudoElements&&_e(n)}}};let Se=!1;var Lr={mixout(){return{dom:{unwatch(){dn(),Se=!0}}}},hooks(){return{bootstrap(){ve(zt("mutationObserverCallbacks",{}))},noAuto(){gr()},watch(t){const{observeMutationsRoot:e}=t;Se?Ut():ve(zt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Pe=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var zr={mixout(){return{parse:{transform:t=>Pe(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Pe(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(s," ").concat(f," ").concat(c)},h={transform:"translate(".concat(i/2*-1," -256)")},p={outer:o,inner:m,path:h};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),p.path)}]}]}}}};const kt={x:0,y:0,width:"100%",height:"100%"};function Ee(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Dr(t){return t.tag==="g"?t.children:[t]}var Rr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?yt(n.split(" ").map(r=>r.trim())):sn();return a.prefix||(a.prefix=R()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:f,icon:c}=r,{width:m,icon:h}=i,p=Ia({transform:s,containerWidth:m,iconWidth:f}),v={tag:"rect",attributes:l(l({},kt),{},{fill:"white"})},E=c.children?{children:c.children.map(Ee)}:{},P={tag:"g",attributes:l({},p.inner),children:[Ee(l({tag:c.tag,attributes:l(l({},c.attributes),p.path)},E))]},w={tag:"g",attributes:l({},p.outer),children:[P]},d="mask-".concat(o||J()),g="clip-".concat(o||J()),b={tag:"mask",attributes:l(l({},kt),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,w]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:Dr(h)},b]};return n.push(x,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},kt)}),{children:n,attributes:a}}}},jr={provides(t){let e=!1;D.matchMedia&&(e=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=l(l({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Yr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Ur=[Fa,Or,_r,Sr,Pr,Mr,Lr,zr,Rr,jr,Yr];Qa(Ur,{mixoutsTo:O});O.noAuto;O.config;const Br=O.library;O.dom;const Wt=O.parse;O.findIconDefinition;O.toHtml;const Wr=O.icon;O.layer;O.text;O.counter;function Ce(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ce(Object(n),!0).forEach(function(a){k(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function $r(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Hr(t){var e=$r(t,"string");return typeof e=="symbol"?e:e+""}function dt(t){"@babel/helpers - typeof";return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dt(t)}function k(t,e,n){return e=Hr(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Gr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function Vr(t,e){if(t==null)return{};var n=Gr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var Xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gn={exports:{}};(function(t){(function(e){var n=function(d,g,b){if(!c(g)||h(g)||p(g)||v(g)||f(g))return g;var x,_=0,at=0;if(m(g))for(x=[],at=g.length;_<at;_++)x.push(n(d,g[_],b));else{x={};for(var Y in g)Object.prototype.hasOwnProperty.call(g,Y)&&(x[d(Y,b)]=n(d,g[Y],b))}return x},a=function(d,g){g=g||{};var b=g.separator||"_",x=g.split||/(?=[A-Z])/;return d.split(x).join(b)},r=function(d){return E(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(g,b){return b?b.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},i=function(d){var g=r(d);return g.substr(0,1).toUpperCase()+g.substr(1)},o=function(d,g){return a(d,g).toLowerCase()},s=Object.prototype.toString,f=function(d){return typeof d=="function"},c=function(d){return d===Object(d)},m=function(d){return s.call(d)=="[object Array]"},h=function(d){return s.call(d)=="[object Date]"},p=function(d){return s.call(d)=="[object RegExp]"},v=function(d){return s.call(d)=="[object Boolean]"},E=function(d){return d=d-0,d===d},P=function(d,g){var b=g&&"process"in g?g.process:g;return typeof b!="function"?d:function(x,_){return b(x,d,_)}},w={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(d,g){return n(P(r,g),d)},decamelizeKeys:function(d,g){return n(P(o,g),d,g)},pascalizeKeys:function(d,g){return n(P(i,g),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:e.humps=w})(Xr)})(gn);var Kr=gn.exports,qr=["class","style"];function Qr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Kr.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function Zr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function pn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return pn(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var m=t.attributes[c];switch(c){case"class":f.class=Zr(m);break;case"style":f.style=Qr(m);break;default:f.attrs[c]=m}return f},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Vr(n,qr);return wn(t.tag,T(T(T({},e),{},{class:r.class,style:T(T({},r.style),o)},r.attrs),s),a)}var hn=!1;try{hn=!0}catch{}function Jr(){if(!hn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ot(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?k({},t,e):{}}function ti(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},k(k(k(k(k(k(k(k(k(k(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),k(k(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Ie(t){if(t&&dt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wt.icon)return Wt.icon(t);if(t===null)return null;if(dt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var ei=mt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=U(function(){return Ie(e.icon)}),i=U(function(){return Ot("classes",ti(e))}),o=U(function(){return Ot("transform",typeof e.transform=="string"?Wt.transform(e.transform):e.transform)}),s=U(function(){return Ot("mask",Ie(e.mask))}),f=U(function(){return Wr(r.value,T(T(T(T({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});An(f,function(m){if(!m)return Jr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=U(function(){return f.value?pn(f.value.abstract[0],{},a):null});return function(){return c.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ni={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ai={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]},ri={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};Br.add(ni,ai,ri);const oi={Layout:Un,enhanceApp({app:t,router:e,siteData:n}){t.component("font-awesome-icon",ei)}};export{oi as R};
