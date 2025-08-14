(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Ga={exports:{}},ti={},Ka={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xt=Symbol.for("react.element"),oc=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),sc=Symbol.for("react.provider"),cc=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),fc=Symbol.for("react.suspense"),pc=Symbol.for("react.memo"),mc=Symbol.for("react.lazy"),Ul=Symbol.iterator;function vc(e){return e===null||typeof e!="object"?null:(e=Ul&&e[Ul]||e["@@iterator"],typeof e=="function"?e:null)}var Ya={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xa=Object.assign,Za={};function ot(e,n,t){this.props=e,this.context=n,this.refs=Za,this.updater=t||Ya}ot.prototype.isReactComponent={};ot.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ot.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qa(){}qa.prototype=ot.prototype;function $o(e,n,t){this.props=e,this.context=n,this.refs=Za,this.updater=t||Ya}var Vo=$o.prototype=new qa;Vo.constructor=$o;Xa(Vo,ot.prototype);Vo.isPureReactComponent=!0;var Al=Array.isArray,Ja=Object.prototype.hasOwnProperty,Ho={current:null},ba={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,n,t){var r,i={},o=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(o=""+n.key),n)Ja.call(n,r)&&!ba.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xt,type:e,key:o,ref:l,props:i,_owner:Ho.current}}function gc(e,n){return{$$typeof:Xt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Wo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xt}function hc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Fl=/\/+/g;function ki(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hc(""+e.key):n.toString(36)}function Sr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xt:case oc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ki(l,0):r,Al(i)?(t="",e!=null&&(t=e.replace(Fl,"$&/")+"/"),Sr(i,n,t,"",function(c){return c})):i!=null&&(Wo(i)&&(i=gc(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Fl,"$&/")+"/")+e)),n.push(i)),1;if(l=0,r=r===""?".":r+":",Al(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+ki(o,a);l+=Sr(o,n,t,u,i)}else if(u=vc(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+ki(o,a++),l+=Sr(o,n,t,u,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function tr(e,n,t){if(e==null)return e;var r=[],i=0;return Sr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function yc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},wr={transition:null},Sc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Ho};function nu(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:tr,forEach:function(e,n,t){tr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return tr(e,function(){n++}),n},toArray:function(e){return tr(e,function(n){return n})||[]},only:function(e){if(!Wo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=ot;D.Fragment=lc;D.Profiler=uc;D.PureComponent=$o;D.StrictMode=ac;D.Suspense=fc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sc;D.act=nu;D.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xa({},e.props),i=e.key,o=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,l=Ho.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Ja.call(n,u)&&!ba.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Xt,type:e.type,key:i,ref:o,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:cc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sc,_context:e},e.Consumer=e};D.createElement=eu;D.createFactory=function(e){var n=eu.bind(null,e);return n.type=e,n};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:dc,render:e}};D.isValidElement=Wo;D.lazy=function(e){return{$$typeof:mc,_payload:{_status:-1,_result:e},_init:yc}};D.memo=function(e,n){return{$$typeof:pc,type:e,compare:n===void 0?null:n}};D.startTransition=function(e){var n=wr.transition;wr.transition={};try{e()}finally{wr.transition=n}};D.unstable_act=nu;D.useCallback=function(e,n){return ae.current.useCallback(e,n)};D.useContext=function(e){return ae.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};D.useEffect=function(e,n){return ae.current.useEffect(e,n)};D.useId=function(){return ae.current.useId()};D.useImperativeHandle=function(e,n,t){return ae.current.useImperativeHandle(e,n,t)};D.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};D.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};D.useMemo=function(e,n){return ae.current.useMemo(e,n)};D.useReducer=function(e,n,t){return ae.current.useReducer(e,n,t)};D.useRef=function(e){return ae.current.useRef(e)};D.useState=function(e){return ae.current.useState(e)};D.useSyncExternalStore=function(e,n,t){return ae.current.useSyncExternalStore(e,n,t)};D.useTransition=function(){return ae.current.useTransition()};D.version="18.3.1";Ka.exports=D;var De=Ka.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wc=De,kc=Symbol.for("react.element"),Cc=Symbol.for("react.fragment"),zc=Object.prototype.hasOwnProperty,xc=wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ec={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,n,t){var r,i={},o=null,l=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)zc.call(n,r)&&!Ec.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:kc,type:e,key:o,ref:l,props:i,_owner:xc.current}}ti.Fragment=Cc;ti.jsx=tu;ti.jsxs=tu;Ga.exports=ti;var k=Ga.exports,Ki={},ru={exports:{}},ye={},iu={exports:{}},ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(x,I){var N=x.length;x.push(I);e:for(;0<N;){var W=N-1>>>1,X=x[W];if(0<i(X,I))x[W]=I,x[N]=X,N=W;else break e}}function t(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var I=x[0],N=x.pop();if(N!==I){x[0]=N;e:for(var W=0,X=x.length,er=X>>>1;W<er;){var hn=2*(W+1)-1,wi=x[hn],yn=hn+1,nr=x[yn];if(0>i(wi,N))yn<X&&0>i(nr,wi)?(x[W]=nr,x[yn]=N,W=yn):(x[W]=wi,x[hn]=N,W=hn);else if(yn<X&&0>i(nr,N))x[W]=nr,x[yn]=N,W=yn;else break e}}return I}function i(x,I){var N=x.sortIndex-I.sortIndex;return N!==0?N:x.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],v=1,m=null,p=3,y=!1,S=!1,w=!1,U=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var I=t(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=x)r(c),I.sortIndex=I.expirationTime,n(u,I);else break;I=t(c)}}function g(x){if(w=!1,f(x),!S)if(t(u)!==null)S=!0,yi(z);else{var I=t(c);I!==null&&Si(g,I.startTime-x)}}function z(x,I){S=!1,w&&(w=!1,d(_),_=-1),y=!0;var N=p;try{for(f(I),m=t(u);m!==null&&(!(m.expirationTime>I)||x&&!Pe());){var W=m.callback;if(typeof W=="function"){m.callback=null,p=m.priorityLevel;var X=W(m.expirationTime<=I);I=e.unstable_now(),typeof X=="function"?m.callback=X:m===t(u)&&r(u),f(I)}else r(u);m=t(u)}if(m!==null)var er=!0;else{var hn=t(c);hn!==null&&Si(g,hn.startTime-I),er=!1}return er}finally{m=null,p=N,y=!1}}var E=!1,P=null,_=-1,H=5,M=-1;function Pe(){return!(e.unstable_now()-M<H)}function ut(){if(P!==null){var x=e.unstable_now();M=x;var I=!0;try{I=P(!0,x)}finally{I?st():(E=!1,P=null)}}else E=!1}var st;if(typeof s=="function")st=function(){s(ut)};else if(typeof MessageChannel<"u"){var jl=new MessageChannel,ic=jl.port2;jl.port1.onmessage=ut,st=function(){ic.postMessage(null)}}else st=function(){U(ut,0)};function yi(x){P=x,E||(E=!0,st())}function Si(x,I){_=U(function(){x(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,yi(z))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(x){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var N=p;p=I;try{return x()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,I){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var N=p;p=x;try{return I()}finally{p=N}},e.unstable_scheduleCallback=function(x,I,N){var W=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?W+N:W):N=W,x){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=N+X,x={id:v++,callback:I,priorityLevel:x,startTime:N,expirationTime:X,sortIndex:-1},N>W?(x.sortIndex=N,n(c,x),t(u)===null&&x===t(c)&&(w?(d(_),_=-1):w=!0,Si(g,N-W))):(x.sortIndex=X,n(u,x),S||y||(S=!0,yi(z))),x},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(x){var I=p;return function(){var N=p;p=I;try{return x.apply(this,arguments)}finally{p=N}}}})(ou);iu.exports=ou;var Pc=iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _c=De,he=Pc;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lu=new Set,Ot={};function Mn(e,n){Jn(e,n),Jn(e+"Capture",n)}function Jn(e,n){for(Ot[e]=n,e=0;e<n.length;e++)lu.add(n[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yi=Object.prototype.hasOwnProperty,Ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bl={},$l={};function Nc(e){return Yi.call($l,e)?!0:Yi.call(Bl,e)?!1:Ic.test(e)?$l[e]=!0:(Bl[e]=!0,!1)}function Dc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mc(e,n,t,r){if(n===null||typeof n>"u"||Dc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ue(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qo=/[\-:]([a-z])/g;function Go(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Qo,Go);ee[n]=new ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Qo,Go);ee[n]=new ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Qo,Go);ee[n]=new ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ko(e,n,t,r){var i=ee.hasOwnProperty(n)?ee[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Mc(n,t,i,r)&&(t=null),r||i===null?Nc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Xe=_c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Tn=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),Yo=Symbol.for("react.strict_mode"),Xi=Symbol.for("react.profiler"),au=Symbol.for("react.provider"),uu=Symbol.for("react.context"),Xo=Symbol.for("react.forward_ref"),Zi=Symbol.for("react.suspense"),qi=Symbol.for("react.suspense_list"),Zo=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),su=Symbol.for("react.offscreen"),Vl=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=Vl&&e[Vl]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,Ci;function St(e){if(Ci===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ci=n&&n[1]||""}return`
`+Ci+e}var zi=!1;function xi(e,n){if(!e||zi)return"";zi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{zi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?St(e):""}function Oc(e){switch(e.tag){case 5:return St(e.type);case 16:return St("Lazy");case 13:return St("Suspense");case 19:return St("SuspenseList");case 0:case 2:case 15:return e=xi(e.type,!1),e;case 11:return e=xi(e.type.render,!1),e;case 1:return e=xi(e.type,!0),e;default:return""}}function Ji(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case Tn:return"Portal";case Xi:return"Profiler";case Yo:return"StrictMode";case Zi:return"Suspense";case qi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uu:return(e.displayName||"Context")+".Consumer";case au:return(e._context.displayName||"Context")+".Provider";case Xo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zo:return n=e.displayName||null,n!==null?n:Ji(e.type)||"Memo";case qe:n=e._payload,e=e._init;try{return Ji(e(n))}catch{}}return null}function Rc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ji(n);case 8:return n===Yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Tc(e){var n=cu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ir(e){e._valueTracker||(e._valueTracker=Tc(e))}function du(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=cu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bi(e,n){var t=n.checked;return $({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Hl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=fn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fu(e,n){n=n.checked,n!=null&&Ko(e,"checked",n,!1)}function eo(e,n){fu(e,n);var t=fn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?no(e,n.type,t):n.hasOwnProperty("defaultValue")&&no(e,n.type,fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Wl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function no(e,n,t){(n!=="number"||Or(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wt=Array.isArray;function Gn(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+fn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function to(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(h(91));return $({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ql(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(h(92));if(wt(t)){if(1<t.length)throw Error(h(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:fn(t)}}function pu(e,n){var t=fn(n.value),r=fn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Gl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function mu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?mu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var or,vu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=or.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Rt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var zt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lc=["Webkit","ms","Moz","O"];Object.keys(zt).forEach(function(e){Lc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),zt[n]=zt[e]})});function gu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||zt.hasOwnProperty(e)&&zt[e]?(""+n).trim():n+"px"}function hu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=gu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var jc=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function io(e,n){if(n){if(jc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(h(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(h(61))}if(n.style!=null&&typeof n.style!="object")throw Error(h(62))}}function oo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lo=null;function qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ao=null,Kn=null,Yn=null;function Kl(e){if(e=Jt(e)){if(typeof ao!="function")throw Error(h(280));var n=e.stateNode;n&&(n=ai(n),ao(e.stateNode,e.type,n))}}function yu(e){Kn?Yn?Yn.push(e):Yn=[e]:Kn=e}function Su(){if(Kn){var e=Kn,n=Yn;if(Yn=Kn=null,Kl(e),n)for(e=0;e<n.length;e++)Kl(n[e])}}function wu(e,n){return e(n)}function ku(){}var Ei=!1;function Cu(e,n,t){if(Ei)return e(n,t);Ei=!0;try{return wu(e,n,t)}finally{Ei=!1,(Kn!==null||Yn!==null)&&(ku(),Su())}}function Tt(e,n){var t=e.stateNode;if(t===null)return null;var r=ai(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(h(231,n,typeof t));return t}var uo=!1;if(Qe)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){uo=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{uo=!1}function Uc(e,n,t,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(v){this.onError(v)}}var xt=!1,Rr=null,Tr=!1,so=null,Ac={onError:function(e){xt=!0,Rr=e}};function Fc(e,n,t,r,i,o,l,a,u){xt=!1,Rr=null,Uc.apply(Ac,arguments)}function Bc(e,n,t,r,i,o,l,a,u){if(Fc.apply(this,arguments),xt){if(xt){var c=Rr;xt=!1,Rr=null}else throw Error(h(198));Tr||(Tr=!0,so=c)}}function On(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function zu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Yl(e){if(On(e)!==e)throw Error(h(188))}function $c(e){var n=e.alternate;if(!n){if(n=On(e),n===null)throw Error(h(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Yl(i),e;if(o===r)return Yl(i),n;o=o.sibling}throw Error(h(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===t){l=!0,t=i,r=o;break}if(a===r){l=!0,r=i,t=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===t){l=!0,t=o,r=i;break}if(a===r){l=!0,r=o,t=i;break}a=a.sibling}if(!l)throw Error(h(189))}}if(t.alternate!==r)throw Error(h(190))}if(t.tag!==3)throw Error(h(188));return t.stateNode.current===t?e:n}function xu(e){return e=$c(e),e!==null?Eu(e):null}function Eu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Eu(e);if(n!==null)return n;e=e.sibling}return null}var Pu=he.unstable_scheduleCallback,Xl=he.unstable_cancelCallback,Vc=he.unstable_shouldYield,Hc=he.unstable_requestPaint,Q=he.unstable_now,Wc=he.unstable_getCurrentPriorityLevel,Jo=he.unstable_ImmediatePriority,_u=he.unstable_UserBlockingPriority,Lr=he.unstable_NormalPriority,Qc=he.unstable_LowPriority,Iu=he.unstable_IdlePriority,ri=null,Ae=null;function Gc(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(ri,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Xc,Kc=Math.log,Yc=Math.LN2;function Xc(e){return e>>>=0,e===0?32:31-(Kc(e)/Yc|0)|0}var lr=64,ar=4194304;function kt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var a=l&~i;a!==0?r=kt(a):(o&=l,o!==0&&(r=kt(o)))}else l=t&~i,l!==0?r=kt(l):o!==0&&(r=kt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Oe(n),i=1<<t,r|=e[t],n&=~i;return r}function Zc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Oe(o),a=1<<l,u=i[l];u===-1?(!(a&t)||a&r)&&(i[l]=Zc(a,n)):u<=n&&(e.expiredLanes|=a),o&=~a}}function co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nu(){var e=lr;return lr<<=1,!(lr&4194240)&&(lr=64),e}function Pi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Zt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Oe(n),e[n]=t}function Jc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Oe(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function bo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Oe(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var R=0;function Du(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mu,el,Ou,Ru,Tu,fo=!1,ur=[],rn=null,on=null,ln=null,Lt=new Map,jt=new Map,be=[],bc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zl(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Lt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jt.delete(n.pointerId)}}function ft(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=Jt(n),n!==null&&el(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function ed(e,n,t,r,i){switch(n){case"focusin":return rn=ft(rn,e,n,t,r,i),!0;case"dragenter":return on=ft(on,e,n,t,r,i),!0;case"mouseover":return ln=ft(ln,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Lt.set(o,ft(Lt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,jt.set(o,ft(jt.get(o)||null,e,n,t,r,i)),!0}return!1}function Lu(e){var n=kn(e.target);if(n!==null){var t=On(n);if(t!==null){if(n=t.tag,n===13){if(n=zu(t),n!==null){e.blockedOn=n,Tu(e.priority,function(){Ou(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=po(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);lo=r,t.target.dispatchEvent(r),lo=null}else return n=Jt(t),n!==null&&el(n),e.blockedOn=t,!1;n.shift()}return!0}function ql(e,n,t){kr(e)&&t.delete(n)}function nd(){fo=!1,rn!==null&&kr(rn)&&(rn=null),on!==null&&kr(on)&&(on=null),ln!==null&&kr(ln)&&(ln=null),Lt.forEach(ql),jt.forEach(ql)}function pt(e,n){e.blockedOn===n&&(e.blockedOn=null,fo||(fo=!0,he.unstable_scheduleCallback(he.unstable_NormalPriority,nd)))}function Ut(e){function n(i){return pt(i,e)}if(0<ur.length){pt(ur[0],e);for(var t=1;t<ur.length;t++){var r=ur[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&pt(rn,e),on!==null&&pt(on,e),ln!==null&&pt(ln,e),Lt.forEach(n),jt.forEach(n),t=0;t<be.length;t++)r=be[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(t=be[0],t.blockedOn===null);)Lu(t),t.blockedOn===null&&be.shift()}var Xn=Xe.ReactCurrentBatchConfig,Ur=!0;function td(e,n,t,r){var i=R,o=Xn.transition;Xn.transition=null;try{R=1,nl(e,n,t,r)}finally{R=i,Xn.transition=o}}function rd(e,n,t,r){var i=R,o=Xn.transition;Xn.transition=null;try{R=4,nl(e,n,t,r)}finally{R=i,Xn.transition=o}}function nl(e,n,t,r){if(Ur){var i=po(e,n,t,r);if(i===null)ji(e,n,r,Ar,t),Zl(e,r);else if(ed(i,e,n,t,r))r.stopPropagation();else if(Zl(e,r),n&4&&-1<bc.indexOf(e)){for(;i!==null;){var o=Jt(i);if(o!==null&&Mu(o),o=po(e,n,t,r),o===null&&ji(e,n,r,Ar,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else ji(e,n,r,null,t)}}var Ar=null;function po(e,n,t,r){if(Ar=null,e=qo(r),e=kn(e),e!==null)if(n=On(e),n===null)e=null;else if(t=n.tag,t===13){if(e=zu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ar=e,null}function ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wc()){case Jo:return 1;case _u:return 4;case Lr:case Qc:return 16;case Iu:return 536870912;default:return 16}default:return 16}}var nn=null,tl=null,Cr=null;function Uu(){if(Cr)return Cr;var e,n=tl,t=n.length,r,i="value"in nn?nn.value:nn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Cr=i.slice(e,1<r?1-r:void 0)}function zr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Jl(){return!1}function Se(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?sr:Jl,this.isPropagationStopped=Jl,this}return $(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),n}var lt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Se(lt),qt=$({},lt,{view:0,detail:0}),id=Se(qt),_i,Ii,mt,ii=$({},qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mt&&(mt&&e.type==="mousemove"?(_i=e.screenX-mt.screenX,Ii=e.screenY-mt.screenY):Ii=_i=0,mt=e),_i)},movementY:function(e){return"movementY"in e?e.movementY:Ii}}),bl=Se(ii),od=$({},ii,{dataTransfer:0}),ld=Se(od),ad=$({},qt,{relatedTarget:0}),Ni=Se(ad),ud=$({},lt,{animationName:0,elapsedTime:0,pseudoElement:0}),sd=Se(ud),cd=$({},lt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dd=Se(cd),fd=$({},lt,{data:0}),ea=Se(fd),pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vd[e])?!!n[e]:!1}function il(){return gd}var hd=$({},qt,{key:function(e){if(e.key){var n=pd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=Se(hd),Sd=$({},ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),na=Se(Sd),wd=$({},qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),kd=Se(wd),Cd=$({},lt,{propertyName:0,elapsedTime:0,pseudoElement:0}),zd=Se(Cd),xd=$({},ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ed=Se(xd),Pd=[9,13,27,32],ol=Qe&&"CompositionEvent"in window,Et=null;Qe&&"documentMode"in document&&(Et=document.documentMode);var _d=Qe&&"TextEvent"in window&&!Et,Au=Qe&&(!ol||Et&&8<Et&&11>=Et),ta=String.fromCharCode(32),ra=!1;function Fu(e,n){switch(e){case"keyup":return Pd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function Id(e,n){switch(e){case"compositionend":return Bu(n);case"keypress":return n.which!==32?null:(ra=!0,ta);case"textInput":return e=n.data,e===ta&&ra?null:e;default:return null}}function Nd(e,n){if(jn)return e==="compositionend"||!ol&&Fu(e,n)?(e=Uu(),Cr=tl=nn=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Au&&n.locale!=="ko"?null:n.data;default:return null}}var Dd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ia(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Dd[e.type]:n==="textarea"}function $u(e,n,t,r){yu(r),n=Fr(n,"onChange"),0<n.length&&(t=new rl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Pt=null,At=null;function Md(e){Ju(e,0)}function oi(e){var n=Fn(e);if(du(n))return e}function Od(e,n){if(e==="change")return n}var Vu=!1;if(Qe){var Di;if(Qe){var Mi="oninput"in document;if(!Mi){var oa=document.createElement("div");oa.setAttribute("oninput","return;"),Mi=typeof oa.oninput=="function"}Di=Mi}else Di=!1;Vu=Di&&(!document.documentMode||9<document.documentMode)}function la(){Pt&&(Pt.detachEvent("onpropertychange",Hu),At=Pt=null)}function Hu(e){if(e.propertyName==="value"&&oi(At)){var n=[];$u(n,At,e,qo(e)),Cu(Md,n)}}function Rd(e,n,t){e==="focusin"?(la(),Pt=n,At=t,Pt.attachEvent("onpropertychange",Hu)):e==="focusout"&&la()}function Td(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(At)}function Ld(e,n){if(e==="click")return oi(n)}function jd(e,n){if(e==="input"||e==="change")return oi(n)}function Ud(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Te=typeof Object.is=="function"?Object.is:Ud;function Ft(e,n){if(Te(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Yi.call(n,i)||!Te(e[i],n[i]))return!1}return!0}function aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ua(e,n){var t=aa(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=aa(t)}}function Wu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Wu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qu(){for(var e=window,n=Or();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Or(e.document)}return n}function ll(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ad(e){var n=Qu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Wu(t.ownerDocument.documentElement,t)){if(r!==null&&ll(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ua(t,o);var l=ua(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fd=Qe&&"documentMode"in document&&11>=document.documentMode,Un=null,mo=null,_t=null,vo=!1;function sa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;vo||Un==null||Un!==Or(r)||(r=Un,"selectionStart"in r&&ll(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_t&&Ft(_t,r)||(_t=r,r=Fr(mo,"onSelect"),0<r.length&&(n=new rl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Un)))}function cr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var An={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Oi={},Gu={};Qe&&(Gu=document.createElement("div").style,"AnimationEvent"in window||(delete An.animationend.animation,delete An.animationiteration.animation,delete An.animationstart.animation),"TransitionEvent"in window||delete An.transitionend.transition);function li(e){if(Oi[e])return Oi[e];if(!An[e])return e;var n=An[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Gu)return Oi[e]=n[t];return e}var Ku=li("animationend"),Yu=li("animationiteration"),Xu=li("animationstart"),Zu=li("transitionend"),qu=new Map,ca="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,n){qu.set(e,n),Mn(n,[e])}for(var Ri=0;Ri<ca.length;Ri++){var Ti=ca[Ri],Bd=Ti.toLowerCase(),$d=Ti[0].toUpperCase()+Ti.slice(1);mn(Bd,"on"+$d)}mn(Ku,"onAnimationEnd");mn(Yu,"onAnimationIteration");mn(Xu,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Zu,"onTransitionEnd");Jn("onMouseEnter",["mouseout","mouseover"]);Jn("onMouseLeave",["mouseout","mouseover"]);Jn("onPointerEnter",["pointerout","pointerover"]);Jn("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ct="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ct));function da(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Bc(r,n,void 0,e),e.currentTarget=null}function Ju(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;da(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;da(i,a,c),o=u}}}if(Tr)throw e=so,Tr=!1,so=null,e}function L(e,n){var t=n[wo];t===void 0&&(t=n[wo]=new Set);var r=e+"__bubble";t.has(r)||(bu(n,e,2,!1),t.add(r))}function Li(e,n,t){var r=0;n&&(r|=4),bu(t,e,r,n)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Bt(e){if(!e[dr]){e[dr]=!0,lu.forEach(function(t){t!=="selectionchange"&&(Vd.has(t)||Li(t,!1,e),Li(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[dr]||(n[dr]=!0,Li("selectionchange",!1,n))}}function bu(e,n,t,r){switch(ju(n)){case 1:var i=td;break;case 4:i=rd;break;default:i=nl}t=i.bind(null,n,t,e),i=void 0,!uo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function ji(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=kn(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Cu(function(){var c=o,v=qo(t),m=[];e:{var p=qu.get(e);if(p!==void 0){var y=rl,S=e;switch(e){case"keypress":if(zr(t)===0)break e;case"keydown":case"keyup":y=yd;break;case"focusin":S="focus",y=Ni;break;case"focusout":S="blur",y=Ni;break;case"beforeblur":case"afterblur":y=Ni;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=bl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=kd;break;case Ku:case Yu:case Xu:y=sd;break;case Zu:y=zd;break;case"scroll":y=id;break;case"wheel":y=Ed;break;case"copy":case"cut":case"paste":y=dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=na}var w=(n&4)!==0,U=!w&&e==="scroll",d=w?p!==null?p+"Capture":null:p;w=[];for(var s=c,f;s!==null;){f=s;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Tt(s,d),g!=null&&w.push($t(s,g,f)))),U)break;s=s.return}0<w.length&&(p=new y(p,S,null,t,v),m.push({event:p,listeners:w}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&t!==lo&&(S=t.relatedTarget||t.fromElement)&&(kn(S)||S[Ge]))break e;if((y||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,y?(S=t.relatedTarget||t.toElement,y=c,S=S?kn(S):null,S!==null&&(U=On(S),S!==U||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=c),y!==S)){if(w=bl,g="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(w=na,g="onPointerLeave",d="onPointerEnter",s="pointer"),U=y==null?p:Fn(y),f=S==null?p:Fn(S),p=new w(g,s+"leave",y,t,v),p.target=U,p.relatedTarget=f,g=null,kn(v)===c&&(w=new w(d,s+"enter",S,t,v),w.target=f,w.relatedTarget=U,g=w),U=g,y&&S)n:{for(w=y,d=S,s=0,f=w;f;f=Rn(f))s++;for(f=0,g=d;g;g=Rn(g))f++;for(;0<s-f;)w=Rn(w),s--;for(;0<f-s;)d=Rn(d),f--;for(;s--;){if(w===d||d!==null&&w===d.alternate)break n;w=Rn(w),d=Rn(d)}w=null}else w=null;y!==null&&fa(m,p,y,w,!1),S!==null&&U!==null&&fa(m,U,S,w,!0)}}e:{if(p=c?Fn(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var z=Od;else if(ia(p))if(Vu)z=jd;else{z=Td;var E=Rd}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(z=Ld);if(z&&(z=z(e,c))){$u(m,z,t,v);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&no(p,"number",p.value)}switch(E=c?Fn(c):window,e){case"focusin":(ia(E)||E.contentEditable==="true")&&(Un=E,mo=c,_t=null);break;case"focusout":_t=mo=Un=null;break;case"mousedown":vo=!0;break;case"contextmenu":case"mouseup":case"dragend":vo=!1,sa(m,t,v);break;case"selectionchange":if(Fd)break;case"keydown":case"keyup":sa(m,t,v)}var P;if(ol)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else jn?Fu(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Au&&t.locale!=="ko"&&(jn||_!=="onCompositionStart"?_==="onCompositionEnd"&&jn&&(P=Uu()):(nn=v,tl="value"in nn?nn.value:nn.textContent,jn=!0)),E=Fr(c,_),0<E.length&&(_=new ea(_,e,null,t,v),m.push({event:_,listeners:E}),P?_.data=P:(P=Bu(t),P!==null&&(_.data=P)))),(P=_d?Id(e,t):Nd(e,t))&&(c=Fr(c,"onBeforeInput"),0<c.length&&(v=new ea("onBeforeInput","beforeinput",null,t,v),m.push({event:v,listeners:c}),v.data=P))}Ju(m,n)})}function $t(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Fr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Tt(e,t),o!=null&&r.unshift($t(e,o,i)),o=Tt(e,n),o!=null&&r.push($t(e,o,i))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fa(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Tt(t,o),u!=null&&l.unshift($t(t,u,a))):i||(u=Tt(t,o),u!=null&&l.push($t(t,u,a)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Hd=/\r\n?/g,Wd=/\u0000|\uFFFD/g;function pa(e){return(typeof e=="string"?e:""+e).replace(Hd,`
`).replace(Wd,"")}function fr(e,n,t){if(n=pa(n),pa(e)!==n&&t)throw Error(h(425))}function Br(){}var go=null,ho=null;function yo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var So=typeof setTimeout=="function"?setTimeout:void 0,Qd=typeof clearTimeout=="function"?clearTimeout:void 0,ma=typeof Promise=="function"?Promise:void 0,Gd=typeof queueMicrotask=="function"?queueMicrotask:typeof ma<"u"?function(e){return ma.resolve(null).then(e).catch(Kd)}:So;function Kd(e){setTimeout(function(){throw e})}function Ui(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Ut(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Ut(n)}function an(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function va(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var at=Math.random().toString(36).slice(2),Ue="__reactFiber$"+at,Vt="__reactProps$"+at,Ge="__reactContainer$"+at,wo="__reactEvents$"+at,Yd="__reactListeners$"+at,Xd="__reactHandles$"+at;function kn(e){var n=e[Ue];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ge]||t[Ue]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=va(e);e!==null;){if(t=e[Ue])return t;e=va(e)}return n}e=t,t=e.parentNode}return null}function Jt(e){return e=e[Ue]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function ai(e){return e[Vt]||null}var ko=[],Bn=-1;function vn(e){return{current:e}}function j(e){0>Bn||(e.current=ko[Bn],ko[Bn]=null,Bn--)}function T(e,n){Bn++,ko[Bn]=e.current,e.current=n}var pn={},ie=vn(pn),de=vn(!1),Pn=pn;function bn(e,n){var t=e.type.contextTypes;if(!t)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function fe(e){return e=e.childContextTypes,e!=null}function $r(){j(de),j(ie)}function ga(e,n,t){if(ie.current!==pn)throw Error(h(168));T(ie,n),T(de,t)}function es(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(h(108,Rc(e)||"Unknown",i));return $({},t,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,Pn=ie.current,T(ie,e),T(de,de.current),!0}function ha(e,n,t){var r=e.stateNode;if(!r)throw Error(h(169));t?(e=es(e,n,Pn),r.__reactInternalMemoizedMergedChildContext=e,j(de),j(ie),T(ie,e)):j(de),T(de,t)}var $e=null,ui=!1,Ai=!1;function ns(e){$e===null?$e=[e]:$e.push(e)}function Zd(e){ui=!0,ns(e)}function gn(){if(!Ai&&$e!==null){Ai=!0;var e=0,n=R;try{var t=$e;for(R=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}$e=null,ui=!1}catch(i){throw $e!==null&&($e=$e.slice(e+1)),Pu(Jo,gn),i}finally{R=n,Ai=!1}}return null}var $n=[],Vn=0,Hr=null,Wr=0,we=[],ke=0,_n=null,Ve=1,He="";function Sn(e,n){$n[Vn++]=Wr,$n[Vn++]=Hr,Hr=e,Wr=n}function ts(e,n,t){we[ke++]=Ve,we[ke++]=He,we[ke++]=_n,_n=e;var r=Ve;e=He;var i=32-Oe(r)-1;r&=~(1<<i),t+=1;var o=32-Oe(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ve=1<<32-Oe(n)+i|t<<i|r,He=o+e}else Ve=1<<o|t<<i|r,He=e}function al(e){e.return!==null&&(Sn(e,1),ts(e,1,0))}function ul(e){for(;e===Hr;)Hr=$n[--Vn],$n[Vn]=null,Wr=$n[--Vn],$n[Vn]=null;for(;e===_n;)_n=we[--ke],we[ke]=null,He=we[--ke],we[ke]=null,Ve=we[--ke],we[ke]=null}var ge=null,ve=null,A=!1,Me=null;function rs(e,n){var t=Ce(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ya(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,ve=an(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=_n!==null?{id:Ve,overflow:He}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ce(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,ve=null,!0):!1;default:return!1}}function Co(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zo(e){if(A){var n=ve;if(n){var t=n;if(!ya(e,n)){if(Co(e))throw Error(h(418));n=an(t.nextSibling);var r=ge;n&&ya(e,n)?rs(r,t):(e.flags=e.flags&-4097|2,A=!1,ge=e)}}else{if(Co(e))throw Error(h(418));e.flags=e.flags&-4097|2,A=!1,ge=e}}}function Sa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function pr(e){if(e!==ge)return!1;if(!A)return Sa(e),A=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!yo(e.type,e.memoizedProps)),n&&(n=ve)){if(Co(e))throw is(),Error(h(418));for(;n;)rs(e,n),n=an(n.nextSibling)}if(Sa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ve=an(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=ge?an(e.stateNode.nextSibling):null;return!0}function is(){for(var e=ve;e;)e=an(e.nextSibling)}function et(){ve=ge=null,A=!1}function sl(e){Me===null?Me=[e]:Me.push(e)}var qd=Xe.ReactCurrentBatchConfig;function vt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(h(309));var r=t.stateNode}if(!r)throw Error(h(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(h(284));if(!t._owner)throw Error(h(290,e))}return e}function mr(e,n){throw e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function wa(e){var n=e._init;return n(e._payload)}function os(e){function n(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function t(d,s){if(!e)return null;for(;s!==null;)n(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function i(d,s){return d=dn(d,s),d.index=0,d.sibling=null,d}function o(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=2,s):f):(d.flags|=2,s)):(d.flags|=1048576,s)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,s,f,g){return s===null||s.tag!==6?(s=Qi(f,d.mode,g),s.return=d,s):(s=i(s,f),s.return=d,s)}function u(d,s,f,g){var z=f.type;return z===Ln?v(d,s,f.props.children,g,f.key):s!==null&&(s.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===qe&&wa(z)===s.type)?(g=i(s,f.props),g.ref=vt(d,s,f),g.return=d,g):(g=Dr(f.type,f.key,f.props,null,d.mode,g),g.ref=vt(d,s,f),g.return=d,g)}function c(d,s,f,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=Gi(f,d.mode,g),s.return=d,s):(s=i(s,f.children||[]),s.return=d,s)}function v(d,s,f,g,z){return s===null||s.tag!==7?(s=En(f,d.mode,g,z),s.return=d,s):(s=i(s,f),s.return=d,s)}function m(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Qi(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case rr:return f=Dr(s.type,s.key,s.props,null,d.mode,f),f.ref=vt(d,null,s),f.return=d,f;case Tn:return s=Gi(s,d.mode,f),s.return=d,s;case qe:var g=s._init;return m(d,g(s._payload),f)}if(wt(s)||ct(s))return s=En(s,d.mode,f,null),s.return=d,s;mr(d,s)}return null}function p(d,s,f,g){var z=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return z!==null?null:a(d,s,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:return f.key===z?u(d,s,f,g):null;case Tn:return f.key===z?c(d,s,f,g):null;case qe:return z=f._init,p(d,s,z(f._payload),g)}if(wt(f)||ct(f))return z!==null?null:v(d,s,f,g,null);mr(d,f)}return null}function y(d,s,f,g,z){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,a(s,d,""+g,z);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rr:return d=d.get(g.key===null?f:g.key)||null,u(s,d,g,z);case Tn:return d=d.get(g.key===null?f:g.key)||null,c(s,d,g,z);case qe:var E=g._init;return y(d,s,f,E(g._payload),z)}if(wt(g)||ct(g))return d=d.get(f)||null,v(s,d,g,z,null);mr(s,g)}return null}function S(d,s,f,g){for(var z=null,E=null,P=s,_=s=0,H=null;P!==null&&_<f.length;_++){P.index>_?(H=P,P=null):H=P.sibling;var M=p(d,P,f[_],g);if(M===null){P===null&&(P=H);break}e&&P&&M.alternate===null&&n(d,P),s=o(M,s,_),E===null?z=M:E.sibling=M,E=M,P=H}if(_===f.length)return t(d,P),A&&Sn(d,_),z;if(P===null){for(;_<f.length;_++)P=m(d,f[_],g),P!==null&&(s=o(P,s,_),E===null?z=P:E.sibling=P,E=P);return A&&Sn(d,_),z}for(P=r(d,P);_<f.length;_++)H=y(P,d,_,f[_],g),H!==null&&(e&&H.alternate!==null&&P.delete(H.key===null?_:H.key),s=o(H,s,_),E===null?z=H:E.sibling=H,E=H);return e&&P.forEach(function(Pe){return n(d,Pe)}),A&&Sn(d,_),z}function w(d,s,f,g){var z=ct(f);if(typeof z!="function")throw Error(h(150));if(f=z.call(f),f==null)throw Error(h(151));for(var E=z=null,P=s,_=s=0,H=null,M=f.next();P!==null&&!M.done;_++,M=f.next()){P.index>_?(H=P,P=null):H=P.sibling;var Pe=p(d,P,M.value,g);if(Pe===null){P===null&&(P=H);break}e&&P&&Pe.alternate===null&&n(d,P),s=o(Pe,s,_),E===null?z=Pe:E.sibling=Pe,E=Pe,P=H}if(M.done)return t(d,P),A&&Sn(d,_),z;if(P===null){for(;!M.done;_++,M=f.next())M=m(d,M.value,g),M!==null&&(s=o(M,s,_),E===null?z=M:E.sibling=M,E=M);return A&&Sn(d,_),z}for(P=r(d,P);!M.done;_++,M=f.next())M=y(P,d,_,M.value,g),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?_:M.key),s=o(M,s,_),E===null?z=M:E.sibling=M,E=M);return e&&P.forEach(function(ut){return n(d,ut)}),A&&Sn(d,_),z}function U(d,s,f,g){if(typeof f=="object"&&f!==null&&f.type===Ln&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:e:{for(var z=f.key,E=s;E!==null;){if(E.key===z){if(z=f.type,z===Ln){if(E.tag===7){t(d,E.sibling),s=i(E,f.props.children),s.return=d,d=s;break e}}else if(E.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===qe&&wa(z)===E.type){t(d,E.sibling),s=i(E,f.props),s.ref=vt(d,E,f),s.return=d,d=s;break e}t(d,E);break}else n(d,E);E=E.sibling}f.type===Ln?(s=En(f.props.children,d.mode,g,f.key),s.return=d,d=s):(g=Dr(f.type,f.key,f.props,null,d.mode,g),g.ref=vt(d,s,f),g.return=d,d=g)}return l(d);case Tn:e:{for(E=f.key;s!==null;){if(s.key===E)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){t(d,s.sibling),s=i(s,f.children||[]),s.return=d,d=s;break e}else{t(d,s);break}else n(d,s);s=s.sibling}s=Gi(f,d.mode,g),s.return=d,d=s}return l(d);case qe:return E=f._init,U(d,s,E(f._payload),g)}if(wt(f))return S(d,s,f,g);if(ct(f))return w(d,s,f,g);mr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(t(d,s.sibling),s=i(s,f),s.return=d,d=s):(t(d,s),s=Qi(f,d.mode,g),s.return=d,d=s),l(d)):t(d,s)}return U}var nt=os(!0),ls=os(!1),Qr=vn(null),Gr=null,Hn=null,cl=null;function dl(){cl=Hn=Gr=null}function fl(e){var n=Qr.current;j(Qr),e._currentValue=n}function xo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Zn(e,n){Gr=e,cl=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ce=!0),e.firstContext=null)}function xe(e){var n=e._currentValue;if(cl!==e)if(e={context:e,memoizedValue:n,next:null},Hn===null){if(Gr===null)throw Error(h(308));Hn=e,Gr.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return n}var Cn=null;function pl(e){Cn===null?Cn=[e]:Cn.push(e)}function as(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,pl(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ke(e,r)}function Ke(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Je=!1;function ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function us(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ke(e,t)}return i=r.interleaved,i===null?(n.next=n,pl(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ke(e,t)}function xr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,bo(e,t)}}function ka(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Kr(e,n,t,r){var i=e.updateQueue;Je=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==l&&(a===null?v.firstBaseUpdate=c:a.next=c,v.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,v=c=u=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){v!==null&&(v=v.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,w=a;switch(p=n,y=t,w.tag){case 1:if(S=w.payload,typeof S=="function"){m=S.call(y,m,p);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,p=typeof S=="function"?S.call(y,m,p):S,p==null)break e;m=$({},m,p);break e;case 2:Je=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(c=v=y,u=m):v=v.next=y,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(v===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Nn|=l,e.lanes=l,e.memoizedState=m}}function Ca(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(h(191,i));i.call(r)}}}var bt={},Fe=vn(bt),Ht=vn(bt),Wt=vn(bt);function zn(e){if(e===bt)throw Error(h(174));return e}function vl(e,n){switch(T(Wt,n),T(Ht,e),T(Fe,bt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ro(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ro(n,e)}j(Fe),T(Fe,n)}function tt(){j(Fe),j(Ht),j(Wt)}function ss(e){zn(Wt.current);var n=zn(Fe.current),t=ro(n,e.type);n!==t&&(T(Ht,e),T(Fe,t))}function gl(e){Ht.current===e&&(j(Fe),j(Ht))}var F=vn(0);function Yr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fi=[];function hl(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var Er=Xe.ReactCurrentDispatcher,Bi=Xe.ReactCurrentBatchConfig,In=0,B=null,K=null,Z=null,Xr=!1,It=!1,Qt=0,Jd=0;function ne(){throw Error(h(321))}function yl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Te(e[t],n[t]))return!1;return!0}function Sl(e,n,t,r,i,o){if(In=o,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Er.current=e===null||e.memoizedState===null?tf:rf,e=t(r,i),It){o=0;do{if(It=!1,Qt=0,25<=o)throw Error(h(301));o+=1,Z=K=null,n.updateQueue=null,Er.current=of,e=t(r,i)}while(It)}if(Er.current=Zr,n=K!==null&&K.next!==null,In=0,Z=K=B=null,Xr=!1,n)throw Error(h(300));return e}function wl(){var e=Qt!==0;return Qt=0,e}function je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?B.memoizedState=Z=e:Z=Z.next=e,Z}function Ee(){if(K===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=Z===null?B.memoizedState:Z.next;if(n!==null)Z=n,K=e;else{if(e===null)throw Error(h(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?B.memoizedState=Z=e:Z=Z.next=e}return Z}function Gt(e,n){return typeof n=="function"?n(e):n}function $i(e){var n=Ee(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=K,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,c=o;do{var v=c.lane;if((In&v)===v)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,l=r):u=u.next=m,B.lanes|=v,Nn|=v}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=a,Te(r,n.memoizedState)||(ce=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,B.lanes|=o,Nn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Vi(e){var n=Ee(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Te(o,n.memoizedState)||(ce=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function cs(){}function ds(e,n){var t=B,r=Ee(),i=n(),o=!Te(r.memoizedState,i);if(o&&(r.memoizedState=i,ce=!0),r=r.queue,kl(ms.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,Kt(9,ps.bind(null,t,r,i,n),void 0,null),q===null)throw Error(h(349));In&30||fs(t,n,i)}return i}function fs(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ps(e,n,t,r){n.value=t,n.getSnapshot=r,vs(n)&&gs(e)}function ms(e,n,t){return t(function(){vs(n)&&gs(e)})}function vs(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Te(e,t)}catch{return!0}}function gs(e){var n=Ke(e,1);n!==null&&Re(n,e,1,-1)}function za(e){var n=je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},n.queue=e,e=e.dispatch=nf.bind(null,B,e),[n.memoizedState,e]}function Kt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function hs(){return Ee().memoizedState}function Pr(e,n,t,r){var i=je();B.flags|=e,i.memoizedState=Kt(1|n,t,void 0,r===void 0?null:r)}function si(e,n,t,r){var i=Ee();r=r===void 0?null:r;var o=void 0;if(K!==null){var l=K.memoizedState;if(o=l.destroy,r!==null&&yl(r,l.deps)){i.memoizedState=Kt(n,t,o,r);return}}B.flags|=e,i.memoizedState=Kt(1|n,t,o,r)}function xa(e,n){return Pr(8390656,8,e,n)}function kl(e,n){return si(2048,8,e,n)}function ys(e,n){return si(4,2,e,n)}function Ss(e,n){return si(4,4,e,n)}function ws(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ks(e,n,t){return t=t!=null?t.concat([e]):null,si(4,4,ws.bind(null,n,e),t)}function Cl(){}function Cs(e,n){var t=Ee();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function zs(e,n){var t=Ee();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function xs(e,n,t){return In&21?(Te(t,n)||(t=Nu(),B.lanes|=t,Nn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=t)}function bd(e,n){var t=R;R=t!==0&&4>t?t:4,e(!0);var r=Bi.transition;Bi.transition={};try{e(!1),n()}finally{R=t,Bi.transition=r}}function Es(){return Ee().memoizedState}function ef(e,n,t){var r=cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ps(e))_s(n,t);else if(t=as(e,n,t,r),t!==null){var i=le();Re(t,e,r,i),Is(t,n,r)}}function nf(e,n,t){var r=cn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))_s(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,a=o(l,t);if(i.hasEagerState=!0,i.eagerState=a,Te(a,l)){var u=n.interleaved;u===null?(i.next=i,pl(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=as(e,n,i,r),t!==null&&(i=le(),Re(t,e,r,i),Is(t,n,r))}}function Ps(e){var n=e.alternate;return e===B||n!==null&&n===B}function _s(e,n){It=Xr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Is(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,bo(e,t)}}var Zr={readContext:xe,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},tf={readContext:xe,useCallback:function(e,n){return je().memoizedState=[e,n===void 0?null:n],e},useContext:xe,useEffect:xa,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Pr(4194308,4,ws.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Pr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Pr(4,2,e,n)},useMemo:function(e,n){var t=je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=je();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ef.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var n=je();return e={current:e},n.memoizedState=e},useState:za,useDebugValue:Cl,useDeferredValue:function(e){return je().memoizedState=e},useTransition:function(){var e=za(!1),n=e[0];return e=bd.bind(null,e[1]),je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=B,i=je();if(A){if(t===void 0)throw Error(h(407));t=t()}else{if(t=n(),q===null)throw Error(h(349));In&30||fs(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,xa(ms.bind(null,r,o,e),[e]),r.flags|=2048,Kt(9,ps.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=je(),n=q.identifierPrefix;if(A){var t=He,r=Ve;t=(r&~(1<<32-Oe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Qt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Jd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rf={readContext:xe,useCallback:Cs,useContext:xe,useEffect:kl,useImperativeHandle:ks,useInsertionEffect:ys,useLayoutEffect:Ss,useMemo:zs,useReducer:$i,useRef:hs,useState:function(){return $i(Gt)},useDebugValue:Cl,useDeferredValue:function(e){var n=Ee();return xs(n,K.memoizedState,e)},useTransition:function(){var e=$i(Gt)[0],n=Ee().memoizedState;return[e,n]},useMutableSource:cs,useSyncExternalStore:ds,useId:Es,unstable_isNewReconciler:!1},of={readContext:xe,useCallback:Cs,useContext:xe,useEffect:kl,useImperativeHandle:ks,useInsertionEffect:ys,useLayoutEffect:Ss,useMemo:zs,useReducer:Vi,useRef:hs,useState:function(){return Vi(Gt)},useDebugValue:Cl,useDeferredValue:function(e){var n=Ee();return K===null?n.memoizedState=e:xs(n,K.memoizedState,e)},useTransition:function(){var e=Vi(Gt)[0],n=Ee().memoizedState;return[e,n]},useMutableSource:cs,useSyncExternalStore:ds,useId:Es,unstable_isNewReconciler:!1};function Ie(e,n){if(e&&e.defaultProps){n=$({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Eo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:$({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ci={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=le(),i=cn(e),o=We(r,i);o.payload=n,t!=null&&(o.callback=t),n=un(e,o,i),n!==null&&(Re(n,e,i,r),xr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=le(),i=cn(e),o=We(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=un(e,o,i),n!==null&&(Re(n,e,i,r),xr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=le(),r=cn(e),i=We(t,r);i.tag=2,n!=null&&(i.callback=n),n=un(e,i,r),n!==null&&(Re(n,e,r,t),xr(n,e,r))}};function Ea(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!Ft(t,r)||!Ft(i,o):!0}function Ns(e,n,t){var r=!1,i=pn,o=n.contextType;return typeof o=="object"&&o!==null?o=xe(o):(i=fe(n)?Pn:ie.current,r=n.contextTypes,o=(r=r!=null)?bn(e,i):pn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ci,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Pa(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ci.enqueueReplaceState(n,n.state,null)}function Po(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ml(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=xe(o):(o=fe(n)?Pn:ie.current,i.context=bn(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Eo(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ci.enqueueReplaceState(i,i.state,null),Kr(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function rt(e,n){try{var t="",r=n;do t+=Oc(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function Hi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function _o(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function Ds(e,n,t){t=We(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Jr||(Jr=!0,Uo=r),_o(e,n)},t}function Ms(e,n,t){t=We(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){_o(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){_o(e,n),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function _a(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new lf;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=wf.bind(null,e,n,t),n.then(e,e))}function Ia(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Na(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=We(-1,1),n.tag=2,un(t,n,1))),t.lanes|=1),e)}var af=Xe.ReactCurrentOwner,ce=!1;function oe(e,n,t,r){n.child=e===null?ls(n,null,t,r):nt(n,e.child,t,r)}function Da(e,n,t,r,i){t=t.render;var o=n.ref;return Zn(n,i),r=Sl(e,n,t,r,o,i),t=wl(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ye(e,n,i)):(A&&t&&al(n),n.flags|=1,oe(e,n,r,i),n.child)}function Ma(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Dl(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Os(e,n,o,r,i)):(e=Dr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:Ft,t(l,r)&&e.ref===n.ref)return Ye(e,n,i)}return n.flags|=1,e=dn(o,r),e.ref=n.ref,e.return=n,n.child=e}function Os(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Ft(o,r)&&e.ref===n.ref)if(ce=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ce=!0);else return n.lanes=e.lanes,Ye(e,n,i)}return Io(e,n,t,r,i)}function Rs(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},T(Qn,me),me|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,T(Qn,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,T(Qn,me),me|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,T(Qn,me),me|=r;return oe(e,n,i,t),n.child}function Ts(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Io(e,n,t,r,i){var o=fe(t)?Pn:ie.current;return o=bn(n,o),Zn(n,i),t=Sl(e,n,t,r,o,i),r=wl(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ye(e,n,i)):(A&&r&&al(n),n.flags|=1,oe(e,n,t,i),n.child)}function Oa(e,n,t,r,i){if(fe(t)){var o=!0;Vr(n)}else o=!1;if(Zn(n,i),n.stateNode===null)_r(e,n),Ns(n,t,r),Po(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var u=l.context,c=t.contextType;typeof c=="object"&&c!==null?c=xe(c):(c=fe(t)?Pn:ie.current,c=bn(n,c));var v=t.getDerivedStateFromProps,m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Pa(n,l,r,c),Je=!1;var p=n.memoizedState;l.state=p,Kr(n,r,l,i),u=n.memoizedState,a!==r||p!==u||de.current||Je?(typeof v=="function"&&(Eo(n,t,v,r),u=n.memoizedState),(a=Je||Ea(n,t,a,r,p,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,us(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Ie(n.type,a),l.props=c,m=n.pendingProps,p=l.context,u=t.contextType,typeof u=="object"&&u!==null?u=xe(u):(u=fe(t)?Pn:ie.current,u=bn(n,u));var y=t.getDerivedStateFromProps;(v=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||p!==u)&&Pa(n,l,r,u),Je=!1,p=n.memoizedState,l.state=p,Kr(n,r,l,i);var S=n.memoizedState;a!==m||p!==S||de.current||Je?(typeof y=="function"&&(Eo(n,t,y,r),S=n.memoizedState),(c=Je||Ea(n,t,c,r,p,S,u)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),l.props=r,l.state=S,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return No(e,n,t,r,o,i)}function No(e,n,t,r,i,o){Ts(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&ha(n,t,!1),Ye(e,n,o);r=n.stateNode,af.current=n;var a=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=nt(n,e.child,null,o),n.child=nt(n,null,a,o)):oe(e,n,a,o),n.memoizedState=r.state,i&&ha(n,t,!0),n.child}function Ls(e){var n=e.stateNode;n.pendingContext?ga(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ga(e,n.context,!1),vl(e,n.containerInfo)}function Ra(e,n,t,r,i){return et(),sl(i),n.flags|=256,oe(e,n,t,r),n.child}var Do={dehydrated:null,treeContext:null,retryLane:0};function Mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function js(e,n,t){var r=n.pendingProps,i=F.current,o=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),T(F,i&1),e===null)return zo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=pi(l,r,0,null),e=En(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Mo(t),n.memoizedState=Do,e):zl(n,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return uf(e,n,l,r,a,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=dn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=dn(a,o):(o=En(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?Mo(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=Do,r}return o=e.child,e=o.sibling,r=dn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function zl(e,n){return n=pi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function vr(e,n,t,r){return r!==null&&sl(r),nt(n,e.child,null,t),e=zl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function uf(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=Hi(Error(h(422))),vr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=pi({mode:"visible",children:r.children},i,0,null),o=En(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&nt(n,e.child,null,l),n.child.memoizedState=Mo(l),n.memoizedState=Do,o);if(!(n.mode&1))return vr(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(h(419)),r=Hi(o,r,void 0),vr(e,n,l,r)}if(a=(l&e.childLanes)!==0,ce||a){if(r=q,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ke(e,i),Re(r,e,i,-1))}return Nl(),r=Hi(Error(h(421))),vr(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=kf.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,ve=an(i.nextSibling),ge=n,A=!0,Me=null,e!==null&&(we[ke++]=Ve,we[ke++]=He,we[ke++]=_n,Ve=e.id,He=e.overflow,_n=n),n=zl(n,r.children),n.flags|=4096,n)}function Ta(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),xo(e.return,n,t)}function Wi(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Us(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(oe(e,n,r.children,t),r=F.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ta(e,t,n);else if(e.tag===19)Ta(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(T(F,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Yr(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Wi(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Yr(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Wi(n,!0,t,null,o);break;case"together":Wi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _r(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ye(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Nn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,t=dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function sf(e,n,t){switch(n.tag){case 3:Ls(n),et();break;case 5:ss(n);break;case 1:fe(n.type)&&Vr(n);break;case 4:vl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;T(Qr,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(T(F,F.current&1),n.flags|=128,null):t&n.child.childLanes?js(e,n,t):(T(F,F.current&1),e=Ye(e,n,t),e!==null?e.sibling:null);T(F,F.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Us(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),T(F,F.current),r)break;return null;case 22:case 23:return n.lanes=0,Rs(e,n,t)}return Ye(e,n,t)}var As,Oo,Fs,Bs;As=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Oo=function(){};Fs=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,zn(Fe.current);var o=null;switch(t){case"input":i=bi(e,i),r=bi(e,r),o=[];break;case"select":i=$({},i,{value:void 0}),r=$({},r,{value:void 0}),o=[];break;case"textarea":i=to(e,i),r=to(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Br)}io(t,r);var l;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ot.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(t||(t={}),t[l]=u[l])}else t||(o||(o=[]),o.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ot.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&L("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}t&&(o=o||[]).push("style",t);var c=o;(n.updateQueue=c)&&(n.flags|=4)}};Bs=function(e,n,t,r){t!==r&&(n.flags|=4)};function gt(e,n){if(!A)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function cf(e,n,t){var r=n.pendingProps;switch(ul(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return fe(n.type)&&$r(),te(n),null;case 3:return r=n.stateNode,tt(),j(de),j(ie),hl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(Bo(Me),Me=null))),Oo(e,n),te(n),null;case 5:gl(n);var i=zn(Wt.current);if(t=n.type,e!==null&&n.stateNode!=null)Fs(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(h(166));return te(n),null}if(e=zn(Fe.current),pr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Ue]=n,r[Vt]=o,e=(n.mode&1)!==0,t){case"dialog":L("cancel",r),L("close",r);break;case"iframe":case"object":case"embed":L("load",r);break;case"video":case"audio":for(i=0;i<Ct.length;i++)L(Ct[i],r);break;case"source":L("error",r);break;case"img":case"image":case"link":L("error",r),L("load",r);break;case"details":L("toggle",r);break;case"input":Hl(r,o),L("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},L("invalid",r);break;case"textarea":Ql(r,o),L("invalid",r)}io(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&fr(r.textContent,a,e),i=["children",""+a]):Ot.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&L("scroll",r)}switch(t){case"input":ir(r),Wl(r,o,!0);break;case"textarea":ir(r),Gl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Br)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Ue]=n,e[Vt]=r,As(e,n,!1,!1),n.stateNode=e;e:{switch(l=oo(t,r),t){case"dialog":L("cancel",e),L("close",e),i=r;break;case"iframe":case"object":case"embed":L("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ct.length;i++)L(Ct[i],e);i=r;break;case"source":L("error",e),i=r;break;case"img":case"image":case"link":L("error",e),L("load",e),i=r;break;case"details":L("toggle",e),i=r;break;case"input":Hl(e,r),i=bi(e,r),L("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$({},r,{value:void 0}),L("invalid",e);break;case"textarea":Ql(e,r),i=to(e,r),L("invalid",e);break;default:i=r}io(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?hu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vu(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Rt(e,u):typeof u=="number"&&Rt(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ot.hasOwnProperty(o)?u!=null&&o==="onScroll"&&L("scroll",e):u!=null&&Ko(e,o,u,l))}switch(t){case"input":ir(e),Wl(e,r,!1);break;case"textarea":ir(e),Gl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Br)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)Bs(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(h(166));if(t=zn(Wt.current),zn(Fe.current),pr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ue]=n,(o=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:fr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ue]=n,n.stateNode=r}return te(n),null;case 13:if(j(F),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ve!==null&&n.mode&1&&!(n.flags&128))is(),et(),n.flags|=98560,o=!1;else if(o=pr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(h(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(h(317));o[Ue]=n}else et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),o=!1}else Me!==null&&(Bo(Me),Me=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?Y===0&&(Y=3):Nl())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return tt(),Oo(e,n),e===null&&Bt(n.stateNode.containerInfo),te(n),null;case 10:return fl(n.type._context),te(n),null;case 17:return fe(n.type)&&$r(),te(n),null;case 19:if(j(F),o=n.memoizedState,o===null)return te(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)gt(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Yr(e),l!==null){for(n.flags|=128,gt(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return T(F,F.current&1|2),n.child}e=e.sibling}o.tail!==null&&Q()>it&&(n.flags|=128,r=!0,gt(o,!1),n.lanes=4194304)}else{if(!r)if(e=Yr(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),gt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!A)return te(n),null}else 2*Q()-o.renderingStartTime>it&&t!==1073741824&&(n.flags|=128,r=!0,gt(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Q(),n.sibling=null,t=F.current,T(F,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return Il(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(h(156,n.tag))}function df(e,n){switch(ul(n),n.tag){case 1:return fe(n.type)&&$r(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(),j(de),j(ie),hl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return gl(n),null;case 13:if(j(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(F),null;case 4:return tt(),null;case 10:return fl(n.type._context),null;case 22:case 23:return Il(),null;case 24:return null;default:return null}}var gr=!1,re=!1,ff=typeof WeakSet=="function"?WeakSet:Set,C=null;function Wn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function Ro(e,n,t){try{t()}catch(r){V(e,n,r)}}var La=!1;function pf(e,n){if(go=Ur,e=Qu(),ll(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,a=-1,u=-1,c=0,v=0,m=e,p=null;n:for(;;){for(var y;m!==t||i!==0&&m.nodeType!==3||(a=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break n;if(p===t&&++c===i&&(a=l),p===o&&++v===r&&(u=l),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(ho={focusedElem:e,selectionRange:t},Ur=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,U=S.memoizedState,d=n.stateNode,s=d.getSnapshotBeforeUpdate(n.elementType===n.type?w:Ie(n.type,w),U);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(g){V(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return S=La,La=!1,S}function Nt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ro(n,t,o)}i=i.next}while(i!==r)}}function di(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function To(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function $s(e){var n=e.alternate;n!==null&&(e.alternate=null,$s(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ue],delete n[Vt],delete n[wo],delete n[Yd],delete n[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vs(e){return e.tag===5||e.tag===3||e.tag===4}function ja(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Br));else if(r!==4&&(e=e.child,e!==null))for(Lo(e,n,t),e=e.sibling;e!==null;)Lo(e,n,t),e=e.sibling}function jo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jo(e,n,t),e=e.sibling;e!==null;)jo(e,n,t),e=e.sibling}var J=null,Ne=!1;function Ze(e,n,t){for(t=t.child;t!==null;)Hs(e,n,t),t=t.sibling}function Hs(e,n,t){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(ri,t)}catch{}switch(t.tag){case 5:re||Wn(t,n);case 6:var r=J,i=Ne;J=null,Ze(e,n,t),J=r,Ne=i,J!==null&&(Ne?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(Ne?(e=J,t=t.stateNode,e.nodeType===8?Ui(e.parentNode,t):e.nodeType===1&&Ui(e,t),Ut(e)):Ui(J,t.stateNode));break;case 4:r=J,i=Ne,J=t.stateNode.containerInfo,Ne=!0,Ze(e,n,t),J=r,Ne=i;break;case 0:case 11:case 14:case 15:if(!re&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ro(t,n,l),i=i.next}while(i!==r)}Ze(e,n,t);break;case 1:if(!re&&(Wn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){V(t,n,a)}Ze(e,n,t);break;case 21:Ze(e,n,t);break;case 22:t.mode&1?(re=(r=re)||t.memoizedState!==null,Ze(e,n,t),re=r):Ze(e,n,t);break;default:Ze(e,n,t)}}function Ua(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ff),n.forEach(function(r){var i=Cf.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function _e(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:J=a.stateNode,Ne=!1;break e;case 3:J=a.stateNode.containerInfo,Ne=!0;break e;case 4:J=a.stateNode.containerInfo,Ne=!0;break e}a=a.return}if(J===null)throw Error(h(160));Hs(o,l,i),J=null,Ne=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){V(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ws(n,e),n=n.sibling}function Ws(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(n,e),Le(e),r&4){try{Nt(3,e,e.return),di(3,e)}catch(w){V(e,e.return,w)}try{Nt(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:_e(n,e),Le(e),r&512&&t!==null&&Wn(t,t.return);break;case 5:if(_e(n,e),Le(e),r&512&&t!==null&&Wn(t,t.return),e.flags&32){var i=e.stateNode;try{Rt(i,"")}catch(w){V(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&fu(i,o),oo(a,l);var c=oo(a,o);for(l=0;l<u.length;l+=2){var v=u[l],m=u[l+1];v==="style"?hu(i,m):v==="dangerouslySetInnerHTML"?vu(i,m):v==="children"?Rt(i,m):Ko(i,v,m,c)}switch(a){case"input":eo(i,o);break;case"textarea":pu(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Gn(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Gn(i,!!o.multiple,o.defaultValue,!0):Gn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Vt]=o}catch(w){V(e,e.return,w)}}break;case 6:if(_e(n,e),Le(e),r&4){if(e.stateNode===null)throw Error(h(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){V(e,e.return,w)}}break;case 3:if(_e(n,e),Le(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ut(n.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:_e(n,e),Le(e);break;case 13:_e(n,e),Le(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Pl=Q())),r&4&&Ua(e);break;case 22:if(v=t!==null&&t.memoizedState!==null,e.mode&1?(re=(c=re)||v,_e(n,e),re=c):_e(n,e),Le(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(C=e,v=e.child;v!==null;){for(m=C=v;C!==null;){switch(p=C,y=p.child,p.tag){case 0:case 11:case 14:case 15:Nt(4,p,p.return);break;case 1:Wn(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(w){V(r,t,w)}}break;case 5:Wn(p,p.return);break;case 22:if(p.memoizedState!==null){Fa(m);continue}}y!==null?(y.return=p,C=y):Fa(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=gu("display",l))}catch(w){V(e,e.return,w)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){V(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:_e(n,e),Le(e),r&4&&Ua(e);break;case 21:break;default:_e(n,e),Le(e)}}function Le(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Vs(t)){var r=t;break e}t=t.return}throw Error(h(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rt(i,""),r.flags&=-33);var o=ja(e);jo(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=ja(e);Lo(e,a,l);break;default:throw Error(h(161))}}catch(u){V(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mf(e,n,t){C=e,Qs(e)}function Qs(e,n,t){for(var r=(e.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||gr;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||re;a=gr;var c=re;if(gr=l,(re=u)&&!c)for(C=i;C!==null;)l=C,u=l.child,l.tag===22&&l.memoizedState!==null?Ba(i):u!==null?(u.return=l,C=u):Ba(i);for(;o!==null;)C=o,Qs(o),o=o.sibling;C=i,gr=a,re=c}Aa(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):Aa(e)}}function Aa(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||di(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!re)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Ie(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Ca(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ca(n,l,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Ut(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}re||n.flags&512&&To(n)}catch(p){V(n,n.return,p)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function Fa(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function Ba(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{di(4,n)}catch(u){V(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){V(n,i,u)}}var o=n.return;try{To(n)}catch(u){V(n,o,u)}break;case 5:var l=n.return;try{To(n)}catch(u){V(n,l,u)}}}catch(u){V(n,n.return,u)}if(n===e){C=null;break}var a=n.sibling;if(a!==null){a.return=n.return,C=a;break}C=n.return}}var vf=Math.ceil,qr=Xe.ReactCurrentDispatcher,xl=Xe.ReactCurrentOwner,ze=Xe.ReactCurrentBatchConfig,O=0,q=null,G=null,b=0,me=0,Qn=vn(0),Y=0,Yt=null,Nn=0,fi=0,El=0,Dt=null,se=null,Pl=0,it=1/0,Be=null,Jr=!1,Uo=null,sn=null,hr=!1,tn=null,br=0,Mt=0,Ao=null,Ir=-1,Nr=0;function le(){return O&6?Q():Ir!==-1?Ir:Ir=Q()}function cn(e){return e.mode&1?O&2&&b!==0?b&-b:qd.transition!==null?(Nr===0&&(Nr=Nu()),Nr):(e=R,e!==0||(e=window.event,e=e===void 0?16:ju(e.type)),e):1}function Re(e,n,t,r){if(50<Mt)throw Mt=0,Ao=null,Error(h(185));Zt(e,t,r),(!(O&2)||e!==q)&&(e===q&&(!(O&2)&&(fi|=t),Y===4&&en(e,b)),pe(e,r),t===1&&O===0&&!(n.mode&1)&&(it=Q()+500,ui&&gn()))}function pe(e,n){var t=e.callbackNode;qc(e,n);var r=jr(e,e===q?b:0);if(r===0)t!==null&&Xl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Xl(t),n===1)e.tag===0?Zd($a.bind(null,e)):ns($a.bind(null,e)),Gd(function(){!(O&6)&&gn()}),t=null;else{switch(Du(r)){case 1:t=Jo;break;case 4:t=_u;break;case 16:t=Lr;break;case 536870912:t=Iu;break;default:t=Lr}t=bs(t,Gs.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Gs(e,n){if(Ir=-1,Nr=0,O&6)throw Error(h(327));var t=e.callbackNode;if(qn()&&e.callbackNode!==t)return null;var r=jr(e,e===q?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ei(e,r);else{n=r;var i=O;O|=2;var o=Ys();(q!==e||b!==n)&&(Be=null,it=Q()+500,xn(e,n));do try{yf();break}catch(a){Ks(e,a)}while(1);dl(),qr.current=o,O=i,G!==null?n=0:(q=null,b=0,n=Y)}if(n!==0){if(n===2&&(i=co(e),i!==0&&(r=i,n=Fo(e,i))),n===1)throw t=Yt,xn(e,0),en(e,r),pe(e,Q()),t;if(n===6)en(e,r);else{if(i=e.current.alternate,!(r&30)&&!gf(i)&&(n=ei(e,r),n===2&&(o=co(e),o!==0&&(r=o,n=Fo(e,o))),n===1))throw t=Yt,xn(e,0),en(e,r),pe(e,Q()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(h(345));case 2:wn(e,se,Be);break;case 3:if(en(e,r),(r&130023424)===r&&(n=Pl+500-Q(),10<n)){if(jr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=So(wn.bind(null,e,se,Be),n);break}wn(e,se,Be);break;case 4:if(en(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-Oe(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vf(r/1960))-r,10<r){e.timeoutHandle=So(wn.bind(null,e,se,Be),r);break}wn(e,se,Be);break;case 5:wn(e,se,Be);break;default:throw Error(h(329))}}}return pe(e,Q()),e.callbackNode===t?Gs.bind(null,e):null}function Fo(e,n){var t=Dt;return e.current.memoizedState.isDehydrated&&(xn(e,n).flags|=256),e=ei(e,n),e!==2&&(n=se,se=t,n!==null&&Bo(n)),e}function Bo(e){se===null?se=e:se.push.apply(se,e)}function gf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Te(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function en(e,n){for(n&=~El,n&=~fi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Oe(n),r=1<<t;e[t]=-1,n&=~r}}function $a(e){if(O&6)throw Error(h(327));qn();var n=jr(e,0);if(!(n&1))return pe(e,Q()),null;var t=ei(e,n);if(e.tag!==0&&t===2){var r=co(e);r!==0&&(n=r,t=Fo(e,r))}if(t===1)throw t=Yt,xn(e,0),en(e,n),pe(e,Q()),t;if(t===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,wn(e,se,Be),pe(e,Q()),null}function _l(e,n){var t=O;O|=1;try{return e(n)}finally{O=t,O===0&&(it=Q()+500,ui&&gn())}}function Dn(e){tn!==null&&tn.tag===0&&!(O&6)&&qn();var n=O;O|=1;var t=ze.transition,r=R;try{if(ze.transition=null,R=1,e)return e()}finally{R=r,ze.transition=t,O=n,!(O&6)&&gn()}}function Il(){me=Qn.current,j(Qn)}function xn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Qd(t)),G!==null)for(t=G.return;t!==null;){var r=t;switch(ul(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:tt(),j(de),j(ie),hl();break;case 5:gl(r);break;case 4:tt();break;case 13:j(F);break;case 19:j(F);break;case 10:fl(r.type._context);break;case 22:case 23:Il()}t=t.return}if(q=e,G=e=dn(e.current,null),b=me=n,Y=0,Yt=null,El=fi=Nn=0,se=Dt=null,Cn!==null){for(n=0;n<Cn.length;n++)if(t=Cn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}Cn=null}return e}function Ks(e,n){do{var t=G;try{if(dl(),Er.current=Zr,Xr){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xr=!1}if(In=0,Z=K=B=null,It=!1,Qt=0,xl.current=null,t===null||t.return===null){Y=1,Yt=n,G=null;break}e:{var o=e,l=t.return,a=t,u=n;if(n=b,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,v=a,m=v.tag;if(!(v.mode&1)&&(m===0||m===11||m===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var y=Ia(l);if(y!==null){y.flags&=-257,Na(y,l,a,o,n),y.mode&1&&_a(o,c,n),n=y,u=c;var S=n.updateQueue;if(S===null){var w=new Set;w.add(u),n.updateQueue=w}else S.add(u);break e}else{if(!(n&1)){_a(o,c,n),Nl();break e}u=Error(h(426))}}else if(A&&a.mode&1){var U=Ia(l);if(U!==null){!(U.flags&65536)&&(U.flags|=256),Na(U,l,a,o,n),sl(rt(u,a));break e}}o=u=rt(u,a),Y!==4&&(Y=2),Dt===null?Dt=[o]:Dt.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=Ds(o,u,n);ka(o,d);break e;case 1:a=u;var s=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(sn===null||!sn.has(f)))){o.flags|=65536,n&=-n,o.lanes|=n;var g=Ms(o,a,n);ka(o,g);break e}}o=o.return}while(o!==null)}Zs(t)}catch(z){n=z,G===t&&t!==null&&(G=t=t.return);continue}break}while(1)}function Ys(){var e=qr.current;return qr.current=Zr,e===null?Zr:e}function Nl(){(Y===0||Y===3||Y===2)&&(Y=4),q===null||!(Nn&268435455)&&!(fi&268435455)||en(q,b)}function ei(e,n){var t=O;O|=2;var r=Ys();(q!==e||b!==n)&&(Be=null,xn(e,n));do try{hf();break}catch(i){Ks(e,i)}while(1);if(dl(),O=t,qr.current=r,G!==null)throw Error(h(261));return q=null,b=0,Y}function hf(){for(;G!==null;)Xs(G)}function yf(){for(;G!==null&&!Vc();)Xs(G)}function Xs(e){var n=Js(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Zs(e):G=n,xl.current=null}function Zs(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=df(t,n),t!==null){t.flags&=32767,G=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,G=null;return}}else if(t=cf(t,n,me),t!==null){G=t;return}if(n=n.sibling,n!==null){G=n;return}G=n=e}while(n!==null);Y===0&&(Y=5)}function wn(e,n,t){var r=R,i=ze.transition;try{ze.transition=null,R=1,Sf(e,n,t,r)}finally{ze.transition=i,R=r}return null}function Sf(e,n,t,r){do qn();while(tn!==null);if(O&6)throw Error(h(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Jc(e,o),e===q&&(G=q=null,b=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||hr||(hr=!0,bs(Lr,function(){return qn(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=ze.transition,ze.transition=null;var l=R;R=1;var a=O;O|=4,xl.current=null,pf(e,t),Ws(t,e),Ad(ho),Ur=!!go,ho=go=null,e.current=t,mf(t),Hc(),O=a,R=l,ze.transition=o}else e.current=t;if(hr&&(hr=!1,tn=e,br=i),o=e.pendingLanes,o===0&&(sn=null),Gc(t.stateNode),pe(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jr)throw Jr=!1,e=Uo,Uo=null,e;return br&1&&e.tag!==0&&qn(),o=e.pendingLanes,o&1?e===Ao?Mt++:(Mt=0,Ao=e):Mt=0,gn(),null}function qn(){if(tn!==null){var e=Du(br),n=ze.transition,t=R;try{if(ze.transition=null,R=16>e?16:e,tn===null)var r=!1;else{if(e=tn,tn=null,br=0,O&6)throw Error(h(331));var i=O;for(O|=4,C=e.current;C!==null;){var o=C,l=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(C=c;C!==null;){var v=C;switch(v.tag){case 0:case 11:case 15:Nt(8,v,o)}var m=v.child;if(m!==null)m.return=v,C=m;else for(;C!==null;){v=C;var p=v.sibling,y=v.return;if($s(v),v===c){C=null;break}if(p!==null){p.return=y,C=p;break}C=y}}}var S=o.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var U=w.sibling;w.sibling=null,w=U}while(w!==null)}}C=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,C=l;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Nt(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,C=d;break e}C=o.return}}var s=e.current;for(C=s;C!==null;){l=C;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,C=f;else e:for(l=s;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:di(9,a)}}catch(z){V(a,a.return,z)}if(a===l){C=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,C=g;break e}C=a.return}}if(O=i,gn(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(ri,e)}catch{}r=!0}return r}finally{R=t,ze.transition=n}}return!1}function Va(e,n,t){n=rt(t,n),n=Ds(e,n,1),e=un(e,n,1),n=le(),e!==null&&(Zt(e,1,n),pe(e,n))}function V(e,n,t){if(e.tag===3)Va(e,e,t);else for(;n!==null;){if(n.tag===3){Va(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=rt(t,e),e=Ms(n,e,1),n=un(n,e,1),e=le(),n!==null&&(Zt(n,1,e),pe(n,e));break}}n=n.return}}function wf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=le(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(b&t)===t&&(Y===4||Y===3&&(b&130023424)===b&&500>Q()-Pl?xn(e,0):El|=t),pe(e,n)}function qs(e,n){n===0&&(e.mode&1?(n=ar,ar<<=1,!(ar&130023424)&&(ar=4194304)):n=1);var t=le();e=Ke(e,n),e!==null&&(Zt(e,n,t),pe(e,t))}function kf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),qs(e,t)}function Cf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(n),qs(e,t)}var Js;Js=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ce=!1,sf(e,n,t);ce=!!(e.flags&131072)}else ce=!1,A&&n.flags&1048576&&ts(n,Wr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;_r(e,n),e=n.pendingProps;var i=bn(n,ie.current);Zn(n,t),i=Sl(null,n,r,e,i,t);var o=wl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(r)?(o=!0,Vr(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ml(n),i.updater=ci,n.stateNode=i,i._reactInternals=n,Po(n,r,e,t),n=No(null,n,r,!0,o,t)):(n.tag=0,A&&o&&al(n),oe(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(_r(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=xf(r),e=Ie(r,e),i){case 0:n=Io(null,n,r,e,t);break e;case 1:n=Oa(null,n,r,e,t);break e;case 11:n=Da(null,n,r,e,t);break e;case 14:n=Ma(null,n,r,Ie(r.type,e),t);break e}throw Error(h(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ie(r,i),Io(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ie(r,i),Oa(e,n,r,i,t);case 3:e:{if(Ls(n),e===null)throw Error(h(387));r=n.pendingProps,o=n.memoizedState,i=o.element,us(e,n),Kr(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=rt(Error(h(423)),n),n=Ra(e,n,r,t,i);break e}else if(r!==i){i=rt(Error(h(424)),n),n=Ra(e,n,r,t,i);break e}else for(ve=an(n.stateNode.containerInfo.firstChild),ge=n,A=!0,Me=null,t=ls(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),r===i){n=Ye(e,n,t);break e}oe(e,n,r,t)}n=n.child}return n;case 5:return ss(n),e===null&&zo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,yo(r,i)?l=null:o!==null&&yo(r,o)&&(n.flags|=32),Ts(e,n),oe(e,n,l,t),n.child;case 6:return e===null&&zo(n),null;case 13:return js(e,n,t);case 4:return vl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=nt(n,null,r,t):oe(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ie(r,i),Da(e,n,r,i,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,T(Qr,r._currentValue),r._currentValue=l,o!==null)if(Te(o.value,l)){if(o.children===i.children&&!de.current){n=Ye(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=We(-1,t&-t),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?u.next=u:(u.next=v.next,v.next=u),c.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),xo(o.return,t,n),a.lanes|=t;break}u=u.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(h(341));l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),xo(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}oe(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Zn(n,t),i=xe(i),r=r(i),n.flags|=1,oe(e,n,r,t),n.child;case 14:return r=n.type,i=Ie(r,n.pendingProps),i=Ie(r.type,i),Ma(e,n,r,i,t);case 15:return Os(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Ie(r,i),_r(e,n),n.tag=1,fe(r)?(e=!0,Vr(n)):e=!1,Zn(n,t),Ns(n,r,i),Po(n,r,i,t),No(null,n,r,!0,e,t);case 19:return Us(e,n,t);case 22:return Rs(e,n,t)}throw Error(h(156,n.tag))};function bs(e,n){return Pu(e,n)}function zf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,n,t,r){return new zf(e,n,t,r)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xf(e){if(typeof e=="function")return Dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xo)return 11;if(e===Zo)return 14}return 2}function dn(e,n){var t=e.alternate;return t===null?(t=Ce(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Dr(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")Dl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ln:return En(t.children,i,o,n);case Yo:l=8,i|=8;break;case Xi:return e=Ce(12,t,n,i|2),e.elementType=Xi,e.lanes=o,e;case Zi:return e=Ce(13,t,n,i),e.elementType=Zi,e.lanes=o,e;case qi:return e=Ce(19,t,n,i),e.elementType=qi,e.lanes=o,e;case su:return pi(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case au:l=10;break e;case uu:l=9;break e;case Xo:l=11;break e;case Zo:l=14;break e;case qe:l=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return n=Ce(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function En(e,n,t,r){return e=Ce(7,e,r,n),e.lanes=t,e}function pi(e,n,t,r){return e=Ce(22,e,r,n),e.elementType=su,e.lanes=t,e.stateNode={isHidden:!1},e}function Qi(e,n,t){return e=Ce(6,e,null,n),e.lanes=t,e}function Gi(e,n,t){return n=Ce(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Ef(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ml(e,n,t,r,i,o,l,a,u){return e=new Ef(e,n,t,a,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Ce(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ml(o),e}function Pf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ec(e){if(!e)return pn;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(h(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(h(171))}if(e.tag===1){var t=e.type;if(fe(t))return es(e,t,n)}return n}function nc(e,n,t,r,i,o,l,a,u){return e=Ml(t,r,!0,e,i,o,l,a,u),e.context=ec(null),t=e.current,r=le(),i=cn(t),o=We(r,i),o.callback=n??null,un(t,o,i),e.current.lanes=i,Zt(e,i,r),pe(e,r),e}function mi(e,n,t,r){var i=n.current,o=le(),l=cn(i);return t=ec(t),n.context===null?n.context=t:n.pendingContext=t,n=We(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=un(i,n,l),e!==null&&(Re(e,i,l,o),xr(e,i,l)),l}function ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ha(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ol(e,n){Ha(e,n),(e=e.alternate)&&Ha(e,n)}function _f(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rl(e){this._internalRoot=e}vi.prototype.render=Rl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));mi(e,n,null,null)};vi.prototype.unmount=Rl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Dn(function(){mi(null,e,null,null)}),n[Ge]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ru();e={blockedOn:null,target:e,priority:n};for(var t=0;t<be.length&&n!==0&&n<be[t].priority;t++);be.splice(t,0,e),t===0&&Lu(e)}};function Tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wa(){}function If(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ni(l);o.call(c)}}var l=nc(n,r,e,0,null,!1,!1,"",Wa);return e._reactRootContainer=l,e[Ge]=l.current,Bt(e.nodeType===8?e.parentNode:e),Dn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ni(u);a.call(c)}}var u=Ml(e,0,!1,null,null,!1,!1,"",Wa);return e._reactRootContainer=u,e[Ge]=u.current,Bt(e.nodeType===8?e.parentNode:e),Dn(function(){mi(n,u,t,r)}),u}function hi(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=ni(l);a.call(u)}}mi(n,l,e,i)}else l=If(t,n,e,i,r);return ni(l)}Mu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=kt(n.pendingLanes);t!==0&&(bo(n,t|1),pe(n,Q()),!(O&6)&&(it=Q()+500,gn()))}break;case 13:Dn(function(){var r=Ke(e,1);if(r!==null){var i=le();Re(r,e,1,i)}}),Ol(e,1)}};el=function(e){if(e.tag===13){var n=Ke(e,134217728);if(n!==null){var t=le();Re(n,e,134217728,t)}Ol(e,134217728)}};Ou=function(e){if(e.tag===13){var n=cn(e),t=Ke(e,n);if(t!==null){var r=le();Re(t,e,n,r)}Ol(e,n)}};Ru=function(){return R};Tu=function(e,n){var t=R;try{return R=e,n()}finally{R=t}};ao=function(e,n,t){switch(n){case"input":if(eo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ai(r);if(!i)throw Error(h(90));du(r),eo(r,i)}}}break;case"textarea":pu(e,t);break;case"select":n=t.value,n!=null&&Gn(e,!!t.multiple,n,!1)}};wu=_l;ku=Dn;var Nf={usingClientEntryPoint:!1,Events:[Jt,Fn,ai,yu,Su,_l]},ht={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Df={bundleType:ht.bundleType,version:ht.version,rendererPackageName:ht.rendererPackageName,rendererConfig:ht.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xu(e),e===null?null:e.stateNode},findFiberByHostInstance:ht.findFiberByHostInstance||_f,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{ri=yr.inject(Df),Ae=yr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nf;ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tl(n))throw Error(h(200));return Pf(e,n,null,t)};ye.createRoot=function(e,n){if(!Tl(e))throw Error(h(299));var t=!1,r="",i=tc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ml(e,1,!1,null,null,t,!1,r,i),e[Ge]=n.current,Bt(e.nodeType===8?e.parentNode:e),new Rl(n)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=xu(n),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Dn(e)};ye.hydrate=function(e,n,t){if(!gi(n))throw Error(h(200));return hi(null,e,n,!0,t)};ye.hydrateRoot=function(e,n,t){if(!Tl(e))throw Error(h(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=tc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=nc(n,null,e,1,t??null,i,!1,o,l),e[Ge]=n.current,Bt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new vi(n)};ye.render=function(e,n,t){if(!gi(n))throw Error(h(200));return hi(null,e,n,!1,t)};ye.unmountComponentAtNode=function(e){if(!gi(e))throw Error(h(40));return e._reactRootContainer?(Dn(function(){hi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};ye.unstable_batchedUpdates=_l;ye.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!gi(t))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return hi(e,n,t,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),ru.exports=ye;var Mf=ru.exports,Qa=Mf;Ki.createRoot=Qa.createRoot,Ki.hydrateRoot=Qa.hydrateRoot;const Of=`# 📚 Input/Output - Sistemi Operativi 2

## 🎯 Introduzione al Sottosistema I/O

Il **sottosistema I/O** è quella parte del sistema operativo che gestisce tutti i dispositivi di input e output del computer. È fondamentale perché le applicazioni non dipendono solo da CPU e memoria, ma anche da molti componenti hardware diversi.

> 💡 **Concetto Chiave**: I dispositivi I/O sono componenti hardware specificamente progettati per fornire input o dirigere output (tastiere, mouse, schede di rete, hard disk, ecc.).

---

## 🔍 Classificazione dei Dispositivi I/O

### 📥📤 Input vs Output vs Both

| Dispositivo | Tipo | Spiegazione |
|-------------|------|-------------|
| ⌨️ Tastiera | **Input (I)** | Fornisce solo dati al sistema |
| 🔊 Speaker | **Output (O)** | Riceve solo dati dal sistema |
| 🖥️ Display | **Output (O)** | Mostra informazioni (Both se touchscreen) |
| 💾 Hard Disk | **Both (B)** | Può leggere E scrivere dati |
| 🎤 Microfono | **Input (I)** | Cattura solo audio |
| 🌐 Scheda di Rete | **Both (B)** | Invia E riceve dati |
| 💳 Memory Card | **Both (B)** | Lettura E scrittura |

---

## ⚡ Le Sfide del Sottosistema I/O

### 🤔 Perché è così complesso?

1. **Eterogeneità Funzionale** 🔄
   - Dispositivi con funzioni completamente diverse
   - Protocolli di comunicazione diversi

2. **Velocità Drasticamente Diverse** 🏃‍♂️🐌
   - Mouse: ~100 byte/sec
   - Tastiera: ~10 byte/sec  
   - Hard Disk: ~100 MB/sec
   - Schede di rete: ~1 GB/sec

3. **Metodi di Controllo Diversi** 🎛️
   - Ogni dispositivo ha le sue specifiche
   - Protocolli di comunicazione unici

### 🎯 La Soluzione: Astrazione

Il SO deve fornire:
- **Interfaccia uniforme** agli strati superiori
- **Driver dedicati** per ogni tipo di dispositivo
- **Separazione** tra complessità I/O e resto del sistema

---

## 🏗️ Architettura del Sottosistema I/O

\`\`\`
┌─────────────────┐
│   Applicazioni   │
├─────────────────┤
│ Interfaccia     │ ← Indipendente dal dispositivo
│ Uniforme        │
├─────────────────┤
│ Sottosistema    │
│ I/O             │
├─────────────────┤
│ Driver          │ ← Specifico per dispositivo  
│ Dedicati        │
├─────────────────┤
│ Hardware        │
└─────────────────┘
\`\`\`

### 🏭 Metafora della Catena di Montaggio

**Catena di Montaggio** = **Sottosistema I/O**
- **Protocolli** = Come arrivano/escono i pezzi
- **Staff dedicato** = Driver specifici
- **Separazione** = Astrae i dettagli dalla produzione

---

## 📦 Classificazione: Block vs Character Devices

### 🧱 Block Devices (Dispositivi a Blocchi)

**Caratteristiche:**
- Operano su **blocchi di dimensione fissa**
- Il blocco è l'**unità più piccola indirizzabile**
- Supportano **accesso casuale** (random access)
- Ogni blocco può essere letto/scritto **indipendentemente**

**Esempi:** 💾 Hard Disk, 📀 DVD, 🔌 Chiavette USB

**Codice di esempio:**
\`\`\`c
FILE *fp = fopen("/dev/sda", "rb");  // Disco
int ret = fseek(fp, 0L, SEEK_END);   // Seek funziona!
// ret = 0 (successo)
\`\`\`

### 📝 Character Devices (Dispositivi a Carattere)

**Caratteristiche:**
- Gestiscono **stream di byte** (caratteri)
- **Non indirizzabili** singolarmente
- **Accesso seriale** solamente
- Operazioni tipiche: get/put character

**Esempi:** ⌨️ Tastiera, 🖱️ Mouse, 🖨️ Stampanti

**Codice di esempio:**
\`\`\`c
FILE *fp = fopen("/dev/tty", "rb");  // Terminale
int ret = fseek(fp, 0L, SEEK_END);   // Seek NON funziona!
// ret = -1 (errore: "Illegal seek")
\`\`\`

### 🌐 Caso Speciale: Dispositivi di Rete

I dispositivi di rete sono **un caso intermedio**:
- Gestiscono **pacchetti** (più di un carattere)
- Dimensioni **non fisse**
- **Non supportano accesso casuale**
- Stream di **chunk di dati** di dimensioni diverse

---

## ⚙️ Hardware I/O: Dispositivi e Controller

### 🔧 Anatomia di un Dispositivo I/O

Ogni dispositivo I/O è composto da **due parti principali**:

1. **Il Dispositivo** 🔩
   - Componenti meccanici
   - Parte fisica vera e propria

2. **Il Controller** 🧠  
   - Componenti elettronici
   - Chip o set di chip che controllano fisicamente il dispositivo
   - Spesso contiene un **piccolo computer embedded**

### 🔌 Connessioni: Porte vs Bus

**Porta** 🔌
- Punto di connessione singolo
- Esempi: USB, PS/2, SATA, VGA

**Bus** 🚌  
- Set di cavi condivisi tra più dispositivi
- Esempio: Cavo ATA/IDE condiviso tra CD-ROM e Hard Disk

---

## 🎮 Controller: Il Cervello del Dispositivo

### 🧠 Funzioni del Controller

1. **Accetta comandi** dal SO
2. **Nasconde la complessità** del dispositivo  
3. **Presenta interfaccia semplificata** al SO
4. **Gestisce i dettagli** a basso livello

### 📀 Esempio Pratico: Lettura Settore Hard Disk

**Quello che vede il SO:**
- Hard disk = sequenza lineare di settori
- Settore = 512 byte
- Indirizzamento da 0 in poi

**Quello che fa realmente il Controller:**

\`\`\`
1. 🔄 Converte settore lineare (es. 11206) 
   → <cilindro X, testina Y, settore Z>

2. 📍 Rileva posizione attuale della testina

3. ➡️ Muove testina alla posizione corretta  

4. ⏳ Aspetta rotazione del settore giusto

5. 📖 Legge stream di bit e memorizza in buffer

6. ✅ Controlla errori

7. 📤 Se OK ritorna dati, altrimenti riprova
\`\`\`

---

## 🚌 Architetture di Sistema: Bus e Chipset

### 🏛️ Architettura Tradizionale (Vecchia Generazione)

\`\`\`
    CPU
     |
   FSB (Front Side Bus)  
     |
┌────────────┐     ┌─────────────┐
│Northbridge │────│ Southbridge │
│(Memory Hub)│     │(I/O Hub)    │  
└────────────┘     └─────────────┘
     |                    |
   RAM              Dispositivi I/O
\`\`\`

**Problemi:**
- FSB diventa **collo di bottiglia** 🚧
- Comunicazioni CPU-RAM limitate dalla velocità FSB

### 🚀 Architettura Moderna

\`\`\`
┌─────────────────┐
│      CPU        │
│ +Memory Controller│ ← Integrato nella CPU
│ +PCIe Lanes     │
└─────────────────┘
         |
     DMI Bus
         |
┌─────────────────┐  
│      PCH        │ ← Platform Controller Hub
│(ex Southbridge)│
└─────────────────┘
         |
  Dispositivi I/O
\`\`\`

**Vantaggi:**
- **Eliminato collo di bottiglia** FSB
- Comunicazioni CPU-RAM **più veloci**
- Controller memoria **integrato nella CPU**

---

## 🔗 Interazione CPU-Dispositivi

### 🗺️ Modello di Riferimento del Sistema

\`\`\`
CPU ←→ BUS ←→ MEMORIA
 ↕      ↕        
DISPOSITIVI I/O
\`\`\`

### 🎛️ Modello di Riferimento del Dispositivo  

\`\`\`
┌─────────────────┐
│   INTERFACCIA   │ ← Registri accessibili dalla CPU
├─────────────────┤
│ STRUTTURA       │ ← Implementazione interna
│ INTERNA         │   (non visibile alla CPU)
└─────────────────┘
\`\`\`

### 📋 Registri del Controller

**Data Registers** 📊
- Per controllare trasferimento dati IN/OUT
- CPU li legge/scrive per ottenere input/inviare output

**Status Registers** 📈
- Indicano **stato attuale** del dispositivo  
- Bit leggibili dalla CPU: comando completato, errore, pronto per nuovo comando

**Command Registers** ⚙️
- CPU li scrive per **controllare operazioni**
- Esempi: avvia comando, imposta modalità full/half-duplex

**Data Buffer** 🗃️
- **Memorizza temporaneamente** dati
- Per dispositivi che non possono passare dati direttamente al SO
- Esempi: pacchetti di rete, stream audio/video

---

## 🚪 Tecniche di Accesso ai Registri

### 🔢 Port-Mapped I/O

**Caratteristiche:**
- Ogni registro ha un **numero di porta I/O**
- **Spazio indirizzi separato** dalla memoria
- Accessibile **solo in modalità kernel**
- **Istruzioni speciali** per I/O

\`\`\`assembly
IN REG, PORT    ; Legge da porta PORT → registro REG  
OUT PORT, REG   ; Scrive registro REG → porta PORT
\`\`\`

**Schema:**
\`\`\`
┌─────────────┐    ┌──────────────┐
│   MEMORIA   │    │  PORTE I/O   │
│             │    │              │  
│ 0x0000      │    │ Port 0       │
│ ...         │    │ Port 1       │
│ 0xFFFF      │    │ ...          │
└─────────────┘    └──────────────┘
\`\`\`

### 🗺️ Memory-Mapped I/O  

**Caratteristiche:**
- Registri **mappati nello spazio memoria**
- **Stesso spazio indirizzi** della memoria
- **Istruzioni standard** di accesso memoria
- Ogni registro ha **indirizzo memoria unico**

\`\`\`assembly
MOV REG, ADDR   ; Legge da indirizzo ADDR → registro REG
MOV ADDR, REG   ; Scrive registro REG → indirizzo ADDR  
\`\`\`

**Schema:**
\`\`\`
┌─────────────────────┐
│      MEMORIA        │
│                     │
│ 0x0000 - Programmi  │  
│ 0x8000 - Dati       │
│ 0xF000 - Registri   │ ← Registri I/O mappati qui
│          Dispositivi│
└─────────────────────┘
\`\`\`

### 🔄 Approccio Ibrido

**Combinazione di entrambi:**
- Port-mapped per **operazioni di controllo base**
- Memory-mapped per **buffer dati grandi**

**Esempio - Controller Grafico:**
- Porte I/O → comandi di controllo
- Memoria mappata → contenuto schermo (milioni di byte)

---

## ⚖️ Confronto: Port-Mapped vs Memory-Mapped

### 🌟 Vantaggi Memory-Mapped I/O

**1. Sviluppo Driver Semplificato** 👨‍💻
\`\`\`c
// Memory-mapped (semplice)
int status = *(int*)0xF000;  // Registro come variabile C

// Port-mapped (complesso)  
int status;
__asm__("inl %%dx, %%eax" : "=a"(status) : "d"(port));
\`\`\`

**2. Protezione Automatica** 🛡️
- OS mappa registri **fuori dallo spazio utente**
- Nessun meccanismo speciale necessario

**3. CPU Design Semplificato** 🔧
- **Tutte le istruzioni** memoria funzionano con I/O
- Tutti i **modi di indirizzamento** disponibili  
- **Nessuna istruzione speciale** necessaria

### 🌟 Vantaggi Port-Mapped I/O

**1. Nessun Consumo Memoria** 💾
- I dispositivi **non consumano** indirizzi fisici
- Utile in architetture con memoria limitata

**2. Nessun Problema di Cache** 🚫💾
- Lo spazio porte I/O **non viene mai cachato**
- Con memory-mapped, HW deve **disabilitare cache selettivamente**

**3. Gestione Multi-Bus Semplificata** 🚌
\`\`\`
CPU → Bus Memoria (veloce)   → RAM
    → Bus I/O (lento)       → Dispositivi I/O
\`\`\`
- Operazioni I/O usano automaticamente **bus dedicato**
- Memory-mapped richiede logica aggiuntiva per **routing**

---

## ⚙️ Modalità di Esecuzione I/O

### 🔄 1. Programmed I/O (Polling)

**Come Funziona:**
1. CPU **invia richiesta** al controller
2. CPU entra in **loop di attesa continua** 
3. **Controlla ripetutamente** bit di stato
4. Quando completato, CPU **procede**

\`\`\`c
// Pseudocodice polling
do {
    status = read_status_register();
} while (status & BUSY_BIT);  // Aspetta fino a quando non è pronto

data = read_data_register();  // Legge il dato
\`\`\`

**✅ Vantaggi:**
- **Semplice da implementare**
- **Buono per trasferimenti piccoli**
- **Appropriato** se non c'è altro lavoro da fare

**❌ Svantaggi:**  
- CPU **completamente occupata** nell'attesa
- **Spreco** di cicli CPU
- **Non può** fare altro lavoro utile

### ⚡ 2. Interrupt-Driven I/O

**Come Funziona:**
1. CPU **invia richiesta** al controller
2. CPU **blocca processo corrente**
3. CPU **schedula altro processo** 
4. Controller **solleva interrupt** quando finito
5. CPU **gestisce interrupt** e riprende processo originale

**🔌 Meccanismo degli Interrupt:**

\`\`\`
1. Controller → segnale su linea controllo bus
2. Interrupt Controller → rileva segnale  
3. Se priorità OK → numero su linee indirizzo bus
4. CPU → usa numero come indice in Interrupt Vector
5. Interrupt Vector → indirizzo Interrupt Handler
6. CPU → salta a Interrupt Handler
\`\`\`

**Interrupt Vector Table:**
\`\`\`
Indice | Indirizzo Handler
-------|------------------
  0    | 0x1000 (Tastiera)
  1    | 0x1500 (Mouse)  
  2    | 0x2000 (Disco)
  3    | 0x2500 (Rete)
\`\`\`

**✅ Vantaggi:**
- CPU può **fare altro lavoro** durante I/O
- **Efficiente** per la maggior parte delle operazioni
- **Migliore utilizzo** delle risorse

### 🏃‍♂️ CPU Pipeline e Interrupt

**Problema nelle CPU Moderne:**
- CPU **pipelined** e **superscalari**  
- **Più istruzioni** in esecuzione simultanea
- Quando arriva interrupt, **stato complesso**

**Tipi di Interrupt:**

**🎯 Precise Interrupt** (Preciso)
1. PC salvato in **posizione nota**
2. Tutte le istruzioni **prima del PC completate**  
3. Nessuna istruzione **dopo il PC completata**
4. Stato dell'istruzione al PC **noto**

**🌀 Imprecise Interrupt** (Impreciso)  
- **Almeno una** delle proprietà sopra violata
- OS deve **capire cosa è successo**
- **Codice complesso** per ripristino
- **Salvataggio stato** molto costoso

### 🚚 3. Direct Memory Access (DMA)

**Come Funziona:**
1. CPU **programma DMA controller**
2. CPU **invia comando** al dispositivo  
3. **DMA controller** gestisce trasferimento
4. DMA **invia interrupt** quando finito
5. CPU trova **dati già pronti** in memoria

**🎛️ Registri DMA Controller:**
- **Memory Address Register** → dove leggere/scrivere
- **Byte Count Register** → quanti byte trasferire
- **Control Registers** → direzione, modalità, dimensione trasferimento

**📖 Esempio: Lettura da Disco con DMA**

\`\`\`
1. 🖥️ CPU programma registri DMA controller
2. 🖥️ CPU invia comando READ al disco  
3. 💾 Disco legge dati in buffer interno
4. 🎛️ DMA mette indirizzo memoria su bus
5. 🎛️ DMA invia READ request al disco  
6. 💾 Disco scrive parola in memoria
7. 💾 Disco invia ACK al DMA
8. 🎛️ DMA decrementa contatore, incrementa indirizzo
9. 🔄 Ripete fino a contatore = 0
10. ⚡ DMA invia interrupt a CPU
11. 🖥️ CPU trova dati già pronti in memoria!
\`\`\`

### 🔄 Modalità DMA: Fly-by vs Flow-through

**Fly-by Mode** ✈️
- Dati **NON passano** attraverso DMA controller
- DMA dice al dispositivo **cosa fare e dove**
- **1 ciclo bus** per trasferimento
- ✅ **Più efficiente**  
- ❌ **Limitato**: no device-to-device transfers

**Flow-through Mode** 🌊
- Dati **passano attraverso** DMA controller  
- **2 cicli bus**: device→DMA, DMA→memory
- ✅ **Più flessibile**: supporta device-to-device
- ❌ **Meno efficiente**

### ⚡ Contesa Bus: Cycle-stealing vs Burst Mode

**Cycle-stealing** 🔄
- DMA **ruba singoli cicli** bus quando necessario
- DMA ha **priorità più alta** di CPU
- ✅ CPU non resta **mai bloccata troppo**
- ❌ **Tasso trasferimento lento**

**Burst Mode** 💥  
- DMA **acquisisce bus** per serie di trasferimenti
- **Rilascia** solo quando finito
- ✅ **Trasferimento molto veloce**
- ❌ Può **bloccare CPU** per periodi lunghi

---

## 📊 Riepilogo Comparativo

| Modalità | CPU Usage | Velocità | Complessità | Caso d'Uso |
|----------|-----------|----------|-------------|------------|
| **Polling** 🔄 | Alta (100%) | Bassa | Minima | Trasferimenti piccoli, sistemi dedicati |
| **Interrupt** ⚡ | Media | Media | Media | Uso generale, I/O moderato |
| **DMA** 🚚 | Bassa | Alta | Alta | Trasferimenti grandi, alta performance |

---

## 💡 Concetti Chiave da Ricordare

### 🎯 Punti Essenziali

1. **Astrazione è Fondamentale** 🏗️
   - Il sottosistema I/O nasconde la complessità dei dispositivi

2. **Block vs Character** 📦📝  
   - Determina come il SO interagisce con il dispositivo

3. **Memory-mapped Vince** 🗺️
   - Più semplice da programmare e gestire

4. **DMA per Performance** 🚀
   - Essenziale per trasferimenti dati grandi

5. **Interrupt = Multitasking** ⚡
   - Permette alla CPU di fare più cose contemporaneamente

### 🔧 Applicazioni Pratiche

- **Sviluppo Driver**: Memory-mapped I/O semplifica il codice
- **Performance**: DMA per operazioni disco/rete intensive  
- **Real-time**: Attenzione a burst mode DMA che può bloccare CPU
- **Embedded**: Polling può andare bene in sistemi semplici

---

*📚 Questo riassunto copre tutti i concetti fondamentali dell'I/O nei sistemi operativi. Usa questi principi per comprendere come il tuo computer gestisce tastiera, mouse, disco e tutti gli altri dispositivi!* 🖥️✨`,Rf=`# Software I/O nei Sistemi Operativi
## Guida di Studio Completa

---

# 📚 PARTE I: FONDAMENTI TEORICI

## Introduzione al Software I/O

Il software I/O rappresenta l'insieme di tutti i programmi che gestiscono l'interazione tra il sistema operativo e i dispositivi di input/output. Possiamo immaginarlo come un **sistema di traduttori simultanei** in una conferenza internazionale: ogni livello traduce le richieste dal linguaggio "di sopra" al linguaggio "di sotto", fino ad arrivare al linguaggio macchina dei dispositivi.

### Struttura Generale

Il software I/O è organizzato secondo un'architettura a **4 livelli gerarchici**, simile a una piramide dove ogni livello ha responsabilità specifiche:

\`\`\`
┌─────────────────────────────┐
│    Software Spazio Utente   │  ← Livello più alto (librerie, daemon)
├─────────────────────────────┤
│  Software Indipendente      │  ← Interfaccia uniforme
├─────────────────────────────┤
│     Driver Dispositivi      │  ← Comunicazione specifica
├─────────────────────────────┤
│   Gestori Interruzioni      │  ← Livello più basso (hardware)
└─────────────────────────────┘
\`\`\`

---

# ⚙️ PARTE II: MODALITÀ DI INTERAZIONE OS-DISPOSITIVO

## Le Tre Strategie Fondamentali

Quando il sistema operativo deve comunicare con un dispositivo, può utilizzare tre strategie diverse. Immaginiamo di dover cucinare una torta per capire meglio:

### I/O Programmato (PIO) - "Il Cuoco Ansioso"

**Metafora**: Come un cuoco che rimane davanti al forno per 30 minuti guardando continuamente se la torta è pronta, senza mai allontanarsi.

**Come Funziona**:
1. Il SO invia dati al dispositivo
2. Esegue **polling** (controllo continuo) dello stato del dispositivo
3. Ripete fino al completamento dell'operazione

**Esempio Pratico**: 
Stampare "ABCDEFGH" con una stampante da 100 caratteri/secondo:
- Ogni carattere richiede 10ms
- CPU occupata per 8 × 10ms = 80ms in attesa!
- È come se il processore rimanesse "ipnotizzato" dalla stampante

**Quando Usare**: 
- Operazioni molto veloci
- Sistemi dedicati con un solo compito
- Dispositivi semplici

**Vantaggi**: Semplicità implementativa
**Svantaggi**: Spreco massiccio di risorse CPU

### I/O Guidato da Interruzioni - "Il Cuoco Multitasking"

**Metafora**: Come un cuoco che mette la torta in forno, imposta un timer, e nel frattempo prepara altri piatti. Quando suona il timer (interruzione), torna a occuparsi della torta.

**Come Funziona**:
1. SO invia richiesta I/O e **blocca il processo richiedente**
2. CPU viene liberata per altre attività
3. Quando l'operazione è completa, il dispositivo genera un'**interruzione**
4. SO gestisce l'interruzione e sblocca il processo

**Vantaggi**: CPU libera per altre operazioni
**Svantaggi**: Overhead per gestire ogni singola interruzione

### I/O con DMA - "Il Cuoco con l'Assistente"

**Metafora**: Come un cuoco che affida all'assistente (controller DMA) l'intero compito di preparare un piatto, e viene chiamato solo quando tutto è finito.

**Come Funziona**:
1. SO configura il controller DMA con tutti i parametri
2. DMA gestisce autonomamente l'intero trasferimento
3. Una sola interruzione al completamento di tutta l'operazione

**Vantaggi**: 
- Minimizza l'intervento della CPU
- Riduce drasticamente le interruzioni
- Ottimale per trasferimenti di grandi quantità di dati

**Svantaggi**: 
- Richiede hardware DMA
- Maggiore complessità
- Possibile contesa per il bus di sistema

---

# 🎯 PARTE III: OBIETTIVI DI PROGETTAZIONE

## Principi Fondamentali del Software I/O

### Indipendenza dai Dispositivi

**Concetto**: Un programma deve funzionare con qualsiasi dispositivo della stessa categoria senza modifiche.

**Metafora**: Come quando scriviamo una lettera - non importa se la stampiamo con una stampante Canon, HP o Brother: il contenuto rimane lo stesso.

**Esempio Pratico**: 
Il comando Unix \`sort <input >output\` funziona identicamente sia che \`input\` e \`output\` siano su hard disk, SSD, USB o rete.

### Nomenclatura Uniforme

**Concetto**: I nomi dei dispositivi non devono rivelare dettagli implementativi.

**Metafora**: Come gli indirizzi civici: via Roma 15 identifica una casa specifica, indipendentemente da chi ci abita o dal colore della porta.

**Implementazione Unix**: 
- Tutti i dispositivi appaiono come file in \`/dev\`
- \`/dev/sda1\` = prima partizione del primo disco
- \`/dev/tty0\` = primo terminale

### Gestione Trasparente degli Errori

**Principio**: Gli errori vanno gestiti al livello più basso possibile, dove sono disponibili più informazioni per il recupero.

**Metafora**: Come in un ospedale - un'infermiera competente risolve problemi minori senza disturbare il primario per ogni piccolo inconveniente.

**Strategia**: 
- **Livello basso**: Errori transitori (polvere sulla testina del disco)
- **Livello alto**: Errori irrecuperabili (disco fisicamente danneggiato)

### Modalità di Trasferimento Multiple

**Dualità Fondamentale**:
- **Hardware**: Naturalmente asincrono (interrupt-driven)
- **Programmatori**: Preferiscono modalità sincrona (più semplice)

**Metafora**: Come ordinare una pizza - il ristorante lavora in modo asincrono (gestisce più ordini contemporaneamente), ma tu come cliente vivi l'esperienza in modo sincrono (ordini e aspetti la tua pizza).

### Gestione del Buffering

**Problemi da Risolvere**:
1. **Velocità diverse**: Produttore e consumatore di dati hanno ritmi diversi
2. **Destinazione non disponibile**: I dati arrivano ma non c'è dove metterli subito
3. **Efficienza**: Evitare trasferimenti di singoli byte

**Metafora**: Come una cisterna d'acqua in casa - raccoglie acqua quando arriva dall'acquedotto e la eroga quando serve, compensando le differenze di flusso.

### Dispositivi Condivisi vs Dedicati

**Dispositivi Condivisi**: 
- Più processi contemporaneamente (es. hard disk)
- Come un autobus pubblico

**Dispositivi Dedicati**: 
- Un solo processo alla volta (es. stampante)
- Come un'auto privata
- **Problema**: Rischio di deadlock
- **Soluzione**: Sistemi di spooling

---

# 🏗️ PARTE IV: ARCHITETTURA A 4 LIVELLI

## Livello 1: Gestori di Interruzioni

### Ruolo e Responsabilità

**Metafora**: Come il centralinista di un'azienda - riceve tutte le chiamate (interruzioni) e le smista alle persone giuste, gestendo le priorità e mantenendo l'ordine.

**Funzioni Principali**:
1. **Salvataggio del contesto**: Come mettere in pausa un film per rispondere al telefono
2. **Configurazione del gestore**: Preparare l'ambiente per gestire l'interruzione
3. **Riconoscimento del controller**: Confermare la ricezione dell'interruzione
4. **Esecuzione**: Svolgere l'azione richiesta
5. **Schedulazione**: Decidere quale processo far riprendere

### Processo di Gestione delle Interruzioni

**Sequenza Dettagliata**:
\`\`\`
Interruzione → Salva contesto → Configura stack del gestore → 
Riconosce controller → Esegue gestore → Sceglie prossimo processo → 
Ripristina contesto → Riprende esecuzione
\`\`\`

**Esempio Pratico**: 
Quando premete Ctrl+C, viene generata un'interruzione che:
1. Salva lo stato del programma attuale
2. Esegue il gestore per il segnale di terminazione
3. Termina il processo
4. Torna al prompt della shell

## Livello 2: Driver dei Dispositivi

### Natura e Caratteristiche

**Metafora**: Come traduttori specializzati - ognuno conosce perfettamente la "lingua" di uno specifico dispositivo e la traduce in "lingua OS standard".

**Caratteristiche Fondamentali**:
- **Un driver per classe di dispositivi**: Un driver SCSI gestisce tutti i dischi SCSI
- **OS-dipendenti**: Scritti per un sistema operativo specifico
- **Prodotti dal costruttore**: Chi fa l'hardware sa meglio come controllarlo
- **Modalità kernel**: Accesso diretto ai registri del controller

### Modalità di Installazione

**Installazione Statica**:
- **Metafora**: Come costruire una casa con tutto già incluso
- **Processo**: Driver compilato insieme al kernel
- **Vantaggi**: Efficienza massima
- **Svantaggi**: Ogni modifica richiede ricompilazione completa

**Installazione Dinamica**:
- **Metafora**: Come un appartamento arredato dove si possono cambiare i mobili
- **Processo**: Driver caricati a runtime
- **Vantaggi**: Flessibilità, no ricompilazione
- **Svantaggi**: Maggiore complessità

### Struttura Operativa di un Driver

**Fasi di Funzionamento**:

1. **Ricezione e Validazione**:
   - Riceve richiesta astratta ("leggi blocco 1000")
   - Verifica parametri di input
   - Converte in parametri specifici (cilindro 5, testina 3, settore 12)

2. **Controllo Disponibilità**:
   - Verifica se dispositivo è libero
   - Se occupato → mette in coda
   - Se libero → procede

3. **Invio Comandi**:
   - Traduce operazione in sequenza di comandi hardware
   - Scrive nei registri del controller
   - Verifica accettazione comandi

4. **Attesa Completamento**:
   - **PIO**: Attesa attiva (per operazioni veloci)
   - **Interrupt**: Blocco fino a interruzione (per operazioni lenti)

5. **Gestione Risultato**:
   - Controlla errori
   - Prepara dati di output
   - Gestisce coda di richieste

### Problematiche Avanzate

**Rientranza (Reentrancy)**:
- **Problema**: Un driver può essere interrotto e chiamato di nuovo
- **Metafora**: Come un cuoco che sta preparando un piatto e viene interrotto per un ordine urgente - deve essere capace di gestire entrambi senza confondersi
- **Soluzione**: State locali invece che globali

**Hot-Plugging**:
- **Problema**: Dispositivi rimossi durante l'uso
- **Metafora**: Come quando qualcuno stacca la stampante mentre state stampando
- **Soluzione**: Rilevamento disconnessione e cleanup delle richieste pendenti

### Driver in User-Mode

**Vantaggi**:
- **Stabilità**: Driver difettosi non crashano il sistema
- **Sviluppo semplificato**: Linguaggi ad alto livello, debug più facile

**Svantaggi**:
- **Performance**: Transizioni user-kernel costose
- **Interruzioni**: Difficili da gestire in user-space

**Esempio**: MINIX 3 usa questo approccio per massimizzare la stabilità

## Livello 3: Software Indipendente dai Dispositivi

### Ruolo Centrale

**Metafora**: Come un traduttore universale che conosce tutte le lingue - fa da ponte tra il mondo "umano" (applicazioni) e il mondo "specialistico" (driver specifici).

### Funzioni Chiave

#### Interfaccia Uniforme per Driver

**Problema da Risolvere**: Senza standardizzazione, ogni driver avrebbe interfacce diverse.

**Soluzione**: 
- **API standardizzata** per ogni classe di dispositivi
- **Tabelle di funzioni** fornite da ogni driver
- **Schema di naming uniforme**

**Esempio Linux**:
\`\`\`c
struct file_operations {
    ssize_t (*read)(struct file*, char*, size_t, loff_t*);
    ssize_t (*write)(struct file*, const char*, size_t, loff_t*);
    int (*open)(struct inode*, struct file*);
    // ... altre funzioni standard
};
\`\`\`

**Sistema di Naming Unix**:
- **File speciali** in \`/dev\`
- **Major number**: Identifica il driver (8 = SCSI disk)
- **Minor number**: Identifica il dispositivo specifico (1 = prima partizione)
- Esempio: \`/dev/sda1\` → major=8, minor=1

#### Gestione del Buffering

**Evoluzione delle Strategie**:

**1. Nessun Buffering**:
- **Metafora**: Come trasportare acqua con un cucchiaino
- **Problema**: Un interrupt per carattere = inefficienza massima

**2. Buffer nello Spazio Utente**:
- **Metafora**: Come avere una tanica personale
- **Problema**: Rischio paging - se la pagina va su disco mentre arrivano dati, si perdono

**3. Buffer nel Kernel**:
- **Metafora**: Come un serbatoio pubblico sempre disponibile
- **Problema**: Se il buffer kernel è pieno e la pagina utente non è in memoria?

**4. Double Buffering**:
- **Metafora**: Come avere due secchi - mentre uno si riempie, l'altro si svuota
- **Vantaggi**: Soluzione al problema precedente
- **Limite**: Inadeguato per burst veloci

**5. Buffering Circolare**:
- **Metafora**: Come una catena di montaggio con tanti contenitori
- **Implementazione**: Pool di k buffer usati a rotazione

#### Gestione degli Errori

**Tipologie di Errori**:

**Errori di Programmazione**:
- **Natura**: Richieste non valide dal programma
- **Esempi**: Scrivere su tastiera, leggere da stampante, dispositivo inesistente
- **Gestione**: Restituire codice errore immediato
- **Metafora**: Come chiedere a un muto di parlare - impossibile per natura

**Errori I/O**:
- **Natura**: Problemi durante l'operazione
- **Esempi**: Settore danneggiato, dispositivo spento, cavo scollegato
- **Gestione**: Tentativo di recovery, escalation se necessario
- **Metafora**: Come una macchina che non parte - potrebbe essere solo batteria scarica (recuperabile) o motore rotto (irrecuperabile)

#### Allocazione Dispositivi Dedicati

**Approccio 1 - Tentativo Diretto**:
\`\`\`
if (open("/dev/printer") == success) {
    // usa stampante
} else {
    // gestisci errore
}
\`\`\`
**Problema**: Rischio deadlock se il processo non rilascia mai

**Approccio 2 - Gestione OS**:
\`\`\`
request_device("printer");  // OS gestisce la coda
// usa dispositivo quando disponibile
release_device("printer");  // OS controlla il rilascio
\`\`\`
**Vantaggi**: Deadlock-free, gestione trasparente della coda

## Livello 4: Software Spazio Utente

### Librerie di Sistema

**Ruolo**: Semplificare l'uso delle system call per i programmatori.

**Esempio Tipico**:
\`\`\`c
printf("Valore: %d\\n", x);
\`\`\`
Internamente diventa:
1. Costruzione stringa formattata
2. Chiamata a \`write(stdout, buffer, length)\`
3. Gestione codici di ritorno ed errori

**Metafora**: Come un menu al ristorante - nasconde la complessità della cucina dietro nomi semplici e comprensibili.

### Sistemi di Spooling

**Concetto Fondamentale**: Gestire dispositivi dedicati attraverso processi demone specializzati.

**Componenti del Sistema**:
- **Spooler**: Processo demone che gestisce le code
- **Directory di spooling**: Dove vengono memorizzati i job (es. \`/var/spool/cups\`)
- **File speciali**: Dispositivi accessibili solo al demone

**Esempio - Sistema di Stampa**:
\`\`\`
Processo utente → Comando lp → File in /var/spool/cups → 
Demone cupsd → /dev/lp0 → Stampante fisica
\`\`\`

**Vantaggi**:
- **Deadlock-free**: Solo il demone accede al dispositivo
- **Priorità**: Gestione sofisticata delle code
- **Fault tolerance**: Recovery automatico dei job falliti

---

# 📋 PARTE V: ESEMPIO PRATICO - DRIVER IDE

## Protocollo IDE

**Metafora**: Come il protocollo per pilotare un aereo - sequenza precisa di controlli e azioni.

### Registri del Controller

**4 Tipi di Registri**:
- **Controllo**: Configurazione generale
- **Comando**: Parametri specifici dell'operazione  
- **Stato**: Informazioni sullo stato attuale
- **Errore**: Dettagli sui problemi occorsi

### Sequenza Operativa Standard

1. **Attesa Ready**: Polling del registro stato fino a READY && !BUSY
2. **Configurazione**: Scrittura parametri (settori, LBA, master/slave)
3. **Avvio Comando**: Scrittura comando READ/WRITE
4. **Trasferimento Dati**: Solo per scritture - attesa DRQ e invio dati
5. **Gestione Interrupt**: Ricezione notifica completamento
6. **Controllo Errori**: Verifica bit ERROR nel registro stato

### Implementazione xv6

**Funzioni Principali**:

- \`ide_rw()\`: Entry point - accoda o esegue direttamente
- \`ide_start_request()\`: Configura e avvia operazione hardware
- \`ide_wait_ready()\`: Implementa polling per stato READY
- \`ide_intr()\`: Gestore interrupt - legge dati e sblocca processi

**Flusso Operativo**:
\`\`\`
Richiesta → ide_rw() → Coda/Esecuzione → ide_start_request() → 
Hardware → Interrupt → ide_intr() → Wakeup processo
\`\`\`

---

> **💡 SINTESI FINALE**
> 
> **Architettura**: 4 livelli gerarchici (user-space, indipendente, driver, interrupt) che traducono progressivamente le richieste astratte in comandi hardware specifici.
> 
> **Interazione HW**: 3 modalità (PIO=polling continuo, Interrupt=CPU libera tra operazioni, DMA=controller autonomo) con trade-off tra semplicità, efficienza e complessità.
> 
> **Obiettivi**: Indipendenza dispositivi, naming uniforme, gestione errori trasparente, buffering intelligente, supporto condivisione/dedicazione.
> 
> **Implementazione**: Driver specializzati per controllo HW, software intermedio per uniformità, librerie user-space per semplicità programmazione, sistemi spooling per dispositivi dedicati.
`,Tf=/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;function Ll(e){try{return e.replace(Tf,"")}catch{return e}}function Mr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Lf(e,n){const t=Ll(e);for(const r of t.split(/\r?\n/)){const i=r.match(/^#\s+(.+)/);if(i)return i[1].trim()}return n}function jf(e){const t=Ll(e).split(/\n\s*\n/);for(const r of t){const i=r.trim();if(!(!i||i.startsWith("#")))return i.startsWith(">")?i.replace(/^>\s*/gm,"").replace(/\*\*|__/g,"").split(/\n/)[0].trim():i.replace(/\*\*|__/g,"").split(/\n/)[0].trim()}return""}function Uf(e){const t=Ll(e).replace(/\r\n?/g,`
`).split(`
`);let r="",i=!1,o=null;for(let l=0;l<t.length;l++){const a=t[l],u=a.trimEnd();if(u.match(/^```/)){i?(i=!1,r+="</code></pre>"):(i=!0,r+="<pre><code>");continue}if(i){r+=Mr(a)+`
`;continue}const v=u.match(/^(#{1,3})\s+(.+)/);if(v){o&&(r+=`</${o}>`,o=null);const m=v[1].length;r+=`<h${m}>${yt(v[2])}</h${m}>`;continue}if(/^>\s*/.test(u)){o&&(r+=`</${o}>`,o=null),r+=`<blockquote>${yt(u.replace(/^>\s*/,""))}</blockquote>`;continue}if(/^\d+\.\s+/.test(u)){o!=="ol"&&(o&&(r+=`</${o}>`),r+="<ol>",o="ol"),r+=`<li>${yt(u.replace(/^\d+\.\s+/,""))}</li>`;continue}if(/^[-*]\s+/.test(u)){o!=="ul"&&(o&&(r+=`</${o}>`),r+="<ul>",o="ul"),r+=`<li>${yt(u.replace(/^[-*]\s+/,""))}</li>`;continue}if(u===""){o&&(r+=`</${o}>`,o=null),r+=`
`;continue}o&&(r+=`</${o}>`,o=null),r+=`<p>${yt(u)}</p>`}return o&&(r+=`</${o}>`),r}function yt(e){return e=e.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,(n,t,r)=>`<a href="${Mr(r)}" target="_blank" rel="noopener noreferrer">${Mr(t)}</a>`),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/(^|\W)\*([^*]+)\*(?=\W|$)/g,"$1<em>$2</em>"),e=e.replace(/`([^`]+)`/g,(n,t)=>`<code>${Mr(t)}</code>`),e}function Af(e,n,t){return{id:n,title:Lf(e,t),description:jf(e),html:Uf(e)}}const Ff=()=>{const[e,n]=De.useState(()=>{if(typeof window<"u"){const t=localStorage.getItem("theme");return t==="dark"||t==="light"?t:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"});return De.useEffect(()=>{const t=window.document.documentElement;e==="dark"?t.classList.add("dark"):t.classList.remove("dark"),localStorage.setItem("theme",e)},[e]),k.jsx("button",{onClick:()=>n(t=>t==="dark"?"light":"dark"),className:"p-2 rounded-lg bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-yellow-300 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-200","aria-label":"Toggle dark mode",title:"Tema chiaro/scuro",children:k.jsx("i",{className:`fa-solid ${e==="dark"?"fa-sun":"fa-moon"} w-5 h-5`})})},Bf=()=>{const[e,n]=De.useState(null),[t,r]=De.useState(!1),i=De.useRef({}),o=Object.assign({"../slide_markdown/Lezione1.md":Of,"../slide_markdown/Lezione2.md":Rf}),l=De.useMemo(()=>{const c=["fa-microchip","fa-hard-drive","fa-network-wired","fa-diagram-project","fa-microchip","fa-screwdriver-wrench"];return Object.entries(o).sort(([v],[m])=>v.localeCompare(m)).map(([v,m],p)=>{const y=v.split("/").pop()||`sezione-${p+1}`,S=y.replace(/\W+/g,"-").replace(/(^-|-$)/g,"").toLowerCase();return{...Af(m,S,y.replace(/\.md$/i,"")),icon:c[p%c.length]}})},[o]);De.useEffect(()=>{!e&&l.length>0&&n(l[0].id)},[l,e]),De.useEffect(()=>{e&&i.current[e]&&i.current[e].scrollIntoView({behavior:"smooth",block:"start"})},[e]);const a=()=>window.scrollTo({top:0,behavior:"smooth"}),u=({sections:c,onSectionClick:v,currentSection:m})=>k.jsxs("div",{className:"bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 mb-6 shadow-sm",children:[k.jsx("div",{className:"flex items-center justify-between mb-3",children:k.jsxs("h3",{className:"font-semibold text-gray-900 dark:text-gray-100 flex items-center",children:[k.jsx("i",{className:"fa-solid fa-list-ul w-5 h-5 mr-2 text-blue-600 dark:text-blue-400"}),"Sezioni"]})}),k.jsx("div",{className:"grid gap-2",children:c.map(p=>k.jsxs("button",{onClick:()=>v(p.id),className:`flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${m===p.id?"bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700":"hover:bg-gray-50 dark:hover:bg-gray-700 border border-transparent"}`,children:[k.jsx("i",{className:`fa-solid ${p.icon||"fa-circle"} text-blue-600 dark:text-blue-400`}),k.jsx("span",{className:"text-sm font-medium text-gray-900 dark:text-gray-100",children:p.title}),m===p.id&&k.jsx("i",{className:"fa-solid fa-check text-blue-600 dark:text-blue-400 ml-auto"})]},p.id))})]});return k.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950",children:[k.jsx("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 sticky top-0 z-20",children:k.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-4 flex items-center justify-between",children:[k.jsxs("div",{className:"flex items-center space-x-3",children:[k.jsx("div",{className:"w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-sm",children:k.jsx("i",{className:"fa-solid fa-graduation-cap"})}),k.jsxs("div",{children:[k.jsx("h1",{className:"text-lg font-bold text-gray-900 dark:text-gray-100",children:"Sistemi Operativi 2 — Lezioni I/O"}),k.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Una lezione unica, sezioni dalle slide"})]})]}),k.jsxs("div",{className:"flex items-center space-x-2",children:[k.jsx(Ff,{}),k.jsx("button",{onClick:()=>r(c=>!c),className:"lg:hidden bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 p-2 rounded-lg","aria-label":"Apri menu sezioni",children:k.jsx("i",{className:"fa-solid fa-bars"})})]})]})}),k.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-6",children:[k.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 mb-6 text-white shadow-sm",children:k.jsxs("div",{className:"flex items-start justify-between",children:[k.jsxs("div",{children:[k.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Input/Output nei Sistemi Operativi"}),k.jsx("p",{className:"text-sm opacity-90",children:"Contenuti accorpati in un'unica lezione, organizzata in sezioni generate dai file Markdown."})]}),k.jsxs("div",{className:"hidden sm:flex items-center space-x-2 text-white/90",children:[k.jsx("i",{className:"fa-solid fa-layer-group"}),k.jsxs("span",{className:"text-sm font-medium",children:[l.length," sezioni"]})]})]})}),t&&k.jsx("div",{className:"lg:hidden animate-fadeIn",children:k.jsx(u,{sections:l,onSectionClick:n,currentSection:e})}),k.jsxs("div",{className:"lg:grid lg:grid-cols-4 lg:gap-8",children:[k.jsx("div",{className:"hidden lg:block lg:col-span-1",children:k.jsx("div",{className:"sticky top-28",children:k.jsx(u,{sections:l,onSectionClick:n,currentSection:e})})}),k.jsxs("div",{className:"lg:col-span-3",children:[l.map(c=>k.jsxs("div",{ref:v=>i.current[c.id]=v,className:"bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 mb-6 shadow-sm animate-fadeIn",children:[k.jsxs("div",{className:"flex items-start space-x-3 mb-3",children:[k.jsx("i",{className:"fa-solid fa-circle text-blue-500 mt-1"}),k.jsxs("div",{className:"flex-1",children:[k.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-gray-100 mb-1",children:c.title}),c.description&&k.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:c.description})]}),k.jsx("button",{onClick:()=>n(c.id),className:"text-blue-600 dark:text-blue-400 text-sm hover:underline",children:"vai alla sezione"})]}),k.jsx("div",{className:"content leading-relaxed text-gray-800 dark:text-gray-200",dangerouslySetInnerHTML:{__html:c.html}}),k.jsxs("div",{className:"mt-6 grid md:grid-cols-2 gap-4",children:[k.jsxs("div",{className:"rounded-lg border border-blue-100 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/30 p-4",children:[k.jsxs("div",{className:"flex items-center text-blue-700 dark:text-blue-300 mb-2",children:[k.jsx("i",{className:"fa-solid fa-lightbulb mr-2"}),k.jsx("span",{className:"font-semibold",children:"Idea chiave"})]}),k.jsx("p",{className:"text-sm text-blue-800 dark:text-blue-200",children:"Rifletti sui concetti principali della sezione e su come si collegano ai dispositivi reali."})]}),k.jsxs("div",{className:"rounded-lg border border-emerald-100 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-900/30 p-4",children:[k.jsxs("div",{className:"flex items-center text-emerald-700 dark:text-emerald-300 mb-2",children:[k.jsx("i",{className:"fa-solid fa-diagram-project mr-2"}),k.jsx("span",{className:"font-semibold",children:"Schema mentale"})]}),k.jsx("p",{className:"text-sm text-emerald-800 dark:text-emerald-200",children:"Collega i livelli del software I/O con i relativi componenti hardware e le interazioni."})]})]})]},c.id)),k.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 border border-green-200 dark:border-green-700 rounded-xl p-6",children:[k.jsxs("div",{className:"flex items-center space-x-3 mb-2",children:[k.jsx("i",{className:"fa-solid fa-flag-checkered text-green-600 dark:text-green-400"}),k.jsx("h4",{className:"font-bold text-green-900 dark:text-green-100 text-lg",children:"Riepilogo"})]}),k.jsx("p",{className:"text-green-800 dark:text-green-300 leading-relaxed",children:"Hai esplorato i principi dell'I/O e del software I/O. Usa il menu laterale per ripassare rapidamente le sezioni chiave."})]})]})]})]}),k.jsx("div",{className:"fixed bottom-6 right-6 flex flex-col space-y-2 z-20",children:k.jsx("button",{onClick:a,className:"bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110","aria-label":"Torna su",children:k.jsx("i",{className:"fa-solid fa-arrow-up"})})})]})};Ki.createRoot(document.getElementById("root")).render(k.jsx(De.StrictMode,{children:k.jsx(Bf,{})}));
