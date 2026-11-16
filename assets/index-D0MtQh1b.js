var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function A(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var j=/\/+/g;function M(e,t){return typeof e==`object`&&e&&e.key!=null?A(``+e.key):t.toString(36)}function ee(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function te(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,te(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+M(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(j,`$&/`)+`/`),te(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(j,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+M(a,u),c+=te(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+M(a,u++),c+=te(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return te(ee(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function N(e,t,n){if(e==null)return e;var r=[],i=0;return te(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ne(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var re=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ie(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,re)}catch(e){re(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function ae(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ie(ae.bind(null,e))}var oe={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=oe,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=ae,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ne}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ie,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),k=Symbol.for(`react.transitional.element`),A=Symbol.for(`react.portal`),j=Symbol.for(`react.fragment`),M=Symbol.for(`react.strict_mode`),ee=Symbol.for(`react.profiler`),te=Symbol.for(`react.consumer`),N=Symbol.for(`react.context`),ne=Symbol.for(`react.forward_ref`),re=Symbol.for(`react.suspense`),ie=Symbol.for(`react.suspense_list`),ae=Symbol.for(`react.memo`),oe=Symbol.for(`react.lazy`),se=Symbol.for(`react.activity`),ce=Symbol.for(`react.legacy_hidden`),le=Symbol.for(`react.memo_cache_sentinel`),ue=Symbol.for(`react.view_transition`),de=Symbol.for(`react.recoverable`),fe=Symbol.iterator;function pe(e){return typeof e!=`object`||!e?null:(e=fe&&e[fe]||e[`@@iterator`],typeof e==`function`?e:null)}var me=Symbol.for(`react.client.reference`);function he(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===me?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case j:return`Fragment`;case ee:return`Profiler`;case M:return`StrictMode`;case re:return`Suspense`;case ie:return`SuspenseList`;case se:return`Activity`;case ue:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case A:return`Portal`;case N:return e.displayName||`Context`;case te:return(e._context.displayName||`Context`)+`.Consumer`;case ne:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ae:return t=e.displayName||null,t===null?he(e.type)||`Memo`:t;case oe:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}var ge=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e={pending:!1,data:null,method:null,action:null},ve=[],ye=-1;function be(e){return{current:e}}function xe(e){0>ye||(e.current=ve[ye],ve[ye]=null,ye--)}function I(e,t){ye++,ve[ye]=e.current,e.current=t}var Se=be(null),Ce=be(null),we=be(null),Te=be(null);function Ee(e,t){switch(I(we,t),I(Ce,e),I(Se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}xe(Se),I(Se,e)}function De(){xe(Se),xe(Ce),xe(we)}function Oe(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,I(Te,e)),t=Se.current;var n=dp(t,e.type);t!==n&&(I(Ce,e),I(Se,n))}function ke(e){Ce.current===e&&(xe(Se),xe(Ce)),Te.current===e&&(xe(Te),sh._currentValue=_e)}var Ae,je;function Me(e){if(Ae===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ae=t&&t[1]||``,je=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ae+e+je}var Ne=!1;function Pe(e,t){if(!e||Ne)return``;Ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ne=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Me(n):``}function Fe(e,t){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me(`Lazy`);case 13:return e.child!==t&&t!==null?Me(`Suspense Fallback`):Me(`Suspense`);case 19:return Me(`SuspenseList`);case 0:case 15:return Pe(e.type,!1);case 11:return Pe(e.type.render,!1);case 1:return Pe(e.type,!0);case 31:return Me(`Activity`);case 30:return Me(`ViewTransition`);default:return``}}function Ie(e){try{var t=``,n=null;do t+=Fe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Le=Object.prototype.hasOwnProperty,Re=t.unstable_scheduleCallback,ze=t.unstable_cancelCallback,Be=t.unstable_shouldYield,Ve=t.unstable_requestPaint,He=t.unstable_now,Ue=t.unstable_getCurrentPriorityLevel,We=t.unstable_ImmediatePriority,Ge=t.unstable_UserBlockingPriority,Ke=t.unstable_NormalPriority,qe=t.unstable_LowPriority,Je=t.unstable_IdlePriority,Ye=t.log,Xe=t.unstable_setDisableYieldValue,Ze=null,Qe=null;function $e(e){if(typeof Ye==`function`&&Xe(e),Qe&&typeof Qe.setStrictMode==`function`)try{Qe.setStrictMode(Ze,e)}catch{}}var et=Math.clz32?Math.clz32:rt,tt=Math.log,nt=Math.LN2;function rt(e){return e>>>=0,e===0?32:31-(tt(e)/nt|0)|0}var it=256,at=262144,ot=4194304;function st(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=st(n))):i=st(o):i=st(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=st(n))):i=st(o)):i=st(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function lt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ut(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-et(n),i=1<<r;t|=e[r],n&=~i}return t}function dt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ft(){var e=ot;return ot<<=1,!(ot&62914560)&&(ot=4194304),e}function pt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ht(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-et(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&gt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function gt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-et(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function _t(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function vt(e,t){var n=t&-t;return n=n&42?1:yt(n),(n&(e.suspendedLanes|t))===0?n:0}function yt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function xt(){var e=F.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function St(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var Ct=Math.random().toString(36).slice(2),wt=`__reactFiber$`+Ct,Tt=`__reactProps$`+Ct,Et=`__reactContainer$`+Ct,Dt=`__reactEvents$`+Ct,Ot=`__reactListeners$`+Ct,kt=`__reactHandles$`+Ct,At=`__reactResources$`+Ct,jt=`__reactMarker$`+Ct,Mt=`__reactLoad$`+Ct;function Nt(e){delete e[wt],delete e[Tt],delete e[Ot],delete e[kt]}function Pt(e){var t;if(t=e[wt])return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[wt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Ft(e){if(e=e[wt]||e[Et]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function It(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Lt(e){var t=e[At];return t||=e[At]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Rt(e){e[jt]=!0}function zt(e){e[Mt]=void 0}var Bt=new Set,Vt={};function Ht(e,t){Ut(e,t),Ut(e+`Capture`,t)}function Ut(e,t){for(Vt[e]=t,e=0;e<t.length;e++)Bt.add(t[e])}var Wt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Gt={},Kt={};function qt(e){return Le.call(Kt,e)?!0:Le.call(Gt,e)?!1:Wt.test(e)?Kt[e]=!0:(Gt[e]=!0,!1)}var L=!1;function Jt(){var e=L;return L=!1,e}function Yt(e,t,n){if(qt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Xt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Qt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function $t(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function en(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tn(e){if(!e._valueTracker){var t=$t(e)?`checked`:`value`;e._valueTracker=en(e,t,``+e[t])}}function nn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=$t(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var rn=/[\n"\\]/g;function an(e){return e.replace(rn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function on(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Qt(t)):e.value!==``+Qt(t)&&(e.value=``+Qt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):cn(e,Qt(n)):o===`number`&&e.value==t?cn(e,Qt(e.value)):cn(e,Qt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Qt(s):e.removeAttribute(`name`)}function sn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){tn(e);return}n=n==null?``:``+Qt(n),t=t==null?n:``+Qt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),tn(e)}function cn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function un(e,t,n){t!=null&&(t=``+Qt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Qt(n)}function dn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ge(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Qt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),tn(e)}function fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function mn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||pn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function hn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,L=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(mn(e,a,r),L=!0)}else for(var o in t)t.hasOwnProperty(o)&&mn(e,o,t[o])}function gn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var _n=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),vn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yn(e){return vn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function bn(){}var xn=null;function Sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cn=null,wn=null;function Tn(e){var t=Ft(e);if(t&&(e=t.stateNode)){var n=e[Tt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(on(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+an(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Tt]||null;if(!a)throw Error(i(90));on(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&nn(r)}break a;case`textarea`:un(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}}}var En=!1;function Dn(e,t,n){if(En)return e(t,n);En=!0;try{return e(t)}finally{if(En=!1,(Cn!==null||wn!==null)&&(zd(),Cn&&(t=Cn,e=wn,wn=Cn=null,Tn(t),e)))for(t=0;t<e.length;t++)Tn(e[t])}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Tt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var kn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,An=!1;if(kn)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){An=!0}}),window.addEventListener(`test`,jn,jn),window.removeEventListener(`test`,jn,jn)}catch{An=!1}var Mn=null,Nn=null,Pn=null;function Fn(){if(Pn)return Pn;var e,t=Nn,n=t.length,r,i=`value`in Mn?Mn.value:Mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Pn=i.slice(e,1<r?1-r:void 0)}function In(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function Rn(){return!1}function zn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Ln:Rn,this.isPropagationStopped=Rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vn=zn(Bn),Hn=D({},Bn,{view:0,detail:0}),Un=zn(Hn),Wn,Gn,Kn,qn=D({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Kn&&(Kn&&e.type===`mousemove`?(Wn=e.screenX-Kn.screenX,Gn=e.screenY-Kn.screenY):Gn=Wn=0,Kn=e),Wn)},movementY:function(e){return`movementY`in e?e.movementY:Gn}}),Jn=zn(qn),Yn=zn(D({},qn,{dataTransfer:0})),Xn=zn(D({},Hn,{relatedTarget:0})),Zn=zn(D({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Qn=zn(D({},Bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),$n=zn(D({},Bn,{data:0})),er={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},tr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},nr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function rr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nr[e])?!!t[e]:!1}function ir(){return rr}var ar=zn(D({},Hn,{key:function(e){if(e.key){var t=er[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=In(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?tr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(e){return e.type===`keypress`?In(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?In(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),or=zn(D({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),sr=zn(D({},Bn,{submitter:0})),cr=zn(D({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir})),lr=zn(D({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),ur=zn(D({},qn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),dr=zn(D({},Bn,{newState:0,oldState:0,source:0})),fr=[9,13,27,32],pr=kn&&`CompositionEvent`in window,mr=null;kn&&`documentMode`in document&&(mr=document.documentMode);var hr=kn&&`TextEvent`in window&&!mr,gr=kn&&(!pr||mr&&8<mr&&11>=mr),_r=` `,vr=!1;function yr(e,t){switch(e){case`keyup`:return fr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function br(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var xr=!1;function Sr(e,t){switch(e){case`compositionend`:return br(t);case`keypress`:return t.which===32?(vr=!0,_r):null;case`textInput`:return e=t.data,e===_r&&vr?null:e;default:return null}}function Cr(e,t){if(xr)return e===`compositionend`||!pr&&yr(e,t)?(e=Fn(),Pn=Nn=Mn=null,xr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return gr&&t.locale!==`ko`?null:t.data;default:return null}}var wr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!wr[e.type]:t===`textarea`}function Er(e,t,n,r){Cn?wn?wn.push(r):wn=[r]:Cn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Vn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Dr=null,Or=null;function kr(e){Vf(e,0)}function Ar(e){if(nn(It(e)))return e}function jr(e,t){if(e===`change`)return t}var Mr=!1;if(kn){var Nr;if(kn){var Pr=`oninput`in document;if(!Pr){var Fr=document.createElement(`div`);Fr.setAttribute(`oninput`,`return;`),Pr=typeof Fr.oninput==`function`}Nr=Pr}else Nr=!1;Mr=Nr&&(!document.documentMode||9<document.documentMode)}function Ir(){Dr&&(Dr.detachEvent(`onpropertychange`,Lr),Or=Dr=null)}function Lr(e){if(e.propertyName===`value`&&Ar(Or)){var t=[];Er(t,Or,e,Sn(e)),Dn(kr,t)}}function Rr(e,t,n){e===`focusin`?(Ir(),Dr=t,Or=n,Dr.attachEvent(`onpropertychange`,Lr)):e===`focusout`&&Ir()}function zr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Ar(Or)}function Br(e,t){if(e===`click`)return Ar(t)}function Vr(e,t){if(e===`input`||e===`change`)return Ar(t)}function Hr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ur=typeof Object.is==`function`?Object.is:Hr;function R(e,t){if(Ur(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Le.call(t,i)||!Ur(e[i],t[i]))return!1}return!0}function Wr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Gr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kr(e,t){var n=Gr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Gr(n)}}function qr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function Yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Xr=kn&&`documentMode`in document&&11>=document.documentMode,Zr=null,Qr=null,$r=null,ei=!1;function ti(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ei||Zr==null||Zr!==Wr(r)||(r=Zr,`selectionStart`in r&&Yr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&R($r,r)||($r=r,r=Jf(Qr,`onSelect`),0<r.length&&(t=new Vn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Zr)))}function ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ri={animationend:ni(`Animation`,`AnimationEnd`),animationiteration:ni(`Animation`,`AnimationIteration`),animationstart:ni(`Animation`,`AnimationStart`),transitionrun:ni(`Transition`,`TransitionRun`),transitionstart:ni(`Transition`,`TransitionStart`),transitioncancel:ni(`Transition`,`TransitionCancel`),transitionend:ni(`Transition`,`TransitionEnd`)},ii={},ai={};kn&&(ai=document.createElement(`div`).style,`AnimationEvent`in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),`TransitionEvent`in window||delete ri.transitionend.transition);function oi(e){if(ii[e])return ii[e];if(!ri[e])return e;var t=ri[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ai)return ii[e]=t[n];return e}var si=oi(`animationend`),ci=oi(`animationiteration`),li=oi(`animationstart`),ui=oi(`transitionrun`),di=oi(`transitionstart`),fi=oi(`transitioncancel`),pi=oi(`transitionend`),mi=new Map,hi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);hi.push(`scrollEnd`);function z(e,t){mi.set(e,t),Ht(t,[e])}var gi=0;function _i(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=gi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function vi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function yi(e,t){return e=vi(e),t=vi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var bi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},xi=[],Si=0,Ci=0;function wi(){for(var e=Si,t=Ci=Si=0;t<e;){var n=xi[t];xi[t++]=null;var r=xi[t];xi[t++]=null;var i=xi[t];xi[t++]=null;var a=xi[t];if(xi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Oi(n,i,a)}}function Ti(e,t,n,r){xi[Si++]=e,xi[Si++]=t,xi[Si++]=n,xi[Si++]=r,Ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ei(e,t,n,r){return Ti(e,t,n,r),ki(e)}function Di(e,t){return Ti(e,null,null,t),ki(e)}function Oi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-et(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ki(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ai={};function ji(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(e,t,n,r){return new ji(e,t,n,r)}function Ni(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pi(e,t){var n=e.alternate;return n===null?(n=Mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Fi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ii(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Ni(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Se.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case se:return e=Mi(31,n,t,a),e.elementType=se,e.lanes=o,e;case j:return Li(n.children,a,o,t);case M:s=8,a|=24;break;case ee:return e=Mi(12,n,t,a|2),e.elementType=ee,e.lanes=o,e;case re:return e=Mi(13,n,t,a),e.elementType=re,e.lanes=o,e;case ie:return e=Mi(19,n,t,a),e.elementType=ie,e.lanes=o,e;case ce:case ue:return e=a|32,e=Mi(30,n,t,e),e.elementType=ue,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case N:s=10;break a;case te:s=9;break a;case ne:s=11;break a;case ae:s=14;break a;case oe:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Li(e,t,n,r){return e=Mi(7,e,r,t),e.lanes=n,e}function Ri(e,t,n){return e=Mi(6,e,null,t),e.lanes=n,e}function zi(e){var t=Mi(18,null,null,0);return t.stateNode=e,t}function Bi(e,t,n){return t=Mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Vi=new WeakMap;function Hi(e,t){if(typeof e==`object`&&e){var n=Vi.get(e);return n===void 0?(t={value:e,source:t,stack:Ie(t)},Vi.set(e,t),t):n}return{value:e,source:t,stack:Ie(t)}}var Ui=[],Wi=0,Gi=null,Ki=0,qi=[],Ji=0,Yi=null,Xi=1,Zi=``;function Qi(e,t){Ui[Wi++]=Ki,Ui[Wi++]=Gi,Gi=e,Ki=t}function $i(e,t,n){qi[Ji++]=Xi,qi[Ji++]=Zi,qi[Ji++]=Yi,Yi=e;var r=Xi;e=Zi;var i=32-et(r)-1;r&=~(1<<i),n+=1;var a=32-et(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xi=1<<32-et(t)+i|n<<i|r,Zi=a+e}else Xi=1<<a|n<<i|r,Zi=e}function ea(e){e.return!==null&&(Qi(e,1),$i(e,1,0))}function ta(e){for(;e===Gi;)Gi=Ui[--Wi],Ui[Wi]=null,Ki=Ui[--Wi],Ui[Wi]=null;for(;e===Yi;)Yi=qi[--Ji],qi[Ji]=null,Zi=qi[--Ji],qi[Ji]=null,Xi=qi[--Ji],qi[Ji]=null}function na(e,t){qi[Ji++]=Xi,qi[Ji++]=Zi,qi[Ji++]=Yi,Xi=t.id,Zi=t.overflow,Yi=e}var ra=null,B=null,V=!1,ia=null,aa=!1,oa=Error(i(519));function sa(e){throw pa(Hi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),oa}function ca(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[wt]=e,t[Tt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),sn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),dn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||sa(e,!0)}function la(e){for(ra=e.return;ra;)switch(ra.tag){case 5:case 31:case 13:aa=!1;return;case 27:case 3:aa=!0;return;default:ra=ra.return}}function ua(e){if(e!==ra)return!1;if(!V)return la(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&B&&sa(e),la(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));B=dm(e)}else t===27?(t=B,Sp(e.type)?(e=um,um=null,B=e):B=t):B=ra?lm(e.stateNode.nextSibling):null;return!0}function da(){B=ra=null,V=!1}function fa(){var e=ia;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),ia=null),e}function pa(e){ia===null?ia=[e]:ia.push(e)}var ma=be(null),ha=null,ga=null;function _a(e,t,n){I(ma,t._currentValue),t._currentValue=n}function va(e){e._currentValue=ma.current,xe(ma)}function ya(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ba(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ya(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ya(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ya(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function xa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ur(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Te.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&ba(t,e,n,r),t.flags|=262144,e!==null}function Sa(e){for(e=e.firstContext;e!==null;){if(!Ur(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){ha=e,ga=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wa(e){return Ea(ha,e)}function Ta(e,t){return ha===null&&Ca(e),Ea(e,t)}function Ea(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ga===null){if(e===null)throw Error(i(308));ga=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ga=ga.next=t;return n}var Da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Oa=t.unstable_scheduleCallback,ka=t.unstable_NormalPriority,Aa={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ja(){return{controller:new Da,data:new Map,refCount:0}}function Ma(e){e.refCount--,e.refCount===0&&Oa(ka,function(){e.controller.abort()})}function Na(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Pa=null;function Fa(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ia=null,La=0,Ra=0,za=null;function Ba(e,t){if(Ia===null){var n=Ia=[];La=0,Ra=Pf(),za={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return La++,t.then(Va,Va),t}function Va(){if(--La===0&&(Pa=null,Ia!==null)){za!==null&&(za.status=`fulfilled`);var e=Ia;Ia=null,Ra=0,za=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ha(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ua=P.S;P.S=function(e,t){if(hd=He(),typeof t==`object`&&t&&typeof t.then==`function`&&Ba(e,t),Pa!==null)for(var n=bf;n!==null;)Na(n,Pa),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Na(r,n),r=r.next;if(Ra!==0){r=Pa,r===null&&(r=Pa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ua!==null&&Ua(e,t)};var Wa=be(null);function Ga(){var e=Wa.current;return e===null?q.pooledCache:e}function Ka(e,t){t===null?I(Wa,Wa.current):I(Wa,t.pool)}function qa(){var e=Ga();return e===null?null:{parent:Aa._currentValue,pool:e}}var Ja=Error(i(460)),Ya=Error(i(474)),Xa=Error(i(542)),Za={then:function(){}};function Qa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function $a(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(bn,bn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ro(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(bn,bn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ro(e),e}throw to=t,Ja}}function eo(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(to=e,Ja):e}}var to=null;function no(){if(to===null)throw Error(i(459));var e=to;return to=null,e}function ro(e){if(e===Ja||e===Xa)throw Error(i(483))}var io=null,ao=0;function oo(e){var t=ao;return ao+=1,io===null&&(io=[]),$a(io,e,t)}function so(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function co(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function lo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Pi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ri(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===j?(e=d(e,t,n.props.children,r,n.key),so(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===oe&&eo(i)===t.type)?(t=a(t,n.props),so(t,n),t.return=e,t):(t=Ii(n.type,n.key,n.props,null,e.mode,r),so(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Bi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Li(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ri(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case k:return n=Ii(t.type,t.key,t.props,null,e.mode,n),so(n,t),n.return=e,n;case A:return t=Bi(t,e.mode,n),t.return=e,t;case oe:return t=eo(t),f(e,t,n)}if(ge(t)||pe(t))return t=Li(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,oo(t),n);if(t.$$typeof===N)return f(e,Ta(e,t),n);co(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case k:return n.key===i?l(e,t,n,r):null;case A:return n.key===i?u(e,t,n,r):null;case oe:return n=eo(n),p(e,t,n,r)}if(ge(n)||pe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,oo(n),r);if(n.$$typeof===N)return p(e,t,Ta(e,n),r);co(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case k:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case A:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case oe:return r=eo(r),m(e,t,n,r,i)}if(ge(r)||pe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,oo(r),i);if(r.$$typeof===N)return m(e,t,n,Ta(t,r),i);co(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Qi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Qi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Qi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Qi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Qi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Qi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===j&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case k:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===j){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),so(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===oe&&eo(l)===r.type){n(e,r.sibling),c=a(r,o.props),so(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===j?(c=Li(o.props.children,e.mode,c,o.key),so(c,o),c.return=e,e=c):(c=Ii(o.type,o.key,o.props,null,e.mode,c),so(c,o),c.return=e,e=c)}return s(e);case A:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Bi(o,e.mode,c),c.return=e,e=c}return s(e);case oe:return o=eo(o),_(e,r,o,c)}if(ge(o))return h(e,r,o,c);if(pe(o)){if(l=pe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,oo(o),c);if(o.$$typeof===N)return _(e,r,Ta(e,o),c);co(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ri(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ao=0;var i=_(e,t,n,r);return io=null,i}catch(t){if(t===Ja||t===Xa)throw t;var a=Mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var uo=lo(!0),fo=lo(!1),po=!1;function mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ho(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function go(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _o(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ki(e),Oi(e,null,n),t}return Ti(e,r,t,n),ki(e)}function vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_t(e,n)}}function yo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bo=!1;function xo(){if(bo){var e=za;if(e!==null)throw e}}function So(e,t,n,r){bo=!1;var i=e.updateQueue;po=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===Ra&&(bo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:po=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function Co(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function wo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Co(n[e],t)}var To=be(null),Eo=be(0);function Do(e,t){e=id,I(Eo,e),I(To,t),id=e|t.baseLanes}function Oo(){I(Eo,id),I(To,To.current)}function ko(){id=Eo.current,xe(To),xe(Eo)}var Ao=be(null),jo=null;function Mo(e){var t=e.alternate;I(Lo,Lo.current&1),I(Ao,e),jo===null&&(t===null||To.current!==null||t.memoizedState!==null)&&(jo=e)}function No(e){I(Lo,Lo.current),I(Ao,e),jo===null&&(jo=e)}function Po(e){e.tag===22?(I(Lo,Lo.current),I(Ao,e),jo===null&&(jo=e)):Fo()}function Fo(){I(Lo,Lo.current),I(Ao,Ao.current)}function Io(e){xe(Ao),jo===e&&(jo=null),xe(Lo)}var Lo=be(0);function Ro(e,t){I(Ao,Ao.current),I(Lo,t)}function zo(e){xe(Lo),xe(Ao),jo===e&&(jo=null)}function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vo=0,H=null,U=null,Ho=null,Uo=!1,Wo=!1,Go=!1,Ko=0,qo=0,Jo=null,Yo=0;function Xo(){throw Error(i(321))}function Zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ur(e[n],t[n]))return!1;return!0}function Qo(e,t,n,r,i,a){return Vo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?hc:gc,Go=!1,a=n(r,i),Go=!1,Wo&&(a=es(t,n,r,i)),$o(e),a}function $o(e){P.H=mc;var t=U!==null&&U.next!==null;if(Vo=0,Ho=U=H=null,Uo=!1,qo=0,Jo=null,t)throw Error(i(300));e===null||Nc||(e=e.dependencies,e!==null&&Sa(e)&&(Nc=!0))}function es(e,t,n,r){H=e;var a=0;do{if(Wo&&(Jo=null),qo=0,Wo=!1,25<=a)throw Error(i(301));if(a+=1,Ho=U=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=_c,o=t(n,r)}while(Wo);return o}function ts(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?cs(t):t,e=e.useState()[0],(U===null?null:U.memoizedState)!==e&&(H.flags|=1024),t}function ns(){var e=Ko!==0;return Ko=0,e}function rs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function is(e){if(Uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Uo=!1}Vo=0,Ho=U=H=null,Wo=!1,qo=Ko=0,Jo=null}function as(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ho===null?H.memoizedState=Ho=e:Ho=Ho.next=e,Ho}function os(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=Ho===null?H.memoizedState:Ho.next;if(t!==null)Ho=t,U=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},Ho===null?H.memoizedState=Ho=e:Ho=Ho.next=e}return Ho}function ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cs(e){var t=qo;return qo+=1,Jo===null&&(Jo=[]),e=$a(Jo,e,t),t=H,(Ho===null?t.memoizedState:Ho.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?hc:gc),e}function ls(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return cs(e);if(e.$$typeof===de)return;if(e.$$typeof===N)return wa(e)}throw Error(i(438,String(e)))}function us(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ss(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=le;return t.index++,n}function ds(e,t){return typeof t==`function`?t(e):t}function fs(e){return ps(os(),U,e)}function ps(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Vo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ra&&(d=!0);else if((Vo&p)===p){u=u.next,p===Ra&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,od|=p;f=u.action,Go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ur(o,e.memoizedState)&&(Nc=!0,d&&(n=za,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ms(e){var t=os(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ur(o,t.memoizedState)||(Nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hs(e,t,n){var r=H,a=os(),o=V;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ur((U||a).memoizedState,n);if(s&&(a.memoizedState=n,Nc=!0),a=a.queue,Bs(vs.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Ho!==null&&!!(Ho.memoizedState.tag&1),Fs(e?9:8,{destroy:void 0},_s.bind(null,r,a,n,t),null),e){if(r.flags|=2048,q===null)throw Error(i(349));o||Vo&127||gs(r,t,n)}return n}function gs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=ss(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _s(e,t,n,r){t.value=n,t.getSnapshot=r,ys(t)&&bs(e)}function vs(e,t,n){return n(function(){ys(t)&&bs(e)})}function ys(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ur(e,n)}catch{return!0}}function bs(e){var t=Di(e,2);t!==null&&Pd(t,e,2)}function xs(e){var t=as();if(typeof e==`function`){var n=e;if(e=n(),Go){$e(!0);try{n()}finally{$e(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:e},t}function Ss(e,t,n,r){return e.baseState=n,ps(e,U,typeof r==`function`?r:ds)}function Cs(e,t,n,r,a){if(dc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ws(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ws(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};o.types=a===null?null:a.types,P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),Ts(e,t,s)}catch(n){Ds(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),Ts(e,t,a)}catch(n){Ds(e,t,n)}}function Ts(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Es(e,t,n)},function(n){return Ds(e,t,n)}):Es(e,t,n)}function Es(e,t,n){t.status=`fulfilled`,t.value=n,Os(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ws(e,n)))}function Ds(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Os(t),t=t.next;while(t!==r)}e.action=null}function Os(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ks(e,t){return t}function As(e,t){if(V){var n=q.formState;if(n!==null){a:{var r=H;if(V){if(B){b:{for(var i=B,a=aa;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){B=lm(i.nextSibling),r=i.data===`F!`;break a}}sa(r)}r=!1}r&&(t=n[0])}}return n=as(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},n.queue=r,n=cc.bind(null,H,r),r.dispatch=n,r=xs(!1),a=uc.bind(null,H,!1,r.queue),r=as(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Cs.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function js(e){return Ms(os(),U,e)}function Ms(e,t,n){if(t=ps(e,t,ks)[0],e=fs(ds)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=cs(t)}catch(e){throw e===Ja?Xa:e}else r=t;t=os();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,Fs(9,{destroy:void 0},Ns.bind(null,i,n),null)),[r,a,e]}function Ns(e,t){e.action=t}function Ps(e){var t=os(),n=U;if(n!==null)return Ms(t,n,e);os(),t=t.memoizedState,n=os();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Fs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=ss(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Is(){return os().memoizedState}function Ls(e,t,n,r){var i=as();H.flags|=e,i.memoizedState=Fs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Rs(e,t,n,r){var i=os();r=r===void 0?null:r;var a=i.memoizedState.inst;U!==null&&r!==null&&Zo(r,U.memoizedState.deps)?i.memoizedState=Fs(t,a,n,r):(H.flags|=e,i.memoizedState=Fs(1|t,a,n,r))}function zs(e,t){Ls(8390656,8,e,t)}function Bs(e,t){Rs(2048,8,e,t)}function Vs(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=ss(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Hs(e){var t=os().memoizedState;return Vs({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Us(e,t){return Rs(4,2,e,t)}function Ws(e,t){return Rs(4,4,e,t)}function Gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ks(e,t,n){n=n==null?null:n.concat([e]),Rs(4,4,Gs.bind(null,t,e),n)}function qs(){}function Js(e,t){var n=os();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ys(e,t){var n=os();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Zo(t,r[1]))return r[0];if(r=e(),Go){$e(!0);try{e()}finally{$e(!1)}}return n.memoizedState=[r,t],r}function Xs(e,t,n){return n===void 0||Vo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),H.lanes|=e,od|=e,n)}function Zs(e,t,n,r){return Ur(n,t)?n:To.current===null?!(Vo&106)||Vo&1073741824&&!(Y&261930)?(Nc=!0,e.memoizedState=n):(e=Md(),H.lanes|=e,od|=e,t):(e=Xs(e,n,r),Ur(e,t)||(Nc=!0),e)}function Qs(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};s.types=o===null?null:o.types,P.T=s,uc(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?lc(e,t,Ha(c,r),jd(e)):lc(e,t,r,jd(e))}catch(n){lc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function $s(){}function ec(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=tc(e).queue;Qs(e,a,t,_e,n===null?$s:function(){return nc(e),n(r)})}function tc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_e,baseState:_e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:_e},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nc(e){var t=tc(e);t.next===null&&(t=e.alternate.memoizedState),lc(e,t.next.queue,{},jd())}function rc(){return wa(sh)}function ic(){return os().memoizedState}function ac(){return os().memoizedState}function oc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=go(n);var r=_o(t,e,n);r!==null&&(Pd(r,t,n),vo(r,t,n)),t={cache:ja()},e.payload=t;return}t=t.return}}function sc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},dc(e)?fc(t,n):(n=Ei(e,t,n,r),n!==null&&(Pd(n,e,r),pc(n,t,r)))}function cc(e,t,n){lc(e,t,n,jd())}function lc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(dc(e))fc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ur(s,o))return Ti(e,t,i,0),q===null&&wi(),!1}catch{}if(n=Ei(e,t,i,r),n!==null)return Pd(n,e,r),pc(n,t,r),!0}return!1}function uc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},dc(e)){if(t)throw Error(i(479))}else t=Ei(e,n,r,2),t!==null&&Pd(t,e,2)}function dc(e){var t=e.alternate;return e===H||t!==null&&t===H}function fc(e,t){Wo=Uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_t(e,n)}}var mc={readContext:wa,use:ls,useCallback:Xo,useContext:Xo,useEffect:Xo,useImperativeHandle:Xo,useLayoutEffect:Xo,useInsertionEffect:Xo,useMemo:Xo,useReducer:Xo,useRef:Xo,useState:Xo,useDebugValue:Xo,useDeferredValue:Xo,useTransition:Xo,useSyncExternalStore:Xo,useId:Xo,useHostTransitionStatus:Xo,useFormState:Xo,useActionState:Xo,useOptimistic:Xo,useMemoCache:Xo,useCacheRefresh:Xo,useEffectEvent:Xo},hc={readContext:wa,use:ls,useCallback:function(e,t){return as().memoizedState=[e,t===void 0?null:t],e},useContext:wa,useEffect:zs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ls(4194308,4,Gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){Ls(4,2,e,t)},useMemo:function(e,t){var n=as();t=t===void 0?null:t;var r=e();if(Go){$e(!0);try{e()}finally{$e(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=as();if(n!==void 0){var i=n(t);if(Go){$e(!0);try{n(t)}finally{$e(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=sc.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=as();return e={current:e},t.memoizedState=e},useState:function(e){e=xs(e);var t=e.queue,n=cc.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qs,useDeferredValue:function(e,t){return Xs(as(),e,t)},useTransition:function(){var e=xs(!1);return e=Qs.bind(null,H,e.queue,!0,!1),as().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=as();if(V){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||gs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,zs(vs.bind(null,r,o,e),[e]),r.flags|=2048,Fs(9,{destroy:void 0},_s.bind(null,r,o,n,t),null),n},useId:function(){var e=as(),t=q.identifierPrefix;if(V){var n=Zi,r=Xi;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Ko++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:rc,useFormState:As,useActionState:As,useOptimistic:function(e){var t=as();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=uc.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:us,useCacheRefresh:function(){return as().memoizedState=oc.bind(null,H)},useEffectEvent:function(e){var t=as(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},gc={readContext:wa,use:ls,useCallback:Js,useContext:wa,useEffect:Bs,useImperativeHandle:Ks,useInsertionEffect:Us,useLayoutEffect:Ws,useMemo:Ys,useReducer:fs,useRef:Is,useState:function(){return fs(ds)},useDebugValue:qs,useDeferredValue:function(e,t){return Zs(os(),U.memoizedState,e,t)},useTransition:function(){var e=fs(ds)[0],t=os().memoizedState;return[typeof e==`boolean`?e:cs(e),t]},useSyncExternalStore:hs,useId:ic,useHostTransitionStatus:rc,useFormState:js,useActionState:js,useOptimistic:function(e,t){return Ss(os(),U,e,t)},useMemoCache:us,useCacheRefresh:ac,useEffectEvent:Hs},_c={readContext:wa,use:ls,useCallback:Js,useContext:wa,useEffect:Bs,useImperativeHandle:Ks,useInsertionEffect:Us,useLayoutEffect:Ws,useMemo:Ys,useReducer:ms,useRef:Is,useState:function(){return ms(ds)},useDebugValue:qs,useDeferredValue:function(e,t){var n=os();return U===null?Xs(n,e,t):Zs(n,U.memoizedState,e,t)},useTransition:function(){var e=ms(ds)[0],t=os().memoizedState;return[typeof e==`boolean`?e:cs(e),t]},useSyncExternalStore:hs,useId:ic,useHostTransitionStatus:rc,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){var n=os();return U===null?(n.baseState=e,[e,n.queue.dispatch]):Ss(n,U,e,t)},useMemoCache:us,useCacheRefresh:ac,useEffectEvent:Hs};function vc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=go(r);i.payload=t,n!=null&&(i.callback=n),t=_o(e,i,r),t!==null&&(Pd(t,e,r),vo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=go(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=_o(e,i,r),t!==null&&(Pd(t,e,r),vo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=go(n);r.tag=2,t!=null&&(r.callback=t),t=_o(e,r,n),t!==null&&(Pd(t,e,n),vo(t,e,n))}};function bc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!R(n,r)||!R(i,a):!0}function xc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yc.enqueueReplaceState(t,t.state,null)}function Sc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Cc(e){bi(e)}function wc(e){console.error(e)}function Tc(e){bi(e)}function Ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Dc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Oc(e,t,n){return n=go(n),n.tag=3,n.payload={element:null},n.callback=function(){Ec(e,t)},n}function kc(e){return e=go(e),e.tag=3,e}function Ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Dc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Dc(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function jc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&xa(t,n,a,!0),n=Ao.current,n!==null){switch(n.tag){case 31:case 13:case 19:return jo===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Za?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===Za?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(V)return t=Ao.current,t===null?(r!==oa&&(t=Error(i(423),{cause:r}),pa(Hi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Hi(r,n),a=Oc(e.stateNode,r,a),yo(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==oa&&(e=Error(i(422),{cause:r}),pa(Hi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Hi(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Hi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Oc(n.stateNode,r,e),yo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=kc(a),Ac(a,e,n,r),yo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Mc=Error(i(461)),Nc=!1;function Pc(e,t,n,r){t.child=e===null?fo(t,null,n,r):uo(t,e.child,n,r)}function Fc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ca(t),r=Qo(e,t,n,o,a,i),s=ns(),e!==null&&!Nc?(rs(e,t,i),ll(e,t,i)):(V&&s&&ea(t),t.flags|=1,Pc(e,t,r,i),t.child)}function Ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ni(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Lc(e,t,a,r,i)):(e=Ii(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!ul(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?R:n,n(o,r)&&e.ref===t.ref)return ll(e,t,i)}return t.flags|=1,e=Pi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(R(a,r)&&e.ref===t.ref){if(Nc=!1,t.pendingProps=r=a,ul(e,i))e.flags&131072&&(Nc=!0);else return t.lanes=e.lanes,ll(e,t,i)}}return Gc(e,t,n,r,i)}function Rc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Bc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ka(t,a===null?null:a.cachePool),a===null?Oo():Do(t,a),Po(t);else return r=t.lanes=536870912,Bc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ka(t,null),Oo(),Fo()):(Ka(t,a.cachePool),Do(t,a),Fo(),t.memoizedState=null);return Pc(e,t,i,n),t.child}function zc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bc(e,t,n,r,i){var a=Ga();return a=a===null?null:{parent:Aa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ka(t,null),Oo(),Po(t),e!==null&&xa(e,t,r,!0),t.childLanes=i,null}function Vc(e,t){return t=el({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hc(e,t,n){return uo(t,e.child,null,n),e=Vc(t,t.pendingProps),e.flags|=2,Io(t),t.memoizedState=null,e}function Uc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=Vc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},zc(null,e);if(No(t),(e=B)?(e=am(e,aa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yi===null?null:{id:Xi,overflow:Zi},retryLane:536870912,hydrationErrors:null},n=zi(e),n.return=t,t.child=n,ra=t,B=null)):e=null,e===null)throw sa(t);return t.lanes=536870912,null}return Vc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(No(t),a){if(t.flags&256)t.flags&=-257,t=Hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Nc||xa(e,t,n,!1),a=(n&e.childLanes)!==0,Nc||a){if(To.current===null){if(r=q,r!==null&&(s=vt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Di(e,s),Pd(r,e,s),Mc;Kd()}t=Hc(e,t,n)}else e=o.treeContext,B=lm(s.nextSibling),ra=t,V=!0,ia=null,aa=!1,e!==null&&na(t,e),t=Vc(t,r),t.flags|=134221824;return t}return e=Pi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Wc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Gc(e,t,n,r,i){return Ca(t),n=Qo(e,t,n,r,void 0,i),r=ns(),e!==null&&!Nc?(rs(e,t,i),ll(e,t,i)):(V&&r&&ea(t),t.flags|=1,Pc(e,t,n,i),t.child)}function Kc(e,t,n,r,i,a){return Ca(t),t.updateQueue=null,n=es(t,r,n,i),$o(e),r=ns(),e!==null&&!Nc?(rs(e,t,a),ll(e,t,a)):(V&&r&&ea(t),t.flags|=1,Pc(e,t,n,a),t.child)}function qc(e,t,n,r,i){if(Ca(t),t.stateNode===null){var a=Ai,o=n.contextType;typeof o==`object`&&o&&(a=wa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=yc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},mo(t),o=n.contextType,a.context=typeof o==`object`&&o?wa(o):Ai,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(vc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&yc.enqueueReplaceState(a,a.state,null),So(t,r,a,i),xo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Sc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Ai,typeof u==`object`&&u&&(o=wa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&xc(t,a,r,o),po=!1;var f=t.memoizedState;a.state=f,So(t,r,a,i),xo(),l=t.memoizedState,s||f!==l||po?(typeof d==`function`&&(vc(t,n,d,r),l=t.memoizedState),(c=po||bc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ho(e,t),o=t.memoizedProps,u=Sc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Ai,typeof l==`object`&&l&&(c=wa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&xc(t,a,r,c),po=!1,f=t.memoizedState,a.state=f,So(t,r,a,i),xo();var p=t.memoizedState;o!==d||f!==p||po||e!==null&&e.dependencies!==null&&Sa(e.dependencies)?(typeof s==`function`&&(vc(t,n,s,r),p=t.memoizedState),(u=po||bc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Wc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=uo(t,e.child,null,i),t.child=uo(t,null,n,i)):Pc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ll(e,t,i),e}function Jc(e,t,n,r){return da(),t.flags|=256,Pc(e,t,n,r),t.child}var Yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xc(e){return{baseLanes:e,cachePool:qa()}}function Zc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function Qc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Lo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(V){if(i?Mo(t):Fo(),(e=B)?(e=am(e,aa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yi===null?null:{id:Xi,overflow:Zi},retryLane:536870912,hydrationErrors:null},n=zi(e),n.return=t,t.child=n,ra=t,B=null)):e=null,e===null)throw sa(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Fo(),i=t.mode,a=el({mode:`hidden`,children:a},i),r=Li(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Xc(n),r.childLanes=Zc(e,o,n),t.memoizedState=Yc,zc(null,r)):(Mo(t),$c(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return nl(e,t,a,o,r,c,s,n)}return i?(Fo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Pi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Li(i,a,n,null),i.flags|=2):i=Pi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,zc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Xc(n):(a=i.cachePool,a===null?a=qa():(s=Aa._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Zc(e,o,n),t.memoizedState=Yc,zc(e.child,r)):(Mo(t),n=e.child,e=n.sibling,n=Pi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function $c(e,t){return t=el({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function el(e,t){return e=Mi(22,e,null,t),e.lanes=0,e}function tl(e,t,n){return uo(t,e.child,null,n),e=$c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Mo(t),t.flags&=-257,tl(e,t,c)):t.memoizedState===null?(Fo(),o=a.fallback,s=t.mode,a=el({mode:`visible`,children:a.children},s),o=Li(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,uo(t,e.child,null,c),a=t.child,a.memoizedState=Xc(c),a.childLanes=Zc(e,r,c),t.memoizedState=Yc,zc(null,a)):(Fo(),t.child=e.child,t.flags|=128,null);if(Mo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,pa({value:a,source:null,stack:null})),tl(e,t,c)}if(Nc||xa(e,t,c,!1),r=(c&e.childLanes)!==0,Nc||r){if(To.current!==null)return tl(e,t,c);if(r=q,r!==null&&(a=vt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Di(e,a),Pd(r,e,a),Mc;return om(o)||Kd(),tl(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,B=lm(o.nextSibling),ra=t,V=!0,ia=null,aa=!1,e!==null&&na(t,e),t=$c(t,a.children),t.flags|=134221824,t)}function rl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ya(e.return,t,n)}function il(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Bo(n)===null&&(t=e),e=e.sibling}return t}function al(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ol(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function sl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Lo.current;if(t.flags&128)return Ro(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Ro(t,o),i===`backwards`&&e!==null?(ol(e),Pc(e,t,r,n),ol(e)):Pc(e,t,r,n),r=V?Ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rl(e,n,t);else if(e.tag===19)rl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=il(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ol(t)),al(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}al(t,!0,n,null,a,r);break;case`together`:al(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=il(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),al(t,!1,i,n,a,r)}return t.child}function cl(e,t,n){var r=t.pendingProps;return _a(t,t.type,r.value),Pc(e,t,r.children,n),t.child}function ll(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(xa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Pi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ul(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Sa(e)))}function dl(e,t,n){switch(t.tag){case 3:Ee(t,t.stateNode.containerInfo),_a(t,Aa,e.memoizedState.cache),da();break;case 27:case 5:Oe(t);break;case 4:Ee(t,t.stateNode.containerInfo);break;case 10:_a(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,No(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Mo(t),t.flags|=128,null;r=xa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Qc(e,t,n):(Mo(t),e=ll(e,t,n),e===null?null:e.sibling)}Mo(t);break;case 19:if(t.flags&128)return sl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(xa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return sl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ro(t,Lo.current),r)break;return null;case 22:return t.lanes=0,Rc(e,t,n,t.pendingProps);case 24:_a(t,Aa,e.memoizedState.cache)}return ll(e,t,n)}function fl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Nc=!0;else{if(!ul(e,n)&&!(t.flags&128))return Nc=!1,dl(e,t,n);Nc=!!(e.flags&131072)}}else Nc=!1,V&&t.flags&1048576&&$i(t,Ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=eo(t.elementType),t.type=e,typeof e==`function`)Ni(e)?(r=Sc(e,r),t.tag=1,t=qc(null,t,e,r,n)):(t.tag=0,t=Gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ne){t.tag=11,t=Fc(null,t,e,r,n);break a}if(a===ae){t.tag=14,t=Ic(null,t,e,r,n);break a}if(a===N){t.tag=10,t.type=e,t=cl(null,t,n);break a}}throw t=he(e)||e,Error(i(306,t,``))}}return t;case 0:return Gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Sc(r,t.pendingProps),qc(e,t,r,a,n);case 3:a:{if(Ee(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,ho(e,t),So(t,r,null,n);var s=t.memoizedState;if(r=s.cache,_a(t,Aa,r),r!==o.cache&&ba(t,[Aa],n,!0),xo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Jc(e,t,r,n);break a}if(r!==a){a=Hi(Error(i(424)),t),pa(a),t=Jc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(B=lm(e.firstChild),ra=t,V=!0,ia=null,aa=!0,n=fo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(da(),r===a){t=ll(e,t,n);break a}Pc(e,t,r,n)}t=t.child}return t;case 26:return Wc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(t.stateNode=fp(t.type,t.pendingProps,we.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oe(t),e===null&&V&&(r=t.stateNode=hm(t.type,t.pendingProps,we.current),ra=t,aa=!0,a=B,Sp(t.type)?(um=a,B=lm(r.firstChild)):B=a),Pc(e,t,t.pendingProps.children,n),Wc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((a=r=B)&&(r=rm(r,t.type,t.pendingProps,aa),r===null?a=!1:(t.stateNode=r,ra=t,B=lm(r.firstChild),aa=!1,a=!0)),a||sa(t)),Oe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Qo(e,t,ts,null,null,n),sh._currentValue=a),Wc(e,t),Pc(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=B)&&(n=im(n,t.pendingProps,aa),n===null?e=!1:(t.stateNode=n,ra=t,B=null,e=!0)),e||sa(t)),null;case 13:return Qc(e,t,n);case 4:return Ee(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=uo(t,null,r,n):Pc(e,t,r,n),t.child;case 11:return Fc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Wc(e,t),Pc(e,t,r,n),t.child;case 8:return Pc(e,t,t.pendingProps.children,n),t.child;case 12:return Pc(e,t,t.pendingProps.children,n),t.child;case 10:return cl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Ca(t),a=wa(a),r=r(a),t.flags|=1,Pc(e,t,r,n),t.child;case 14:return Ic(e,t,t.type,t.pendingProps,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 19:return sl(e,t,n);case 31:return Uc(e,t,n);case 22:return Rc(e,t,n,t.pendingProps);case 24:return Ca(t),r=wa(Aa),e===null?(a=Ga(),a===null&&(a=q,o=ja(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},mo(t),_a(t,Aa,a)):((e.lanes&n)!==0&&(ho(e,t),So(t,null,null,n),xo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,_a(t,Aa,r),r!==a.cache&&ba(t,[Aa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),_a(t,Aa,r))),Pc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:V&&ea(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Wc(e,t),Pc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function pl(e){e.flags|=4}function ml(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw to=Za,Ya}}else e.flags&=-16777217}function hl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw to=Za,Ya}}function gl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ft(),e.lanes|=t,ud|=t)}function _l(e,t){if(!V)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vl(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),va(Aa),De(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ua(t)?pl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,fa())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(pl(t),o===null?(W(t),ml(t,a,null,r,n)):(W(t),hl(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(pl(t),W(t),hl(t,o)):(e=e.memoizedProps,e!==r&&pl(t),W(t),ml(t,a,e,r,n)),null;case 27:if(ke(t),n=we.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),t.subtreeFlags&=-33554433,null}e=Se.current,ua(t)?ca(t,e):(e=hm(a,r,n),t.stateNode=e,pl(t))}return W(t),t.subtreeFlags&=-33554433,null;case 5:if(ke(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),t.subtreeFlags&=-33554433,null}if(o=Se.current,ua(t))ca(t,o);else{var s=lp(we.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[wt]=t,o[Tt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&pl(t)}}return W(t),t.subtreeFlags&=-33554433,ml(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=we.current,ua(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ra,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[wt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||sa(t,!0)}else e=lp(e).createTextNode(r),e[wt]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ua(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[wt]=t}else da(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=fa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Io(t),t):(Io(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ua(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[wt]=t}else da(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=fa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Io(t),t):(Io(t),null)}return Io(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),gl(t,t.updateQueue),W(t),null);case 4:return De(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,W(t),null;case 10:return va(t.type),W(t),null;case 19:if(zo(t),r=t.memoizedState,r===null)return W(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)_l(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Bo(e),o!==null){for(t.flags|=128,_l(r,!1),e=o.updateQueue,t.updateQueue=e,gl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Fi(n,e),n=n.sibling;return Ro(t,Lo.current&1|2),V&&Qi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&He()>gd&&(t.flags|=128,a=!0,_l(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Bo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,gl(t,e),_l(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!V)return W(t),null}else 2*He()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,_l(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=He(),e.sibling=null,o=Lo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||V?Ro(t,o):(n=o,I(Ao,t),I(Lo,n),jo===null&&(jo=t)),V&&Qi(t,r.treeForkCount),e}return W(t),null;case 22:case 23:return Io(t),ko(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&gl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&xe(Wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),va(Aa),W(t),null;case 25:return null;case 30:return t.flags|=33554432,W(t),null}throw Error(i(156,t.tag))}function yl(e,t){switch(ta(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return va(Aa),De(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ke(t),null;case 31:if(t.memoizedState!==null){if(Io(t),t.alternate===null)throw Error(i(340));da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Io(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return zo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return De(),null;case 10:return va(t.type),null;case 22:case 23:return Io(t),ko(),e!==null&&xe(Wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return va(Aa),null;case 25:return null;default:return null}}function bl(e,t){switch(ta(t),t.tag){case 3:va(Aa),De();break;case 26:case 27:case 5:ke(t);break;case 4:De();break;case 31:t.memoizedState!==null&&Io(t);break;case 13:Io(t);break;case 19:zo(t);break;case 10:va(t.type);break;case 22:case 23:Io(t),ko(),e!==null&&xe(Wa);break;case 24:va(Aa)}}function xl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Sl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Cl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{wo(t,n)}catch(t){Z(e,e.return,t)}}}function wl(e,t,n){n.props=Sc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Tl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=_i(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function El(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Dl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Ol(e){for(var t=e.return;t!==null&&(jl(t)&&em(e.stateNode,t.stateNode),!Al(t));)t=t.return}function kl(e){for(var t=e.return;t!==null&&(jl(t)&&tm(e.stateNode,t.stateNode),!Al(t));)t=t.return}function Al(e){return e.tag===5||e.tag===3||e.tag===27}function jl(e){return e&&e.tag===7&&e.stateNode!==null}function Ml(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Nl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Tt]=t}catch(t){Z(e,e.return,t)}}function Pl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Fl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Pl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bn)),Dl(e,r),L=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Il(e,t,n,r),e=e.sibling;e!==null;)Il(e,t,n,r),e=e.sibling}function Ll(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Dl(e,r),L=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ll(e,t,n,r),e=e.sibling;e!==null;)Ll(e,t,n,r),e=e.sibling}function Rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[wt]=e,t[Tt]=n}catch(t){Z(e,e.return,t)}}var zl=!1,Bl=null;function Vl(e){(e.tag===30||e.subtreeFlags&33554432)&&(zl=!0)}var Hl=null;function Ul(){var e=Hl;return Hl=null,e}var Wl=0;function Gl(e,t,n,r,i){return Wl=0,Kl(e.child,t,n,r,i)}function Kl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);zl=!0,Tp(o,Wl===0?t:t+`_`+Wl,n),Wl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Kl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function ql(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ql(e.child,t)),e=e.sibling}function Jl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Jl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=yi(t.default,t.share),t!==`none`&&(Gl(e,n,t,null,!1)||ql(e.child,!1))}e=e.sibling}}function Yl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=_i(r,n),a=yi(r.default,n.paired?r.share:r.enter);a===`none`?Jl(e):Gl(e,i,a,null,!1)?(Jl(e),n.paired||t||Nd(e,r.onEnter)):ql(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Yl(e,t),e=e.sibling;else Jl(e)}function Xl(e){if(Bl!==null&&Bl.size!==0){var t=Bl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=yi(n.default,n.share);if(a!==`none`&&(Gl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):ql(e.child,!1)),t.delete(r),t.size===0)break}}}Xl(e)}e=e.sibling}}}function Zl(e){if(e.tag===30){var t=e.memoizedProps,n=_i(t,e.stateNode),r=Bl===null?void 0:Bl.get(n),i=yi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Gl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Bl.delete(n),Nd(e,t.onShare)):ql(e.child,!1)),Bl!==null&&Xl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Zl(e),e=e.sibling;else Bl!==null&&Xl(e)}function Ql(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=_i(t,e.stateNode);t=yi(t.default,t.update),e.flags&=-5,t!==`none`&&Gl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Ql(e);e=e.sibling}}function $l(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,ql(e.child,!1))}$l(e)}e=e.sibling}}function eu(e){if(e.tag===30)e.stateNode.paired=null,ql(e.child,!1),$l(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else $l(e)}function tu(e){for(e=e.child;e!==null;)e.tag===30?ql(e.child,!1):e.subtreeFlags&33554432&&tu(e),e=e.sibling}function nu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Wl<a.length){var l=a[Wl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Wl===0?n:n+`_`+Wl,i),s&&e.flags&4||(Hl===null&&(Hl=[]),Hl.push(c,Wl===0?r:r+`_`+Wl,t.memoizedProps)),Wl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:nu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ru(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=_i(n,r),a=yi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Wl=0,i=nu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&ru(e,t);e=e.sibling}}var iu=!1,G=!1,au=!1,ou=!1,su=typeof WeakSet==`function`?WeakSet:Set,cu=null,lu=!1,uu=!1,du=!1,fu=!1;function pu(e,t,n){if(e=e.containerInfo,sp=gh,e=Jr(e),Yr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,cu=t,t=n?9270:1024;cu!==null;){if(e=cu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Zl(r[a]);if(e.alternate===null&&e.flags&2)n&&Vl(e),mu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Zl(r),mu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Vl(e),mu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,cu=r):(n&&Ql(e),mu(n))}}Bl=null}function mu(e){for(;cu!==null;){var t=cu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Sc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=_i(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=yi(a.default,a.update),a!==`none`&&Gl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,cu=r;break}cu=t.return}}function hu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fu(e,n),r&4&&xl(5,n);break;case 1:if(Fu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Sc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Cl(n),r&512&&Tl(n,n.return);break;case 3:if(Fu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{wo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Rl(n);case 26:case 5:Fu(e,n),t===null&&r&4&&Ml(n),r&512&&Tl(n,n.return);break;case 12:Fu(e,n);break;case 31:Fu(e,n),r&4&&wu(e,n);break;case 13:Fu(e,n),r&4&&Tu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||iu,!r){var a=t!==null&&t.memoizedState!==null||G;t=iu,i=G,iu=r,(G=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Lu(e,n,r)):Fu(e,n),iu=t,G=i}break;case 30:Fu(e,n),r&512&&Tl(n,n.return);break;case 7:r&512&&Tl(n,n.return);default:Fu(e,n)}}function gu(e,t){for(e=e.child;e!==null;)_u(e,t),e=e.sibling}function _u(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}vu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,L=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&gu(e,t);break;default:gu(e,t)}}function vu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:_u(n,r);break a;case 22:n.memoizedState===null&&vu(n,r);break a;default:vu(n,r)}}e=e.sibling}}function yu(e){var t=e.alternate;t!==null&&(e.alternate=null,yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Nt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var bu=null,xu=!1;function Su(e,t,n){for(n=n.child;n!==null;)Cu(e,t,n),n=n.sibling}function Cu(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount==`function`)try{Qe.onCommitFiberUnmount(Ze,n)}catch{}switch(n.tag){case 26:G||El(n,t),Su(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!G&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:G||El(n,t),kl(n);var r=bu,i=xu;Sp(n.type)&&(bu=n.stateNode,xu=!1),Su(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),bu=r,xu=i;break;case 5:G||El(n,t),kl(n);case 6:if(n.tag===6&&kl(n),r=bu,i=xu,bu=null,Su(e,t,n),bu=r,xu=i,bu!==null){if(xu)try{(bu.nodeType===9?bu.body:bu.nodeName===`HTML`?bu.ownerDocument.body:bu).removeChild(n.stateNode),L=!0}catch(e){Z(n,t,e)}else try{bu.removeChild(n.stateNode),L=!0}catch(e){Z(n,t,e)}}break;case 18:bu!==null&&(xu?(e=bu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(bu,n.stateNode));break;case 4:r=bu,i=xu,bu=n.stateNode.containerInfo,xu=!0,Su(e,t,n),bu=r,xu=i;break;case 0:case 11:case 14:case 15:Sl(2,n,t),G||Sl(4,n,t),Su(e,t,n);break;case 1:G||(El(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&wl(n,t,r)),Su(e,t,n);break;case 21:Su(e,t,n);break;case 22:G=(r=G)||n.memoizedState!==null,Su(e,t,n),G=r;break;case 30:El(n,t),Su(e,t,n);break;case 7:G||El(n,t),Su(e,t,n);break;default:Su(e,t,n)}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Tu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Eu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new su),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new su),t;default:throw Error(i(435,e.tag))}}function Du(e,t){var n=Eu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Ou(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){bu=l.stateNode,xu=!1;break a}break;case 5:bu=l.stateNode,xu=!1;break a;case 3:case 4:bu=l.stateNode.containerInfo,xu=!0;break a}l=l.return}if(bu===null)throw Error(i(160));Cu(s,c,o),bu=null,xu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Au(t,e,n),t=t.sibling}var ku=null;function Au(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Ou(t,e,n),ju(e),a&4&&(Sl(3,e,e.return),xl(3,e),Sl(5,e,e.return));break;case 1:Ou(t,e,n),ju(e),a&512&&(G||r===null||El(r,r.return)),a&64&&iu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ku,Ou(t,e,n),ju(e),a&512&&(G||r===null||El(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(iu)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[jt]||r[wt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[wt]=e,Rt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[wt]=e,Rt(r),t=r}e.stateNode=t}}else iu||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Nl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||G||t.parentNode.removeChild(t)):a.count--,n===null?iu||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Ou(t,e,n),ju(e),a&512&&(G||r===null||El(r,r.return)),r!==null&&a&4&&Nl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=au,au=!1,Ou(t,e,n),au=o,ju(e),a&512&&(G||r===null||El(r,r.return)),e.flags&32){t=e.stateNode;try{fn(t,``),L=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Nl(e,t,r===null?t:r.memoizedProps)),a&1024&&(ou=!0);break;case 6:if(Ou(t,e,n),ju(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,L=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(L=!1,Wm=null,o=ku,ku=bm(t.containerInfo),Ou(t,e,n),ku=o,ju(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}ou&&(ou=!1,Mu(e)),L=!1;break;case 4:a=au,au=iu,r=Jt(),o=ku,ku=bm(e.stateNode.containerInfo),Ou(t,e,n),ju(e),ku=o,L&&uu&&(du=!0),L=r,au=a;break;case 12:Ou(t,e,n),ju(e);break;case 31:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 13:Ou(t,e,n),ju(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=He()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=iu,l=G,u=au;iu=c||o,au=u||o,G=l||s,Ou(t,e,n),G=l,au=u,iu=c,ju(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||iu||G||(t=s||G,n=iu,r=G,iu=o||iu,G=t,Iu(e,2),iu=n,G=r),!o&&au||gu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Du(e,n))));break;case 19:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 30:a&512&&(G||r===null||El(r,r.return)),a=Jt(),o=uu,s=(n&335544064)===n,c=e.memoizedProps,uu=s&&yi(c.default,c.update)!==`none`,Ou(t,e,n),ju(e),s&&r!==null&&L&&(e.flags|=4),uu=o,L=a;break;case 21:break;case 7:a&512&&(G||r===null||El(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Ou(t,e,n),ju(e)}}function ju(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Pl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(jl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Al(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Ll(e,Fl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(fn(l,``),n.flags&=-33),Ll(e,Fl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Il(e,Fl(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Nu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Pu(t,e),t=t.sibling;else ru(t,!1)}function Pu(e,t){var n=e.alternate;if(n===null)Yl(e,!1);else switch(e.tag){case 3:if(fu=lu=!1,Ul(),Nu(t,e),!lu&&!du){if(e=Hl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),fu=!0}Hl=null;break;case 5:Nu(t,e);break;case 4:r=lu,lu=!1,Nu(t,e),lu&&(du=!0),lu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Nu(t,e):Yl(e,!1));break;case 30:r=lu,i=Ul(),lu=!1,Nu(t,e),lu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=_i(a,o),o=_i(n.memoizedProps,o);var s=yi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Wl=0,t=nu(e,n,t,o,s,a,!0),Wl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Hl=i):i!==null&&(i.push.apply(i,Hl),Hl=i),lu=e.flags&32?!0:r;break;default:Nu(t,e)}}function Fu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hu(e,t.alternate,t),t=t.sibling}function Iu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Sl(4,n,n.return),Iu(n,r);break;case 1:El(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&wl(n,n.return,i),Iu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:El(n,n.return),n.tag!==5&&n.tag!==27||kl(n),Iu(n,r);break;case 6:kl(n);break;case 26:El(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||G||i.parentNode.removeChild(i),Iu(n,r);break;case 22:n.memoizedState===null&&Iu(n,r);break;case 30:El(n,n.return),Iu(n,r);break;case 7:El(n,n.return);default:Iu(n,r)}e=e.sibling}}function Lu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Lu(i,a,n),xl(4,a);break;case 1:if(Lu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Co(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&Cl(a),Tl(a,a.return);break;case 27:n&2&&Rl(a);case 5:a.tag!==5&&a.tag!==27||Ol(a),Lu(i,a,n),s&&r===null&&o&4&&Ml(a),Tl(a,a.return);break;case 6:Ol(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||iu||Km(bm(c.ownerDocument),a.type,c),Lu(i,a,n),s&&r===null&&o&4&&Ml(a),Tl(a,a.return);break;case 12:Lu(i,a,n);break;case 31:Lu(i,a,n),s&&o&4&&wu(i,a);break;case 13:Lu(i,a,n),s&&o&4&&Tu(i,a);break;case 22:a.memoizedState===null&&Lu(i,a,n),Tl(a,a.return);break;case 30:Lu(i,a,n),Tl(a,a.return);break;case 7:Tl(a,a.return);default:Lu(i,a,n)}t=t.sibling}}function Ru(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ma(n))}function zu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ma(e))}function Bu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Vu(e,t,n,r),t=t.sibling;else i&&tu(t)}function Vu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&eu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Bu(e,t,n,r),a&2048&&xl(9,t);break;case 1:Bu(e,t,n,r);break;case 3:Bu(e,t,n,r),i&&fu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ma(a)));break;case 12:if(a&2048){Bu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Bu(e,t,n,r);break;case 31:Bu(e,t,n,r);break;case 13:Bu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&eu(t),o._visibility&2?Bu(e,t,n,r):(o._visibility|=2,Hu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&eu(s),o._visibility&2?Bu(e,t,n,r):Uu(e,t)),a&2048&&Ru(s,t);break;case 24:Bu(e,t,n,r),a&2048&&zu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(ql(a.child,!0),ql(t.child,!0))),Bu(e,t,n,r);break;default:Bu(e,t,n,r)}}function Hu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Hu(a,o,s,c,i),xl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Hu(a,o,s,c,i)):u._visibility&2?Hu(a,o,s,c,i):Uu(a,o),i&&l&2048&&Ru(o.alternate,o);break;case 24:Hu(a,o,s,c,i),i&&l&2048&&zu(o.alternate,o);break;default:Hu(a,o,s,c,i)}t=t.sibling}}function Uu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Uu(n,r),i&2048&&Ru(r.alternate,r);break;case 24:Uu(n,r),i&2048&&zu(r.alternate,r);break;default:Uu(n,r)}t=t.sibling}}var Wu=8192;function Gu(e,t,n){if(e.subtreeFlags&Wu)for(e=e.child;e!==null;)Ku(e,t,n),e=e.sibling}function Ku(e,t,n){switch(e.tag){case 26:Gu(e,t,n),e.flags&Wu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ku,e.memoizedState,e.memoizedProps));break;case 5:Gu(e,t,n),e.flags&Wu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ku;ku=bm(e.stateNode.containerInfo),Gu(e,t,n),ku=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Wu,Wu=16777216,Gu(e,t,n),Wu=r):Gu(e,t,n));break;case 30:if((e.flags&Wu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Bl===null&&(Bl=new Map),Bl.set(r,i)}Gu(e,t,n);break;default:Gu(e,t,n)}}function qu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ju(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cu=r,Zu(r,e)}qu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yu(e),e=e.sibling}function Yu(e){switch(e.tag){case 0:case 11:case 15:Ju(e),e.flags&2048&&Sl(9,e,e.return);break;case 3:Ju(e);break;case 12:Ju(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xu(e)):Ju(e);break;default:Ju(e)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cu=r,Zu(r,e)}qu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sl(8,t,t.return),Xu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xu(t));break;default:Xu(t)}e=e.sibling}}function Zu(e,t){for(;cu!==null;){var n=cu;switch(n.tag){case 0:case 11:case 15:Sl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,cu=r;else a:for(n=e;cu!==null;){r=cu;var i=r.sibling,a=r.return;if(yu(r),r===n){cu=null;break a}if(i!==null){i.return=a,cu=i;break a}cu=a}}}var Qu={getCacheForType:function(e){var t=wa(Aa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return wa(Aa).controller.signal}},$u=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return K&2&&Y!==0?Y&-Y:P.T===null?xt():Pf()}function Md(){if(ld===0){if(!(Y&536870912)||V){var e=at;at<<=1,!(at&3932160)&&(at=262144),ld=e}else ld=536870912}return e=Ao.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(_i(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,Y,ld,!1)),mt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(sd|=n),ad===4&&Rd(e,Y,ld,!1)),Ef(e))}function Fd(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||lt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n))a=qd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-He(),10<a)){if(Rd(r,t,ld,!td),ct(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},Bl=null,Ku(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-He():(a&4194048)===a?hd-He():0,m=eh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ur(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=ut(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-et(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&gt(e,n,t)}function zd(){return K&6?!0:(Df(0,!1),!1)}function Bd(){if(J!==null){if(X===0)var e=J.return;else e=J,ga=ha=null,is(e),io=null,ao=0,e=J;for(;e!==null;)bl(e.alternate,e),e=e.return;J=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),q=e,J=n=Pi(e.current,null),Y=t,X=0,ed=null,td=!1,nd=lt(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=ut(e,t),wi(),n}function Hd(e,t){H=null,P.H=mc,t===Ja||t===Xa?(t=no(),X=3):t===Ya?(t=no(),X=4):X=t===Mc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,J===null&&(ad=1,Ec(e,Hi(t,e.current)))}function Ud(){var e=Ao.current;return e===null?!0:(Y&4194048)===Y?jo===null:(Y&62914560)===Y||Y&536870912?e===jo:!1}function Wd(){var e=P.H;return P.H=mc,e===null?mc:e}function Gd(){var e=P.A;return P.A=Qu,e}function Kd(){ad=4,td||(Y&4194048)!==Y&&Ao.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||q===null||Rd(q,Y,ld,!1)}function qd(e,t,n){var r=K;K|=2;var i=Wd(),a=Gd();(q!==e||Y!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if(X!==0&&J!==null){var s=J,c=ed;switch(X){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:Ao.current===null&&(t=!0);var l=X;if(X=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=X,X=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,ga=ha=null,K=r,P.H=i,P.A=a,J===null&&(q=null,Y=0,wi()),o}function Jd(){for(;J!==null;)Zd(J)}function Yd(e,t){var n=K;K|=2;var r=Wd(),a=Gd();q!==e||Y!==t?(_d=null,gd=He()+500,Vd(e,t)):nd=lt(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=ed;b:switch(X){case 1:X=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if(Qa(o)){X=0,ed=null,Qd(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),Ef(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Qa(o)?(X=0,ed=null,Qd(t)):(X=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Ym(s):c.stateNode.complete){X=0,ed=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,ef(u))}break b}}X=0,ed=null,$d(e,t,o,5);break;case 6:X=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return ga=ha=null,P.H=r,P.A=a,K=n,J===null?(q=null,Y=0,wi(),ad):0}function Xd(){for(;J!==null&&!Be();)Zd(J)}function Zd(e){var t=fl(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Kc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Kc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:is(t);var r=t;r===ra&&(V?(la(r),r.tag===5&&r.stateNode!=null&&(B=r.stateNode)):(la(r),V=!0));default:bl(n,t),t=J=Fi(t,id),t=fl(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function $d(e,t,n,r){ga=ha=null,is(t),io=null,ao=0;var i=t.return;try{if(jc(e,i,t,n,Y)){ad=1,Ec(e,Hi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ad=1,Ec(e,Hi(n,e.current)),J=null;return}t.flags&32768?(V||r===1?e=!0:nd||Y&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=vl(t.alternate,t,id);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=yl(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ad=6,J=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===q&&(J=q=null,Y=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Ci,ht(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Fa(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(Ke,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),zl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=P.T,P.T=null,i=F.p,F.p=2,a=K,K|=4;try{pu(e,t,n)}finally{K=a,F.p=i,P.T=r}}yd=1,zl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,Pu(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=P.T,P.T=null;var i=F.p;F.p=2;var a=K;K|=4;try{uu=du=!1,Au(t,e,n),n=cp;var o=Jr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&qr(s.ownerDocument.documentElement,s)){if(c!==null&&Yr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Kr(s,h),v=Kr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{K=a,F.p=i,P.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=K;K|=4;try{hu(e,t.alternate,t)}finally{K=i,F.p=r,P.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,Ve();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),bt(r),n=n.stateNode,Qe&&typeof Qe.onCommitFiberRoot==`function`)try{Qe.onCommitFiberRoot(Ze,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=P.T,a=F.p,F.p=2,P.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{P.T=n,F.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ma(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=bt(Sd),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,K&6)throw Error(i(331));var c=K;if(K|=4,Yu(o.current),Vu(o,o.current,s,n),K=c,Df(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot==`function`)try{Qe.onPostCommitFiberRoot(Ze,o)}catch{}return!0}finally{F.p=a,P.T=r,uf(e,t)}}function pf(e,t,n){t=Hi(n,t),t=Oc(e.stateNode,t,2),e=_o(e,t,2),e!==null&&(mt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Hi(n,e),n=kc(2),r=_o(t,n,2),r!==null&&(Ac(n,r,t,e),mt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $u;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(ad===4||ad===3&&(Y&62914560)===Y&&300>He()-md?K&2?cd|=n:Vd(e,0):cd|=n,ud===Y&&(ud=0)),Ef(e)}function gf(e,t){t===0&&(t=ft()),e=Di(e,t),e!==null&&(mt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Re(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-et(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Y,a=ct(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||lt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=He(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}yd!==0&&yd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-et(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=dt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=ct(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ze(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||lt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ze(r),bt(n)){case 2:case 8:n=Ge;break;case 32:n=Ke;break;case 268435456:n=Je;break;default:n=Ke}return r=jf.bind(null,e),n=Re(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ze(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=Y;return r=ct(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,He()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){K&6?Re(We,Of):kf()})}function Pf(){if(Tf===0){var e=Ra;e===0&&(e=it,it<<=1,!(it&261888)&&(it=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:yn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Tt]||null).action),o=r.submitter;o&&(t=(t=o[Tt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Vn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);ec(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),ec(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<hi.length;Lf++){var Rf=hi[Lf];z(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}z(si,`onAnimationEnd`),z(ci,`onAnimationIteration`),z(li,`onAnimationStart`),z(`dblclick`,`onDoubleClick`),z(`focusin`,`onFocus`),z(`focusout`,`onBlur`),z(ui,`onTransitionRun`),z(di,`onTransitionStart`),z(fi,`onTransitionCancel`),z(pi,`onTransitionEnd`),Ut(`onMouseEnter`,[`mouseout`,`mouseover`]),Ut(`onMouseLeave`,[`mouseout`,`mouseover`]),Ut(`onPointerEnter`,[`pointerout`,`pointerover`]),Ut(`onPointerLeave`,[`pointerout`,`pointerover`]),Ht(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ht(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ht(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ht(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ht(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ht(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){bi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){bi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Dt];n===void 0&&(n=t[Dt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Bt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!An||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Pt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Dn(function(){var r=a,i=Sn(n),s=[];a:{var c=mi.get(e);if(c!==void 0){var l=Vn,u=e;switch(e){case`keypress`:if(In(n)===0)break a;case`keydown`:case`keyup`:l=ar;break;case`focusin`:u=`focus`,l=Xn;break;case`focusout`:u=`blur`,l=Xn;break;case`beforeblur`:case`afterblur`:l=Xn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Yn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=cr;break;case si:case ci:case li:l=Zn;break;case pi:l=lr;break;case`scroll`:case`scrollend`:l=Un;break;case`wheel`:l=ur;break;case`copy`:case`cut`:case`paste`:l=Qn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=or;break;case`submit`:l=sr;break;case`toggle`:case`beforetoggle`:l=dr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=On(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==xn&&(u=n.relatedTarget||n.fromElement)&&(Pt(u)||u[Et]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Pt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Jn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=or,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:It(c),h=l==null?u:It(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Pt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?It(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=jr;else if(Tr(c)){if(Mr)_=Vr;else{_=zr;var v=Rr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&gn(r.elementType)&&(_=jr):_=Br;if(_&&=_(e,r)){Er(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?It(r):window,e){case`focusin`:(Tr(v)||v.contentEditable===`true`)&&(Zr=v,Qr=r,$r=null);break;case`focusout`:$r=Qr=Zr=null;break;case`mousedown`:ei=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ei=!1,ti(s,n,i);break;case`selectionchange`:if(Xr)break;case`keydown`:case`keyup`:ti(s,n,i)}var y;if(pr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else xr?yr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(gr&&n.locale!==`ko`&&(xr||b!==`onCompositionStart`?b===`onCompositionEnd`&&xr&&(y=Fn()):(Mn=i,Nn=`value`in Mn?Mn.value:Mn.textContent,xr=!0)),v=Jf(r,b),0<v.length&&(b=new $n(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=br(n),y!==null&&(b.data=y)))),(y=hr?Sr(e,n):Cr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new $n(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=On(e,n),i!=null&&r.unshift(qf(e,i,a)),i=On(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=On(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=On(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||fn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&fn(e,``+r);else return;break;case`className`:Xt(e,`class`,r);break;case`tabIndex`:Xt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Xt(e,n,r);break;case`style`:hn(e,r,o);return;case`data`:if(t!==`object`){Xt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=yn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=yn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=bn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=yn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Yt(e,`popover`,r);break;case`xlinkActuate`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Yt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=_n.get(n)||n,Yt(e,n,r);else return}L=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:hn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)fn(e,r);else if(typeof r==`number`||typeof r==`bigint`)fn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=bn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Vt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Tt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}L=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Yt(e,n,r)}return}L=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}sn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&ln(e,!!r,n,!0):ln(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}dn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(gn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(L=!0),o=m;break;case`name`:m!==f&&(L=!0),a=m;break;case`checked`:m!==f&&(L=!0),u=m;break;case`defaultChecked`:m!==f&&(L=!0),d=m;break;case`value`:m!==f&&(L=!0),s=m;break;case`defaultValue`:m!==f&&(L=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}on(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(L=!0),p=o;break;case`defaultValue`:o!==l&&(L=!0),c=o;break;case`multiple`:o!==l&&(L=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?ln(e,!!n,n?[]:``,!1):ln(e,!!n,t,!0)):ln(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(L=!0),p=a;break;case`defaultValue`:a!==o&&(L=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}un(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(L=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(gn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[wt]=r,n[Tt]=t,np(n,e,t),Rt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[jt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Pt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Nt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[jt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===bn&&(e.onclick=null),Nt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Nt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=F.d;F.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Ft(e);t!==null&&t.tag===5&&t.type===`form`?nc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=an(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Rt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+an(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+an(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+an(n.imageSizes)+`"]`)):i+=`[href="`+an(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Mt]=!0,o.onload=o.onerror=function(){zt(o)}),Rt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+an(r)+`"][href="`+an(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Rt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Lt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Rt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Lt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Rt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Lt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Rt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=we.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Lt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Lt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Lt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+an(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Mt]){r.loading=1;return}}else t=e.createElement(`link`),t[Mt]=!0,t.onload=t.onerror=zt.bind(null,t),np(t,`link`,n),Rt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+an(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+an(n.href)+`"]`);if(r)return t.instance=r,Rt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Rt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Rt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Rt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Rt(a),a):(r=n,(a=vm.get(o))&&(r=D({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Rt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[jt]||a[wt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Rt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Rt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:N,Provider:null,Consumer:null,_currentValue:_e,_currentValue2:_e,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pt(0),this.hiddenUpdates=pt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Mi(3,null,null,t),e.current=a,a.stateNode=e,t=ja(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},mo(a),e}function uh(e){return e?(e=Ai,e):Ai}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=go(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=_o(e,r,t),n!==null&&(Pd(n,e,t),vo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Di(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=yt(t);var n=Di(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,yh(e,t,n,r)}finally{F.p=a,P.T=i}}function vh(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,yh(e,t,n,r)}finally{F.p=a,P.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Ft(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=st(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-et(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(K&6)&&(gd=He()+500,Df(0,!1))}}break;case 31:case 13:s=Di(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=Sn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Pt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ue()){case We:return 2;case Ge:return 8;case Ke:case qe:return 32;case Je:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ft(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Pt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,St(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,St(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xn=r,n.target.dispatchEvent(r),xn=null}else return t=Ft(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Ft(n);a!==null&&(e.splice(t,3),t-=3,ec(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Tt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Tt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Et]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=xt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{Ze=Jh.inject(qh),Qe=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Cc,s=wc,c=Tc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Et]=t.current,Wf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=c(g(),1),y=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],b=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],x=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],S=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],C=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],w=e=>Math.hypot(e[0],e[1],e[2]),T=e=>{let t=w(e);return t>1e-12?x(e,1/t):[0,0,0]};function E(e,t,n,r){let i=1/Math.tan(e/2),a=new Float32Array(16);return a[0]=i/t,a[5]=i,a[10]=r/(n-r),a[11]=-1,a[14]=n*r/(n-r),a}function D(e,t,n){let r=T(b(e,t)),i=T(C(n,r)),a=C(r,i);return new Float32Array([i[0],a[0],r[0],0,i[1],a[1],r[1],0,i[2],a[2],r[2],0,-S(i,e),-S(a,e),-S(r,e),1])}function O(e,t){let n=new Float32Array(16);for(let r=0;r<4;r++)for(let i=0;i<4;i++){let a=0;for(let n=0;n<4;n++)a+=e[n*4+i]*t[r*4+n];n[r*4+i]=a}return n}function k(e){let t=new Float32Array(16),n=Array.from(e,Number),r=[n[5]*n[10]*n[15]-n[5]*n[11]*n[14]-n[9]*n[6]*n[15]+n[9]*n[7]*n[14]+n[13]*n[6]*n[11]-n[13]*n[7]*n[10],-n[1]*n[10]*n[15]+n[1]*n[11]*n[14]+n[9]*n[2]*n[15]-n[9]*n[3]*n[14]-n[13]*n[2]*n[11]+n[13]*n[3]*n[10],n[1]*n[6]*n[15]-n[1]*n[7]*n[14]-n[5]*n[2]*n[15]+n[5]*n[3]*n[14]+n[13]*n[2]*n[7]-n[13]*n[3]*n[6],-n[1]*n[6]*n[11]+n[1]*n[7]*n[10]+n[5]*n[2]*n[11]-n[5]*n[3]*n[10]-n[9]*n[2]*n[7]+n[9]*n[3]*n[6],-n[4]*n[10]*n[15]+n[4]*n[11]*n[14]+n[8]*n[6]*n[15]-n[8]*n[7]*n[14]-n[12]*n[6]*n[11]+n[12]*n[7]*n[10],n[0]*n[10]*n[15]-n[0]*n[11]*n[14]-n[8]*n[2]*n[15]+n[8]*n[3]*n[14]+n[12]*n[2]*n[11]-n[12]*n[3]*n[10],-n[0]*n[6]*n[15]+n[0]*n[7]*n[14]+n[4]*n[2]*n[15]-n[4]*n[3]*n[14]-n[12]*n[2]*n[7]+n[12]*n[3]*n[6],n[0]*n[6]*n[11]-n[0]*n[7]*n[10]-n[4]*n[2]*n[11]+n[4]*n[3]*n[10]+n[8]*n[2]*n[7]-n[8]*n[3]*n[6],n[4]*n[9]*n[15]-n[4]*n[11]*n[13]-n[8]*n[5]*n[15]+n[8]*n[7]*n[13]+n[12]*n[5]*n[11]-n[12]*n[7]*n[9],-n[0]*n[9]*n[15]+n[0]*n[11]*n[13]+n[8]*n[1]*n[15]-n[8]*n[3]*n[13]-n[12]*n[1]*n[11]+n[12]*n[3]*n[9],n[0]*n[5]*n[15]-n[0]*n[7]*n[13]-n[4]*n[1]*n[15]+n[4]*n[3]*n[13]+n[12]*n[1]*n[7]-n[12]*n[3]*n[5],-n[0]*n[5]*n[11]+n[0]*n[7]*n[9]+n[4]*n[1]*n[11]-n[4]*n[3]*n[9]-n[8]*n[1]*n[7]+n[8]*n[3]*n[5],-n[4]*n[9]*n[14]+n[4]*n[10]*n[13]+n[8]*n[5]*n[14]-n[8]*n[6]*n[13]-n[12]*n[5]*n[10]+n[12]*n[6]*n[9],n[0]*n[9]*n[14]-n[0]*n[10]*n[13]-n[8]*n[1]*n[14]+n[8]*n[2]*n[13]+n[12]*n[1]*n[10]-n[12]*n[2]*n[9],-n[0]*n[5]*n[14]+n[0]*n[6]*n[13]+n[4]*n[1]*n[14]-n[4]*n[2]*n[13]-n[12]*n[1]*n[6]+n[12]*n[2]*n[5],n[0]*n[5]*n[10]-n[0]*n[6]*n[9]-n[4]*n[1]*n[10]+n[4]*n[2]*n[9]+n[8]*n[1]*n[6]-n[8]*n[2]*n[5]],i=n[0]*r[0]+n[1]*r[4]+n[2]*r[8]+n[3]*r[12];if(Math.abs(i)<1e-30)return t.set([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),t;for(let e=0;e<16;e++)t[e]=r[e]/i;return t}var A=3,j=.25,M=new Set([`KeyW`,`KeyA`,`KeyS`,`KeyD`,`KeyQ`,`KeyE`]),ee=320,te=30,N=12;function ne(e,t,n){let{onChange:r,onReset:i,onDoubleClick:a,flySpeed:o}=n,s=null,c=`rotate`,l=!1,u=new Set,d=0,f=0,p=new Map,m=null,h=null,g=null,_=-1/0,v=()=>{let[e,t]=[...p.values()];return{spread:Math.hypot(e.x-t.x,e.y-t.y),x:(e.x+t.x)/2,y:(e.y+t.y)/2}},S=t=>{e.setPointerCapture(t.pointerId),e.focus({preventScroll:!0}),t.pointerType===`touch`?(p.set(t.pointerId,{x:t.clientX,y:t.clientY}),p.size===1?(s={x:t.clientX,y:t.clientY},c=`rotate`,h={x:t.clientX,y:t.clientY,moved:!1}):(s=null,h=null,m=p.size===2?v():null)):(s={x:t.clientX,y:t.clientY},c=t.button===2||t.button===1||t.shiftKey?`pan`:`rotate`)},w=n=>{if(n.pointerType===`touch`&&p.has(n.pointerId)&&(p.set(n.pointerId,{x:n.clientX,y:n.clientY}),h&&Math.hypot(n.clientX-h.x,n.clientY-h.y)>N&&(h.moved=!0),m&&p.size===2)){let n=v();n.spread>0&&m.spread>0&&t.zoom(1e3*Math.log(m.spread/n.spread)),t.pan(n.x-m.x,n.y-m.y,e.clientHeight),m=n,r();return}if(!s)return;let i=n.clientX-s.x,a=n.clientY-s.y;s={x:n.clientX,y:n.clientY},c===`rotate`?t.rotate(i,a):t.pan(i,a,e.clientHeight),r()},E=t=>{if(e.hasPointerCapture(t.pointerId)&&e.releasePointerCapture(t.pointerId),t.pointerType!==`touch`){s=null;return}if(p.delete(t.pointerId),t.type===`pointerup`&&h&&!h.moved&&p.size===0){let n=performance.now();if(g&&n-g.time<ee&&Math.hypot(t.clientX-g.x,t.clientY-g.y)<te){g=null,_=n;let r=e.getBoundingClientRect();a?.(t.clientX-r.left,t.clientY-r.top)}else g={x:t.clientX,y:t.clientY,time:n}}h=null,m=p.size===2?v():null;let n=p.size===1?[...p.values()][0]:null;s=n?{x:n.x,y:n.y}:null,c=`rotate`},D=e=>{e.preventDefault(),t.zoom(e.deltaY),r()},O=e=>e.preventDefault(),k=t=>{if(performance.now()-_<600)return;let n=e.getBoundingClientRect();a?.(t.clientX-n.left,t.clientY-n.top)},ne=()=>l=!0,re=()=>l=!1,ie=e=>e instanceof HTMLElement&&(e.isContentEditable||[`INPUT`,`SELECT`,`TEXTAREA`].includes(e.tagName)),ae=()=>l||document.activeElement===e,oe=e=>{let n=Math.min(.1,(e-f)/1e3);if(f=e,![...u].some(e=>M.has(e))){d=0;return}let i=(o?.()??1)*(u.has(`ShiftLeft`)||u.has(`ShiftRight`)?A:1)*(u.has(`ControlLeft`)||u.has(`ControlRight`)?j:1),a=T(b(t.target,t.eye())),s=t.upAxis,c=T(C(a,s)),l=[0,0,0];u.has(`KeyW`)&&(l=y(l,a)),u.has(`KeyS`)&&(l=b(l,a)),u.has(`KeyD`)&&(l=y(l,c)),u.has(`KeyA`)&&(l=b(l,c)),u.has(`KeyE`)&&(l=y(l,s)),u.has(`KeyQ`)&&(l=b(l,s)),(l[0]||l[1]||l[2])&&(t.target=y(t.target,x(T(l),i*n)),r()),d=requestAnimationFrame(oe)},se=e=>e.code||(e.key.length===1?`Key${e.key.toUpperCase()}`:e.key),ce=e=>{if(ie(e.target)||!ae())return;let t=se(e);t===`Home`?(e.preventDefault(),i()):(u.add(t),e.shiftKey&&u.add(`ShiftLeft`),M.has(t)&&(e.preventDefault(),d||=(f=performance.now(),requestAnimationFrame(oe))))},le=e=>{u.delete(se(e)),e.shiftKey||(u.delete(`ShiftLeft`),u.delete(`ShiftRight`))},ue=()=>u.clear();return e.tabIndex=0,e.addEventListener(`pointerdown`,S),e.addEventListener(`pointermove`,w),e.addEventListener(`pointerup`,E),e.addEventListener(`pointercancel`,E),e.addEventListener(`wheel`,D,{passive:!1}),e.addEventListener(`contextmenu`,O),e.addEventListener(`dblclick`,k),e.addEventListener(`pointerenter`,ne),e.addEventListener(`pointerleave`,re),window.addEventListener(`keydown`,ce),window.addEventListener(`keyup`,le),window.addEventListener(`blur`,ue),()=>{cancelAnimationFrame(d),e.removeEventListener(`pointerdown`,S),e.removeEventListener(`pointermove`,w),e.removeEventListener(`pointerup`,E),e.removeEventListener(`pointercancel`,E),e.removeEventListener(`wheel`,D),e.removeEventListener(`contextmenu`,O),e.removeEventListener(`dblclick`,k),e.removeEventListener(`pointerenter`,ne),e.removeEventListener(`pointerleave`,re),window.removeEventListener(`keydown`,ce),window.removeEventListener(`keyup`,le),window.removeEventListener(`blur`,ue)}}var re=89*Math.PI/180,ie=class{target=[0,0,0];distance=5;yaw=0;pitch=.3;fovy=50*Math.PI/180;up=[0,1,0];a=[1,0,0];b=[0,0,1];get upAxis(){return[...this.up]}reorient(e){let t=this.eye();this.setUp(e),this.setDirection(b(t,this.target))}setUp(e){this.up=T(e);let t=Math.abs(this.up[0])<.9?[1,0,0]:[0,1,0];this.a=T(C(t,this.up)),this.b=C(this.up,this.a)}setDirection(e){let t=T(e);this.pitch=Math.max(-re,Math.min(re,Math.asin(S(t,this.up)))),this.yaw=Math.atan2(S(t,this.b),S(t,this.a))}eye(){let e=Math.cos(this.pitch),t=y(x(this.a,e*Math.cos(this.yaw)),x(this.b,e*Math.sin(this.yaw)));return y(this.target,x(y(t,x(this.up,Math.sin(this.pitch))),this.distance))}view(){return D(this.eye(),this.target,this.up)}rotate(e,t){this.yaw-=e*.005,this.pitch=Math.max(-re,Math.min(re,this.pitch+t*.005))}pan(e,t,n){let r=T(b(this.target,this.eye())),i=T(C(r,this.up)),a=C(i,r),o=2*this.distance*Math.tan(this.fovy/2)/n;this.target=y(this.target,y(x(i,-e*o),x(a,t*o)))}zoom(e){this.distance*=Math.exp(e*.001)}};function ae(e,t){e.setUp(t.up),e.target=[...t.target],e.distance=t.distance,e.setDirection(t.dir)}var oe=`

struct Uniforms {
  viewProj: mat4x4f,
  viewport: vec2f,
  pointSize: f32,
  _pad: f32,
};
@group(0) @binding(0) var<uniform> u: Uniforms;

struct VOut {
  @builtin(position) pos: vec4f,
  @location(0) color: vec4f,
};

@vertex
fn vs(@location(0) p: vec3f, @location(1) c: vec4f) -> VOut {
  var out: VOut;
  out.pos = u.viewProj * vec4f(p, 1.0);
  out.color = c;
  return out;
}

@fragment
fn fs(in: VOut) -> @location(0) vec4f {
  return in.color;
}
`,se=class extends Error{},ce=.08,le=5,ue=e=>2*100**(1-e),de=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},fe=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]];function pe(e,t,n,r,i=n){if(!e?.enabled)return null;let a=1;if(e.dissipate>0){let t=Math.min(1,Math.max(0,n/e.dissipate));a=1-t*t*(3-2*t)}if(a<=0)return null;let o=de(t.ground.normal),s=t.metersPerUnit,c=(e.height+e.rise*n)/s,l=c+e.thickness/s,u=-1/0;r!==null&&(u=r,c=Math.max(c,u));let d=e.soft/s;if(l+d<=u)return null;let f=de(fe(Math.abs(o[0])<.9?[1,0,0]:[0,1,0],o)),p=fe(o,f),m=e.wind_heading*Math.PI/180,h=e.wind*Math.cos(m)*i,g=e.wind*Math.sin(m)*i,_=ce*i+e.rise*n;return{up:o,ground:o[0]*t.ground.point[0]+o[1]*t.ground.point[1]+o[2]*t.ground.point[2],mpu:s,floor:u,lo:c,hi:l,soft:d,sigma:3/ue(e.density)*a,color:e.color,patchy:e.patchy,patchM:e.patch_size,drift:[0,1,2].map(e=>f[e]*h+p[e]*g+o[e]*_)}}function me(e,t=!1,n=1){let r=new Float32Array(20);if(!e)return r;r.set([...e.up,e.ground],0),r.set([e.lo,e.hi,e.soft,Number.isFinite(e.floor)?e.floor:-1e30],4);let i=Math.max(n,.001);return r.set([...e.color.map(e=>e*i),e.sigma],8),r.set([...e.drift,e.mpu],12),r.set([e.patchy,e.patchM,+!!t,i],16),r}var he=`
struct FogU {
  a: vec4f,  // up (unit), dot(up, a point on the ground)
  b: vec4f,  // layer floor, top, soft edge (units above the ground); nothing below w (-1e30: no water)
  c: vec4f,  // colour as it glows (its own colour x e.w), extinction per metre (0: no fog)
  d: vec4f,  // noise drift (metres), metres per unit
  e: vec4f,  // patchiness, patch size (m), 1 in the water pass, glow (c.rgb / e.w: its own colour)
};

const FOG_SAMPLES = 8;
const FOG_MAX_M = 400.0;
const FOG_SURROUND_M = ${le}.0;

fn fog_smooth(e0: f32, e1: f32, x: f32) -> f32 {
  if (e1 <= e0) { return select(0.0, 1.0, x >= e0); }
  let k = clamp((x - e0) / (e1 - e0), 0.0, 1.0);
  return k * k * (3.0 - 2.0 * k);
}

fn fog_profile(f: FogU, h: f32) -> f32 {
  let p = fog_smooth(f.b.x - f.b.z, f.b.x, h) * (1.0 - fog_smooth(f.b.y, f.b.y + f.b.z, h));
  return select(0.0, p, h >= f.b.w);
}

fn fog_hash(c: vec3i) -> f32 {
  var h = (bitcast<u32>(c.x) * 0x8da6b343u) ^ (bitcast<u32>(c.y) * 0xd8163841u) ^ (bitcast<u32>(c.z) * 0xcb1ab31fu);
  h ^= h >> 16u;
  h *= 0x7feb352du;
  h ^= h >> 15u;
  h *= 0x846ca68bu;
  h ^= h >> 16u;
  return f32(h) / 4294967295.0;
}

fn fog_noise(q: vec3f) -> f32 {
  let i = vec3i(floor(q));
  let f = q - floor(q);
  let u = f * f * (3.0 - 2.0 * f);
  let x00 = mix(fog_hash(i), fog_hash(i + vec3i(1, 0, 0)), u.x);
  let x10 = mix(fog_hash(i + vec3i(0, 1, 0)), fog_hash(i + vec3i(1, 1, 0)), u.x);
  let x01 = mix(fog_hash(i + vec3i(0, 0, 1)), fog_hash(i + vec3i(1, 0, 1)), u.x);
  let x11 = mix(fog_hash(i + vec3i(0, 1, 1)), fog_hash(i + vec3i(1, 1, 1)), u.x);
  return mix(mix(x00, x10, u.y), mix(x01, x11, u.y), u.z);
}

// Density factor at world point p (1 on average; 1 everywhere without patchiness).
fn fog_patches(f: FogU, p: vec3f) -> f32 {
  if (f.e.x <= 0.0) { return 1.0; }
  let q = (p * f.d.w - f.d.xyz) / f.e.y;
  let v = 0.65 * fog_noise(q) + 0.35 * fog_noise(q * 2.03 + 17.1);
  return 1.0 - f.e.x + f.e.x * 2.0 * fog_smooth(0.2, 0.8, v);
}

// 0..1: how much of the light around world point p comes from the fog it is in (things inside
// the fog, like dust, are lit by it).
fn fog_light_in(f: FogU, p: vec3f) -> f32 {
  if (f.c.w <= 0.0) { return 0.0; }
  let dens = fog_profile(f, dot(p, f.a.xyz) - f.a.w) * fog_patches(f, p);
  return 1.0 - exp(-f.c.w * dens * FOG_SURROUND_M);
}

// How much light gets through the fog from b to a.
fn fog_tr(f: FogU, a: vec3f, b: vec3f) -> f32 {
  if (f.c.w <= 0.0) { return 1.0; }
  let ha = dot(a, f.a.xyz) - f.a.w;
  let hb = dot(b, f.a.xyz) - f.a.w;
  let zlo = max(f.b.x - f.b.z, f.b.w);
  let zhi = f.b.y + f.b.z;
  let dh = hb - ha;
  var t0 = 0.0;
  var t1 = 0.0;
  if (abs(dh) < 1e-9) {
    t1 = select(0.0, 1.0, ha >= zlo && ha <= zhi);
  } else {
    let ta = (zlo - ha) / dh;
    let tb = (zhi - ha) / dh;
    t0 = clamp(min(ta, tb), 0.0, 1.0);
    t1 = clamp(max(ta, tb), 0.0, 1.0);
  }
  let span = max(t1 - t0, 0.0);
  if (span <= 0.0) { return 1.0; }
  var dens = 0.0;
  for (var k = 0; k < FOG_SAMPLES; k++) {
    let t = t0 + span * (f32(k) + 0.5) / f32(FOG_SAMPLES);
    dens += fog_profile(f, ha + dh * t) * fog_patches(f, a + (b - a) * t);
  }
  let tau = f.c.w * dens / f32(FOG_SAMPLES) * span * length(b - a) * f.d.w;
  return exp(-tau);
}

// The background along unit ray d from the eye, through the fog.
fn fog_background(f: FogU, eye: vec3f, d: vec3f, bg: vec3f) -> vec3f {
  if (f.c.w <= 0.0) { return bg; }
  return mix(f.c.rgb, bg, fog_tr(f, eye, eye + d * (FOG_MAX_M / f.d.w)));
}
`,ge=160,P=`
${he}
struct B { inv_view_proj: mat4x4f, eye: vec4f, fog: FogU };
@group(0) @binding(0) var<uniform> b: B;

struct VOut { @builtin(position) pos: vec4f, @location(0) ndc: vec2f };

@vertex
fn vs(@builtin(vertex_index) i: u32) -> VOut {
  let p = vec2f(f32((i << 1u) & 2u), f32(i & 2u)) * 2.0 - 1.0;
  var out: VOut;
  out.pos = vec4f(p, 0.0, 1.0);
  out.ndc = p;
  return out;
}

// The fog over whatever is behind (premultiplied: blended over the sky or clear colour).
@fragment
fn fs(in: VOut) -> @location(0) vec4f {
  let wp = b.inv_view_proj * vec4f(in.ndc, 0.5, 1.0);
  let d = normalize(wp.xyz / wp.w - b.eye.xyz);
  let a = 1.0 - fog_tr(b.fog, b.eye.xyz, b.eye.xyz + d * (FOG_MAX_M / b.fog.d.w));
  return vec4f(b.fog.c.rgb * a, a);
}
`,F=class{device;uniforms;pipeline;bind;constructor(e,t){this.device=e,this.uniforms=e.createBuffer({size:ge,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let n=e.createShaderModule({code:P});this.pipeline=e.createRenderPipeline({layout:`auto`,vertex:{module:n,entryPoint:`vs`},fragment:{module:n,entryPoint:`fs`,targets:[{format:t,blend:{color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`,operation:`add`}}}]},primitive:{topology:`triangle-list`}}),this.bind=e.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniforms}}]})}draw(e,t,n,r){let i=new Float32Array(ge/4);i.set(t,0),i.set([...n,1],16),i.set(r,20),this.device.queue.writeBuffer(this.uniforms,0,i),e.setPipeline(this.pipeline),e.setBindGroup(0,this.bind),e.draw(3)}destroy(){this.uniforms.destroy()}},_e=`
${he}
struct Uniforms {
  view: mat4x4f,
  proj: mat4x4f,
  viewport: vec2f,   // pixels
  focal: vec2f,      // pixels
  near: f32,         // world units; matches the training renderer's near plane
  sh_degree: u32,    // 0 = base colour only
  sh_stride: u32,    // u32 words per splat in sh[]
  eye: vec3f,        // world-space camera position
  clear: f32,        // splats reaching within this distance of the eye aren't drawn (0: off)
  sh_scale: vec4f,   // dequantization: residual, band 1, band 2, band 3
  wet_plane: vec4f,  // ground: dot(xyz, p) - w = height above the ground (scene units)
  wet: vec4f,        // wet line height, damp band above it, strength (0 = off), water level
  flood_grid: vec4f, // connected flood map: u0, v0, cell, enabled (1)
  flood_t: vec4f,    // grid axis u (world) and the number of cells along it
  flood_b: vec4f,    // grid axis v and its cell count
  rain: vec4f,       // x: rain amount (wets every surface a little), y: 1 in the mirror pass,
                     // z: 1 when the eye is outside a dome holding the water (never in it),
                     // w: 1 with added lighting (lit[] holds each splat's light factor)
  fog_sigma: vec4f,  // water pass: extinction per metre (rgb) and strength (w: 0 = off)...
  fog_col: vec4f,    // ...the colour the water scatters (rgb), metres per unit (w)
  area_c: vec4f,     // water area: centre on the ground, shape (w: 0 none, 1 circle, 2 square)
  area_u: vec4f,     // its side direction (xyz, on the ground) and size (w: radius / half-width)
  area_k: vec4f,     // x: its soft edge (units); y, z: placed objects' records [y, z), never cropped;
                     // w: 1 with back-face culling (facing.ts)
  crop_c: vec4f,     // clean crop edges: centre, shape (w: 0 off, 1 box, 2 ellipsoid)
  crop_x: vec4f,     // crop axes (xyz) and half sizes (w)
  crop_y: vec4f,
  crop_z: vec4f,
  fog: FogU,
};

// Flood water per cell of a grid on the ground plane (flow.ts FlowSim.state):
// (surface, depth m, wet line, 0), surface and wet line in scene units above the ground,
// surface -1e9 where dry. Disabled (flood_grid.w = 0) without a flood map.
fn flow_cell(i: i32, j: i32, ta: vec4f, ba: vec4f) -> vec4f {
  let nu = i32(ta.w);
  let c = vec2i(clamp(i, 0, nu - 1), clamp(j, 0, i32(ba.w) - 1));
  return flow[c.y * nu + c.x];
}

// The water at point p, interpolated between cell centres (smooth edges, no squares):
// x = surface height (units above the ground; -1e9 none), y = 0..1 how wet, z = wet line.
fn water_at(p: vec3f, grid: vec4f, ta: vec4f, ba: vec4f) -> vec3f {
  let x = (dot(p, ta.xyz) - grid.x) / grid.z - 0.5;
  let y = (dot(p, ba.xyz) - grid.y) / grid.z - 0.5;
  let i = i32(floor(x));
  let j = i32(floor(y));
  let fx = x - floor(x);
  let fy = y - floor(y);
  let c00 = flow_cell(i, j, ta, ba);
  let c10 = flow_cell(i + 1, j, ta, ba);
  let c01 = flow_cell(i, j + 1, ta, ba);
  let c11 = flow_cell(i + 1, j + 1, ta, ba);
  let w = vec4f((1.0 - fx) * (1.0 - fy), fx * (1.0 - fy), (1.0 - fx) * fy, fx * fy);
  let wet = vec4f(select(0.0, 1.0, c00.x > -1e8), select(0.0, 1.0, c10.x > -1e8),
                  select(0.0, 1.0, c01.x > -1e8), select(0.0, 1.0, c11.x > -1e8));
  let ww = w * wet;
  let total = ww.x + ww.y + ww.z + ww.w;
  let surface = select(-1e9, dot(ww, vec4f(c00.x, c10.x, c01.x, c11.x)) / max(total, 1e-6), total > 0.0);
  let line = max(max(c00.z, c10.z), max(c01.z, c11.z));
  return vec3f(surface, clamp((total - 0.25) / 0.5, 0.0, 1.0), line);
}

// 1 inside the flood's area, 0 outside, smooth across its soft edge (1 without an area).
fn water_area(p: vec3f) -> f32 {
  if (u.area_c.w < 0.5) { return 1.0; }
  let d = p - u.area_c.xyz;
  let a = dot(d, u.area_u.xyz);
  let b = dot(d, cross(u.wet_plane.xyz, u.area_u.xyz));
  let r = select(length(vec2f(a, b)), max(abs(a), abs(b)), u.area_c.w > 1.5);
  return 1.0 - smoothstep(u.area_u.w - max(u.area_k.x, 1e-9), u.area_u.w, r);
}
`,ve=`
${_e}
@group(0) @binding(0) var<uniform> u: Uniforms;
@group(0) @binding(1) var<storage, read> splats: array<u32>;  // 8 words per splat
@group(0) @binding(2) var<storage, read> order: array<u32>;   // back-to-front indices
@group(0) @binding(3) var<storage, read> sh: array<u32>;      // snorm8 colour block per splat
@group(0) @binding(4) var<storage, read> flow: array<vec4f>;
@group(0) @binding(5) var<storage, read> lit: array<vec2<u32>>;  // lighting.ts: f16 rgb factor
@group(0) @binding(6) var<storage, read> picked: array<u32>;     // selected splats, one bit each
@group(0) @binding(7) var<storage, read> facing: array<u32>;     // facing.ts: 2 bits per splat

const PICKED_TINT = vec3f(1.0, 0.55, 0.12);

// A splat (covariance sig) reaching more than d past its centre along unit n, squashed along n
// so its drawn extent (EXTENT sigma) ends at d; across n it keeps its shape.
fn squash(sig: mat3x3f, n: vec3f, d: f32) -> mat3x3f {
  let sn = sig * n;
  let var_n = max(dot(n, sn), 1e-30);
  let reach = EXTENT * sqrt(var_n);
  if (d >= reach) { return sig; }
  let k = clamp(d / reach, CROP_MIN_SQUASH, 1.0);
  let c = (1.0 - k * k) / var_n;
  return sig - c * mat3x3f(sn * sn.x, sn * sn.y, sn * sn.z);
}

// Clean crop edges (engine edit/__init__.py crop_edges): squash against each face of a box,
// or the nearest surface of an ellipsoid. Splats outside are hidden by the mask anyway.
fn crop_edges(p: vec3f, sig_in: mat3x3f) -> mat3x3f {
  var sig = sig_in;
  let l = p - u.crop_c.xyz;
  let ax = array<vec4f, 3>(u.crop_x, u.crop_y, u.crop_z);
  if (u.crop_c.w < 1.5) {
    for (var i = 0; i < 3; i++) {
      sig = squash(sig, ax[i].xyz, ax[i].w - abs(dot(l, ax[i].xyz)));
    }
    return sig;
  }
  var g = vec3f(0.0);
  var rho2 = 0.0;
  for (var i = 0; i < 3; i++) {
    let li = dot(l, ax[i].xyz);
    g += ax[i].xyz * (li / (ax[i].w * ax[i].w));
    rho2 += (li / ax[i].w) * (li / ax[i].w);
  }
  let gn = length(g);
  if (gn < 1e-12) { return sig; }
  let rho = sqrt(rho2);
  return squash(sig, g / gn, (1.0 - rho) * rho / gn);
}

// Higher-order colour for splat i seen along unit direction d (added to the 8-bit base).
fn sh_color(i: u32, d: vec3f) -> vec3f {
  var c: array<f32, 48>;
  let base = i * u.sh_stride;
  for (var w = 0u; w < u.sh_stride; w++) {
    let v = unpack4x8snorm(sh[base + w]);
    c[w * 4u] = v.x; c[w * 4u + 1u] = v.y; c[w * 4u + 2u] = v.z; c[w * 4u + 3u] = v.w;
  }
  // Coefficient k (1-based SH index) lives at c[3k .. 3k+2]; c[0..2] is the base residual.
  var rgb = vec3f(c[0], c[1], c[2]) * u.sh_scale.x;
  let x = d.x; let y = d.y; let z = d.z;

  var b1: array<f32, 3>;
  b1[0] = -0.48860251190292 * y;
  b1[1] = 0.48860251190292 * z;
  b1[2] = -0.48860251190292 * x;
  var acc = vec3f(0.0);
  for (var k = 0u; k < 3u; k++) { acc += b1[k] * vec3f(c[3u + 3u * k], c[4u + 3u * k], c[5u + 3u * k]); }
  rgb += acc * u.sh_scale.y;
  if (u.sh_degree < 2u) { return rgb; }

  let z2 = z * z;
  let fC1 = x * x - y * y;
  let fS1 = 2.0 * x * y;
  var b2: array<f32, 5>;
  b2[0] = 0.5462742152960395 * fS1;
  b2[1] = -1.092548430592079 * z * y;
  b2[2] = 0.9461746957575601 * z2 - 0.3153915652525201;
  b2[3] = -1.092548430592079 * z * x;
  b2[4] = 0.5462742152960395 * fC1;
  acc = vec3f(0.0);
  for (var k = 0u; k < 5u; k++) { acc += b2[k] * vec3f(c[12u + 3u * k], c[13u + 3u * k], c[14u + 3u * k]); }
  rgb += acc * u.sh_scale.z;
  if (u.sh_degree < 3u) { return rgb; }

  let fTmpC = -2.285228997322329 * z2 + 0.4570457994644658;
  let fTmpB = 1.445305721320277 * z;
  let fC2 = x * fC1 - y * fS1;
  let fS2 = x * fS1 + y * fC1;
  var b3: array<f32, 7>;
  b3[0] = -0.5900435899266435 * fS2;
  b3[1] = fTmpB * fS1;
  b3[2] = fTmpC * y;
  b3[3] = z * (1.865881662950577 * z2 - 1.119528997770346);
  b3[4] = fTmpC * x;
  b3[5] = fTmpB * fC1;
  b3[6] = -0.5900435899266435 * fC2;
  acc = vec3f(0.0);
  for (var k = 0u; k < 7u; k++) { acc += b3[k] * vec3f(c[27u + 3u * k], c[28u + 3u * k], c[29u + 3u * k]); }
  return rgb + acc * u.sh_scale.w;
}

struct VOut {
  @builtin(position) pos: vec4f,
  @location(0) color: vec4f,
  @location(1) uv: vec2f,  // position within the splat, in standard deviations
  @location(2) depth: f32, // view depth of the splat centre
  @location(3) @interpolate(flat) under: u32,  // 1: on the far side of the water surface
  @location(4) world: vec3f,                   // the point drawn (at the per-pixel depth)
  @location(5) @interpolate(flat) surf: f32,   // water surface at the splat: dot(n, x) (-1e30: none)
};

const EXTENT = 3.0;  // draw out to 3 sigma
const CROP_MIN_SQUASH = 0.02;  // thinnest a squashed splat gets, relative to its reach
const MIRROR_NEEDLE_MIN = 4.0;  // mirror pass: splats longer than this many times their width fade
const MIRROR_NEEDLE_MAX = 10.0;  // ...and are gone at this

fn culled() -> VOut {
  var out: VOut;
  out.pos = vec4f(0.0, 0.0, 2.0, 1.0);  // outside the clip volume
  return out;
}

@vertex
fn vs(@builtin(vertex_index) vi: u32, @builtin(instance_index) ii: u32) -> VOut {
  let idx = order[ii];
  let base = idx * 8u;
  let p = vec3f(bitcast<f32>(splats[base]), bitcast<f32>(splats[base + 1u]), bitcast<f32>(splats[base + 2u]));
  let s = vec3f(bitcast<f32>(splats[base + 3u]), bitcast<f32>(splats[base + 4u]), bitcast<f32>(splats[base + 5u]));
  let q = normalize(unpack4x8snorm(splats[base + 6u]));  // w, x, y, z
  var color = unpack4x8unorm(splats[base + 7u]);

  // Clear around the camera: nothing that reaches into the sphere (out to EXTENT sigma).
  if (u.clear > 0.0 && length(p - u.eye) - EXTENT * max(s.x, max(s.y, s.z)) < u.clear) { return culled(); }
  let cam = u.view * vec4f(p, 1.0);
  if (-cam.z < u.near) { return culled(); }
  let clip = u.proj * cam;
  let ndc = clip.xy / clip.w;
  if (abs(ndc.x) > 1.3 || abs(ndc.y) > 1.3) { return culled(); }
  // The mirror pass sees the scene from below the water, where nothing was ever captured:
  // take the view-dependent colour as seen from above (the real camera's side) instead.
  let mirror = u.rain.y > 0.5;
  var view_dir = normalize(p - u.eye);
  if (mirror && dot(view_dir, u.wet_plane.xyz) > 0.0) {
    view_dir -= 2.0 * dot(view_dir, u.wet_plane.xyz) * u.wet_plane.xyz;
  }
  if (u.sh_degree > 0u) {
    color = vec4f(clamp(color.rgb + sh_color(idx, view_dir), vec3f(0.0), vec3f(1.0)), color.a);
  }
  if (u.rain.w > 0.5) {  // added lights (and shadows), worked out per splat by lighting.ts
    let lf = lit[idx];
    color = vec4f(color.rgb * vec3f(unpack2x16float(lf.x), unpack2x16float(lf.y).x), color.a);
  }
  if (u.wet.z > 0.0) {
    let h = dot(u.wet_plane.xyz, p) - u.wet_plane.w;
    var line = u.wet.x;
    if (u.flood_grid.w > 0.0) { line = water_at(p, u.flood_grid, u.flood_t, u.flood_b).z; }  // local
    let wetness = max(u.wet.z * (1.0 - smoothstep(line, line + u.wet.y, h)) * water_area(p), u.rain.x * 0.45);
    let soaked = pow(color.rgb, vec3f(1.4)) * 0.74;  // wet surfaces: darker, more saturated
    color = vec4f(mix(color.rgb, soaked, wetness), color.a);
  }
  // Selected (to delete): tinted, and faint ones made visible.
  if ((picked[idx >> 5u] & (1u << (idx & 31u))) != 0u) {
    color = vec4f(mix(color.rgb, PICKED_TINT, 0.65), max(color.a, 0.6));
  }

  // World covariance  Sigma = R S S^T R^T.
  let w = q.x; let x = q.y; let y = q.z; let z = q.w;
  let r = mat3x3f(
    vec3f(1.0 - 2.0 * (y * y + z * z), 2.0 * (x * y + w * z), 2.0 * (x * z - w * y)),
    vec3f(2.0 * (x * y - w * z), 1.0 - 2.0 * (x * x + z * z), 2.0 * (y * z + w * x)),
    vec3f(2.0 * (x * z + w * y), 2.0 * (y * z - w * x), 1.0 - 2.0 * (x * x + y * y)),
  );
  // Back-face culling (facing.ts): a flat splat seen from behind the side its cameras saw.
  if (u.area_k.w > 0.5) {
    let fb = (facing[idx >> 4u] >> ((idx & 15u) * 2u)) & 3u;
    if ((fb & 1u) != 0u) {
      var k = 0;
      if (s.y < s[k]) { k = 1; }
      if (s.z < s[k]) { k = 2; }
      let front = select(r[k], -r[k], (fb & 2u) != 0u);
      if (dot(front, u.eye - p) < 0.0) { return culled(); }
    }
  }
  let m = mat3x3f(r[0] * s.x, r[1] * s.y, r[2] * s.z);
  var sigma = m * transpose(m);
  if (u.crop_c.w > 0.5 && (f32(idx) < u.area_k.y || f32(idx) >= u.area_k.z)) { sigma = crop_edges(p, sigma); }

  // Project: Jacobian of (fx * x / -z, fy * y / -z) at the splat centre.
  let tz = -cam.z;
  let j = mat3x3f(
    vec3f(u.focal.x / tz, 0.0, 0.0),
    vec3f(0.0, u.focal.y / tz, 0.0),
    vec3f(u.focal.x * cam.x / (tz * tz), u.focal.y * cam.y / (tz * tz), 0.0),
  );
  let wrot = mat3x3f(u.view[0].xyz, u.view[1].xyz, u.view[2].xyz);
  let t = j * wrot;
  let cov = t * sigma * transpose(t);
  let a = cov[0][0] + 0.3;  // low-pass, as in the reference renderer
  let b = cov[0][1];
  let c = cov[1][1] + 0.3;

  // Principal axes of the 2D ellipse.
  let mid = 0.5 * (a + c);
  let radius = length(vec2f(0.5 * (a - c), b));
  let l1 = mid + radius;
  let l2 = max(mid - radius, 0.1);
  var v1 = vec2f(1.0, 0.0);
  if (abs(b) > 1e-9) { v1 = normalize(vec2f(b, l1 - a)); } else if (c > a) { v1 = vec2f(0.0, 1.0); }
  let v2 = vec2f(-v1.y, v1.x);
  let major = min(sqrt(l1), 1024.0);
  let minor = min(sqrt(l2), 1024.0);
  // ...and flat splats seen edge-on from there are long thin needles that streak the
  // reflection: fade those out.
  if (mirror) {
    color.a *= 1.0 - smoothstep(MIRROR_NEEDLE_MIN, MIRROR_NEEDLE_MAX, major / minor) * smoothstep(2.0, 8.0, major);
  }

  var corners = array<vec2f, 4>(vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0), vec2f(1.0, 1.0));
  let uv = corners[vi] * EXTENT;
  let offset = uv.x * major * v1 + uv.y * minor * v2;  // pixels

  var out: VOut;
  out.pos = clip + vec4f(offset * 2.0 / u.viewport * clip.w, 0.0, 0.0);
  out.color = color;
  out.uv = uv;
  // Depth per pixel, not one per splat: where the Gaussian is densest along each pixel's ray,
  // i.e. the camera-space z of the centre plus the slope of z given the lateral offset (the
  // conditional mean z | x, y), linear across the quad. Without it, the water's extinction is
  // constant over each splat, and big splats seen through the water look like flat cards.
  // The slope is capped at 3 sigma in depth (splats seen edge-on would otherwise jump).
  let sc = wrot * sigma * transpose(wrot);
  let det2 = sc[0][0] * sc[1][1] - sc[0][1] * sc[0][1];
  let lateral = offset * tz / u.focal;  // view units at the splat's depth (x right, y up)
  var dz = 0.0;
  if (det2 > 1e-20) {
    let k = vec2f(sc[2][0] * sc[1][1] - sc[2][1] * sc[0][1], sc[2][1] * sc[0][0] - sc[2][0] * sc[0][1]) / det2;
    let cap = EXTENT * sqrt(max(sc[2][2], 0.0));
    dz = clamp(dot(k, lateral), -cap, cap);
  }
  out.depth = max(tz - dz, u.near);
  // The world point on this corner's ray at that depth (for the water fog in fs_water).
  let at = vec3f((cam.xy + lateral) * (out.depth / tz), -out.depth);
  out.world = transpose(wrot) * (at - u.view[3].xyz);
  // Splat above the water? (The local surface with a flood map, else the flat level.)
  var side = dot(u.wet_plane.xyz, p) - u.wet_plane.w - u.wet.w;
  var eye_side = dot(u.wet_plane.xyz, u.eye) - u.wet_plane.w - u.wet.w;
  out.surf = u.wet_plane.w + u.wet.w;
  if (u.flood_grid.w > 0.0) {
    let here = water_at(p, u.flood_grid, u.flood_t, u.flood_b);
    side = select(1.0, dot(u.wet_plane.xyz, p) - u.wet_plane.w - here.x, here.y > 0.0);
    out.surf = select(-1e30, u.wet_plane.w + here.x, here.y > 0.0);
    let at_eye = water_at(u.eye, u.flood_grid, u.flood_t, u.flood_b);
    eye_side = select(1.0, dot(u.wet_plane.xyz, u.eye) - u.wet_plane.w - at_eye.x, at_eye.y > 0.5);
  }
  if (u.rain.z > 0.5) { eye_side = 1.0; }
  out.under = select(0u, 1u, (side < 0.0) != (eye_side < 0.0));
  // Fog in front of the splat (in the water pass, not for those seen through the water).
  if (u.fog.c.w > 0.0 && (mirror || out.under == 0u || u.fog.e.z < 0.5)) {
    var start = u.eye;
    if (mirror) {  // the reflection: from where the reflected ray leaves the water
      let lvl = u.wet_plane.w + u.wet.w;
      let k = clamp((lvl - dot(u.wet_plane.xyz, u.eye)) / max(dot(u.wet_plane.xyz, p - u.eye), 1e-9), 0.0, 1.0);
      start = u.eye + (p - u.eye) * k;
    }
    let tr = fog_tr(u.fog, start, p);
    out.color = vec4f(mix(u.fog.c.rgb, out.color.rgb, tr), out.color.a);
  }
  return out;
}

@fragment
fn fs(in: VOut) -> @location(0) vec4f {
  let d2 = dot(in.uv, in.uv);
  if (d2 > EXTENT * EXTENT) { discard; }
  let alpha = in.color.a * exp(-0.5 * d2);
  if (alpha < 1.0 / 255.0) { discard; }
  return vec4f(in.color.rgb * alpha, alpha);
}

struct DepthOut {
  @location(0) color: vec4f,  // as fs
  @location(1) depth: vec4f,  // (depth, 1) of the nearest solid splat, as fs_water's over_depth
};

// The plain pass with the scene's depth alongside, for what's drawn over the splats afterwards
// and must hide behind them (dust.ts).
@fragment
fn fs_depth(in: VOut) -> DepthOut {
  let d2 = dot(in.uv, in.uv);
  if (d2 > EXTENT * EXTENT) { discard; }
  let alpha = in.color.a * exp(-0.5 * d2);
  if (alpha < 1.0 / 255.0) { discard; }
  let solid = select(0.0, 1.0, alpha >= SOLID);
  var out: DepthOut;
  out.color = vec4f(in.color.rgb * alpha, alpha);
  out.depth = vec4f(in.depth * solid, solid, 0.0, solid);
  return out;
}

struct WaterOut {
  @location(0) over: vec4f,        // premultiplied colour, splats on the camera's side
  @location(1) under: vec4f,       // premultiplied colour, splats beyond the water surface
  @location(2) over_depth: vec4f,  // (depth, 1) of the nearest solid splat; alpha 1 = replace
  @location(3) under_depth: vec4f,
};

const SOLID = 0.4;

@fragment
fn fs_water(in: VOut) -> WaterOut {
  let d2 = dot(in.uv, in.uv);
  if (d2 > EXTENT * EXTENT) { discard; }
  let alpha = in.color.a * exp(-0.5 * d2);
  if (alpha < 1.0 / 255.0) { discard; }
  // Water fog per splat, as it's blended (not once per pixel from one depth afterwards, which
  // left splats near the camera untinted against the tinted ones behind them): Beer-Lambert
  // over the part of the ray from the eye to this point that is under the water, scattering
  // in the water's colour. Seen from outside a dome holding the water the path enters through
  // its side instead; the water pass works that one out per pixel.
  var rgb = in.color.rgb;
  let below = in.surf - dot(u.wet_plane.xyz, in.world);  // depth under the surface here
  if (u.fog_sigma.w > 0.0 && below > 0.0 && u.rain.z < 0.5) {
    let seg = length(in.world - u.eye);
    let above = dot(u.wet_plane.xyz, u.eye) - in.surf;  // the eye's height over the surface
    let path_m = select(seg * below / (above + below), seg, above <= 0.0) * u.fog_col.w;
    let tr = exp(-u.fog_sigma.xyz * min(path_m, 1e4));
    rgb = mix(rgb, rgb * tr + u.fog_col.rgb * (1.0 - tr), u.fog_sigma.w * water_area(in.world));
  }
  let c = vec4f(rgb * alpha, alpha);
  let solid = select(0.0, 1.0, alpha >= SOLID);
  let d = vec4f(in.depth * solid, solid, 0.0, solid);
  var out: WaterOut;  // zero outputs leave a target unchanged under "over" blending
  if (in.under == 1u) { out.under = c; out.under_depth = d; } else { out.over = c; out.over_depth = d; }
  return out;
}
`,ye=2e4,be=8e3,xe=192,I=`
struct D {
  view_proj: mat4x4f,
  normal: vec3f, ground: f32,      // ground plane: dot(normal, x) = ground
  tangent: vec3f, u0: f32,         // grid axes and origin (scene units)
  bitangent: vec3f, v0: f32,
  cell: f32, mpu: f32, dt: f32, time: f32,
  nu: u32, nv: u32, amount: f32, sigma: f32,  // sigma: the water's extinction (1/m)
  wind: vec2f, opacity: f32, _b: f32,          // wind: drift along the axes, units/s
  foam_color: vec3f, foam_amount: f32,
  foam_opacity: f32, _c: f32, _d: f32, _e: f32,
};
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> state: array<vec4f>;  // FlowSim.state

const MIN_DEPTH = 0.03;  // metres: thinner water carries nothing

fn cell_of(u: f32, v: f32) -> i32 {
  let i = i32(floor((u - d.u0) / d.cell));
  let j = i32(floor((v - d.v0) / d.cell));
  if (i < 0 || j < 0 || i >= i32(d.nu) || j >= i32(d.nv)) { return -1; }
  return j * i32(d.nu) + i;
}

fn hash(x: f32) -> f32 { return fract(sin(x * 127.1 + 311.7) * 43758.5453); }

fn hash2(p: vec2f) -> f32 { return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453); }

// Smooth value noise, 0..1.
fn vnoise(p: vec2f) -> f32 {
  let i = floor(p);
  let f = p - i;
  let s = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash2(i), hash2(i + vec2f(1.0, 0.0)), s.x),
             mix(hash2(i + vec2f(0.0, 1.0)), hash2(i + vec2f(1.0, 1.0)), s.x), s.y);
}

fn clamped_cell(i: i32, j: i32) -> i32 {
  return clamp(j, 0, i32(d.nv) - 1) * i32(d.nu) + clamp(i, 0, i32(d.nu) - 1);
}

// Bilinear weights of the four cells around (u, v), and the first cell's indices.
fn bilinear(u: f32, v: f32) -> vec4f {
  let x = (u - d.u0) / d.cell - 0.5;
  let y = (v - d.v0) / d.cell - 0.5;
  return vec4f(floor(x), floor(y), x - floor(x), y - floor(y));
}

fn wet(u: f32, v: f32) -> bool {
  let k = cell_of(u, v);
  return k >= 0 && state[k].y >= MIN_DEPTH;
}

// The water surface (units above the ground) and depth (m) at (u, v), between cell centres,
// over the wet cells only.
fn water_here(u: f32, v: f32) -> vec2f {
  let b = bilinear(u, v);
  let i = i32(b.x); let j = i32(b.y);
  var acc = vec3f(0.0);
  for (var k = 0; k < 4; k++) {
    let di = k & 1; let dj = k >> 1;
    let s = state[clamped_cell(i + di, j + dj)];
    let w = select(1.0 - b.z, b.z, di == 1) * select(1.0 - b.w, b.w, dj == 1) * select(0.0, 1.0, s.y > 0.0);
    acc += vec3f(s.x * w, s.y * w, w);
  }
  return select(vec2f(-1e9, 0.0), acc.xy / max(acc.z, 1e-6), acc.z > 1e-6);
}
`,Se=`
${I}
@group(0) @binding(2) var<storage, read> vel: array<vec2f>;
@group(0) @binding(3) var<storage, read_write> particles: array<vec4f>;  // 2 per particle

// How wet around (u, v) is (0..1, bilinear over the cells), for finding the edges.
fn wetness(u: f32, v: f32) -> f32 {
  let b = bilinear(u, v);
  let i = i32(b.x); let j = i32(b.y);
  var acc = 0.0;
  for (var k = 0; k < 4; k++) {
    let di = k & 1; let dj = k >> 1;
    let s = state[clamped_cell(i + di, j + dj)];
    let w = select(1.0 - b.z, b.z, di == 1) * select(1.0 - b.w, b.w, dj == 1);
    let inside = i + di >= 0 && j + dj >= 0 && i + di < i32(d.nu) && j + dj < i32(d.nv);
    acc += w * select(0.0, 1.0, inside && s.y >= MIN_DEPTH);
  }
  return acc;
}

// Toward the nearest edge of the water (xy, unit or zero) and how close it is (z, 0..1),
// looking about 1.5 and 4 cells around.
fn edge_pull(u: f32, v: f32) -> vec3f {
  let h1 = 1.5 * d.cell; let h2 = 4.0 * d.cell;
  let g = vec2f(wetness(u + h1, v) - wetness(u - h1, v), wetness(u, v + h1) - wetness(u, v - h1))
        + 0.5 * vec2f(wetness(u + h2, v) - wetness(u - h2, v), wetness(u, v + h2) - wetness(u, v - h2));
  let n = length(g);
  return vec3f(select(vec2f(0.0), -g / max(n, 1e-6), n > 1e-3), clamp(n, 0.0, 1.0));
}

// Slicks: floating things collect in the hollows of a broad, slowly drifting field (metres).
fn slick_pull(u: f32, v: f32, scale_m: f32) -> vec2f {
  let p = vec2f(u, v) * d.mpu / scale_m + d.wind * d.mpu * d.time * 0.15 / scale_m;
  let e = 0.05;
  let g = vec2f(vnoise(p + vec2f(e, 0.0)) - vnoise(p - vec2f(e, 0.0)),
                vnoise(p + vec2f(0.0, e)) - vnoise(p - vec2f(0.0, e))) / (2.0 * e);
  let n = length(g);
  return -g / max(n, 1.0);  // at most unit length
}

// A swirl (m/s per unit strength) that eddies without gathering: the curl of slow noise.
fn swirl(u: f32, v: f32, scale_m: f32) -> vec2f {
  let p = vec2f(u, v) * d.mpu / scale_m + vec2f(d.time * 0.031, -d.time * 0.023);
  let e = 0.05;
  let dx = (vnoise(p + vec2f(e, 0.0)) - vnoise(p - vec2f(e, 0.0))) / (2.0 * e);
  let dy = (vnoise(p + vec2f(0.0, e)) - vnoise(p - vec2f(0.0, e))) / (2.0 * e);
  let w = (vnoise(p * 2.1 + 17.0) - 0.5) * 0.6;  // finer variation in the eddies' strength
  return vec2f(dy, -dx) * (1.0 + w);
}

fn current(u: f32, v: f32) -> vec2f {
  let b = bilinear(u, v);
  let i = i32(b.x); let j = i32(b.y);
  let v00 = vel[clamped_cell(i, j)]; let v10 = vel[clamped_cell(i + 1, j)];
  let v01 = vel[clamped_cell(i, j + 1)]; let v11 = vel[clamped_cell(i + 1, j + 1)];
  return mix(mix(v00, v10, b.z), mix(v01, v11, b.z), b.w) / d.mpu;  // m/s -> units/s
}

// Back on the water somewhere random, new lifetime (seconds).
fn respawn(q: ptr<function, vec4f>, s: ptr<function, vec4f>, life_min: f32, life_span: f32) {
  let r = vec2f(hash((*q).w + d.time * 1.7), hash((*q).w * 3.1 + d.time * 2.3));
  (*q).x = d.u0 + r.x * f32(d.nu) * d.cell;
  (*q).y = d.v0 + r.y * f32(d.nv) * d.cell;
  *s = vec4f(0.0, life_min + life_span * hash((*q).w * 1.9 + d.time * 0.37), 0.0, 0.0);
}

// Move by \`motion\` (units/s), but never out onto dry ground: floating things pile up there.
fn move_on_water(q: ptr<function, vec4f>, motion: vec2f) {
  let next = (*q).xy + motion * d.dt;
  if (wet(next.x, next.y)) { (*q).x = next.x; (*q).y = next.y; }
  else if (wet(next.x, (*q).y)) { (*q).x = next.x; }  // slide along the edge
  else if (wet((*q).x, next.y)) { (*q).y = next.y; }
}

@compute @workgroup_size(64)
fn advect(@builtin(global_invocation_id) id: vec3u) {
  let i = id.x;
  if (2u * i + 1u >= arrayLength(&particles)) { return; }
  var q = particles[2u * i];
  var s = particles[2u * i + 1u];
  if (!wet(q.x, q.y) || s.x > s.y) {
    // Dry (or off the grid), or its time is up: try a new random spot; it shows (fading in)
    // once it lands on water.
    respawn(&q, &s, 60.0, 120.0);
  } else {
    // The current between cell centres, a little wind, and a slow drift of its own (its
    // direction turning gently over time): smooth, no per-frame randomness.
    let flow = current(q.x, q.y);
    let heading = hash(q.w * 3.7) * 6.2832 + d.time * 0.05 * (hash(q.w * 8.1) - 0.5);
    let drift = vec2f(cos(heading), sin(heading)) * 0.02 / d.mpu;
    // Pooling grows over the first minute and a half afloat: very slightly toward the edges
    // and into slicks.
    let pool = smoothstep(5.0, 90.0, s.x);
    let edge = edge_pull(q.x, q.y);
    let gather = (edge.xy * 0.03 + slick_pull(q.x, q.y, 2.5) * 0.012) * pool / d.mpu;
    let calm = 1.0 - 0.7 * edge.z * pool;  // settles once it's at the edge
    let motion = (flow * 0.9 + d.wind + drift) * calm + gather;
    move_on_water(&q, motion);
    q.z += ((hash(q.w * 5.3) - 0.5) * 0.15 + length(flow) * 0.1) * d.dt;  // a slow, steady turn
    // Decay: it ages, faster where it has piled up at an edge.
    s.x += d.dt * (1.0 + 2.0 * edge.z);
    s = vec4f(s.xy, mix(s.zw, motion, 1.0 - exp(-d.dt / 1.5)));
  }
  particles[2u * i] = q;
  particles[2u * i + 1u] = s;
}

@compute @workgroup_size(64)
fn advect_foam(@builtin(global_invocation_id) id: vec3u) {
  let i = id.x;
  if (2u * i + 1u >= arrayLength(&particles)) { return; }
  var q = particles[2u * i];
  var s = particles[2u * i + 1u];
  if (!wet(q.x, q.y) || s.x > s.y) {
    respawn(&q, &s, 25.0, 35.0);
  } else {
    // Foam rides the current and the wind, swirling in eddies that grow with the current.
    let flow = current(q.x, q.y);
    let speed_m = length(flow) * d.mpu;
    let eddy = swirl(q.x, q.y, 1.2) * (0.04 + 0.3 * min(speed_m, 1.0)) / d.mpu;
    let pool = smoothstep(2.0, 30.0, s.x);
    let edge = edge_pull(q.x, q.y);
    let gather = (edge.xy * 0.04 + slick_pull(q.x, q.y, 1.8) * 0.02) * pool / d.mpu;
    let calm = 1.0 - 0.6 * edge.z * pool;
    let motion = (flow + d.wind * 1.3 + eddy) * calm + gather;
    move_on_water(&q, motion);
    s.x += d.dt * (1.0 + 1.5 * edge.z);
    s = vec4f(s.xy, mix(s.zw, motion, 1.0 - exp(-d.dt / 0.8)));
    let m = s.zw;
    if (length(m) > 1e-6) { q.z = atan2(m.y, m.x); }  // stretched along its way
  }
  particles[2u * i] = q;
  particles[2u * i + 1u] = s;
}
`,Ce=`
${I}
@group(0) @binding(2) var<storage, read> particles: array<vec4f>;

struct VOut {
  @builtin(position) pos: vec4f,
  @location(0) uv: vec2f,
  @location(1) @interpolate(flat) kind: u32,
  @location(2) @interpolate(flat) seed: f32,
  @location(3) @interpolate(flat) fade: f32,  // opacity setting x murk over submerged bits x life
  @location(4) @interpolate(flat) stretch: f32,
};

// Fades in when it appears and out before its time is up (no popping).
fn life_fade(s: vec4f) -> f32 {
  return smoothstep(0.0, 4.0, s.x) * (1.0 - smoothstep(s.y - 10.0, s.y, s.x));
}

fn corner(vi: u32) -> vec2f {
  var corners = array<vec2f, 4>(vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0), vec2f(1.0, 1.0));
  return corners[vi];
}

fn quad(q: vec4f, size: vec2f, angle: f32, vi: u32, lift_m: f32, depth: f32, here: vec2f) -> vec4f {
  let c = corner(vi);
  let ca = cos(angle); let sa = sin(angle);
  let local = vec2f(c.x * size.x * ca - c.y * size.y * sa, c.x * size.x * sa + c.y * size.y * ca);
  let height = here.x + (lift_m - depth) / d.mpu;
  let p = d.tangent * (q.x + local.x) + d.bitangent * (q.y + local.y) + d.normal * (d.ground + height);
  return d.view_proj * vec4f(p, 1.0);
}

@vertex
fn vs(@builtin(vertex_index) vi: u32, @builtin(instance_index) ii: u32) -> VOut {
  var out: VOut;
  out.pos = vec4f(0.0, 0.0, 2.0, 1.0);  // culled unless it shows
  let q = particles[2u * ii];
  let s = particles[2u * ii + 1u];
  if (hash(q.w * 0.731) > d.amount) { return out; }
  let k = cell_of(q.x, q.y);
  if (k < 0 || state[k].y < MIN_DEPTH) { return out; }
  // Tiny bits: 0 dark speck, 1 grit/fibre, 2 bubble, 3 mud speck, 4 leaf fragment (rare);
  // the same mix as render/flow.py.
  let r = hash(q.w * 9.17);
  var kind = 4u;
  if (r < 0.40) { kind = 0u; } else if (r < 0.62) { kind = 1u; } else if (r < 0.80) { kind = 2u; } else if (r < 0.96) { kind = 3u; }
  var size = vec2f(0.006, 0.006);  // metres, half extents
  if (kind == 1u) { size = vec2f(0.005 + 0.005 * hash(q.w * 2.0), 0.0012); }
  if (kind == 2u) { size = vec2f(0.002 + 0.003 * hash(q.w * 4.0)); }
  if (kind == 3u) { size = vec2f(0.004 + 0.003 * hash(q.w * 8.0), 0.003 + 0.002 * hash(q.w * 7.0)); }
  if (kind == 4u) { size = vec2f(0.007 + 0.005 * hash(q.w * 3.0), 0.004); }
  size = size * (0.6 + 0.8 * hash(q.w * 1.3)) / d.mpu;
  // About 45% float on the surface; the rest hang below it at various depths (bobbing slowly),
  // never deeper than most of the water.
  let here = water_here(q.x, q.y);
  if (here.x < -1e8) { return out; }
  let sub = hash(q.w * 2.9);
  var depth = 0.0;  // metres below the surface
  if (sub > 0.45) {
    let reach = min(0.6, 0.85 * here.y);
    depth = clamp(pow((sub - 0.45) / 0.55, 1.5) * reach + 0.01 * sin(d.time * 0.6 + q.w), 0.0, reach);
  }
  out.pos = quad(q, size, q.z, vi, 0.004, depth, here);
  out.uv = corner(vi);
  out.kind = kind;
  out.seed = q.w;
  out.fade = d.opacity * exp(-d.sigma * depth) * life_fade(s);
  return out;
}

@fragment
fn fs(in: VOut) -> @location(0) vec4f {
  let p = in.uv;
  var col = vec3f(0.0);
  var a = 0.0;
  switch in.kind {
    case 0u: {  // dark speck
      a = (1.0 - smoothstep(0.5, 1.0, length(p))) * 0.9;
      col = vec3f(0.06, 0.05, 0.04);
    }
    case 1u: {  // grit or a fibre: a thin dark sliver
      a = (1.0 - smoothstep(0.6, 1.0, abs(p.y))) * (1.0 - smoothstep(0.8, 1.0, abs(p.x))) * 0.55;
      col = vec3f(0.10, 0.08, 0.06);
    }
    case 2u: {  // bubble: a bright rim, clear in the middle
      let r = length(p);
      a = (smoothstep(0.55, 0.8, r) * (1.0 - smoothstep(0.85, 1.0, r))) * 0.35 + (1.0 - smoothstep(0.0, 0.35, length(p - vec2f(-0.3, -0.3)))) * 0.25;
      col = vec3f(0.85, 0.87, 0.86);
    }
    case 3u: {  // mud speck
      let wob = 0.2 * sin(atan2(p.y, p.x) * 3.0 + in.seed * 7.0);
      a = (1.0 - smoothstep(0.6, 1.0, length(p) + wob)) * 0.6;
      col = vec3f(0.17, 0.13, 0.09);
    }
    default: {  // a small fragment of leaf
      a = (1.0 - smoothstep(0.75, 1.0, p.x * p.x + p.y * p.y)) * 0.65;
      col = mix(vec3f(0.14, 0.15, 0.06), vec3f(0.22, 0.16, 0.08), hash(in.seed * 2.2));
    }
  }
  a *= in.fade;
  if (a < 0.01) { discard; }
  return vec4f(col * a, a);  // premultiplied
}

@vertex
fn vs_foam(@builtin(vertex_index) vi: u32, @builtin(instance_index) ii: u32) -> VOut {
  var out: VOut;
  out.pos = vec4f(0.0, 0.0, 2.0, 1.0);
  let q = particles[2u * ii];
  let s = particles[2u * ii + 1u];
  if (hash(q.w * 0.613) > d.foam_amount) { return out; }
  if (!wet(q.x, q.y)) { return out; }
  let here = water_here(q.x, q.y);
  if (here.x < -1e8) { return out; }
  // A soft patch (3.5 to 10 cm across its half width), smeared along the way it moves.
  let speed_m = length(s.zw) * d.mpu;
  let stretch = 1.0 + min(2.5, speed_m * 5.0);
  let half_m = 0.035 + 0.065 * hash(q.w * 4.4);
  let size = vec2f(half_m * stretch, half_m) / d.mpu;
  out.pos = quad(q, size, q.z, vi, 0.002, 0.0, here);
  out.uv = corner(vi);
  out.seed = q.w;
  out.stretch = stretch;
  out.fade = d.foam_opacity * life_fade(s) * (0.6 + 0.4 * smoothstep(0.0, 0.3, speed_m));
  return out;
}

@fragment
fn fs_foam(in: VOut) -> @location(0) vec4f {
  let p = in.uv;
  let o = vec2f(hash(in.seed * 1.7), hash(in.seed * 2.9)) * 40.0;
  // A ragged blob, streaky along its length, with holes: smeared scum, not a disc.
  let edge = length(p) + 0.45 * (vnoise(p * 2.2 + o) - 0.5);
  var a = 1.0 - smoothstep(0.35, 1.0, edge);
  a *= 0.45 + 0.55 * vnoise(vec2f(p.x * 1.3, p.y * 4.5 * in.stretch) + o * 1.3);
  a *= smoothstep(0.15, 0.55, vnoise(p * 3.1 + o * 0.7));
  a *= 0.32 * in.fade;
  if (a < 0.005) { discard; }
  return vec4f(d.foam_color * a, a);
}
`,we=class{device;particles;foam;uniforms;advectPipe;foamAdvectPipe;drawPipe;foamDrawPipe;advectBind;foamAdvectBind;drawBind;foamDrawBind;constructor(e,t){this.device=e;let n=t=>{let n=new Float32Array(t*8);for(let e=0;e<t;e++)n[e*8]=-1e9,n[e*8+2]=Math.random()*Math.PI*2,n[e*8+3]=e+.5;let r=e.createBuffer({size:n.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return e.queue.writeBuffer(r,0,n),r};this.particles=n(ye),this.foam=n(be),this.uniforms=e.createBuffer({size:xe,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let r=e.createShaderModule({code:Se});this.advectPipe=e.createComputePipeline({layout:`auto`,compute:{module:r,entryPoint:`advect`}}),this.foamAdvectPipe=e.createComputePipeline({layout:`auto`,compute:{module:r,entryPoint:`advect_foam`}});let i={color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`}},a=e.createShaderModule({code:Ce}),o=(t,n)=>e.createRenderPipeline({layout:`auto`,vertex:{module:a,entryPoint:t},fragment:{module:a,entryPoint:n,targets:[{format:`rgba8unorm`,blend:i}]},primitive:{topology:`triangle-strip`}});this.drawPipe=o(`vs`,`fs`),this.foamDrawPipe=o(`vs_foam`,`fs_foam`);let s=(n,r)=>e.createBindGroup({layout:n.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniforms}},{binding:1,resource:{buffer:t.state}},{binding:2,resource:{buffer:t.vel}},{binding:3,resource:{buffer:r}}]});this.advectBind=s(this.advectPipe,this.particles),this.foamAdvectBind=s(this.foamAdvectPipe,this.foam);let c=(n,r)=>e.createBindGroup({layout:n.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniforms}},{binding:1,resource:{buffer:t.state}},{binding:2,resource:{buffer:r}}]});this.drawBind=c(this.drawPipe,this.particles),this.foamDrawBind=c(this.foamDrawPipe,this.foam)}render(e,t,n){let r=new ArrayBuffer(xe),i=new Float32Array(r);i.set(n.viewProj,0),i.set([...n.normal,n.ground,...n.tangent,n.u0,...n.bitangent,n.v0],16),i.set([n.cell,n.mpu,n.dt,n.time],28),new Uint32Array(r,128,2).set([n.nu,n.nv]),i.set([n.amount,n.sigma,...n.wind,n.opacity],34),i.set([...n.foamColor,n.foamAmount,n.foamOpacity],40),this.device.queue.writeBuffer(this.uniforms,0,r);let a=e.beginComputePass();a.setPipeline(this.advectPipe),a.setBindGroup(0,this.advectBind),a.dispatchWorkgroups(Math.ceil(ye/64)),n.foamAmount>0&&(a.setPipeline(this.foamAdvectPipe),a.setBindGroup(0,this.foamAdvectBind),a.dispatchWorkgroups(Math.ceil(be/64))),a.end();let o=e.beginRenderPass({colorAttachments:[{view:t.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}]});n.foamAmount>0&&n.foamOpacity>0&&(o.setPipeline(this.foamDrawPipe),o.setBindGroup(0,this.foamDrawBind),o.draw(4,be)),o.setPipeline(this.drawPipe),o.setBindGroup(0,this.drawBind),o.draw(4,ye),o.end()}destroy(){this.particles.destroy(),this.foam.destroy(),this.uniforms.destroy()}},Te=9.81,Ee=5,De=.25,Oe=.005,ke=.03,Ae=160,je=48,Me=7,Ne=2,Pe=`
struct P {
  nu: u32, nv: u32, cell: f32, dt: f32,
  level: f32, damping: f32, dry: f32, mpu: f32,   // level, dry: metres; dry per frame
                                                  // damping: exp(-friction dt) per step
  g: f32, wet_m: f32, max_speed: f32, prev_level: f32,  // level at the previous frame
};
@group(0) @binding(0) var<uniform> p: P;
@group(0) @binding(1) var<storage, read> terrain: array<f32>;  // metres
@group(0) @binding(2) var<storage, read> source: array<f32>;
@group(0) @binding(3) var<storage, read_write> depth: array<f32>;
@group(0) @binding(4) var<storage, read_write> flux: array<vec4f>;   // out to -u, +u, -v, +v
@group(0) @binding(5) var<storage, read_write> state: array<vec4f>;
@group(0) @binding(6) var<storage, read_write> vel: array<vec2f>;
@group(0) @binding(7) var<storage, read_write> sea: array<f32>;  // 1 = open sea
@group(0) @binding(8) var<storage, read_write> scratch: array<f32>;  // blur pass in between

fn at(i: i32, j: i32) -> u32 { return u32(j) * p.nu + u32(i); }

@compute @workgroup_size(8, 8)
fn flux_step(@builtin(global_invocation_id) id: vec3u) {
  if (id.x >= p.nu || id.y >= p.nv) { return; }
  let i = i32(id.x); let j = i32(id.y); let k = at(i, j);
  let d = depth[k];
  let h = terrain[k] + d;
  let c = p.dt * p.g * p.cell;
  var f = flux[k] * p.damping;
  let nu = i32(p.nu); let nv = i32(p.nv);
  if (i > 0) { f.x = max(0.0, f.x + c * (h - terrain[at(i - 1, j)] - depth[at(i - 1, j)])); } else { f.x = 0.0; }
  if (i < nu - 1) { f.y = max(0.0, f.y + c * (h - terrain[at(i + 1, j)] - depth[at(i + 1, j)])); } else { f.y = 0.0; }
  if (j > 0) { f.z = max(0.0, f.z + c * (h - terrain[at(i, j - 1)] - depth[at(i, j - 1)])); } else { f.z = 0.0; }
  if (j < nv - 1) { f.w = max(0.0, f.w + c * (h - terrain[at(i, j + 1)] - depth[at(i, j + 1)])); } else { f.w = 0.0; }
  f = min(f, vec4f(p.max_speed * p.cell * d));  // no faster than a fast flood current
  let out = f.x + f.y + f.z + f.w;
  // (Guarded: vanishing amounts of water underflow to 0/0 otherwise.)
  if (out > 1e-9) { f *= min(1.0, d * p.cell * p.cell / max(out * p.dt, 1e-20)); } else { f = vec4f(0.0); }
  flux[k] = f;
}

@compute @workgroup_size(8, 8)
fn depth_step(@builtin(global_invocation_id) id: vec3u) {
  if (id.x >= p.nu || id.y >= p.nv) { return; }
  let i = i32(id.x); let j = i32(id.y); let k = at(i, j);
  let nu = i32(p.nu); let nv = i32(p.nv);
  var inflow = 0.0;
  if (i > 0) { inflow += flux[at(i - 1, j)].y; }
  if (i < nu - 1) { inflow += flux[at(i + 1, j)].x; }
  if (j > 0) { inflow += flux[at(i, j - 1)].w; }
  if (j < nv - 1) { inflow += flux[at(i, j + 1)].z; }
  let f = flux[k];
  let before = depth[k];
  var d = max(0.0, before + p.dt * (inflow - (f.x + f.y + f.z + f.w)) / (p.cell * p.cell));
  if (d < 1e-9) { d = 0.0; }
  // Open sea: joins when the level rises past standing water; held at the level.
  let surface = terrain[k] + before;
  let rising = p.level > p.prev_level;
  let at_sea = before > p.wet_m && (abs(surface - p.prev_level) < 0.01 || abs(surface - p.level) < 0.01);
  let is_sea = source[k] > 0.5 || sea[k] > 0.5 || (rising && at_sea);
  if (is_sea) { d = max(0.0, p.level - terrain[k]); }
  sea[k] = select(0.0, 1.0, source[k] > 0.5 || (is_sea && d > p.wet_m));
  depth[k] = d;
}

@compute @workgroup_size(8, 8)
fn finish(@builtin(global_invocation_id) id: vec3u) {
  if (id.x >= p.nu || id.y >= p.nv) { return; }
  let i = i32(id.x); let j = i32(id.y); let k = at(i, j);
  let nu = i32(p.nu); let nv = i32(p.nv);
  let d = depth[k];
  let wet = d > p.wet_m;
  let surface = select(-1e9, (terrain[k] + d) / p.mpu, wet);
  let old = state[k].z;
  let line = max(old - p.dry / p.mpu, surface);
  state[k] = vec4f(surface, d, line, 0.0);
  // Velocity: net flux through the cell's faces over the water's cross-section.
  let f = flux[k];
  var vu = f.y - f.x;
  var vv = f.w - f.z;
  if (i > 0) { vu += flux[at(i - 1, j)].y; }
  if (i < nu - 1) { vu -= flux[at(i + 1, j)].x; }
  if (j > 0) { vv += flux[at(i, j - 1)].w; }
  if (j < nv - 1) { vv -= flux[at(i, j + 1)].z; }
  vel[k] = vec2f(vu, vv) / (2.0 * p.cell * max(d, 0.05));
}

// The object marker (state.w), smoothed over a few cells for the wakes: a 5-tap binomial blur,
// across then along (scratch holds the halfway result), so wakes follow outlines, not cells.
fn blur_tap(k: i32) -> f32 {
  var w = array<f32, 5>(1.0, 4.0, 6.0, 4.0, 1.0);
  return w[k + 2] / 16.0;
}

@compute @workgroup_size(8, 8)
fn blur_u(@builtin(global_invocation_id) id: vec3u) {
  if (id.x >= p.nu || id.y >= p.nv) { return; }
  let i = i32(id.x); let j = i32(id.y);
  var acc = 0.0;
  for (var t = -2; t <= 2; t++) { acc += blur_tap(t) * state[at(clamp(i + t, 0, i32(p.nu) - 1), j)].w; }
  scratch[at(i, j)] = acc;
}

@compute @workgroup_size(8, 8)
fn blur_v(@builtin(global_invocation_id) id: vec3u) {
  if (id.x >= p.nu || id.y >= p.nv) { return; }
  let i = i32(id.x); let j = i32(id.y);
  var acc = 0.0;
  for (var t = -2; t <= 2; t++) { acc += blur_tap(t) * scratch[at(i, clamp(j + t, 0, i32(p.nv) - 1))]; }
  state[at(i, j)].w = acc;
}

@compute @workgroup_size(8, 8)
fn spread(@builtin(global_invocation_id) id: vec3u) {
  if (id.x >= p.nu || id.y >= p.nv) { return; }
  let i = i32(id.x); let j = i32(id.y); let k = at(i, j);
  let here = state[k];
  if (here.y > p.wet_m) { return; }  // real water
  let nu = i32(p.nu); let nv = i32(p.nv);
  var best = -1e9;
  for (var dj = -1; dj <= 1; dj++) {
    for (var di = -1; di <= 1; di++) {
      let ii = i + di; let jj = j + dj;
      if (ii < 0 || jj < 0 || ii >= nu || jj >= nv) { continue; }
      best = max(best, state[at(ii, jj)].x);
    }
  }
  // Only into solid that stands above the water (an object in it), never into low ground.
  if (best > -1e8 && terrain[k] / p.mpu >= best - 0.02 / p.mpu && best > here.x) {
    // Wakes only around things standing well out of it (not bumps the water barely misses).
    let object = select(0.0, 1.0, terrain[k] - best * p.mpu > 0.1);
    state[k] = vec4f(best, 0.0, max(here.z, best), object);
  }
}
`,Fe=class{device;mpu;state;vel;nu;nv;terrain;source;depth;flux;sea;params;bind;fluxPipe;depthPipe;finishPipe;spreadPipe;blurUPipe;blurVPipe;scratch;terrainM;heights;sourceMask;cellM;settledAt=NaN;fresh=!0;prevLevel=NaN;constructor(e,t,n){if(this.device=e,this.mpu=n,!t.terrain||!t.sources)throw Error(`flood map without terrain`);this.nu=t.nu,this.nv=t.nv;let r=t.nu*t.nv;this.cellM=t.cell*n,this.terrainM=t.terrain.map(e=>e*n),this.heights=t.heights,this.sourceMask=t.sources;let i=(t,n)=>{let r=e.createBuffer({size:Math.max(16,t),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});return n&&e.queue.writeBuffer(r,0,n),r};this.terrain=i(r*4,this.terrainM),this.source=i(r*4,Float32Array.from(t.sources)),this.depth=i(r*4),this.flux=i(r*16),this.state=i(r*16,Ie(r)),this.vel=i(r*8),this.sea=i(r*4,Float32Array.from(t.sources)),this.scratch=i(r*4),this.params=e.createBuffer({size:je,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let a=e.createShaderModule({code:Pe}),o=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:`uniform`}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:`read-only-storage`}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:`read-only-storage`}},...[3,4,5,6,7,8].map(e=>({binding:e,visibility:GPUShaderStage.COMPUTE,buffer:{type:`storage`}}))]}),s=e.createPipelineLayout({bindGroupLayouts:[o]}),c=t=>e.createComputePipeline({layout:s,compute:{module:a,entryPoint:t}});this.fluxPipe=c(`flux_step`),this.depthPipe=c(`depth_step`),this.finishPipe=c(`finish`),this.spreadPipe=c(`spread`),this.blurUPipe=c(`blur_u`),this.blurVPipe=c(`blur_v`),this.bind=e.createBindGroup({layout:o,entries:[this.params,this.terrain,this.source,this.depth,this.flux,this.state,this.vel,this.sea,this.scratch].map((e,t)=>({binding:t,resource:{buffer:e}}))})}step(e,t,n,r){let i=0,a=0;if(!r||this.fresh)n!==this.settledAt&&this.settle(n),this.fresh=!1;else{this.settledAt=NaN;let e=Math.max(n,.05)+.5,r=De*this.cellM/Math.sqrt(Te*e);i=Math.min(Ae,Math.ceil(t/r)),a=i?Math.min(r,t/i):0}let o=new ArrayBuffer(je);new Uint32Array(o,0,2).set([this.nu,this.nv]),new Float32Array(o,8,10).set([this.cellM,a,n,Math.exp(-2*a),ke*t,this.mpu,Te,Oe,Ee,Number.isNaN(this.prevLevel)?n:this.prevLevel]),this.prevLevel=n,this.device.queue.writeBuffer(this.params,0,o);let s=e.beginComputePass();s.setBindGroup(0,this.bind);let c=Math.ceil(this.nu/8),l=Math.ceil(this.nv/8);for(let e=0;e<i;e++)s.setPipeline(this.fluxPipe),s.dispatchWorkgroups(c,l),s.setPipeline(this.depthPipe),s.dispatchWorkgroups(c,l);s.setPipeline(this.finishPipe),s.dispatchWorkgroups(c,l),s.setPipeline(this.spreadPipe);for(let e=0;e<Me;e++)s.dispatchWorkgroups(c,l);for(let e=0;e<Ne;e++)s.setPipeline(this.blurUPipe),s.dispatchWorkgroups(c,l),s.setPipeline(this.blurVPipe),s.dispatchWorkgroups(c,l);s.end()}settle(e){let t=this.nu*this.nv,n=new Float32Array(t),r=e/this.mpu,i=new Float32Array(t);for(let a=0;a<t;a++)this.heights[a]<=r&&(n[a]=Math.max(0,e-this.terrainM[a])),i[a]=n[a]>.005||this.sourceMask[a]?1:0;this.device.queue.writeBuffer(this.depth,0,n),this.device.queue.writeBuffer(this.sea,0,i),this.prevLevel=e,this.device.queue.writeBuffer(this.flux,0,new Float32Array(t*4)),this.settledAt=e}reset(){let e=this.nu*this.nv;this.device.queue.writeBuffer(this.depth,0,new Float32Array(e)),this.device.queue.writeBuffer(this.flux,0,new Float32Array(e*4)),this.device.queue.writeBuffer(this.state,0,Ie(e)),this.device.queue.writeBuffer(this.sea,0,Float32Array.from(this.sourceMask)),this.settledAt=NaN}destroy(){for(let e of[this.terrain,this.source,this.depth,this.flux,this.state,this.vel,this.sea,this.scratch,this.params])e.destroy()}};function Ie(e){let t=new Float32Array(e*4);for(let n=0;n<e;n++)t[n*4]=-1e9,t[n*4+2]=-1e9;return t}var Le=7e3,Re=6e4,ze=24,Be={heading:0,slant:0,depth:ze,opacity:.5};function Ve(e,t){return Math.floor(Math.min(Re,Le*e*(t/ze)**2))}var He=112,Ue=`
struct R {
  view_proj: mat4x4f,
  eye: vec3f, time: f32,
  fall: vec3f, length: f32,    // velocity (units/s), streak length (units)
  box: f32, opacity: f32, count: f32, _a: f32,
};
@group(0) @binding(0) var<uniform> r: R;

fn hash(x: f32) -> f32 { return fract(sin(x * 127.1 + 311.7) * 43758.5453); }

struct VOut { @builtin(position) pos: vec4f, @location(0) alpha: f32 };

@vertex
fn vs(@builtin(vertex_index) vi: u32, @builtin(instance_index) ii: u32) -> VOut {
  var out: VOut;
  out.pos = vec4f(0.0, 0.0, 2.0, 1.0);
  out.alpha = 0.0;
  let f = f32(ii);
  if (f >= r.count) { return out; }
  let seed = vec3f(hash(f * 1.31), hash(f * 2.77 + 4.0), hash(f * 3.91 + 9.0));
  let speed = 0.8 + 0.4 * hash(f * 5.3);
  // A fixed pattern falling through the world, wrapped into a box around the eye.
  let fallen = seed * r.box + r.fall * speed * r.time;
  let rel = fract((fallen - r.eye) / r.box) * r.box - 0.5 * r.box;
  var p = r.eye + rel;
  if (vi == 1u) { p += normalize(r.fall) * r.length * speed; }
  out.pos = r.view_proj * vec4f(p, 1.0);
  out.alpha = 0.44 * r.opacity * (1.0 - smoothstep(0.2 * r.box, 0.5 * r.box, length(rel)));
  return out;
}

@fragment
fn fs(in: VOut) -> @location(0) vec4f {
  return vec4f(vec3f(0.78, 0.80, 0.84) * in.alpha, in.alpha);
}
`;function We(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Ge(e){let t=Math.hypot(e[0],e[1],e[2])||1;return e.map(e=>e/t)}var Ke=class{device;uniforms;pipeline;bind;constructor(e,t){this.device=e,this.uniforms=e.createBuffer({size:He,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let n=e.createShaderModule({code:Ue});this.pipeline=e.createRenderPipeline({layout:`auto`,vertex:{module:n,entryPoint:`vs`},fragment:{module:n,entryPoint:`fs`,targets:[{format:t,blend:{color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`}}}]},primitive:{topology:`line-list`}}),this.bind=e.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniforms}}]})}draw(e,t){let n=7/t.mpu,r=t.up,i=Ge(We(Math.abs(r[0])<.9?[1,0,0]:[0,1,0],r)),a=We(r,i),o=t.look.heading*Math.PI/180,s=t.look.slant*Math.PI/180,c=[0,1,2].map(e=>(-r[e]*Math.cos(s)+(i[e]*Math.cos(o)+a[e]*Math.sin(o))*Math.sin(s))*n),l=Ve(t.amount,t.look.depth),u=new Float32Array(He/4);u.set(t.viewProj,0),u.set([...t.eye,t.time],16),u.set([...c,.35/t.mpu],20),u.set([t.look.depth/t.mpu,t.look.opacity,l,0],24),this.device.queue.writeBuffer(this.uniforms,0,u),e.setPipeline(this.pipeline),e.setBindGroup(0,this.bind),e.draw(2,l)}destroy(){this.uniforms.destroy()}},qe=`
// c: centre xyz, radius; ax/ay/az: the dome axes in world space; k: brightness, on, mask
// water, flags (1: nothing around the dome seen from outside, 2: the flat cut); cut: plane.
// Alpha 0: the dome shows nothing there (the caller's fallback does).
fn dome_color(o: vec3f, d: vec3f, c: vec4f, ax: vec4f, ay: vec4f, az: vec4f, k: vec4f,
              cut: vec4f, tex: texture_2d<f32>, smp: sampler) -> vec4f {
  let oc = o - c.xyz;
  let b = dot(oc, d);
  let cc = dot(oc, oc) - c.w * c.w;
  let disc = b * b - cc;
  var p = d;  // outside the sphere: at infinity
  var on_sphere = false;
  if (disc > 0.0) {
    let t = -b + sqrt(disc);
    if (t > 0.0) { p = oc + d * t; on_sphere = true; }
  }
  let flags = u32(k.w + 0.5);
  if ((flags & 1u) != 0u && !on_sphere && cc > 0.0) { return vec4f(0.0); }
  if ((flags & 2u) != 0u && on_sphere && dot(cut.xyz, c.xyz + p) < cut.w) { return vec4f(0.0); }
  let l = vec3f(dot(p, ax.xyz), dot(p, ay.xyz), dot(p, az.xyz));
  let lon = atan2(l.y, l.x);
  let lat = atan2(l.z, length(l.xy));
  let uv = vec2f(0.5 - lon / 6.28318530718, 0.5 - lat / 3.14159265359);
  return vec4f(textureSampleLevel(tex, smp, uv, 0.0).rgb * k.x, 1.0);
}
`,Je=176,Ye=`
struct S {
  inv_view_proj: mat4x4f,
  eye: vec4f,
  c: vec4f, ax: vec4f, ay: vec4f, az: vec4f, k: vec4f, cut: vec4f,
};
@group(0) @binding(0) var<uniform> s: S;
@group(0) @binding(1) var tex: texture_2d<f32>;
@group(0) @binding(2) var smp: sampler;
${qe}

struct VOut { @builtin(position) pos: vec4f, @location(0) ndc: vec2f };

@vertex
fn vs(@builtin(vertex_index) i: u32) -> VOut {
  let p = vec2f(f32((i << 1u) & 2u), f32(i & 2u)) * 2.0 - 1.0;
  var out: VOut;
  out.pos = vec4f(p, 0.0, 1.0);
  out.ndc = p;
  return out;
}

@fragment
fn fs(in: VOut) -> @location(0) vec4f {
  let wp = s.inv_view_proj * vec4f(in.ndc, 0.5, 1.0);
  let d = normalize(wp.xyz / wp.w - s.eye.xyz);
  let col = dome_color(s.eye.xyz, d, s.c, s.ax, s.ay, s.az, s.k, s.cut, tex, smp);
  if (col.a < 0.5) { discard; }  // the plain background (the pass's clear colour)
  return vec4f(col.rgb, 1.0);
}
`,Xe=class{device;onChange;texture;sampler;uniforms;pipeline;bind=null;dome=null;loadedUrl=null;loading=0;constructor(e,t,n){this.device=e,this.onChange=n,this.texture=e.createTexture({size:[1,1],format:`rgba8unorm`,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),this.sampler=e.createSampler({magFilter:`linear`,minFilter:`linear`,addressModeU:`repeat`,addressModeV:`clamp-to-edge`}),this.uniforms=e.createBuffer({size:Je,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let r=e.createShaderModule({code:Ye});this.pipeline=e.createRenderPipeline({layout:`auto`,vertex:{module:r,entryPoint:`vs`},fragment:{module:r,entryPoint:`fs`,targets:[{format:t}]},primitive:{topology:`triangle-list`}})}get ready(){return!!this.dome&&this.loadedUrl===this.dome.url}set(e){if(this.dome=e,!e||e.url===this.loadedUrl){this.onChange();return}let t=++this.loading;(async()=>{try{let n=await(await fetch(e.url)).blob(),r=await createImageBitmap(n,{colorSpaceConversion:`none`});if(t!==this.loading)return;let i=this.device.createTexture({size:[r.width,r.height],format:`rgba8unorm`,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});this.device.queue.copyExternalImageToTexture({source:r},{texture:i},[r.width,r.height]),r.close(),this.texture.destroy(),this.texture=i,this.loadedUrl=e.url,this.bind=null,this.onChange()}catch(e){console.error(`sky image`,e)}})()}params(){let e=this.dome;if(!e||!this.ready)return Array(24).fill(0);let t=+!!e.hideOutside+(e.cut?2:0);return[...e.center,e.radius,...e.axes[0],0,...e.axes[1],0,...e.axes[2],0,e.brightness,1,+!!e.maskWater,t,...e.cut??[0,0,0,0]]}holdsWaterOutside(e){let t=this.dome;return!t||!this.ready||!t.maskWater?!1:Math.hypot(e[0]-t.center[0],e[1]-t.center[1],e[2]-t.center[2])>t.radius}draw(e,t,n){if(!this.ready)return;let r=new Float32Array(Je/4);r.set(t,0),r.set([...n,1],16),r.set(this.params(),20),this.device.queue.writeBuffer(this.uniforms,0,r),this.bind??=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniforms}},{binding:1,resource:this.texture.createView()},{binding:2,resource:this.sampler}]}),e.setPipeline(this.pipeline),e.setBindGroup(0,this.bind),e.draw(3)}destroy(){this.texture.destroy(),this.uniforms.destroy()}},Ze=4294967295,Qe=1024,$e=16,et={point:0,spot:1,area:2,sun:3},tt=24,nt=1856,rt=120*Math.PI/180,it=160,at=1e30,ot=`
struct C {
  view: mat4x4f,
  proj: mat4x4f,
  res: f32, focal: f32, ortho: f32, near: f32,
  count: u32, use_mask: u32, _a: u32, _b: u32,
};
@group(0) @binding(0) var<uniform> c: C;
@group(0) @binding(1) var<storage, read> splats: array<u32>;
@group(0) @binding(2) var<storage, read> mask: array<u32>;

struct VOut {
  @builtin(position) pos: vec4f,
  @location(0) uv: vec2f,
  @location(1) depth: f32,
  @location(2) alpha: f32,
};

fn culled() -> VOut {
  var out: VOut;
  out.pos = vec4f(0.0, 0.0, 2.0, 1.0);
  return out;
}

@vertex
fn vs(@builtin(vertex_index) vi: u32, @builtin(instance_index) ii: u32) -> VOut {
  if (ii >= c.count) { return culled(); }
  if (c.use_mask != 0u && ((mask[ii >> 2u] >> ((ii & 3u) * 8u)) & 255u) == 0u) { return culled(); }
  let base = ii * 8u;
  let p = vec3f(bitcast<f32>(splats[base]), bitcast<f32>(splats[base + 1u]), bitcast<f32>(splats[base + 2u]));
  let s = vec3f(bitcast<f32>(splats[base + 3u]), bitcast<f32>(splats[base + 4u]), bitcast<f32>(splats[base + 5u]));
  let q = normalize(unpack4x8snorm(splats[base + 6u]));
  let alpha = unpack4x8unorm(splats[base + 7u]).a;
  if (alpha < 0.35) { return culled(); }
  let cam = c.view * vec4f(p, 1.0);
  let tz = -cam.z;
  if (tz < c.near) { return culled(); }
  let clip = c.proj * cam;
  let w = q.x; let x = q.y; let y = q.z; let z = q.w;
  let r = mat3x3f(
    vec3f(1.0 - 2.0 * (y * y + z * z), 2.0 * (x * y + w * z), 2.0 * (x * z - w * y)),
    vec3f(2.0 * (x * y - w * z), 1.0 - 2.0 * (x * x + z * z), 2.0 * (y * z + w * x)),
    vec3f(2.0 * (x * z + w * y), 2.0 * (y * z - w * x), 1.0 - 2.0 * (x * x + y * y)),
  );
  let m = mat3x3f(r[0] * s.x, r[1] * s.y, r[2] * s.z);
  let sigma = m * transpose(m);
  var j = mat3x3f(vec3f(c.focal, 0.0, 0.0), vec3f(0.0, c.focal, 0.0), vec3f(0.0));
  if (c.ortho < 0.5) {
    j = mat3x3f(
      vec3f(c.focal / tz, 0.0, 0.0),
      vec3f(0.0, c.focal / tz, 0.0),
      vec3f(c.focal * cam.x / (tz * tz), c.focal * cam.y / (tz * tz), 0.0),
    );
  }
  let t = j * mat3x3f(c.view[0].xyz, c.view[1].xyz, c.view[2].xyz);
  let cov = t * sigma * transpose(t);
  let a = cov[0][0] + 0.3;
  let b = cov[0][1];
  let cc = cov[1][1] + 0.3;
  let mid = 0.5 * (a + cc);
  let radius = length(vec2f(0.5 * (a - cc), b));
  let l1 = mid + radius;
  let l2 = max(mid - radius, 0.1);
  var v1 = vec2f(1.0, 0.0);
  if (abs(b) > 1e-9) { v1 = normalize(vec2f(b, l1 - a)); } else if (cc > a) { v1 = vec2f(0.0, 1.0); }
  let v2 = vec2f(-v1.y, v1.x);
  let major = min(sqrt(l1), 256.0);
  let minor = min(sqrt(l2), 256.0);
  var corners = array<vec2f, 4>(vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0), vec2f(1.0, 1.0));
  let uv = corners[vi] * 2.0;
  let offset = uv.x * major * v1 + uv.y * minor * v2;
  var out: VOut;
  out.pos = clip + vec4f(offset * 2.0 / c.res * clip.w, 0.0, 0.0);
  out.uv = uv;
  out.depth = tz;
  out.alpha = alpha;
  return out;
}

@fragment
fn fs(in: VOut) -> @location(0) vec4f {
  // Solid where the splat is mostly opaque: only that blocks light.
  if (in.alpha * exp(-0.5 * dot(in.uv, in.uv)) < 0.3) { discard; }
  return vec4f(in.depth, 0.0, 0.0, 1.0);
}
`,st=`
struct L {
  pos: vec4f,     // xyz, kind (0 point, 1 spot, 2 area, 3 sun)
  dir: vec4f,     // where it shines, range (units; 0 none)
  color: vec4f,   // rgb x intensity, falloff exponent
  cone: vec4f,    // cos outer, cos inner, size (units; sun: tan of half its angle), first shadow layer (-1: none)
  shadow: vec4f,  // texels per unit at depth 1 (perspective) or flat (ortho), ortho, map res, 0
  eye: vec4f,     // sun: the shadow camera's position
};
struct P {
  globals: vec4f,  // exposure, captured, lights, metres per unit
  sky: vec4f,      // rgb x intensity, on
  ground: vec4f,
  up: vec4f,
  lights: array<L, 8>,
  mats: array<mat4x4f, ${$e}>,
};
const POISSON = array<vec2f, 12>(
  vec2f(-0.326, -0.406), vec2f(-0.840, -0.074), vec2f(-0.696, 0.457), vec2f(-0.203, 0.621),
  vec2f(0.962, -0.195), vec2f(0.473, -0.480), vec2f(0.519, 0.767), vec2f(0.185, -0.893),
  vec2f(0.507, 0.064), vec2f(0.896, 0.412), vec2f(-0.322, -0.933), vec2f(-0.792, -0.598),
);

fn map_at(layer: i32, texel: vec2f, res: f32) -> f32 {
  let t = vec2i(clamp(texel, vec2f(0.0), vec2f(res - 1.0)));
  return textureLoad(shadow_maps, t, layer, 0).r;
}

// How much of light l reaches point p (0..1), with soft PCSS edges. size_r: the splat's size.
fn visibility(l: L, layer: i32, p: vec3f, size_r: f32) -> f32 {
  let clip = pp.mats[layer] * vec4f(p, 1.0);
  if (clip.w <= 0.0) { return 1.0; }
  let ndc = clip.xyz / clip.w;
  if (abs(ndc.x) > 1.0 || abs(ndc.y) > 1.0) { return 1.0; }
  let res = l.shadow.z;
  let texel = vec2f(ndc.x * 0.5 + 0.5, 0.5 - ndc.y * 0.5) * res;
  let ortho = l.shadow.y > 0.5;
  let d_r = select(clip.w, dot(p - l.eye.xyz, l.dir.xyz), ortho);
  let tpu = select(l.shadow.x / max(d_r, 1e-6), l.shadow.x, ortho);  // texels per unit here
  let bias = 0.01 * d_r + 1.5 * size_r;
  // Blocker search over the light's footprint.
  let search = clamp(select(l.cone.z, l.cone.z * d_r, ortho) * tpu, 1.0, 16.0);
  var taps = POISSON;
  var sum = 0.0;
  var n = 0.0;
  for (var i = 0; i < 12; i++) {
    let d = map_at(layer, texel + taps[i] * search, res);
    if (d < d_r - bias) { sum += d; n += 1.0; }
  }
  if (n < 0.5) { return 1.0; }
  let d_b = sum / n;
  let penumbra = select(l.cone.z * (d_r - d_b) / max(d_b, 1e-6), (d_r - d_b) * l.cone.z, ortho);
  let radius = clamp(penumbra * tpu, 0.75, 24.0);
  var lit_n = 0.0;
  for (var i = 0; i < 12; i++) {
    if (map_at(layer, texel + taps[i] * radius, res) >= d_r - bias) { lit_n += 1.0; }
  }
  return lit_n / 12.0;
}

// Unit direction from p toward light l (xyz) and how strongly it reaches p (w): intensity,
// distance falloff, range, spot cone, area facing; no shadows (as render/lighting.py _reach).
fn light_reach(l: L, p: vec3f) -> vec4f {
  let kind = i32(l.pos.w + 0.5);
  if (kind == 3) { return vec4f(-l.dir.xyz, 1.0); }
  let v = l.pos.xyz - p;
  let dist = length(v);
  let to_l = v / max(dist, 1e-9);
  var atten = pow(max(dist * pp.globals.w, 0.05), -l.color.w);
  if (l.dir.w > 0.0) {
    let t = clamp(1.0 - pow(dist / l.dir.w, 4.0), 0.0, 1.0);
    atten *= t * t;
  }
  let facing = dot(-to_l, l.dir.xyz);
  if (kind == 1) { atten *= smoothstep(l.cone.x, max(l.cone.y, l.cone.x + 1e-4), facing); }
  if (kind == 2) { atten *= max(facing, 0.0); }
  return vec4f(to_l, atten);
}

// The shadow map layer light l keeps for point p (-1: no shadows): a point light's cube face.
fn shadow_layer(l: L, p: vec3f) -> i32 {
  let first = i32(l.cone.w);
  if (first < 0 || i32(l.pos.w + 0.5) != 0) { return first; }
  let a = p - l.pos.xyz;
  let m = abs(a);
  if (m.x >= m.y && m.x >= m.z) { return first + select(1, 0, a.x > 0.0); }
  if (m.y >= m.z) { return first + select(3, 2, a.y > 0.0); }
  return first + select(5, 4, a.z > 0.0);
}
`,ct=`
${st}
@group(0) @binding(0) var<uniform> pp: P;
@group(0) @binding(1) var<storage, read> splats: array<u32>;
@group(0) @binding(2) var<storage, read_write> lit: array<vec2<u32>>;  // before smoothing
@group(0) @binding(3) var shadow_maps: texture_2d_array<f32>;

@compute @workgroup_size(64)
fn relight(@builtin(global_invocation_id) id: vec3u) {
  let i = id.x;
  if (i >= arrayLength(&lit)) { return; }
  let base = i * 8u;
  let p = vec3f(bitcast<f32>(splats[base]), bitcast<f32>(splats[base + 1u]), bitcast<f32>(splats[base + 2u]));
  let s = vec3f(bitcast<f32>(splats[base + 3u]), bitcast<f32>(splats[base + 4u]), bitcast<f32>(splats[base + 5u]));
  let q = normalize(unpack4x8snorm(splats[base + 6u]));
  let w = q.x; let x = q.y; let y = q.z; let z = q.w;
  var r = mat3x3f(
    vec3f(1.0 - 2.0 * (y * y + z * z), 2.0 * (x * y + w * z), 2.0 * (x * z - w * y)),
    vec3f(2.0 * (x * y - w * z), 1.0 - 2.0 * (x * x + z * z), 2.0 * (y * z + w * x)),
    vec3f(2.0 * (x * z + w * y), 2.0 * (y * z - w * x), 1.0 - 2.0 * (x * x + y * y)),
  );
  var sv = s;
  // Normal: the thinnest axis; how flat the splat is decides how much it counts.
  var k = 0;
  if (sv.y < sv[k]) { k = 1; }
  if (sv.z < sv[k]) { k = 2; }
  let normal = r[k];
  let smin = sv[k];
  let smax = max(s.x, max(s.y, s.z));
  let smid = s.x + s.y + s.z - smin - smax;
  let flat_ = clamp(1.0 - smin / max(smid, 1e-12), 0.0, 1.0);

  var light = vec3f(pp.globals.y);
  if (pp.sky.w > 0.5) {
    let h = 0.5 + 0.5 * flat_ * abs(dot(normal, pp.up.xyz));
    light += mix(pp.ground.rgb, pp.sky.rgb, h);
  }
  let mpu = pp.globals.w;
  for (var li = 0; li < i32(pp.globals.z); li++) {
    let l = pp.lights[li];
    let kind = i32(l.pos.w + 0.5);
    var to_l = -l.dir.xyz;
    var atten = 1.0;
    if (kind != 3) {
      let v = l.pos.xyz - p;
      let dist = length(v);
      to_l = v / max(dist, 1e-9);
      let d_m = max(dist * mpu, 0.05);
      atten = pow(d_m, -l.color.w);
      if (l.dir.w > 0.0) {
        let t = clamp(1.0 - pow(dist / l.dir.w, 4.0), 0.0, 1.0);
        atten *= t * t;
      }
      let facing = dot(-to_l, l.dir.xyz);
      if (kind == 1) { atten *= smoothstep(l.cone.x, max(l.cone.y, l.cone.x + 1e-4), facing); }
      if (kind == 2) { atten *= max(facing, 0.0); }
    }
    if (atten <= 1e-5) { continue; }
    let diffuse = mix(0.5, abs(dot(normal, to_l)), flat_);
    var vis = 1.0;
    let first = i32(l.cone.w);
    if (first >= 0) {
      var layer = first;
      if (kind == 0) {  // cube: the face the splat is in (+x -x +y -y +z -z)
        let a = p - l.pos.xyz;
        let m = abs(a);
        if (m.x >= m.y && m.x >= m.z) { layer += select(1, 0, a.x > 0.0); }
        else if (m.y >= m.z) { layer += select(3, 2, a.y > 0.0); }
        else { layer += select(5, 4, a.z > 0.0); }
      }
      vis = visibility(l, layer, p, smax);
    }
    light += l.color.rgb * atten * diffuse * vis;
  }
  let f = light * pp.globals.x;
  lit[i] = vec2<u32>(pack2x16float(f.rg), pack2x16float(vec2f(f.b, 0.0)));
}
`,lt=`
@group(0) @binding(0) var<uniform> strength: vec4f;  // x: strength, y: 1 once there are neighbours
@group(0) @binding(1) var<storage, read> raw: array<vec2<u32>>;
@group(0) @binding(2) var<storage, read> nb: array<u32>;  // 8 per splat (0xffffffff: none)
@group(0) @binding(3) var<storage, read_write> lit: array<vec2<u32>>;

fn rgb(v: vec2<u32>) -> vec3f {
  return vec3f(unpack2x16float(v.x), unpack2x16float(v.y).x);
}

@compute @workgroup_size(64)
fn smooth_light(@builtin(global_invocation_id) id: vec3u) {
  let i = id.x;
  if (i >= arrayLength(&lit)) { return; }
  if (strength.y < 0.5) { lit[i] = raw[i]; return; }  // no neighbours (yet): as lit
  let own = rgb(raw[i]);
  var sum = own;
  var n = 1.0;
  for (var k = 0u; k < 8u; k++) {
    let j = nb[i * 8u + k];
    if (j == 0xffffffffu) { break; }
    sum += rgb(raw[j]);
    n += 1.0;
  }
  let f = mix(own, sum / n, strength.x);
  lit[i] = vec2<u32>(pack2x16float(f.rg), pack2x16float(vec2f(f.b, 0.0)));
}
`,ut=class{device;lit;raw;neighbors;hasNeighbors=!1;smoothParams;smoothParams2;smoothPipeline;smoothBind=null;smoothBind2=null;params;shadowTex;depthTex;shadowUniforms=[];shadowPipeline;relightPipeline;shadowBinds=[];relightBind=null;dirty=!0;lighting=null;scene=null;count=0;fullCount=0;splats=null;mask;useMask=!1;constructor(e){this.device=e,this.lit=e.createBuffer({size:16,usage:GPUBufferUsage.STORAGE}),this.raw=e.createBuffer({size:16,usage:GPUBufferUsage.STORAGE}),this.neighbors=this.noNeighbors(),this.smoothParams=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.smoothParams2=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let t=e.createShaderModule({code:lt});this.smoothPipeline=e.createComputePipeline({layout:`auto`,compute:{module:t,entryPoint:`smooth_light`}}),this.mask=e.createBuffer({size:16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.params=e.createBuffer({size:nt,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.shadowTex=e.createTexture({size:[Qe,Qe,$e],format:`r32float`,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),this.depthTex=e.createTexture({size:[Qe,Qe],format:`depth24plus`,usage:GPUTextureUsage.RENDER_ATTACHMENT});let n=e.createShaderModule({code:ot});this.shadowPipeline=e.createRenderPipeline({layout:`auto`,vertex:{module:n,entryPoint:`vs`},fragment:{module:n,entryPoint:`fs`,targets:[{format:`r32float`}]},primitive:{topology:`triangle-strip`},depthStencil:{format:`depth24plus`,depthWriteEnabled:!0,depthCompare:`less`}});let r=e.createShaderModule({code:ct});this.relightPipeline=e.createComputePipeline({layout:`auto`,compute:{module:r,entryPoint:`relight`}});for(let t=0;t<$e;t++)this.shadowUniforms.push(e.createBuffer({size:it,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}))}setData(e,t,n){this.splats=e,this.count=t,this.fullCount=n,this.lit.destroy(),this.lit=this.device.createBuffer({size:Math.max(16,t*8),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.raw.destroy(),this.raw=this.device.createBuffer({size:Math.max(16,t*8),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.neighbors.destroy(),this.neighbors=this.noNeighbors(),this.hasNeighbors=!1,this.mask.destroy(),this.mask=this.device.createBuffer({size:Math.max(16,Math.ceil(t/4)*4),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.useMask=!1,this.rebind()}setNeighbors(e){e.length===this.count*8&&(this.neighbors.destroy(),this.neighbors=this.device.createBuffer({size:Math.max(16,e.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.neighbors,0,e),this.hasNeighbors=!0,this.rebind())}noNeighbors(){return this.device.createBuffer({size:16,usage:GPUBufferUsage.STORAGE})}touch(){this.dirty=!0}setMask(e){if(this.useMask=!!e&&e.length===this.count,this.useMask){let t=new Uint8Array(Math.ceil(this.count/4)*4);t.set(e),this.device.queue.writeBuffer(this.mask,0,t)}this.dirty=!0}set(e,t){this.lighting=e,this.scene=t,this.dirty=!0}get wanted(){return!!this.lighting?.enabled}get active(){return!!this.lighting?.enabled&&!!this.scene&&!!this.splats}get ambient(){return this.active?this.lighting.captured*this.lighting.exposure:1}get lightParams(){return this.params}get shadowMaps(){return this.shadowTex}rebind(){this.splats&&(this.shadowBinds=this.shadowUniforms.map(e=>this.device.createBindGroup({layout:this.shadowPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:e}},{binding:1,resource:{buffer:this.splats}},{binding:2,resource:{buffer:this.mask}}]})),this.relightBind=this.device.createBindGroup({layout:this.relightPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.params}},{binding:1,resource:{buffer:this.splats}},{binding:2,resource:{buffer:this.raw}},{binding:3,resource:this.shadowTex.createView({dimension:`2d-array`})}]}),this.smoothBind=this.device.createBindGroup({layout:this.smoothPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.smoothParams}},{binding:1,resource:{buffer:this.raw}},{binding:2,resource:{buffer:this.neighbors}},{binding:3,resource:{buffer:this.lit}}]}),this.smoothBind2=this.device.createBindGroup({layout:this.smoothPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.smoothParams2}},{binding:1,resource:{buffer:this.lit}},{binding:2,resource:{buffer:this.neighbors}},{binding:3,resource:{buffer:this.raw}}]}),this.dirty=!0)}update(e){if(!this.dirty||!this.active||!this.relightBind)return!1;this.dirty=!1;let t=this.lighting,n=this.scene,r=n.metersPerUnit,i=T(n.up),a=t.lights.filter(e=>e.enabled).slice(0,8),o=new Float32Array(nt/4);o.set([t.exposure,t.captured,a.length,r],0);let s=t.sky;o.set([...s.color.map(e=>e*s.intensity),+!!s.enabled],4),o.set([...s.ground.map(e=>e*s.intensity),0],8),o.set([...i,0],12);let c=[];a.forEach((e,t)=>{let i=16+t*tt,a=T(e.direction),s=e.position,l=e.shadows?c.length:-1,u=e.kind===`point`?6:1,d=-1,f=0,p=0,m=[0,0,0];if(l>=0&&c.length+u<=$e){d=l;let t=.05/r,i=e.range>0?e.range/r:n.radius*6;if(e.kind===`sun`){let e=n.radius;m=[n.center[0]-a[0]*e*2,n.center[1]-a[1]*e*2,n.center[2]-a[2]*e*2];let t=D(m,n.center,dt(a));c.push({view:t,proj:ft(e,0,e*4),focal:Qe/(2*e),ortho:!0,near:0}),f=Qe/(2*e),p=1}else if(e.kind===`point`){for(let e of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){let n=[s[0]+e[0],s[1]+e[1],s[2]+e[2]];c.push({view:D(s,n,dt(e)),proj:E(Math.PI/2,1,t,i),focal:Qe/2,ortho:!1,near:t})}f=Qe/2}else{let n=e.kind===`spot`?Math.min(2*e.cone*Math.PI/180+.17,2.8):rt,r=[s[0]+a[0],s[1]+a[1],s[2]+a[2]],o=Qe/(2*Math.tan(n/2));c.push({view:D(s,r,dt(a)),proj:E(n,1,t,i),focal:o,ortho:!1,near:t}),f=o}}let h=Math.cos(e.cone*Math.PI/180),g=Math.cos(e.cone*(1-e.penumbra)*Math.PI/180),_=e.kind===`sun`?Math.tan(e.size*Math.PI/360):e.size/r;o.set([...s,et[e.kind]],i),o.set([...a,e.range>0?e.range/r:0],i+4),o.set([...e.color.map(t=>t*e.intensity),e.falloff],i+8),o.set([h,g,_,d],i+12),o.set([f,p,Qe,0],i+16),o.set([...m,0],i+20)}),c.forEach((e,t)=>o.set(O(e.proj,e.view),208+t*16)),this.device.queue.writeBuffer(this.params,0,o),c.forEach((t,n)=>{let r=new ArrayBuffer(it),i=new Float32Array(r);i.set(t.view,0),i.set(t.proj,16),i.set([Qe,t.focal,+!!t.ortho,t.near],32),new Uint32Array(r,144,2).set([this.fullCount,+!!this.useMask]),this.device.queue.writeBuffer(this.shadowUniforms[n],0,r);let a=e.beginRenderPass({colorAttachments:[{view:this.shadowTex.createView({dimension:`2d`,baseArrayLayer:n,arrayLayerCount:1}),clearValue:{r:at,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}],depthStencilAttachment:{view:this.depthTex.createView(),depthClearValue:1,depthLoadOp:`clear`,depthStoreOp:`discard`}});a.setPipeline(this.shadowPipeline),a.setBindGroup(0,this.shadowBinds[n]),a.draw(4,this.fullCount),a.end()});let l=Math.min(2,Math.max(0,t.smooth??1)),u=+!!this.hasNeighbors;this.device.queue.writeBuffer(this.smoothParams,0,new Float32Array([Math.min(1,l),u,0,0])),this.device.queue.writeBuffer(this.smoothParams2,0,new Float32Array([l-1,u,0,0]));let d=Math.ceil(this.count/64),f=e.beginComputePass();return f.setPipeline(this.relightPipeline),f.setBindGroup(0,this.relightBind),f.dispatchWorkgroups(d),f.setPipeline(this.smoothPipeline),f.setBindGroup(0,this.smoothBind),f.dispatchWorkgroups(d),l>1&&(f.setBindGroup(0,this.smoothBind2),f.dispatchWorkgroups(d)),f.end(),l>1&&e.copyBufferToBuffer(this.raw,0,this.lit,0,Math.max(16,this.count*8)),!0}destroy(){this.lit.destroy(),this.raw.destroy(),this.neighbors.destroy(),this.smoothParams.destroy(),this.smoothParams2.destroy(),this.mask.destroy(),this.params.destroy(),this.shadowTex.destroy(),this.depthTex.destroy(),this.shadowUniforms.forEach(e=>e.destroy())}};function dt(e){return Math.abs(e[1])<.9?[0,1,0]:[1,0,0]}function ft(e,t,n){let r=new Float32Array(16);return r[0]=1/e,r[5]=1/e,r[10]=1/(t-n),r[14]=t/(t-n),r[15]=1,r}var pt=6e4,mt=400,ht=e=>Math.min(pt,Math.floor(mt*e.amount**2*e.range**3)),gt=88,_t=352,vt=`
${he}
${st}
struct D {
  view_proj: mat4x4f,
  view: mat4x4f,
  eye: vec3f, time: f32,
  up: vec3f, ground: f32,      // dot(up, a point on the ground)
  flow: vec3f, mpu: f32,       // wind + updraft (m/s, world axes)
  a: vec4f,  // range (m), band low, high (m above the ground), water surface (m; -1e9 none)
  b: vec4f,  // size (m), opacity, randomness, twinkle
  c: vec4f,  // swirl, swirl size (m), ambient, light
  d: vec4f,  // colour, glow
  e: vec4f,  // scatter, lights on (1), viewport (px)
  f: vec4f,  // focal (px), 0, 0, 0
  fog: FogU,
};
@group(0) @binding(0) var<uniform> dd: D;
@group(0) @binding(1) var scene_depth: texture_2d<f32>;
@group(0) @binding(2) var<uniform> pp: P;
@group(0) @binding(3) var shadow_maps: texture_2d_array<f32>;

const EDGE = 0.75;
const BAND_M = 0.15;
const NEAR_LO = 0.08;
const NEAR_HI = 0.35;
const SWIRL_RATE = 0.12;
const WANDER_M = 0.08;
const GLOW = 1.5;
const MOTE_ISO = 0.35;  // share of a mote's scatter that goes every way (side-lit motes show)
const BLOOM = 4.0;      // light over 1 spreads a mote over up to this much more area
const LIT_ALPHA = 0.5;  // motes dimmer than this fade toward clear (seen by the light they scatter)
const EXTENT = 3.0;
const TAU = 6.28318530718;

fn dust_rand(i: u32, k: u32) -> f32 {
  var h = (i * 0x9e3779b1u) ^ (k * 0x85ebca77u + 0x165667b1u);
  h ^= h >> 16u;
  h *= 0x7feb352du;
  h ^= h >> 15u;
  h *= 0x846ca68bu;
  h ^= h >> 16u;
  return f32(h) / 4294967295.0;
}

fn noise3(q: vec3f) -> vec3f {
  return vec3f(fog_noise(q), fog_noise(q + 31.7), fog_noise(q + 71.3)) * 2.0 - 1.0;
}

fn sm(e0: f32, e1: f32, x: f32) -> f32 {
  let k = clamp((x - e0) / max(e1 - e0, 1e-9), 0.0, 1.0);
  return k * k * (3.0 - 2.0 * k);
}

// Henyey-Greenstein, relative to scattering evenly.
fn hg(g: f32, c: f32) -> f32 {
  return (1.0 - g * g) / pow(max(1.0 + g * g - 2.0 * g * c, 1e-6), 1.5);
}

struct VOut {
  @builtin(position) pos: vec4f,
  @location(0) color: vec4f,  // rgb, alpha
  @location(1) uv: vec2f,     // in standard deviations
  @location(2) depth: f32,    // view depth
};

@vertex
fn vs(@builtin(vertex_index) vi: u32, @builtin(instance_index) i: u32) -> VOut {
  var out: VOut;
  out.pos = vec4f(0.0, 0.0, 2.0, 1.0);  // culled unless it shows
  var r: array<f32, 9>;
  for (var k = 0u; k < 9u; k++) { r[k] = dust_rand(i, k); }
  let range = dd.a.x;
  let rnd = dd.b.z;
  let t = dd.time;
  let base = vec3f(r[0], r[1], r[2]) * range;  // metres
  let speed = 1.0 + rnd * (r[3] - 0.5);
  var p = base + dd.flow * (speed * t);
  if (dd.c.x > 0.0) { p += noise3(base / dd.c.y + t * SWIRL_RATE) * (dd.c.x * dd.c.y); }
  if (rnd > 0.0) { p += noise3(base * 3.1 + t * 0.6 + 13.0) * (WANDER_M * rnd); }
  // Wrapped into the box around the camera (world units).
  let mpu = dd.mpu;
  let box = range / mpu;
  let x = p / mpu - dd.eye + box * 0.5;
  let rel = x - box * floor(x / box) - box * 0.5;
  let world = dd.eye + rel;
  let edge = max(abs(rel.x), max(abs(rel.y), abs(rel.z))) / (box * 0.5);
  var alpha = dd.b.y * (1.0 - sm(EDGE, 1.0, edge));
  let h_m = (dot(world, dd.up) - dd.ground) * mpu;
  alpha *= sm(dd.a.y - BAND_M, dd.a.y, h_m) * (1.0 - sm(dd.a.z, dd.a.z + BAND_M, h_m));
  if (h_m <= dd.a.w) { alpha = 0.0; }
  alpha *= sm(NEAR_LO, NEAR_HI, length(rel) * mpu);
  if (alpha <= 1.0 / 255.0) { return out; }
  let cam = dd.view * vec4f(world, 1.0);
  let depth = -cam.z;
  if (depth < 1e-4) { return out; }
  let clip = dd.view_proj * vec4f(world, 1.0);

  let radius = dd.b.x * 0.5 / mpu * exp(rnd * 0.7 * (2.0 * r[4] - 1.0));
  var tint = 1.0 + rnd * 0.6 * (r[5] - 0.5);
  if (dd.b.w > 0.0) {
    let wave = 0.5 + 0.5 * sin(t * (0.5 + 2.0 * r[7]) * TAU + r[6] * TAU);
    tint *= 1.0 + dd.b.w * (0.2 + 2.4 * pow(wave, 4.0) - 1.0);
  }
  // Light: ambient (with Lighting on, as dim or bright as the captured light is set), plus each
  // added light through its shadows, scattered mostly forward.
  var light = vec3f(dd.c.z);
  if (dd.e.y > 0.5) { light *= pp.globals.y * pp.globals.x; }
  if (dd.e.y > 0.5) {
    let to_eye = normalize(dd.eye - world);
    var direct = vec3f(0.0);
    for (var li = 0; li < i32(pp.globals.z); li++) {
      let l = pp.lights[li];
      let reach = light_reach(l, world);
      if (reach.w <= 1e-5) { continue; }
      let layer = shadow_layer(l, world);
      let vis = select(1.0, visibility(l, layer, world, radius), layer >= 0);
      direct += l.color.rgb * reach.w * vis * mix(hg(dd.e.x, dot(-reach.xyz, to_eye)), 1.0, MOTE_ISO);
    }
    light += direct * pp.globals.x * dd.c.w;
  }
  var rgb = max(dd.d.rgb * light * tint + dd.d.rgb * (dd.d.w * GLOW), vec3f(0.0));
  // Inside fog never darker than the fog glowing around it (no dark specks against it).
  rgb = mix(rgb, max(rgb, dd.fog.c.rgb), fog_light_in(dd.fog, world));
  alpha *= clamp(max(rgb.r, max(rgb.g, rgb.b)) / LIT_ALPHA, 0.0, 1.0);
  if (alpha <= 1.0 / 255.0) { return out; }
  // Brighter than white: spread over a bigger spot instead (a lit mote blooms, not clips).
  let bloom = clamp(max(rgb.r, max(rgb.g, rgb.b)), 1.0, BLOOM);
  rgb = min(rgb / bloom, vec3f(1.0));
  let rad = radius * sqrt(bloom);
  rgb = mix(dd.fog.c.rgb, rgb, fog_tr(dd.fog, dd.eye, world));

  // A round Gaussian on screen (with the splats' low-pass, as the engine's rasterizer).
  let r_px = sqrt((rad * dd.f.x / depth) * (rad * dd.f.x / depth) + 0.3);
  var corners = array<vec2f, 4>(vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0), vec2f(1.0, 1.0));
  let uv = corners[vi] * EXTENT;
  out.pos = clip + vec4f(uv * r_px * 2.0 / dd.e.zw * clip.w, 0.0, 0.0);
  out.color = vec4f(rgb, alpha);
  out.uv = uv;
  out.depth = depth;
  return out;
}

@fragment
fn fs(in: VOut) -> @location(0) vec4f {
  let d2 = dot(in.uv, in.uv);
  if (d2 > EXTENT * EXTENT) { discard; }
  var a = in.color.a * exp(-0.5 * d2);
  // Hidden behind solid splats (softly, so motes don't pop at edges).
  let px = clamp(vec2i(in.pos.xy), vec2i(0), vec2i(dd.e.zw) - 1);
  let s = textureLoad(scene_depth, px, 0);
  if (s.y > 0.5) {
    let solid = s.x / s.y;
    a *= 1.0 - sm(solid * 0.99, solid * 1.03, in.depth);
  }
  if (a < 1.0 / 255.0) { discard; }
  return vec4f(in.color.rgb * a, a);
}
`,yt=class{device;uniforms;pipeline;noDepth;bind=null;bound=null;constructor(e,t){this.device=e,this.uniforms=e.createBuffer({size:_t,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.noDepth=e.createTexture({size:[1,1],format:`rgba16float`,usage:GPUTextureUsage.TEXTURE_BINDING});let n=e.createShaderModule({code:vt});this.pipeline=e.createRenderPipeline({layout:`auto`,vertex:{module:n,entryPoint:`vs`},fragment:{module:n,entryPoint:`fs`,targets:[{format:t,blend:{color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`}}}]},primitive:{topology:`triangle-strip`}})}draw(e,t){let n=t.dust,r=ht(n);if(!n.enabled||r===0)return;let i=bt(t.scene.ground.normal),a=bt(xt(Math.abs(i[0])<.9?[1,0,0]:[0,1,0],i)),o=xt(i,a),s=n.wind_heading*Math.PI/180,c=[0,1,2].map(e=>(a[e]*Math.cos(s)+o[e]*Math.sin(s))*n.wind+i[e]*n.updraft),l=new Float32Array(gt);l.set(t.viewProj,0),l.set(t.view,16),l.set([...t.eye,t.time],32),l.set([...i,i[0]*t.scene.ground.point[0]+i[1]*t.scene.ground.point[1]+i[2]*t.scene.ground.point[2]],36),l.set([...c,t.scene.metersPerUnit],40),l.set([n.range,n.low,n.high,t.waterM??-1e9],44),l.set([n.size/1e3,n.opacity,n.randomness,n.twinkle],48),l.set([n.swirl,n.swirl_size,n.ambient,n.light],52),l.set([...n.color,n.glow],56),l.set([n.scatter,+!!t.lights.on,...t.viewport],60),l.set([t.focal,0,0,0],64),l.set(t.fog,68),this.device.queue.writeBuffer(this.uniforms,0,l);let u=this.bound;(!this.bind||!u||u.depth!==t.depth||u.params!==t.lights.params||u.maps!==t.lights.maps)&&(this.bind=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniforms}},{binding:1,resource:(t.depth??this.noDepth).createView()},{binding:2,resource:{buffer:t.lights.params}},{binding:3,resource:t.lights.maps.createView({dimension:`2d-array`})}]}),this.bound={depth:t.depth,params:t.lights.params,maps:t.lights.maps}),e.setPipeline(this.pipeline),e.setBindGroup(0,this.bind),e.draw(4,r)}destroy(){this.uniforms.destroy(),this.noDepth.destroy()}},bt=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},xt=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],St=.6,Ct=.75,wt=.5,Tt=.12,Et=.15,Dt=.75,Ot=.3,kt=.75,At=60,jt=`
${he}
${st}
struct A {
  inv_view_proj: mat4x4f,
  eye: vec3f, haze: f32,     // haze scattering per metre (0: none)
  fwd: vec3f, g: f32,        // the camera's forward, the haze's phase g
  up: vec3f, ground: f32,    // dot(up, a point on the ground)
  tint: vec3f, mpu: f32,     // the haze's colour
  a: vec4f,  // band low, high (m above the ground), water surface (m; -1e9 none), march reach (m)
  b: vec4f,  // viewport (px, full size), haze reach (m), SCALE
  fog: FogU,
};
@group(0) @binding(0) var<uniform> aa: A;
@group(0) @binding(1) var scene_depth: texture_2d<f32>;
@group(0) @binding(2) var<uniform> pp: P;
@group(0) @binding(3) var shadow_maps: texture_2d_array<f32>;

const STEPS = 48;
const BAND_M = ${Et};
const FOG_G = ${wt};
const SOFT_M = ${Tt};
const KNEE = ${Ot};
const MAX = ${kt};

// As it is up to KNEE (its brightest channel), then easing toward MAX, the colour kept.
fn air_rolloff(c: vec3f) -> vec3f {
  let m = max(c.r, max(c.g, c.b));
  if (m <= KNEE) { return c; }
  let span = MAX - KNEE;
  return c * ((KNEE + span * (1.0 - exp(-(m - KNEE) / span))) / m);
}

fn air_sm(e0: f32, e1: f32, x: f32) -> f32 {
  let k = clamp((x - e0) / max(e1 - e0, 1e-9), 0.0, 1.0);
  return k * k * (3.0 - 2.0 * k);
}

fn air_hg(g: f32, c: f32) -> f32 {
  return (1.0 - g * g) / pow(max(1.0 + g * g - 2.0 * g * c, 1e-6), 1.5);
}

// Whether light l reaches p past the solid splats (one lookup, no soft edge: the march blurs it).
fn air_vis(l: L, layer: i32, p: vec3f) -> f32 {
  let clip = pp.mats[layer] * vec4f(p, 1.0);
  if (clip.w <= 0.0) { return 1.0; }
  let ndc = clip.xyz / clip.w;
  if (abs(ndc.x) > 1.0 || abs(ndc.y) > 1.0) { return 1.0; }
  let res = l.shadow.z;
  let texel = vec2f(ndc.x * 0.5 + 0.5, 0.5 - ndc.y * 0.5) * res;
  let d_r = select(clip.w, dot(p - l.eye.xyz, l.dir.xyz), l.shadow.y > 0.5);
  return select(0.0, 1.0, map_at(layer, texel, res) >= d_r * 0.99);
}

struct VOut { @builtin(position) pos: vec4f, @location(0) ndc: vec2f };

@vertex
fn vs(@builtin(vertex_index) i: u32) -> VOut {
  let p = vec2f(f32((i << 1u) & 2u), f32(i & 2u)) * 2.0 - 1.0;
  var out: VOut;
  out.pos = vec4f(p, 0.0, 1.0);
  out.ndc = p;
  return out;
}

@fragment
fn fs(in: VOut) -> @location(0) vec4f {
  let wp = aa.inv_view_proj * vec4f(in.ndc, 0.5, 1.0);
  let dir = normalize(wp.xyz / wp.w - aa.eye);
  let mpu = aa.mpu;
  let px = clamp(vec2i(in.pos.xy * aa.b.w), vec2i(0), vec2i(aa.b.xy) - 1);
  let s = textureLoad(scene_depth, px, 0);
  var t_max = aa.a.w / mpu;
  if (s.y > 0.5) { t_max = min(t_max, (s.x / s.y) / max(dot(dir, aa.fwd), 1e-3)); }
  let dt = t_max / f32(STEPS);
  // Interleaved gradient noise: each pixel starts its steps somewhere else (no banding).
  let jitter = fract(52.9829189 * fract(dot(in.pos.xy, vec2f(0.06711056, 0.00583715))));
  let n_lights = i32(pp.globals.z);
  var sum = vec3f(0.0);
  var tau = 0.0;
  let fog_albedo = aa.fog.c.rgb / max(aa.fog.e.w, 1e-3);  // its own colour, not its glow
  for (var k = 0; k < STEPS; k++) {
    let t = (f32(k) + jitter) * dt;
    let p = aa.eye + dir * t;
    let h_m = (dot(p, aa.up) - aa.ground) * mpu;
    var haze = 0.0;
    if (aa.haze > 0.0 && h_m > aa.a.z) {
      haze = aa.haze * air_sm(aa.a.x - BAND_M, aa.a.x, h_m) * (1.0 - air_sm(aa.a.y, aa.a.y + BAND_M, h_m));
      haze *= 1.0 - air_sm(0.6, 1.0, t * mpu / aa.b.z);
    }
    var fogd = 0.0;
    if (aa.fog.c.w > 0.0) {
      fogd = aa.fog.c.w * fog_profile(aa.fog, dot(p, aa.fog.a.xyz) - aa.fog.a.w) * fog_patches(aa.fog, p);
    }
    if (haze + fogd <= 0.0) { continue; }
    var lh = vec3f(0.0);
    var lf = vec3f(0.0);
    for (var li = 0; li < n_lights; li++) {
      let l = pp.lights[li];
      var r = light_reach(l, p);
      if (r.w <= 1e-6) { continue; }
      if (i32(l.pos.w + 0.5) != 3) {  // softened right at the lamp
        let d_m = length(l.pos.xyz - p) * mpu;
        let core = max(l.cone.z * mpu, SOFT_M);
        r.w *= pow(max(d_m * d_m, 0.0025) / (d_m * d_m + core * core), 0.5 * l.color.w);
      }
      let layer = shadow_layer(l, p);
      let vis = select(1.0, air_vis(l, layer, p), layer >= 0);
      if (vis <= 0.0) { continue; }
      let e = l.color.rgb * (r.w * vis);
      let c = dot(r.xyz, dir);
      lh += e * air_hg(aa.g, c);
      lf += e * air_hg(FOG_G, c);
    }
    let step_m = dt * mpu;
    sum += exp(-tau) * (haze * aa.tint * lh + fogd * fog_albedo * lf) * step_m;
    tau += fogd * step_m;
  }
  return vec4f(air_rolloff(sum * pp.globals.x), 1.0);
}
`,Mt=`
@group(0) @binding(0) var low: texture_2d<f32>;
@group(0) @binding(1) var samp: sampler;
@group(0) @binding(2) var<uniform> c: vec4f;  // full size (px), blur offset (uv of the low texture)

@vertex
fn vs(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {
  let p = vec2f(f32((i << 1u) & 2u), f32(i & 2u)) * 2.0 - 1.0;
  return vec4f(p, 0.0, 1.0);
}

@fragment
fn fs(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy / c.xy;
  let o = c.zw;
  let sum = textureSampleLevel(low, samp, uv + vec2f(-o.x, -o.y), 0.0)
    + textureSampleLevel(low, samp, uv + vec2f(o.x, -o.y), 0.0)
    + textureSampleLevel(low, samp, uv + vec2f(-o.x, o.y), 0.0)
    + textureSampleLevel(low, samp, uv + vec2f(o.x, o.y), 0.0);
  return vec4f(sum.rgb * 0.25, 0.0);
}
`;function Nt(e,t,n){return n&&(!!e?.enabled&&(e.haze??0)>0||t)}var Pt=class{device;uniforms;compositeUniforms;pipeline;compositePipeline;sampler;noDepth;low=null;bind=null;compositeBind=null;bound=null;ready=!1;constructor(e,t){this.device=e,this.uniforms=e.createBuffer({size:At*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.compositeUniforms=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.noDepth=e.createTexture({size:[1,1],format:`rgba16float`,usage:GPUTextureUsage.TEXTURE_BINDING}),this.sampler=e.createSampler({magFilter:`linear`,minFilter:`linear`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`});let n=e.createShaderModule({code:jt});this.pipeline=e.createRenderPipeline({layout:`auto`,vertex:{module:n,entryPoint:`vs`},fragment:{module:n,entryPoint:`fs`,targets:[{format:`rgba16float`}]},primitive:{topology:`triangle-list`}});let r=e.createShaderModule({code:Mt});this.compositePipeline=e.createRenderPipeline({layout:`auto`,vertex:{module:r,entryPoint:`vs`},fragment:{module:r,entryPoint:`fs`,targets:[{format:t,blend:{color:{srcFactor:`one`,dstFactor:`one`},alpha:{srcFactor:`zero`,dstFactor:`one`}}}]},primitive:{topology:`triangle-list`}})}render(e,t){this.ready=!1;let n=t.dust?.enabled?t.dust:null,r=n?(n.haze??0)*St:0,i=t.fog[11]>0;if(r<=0&&!i)return;let[a,o]=t.viewport,s=Math.max(1,Math.ceil(a/2)),c=Math.max(1,Math.ceil(o/2));(!this.low||this.low.width!==s||this.low.height!==c)&&(this.low?.destroy(),this.low=this.device.createTexture({size:[s,c],format:`rgba16float`,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}));let l=Ft(t.scene.ground.normal),u=t.scene.ground.point,d=t.view,f=Math.max(n?n.range:0,i?60:0),p=new Float32Array(At);p.set(t.invViewProj,0),p.set([...t.eye,r],16),p.set([-d[2],-d[6],-d[10],n?n.scatter*Ct:0],20),p.set([...l,l[0]*u[0]+l[1]*u[1]+l[2]*u[2]],24),p.set([...n?n.color:[1,1,1],t.scene.metersPerUnit],28),p.set([n?n.low:0,n?n.high:0,t.waterM??-1e9,f],32),p.set([...t.viewport,n?n.range:1,2],36),p.set(t.fog,40),this.device.queue.writeBuffer(this.uniforms,0,p),this.device.queue.writeBuffer(this.compositeUniforms,0,new Float32Array([a,o,Dt/s,Dt/c]));let m=this.bound,h=this.low;(!this.bind||!m||m.depth!==t.depth||m.params!==t.lights.params||m.maps!==t.lights.maps||m.low!==h)&&(this.bind=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniforms}},{binding:1,resource:(t.depth??this.noDepth).createView()},{binding:2,resource:{buffer:t.lights.params}},{binding:3,resource:t.lights.maps.createView({dimension:`2d-array`})}]}),this.compositeBind=this.device.createBindGroup({layout:this.compositePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:h.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:this.compositeUniforms}}]}),this.bound={depth:t.depth,params:t.lights.params,maps:t.lights.maps,low:h});let g=e.beginRenderPass({colorAttachments:[{view:h.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}]});g.setPipeline(this.pipeline),g.setBindGroup(0,this.bind),g.draw(3),g.end(),this.ready=!0}composite(e){this.ready&&this.compositeBind&&(e.setPipeline(this.compositePipeline),e.setBindGroup(0,this.compositeBind),e.draw(3))}destroy(){this.uniforms.destroy(),this.compositeUniforms.destroy(),this.noDepth.destroy(),this.low?.destroy()}},Ft=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},It=`
${he}
struct W {
  inv_view_proj: mat4x4f,
  view_proj: mat4x4f,
  eye: vec3f, time: f32,
  forward: vec3f, mpu: f32,          // metres per scene unit
  plane: vec4f,                      // surface: dot(normal, x) = w
  tangent: vec3f, turbidity: f32,    // tangent: a horizontal axis on the plane
  viewport: vec2f, waves: f32, far_m: f32,
  background: vec4f,
  flood_grid: vec4f,  // connected flood map: u0, v0, cell, enabled (1)
  flood_t: vec4f,     // grid axis u (world) and the number of cells along it
  flood_b: vec4f,     // grid axis v and its cell count
  level: vec4f,       // x: water level above the ground (units), y: wake strength, z: rain, w: murk
  fx: vec4f,          // x: presence (fades the flood in/out), y: bounce strength, z: foam settle,
                      // w: eye outside what holds the water (1 a dome, 2 the area; 0 neither)
  sky_c: vec4f,       // skydome (sky.ts): centre, radius; its axes; (brightness, on, mask water, 0)
  sky_x: vec4f,
  sky_y: vec4f,
  sky_z: vec4f,
  sky_k: vec4f,
  sky_cut: vec4f,     // the flat cut: nothing below dot(xyz, p) = w (with sky_k.w flag 2)
  area_c: vec4f,      // water area: centre on the ground, shape (w: 0 none, 1 circle, 2 square)
  area_u: vec4f,      // its side direction (xyz) and size (w: radius / half-width)
  area_k: vec4f,      // x: its soft edge (units)
  wave: vec4f,        // the wave field's scale, cos and sin of its heading (render/water.py),
                      // w: 1 with the sun glint
  fog: FogU,
};
@group(0) @binding(0) var<uniform> w: W;
@group(0) @binding(1) var over_tex: texture_2d<f32>;
@group(0) @binding(2) var under_tex: texture_2d<f32>;
@group(0) @binding(4) var under_depth: texture_2d<f32>;
@group(0) @binding(5) var samp: sampler;
@group(0) @binding(6) var reflect_tex: texture_2d<f32>;
@group(0) @binding(7) var<storage, read> flow: array<vec4f>;
@group(0) @binding(8) var debris_tex: texture_2d<f32>;
@group(0) @binding(9) var sky_tex: texture_2d<f32>;
@group(0) @binding(10) var sky_smp: sampler;
${qe}

// What's behind everything along a ray: the skydome if there is one, else the fallback.
fn backdrop(o: vec3f, d: vec3f, fallback: vec3f) -> vec3f {
  if (w.sky_k.y < 0.5) { return fallback; }
  let col = dome_color(o, d, w.sky_c, w.sky_x, w.sky_y, w.sky_z, w.sky_k, w.sky_cut, sky_tex, sky_smp);
  return select(fallback, col.rgb, col.a > 0.5);
}

const WATER_BOTTOM_M = 0.1524;  // without a section cut, the water's side starts this far under the floor

// 1 inside the flood's area, 0 outside, smooth across its soft edge (1 without an area).
fn water_area(p: vec3f) -> f32 {
  if (w.area_c.w < 0.5) { return 1.0; }
  let d = p - w.area_c.xyz;
  let a = dot(d, w.area_u.xyz);
  let b = dot(d, cross(w.plane.xyz, w.area_u.xyz));
  let r = select(length(vec2f(a, b)), max(abs(a), abs(b)), w.area_c.w > 1.5);
  return 1.0 - smoothstep(w.area_u.w - max(w.area_k.x, 1e-9), w.area_u.w, r);
}

// A ray from outside what holds the water (a dome, or the water's area) entering the water
// through its side: (1, entry, exit), or 0.
fn side_entry(o: vec3f, d: vec3f, n: vec3f, top: f32, bottom: f32) -> vec3f {
  if (w.fx.w > 1.5) { return area_entry(o, d, n, top, bottom); }
  let oc = o - w.sky_c.xyz;
  let b = dot(oc, d);
  let disc = b * b - (dot(oc, oc) - w.sky_c.w * w.sky_c.w);
  if (disc <= 0.0) { return vec3f(0.0); }
  let sq = sqrt(disc);
  return slab_entry(o, d, n, top, bottom, -b - sq, -b + sq);
}

// The water's area seen from outside it: its footprint (circle or square; the side stands
// halfway through the soft edge) along the normal.
fn area_entry(o: vec3f, d: vec3f, n: vec3f, top: f32, bottom: f32) -> vec3f {
  let uu = w.area_u.xyz;
  let vv = cross(n, uu);
  let oc = o - w.area_c.xyz;
  let ox = dot(oc, uu); let oy = dot(oc, vv);
  let dx = dot(d, uu); let dy = dot(d, vv);
  let r = w.area_u.w - 0.5 * w.area_k.x;
  var t0 = -1e9;
  var t1 = 1e9;
  if (w.area_c.w > 1.5) {
    if (abs(dx) < 1e-9) {
      if (abs(ox) > r) { return vec3f(0.0); }
    } else {
      t0 = max(t0, min((-r - ox) / dx, (r - ox) / dx));
      t1 = min(t1, max((-r - ox) / dx, (r - ox) / dx));
    }
    if (abs(dy) < 1e-9) {
      if (abs(oy) > r) { return vec3f(0.0); }
    } else {
      t0 = max(t0, min((-r - oy) / dy, (r - oy) / dy));
      t1 = min(t1, max((-r - oy) / dy, (r - oy) / dy));
    }
    if (t0 >= t1) { return vec3f(0.0); }
  } else {
    let a = max(dx * dx + dy * dy, 1e-12);
    let b = ox * dx + oy * dy;
    let disc = b * b - a * (ox * ox + oy * oy - r * r);
    if (disc <= 0.0) { return vec3f(0.0); }
    let sq = sqrt(disc);
    t0 = (-b - sq) / a;
    t1 = (-b + sq) / a;
  }
  return slab_entry(o, d, n, top, bottom, t0, t1);
}

// Where a ray inside [t0, t1] of a holder also is between bottom and top (as dot(n, x)),
// entering through the holder's side: (1, entry, exit), or 0.
fn slab_entry(o: vec3f, d: vec3f, n: vec3f, top: f32, bottom: f32, t0: f32, t1: f32) -> vec3f {
  let h0 = dot(n, o);
  let dn = dot(n, d);
  var ts0 = -1e9;
  var ts1 = 1e9;
  if (abs(dn) < 1e-6) {
    if (h0 < bottom || h0 > top) { return vec3f(0.0); }
  } else {
    let ta = (top - h0) / dn;
    let tb = (bottom - h0) / dn;
    ts0 = min(ta, tb);
    ts1 = max(ta, tb);
  }
  let t_in = max(t0, ts0);
  let t_out = min(t1, ts1);
  if (t_in < t_out && t_in > 0.0 && t0 >= ts0) { return vec3f(1.0, t_in, t_out); }
  return vec3f(0.0);
}

// Flood water per cell of a grid on the ground plane (flow.ts FlowSim.state):
// (surface, depth m, wet line, 0), surface and wet line in scene units above the ground,
// surface -1e9 where dry. Disabled (flood_grid.w = 0) without a flood map.
fn flow_cell(i: i32, j: i32, ta: vec4f, ba: vec4f) -> vec4f {
  let nu = i32(ta.w);
  let c = vec2i(clamp(i, 0, nu - 1), clamp(j, 0, i32(ba.w) - 1));
  return flow[c.y * nu + c.x];
}

// The water at point p, interpolated between cell centres (smooth edges, no squares):
// x = surface height (units above the ground; -1e9 none), y = 0..1 how wet, z = wet line.
fn water_at(p: vec3f, grid: vec4f, ta: vec4f, ba: vec4f) -> vec3f {
  let x = (dot(p, ta.xyz) - grid.x) / grid.z - 0.5;
  let y = (dot(p, ba.xyz) - grid.y) / grid.z - 0.5;
  let i = i32(floor(x));
  let j = i32(floor(y));
  let fx = x - floor(x);
  let fy = y - floor(y);
  let c00 = flow_cell(i, j, ta, ba);
  let c10 = flow_cell(i + 1, j, ta, ba);
  let c01 = flow_cell(i, j + 1, ta, ba);
  let c11 = flow_cell(i + 1, j + 1, ta, ba);
  let w = vec4f((1.0 - fx) * (1.0 - fy), fx * (1.0 - fy), (1.0 - fx) * fy, fx * fy);
  let wet = vec4f(select(0.0, 1.0, c00.x > -1e8), select(0.0, 1.0, c10.x > -1e8),
                  select(0.0, 1.0, c01.x > -1e8), select(0.0, 1.0, c11.x > -1e8));
  let ww = w * wet;
  let total = ww.x + ww.y + ww.z + ww.w;
  let surface = select(-1e9, dot(ww, vec4f(c00.x, c10.x, c01.x, c11.x)) / max(total, 1e-6), total > 0.0);
  let line = max(max(c00.z, c10.z), max(c01.z, c11.z));
  return vec3f(surface, clamp((total - 0.25) / 0.5, 0.0, 1.0), line);
}

struct VOut { @builtin(position) pos: vec4f };

@vertex
fn vs(@builtin(vertex_index) vi: u32) -> VOut {
  var p = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0));
  var out: VOut;
  out.pos = vec4f(p[vi], 0.0, 1.0);
  return out;
}

const PI = 3.14159265;
const NO_DEPTH = 1e9;

// View depth of the nearest solid splat in a layer (NO_DEPTH where there is none).
fn depth_at(t: texture_2d<f32>, px: vec2i) -> f32 {
  let a = textureLoad(t, clamp(px, vec2i(0), vec2i(w.viewport) - 1), 0);
  return select(NO_DEPTH, a.x / a.y, a.y > 0.5);
}

// 0..1: how much p is where an object meets the water (flow.ts spread marks those cells).
fn object_at(p: vec3f, grid: vec4f, ta: vec4f, ba: vec4f) -> f32 {
  let x = (dot(p, ta.xyz) - grid.x) / grid.z - 0.5;
  let y = (dot(p, ba.xyz) - grid.y) / grid.z - 0.5;
  let i = i32(floor(x)); let j = i32(floor(y));
  let fx = x - floor(x); let fy = y - floor(y);
  let top = mix(flow_cell(i, j, ta, ba).w, flow_cell(i + 1, j, ta, ba).w, fx);
  let bottom = mix(flow_cell(i, j + 1, ta, ba).w, flow_cell(i + 1, j + 1, ta, ba).w, fx);
  return mix(top, bottom, fy);
}

fn sky(dir: vec3f) -> vec3f {
  let e = clamp(dot(dir, w.plane.xyz), 0.0, 1.0);
  let horizon = vec3f(0.78, 0.82, 0.86);
  let zenith = vec3f(0.34, 0.50, 0.72);
  return mix(mix(horizon, zenith, sqrt(e)), vec3f(0.56, 0.58, 0.61), w.level.z * 0.65);  // overcast
}

fn hash2(c: vec2f) -> vec2f {
  return fract(sin(vec2f(dot(c, vec2f(127.1, 311.7)), dot(c, vec2f(269.5, 183.3)))) * 43758.5453);
}

// Raindrop rings: one drop per 0.45 m cell at a random moment of its own ~1 s cycle; each
// ring spreads at 0.35 m/s and fades. Returns the surface slope it adds (q in metres).
fn rain_slope(q: vec2f, t: f32) -> vec2f {
  let cell = 0.45;
  let base = floor(q / cell);
  var slope = vec2f(0.0);
  for (var dj = -1; dj <= 1; dj++) {
    for (var di = -1; di <= 1; di++) {
      let c = base + vec2f(f32(di), f32(dj));
      let h = hash2(c);
      let age = fract(t / (0.8 + 0.6 * h.x) + h.y);
      let centre = (c + hash2(c + 17.0)) * cell;
      let dv = q - centre;
      let dist = length(dv);
      let x = (dist - age * 0.35) / 0.02;
      let amp = (1.0 - age) * (1.0 - age);
      slope += (-2.0 * x * exp(-x * x) * amp * 0.25) * dv / max(dist, 1e-4);
    }
  }
  return slope;
}

// Height-field slope (d/dx, d/dy) at plane coordinates q (metres): directional waves with the
// deep-water dispersion omega = sqrt(g k).
// The crests are bent by slowly varying noise (no long straight lines), and gusts make
// patches of rougher and calmer water; both, and a short crossing chop, grow with the wind.
fn wave_slope(q: vec2f, t: f32, amount: f32) -> vec2f {
  var slope = vec2f(0.0);
  let wind = w.waves;
  let gust = mix(1.0, 0.25 + 1.5 * value_noise(q * 0.09 + vec2f(t * 0.05, t * 0.03)), wind);
  // wavelength (m), amplitude (m), direction (radians); the last four: chop (x wind)
  var L = array<f32, 11>(7.3, 4.1, 2.6, 1.55, 0.93, 0.51, 0.29, 1.9, 1.1, 0.67, 0.4);
  var A = array<f32, 11>(0.045, 0.028, 0.017, 0.010, 0.006, 0.0032, 0.0017, 0.012, 0.007, 0.0042, 0.0025);
  var D = array<f32, 11>(0.3, -0.5, 1.1, -1.4, 0.75, 2.2, -2.6, 2.75, -0.15, 1.85, -2.05);
  for (var i = 0; i < 11; i++) {
    let k = 2.0 * PI / L[i];
    let d = vec2f(cos(D[i]), sin(D[i]));
    let fi = f32(i);
    let bend = (value_noise(q * 0.13 + vec2f(fi * 7.31, fi * 3.7)) - 0.5) * 6.0 * (0.3 + wind);
    let phase = k * dot(d, q) - sqrt(9.81 * k) * t + bend;
    let a = select(A[i], A[i] * wind, i >= 7);
    slope += d * (a * amount * gust * k * cos(phase));
  }
  return slope;
}

// Ripples bouncing off objects as the water reaches them: rings travelling away from the
// object outline (the smoothed object marker stands in for the distance to it), faster and
// bigger in wind, fading with the bounce strength.
const BOUNCE_REACH_M = 0.6;  // the marker's blur reaches about this far from an object
const BOUNCE_AMP_M = 0.016;  // ripple height (m) at full strength in a breeze
// Returns the slope it adds (xy) and how much a crest is here (z, 0..1: a light sheen).
fn bounce_slope(hit: vec3f) -> vec3f {
  if (w.flood_grid.w <= 0.0 || w.fx.y <= 0.001) { return vec3f(0.0); }
  let o = object_at(hit, w.flood_grid, w.flood_t, w.flood_b);
  let env = smoothstep(0.01, 0.2, o) * (1.0 - smoothstep(0.7, 0.98, o));
  if (env <= 0.0) { return vec3f(0.0); }
  let e = w.flood_grid.z;
  let ta = w.flood_t.xyz;
  let ba = w.flood_b.xyz;
  let du = object_at(hit + ta * e, w.flood_grid, w.flood_t, w.flood_b) - object_at(hit - ta * e, w.flood_grid, w.flood_t, w.flood_b);
  let dv = object_at(hit + ba * e, w.flood_grid, w.flood_t, w.flood_b) - object_at(hit - ba * e, w.flood_grid, w.flood_t, w.flood_b);
  let grad_d = -(ta * du + ba * dv) / (2.0 * e) * BOUNCE_REACH_M / w.mpu;  // per metre
  let dist = (1.0 - o) * BOUNCE_REACH_M;
  let q = plane_coords(hit);
  let speed = 0.25 + 0.9 * w.waves;  // m/s
  let jitter = (value_noise(q * 1.5) - 0.5) * 3.0;
  var c = 0.0;
  let k1 = 2.0 * PI / 0.22;
  let k2 = 2.0 * PI / 0.37;
  let p1 = k1 * (dist - speed * w.time) + jitter;
  c += k1 * cos(p1);
  c += 0.6 * k2 * cos(k2 * (dist - 0.8 * speed * w.time) - jitter);
  let strength = env * w.fx.y;
  let s3 = grad_d * (BOUNCE_AMP_M * (0.4 + w.waves) * strength * c);
  let b = cross(w.plane.xyz, w.tangent);
  let crest = strength * pow(0.5 + 0.5 * sin(p1), 3.0) * min(1.0, 0.5 + w.waves);
  return vec3f(dot(s3, w.tangent), dot(s3, b), crest);
}

fn plane_coords(x: vec3f) -> vec2f {  // metres along two horizontal axes
  let b = cross(w.plane.xyz, w.tangent);
  return vec2f(dot(x, w.tangent), dot(x, b)) * w.mpu;
}

fn water_normal(hit: vec3f, dist_m: f32, extra: vec2f) -> vec3f {
  let n = w.plane.xyz;
  let b = cross(n, w.tangent);
  // Fewer, gentler ripples far away (they'd only alias).
  let fade = 1.0 / (1.0 + dist_m / 60.0);
  // The waves scaled (lengths and heights, so the same slopes; bigger ones travel slower,
  // t / sqrt(scale)) and turned to the heading: evaluated in the turned frame, turned back.
  let q0 = plane_coords(hit);
  let sc = max(w.wave.x, 1e-3);
  let ch = w.wave.y;
  let sh = w.wave.z;
  let q = vec2f(ch * q0.x + sh * q0.y, -sh * q0.x + ch * q0.y) / sc;
  // Waves 0 is flat calm: the swell fades out over the slider's bottom tenth.
  let calm = min(1.0, w.waves / 0.1);
  let s0 = wave_slope(q, w.time / sqrt(sc), (0.25 + w.waves) * calm * fade);
  var s = vec2f(ch * s0.x - sh * s0.y, sh * s0.x + ch * s0.y);
  if (w.level.z > 0.0) { s += rain_slope(plane_coords(hit), w.time) * w.level.z * fade; }
  s += extra * fade;
  return normalize(n - w.tangent * s.x - b * s.y);
}

fn hash1(c: vec2f) -> f32 {
  return fract(sin(dot(c, vec2f(127.1, 311.7))) * 43758.5453);
}

// Smooth value noise (0..1), two octaves drifting slowly: no stripes or grid, unlike sines.
fn value_noise(q: vec2f) -> f32 {
  let i = floor(q);
  let f = fract(q);
  let u = f * f * (3.0 - 2.0 * f);
  let a = mix(hash1(i), hash1(i + vec2f(1.0, 0.0)), u.x);
  let b = mix(hash1(i + vec2f(0.0, 1.0)), hash1(i + vec2f(1.0, 1.0)), u.x);
  return mix(a, b, u.y);
}

fn wake_noise(hit: vec3f, per_m: f32) -> f32 {
  let q = plane_coords(hit) * per_m + vec2f(w.time * 0.15, -w.time * 0.1);
  return 0.65 * value_noise(q) + 0.35 * value_noise(q * 2.3 + vec2f(5.2, 1.3));
}

// Irregular foam: three octaves of value noise, domain-warped (no blobs in rows).
fn foam_noise(q: vec2f) -> f32 {
  let t = w.time;
  let warp = vec2f(value_noise(q * 0.9 + vec2f(t * 0.05, 3.1)), value_noise(q * 0.9 + vec2f(7.7, -t * 0.04))) - 0.5;
  return 0.55 * value_noise(q * 3.1 + warp * 2.5 + vec2f(t * 0.12, 0.0))
       + 0.30 * value_noise(q * 7.3 - warp * 1.5)
       + 0.15 * value_noise(q * 15.0 + vec2f(0.0, t * 0.2));
}

struct Turbid { sigma: vec3f, col: vec3f };

// Extinction per metre and the colour the water scatters, from clear (0) to muddy (1).
fn turbidity_coeffs() -> Turbid {
  let k = w.turbidity;
  var out: Turbid;
  // Clear water absorbs red first; sediment scatters and absorbs blue, turning it brown.
  out.sigma = mix(vec3f(0.35, 0.12, 0.09), vec3f(2.6, 3.0, 3.6), k) * w.level.w;  // x murk
  out.col = mix(vec3f(0.06, 0.16, 0.18), vec3f(0.36, 0.31, 0.21), k);
  return out;
}

@fragment
fn fs(in: VOut) -> @location(0) vec4f {
  let px = vec2i(in.pos.xy);
  let uv = in.pos.xy / w.viewport;
  let over = textureLoad(over_tex, px, 0);
  let under = textureLoad(under_tex, px, 0);
  let ndc = vec2f(uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0);
  let wp = w.inv_view_proj * vec4f(ndc, 0.5, 1.0);
  let dir = normalize(wp.xyz / wp.w - w.eye);
  let bg = fog_background(w.fog, w.eye, dir, backdrop(w.eye, dir, w.background.rgb));
  let along = max(dot(dir, w.forward), 1e-4);

  let n = w.plane.xyz;
  let denom = dot(n, dir);
  let t = turbidity_coeffs();
  let ground = w.plane.w - w.level.x;  // dot(n, x) on the ground
  let flowing = w.flood_grid.w > 0.0;
  // Surface over the eye: the local water there with a flood map, else the flat level.
  var surface = w.plane.w;
  if (flowing) {
    let at_eye = water_at(w.eye, w.flood_grid, w.flood_t, w.flood_b);
    surface = select(-1e9, ground + at_eye.x, at_eye.y > 0.5);
  }
  var eye_h = dot(n, w.eye) - surface;  // eye height above the water (units)
  if (flowing && eye_h > 0.0) { eye_h = dot(n, w.eye) - w.plane.w; }  // refined per ray below

  // Outside a dome that holds the water the camera is never in it: the water inside shows from
  // above or, through the dome's side, in cross-section (from half a foot under the ground).
  // Everywhere else the splats come fogged by the water in front of each (fs_water); here the
  // fog is worked out per pixel, since the view can enter the water through the dome's side.
  let outside_dome = w.fx.w > 0.5;  // (or outside the water's area: the same, by its side)
  if (outside_dome) {
    let cut_on = (u32(w.sky_k.w + 0.5) & 2u) != 0u;
    let bottom = select(ground - WATER_BOTTOM_M / w.mpu, w.sky_cut.w, cut_on);
    let side = side_entry(w.eye, dir, n, w.plane.w, bottom);
    if (side.x > 0.5) {
      let uz_side = depth_at(under_depth, px);
      let t_under = select(1e9, uz_side / along, uz_side < NO_DEPTH);
      let path_m = clamp((min(t_under, side.z) - side.y) * w.mpu, 0.0, 1e4);
      let tr = exp(-t.sigma * path_m);
      let seen = under.rgb + (1.0 - under.a) * bg;
      return vec4f(over.rgb + (1.0 - over.a) * (seen * tr + t.col * (1.0 - tr)), 1.0);
    }
    if (eye_h <= 0.0) { return vec4f(over.rgb + (1.0 - over.a) * (under.rgb + (1.0 - under.a) * bg), 1.0); }
  }

  if (eye_h < 0.0) {
    // Under water: "over" is what's in the water with the camera (already faded with each
    // splat's distance), "under" what's above the surface, seen through it (or open water).
    let near = over.rgb;
    var far = t.col;
    if (denom > 0.0) {
      let far_t = exp(-t.sigma * clamp(-eye_h / denom * w.mpu, 0.0, 1e4));
      far = (under.rgb + (1.0 - under.a) * backdrop(w.eye, dir, sky(dir))) * far_t + t.col * (1.0 - far_t);
    }
    let plain = over.rgb + (1.0 - over.a) * (under.rgb + (1.0 - under.a) * bg);
    return vec4f(mix(plain, near + (1.0 - over.a) * far, w.fx.x), 1.0);
  }

  if (denom >= -1e-5) {  // looking up: the ray never reaches the water
    return vec4f(over.rgb + (1.0 - over.a) * bg, 1.0);
  }
  var th = -eye_h / denom;
  var hit = w.eye + dir * th;
  // Where water hasn't got to (walled off, or not there yet): dry ground, softly edged (and
  // fogged at its own depth).
  let uz = depth_at(under_depth, px);
  let dry_tr = select(1.0, fog_tr(w.fog, w.eye, w.eye + dir * (uz / along)), uz < NO_DEPTH);
  let dry = under.rgb * dry_tr + w.fog.c.rgb * (1.0 - dry_tr) * under.a + (1.0 - under.a) * bg;
  var flooded = 1.0;
  var surf_plane = w.plane.w;  // the water surface here: dot(n, x) = surf_plane
  if (flowing) {
    // The surface isn't flat while water flows in: from the top level, step to the local
    // surface where the ray lands, a few times (like parallax mapping).
    for (var k = 0; k < 3; k++) {
      let here = water_at(hit, w.flood_grid, w.flood_t, w.flood_b);
      flooded = here.y;
      if (here.x < -1e8) { break; }
      let level_here = ground + here.x;
      if (dot(n, w.eye) <= level_here) { break; }
      th = (level_here - dot(n, w.eye)) / denom;
      hit = w.eye + dir * th;
      surf_plane = level_here;
    }
  }
  // Optionally no flood water beyond the skydome (its image shows there instead).
  if (w.sky_k.y > 0.5 && w.sky_k.z > 0.5 && length(hit - w.sky_c.xyz) > w.sky_c.w) { flooded = 0.0; }
  // ...or below the section cut.
  if (w.sky_k.y > 0.5 && (u32(w.sky_k.w + 0.5) & 2u) != 0u && dot(n, hit) < w.sky_cut.w) { flooded = 0.0; }
  // ...or outside the water's area, fading out across its soft edge.
  flooded *= water_area(hit);
  if (flooded <= 0.0 || w.fx.x <= 0.0) { return vec4f(over.rgb + (1.0 - over.a) * dry, 1.0); }
  let dist_m = th * w.mpu;
  let bounce = bounce_slope(hit);
  let nw = water_normal(hit, dist_m, bounce.xy);
  // Ray length under water (a splat straddling the surface can start just in front of it).
  let under_m = max(select(1e4, (uz / along - th) * w.mpu, uz < NO_DEPTH), 0.0);
  let depth_m = under_m * (-denom);  // bottom below the surface

  // Refraction: the bottom through the wavy surface.
  let b = cross(n, w.tangent);
  let ruv = uv + vec2f(dot(nw, w.tangent), dot(nw, b)) * 0.045 * clamp(depth_m, 0.0, 1.0);
  let refr = textureSampleLevel(under_tex, samp, ruv, 0.0);
  // The bottom layer comes fogged by the water above each splat (fs_water), except from
  // outside a dome (see above); whatever it doesn't cover is deep water.
  var through = refr.rgb + t.col * (1.0 - refr.a);
  if (outside_dome) {
    let trans = exp(-t.sigma * min(under_m, 1e4));
    through = refr.rgb * trans + t.col * (1.0 - trans * refr.a);
  }

  // Reflection of what's above the water.
  let r = reflect(dir, nw);
  let rr = normalize(r + n * max(0.0, -dot(r, n) + 0.02));  // never into the water
  let sky_r = backdrop(hit, rr, sky(rr));
  var mirror_uv = uv + vec2f(dot(nw, w.tangent), dot(nw, b)) * 0.03;
  // The mirror image is of the top level; water lower down (a basin still filling) mirrors
  // everything 2 x that much lower: shift by the screen offset of that, at this point's depth.
  let lift = 2.0 * max(w.plane.w - surf_plane, 0.0);
  if (lift > 0.0) {
    let a = w.view_proj * vec4f(hit, 1.0);
    let c = w.view_proj * vec4f(hit + n * lift, 1.0);
    if (a.w > 0.0 && c.w > 0.0) { mirror_uv += (c.xy / c.w - a.xy / a.w) * vec2f(0.5, -0.5); }
  }
  let mirrored = textureSampleLevel(reflect_tex, samp, mirror_uv, 0.0);
  let refl = mirrored.rgb + (1.0 - mirrored.a) * sky_r;
  let cos_t = clamp(dot(-dir, nw), 0.0, 1.0);
  let fresnel = 0.02 + 0.98 * pow(1.0 - cos_t, 5.0);
  var water = mix(through, refl, fresnel);

  // Sun glint.
  let sun = normalize(n * 0.72 + w.tangent * 0.55 + b * 0.42);
  let hv = normalize(sun - dir);
  water += vec3f(1.0, 0.96, 0.88) * pow(max(dot(nw, hv), 0.0), 420.0) * (0.6 + 1.6 * w.waves) * w.wave.w;

  // Shoreline foam where the water is shallow: sparse irregular flecks along a ragged band,
  // close to the water's own shadowed colour and faint while the flood is just arriving
  // (w.fx.z: settle), whiter and fuller once it is established.
  let qf = plane_coords(hit);
  let foam_w = (0.12 + 0.25 * w.waves) * (0.6 + 0.8 * value_noise(qf * 0.7 + vec2f(11.0, 5.0)));
  let shallow = (1.0 - smoothstep(0.0, foam_w, depth_m)) * refr.a;
  let settle = w.fx.z;
  let foam_col = mix(t.col * 0.7, vec3f(0.86, 0.87, 0.84), 0.25 + 0.5 * settle);
  water = mix(water, foam_col, shallow * smoothstep(0.55, 0.85, foam_noise(qf)) * (0.12 + 0.43 * settle));

  // Wakes: churned foam around objects while the water moves (strength w.level.y fades in
  // as the level changes and slowly out after). The object marker is smoothed (flow.ts) and
  // warped by moving noise, so the ring follows outlines rather than grid cells.
  if (flowing && w.level.y > 0.001) {
    let o = object_at(hit, w.flood_grid, w.flood_t, w.flood_b);
    let warp = (wake_noise(hit, 2.5) - 0.5) * 0.4 + (wake_noise(hit, 7.0) - 0.5) * 0.2;
    let f = o + warp;
    // (only near an object: the warp alone mustn't put foam on open water)
    let ring = smoothstep(0.06, 0.28, f) * (1.0 - smoothstep(0.45, 0.75, f)) * smoothstep(0.0, 0.1, o);
    let froth = smoothstep(0.35, 0.75, wake_noise(hit, 11.0));
    water = mix(water, vec3f(0.84, 0.85, 0.82), ring * (0.35 + 0.65 * froth) * w.level.y);
  }

  // Ripples bouncing off objects catch the light on their crests.
  water = mix(water, sky(n) * 0.95, bounce.z * 0.22);

  // Floating debris (drawn by debris.ts into its own layer, on the water's surface).
  let floating = textureLoad(debris_tex, px, 0);
  water = floating.rgb + (1.0 - floating.a) * water;

  // Haze far away.
  water = mix(water, sky(vec3f(0.0)) * 0.9 + t.col * 0.1, 1.0 - exp(-dist_m / (w.far_m * (1.0 - 0.6 * w.level.z))));
  // The fog between the eye and the surface (over everything seen in or through the water).
  water = mix(w.fog.c.rgb, water, fog_tr(w.fog, w.eye, hit));
  return vec4f(over.rgb + (1.0 - over.a) * mix(dry, water, flooded * w.fx.x), 1.0);
}
`,Lt=16,Rt=class e{count;records;positions;alpha;importance;flags;stretch;longAxis;shDegree;sh;shStrideWords;shScales;fullCount;lod;sortedImportance=null;constructor(e){let t=new TextDecoder().decode(new Uint8Array(e,0,4)),[n,r,i]=new Uint32Array(e,4,3);if(t!==`SFSV`||n<1||n>4)throw Error(`unsupported splat stream (${t} v${n})`);let a=Lt+r*32,o=a+(n>=2?r:0);if(e.byteLength<o)throw Error(`truncated splat stream`);this.count=r,this.records=e.slice(Lt,a),this.flags=n>=2?new Uint8Array(e.slice(a,o)):new Uint8Array(r),this.shDegree=n>=3?Math.min(i,3):0;let s=(this.shDegree+1)**2-1;this.shStrideWords=this.shDegree?Math.ceil((3+3*s)/4):0,this.shScales=new Float32Array(4),this.sh=new ArrayBuffer(0);let c=n>=3?o+(4-o%4)%4:o;if(this.shDegree){let t=c;if(c=t+16+r*this.shStrideWords*4,e.byteLength<c)throw Error(`truncated splat stream`);new Float32Array(e.slice(t,t+16)).forEach((e,t)=>this.shScales[t]=e*127),this.sh=e.slice(t+16,c)}this.lod=n>=4?zt(e,c):Bt(r),this.fullCount=this.lod.levels>1?this.lod.levelStart[1]:r;let l=new Float32Array(this.records),u=new Uint8Array(this.records);this.positions=new Float32Array(r*3),this.alpha=new Float32Array(r),this.importance=new Float32Array(r),this.stretch=new Float32Array(r),this.longAxis=new Float32Array(r);for(let e=0;e<r;e++){let t=e*8;this.positions[e*3]=l[t],this.positions[e*3+1]=l[t+1],this.positions[e*3+2]=l[t+2];let n=u[e*32+31]/255;this.alpha[e]=n,this.importance[e]=n*Math.cbrt(l[t+3]*l[t+4]*l[t+5])**2;let r=l[t+3],i=l[t+4],a=l[t+5],o=Math.max(r,i,a),s=r+i+a-o-Math.min(r,i,a);this.stretch[e]=o/Math.max(s,1e-12),this.longAxis[e]=o}}static fromParts(t){return Object.assign(Object.create(e.prototype),t,{sortedImportance:null})}importanceThreshold(e){if(e<=0)return 0;this.sortedImportance||=Float32Array.from(this.importance.subarray(0,this.fullCount)).sort();let t=Math.min(this.fullCount-1,Math.floor(e*this.fullCount));return this.sortedImportance[t]}};function zt(e,t){let[n,r]=new Uint32Array(e.slice(t,t+8)),i=t+8,a=t=>{let n=e.slice(i,i+t*4);if(i+=t*4,n.byteLength!==t*4)throw Error(`truncated splat stream`);return n};return{levels:n,chunks:r,levelStart:new Uint32Array(a(n)),voxel:new Float32Array(a(n)),ranges:new Uint32Array(a(r*n*2)),spheres:new Float32Array(a(r*4))}}function Bt(e){return{levels:1,chunks:1,levelStart:new Uint32Array([0]),voxel:new Float32Array([0]),ranges:new Uint32Array([0,e]),spheres:new Float32Array([0,0,0,1/0])}}var Vt=e=>e.scale.map(t=>t*(e.calibration??1));function Ht(e){let t=Math.hypot(e[0],e[1],e[2],e[3])||1,[n,r,i,a]=e.map(e=>e/t);return[1-2*(i*i+a*a),2*(r*i-n*a),2*(r*a+n*i),2*(r*i+n*a),1-2*(r*r+a*a),2*(i*a-n*r),2*(r*a-n*i),2*(i*a+n*r),1-2*(r*r+i*i)]}function Ut(e,t){let[n,r,i,a]=e,[o,s,c,l]=t;return[n*o-r*s-i*c-a*l,n*s+r*o+i*l-a*c,n*c-r*l+i*o+a*s,n*l+r*c-i*s+a*o]}function Wt(e){let t=e[0]+e[4]+e[8],n;if(t>0){let r=Math.sqrt(t+1)*2;n=[.25*r,(e[7]-e[5])/r,(e[2]-e[6])/r,(e[3]-e[1])/r]}else if(e[0]>e[4]&&e[0]>e[8]){let t=Math.sqrt(1+e[0]-e[4]-e[8])*2;n=[(e[7]-e[5])/t,.25*t,(e[1]+e[3])/t,(e[2]+e[6])/t]}else if(e[4]>e[8]){let t=Math.sqrt(1+e[4]-e[0]-e[8])*2;n=[(e[2]-e[6])/t,(e[1]+e[3])/t,.25*t,(e[5]+e[7])/t]}else{let t=Math.sqrt(1+e[8]-e[0]-e[4])*2;n=[(e[3]-e[1])/t,(e[2]+e[6])/t,(e[5]+e[7])/t,.25*t]}let r=Math.hypot(...n)*(n[0]<0?-1:1);return n.map(e=>e/r)}function Gt(e){let t=e.slice(),n=[1,0,0,0,1,0,0,0,1];for(let e=0;e<12&&!(t[1]*t[1]+t[2]*t[2]+t[5]*t[5]<1e-30);e++)for(let[e,r]of[[0,1],[0,2],[1,2]]){let i=t[e*3+r];if(Math.abs(i)<1e-30)continue;let a=(t[r*3+r]-t[e*3+e])/(2*i),o=Math.sign(a||1)/(Math.abs(a)+Math.sqrt(a*a+1)),s=1/Math.sqrt(o*o+1),c=o*s;for(let n=0;n<3;n++){let i=t[n*3+e],a=t[n*3+r];t[n*3+e]=s*i-c*a,t[n*3+r]=c*i+s*a}for(let n=0;n<3;n++){let i=t[e*3+n],a=t[r*3+n];t[e*3+n]=s*i-c*a,t[r*3+n]=c*i+s*a}for(let t=0;t<3;t++){let i=n[t*3+e],a=n[t*3+r];n[t*3+e]=s*i-c*a,n[t*3+r]=c*i+s*a}}return{values:[t[0],t[4],t[8]],vectors:n}}function Kt(e,t,n,r,i,a=null){let o=Ht(t.rotation),[s,c,l]=Vt(t),u=[o[0]*s,o[1]*c,o[2]*l,o[3]*s,o[4]*c,o[5]*l,o[6]*s,o[7]*c,o[8]*l],d=Math.abs(Math.abs(s)-Math.abs(c))<1e-6*Math.abs(s)&&Math.abs(Math.abs(c)-Math.abs(l))<1e-6*Math.abs(c),f=s*c*l,p=Wt(o),m=Math.abs(s)||1e-12,h=a??e.records,g=new Float32Array(h),_=new Int8Array(h),v=new Float32Array(n),y=new Int8Array(n),b=new Uint8Array(n),x=new Uint8Array(h),[S,C,w]=t.pivot,[T,E,D]=t.position;for(let t=0;t<e.count;t++){let e=t*8,n=(i+t)*8,a=g[e]-S,o=g[e+1]-C,s=g[e+2]-w,c=u[0]*a+u[1]*o+u[2]*s+T,l=u[3]*a+u[4]*o+u[5]*s+E,h=u[6]*a+u[7]*o+u[8]*s+D;v[n]=c,v[n+1]=l,v[n+2]=h,r[(i+t)*3]=c,r[(i+t)*3+1]=l,r[(i+t)*3+2]=h;let O=t*32+24,k=[_[O]/127,_[O+1]/127,_[O+2]/127,_[O+3]/127],A=g[e+3],j=g[e+4],M=g[e+5],ee;if(d&&f>0)ee=Ut(p,k),A*=m,j*=m,M*=m;else{let e=Ht(k),t=[A,j,M],n=[0,0,0,0,0,0,0,0,0];for(let r=0;r<3;r++)for(let i=0;i<3;i++)n[r*3+i]=(u[r*3]*e[i]+u[r*3+1]*e[3+i]+u[r*3+2]*e[6+i])*t[i];let r=[0,0,0,0,0,0,0,0,0];for(let e=0;e<3;e++)for(let t=0;t<3;t++)r[e*3+t]=n[e*3]*n[t*3]+n[e*3+1]*n[t*3+1]+n[e*3+2]*n[t*3+2];let{values:i,vectors:a}=Gt(r);if(a[0]*(a[4]*a[8]-a[5]*a[7])-a[1]*(a[3]*a[8]-a[5]*a[6])+a[2]*(a[3]*a[7]-a[4]*a[6])<0)for(let e of[0,3,6])a[e]=-a[e];ee=Wt(a),A=Math.sqrt(Math.max(i[0],1e-30)),j=Math.sqrt(Math.max(i[1],1e-30)),M=Math.sqrt(Math.max(i[2],1e-30))}v[n+3]=A,v[n+4]=j,v[n+5]=M;let te=(i+t)*32+24;for(let e=0;e<4;e++)y[te+e]=Math.max(-127,Math.min(127,Math.round(ee[e]*127)));for(let e=4;e<8;e++)b[te+e]=x[O+e]}}function qt(e,t,n,r){if(r===0)return[0,0,0,0];let i=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0];for(let t=n;t<n+r;t++)for(let n=0;n<3;n++){let r=e[t*3+n];r<i[n]&&(i[n]=r),r>a[n]&&(a[n]=r)}let o=new Float32Array(t),s=0;for(let e=n;e<n+r;e++)s=Math.max(s,o[e*8+3],o[e*8+4],o[e*8+5]);return[...[0,1,2].map(e=>(i[e]+a[e])/2),Math.hypot(a[0]-i[0],a[1]-i[1],a[2]-i[2])/2+3*s]}function L(e,t){let n=e.fullCount,r=t.reduce((e,t)=>e+t.data.count,0),i=e.count+r,a=new ArrayBuffer(i*32),o=new Uint8Array(a);o.set(new Uint8Array(e.records,0,n*32),0),o.set(new Uint8Array(e.records,n*32),(n+r)*32);let s=new Float32Array(i*3);s.set(e.positions.subarray(0,n*3),0),s.set(e.positions.subarray(n*3),(n+r)*3);let c=[],l=n;for(let e of t)Kt(e.data,e.placement,a,s,l,e.posed),c.push([l,e.data.count]),l+=e.data.count;let u=(e,a,o)=>{let s=e(i);return s.set(a.subarray(0,n),0),s.set(a.subarray(n),n+r),t.forEach((e,t)=>s.set(o(e),c[t][0])),s},d=u(e=>new Float32Array(e),e.alpha,e=>e.data.alpha),f=u(e=>new Float32Array(e),e.importance,e=>e.data.importance),p=u(e=>new Float32Array(e),e.stretch,e=>e.data.stretch),m=u(e=>new Float32Array(e),e.longAxis,e=>e.data.longAxis),h=u(e=>new Uint8Array(e),e.flags,e=>new Uint8Array(e.data.count)),g=e.shStrideWords*4,_=e.sh;if(g){_=new ArrayBuffer(i*g);let t=new Uint8Array(_);t.set(new Uint8Array(e.sh,0,n*g),0),t.set(new Uint8Array(e.sh,n*g),(n+r)*g)}let v=e.lod.levels,y=e.lod.chunks,b=t.length,x=Uint32Array.from(e.lod.levelStart,(e,t)=>t===0?e:e+r),S=new Uint32Array((y+b)*v*2);S.set(e.lod.ranges,0);let C=new Float32Array((y+b)*4);C.set(e.lod.spheres,0),t.forEach((e,t)=>{S[(y+t)*v*2]=c[t][0],S[(y+t)*v*2+1]=c[t][1],C.set(qt(s,a,c[t][0],c[t][1]),(y+t)*4)});let w={levels:v,chunks:y+b,levelStart:x,voxel:e.lod.voxel,ranges:S,spheres:C};return{data:Rt.fromParts({count:i,records:a,positions:s,alpha:d,importance:f,flags:h,stretch:p,longAxis:m,shDegree:e.shDegree,sh:_,shStrideWords:e.shStrideWords,shScales:e.shScales,fullCount:n+r,lod:w}),sceneFull:n,objectCount:r,ranges:c,firstChunk:y}}function Jt(e,t,n){let[r,i]=e.ranges[t];Kt(n.data,n.placement,e.data.records,e.data.positions,r,n.posed);let a=qt(e.data.positions,e.data.records,r,i);return e.data.lod.spheres.set(a,(e.firstChunk+t)*4),a}function Yt(e,t,n,r=!1){let i=e=>e.visible&&!(r&&e.mesh);if(!t&&n.every(i))return null;let a=e.sceneFull,o=e.objectCount,s=new Uint8Array(e.data.count);return t?(s.set(t.subarray(0,a),0),s.set(t.subarray(a),a+o)):s.fill(1),n.forEach((t,n)=>s.fill(+!!i(t),e.ranges[n][0],e.ranges[n][0]+e.ranges[n][1])),s}function Xt(e,t){return t<e.sceneFull||t>=e.sceneFull+e.objectCount?-1:e.ranges.findIndex(([e,n])=>t>=e&&t<e+n)}async function Zt(e){let t=new TextDecoder().decode(new Uint8Array(e,0,4)),[n,r]=new Uint32Array(e.slice(4,12));if(t!==`SFMS`||n!==1)throw Error(`not a mesh file this viewer reads`);let i=JSON.parse(new TextDecoder().decode(new Uint8Array(e,12,r))),a=i.vertices,o=i.indices,s=i.offsets,c=await Promise.all(i.textures.map(t=>createImageBitmap(new Blob([new Uint8Array(e,t.offset,t.length)],{type:t.mime}),{colorSpaceConversion:`none`,premultiplyAlpha:`none`})));return{vertexCount:a,positions:new Float32Array(e.slice(s.positions,s.positions+a*12)),normals:new Float32Array(e.slice(s.normals,s.normals+a*12)),uvs:new Float32Array(e.slice(s.uvs,s.uvs+a*8)),colors:new Uint8Array(e.slice(s.colors,s.colors+a*4)),indices:new Uint32Array(e.slice(s.indices,s.indices+o*4)),parts:i.parts,materials:i.materials,textures:c,animated:i.animated}}function Qt(e,t){let n=new Float32Array(e.length);for(let r=0;r<t.length;r+=3){let i=t[r]*3,a=t[r+1]*3,o=t[r+2]*3,s=e[a]-e[i],c=e[a+1]-e[i+1],l=e[a+2]-e[i+2],u=e[o]-e[i],d=e[o+1]-e[i+1],f=e[o+2]-e[i+2],p=c*f-l*d,m=l*u-s*f,h=s*d-c*u;for(let e of[i,a,o])n[e]+=p,n[e+1]+=m,n[e+2]+=h}for(let e=0;e<n.length;e+=3){let t=Math.hypot(n[e],n[e+1],n[e+2]);t>1e-30?(n[e]/=t,n[e+1]/=t,n[e+2]/=t):n[e+2]=1}return n}function $t(e){let t=Ht(e.rotation),n=Vt(e),r=new Float32Array(16),i=new Float32Array(16);for(let a=0;a<3;a++){for(let e=0;e<3;e++)r[e*4+a]=t[a*3+e]*n[e],i[e*4+a]=t[a*3+e]/(Math.abs(n[e])<1e-12?1e-12:n[e]);r[12+a]=e.position[a]-(t[a*3]*n[0]*e.pivot[0]+t[a*3+1]*n[1]*e.pivot[1]+t[a*3+2]*n[2]*e.pivot[2])}return r[15]=1,i[15]=1,{model:r,normal:i}}function en(e,t,n,r,i){let a=Ht(n.rotation),o=Vt(n),s=(e,t)=>[0,1,2].map(r=>{let i=t?[e[0]-n.position[0],e[1]-n.position[1],e[2]-n.position[2]]:e;return(a[r]*i[0]+a[3+r]*i[1]+a[6+r]*i[2])/(Math.abs(o[r])<1e-12?1e-12:o[r])+(t?n.pivot[r]:0)}),c=s(r,!0),l=s(i,!1),u=1/0;for(let n=0;n<t.length;n+=3){let r=t[n]*3,i=t[n+1]*3,a=t[n+2]*3,o=e[i]-e[r],s=e[i+1]-e[r+1],d=e[i+2]-e[r+2],f=e[a]-e[r],p=e[a+1]-e[r+1],m=e[a+2]-e[r+2],h=l[1]*m-l[2]*p,g=l[2]*f-l[0]*m,_=l[0]*p-l[1]*f,v=o*h+s*g+d*_;if(Math.abs(v)<1e-20)continue;let y=1/v,b=c[0]-e[r],x=c[1]-e[r+1],S=c[2]-e[r+2],C=(b*h+x*g+S*_)*y;if(C<0||C>1)continue;let w=x*d-S*s,T=S*o-b*d,E=b*s-x*o,D=(l[0]*w+l[1]*T+l[2]*E)*y;if(D<0||C+D>1)continue;let O=(f*w+p*T+m*E)*y;O>0&&O<u&&(u=O)}return u<1/0?u:null}var tn=192,nn=`
${_e}
${st}
@group(0) @binding(0) var<uniform> u: Uniforms;
@group(0) @binding(1) var<storage, read> flow: array<vec4f>;
@group(0) @binding(2) var<uniform> pp: P;
@group(0) @binding(3) var shadow_maps: texture_2d_array<f32>;

struct M {
  model: mat4x4f,
  normal: mat4x4f,  // inverse transpose of the model's 3x3
  color: vec4f,     // base colour factor
  k: vec4f,         // x: alpha cutoff (0: solid), y: 1 with a texture
  up: vec4f,        // the scene's up (unlit shading)
};
@group(1) @binding(0) var<uniform> m: M;
@group(1) @binding(1) var tex: texture_2d<f32>;
@group(1) @binding(2) var smp: sampler;

const UNLIT_LOW = 0.45;

struct VIn {
  @location(0) pos: vec3f,
  @location(1) nrm: vec3f,
  @location(2) uv: vec2f,
  @location(3) col: vec4f,
};
struct VOut {
  @builtin(position) pos: vec4f,
  @location(0) world: vec3f,
  @location(1) nrm: vec3f,
  @location(2) uv: vec2f,
  @location(3) col: vec4f,
};

@vertex
fn vs(v: VIn) -> VOut {
  let w = m.model * vec4f(v.pos, 1.0);
  var out: VOut;
  out.pos = u.proj * (u.view * w);
  out.world = w.xyz;
  out.nrm = (m.normal * vec4f(v.nrm, 0.0)).xyz;
  out.uv = v.uv;
  out.col = v.col;
  return out;
}

// Base colour (alpha-tested), lit and wet: the surface's colour before fog.
fn shade(in: VOut) -> vec3f {
  var base = m.color * in.col;
  let texel = textureSample(tex, smp, in.uv);
  if (m.k.y > 0.5) { base *= texel; }
  if (m.k.x > 0.0 && base.a < m.k.x) { discard; }
  let p = in.world;
  var n = normalize(in.nrm);
  if (dot(n, u.eye - p) < 0.0) { n = -n; }
  var light: vec3f;
  if (u.rain.w > 0.5) {
    light = vec3f(pp.globals.y);
    if (pp.sky.w > 0.5) { light += mix(pp.ground.rgb, pp.sky.rgb, 0.5 + 0.5 * dot(n, pp.up.xyz)); }
    let size = 2.0 * max(-(u.view * vec4f(p, 1.0)).z, 0.0) / u.focal.y;  // two pixels there
    for (var li = 0; li < i32(pp.globals.z); li++) {
      let l = pp.lights[li];
      let reach = light_reach(l, p);
      let diffuse = max(dot(n, reach.xyz), 0.0);
      if (reach.w * diffuse <= 1e-5) { continue; }
      let layer = shadow_layer(l, p);
      let vis = select(1.0, visibility(l, layer, p, size), layer >= 0);
      light += l.color.rgb * reach.w * diffuse * vis;
    }
    light *= pp.globals.x;
  } else {
    light = vec3f(UNLIT_LOW + (1.0 - UNLIT_LOW) * (0.5 + 0.5 * dot(n, m.up.xyz)));
  }
  var rgb = base.rgb * light;
  if (u.wet.z > 0.0) {  // as the splats (splat-shader.ts vs)
    let h = dot(u.wet_plane.xyz, p) - u.wet_plane.w;
    var line = u.wet.x;
    if (u.flood_grid.w > 0.0) { line = water_at(p, u.flood_grid, u.flood_t, u.flood_b).z; }
    let wetness = max(u.wet.z * (1.0 - smoothstep(line, line + u.wet.y, h)) * water_area(p), u.rain.x * 0.45);
    rgb = mix(rgb, pow(clamp(rgb, vec3f(0.0), vec3f(1.0)), vec3f(1.4)) * 0.74, wetness);
  }
  return rgb;
}

fn fogged(rgb: vec3f, start: vec3f, p: vec3f) -> vec3f {
  if (u.fog.c.w <= 0.0) { return rgb; }
  return mix(u.fog.c.rgb, rgb, fog_tr(u.fog, start, p));
}

fn view_depth(p: vec3f) -> f32 {
  return -(u.view * vec4f(p, 1.0)).z;
}

@fragment
fn fs(in: VOut) -> @location(0) vec4f {
  return vec4f(fogged(shade(in), u.eye, in.world), 1.0);
}

struct DepthOut {
  @location(0) color: vec4f,
  @location(1) depth: vec4f,  // as splat-shader.ts fs_depth: (depth, 1) solid
};

@fragment
fn fs_depth(in: VOut) -> DepthOut {
  var out: DepthOut;
  out.color = vec4f(fogged(shade(in), u.eye, in.world), 1.0);
  out.depth = vec4f(view_depth(in.world), 1.0, 0.0, 1.0);
  return out;
}

struct WaterOut {
  @location(0) over: vec4f,
  @location(1) under: vec4f,
  @location(2) over_depth: vec4f,
  @location(3) under_depth: vec4f,
};

// Which side of the water a point is on, as splat-shader.ts decides it for splat centres:
// x: 1 beyond the surface from the camera, y: the surface there (dot(n, x); -1e30 none).
fn water_side(p: vec3f) -> vec2f {
  var side = dot(u.wet_plane.xyz, p) - u.wet_plane.w - u.wet.w;
  var eye_side = dot(u.wet_plane.xyz, u.eye) - u.wet_plane.w - u.wet.w;
  var surf = u.wet_plane.w + u.wet.w;
  if (u.flood_grid.w > 0.0) {
    let here = water_at(p, u.flood_grid, u.flood_t, u.flood_b);
    side = select(1.0, dot(u.wet_plane.xyz, p) - u.wet_plane.w - here.x, here.y > 0.0);
    surf = select(-1e30, u.wet_plane.w + here.x, here.y > 0.0);
    let at_eye = water_at(u.eye, u.flood_grid, u.flood_t, u.flood_b);
    eye_side = select(1.0, dot(u.wet_plane.xyz, u.eye) - u.wet_plane.w - at_eye.x, at_eye.y > 0.5);
  }
  if (u.rain.z > 0.5) { eye_side = 1.0; }
  return vec2f(select(0.0, 1.0, (side < 0.0) != (eye_side < 0.0)), surf);
}

@fragment
fn fs_water(in: VOut) -> WaterOut {
  var rgb = shade(in);
  let p = in.world;
  let ws = water_side(p);
  let under = ws.x > 0.5;
  if (!under || u.fog.e.z < 0.5) { rgb = fogged(rgb, u.eye, p); }
  // Seen through the water: its fog over the part of the ray under the surface (fs_water).
  let below = ws.y - dot(u.wet_plane.xyz, p);
  if (under && u.fog_sigma.w > 0.0 && below > 0.0 && u.rain.z < 0.5) {
    let seg = length(p - u.eye);
    let above = dot(u.wet_plane.xyz, u.eye) - ws.y;
    let path_m = select(seg * below / (above + below), seg, above <= 0.0) * u.fog_col.w;
    let tr = exp(-u.fog_sigma.xyz * min(path_m, 1e4));
    rgb = mix(rgb, rgb * tr + u.fog_col.rgb * (1.0 - tr), u.fog_sigma.w * water_area(p));
  }
  let d = vec4f(view_depth(p), 1.0, 0.0, 1.0);
  var out: WaterOut;
  if (under) { out.under = vec4f(rgb, 1.0); out.under_depth = d; }
  else { out.over = vec4f(rgb, 1.0); out.over_depth = d; }
  return out;
}

// The reflection (u is the mirror pass's: mirrored view, mirrored eye): what's above the water,
// fogged from where the reflected ray leaves the water.
@fragment
fn fs_mirror(in: VOut) -> @location(0) vec4f {
  let rgb = shade(in);
  let p = in.world;
  let lvl = u.wet_plane.w + u.wet.w;
  if (dot(u.wet_plane.xyz, p) < lvl) { discard; }
  let k = clamp((lvl - dot(u.wet_plane.xyz, u.eye)) / max(dot(u.wet_plane.xyz, p - u.eye), 1e-9), 0.0, 1.0);
  return vec4f(fogged(rgb, u.eye + (p - u.eye) * k, p), 1.0);
}
`,rn={format:`depth24plus`,depthWriteEnabled:!0,depthCompare:`less`},an=class{device;layout0;layout1;pipelines;sampler;white;assets=new Map;objects=new Map;order=[];up=[0,1,0];constructor(e,t){this.device=e;let n=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT;this.layout0=e.createBindGroupLayout({entries:[{binding:0,visibility:n,buffer:{type:`uniform`}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:`read-only-storage`}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:`uniform`}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:`unfilterable-float`,viewDimension:`2d-array`}}]}),this.layout1=e.createBindGroupLayout({entries:[{binding:0,visibility:n,buffer:{type:`uniform`}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:`float`}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:`filtering`}}]});let r=e.createPipelineLayout({bindGroupLayouts:[this.layout0,this.layout1]}),i=e.createShaderModule({code:nn}),a={module:i,entryPoint:`vs`,buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:`float32x3`}]},{arrayStride:12,attributes:[{shaderLocation:1,offset:0,format:`float32x3`}]},{arrayStride:8,attributes:[{shaderLocation:2,offset:0,format:`float32x2`}]},{arrayStride:4,attributes:[{shaderLocation:3,offset:0,format:`unorm8x4`}]}]},o={color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`}},s=(t,n)=>e.createRenderPipeline({layout:r,vertex:a,fragment:{module:i,entryPoint:t,targets:n},primitive:{topology:`triangle-list`,cullMode:`none`},depthStencil:rn});this.pipelines={plain:s(`fs`,[{format:t}]),depth:s(`fs_depth`,[{format:t},{format:`rgba16float`}]),water:s(`fs_water`,[{format:`rgba8unorm`,blend:o},{format:`rgba8unorm`,blend:o},{format:`rgba16float`,blend:o},{format:`rgba16float`,blend:o}]),mirror:s(`fs_mirror`,[{format:`rgba8unorm`}])},this.sampler=e.createSampler({magFilter:`linear`,minFilter:`linear`,mipmapFilter:`linear`,addressModeU:`repeat`,addressModeV:`repeat`}),this.white=e.createTexture({size:[1,1],format:`rgba8unorm`,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),e.queue.writeTexture({texture:this.white},new Uint8Array([255,255,255,255]),{},[1,1])}get count(){return this.order.length}setUp(e){let t=Math.hypot(...e)||1;this.up=[e[0]/t,e[1]/t,e[2]/t];for(let e of this.objects.values())this.writeUniforms(e)}set(e){let t=new Set(e.map(e=>e.key));for(let[n,r]of this.objects)(!t.has(n)||e.find(e=>e.key===n).mesh!==r.mesh)&&(this.destroyObject(r),this.objects.delete(n));for(let t of e){let e=this.objects.get(t.key);if(e||(e=this.createObject(t.mesh),this.objects.set(t.key,e)),e.pose!==t.pose){e.pose=t.pose;let n=t.pose??t.mesh.positions;this.device.queue.writeBuffer(e.positions,0,n),this.device.queue.writeBuffer(e.normals,0,t.pose?Qt(t.pose,t.mesh.indices):t.mesh.normals)}e.placement!==t.placement&&(e.placement=t.placement,this.writeUniforms(e))}let n=new Set([...this.objects.values()].map(e=>e.mesh));for(let[e,t]of this.assets)n.has(e)||(t.uvs.destroy(),t.colors.destroy(),t.indices.destroy(),t.textures.forEach(e=>e.destroy()),this.assets.delete(e));this.order=e.map(e=>e.key)}group(e,t,n,r){return this.device.createBindGroup({layout:this.layout0,entries:[{binding:0,resource:{buffer:e}},{binding:1,resource:{buffer:t}},{binding:2,resource:{buffer:n}},{binding:3,resource:r.createView({dimension:`2d-array`})}]})}draw(e,t,n){if(this.order.length){e.setPipeline(this.pipelines[t]),e.setBindGroup(0,n);for(let t of this.order){let n=this.objects.get(t),r=this.assets.get(n.mesh);e.setVertexBuffer(0,n.positions),e.setVertexBuffer(1,n.normals),e.setVertexBuffer(2,r.uvs),e.setVertexBuffer(3,r.colors),e.setIndexBuffer(r.indices,`uint32`);for(let{group:t,part:r}of n.parts)e.setBindGroup(1,t),e.drawIndexed(r.count,1,r.start)}}}destroy(){for(let e of this.objects.values())this.destroyObject(e);this.objects.clear(),this.set([]),this.white.destroy()}asset(e){let t=this.assets.get(e);if(t)return t;let n=(e,t)=>{let n=this.device.createBuffer({size:Math.max(16,Math.ceil(e.byteLength/4)*4),usage:t|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(n,0,e.buffer,e.byteOffset,e.byteLength),n};return t={uvs:n(e.uvs,GPUBufferUsage.VERTEX),colors:n(e.colors,GPUBufferUsage.VERTEX),indices:n(e.indices,GPUBufferUsage.INDEX),textures:e.textures.map(e=>this.texture(e))},this.assets.set(e,t),t}texture(e){let t=Math.floor(Math.log2(Math.max(e.width,e.height)))+1,n=this.device.createTexture({size:[e.width,e.height],format:`rgba8unorm`,mipLevelCount:t,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});this.device.queue.copyExternalImageToTexture({source:e},{texture:n},[e.width,e.height]);for(let r=1;r<t;r++){let t=Math.max(1,e.width>>r),i=Math.max(1,e.height>>r);createImageBitmap(e,{resizeWidth:t,resizeHeight:i,resizeQuality:`high`,premultiplyAlpha:`none`,colorSpaceConversion:`none`}).then(e=>{try{this.device.queue.copyExternalImageToTexture({source:e},{texture:n,mipLevel:r},[t,i])}catch{}e.close()})}return n}createObject(e){let t=this.asset(e),n=e=>this.device.createBuffer({size:Math.max(16,e),usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),r={mesh:e,positions:n(e.vertexCount*12),normals:n(e.vertexCount*12),parts:e.parts.map(n=>{let r=this.device.createBuffer({size:tn,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),i=e.materials[n.material],a=i.texture>=0?t.textures[i.texture]:this.white;return{uniforms:r,group:this.device.createBindGroup({layout:this.layout1,entries:[{binding:0,resource:{buffer:r}},{binding:1,resource:a.createView()},{binding:2,resource:this.sampler}]}),part:n}}),placement:null,pose:null};return this.device.queue.writeBuffer(r.positions,0,e.positions),this.device.queue.writeBuffer(r.normals,0,e.normals),r}writeUniforms(e){if(!e.placement)return;let{model:t,normal:n}=$t(e.placement);for(let{uniforms:r,part:i}of e.parts){let a=e.mesh.materials[i.material],o=new Float32Array(tn/4);o.set(t,0),o.set(n,16),o.set(a.color,32),o.set([a.cutoff,+(a.texture>=0),0,0],36),o.set([...this.up,0],40),this.device.queue.writeBuffer(r,0,o)}}destroyObject(e){e.positions.destroy(),e.normals.destroy(),e.parts.forEach(e=>e.uniforms.destroy())}},on=512,sn=544,cn={r:.05,g:.055,b:.07,a:1},ln=.7,un=.03,dn=.12,fn=2,pn=1.5,mn=10;function hn(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}function gn(e,t){return Math.min(1,e.turbidity*(.55+.45*Math.min(1,t/8))*(e.murk??1))}function _n(e,t){let n=(t,n)=>t.map((t,r)=>t+(n[r]-t)*e);return{sigma:n([.35,.12,.09],[2.6,3,3.6]).map(e=>e*t),col:n([.06,.16,.18],[.36,.31,.21])}}function vn(e,t){let n=[.92,.92,.89],r=[.74,.66,.52];return{amount:Math.min(1,(.1+.9*e)*(.7+.3*t)),color:n.map((t,n)=>t+(r[n]-t)*e)}}var yn=6,bn=2.5,xn=2.5,Sn=.01,Cn=600,wn=.5,Tn=3,En=15e5,Dn=80,On=[255,196,64,255],kn=[80,200,255,255],An=1200,jn=300,Mn=.35;function Nn(e,t,n){let r=C(T(t),e.u),i=b(n,e.center),a=S(i,e.u),o=S(i,r),s=e.square?Math.max(Math.abs(a),Math.abs(o)):Math.hypot(a,o);return 1-hn(e.size-Math.max(e.falloff,1e-9),e.size,s)}function Pn(e){let t=new Float32Array(e,0,16),n=t[0],r=t[1],i=Math.max(1,t[11]),a=t=>new Float32Array(e,64+t*n*r*4,n*r);return{heights:a(0),terrain:i>=3?a(1):void 0,sources:i>=3?Uint8Array.from(a(2),e=>+(e>.5)):void 0,nu:n,nv:r,u0:t[2],v0:t[3],cell:t[4],tangent:[t[5],t[6],t[7]],bitangent:[t[8],t[9],t[10]]}}var Fn=15,In=600,Ln=3e3,Rn=2e3,zn=1e4,Bn=250,Vn=3e3,Hn=class e{canvas;device;camera=new ie;onQuality;onGpuError;onCamera;cameraListeners=new Set;addCameraListener(e){return this.cameraListeners.add(e),()=>this.cameraListeners.delete(e)}onSort;context;splatPipeline;linePipeline;uniforms;lineUniforms;splatBuffer=null;pickedBuffer=null;facingBuffer=null;facingWorker;facingId=0;sceneFacing=null;facingCameras=null;backfaces=!0;clearAround=0;selection=null;orderBuffer=null;shBuffer=null;shDegree=0;shStride=0;shScales=new Float32Array(4);bindGroup=null;lineBindGroup;overlays=new Map;pivotTimer=0;pivotFrame=0;pivotShown=!0;sceneRadius=1;pickId=0;picks=new Map;sceneData=null;sceneMask=null;objects=[];composite=null;visible=0;near=.01;centerOffset=0;lodTau=2;lodBudget=1/0;home=null;frame=0;worker;sortId=0;sortInFlight=!1;sortDirty=!1;sortStarted=0;resizeObserver;disposeInput;splatWaterPipeline;waterPipeline;waterUniforms;waterSampler;waterBindGroup=null;splatWaterBindGroup=null;reflectPipeline;reflectUniforms;reflectOrderBuffer=null;reflectBindGroup=null;reflectTex=null;reflectVisible=0;reflectSortId=0;reflectInFlight=!1;reflectDirty=!1;reflectSortedLevel=NaN;floodMapShown=null;flow=null;debris=null;debrisTex=null;noFlow;sky;fog=null;fogScene=null;fogTime=0;fogLive=!1;fogStart=performance.now();fogU=me(null);fogBg;dust;air;dustParams=null;dustScene=null;dustStart=performance.now();splatDepthPipeline;splatDepthBindGroup=null;sceneDepth=null;splatLighting;meshes;depthTex=null;reflectDepth=null;frameDt=0;draining=!1;toggling=!1;wakeEnergy=0;bounceEnergy=0;presence=0;rainShown=0;rain;layers=[];water=null;cropEdges=null;neighborWorker;destroyed=!1;maxPixelRatio=1/0;adaptive=null;qualityIndex=0;qualityAt=0;qualityDownAt=-1/0;qualityGoodSince=0;qualitySlowSince=0;gpuMs=0;gpuRecent=[];sortMs=0;qualitySamples=0;probing=!1;animFrameMs=0;animTimer=0;override=null;neighborReplies=new Map;neighborId=0;neighborParts=new WeakMap;neighborsFor=null;waterShown=0;waterSpeed=0;wetLine=0;waterClock=0;waterStart=performance.now()/1e3;static async create(t){if(!(`gpu`in navigator))throw new se(`WebGPU is not available`);let n=await navigator.gpu.requestAdapter({powerPreference:`high-performance`});if(!n)throw new se(`no WebGPU adapter`);let r=await n.requestDevice({requiredLimits:{maxStorageBufferBindingSize:n.limits.maxStorageBufferBindingSize,maxBufferSize:n.limits.maxBufferSize}});return new e(t,r)}constructor(e,t){this.canvas=e,this.device=t;let n=!1;t.addEventListener(`uncapturederror`,e=>{let t=e.error.message;console.error(`WebGPU:`,t),n||this.onGpuError?.(t),n=!0});let r=navigator.gpu.getPreferredCanvasFormat();this.context=e.getContext(`webgpu`),this.context.configure({device:t,format:r,alphaMode:`opaque`}),this.uniforms=t.createBuffer({size:on,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.lineUniforms=t.createBuffer({size:Dn,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let i=t.createShaderModule({code:ve}),a={format:`depth24plus`,depthWriteEnabled:!1,depthCompare:`less`};this.splatPipeline=t.createRenderPipeline({layout:`auto`,vertex:{module:i,entryPoint:`vs`},fragment:{module:i,entryPoint:`fs`,targets:[{format:r,blend:{color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`}}}]},primitive:{topology:`triangle-strip`},depthStencil:a});let o={color:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`}};this.splatDepthPipeline=t.createRenderPipeline({layout:`auto`,vertex:{module:i,entryPoint:`vs`},fragment:{module:i,entryPoint:`fs_depth`,targets:[{format:r,blend:o},{format:`rgba16float`,blend:o}]},primitive:{topology:`triangle-strip`},depthStencil:a}),this.splatWaterPipeline=t.createRenderPipeline({layout:`auto`,vertex:{module:i,entryPoint:`vs`},fragment:{module:i,entryPoint:`fs_water`,targets:[{format:`rgba8unorm`,blend:o},{format:`rgba8unorm`,blend:o},{format:`rgba16float`,blend:o},{format:`rgba16float`,blend:o}]},primitive:{topology:`triangle-strip`},depthStencil:a});let s=t.createShaderModule({code:It});this.waterPipeline=t.createRenderPipeline({layout:`auto`,vertex:{module:s},fragment:{module:s,targets:[{format:r}]},primitive:{topology:`triangle-list`}}),this.reflectPipeline=t.createRenderPipeline({layout:`auto`,vertex:{module:i,entryPoint:`vs`},fragment:{module:i,entryPoint:`fs`,targets:[{format:`rgba8unorm`,blend:o}]},primitive:{topology:`triangle-strip`},depthStencil:a}),this.noFlow=t.createBuffer({size:16,usage:GPUBufferUsage.STORAGE}),this.rain=new Ke(t,r),this.splatLighting=new ut(t),this.meshes=new an(t,r),this.fogBg=new F(t,r),this.dust=new yt(t,r),this.air=new Pt(t,r),this.sky=new Xe(t,r,()=>{this.waterBindGroup=null,this.requestRender()}),this.reflectUniforms=t.createBuffer({size:on,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.waterUniforms=t.createBuffer({size:sn,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.waterSampler=t.createSampler({magFilter:`linear`,minFilter:`linear`});let c=t.createShaderModule({code:oe});this.linePipeline=t.createRenderPipeline({layout:`auto`,vertex:{module:c,buffers:[{arrayStride:16,attributes:[{shaderLocation:0,offset:0,format:`float32x3`},{shaderLocation:1,offset:12,format:`unorm8x4`}]}]},fragment:{module:c,targets:[{format:r,blend:{color:{srcFactor:`src-alpha`,dstFactor:`one-minus-src-alpha`},alpha:{srcFactor:`one`,dstFactor:`one-minus-src-alpha`}}}]},primitive:{topology:`line-list`}}),this.lineBindGroup=t.createBindGroup({layout:this.linePipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.lineUniforms}}]}),this.facingWorker=new Worker(new URL(new URL(`facing-worker-9RNQA8af.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),this.facingWorker.onmessage=e=>{e.data.id!==this.facingId||this.destroyed||(this.sceneFacing=e.data.facing,this.writeFacing(),this.requestRender())},this.neighborWorker=new Worker(new URL(new URL(`neighbor-worker-Dd3At11c.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),this.neighborWorker.onmessage=e=>{this.neighborReplies.get(e.data.id)?.(e.data.neighbors),this.neighborReplies.delete(e.data.id)},this.worker=new Worker(new URL(new URL(`sort-worker-BBMjDEKM.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),this.worker.onmessage=e=>{e.data.order&&e.data.tag===`reflect`?this.onReflectSorted(e.data.id,e.data.order):e.data.order?this.onSorted(e.data.id,e.data.order,e.data.stats):(this.picks.get(e.data.id)?.(e.data.point??null,e.data.index??-1),this.picks.delete(e.data.id))},this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.disposeInput=ne(e,this.camera,{onChange:()=>this.cameraChanged(),onReset:()=>this.resetView(),onDoubleClick:async(e,t)=>{let n=await this.pick(e,t);n&&this.setPivot(n)},flySpeed:()=>this.sceneRadius*Mn}),this.resize()}setData(e){this.qualityAt=performance.now()+Vn-In,this.qualitySamples=0,this.gpuRecent=[],e!==this.sceneData&&(this.sceneFacing=null,this.sceneData=e,this.requestFacing()),this.sceneMask&&this.sceneMask.length!==e.count&&(this.sceneMask=null),this.rebuild()}setObjects(e){let t=this.objects;if(this.objects=e,this.meshes.set(e.filter(e=>e.visible&&e.mesh).map(e=>({key:e.key,mesh:e.mesh,placement:e.placement,pose:e.meshPose??null}))),this.requestRender(),!t.length&&!e.length)return;let n=this.composite;if(!(n!==null&&t.length===e.length&&e.every((e,n)=>e.key===t[n].key&&e.data===t[n].data))){this.rebuild();return}let r=!1;e.forEach((e,i)=>{if(e.placement===t[i].placement&&e.posed===t[i].posed)return;let a=Jt(n,i,e),[o,s]=n.ranges[i];this.splatBuffer&&s&&this.device.queue.writeBuffer(this.splatBuffer,o*32,n.data.records,o*32,s*32),this.worker.postMessage({type:`update`,start:o,positions:n.data.positions.slice(o*3,(o+s)*3),chunk:n.firstChunk+i,sphere:a}),r=!0}),e.some((e,n)=>e.visible!==t[n].visible||!e.mesh!=!t[n].mesh)&&this.applyMask(),r&&(this.splatLighting.touch(),this.requestSort(),this.requestReflectSort(),this.requestRender())}async pickObject(e,t){let{point:n,index:r}=await this.pickIndexed(e,t),i=this.pickMesh(e,t);if(i&&(!n||i.distance<w(b(n,this.camera.eye()))))return i.key;let a=this.composite;if(!a||r<0)return null;let o=Xt(a,r);return o>=0?this.objects[o].key:null}rebuild(){let e=this.sceneData;e&&(this.composite=this.objects.length?L(e,this.objects):null,this.uploadSplats(this.composite?.data??e),this.applyMask(),this.neighborsFor=null,this.requestNeighbors())}partNeighbors(e){let t=this.neighborParts.get(e);if(!t){let n=e.lod.levels,r=[];for(let t=0;t<n;t++){let i=e.lod.levelStart[t],a=t+1<n?e.lod.levelStart[t+1]:e.count;r.push([i,a-i])}let i=++this.neighborId;t=new Promise(e=>this.neighborReplies.set(i,e));let a=e.records.slice(0);this.neighborWorker.postMessage({id:i,records:a,count:e.count,segments:r},[a]),this.neighborParts.set(e,t)}return t}requestNeighbors(){let e=this.sceneData,t=this.composite,n=t??e;if(!e||!this.splatLighting.wanted||this.neighborsFor===n)return;this.neighborsFor=n;let r=t?this.objects.map(e=>e.data):[];Promise.all([e,...r].map(e=>this.partNeighbors(e))).then(([r,...i])=>{if(this.neighborsFor!==n)return;if(!t){this.splatLighting.setNeighbors(r);return}let a=t.sceneFull,o=t.objectCount,s=new Uint32Array(t.data.count*8).fill(Ze),c=e=>e===4294967295||e<a?e:e+o;for(let t=0;t<e.count;t++){let e=(t<a?t:t+o)*8;for(let n=0;n<8;n++)s[e+n]=c(r[t*8+n])}i.forEach((e,n)=>{let[r]=t.ranges[n];for(let t=0;t<e.length;t++)s[r*8+t]=e[t]===4294967295?e[t]:e[t]+r}),this.splatLighting.setNeighbors(s)})}applyMask(){let e=this.composite,t=e?Yt(e,this.sceneMask,this.objects,!0):this.sceneMask;this.worker.postMessage({type:`mask`,mask:t?t.slice():null}),this.splatLighting.setMask(e?Yt(e,this.sceneMask,this.objects):this.sceneMask),this.requestSort(),this.requestReflectSort()}uploadSplats(e){this.splatBuffer?.destroy(),this.orderBuffer?.destroy(),this.reflectOrderBuffer?.destroy(),this.shBuffer?.destroy(),this.shBuffer=this.device.createBuffer({size:Math.max(16,e.sh.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),e.sh.byteLength&&this.device.queue.writeBuffer(this.shBuffer,0,e.sh),this.shDegree=e.shDegree,this.shStride=e.shStrideWords,this.shScales=e.shScales,this.splatBuffer=this.device.createBuffer({size:Math.max(32,e.records.byteLength),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.splatBuffer,0,e.records),this.splatLighting.setData(this.splatBuffer,e.count,e.fullCount),this.pickedBuffer?.destroy(),this.pickedBuffer=this.device.createBuffer({size:Math.max(4,Math.ceil(e.count/32)*4),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.writeSelection(e.count),this.facingBuffer?.destroy(),this.facingBuffer=this.device.createBuffer({size:Math.max(4,Math.ceil(e.count/16)*4),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.writeFacing(),this.orderBuffer=this.device.createBuffer({size:Math.max(4,e.count*4),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.reflectOrderBuffer=this.device.createBuffer({size:Math.max(4,e.count*4),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.makeSplatBindGroups(),this.reflectVisible=0,this.visible=0,this.worker.postMessage({type:`init`,positions:e.positions.slice(),alpha:e.alpha.slice(),lod:e.lod}),this.requestSort(),this.requestReflectSort()}setCenterOffset(e){this.centerOffset=e,this.requestRender()}setLod(e,t=1/0){this.lodTau=e,this.lodBudget=this.adaptive?this.adaptive.levels[this.qualityIndex].budget:t,this.requestSort()}setMaxPixelRatio(e){this.adaptive||(this.maxPixelRatio=e>0?e:1/0,this.resize())}setAdaptiveQuality(e){this.adaptive=e&&e.levels.length?e:null,this.adaptive&&this.setQualityLevel(Math.min(Math.max(0,e.start),e.levels.length-1))}get qualityStats(){return{index:this.qualityIndex,gpuMs:this.gpuMs,sortMs:this.sortMs}}setAnimationFps(e){this.animFrameMs=e>0&&Number.isFinite(e)?1e3/e:0}setQualityLevel(e){let t=this.adaptive.levels[e];this.qualityIndex=e,this.qualityAt=performance.now(),this.qualitySamples=0,this.gpuRecent=[],this.qualityGoodSince=0,this.qualitySlowSince=0,this.maxPixelRatio=t.pixelRatio>0?t.pixelRatio:1/0,this.lodBudget=t.budget,this.resize(),this.orderBuffer&&this.requestSort(),this.requestRender(),this.onQuality?.(t,e)}qualitySample(e){let t=this.adaptive,n=performance.now();if(!t||this.destroyed||n-this.qualityAt<In||e>Bn)return;this.gpuRecent.push(e),this.gpuRecent.length>Fn&&this.gpuRecent.shift();let r=[...this.gpuRecent].sort((e,t)=>e-t);if(this.gpuMs=r[r.length>>1],!(++this.qualitySamples<Fn)){if(this.gpuMs>t.targetMs*1.25){if(this.qualityGoodSince=0,this.qualitySlowSince||=n,this.qualityIndex<t.levels.length-1&&n-this.qualitySlowSince>Rn){this.qualityDownAt=n;let e=this.gpuMs>t.targetMs*2.5?2:1;this.setQualityLevel(Math.min(t.levels.length-1,this.qualityIndex+e))}}else this.qualitySlowSince=0,this.gpuMs<t.targetMs*.6?(this.qualityGoodSince||=n,this.qualityIndex>0&&n-this.qualityGoodSince>Ln&&n-this.qualityDownAt>zn&&this.setQualityLevel(this.qualityIndex-1)):this.qualityGoodSince=0}}setNear(e){this.near=e,this.requestRender()}setHome(e){this.home=e,this.sceneRadius=e.radius,this.resetView()}async pick(e,t){let{point:n}=await this.pickIndexed(e,t),r=this.pickMesh(e,t);return r&&(!n||r.distance<w(b(n,this.camera.eye())))?r.point:n}pickMesh(e,t){let{origin:n,dir:r}=this.ray(e,t),i=null;for(let e of this.objects){if(!e.visible||!e.mesh)continue;let t=en(e.meshPose??e.mesh.positions,e.mesh.indices,e.placement,n,r);t!==null&&(!i||t<i.distance)&&(i={key:e.key,point:y(n,x(r,t)),distance:t})}return i}pickIndexed(e,t){let n=Math.max(1,this.canvas.clientWidth),r=Math.max(1,this.canvas.clientHeight),{view:i,proj:a}=this.matrices(),o=++this.pickId;return new Promise(s=>{this.picks.set(o,(e,t)=>s({point:e,index:t})),this.worker.postMessage({type:`pick`,id:o,ndc:[e/n*2-1,1-t/r*2],radius:[12/n,12/r],viewProj:O(a,i)})})}setPivot(e){cancelAnimationFrame(this.pivotFrame);let t=this.camera.eye(),n=Math.max(w(b(t,e)),1e-4),r=y(t,x(T(b(this.camera.target,t)),n)),i=performance.now(),a=n=>{let o=Math.min(1,(n-i)/jn),s=o*o*(3-2*o),c=y(r,x(b(e,r),s));this.camera.target=c,this.camera.distance=Math.max(w(b(t,c)),1e-4),this.camera.setDirection(b(t,c)),this.cameraChanged(),o<1&&(this.pivotFrame=requestAnimationFrame(a))};this.pivotFrame=requestAnimationFrame(a)}setPivotMarker(e){this.pivotShown=e,e||(clearTimeout(this.pivotTimer),this.setOverlay(`pivot`,null))}setUpAxis(e){this.meshes.setUp(e),this.camera.reorient(e),this.home&&={...this.home,up:e},this.cameraChanged()}setLighting(e,t){this.splatLighting.set(e,t),this.requestNeighbors(),this.requestRender()}project(e){let t=Math.max(1,this.canvas.clientWidth),n=Math.max(1,this.canvas.clientHeight),{view:r,proj:i}=this.matrices(),a=O(i,r),o=[0,1,2,3].map(t=>a[t]*e[0]+a[4+t]*e[1]+a[8+t]*e[2]+a[12+t]);return o[3]<=1e-9?null:[(o[0]/o[3]+1)/2*t,(1-o[1]/o[3])/2*n]}viewProjection(){let{view:e,proj:t}=this.matrices();return{viewProj:new Float32Array(O(t,e)),width:Math.max(1,this.canvas.clientWidth),height:Math.max(1,this.canvas.clientHeight)}}setFog(e,t){this.fog=e,this.fogScene=t,this.requestRender()}setDust(e,t){e?.enabled&&!this.dustParams?.enabled&&(this.dustStart=performance.now()),this.dustParams=e,this.dustScene=t,this.requestRender()}setFogTime(e){e!==this.fogTime&&(this.fogTime=e,this.fog?.enabled&&this.requestRender())}setFogLive(e){this.fogLive=e,this.fogStart=performance.now(),this.requestRender()}setSky(e){this.sky.set(e)}ray(e,t){let n=Math.max(1,this.canvas.clientWidth),r=Math.max(1,this.canvas.clientHeight),{view:i,proj:a}=this.matrices(),o=k(O(a,i)),s=[e/n*2-1,1-t/r*2],c=[0,1,2,3].map(e=>o[e]*s[0]+o[4+e]*s[1]+o[8+e]*.5+o[12+e]),l=[c[0]/c[3],c[1]/c[3],c[2]/c[3]],u=this.viewEye();return{origin:u,dir:T(b(l,u))}}setSelection(e){this.destroyed||(this.selection=e&&e.length?e:null,this.splatBuffer&&this.writeSelection(this.splatBuffer.size/32),this.requestRender())}setBackfaces(e,t){this.backfaces=e,t!==void 0&&t!==this.facingCameras&&(this.facingCameras=t,this.sceneFacing=null,this.writeFacing(),this.requestFacing()),this.requestRender()}setClearAround(e){this.clearAround=Math.max(0,e),this.requestRender()}requestFacing(){let e=this.sceneData,t=++this.facingId;if(!e||!this.facingCameras?.length)return;let n=e.records.slice(0);this.facingWorker.postMessage({id:t,records:n,count:e.count,cameras:this.facingCameras},[n])}writeFacing(){let e=this.facingBuffer;if(!e)return;let t=this.sceneFacing,n=this.composite,r=new Uint32Array(e.size/4);if(t&&!n)r.set(t.subarray(0,r.length));else if(t&&n&&this.sceneData){let e=n.sceneFull,i=n.objectCount;for(let n=0;n<this.sceneData.count;n++){let a=t[n>>4]>>>(n&15)*2&3;if(!a)continue;let o=n<e?n:n+i;r[o>>4]|=a<<(o&15)*2}}this.device.queue.writeBuffer(e,0,r)}writeSelection(e){if(!this.pickedBuffer)return;let t=new Uint32Array(this.pickedBuffer.size/4),n=this.selection??[];for(let r=0;r<n.length;r++){let i=n[r];i<e&&(t[i>>5]|=1<<(i&31))}this.device.queue.writeBuffer(this.pickedBuffer,0,t)}setOverlay(e,t){this.destroyed||(this.overlays.get(e)?.buffer.destroy(),this.overlays.delete(e),t&&t.length&&this.overlays.set(e,{buffer:this.upload(Kn(t)),vertices:t.length*2}),this.requestRender())}makeSplatBindGroups(){if(!this.splatBuffer||!this.orderBuffer||!this.shBuffer||!this.reflectOrderBuffer)return;let e=(e,t)=>[{binding:0,resource:{buffer:e}},{binding:1,resource:{buffer:this.splatBuffer}},{binding:2,resource:{buffer:t}},{binding:3,resource:{buffer:this.shBuffer}},{binding:4,resource:{buffer:this.flow?.state??this.noFlow}},{binding:5,resource:{buffer:this.splatLighting.lit}},{binding:6,resource:{buffer:this.pickedBuffer??this.noFlow}},{binding:7,resource:{buffer:this.facingBuffer??this.noFlow}}],t=e(this.uniforms,this.orderBuffer);this.bindGroup=this.device.createBindGroup({layout:this.splatPipeline.getBindGroupLayout(0),entries:t}),this.splatWaterBindGroup=this.device.createBindGroup({layout:this.splatWaterPipeline.getBindGroupLayout(0),entries:t}),this.splatDepthBindGroup=this.device.createBindGroup({layout:this.splatDepthPipeline.getBindGroupLayout(0),entries:t}),this.reflectBindGroup=this.device.createBindGroup({layout:this.reflectPipeline.getBindGroupLayout(0),entries:e(this.reflectUniforms,this.reflectOrderBuffer)}),this.waterBindGroup=null,this.layers.forEach(e=>e.destroy()),this.layers=[]}setWater(e,t=!1){e?(t&&(this.waterShown=e.level,this.waterSpeed=0),this.water||(this.waterShown=t?e.level:0,this.waterSpeed=0,this.presence=+!!t,this.rainShown=t?e.rain??0:0,this.wetLine=this.waterShown,this.waterClock=performance.now()/1e3,this.toggling=!t),this.draining&&(this.draining=!1,this.toggling=!0),this.water=e,this.useFloodMap(e,e.floodMap??null),this.requestReflectSort(),this.requestRender()):(this.water&&!this.draining&&(this.draining=!0,this.toggling=!0),this.requestRender())}useFloodMap(e,t){t!==this.floodMapShown&&(this.floodMapShown=t,this.debris?.destroy(),this.flow?.destroy(),this.flow=t?.terrain&&e?new Fe(this.device,t,e.metersPerUnit):null,this.debris=this.flow?new we(this.device,this.flow):null,this.makeSplatBindGroups())}get waterLevel(){return this.waterShown}setMask(e){this.sceneMask=e,this.applyMask()}setCropBox(e){let t=e?.shape===`sphere`?Wn:Gn;this.setOverlay(`crop`,e&&e.enabled?t(e):null)}setCropEdges(e){this.cropEdges=e&&e.enabled?e:null,this.requestRender()}outsideWater(e,t){return this.sky.holdsWaterOutside(t)?1:e.area&&Nn(e.area,e.ground.normal,t)<.5?2:0}getPose(){return{eye:this.camera.eye(),target:[...this.camera.target],fovy:this.camera.fovy}}setPose(e){let t=b(e.eye,e.target);this.camera.target=[...e.target],this.camera.distance=Math.max(w(t),1e-6),this.camera.setDirection(t),this.camera.fovy=e.fovy,this.cameraChanged()}setCameraOverride(e){e?(this.override={eye:[...e.eye],forward:T(e.forward),view:new Float32Array(e.view),proj:new Float32Array(e.proj),focal:e.focal},this.camera.distance=1,this.camera.target=y(e.eye,this.override.forward),this.camera.setDirection(x(this.override.forward,-1))):this.override=null,this.cameraChanged()}viewEye(){return this.override?[...this.override.eye]:this.camera.eye()}viewForward(){return this.override?[...this.override.forward]:T(b(this.camera.target,this.camera.eye()))}resetView(){this.home&&(ae(this.camera,this.home),this.cameraChanged())}destroy(){this.destroyed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.animTimer),this.worker.terminate(),this.neighborWorker.terminate(),this.facingWorker.terminate(),this.resizeObserver.disconnect(),this.disposeInput(),clearTimeout(this.pivotTimer),cancelAnimationFrame(this.pivotFrame),this.overlays.forEach(e=>e.buffer.destroy());for(let e of[this.splatBuffer,this.pickedBuffer,this.facingBuffer,this.orderBuffer,this.reflectOrderBuffer,this.shBuffer,this.uniforms,this.lineUniforms,this.waterUniforms,this.reflectUniforms])e?.destroy();this.reflectTex?.destroy(),this.debrisTex?.destroy(),this.flow?.destroy(),this.debris?.destroy(),this.noFlow.destroy(),this.rain.destroy(),this.sky.destroy(),this.fogBg.destroy(),this.dust.destroy(),this.air.destroy(),this.sceneDepth?.destroy(),this.meshes.destroy(),this.depthTex?.destroy(),this.reflectDepth?.destroy(),this.splatLighting.destroy(),this.layers.forEach(e=>e.destroy()),this.device.destroy()}cameraChanged(){this.onCamera?.();for(let e of this.cameraListeners)e();if(this.pivotShown){let e=this.camera.target,t=this.camera.distance*.03;this.setOverlay(`pivot`,[[[e[0]-t,e[1],e[2]],[e[0]+t,e[1],e[2]],kn],[[e[0],e[1]-t,e[2]],[e[0],e[1]+t,e[2]],kn],[[e[0],e[1],e[2]-t],[e[0],e[1],e[2]+t],kn]]),clearTimeout(this.pivotTimer),this.pivotTimer=window.setTimeout(()=>this.setOverlay(`pivot`,null),An)}this.requestSort(),this.requestReflectSort(),this.requestRender()}mirror(e){let t=T(e.ground.normal),n=S(t,e.ground.point)+this.waterShown,r=new Float32Array(16);for(let e=0;e<3;e++){for(let n=0;n<3;n++)r[e*4+n]=+(n===e)-2*t[n]*t[e];r[12+e]=2*n*t[e]}r[15]=1;let i=this.viewEye(),a=this.viewForward();return{M:r,eyeM:b(i,x(t,2*(S(t,i)-n))),fwdM:b(a,x(t,2*S(t,a))),n:t,d:n}}requestReflectSort(){let e=this.water;if(!e||!this.reflectOrderBuffer)return;if(this.reflectInFlight){this.reflectDirty=!0;return}this.reflectInFlight=!0,this.reflectDirty=!1,this.reflectSortedLevel=this.waterShown;let{M:t,eyeM:n,fwdM:r,n:i,d:a}=this.mirror(e),{view:o,proj:s,focal:c}=this.matrices();this.worker.postMessage({type:`sort`,tag:`reflect`,id:++this.reflectSortId,eye:n,forward:r,viewProj:O(s,O(o,t)),focal:c*wn,tau:Math.max(this.lodTau,Tn),budget:Math.min(this.lodBudget,En),above:[i[0],i[1],i[2],a]})}onReflectSorted(e,t){this.reflectInFlight=!1,this.reflectOrderBuffer&&e===this.reflectSortId&&this.water&&(this.device.queue.writeBuffer(this.reflectOrderBuffer,0,t),this.reflectVisible=t.length,this.requestRender()),this.reflectDirty&&this.requestReflectSort()}requestSort(){if(this.sortInFlight){this.sortDirty=!0;return}this.sortInFlight=!0,this.sortDirty=!1,this.sortStarted=performance.now();let e=this.viewEye(),t=this.viewForward(),{view:n,proj:r,focal:i}=this.matrices();this.worker.postMessage({type:`sort`,id:++this.sortId,eye:e,forward:t,viewProj:O(r,n),focal:i,tau:this.lodTau,budget:this.lodBudget})}onSorted(e,t,n){if(this.sortInFlight=!1,this.orderBuffer&&e===this.sortId){this.device.queue.writeBuffer(this.orderBuffer,0,t),this.visible=t.length;let e=performance.now()-this.sortStarted;this.adaptive&&(this.sortMs=this.sortMs?this.sortMs*.7+e*.3:e),this.onSort?.(e,n),this.requestRender()}this.sortDirty&&this.requestSort()}requestRender(){this.frame||this.destroyed||(this.frame=requestAnimationFrame(()=>{this.frame=0,this.render()}))}resize(){let e=Math.min(window.devicePixelRatio||1,this.maxPixelRatio),t=Math.max(1,Math.round(this.canvas.clientWidth*e)),n=Math.max(1,Math.round(this.canvas.clientHeight*e));(this.canvas.width!==t||this.canvas.height!==n)&&(this.canvas.width=t,this.canvas.height=n,this.requestRender())}matrices(){if(this.override){let e=this.override;return{view:e.view,proj:e.proj,focal:e.focal}}let{width:e,height:t}=this.canvas,n=this.camera,r=Math.max(n.distance*.001,1e-4),i=E(n.fovy,e/t,r,n.distance*1e3);if(this.centerOffset){let e=2*this.centerOffset/Math.max(1,this.canvas.clientWidth);for(let t=0;t<4;t++)i[t*4]+=e*i[t*4+3]}return{view:n.view(),proj:i,focal:t/(2*Math.tan(n.fovy/2))}}render(){if(this.destroyed)return;let{width:e,height:t}=this.canvas,{view:n,proj:r,focal:i}=this.matrices(),a=new Float32Array(on/4);a.set(n,0),a.set(r,16),a.set([e,t,i,i,this.near],32),new Uint32Array(a.buffer).set([this.shDegree,this.shStride],37),a.set(this.viewEye(),40),a[43]=this.clearAround,a.set(this.shScales,44);let o=this.water,s=!!o&&this.waterShown*o.metersPerUnit>=Sn,c=this.fogLive&&!!this.fog?.enabled,l=this.fogTime+(c?(performance.now()-this.fogStart)/1e3:0),u=this.fogScene?pe(this.fog,this.fogScene,this.fogTime,s?this.waterShown:null,l):null;if(this.fogU=me(u,s,this.splatLighting.ambient),a.set(this.fogU,108),o){this.stepWater(o);let r=T(o.ground.normal),s=o.metersPerUnit;if(a.set([...r,S(r,o.ground.point)],48),a.set([this.wetLine,dn/s,Math.min(1,this.wetLine*s/.05)*this.presence,this.waterShown],52),a.set(Un(this.flow?o.floodMap??null:null),56),a.set([this.rainShown*this.presence,0,+!!this.outsideWater(o,this.viewEye()),+!!this.splatLighting.active],68),o.area){let e=o.area;a.set([...e.center,e.square?2:1],80),a.set([...T(e.u),e.size],84),a[88]=e.falloff}let c=_n(gn(o,this.waterShown*s),o.murk??1);a.set([...c.sigma,this.presence],72),a.set([...c.col,s],76);let{M:l,eyeM:u}=this.mirror(o),d=a.slice();d.set(O(n,l),0);let f=Math.max(1,Math.round(e*wn)),p=Math.max(1,Math.round(t*wn));d.set([f,p,p/t*i,p/t*i],32),d.set(u,40),d[69]=1,d[91]=0,d[43]=0,this.device.queue.writeBuffer(this.reflectUniforms,0,d),Math.abs(this.waterShown-this.reflectSortedLevel)>.001*this.camera.distance&&this.requestReflectSort()}a[71]=+!!this.splatLighting.active,a[91]=this.backfaces&&this.sceneFacing?1:0;let d=this.cropEdges;if(d){a.set([...d.center,d.shape===`sphere`?2:1],92);for(let e=0;e<3;e++)a.set([...T(d.axes[e]),d.half_size[e]],96+e*4);let e=this.composite;e&&a.set([e.sceneFull,e.sceneFull+e.objectCount],89)}this.device.queue.writeBuffer(this.uniforms,0,a);let f=new Float32Array(Dn/4);f.set(O(r,n),0),f.set([e,t,1],16),this.device.queue.writeBuffer(this.lineUniforms,0,f);let p=this.device.createCommandEncoder();this.splatLighting.update(p);let m=o&&this.waterShown*o.metersPerUnit>=Sn?o:null;m&&this.drawWaterScene(p,m,n,r);let h=this.dustParams,g=!!h?.enabled&&!!this.dustScene&&ht(h)>0,_=!!this.dustScene&&Nt(h,this.fogU[11]>0,this.splatLighting.active),v=this.context.getCurrentTexture().createView(),y=p.beginRenderPass({colorAttachments:[{view:v,clearValue:cn,loadOp:`clear`,storeOp:`store`}]}),b=null;if(m&&this.waterBindGroup)y.setPipeline(this.waterPipeline),y.setBindGroup(0,this.waterBindGroup),y.draw(3),b=this.layers[2];else if(this.bindGroup&&(this.visible>0||this.meshes.count>0)){this.sky.draw(y,k(O(r,n)),this.viewEye()),this.fogU[11]>0&&this.fogBg.draw(y,k(O(r,n)),this.viewEye(),this.fogU),y.end();let i=(g||_)&&!!this.splatDepthBindGroup,a=[{view:v,loadOp:`load`,storeOp:`store`}];i&&((!this.sceneDepth||this.sceneDepth.width!==e||this.sceneDepth.height!==t)&&(this.sceneDepth?.destroy(),this.sceneDepth=this.device.createTexture({size:[e,t],format:`rgba16float`,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING})),a.push({view:this.sceneDepth.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}),b=this.sceneDepth),y=p.beginRenderPass({colorAttachments:a,depthStencilAttachment:this.depthAttachment(e,t,!1)}),this.meshes.draw(y,i?`depth`:`plain`,this.meshGroup(this.uniforms)),this.visible>0&&(y.setPipeline(i?this.splatDepthPipeline:this.splatPipeline),y.setBindGroup(0,i?this.splatDepthBindGroup:this.bindGroup),y.draw(4,this.visible)),y.end(),y=p.beginRenderPass({colorAttachments:[{view:v,loadOp:`load`,storeOp:`store`}]})}if(g&&h&&this.dustScene&&this.dust.draw(y,{dust:h,scene:this.dustScene,time:(performance.now()-this.dustStart)/1e3,view:n,viewProj:O(r,n),eye:this.viewEye(),viewport:[e,t],focal:i,waterM:m?this.waterShown*m.metersPerUnit:null,fog:this.fogU,depth:b,lights:{on:this.splatLighting.active,params:this.splatLighting.lightParams,maps:this.splatLighting.shadowMaps}}),_&&this.dustScene&&b&&(y.end(),this.air.render(p,{dust:h,scene:this.dustScene,invViewProj:k(O(r,n)),view:n,eye:this.viewEye(),viewport:[e,t],waterM:m?this.waterShown*m.metersPerUnit:null,fog:this.fogU,depth:b,lights:{params:this.splatLighting.lightParams,maps:this.splatLighting.shadowMaps}}),y=p.beginRenderPass({colorAttachments:[{view:v,loadOp:`load`,storeOp:`store`}]}),this.air.composite(y)),o&&this.rainShown*this.presence>.001&&this.rain.draw(y,{viewProj:O(r,n),eye:this.viewEye(),up:T(o.ground.normal),time:performance.now()/1e3-this.waterStart,mpu:o.metersPerUnit,amount:this.rainShown*this.presence,look:o.rainLook??Be}),this.overlays.size){y.setPipeline(this.linePipeline),y.setBindGroup(0,this.lineBindGroup);for(let{buffer:e,vertices:t}of this.overlays.values())y.setVertexBuffer(0,e),y.draw(t)}if(y.end(),this.device.queue.submit([p.finish()]),this.adaptive&&!this.probing){this.probing=!0;let e=performance.now();this.device.queue.onSubmittedWorkDone().then(()=>{this.probing=!1,this.qualitySample(performance.now()-e)})}(o||g||c&&u)&&this.requestAnimationRender()}requestAnimationRender(){if(!this.animFrameMs)return this.requestRender();this.animTimer||this.destroyed||(this.animTimer=window.setTimeout(()=>{this.animTimer=0,this.requestRender()},Math.max(0,this.animFrameMs-16)))}depthAttachment(e,t,n){let r=n?this.reflectDepth:this.depthTex;return(!r||r.width!==e||r.height!==t)&&(r?.destroy(),r=this.device.createTexture({size:[e,t],format:`depth24plus`,usage:GPUTextureUsage.RENDER_ATTACHMENT}),n?this.reflectDepth=r:this.depthTex=r),{view:r.createView(),depthClearValue:1,depthLoadOp:`clear`,depthStoreOp:`discard`}}meshGroup(e){return this.meshes.group(e,this.flow?.state??this.noFlow,this.splatLighting.lightParams,this.splatLighting.shadowMaps)}stepWater(e){let t=performance.now()/1e3,n=Math.min(.1,Math.max(0,t-this.waterClock));this.waterClock=t,this.frameDt=n;let r=this.draining?0:e.level,i=2/(this.toggling?xn:ln),a=i*n,o=1/(1+a+.48*a*a+.235*a*a*a),s=this.waterShown,c=this.waterShown-r,l=(this.waterSpeed+i*c)*n;this.waterSpeed=(this.waterSpeed-i*l)*o,this.waterShown=r+(c+l)*o,Math.abs(this.waterShown-r)<1e-6&&Math.abs(this.waterSpeed)<1e-6&&(this.waterShown=r,this.waterSpeed=0),this.presence=Math.min(1,Math.max(0,this.presence+(this.draining?-n:n)/fn));let u=e.rain??0;this.rainShown+=Math.max(-n/pn,Math.min(n/pn,u-this.rainShown));let d=Math.abs(this.waterShown-r)<.001*(1+Math.abs(r));if(this.toggling&&d&&(this.toggling=!1),this.draining&&d&&this.presence<=0){this.draining=!1,this.toggling=!1,this.water=null,this.useFloodMap(null,null);return}let f=Math.abs(this.waterShown-s)*e.metersPerUnit;this.wakeEnergy=Math.min(1,this.wakeEnergy*Math.exp(-n/yn)+bn*f),this.bounceEnergy=Math.min(1,this.bounceEnergy*Math.exp(-n/mn)+bn*f);let p=un/e.metersPerUnit*n;this.wetLine=Math.max(this.waterShown,this.wetLine-p)}drawWaterScene(e,t,n,r){let{width:i,height:a}=this.canvas;if(!this.waterBindGroup||!this.layers.length||this.layers[0].width!==i||this.layers[0].height!==a){this.layers.forEach(e=>e.destroy()),this.reflectTex?.destroy();let e=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,t=[`rgba8unorm`,`rgba8unorm`,`rgba16float`,`rgba16float`];this.layers=t.map(t=>this.device.createTexture({size:[i,a],format:t,usage:e}));let n=[Math.max(1,Math.round(i*wn)),Math.max(1,Math.round(a*wn))];this.reflectTex=this.device.createTexture({size:n,format:`rgba8unorm`,usage:e}),this.debrisTex?.destroy(),this.debrisTex=this.device.createTexture({size:[i,a],format:`rgba8unorm`,usage:e}),this.waterBindGroup=this.device.createBindGroup({layout:this.waterPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.waterUniforms}},...[0,1,3].map(e=>({binding:e+1,resource:this.layers[e].createView()})),{binding:5,resource:this.waterSampler},{binding:6,resource:this.reflectTex.createView()},{binding:7,resource:{buffer:this.flow?.state??this.noFlow}},{binding:8,resource:this.debrisTex.createView()},{binding:9,resource:this.sky.texture.createView()},{binding:10,resource:this.sky.sampler}]})}let o=t.flow??{animate:!1,speed:1},s=t.floodMap;if(this.flow&&this.debris&&s){let i=t.metersPerUnit,a=this.waterShown*i,c=this.frameDt*o.speed;this.flow.step(e,c,a,o.animate);let l=T(t.ground.normal),u=gn(t,a);this.debris.render(e,this.debrisTex,{viewProj:O(r,n),normal:l,ground:S(l,t.ground.point),tangent:s.tangent,bitangent:s.bitangent,u0:s.u0,v0:s.v0,cell:s.cell,nu:s.nu,nv:s.nv,mpu:i,dt:Math.max(this.frameDt,.001),time:performance.now()/1e3-this.waterStart,amount:Math.min(1,(t.debris??.5)*(.15+.85*u)),wind:[.12*t.waves/i,.05*t.waves/i],sigma:(.12+2.88*u)*(t.murk??1),opacity:t.debrisOpacity??1,...(()=>{let e=vn(u,t.murk??1);return{foamAmount:t.foam===!1?0:e.amount,foamColor:e.color,foamOpacity:t.foamOpacity??.6}})()})}else e.beginRenderPass({colorAttachments:[{view:this.debrisTex.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}]}).end();let c=e.beginRenderPass({colorAttachments:[{view:this.reflectTex.createView(),clearValue:{r:0,g:0,b:0,a:0},loadOp:`clear`,storeOp:`store`}],depthStencilAttachment:this.depthAttachment(this.reflectTex.width,this.reflectTex.height,!0)});this.meshes.count&&this.meshes.draw(c,`mirror`,this.meshGroup(this.reflectUniforms)),this.reflectBindGroup&&this.reflectVisible>0&&(c.setPipeline(this.reflectPipeline),c.setBindGroup(0,this.reflectBindGroup),c.draw(4,this.reflectVisible)),c.end();let l={r:0,g:0,b:0,a:0},u=e.beginRenderPass({colorAttachments:this.layers.map(e=>({view:e.createView(),clearValue:l,loadOp:`clear`,storeOp:`store`})),depthStencilAttachment:this.depthAttachment(i,a,!1)});this.meshes.count&&this.meshes.draw(u,`water`,this.meshGroup(this.uniforms)),this.splatWaterBindGroup&&this.visible>0&&(u.setPipeline(this.splatWaterPipeline),u.setBindGroup(0,this.splatWaterBindGroup),u.draw(4,this.visible)),u.end();let d=T(t.ground.normal),f=T(C(Math.abs(d[0])<.9?[1,0,0]:[0,1,0],d)),p=this.viewEye(),m=this.viewForward(),h=O(r,n),g=S(d,t.ground.point)+this.waterShown,_=this.waterShown*t.metersPerUnit,v=gn(t,_),y=new Float32Array(sn/4);y.set(k(h),0),y.set(h,16),y.set([...p,performance.now()/1e3-this.waterStart],32),y.set([...m,t.metersPerUnit],36),y.set([...d,g],40),y.set([...f,v],44),y.set([i,a,t.waves,Cn],48),y.set([cn.r,cn.g,cn.b,1],52),y.set(Un(this.flow?t.floodMap??null:null),56);let b=t.wakes??!0?this.wakeEnergy*(t.wakeOpacity??1):0;y.set([this.waterShown,b,this.rainShown*this.presence,t.murk??1],68);let x=hn(.05,.6,_);y.set([this.presence,this.bounceEnergy,x,this.outsideWater(t,p)],72),y.set(this.sky.params(),76);let w=(t.waveHeading??0)*Math.PI/180;if(y.set([t.waveScale??1,Math.cos(w),Math.sin(w),t.glint===!1?0:1],112),y.set(this.fogU,116),t.area){let e=t.area;y.set([...e.center,e.square?2:1],100),y.set([...T(e.u),e.size],104),y[108]=e.falloff}this.device.queue.writeBuffer(this.waterUniforms,0,y)}upload(e){let t=this.device.createBuffer({size:Math.max(16,e.byteLength),usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST});return this.device.queue.writeBuffer(t,0,e),t}};function Un(e){return e?[e.u0,e.v0,e.cell,1,...e.tangent,e.nu,...e.bitangent,e.nv]:[0,0,1,0,1,0,0,1,0,1,0,1]}function Wn(e){let t=(t,n,r)=>[0,1,2].map(i=>e.center[i]+t*e.half_size[0]*e.axes[0][i]+n*e.half_size[1]*e.axes[1][i]+r*e.half_size[2]*e.axes[2][i]),n=[e=>t(Math.cos(e),Math.sin(e),0),e=>t(Math.cos(e),0,Math.sin(e)),e=>t(0,Math.cos(e),Math.sin(e)),...[-.5,.5].map(e=>n=>{let r=Math.sqrt(1-e*e);return t(r*Math.cos(n),e,r*Math.sin(n))})],r=[];for(let e of n)for(let t=0;t<64;t++)r.push([e(2*Math.PI*t/64),e(2*Math.PI*(t+1)/64),On]);return r}function Gn(e){let t=(t,n,r)=>[0,1,2].map(i=>e.center[i]+t*e.half_size[0]*e.axes[0][i]+n*e.half_size[1]*e.axes[1][i]+r*e.half_size[2]*e.axes[2][i]),n=[];for(let e of[-1,1])for(let r of[-1,1])n.push([t(-1,e,r),t(1,e,r),On]),n.push([t(e,-1,r),t(e,1,r),On]),n.push([t(e,r,-1),t(e,r,1),On]);return n}function Kn(e){let t=new ArrayBuffer(e.length*2*16),n=new Float32Array(t),r=new Uint8Array(t);return e.forEach(([e,t,i],a)=>{n.set(e,a*8),n.set(t,a*8+4),r.set(i,a*32+12),r.set(i,a*32+28)}),t}var qn=ArrayBuffer,Jn=Uint8Array,Yn=Uint16Array,Xn=Int16Array,Zn=Int32Array,Qn=function(e,t,n){if(Jn.prototype.slice)return Jn.prototype.slice.call(e,t,n);(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new Jn(n-t);return r.set(e.subarray(t,n)),r},$n=function(e,t,n,r){if(Jn.prototype.fill)return Jn.prototype.fill.call(e,t,n,r);for((n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);n<r;++n)e[n]=t;return e},er=function(e,t,n,r){if(Jn.prototype.copyWithin)return Jn.prototype.copyWithin.call(e,t,n,r);for((n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);n<r;)e[t++]=e[n++]},tr=[`invalid zstd data`,`window size too large (>2046MB)`,`invalid block type`,`FSE accuracy too high`,`match distance too far back`,`unexpected EOF`],nr=function(e,t,n){var r=Error(t||tr[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,nr),!n)throw r;return r},rr=function(e,t,n){for(var r=0,i=0;r<n;++r)i|=e[t++]<<(r<<3);return i},ir=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},ar=function(e,t){var n=e[0]|e[1]<<8|e[2]<<16;if(n==3126568&&e[3]==253){var r=e[4],i=r>>5&1,a=r>>2&1,o=r&3,s=r>>6;r&8&&nr(0);var c=6-i,l=o==3?4:o,u=rr(e,c,l);c+=l;var d=s?1<<s:i,f=rr(e,c,d)+(s==1&&256),p=f;if(!i){var m=1<<10+(e[5]>>3);p=m+(m>>3)*(e[5]&7)}p>2145386496&&nr(1);var h=new Jn((t==1?f||p:t?0:p)+12);return h[0]=1,h[4]=4,h[8]=8,{b:c+d,y:0,l:0,d:u,w:t&&t!=1?t:h.subarray(12),e:p,o:new Zn(h.buffer,0,3),u:f,c:a,m:Math.min(131072,p)}}if((n>>4|e[3]<<20)==25481893)return ir(e,4)+8;nr(0)},or=function(e){for(var t=0;1<<t<=e;++t);return t-1},sr=function(e,t,n){var r=(t<<3)+4,i=(e[t]&15)+5;i>n&&nr(3);for(var a=1<<i,o=a,s=-1,c=-1,l=-1,u=a,d=new qn(512+(a<<2)),f=new Xn(d,0,256),p=new Yn(d,0,256),m=new Yn(d,512,a),h=512+(a<<1),g=new Jn(d,h,a),_=new Jn(d,h+a);s<255&&o>0;){var v=or(o+1),y=r>>3,b=(1<<v+1)-1,x=(e[y]|e[y+1]<<8|e[y+2]<<16)>>(r&7)&b,S=(1<<v)-1,C=b-o-1,w=x&S;if(w<C?(r+=v,x=w):(r+=v+1,x>S&&(x-=C)),f[++s]=--x,x==-1?(o+=x,g[--u]=s):o-=x,!x)do{var T=r>>3;c=(e[T]|e[T+1]<<8)>>(r&7)&3,r+=2,s+=c}while(c==3)}(s>255||o)&&nr(0);for(var E=0,D=(a>>1)+(a>>3)+3,O=a-1,k=0;k<=s;++k){var A=f[k];if(A<1)p[k]=-A;else for(l=0;l<A;++l){g[E]=k;do E=E+D&O;while(E>=u)}}for(E&&nr(0),l=0;l<a;++l){var j=p[g[l]]++,M=_[l]=i-or(j);m[l]=(j<<M)-a}return[r+7>>3,{b:i,s:g,n:_,t:m}]},cr=function(e,t){var n=0,r=-1,i=new Jn(292),a=e[t],o=i.subarray(0,256),s=i.subarray(256,268),c=new Yn(i.buffer,268);if(a<128){var l=sr(e,t+1,6),u=l[0],d=l[1];t+=a;var f=u<<3,p=e[t];p||nr(0);for(var m=0,h=0,g=d.b,_=g,v=(++t<<3)-8+or(p);v-=g,!(v<f);){var y=v>>3;if(m+=(e[y]|e[y+1]<<8)>>(v&7)&(1<<g)-1,o[++r]=d.s[m],v-=_,v<f)break;y=v>>3,h+=(e[y]|e[y+1]<<8)>>(v&7)&(1<<_)-1,o[++r]=d.s[h],g=d.n[m],m=d.t[m],_=d.n[h],h=d.t[h]}++r>255&&nr(0)}else{for(r=a-127;n<r;n+=2){var b=e[++t];o[n]=b>>4,o[n+1]=b&15}++t}var x=0;for(n=0;n<r;++n){var S=o[n];S>11&&nr(0),x+=S&&1<<S-1}var C=or(x)+1,w=1<<C,T=w-x;for(T&T-1&&nr(0),o[r++]=or(T)+1,n=0;n<r;++n){var S=o[n];++s[o[n]=S&&C+1-S]}var E=new Jn(w<<1),D=E.subarray(0,w),O=E.subarray(w);for(c[C]=0,n=C;n>0;--n){var k=c[n];$n(O,n,k,c[n-1]=k+s[n]*(1<<C-n))}for(c[0]!=w&&nr(0),n=0;n<r;++n){var A=o[n];if(A){var j=c[A];$n(D,n,j,c[A]=j+(1<<C-A))}}return[t,{n:O,b:C,s:D}]},lr=sr(new Jn([81,16,99,140,49,198,24,99,12,33,196,24,99,102,102,134,70,146,4]),0,6)[1],ur=sr(new Jn([33,20,196,24,99,140,33,132,16,66,8,33,132,16,66,8,33,68,68,68,68,68,68,68,68,36,9]),0,6)[1],dr=sr(new Jn([32,132,16,66,102,70,68,68,68,68,36,73,2]),0,5)[1],fr=function(e,t){for(var n=e.length,r=new Zn(n),i=0;i<n;++i)r[i]=t,t+=1<<e[i];return r},pr=new Jn(new Zn([0,0,0,0,16843009,50528770,134678020,202050057,269422093]).buffer,0,36),mr=fr(pr,0),hr=new Jn(new Zn([0,0,0,0,0,0,0,0,16843009,50528770,117769220,185207048,252579084,16]).buffer,0,53),gr=fr(hr,3),_r=function(e,t,n){var r=e.length,i=t.length,a=e[r-1],o=(1<<n.b)-1,s=-n.b;a||nr(0);for(var c=0,l=n.b,u=(r<<3)-8+or(a)-l,d=-1;u>s&&d<i;){var f=u>>3,p=(e[f]|e[f+1]<<8|e[f+2]<<16)>>(u&7);c=(c<<l|p)&o,t[++d]=n.s[c],u-=l=n.n[c]}(u!=s||d+1!=i)&&nr(0)},vr=function(e,t,n){var r=6,i=t.length+3>>2,a=i<<1,o=i+a;_r(e.subarray(r,r+=e[0]|e[1]<<8),t.subarray(0,i),n),_r(e.subarray(r,r+=e[2]|e[3]<<8),t.subarray(i,a),n),_r(e.subarray(r,r+=e[4]|e[5]<<8),t.subarray(a,o),n),_r(e.subarray(r),t.subarray(o),n)},yr=function(e,t,n){var r,i=t.b,a=e[i],o=a>>1&3;t.l=a&1;var s=a>>3|e[i+1]<<5|e[i+2]<<13,c=(i+=3)+s;if(o==1)return i>=e.length?void 0:(t.b=i+1,n?($n(n,e[i],t.y,t.y+=s),n):$n(new Jn(s),e[i]));if(!(c>e.length)){if(o==0)return t.b=c,n?(n.set(e.subarray(i,c),t.y),t.y+=s,n):Qn(e,i,c);if(o==2){var l=e[i],u=l&3,d=l>>2&3,f=l>>4,p=0,m=0;u<2?d&1?f|=e[++i]<<4|(d&2&&e[++i]<<12):f=l>>3:(m=d,d<2?(f|=(e[++i]&63)<<4,p=e[i]>>6|e[++i]<<2):d==2?(f|=e[++i]<<4|(e[++i]&3)<<12,p=e[i]>>2|e[++i]<<6):(f|=e[++i]<<4|(e[++i]&63)<<12,p=e[i]>>6|e[++i]<<2|e[++i]<<10)),++i;var h=n?n.subarray(t.y,t.y+t.m):new Jn(t.m),g=h.length-f;if(u==0)h.set(e.subarray(i,i+=f),g);else if(u==1)$n(h,e[i++],g);else{var _=t.h;if(u==2){var v=cr(e,i);p+=i-(i=v[0]),t.h=_=v[1]}else _||nr(0);(m?vr:_r)(e.subarray(i,i+=p),h.subarray(g),_)}var y=e[i++];if(y){y==255?y=(e[i++]|e[i++]<<8)+32512:y>127&&(y=y-128<<8|e[i++]);var b=e[i++];b&3&&nr(0);for(var x=[ur,dr,lr],S=2;S>-1;--S){var C=b>>(S<<1)+2&3;if(C==1){var w=new Jn([0,0,e[i++]]);x[S]={s:w.subarray(2,3),n:w.subarray(0,1),t:new Yn(w.buffer,0,1),b:0}}else C==2?(r=sr(e,i,9-(S&1)),i=r[0],x[S]=r[1]):C==3&&(t.t||nr(0),x[S]=t.t[S])}var T=t.t=x,E=T[0],D=T[1],O=T[2],k=e[c-1];k||nr(0);var A=(c<<3)-8+or(k)-O.b,j=A>>3,M=0,ee=(e[j]|e[j+1]<<8)>>(A&7)&(1<<O.b)-1;j=(A-=D.b)>>3;var te=(e[j]|e[j+1]<<8)>>(A&7)&(1<<D.b)-1;j=(A-=E.b)>>3;var N=(e[j]|e[j+1]<<8)>>(A&7)&(1<<E.b)-1;for(++y;--y;){var ne=O.s[ee],re=O.n[ee],ie=E.s[N],ae=E.n[N],oe=D.s[te],se=D.n[te];j=(A-=oe)>>3;var ce=1<<oe,le=ce+((e[j]|e[j+1]<<8|e[j+2]<<16|e[j+3]<<24)>>>(A&7)&ce-1);j=(A-=hr[ie])>>3;var ue=gr[ie]+((e[j]|e[j+1]<<8|e[j+2]<<16)>>(A&7)&(1<<hr[ie])-1);j=(A-=pr[ne])>>3;var de=mr[ne]+((e[j]|e[j+1]<<8|e[j+2]<<16)>>(A&7)&(1<<pr[ne])-1);if(j=(A-=re)>>3,ee=O.t[ee]+((e[j]|e[j+1]<<8)>>(A&7)&(1<<re)-1),j=(A-=ae)>>3,N=E.t[N]+((e[j]|e[j+1]<<8)>>(A&7)&(1<<ae)-1),j=(A-=se)>>3,te=D.t[te]+((e[j]|e[j+1]<<8)>>(A&7)&(1<<se)-1),le>3)t.o[2]=t.o[1],t.o[1]=t.o[0],t.o[0]=le-=3;else{var fe=le-(de!=0);fe?(le=fe==3?t.o[0]-1:t.o[fe],fe>1&&(t.o[2]=t.o[1]),t.o[1]=t.o[0],t.o[0]=le):le=t.o[0]}for(var S=0;S<de;++S)h[M+S]=h[g+S];M+=de,g+=de;var pe=M-le;if(pe<0){var me=-pe,he=t.e+pe;me>ue&&(me=ue);for(var S=0;S<me;++S)h[M+S]=t.w[he+S];M+=me,ue-=me,pe=0}for(var S=0;S<ue;++S)h[M+S]=h[pe+S];M+=ue}if(M!=g)for(;g<h.length;)h[M++]=h[g++];else M=h.length;n?t.y+=M:h=Qn(h,0,M)}else if(n){if(t.y+=f,g)for(var S=0;S<f;++S)h[S]=h[g+S]}else g&&(h=Qn(h,g));return t.b=c,h}nr(2)}},br=function(e,t){if(e.length==1)return e[0];for(var n=new Jn(t),r=0,i=0;r<e.length;++r){var a=e[r];n.set(a,i),i+=a.length}return n};function xr(e,t){for(var n=[],r=+!t,i=0,a=0;e.length;){var o=ar(e,r||t);if(typeof o==`object`){for(r?(t=null,o.w.length==o.u&&(n.push(t=o.w),a+=o.u)):(n.push(t),o.e=0);!o.l;){var s=yr(e,o,t);s||nr(5),t?o.e=o.y:(n.push(s),a+=s.length,er(o.w,0,s.length),o.w.set(s,o.w.length-s.length))}i=o.b+o.c*4}else i=o;e=e.subarray(i)}return br(n,a)}var Sr=[`ply`,`spz`,`splat`],Cr=.28209479177387814,wr=1347635022,Tr=.15,Er=16;async function Dr(e,t){let n=e.toLowerCase().split(`.`).pop()??``,r=n===`ply`?kr(t):n===`spz`?await Ar(t):n===`splat`?Lr(t):null;if(!r)throw Error(`.${n} isn't a splat file (use .ply, .spz or .splat)`);if(!r.count)throw Error(`the file has no splats`);return{data:new Rt(Br(r)),up:[0,-1,0]}}var Or={char:[1,(e,t)=>e.getInt8(t)],int8:[1,(e,t)=>e.getInt8(t)],uchar:[1,(e,t)=>e.getUint8(t)],uint8:[1,(e,t)=>e.getUint8(t)],short:[2,(e,t)=>e.getInt16(t,!0)],int16:[2,(e,t)=>e.getInt16(t,!0)],ushort:[2,(e,t)=>e.getUint16(t,!0)],uint16:[2,(e,t)=>e.getUint16(t,!0)],int:[4,(e,t)=>e.getInt32(t,!0)],int32:[4,(e,t)=>e.getInt32(t,!0)],uint:[4,(e,t)=>e.getUint32(t,!0)],uint32:[4,(e,t)=>e.getUint32(t,!0)],float:[4,(e,t)=>e.getFloat32(t,!0)],float32:[4,(e,t)=>e.getFloat32(t,!0)],double:[8,(e,t)=>e.getFloat64(t,!0)],float64:[8,(e,t)=>e.getFloat64(t,!0)]};function kr(e){let t=new TextDecoder().decode(new Uint8Array(e,0,Math.min(e.byteLength,65536))),n=t.indexOf(`end_header`);if(!t.startsWith(`ply`)||n<0)throw Error(`not a PLY file`);let r=t.slice(0,n).split(/\r?\n/).map(e=>e.trim());if(!r.some(e=>e.startsWith(`format binary_little_endian`)))throw Error(`only binary PLY files are supported (this one is ASCII or big endian)`);let i=0,a=!1,o=0,s=new Map;for(let e of r){let t=e.split(/\s+/);if(t[0]===`element`){if(a)break;if(a=t[1]===`vertex`,a)i=parseInt(t[2],10);else if(i===0&&parseInt(t[2],10)>0)throw Error(`unexpected "${t[1]}" element before the splats`)}else if(t[0]===`property`&&a){if(t[1]===`list`)throw Error(`this PLY is a mesh, not Gaussian splats`);let e=Or[t[1]];if(!e)throw Error(`unknown PLY property type ${t[1]}`);s.set(t[2],[o,e[1]]),o+=e[0]}}let c=[`x`,`y`,`z`,`f_dc_0`,`f_dc_1`,`f_dc_2`,`opacity`,`scale_0`,`scale_1`,`scale_2`,`rot_0`,`rot_1`,`rot_2`,`rot_3`].filter(e=>!s.has(e));if(c.length)throw Error(s.has(`x`)&&!s.has(`f_dc_0`)?`this PLY has no Gaussian splat properties (a mesh or point cloud?)`:`this PLY is missing ${c.join(`, `)} (a compressed PLY? open it in Splatforge or re-export it)`);let l=new TextEncoder().encode(t.slice(0,n+10)).length,u=new Uint8Array(e);if(u[l]===13&&l++,u[l]===10&&l++,e.byteLength<l+i*o)throw Error(`the PLY file is cut short`);let d=[...s.keys()].filter(e=>e.startsWith(`f_rest_`)).length,f=Rr(d/3),p=(f+1)**2-1,m=d/3,h=zr(i,f),g=new DataView(e,l),_=e=>s.get(e),v={pos:[`x`,`y`,`z`].map(_),dc:[`f_dc_0`,`f_dc_1`,`f_dc_2`].map(_),op:_(`opacity`),sc:[`scale_0`,`scale_1`,`scale_2`].map(_),rot:[`rot_0`,`rot_1`,`rot_2`,`rot_3`].map(_),sh:Array.from({length:p*3},(e,t)=>_(`f_rest_${t%3*m+Math.floor(t/3)}`))};for(let e=0;e<i;e++){let t=e*o;for(let n=0;n<3;n++)h.means[e*3+n]=v.pos[n][1](g,t+v.pos[n][0]),h.sh0[e*3+n]=v.dc[n][1](g,t+v.dc[n][0]),h.logScales[e*3+n]=v.sc[n][1](g,t+v.sc[n][0]);for(let n=0;n<4;n++)h.quats[e*4+n]=v.rot[n][1](g,t+v.rot[n][0]);h.opacity[e]=v.op[1](g,t+v.op[0]);for(let n=0;n<v.sh.length;n++)h.shN[e*v.sh.length+n]=v.sh[n][1](g,t+v.sh[n][0])}return h}async function Ar(e){let t=new Uint8Array(e,0,Math.min(2,e.byteLength)),n=t[0]===31&&t[1]===139?await Nr(e):Pr(e);if(n.version<1||n.version>4)throw Error(`SPZ version ${n.version} isn't supported (1-4 are)`);let{n:r,degree:i,version:a}=n,o=(i+1)**2-1,s=zr(r,i),c=1/(1<<n.fractional),l=n.positions;for(let e=0;e<r*3;e++)if(a===1)s.means[e]=Ir(l[e*2]|l[e*2+1]<<8);else{let t=l[e*3]|l[e*3+1]<<8|l[e*3+2]<<16;t&8388608&&(t|=4278190080),s.means[e]=t*c}for(let e=0;e<r;e++){let t=Math.min(Math.max(n.alphas[e]/255,1e-6),1-1e-6);s.opacity[e]=Math.log(t/(1-t))}for(let e=0;e<r*3;e++)s.sh0[e]=(n.colors[e]/255-.5)/Tr;for(let e=0;e<r*3;e++)s.logScales[e]=n.scales[e]/16-10;let u=n.rotations,d=[0,0,0,0];for(let e=0;e<r;e++){if(a>=3){let t=e*4,n=(u[t]|u[t+1]<<8|u[t+2]<<16|u[t+3]<<24)>>>0,r=n>>>30,i=0;for(let e=3;e>=0;e--){if(e===r)continue;let t=n&511,a=n>>>9&1;n>>>=10,d[e]=Math.SQRT1_2*t/511*(a?-1:1),i+=d[e]*d[e]}d[r]=Math.sqrt(Math.max(0,1-i))}else{let t=e*3;for(let e=0;e<3;e++)d[e]=u[t+e]/127.5-1;d[3]=Math.sqrt(Math.max(0,1-d[0]*d[0]-d[1]*d[1]-d[2]*d[2]))}s.quats.set([d[3],d[0],d[1],d[2]],e*4)}for(let e=0;e<r*o*3;e++)s.shN[e]=(n.sh[e]-128)/128;return Fr(s),s}function jr(e,t,n){let r=(n+1)**2-1;return[t*(e===1?6:9),t,t*3,t*3,t*(e>=3?4:3),t*r*3]}function Mr(e,t,n,r,i){let[a,o,s,c,l,u]=i;return{version:e,n:t,degree:Math.min(3,n),fractional:r,positions:a,alphas:o,colors:s,scales:c,rotations:l,sh:u}}async function Nr(e){let t=await new Response(new Blob([e]).stream().pipeThrough(new DecompressionStream(`gzip`))).arrayBuffer(),n=new DataView(t);if(t.byteLength<16||n.getUint32(0,!0)!==wr)throw Error(`not an SPZ file`);let r=n.getUint32(4,!0),i=n.getUint32(8,!0),a=n.getUint8(12);if(r<1||r>3||a>3)throw Error(`SPZ version ${r} isn't supported`);let o=[],s=16;for(let e of jr(r,i,a)){if(s+e>t.byteLength)throw Error(`the SPZ file is cut short`);o.push(new Uint8Array(t,s,e)),s+=e}return Mr(r,i,a,n.getUint8(13),o)}function Pr(e){let t=new DataView(e);if(e.byteLength<32||t.getUint32(0,!0)!==wr)throw Error(`not an SPZ file`);let n=t.getUint32(4,!0);if(n<4)throw Error(`not an SPZ file (an older SPZ should be gzip-compressed)`);let r=t.getUint32(8,!0),i=t.getUint8(12);if(i>3)throw Error(`SPZ with SH degree ${i} isn't supported`);let a=t.getUint8(15),o=t.getUint32(16,!0),s=jr(n,r,i),c=s.map((e,t)=>[e,t]).filter(([e])=>e>0);if(a!==c.length)throw Error(`this SPZ file's streams don't match its header`);let l=s.map(()=>new Uint8Array),u=o+a*16;for(let n=0;n<a;n++){let r=Number(t.getBigUint64(o+n*16,!0)),i=Number(t.getBigUint64(o+n*16+8,!0)),[a,s]=c[n];if(i!==a||u+r>e.byteLength)throw Error(`the SPZ file is damaged or cut short`);let d=xr(new Uint8Array(e,u,r),new Uint8Array(i));if(d.length!==i)throw Error(`the SPZ file is damaged`);l[s]=d,u+=r}return Mr(n,r,i,t.getUint8(13),l)}function Fr(e){let t=[-1,-1,1,-1,1,1,-1,1,-1,1,-1,-1,1,-1,1],n=(e.shDegree+1)**2-1;for(let r=0;r<e.count;r++){e.means[r*3+1]*=-1,e.means[r*3+2]*=-1,e.quats[r*4+2]*=-1,e.quats[r*4+3]*=-1;for(let i=0;i<n;i++)if(!(t[i]>0))for(let t=0;t<3;t++)e.shN[(r*n+i)*3+t]*=-1}}function Ir(e){let t=e&32768?-1:1,n=e>>10&31,r=e&1023;return n===0?t*2**-14*(r/1024):n===31?r?NaN:t*(1/0):t*2**(n-15)*(1+r/1024)}function Lr(e){if(e.byteLength%32)throw Error(`not a .splat file (its size isn't a multiple of 32 bytes)`);let t=e.byteLength/32,n=new Float32Array(e),r=new Uint8Array(e),i=zr(t,0);for(let e=0;e<t;e++){for(let t=0;t<3;t++)i.means[e*3+t]=n[e*8+t],i.logScales[e*3+t]=Math.log(Math.max(n[e*8+3+t],1e-12)),i.sh0[e*3+t]=(r[e*32+24+t]/255-.5)/Cr;let t=Math.min(Math.max(r[e*32+27]/255,1e-6),1-1e-6);i.opacity[e]=Math.log(t/(1-t));for(let t=0;t<4;t++)i.quats[e*4+t]=(r[e*32+28+t]-128)/128}return i}function Rr(e){return e>=15?3:e>=8?2:+(e>=3)}function zr(e,t){let n=(t+1)**2-1;return{count:e,means:new Float32Array(e*3),logScales:new Float32Array(e*3),quats:new Float32Array(e*4),opacity:new Float32Array(e),sh0:new Float32Array(e*3),shDegree:t,shN:new Float32Array(e*n*3)}}function Br(e){let t=e.count,n=e.shDegree,r=(n+1)**2-1,i=t+(4-t%4)%4,a=n?Math.ceil((3+3*r)/4):0,o=n?16+t*a*4:0,s=new ArrayBuffer(Er+t*32+i+o),c=new DataView(s,0,Er);[83,70,83,86].forEach((e,t)=>c.setUint8(t,e)),c.setUint32(4,3,!0),c.setUint32(8,t,!0),c.setUint32(12,n,!0);let l=new Float32Array(s,Er,t*8),u=new Int8Array(s,Er,t*32),d=new Uint8Array(s,Er,t*32),f=n?new Float32Array(t*3):null;for(let n=0;n<t;n++){let t=n*8,r=n*32;for(let i=0;i<3;i++){l[t+i]=e.means[n*3+i],l[t+3+i]=Math.exp(e.logScales[n*3+i]);let a=.5+Cr*e.sh0[n*3+i],o=Math.round(Math.min(1,Math.max(0,a))*255);d[r+28+i]=o,f&&(f[n*3+i]=a-o/255)}let[i,a,o,s]=e.quats.subarray(n*4,n*4+4),c=Math.hypot(i,a,o,s)||1;[i,a,o,s].forEach((e,t)=>u[r+24+t]=Math.max(-127,Math.min(127,Math.round(e/c*127)))),d[r+31]=Math.round(255/(1+Math.exp(-e.opacity[n])))}if(!n)return s;let p=[[0,3]];for(let[e,t]of[[0,3],[3,8],[8,15]])t<=r&&p.push([3+e*3,(t-e)*3]);let m=(t,n)=>n<3?f[t*3+n]:e.shN[t*r*3+n-3],h=Er+t*32+i,g=new Float32Array(s,h,4);p.forEach(([e,n],r)=>{let i=0;for(let r=0;r<t;r++)for(let t=e;t<e+n;t++)i=Math.max(i,Math.abs(m(r,t)));g[r]=i/127||1});let _=new Int8Array(s,h+16,t*a*4),v=e=>p.findIndex(([t,n])=>e>=t&&e<t+n),y=3+3*r,b=Array.from({length:y},(e,t)=>1/g[v(t)]);for(let e=0;e<t;e++)for(let t=0;t<y;t++)_[e*a*4+t]=Math.max(-127,Math.min(127,Math.round(m(e,t)*b[t])));return s}function Vr(e,t){let n=e.fullCount,r=Math.max(1,Math.floor(n/5e4)),i=[],a=[],o=[];for(let t=0;t<n;t+=r)e.alpha[t]<.1||(i.push(e.positions[t*3]),a.push(e.positions[t*3+1]),o.push(e.positions[t*3+2]));let s=e=>e.length?Float64Array.from(e).sort()[e.length>>1]:0,c=[s(i),s(a),s(o)],l=i.map((e,t)=>Math.hypot(i[t]-c[0],a[t]-c[1],o[t]-c[2])),u=Math.max(l.length?Float64Array.from(l).sort()[Math.floor(l.length*.9)]:1,.001),d=Hr(t),f=[0,0,-1],p=f[0]*d[0]+f[1]*d[1]+f[2]*d[2];f=Hr([f[0]-d[0]*p,f[1]-d[1]*p,f[2]-d[2]*p]),Number.isFinite(f[0])||(f=[1,0,0]);let m=20*Math.PI/180;return{target:c,radius:u,up:d,dir:Hr([f[0]*Math.cos(m)+d[0]*Math.sin(m),f[1]*Math.cos(m)+d[1]*Math.sin(m),f[2]*Math.cos(m)+d[2]*Math.sin(m)]),distance:u*2.2}}function Hr(e){let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]}var Ur=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),R=o(((e,t)=>{t.exports=Ur()}))();function Wr(e){try{let t=localStorage.getItem(`splatforge.${e}`);return t?JSON.parse(t):null}catch{return null}}function Gr(e,t){try{localStorage.setItem(`splatforge.${e}`,JSON.stringify(t))}catch{}}var Kr={points:[],transitionS:3,autoAdvance:!0},qr=.9144,Jr=.15,Yr=.1,Xr=6,Zr=1024,Qr=.06,$r=.8,ei=450,ti=600,ni=280,ri=14,ii=500,ai=1400,oi=`tourWindow`,si=[80,230,210,255],ci=[255,255,255,255],li=[`mp3`,`wav`,`m4a`,`aac`,`ogg`,`oga`,`opus`,`flac`,`mp4`],ui=[`jpg`,`jpeg`,`png`,`webp`,`gif`,`bmp`,`heic`,`heif`,`tif`,`tiff`,`mp4`,`m4v`,`mov`,`webm`],di=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],fi=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],pi=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],mi=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],hi=e=>Math.hypot(e[0],e[1],e[2]),z=e=>{let t=hi(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},gi=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]];function _i(e){let t=z(e),n=z(gi(Math.abs(t[0])<.9?[1,0,0]:[0,1,0],t));return[n,gi(t,n)]}function vi(e,t){let n=z(t),r=fi(e,pi(n,mi(e,n)));return hi(r)>1e-9?z(r):_i(n)[0]}function yi(e){return e.metersPerUnit?1/e.metersPerUnit:e.sceneRadius*Qr/qr}var bi=()=>typeof crypto<`u`&&`randomUUID`in crypto?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,xi=e=>new Set(e.points.flatMap(e=>[e.narration?.name,e.visual?.name].filter(e=>!!e)));function Si(e,t,n,r){let i=Math.max(-1,Math.min(1,mi(e,t)));if(i>.9995)return z(di(e,pi(fi(t,e),n)));if(i<-.9995){let t=z(gi(r,e)),i=Math.PI*n;return z(di(pi(e,Math.cos(i)),pi(t,Math.sin(i))))}let a=Math.acos(i),o=Math.sin(a);return z(di(pi(e,Math.sin((1-n)*a)/o),pi(t,Math.sin(n*a)/o)))}function Ci(e,t,n,r){let i=n*n*n*(n*(n*6-15)+10),a=di(e.target,pi(fi(t.target,e.target),i)),o=fi(e.eye,e.target),s=fi(t.eye,t.target),c=Math.max(hi(o),1e-6),l=Math.max(hi(s),1e-6),u=Si(z(o),z(s),i,r),d=Math.min(.6,.5*hi(fi(t.target,e.target))/(c+l));return{eye:di(a,pi(u,c*(l/c)**+i*(1+d*Math.sin(Math.PI*i)))),target:a,fovy:e.fovy+(t.fovy-e.fovy)*i}}function wi(e,t,n,r){let i=e.getPose();if(n<=0)return e.setPose(t),()=>{};let a=performance.now(),o=0,s=c=>{let l=Math.min(1,(c-a)/(n*1e3));e.setPose(Ci(i,t,l,r)),l<1&&(o=requestAnimationFrame(s))};return o=requestAnimationFrame(s),()=>cancelAnimationFrame(o)}function Ti(e,t,n,r){let i=yi(n),a=Math.min(qr,e.sizeM)*i,o=t>=1?a:a*t,s=t>=1?a/t:a,c=z(n.up),l=vi(e.normal,c),u=di(e.anchor,pi(c,e.liftM*i+s/2)),d=mi(l,z(fi(r,u))),f=pi(pi(z(gi(c,l)),d>=0?1:-1),o/2),p=pi(c,s/2);return{corners:[fi(di(u,p),f),di(di(u,p),f),fi(di(u,f),p),fi(fi(u,f),p)],facing:Math.abs(d)}}function Ei(e,t,n){let[[r,i],[a,o],[s,c],[l,u]]=e,d=a-s,f=l-s,p=r-a+s-l,m=o-c,h=u-c,g=i-o+c-u,_=d*h-f*m;if(Math.abs(_)<1e-9)return null;let v=(p*h-f*g)/_,y=(d*g-p*m)/_,b=a-r+v*a,x=l-r+y*l,S=o-i+v*o,C=u-i+y*u;return`matrix3d(${[b/t,S/t,0,v/t,x/n,C/n,0,y/n,0,0,1,0,r,i,0,1].map(e=>+e.toPrecision(9)).join(`,`)})`}function Di(e,t,n,r,i){let a=n.map(e=>t.project(e)),o=a.every(e=>e&&Math.abs(e[0])<2e4&&Math.abs(e[1])<2e4)?Ei(a,r,i):null;return o?(e.style.visibility=`visible`,e.style.transform=o,!0):(e.style.visibility=`hidden`,!1)}function Oi(e){let t=(0,_.useRef)(e);t.current=e,(0,_.useEffect)(()=>{let e=0,n=()=>{e=requestAnimationFrame(n),t.current()};return e=requestAnimationFrame(n),()=>cancelAnimationFrame(e)},[])}function ki(e){let{visual:t,scene:n}=e,r=(0,_.useRef)(null),i=(0,_.useRef)(null),[a,o]=(0,_.useState)(null),s=(0,_.useRef)(n);s.current=n;let c=(0,_.useRef)(t);c.current=t;let l=(0,_.useRef)(e.onEnded);l.current=e.onEnded,Oi(()=>{let e=r.current,t=s.current.viewer;if(!a||!e||!t)return;let n=a>=1?Zr:Zr*a,i=a>=1?Zr/a:Zr,{corners:o,facing:l}=Ti(c.current,a,s.current,t.getPose().eye);e.style.width=`${n}px`,e.style.height=`${i}px`,Di(e,t,o,n,i)&&(e.style.opacity=(.6+.32*l**.6).toFixed(3))}),(0,_.useEffect)(()=>{let t=i.current;t&&(e.playing&&!e.leaving?t.play().catch(()=>l.current?.()):t.pause())},[e.playing,e.leaving,a]),(0,_.useEffect)(()=>{let e=i.current;return()=>e?.pause()},[]);let u=n.mediaUrl(t.name);return(0,R.jsx)(`div`,{ref:r,className:`holo ${e.preview?`preview`:``} ${e.leaving?`out`:``}`,style:{visibility:`hidden`},children:t.kind===`video`?(0,R.jsx)(`video`,{ref:i,src:u,muted:e.preview||!t.sound,loop:t.loop,playsInline:!0,preload:`auto`,onLoadedMetadata:e=>o(e.currentTarget.videoWidth/e.currentTarget.videoHeight||16/9),onEnded:()=>l.current?.(),onError:()=>l.current?.()}):(0,R.jsx)(`img`,{src:u,alt:``,draggable:!1,onLoad:e=>o(e.currentTarget.naturalWidth/e.currentTarget.naturalHeight||1)})})}function Ai(e){let t=(0,_.useRef)(null),[n,r]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let t=requestAnimationFrame(()=>r(e.visible));return()=>cancelAnimationFrame(t)},[e.visible]),Oi(()=>{let n=t.current,r=e.scene.viewer?.project(e.point);n&&(r?(n.style.visibility=`visible`,n.style.transform=`translate(${r[0]}px, ${r[1]}px)`):n.style.visibility=`hidden`)}),(0,R.jsx)(`div`,{ref:t,className:`poi-dot ${n?`on`:``}`,style:{visibility:`hidden`}})}function ji(e,t,n){let r=n-t;if(r>=e.length)return e;if(r<=0)return(0,R.jsx)(`span`,{className:`ghost`,children:e});let i=Math.floor(r);return(0,R.jsxs)(R.Fragment,{children:[e.slice(0,i),(0,R.jsx)(`span`,{style:{opacity:r-i},children:e[i]}),(0,R.jsx)(`span`,{className:`ghost`,children:e.slice(i+1)})]})}function Mi(e){let{poi:t}=e,n=(0,_.useRef)(null),r=t.title.trim(),i=t.description.trim(),a=r.length+i.length,[o,s]=(0,_.useState)(e.animate?0:a),c=(0,_.useRef)(o);return c.current=o,(0,_.useEffect)(()=>{if(!e.animate){s(a);return}let t=c.current,n=e.leaving?0:a,r=e.leaving?ei*.85:Math.min(ai,Math.max(ii,a*ri)),i=performance.now(),o=0,l=a=>{let c=Math.min(1,(a-i)/r),u=e.leaving?c*c:1-(1-c)*(1-c);s(t+(n-t)*u),c<1&&(o=requestAnimationFrame(l))};return o=requestAnimationFrame(l),()=>cancelAnimationFrame(o)},[e.leaving,e.animate,a]),Oi(()=>{let r=n.current,i=e.scene.viewer;if(!r||!i)return;let a=ti,o=Math.max(1,r.offsetHeight),s=z(e.scene.up),c=t.pose.target,l=z(gi(s,vi(fi(i.getPose().eye,c),s))),u=qr*yi(e.scene),d=i.project(c),f=i.project(di(c,pi(l,u)));if(d&&f){let e=Math.hypot(f[0]-d[0],f[1]-d[1]);e>.001&&e<ni&&(u*=ni/e)}let p=u*o/a,m=di(c,pi(s,u*.1)),h=pi(l,u/2),g=pi(s,p);Di(r,i,[fi(di(m,g),h),di(di(m,g),h),di(m,h),fi(m,h)],a,o)}),(0,R.jsxs)(`div`,{ref:n,className:`holo holo-text ${e.preview?`preview`:``} ${e.leaving?`out`:``}`,style:{visibility:`hidden`,width:ti},children:[r&&(0,R.jsx)(`div`,{className:`holo-title`,children:ji(r,0,o)}),i&&(0,R.jsx)(`p`,{children:ji(i,r.length,o)})]})}function Ni(e){let{poi:t,scene:n,state:r}=e,i=r!==`hidden`,a=r===`leaving`;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Ai,{point:t.pose.target,scene:n,visible:r===`shown`}),i&&t.visual&&(0,R.jsx)(ki,{visual:t.visual,scene:n,playing:!e.paused,leaving:a,onEnded:e.onVideoEnded}),i&&!t.visual&&(t.title.trim()||t.description.trim())&&(0,R.jsx)(Mi,{poi:t,scene:n,leaving:a,animate:!0})]})}function Pi(e){let{poi:t,scene:n}=e;return(0,R.jsx)(`div`,{className:`holo-layer`,children:t.visual?(0,R.jsx)(ki,{visual:t.visual,scene:n,playing:!1,preview:!0},t.visual.name):(t.title.trim()||t.description.trim())&&(0,R.jsx)(Mi,{poi:t,scene:n,preview:!0})})}function Fi(e){let{ui:t,tour:n,scene:r,selected:i}=e,{Slider:a}=t,o=r.lookCovers??`flood, rain, lighting, sky, crop, cleanup`,[s,c]=(0,_.useState)(()=>{let e=Wr(oi);return e&&Number.isFinite(e.x)&&Number.isFinite(e.y)?e:{x:10,y:58,min:!1}});(0,_.useEffect)(()=>Gr(oi,s),[s]);let l=(0,_.useRef)(null),u=(e,t)=>{let n=l.current?.parentElement,r=l.current?.offsetWidth??340;if(!n)return{x:e,y:t};let i=n.querySelector(`:scope > [data-docked-right]`)?.offsetWidth??0;return{x:Math.min(Math.max(0,e),Math.max(0,n.clientWidth-i-r)),y:Math.min(Math.max(0,t),Math.max(0,n.clientHeight-36))}};(0,_.useEffect)(()=>{let e=()=>c(e=>({...e,...u(e.x,e.y)}));e();let t=l.current?.parentElement;if(!t)return;let n=new ResizeObserver(e);n.observe(t);let r=t.querySelector(`:scope > [data-docked-right]`);return r&&n.observe(r),()=>n.disconnect()},[]);let d=e=>{if(e.button!==0||e.target.closest(`button`))return;let t=e.currentTarget;t.setPointerCapture(e.pointerId);let n={px:e.clientX,py:e.clientY,x:s.x,y:s.y},r=e=>c(t=>({...t,...u(n.x+e.clientX-n.px,n.y+e.clientY-n.py)})),i=()=>{t.removeEventListener(`pointermove`,r),t.removeEventListener(`pointerup`,i),t.removeEventListener(`pointercancel`,i)};t.addEventListener(`pointermove`,r),t.addEventListener(`pointerup`,i),t.addEventListener(`pointercancel`,i)},[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(``),C=(0,_.useRef)(()=>{}),w=(0,_.useRef)(n);w.current=n;let T=(0,_.useMemo)(()=>[...new Set(n.points.flatMap(e=>e.tags))].sort(),[n.points]);(0,_.useEffect)(()=>{f&&!T.includes(f)&&p(null)},[T,f]);let E=n.points.filter(e=>!f||e.tags.includes(f)),D=n.points.findIndex(e=>e.id===i),O=D>=0?n.points[D]:null,k=t=>{let n=xi(w.current),i=xi(t);e.onChange(t),n.forEach(e=>!i.has(e)&&r.deleteMedia(e))},A=(e,t)=>k({...w.current,points:w.current.points.map(n=>n.id===e?{...n,...t}:n)}),j=(e,t)=>{let n=w.current.points.find(t=>t.id===e);n?.visual&&A(e,{visual:{...n.visual,...t}})},M=t=>{e.onSelect(t.id),b(!1),t.applySettings&&t.settings&&r.apply(t.settings),C.current(),r.viewer&&(C.current=wi(r.viewer,t.pose,$r,r.up))};(0,_.useEffect)(()=>()=>C.current(),[]);let ee=()=>{let t=r.viewer?.getPose();if(!t)return;let i={id:bi(),title:`Point ${n.points.length+1}`,tags:f?[f]:[],description:``,pose:t,settings:r.snapshot(),applySettings:!0,narration:null,visual:null,holdS:Xr},a=D>=0?D+1:n.points.length;k({...n,points:[...n.points.slice(0,a),i,...n.points.slice(a)]}),e.onSelect(i.id)},te=t=>{k({...n,points:n.points.filter(e=>e.id!==t)}),i===t&&e.onSelect(null)},N=(e,t)=>{let r=n.points.findIndex(t=>t.id===e),i=r+t;if(r<0||i<0||i>=n.points.length)return;let a=[...n.points];[a[r],a[i]]=[a[i],a[r]],k({...n,points:a})},ne=e=>{if(!O)return;let t=e.split(`,`).map(e=>e.trim()).filter(Boolean),n=[...O.tags];for(let e of t)n.some(t=>t.toLowerCase()===e.toLowerCase())||n.push(e);A(O.id,{tags:n}),S(``)},re=async(e,t)=>{let n=await r.pickFile(e,t);if(!n)return null;h(`Copying into the project…`),v(null);try{return await r.importMedia(n)}catch(e){return v(`Could not add the file: ${e}`),null}finally{h(null)}},ie=async e=>{let t=await re(`Narration (audio, or the sound of an .mp4)`,r.narrationExtensions??li);if(t){if(t.kind===`image`)return v(`That is an image; narration needs an audio file.`);A(e.id,{narration:{name:t.name,label:t.label}})}},ae=async e=>{let t=await re(`Image or video`,r.visualExtensions??ui);if(!t)return;if(t.kind===`audio`)return v(`That is an audio file; add it as narration instead.`);let n=e.visual;A(e.id,{visual:{name:t.name,label:t.label,kind:t.kind,anchor:n?.anchor??e.pose.target,normal:n?.normal??vi(fi(e.pose.eye,e.pose.target),r.up),sizeM:n?.sizeM??.9144,liftM:n?.liftM??Yr,sound:n?.sound??!e.narration,loop:n?.loop??!1,waitForEnd:n?.waitForEnd??!0}})},oe=(0,_.useRef)({placing:y,poi:O});oe.current={placing:y,poi:O},(0,_.useEffect)(()=>{let e=r.canvas;if(!e||!y)return;let t=null,n=e=>t={x:e.clientX,y:e.clientY},i=async n=>{let{poi:i}=oe.current;if(!t||n.button!==0||!i?.visual||Math.hypot(n.clientX-t.x,n.clientY-t.y)>4)return;let a=e.getBoundingClientRect(),o=r.viewer,s=await o?.pick(n.clientX-a.left,n.clientY-a.top);!s||!o?v(`Nothing solid there; click on a surface.`):(j(i.id,{anchor:s,normal:vi(fi(o.getPose().eye,s),r.up)}),b(!1),v(null))},a=e=>e.key===`Escape`&&b(!1);return e.addEventListener(`pointerdown`,n),e.addEventListener(`pointerup`,i),window.addEventListener(`keydown`,a),()=>{e.removeEventListener(`pointerdown`,n),e.removeEventListener(`pointerup`,i),window.removeEventListener(`keydown`,a)}},[y,r.canvas]),(0,_.useEffect)(()=>b(!1),[i]),(0,_.useEffect)(()=>{let e=r.viewer;if(!e)return;if(!n.points.length){e.setOverlay(`tour`,null);return}let t=z(r.up),a=r.sceneRadius*.012,[o,s]=_i(t);e.setOverlay(`tour`,n.points.flatMap(e=>{let n=e.id===i?ci:si,r=e.id===i?1.6:1,c=e.pose.target,l=di(c,pi(t,3*a*r)),u=[o,s,pi(o,-1),pi(s,-1)].map(e=>di(di(c,pi(t,2*a*r)),pi(e,a*r)));return[[c,l,n],...u.map((e,t)=>[e,u[(t+1)%4],n]),...u.map(e=>[e,l,n]),...u.map(e=>[e,c,n])]}))},[n.points,i,r.viewer,r.up,r.sceneRadius]),(0,_.useEffect)(()=>()=>r.viewer?.setOverlay(`tour`,null),[r.viewer]);let se=r.units===`m`?1:.3048,ce=e=>`${(e/se).toFixed(2)} ${r.units}`,le=e=>{let[t,n]=_i(r.up);return Math.atan2(mi(e,n),mi(e,t))*180/Math.PI},ue=e=>{let[t,n]=_i(r.up),i=e*Math.PI/180;return di(pi(t,Math.cos(i)),pi(n,Math.sin(i)))};return(0,R.jsxs)(`div`,{ref:l,className:`tour-window ${s.min?`min`:``}`,style:{left:s.x,top:s.y,maxHeight:`calc(100% - ${s.y+10}px)`},children:[(0,R.jsxs)(`div`,{className:`tour-window-head`,title:`Drag to move`,onPointerDown:d,children:[(0,R.jsx)(`strong`,{children:`Story tour`}),s.min&&n.points.length>0&&(0,R.jsxs)(`span`,{className:`small muted`,children:[n.points.length,` point`,n.points.length===1?``:`s`]}),(0,R.jsx)(`span`,{className:`spacer`}),s.min&&(0,R.jsx)(`button`,{className:`icon-button`,disabled:!E.length,title:`Play the tour`,onClick:()=>e.onPlay(E.map(e=>e.id),0),children:`▶`}),(0,R.jsx)(`button`,{className:`icon-button`,title:s.min?`Restore`:`Minimise`,onClick:()=>c(e=>({...e,min:!e.min})),children:s.min?`▢`:`–`}),(0,R.jsx)(`button`,{className:`icon-button remove`,title:`Close (Story tour in the top bar opens it again)`,onClick:e.onClose,children:`×`})]}),!s.min&&(0,R.jsxs)(`section`,{className:`tour-window-body`,children:[(0,R.jsxs)(`p`,{className:`small muted hint`,children:[`Points of interest: each saves this view and the scene's look (`,o,`), with a title, tags, text, narration and an image or video. Play visits them in order.`]}),(0,R.jsxs)(`div`,{className:`row`,children:[(0,R.jsx)(`button`,{className:`ghost`,title:`Save the current view and look as a new point (after the selected one)`,onClick:ee,children:`+ Point here`}),(0,R.jsx)(`button`,{className:`primary`,disabled:!E.length,title:f?`Play the points tagged “${f}”`:`Play the tour from the first point`,onClick:()=>e.onPlay(E.map(e=>e.id),0),children:`▶ Play`}),(0,R.jsx)(`button`,{className:`ghost`,disabled:!O||!E.includes(O),title:`Play from the selected point`,onClick:()=>O&&e.onPlay(E.map(e=>e.id),E.indexOf(O)),children:`▶ From here`})]}),T.length>0&&(0,R.jsxs)(`div`,{className:`tag-filter`,children:[(0,R.jsx)(`span`,{className:`small muted`,children:`Tags`}),(0,R.jsx)(`button`,{className:`tag ${f===null?`active`:``}`,onClick:()=>p(null),children:`All`}),T.map(e=>(0,R.jsx)(`button`,{className:`tag ${f===e?`active`:``}`,title:`Show and play only these points`,onClick:()=>p(f===e?null:e),children:e},e))]}),E.length>0&&(0,R.jsx)(`ol`,{className:`poi-list`,children:E.map(e=>{let t=n.points.indexOf(e);return(0,R.jsxs)(`li`,{className:e.id===i?`active`:``,children:[(0,R.jsxs)(`button`,{className:`poi-name`,title:`Go to this point (its view and look)`,onClick:()=>M(e),children:[(0,R.jsx)(`span`,{className:`poi-num`,children:t+1}),(0,R.jsx)(`span`,{className:`poi-title`,children:e.title||`Untitled`}),(0,R.jsxs)(`span`,{className:`poi-icons muted`,children:[e.narration?`♪`:``,e.visual?e.visual.kind===`video`?`▶`:`▣`:``]})]}),(0,R.jsx)(`button`,{className:`icon-button`,title:`Move up`,disabled:t===0,onClick:()=>N(e.id,-1),children:`↑`}),(0,R.jsx)(`button`,{className:`icon-button`,title:`Move down`,disabled:t===n.points.length-1,onClick:()=>N(e.id,1),children:`↓`}),(0,R.jsx)(`button`,{className:`icon-button remove`,title:`Delete this point`,onClick:()=>te(e.id),children:`×`})]},e.id)})}),!n.points.length&&(0,R.jsx)(`p`,{className:`small muted hint`,children:`Frame a view, set the scene up as it should look there, then + Point here.`}),O&&(0,R.jsxs)(`div`,{className:`poi-props`,children:[(0,R.jsxs)(`label`,{className:`field wide`,children:[(0,R.jsx)(`span`,{children:`Title`}),(0,R.jsx)(`input`,{type:`text`,value:O.title,onChange:e=>A(O.id,{title:e.target.value})})]}),(0,R.jsxs)(`div`,{className:`field wide`,children:[(0,R.jsx)(`span`,{children:`Tags`}),(0,R.jsxs)(`div`,{className:`tag-edit`,children:[O.tags.map(e=>(0,R.jsxs)(`span`,{className:`tag active`,children:[e,(0,R.jsx)(`button`,{title:`Remove tag`,onClick:()=>A(O.id,{tags:O.tags.filter(t=>t!==e)}),children:`×`})]},e)),(0,R.jsx)(`input`,{type:`text`,list:`tour-tags`,placeholder:`add tag…`,value:x,onChange:e=>{e.target.value.includes(`,`)?ne(e.target.value):S(e.target.value)},onKeyDown:e=>{e.key===`Enter`&&x.trim()&&ne(x),e.key===`Backspace`&&!x&&O.tags.length&&A(O.id,{tags:O.tags.slice(0,-1)})},onBlur:()=>x.trim()&&ne(x)}),(0,R.jsx)(`datalist`,{id:`tour-tags`,children:T.filter(e=>!O.tags.includes(e)).map(e=>(0,R.jsx)(`option`,{value:e},e))})]})]}),(0,R.jsxs)(`label`,{className:`field wide top`,children:[(0,R.jsx)(`span`,{children:`Text`}),(0,R.jsx)(`textarea`,{rows:4,placeholder:`What this view shows; appears in a caption while the point plays.`,value:O.description,onChange:e=>A(O.id,{description:e.target.value})})]}),(0,R.jsxs)(`div`,{className:`row`,children:[(0,R.jsx)(`button`,{className:`ghost`,title:`Save the current view to this point`,onClick:()=>A(O.id,{pose:r.viewer.getPose()}),children:`Update view`}),(0,R.jsx)(`button`,{className:`ghost`,title:`Save the scene's current look (${o}) to this point`,onClick:()=>A(O.id,{settings:r.snapshot(),applySettings:!0}),children:`Update look`})]}),(0,R.jsxs)(`label`,{className:`check small`,title:`Off: arriving here keeps whatever look the scene has`,children:[(0,R.jsx)(`input`,{type:`checkbox`,checked:O.applySettings&&!!O.settings,disabled:!O.settings,onChange:e=>A(O.id,{applySettings:e.target.checked})}),`Apply its look`]}),O.settings&&O.applySettings&&(0,R.jsx)(`p`,{className:`small muted hint`,children:r.describe(O.settings)}),(0,R.jsx)(Ii,{label:`Narration`,file:O.narration,busy:!!m,add:()=>ie(O),remove:()=>A(O.id,{narration:null}),children:O.narration&&(0,R.jsx)(`audio`,{className:`narration-preview`,src:r.mediaUrl(O.narration.name),controls:!0,preload:`metadata`})}),(0,R.jsx)(Ii,{label:O.visual?.kind===`video`?`Video`:O.visual?`Image`:`Image/video`,file:O.visual,busy:!!m,add:()=>ae(O),remove:()=>A(O.id,{visual:null}),children:O.visual&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(a,{label:`Size`,value:O.visual.sizeM,min:Jr,max:.9144,step:.01,format:ce,title:`Longest side of the plane in the scene (at most 3 ft)`,onChange:e=>j(O.id,{sizeM:e})}),(0,R.jsx)(a,{label:`Height`,value:O.visual.liftM,min:-1,max:3,step:.01,format:ce,title:`Gap between the point it stands on and its bottom edge`,onChange:e=>j(O.id,{liftM:e})}),(0,R.jsx)(a,{label:`Turn`,value:Math.round(le(O.visual.normal)),min:-180,max:180,step:1,format:e=>`${e}°`,title:`Which way the plane faces, around the scene's up axis`,onChange:e=>j(O.id,{normal:ue(e)})}),(0,R.jsxs)(`div`,{className:`row`,children:[(0,R.jsx)(`button`,{className:y?`primary`:`ghost`,title:`Click a surface in the view: the plane stands there, facing you`,onClick:()=>b(!y),children:y?`Click a surface…`:`Place at click`}),(0,R.jsx)(`button`,{className:`ghost`,title:`Turn the plane to face the current view`,onClick:()=>r.viewer&&j(O.id,{normal:vi(fi(r.viewer.getPose().eye,O.visual.anchor),r.up)}),children:`Face this view`})]}),O.visual.kind===`video`&&(0,R.jsxs)(`div`,{className:`checks`,children:[(0,R.jsxs)(`label`,{className:`check small`,children:[(0,R.jsx)(`input`,{type:`checkbox`,checked:O.visual.sound,onChange:e=>j(O.id,{sound:e.target.checked})}),`Video sound`]}),(0,R.jsxs)(`label`,{className:`check small`,children:[(0,R.jsx)(`input`,{type:`checkbox`,checked:O.visual.loop,onChange:e=>j(O.id,{loop:e.target.checked})}),`Loop`]}),(0,R.jsxs)(`label`,{className:`check small`,title:`The point lasts until the video has played to the end`,children:[(0,R.jsx)(`input`,{type:`checkbox`,checked:O.visual.waitForEnd&&!O.visual.loop,disabled:O.visual.loop,onChange:e=>j(O.id,{waitForEnd:e.target.checked})}),`Wait for the end`]})]}),!r.metersPerUnit&&(0,R.jsx)(`p`,{className:`small muted hint`,children:`No scale set: sizes are estimated. Set it under Scale & units.`})]})}),(0,R.jsx)(a,{label:`Stay for`,value:O.holdS,min:0,max:60,step:.5,format:e=>`${e.toFixed(1)} s`,title:`Seconds to stay after the narration (and a waited-for video) ends; alone, how long the point shows`,onChange:e=>A(O.id,{holdS:e})})]}),m&&(0,R.jsx)(`p`,{className:`small muted hint`,children:m}),g&&(0,R.jsx)(`p`,{className:`small hint error`,children:g}),n.points.length>0&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(a,{label:`Fly between`,value:n.transitionS,min:0,max:10,step:.1,format:e=>e<=0?`cut`:`${e.toFixed(1)} s`,title:`How long the camera takes from one point to the next`,onChange:e=>k({...n,transitionS:e})}),(0,R.jsxs)(`label`,{className:`check small`,title:`Off: wait for Next at every point`,children:[(0,R.jsx)(`input`,{type:`checkbox`,checked:n.autoAdvance,onChange:e=>k({...n,autoAdvance:e.target.checked})}),`Go on to the next point automatically`]})]})]})]})}function Ii(e){return(0,R.jsxs)(`div`,{className:`media-row`,children:[(0,R.jsxs)(`div`,{className:`media-head`,children:[(0,R.jsx)(`span`,{className:`small muted`,children:e.label}),e.file?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`span`,{className:`small media-name`,title:e.file.label,children:e.file.label}),(0,R.jsx)(`button`,{className:`icon-button`,disabled:e.busy,title:`Replace with another file`,onClick:e.add,children:`⇄`}),(0,R.jsx)(`button`,{className:`icon-button remove`,title:`Remove`,onClick:e.remove,children:`×`})]}):(0,R.jsx)(`button`,{className:`ghost`,disabled:e.busy,onClick:e.add,children:`+ Add…`})]}),e.children]})}function Li(e){let{tour:t,scene:n}=e,r=(0,_.useMemo)(()=>e.ids.map(e=>t.points.find(t=>t.id===e)).filter(e=>!!e),[e.ids,t.points]),[i,a]=(0,_.useState)({index:Math.min(e.startAt,r.length-1),visit:0}),[o,s]=(0,_.useState)(-1),c=o===i.visit,[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(!1),[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(0),[S,C]=(0,_.useState)(!0),[w,T]=(0,_.useState)([]),E=(0,_.useRef)(null),D=(0,_.useRef)(null),O=r[i.index]??null,k=i.index>=r.length-1,A=(0,_.useRef)({flightT:0,from:null,holdT:0,audioDone:!0,videoDone:!0}),j=e=>{if(e<0||e>=r.length||h)return;let t=E.current;E.current=null,t&&(T(e=>[...e,t]),window.setTimeout(()=>T(e=>e.filter(e=>e.visit!==t.visit)),500)),a(t=>({index:e,visit:t.visit+1}))},M=()=>{h||(D.current?.pause(),g(!0),window.setTimeout(e.onExit,ei))},ee=()=>{let e=n.viewer;e&&O&&(A.current.from=e.getPose(),A.current.flightT=0,u(!0))},te=(0,_.useRef)({poi:O,paused:d,arrived:c,flying:l,finished:p,scene:n,tour:t,last:k,visit:i.visit,goTo:j,exiting:h,index:i.index});te.current={poi:O,paused:d,arrived:c,flying:l,finished:p,scene:n,tour:t,last:k,visit:i.visit,goTo:j,exiting:h,index:i.index},(0,_.useEffect)(()=>{let e=O,r=n.viewer;if(!e||!r)return;e.applySettings&&e.settings&&n.apply(e.settings);let a=A.current;a.from=r.getPose(),a.flightT=0,a.holdT=0,a.audioDone=!e.narration,a.videoDone=!(e.visual?.kind===`video`&&e.visual.waitForEnd&&!e.visual.loop),m(!1),y(null),x(0),f(!1),t.transitionS>0?u(!0):(r.setPose(e.pose),u(!1),s(i.visit))},[i]),(0,_.useEffect)(()=>{c&&O&&(E.current={visit:i.visit,poi:O})},[c,O,i.visit]),(0,_.useEffect)(()=>{let e=0,t=performance.now(),n=r=>{e=requestAnimationFrame(n);let i=Math.min(.1,(r-t)/1e3);t=r;let{poi:a,paused:o,arrived:c,flying:l,finished:d,scene:f,tour:p,last:h,visit:g,goTo:_,exiting:v,index:b}=te.current,x=f.viewer,S=A.current;if(!a||!x||o||v)return;if(l&&S.from){S.flightT+=i;let e=c?Math.min(1.5,p.transitionS||1):p.transitionS,t=Math.min(1,S.flightT/Math.max(e,.001));x.setPose(Ci(S.from,a.pose,t,f.up)),t>=1&&(u(!1),s(g));return}if(!c||d||!S.audioDone||!S.videoDone)return;S.holdT+=i;let C=Math.max(0,a.holdS-S.holdT);y(Math.ceil(C)),C<=0&&(m(!0),y(null),p.autoAdvance&&!h&&_(b+1))};return e=requestAnimationFrame(n),()=>cancelAnimationFrame(e)},[]),(0,_.useEffect)(()=>{let e=n.canvas;if(!e||!l)return;let t=()=>{u(!1),s(te.current.visit)};return e.addEventListener(`pointerdown`,t),e.addEventListener(`wheel`,t),()=>{e.removeEventListener(`pointerdown`,t),e.removeEventListener(`wheel`,t)}},[l,n.canvas]),(0,_.useEffect)(()=>{let e=D.current;e&&(c&&!d&&!h&&!A.current.audioDone?e.play().catch(()=>{A.current.audioDone=!0}):e.pause())},[c,d,h,i,O?.narration?.name]),(0,_.useEffect)(()=>{let e=D.current;return()=>e?.pause()},[]);let N=(0,_.useRef)({exit:M,goTo:j,index:i.index});if(N.current={exit:M,goTo:j,index:i.index},(0,_.useEffect)(()=>{let e=e=>{let t=e.target;if(t&&(t.isContentEditable||[`INPUT`,`SELECT`,`TEXTAREA`].includes(t.tagName)))return;let n=N.current;if(e.key===`Escape`)n.exit();else if(e.key===` `)f(e=>!e);else if(e.key===`ArrowRight`)n.goTo(n.index+1);else if(e.key===`ArrowLeft`)n.goTo(n.index-1);else return;e.preventDefault()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),!O)return null;let ne=p&&!(t.autoAdvance&&!k),re=!O.visual,ie=()=>{A.current.videoDone=!0};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`div`,{className:`holo-layer`,children:[...w.map(e=>({...e,state:`leaving`})),{visit:i.visit,poi:O,state:h?`leaving`:c?`shown`:`hidden`}].map(e=>(0,R.jsx)(Ni,{poi:e.poi,scene:n,state:e.state,paused:d,onVideoEnded:e.visit===i.visit?ie:()=>{}},e.visit))}),O.narration&&(0,R.jsx)(`audio`,{ref:D,src:n.mediaUrl(O.narration.name),preload:`auto`,onTimeUpdate:e=>x(e.currentTarget.duration?e.currentTarget.currentTime/e.currentTarget.duration:0),onEnded:()=>{A.current.audioDone=!0,x(1)},onError:()=>{A.current.audioDone=!0}},`${i.visit}-${O.narration.name}`),!h&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`button`,{className:`tour-exit`,title:`Leave the tour and look around freely (Esc)`,onClick:M,children:`✕ Exit tour`}),(0,R.jsxs)(`div`,{className:`tour-caption`,children:[(0,R.jsxs)(`div`,{className:`tour-caption-head`,children:[(0,R.jsxs)(`span`,{className:`tour-count small muted`,children:[i.index+1,` / `,r.length]}),(0,R.jsx)(`strong`,{className:`tour-title`,children:O.title||`Untitled`}),O.tags.map(e=>(0,R.jsx)(`span`,{className:`tag active small`,children:e},e)),(0,R.jsx)(`span`,{className:`spacer`}),O.description&&!re&&(0,R.jsx)(`button`,{className:`icon-button`,title:S?`Hide the text`:`Show the text`,onClick:()=>C(!S),children:S?`▾`:`▸`})]}),S&&O.description&&!re&&(0,R.jsx)(`p`,{className:`tour-text`,children:O.description}),O.narration&&(0,R.jsx)(`div`,{className:`bar tour-narration`,title:`Narration`,children:(0,R.jsx)(`div`,{style:{width:`${Math.round(b*100)}%`}})}),(0,R.jsxs)(`div`,{className:`tour-controls`,children:[(0,R.jsx)(`button`,{className:`ghost`,disabled:i.index===0,title:`Previous point (←)`,onClick:()=>j(i.index-1),children:`‹ Prev`}),(0,R.jsx)(`button`,{className:`ghost`,title:d?`Play (Space)`:`Pause (Space)`,onClick:()=>f(!d),children:d?`▶ Play`:`❚❚ Pause`}),(0,R.jsx)(`button`,{className:ne&&!k?`primary`:`ghost`,disabled:k,title:`Next point (→)`,onClick:()=>j(i.index+1),children:`Next ›`}),(0,R.jsx)(`button`,{className:`ghost`,disabled:l,title:`Fly back to this point's view`,onClick:ee,children:`⟲ View`}),(0,R.jsx)(`span`,{className:`spacer`}),(0,R.jsx)(`span`,{className:`tour-dots`,children:r.map((e,t)=>(0,R.jsx)(`button`,{className:t===i.index?`active`:``,title:e.title||`Point ${t+1}`,onClick:()=>j(t)},e.id))})]}),(0,R.jsxs)(`div`,{className:`small muted tour-status`,children:[l?`Flying there… (drag to stop and look around)`:p&&k?`End of the tour.`:ne?`Next › when you're ready.`:d?`Paused.`:v!==null&&v>0?`Next in ${v} s`:`You can orbit, pan and fly around while it plays.`,p&&k&&(0,R.jsxs)(R.Fragment,{children:[` `,(0,R.jsx)(`button`,{className:`link`,onClick:()=>j(0),children:`Play again`})]})]})]})]})]})}var Ri=`splatforge`,zi=`splatforge`,Bi={m:1,ft:.3048};function Vi(e,t,n){return!e||!t.enabled?null:{...e,level:Math.max(0,t.levelM+t.offsetM)/e.metersPerUnit,floodMap:n}}function Hi(e,t){let n=(e,t,n,r)=>typeof e==`number`&&Number.isFinite(e)?Math.min(r,Math.max(n,e)):t;return{enabled:typeof e?.enabled==`boolean`?e.enabled:t.enabled,levelM:n(e?.levelM,t.levelM,0,15),offsetM:n(e?.offsetM,t.offsetM,-2,2),units:e?.units===`ft`||e?.units===`m`?e.units:t.units}}var Ui=101010256,Wi=117853008,Gi=101075792,Ki=33639248,qi=67324752,Ji=65577,Yi=async(e,t,n)=>new DataView(await e.slice(t,n).arrayBuffer()),Xi=(e,t)=>Number(e.getBigUint64(t,!0));async function Zi(e){let t=await Yi(e,Math.max(0,e.size-Ji),e.size),n=-1;for(let e=t.byteLength-22;e>=0;e--)if(t.getUint32(e,!0)===Ui){n=e;break}if(n<0)throw Error(`not a zip file`);let r=t.getUint16(n+10,!0),i=t.getUint32(n+12,!0),a=t.getUint32(n+16,!0);if(r===65535||i===4294967295||a===4294967295){let o=n-20;if(o<0||t.getUint32(o,!0)!==Wi)throw Error(`damaged zip (no Zip64 record)`);let s=Xi(t,o+8),c=await Yi(e,s,s+56);if(c.getUint32(0,!0)!==Gi)throw Error(`damaged zip (bad Zip64 record)`);r=Xi(c,32),i=Xi(c,40),a=Xi(c,48)}let o=await Yi(e,a,a+i),s=new TextDecoder,c=new Map,l=0;for(let e=0;e<r;e++){if(o.getUint32(l,!0)!==Ki)throw Error(`damaged zip (bad directory)`);let e=o.getUint16(l+10,!0),t=o.getUint32(l+20,!0),n=o.getUint32(l+24,!0),r=o.getUint16(l+28,!0),i=o.getUint16(l+30,!0),a=o.getUint16(l+32,!0),u=o.getUint32(l+42,!0),d=s.decode(new Uint8Array(o.buffer,o.byteOffset+l+46,r)),f=l+46+r,p=f+i;for(;f+4<=p;){let e=o.getUint16(f,!0),r=o.getUint16(f+2,!0);if(e===1){let e=f+4;n===4294967295&&(n=Xi(o,e),e+=8),t===4294967295&&(t=Xi(o,e),e+=8),u===4294967295&&(u=Xi(o,e))}f+=4+r}d.endsWith(`/`)||c.set(d,{name:d,method:e,compressedSize:t,size:n,localOffset:u}),l=p+a}return c}async function Qi(e,t,n=``){let r=await Yi(e,t.localOffset,t.localOffset+30);if(r.getUint32(0,!0)!==qi)throw Error(`damaged zip (${t.name})`);let i=t.localOffset+30+r.getUint16(26,!0)+r.getUint16(28,!0),a=e.slice(i,i+t.compressedSize,n);if(t.method===0)return a;if(t.method!==8)throw Error(`${t.name}: unsupported compression`);let o=a.stream().pipeThrough(new DecompressionStream(`deflate-raw`)),s=await new Response(o).blob();return n?s.slice(0,s.size,n):s}var $i={json:`application/json`,jpg:`image/jpeg`,jpeg:`image/jpeg`,png:`image/png`,webp:`image/webp`,gif:`image/gif`,bmp:`image/bmp`,mp4:`video/mp4`,m4v:`video/mp4`,mov:`video/quicktime`,webm:`video/webm`,mp3:`audio/mpeg`,wav:`audio/wav`,m4a:`audio/mp4`,aac:`audio/aac`,ogg:`audio/ogg`,oga:`audio/ogg`,opus:`audio/ogg`,flac:`audio/flac`},ea=e=>e.split(`.`).pop()?.toLowerCase()??``,ta=e=>{if(typeof e==`string`)throw Error(`the web Viewer opens files picked on this device`);return e},na=e=>ea(e)===`splatforge`||Sr.includes(ea(e)),ra=!matchMedia(`(pointer: coarse)`).matches,B={web:!0,nameOf:e=>typeof e==`string`?e:e.name,chooseFile:e=>new Promise(t=>{let n=document.createElement(`input`);n.type=`file`,ra&&(n.accept=e[0].extensions.map(e=>`.${e}`).join(`,`)),n.onchange=()=>t(n.files?.[0]??null),n.addEventListener(`cancel`,()=>t(null)),n.click()}),confirm:async e=>window.confirm(e),readFile:e=>ta(e).arrayBuffer(),openPackage:async e=>{let t=ta(e);if(ea(t.name)!==`splatforge`)throw Error(`not a .splatforge, .ply, .spz or .splat file`);let n=await Zi(t),r=new Map;await Promise.all([...n.values()].map(async e=>r.set(e.name,await Qi(t,e,$i[ea(e.name)]??``))));let i=new Map,a=e=>{let t=r.get(e);if(!t)throw Error(`${e} is missing from the file`);return t};return{get:async e=>new Response(a(e)),url:e=>{let t=i.get(e);return t||i.set(e,t=r.has(e)?URL.createObjectURL(a(e)):`about:blank#missing-${e}`),t},dispose:()=>i.forEach(e=>e.startsWith(`blob:`)&&URL.revokeObjectURL(e))}},savePackage:null,pickMedia:null,importMedia:null,attach:({open:e,badDrop:t,dirty:n})=>{let r=e=>e.preventDefault(),i=n=>{n.preventDefault();let r=[...n.dataTransfer?.files??[]],i=r.find(e=>na(e.name));i?e(i):r.length&&t()},a=e=>{n()&&e.preventDefault()};return window.addEventListener(`dragover`,r),window.addEventListener(`drop`,i),window.addEventListener(`beforeunload`,a),()=>{window.removeEventListener(`dragover`,r),window.removeEventListener(`drop`,i),window.removeEventListener(`beforeunload`,a)}}},V={enabled:!1,levelM:1,offsetM:0,units:`m`},ia=2,aa=matchMedia(`(pointer: coarse)`).matches,oa=aa?1e6:3e6,sa=aa?1.5:1/0,ca=aa?{levels:[{pixelRatio:1.5,budget:15e5},{pixelRatio:1.25,budget:1e6},{pixelRatio:1,budget:7e5},{pixelRatio:1,budget:5e5},{pixelRatio:.85,budget:35e4},{pixelRatio:.7,budget:25e4}],start:2,targetMs:20}:{levels:[{pixelRatio:1/0,budget:3e6},{pixelRatio:1.5,budget:2e6},{pixelRatio:1.25,budget:15e5},{pixelRatio:1,budget:1e6},{pixelRatio:1,budget:6e5}],start:0,targetMs:20},la=aa?30:0,ua=[`mp3`,`wav`,`m4a`,`aac`,`ogg`,`oga`,`opus`,`flac`,`mp4`],da=[`jpg`,`jpeg`,`png`,`webp`,`gif`,`bmp`,`mp4`,`m4v`,`mov`,`webm`],fa=8e3,pa={name:`Splat Forge file`,extensions:[Ri]},ma=[{name:`Splat Forge or splat file`,extensions:[Ri,...Sr]},pa,{name:`Splat file (PLY, SPZ, .splat)`,extensions:Sr}],ha=50*Math.PI/180,ga=B.nameOf,_a=e=>e instanceof Error?e.message:String(e),va=e=>e.split(`.`).pop()?.toLowerCase()??``;async function ya(e,t){let[n,r]=await Promise.all([t(e.splats).then(e=>e.arrayBuffer()),t(e.mesh).then(e=>e.arrayBuffer()).then(Zt)]);return{key:e.id,data:new Rt(n),placement:{position:e.position,rotation:e.rotation,scale:e.scale,pivot:e.pivot,calibration:e.calibration},visible:!0,mesh:r}}function ba(e,t,n){let r=Vr(t,n),i=r.target.map((e,t)=>e+r.dir[t]*r.distance);return{format:zi,version:2,splats:t.count,title:e,view:{home:{eye:i,target:r.target,fovy:ha},capture:r,overview:r,near:r.radius*.001,metersPerUnit:null},water:null,waterState:V,sky:null,lighting:null}}function xa(e,t){return new Promise((n,r)=>{let i=()=>r(Error(`can't be played`)),a=window.setTimeout(i,fa),o=e=>{window.clearTimeout(a),e?n():i()};if(t===`image`){let t=new Image;t.onload=()=>o(t.naturalWidth>0),t.onerror=()=>o(!1),t.src=e;return}let s=document.createElement(t);s.preload=`metadata`,s.muted=!0,s.onloadedmetadata=()=>o(t===`audio`||s.videoWidth>0),s.onerror=()=>o(!1),s.src=e})}function Sa(e){let t=e;return!t||!Array.isArray(t.points)?Kr:{points:t.points.filter(e=>e&&typeof e.id==`string`&&e.pose),transitionS:typeof t.transitionS==`number`?t.transitionS:Kr.transitionS,autoAdvance:typeof t.autoAdvance==`boolean`?t.autoAdvance:Kr.autoAdvance}}function Ca(){let e=(0,_.useRef)(null),t=(0,_.useRef)(null),n=(0,_.useRef)(null),r=(0,_.useRef)(0),i=(0,_.useRef)(null),a=(0,_.useRef)(!1),o=(0,_.useRef)(null),[s,c]=(0,_.useState)(null),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(Kr),[h,g]=(0,_.useState)(!1),v=(0,_.useRef)(!1);v.current=h;let[y,b]=(0,_.useState)(V),x=(0,_.useRef)(y);x.current=y;let[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(!1),[E,D]=(0,_.useState)(null),[O,k]=(0,_.useState)(null),A=(0,_.useRef)(null),j=s?.manifest??null,M=j?.water??null,ee=async a=>{if(v.current&&!await B.confirm(`The story tour has unsaved changes. Open another file anyway?`))return;let s=++r.current,l=ga(a);u(`Opening ${l}…`),f(null);let d=null;try{let u=va(l)!==Ri,p,h,_=null,v=null,y=[];if(u){let e=await Dr(l,await B.readFile(a));h=e.data,p=ba(l,h,e.up)}else{d=await B.openPackage(a);let e=d.get;if(p=await e(`manifest.json`).then(e=>e.json()),p.format!==`splatforge`)throw Error(`not a Splat Forge file`);if(p.version>2)throw Error(`it was made by a newer Splatforge: update Splat Forge Viewer`);if(!p.view?.home||!p.view.capture||!p.view.overview)throw Error(`its manifest is incomplete`);let t=p.files,[n,r,i]=await Promise.all([e(t?.splat??`splat.bin`).then(e=>e.arrayBuffer()),t?.flood?e(t.flood).then(e=>e.arrayBuffer()):Promise.resolve(null),e(`tour.json`).then(e=>e.json()).catch(()=>null)]);h=new Rt(n),_=r,v=i,y=await Promise.all((p.objects??[]).map(t=>ya(t,e)))}n.current??=Hn.create(e.current).then(e=>(e.onGpuError=e=>f(`Graphics error: ${e}`),B.web&&(e.setAdaptiveQuality(ca),e.setAnimationFps(la),window.__viewer=e),t.current=e,e));let x=await n.current.catch(e=>{throw n.current=null,e});if(s!==r.current)return;x.setNear(p.view.near),x.setData(h),x.setObjects(y),i.current=u?h:null,x.setLod(ia,oa),x.setMaxPixelRatio(sa),x.setHome(p.view.capture),x.setUpAxis(p.view.capture.up),x.setPose(p.view.origin??p.view.home),x.setSky(p.sky?.file&&d?{...p.sky,url:d.url(p.sky.file)}:null),x.setLighting(p.lighting?.lighting??null,p.lighting?.scene??null),x.setFog(p.fog?.fog??null,p.fog?.scene??null),x.setFogLive(!0),x.setDust(p.dust?.dust??null,p.dust?.scene??null);let S=Sa(v);o.current?.dispose(),o.current=d,d=null,c({source:a,files:o.current,manifest:p,floodMap:_?Pn(_):null,plain:u}),b(Hi(p.waterState,V)),m(S),g(!1),D(null),k(null),T(S.points.length>0),u&&f(`${h.count.toLocaleString()} splats. Upside down? Use Flip.`)}catch(e){if(s!==r.current)return;f(e instanceof se?`This computer's graphics don't support WebGPU, which Splat Forge Viewer needs.`:`Could not open ${l}: ${_a(e)}`)}finally{d?.dispose(),s===r.current&&u(null)}},te=(0,_.useRef)(ee);te.current=ee;let N=async()=>{let e=await B.chooseFile(ma);e&&ee(e)},ne=async e=>{if(s&&!s.plain&&s.files&&B.savePackage){u(e?`Saving…`:`Saving ${ga(s.source)}…`),f(null);try{let t=await B.savePackage(s.source,s.files,JSON.stringify(p),e,pa);if(!t)return;c({...s,source:t}),g(!1),f(`Saved ${ga(t)}.`)}catch(e){f(`Could not save: ${_a(e)}`)}finally{u(null)}}},re=(0,_.useRef)(ne);re.current=ne,(0,_.useEffect)(()=>{let e=!a.current;a.current=!0;let t=B.attach({open:t=>{(e||typeof t!=`string`)&&te.current(t)},badDrop:()=>f(`Drop a .splatforge file (exported from Splatforge), or a .ply, .spz or .splat file.`),dirty:()=>v.current}),n=e=>{(e.ctrlKey||e.metaKey)&&(e.key===`s`?(e.preventDefault(),re.current(e.shiftKey)):e.key===`o`&&(e.preventDefault(),N()))};return window.addEventListener(`keydown`,n),()=>{t(),window.removeEventListener(`keydown`,n)}},[]),(0,_.useEffect)(()=>()=>{t.current?.destroy(),o.current?.dispose()},[]),(0,_.useEffect)(()=>{s&&t.current?.setWater(Vi(M,y,s.floodMap))},[y,s,M]);let ie=y.units,ae=e=>`${(e/Bi[ie]).toFixed(2)} ${ie}`,oe=e=>`${e>0?`+`:e<0?`−`:`±`}${ae(Math.abs(e))}`,ce=e=>e.enabled?`Water: ${ae(e.levelM)}${e.offsetM?` (line offset ${oe(e.offsetM)})`:``}, in ${e.units===`m`?`metres`:`feet`}.`:`Water: off (lengths in ${e.units===`m`?`metres`:`feet`}).`,le=(0,_.useMemo)(()=>j?.view.capture.up??[0,1,0],[j]),ue=s?.files??null,de={viewer:t.current,canvas:e.current,up:le,sceneRadius:j?.view.overview.radius??1,metersPerUnit:j?.view.metersPerUnit??M?.metersPerUnit??null,units:ie,mediaUrl:e=>ue?.url(`media/${e}`)??``,pickFile:async(e,t)=>B.pickMedia?B.pickMedia(e,t):(f(`Adding photos, video or narration needs Splat Forge Viewer on a computer.`),null),importMedia:async e=>{if(!ue||!B.importMedia)throw Error(`adding media needs Splat Forge Viewer on a computer`);let t=await B.importMedia(ue,e);try{await xa(ue.url(`media/${t.name}`),t.kind)}catch{throw Error(`${t.label} can't be played here (iPhone HEIC photos and HEVC videos need converting): add it in Splatforge, which converts it, or save it as JPEG / H.264 MP4 first.`)}return t},deleteMedia:()=>{},snapshot:()=>({...x.current}),apply:e=>b(t=>Hi(e,t)),describe:e=>ce(Hi(e,x.current)),lookCovers:`flood water on or off, level, units, water line offset`,narrationExtensions:ua,visualExtensions:da},fe=e=>{m(e),g(!0)},pe=(e,n)=>{e.length&&(A.current={...x.current},t.current?.setPivotMarker(!1),k({ids:e,startAt:n}))},me=()=>{k(null),t.current?.setPivotMarker(!0),A.current&&b(A.current),A.current=null},he=!O&&w?p.points.find(e=>e.id===E):void 0,ge=()=>{let e=t.current,n=j?.view.overview;e&&n&&e.setPose({eye:[n.target[0]+n.dir[0]*n.distance,n.target[1]+n.dir[1]*n.distance,n.target[2]+n.dir[2]*n.distance],target:n.target,fovy:e.getPose().fovy})},P=e=>b(t=>({...t,...e}));return(0,R.jsxs)(`div`,{className:`viewport`,children:[(0,R.jsx)(`canvas`,{ref:e}),!s&&(0,R.jsxs)(`div`,{className:`welcome`,children:[(0,R.jsx)(`h1`,{children:`Splat Forge Viewer`}),(0,R.jsx)(`p`,{className:`muted`,children:B.web?`Open a .splatforge file exported from Splatforge, or a .ply, .spz or .splat splat file${aa?``:` (or drop one here)`}. It's read on this device: nothing is uploaded.`:`Open a .splatforge file exported from Splatforge, or a .ply, .spz or .splat splat file. You can also drop one on this window.`}),(0,R.jsx)(`button`,{className:`primary`,disabled:!!l,onClick:N,children:`Open a file…`}),l&&(0,R.jsx)(`p`,{className:`muted small`,children:l}),d&&(0,R.jsx)(`p`,{className:`small error`,children:d})]}),s&&he&&(0,R.jsx)(Pi,{poi:he,scene:de}),s&&O&&(0,R.jsx)(Li,{tour:p,ids:O.ids,startAt:O.startAt,scene:de,onExit:me}),s&&!O&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(`div`,{className:`topbar`,children:[(0,R.jsxs)(`strong`,{className:`file-name`,title:ga(s.source),children:[j?.title||ga(s.source),h&&(0,R.jsx)(`span`,{className:`unsaved`,title:`The story tour has unsaved changes`,children:` •`})]}),(0,R.jsx)(`button`,{className:`ghost`,disabled:!!l,title:`Open another file (Ctrl+O)`,onClick:N,children:`Open…`}),!s.plain&&B.savePackage&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`button`,{className:h?`primary`:`ghost`,disabled:!!l||!h,title:`Save the story tour into this file (Ctrl+S)`,onClick:()=>ne(!1),children:`Save`}),(0,R.jsx)(`button`,{className:`ghost`,disabled:!!l,title:`Save as a new file to share (Ctrl+Shift+S)`,onClick:()=>ne(!0),children:`Save as…`})]}),(0,R.jsx)(`span`,{className:`divider`}),j?.view.origin&&(0,R.jsx)(`button`,{className:`ghost`,title:`The view saved with the origin in Splatforge (the file opens on it)`,onClick:()=>j.view.origin&&t.current?.setPose(j.view.origin),children:`Origin`}),(0,R.jsx)(`button`,{className:`ghost`,title:`The view Splatforge showed when the file was exported`,onClick:()=>j&&t.current?.setPose(j.view.home),children:`Start view`}),(0,R.jsx)(`button`,{className:`ghost`,title:`The whole scene`,onClick:ge,children:`Overview`}),s.plain?(0,R.jsx)(`button`,{className:`ghost`,title:`Turn the view over, for files that open upside down`,onClick:()=>{let e=t.current,n=i.current;if(!e||!s||!j||!n)return;let r=j.view.capture.up.map(e=>-e),a=ba(j.title,n,r);e.setHome(a.view.capture),e.setUpAxis(r),e.setPose(a.view.home),c({...s,manifest:a}),f(null)},children:`Flip`}):(0,R.jsx)(`button`,{className:w?`primary`:`ghost`,title:`Points of interest and the story tour (opens or closes its window)`,onClick:()=>{T(!w),w&&D(null)},children:`Story tour`})]}),(0,R.jsxs)(`aside`,{className:`water-panel ${S?`min`:``}`,hidden:s.plain,children:[(0,R.jsxs)(`div`,{className:`water-head`,children:[(0,R.jsx)(`strong`,{children:`Flood water`}),(0,R.jsx)(`span`,{className:`spacer`}),(0,R.jsx)(`button`,{className:`icon-button`,title:S?`Restore`:`Minimise`,onClick:()=>C(!S),children:S?`▢`:`–`})]}),!S&&(M?(0,R.jsxs)(`div`,{className:`water-body`,children:[(0,R.jsxs)(`label`,{className:`check`,children:[(0,R.jsx)(`input`,{type:`checkbox`,checked:y.enabled,onChange:e=>P({enabled:e.target.checked})}),`Show the flood water`]}),(0,R.jsx)(Ta,{label:`Level`,valueM:y.levelM,minM:0,maxM:15,units:ie,title:`Height of the water surface above the ground; type a value or use the arrows for small steps`,onChange:e=>P({levelM:e,enabled:!0})}),(0,R.jsxs)(`div`,{className:`field-row`,children:[(0,R.jsx)(`span`,{className:`muted small`,children:`Units`}),(0,R.jsx)(`div`,{className:`seg`,children:[`m`,`ft`].map(e=>(0,R.jsx)(`button`,{className:ie===e?`active`:``,onClick:()=>P({units:e}),children:e===`m`?`Metres`:`Feet`},e))})]}),(0,R.jsx)(Ta,{label:`Water line offset`,valueM:y.offsetM,minM:-2,maxM:2,units:ie,title:`Raises or lowers the drawn water without changing the level: lines the water line up with the scene if the ground or scale is a little off`,onChange:e=>P({offsetM:e})})]}):(0,R.jsx)(`p`,{className:`small muted water-body`,children:`This file has no flood: it was exported without a ground and scale.`}))]}),w&&(0,R.jsx)(Fi,{ui:{Slider:Da},tour:p,onChange:fe,scene:de,selected:E,onSelect:D,onPlay:pe,onClose:()=>{T(!1),D(null)}}),(0,R.jsx)(`div`,{className:`viewport-hint small muted`,children:aa?`Drag to orbit · pinch to zoom · two fingers to pan · double-tap: orbit around that point`:`Drag to orbit · right-drag to pan · scroll to zoom · double-click: orbit around that point · W A S D Q E: fly (Shift ×3, Ctrl ×¼) · Home: reset view`}),(l||d)&&(0,R.jsx)(`div`,{className:`toast small`,children:l??d})]})]})}var wa=.01;function Ta(e){let t=Bi[e.units];return(0,R.jsxs)(`label`,{className:`slider numeric`,title:e.title,children:[(0,R.jsx)(`span`,{children:e.label}),(0,R.jsx)(`input`,{type:`range`,min:e.minM,max:e.maxM,step:.005,value:e.valueM,onChange:t=>e.onChange(+t.target.value)}),(0,R.jsxs)(`span`,{className:`value`,children:[(0,R.jsx)(Ea,{value:e.valueM/t,min:e.minM/t,max:e.maxM/t,step:wa,decimals:2,onChange:n=>e.onChange(Math.min(e.maxM,Math.max(e.minM,n*t)))}),(0,R.jsx)(`span`,{className:`unit`,children:e.units})]})]})}function Ea(e){let[t,n]=(0,_.useState)(null),r=(0,_.useRef)(!1),i=(0,_.useRef)(null),a=t=>Math.min(e.max,Math.max(e.min,t)),o=(0,_.useRef)(e);return o.current=e,(0,_.useEffect)(()=>{let e=i.current;if(!e)return;let t=e=>{e.preventDefault();let t=o.current,r=a(Math.round((t.value+(e.deltaY<0?t.step:-t.step))/t.step)*t.step);t.onChange(r),n(null)};return e.addEventListener(`wheel`,t,{passive:!1}),()=>e.removeEventListener(`wheel`,t)},[]),(0,R.jsx)(`input`,{ref:i,type:`number`,className:`num`,min:e.min,max:e.max,step:e.step,value:t??e.value.toFixed(e.decimals),onFocus:t=>{n(e.value.toFixed(e.decimals)),t.target.select()},onChange:t=>{n(t.target.value);let r=parseFloat(t.target.value);Number.isFinite(r)&&r>=e.min&&r<=e.max&&e.onChange(r)},onBlur:t=>{let i=parseFloat(t.target.value);!r.current&&Number.isFinite(i)&&e.onChange(a(i)),r.current=!1,n(null)},onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur(),e.key===`Escape`&&(r.current=!0,e.currentTarget.blur())}})}function Da(e){return(0,R.jsxs)(`label`,{className:`slider`,title:e.title,children:[(0,R.jsx)(`span`,{children:e.label}),(0,R.jsx)(`input`,{type:`range`,min:e.min,max:e.max,step:e.step,value:e.value,onChange:t=>e.onChange(+t.target.value)}),(0,R.jsx)(`span`,{className:`value`,children:e.format?.(e.value)??e.value})]})}v.createRoot(document.getElementById(`root`)).render((0,R.jsx)(_.StrictMode,{children:(0,R.jsx)(Ca,{})}));