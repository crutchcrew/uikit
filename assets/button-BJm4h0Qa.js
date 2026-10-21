import{r as o,j as w}from"./index-BlAWo7BP.js";import{c as C}from"./class-names-BdO-Y7mb.js";/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=e=>{const t=A(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},z=o.createContext({}),E=()=>o.useContext(z),L=o.forwardRef(({color:e,size:t,strokeWidth:r,absoluteStrokeWidth:n,className:a="",children:s,iconNode:b,...l},f)=>{const{size:i=24,strokeWidth:c=2,absoluteStrokeWidth:m=!1,color:g="currentColor",className:v=""}=E()??{},x=n??m?Number(r??c)*24/Number(t??i):r??c;return o.createElement("svg",{ref:f,...u,width:t??i??u.width,height:t??i??u.height,stroke:e??g,strokeWidth:x,className:p("lucide",v,a),...!s&&!j(l)&&{"aria-hidden":"true"},...l},[...b.map(([y,h])=>o.createElement(y,h)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.39.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(e,t)=>{const r=o.forwardRef(({className:n,...a},s)=>o.createElement(L,{ref:s,iconNode:t,className:p(`lucide-${k(d(e))}`,`lucide-${e}`,n),...a}));return r.displayName=d(e),r};function W(e){if(!o.isValidElement(e))return!1;try{return O(e).includes("lucide-")}catch{return!1}}function O(e){return"type"in e&&typeof e.type=="object"&&e.type!==null&&"render"in e.type&&typeof e.type.render=="function"?e.type.render.toString():""}function R(e,t){return o.isValidElement(e)&&"type"in e&&typeof e.type!="string"&&e.type===t}function V({size:e,variant:t,as:r,...n}){const a=r??"button",s=W(n.children);return w.jsx(a,{"data-slot":"button",className:S({size:e,variant:t,iconOnly:s}),type:a==="button"?"button":void 0,...n})}const S=C(["inline-flex shrink-0 items-center justify-center border font-medium whitespace-nowrap outline-none","transition-all duration-100","aria-invalid:ring-destructive/20","focus-visible:border-neutral-400 focus-visible:ring-2 focus-visible:ring-black/20","active:translate-y-px","disabled:pointer-events-none disabled:opacity-50","[&_svg]:pointer-events-none [&_svg]:shrink-0"],{defaultVariants:{size:"default",variant:"default"},variants:{iconOnly:{false:"",true:""},size:{default:["h-8 gap-2 rounded-[10px] px-3 text-sm","[&_svg]:size-4"],sm:["h-7 gap-1.5 rounded-lg px-2 text-sm","[&_svg]:size-3"]},variant:{default:["border-black bg-black text-white shadow-xs","hover:bg-black/85","active:bg-plack/95"],outline:["border-neutral-300 bg-white","hover:bg-neutral-100"],ghost:["border-transparent","hover:bg-neutral-100"],destructive:["border-red-600 bg-red-600 text-white","hover:bg-red-700/90","focus-visible:border-red-700/50 focus-visible:ring-red-600/30"],secondary:["border-neutral-200 bg-neutral-200"],link:["text-primary border-transparent underline-offset-4","hover:underline","focus-visible:border-neutral-400 focus-visible:ring-black/30"]}},compoundVariants:[{iconOnly:!0,size:"default",className:"w-8 px-0"},{iconOnly:!0,size:"sm",className:"w-7 px-0"}]});export{V as B,B as c,R as i};
