(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{21:function(e,t,n){},36:function(e,t,n){e.exports=n(66)},41:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(31),r=n.n(c),o=(n(41),n(8)),l=n(9),s=n(11),u=n(10),m=n(12),d=n(14),p=n(6),f=n(17),h=n.n(f),b=n(32),v=n(15),g=(n(21),n(33)),E=n.n(g),w=window.liff,O="https://line-smartfarm-api.herokuapp.com",j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).changeHandler=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n.userPost=function(e){console.log("Connecting to an API..."),e.preventDefault(),n.setState({loading:!0}),E.a.post(O+"/users",n.state).then((function(e){console.log("Register Success!"),setTimeout((function(){n.setState({loading:!1}),w.closeWindow()}),2e3)}))},n.state={line_id:"",line_pic:"",name:"",tel:"",loading:!1,user_info_arr:[]},n.initialize=n.initialize.bind(Object(v.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"initialize",value:function(){var e=this;console.log("Entering initialize state..."),w.init({liffId:"1653759696-vxLMYoW8"},(function(){var t;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h.a.awrap(w.getProfile());case 2:t=n.sent,e.setState({line_id:t.userId,line_pic:t.pictureUrl}),console.log("Get UID completed.");case 5:case"end":return n.stop()}}))}))}},{key:"componentDidMount",value:function(){window.addEventListener("load",this.initialize),document.title="Register"}},{key:"render",value:function(){var e=this.state,t=e.line_id,n=(e.loading,e.line_pic,e.name),a=e.tel;return i.a.createElement("div",{className:"App font"},i.a.createElement("h1",null,"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e43\u0e2b\u0e21\u0e48"),i.a.createElement("input",{className:"line-id",value:t,name:t,disabled:!0}),i.a.createElement("p",{className:"form-label"},"\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e29\u0e15\u0e23\u0e01\u0e23"),i.a.createElement("input",{required:!0,className:"farmer-name",placeholder:"\u0e01\u0e23\u0e2d\u0e01\u0e0a\u0e37\u0e48\u0e2d\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48",type:"text",name:"name",value:n,onChange:this.changeHandler}),i.a.createElement("p",{className:"form-label"},"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c"),i.a.createElement("input",{required:!0,className:"farmer-phone",placeholder:"\u0e01\u0e23\u0e2d\u0e01\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48",maxLength:"10",type:"tel",name:"tel",value:a,onChange:this.changeHandler}),i.a.createElement("br",null),i.a.createElement("button",{className:"button",type:"submit",id:"submitBtn",onClick:this.userPost},"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19"))}}]),t}(a.Component),y=window.liff,k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"scanCode",value:function(){y.scanCode().then((function(e){var t=JSON.stringify(e);alert(t),document.getElementById("scanCode").textContent=t})),y.init({liffId:"1653759696-JeYDkn12"},(function(){}))}},{key:"componentDidMount",value:function(){document.title="QRScan",this.scanCode()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{id:"scanCode"},"QRScan"))}}]),t}(a.Component);function C(){return i.a.createElement("div",{className:"Main"},i.a.createElement("header",{className:"App-header"},i.a.createElement("div",null,i.a.createElement(d.b,{to:"/register"},"Register")),i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement(d.b,{to:"/qrscan"},"QRScan"))))}var N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,{basename:"/smartfarm-website"},i.a.createElement(p.a,{exact:!0,path:"/",component:C}),i.a.createElement(p.a,{path:"/Register",component:j}),i.a.createElement(p.a,{path:"/QRScan",component:k}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.1d86b3fa.chunk.js.map