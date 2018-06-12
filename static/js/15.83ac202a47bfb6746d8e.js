webpackJsonp([15],{"4mrK":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("BO1k"),o=n.n(i),r=n("DAYN"),a={name:"DndList",components:{draggable:n.n(r).a},computed:{filterList2:function(){var t=this;return this.list2.filter(function(e){return!!t.isNotInList1(e)&&e})}},props:{list1:{type:Array,default:function(){return[]}},list2:{type:Array,default:function(){return[]}},list1Title:{type:String,default:"list1"},list2Title:{type:String,default:"list2"},width1:{type:String,default:"48%"},width2:{type:String,default:"48%"}},methods:{isNotInList1:function(t){return this.list1.every(function(e){return t.id!==e.id})},isNotInList2:function(t){return this.list2.every(function(e){return t.id!==e.id})},deleteEle:function(t){var e=!0,n=!1,i=void 0;try{for(var r,a=o()(this.list1);!(e=(r=a.next()).done);e=!0){var s=r.value;if(s.id===t.id){var l=this.list1.indexOf(s);this.list1.splice(l,1);break}}}catch(t){n=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw i}}this.isNotInList2(t)&&this.list2.unshift(t)},pushEle:function(t){this.list1.push(t)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dndList"},[n("div",{staticClass:"dndList-list",style:{width:t.width1}},[n("h3",[t._v(t._s(t.list1Title))]),t._v(" "),n("draggable",{staticClass:"dragArea",attrs:{list:t.list1,options:{group:"article"}}},t._l(t.list1,function(e){return n("div",{key:e.id,staticClass:"list-complete-item"},[n("div",{staticClass:"list-complete-item-handle"},[t._v("["+t._s(e.author)+"] "+t._s(e.title))]),t._v(" "),n("div",{staticStyle:{position:"absolute",right:"0px"}},[n("span",{staticStyle:{float:"right","margin-top":"-20px","margin-right":"5px"},on:{click:function(n){t.deleteEle(e)}}},[n("i",{staticClass:"el-icon-delete",staticStyle:{color:"#ff4949"}})])])])}))],1),t._v(" "),n("div",{staticClass:"dndList-list",style:{width:t.width2}},[n("h3",[t._v(t._s(t.list2Title))]),t._v(" "),n("draggable",{staticClass:"dragArea",attrs:{list:t.filterList2,options:{group:"article"}}},t._l(t.filterList2,function(e){return n("div",{key:e.id,staticClass:"list-complete-item"},[n("div",{staticClass:"list-complete-item-handle2",on:{click:function(n){t.pushEle(e)}}},[t._v(" ["+t._s(e.author)+"] "+t._s(e.title))])])}))],1)])},staticRenderFns:[]},l=n("VU/8")(a,s,!1,function(t){n("zT+q")},"data-v-81a6e0ce",null).exports,c=n("viA7"),d={name:"dndList-demo",components:{DndList:l},data:function(){return{list1:[],list2:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.listLoading=!0,Object(c.c)().then(function(e){t.list1=e.data.items.splice(0,5),t.list2=e.data.items})}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"components-container"},[this._m(0),this._v(" "),e("div",{staticClass:"editor-container"},[e("dnd-list",{attrs:{list1:this.list1,list2:this.list2,list1Title:"头条列表",list2Title:"文章池"}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("code",[this._v("drag-list base on\n    "),e("a",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",target:"_blank"}},[this._v("Vue.Draggable")])])}]},h=n("VU/8")(d,u,!1,null,null,null);e.default=h.exports},DAYN:function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};!function(){function e(t){function e(t){t.parentElement.removeChild(t)}function n(t,e,n){var i=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,i)}function r(t,e){var n=this;this.$nextTick(function(){return n.$emit(t.toLowerCase(),e)})}var a=["Start","Add","Remove","Update","End"],s=["Choose","Sort","Filter","Clone"],l=["Move"].concat(a,s).map(function(t){return"on"+t}),c=null;return{name:"draggable",props:{options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},move:{type:Function,default:null}},data:function(){return{transitionMode:!1,componentMode:!1}},render:function(t){var e=this.$slots.default;if(e&&1===e.length){var n=e[0];n.componentOptions&&"transition-group"===n.componentOptions.tag&&(this.transitionMode=!0)}var o=e,r=this.$slots.footer;return r&&(o=e?[].concat(i(e),i(r)):[].concat(i(r))),t(this.element,null,o)},mounted:function(){var e=this;if(this.componentMode=this.element.toLowerCase()!==this.$el.nodeName.toLowerCase(),this.componentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: "+this.element);var n={};a.forEach(function(t){n["on"+t]=function(t){var e=this;return function(n){null!==e.realList&&e["onDrag"+t](n),r.call(e,t,n)}}.call(e,t)}),s.forEach(function(t){n["on"+t]=r.bind(e,t)});var i=o({},this.options,n,{onMove:function(t,n){return e.onDragMove(t,n)}});!("draggable"in i)&&(i.draggable=">*"),this._sortable=new t(this.rootContainer,i),this.computeIndexes()},beforeDestroy:function(){this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},isCloning:function(){return!!this.options&&!!this.options.group&&"clone"===this.options.group.pull},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(t){for(var e in t)-1==l.indexOf(e)&&this._sortable.option(e,t[e])},deep:!0},realList:function(){this.computeIndexes()}},methods:{getChildrenNodes:function(){if(this.componentMode)return this.$children[0].$slots.default;var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick(function(){t.visibleIndexes=function(t,e,n){if(!t)return[];var o=t.map(function(t){return t.elm}),r=[].concat(i(e)).map(function(t){return o.indexOf(t)});return n?r.filter(function(t){return-1!==t}):r}(t.getChildrenNodes(),t.rootContainer.children,t.transitionMode)})},getUnderlyingVm:function(t){var e=function(t,e){return t.map(function(t){return t.elm}).indexOf(e)}(this.getChildrenNodes()||[],t);if(-1===e)return null;return{index:e,element:this.realList[e]}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&"transition-group"===e.$options._componentTag?e.$parent:e},emitChanges:function(t){var e=this;this.$nextTick(function(){e.$emit("change",t)})},alterList:function(t){if(this.list)t(this.list);else{var e=[].concat(i(this.value));t(e),this.$emit("input",e)}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,t)};this.alterList(e)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,i=this.getUnderlyingPotencialDraggableComponent(e);if(!i)return{component:i};var r=i.realList,a={list:r,component:i};if(e!==n&&r&&i.getUnderlyingVm){var s=i.getUnderlyingVm(n);if(s)return o(s,a)}return a},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(t){if(this.noTransitionOnDrag&&this.transitionMode){this.getChildrenNodes()[t].data=null;var e=this.getComponent();e.children=[],e.kept=void 0}},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),c=t.item},onDragAdd:function(t){var n=t.item._underlying_vm_;if(void 0!==n){e(t.item);var i=this.getVmIndex(t.newIndex);this.spliceList(i,0,n),this.computeIndexes();var o={element:n,newIndex:i};this.emitChanges({added:o})}},onDragRemove:function(t){if(n(this.rootContainer,t.item,t.oldIndex),this.isCloning)e(t.clone);else{var i=this.context.index;this.spliceList(i,1);var o={element:this.context.element,oldIndex:i};this.resetTransitionData(i),this.emitChanges({removed:o})}},onDragUpdate:function(t){e(t.item),n(t.from,t.item,t.oldIndex);var i=this.context.index,o=this.getVmIndex(t.newIndex);this.updatePosition(i,o);var r={element:this.context.element,oldIndex:i,newIndex:o};this.emitChanges({moved:r})},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=[].concat(i(e.to.children)).filter(function(t){return"none"!==t.style.display}),o=n.indexOf(e.related),r=t.component.getVmIndex(o);return-1!=n.indexOf(c)||!e.willInsertAfter?r:r+1},onDragMove:function(t,e){var n=this.move;if(!n||!this.realList)return!0;var i=this.getRelatedContextFromMoveEvent(t),r=this.context,a=this.computeFutureIndex(i,t);return o(r,{futureIndex:a}),o(t,{relatedContext:i,draggedContext:r}),n(t,e)},onDragEnd:function(t){this.computeIndexes(),c=null}}}}Array.from||(Array.from=function(t){return[].slice.call(t)});var r=n("Lokx");t.exports=e(r)}()},Lokx:function(t,e,n){var i,o;!function(r){"use strict";void 0===(o="function"==typeof(i=r)?i.call(e,n,e,t):i)||(t.exports=o)}(function(){"use strict";function t(e,n){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(e);this.el=e,this.options=n=g({},n),e[U]=this;var o={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(e.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==t.supportPointer};for(var r in o)!(r in n)&&(n[r]=o[r]);ot(n);for(var a in this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!n.forceFallback&&J,i(e,"mousedown",this._onTapStart),i(e,"touchstart",this._onTapStart),n.supportPointer&&i(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(i(e,"dragover",this),i(e,"dragenter",this)),nt.push(this._onDragOver),n.store&&this.sort(n.store.get(this))}function e(t,e){"clone"!==t.lastPullMode&&(e=!0),x&&x.state!==e&&(a(x,"display",e?"none":""),e||x.state&&(t.options.group.revertClone?(C.insertBefore(x,w),t._animate(b,x)):C.insertBefore(x,b)),x.state=e)}function n(t,e,n){if(t){n=n||j;do{if(">*"===e&&t.parentNode===n||f(t,e))return t}while(t=function(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}(t))}return null}function i(t,e,n){t.addEventListener(e,n,G)}function o(t,e,n){t.removeEventListener(e,n,G)}function r(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(X," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(X," ")}}function a(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return j.defaultView&&j.defaultView.getComputedStyle?n=j.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function s(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;o<r;o++)n(i[o],o);return i}return[]}function l(t,e,n,i,o,r,a,s){t=t||e[U];var l=j.createEvent("Event"),c=t.options,d="on"+n.charAt(0).toUpperCase()+n.substr(1);l.initEvent(n,!0,!0),l.to=o||e,l.from=r||e,l.item=i||e,l.clone=x,l.oldIndex=a,l.newIndex=s,e.dispatchEvent(l),c[d]&&c[d].call(t,l)}function c(t,e,n,i,o,r,a,s){var l,c,d=t[U],u=d.options.onMove;return(l=j.createEvent("Event")).initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=o||e,l.relatedRect=r||e.getBoundingClientRect(),l.willInsertAfter=s,t.dispatchEvent(l),u&&(c=u.call(d,l,a)),c}function d(t){t.draggable=!1}function u(){K=!1}function h(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!f(t,e)||n++;return n}function f(t,e){if(t){var n=(e=e.split(".")).shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(i)||[]).length!=e.length)}return!1}function p(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,H(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function g(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function v(t){return z&&z.dom?z.dom(t).cloneNode(!0):W?W(t).clone(!0)[0]:t.cloneNode(!0)}function m(t){return H(t,0)}function _(t){return clearTimeout(t)}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var b,y,D,x,C,w,T,S,E,L,I,k,N,A,O,M,B,P,R,Y,$={},X=/\s+/g,F=/left|right|inline/,U="Sortable"+(new Date).getTime(),V=window,j=V.document,q=V.parseInt,H=V.setTimeout,W=V.jQuery||V.Zepto,z=V.Polymer,G=!1,J="draggable"in j.createElement("div"),Z=function(t){return!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&(t=j.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents)}(),K=!1,Q=Math.abs,tt=Math.min,et=[],nt=[],it=p(function(t,e,n){if(n&&e.scroll){var i,o,r,a,s,l,c=n[U],d=e.scrollSensitivity,u=e.scrollSpeed,h=t.clientX,f=t.clientY,p=window.innerWidth,g=window.innerHeight;if(E!==n&&(S=e.scroll,E=n,L=e.scrollFn,!0===S)){S=n;do{if(S.offsetWidth<S.scrollWidth||S.offsetHeight<S.scrollHeight)break}while(S=S.parentNode)}S&&(i=S,o=S.getBoundingClientRect(),r=(Q(o.right-h)<=d)-(Q(o.left-h)<=d),a=(Q(o.bottom-f)<=d)-(Q(o.top-f)<=d)),r||a||(a=(g-f<=d)-(f<=d),((r=(p-h<=d)-(h<=d))||a)&&(i=V)),$.vx===r&&$.vy===a&&$.el===i||($.el=i,$.vx=r,$.vy=a,clearInterval($.pid),i&&($.pid=setInterval(function(){if(l=a?a*u:0,s=r?r*u:0,"function"==typeof L)return L.call(c,s,l,t);i===V?V.scrollTo(V.pageXOffset+s,V.pageYOffset+l):(i.scrollTop+=l,i.scrollLeft+=s)},24)))}},30),ot=function(t){function e(t,e){return void 0!==t&&!0!==t||(t=n.name),"function"==typeof t?t:function(n,i){var o=i.options.group.name;return e?t:t&&(t.join?t.indexOf(o)>-1:o==t)}}var n={},i=t.group;i&&"object"==typeof i||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){G={capture:!1,passive:!1}}}))}catch(t){}return t.prototype={constructor:t,_onTapStart:function(t){var e,i=this,o=this.el,r=this.options,a=r.preventOnFilter,s=t.type,c=t.touches&&t.touches[0],d=(c||t).target,u=t.target.shadowRoot&&t.path&&t.path[0]||d,f=r.filter;if(function(t){for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var i=e[n];i.checked&&et.push(i)}}(o),!b&&!(/mousedown|pointerdown/.test(s)&&0!==t.button||r.disabled)&&!u.isContentEditable&&(d=n(d,r.draggable,o))&&T!==d){if(e=h(d,r.draggable),"function"==typeof f){if(f.call(this,t,d,this))return l(i,u,"filter",d,o,o,e),void(a&&t.preventDefault())}else if(f&&(f=f.split(",").some(function(t){if(t=n(u,t.trim(),o))return l(i,t,"filter",d,o,o,e),!0})))return void(a&&t.preventDefault());r.handle&&!n(u,r.handle,o)||this._prepareDragStart(t,c,d,e)}},_prepareDragStart:function(t,e,n,o){var a,c=this,u=c.el,h=c.options,f=u.ownerDocument;n&&!b&&n.parentNode===u&&(P=t,C=u,y=(b=n).parentNode,w=b.nextSibling,T=n,M=h.group,A=o,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,b.style["will-change"]="all",a=function(){c._disableDelayedDrag(),b.draggable=c.nativeDraggable,r(b,h.chosenClass,!0),c._triggerDragStart(t,e),l(c,C,"choose",b,C,C,A)},h.ignore.split(",").forEach(function(t){s(b,t.trim(),d)}),i(f,"mouseup",c._onDrop),i(f,"touchend",c._onDrop),i(f,"touchcancel",c._onDrop),i(f,"selectstart",c),h.supportPointer&&i(f,"pointercancel",c._onDrop),h.delay?(i(f,"mouseup",c._disableDelayedDrag),i(f,"touchend",c._disableDelayedDrag),i(f,"touchcancel",c._disableDelayedDrag),i(f,"mousemove",c._disableDelayedDrag),i(f,"touchmove",c._disableDelayedDrag),h.supportPointer&&i(f,"pointermove",c._disableDelayedDrag),c._dragStartTimer=H(a,h.delay)):a())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),o(t,"mouseup",this._disableDelayedDrag),o(t,"touchend",this._disableDelayedDrag),o(t,"touchcancel",this._disableDelayedDrag),o(t,"mousemove",this._disableDelayedDrag),o(t,"touchmove",this._disableDelayedDrag),o(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(t,e){(e=e||("touch"==t.pointerType?t:null))?(P={target:b,clientX:e.clientX,clientY:e.clientY},this._onDragStart(P,"touch")):this.nativeDraggable?(i(b,"dragend",this),i(C,"dragstart",this._onDragStart)):this._onDragStart(P,!0);try{j.selection?m(function(){j.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(C&&b){var e=this.options;r(b,e.ghostClass,!0),r(b,e.dragClass,!1),t.active=this,l(this,C,"start",b,C,C,A)}else this._nulling()},_emulateDragOver:function(){if(R){if(this._lastX===R.clientX&&this._lastY===R.clientY)return;this._lastX=R.clientX,this._lastY=R.clientY,Z||a(D,"display","none");var t=j.elementFromPoint(R.clientX,R.clientY),e=t,n=nt.length;if(t&&t.shadowRoot&&(e=t=t.shadowRoot.elementFromPoint(R.clientX,R.clientY)),e)do{if(e[U]){for(;n--;)nt[n]({clientX:R.clientX,clientY:R.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);Z||a(D,"display","")}},_onTouchMove:function(e){if(P){var n=this.options,i=n.fallbackTolerance,o=n.fallbackOffset,r=e.touches?e.touches[0]:e,s=r.clientX-P.clientX+o.x,l=r.clientY-P.clientY+o.y,c=e.touches?"translate3d("+s+"px,"+l+"px,0)":"translate("+s+"px,"+l+"px)";if(!t.active){if(i&&tt(Q(r.clientX-this._lastX),Q(r.clientY-this._lastY))<i)return;this._dragStarted()}this._appendGhost(),Y=!0,R=r,a(D,"webkitTransform",c),a(D,"mozTransform",c),a(D,"msTransform",c),a(D,"transform",c),e.preventDefault()}},_appendGhost:function(){if(!D){var t,e=b.getBoundingClientRect(),n=a(b),i=this.options;r(D=b.cloneNode(!0),i.ghostClass,!1),r(D,i.fallbackClass,!0),r(D,i.dragClass,!0),a(D,"top",e.top-q(n.marginTop,10)),a(D,"left",e.left-q(n.marginLeft,10)),a(D,"width",e.width),a(D,"height",e.height),a(D,"opacity","0.8"),a(D,"position","fixed"),a(D,"zIndex","100000"),a(D,"pointerEvents","none"),i.fallbackOnBody&&j.body.appendChild(D)||C.appendChild(D),t=D.getBoundingClientRect(),a(D,"width",2*e.width-t.width),a(D,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,s=n.options;n._offUpEvents(),M.checkPull(n,n,b,t)&&((x=v(b)).draggable=!1,x.style["will-change"]="",a(x,"display","none"),r(x,n.options.chosenClass,!1),n._cloneId=m(function(){C.insertBefore(x,b),l(n,C,"clone",b)})),r(b,s.dragClass,!0),e?("touch"===e?(i(j,"touchmove",n._onTouchMove),i(j,"touchend",n._onDrop),i(j,"touchcancel",n._onDrop),s.supportPointer&&(i(j,"pointermove",n._onTouchMove),i(j,"pointerup",n._onDrop))):(i(j,"mousemove",n._onTouchMove),i(j,"mouseup",n._onDrop)),n._loopId=setInterval(n._emulateDragOver,50)):(o&&(o.effectAllowed="move",s.setData&&s.setData.call(n,o,b)),i(j,"drop",n),n._dragStartId=m(n._dragStarted))},_onDragOver:function(i){var o,r,s,l,d=this.el,h=this.options,f=h.group,p=t.active,g=M===f,v=!1,m=h.sort;if(void 0!==i.preventDefault&&(i.preventDefault(),!h.dragoverBubble&&i.stopPropagation()),!b.animated&&(Y=!0,p&&!h.disabled&&(g?m||(l=!C.contains(b)):B===this||(p.lastPullMode=M.checkPull(this,p,b,i))&&f.checkPut(this,p,b,i))&&(void 0===i.rootEl||i.rootEl===this.el))){if(it(i,h,this.el),K)return;if(o=n(i.target,h.draggable,d),r=b.getBoundingClientRect(),B!==this&&(B=this,v=!0),l)return e(p,!0),y=C,void(x||w?C.insertBefore(b,x||w):m||C.appendChild(b));if(0===d.children.length||d.children[0]===D||d===i.target&&function(t,e){var n=t.lastElementChild.getBoundingClientRect();return e.clientY-(n.top+n.height)>5||e.clientX-(n.left+n.width)>5}(d,i)){if(0!==d.children.length&&d.children[0]!==D&&d===i.target&&(o=d.lastElementChild),o){if(o.animated)return;s=o.getBoundingClientRect()}e(p,g),!1!==c(C,d,b,r,o,s,i)&&(b.contains(d)||(d.appendChild(b),y=d),this._animate(r,b),o&&this._animate(s,o))}else if(o&&!o.animated&&o!==b&&void 0!==o.parentNode[U]){I!==o&&(I=o,k=a(o),N=a(o.parentNode));var _=(s=o.getBoundingClientRect()).right-s.left,T=s.bottom-s.top,S=F.test(k.cssFloat+k.display)||"flex"==N.display&&0===N["flex-direction"].indexOf("row"),E=o.offsetWidth>b.offsetWidth,L=o.offsetHeight>b.offsetHeight,A=(S?(i.clientX-s.left)/_:(i.clientY-s.top)/T)>.5,O=o.nextElementSibling,P=!1;if(S){var R=b.offsetTop,$=o.offsetTop;P=R===$?o.previousElementSibling===b&&!E||A&&E:o.previousElementSibling===b||b.previousElementSibling===o?(i.clientY-s.top)/T>.5:$>R}else v||(P=O!==b&&!L||A&&L);var X=c(C,d,b,r,o,s,i,P);!1!==X&&(1!==X&&-1!==X||(P=1===X),K=!0,H(u,30),e(p,g),b.contains(d)||(P&&!O?d.appendChild(b):o.parentNode.insertBefore(b,P?O:o)),y=b.parentNode,this._animate(r,b),this._animate(s,o))}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),a(e,"transition","none"),a(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,a(e,"transition","all "+n+"ms"),a(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=H(function(){a(e,"transition",""),a(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;o(j,"touchmove",this._onTouchMove),o(j,"pointermove",this._onTouchMove),o(t,"mouseup",this._onDrop),o(t,"touchend",this._onDrop),o(t,"pointerup",this._onDrop),o(t,"touchcancel",this._onDrop),o(t,"pointercancel",this._onDrop),o(t,"selectstart",this)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval($.pid),clearTimeout(this._dragStartTimer),_(this._cloneId),_(this._dragStartId),o(j,"mouseover",this),o(j,"mousemove",this._onTouchMove),this.nativeDraggable&&(o(j,"drop",this),o(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(Y&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),D&&D.parentNode&&D.parentNode.removeChild(D),C!==y&&"clone"===t.active.lastPullMode||x&&x.parentNode&&x.parentNode.removeChild(x),b&&(this.nativeDraggable&&o(b,"dragend",this),d(b),b.style["will-change"]="",r(b,this.options.ghostClass,!1),r(b,this.options.chosenClass,!1),l(this,C,"unchoose",b,y,C,A),C!==y?(O=h(b,i.draggable))>=0&&(l(null,y,"add",b,y,C,A,O),l(this,C,"remove",b,y,C,A,O),l(null,y,"sort",b,y,C,A,O),l(this,C,"sort",b,y,C,A,O)):b.nextSibling!==w&&(O=h(b,i.draggable))>=0&&(l(this,C,"update",b,y,C,A,O),l(this,C,"sort",b,y,C,A,O)),t.active&&(null!=O&&-1!==O||(O=A),l(this,C,"end",b,y,C,A,O),this.save()))),this._nulling()},_nulling:function(){C=b=y=D=w=x=T=S=E=P=R=Y=O=I=k=B=M=t.active=null,et.forEach(function(t){t.checked=!0}),et.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragover":case"dragenter":b&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}(t));break;case"mouseover":this._onDrop(t);break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,o=0,r=i.length,a=this.options;o<r;o++)n(t=i[o],a.draggable,this.el)&&e.push(t.getAttribute(a.dataIdAttr)||function(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,o){var r=i.children[o];n(r,this.options.draggable,i)&&(e[t]=r)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&ot(n)},destroy:function(){var t=this.el;t[U]=null,o(t,"mousedown",this._onTapStart),o(t,"touchstart",this._onTapStart),o(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(o(t,"dragover",this),o(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),nt.splice(nt.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},i(j,"touchmove",function(e){t.active&&e.preventDefault()}),t.utils={on:i,off:o,css:a,find:s,is:function(t,e){return!!n(t,e,t)},extend:g,throttle:p,closest:n,toggleClass:r,clone:v,index:h,nextTick:m,cancelNextTick:_},t.create=function(e,n){return new t(e,n)},t.version="1.7.0",t})},hfqL:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'\n.dndList[data-v-81a6e0ce] {\n  background: #fff;\n  padding-bottom: 40px;\n}\n.dndList[data-v-81a6e0ce]:after {\n    content: "";\n    display: table;\n    clear: both;\n}\n.dndList .dndList-list[data-v-81a6e0ce] {\n    float: left;\n    padding-bottom: 30px;\n}\n.dndList .dndList-list[data-v-81a6e0ce]:first-of-type {\n      margin-right: 2%;\n}\n.dndList .dndList-list .dragArea[data-v-81a6e0ce] {\n      margin-top: 15px;\n      min-height: 50px;\n      padding-bottom: 30px;\n}\n.list-complete-item[data-v-81a6e0ce] {\n  cursor: pointer;\n  position: relative;\n  font-size: 14px;\n  padding: 5px 12px;\n  margin-top: 4px;\n  border: 1px solid #bfcbd9;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n.list-complete-item-handle[data-v-81a6e0ce] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 50px;\n}\n.list-complete-item-handle2[data-v-81a6e0ce] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 20px;\n}\n.list-complete-item.sortable-chosen[data-v-81a6e0ce] {\n  background: #4AB7BD;\n}\n.list-complete-item.sortable-ghost[data-v-81a6e0ce] {\n  background: #30B08F;\n}\n.list-complete-enter[data-v-81a6e0ce],\n.list-complete-leave-active[data-v-81a6e0ce] {\n  opacity: 0;\n}\n',""])},"zT+q":function(t,e,n){var i=n("hfqL");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("7f0328c2",i,!0)}});