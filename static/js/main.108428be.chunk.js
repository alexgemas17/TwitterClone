(this.webpackJsonptwitterclone=this.webpackJsonptwitterclone||[]).push([[0],{36:function(e,t,a){e.exports=a(57)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),i=a(3),s=a(9),o=a(14),m=a.n(o);a(45),a(48),a(50);m.a.initializeApp({apiKey:"AIzaSyCYDK5HWgZiMGe_UOk5H6QiBK88TJ8X2Ss",authDomain:"twitter-clone-3407a.firebaseapp.com",databaseURL:"https://twitter-clone-3407a.firebaseio.com",projectId:"twitter-clone-3407a",storageBucket:"twitter-clone-3407a.appspot.com",messagingSenderId:"459828175983",appId:"1:459828175983:web:26f2517cdb4b7037f6999a",measurementId:"G-S72ZFP5TSL"});var u=m.a.firestore(),d=m.a.database(),p=new m.a.auth.GoogleAuthProvider,E=new m.a.auth.GithubAuthProvider,f=a(10),h=a.n(f),v=a(12),N=function(){var e=Object(v.a)(h.a.mark((function e(t,a){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.ref("tweets").push(a),(r=d.ref("users").child(t)).child("Tweets").child(n.key).set(!0),r.child("Timeline").child(n.key).set(!0),r.child("Followers").once("value",(function(e){e.forEach((function(e){d.ref("users").child(e.key).child("Timeline").child(n.key).set(!0)}))})),e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b="[Auth] login",w="[Auth] logout",g="[Tweets] New tweet",U="[Tweets] Add new",y="[Tweets] Add tweets to timeline",O="[Timeline] Loading timeline",D="[Timeline] clean timeline data",k=function(e,t){d.ref("users").child(e).child("Timeline").on("child_added",(function(e){var a=e.key;d.ref("tweets").child(a).on("value",(function(e){if(e.exists){var a=e.val();t((n=e.key,r=a.userName,c=a.userDisplayName,l=a.photoUserURL,i=a.photoURL,s=a.textBody,{type:U,payload:{tweetUID:n,userName:r,userDisplayName:c,photoUserURL:l,photoURL:i,textBody:s}}))}var n,r,c,l,i,s}))}))},L=function(e,t,a,n){return{type:b,payload:{uid:e,userName:t,displayName:a,photoURL:n}}},T=function(){return{type:w}},j=a(4),R=a(2),I=a(24),x=a(8),S=a.n(x),C=function(e){var t=e.isAuthenticated,a=e.component,n=Object(I.a)(e,["isAuthenticated","component"]);return r.a.createElement(R.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(R.a,{to:"/"}):r.a.createElement(a,e)}}))};C.prototype={isAuthenticated:S.a.bool.isRequired,component:S.a.func.isRequired};var A=function(e){var t=e.isAuthenticated,a=e.component,n=Object(I.a)(e,["isAuthenticated","component"]);return r.a.createElement(R.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(R.a,{to:"/login"})}}))};A.prototype={isAuthenticated:S.a.bool.isRequired,component:S.a.func.isRequired};var B=function(){return r.a.createElement("div",{className:"logo-container"},r.a.createElement("i",{className:"fab fa-twitter"}))},P=(a(54),function(){var e=Object(i.b)();return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"LeftSide"},r.a.createElement("i",{className:"fab fa-twitter logoBackground"}),r.a.createElement("div",null,r.a.createElement("div",{className:"text-item"},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("span",null," Sigue lo que te interesa. ")),r.a.createElement("div",{className:"text-item"},r.a.createElement("i",{className:"fas fa-user-friends"}),r.a.createElement("span",null," Ent\xe9rate de qu\xe9 est\xe1 hablando la gente. ")),r.a.createElement("div",{className:"text-item"},r.a.createElement("i",{className:"fas fa-comments"}),r.a.createElement("span",null," \xdanete a la conversaci\xf3n. ")))),r.a.createElement("div",{className:"RightSide"},r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"logo"},r.a.createElement(B,null)),r.a.createElement("h1",null,"Mira lo que est\xe1 pasando en el mundo en este momento")),r.a.createElement("div",{className:"social-networks"},r.a.createElement("p",null," ",r.a.createElement("b",null,"Login with:")),r.a.createElement("div",{className:"btn-login github",role:"button",alt:"github icon",name:"btn-github",onClick:function(){e((function(e){m.a.auth().signInWithPopup(E).then((function(t){var a=t.user,n=a.email.split("@")[0];u.collection("users").doc(a.uid).get().then((function(e){if(!e.exists){var t={displayName:a.displayName,userName:n,photoURL:a.photoURL,email:a.email,likes:0,tweets:0,description:'\xa1Cambia la descripci\xf3n en "Editar perfil" para poner la descripci\xf3n que quieras!'},r=d.ref("users/"+a.uid).set(t);d.ref("users").child(r.key).child("Following").child("QL1PvcozkkUDgXeeYWlMydbLbpN2").set(!0)}})),e(L(a.uid,n,a.displayName,a.photoURL)),k(a.uid,e)}))}))}},r.a.createElement("div",{className:"icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png",alt:"github icon"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with Github"))),r.a.createElement("div",{className:"btn-login linkedin",role:"button",alt:"linkedin icon",name:"btn-github",onClick:function(){e((function(e){m.a.auth().signInWithPopup(p).then((function(t){var a=t.user,n=a.email.split("@")[0];u.collection("users").doc(a.uid).get().then((function(e){if(!e.exists){var t={displayName:a.displayName,userName:n,photoURL:a.photoURL,email:a.email,likes:0,tweets:0,description:'\xa1Cambia la descripci\xf3n en "Editar perfil" para poner la descripci\xf3n que quieras!'};d.ref("users/"+a.uid).set(t)}})),e(L(a.uid,n,a.displayName,a.photoURL))}))}))}},r.a.createElement("div",{className:"icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",alt:"linkedin icon"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with Google"))))))}),F=function(){var e=Object(R.g)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"Explorer"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.push("/".concat(c))}},r.a.createElement("div",{className:"searchbar"},r.a.createElement("input",{name:"search",placeholder:"Buscar en Twitter",value:c,onChange:function(e){l(e.target.value)}}))))},_=function(){var e=Object(i.c)((function(e){return e.authReducer})).UserData;return r.a.createElement("div",{className:"UserInfo"},r.a.createElement("div",{className:"UserPhoto"},r.a.createElement("img",{src:e.PhotoURL,alt:"User foto"})),r.a.createElement("div",{className:"UserData"},r.a.createElement("p",{className:"UserName"},e.DisplayName),r.a.createElement("p",{className:"UserID"},"@",e.UserName)),r.a.createElement("div",{className:"UserMoreOption"},r.a.createElement("i",{className:"fas fa-chevron-circle-down"})))},q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.authReducer})).UserData,a={color:"rgb(29, 161, 242)"};return r.a.createElement("div",{className:"menu-container"},r.a.createElement(j.c,{exact:!0,to:"/",activeStyle:a},r.a.createElement("div",{className:"menu-item"},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-home"})," Inicio "))),r.a.createElement("div",{className:"menu-item"},r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-envelope"})," Mensajes ")),r.a.createElement("div",{className:"menu-item"},r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-bookmark"})," Guardados ")),r.a.createElement(j.c,{to:"".concat(t.UserName),activeStyle:a},r.a.createElement("div",{className:"menu-item"},r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-user"})," Perfil "))),r.a.createElement("div",{className:"menu-item",role:"button",alt:"more option botton",onClick:function(){e(function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.auth().signOut();case 2:t(T()),t({type:D});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-sign-out-alt flip"})," Logout ")))},M=function(){console.log("true");var e=function(){var e=Object(v.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Navbar"},r.a.createElement(B,null),r.a.createElement(q,null),r.a.createElement("div",{className:"button-tuit",onClick:e},r.a.createElement("span",{className:"btn-primary"},"Twittear")),r.a.createElement(_,null))},G=(a(55),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.authReducer})).UserData,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],o=c[1];return r.a.createElement("div",{className:"tweet-container"},r.a.createElement("div",{className:"tweet-input"},r.a.createElement("div",{className:"TweetInputPhoto"},r.a.createElement("img",{src:t.PhotoURL,type:"text",alt:"User foto"})),r.a.createElement("textarea",{type:"text",name:"textareatweet",placeholder:"\xbfQu\xe9 est\xe1 pasando?",value:l,onChange:function(e){o(e.target.value)}})),r.a.createElement("div",{className:"tweet-buttons"},r.a.createElement("div",{className:"tweet-btn",type:"button",onClick:function(){var a,n,r,c,i,s;e((a=t.UID,n=t.UserName,r=t.DisplayName,c=t.PhotoURL,i="",s=l,Object(v.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={userUID:a,userName:n,userDisplayName:r,photoUserURL:c,photoURL:i,textBody:s,time:(new Date).getTime()},N(a,t);case 2:case"end":return e.stop()}}),e)}))))),o("")}},r.a.createElement("span",null,"Twittear"))))}),H=function(){return r.a.createElement("div",{className:"HeaderTimeline"},r.a.createElement("h3",null," Tweets m\xe1s recientes "))},W=function(e){var t=e.tweet;return r.a.createElement("div",{className:"Tweet-wrapper"},r.a.createElement("div",{className:"TweetContainer"},r.a.createElement("div",{className:"TweetPhoto"},r.a.createElement(j.b,{to:"/".concat(t.userName)},r.a.createElement("img",{src:t.photoUserURL,alt:"User foto"}))),r.a.createElement("div",{className:"TweetData"},r.a.createElement("div",{className:"TweetInfoUser"},r.a.createElement("p",{className:"UserName"},t.userDisplayName),r.a.createElement("p",{className:"UserID"},"@",t.userName)),r.a.createElement("p",null,t.textBody)),r.a.createElement("div",{className:"TweetMoreOption"},r.a.createElement("i",{className:"fas fa-ellipsis-h"}))),t.photoURL&&r.a.createElement("div",{className:"TweetImage"},r.a.createElement("img",{src:t.photoURL,alt:"User foto"})),r.a.createElement("div",{className:"SocialMedia"},r.a.createElement("i",{className:"far fa-comment TweetMedia Comment"}),r.a.createElement("i",{className:"fas fa-retweet TweetMedia Retweet"}),r.a.createElement("i",{className:"far fa-heart TweetMedia Like"}),r.a.createElement("i",{className:"far fa-share-square TweetMedia Share"})))},X=function(){var e=Object(i.c)((function(e){return e.tweetReducer})).timeline;return r.a.createElement("div",{className:"TimelineList"},e.map((function(e,t){return r.a.createElement(W,{key:t,tweet:e})})))},z=function(){return r.a.createElement("div",{className:"Timeline"},r.a.createElement(H,null),r.a.createElement(G,null),r.a.createElement("hr",null),r.a.createElement(X,null))},J=function(e){var t=e.user,a=Object(R.g)();return r.a.createElement("div",{className:"UserHeader"},r.a.createElement("div",{role:"button",onClick:function(){a.lenth<=2?a.push():a.goBack()}},r.a.createElement("i",{className:"fas fa-arrow-left"})),t&&r.a.createElement("div",null,r.a.createElement("p",null," ",t.DisplayName),r.a.createElement("p",{className:"subtitle"}," ",t.Likes," tweets ")))},K=function(e){var t=e.UserDataUID,a=e.CollectionFromDB,c=Object(n.useState)({tweets:[],isLoading:!0}),l=Object(s.a)(c,2),i=l[0],o=l[1],m=i.tweets,u=i.isLoading;return Object(n.useEffect)((function(){!function(e,t,a){d.ref("users").child(e).child(t).once("value",(function(e){var t=[];e.forEach((function(e){d.ref("tweets").child(e.key).on("value",(function(e){t.push(e.val())}))})),a({tweets:t,isLoading:!1})}))}(t,a,o)}),[t,a]),u?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:"TimelineList"},m.forEach((function(e){return r.a.createElement(W,{tweet:e})})))},Q=function(e){var t=e.styleBtn,a=e.handleInputFollow;return r.a.createElement("div",null,r.a.createElement("div",{className:t,role:"button",onClick:a},r.a.createElement("span",null)))},Y=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),o=Object(s.a)(l,2),m=o[0],u=o[1],p=Object(i.c)((function(e){return e.authReducer})).UserData,E=Object(R.h)().pathname.split("/")[1];Object(n.useEffect)((function(){d.ref("users").orderByChild("userName").equalTo(E).on("value",(function(e){e.forEach((function(e){var t=e.val();c({UserUID:e.key,DisplayName:t.displayName,UserName:t.userName,PhotoURL:t.photoURL,Likes:t.likes,Tweets:t.tweets,Description:t.description}),u(!1)}))}))}),[E]);return m?r.a.createElement(r.a.Fragment,null):a?r.a.createElement("div",{className:"Timeline"},r.a.createElement(J,{user:a}),r.a.createElement("div",{className:"header_photo"},r.a.createElement("div",{className:"User"},r.a.createElement("img",{src:a.PhotoURL,alt:"user"}))),r.a.createElement("div",{className:"UserText"},r.a.createElement("div",{className:"UserOption"},r.a.createElement("div",{className:"Info"},r.a.createElement("h2",{className:"DisplayName"},a.DisplayName),r.a.createElement("p",{className:"NameID"},"@",a.UserName)),p.UID!==a.UserUID?r.a.createElement(Q,{styleBtn:"Follow-btn",handleInputFollow:function(){!function(e,t){var a=d.ref("users").child(e),n=d.ref("users").child(t);n.child("Followers").child(e).set(!0),a.child("Following").child(t).set(!0),n.child("Tweets").once("value",(function(e){e.forEach((function(e){a.child("Timeline").child(e.key).set(!0)}))}))}(p.UID,a.UserUID)}}):r.a.createElement(Q,{styleBtn:"Unfollow-btn",handleInputFollow:function(){}})),r.a.createElement("p",{className:"description"},a.Description)),r.a.createElement("div",{className:"TweetBarHeader"},r.a.createElement("h3",null," Tweets ")),r.a.createElement(K,{UserDataUID:a.UserUID,CollectionFromDB:"Tweets"})):r.a.createElement("div",{className:"Timeline"},r.a.createElement(J,{user:void 0}),r.a.createElement("div",{className:"ErrorSearch"},r.a.createElement("h1",null," Usuario no encontrado :( ")))},Z=function(){return r.a.createElement(j.a,null,r.a.createElement("div",{className:"Timeline"},r.a.createElement(R.d,null,r.a.createElement(R.b,{path:"/:userID",component:Y}),r.a.createElement(R.b,{exact:!0,path:"/",component:z}))))},V=function(){return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement(M,null),r.a.createElement(Z,null),r.a.createElement(F,null)))},$=function(e){var t=e.isLoggedIn;return r.a.createElement(j.a,null,r.a.createElement("div",null,r.a.createElement(R.d,null,r.a.createElement(C,{path:"/login",isAuthenticated:t,component:P}),r.a.createElement(A,{path:"/",isAuthenticated:t,component:V}),r.a.createElement(R.a,{to:"login"}))))},ee=function(){var e=Object(i.b)(),t=Object(n.useState)(!0),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),u=Object(s.a)(o,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){m.a.auth().onAuthStateChanged((function(t){if(null===t||void 0===t?void 0:t.uid){var a=t.email.split("@")[0];e(L(t.uid,a,t.displayName,t.photoURL)),k(t.uid,e),p(!0)}else p(!1);l(!1)}))}),[e]),c?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,r.a.createElement($,{isLoggedIn:d}))},te=a(13),ae=a(35),ne={},re=a(25),ce={timeline:[]},le="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,ie=Object(te.c)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{UserData:{UID:t.payload.uid,UserName:t.payload.userName,DisplayName:t.payload.displayName,PhotoURL:t.payload.photoURL}};case w:return{};default:return e}},tweetReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{timeline:[t.payload].concat(Object(re.a)(e.timeline))};case O:return{timeline:t.payload};case D:return{timeline:[]};case y:return{timeline:t.payload};case U:return e.timeline.find((function(e){return e.tweetUID!==t.payload.tweetUID}))||e.timeline.length<1?{timeline:[t.payload].concat(Object(re.a)(e.timeline))}:e;default:return e}}}),se=Object(te.e)(ie,le(Object(te.a)(ae.a)));a(56);l.a.render(r.a.createElement(i.a,{store:se},r.a.createElement(ee,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.108428be.chunk.js.map