/*!
 * jQuery.scrollTo
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler
 * Licensed under MIT
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.2
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}((function(e){"use strict";var t=e.scrollTo=function(t,o,n){return e(window).scrollTo(t,o,n)};function o(t){return!t.nodeName||-1!==e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])}function n(t){return e.isFunction(t)||e.isPlainObject(t)?t:{top:t,left:t}}return t.defaults={axis:"xy",duration:0,limit:!0},e.fn.scrollTo=function(r,i,s){"object"==typeof i&&(s=i,i=0),"function"==typeof s&&(s={onAfter:s}),"max"===r&&(r=9e9),s=e.extend({},t.defaults,s),i=i||s.duration;var a=s.queue&&s.axis.length>1;return a&&(i/=2),s.offset=n(s.offset),s.over=n(s.over),this.each((function(){if(null!==r){var f,u=o(this),c=u?this.contentWindow||window:this,l=e(c),d=r,m={};switch(typeof d){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(d)){d=n(d);break}d=u?e(d):e(d,c);case"object":if(0===d.length)return;(d.is||d.style)&&(f=(d=e(d)).offset())}var p=e.isFunction(s.offset)&&s.offset(c,d)||s.offset;e.each(s.axis.split(""),(function(e,o){var n="x"===o?"Left":"Top",r=n.toLowerCase(),i="scroll"+n,x=l[i](),v=t.max(c,o);if(f)m[i]=f[r]+(u?0:x-l.offset()[r]),s.margin&&(m[i]-=parseInt(d.css("margin"+n),10)||0,m[i]-=parseInt(d.css("border"+n+"Width"),10)||0),m[i]+=p[r]||0,s.over[r]&&(m[i]+=d["x"===o?"width":"height"]()*s.over[r]);else{var w=d[r];m[i]=w.slice&&"%"===w.slice(-1)?parseFloat(w)/100*v:w}s.limit&&/^\d+$/.test(m[i])&&(m[i]=m[i]<=0?0:Math.min(m[i],v)),!e&&s.axis.length>1&&(x===m[i]?m={}:a&&(h(s.onAfterFirst),m={}))})),h(s.onAfter)}function h(t){var o=e.extend({},s,{queue:!0,duration:i,complete:t&&function(){t.call(c,d,s)}});l.animate(m,o)}}))},t.max=function(t,n){var r="x"===n?"Width":"Height",i="scroll"+r;if(!o(t))return t[i]-e(t)[r.toLowerCase()]();var s="client"+r,a=t.ownerDocument||t.document,f=a.documentElement,u=a.body;return Math.max(f[i],u[i])-Math.min(f[s],u[s])},e.Tween.propHooks.scrollLeft=e.Tween.propHooks.scrollTop={get:function(t){return e(t.elem)[t.prop]()},set:function(t){var o=this.get(t);if(t.options.interrupt&&t._last&&t._last!==o)return e(t.elem).stop();var n=Math.round(t.now);o!==n&&(e(t.elem)[t.prop](n),t._last=this.get(t))}},t}));