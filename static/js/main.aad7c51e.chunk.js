(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{124:function(e,t,n){},200:function(e,t,n){e.exports=n(346)},205:function(e,t,n){},346:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(53),o=n.n(l),c=(n(205),n(26)),r=n(27),s=n(28),u=n(29),m=n(31),d=n(69),h=n(47),f=n(112),g=n.n(f),b=n(33),p=n(43),v=(n(124),n(113)),E=n.n(v),y=n(359),w=n(355),k=n(358),O=n(64),j=n(356),C=window.liff,S="https://line-smartfarm-api.herokuapp.com",N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).register=function(e){console.log("Registering..."),e.preventDefault(),n.setState({loading:!0}),E.a.post(S+"/users",{uid:n.state.uid,name:n.state.name,tel:n.state.tel}).then((function(e){console.log(e),console.log("Register Success!"),setTimeout((function(){C.closeWindow()}),2e3)})).catch((function(e){console.log(e),console.log("Register Failed!"),n.setState({loading:!1})}))},n.changeHandler=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n.state={uid:"",line_pic:"",name:"",tel:"",loading:!1,visible:!1},n.initialize=n.initialize.bind(Object(p.a)(n)),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.initialize(),document.title="Register"}},{key:"initialize",value:function(){var e=this;C.init({liffId:"1653759696-vxLMYoW8"},(function(){var t;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("Checking for UID..."),!C.isLoggedIn()){n.next=9;break}return n.next=4,g.a.awrap(C.getProfile());case 4:t=n.sent,e.setState({uid:t.userId,line_pic:t.pictureUrl}),e.verify(),n.next=10;break;case 9:C.login();case 10:case"end":return n.stop()}}))}))}},{key:"verify",value:function(){var e=this;console.log("Checking..."),this.setState({loading:!0}),E.a.post(S+"/verify",{uid:this.state.uid}).then((function(t){console.log(t),!0===t?(console.log("New UID Detected!"),e.setState({visible:!0})):!1===t&&(console.log("Duplicated UID Detected!"),setTimeout((function(){C.closeWindow()}),2e3))}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"main"},i.a.createElement(y.a,{visible:this.state.visible,animation:"scale",duration:1e3},i.a.createElement(w.a,{onSubmit:this.register},i.a.createElement(k.a,{as:"h1",icon:!0,className:"prompt"},i.a.createElement(O.a,{name:"pencil alternate"}),"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e43\u0e2b\u0e21\u0e48",i.a.createElement(k.a.Subheader,{className:"subheader"},this.state.loading?"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e23\u0e2d\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48 \u0e01\u0e33\u0e25\u0e31\u0e07\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e04\u0e48\u0e30":"\u0e42\u0e1b\u0e23\u0e14\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e23\u0e34\u0e48\u0e21\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e14\u0e49\u0e27\u0e22\u0e04\u0e48\u0e30")),i.a.createElement(w.a.Field,{required:!0},i.a.createElement("label",{className:"form-label"},"\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e29\u0e15\u0e23\u0e01\u0e23"),i.a.createElement("input",{required:!0,className:"form-input",placeholder:"\u0e01\u0e23\u0e2d\u0e01\u0e0a\u0e37\u0e48\u0e2d\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48",type:"text",name:"name",value:this.state.name,disabled:this.state.loading,onChange:this.changeHandler})),i.a.createElement(w.a.Field,{required:!0},i.a.createElement("label",{className:"form-label"},"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c"),i.a.createElement("input",{required:!0,className:"form-input",placeholder:"\u0e01\u0e23\u0e2d\u0e01\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48",maxLength:"10",type:"tel",name:"tel",value:this.state.tel,disabled:this.state.loading,onChange:this.changeHandler})),i.a.createElement(j.a,{color:"orange",content:"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19",className:"form-btn",type:"submit",disabled:this.state.loading,loading:this.state.loading})))))}}]),t}(a.Component),x=window.liff,D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"scanCode",value:function(){x.scanCode().then((function(e){var t=JSON.stringify(e);alert(t),document.getElementById("scanCode").textContent=t,x.init({liffId:"1653759696-JeYDkn12"},(function(){}))}))}},{key:"componentDidMount",value:function(){document.title="QRScan",this.scanCode()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",{id:"scanCode"}))}}]),t}(a.Component);function I(){return i.a.createElement("div",{className:"main"},i.a.createElement("div",null,i.a.createElement("br",null),i.a.createElement(d.b,{to:"/register"},"Register"),i.a.createElement("br",null)),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("br",null),i.a.createElement(d.b,{to:"/qrscan"},"QR"),i.a.createElement("br",null)))}var R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{basename:"/smartfarm-website"},i.a.createElement(h.a,{exact:!0,path:"/",component:I}),i.a.createElement(h.a,{path:"/Register",component:N}),i.a.createElement(h.a,{path:"/QRScan",component:D}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[200,1,2]]]);
//# sourceMappingURL=main.aad7c51e.chunk.js.map