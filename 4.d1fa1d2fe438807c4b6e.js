(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Yj9t:function(t,e,r){"use strict";r.r(e),r.d(e,"AuthModule",(function(){return f}));var o=r("PCNd"),i=r("3Pt+"),a=r("fXoL"),n=r("Y3nw"),s=r("rDbq"),c=r("tyNb"),u=r("7dP1"),b=r("kmnG"),l=r("qFsG"),g=r("ofXK"),d=r("bTqV");function m(t,e){if(1&t&&(a.Pb(0,"mat-error"),a.tc(1),a.Ob()),2&t){const t=a.ac();a.zb(1),a.uc(t.getEmailErrorMessage())}}function h(t,e){if(1&t&&(a.Pb(0,"mat-error"),a.tc(1),a.Ob()),2&t){const t=a.ac();a.zb(1),a.uc(t.getPasswordErrorMessage())}}let p=(()=>{class t{constructor(t,e,r,o,a){this.login=e,this.search=r,this.router=o,this.authService=a,this.email=new i.b("",[i.i.required,i.i.email]),this.password=new i.b("",[i.i.required,i.i.minLength(2)]),this.hide=!0,this.loggedIn=!1,this.options=t.group({})}ngOnInit(){this.subscriptionToLogger=this.authService.wasAuthorized.subscribe(t=>{this.loggedIn=t}),this.checkLocalStorage()||console.log("aint got a user")}ngOnDestroy(){this.subscriptionToLogger.unsubscribe()}getEmailErrorMessage(){return this.email.hasError("required")?"You must enter a value":this.email.hasError("email")?"Not a valid email":""}getPasswordErrorMessage(){return this.password.hasError("required")?"You must enter a value":this.password.hasError("password")?"Not a valid password":""}onSubmit(t,e){""!==t.value&&""!==e.value?(this.authService.wasAuthorized.next(!0),this.login.setLogin(t.value),this.authService.login(),localStorage.setItem("user",t.value),this.router.navigate(["/search"])):alert("Invalid data")}checkLocalStorage(){return!!localStorage.getItem("user")}onFetch(t){this.search.fetchVideos(t),console.log("trying to fetch")}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(i.a),a.Kb(n.a),a.Kb(s.a),a.Kb(c.b),a.Kb(u.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-login-block"]],decls:21,vars:5,consts:[[1,"login-container"],[1,"form-container",3,"formGroup","ngSubmit"],["loginForm","ngForm"],["appearance","fill"],["name","email","matInput","","placeholder","pat@example.com","required","","autofocus",""],["username",""],[4,"ngIf"],["name","password","matInput","","required","",3,"type"],["password",""],["type","submit","mat-raised-button","",1,"login-submit",3,"disabled"]],template:function(t,e){if(1&t){const t=a.Qb();a.Pb(0,"div",0),a.Pb(1,"form",1,2),a.Wb("ngSubmit",(function(){a.lc(t);const r=a.jc(9),o=a.jc(16);return e.onSubmit(r,o)})),a.Pb(3,"h2"),a.tc(4,"Login"),a.Ob(),a.Pb(5,"mat-form-field",3),a.Pb(6,"mat-label"),a.tc(7,"Enter your email"),a.Ob(),a.Lb(8,"input",4,5),a.sc(10,m,2,1,"mat-error",6),a.Ob(),a.Lb(11,"br"),a.Pb(12,"mat-form-field",3),a.Pb(13,"mat-label"),a.tc(14,"Enter your password"),a.Ob(),a.Lb(15,"input",7,8),a.sc(17,h,2,1,"mat-error",6),a.Ob(),a.Pb(18,"div"),a.Pb(19,"button",9),a.tc(20," Login "),a.Ob(),a.Ob(),a.Ob(),a.Ob()}if(2&t){const t=a.jc(2),r=a.jc(16);a.zb(1),a.gc("formGroup",e.options),a.zb(9),a.gc("ngIf",e.email.invalid),a.zb(5),a.gc("type",e.hide?"password":"text"),a.zb(2),a.gc("ngIf",r.invalid),a.zb(2),a.gc("disabled",!t.valid)}},directives:[i.j,i.f,i.c,b.c,b.f,l.a,g.l,d.a,b.b],styles:[".login-submit[_ngcontent-%COMP%]{background-color:#2f80ec;color:#eee;margin-top:10px}.form-container[_ngcontent-%COMP%]{text-align:center;width:300px;background-color:#eee;padding:20px;margin:50px auto auto}h2[_ngcontent-%COMP%]{color:#333}@media (max-width:449px){.form-container[_ngcontent-%COMP%]{width:100vw;padding:10px 0}}"]}),t})(),f=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[o.a,c.c.forChild([{path:"",component:p}])],o.a]}),t})()}}]);