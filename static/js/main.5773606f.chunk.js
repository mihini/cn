(this.webpackJsonpsalong=this.webpackJsonpsalong||[]).push([[0],{115:function(e,a,t){e.exports=t.p+"static/media/filter.4c9473f8.svg"},116:function(e,a,t){e.exports={itemLink:"List_itemLink__1dgg-"}},119:function(e,a,t){e.exports=t.p+"static/media/clock.b29eb6b8.svg"},12:function(e,a,t){e.exports={wrapper:"SalonHeader_wrapper__33B4j",content:"SalonHeader_content__1zxSe",flex:"SalonHeader_flex__2OFHL",topIcons:"SalonHeader_topIcons__3bA_1",btn:"SalonHeader_btn__1iHiQ",like:"SalonHeader_like__3qb6P",backArrow:"SalonHeader_backArrow__3QpR3",text:"SalonHeader_text__1MXDM"}},120:function(e,a,t){e.exports=t.p+"static/media/phone.5bad3fe9.svg"},121:function(e,a,t){e.exports=t.p+"static/media/globe.2ffa8a52.svg"},122:function(e,a,t){e.exports=t.p+"static/media/pin.518eebec.svg"},125:function(e,a,t){e.exports=t(216)},15:function(e,a,t){e.exports={rating:"Rating_rating__3V7gX",stars:"Rating_stars__3lHr8",star:"Rating_star__GBijv",filled:"Rating_filled__3aoUC",small:"Rating_small__3pdXe"}},182:function(e,a,t){},183:function(e,a,t){},20:function(e,a,t){e.exports={listHeader:"ListHeader_listHeader__1IeQz",noStyleBtn:"ListHeader_noStyleBtn__lXUFk",arrow:"ListHeader_arrow__VEsgU",setting:"ListHeader_setting__1w9HI"}},216:function(e,a,t){"use strict";t.r(a);t(126);var n=t(0),r=t.n(n),i=t(111),s=t.n(i),l=(t(182),t(183),t(65)),c=t(112),o=t(113),m=t(123),p=t(114),d=t(44),u=t(124),_=t(45),f=t(8),g=t.n(f),E=t(15),v=t.n(E),w=function(e){return r.a.createElement("div",{className:v.a.rating},r.a.createElement("div",{className:v.a.stars},function(){for(var a=[],t=1;t<=5;t++)e.points<t?a.push(r.a.createElement("div",{className:"".concat(v.a.filled," ").concat(v.a.star," ").concat(e.small?v.a.small:""," "),key:"star-".concat(t)})):a.push(r.a.createElement("div",{className:"".concat(v.a.star," ").concat(e.small?v.a.small:""),key:"star-".concat(t)}));return a}()),r.a.createElement("span",null,"(".concat(e.reviews,")")))},h=t(23),N=t.n(h),k=function(e){var a=e.info;return r.a.createElement("div",{className:"".concat(g.a.listItem," container")},r.a.createElement("div",{className:g.a.wrapperAlpha},r.a.createElement("h2",{className:g.a.title},a.name),r.a.createElement(w,{reviews:a.rating.totalReviews,points:a.rating.points,small:!0}),r.a.createElement("div",{className:g.a.address},a.address.rd)),r.a.createElement("div",{className:g.a.wrapperBeta},r.a.createElement("div",null,r.a.createElement("div",{className:g.a.price},a.price," kr"),r.a.createElement("div",{className:g.a.session},a.session)),r.a.createElement("div",{className:g.a.iconWrapper},r.a.createElement("img",{className:g.a.arrow,src:N.a,alt:"right arrow"}))))},b=t(66),S=t.n(b),x=function(e){return r.a.createElement("div",{className:"".concat(S.a.filter," container--padd")},r.a.createElement("select",{className:S.a.select,onChange:e.onChange},r.a.createElement("option",{key:"option-label"},"Filtrera p\xe5 pris"),e.filterOptions.map((function(e,a){return r.a.createElement("option",{value:a,key:"option-".concat(a)},"Pris ".concat(e.min," ").concat(e.max?" - "+e.max+" kr":"kr >"))}))))},H=t(20),I=t.n(H),L=t(115),y=t.n(L),R=function(){return r.a.createElement("div",{className:"".concat(I.a.listHeader," container--padd")},r.a.createElement("button",{className:I.a.noStyleBtn},r.a.createElement("img",{className:I.a.arrow,src:N.a,alt:"arrow icon"})),r.a.createElement("h1",{className:I.a.title},"H\xe5r"),r.a.createElement("button",{className:I.a.noStyleBtn},r.a.createElement("img",{src:y.a,className:I.a.settings,alt:"setting icon"})))},O=t(116),B=t.n(O),j=[{id:1,min:250,max:499},{id:2,min:500,max:699},{id:3,min:700,max:999},{id:4,min:1e3,max:null}],F=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).filteredSalons=function(){if(t.state.filter){var e=t.state.filter,a=e.min,n=e.max;return t.props.salon.filter((function(e){if(e.price>=a&&(e.price<=n||!n))return e}))}return t.props.salon},t.state={filter:""},t.changeFilter=t.changeFilter.bind(Object(d.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"changeFilter",value:function(e){this.setState({filter:j[e.target.value]})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement(x,{filterOptions:j,value:this.state.filter,onChange:this.changeFilter}),this.filteredSalons().map((function(e,a){return r.a.createElement(_.b,{className:B.a.itemLink,key:"salon-".concat(a),to:"salon/".concat(e.id)},r.a.createElement(k,{info:e}))})))}}]),a}(n.Component),A=t(119),M=t.n(A),z=t(120),C=t.n(z),D=t(121),J=t.n(D),P=t(122),X=t.n(P),U=t(12),V=t.n(U),Q=function(e){return r.a.createElement("div",{className:V.a.wrapper},r.a.createElement("div",{className:"".concat(V.a.content," container")},r.a.createElement("div",{className:V.a.topIcons},r.a.createElement("button",{className:V.a.btn,onClick:e.goBack},r.a.createElement("span",{className:V.a.backArrow})),r.a.createElement("button",{className:V.a.btn},r.a.createElement("span",{className:V.a.like}))),r.a.createElement("div",{className:V.a.text},r.a.createElement("h1",null,e.name),r.a.createElement(w,{reviews:e.rating.totalReviews,points:e.rating.points}))))},W=t(24),Z=t.n(W),q=function(){return r.a.createElement("div",{className:Z.a.salonMenu},r.a.createElement("ul",{className:Z.a.list},r.a.createElement("li",{className:"".concat(Z.a.item," ").concat(Z.a.selected)},"Info"),r.a.createElement("li",{className:Z.a.item},"Schema")))},G=t(9),K=t.n(G),T=(t(188),function(e){var a=function(e){var a=e.match.params.id;return e.salon.find((function(e){return e.id==a}))}(e),t=a.address,n=a.name,i=a.phone,s=a.url,l=a.info,c=a.rating;return r.a.createElement("div",{className:K.a.salon},r.a.createElement(Q,{name:n,goBack:function(){e.history.goBack()},rating:c}),r.a.createElement(q,null),r.a.createElement("div",{className:"".concat(K.a.info," container")},r.a.createElement("div",{className:K.a.infoItem},r.a.createElement("img",{src:X.a,alt:"pin address icon"}),r.a.createElement("span",null," ","".concat(t.rd,", ").concat(t.zip))),r.a.createElement("div",{className:K.a.infoItem},r.a.createElement("img",{src:M.a,alt:"time icon"}),r.a.createElement("span",null,"\xd6ppet till ",function(e){var a=new Date;return 6===a.getDay()||0===a.getDay()?e.openingHour.weekend:e.openingHour.weekday}(a)," idag"),r.a.createElement("img",{className:K.a.drop,src:N.a,alt:"dropdown"})),r.a.createElement("div",{className:K.a.infoItem},r.a.createElement("img",{src:C.a,alt:"phone icon"}),r.a.createElement("a",{href:"tel:".concat(i)},i)),r.a.createElement("div",{className:K.a.infoItem},r.a.createElement("img",{src:J.a,alt:"globe icon"}),r.a.createElement("a",{href:s},s)),r.a.createElement("div",{className:"".concat(K.a.infoItem," ").concat(K.a.last)},r.a.createElement("p",null,l))))}),Y=t(14),$=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(_.a,{basename:"/"},r.a.createElement(Y.c,null,r.a.createElement(Y.a,{path:"/salon/:id",render:function(e){return r.a.createElement(T,Object.assign({},e,{salon:l}))}}),r.a.createElement(Y.a,{path:"/",render:function(e){return r.a.createElement(F,Object.assign({},e,{salon:l}))}}))))};s.a.render(r.a.createElement($,null),document.getElementById("root"))},23:function(e,a,t){e.exports=t.p+"static/media/arrow.1b46a122.svg"},24:function(e,a,t){e.exports={salonMenu:"SalonMenu_salonMenu__1mAZV",list:"SalonMenu_list__FFH5u",item:"SalonMenu_item__1HqvO",selected:"SalonMenu_selected__3dpRD"}},65:function(e){e.exports=JSON.parse('[{"id":1,"name":"Sax & F\xf6n","address":{"rd":"R\xe5dmansgatan 46","zip":"113 57 Stockholm"},"session":"30 min","price":320,"rating":{"points":3,"totalReviews":54},"openingHour":{"weekday":"19:00","weekend":"16:00"},"phone":"08-12345567","url":"www.salongweb.se","info":"Lorem ipsum"},{"id":2,"name":"Saxis","address":{"rd":"R\xe5dmansgatan 26","zip":"113 57 Stockholm"},"session":"30 min","price":320,"rating":{"points":4,"totalReviews":32},"openingHour":{"weekday":"19:00","weekend":"16:00"},"phone":"08-12345567","url":"www.google.se","info":"Lorem ipsum"},{"id":3,"name":"hihi","address":{"rd":"R\xe5dmansgatan 26","zip":"113 57 Stockholm"},"session":"30 min","price":700,"rating":{"points":5,"totalReviews":32},"openingHour":{"weekday":"19:00","weekend":"16:00"},"phone":"08-12345567","url":"www.google.se","info":"Lorem ipsum"},{"id":4,"name":"hii","address":{"rd":"R\xe5dmansgatan 26","zip":"113 57 Stockholm"},"session":"30 min","price":1200,"rating":{"points":5,"totalReviews":32},"openingHour":{"weekday":"19:00","weekend":"16:00"},"phone":"08-12345567","url":"www.google.se","info":"Lorem ipsum"}]')},66:function(e,a,t){e.exports={filter:"Filter_filter__35l_Z",select:"Filter_select__2XKu3"}},8:function(e,a,t){e.exports={listItem:"ListItem_listItem__3EZsG",wrapperAlpha:"ListItem_wrapperAlpha__3P8Ej",wrapperBeta:"ListItem_wrapperBeta__2jTgJ",title:"ListItem_title__-LaAP",address:"ListItem_address__28U-l",price:"ListItem_price__23bPd",session:"ListItem_session__DvOJc",iconWrapper:"ListItem_iconWrapper__1oVt2",arrow:"ListItem_arrow__mhcen"}},9:function(e,a,t){e.exports={salon:"Salon_salon__2l-fj",infoItem:"Salon_infoItem__2-gEi",last:"Salon_last__1Kd5g",drop:"Salon_drop__O6Bik"}}},[[125,1,2]]]);
//# sourceMappingURL=main.5773606f.chunk.js.map