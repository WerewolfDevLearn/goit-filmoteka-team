function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=e.parcelRequired7c6;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequired7c6=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.e878ce35.js","8OQ7p":"icons.e91ba539.svg","2RAnE":"close.30631600.svg","5UbS1":"index.776156a6.css","jviq6":"library.a2b290c0.js"}'));var o=s("dBMb9"),r=(o=s("dBMb9"),s("97f4c"));o=s("dBMb9");async function a(t){return o.STATE.keyword?await r.default.getMovieByKeyword(o.STATE.keyword,t):await r.default.getPopMovies(t)}var l=s("7fUyS");const c=document.querySelector(".gallery"),h=document.querySelector(".blockHome"),u=h[0];h.addEventListener("submit",(async function(t){t.preventDefault();try{o.STATE.keyword=u.value;const t=await a(o.STATE.page),e=t.results.length;console.log("flag: ",e),e?(o.STATE.movies=t.results,console.log("STATE.movies: ",o.STATE.movies),c.innerHTML="",(0,l.appendCardsMarkup)((0,l.createCardMarkup)(o.STATE.movies))):function(t){const e=document.querySelector(".notification");if(console.log(t),t)return console.log("step1"),void e.classList.add("opacityZero");console.log("step2"),e.classList.remove("opacityZero"),setTimeout((()=>{e.classList.add("opacityZero")}),5e3)}(e)}catch(t){console.log(t)}}));var d,p=s("6WJPL"),f=(l=s("7fUyS"),o=s("dBMb9"),{});window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
d=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,s,o,r=Object.prototype.hasOwnProperty;for(s=1,o=arguments.length;s<o;s+=1)for(i in n=arguments[s])r.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),s=n(17),o=n(6);t.exports=function(t,e,n){i(t)?s(t,e,n):o(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),s=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(s(n,e.static),delete e.static),s(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var s,o;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,s=n;n>=0&&s<o;s+=1)if(e[s]===t)return s;return-1}},function(t,e,n){var i=n(29),s=n(30),o=n(5),r={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),s=o(t)?t(e):i(t,e);return n.innerHTML=s,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};t.exports=r},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),s=n(7),o=n(0),r=n(1),a=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},h=s({init:function(t,e){this._options=o({},c,e),this._currentPage=0,this._view=new a(t,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),s=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=i>1,e.nextMore=i<s,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,s=this._getLastPage(),o=this._options.visiblePages,r=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(o/2),(n=(e=Math.max(t-i,1))+o-1)>s&&(e=Math.max(s-o+1,1),n=s)):(e=(r-1)*o+1,n=r*o,n=Math.min(n,s)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){r(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(h),t.exports=h},function(t,e,n){var i=n(0),s=n(14),o=n(4),r=n(16),a=n(2),l=n(5),c=n(3),h=/\s+/g;function u(){this.events=null,this.contexts=null}u.mixin=function(t){i(t.prototype,u.prototype)},u.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},u.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},u.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},u.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},u.prototype._memorizeContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},u.prototype._forgetContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},u.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},u.prototype.on=function(t,e,n){var i=this;o(t)?(t=t.split(h),c(t,(function(t){i._bindEvent(t,e,n)}))):r(t)&&(n=e,c(t,(function(t,e){i.on(e,t,n)})))},u.prototype.once=function(t,e,n){var i=this;if(r(t))return n=e,void c(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function s(){e.apply(n,arguments),i.off(t,s,n)}),n)},u.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},u.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},u.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},u.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var s=t===i.handler,o=e===i.context,r=s&&o;return r&&n._forgetContext(i.context),r}},u.prototype._offByEventName=function(t,e){var n=this,i=l(e),s=n._matchHandler(e);t=t.split(h),c(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,s):(c(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},u.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},u.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?c(t,(function(t,e){i.off(e,t)})):o(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):l(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),c(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},u.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?l(t)?this._offByHandler(t):r(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},u.prototype.fire=function(t){this.invoke.apply(this,arguments)},u.prototype.invoke=function(t){var e,n,i,s;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(s=e[i]).handler.apply(s.context,n))return!1;i+=1}return!0},u.prototype.hasListener=function(t){return this.getListenerLength(t)>0},u.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=u},function(t,e,n){var i=n(1),s=n(15);t.exports=function(t){return!i(t)&&!s(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,s=t.length;for(n=n||null;i<s&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),s=n(7),o=n(21),r=n(22),a=n(24),l=n(25),c=n(0),h=n(4),u=n(28),d=n(9),p={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},f=["first","prev","next","last"],_=["prev","next"],m=s({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},p,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(h(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!u(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(f,(function(t){this._buttons[t]=d.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(f,(function(t){var e="disabled"+d.capitalizeFirstLetter(t);this._buttons[e]=d.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(_,(function(t){var e=t+"More";this._buttons[e]=d.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,l(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,l(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,s=t.rightPageNumber;for(n=i;n<=s;n+=1)n===t.page?e=d.createElementByTemplate(this._template.currentPage,{page:n}):(e=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||l(e,this._firstItemClassName),n!==s||t.nextMore||l(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();r(e,"click",(function(e){var n,i,s=o(e);a(e),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!d.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],d.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=m},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),s=n(3),o=n(23);function r(t,e,n,i){function r(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,r):"attachEvent"in t&&t.attachEvent("on"+e,r),function(t,e,n,i){var r=o(t,e),a=!1;s(r,(function(t){return t.handler!==n||(a=!0,!1)})),a||r.push({handler:n,wrappedHandler:i})}(t,e,n,r)}t.exports=function(t,e,n,o){i(e)?s(e.split(/\s+/g),(function(e){r(t,e,n,o)})):s(e,(function(e,i){r(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,s=t[i];return s||(s=t[i]={}),(n=s[e])||(n=s[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),s=n(8),o=n(26),r=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,l=[];a?i(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){s(t,l)<0&&l.push(t)})),r(t,l))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),s=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),s=n(3),o=n(2),r=n(4),a=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,h=/\[\s?|\s?\]/,u=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,p=/^["']\w+["']$/,f=/"|'/g,_=/^-?\d+\.?\d*$/,m={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],o=0,r=0;return s(e,(function(t,s){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(r,s)),r=s+1)})),i.push(e.slice(r)),{exps:n,sourcesInsideIf:i}}(t,e),o=!1,r="";return s(i.exps,(function(t,e){return(o=w(t,n))&&(r=C(i.sourcesInsideIf[e],n)),!o})),r},each:function(t,e,n){var i=w(t,n),r=o(i)?"@index":"@key",l={},c="";return s(i,(function(t,i){l[r]=i,l["@this"]=t,a(n,l),c+=C(e.slice(),n)})),c},with:function(t,e,n){var s=i("as",t),o=t[s+1],r=w(t.slice(0,s),n),l={};return l[o]=r,C(e,a(n,l))||""}},g=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,s=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,s.push(t.slice(o,i)),o=i+n[0].length,n=e.exec(t);return s.push(t.slice(o)),s};function y(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:p.test(t)?i=t.replace(f,""):c.test(t)?i=y((n=t.split(h))[0],e)[y(n[1],e)]:u.test(t)?i=y((n=t.split(d))[0],e)[n[1]]:_.test(t)&&(i=parseFloat(t)),i}function v(t,e,n){for(var i,s,o,a,l=m[t],c=1,h=2,u=e[h];c&&r(u);)0===u.indexOf(t)?c+=1:0===u.indexOf("/"+t)&&(c-=1,i=h),u=e[h+=2];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=l(e[0].split(" ").slice(1),(s=0,o=i,(a=e.splice(s+1,o-s)).pop(),a),n),e}function w(t,e){var n=y(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return s(e,(function(t){i.push(y(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function C(t,e){for(var n,i,s,o=1,a=t[o];r(a);)i=(n=a.split(" "))[0],m[i]?(s=v(i,t.splice(o,t.length-o),e),t=t.concat(s)):t[o]=w(n,e),a=t[o+=2];return t.join("")}t.exports=function(t,e){return C(g(t,l),e)}},function(t,e,n){var i=n(1),s=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(r&&!function(t){return(new Date).getTime()-t>6048e5}(r)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),s="";return i(e,(function(t,e){s+="&"+e+"="+t})),s=s.substring(1),n.src=t+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},f=d();l=s("7fUyS");const _=document.querySelector(".gallery"),m=document.querySelector("#tui-pagination-container");let g=null;g=window.innerWidth<=480?{totalItems:0,itemsPerPage:20,visiblePages:3,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}:{totalItems:0,itemsPerPage:20,visiblePages:7,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};const y=new(t(f))(m,g);function v(t){y.reset(t)}y.on("beforeMove",(async function(t){console.log(o.STATE.movies);const e=t.page;o.STATE.page=e;const n=await a(o.STATE.page);o.STATE.movies=n.results,console.log(o.STATE.movies),_.innerHTML="",(0,l.appendCardsMarkup)((0,l.createCardMarkup)(o.STATE.movies))})),y.on("afterMove",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));var w=s("329sq"),C=s("gBKt4");s("ahn2g"),s("iAg3j");const b=document.querySelector(".header-search");let x=0;function T(){setTimeout((()=>{x<"Movie search".length?(x+=1,b.placeholder="Movie search".substring(0,x),T()):setTimeout(k,7e3)}),150)}function k(){b.placeholder=" ",x=0,T()}o=s("dBMb9");var I={};!function(t,e){"function"==typeof define&&define.amd?define([],(function(){return e(t)})):"object"==typeof I?I=e(t):t.Notiflix=e(t)}(void 0!==e?e:"undefined"!=typeof window?window:I,(function(t){if(void 0===t&&void 0===t.document)return!1;var e,n="Success",i="Failure",s="Warning",o="Info",r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(a('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=c(t[i],n[i]):t[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return t},h=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},u=0,d=function(a,h,d,f){if(!l("body"))return!1;e||p.Notify.init({});var _=c(!0,e,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof f&&!Array.isArray(f)){var m={};"object"==typeof d?m=d:"object"==typeof f&&(m=f),e=c(!0,e,m)}var g,y,v=e[a.toLocaleLowerCase("en")];u++,"string"!=typeof h&&(h="Notiflix "+a),e.plainText&&(g=h,(y=t.document.createElement("div")).innerHTML=g,h=y.textContent||y.innerText||""),!e.plainText&&h.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),h='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),h.length>e.messageMaxLength&&(h=h.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(v.fontAwesomeIconColor=v.background),e.cssAnimation||(e.cssAnimationDuration=0);var w=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(w.id=r.wrapID,w.style.width=e.width,w.style.zIndex=e.zindex,w.style.opacity=e.opacity,"center-center"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.top=e.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===e.position?(w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.left="auto"):"left-top"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===e.position?(w.style.left=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=e.distance,w.style.top=e.distance,w.style.left="auto",w.style.bottom="auto"),e.backOverlay){var C=t.document.getElementById(r.overlayID)||t.document.createElement("div");C.id=r.overlayID,C.style.width="100%",C.style.height="100%",C.style.position="fixed",C.style.zIndex=e.zindex-1,C.style.left=0,C.style.top=0,C.style.right=0,C.style.bottom=0,C.style.background=v.backOverlayColor||e.backOverlayColor,C.className=e.cssAnimation?"nx-with-animation":"",C.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(C)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(w);var b=t.document.createElement("div");b.id=e.ID+"-"+u,b.className=e.className+" "+v.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),b.style.fontSize=e.fontSize,b.style.color=v.textColor,b.style.background=v.background,b.style.borderRadius=e.borderRadius,b.style.pointerEvents="all",e.rtl&&(b.setAttribute("dir","rtl"),b.classList.add("nx-rtl-on")),b.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(b.style.animationDuration=e.cssAnimationDuration+"ms");var x="";if(e.closeButton&&"function"!=typeof d&&(x='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+v.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)b.innerHTML='<i style="color:'+v.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+v.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+h+"</span>"+(e.closeButton?x:"");else{var T="";a===n?T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===s?T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===o&&(T='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),b.innerHTML=T+'<span class="nx-message nx-with-icon">'+h+"</span>"+(e.closeButton?x:"")}else b.innerHTML='<span class="nx-message">'+h+"</span>"+(e.closeButton?x:"");if("left-bottom"===e.position||"right-bottom"===e.position){var k=t.document.getElementById(r.wrapID);k.insertBefore(b,k.firstChild)}else t.document.getElementById(r.wrapID).appendChild(b);var I=t.document.getElementById(b.id);if(I){var E,N,S=function(){I.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&w.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(E)},P=function(){if(I&&null!==I.parentNode&&I.parentNode.removeChild(I),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(N)};if(e.closeButton&&"function"!=typeof d)t.document.getElementById(b.id).querySelector("span.nx-close-button").addEventListener("click",(function(){S();var t=setTimeout((function(){P(),clearTimeout(t)}),e.cssAnimationDuration)}));if(("function"==typeof d||e.clickToClose)&&I.addEventListener("click",(function(){"function"==typeof d&&d(),S();var t=setTimeout((function(){P(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof d){var R=function(){E=setTimeout((function(){S()}),e.timeout),N=setTimeout((function(){P()}),e.timeout+e.cssAnimationDuration)};R(),e.pauseOnHover&&(I.addEventListener("mouseenter",(function(){I.classList.add("nx-paused"),clearTimeout(E),clearTimeout(N)})),I.addEventListener("mouseleave",(function(){I.classList.remove("nx-paused"),R()})))}}if(e.showOnlyTheLastOne&&u>0)for(var M=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+u+"])"),A=0;A<M.length;A++){var D=M[A];null!==D.parentNode&&D.parentNode.removeChild(D)}e=c(!0,e,_)},p={Notify:{init:function(n){e=c(!0,r,n),function(e,n){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}}(h,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return a("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,i){d(n,t,e,i)},failure:function(t,e,n){d(i,t,e,n)},warning:function(t,e,n){d(s,t,e,n)},info:function(t,e,n){d(o,t,e,n)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}}));var E=s("OYEII"),N=s("eyjy7"),S=s("2bQ3f"),P=s("eSZ1C");p=s("6WJPL");var R;R=new URL(s("kyEFX").resolve("8OQ7p"),import.meta.url).toString();var M;M=new URL(s("kyEFX").resolve("2RAnE"),import.meta.url).toString();let A=null,D=null,L=null,O=null,F=null;const q=document.querySelector("body");function W(e){e.target.closest(".auth__wrap")&&!e.target.closest(".close-btn")||B(),e.target.closest(".show-password-icon")&&function(){const e=document.querySelector(".show-password-icon"),n=document.querySelector('.form__input[name="password"]'),i="password"===n.getAttribute("type")?"text":"password";n.setAttribute("type",i),"password"===i?e.firstElementChild.setAttribute("href",`${t(R)}#icon-not-show-password`):"text"===i&&e.firstElementChild.setAttribute("href",`${t(R)}#icon-show-password`)}(),e.target.closest("#linkSigninAccount")?z():e.target.closest("#linkCreateAccount")&&U(),e.target.closest(".login-with-google-btn")&&(0,N.signInWithPopup)(E.auth,E.provider).then((()=>{I.Notify.info("You are signed in with Google"),console.log(E.auth.currentUser),o.STATE.user.uid=E.auth.currentUser.uid,console.log("STATE: ",o.STATE),(0,S.save)("STATE",o.STATE),(0,p.switchBTNs)((0,P.islogin)(o.STATE.user.uid)),B()})).catch((t=>{"auth/popup-closed-by-user"!==t.code&&"auth/cancelled-popup-request"!==t.code&&(I.Notify.info(t.code),console.log(t))}))}function B(){A.remove(),A.removeEventListener("click",W)}function U(){A.firstElementChild.innerHTML=`<button class="close-btn">\n\t<img src="${t(M)}" alt="" />\n</button>\n<form class="auth__form" id="signup">\n\t<h1 class="form__title">Sign Up</h1>\n\t<div class="signup-form__message-error"></div>\n\t<div class="form__input-group">\n\t\t<input\n\t\t\ttype="email"\n\t\t\tname="email"\n\t\t\tclass="form__input"\n\t\t\tplaceholder="E-mail"\n\t\t/>\n\t\t<svg class="email-icon">\n\t\t\t\t\t\t\t<use href="${t(R)}#icon-email-form"></use>\n\t\t\t\t\t\t</svg>\n\t</div>\n\t<div class="form__input-group">\n\t\t<input\n\t\t\ttype="password"\n\t\t\tname="password"\n\t\t\tclass="form__input"\n\t\t\tplaceholder="Password"\n\t\t>\n\t\t<svg class="password-icon">\n\t\t\t\t\t\t\t<use href="${t(R)}#icon-password-form"></use>\n\t\t\t\t\t\t</svg>\n\t\t<svg class="show-password-icon">\n\t\t\t<use href="${t(R)}#icon-not-show-password"></use>\n\t\t</svg>\n\t</div>\n\t<button class="form__btn-submit" type="submit">Sign Up</button>\n\t<button class="login-with-google-btn" type="button">\n  Continue with Google\n\t</button>\n  <p class="form__text">\n    Already have account? <a\n      href="#"\n      class="form__link"\n      id="linkSigninAccount"\n      >Log In</a>\n      </p>\n\t</form>`,L=document.getElementById("signup"),L.addEventListener("submit",j)}function z(){A.firstElementChild.innerHTML=`\n\t<button class="close-btn">\n    <img src="${t(M)}">\n\t\t\t\t</button>\n\t\t\t\t<form class="auth__form" id="login">\n\t\t\t\t\t<h1 class="form__title">Log In</h1>\n\t\t\t\t\t<div class="login-form__message-error"></div>\n\t\t\t\t\t<div class="form__input-group">\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype="email"\n\t\t\t\t\t\t\tname="email"\n\t\t\t\t\t\t\tclass="form__input"\n\t\t\t\t\t\t\tplaceholder="E-mail"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<svg class="email-icon">\n    <use href="${t(R)}#icon-email-form"></use>\n  </svg>\n\t\t\t\t\t\t<div class="form__input-error-message is-hidden">Invalid email</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form__input-group">\n\t\t\t\t\t\t<input\n\t\t\t\t\t\t\ttype="password"\n\t\t\t\t\t\t\tname="password"\n\t\t\t\t\t\t\tclass="form__input"\n\t\t\t\t\t\t\tplaceholder="Password"\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<svg class="password-icon">\n\t\t\t\t\t\t\t<use href="${t(R)}#icon-password-form"></use>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t<svg class="show-password-icon">\n\t\t\t<use href="${t(R)}#icon-not-show-password"></use>\n\t\t</svg>\n\t\t</div>\n\t\t\t\t\t<button class="form__btn-submit" type="submit">Log In</button>\n\t\t\t\t\t<button class="login-with-google-btn" type="button">\n\t\t\t\t\t\tContinue with Google\n\t\t\t\t\t</button>\n          <p class="form__text">\n            Don't have account?\n            <a href="#" class="form__link" id="linkCreateAccount">Create account</a> \n          </p>\n\t\t\t\t</form>`,D=document.getElementById("login"),D.addEventListener("submit",H)}function H(t){t.preventDefault(),D=document.getElementById("login"),O=document.querySelector(".login-form__message-error");const{email:e,password:n}=D.elements;e.value&&n.value&&(console.log(e.value,n.value.trim()),(0,N.signInWithEmailAndPassword)(E.auth,e.value,n.value).then((()=>{I.Notify.success("You are logged in."),console.log(E.auth.currentUser),o.STATE.user.uid=E.auth.currentUser.uid,(0,S.save)("STATE",o.STATE),(0,p.switchBTNs)((0,P.islogin)(o.STATE.user.uid)),console.log("STATE: ",o.STATE),B()})).catch((t=>{"auth/wrong-password"!==t.code&&"auth/user-not-found"!==t.code||(O.textContent="Incorrect email or password"),console.log(t)})))}function j(t){t.preventDefault(),L=document.getElementById("signup"),F=document.querySelector(".signup-form__message-error");const{email:e,password:n}=L.elements;console.log(e.value,n.value.trim()),(0,N.createUserWithEmailAndPassword)(E.auth,e.value,n.value).then((t=>{const e=t.user;I.Notify.success("User created!"),console.log("user: ",e),o.STATE.user.uid=E.auth.currentUser.uid,console.log("STATE: ",o.STATE),(0,S.save)("STATE",o.STATE),(0,p.switchBTNs)((0,P.islogin)(o.STATE.user.uid)),B()})).catch((t=>{"auth/email-already-in-use"===t.code&&(F.textContent="Email Already in use"),"auth/weak-password"===t.code&&(F.textContent="Password should be at least 6 characters"),console.log(t.code)}))}document.querySelector(".registrationBtn-container").addEventListener("click",(function(t){"signIn"===t.target.dataset.action?(q.insertAdjacentHTML("afterbegin",'\n     <div class="auth__backdrop">\n      <div class="auth__wrap">\x3c!-- тут будет модалка --\x3e</div>\n    </div>'),A=document.querySelector(".auth__backdrop"),console.dir(A),A.addEventListener("click",W),U()):"logIn"===t.target.dataset.action&&(q.insertAdjacentHTML("afterbegin",'\n     <div class="auth__backdrop">\n      <div class="auth__wrap">\x3c!-- тут будет модалка --\x3e</div>\n    </div>'),A=document.querySelector(".auth__backdrop"),A.addEventListener("click",W),z())}));P=s("eSZ1C"),P=s("eSZ1C"),S=s("2bQ3f"),p=s("6WJPL");window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?K.classList.remove("floating-buttons--hidden"):K.classList.add("floating-buttons--hidden")};const V=document.querySelector(".js-home-btn"),Y=document.querySelector(".js-scroll-btn"),K=document.querySelector(".js-floating-buttons");V.addEventListener("click",(()=>{})),Y.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),s("dBMb9");var $=s("chpTF"),G=s("gKkQl"),Q=s("ix4Jr"),X=s("4a6xH"),Z=s("ffjl9"),J=s("7vF8m"),tt=s("4TNnu");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),(0,Z.stringify)(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:(0,Z.jsonEval)(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return(0,Z.contains)(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nt(e)}}catch(t){}return new it},ot=st("localStorage"),rt=st("sessionStorage"),at=new(0,J.Logger)("@firebase/database"),lt=function(){let t=1;return function(){return t++}}(),ct=function(t){const e=(0,Z.stringToByteArray)(t),n=new(0,Z.Sha1);n.update(e);const i=n.digest();return Z.base64.encodeByteArray(i)},ht=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?e+=ht.apply(null,i):e+="object"==typeof i?(0,Z.stringify)(i):i,e+=" "}return e};let ut=null,dt=!0;const pt=function(t,e){(0,Z.assert)(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(at.logLevel=J.LogLevel.VERBOSE,ut=at.log.bind(at),e&&rt.set("logging_enabled",!0)):"function"==typeof t?ut=t:(ut=null,rt.remove("logging_enabled"))},ft=function(...t){if(!0===dt&&(dt=!1,null===ut&&!0===rt.get("logging_enabled")&&pt(!0)),ut){const e=ht.apply(null,t);ut(e)}},_t=function(t){return function(...e){ft(t,...e)}},mt=function(...t){const e="FIREBASE INTERNAL ERROR: "+ht(...t);at.error(e)},gt=function(...t){const e=`FIREBASE FATAL ERROR: ${ht(...t)}`;throw at.error(e),new Error(e)},yt=function(...t){const e="FIREBASE WARNING: "+ht(...t);at.warn(e)},vt=function(t){return"number"==typeof t&&(t!=t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wt=function(t,e){if(t===e)return 0;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return-1;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return 1;{const n=Nt(t),i=Nt(e);return null!==n?null!==i?n-i==0?t.length-e.length:n-i:-1:null!==i?1:t<e?-1:1}},Ct=function(t,e){return t===e?0:t<e?-1:1},bt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+(0,Z.stringify)(e))},xt=function(t){if("object"!=typeof t||null===t)return(0,Z.stringify)(t);const e=[];for(const n in t)e.push(n);e.sort();let n="{";for(let i=0;i<e.length;i++)0!==i&&(n+=","),n+=(0,Z.stringify)(e[i]),n+=":",n+=xt(t[e[i]]);return n+="}",n},Tt=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const It=function(t){(0,Z.assert)(!vt(t),"Invalid JSON number");const e=1023;let n,i,s,o,r;0===t?(i=0,s=0,n=1/t==-1/0?1:0):(n=t<0,(t=Math.abs(t))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(t)/Math.LN2),e),i=o+e,s=Math.round(t*Math.pow(2,52-o)-Math.pow(2,52))):(i=0,s=Math.round(t/Math.pow(2,-1074))));const a=[];for(r=52;r;r-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(r=11;r;r-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(r=0;r<64;r+=8){let t=parseInt(l.substr(r,8),2).toString(16);1===t.length&&(t="0"+t),c+=t}return c.toLowerCase()};const Et=new RegExp("^-?(0*)\\d{1,10}$"),Nt=function(t){if(Et.test(t)){const e=Number(t);if(e>=-2147483648&&e<=2147483647)return e}return null},St=function(t){try{t()}catch(t){setTimeout((()=>{const e=t.stack||"";throw yt("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Pt=function(t,e){const n=setTimeout(t,e);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null==e?void 0:e.getImmediate({optional:!0}),this.appCheck||null==e||e.get().then((t=>this.appCheck=t))}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,n)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((t=>this.auth_=t))}getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,n)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(t)}}class At{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}At.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Dt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt{constructor(t,e,n,i,s=!1,o="",r=!1,a=!1){this.secure=e,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=r,this.isUsingEmulator=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ot.get("host:"+t)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&ot.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}}function Ot(t,e,n){let i;if((0,Z.assert)("string"==typeof e,"typeof type must == string"),(0,Z.assert)("object"==typeof n,"typeof params must == object"),"websocket"===e)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if("long_polling"!==e)throw new Error("Unknown connection type: "+e);i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}(function(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams})(t)&&(n.ns=t.namespace);const s=[];return kt(n,((t,e)=>{s.push(t+"="+e)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.counters_={}}incrementCounter(t,e=1){(0,Z.contains)(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return(0,Z.deepCopy)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt={},Wt={};function Bt(t){const e=t.toString();return qt[e]||(qt[e]=new Ft),qt[e]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){for(this.pendingResponses[t]=e;this.pendingResponses[this.currentResponseNum];){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&St((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e,n,i,s,o,r){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=r,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_t(t),this.stats_=Bt(e),this.urlFn=t=>(this.appCheckToken&&(t.ac=this.appCheckToken),Ot(e,"long_polling",t))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new Ut(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(t){if((0,Z.isNodeSdk)()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ht(((...t)=>{const[e,n,i,s,o]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===e)this.id=n,this.password=i;else{if("close"!==e)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)}),(()=>{this.onClosed_()}),this.urlFn);const t={start:"t"};t.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=this.scriptTagHolder.uniqueCallbackIdentifier),t.v="5",this.transportSessionId&&(t.s=this.transportSessionId),this.lastSessionId&&(t.ls=this.lastSessionId),this.applicationId&&(t.p=this.applicationId),this.appCheckToken&&(t.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Dt.test(location.hostname)&&(t.r="f");const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zt.forceAllow_=!0}static forceDisallow(){zt.forceDisallow_=!0}static isAvailable(){return!(0,Z.isNodeSdk)()&&(!!zt.forceAllow_||!(zt.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=(0,Z.stringify)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=(0,Z.base64Encode)(e),i=Tt(n,1840);for(let t=0;t<i.length;t++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[t]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if((0,Z.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=t,n.pw=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=(0,Z.stringify)(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Ht{constructor(t,e,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,Z.isNodeSdk)())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=lt(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=e,this.myIFrame=Ht.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(t){ft("frame writing exception"),t.stack&&ft(t.stack),ft(t)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{t.contentWindow.document||ft("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t.id=this.myID,t.pw=this.myPW,t.ser=this.currentSerial;let e=this.urlFn(t),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const t=this.pendingSegs.shift();n=n+"&seg"+i+"="+t.seg+"&ts"+i+"="+t.ts+"&d"+i+"="+t.d,i++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(t,(()=>{clearTimeout(i),n()}))}addTag(t,e){(0,Z.isNodeSdk)()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{ft("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(t){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt=null;"undefined"!=typeof MozWebSocket?jt=MozWebSocket:"undefined"!=typeof WebSocket&&(jt=WebSocket);class Vt{constructor(t,e,n,i,s,o,r){this.connId=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_t(this.connId),this.stats_=Bt(e),this.connURL=Vt.connectionURL_(e,o,r,i,n),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,n,i,s){const o={v:"5"};return!(0,Z.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&Dt.test(location.hostname)&&(o.r="f"),e&&(o.s=e),n&&(o.ls=n),i&&(o.ac=i),s&&(o.p=s),Ot(t,"websocket",o)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ot.set("previous_websocket_failure",!0);try{let t;if((0,Z.isNodeSdk)()){const e=this.nodeAdmin?"AdminNode":"Node";t={headers:{"User-Agent":`Firebase/5/${et}/${tt.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(t.proxy={origin:i})}this.mySock=new jt(this.connURL,[],t)}catch(t){this.log_("Error instantiating WebSocket.");const e=t.message||t.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==jt&&!Vt.forceDisallow_}static previouslyFailed(){return ot.isInMemoryStorage||!0===ot.get("previous_websocket_failure")}markConnectionHealthy(){ot.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=(0,Z.jsonEval)(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if((0,Z.assert)(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t.data;if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=(0,Z.stringify)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=Tt(e,16384);n.length>1&&this.sendString_(String(n.length));for(let t=0;t<n.length;t++)this.sendString_(n[t])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Vt.responsesRequiredToBeHealthy=2,Vt.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[zt,Vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=Vt&&Vt.isAvailable();let n=e&&!Vt.previouslyFailed();if(t.webSocketOnly&&(e||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Vt];else{const t=this.transports_=[];for(const e of Yt.ALL_TRANSPORTS)e&&e.isAvailable()&&t.push(e);Yt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yt.globalTransportInitialized_=!1;class Kt{constructor(t,e,n,i,s,o,r,a,l,c){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=r,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_t("c:"+this.id+":"),this.transportManager_=new Yt(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,n)}),Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pt((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if("t"in t){const e=t.t;"a"===e?this.upgradeIfSecondaryHealthy_():"r"===e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===e&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=bt("t",t),n=bt("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=bt("t",t),n=bt("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=bt("t",t);if("d"in t){const n=t.d;if("h"===e){const t=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(t.h=this.repoInfo_.host),this.onHandshake_(t)}else if("n"===e){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===e?this.onConnectionShutdown_(n):"r"===e?this.onReset_(n):"e"===e?mt("Server Error: "+n):"o"===e?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mt("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),"5"!==n&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),Pt((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pt((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ot.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{put(t,e,n,i){}merge(t,e,n,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.allowedEvents_=t,this.listeners_={},(0,Z.assert)(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const i=this.getInitialEvent(t);i&&e.apply(n,i)}off(t,e,n){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let t=0;t<i.length;t++)if(i[t].callback===e&&(!n||n===i[t].context))return void i.splice(t,1)}validateEventType_(t){(0,Z.assert)(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Gt{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,Z.isMobileCordova)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Qt}getInitialEvent(t){return(0,Z.assert)("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}}function Zt(){return new Xt("")}function Jt(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function te(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Xt(t.pieces_,e)}function ne(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ie(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function se(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Xt(e,0)}function oe(t,e){const n=[];for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);if(e instanceof Xt)for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new Xt(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function ae(t,e){const n=Jt(t),i=Jt(e);if(null===n)return e;if(n===i)return ae(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function le(t,e){if(te(t)!==te(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ce(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(te(t)>te(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class he{constructor(t,e){this.errorPrefix_=e,this.parts_=ie(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let t=0;t<this.parts_.length;t++)this.byteLength_+=(0,Z.stringLength)(this.parts_[t]);ue(this)}}function ue(t){if(t.byteLength_>768)throw new Error(t.errorPrefix_+"has a key path longer than 768 bytes ("+t.byteLength_+").");if(t.parts_.length>32)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+de(t))}function de(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends Gt{constructor(){let t,e;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(e="visibilitychange",t="hidden"):void 0!==document.mozHidden?(e="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(e="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}static getInstance(){return new pe}getInitialEvent(t){return(0,Z.assert)("visible"===t,"Unknown event type: "+t),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends $t{constructor(t,e,n,i,s,o,r,a){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=r,this.authOverride_=a,this.id=fe.nextPersistentConnectionId_++,this.log_=_t("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,Z.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pe.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&Qt.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,n){const i=++this.requestNumber_,s={r:i,a:t,b:e};this.log_((0,Z.stringify)(s)),(0,Z.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(t){this.initConnection_();const e=new(0,Z.Deferred),n={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:t=>{const n=t.d;"ok"===t.s?e.resolve(n):e.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),e.promise}listen(t,e,n,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),(0,Z.assert)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,Z.assert)(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const r={onComplete:i,hashFn:e,query:t,tag:n};this.listens.get(o).set(s,r),this.connected_&&this.sendListen_(r)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)}))}sendListen_(t){const e=t.query,n=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};t.tag&&(s.q=e._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest("q",s,(s=>{const o=s.d,r=s.s;fe.warnOnListenWarnings_(o,e);(this.listens.get(n)&&this.listens.get(n).get(i))===t&&(this.log_("listen response",s),"ok"!==r&&this.removeListen_(n,i),t.onComplete&&t.onComplete(r,o))}))}static warnOnListenWarnings_(t,e){if(t&&"object"==typeof t&&(0,Z.contains)(t,"w")){const n=(0,Z.safeGet)(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&40===t.length||(0,Z.isAdmin)(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=(0,Z.isValidFormat)(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(e,n,(e=>{const n=e.s,i=e.d||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t.s,n=t.d||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)}))}unlisten(t,e){const n=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,Z.assert)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,t._queryObject,e)}sendUnlisten_(t,e,n,i){this.log_("Unlisten on "+t+" for "+e);const s={p:t};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,i){const s={p:e,d:n};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,(t=>{i&&setTimeout((()=>{i(t.s,t.d)}),Math.floor(0))}))}put(t,e,n,i){this.putInternal("p",t,e,n,i)}merge(t,e,n,i){this.putInternal("m",t,e,n,i)}putInternal(t,e,n,i,s){this.initConnection_();const o={p:e,d:n};void 0!==s&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const r=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(r):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,(n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{if("ok"!==t.s){const e=t.d;this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+(0,Z.stringify)(t));const e=t.r,n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e.p,e.d,!1,e.t):"m"===t?this.onDataUpdate_(e.p,e.d,!0,e.t):"c"===t?this.onListenRevoked_(e.p,e.q):"ac"===t?this.onAuthRevoked_(e.s,e.d):"apc"===t?this.onAppCheckRevoked_(e.s,e.d):"sd"===t?this.onSecurityDebugPacket_(e):mt("Unrecognized action received from server: "+(0,Z.stringify)(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){(0,Z.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+fe.nextConnectionId_++,s=this.lastSessionId;let o=!1,r=null;const a=function(){r?r.close():(o=!0,n())},l=function(t){(0,Z.assert)(r,"sendRequest call when we're not connected not allowed."),r.sendRequest(t)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,r=new Kt(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,(t=>{yt(t+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(t){this.log_("Failed to get token: "+t),o||(this.repoInfo_.nodeAdmin&&yt(t),a())}}}interrupt(t){ft("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){ft("Resuming connection for reason: "+t),delete this.interruptReasons_[t],(0,Z.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map((t=>xt(t))).join("$"):"default";const i=this.removeListen_(t,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,e){const n=new Xt(t).toString();let i;if(this.listens.has(n)){const t=this.listens.get(n);i=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(t,e){ft("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){ft("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";(0,Z.isNodeSdk)()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+et.replace(/\./g,"-")]=1,(0,Z.isMobileCordova)()?t["framework.cordova"]=1:(0,Z.isReactNative)()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Qt.getInstance().currentlyOnline();return(0,Z.isEmpty)(this.interruptReasons_)&&t}}fe.nextPersistentConnectionId_=0,fe.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new _e(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new _e("[MIN_NAME]",t),i=new _e("[MIN_NAME]",e);return 0!==this.compare(n,i)}minPost(){return _e.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ge;class ye extends me{static get __EMPTY_NODE(){return ge}static set __EMPTY_NODE(t){ge=t}compare(t,e){return wt(t.name,e.name)}isDefinedOn(t){throw(0,Z.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return _e.MIN}maxPost(){return new _e("[MAX_NAME]",ge)}makePost(t,e){return(0,Z.assert)("string"==typeof t,"KeyIndex indexValue must always be a string."),new _e(t,ge)}toString(){return".key"}}const ve=new ye;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,i&&(o*=-1),o<0)t=this.isReverse_?t.left:t.right;else{if(0===o){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Ce{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:Ce.RED,this.left=null!=i?i:be.EMPTY_NODE,this.right=null!=s?s:be.EMPTY_NODE}copy(t,e,n,i,s){return new Ce(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,i;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return be.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Ce.RED=!0,Ce.BLACK=!1;class be{constructor(t,e=be.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new be(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(t){return new be(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(t){let e,n=this.root_;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,i=null;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}e<0?n=n.left:e>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new we(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new we(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new we(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new we(this.root_,null,this.comparator_,!0,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xe(t,e){return wt(t.name,e.name)}function Te(t,e){return wt(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ke;be.EMPTY_NODE=new class{copy(t,e,n,i,s){return this}insert(t,e,n){return new Ce(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Ie=function(t){return"number"==typeof t?"number:"+It(t):"string:"+t},Ee=function(t){if(t.isLeafNode()){const e=t.val();(0,Z.assert)("string"==typeof e||"number"==typeof e||"object"==typeof e&&(0,Z.contains)(e,".sv"),"Priority must be a string or number.")}else(0,Z.assert)(t===ke||t.isEmpty(),"priority of unexpected type.");(0,Z.assert)(t===ke||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ne,Se,Pe;class Re{constructor(t,e=Re.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,(0,Z.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ee(this.priorityNode_)}static set __childrenNodeConstructor(t){Ne=t}static get __childrenNodeConstructor(){return Ne}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Re(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return re(t)?this:".priority"===Jt(t)?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:Re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=Jt(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:((0,Z.assert)(".priority"!==n||1===te(t),".priority must be the last token in a path"),this.updateImmediateChild(n,Re.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Ie(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?It(this.value_):this.value_,this.lazyHash_=ct(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Re.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Re.__childrenNodeConstructor?-1:((0,Z.assert)(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,i=Re.VALUE_TYPE_ORDER.indexOf(e),s=Re.VALUE_TYPE_ORDER.indexOf(n);return(0,Z.assert)(i>=0,"Unknown leaf type: "+e),(0,Z.assert)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}}Re.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Me=new class extends me{compare(t,e){const n=t.node.getPriority(),i=e.node.getPriority(),s=n.compareTo(i);return 0===s?wt(t.name,e.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return _e.MIN}maxPost(){return new _e("[MAX_NAME]",new Re("[PRIORITY-POST]",Pe))}makePost(t,e){const n=Se(t);return new _e(e,new Re("[PRIORITY-POST]",n))}toString(){return".priority"}},Ae=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){var e;this.count=(e=t+1,parseInt(Math.log(e)/Ae,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=t+1&n}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Le=function(t,e,n,i){t.sort(e);const s=function(e,i){const o=i-e;let r,a;if(0===o)return null;if(1===o)return r=t[e],a=n?n(r):r,new Ce(a,r.node,Ce.BLACK,null,null);{const l=parseInt(o/2,10)+e,c=s(e,l),h=s(l+1,i);return r=t[l],a=n?n(r):r,new Ce(a,r.node,Ce.BLACK,c,h)}},o=function(e){let i=null,o=null,r=t.length;const a=function(e,i){const o=r-e,a=r;r-=e;const c=s(o+1,a),h=t[o],u=n?n(h):h;l(new Ce(u,h.node,i,null,c))},l=function(t){i?(i.left=t,i=t):(o=t,i=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),i=Math.pow(2,e.count-(t+1));n?a(i,Ce.BLACK):(a(i,Ce.BLACK),a(i,Ce.RED))}return o}(new De(t.length));return new be(i||e,o)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oe;const Fe={};class qe{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return(0,Z.assert)(Fe&&Me,"ChildrenNode.ts has not been loaded"),Oe=Oe||new qe({".priority":Fe},{".priority":Me}),Oe}get(t){const e=(0,Z.safeGet)(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof be?e:null}hasIndex(t){return(0,Z.contains)(this.indexSet_,t.toString())}addIndex(t,e){(0,Z.assert)(t!==ve,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=e.getIterator(_e.Wrap);let o,r=s.getNext();for(;r;)i=i||t.isDefinedOn(r.node),n.push(r),r=s.getNext();o=i?Le(n,t.getCompare()):Fe;const a=t.toString(),l=Object.assign({},this.indexSet_);l[a]=t;const c=Object.assign({},this.indexes_);return c[a]=o,new qe(c,l)}addToIndexes(t,e){const n=(0,Z.map)(this.indexes_,((n,i)=>{const s=(0,Z.safeGet)(this.indexSet_,i);if((0,Z.assert)(s,"Missing index implementation for "+i),n===Fe){if(s.isDefinedOn(t.node)){const n=[],i=e.getIterator(_e.Wrap);let o=i.getNext();for(;o;)o.name!==t.name&&n.push(o),o=i.getNext();return n.push(t),Le(n,s.getCompare())}return Fe}{const i=e.get(t.name);let s=n;return i&&(s=s.remove(new _e(t.name,i))),s.insert(t,t.node)}}));return new qe(n,this.indexSet_)}removeFromIndexes(t,e){const n=(0,Z.map)(this.indexes_,(n=>{if(n===Fe)return n;{const i=e.get(t.name);return i?n.remove(new _e(t.name,i)):n}}));return new qe(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let We;class Be{constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ee(this.priorityNode_),this.children_.isEmpty()&&(0,Z.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return We||(We=new Be(new be(Te),null,qe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||We}updatePriority(t){return this.children_.isEmpty()?this:new Be(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?We:e}}getChild(t){const e=Jt(t);return null===e?this:this.getImmediateChild(e).getChild(ee(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if((0,Z.assert)(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new _e(t,e);let i,s;e.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(t,e),s=this.indexMap_.addToIndexes(n,this.children_));const o=i.isEmpty()?We:this.priorityNode_;return new Be(i,o,s)}}updateChild(t,e){const n=Jt(t);if(null===n)return e;{(0,Z.assert)(".priority"!==Jt(t)||1===te(t),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ee(t),e);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,i=0,s=!0;if(this.forEachChild(Me,((o,r)=>{e[o]=r.val(t),n++,s&&Be.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1})),!t&&s&&i<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+Ie(this.getPriority().val())+":"),this.forEachChild(Me,((e,n)=>{const i=n.hash();""!==i&&(t+=":"+e+":"+i)})),this.lazyHash_=""===t?"":ct(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new _e(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new _e(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new _e(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,(t=>t));{const n=this.children_.getIteratorFrom(t.name,_e.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,(t=>t));{const n=this.children_.getReverseIteratorFrom(t.name,_e.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)>0;)n.getNext(),i=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Ue?-1:0}withIndex(t){if(t===ve||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new Be(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===ve||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(Me),n=e.getIterator(Me);let i=t.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=t.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(t){return t===ve?null:this.indexMap_.get(t.toString())}}Be.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Ue=new class extends Be{constructor(){super(new be(Te),Be.EMPTY_NODE,qe.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Be.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(_e,{MIN:{value:new _e("[MIN_NAME]",Be.EMPTY_NODE)},MAX:{value:new _e("[MAX_NAME]",Ue)}}),ye.__EMPTY_NODE=Be.EMPTY_NODE,Re.__childrenNodeConstructor=Be,ke=Ue,function(t){Pe=t}(Ue);function ze(t,e=null){if(null===t)return Be.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(e=t[".priority"]),(0,Z.assert)(null===e||"string"==typeof e||"number"==typeof e||"object"==typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){return new Re(t,ze(e))}if(t instanceof Array){let n=Be.EMPTY_NODE;return kt(t,((e,i)=>{if((0,Z.contains)(t,e)&&"."!==e.substring(0,1)){const t=ze(i);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}})),n.updatePriority(ze(e))}{const n=[];let i=!1;if(kt(t,((t,e)=>{if("."!==t.substring(0,1)){const s=ze(e);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new _e(t,s)))}})),0===n.length)return Be.EMPTY_NODE;const s=Le(n,xe,(t=>t.name),Te);if(i){const t=Le(n,Me.getCompare());return new Be(s,ze(e),new qe({".priority":t},{".priority":Me}))}return new Be(s,ze(e),qe.Default)}}!function(t){Se=t}(ze);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He extends me{constructor(t){super(),this.indexPath_=t,(0,Z.assert)(!re(t)&&".priority"!==Jt(t),"Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),i=this.extractChild(e.node),s=n.compareTo(i);return 0===s?wt(t.name,e.name):s}makePost(t,e){const n=ze(t),i=Be.EMPTY_NODE.updateChild(this.indexPath_,n);return new _e(e,i)}maxPost(){const t=Be.EMPTY_NODE.updateChild(this.indexPath_,Ue);return new _e("[MAX_NAME]",t)}toString(){return ie(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new class extends me{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?wt(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return _e.MIN}maxPost(){return _e.MAX}makePost(t,e){const n=ze(t);return new _e(e,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t){return{type:"value",snapshotNode:t}}function Ye(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ke(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function $e(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(t){this.index_=t}updateChild(t,e,n,i,s,o){(0,Z.assert)(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const r=t.getImmediateChild(e);return r.getChild(i).equals(n.getChild(i))&&r.isEmpty()===n.isEmpty()?t:(null!=o&&(n.isEmpty()?t.hasChild(e)?o.trackChildChange(Ke(e,r)):(0,Z.assert)(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):r.isEmpty()?o.trackChildChange(Ye(e,n)):o.trackChildChange($e(e,n,r))),t.isLeafNode()&&n.isEmpty()?t:t.updateImmediateChild(e,n).withIndex(this.index_))}updateFullNode(t,e,n){return null!=n&&(t.isLeafNode()||t.forEachChild(Me,((t,i)=>{e.hasChild(t)||n.trackChildChange(Ke(t,i))})),e.isLeafNode()||e.forEachChild(Me,((e,i)=>{if(t.hasChild(e)){const s=t.getImmediateChild(e);s.equals(i)||n.trackChildChange($e(e,i,s))}else n.trackChildChange(Ye(e,i))}))),e.withIndex(this.index_)}updatePriority(t,e){return t.isEmpty()?Be.EMPTY_NODE:t.updatePriority(e)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.indexedFilter_=new Ge(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Qe.getStartPost_(t),this.endPost_=Qe.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const e=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,n=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return e&&n}updateChild(t,e,n,i,s,o){return this.matches(new _e(e,n))||(n=Be.EMPTY_NODE),this.indexedFilter_.updateChild(t,e,n,i,s,o)}updateFullNode(t,e,n){e.isLeafNode()&&(e=Be.EMPTY_NODE);let i=e.withIndex(this.index_);i=i.updatePriority(Be.EMPTY_NODE);const s=this;return e.forEachChild(Me,((t,e)=>{s.matches(new _e(t,e))||(i=i.updateImmediateChild(t,Be.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(t,i,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const e=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),e)}return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const e=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),e)}return t.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const e=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?e<=0:e<0},this.withinEndPost=t=>{const e=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?e<=0:e<0},this.rangedFilter_=new Qe(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,e,n,i,s,o){return this.rangedFilter_.matches(new _e(e,n))||(n=Be.EMPTY_NODE),t.getImmediateChild(e).equals(n)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,e,n,i,s,o):this.fullLimitUpdateChild_(t,e,n,s,o)}updateFullNode(t,e,n){let i;if(e.isLeafNode()||e.isEmpty())i=Be.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<e.numChildren()&&e.isIndexed(this.index_)){let t;i=Be.EMPTY_NODE.withIndex(this.index_),t=this.reverse_?e.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):e.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;t.hasNext()&&n<this.limit_;){const e=t.getNext();if(this.withinDirectionalStart(e)){if(!this.withinDirectionalEnd(e))break;i=i.updateImmediateChild(e.name,e.node),n++}}}else{let t;i=e.withIndex(this.index_),i=i.updatePriority(Be.EMPTY_NODE),t=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;t.hasNext();){const e=t.getNext();n<this.limit_&&this.withinDirectionalStart(e)&&this.withinDirectionalEnd(e)?n++:i=i.updateImmediateChild(e.name,Be.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,n)}updatePriority(t,e){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,e,n,i,s){let o;if(this.reverse_){const t=this.index_.getCompare();o=(e,n)=>t(n,e)}else o=this.index_.getCompare();const r=t;(0,Z.assert)(r.numChildren()===this.limit_,"");const a=new _e(e,n),l=this.reverse_?r.getFirstChild(this.index_):r.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(r.hasChild(e)){const t=r.getImmediateChild(e);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===e||r.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:o(h,a);if(c&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange($e(e,n,t)),r.updateImmediateChild(e,n);{null!=s&&s.trackChildChange(Ke(e,t));const n=r.updateImmediateChild(e,Be.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=s&&s.trackChildChange(Ye(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?t:c&&o(l,a)>=0?(null!=s&&(s.trackChildChange(Ke(l.name,l.node)),s.trackChildChange(Ye(e,n))),r.updateImmediateChild(e,n).updateImmediateChild(l.name,Be.EMPTY_NODE)):t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,Z.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,Z.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,Z.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,Z.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,Z.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const t=new Ze;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Je(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Me?n="$priority":t.index_===je?n="$value":t.index_===ve?n="$key":((0,Z.assert)(t.index_ instanceof He,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=(0,Z.stringify)(n),t.startSet_){const n=t.startAfterSet_?"startAfter":"startAt";e[n]=(0,Z.stringify)(t.indexStartValue_),t.startNameSet_&&(e[n]+=","+(0,Z.stringify)(t.indexStartName_))}if(t.endSet_){const n=t.endBeforeSet_?"endBefore":"endAt";e[n]=(0,Z.stringify)(t.indexEndValue_),t.endNameSet_&&(e[n]+=","+(0,Z.stringify)(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function tn(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e.vf=n}return t.index_!==Me&&(e.i=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends $t{constructor(t,e,n,i){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=_t("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:((0,Z.assert)(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=en.getListenId_(t,n),r={};this.listens_[o]=r;const a=Je(t._queryParams);this.restRequest_(s+".json",a,((t,e)=>{let a=e;if(404===t&&(a=null,t=null),null===t&&this.onDataUpdate_(s,a,!1,n),(0,Z.safeGet)(this.listens_,o)===r){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",i(e,null)}}))}unlisten(t,e){const n=en.getListenId_(t,e);delete this.listens_[n]}get(t){const e=Je(t._queryParams),n=t._path.toString(),i=new(0,Z.Deferred);return this.restRequest_(n+".json",e,((t,e)=>{let s=e;404===t&&(s=null,t=null),null===t?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(e.auth=i.accessToken),s&&s.token&&(e.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+(0,Z.querystring)(e);this.log_("Sending REST request for "+o);const r=new XMLHttpRequest;r.onreadystatechange=()=>{if(n&&4===r.readyState){this.log_("REST Response for "+o+" received. status:",r.status,"response:",r.responseText);let t=null;if(r.status>=200&&r.status<300){try{t=(0,Z.jsonEval)(r.responseText)}catch(t){yt("Failed to parse JSON response for "+o+": "+r.responseText)}n(null,t)}else 401!==r.status&&404!==r.status&&yt("Got unsuccessful REST response for "+o+" Status: "+r.status),n(r.status);n=null}},r.open("GET",o,!0),r.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.rootNode_=Be.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return{value:null,children:new Map}}function on(t,e,n){if(re(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const i=Jt(e);t.children.has(i)||t.children.set(i,sn());on(t.children.get(i),e=ee(e),n)}}function rn(t,e,n){null!==t.value?n(e,t.value):function(t,e){t.children.forEach(((t,n)=>{e(n,t)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,((t,i)=>{rn(i,new Xt(e.toString()+"/"+t),n)}))}class an{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&kt(this.last_,((t,n)=>{e[t]=e[t]-n})),this.last_=t,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new an(t);const n=1e4+2e4*Math.random();Pt(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;kt(t,((t,i)=>{i>0&&(0,Z.contains)(this.statsToReport_,t)&&(e[t]=i,n=!0)})),n&&this.server_.reportStats(e),Pt(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn,hn;function un(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(hn=cn||(cn={}))[hn.OVERWRITE=0]="OVERWRITE",hn[hn.MERGE=1]="MERGE",hn[hn.ACK_USER_WRITE=2]="ACK_USER_WRITE",hn[hn.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class dn{constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=cn.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(t){if(re(this.path)){if(null!=this.affectedTree.value)return(0,Z.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new Xt(t));return new dn(Zt(),e,this.revert)}}return(0,Z.assert)(Jt(this.path)===t,"operationForChild called for unrelated child."),new dn(ee(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,e){this.source=t,this.path=e,this.type=cn.LISTEN_COMPLETE}operationForChild(t){return re(this.path)?new pn(this.source,Zt()):new pn(this.source,ee(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=cn.OVERWRITE}operationForChild(t){return re(this.path)?new fn(this.source,Zt(),this.snap.getImmediateChild(t)):new fn(this.source,ee(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=cn.MERGE}operationForChild(t){if(re(this.path)){const e=this.children.subtree(new Xt(t));return e.isEmpty()?null:e.value?new fn(this.source,Zt(),e.value):new _n(this.source,Zt(),e)}return(0,Z.assert)(Jt(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new _n(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(re(t))return this.isFullyInitialized()&&!this.filtered_;const e=Jt(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function yn(t,e,n,i,s,o){const r=i.filter((t=>t.type===n));r.sort(((e,n)=>function(t,e,n){if(null==e.childName||null==n.childName)throw(0,Z.assertionError)("Should only compare child_ events.");const i=new _e(e.childName,e.snapshotNode),s=new _e(n.childName,n.snapshotNode);return t.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,n))),r.forEach((n=>{const i=function(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}(t,n,o);s.forEach((s=>{s.respondsTo(n.type)&&e.push(s.createEvent(i,t.query_))}))}))}function vn(t,e){return{eventCache:t,serverCache:e}}function wn(t,e,n,i){return vn(new mn(e,n,i),t.serverCache)}function Cn(t,e,n,i){return vn(t.eventCache,new mn(e,n,i))}function bn(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn;class kn{constructor(t,e=(()=>(Tn||(Tn=new be(Ct)),Tn))()){this.value=t,this.children=e}static fromObject(t){let e=new kn(null);return kt(t,((t,n)=>{e=e.set(new Xt(t),n)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:Zt(),value:this.value};if(re(t))return null;{const n=Jt(t),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(ee(t),e);if(null!=s){return{path:oe(new Xt(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(re(t))return this;{const e=Jt(t),n=this.children.get(e);return null!==n?n.subtree(ee(t)):new kn(null)}}set(t,e){if(re(t))return new kn(e,this.children);{const n=Jt(t),i=(this.children.get(n)||new kn(null)).set(ee(t),e),s=this.children.insert(n,i);return new kn(this.value,s)}}remove(t){if(re(t))return this.children.isEmpty()?new kn(null):new kn(null,this.children);{const e=Jt(t),n=this.children.get(e);if(n){const i=n.remove(ee(t));let s;return s=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),null===this.value&&s.isEmpty()?new kn(null):new kn(this.value,s)}return this}}get(t){if(re(t))return this.value;{const e=Jt(t),n=this.children.get(e);return n?n.get(ee(t)):null}}setTree(t,e){if(re(t))return e;{const n=Jt(t),i=(this.children.get(n)||new kn(null)).setTree(ee(t),e);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new kn(this.value,s)}}fold(t){return this.fold_(Zt(),t)}fold_(t,e){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(oe(t,i),e)})),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,Zt(),e)}findOnPath_(t,e,n){const i=!!this.value&&n(e,this.value);if(i)return i;if(re(t))return null;{const i=Jt(t),s=this.children.get(i);return s?s.findOnPath_(ee(t),oe(e,i),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,Zt(),e)}foreachOnPath_(t,e,n){if(re(t))return this;{this.value&&n(e,this.value);const i=Jt(t),s=this.children.get(i);return s?s.foreachOnPath_(ee(t),oe(e,i),n):new kn(null)}}foreach(t){this.foreach_(Zt(),t)}foreach_(t,e){this.children.inorderTraversal(((n,i)=>{i.foreach_(oe(t,n),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,n)=>{n.value&&t(e,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t){this.writeTree_=t}static empty(){return new In(new kn(null))}}function En(t,e,n){if(re(e))return new In(new kn(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(null!=i){const s=i.path;let o=i.value;const r=ae(s,e);return o=o.updateChild(r,n),new In(t.writeTree_.set(s,o))}{const i=new kn(n),s=t.writeTree_.setTree(e,i);return new In(s)}}}function Nn(t,e,n){let i=t;return kt(n,((t,n)=>{i=En(i,oe(e,t),n)})),i}function Sn(t,e){if(re(e))return In.empty();{const n=t.writeTree_.setTree(e,new kn(null));return new In(n)}}function Pn(t,e){return null!=Rn(t,e)}function Rn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(ae(n.path,e)):null}function Mn(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Me,((t,n)=>{e.push(new _e(t,n))})):t.writeTree_.children.inorderTraversal(((t,n)=>{null!=n.value&&e.push(new _e(t,n.value))})),e}function An(t,e){if(re(e))return t;{const n=Rn(t,e);return new In(null!=n?new kn(n):t.writeTree_.subtree(e))}}function Dn(t){return t.writeTree_.isEmpty()}function Ln(t,e){return On(Zt(),t.writeTree_,e)}function On(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal(((e,s)=>{".priority"===e?((0,Z.assert)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=On(oe(t,e),s,n)})),n.getChild(t).isEmpty()||null===i||(n=n.updateChild(oe(t,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){return Qn(e,t)}function qn(t,e){const n=t.allWrites.findIndex((t=>t.writeId===e));(0,Z.assert)(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,o=!1,r=t.allWrites.length-1;for(;s&&r>=0;){const e=t.allWrites[r];e.visible&&(r>=n&&Wn(e,i.path)?s=!1:ce(i.path,e.path)&&(o=!0)),r--}if(s){if(o)return function(t){t.visibleWrites=Un(t.allWrites,Bn,Zt()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}(t),!0;if(i.snap)t.visibleWrites=Sn(t.visibleWrites,i.path);else{kt(i.children,(e=>{t.visibleWrites=Sn(t.visibleWrites,oe(i.path,e))}))}return!0}return!1}function Wn(t,e){if(t.snap)return ce(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ce(oe(t.path,n),e))return!0;return!1}function Bn(t){return t.visible}function Un(t,e,n){let i=In.empty();for(let s=0;s<t.length;++s){const o=t[s];if(e(o)){const t=o.path;let e;if(o.snap)ce(n,t)?(e=ae(n,t),i=En(i,e,o.snap)):ce(t,n)&&(e=ae(t,n),i=En(i,Zt(),o.snap.getChild(e)));else{if(!o.children)throw(0,Z.assertionError)("WriteRecord should have .snap or .children");if(ce(n,t))e=ae(n,t),i=Nn(i,e,o.children);else if(ce(t,n))if(e=ae(t,n),re(e))i=Nn(i,Zt(),o.children);else{const t=(0,Z.safeGet)(o.children,Jt(e));if(t){const n=t.getChild(ee(e));i=En(i,Zt(),n)}}}}}return i}function zn(t,e,n,i,s){if(i||s){const o=An(t.visibleWrites,e);if(!s&&Dn(o))return n;if(s||null!=n||Pn(o,Zt())){const o=function(t){return(t.visible||s)&&(!i||!~i.indexOf(t.writeId))&&(ce(t.path,e)||ce(e,t.path))};return Ln(Un(t.allWrites,o,e),n||Be.EMPTY_NODE)}return null}{const i=Rn(t.visibleWrites,e);if(null!=i)return i;{const i=An(t.visibleWrites,e);if(Dn(i))return n;if(null!=n||Pn(i,Zt())){return Ln(i,n||Be.EMPTY_NODE)}return null}}}function Hn(t,e,n,i){return zn(t.writeTree,t.treePath,e,n,i)}function jn(t,e){return function(t,e,n){let i=Be.EMPTY_NODE;const s=Rn(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Me,((t,e)=>{i=i.updateImmediateChild(t,e)})),i;if(n){const s=An(t.visibleWrites,e);return n.forEachChild(Me,((t,e)=>{const n=Ln(An(s,new Xt(t)),e);i=i.updateImmediateChild(t,n)})),Mn(s).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}return Mn(An(t.visibleWrites,e)).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}(t.writeTree,t.treePath,e)}function Vn(t,e,n,i){return function(t,e,n,i,s){(0,Z.assert)(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=oe(e,n);if(Pn(t.visibleWrites,o))return null;{const e=An(t.visibleWrites,o);return Dn(e)?s.getChild(n):Ln(e,s.getChild(n))}}(t.writeTree,t.treePath,e,n,i)}function Yn(t,e){return function(t,e){return Rn(t.visibleWrites,e)}(t.writeTree,oe(t.treePath,e))}function Kn(t,e,n,i,s,o){return function(t,e,n,i,s,o,r){let a;const l=An(t.visibleWrites,e),c=Rn(l,Zt());if(null!=c)a=c;else{if(null==n)return[];a=Ln(l,n)}if(a=a.withIndex(r),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=r.getCompare(),n=o?a.getReverseIteratorFrom(i,r):a.getIteratorFrom(i,r);let l=n.getNext();for(;l&&t.length<s;)0!==e(l,i)&&t.push(l),l=n.getNext();return t}}(t.writeTree,t.treePath,e,n,i,s,o)}function $n(t,e,n){return function(t,e,n,i){const s=oe(e,n),o=Rn(t.visibleWrites,s);if(null!=o)return o;if(i.isCompleteForChild(n))return Ln(An(t.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(t.writeTree,t.treePath,e,n)}function Gn(t,e){return Qn(oe(t.treePath,e),t.writeTree)}function Qn(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,n=t.childName;(0,Z.assert)("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),(0,Z.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===e&&"child_removed"===s)this.changeMap.set(n,$e(n,t.snapshotNode,i.snapshotNode));else if("child_removed"===e&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===s)this.changeMap.set(n,Ke(n,i.oldSnap));else if("child_changed"===e&&"child_added"===s)this.changeMap.set(n,Ye(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==s)throw(0,Z.assertionError)("Illegal combination of changes: "+t+" occurred after "+i);this.changeMap.set(n,$e(n,t.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new class{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}};class Jn{constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new mn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $n(this.writes_,t,e)}}getChildAfterChild(t,e,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:xn(this.viewCache_),s=Kn(this.writes_,i,e,1,n,t);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t,e,n,i,s){const o=new Xn;let r,a;if(n.type===cn.OVERWRITE){const l=n;l.source.fromUser?r=ii(t,e,l.path,l.snap,i,s,o):((0,Z.assert)(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!re(l.path),r=ni(t,e,l.path,l.snap,i,s,a,o))}else if(n.type===cn.MERGE){const l=n;l.source.fromUser?r=function(t,e,n,i,s,o,r){let a=e;return i.foreach(((i,l)=>{const c=oe(n,i);si(e,Jt(c))&&(a=ii(t,a,c,l,s,o,r))})),i.foreach(((i,l)=>{const c=oe(n,i);si(e,Jt(c))||(a=ii(t,a,c,l,s,o,r))})),a}(t,e,l.path,l.children,i,s,o):((0,Z.assert)(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),r=ri(t,e,l.path,l.children,i,s,a,o))}else if(n.type===cn.ACK_USER_WRITE){const a=n;r=a.revert?function(t,e,n,i,s,o){let r;if(null!=Yn(i,n))return e;{const a=new Jn(i,e,s),l=e.eventCache.getNode();let c;if(re(n)||".priority"===Jt(n)){let n;if(e.serverCache.isFullyInitialized())n=Hn(i,xn(e));else{const t=e.serverCache.getNode();(0,Z.assert)(t instanceof Be,"serverChildren would be complete if leaf node"),n=jn(i,t)}c=t.filter.updateFullNode(l,n,o)}else{const s=Jt(n);let h=$n(i,s,e.serverCache);null==h&&e.serverCache.isCompleteForChild(s)&&(h=l.getImmediateChild(s)),c=null!=h?t.filter.updateChild(l,s,h,ee(n),a,o):e.eventCache.getNode().hasChild(s)?t.filter.updateChild(l,s,Be.EMPTY_NODE,ee(n),a,o):l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(r=Hn(i,xn(e)),r.isLeafNode()&&(c=t.filter.updateFullNode(c,r,o)))}return r=e.serverCache.isFullyInitialized()||null!=Yn(i,Zt()),wn(e,c,r,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,a.path,i,s,o):function(t,e,n,i,s,o,r){if(null!=Yn(s,n))return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(null!=i.value){if(re(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ni(t,e,n,l.getNode().getChild(n),s,o,a,r);if(re(n)){let i=new kn(null);return l.getNode().forEachChild(ve,((t,e)=>{i=i.set(new Xt(t),e)})),ri(t,e,n,i,s,o,a,r)}return e}{let c=new kn(null);return i.foreach(((t,e)=>{const i=oe(n,t);l.isCompleteForPath(i)&&(c=c.set(t,l.getNode().getChild(i)))})),ri(t,e,n,c,s,o,a,r)}}(t,e,a.path,a.affectedTree,i,s,o)}else{if(n.type!==cn.LISTEN_COMPLETE)throw(0,Z.assertionError)("Unknown operation type: "+n.type);r=function(t,e,n,i,s){const o=e.serverCache,r=Cn(e,o.getNode(),o.isFullyInitialized()||re(n),o.isFiltered());return ei(t,r,n,i,Zn,s)}(t,e,n.path,i,o)}const l=o.getChanges();return function(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=bn(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(Ve(bn(e)))}}(e,r,l),{viewCache:r,changes:l}}function ei(t,e,n,i,s,o){const r=e.eventCache;if(null!=Yn(i,n))return e;{let a,l;if(re(n))if((0,Z.assert)(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=xn(e),s=jn(i,n instanceof Be?n:Be.EMPTY_NODE);a=t.filter.updateFullNode(e.eventCache.getNode(),s,o)}else{const n=Hn(i,xn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),n,o)}else{const c=Jt(n);if(".priority"===c){(0,Z.assert)(1===te(n),"Can't have a priority with additional path components");const s=r.getNode();l=e.serverCache.getNode();const o=Vn(i,n,s,l);a=null!=o?t.filter.updatePriority(s,o):r.getNode()}else{const h=ee(n);let u;if(r.isCompleteForChild(c)){l=e.serverCache.getNode();const t=Vn(i,n,r.getNode(),l);u=null!=t?r.getNode().getImmediateChild(c).updateChild(h,t):r.getNode().getImmediateChild(c)}else u=$n(i,c,e.serverCache);a=null!=u?t.filter.updateChild(r.getNode(),c,u,h,s,o):r.getNode()}}return wn(e,a,r.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function ni(t,e,n,i,s,o,r,a){const l=e.serverCache;let c;const h=r?t.filter:t.filter.getIndexedFilter();if(re(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const t=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),t,null)}else{const t=Jt(n);if(!l.isCompleteForPath(n)&&te(n)>1)return e;const s=ee(n),o=l.getNode().getImmediateChild(t).updateChild(s,i);c=".priority"===t?h.updatePriority(l.getNode(),o):h.updateChild(l.getNode(),t,o,s,Zn,null)}const u=Cn(e,c,l.isFullyInitialized()||re(n),h.filtersNodes());return ei(t,u,n,s,new Jn(s,u,o),a)}function ii(t,e,n,i,s,o,r){const a=e.eventCache;let l,c;const h=new Jn(s,e,o);if(re(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,r),l=wn(e,c,!0,t.filter.filtersNodes());else{const s=Jt(n);if(".priority"===s)c=t.filter.updatePriority(e.eventCache.getNode(),i),l=wn(e,c,a.isFullyInitialized(),a.isFiltered());else{const o=ee(n),c=a.getNode().getImmediateChild(s);let u;if(re(o))u=i;else{const t=h.getCompleteChild(s);u=null!=t?".priority"===ne(o)&&t.getChild(se(o)).isEmpty()?t:t.updateChild(o,i):Be.EMPTY_NODE}if(c.equals(u))l=e;else{l=wn(e,t.filter.updateChild(a.getNode(),s,u,o,h,r),a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function si(t,e){return t.eventCache.isCompleteForChild(e)}function oi(t,e,n){return n.foreach(((t,n)=>{e=e.updateChild(t,n)})),e}function ri(t,e,n,i,s,o,r,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l,c=e;l=re(n)?i:new kn(null).setTree(n,i);const h=e.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=oi(0,e.serverCache.getNode().getImmediateChild(n),i);c=ni(t,c,new Xt(n),l,s,o,r,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!e.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=oi(0,e.serverCache.getNode().getImmediateChild(n),i);c=ni(t,c,new Xt(n),l,s,o,r,a)}})),c}class ai{constructor(t,e){this.query_=t,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Ge(n.getIndex()),s=(o=n).loadsAllData()?new Ge(o.getIndex()):o.hasLimit()?new Xe(o):new Qe(o);var o;this.processor_=function(t){return{filter:t}}(s);const r=e.serverCache,a=e.eventCache,l=i.updateFullNode(Be.EMPTY_NODE,r.getNode(),null),c=s.updateFullNode(Be.EMPTY_NODE,a.getNode(),null),h=new mn(l,r.isFullyInitialized(),i.filtersNodes()),u=new mn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=vn(u,h),this.eventGenerator_=new gn(this.query_)}get query(){return this.query_}}function li(t,e){const n=xn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(Jt(e)).isEmpty())?n.getChild(e):null}function ci(t){return 0===t.eventRegistrations_.length}function hi(t,e,n){const i=[];if(n){(0,Z.assert)(null==e,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach((t=>{const e=t.createCancelEvent(n,s);e&&i.push(e)}))}if(e){let n=[];for(let i=0;i<t.eventRegistrations_.length;++i){const s=t.eventRegistrations_[i];if(s.matches(e)){if(e.hasAnyCallback()){n=n.concat(t.eventRegistrations_.slice(i+1));break}}else n.push(s)}t.eventRegistrations_=n}else t.eventRegistrations_=[];return i}function ui(t,e,n,i){e.type===cn.MERGE&&null!==e.source.queryId&&((0,Z.assert)(xn(t.viewCache_),"We should always have a full cache before handling merges"),(0,Z.assert)(bn(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,o=ti(t.processor_,s,e,n,i);var r,a;return r=t.processor_,a=o.viewCache,(0,Z.assert)(a.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),(0,Z.assert)(a.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),(0,Z.assert)(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=o.viewCache,di(t,o.changes,o.viewCache.eventCache.getNode(),null)}function di(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return function(t,e,n,i){const s=[],o=[];return e.forEach((e=>{var n;"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&o.push((n=e.childName,{type:"child_moved",snapshotNode:e.snapshotNode,childName:n}))})),yn(t,s,"child_removed",e,i,n),yn(t,s,"child_added",e,i,n),yn(t,s,"child_moved",o,i,n),yn(t,s,"child_changed",e,i,n),yn(t,s,"value",e,i,n),s}(t.eventGenerator_,e,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi,fi;class _i{constructor(){this.views=new Map}}function mi(t,e,n,i){const s=e.source.queryId;if(null!==s){const o=t.views.get(s);return(0,Z.assert)(null!=o,"SyncTree gave us an op for an invalid query."),ui(o,e,n,i)}{let s=[];for(const o of t.views.values())s=s.concat(ui(o,e,n,i));return s}}function gi(t,e,n,i,s){const o=e._queryIdentifier,r=t.views.get(o);if(!r){let t=Hn(n,s?i:null),o=!1;t?o=!0:i instanceof Be?(t=jn(n,i),o=!1):(t=Be.EMPTY_NODE,o=!1);const r=vn(new mn(t,o,!1),new mn(i,s,!1));return new ai(e,r)}return r}function yi(t,e,n,i,s,o){const r=gi(t,e,i,s,o);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,r),function(t,e){t.eventRegistrations_.push(e)}(r,n),function(t,e){const n=t.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Me,((t,e)=>{i.push(Ye(t,e))}));return n.isFullyInitialized()&&i.push(Ve(n.getNode())),di(t,i,n.getNode(),e)}(r,n)}function vi(t,e,n,i){const s=e._queryIdentifier,o=[];let r=[];const a=Ti(t);if("default"===s)for(const[e,s]of t.views.entries())r=r.concat(hi(s,n,i)),ci(s)&&(t.views.delete(e),s.query._queryParams.loadsAllData()||o.push(s.query));else{const e=t.views.get(s);e&&(r=r.concat(hi(e,n,i)),ci(e)&&(t.views.delete(s),e.query._queryParams.loadsAllData()||o.push(e.query)))}return a&&!Ti(t)&&o.push(new((0,Z.assert)(pi,"Reference.ts has not been loaded"),pi)(e._repo,e._path)),{removed:o,events:r}}function wi(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ci(t,e){let n=null;for(const i of t.views.values())n=n||li(i,e);return n}function bi(t,e){if(e._queryParams.loadsAllData())return ki(t);{const n=e._queryIdentifier;return t.views.get(n)}}function xi(t,e){return null!=bi(t,e)}function Ti(t){return null!=ki(t)}function ki(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii=1;class Ei{constructor(t){this.listenProvider_=t,this.syncPointTree_=new kn(null),this.pendingWriteTree_={visibleWrites:In.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ni(t,e,n,i,s){return function(t,e,n,i,s){(0,Z.assert)(i>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=En(t.visibleWrites,e,n)),t.lastWriteId=i}(t.pendingWriteTree_,e,n,i,s),s?Oi(t,new fn({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},e,n)):[]}function Si(t,e,n=!1){const i=function(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}(t.pendingWriteTree_,e);if(qn(t.pendingWriteTree_,e)){let e=new kn(null);return null!=i.snap?e=e.set(Zt(),!0):kt(i.children,(t=>{e=e.set(new Xt(t),!0)})),Oi(t,new dn(i.path,e,n))}return[]}function Pi(t,e,n){return Oi(t,new fn({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,n))}function Ri(t,e,n,i,s=!1){const o=e._path,r=t.syncPointTree_.get(o);let a=[];if(r&&("default"===e._queryIdentifier||xi(r,e))){const l=vi(r,e,n,i);0===r.views.size&&(t.syncPointTree_=t.syncPointTree_.remove(o));const c=l.removed;if(a=l.events,!s){const n=-1!==c.findIndex((t=>t._queryParams.loadsAllData())),s=t.syncPointTree_.findOnPath(o,((t,e)=>Ti(e)));if(n&&!s){const e=t.syncPointTree_.subtree(o);if(!e.isEmpty()){const n=function(t){return t.fold(((t,e,n)=>{if(e&&Ti(e)){return[ki(e)]}{let t=[];return e&&(t=wi(e)),kt(n,((e,n)=>{t=t.concat(n)})),t}}))}(e);for(let e=0;e<n.length;++e){const i=n[e],s=i.query,o=Wi(t,i);t.listenProvider_.startListening(Vi(s),Bi(t,s),o.hashFn,o.onComplete)}}}if(!s&&c.length>0&&!i)if(n){const n=null;t.listenProvider_.stopListening(Vi(e),n)}else c.forEach((e=>{const n=t.queryToTagMap.get(Ui(e));t.listenProvider_.stopListening(Vi(e),n)}))}!function(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const e=Ui(i),n=t.queryToTagMap.get(e);t.queryToTagMap.delete(e),t.tagToQueryMap.delete(n)}}}(t,c)}return a}function Mi(t,e,n,i){const s=zi(t,i);if(null!=s){const i=Hi(s),o=i.path,r=i.queryId,a=ae(o,e);return ji(t,o,new fn(un(r),a,n))}return[]}function Ai(t,e,n,i=!1){const s=e._path;let o=null,r=!1;t.syncPointTree_.foreachOnPath(s,((t,e)=>{const n=ae(t,s);o=o||Ci(e,n),r=r||Ti(e)}));let a,l=t.syncPointTree_.get(s);if(l?(r=r||Ti(l),o=o||Ci(l,Zt())):(l=new _i,t.syncPointTree_=t.syncPointTree_.set(s,l)),null!=o)a=!0;else{a=!1,o=Be.EMPTY_NODE;t.syncPointTree_.subtree(s).foreachChild(((t,e)=>{const n=Ci(e,Zt());n&&(o=o.updateImmediateChild(t,n))}))}const c=xi(l,e);if(!c&&!e._queryParams.loadsAllData()){const n=Ui(e);(0,Z.assert)(!t.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Ii++;t.queryToTagMap.set(n,i),t.tagToQueryMap.set(i,n)}let h=yi(l,e,n,Fn(t.pendingWriteTree_,s),o,a);if(!c&&!r&&!i){const n=bi(l,e);h=h.concat(function(t,e,n){const i=e._path,s=Bi(t,e),o=Wi(t,n),r=t.listenProvider_.startListening(Vi(e),s,o.hashFn,o.onComplete),a=t.syncPointTree_.subtree(i);if(s)(0,Z.assert)(!Ti(a.value),"If we're adding a query, it shouldn't be shadowed");else{const e=a.fold(((t,e,n)=>{if(!re(t)&&e&&Ti(e))return[ki(e).query];{let t=[];return e&&(t=t.concat(wi(e).map((t=>t.query)))),kt(n,((e,n)=>{t=t.concat(n)})),t}}));for(let n=0;n<e.length;++n){const i=e[n];t.listenProvider_.stopListening(Vi(i),Bi(t,i))}}return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,n))}return h}function Di(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,((t,n)=>{const i=Ci(n,ae(t,e));if(i)return i}));return zn(i,e,s,n,!0)}function Li(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,((t,e)=>{const s=ae(t,n);i=i||Ci(e,s)}));let s=t.syncPointTree_.get(n);s?i=i||Ci(s,Zt()):(s=new _i,t.syncPointTree_=t.syncPointTree_.set(n,s));const o=null!=i,r=o?new mn(i,!0,!1):null;return function(t){return bn(t.viewCache_)}(gi(s,e,Fn(t.pendingWriteTree_,e._path),o?r.getNode():Be.EMPTY_NODE,o))}function Oi(t,e){return Fi(e,t.syncPointTree_,null,Fn(t.pendingWriteTree_,Zt()))}function Fi(t,e,n,i){if(re(t.path))return qi(t,e,n,i);{const s=e.get(Zt());null==n&&null!=s&&(n=Ci(s,Zt()));let o=[];const r=Jt(t.path),a=t.operationForChild(r),l=e.children.get(r);if(l&&a){const t=n?n.getImmediateChild(r):null,e=Gn(i,r);o=o.concat(Fi(a,l,t,e))}return s&&(o=o.concat(mi(s,t,i,n))),o}}function qi(t,e,n,i){const s=e.get(Zt());null==n&&null!=s&&(n=Ci(s,Zt()));let o=[];return e.children.inorderTraversal(((e,s)=>{const r=n?n.getImmediateChild(e):null,a=Gn(i,e),l=t.operationForChild(e);l&&(o=o.concat(qi(l,s,r,a)))})),s&&(o=o.concat(mi(s,t,i,n))),o}function Wi(t,e){const n=e.query,i=Bi(t,n);return{hashFn:()=>{const t=function(t){return t.viewCache_.serverCache.getNode()}(e)||Be.EMPTY_NODE;return t.hash()},onComplete:e=>{if("ok"===e)return i?function(t,e,n){const i=zi(t,n);if(i){const n=Hi(i),s=n.path,o=n.queryId,r=ae(s,e);return ji(t,s,new pn(un(o),r))}return[]}(t,n._path,i):function(t,e){return Oi(t,new pn({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e))}(t,n._path);{const i=function(t,e){let n="Unknown Error";"too_big"===t?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===t?n="Client doesn't have permission to access the desired data.":"unavailable"===t&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}(e,n);return Ri(t,n,null,i)}}}}function Bi(t,e){const n=Ui(e);return t.queryToTagMap.get(n)}function Ui(t){return t._path.toString()+"$"+t._queryIdentifier}function zi(t,e){return t.tagToQueryMap.get(e)}function Hi(t){const e=t.indexOf("$");return(0,Z.assert)(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Xt(t.substr(0,e))}}function ji(t,e,n){const i=t.syncPointTree_.get(e);(0,Z.assert)(i,"Missing sync point for query tag that we're tracking");return mi(i,n,Fn(t.pendingWriteTree_,e),null)}function Vi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new((0,Z.assert)(fi,"Reference.ts has not been loaded"),fi)(t._repo,t._path):t}class Yi{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new Yi(e)}node(){return this.node_}}class Ki{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=oe(this.path_,t);return new Ki(this.syncTree_,e)}node(){return Di(this.syncTree_,this.path_)}}const $i=function(t,e,n){return t&&"object"==typeof t?((0,Z.assert)(".sv"in t,"Unexpected leaf node or priority contents"),"string"==typeof t[".sv"]?Gi(t[".sv"],e,n):"object"==typeof t[".sv"]?Qi(t[".sv"],e):void(0,Z.assert)(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},Gi=function(t,e,n){if("timestamp"===t)return n.timestamp;(0,Z.assert)(!1,"Unexpected server value: "+t)},Qi=function(t,e,n){t.hasOwnProperty("increment")||(0,Z.assert)(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;"number"!=typeof i&&(0,Z.assert)(!1,"Unexpected increment value: "+i);const s=e.node();if((0,Z.assert)(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return"number"!=typeof o?i:o+i},Xi=function(t,e,n,i){return Ji(e,new Ki(n,t),i)},Zi=function(t,e,n){return Ji(t,new Yi(e),n)};function Ji(t,e,n){const i=t.getPriority().val(),s=$i(i,e.getImmediateChild(".priority"),n);let o;if(t.isLeafNode()){const i=t,o=$i(i.getValue(),e,n);return o!==i.getValue()||s!==i.getPriority().val()?new Re(o,ze(s)):t}{const i=t;return o=i,s!==i.getPriority().val()&&(o=o.updatePriority(new Re(s))),i.forEachChild(Me,((t,i)=>{const s=Ji(i,e.getImmediateChild(t),n);s!==i&&(o=o.updateImmediateChild(t,s))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function es(t,e){let n=e instanceof Xt?e:new Xt(e),i=t,s=Jt(n);for(;null!==s;){const t=(0,Z.safeGet)(i.node.children,s)||{children:{},childCount:0};i=new ts(s,i,t),n=ee(n),s=Jt(n)}return i}function ns(t){return t.node.value}function is(t,e){t.node.value=e,ls(t)}function ss(t){return t.node.childCount>0}function os(t,e){kt(t.node.children,((n,i)=>{e(new ts(n,t,i))}))}function rs(t,e,n,i){n&&!i&&e(t),os(t,(t=>{rs(t,e,!0,i)})),n&&i&&e(t)}function as(t){return new Xt(null===t.parent?t.name:as(t.parent)+"/"+t.name)}function ls(t){null!==t.parent&&function(t,e,n){const i=function(t){return void 0===ns(t)&&!ss(t)}(n),s=(0,Z.contains)(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,ls(t)):i||s||(t.node.children[e]=n.node,t.node.childCount++,ls(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.parent,t.name,t)}const cs=/[\[\].#$\/\u0000-\u001F\u007F]/,hs=/[\[\].#$\u0000-\u001F\u007F]/,us=function(t){return"string"==typeof t&&0!==t.length&&!cs.test(t)},ds=function(t){return"string"==typeof t&&0!==t.length&&!hs.test(t)},ps=function(t,e,n){const i=n instanceof Xt?new he(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+de(i));if("function"==typeof e)throw new Error(t+"contains a function "+de(i)+" with contents = "+e.toString());if(vt(e))throw new Error(t+"contains "+e.toString()+" "+de(i));if("string"==typeof e&&e.length>10485760/3&&(0,Z.stringLength)(e)>10485760)throw new Error(t+"contains a string greater than 10485760 utf8 bytes "+de(i)+" ('"+e.substring(0,50)+"...')");if(e&&"object"==typeof e){let n=!1,s=!1;if(kt(e,((e,o)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(s=!0,!us(e)))throw new Error(t+" contains an invalid key ("+e+") "+de(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var r,a;a=e,(r=i).parts_.length>0&&(r.byteLength_+=1),r.parts_.push(a),r.byteLength_+=(0,Z.stringLength)(a),ue(r),ps(t,o,i),function(t){const e=t.parts_.pop();t.byteLength_-=(0,Z.stringLength)(e),t.parts_.length>0&&(t.byteLength_-=1)}(i)})),n&&s)throw new Error(t+' contains ".value" child '+de(i)+" in addition to actual children.")}},fs=function(t,e,n,i){if(!(i&&void 0===n||ds(n)))throw new Error((0,Z.errorPrefix)(t,e)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},_s=function(t,e){const n=e.path.toString();if("string"!=typeof e.repoInfo.host||0===e.repoInfo.host.length||!us(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ds(t)}(n))throw new Error((0,Z.errorPrefix)(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ms{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gs(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],o=s.getPath();null===n||le(o,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(s)}n&&t.eventLists_.push(n)}function ys(t,e,n){gs(t,n),ws(t,(t=>le(t,e)))}function vs(t,e,n){gs(t,n),ws(t,(t=>ce(t,e)||ce(e,t)))}function ws(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){e(s.path)?(Cs(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Cs(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const i=n.getEventRunner();ut&&ft("event: "+n.toString()),St(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t,e,n,i){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ms,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sn(),this.transactionQueueTree_=new ts,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xs(t,e,n){if(t.stats_=Bt(t.repoInfo_),t.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)t.server_=new en(t.repoInfo_,((e,n,i,s)=>{Is(t,e,n,i,s)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>Es(t,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,Z.stringify)(n)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}t.persistentConnection_=new fe(t.repoInfo_,e,((e,n,i,s)=>{Is(t,e,n,i,s)}),(e=>{Es(t,e)}),(e=>{!function(t,e){kt(e,((e,n)=>{Ns(t,e,n)}))}(t,e)}),t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=function(t,e){const n=t.toString();return Wt[n]||(Wt[n]=e()),Wt[n]}(t.repoInfo_,(()=>new ln(t.stats_,t.server_))),t.infoData_=new nn,t.infoSyncTree_=new Ei({startListening:(e,n,i,s)=>{let o=[];const r=t.infoData_.getNode(e._path);return r.isEmpty()||(o=Pi(t.infoSyncTree_,e._path,r),setTimeout((()=>{s("ok")}),0)),o},stopListening:()=>{}}),Ns(t,"connected",!1),t.serverSyncTree_=new Ei({startListening:(e,n,i,s)=>(t.server_.listen(e,i,n,((n,i)=>{const o=s(n,i);vs(t.eventQueue_,e._path,o)})),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function Ts(t){const e=t.infoData_.getNode(new Xt(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+e}function ks(t){return(e=(e={timestamp:Ts(t)})||{}).timestamp=e.timestamp||(new Date).getTime(),e;var e}function Is(t,e,n,i,s){t.dataUpdateCount++;const o=new Xt(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let r=[];if(s)if(i){const e=(0,Z.map)(n,(t=>ze(t)));r=function(t,e,n,i){const s=zi(t,i);if(s){const i=Hi(s),o=i.path,r=i.queryId,a=ae(o,e),l=kn.fromObject(n);return ji(t,o,new _n(un(r),a,l))}return[]}(t.serverSyncTree_,o,e,s)}else{const e=ze(n);r=Mi(t.serverSyncTree_,o,e,s)}else if(i){const e=(0,Z.map)(n,(t=>ze(t)));r=function(t,e,n){const i=kn.fromObject(n);return Oi(t,new _n({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,i))}(t.serverSyncTree_,o,e)}else{const e=ze(n);r=Pi(t.serverSyncTree_,o,e)}let a=o;r.length>0&&(a=Ls(t,o)),vs(t.eventQueue_,a,r)}function Es(t,e){Ns(t,"connected",e),!1===e&&function(t){Ms(t,"onDisconnectEvents");const e=ks(t),n=sn();rn(t.onDisconnect_,Zt(),((i,s)=>{const o=Xi(i,s,t.serverSyncTree_,e);on(n,i,o)}));let i=[];rn(n,Zt(),((e,n)=>{i=i.concat(Pi(t.serverSyncTree_,e,n));const s=Bs(t,e);Ls(t,s)})),t.onDisconnect_=sn(),vs(t.eventQueue_,Zt(),i)}(t)}function Ns(t,e,n){const i=new Xt("/.info/"+e),s=ze(n);t.infoData_.updateSnapshot(i,s);const o=Pi(t.infoSyncTree_,i,s);vs(t.eventQueue_,i,o)}function Ss(t){return t.nextWriteId_++}function Ps(t,e,n){let i;i=".info"===Jt(e._path)?Ri(t.infoSyncTree_,e,n):Ri(t.serverSyncTree_,e,n),ys(t.eventQueue_,e._path,i)}function Rs(t){t.persistentConnection_&&t.persistentConnection_.interrupt("repo_interrupt")}function Ms(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ft(n,...e)}function As(t,e,n){return Di(t.serverSyncTree_,e,n)||Be.EMPTY_NODE}function Ds(t,e=t.transactionQueueTree_){if(e||Ws(t,e),ns(e)){const n=Fs(t,e);(0,Z.assert)(n.length>0,"Sending zero length transaction queue");n.every((t=>0===t.status))&&function(t,e,n){const i=n.map((t=>t.currentWriteId)),s=As(t,e,i);let o=s;const r=s.hash();for(let t=0;t<n.length;t++){const i=n[t];(0,Z.assert)(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=ae(e,i.path);o=o.updateChild(s,i.currentOutputSnapshotRaw)}const a=o.val(!0),l=e;t.server_.put(l.toString(),a,(i=>{Ms(t,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let e=0;e<n.length;e++)n[e].status=2,s=s.concat(Si(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&i.push((()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved))),n[e].unwatcher();Ws(t,es(t.transactionQueueTree_,e)),Ds(t,t.transactionQueueTree_),vs(t.eventQueue_,e,s);for(let t=0;t<i.length;t++)St(i[t])}else{if("datastale"===i)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{yt("transaction at "+l.toString()+" failed: "+i);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=i}Ls(t,e)}}),r)}(t,as(e),n)}else ss(e)&&os(e,(e=>{Ds(t,e)}))}function Ls(t,e){const n=Os(t,e),i=as(n);return function(t,e,n){if(0===e.length)return;const i=[];let s=[];const o=e.filter((t=>0===t.status)).map((t=>t.currentWriteId));for(let a=0;a<e.length;a++){const l=e[a],c=ae(n,l.path);let h,u=!1;if((0,Z.assert)(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,s=s.concat(Si(t.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,h="maxretry",s=s.concat(Si(t.serverSyncTree_,l.currentWriteId,!0));else{const n=As(t,l.path,o);l.currentInputSnapshot=n;const i=e[a].update(n.val());if(void 0!==i){ps("transaction failed: Data returned ",i,l.path);let e=ze(i);"object"==typeof i&&null!=i&&(0,Z.contains)(i,".priority")||(e=e.updatePriority(n.getPriority()));const r=l.currentWriteId,a=ks(t),c=Zi(e,n,a);l.currentOutputSnapshotRaw=e,l.currentOutputSnapshotResolved=c,l.currentWriteId=Ss(t),o.splice(o.indexOf(r),1),s=s.concat(Ni(t.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),s=s.concat(Si(t.serverSyncTree_,r,!0))}else u=!0,h="nodata",s=s.concat(Si(t.serverSyncTree_,l.currentWriteId,!0))}vs(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,r=e[a].unwatcher,setTimeout(r,Math.floor(0)),e[a].onComplete&&("nodata"===h?i.push((()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot))):i.push((()=>e[a].onComplete(new Error(h),!1,null)))))}var r;Ws(t,t.transactionQueueTree_);for(let t=0;t<i.length;t++)St(i[t]);Ds(t,t.transactionQueueTree_)}(t,Fs(t,n),i),i}function Os(t,e){let n,i=t.transactionQueueTree_;for(n=Jt(e);null!==n&&void 0===ns(i);)i=es(i,n),n=Jt(e=ee(e));return i}function Fs(t,e){const n=[];return qs(t,e,n),n.sort(((t,e)=>t.order-e.order)),n}function qs(t,e,n){const i=ns(e);if(i)for(let t=0;t<i.length;t++)n.push(i[t]);os(e,(e=>{qs(t,e,n)}))}function Ws(t,e){const n=ns(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,is(e,n.length>0?n:void 0)}os(e,(e=>{Ws(t,e)}))}function Bs(t,e){const n=as(Os(t,e)),i=es(t.transactionQueueTree_,e);return function(t,e,n){let i=n?t:t.parent;for(;null!==i;){if(e(i))return!0;i=i.parent}}(i,(e=>{Us(t,e)})),Us(t,i),rs(i,(e=>{Us(t,e)})),n}function Us(t,e){const n=ns(e);if(n){const i=[];let s=[],o=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?((0,Z.assert)(o===e-1,"All SENT items should be at beginning of queue."),o=e,n[e].status=3,n[e].abortReason="set"):((0,Z.assert)(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),s=s.concat(Si(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&i.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===o?is(e,void 0):n.length=o+1,vs(t.eventQueue_,as(e),s);for(let t=0;t<i.length;t++)St(i[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=function(t,e){const n=Hs(t),i=n.namespace;"firebase.com"===n.domain&&gt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Lt(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new Xt(n.pathString)}},Hs=function(t){let e="",n="",i="",s="",o="",r=!0,a="https",l=443;if("string"==typeof t){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");-1===h&&(h=t.length);let u=t.indexOf("?");-1===u&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(s=function(t){let e="";const n=t.split("/");for(let t=0;t<n.length;t++)if(n[t].length>0){let i=n[t];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(t){}e+="/"+i}return e}(t.substring(h,u)));const d=function(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):yt(`Invalid query segment '${n}' in query '${t}'`)}return e}(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(r="https"===a||"wss"===a,l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const t=e.indexOf(".");i=e.substring(0,t).toLowerCase(),n=e.substring(t+1),o=i}"ns"in d&&(o=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:r,scheme:a,pathString:s,namespace:o}};!function(){let t=0;const e=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class js{constructor(t,e,n,i){this.eventType=t,this.eventRegistration=e,this.snapshot=n,this.prevName=i}getPath(){const t=this.snapshot.ref;return"value"===this.eventType?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,Z.stringify)(this.snapshot.exportVal())}}class Vs{constructor(t,e,n){this.eventRegistration=t,this.error=e,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,e){this.snapshotCallback=t,this.cancelCallback=e}onValue(t,e){this.snapshotCallback.call(null,t,e)}onCancel(t){return(0,Z.assert)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ks{constructor(t,e,n,i){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=i}get key(){return re(this._path)?null:ne(this._path)}get ref(){return new $s(this._repo,this._path)}get _queryIdentifier(){const t=tn(this._queryParams),e=xt(t);return"{}"===e?"default":e}get _queryObject(){return tn(this._queryParams)}isEqual(t){if(!((t=(0,Z.getModularInstance)(t))instanceof Ks))return!1;const e=this._repo===t._repo,n=le(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return e&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}(this._path)}}class $s extends Ks{constructor(t,e){super(t,e,new Ze,!1)}get parent(){const t=se(this._path);return null===t?null:new $s(this._repo,t)}get root(){let t=this;for(;null!==t.parent;)t=t.parent;return t}}class Gs{constructor(t,e,n){this._node=t,this.ref=e,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const e=new Xt(t),n=Xs(this.ref,t);return new Gs(this._node.getChild(e),n,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((e,n)=>t(new Gs(n,Xs(this.ref,e),Me))))}hasChild(t){const e=new Xt(t);return!this._node.getChild(e).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Qs(t,e){return(t=(0,Z.getModularInstance)(t))._checkNotDeleted("ref"),void 0!==e?Xs(t._root,e):t._root}function Xs(t,e){var n,i,s,o;return null===Jt((t=(0,Z.getModularInstance)(t))._path)?(n="child",i="path",o=!1,(s=e)&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),fs(n,i,s,o)):fs("child","path",e,!1),new $s(t._repo,oe(t._path,e))}function Zs(t){t=(0,Z.getModularInstance)(t);const e=new Ys((()=>{})),n=new Js(e);return function(t,e,n){const i=Li(t.serverSyncTree_,e);return null!=i?Promise.resolve(i):t.server_.get(e).then((i=>{const s=ze(i).withIndex(e._queryParams.getIndex());let o;if(Ai(t.serverSyncTree_,e,n,!0),e._queryParams.loadsAllData())o=Pi(t.serverSyncTree_,e._path,s);else{const n=Bi(t.serverSyncTree_,e);o=Mi(t.serverSyncTree_,e._path,s,n)}return vs(t.eventQueue_,e._path,o),Ri(t.serverSyncTree_,e,n,null,!0),s}),(n=>(Ms(t,"get for query "+(0,Z.stringify)(e)+" failed: "+n),Promise.reject(new Error(n)))))}(t._repo,t,n).then((e=>new Gs(e,new $s(t._repo,t._path),t._queryParams.getIndex())))}class Js{constructor(t){this.callbackContext=t}respondsTo(t){return"value"===t}createEvent(t,e){const n=e._queryParams.getIndex();return new js("value",this,new Gs(t.snapshotNode,new $s(e._repo,e._path),n))}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new Vs(this,t,e):null}matches(t){return t instanceof Js&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class to{constructor(t,e){this.eventType=t,this.callbackContext=e}respondsTo(t){let e="children_added"===t?"child_added":t;return e="children_removed"===e?"child_removed":e,this.eventType===e}createCancelEvent(t,e){return this.callbackContext.hasCancelCallback?new Vs(this,t,e):null}createEvent(t,e){(0,Z.assert)(null!=t.childName,"Child events should have a childName.");const n=Xs(new $s(e._repo,e._path),t.childName),i=e._queryParams.getIndex();return new js(t.type,this,new Gs(t.snapshotNode,n,i),t.prevName)}getEventRunner(t){return"cancel"===t.getEventType()?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof to&&(this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function eo(t,e,n,i,s){let o;if("object"==typeof i&&(o=void 0,s=i),"function"==typeof i&&(o=i),s&&s.onlyOnce){const e=n,i=(n,i)=>{Ps(t._repo,t,a),e(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const r=new Ys(n,o||void 0),a="value"===e?new Js(r):new to(e,r);return function(t,e,n){let i;i=".info"===Jt(e._path)?Ai(t.infoSyncTree_,e,n):Ai(t.serverSyncTree_,e,n),ys(t.eventQueue_,e._path,i)}(t._repo,t,a),()=>Ps(t._repo,t,a)}function no(t,e,n,i){return eo(t,"value",e,n,i)}!function(t){(0,Z.assert)(!pi,"__referenceConstructor has already been defined"),pi=t}($s),function(t){(0,Z.assert)(!fi,"__referenceConstructor has already been defined"),fi=t}($s);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const io={};let so=!1;function oo(t,e,n,i,s){let o=i||t.options.databaseURL;void 0===o&&(t.options.projectId||gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let r,a,l=zs(o,s),c=l.repoInfo;void 0!==tt&&tt.env&&(a=tt.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(r=!0,o=`http://${a}?ns=${c.namespace}`,l=zs(o,s),c=l.repoInfo):r=!l.repoInfo.secure;const h=s&&r?new At(At.OWNER):new Mt(t.name,t.options,e);_s("Invalid Firebase Database URL",l),re(l.path)||gt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(t,e,n,i){let s=io[e.name];s||(s={},io[e.name]=s);let o=s[t.toURLString()];o&&gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new bs(t,so,n,i),s[t.toURLString()]=o,o}(c,t,h,new Rt(t.name,n));return new ro(u,t)}class ro{constructor(t,e){this._repoInternal=t,this.app=e,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xs(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $s(this._repo,Zt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(t,e){const n=io[e];n&&n[t.key]===t||gt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Rs(t),delete n[t.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&gt("Cannot call "+t+" on a deleted database.")}}function ao(t=(0,Q.getApp)(),e){const n=(0,Q._getProvider)(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const t=(0,Z.getDefaultEmulatorHostnameAndPort)("database");t&&function(t,e,n,i={}){(t=(0,Z.getModularInstance)(t))._checkNotDeleted("useEmulator"),t._instanceStarted&&gt("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new At(At.OWNER);else if(i.mockUserToken){const e="string"==typeof i.mockUserToken?i.mockUserToken:(0,Z.createMockUserToken)(i.mockUserToken,t.app.options.projectId);o=new At(e)}!function(t,e,n,i){t.repoInfo_=new Lt(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}(s,e,n,o)}(n,...t)}return n}fe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},fe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var lo,co;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */co=Q.SDK_VERSION,et=co,(0,Q._registerComponent)(new(0,X.Component)("database",((t,{instanceIdentifier:e})=>oo(t.getProvider("app").getImmediate(),t.getProvider("auth-internal"),t.getProvider("app-check-internal"),e)),"PUBLIC").setMultipleInstances(!0)),(0,Q.registerVersion)("@firebase/database","0.14.4",lo),(0,Q.registerVersion)("@firebase/database","0.14.4","esm2017");const ho=(0,G.initializeApp)($.firebaseConfig);ao(ho);async function uo(t){try{const e=ao(ho);console.log("userId: ",t);no(await Zs(Qs(e,"users/"+t)),(t=>{const e=t.val();console.log(e)}))}catch(t){const e=t.code;console.log("getUserData errorCode: ",e);const n=t.message;console.log("getUserData errorMessage: ",n)}}window.addEventListener("load",w.removeGlobalLoader),C.refs.filmCardListEl.addEventListener("click",C.createFilmModal),T(),function(){const t=(0,S.load)("STATE");o.STATE.user.uid=t?.user?.uid||"",(0,p.switchBTNs)((0,P.islogin)(o.STATE.user.uid))}(),async function(){console.log(""===o.STATE.user.uid),o.STATE.user.uid&&await uo(o.STATE.user.uid)}(),async function(t){(function(t){o.STATE.movies=t.results,o.STATE.totalResults=t.total_results})(await a(t)),v(o.STATE.totalResults),(0,l.appendCardsMarkup)((0,l.createCardMarkup)(o.STATE.movies))}(o.STATE.page),async;
//# sourceMappingURL=index.e878ce35.js.map