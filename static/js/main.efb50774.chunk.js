(this.webpackJsonphappay=this.webpackJsonphappay||[]).push([[0],{18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),r=a(8),n=a.n(r),i=(a(18),a(19),a(20),a(4)),o=Object(c.createContext)(),d=a(9),j=a(10),l=a(1),m=function(){var e=Object(c.useContext)(o).cartItems;return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("img",{className:"logo",src:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg",alt:"logoimage"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(d.a,{className:"cart"}),e.length>0&&Object(l.jsx)("div",{className:"item_count",children:Object(l.jsx)("span",{children:e.length})}),Object(l.jsx)(j.a,{className:"person"})]})]})},p=a(12),u=[{id:1,name:"food card",description:"This card is used for spending on Food merchants",final_price:21,original_price:30,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png"},{id:2,name:"travel card",description:"This card is used for spending on Travel and hotel bookings",final_price:20,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png"},{id:3,name:"epic card",description:"Use this card and get benefits on every transaction",final_price:40,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png"},{id:4,name:"happay premium card",description:"Use this card and get benefits on every transaction",final_price:40,img_url:"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png"}],h=a(24),b=function(e){var t=e.cards,a=Object(c.useContext)(o),s=a.addToCart;a.cartItems;return Object(l.jsx)("div",{className:"cards",children:t.map((function(e){e.id;var t=e.name,a=e.description,c=e.final_price,r=(e.orginal_price,e.img_url);return Object(l.jsxs)("div",{className:"containercards",children:[Object(l.jsx)("img",{className:"cardsimage",src:r,alt:"cards"}),Object(l.jsxs)("p",{children:[t," ",Object(l.jsxs)("span",{children:["$",c]})]}),Object(l.jsx)("p",{children:a}),Object(l.jsx)(h.a,{onClick:function(){return s(e)},variant:"outline-primary",children:Object(l.jsx)("span",{children:"Add to cart"})})," "]})}))})},O=function(){var e=Object(c.useState)(u),t=Object(i.a)(e,2),a=t[0];t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{}),Object(l.jsxs)("div",{className:"popular",children:[Object(l.jsx)("p",{className:"strong",children:Object(l.jsx)("strong",{children:"Most Popular"})}),Object(l.jsxs)("div",{className:"star",children:[" ",Object(l.jsx)(p.a,{className:"staroutline"})]})]}),Object(l.jsx)(b,{cards:a})]})};var g=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(O,{})})},x=a(13),f=a(3),v="SHOW_HIDE_CART",_="ADD_TO_CART",y="REMOVE_ITEM",w=function(e,t){switch(t.type){case v:return Object(f.a)(Object(f.a)({},e),{},{showCart:!e.showCart});case _:return Object(f.a)(Object(f.a)({},e),{},{cartItems:[].concat(Object(x.a)(e.cartItems),[t.payload])});case y:return Object(f.a)(Object(f.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload}))});default:return e}},C=function(e){var t=e.children,a=Object(c.useReducer)(w,{showCart:!1,cartItems:[]}),s=Object(i.a)(a,2),r=s[0],n=s[1];return Object(l.jsx)(o.Provider,{value:{showCart:r.showCart,cartItems:r.cartItems,addToCart:function(e){n({type:_,payload:e})},showHideCart:function(){n({type:v})},removeItem:function(e){return[n({type:y,payload:e})]}},children:t})};n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(C,{children:Object(l.jsx)(g,{})})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.efb50774.chunk.js.map