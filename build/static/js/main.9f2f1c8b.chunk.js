(this["webpackJsonpazul-payment"]=this["webpackJsonpazul-payment"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(24),o=n.n(a),i=(n(37),n(21)),r=n(12),d=(n(38),n(31)),l=n(25),u=n.n(l),p="&0ic2GtJ0v%h#9MuWLdYjstN1LWewHO9KHpRe2GVfcaNoO1w$t1JHgnMbvgqFX4K&H6hN0cD0pc3UQYyKCDjCZWyx6kO&V3PwsUUxZeiEO06WxvHmagJZaDaEKD9W0Vy",j={MerchantId:"39912110001",MerchantName:"Nateevos",MerchantType:"Travel",CurrencyCode:"$",OrderNumber:"111111",Amount:"1000",ITBIS:"000",ApprovedUrl:"",CancelUrl:"",DeclinedUrl:"",UseCustomField1:"0",CustomField1Label:"",CustomField1Value:"",UseCustomField2:"0",CustomField2Label:"",CustomField2Value:""},m=function(e){return u()(e)},h=n(70),b=n(1),O=function(){return Object(b.jsx)("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:1e4,backgroundColor:"#FFF",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",marginTop:"auto",marginBottom:"auto"},children:Object(b.jsx)(h.a,{size:"6rem",style:{color:"#e8eaef",margin:0,padding:0}})})},g=function(){return Object(b.jsx)("div",{style:{backgroundColor:"black",height:"100vh",width:"100%"},children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("div",{class:"sad-mac"}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)("span",{class:"sr-text",children:"Error 404: Not Found"}),Object(b.jsx)("span",{class:"e"}),Object(b.jsx)("span",{class:"r"}),Object(b.jsx)("span",{class:"r"}),Object(b.jsx)("span",{class:"o"}),Object(b.jsx)("span",{class:"r"}),Object(b.jsx)("span",{class:"_4"}),Object(b.jsx)("span",{class:"_0"}),Object(b.jsx)("span",{class:"_4"}),Object(b.jsx)("span",{class:"n"}),Object(b.jsx)("span",{class:"o"}),Object(b.jsx)("span",{class:"t"}),Object(b.jsx)("span",{class:"f"}),Object(b.jsx)("span",{class:"o"}),Object(b.jsx)("span",{class:"u"}),Object(b.jsx)("span",{class:"n"}),Object(b.jsx)("span",{class:"d"})]})]})})},x=function(){return Object(b.jsx)("div",{style:{backgroundColor:"black",height:"100vh",width:"100%"},children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("div",{class:"sad-mac"}),Object(b.jsx)("figcaption",{children:Object(b.jsx)("span",{class:"sr-text",children:"Invalid Payment"})})]})})},v=n(3),f=n(30),y=n(18),C=n.n(y),U="https://api.nateevos.com/",I="https://api.nateevos.com/commons/storage",A="https://payments.nateevos.com/",w=function(){var e=Object(v.f)().storageId,t=C.a.parse(window.location.search),n="".concat(I,"/").concat(e),a=Object(s.useState)(j),o=Object(r.a)(a,2),l=o[0],u=o[1],h=Object(s.useState)(""),g=Object(r.a)(h,2),f=g[0],y=g[1],U=Object(s.useState)(!1),w=Object(r.a)(U,2),S=w[0],F=w[1],D=Object(s.useState)(!1),T=Object(r.a)(D,2),M=T[0],N=T[1];Object(s.useEffect)((function(){console.log("data is",l),y(function(e){var t=String(e.MerchantId)+String(e.MerchantName)+String(e.MerchantType)+String(e.CurrencyCode)+String(e.OrderNumber)+String(e.Amount)+String(e.ITBIS)+String(e.ApprovedUrl)+String(e.DeclinedUrl)+String(e.CancelUrl)+String(e.UseCustomField1)+String(e.CustomField1Label)+String(e.CustomField1Value)+String(e.UseCustomField2)+String(e.CustomField2Label)+String(e.CustomField2Value)+String(p),n=new d.a("SHA-512","TEXT",{hmacKey:{value:p,format:"TEXT"}});return n.update(t),n.getHash("HEX")}(l))}),[l]);var E=c.a.useCallback((function(){fetch("".concat(n),{mode:"cors"}).then((function(e){return e.json()})).then((function(e){var t,n,s;e.hasError?(F(!0),N(!0)):(F(!0),(null===(t=e.message.value)||void 0===t?void 0:t.amount)?(n=e.message.id,s=e.message.value.amount,u(Object(i.a)(Object(i.a)({},j),{},{OrderNumber:n,ApprovedUrl:"".concat(A,"successtmp?ApprovedTemp"),CancelUrl:"".concat(A).concat(n,"?Cancelled"),DeclinedUrl:"".concat(A).concat(n,"?Declined"),Amount:m(s)})),setTimeout((function(){document.getElementById("submit").click()}),1e3)):N(!0))}),(function(e){F(!0)}))}),[n]);return Object(s.useEffect)((function(){E(),!M&&S&&setTimeout((function(){document.getElementById("submit").click()}),1e3)}),[E]),c.a.useEffect((function(){console.log("response azul is",t.ResponseMessage,t),"DECLINADA"==t.ResponseMessage&&(console.log("response message when declined",t),window.location.href="https://nateevos.com/azul-pay?response=Declined"),"TARJETA INVALIDA"==t.ResponseMessage&&(console.log("response message when declined",t),window.location.href="https://nateevos.com/azul-pay?response=Declined&AzulResponse=".concat(window.location.search))}),[t]),Object(b.jsxs)(b.Fragment,{children:[!S&&Object(b.jsx)(O,{}),M&&Object(b.jsx)(x,{}),S&&!M&&Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:"https://payments.nateevos.com/administrator/nateevos.png",className:"App-logo",alt:"logo"}),Object(b.jsx)("p",{}),Object(b.jsxs)("form",{action:"https://pagos.azul.com.do/PaymentPage/Default.aspx",method:"post",children:[Object(b.jsx)("input",{type:"hidden",id:"MerchantId",name:"MerchantId",value:l.MerchantId}),Object(b.jsx)("input",{type:"hidden",id:"TrxType",name:"TrxType",value:"HOLD"}),Object(b.jsx)("input",{type:"hidden",id:"MerchantName",name:"MerchantName",value:l.MerchantName}),Object(b.jsx)("input",{type:"hidden",id:"MerchantType",name:"MerchantType",value:l.MerchantType}),Object(b.jsx)("input",{type:"hidden",id:"CurrencyCode",name:"CurrencyCode",value:l.CurrencyCode}),Object(b.jsx)("input",{type:"hidden",id:"OrderNumber",name:"OrderNumber",value:l.OrderNumber}),Object(b.jsx)("input",{type:"hidden",id:"Amount",name:"Amount",value:l.Amount}),Object(b.jsx)("input",{type:"hidden",id:"ApprovedUrl",name:"ApprovedUrl",value:l.ApprovedUrl}),Object(b.jsx)("input",{type:"hidden",id:"DesignV2",name:"DesignV2",value:1}),Object(b.jsx)("input",{type:"hidden",id:"LogoImageUrl",name:"LogoImageUrl",value:"https://payments.nateevos.com/administrator/nateevos.png"}),Object(b.jsx)("input",{type:"hidden",id:"ProductImageUrl",name:"ProductImageUrl",value:"https://payments.nateevos.com/administrator/nateevos.png"}),Object(b.jsx)("input",{type:"hidden",id:"DeclinedUrl",name:"DeclinedUrl",value:l.DeclinedUrl}),Object(b.jsx)("input",{type:"hidden",id:"CancelUrl",name:"CancelUrl",value:l.CancelUrl}),Object(b.jsx)("input",{type:"hidden",id:"UseCustomField1",name:"UseCustomField1",value:l.UseCustomField1}),Object(b.jsx)("input",{type:"hidden",id:"UseCustomField2",name:"UseCustomField2",value:l.UseCustomField2}),Object(b.jsx)("input",{type:"hidden",id:"AuthHash",name:"AuthHash",value:f}),Object(b.jsx)("input",{type:"submit",id:"submit",value:"Enviar",style:{visibility:"hidden"}})]})]})})]})},S=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(g,{})})},F=function(){var e=C.a.parse(window.location.search);return c.a.useEffect((function(){if(console.log("response azul is",e),"DECLINADA"==e.ResponseMessage&&(console.log("response message when declined",e),window.location.href="https://nateevos.com/azul-pay?response=Declined"),"APROBADA"==e.ResponseMessage){console.log("do req");var t="".concat(I,"/").concat(e.OrderNumber);fetch("".concat(t),{mode:"cors"}).then((function(e){return e.json()})).then((function(t){console.log("r");var n=t.message.value,s={vendorId:n.data.vendorId,userId:n.data.userId,paymentMethod:"azul",typeOfReservation:n.type,amount:n.amount,reservationId:n.data.id,storageId:e.OrderNumber,paymentMethodResponse:e};console.log("dd",s),function(e){var t=new Headers;t.append("Content-Type","application/json");var n={method:"POST",headers:t,body:JSON.stringify(e),redirect:"follow"};fetch("".concat(U,"payments"),n).then((function(e){return e.text()})).then((function(e){console.log(e),window.location.href="".concat(A,"successcompleted")})).catch((function(e){return console.log("error",e)}))}(s)}),(function(e){}))}}),[e]),Object(b.jsx)("div",{children:Object(b.jsx)(O,{})})},D=function(){return Object(b.jsx)("div",{children:"Success"})};var T=function(){return Object(b.jsx)(f.a,{children:Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{exact:!0,path:"/successtmp",component:F}),Object(b.jsx)(v.a,{exact:!0,path:"/successcompleted",component:D}),Object(b.jsx)(v.a,{exact:!0,path:"/:storageId",component:w}),Object(b.jsx)(v.a,{exact:!0,path:"*",component:S})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),M()}},[[58,1,2]]]);
//# sourceMappingURL=main.9f2f1c8b.chunk.js.map