(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{26:function(e,t,n){e.exports=n(42)},31:function(e,t,n){},33:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},34:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(22),i=n.n(r),o=(n(31),n(7)),l=n(8),s=n(10),u=n(9),d=n(11),m=n(23),p=n(5),f=n(12),h=n.n(f),b=n(16),v=(n(33),n(34),n(35),"https://line-smartfarm-api.herokuapp.com"),w=function(e,t,n){return new Promise((function(a,c){fetch(v+e,{method:"POST",headers:n?{}:{"Content-Type":"application/json"},body:n?t:JSON.stringify(t),credentials:"include"}).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return c(e)}))}))};window.liff;var g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t,a,c;return h.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.target,a=t.value,c=t.name,r.t0=h.a,r.t1=n,r.t2=Object(b.a)({},c,a),r.next=6,h.a.awrap(console.log(n.state));case 6:return r.t3=r.sent,r.t4=r.t1.setState.call(r.t1,r.t2,r.t3),r.next=10,r.t0.awrap.call(r.t0,r.t4);case 10:case"end":return r.stop()}}))},n.changeHandler=function(e){n.setState(Object(b.a)({},e.target.name,e.target.value))},n.sendInfo=function(){var e,t,a,c;return h.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.state.name,t=n.state.tel,a=n.state.line_id,r.next=5,h.a.awrap(w("/sendInfo",{name:e,tel:t,lineId:a}));case 5:c=r.sent,console.log(c),alert(c.status);case 8:case"end":return r.stop()}}))},n.state={line_id:"",line_pic:"",name:"",tel:"",loading:!1,user_info_arr:[]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.initialize),document.title="Register"}},{key:"render",value:function(){var e=this.state,t=e.line_id,n=(e.loading,e.line_pic,e.name),a=e.tel;return c.a.createElement("div",{class:"App font"},c.a.createElement("h1",null,"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e43\u0e2b\u0e21\u0e48"),c.a.createElement("input",{class:"line-id",value:"Line UID: "+t,name:"Line UID: "+t,disabled:!0}),c.a.createElement("p",{className:"form-label"},"\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e29\u0e15\u0e23\u0e01\u0e23"),c.a.createElement("input",{required:!0,class:"farmer-name",placeholder:"\u0e01\u0e23\u0e2d\u0e01\u0e0a\u0e37\u0e48\u0e2d\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48",type:"text",name:"name",value:n,onChange:this.changeHandler}),c.a.createElement("p",{className:"form-label"},"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c"),c.a.createElement("input",{required:!0,class:"farmer-phone",placeholder:"\u0e01\u0e23\u0e2d\u0e01\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48",maxLength:"10",type:"tel",name:"tel",value:a,onChange:this.changeHandler}),c.a.createElement("br",null),c.a.createElement("button",{className:"button",type:"submit",id:"submitBtn",onClick:this.sendInfo},"\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19"))}}]),t}(a.Component),E=window.liff,O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"initialize",value:function(){E.init({liffId:"1610155283-WqRpOKwB"},(function(){}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("p",{id:"scanCode"}),c.a.createElement("p",null,c.a.createElement("button",{id:"btnScanCode",onclick:"scancode()"},"Scan Code")))}}]),t}(a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement(p.c,null,c.a.createElement(p.a,{patch:"/",component:g}),c.a.createElement(p.a,{patch:"/qrcode",component:O})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.f5701ead.chunk.js.map