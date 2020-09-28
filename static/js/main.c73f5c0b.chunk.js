(this["webpackJsonpmakeup-app"]=this["webpackJsonpmakeup-app"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),i=(a(66),a(15)),l=a(16),s=a(18),u=a(17),m=(a(67),a(54)),p=a.n(m),d=a(34),v=a.n(d);v.a.initializeApp({apiKey:"AIzaSyD4iDNH_fPf65dmAGjFREQHQ_jHMCs1ZEw",authDomain:"project5-16351.firebaseapp.com",databaseURL:"https://project5-16351.firebaseio.com",projectId:"project5-16351",storageBucket:"project5-16351.appspot.com",messagingSenderId:"188499920009",appId:"1:188499920009:web:6c6332896151214c0ab258",measurementId:"G-6F6HD55E6L"});var f=v.a,h=a(24),E=a(55),b=a.n(E),g=(a(96),a(97),a(23)),j=a(56);a(98);var k=function(){var e=f.auth(),t=(f.firestore(),f.analytics(),Object(j.a)(e)),a=Object(h.a)(t,1)[0],c=Object(n.useState)(!1),o=Object(h.a)(c,2);return o[0],o[1],r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{id:"menu",style:{float:"right",top:"0",margin:"10px",right:"0",position:"absolute",display:"flex"}},a?r.a.createElement(r.a.Fragment,null," ",r.a.createElement(g.b,{to:"/",style:{marginRight:"8px",cursor:"pointer",color:"inherit",textDecoration:"inherit",fontSize:"20px"}},"Home"),r.a.createElement(g.b,{to:"/saveditems",style:{marginRight:"18px",cursor:"pointer",color:"inherit",textDecoration:"inherit",fontSize:"20px"}},"SavedItems")," "):"",a?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"blue",style:{cursor:"pointer"},onClick:function(){e.signOut().then((function(){localStorage.removeItem("email"),console.log("logged out")})).catch((function(e){console.log(e.message)}))}},"Logout")," "):r.a.createElement(b.a,{onClick:function(){var t=new f.auth.GoogleAuthProvider;e.signInWithPopup(t).then((function(e){localStorage.setItem("email",e.user.email)}))}})),r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Welcome to Makeup Finder!"),r.a.createElement("p",null,"This website is designed to help you find makeup products!"))))},y=a(37),O=a(21),w=(a(51),function(e){return r.a.createElement("section",null,r.a.createElement(O.a,null),r.a.createElement("div",{className:"imageDisplay"},e.items.map((function(e,t){return r.a.createElement("div",{className:"wrapper",key:t},r.a.createElement("div",{key:e._id},r.a.createElement("div",{className:"makeupItems"},r.a.createElement("img",{src:e.image_link,alt:e.name}),r.a.createElement("p",null,e.name),r.a.createElement("a",{href:e.product_link,style:{cursor:"pointer"}},"Buy Now"),r.a.createElement("a",{onClick:function(t){return function(e,t){if(e.preventDefault(),localStorage.getItem("email")){var a=f.firestore();a.collection("saveditems").doc("doc-".concat(t.id)).get().then((function(e){console.log(e.exists),e.exists?Object(O.b)("You already Have this Product Saved"):a.collection("saveditems").doc("doc-".concat(t.id)).set(Object(y.a)(Object(y.a)({},t),{},{username:localStorage.getItem("email")})).then((function(e){Object(O.b)("Product Saved")}))}))}else Object(O.b)("Please Login To Save Product")}(t,e)},style:{marginLeft:"5px",cursor:"pointer"}},"Save Item"))))}))))}),S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).userPost=function(t){e.setState({review:t.target.value})},e.postSubmission=function(t){t.preventDefault(),f.database().ref("productReviews").push(e.state.review),e.setState({review:""})},e.removeSubmission=function(e){f.database().ref("productReviews").child(e).remove()},e.state={submittedData:[],review:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.database().ref("productReviews").on("value",(function(t){var a=t.val(),n=[];for(var r in a){var c={id:r,post:a[r]};n.push(c)}e.setState({submittedData:n})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"postSection"},r.a.createElement("form",{action:"submit"},r.a.createElement("input",{onChange:this.userPost,type:"textarea",minLength:"20",maxLength:"300",value:this.state.review,placeholder:"Write a review here!"}),r.a.createElement("button",{class:"submitButton",onClick:this.postSubmission},"Submit")),this.state.submittedData.map((function(t){return r.a.createElement("div",{className:"addedUserReview"},r.a.createElement("div",{key:t.id}),r.a.createElement("p",null,t.post),r.a.createElement("button",{class:"delete",onClick:function(){return e.removeSubmission(t.id)}},"Delete Review"))})))}}]),a}(n.Component),I=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).userpicks=function(t){e.setState({userSelection:t.target.value})},e.state={userSelection:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("main",null,r.a.createElement("div",{class:"wrapper"},r.a.createElement("form",null,r.a.createElement("div",{class:"dropDownForm"},r.a.createElement("label",{htmlFor:"makeupProduct"}),r.a.createElement("select",{onChange:this.userpicks,name:"makeupProduct",id:"makeupProduct"},r.a.createElement("option",{value:"lipstick"},"Lipstick"),r.a.createElement("option",{value:"eyeshadow"},"EyeShadow"),r.a.createElement("option",{value:"blush"},"Blush")),r.a.createElement("button",{class:"submitButton",onClick:function(t){return e.props.getProduct(t,e.state.userSelection)}}," Submit")))))}}]),a}(n.Component),D=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{class:"wrapper"},r.a.createElement("p",null,"Copyright Usra Abid \xa9 2020")))}}]),a}(n.Component),P=(a(101),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).getProduct=function(t,a){t.preventDefault(),p()({url:"https://makeup-api.herokuapp.com/api/v1/products.json?product_type=".concat(a," "),method:"GET",responseType:"json"}).then((function(t){e.setState({currentProducts:t.data})}))},e.getUserInput=function(e){e.preventDefault()},e.state={currentProducts:[]},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(I,{getProduct:this.getProduct}),r.a.createElement(w,{items:this.state.currentProducts}),r.a.createElement(S,null),r.a.createElement(D,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(5);var C=function(e){return r.a.createElement("section",null,r.a.createElement("div",{className:"imageDisplay"},e.items.map((function(t,a){return r.a.createElement("div",{className:"wrapper",key:a},r.a.createElement("div",{key:t._id},r.a.createElement("div",{className:"makeupItems"},r.a.createElement("img",{src:t.image_link,alt:t.name}),r.a.createElement("p",null,t.name),r.a.createElement("a",{href:t.product_link,style:{cursor:"pointer"}},"Buy Now"),r.a.createElement("a",{onClick:function(){return e.deleteItem(t.refid)},style:{cursor:"pointer",marginLeft:"5px"}},"Delete Item"))))}))))};var N=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),i=Object(h.a)(o,2),l=i[0],s=i[1],u=f.firestore();return Object(n.useEffect)((function(){var e=[];u.collection("saveditems").where("username","==",localStorage.getItem("email")).get().then((function(t){t.forEach((function(t){var a=t.data();Object.assign(a,{refid:t.id}),console.log(a),e.push(a)})),c([].concat(e))}))}),[l]),r.a.createElement("div",{className:"App"},r.a.createElement(O.a,null),r.a.createElement(k,null),r.a.createElement(C,{items:a,deleteItem:function(e){u.collection("saveditems").doc(e).delete().then((function(e){s(+new Date),Object(O.b)("Product Removed")}))}}),r.a.createElement(S,null),r.a.createElement(D,null))},R=a(59),A=new(function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,[{key:"checkAuthenticated",value:function(){return!!localStorage.getItem("email")}}]),e}());function L(e){var t=e.component,a=Object(R.a)(e,["component"]);return r.a.createElement(x.b,Object.assign({},a,{render:function(e){return A.checkAuthenticated()?r.a.createElement(t,e):r.a.createElement(x.a,{to:{pathname:"/",state:{from:e.location}}})}}))}var _=r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(x.b,{exact:!0,path:"/",component:P}),r.a.createElement(L,{exact:!0,path:"/saveditems",component:N})));o.a.render(_,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,a){e.exports=a(106)},66:function(e,t,a){},67:function(e,t,a){}},[[61,1,2]]]);
//# sourceMappingURL=main.c73f5c0b.chunk.js.map