(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20683697"],{"3a2f":function(t,e,i){"use strict";i("9734");var o=i("4ad4"),s=i("a9ad"),r=i("16b7"),a=i("b848"),n=i("75eb"),l=i("f573"),c=i("f2e7"),h=i("80d2"),d=i("d9bd"),p=i("58df");e["a"]=Object(p["a"])(s["a"],r["a"],a["a"],n["a"],l["a"],c["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,o=!1!==this.attach?t.offsetLeft:t.left;let s=0;return this.top||this.bottom||i?s=o+t.width/2-e.width/2:(this.left||this.right)&&(s=o+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),`${this.calcXOverflow(s,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let o=0;return this.top||this.bottom?o=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=i+t.height/2-e.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),`${this.calcYOverflow(o+this.pageYOffset)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(h["g"])(this.maxWidth),minWidth:Object(h["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(h["q"])(this,"activator",!0)&&Object(d["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=o["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===h["v"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var o=i("fe6c"),s=i("58df");function r(t,e=[]){return Object(s["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"8b0d":function(t,e,i){},9734:function(t,e,i){},bc3b:function(t,e,i){},d10f:function(t,e,i){"use strict";var o=i("2b0e");e["a"]=o["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},d7e1:function(t,e,i){"use strict";var o=i("bc3b"),s=i.n(o);s.a},dc21:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{attrs:{id:"core-app-bar",absolute:"",app:"",color:"transparent",flat:"",height:"50"}},[i("v-toolbar-title",{staticClass:"tertiary--text font-weight-light align-self-center"},[i("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}},[i("v-icon",[t._v("mdi-view-list")])],1),t._v(" "+t._s(t.title)+" ")],1),i("v-spacer"),i("v-toolbar-items",[i("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[i("v-menu",{attrs:{bottom:"",left:"","offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.attrs,s=e.on;return[i("v-btn",t._g(t._b({staticClass:"toolbar-items",attrs:{icon:""}},"v-btn",o,!1),s),[i("v-badge",{attrs:{color:"error",overlap:""}},[i("template",{slot:"badge"},[t._v(" "+t._s(t.notifications.length)+" ")]),i("v-icon",{attrs:{color:"tertiary"}},[t._v(" mdi-bell ")])],2)],1)]}}])},[i("v-card",[i("v-list",{attrs:{dense:""}},t._l(t.notifications,(function(e){return i("v-list-item",{key:e},[i("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)})),1)],1)],1),i("v-btn",{attrs:{to:"/user-profile",icon:""}},[i("v-icon",{attrs:{color:"tertiary"}},[t._v(" mdi-account ")])],1),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-btn",t._g({attrs:{color:"primary",dark:"",icon:""},on:{click:t.sair}},Object.assign({},o)),[i("v-icon",{attrs:{color:"tertiary"}},[t._v(" mdi-account-arrow-right ")])],1)]}}])},[i("span",[t._v("Sair")])])],1)],1)],1)},s=[],r=i("2f62"),a={data:()=>({notifications:["Mike, John responded to your email","You have 5 new tasks","You're now a friend with Andrew","Another Notification","Another One"],title:null,responsive:!1}),watch:{$route(t){this.title=t.name}},mounted(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:{...Object(r["b"])("app",["setDrawer","toggleDrawer"]),onClick(){this.setDrawer(!this.$store.state.app.drawer)},onResponsiveInverted(){window.innerWidth<991?this.responsive=!0:this.responsive=!1},sair(){var t=localStorage.getItem("tokenlogin"),e={token:t};localStorage.removeItem("tokenlogin"),this.axios.post("https://prontuario6bbm.herokuapp.com/api/login/loginoff",e).then((function(){window.location.replace("http://localhost:8080/login")}))}}},n=a,l=(i("d7e1"),i("2877")),c=i("6544"),h=i.n(c),d=(i("8b0d"),i("71d9"));function p(t,e){const i=e.value,o=e.options||{passive:!0},s=e.arg?document.querySelector(e.arg):window;s&&(s.addEventListener("scroll",i,o),t._onScroll={callback:i,options:o,target:s})}function u(t){if(!t._onScroll)return;const{callback:e,options:i,target:o}=t._onScroll;o.removeEventListener("scroll",e,i),delete t._onScroll}const m={inserted:p,unbind:u};var v=m,f=i("3a66"),g=i("d9bd"),b=i("2b0e"),S=b["a"].extend({name:"scrollable",directives:{Scroll:m},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(g["c"])(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}}),O=i("d10f"),y=i("f2e7"),w=i("80d2"),T=i("58df");const B=Object(T["a"])(d["a"],S,O["a"],y["a"],Object(f["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var _=B.extend({name:"v-app-bar",directives:{Scroll:v},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return S.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...d["a"].options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},computedContentHeight(){if(!this.shrinkOnScroll)return d["a"].options.computed.computedContentHeight.call(this);const t=this.computedOriginalHeight,e=this.dense?48:56,i=t,o=i-e,s=o/this.computedScrollThreshold,r=this.currentScroll*s;return Math.max(e,i-r)},computedFontSize(){if(!this.isProminent)return;const t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(!this.fadeImgOnScroll)return;const t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))},computedOriginalHeight(){let t=d["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:d["a"].options.computed.isCollapsed.call(this)},isProminent(){return d["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...d["a"].options.computed.styles.call(this),fontSize:Object(w["g"])(this.computedFontSize,"rem"),marginTop:Object(w["g"])(this.computedMarginTop),transform:`translateY(${Object(w["g"])(this.computedTransform)})`,left:Object(w["g"])(this.computedLeft),right:Object(w["g"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=d["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:this.currentThreshold<this.computedScrollThreshold||(this.hideOnScroll&&(this.isActive=this.isScrollingUp),this.savedScroll=this.currentScroll)}},render(t){const e=d["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),x=(i("ff44"),i("132d")),A=i("a9ad"),$=i("7560"),k=i("f40d"),C=i("fe6c"),j=Object(T["a"])(A["a"],Object(C["b"])(["left","bottom"]),$["a"],y["a"],k["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile,...this.themeClasses}},computedBottom(){return this.bottom?"auto":this.computedYOffset},computedLeft(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop(){return this.bottom?this.computedYOffset:"auto"},computedXOffset(){return this.calcPosition(this.offsetX)},computedYOffset(){return this.calcPosition(this.offsetY)},isRtl(){return this.$vuetify.rtl},offset(){return this.overlap?this.dot?8:12:this.dot?2:4},styles(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition(t){return`calc(100% - ${Object(w["g"])(t||this.offset)})`},genBadge(){const t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),i=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),o=this.$createElement("span",i,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[o]):o},genBadgeContent(){if(this.dot)return;const t=Object(w["p"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(x["a"],this.icon):void 0)},genBadgeWrapper(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render(t){const e=[this.genBadgeWrapper()],i=[Object(w["p"])(this)],{"aria-atomic":o,"aria-label":s,"aria-live":r,role:a,title:n,...l}=this.$attrs;return this.inline&&this.left?i.unshift(e):i.push(e),t("span",{staticClass:"v-badge",attrs:l,class:this.classes},i)}}),L=i("8336"),I=i("b0af"),R=i("8860"),E=i("da13"),P=i("5d23"),V=i("e449"),H=i("0fd9"),M=(i("20f6"),Object(w["h"])("spacer","div","v-spacer")),D=i("2a7f"),U=i("3a2f"),Y=Object(l["a"])(n,o,s,!1,null,null,null);e["default"]=Y.exports;h()(Y,{VAppBar:_,VBadge:j,VBtn:L["a"],VCard:I["a"],VIcon:x["a"],VList:R["a"],VListItem:E["a"],VListItemTitle:P["b"],VMenu:V["a"],VRow:H["a"],VSpacer:M,VToolbarItems:D["a"],VToolbarTitle:D["b"],VTooltip:U["a"]})},ff44:function(t,e,i){}}]);
//# sourceMappingURL=chunk-20683697.99eae5c8.js.map