(this["webpackJsonparound-react-auth"]=this["webpackJsonparound-react-auth"]||[]).push([[0],{21:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/logo.b797581b.svg"},26:function(e,t,a){e.exports=a(36)},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),i=a(7),l=(a(21),a(18)),s=a(3),u=a(1);var m=function(e){var t=r.a.useRef(),a=r.a.useRef();return r.a.createElement("section",{className:"login"},r.a.createElement("div",{className:"login__container"},r.a.createElement("h2",{className:"form__title"},"Sign In"),r.a.createElement("form",{action:"#",className:"form form_embedded",name:"Sign In",onSubmit:function(n){n.preventDefault(),e.onSignin({email:t.current.value,password:a.current.value}),t.current.value="",a.current.value=""},noValidate:!0},r.a.createElement("label",{className:"form__field",htmlFor:"email-input"},r.a.createElement("input",{className:"form__input form__input_type_email form__input_theme_dark",id:"email-input",type:"email",title:"Email",name:"email",ref:t,placeholder:"Email",required:!0}),r.a.createElement("span",{className:"form__input-error form__input-error_active",id:"email-input-error"})),r.a.createElement("label",{className:"form__field",htmlFor:"password-input"},r.a.createElement("input",{className:"form__input form__input_type_password form__input_theme_dark",id:"password-input",type:"password",title:"Password",name:"password",ref:a,placeholder:"Password",required:!0}),r.a.createElement("span",{className:"form__input-error form__input-error_active",id:"password-input-error"})),r.a.createElement("button",{type:"submit",className:"form__submit-button form__submit-button_light"},"Log In")),r.a.createElement(i.b,{to:"/signup",className:"login__link"},"Not a member yet? Sign up here!")))};var p=function(e){var t=r.a.useRef(),a=r.a.useRef();return r.a.createElement("section",{className:"login"},r.a.createElement("div",{className:"login__container"},r.a.createElement("h2",{className:"form__title"},"Sign Up"),r.a.createElement("form",{action:"#",className:"form form_embedded",name:"Sign Up",onSubmit:function(n){n.preventDefault(),e.onSignup({email:t.current.value,password:a.current.value}),t.current.value="",a.current.value=""},noValidate:!0},r.a.createElement("label",{className:"form__field",htmlFor:"reg-email-input"},r.a.createElement("input",{className:"form__input form__input_type_email form__input_theme_dark",id:"reg-email-input",type:"email",title:"Email",name:"email",ref:t,placeholder:"Email",required:!0}),r.a.createElement("span",{className:"form__input-error form__input-error_active",id:"email-input-error"})),r.a.createElement("label",{className:"form__field",htmlFor:"reg-password-input"},r.a.createElement("input",{className:"form__input form__input_type_password form__input_theme_dark",id:"reg-password-input",type:"password",title:"Password",name:"password",ref:a,placeholder:"Password",required:!0}),r.a.createElement("span",{className:"form__input-error form__input-error_active",id:"password-input-error"})),r.a.createElement("button",{type:"submit",className:"form__submit-button form__submit-button_light"},"Sign Up")),r.a.createElement(i.b,{to:"/signin",className:"login__link"},"Already a member? Log in here!")))},d=a(25),_=function(e){e.component;var t=Object(d.a)(e,["component"]);return r.a.createElement(u.b,{exact:!0,path:t.path},(function(){return t.loggedIn?t.children:r.a.createElement(u.a,{to:"./signin"})}))};var f=function(e){var t=e.success?"Success! You have now been registered.":"Oops, something went wrong! Please try again.",a="".concat(e.success?"popup__status-icon_type_success":"popup__status-icon_type_error");return r.a.createElement("div",{className:"popup popup_type_register ".concat(e.isOpen?"popup_opened":""),onClick:function(t){t.target.classList.contains("popup")&&e.onClose()}},r.a.createElement("div",{className:"popup__container popup__container_type_confirmation"},r.a.createElement("button",{className:"popup__close-button",onClick:e.onClose}),r.a.createElement("div",{className:"popup__status-icon ".concat(a)}),r.a.createElement("h2",{className:"popup__title"},t)))},h=a(24),b=a.n(h);var E=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"logo",src:b.a,alt:"Around logo"}),r.a.createElement("nav",{className:"nav header__info header__info_status_logged-in"},r.a.createElement("p",{className:"header__email"},e.loggedIn?e.email:""),r.a.createElement(i.b,{to:e.link.to,className:"header__link",onClick:e.onLogout?e.onLogout:null},e.link.description)))},g=r.a.createContext(void 0);var v=function(e){var t=r.a.useContext(g),a=e.card.owner._id===t._id,n="button button__delete ".concat(a?"":"button__delete_hidden"),o=e.card.likes.some((function(e){return e._id===t._id})),c="button button__like ".concat(o?"button__like_status_selected":""),i=e.card.likes.length;return r.a.createElement("li",{className:"element"},r.a.createElement("div",{className:"element__image",role:"img",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onCardClick(e.card)}}),r.a.createElement("button",{className:n,onClick:function(t){t.stopPropagation(),t.preventDefault(),e.onCardDelete(e.card)}}),r.a.createElement("div",{className:"element__group"},r.a.createElement("h2",{className:"element__title"},e.card.name),r.a.createElement("div",{className:"element__like-container"},r.a.createElement("button",{className:c,onClick:function(t){t.stopPropagation(),t.preventDefault(),e.onCardLike(e.card)}}),r.a.createElement("div",{className:"element__likes"},i))))};var k=function(e){var t=r.a.useContext(g);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar-container"},r.a.createElement("img",{className:"profile__avatar",src:t.avatar,alt:"profile avatar"}),r.a.createElement("button",{className:"button button__avatar",onClick:e.onEditAvatar})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h1",{className:"profile__name"},t.name),r.a.createElement("p",{className:"profile__about-me"},t.about),r.a.createElement("button",{className:"button button__edit",onClick:e.onEditProfile})),r.a.createElement("button",{className:"button button__add",onClick:e.onAddPlace})),r.a.createElement("section",{className:"elements"},r.a.createElement("ul",{className:"elements__container"},e.cards.map((function(t,a){return r.a.createElement(v,{key:a,card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})})))))};var N=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Around The U.S."))};var y=function(e){var t=r.a.createElement("div",{onClick:function(t){t.target.classList.contains("popup")&&e.onClose()},className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":"")},r.a.createElement("div",{className:"popup__container ".concat("delete"===e.name?"popup__container_type_confirmation":"")},r.a.createElement("button",{className:"popup__close-button",onClick:e.onClose}),r.a.createElement("h2",{className:"popup__title"},e.title),r.a.createElement("form",{action:"#",className:"form",name:e.name,onSubmit:e.onSubmit,noValidate:!0},e.children,r.a.createElement("button",{type:"submit",className:"form__submit-button"},e.submitBtnText))));return c.a.createPortal(t,document.getElementById("root"))};var C=function(e){var t=r.a.useContext(g),a=Object(n.useState)(),o=Object(s.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(),u=Object(s.a)(l,2),m=u[0],p=u[1];return r.a.useEffect((function(){i(t.name),p(t.about)}),[t]),r.a.createElement(y,{name:"edit-profile",title:"Edit Profile",submitBtnText:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:m})}},r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{className:"form__input form__input_type_name",id:"name-input",type:"text",title:"Name",name:"name",value:c,placeholder:"Name",minLength:"2",maxLength:"40",pattern:"^[A-Za-z]+[A-Za-z -]{1,}",onChange:function(e){i(e.target.value)},required:!0}),r.a.createElement("span",{className:"form__input-error form__input-error_active",id:"name-input-error"})),r.a.createElement("label",{className:"form__field"},r.a.createElement("input",{className:"form__input form__input_type_about",id:"about-input",type:"text",title:"About Me",name:"about",value:m,placeholder:"About Me",minLength:"2",maxLength:"200",onChange:function(e){p(e.target.value)},required:!0}),r.a.createElement("span",{className:"form__input-error form__input-error_active",id:"about-input-error"})))};var O=function(e){var t=r.a.useRef();return r.a.createElement(y,{name:"avatar",title:"Change profile picture",submitBtnText:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})}},r.a.createElement("label",{className:"form__field",htmlFor:"avatar-url-input"},r.a.createElement("input",{className:"form__input form__input_type_url",type:"url",id:"avatar-url-input",title:"Image Link",name:"link",placeholder:"Image link",ref:t,required:!0}),r.a.createElement("span",{className:"form__input-error form__input-error_active",id:"url-input-error"})))};var j=function(e){var t=r.a.useRef(),a=r.a.useRef();return r.a.createElement(y,{name:"add-place",title:"New place",submitBtnText:"Create",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onAddPlace({title:t.current.value,link:a.current.value})}},r.a.createElement("label",{className:"form__field",htmlFor:"title-input"},r.a.createElement("input",{className:"form__input form__input_type_place-title",id:"title-input",type:"text",title:"Title",name:"name",placeholder:"Title",minLength:"2",maxLength:"30",pattern:"^[A-Za-z]+[A-Za-z -]{1,}",ref:t,required:!0}),r.a.createElement("span",{className:"form__input-error form__input-error_active",id:"title-input-error"})),r.a.createElement("label",{className:"form__field",htmlFor:"place-url-input"},r.a.createElement("input",{className:"form__input form__input_type_url",type:"url",id:"url-input",title:"Image Link",name:"link",placeholder:"Image link",ref:a,required:!0}),r.a.createElement("span",{className:"form__input-error form__input-error_active",id:"url-input-error"})))};var S=function(e){return r.a.createElement(y,{name:"delete",title:"Are you sure?",submitBtnText:"Yes",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onConfirmation(e.confirmSelectedCard)}},e.card)};var w=function(e){return r.a.createElement("div",{className:"popup popup_type_image ".concat(e.card?"popup_opened":""),onClick:function(t){t.target.classList.contains("popup")&&e.onClose()}},r.a.createElement("div",{className:"popup__container popup__container_type_image"},r.a.createElement("button",{className:"popup__close-button",onClick:e.onClose}),r.a.createElement("img",{className:"popup__image",src:e.card?e.card.link:"",alt:e.card?e.card.name:""}),r.a.createElement("p",{className:"popup__image-label"},e.card?e.card.name:"")))},U=a(13),P=a(14),L=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(U.a)(this,e),this.baseUrl=a,this.headers=n}return Object(P.a)(e,[{key:"getAppInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserProfile()])}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"getUserProfile",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{headers:this.headers,method:"PATCH",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"setUserProfile",value:function(e){var t=e.name,a=e.about;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers,method:"PATCH",body:JSON.stringify({name:t,about:a})}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers,method:"POST",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{headers:this.headers,method:"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"updateLike",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{headers:this.headers,method:t?"PUT":"DELETE"}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).catch((function(e){console.log(e)}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-1",headers:{authorization:"59b76db9-8593-4042-9d89-647c9c96a94c","Content-Type":"application/json"}}),A=a(19),I=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(U.a)(this,e),this._baseUrl=a,this._headers=n}return Object(P.a)(e,[{key:"_checkServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Err: ".concat(e.status))}},{key:"registerUser",value:function(e,t){return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",headers:this._headers,body:JSON.stringify({email:e,password:t})}).then(this._checkServerResponse)}},{key:"loginUser",value:function(e,t){return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",headers:this._headers,body:JSON.stringify({email:e,password:t})}).then(this._checkServerResponse)}},{key:"checkUserValidity",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{headers:Object(A.a)(Object(A.a)({},this._headers),{},{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))})}).then(this._checkServerResponse)}}]),e}())({baseUrl:"https://register.nomoreparties.co",headers:{"Content-Type":"application/json"}});var x=Object(u.h)((function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!0),i=Object(s.a)(c,2),d=i[0],h=i[1],b=Object(n.useState)(!1),v=Object(s.a)(b,2),y=v[0],U=v[1],P=Object(n.useState)(null),A=Object(s.a)(P,2),x=A[0],T=A[1],D=Object(u.g)(),R=Object(n.useState)({}),q=Object(s.a)(R,2),B=q[0],F=q[1],J=Object(n.useState)([]),z=Object(s.a)(J,2),V=z[0],Z=z[1],M=Object(n.useState)(!1),H=Object(s.a)(M,2),W=H[0],Y=H[1],$=Object(n.useState)(!1),G=Object(s.a)($,2),K=G[0],Q=G[1],X=Object(n.useState)(!1),ee=Object(s.a)(X,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(!1),re=Object(s.a)(ne,2),oe=re[0],ce=re[1],ie=Object(n.useState)(null),le=Object(s.a)(ie,2),se=le[0],ue=le[1],me=Object(n.useState)(null),pe=Object(s.a)(me,2),de=pe[0],_e=pe[1];function fe(){var e=localStorage.getItem("token");e&&I.checkUserValidity(e).then((function(e){e&&e.data&&(U(!0),T(e.data.email),D.push("/"))})).catch((function(e){console.log(e)}))}function he(){window.removeEventListener("keyup",be),ae(!1),Q(!1),Y(!1),ce(!1),ue(!1),o(!1)}function be(e){"Escape"===e.key&&he()}return r.a.useEffect((function(){L.getUserProfile().then((function(e){F(e)})).catch((function(e){console.log(e)}))}),[]),r.a.useEffect((function(){L.getInitialCards().then((function(e){e.forEach((function(t){Z([].concat(Object(l.a)(e),[t]))}))})).catch((function(e){console.log(e)}))}),[]),r.a.useEffect(fe,[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page"},r.a.createElement(g.Provider,{value:B},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/signin"},r.a.createElement(E,{loggedIn:y,email:x,link:{description:"Sign up",to:"/signup"}}),r.a.createElement(m,{onSignin:function(e){var t=e.email,a=e.password;I.loginUser(t,a).then((function(e){e.token&&(U(!0),localStorage.setItem("token",e.token),D.push("/"),fe())})).catch((function(e){o(!0),h(!1)}))}})),r.a.createElement(u.b,{path:"/signup"},r.a.createElement(E,{loggedIn:y,email:x,link:{description:"Log in",to:"/signin"}}),r.a.createElement(p,{onSignup:function(e){var t=e.email,a=e.password;I.registerUser(t,a).then((function(e){e&&e.data&&(o(!0),h(!0),U(!0),T(e.data.email),D.push("/"))})).catch((function(e){o(!0),h(!1)}))}})),r.a.createElement(_,{path:"/",loggedIn:y},r.a.createElement(E,{loggedIn:y,email:x,link:{description:"Log out",to:"#"},onLogout:function(){U(!1),localStorage.removeItem("token"),D.push("/signin")}}),r.a.createElement(k,{cards:V,onEditAvatar:function(){Q(!0),window.addEventListener("keyup",be)},onEditProfile:function(){Y(!0),window.addEventListener("keyup",be)},onAddPlace:function(){ae(!0),window.addEventListener("keyup",be)},onCardClick:function(e){ue(e),window.addEventListener("keyup",be)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===B._id}));L.updateLike(e._id,!t).then((function(t){var a=V.map((function(a){return a._id===e._id?t:a}));Z(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){_e(e),ce(!0),window.addEventListener("keyup",be)}}))),r.a.createElement(N,null),r.a.createElement(O,{isOpen:K,onClose:he,onUpdateAvatar:function(e){var t=e.avatar;L.setUserAvatar({avatar:t}).then((function(e){F(e),Q(!1)})).catch((function(e){console.log(e)}))}}),r.a.createElement(C,{isOpen:W,onClose:he,onUpdateUser:function(e){var t=e.name,a=e.about;L.setUserProfile({name:t,about:a}).then((function(e){F(e),Y(!1)})).catch((function(e){console.log(e)}))}}),r.a.createElement(j,{isOpen:te,onClose:he,onAddPlace:function(e){var t=e.title,a=e.link;L.addCard({name:t,link:a}).then((function(e){Z([].concat(Object(l.a)(V),[e])),ae(!1)})).catch((function(e){console.log(e)}))}}),r.a.createElement(w,{card:se,onClose:he}),r.a.createElement(f,{isOpen:a,onClose:he,success:d}),r.a.createElement(S,{isOpen:oe,onClose:he,onConfirmation:function(e){console.log(e),L.deleteCard(e._id).then((function(){var t=V.filter((function(t){return t._id!==e._id}));Z(t),ce(!1)})).catch((function(e){console.log(e)}))},confirmSelectedCard:de}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{basename:"/react-around-auth"},r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.616e5c50.chunk.js.map