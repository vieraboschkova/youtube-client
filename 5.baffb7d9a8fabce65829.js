(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{i5ln:function(t,e,n){"use strict";n.r(e),n.d(e,"YoutubeModule",(function(){return M}));var i=n("PCNd"),o=n("fXoL"),c=n("rDbq"),r=n("U7DS"),s=n("ofXK"),a=n("Xa2L"),b=n("wHSu"),l=n("tyNb"),u=n("Wp6s");let p=(()=>{class t{constructor(t,e){this.elRef=t,this.renderer=e,this.cardColor="#e5e5e5",this.borderBottomColor=this.cardColor}ngOnInit(){this.borderBottomColor=this.cardColor}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(o.l),o.Kb(o.E))},t.\u0275dir=o.Fb({type:t,selectors:[["","appBottomColor",""]],hostVars:2,hostBindings:function(t,e){2&t&&o.rc("border-bottom-color",e.borderBottomColor)},inputs:{cardColor:"cardColor"}}),t})();var d=n("6NWb");let g=(()=>{class t{transform(t,e,...n){return t.length>e?t.substr(0,e)+"...":t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Jb({name:"shortenTitle",type:t,pure:!0}),t})();const m=function(t){return{conditional:t}};let h=(()=>{class t{constructor(t){this.router=t,this.faEye=b.c,this.faHeart=b.e,this.faHeartBroken=b.f,this.faCommentAlt=b.a,this.wasSeen=!0}ngOnInit(){}getColor(){let t=new Date-new Date(this.item.snippet.publishedAt);return t/=864e5,t<7?"blue":t<30?"green":t<182?"yellow":"red"}goToDetailsPage(t){this.router.navigate(["search",t])}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(l.b))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-search-item"]],inputs:{item:"item"},decls:22,vars:19,consts:[["appBottomColor","",1,"item",3,"cardColor","ngClass"],["mat-card-image","",1,"thumbnail",3,"src"],[1,"statistics"],[1,"filter-icon",3,"icon"],[1,"video-title"],["color","primary",1,"bottom-button",3,"click"]],template:function(t,e){1&t&&(o.Pb(0,"mat-card",0),o.Lb(1,"img",1),o.Pb(2,"div",2),o.Pb(3,"p"),o.Lb(4,"fa-icon",3),o.tc(5),o.Ob(),o.Pb(6,"p"),o.Lb(7,"fa-icon",3),o.tc(8),o.Ob(),o.Pb(9,"p"),o.Lb(10,"fa-icon",3),o.tc(11),o.Ob(),o.Pb(12,"p"),o.Lb(13,"fa-icon",3),o.tc(14),o.Ob(),o.Ob(),o.Pb(15,"mat-card-title",4),o.tc(16),o.bc(17,"shortenTitle"),o.bc(18,"uppercase"),o.Ob(),o.Pb(19,"mat-card-actions"),o.Pb(20,"button",5),o.Wb("click",(function(){return e.goToDetailsPage(e.item.id)})),o.tc(21," more... "),o.Ob(),o.Ob(),o.Ob()),2&t&&(o.gc("cardColor",e.getColor())("ngClass",o.hc(17,m,!1===e.wasSeen)),o.zb(1),o.gc("src",e.item.snippet.thumbnails.medium.url?e.item.snippet.thumbnails.medium.url:e.item.snippet.thumbnails.default.url,o.nc),o.zb(3),o.gc("icon",e.faEye),o.zb(1),o.vc(" ",e.item.statistics.viewCount," "),o.zb(2),o.gc("icon",e.faHeart),o.zb(1),o.vc(" ",e.item.statistics.likeCount," "),o.zb(2),o.gc("icon",e.faHeartBroken),o.zb(1),o.vc(" ",e.item.statistics.dislikeCount," "),o.zb(2),o.gc("icon",e.faCommentAlt),o.zb(1),o.vc(" ",e.item.statistics.commentCount," "),o.zb(2),o.uc(o.dc(17,12,o.cc(18,15,e.item.snippet.title),35)))},directives:[u.a,p,s.j,u.c,d.a,u.e,u.b],pipes:[g,s.s],styles:[".item[_ngcontent-%COMP%]{border-bottom-width:3px;border-bottom-style:solid;width:200px;margin-bottom:25px;height:250px;position:relative;background-color:#e5e5e5}.conditional[_ngcontent-%COMP%]{background-color:#ff69b4}.statistics[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}p[_ngcontent-%COMP%]{margin:0;font-size:.65em;padding:0 5px}fa-icon[_ngcontent-%COMP%]{font-size:1em}.video-title[_ngcontent-%COMP%]{font-size:1.2em;text-align:right}.bottom-button[_ngcontent-%COMP%]{position:absolute;width:100px;height:30px;bottom:10px;left:66px;background-color:#2f80ec;border:transparent;border-radius:3px;color:#e5e5e5}"]}),t})();function f(t,e){1&t&&o.Lb(0,"mat-spinner")}function O(t,e){1&t&&(o.Pb(0,"p"),o.tc(1,"Type something to see the results!"),o.Ob())}function C(t,e){1&t&&o.Lb(0,"app-search-item",3),2&t&&o.gc("item",e.$implicit)}const v=function(t){return{height:t}};let P=(()=>{class t{constructor(t,e){this.search=t,this.filter=e,this.subscriptions=this.search.isLoading.subscribe(t=>this.isLoading=t),this.subscriptions.add(this.filter.filterOn.subscribe(t=>{this.filterDisplay=t}))}ngOnInit(){}ngOnDestroy(){this.subscriptions&&this.subscriptions.unsubscribe()}ngOnChanges(){}ngAfterContentChecked(){this.itemsArray=this.search.videosArray}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(c.a),o.Kb(r.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-search-results"]],features:[o.xb],decls:4,vars:6,consts:[[1,"results-container",3,"ngStyle"],[4,"ngIf"],["class","results-item",3,"item",4,"ngFor","ngForOf"],[1,"results-item",3,"item"]],template:function(t,e){1&t&&(o.Pb(0,"div",0),o.sc(1,f,1,0,"mat-spinner",1),o.sc(2,O,2,0,"p",1),o.sc(3,C,1,1,"app-search-item",2),o.Ob()),2&t&&(o.gc("ngStyle",o.hc(4,v,e.filterDisplay?"calc(100vh - 222px)":"calc(100vh - 172px)")),o.zb(1),o.gc("ngIf",e.isLoading),o.zb(1),o.gc("ngIf",0===e.itemsArray.length&&!0!==e.isLoading),o.zb(1),o.gc("ngForOf",e.itemsArray))},directives:[s.m,s.l,s.k,a.b,h],styles:[".results-container[_ngcontent-%COMP%]{width:inherit;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around;height:calc(100vh - 222px);padding:50px 15px;overflow:auto}.results-item[_ngcontent-%COMP%]{margin:0 10px}mat-spinner[_ngcontent-%COMP%]{position:fixed;top:50vh}"]}),t})();function w(t,e){1&t&&(o.Pb(0,"div",2),o.Lb(1,"mat-spinner"),o.Ob()),2&t&&o.gc("ngClass","spinner")}function x(t,e){if(1&t){const t=o.Qb();o.Pb(0,"div",3),o.Pb(1,"button",4),o.Wb("click",(function(){return o.lc(t),o.ac().onGoBack()})),o.tc(2,"<"),o.Ob(),o.Pb(3,"div",5),o.Pb(4,"div",6),o.Lb(5,"img",7),o.Ob(),o.Pb(6,"div",8),o.Pb(7,"div",9),o.Pb(8,"p"),o.tc(9),o.bc(10,"date"),o.Ob(),o.Pb(11,"h3"),o.tc(12),o.Ob(),o.Ob(),o.Pb(13,"div",10),o.Pb(14,"h4"),o.tc(15,"Description:"),o.Ob(),o.Pb(16,"p"),o.tc(17),o.Ob(),o.Ob(),o.Pb(18,"div",11),o.Pb(19,"div",12),o.Lb(20,"fa-icon",13),o.tc(21),o.Ob(),o.Pb(22,"div",12),o.Lb(23,"fa-icon",13),o.tc(24),o.Ob(),o.Pb(25,"div",12),o.Lb(26,"fa-icon",13),o.tc(27),o.Ob(),o.Pb(28,"div",12),o.Lb(29,"fa-icon",13),o.tc(30),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.Ob()}if(2&t){const t=o.ac();o.zb(1),o.gc("title","go back"),o.zb(4),o.gc("src",t.currentItem.snippet.thumbnails.medium.url?t.currentItem.snippet.thumbnails.medium.url:t.currentItem.snippet.thumbnails.default.url,o.nc),o.zb(4),o.uc(o.cc(10,13,t.currentItem.snippet.publishedAt)),o.zb(3),o.uc(t.currentItem.snippet.title),o.zb(5),o.vc(" ",t.currentItem.snippet.description," "),o.zb(3),o.gc("icon",t.faEye),o.zb(1),o.vc(" ",t.currentItem.statistics.viewCount," "),o.zb(2),o.gc("icon",t.faHeart),o.zb(1),o.vc(" ",t.currentItem.statistics.likeCount," "),o.zb(2),o.gc("icon",t.faHeartBroken),o.zb(1),o.vc(" ",t.currentItem.statistics.dislikeCount," "),o.zb(2),o.gc("icon",t.faCommentAlt),o.zb(1),o.vc(" ",t.currentItem.statistics.commentCount," ")}}let y=(()=>{class t{constructor(t,e,n){this.route=t,this.router=e,this.search=n,this.faEye=b.c,this.faHeart=b.e,this.faHeartBroken=b.f,this.faCommentAlt=b.a,this.subscriptions=this.search.isLoading.subscribe(t=>this.isLoading=t)}ngOnInit(){this.itemId=this.route.snapshot.paramMap.get("itemId"),this.search.fetchDetailedInfo(this.itemId).subscribe(t=>(this.currentItem=t.items[0],this.currentItem),t=>console.log(t))}ngOnDestroy(){this.subscriptions&&this.subscriptions.unsubscribe()}onGoBack(){this.router.navigate(["search"])}}return t.\u0275fac=function(e){return new(e||t)(o.Kb(l.a),o.Kb(l.b),o.Kb(c.a))},t.\u0275cmp=o.Eb({type:t,selectors:[["app-detailed-info"]],decls:2,vars:2,consts:[[3,"ngClass",4,"ngIf"],["class","detailed-page",4,"ngIf"],[3,"ngClass"],[1,"detailed-page"],[3,"title","click"],[1,"info-container"],[1,"image-container"],[1,"image",3,"src"],[1,"description-container"],[1,"title"],[1,"description"],[1,"statistics"],[1,"statistics-item"],[1,"filter-icon",3,"icon"]],template:function(t,e){1&t&&(o.sc(0,w,2,1,"div",0),o.sc(1,x,31,15,"div",1)),2&t&&(o.gc("ngIf",e.isLoading),o.zb(1),o.gc("ngIf",e.currentItem&&!e.isLoading))},directives:[s.l,s.j,a.b,d.a],pipes:[s.e],styles:[".detailed-page[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;justify-content:center;margin-top:50px}button[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0;border-width:0}.image-container[_ngcontent-%COMP%]{margin-right:auto}.image[_ngcontent-%COMP%]{width:40vw}.info-container[_ngcontent-%COMP%]{width:80vw;display:flex;flex-direction:row;align-items:stretch;justify-content:center;background-color:#e5e5e5;max-height:70vh;flex-wrap:wrap}.description-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-image:linear-gradient(to bottom right,#e5e5e5,#cecece);width:50%;max-height:inherit;overflow:auto}.title[_ngcontent-%COMP%]{padding:10px}.description[_ngcontent-%COMP%]{padding:10px;font-size:medium}h3[_ngcontent-%COMP%]{display:inline;font-weight:700}span[_ngcontent-%COMP%]{font-size:x-small;float:right}h4[_ngcontent-%COMP%]{font-weight:400}p[_ngcontent-%COMP%]{font-size:x-small;font-weight:lighter;line-height:1em}.statistics[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-end;justify-content:center;margin-top:auto;padding:10px}.statistics-item[_ngcontent-%COMP%]{padding:10px;font-size:.75em}.spinner[_ngcontent-%COMP%]{position:fixed;left:50vw;top:50vh}@media (max-width:449px){.info-container[_ngcontent-%COMP%]{max-width:320px;max-height:unset;margin-bottom:20px}.image-container[_ngcontent-%COMP%]{margin-right:unset}.description-container[_ngcontent-%COMP%]{background-image:unset;width:unset}.image[_ngcontent-%COMP%]{width:100%}}"]}),t})();var z=n("7dP1");let I=(()=>{class t{constructor(t,e){this.authService=t,this.router=e}canActivate(t,e){return this.authService.isAuthenticated().then(t=>{if(t)return!0;this.router.navigate([""])})}canActivateChild(t,e){return!0}canDeactivate(t,e,n,i){return!0}canLoad(t,e){return!0}}return t.\u0275fac=function(e){return new(e||t)(o.Tb(z.a),o.Tb(l.b))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),M=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[i.a,l.c.forChild([{path:"",canActivate:[I],component:P},{path:":itemId",canActivate:[I],component:y}])],i.a]}),t})()}}]);