(this["webpackJsonpreact-homeworks"]=this["webpackJsonpreact-homeworks"]||[]).push([[0],{10:function(e,t,n){e.exports={affair:"Affairs_affair__kbGfs",active:"Affairs_active__RO1Yc",button:"Affairs_button__1bvqV",item:"Affairs_item__2_EFJ"}},13:function(e,t,n){e.exports={link:"Header_link__3YYI5",active:"Header_active__1X0HJ",block:"Header_block__1106B",header:"Header_header__3KC-P"}},15:function(e,t,n){e.exports={post:"Message_post__1t2ti",ava:"Message_ava__1A5Em",angel:"Message_angel__32nJY",text:"Message_text__1L0bu",name:"Message_name__1Vw1a",message:"Message_message__2zkt9",time:"Message_time__1pm4q"}},18:function(e,t,n){e.exports={greeting:"Greeting_greeting__3feUL",error:"Greeting_error__2jVO-",input:"Greeting_input__3I3xk",errorInput:"Greeting_errorInput__1DIgH",button:"Greeting_button__lUYi9",count:"Greeting_count__baPyx"}},22:function(e,t,n){e.exports={input:"SuperInputText_input__IXpFC",superInput:"SuperInputText_superInput__3rqoo",errorInput:"SuperInputText_errorInput__bTnbO",error:"SuperInputText_error__3vo3_"}},27:function(e,t,n){e.exports={default:"SuperButton_default__2sR_O",red:"SuperButton_red__-np1i",button:"SuperButton_button__2eRRG",blink:"SuperButton_blink__UIhUx"}},29:function(e,t,n){e.exports={blue:"HW4_blue__3mOnl",column:"HW4_column__1Bab2",testSpanError:"HW4_testSpanError__WxhfD"}},30:function(e,t,n){e.exports={label:"SuperCheckbox_label__3jEBV",checkbox:"SuperCheckbox_checkbox__3I4jk",spanClassName:"SuperCheckbox_spanClassName__2c86A"}},31:function(e,t,n){e.exports={select:"SuperSelect_select__2X9tW",option:"SuperSelect_option__1GioS"}},33:function(e,t,n){e.exports={dark:"HW12_dark__1wHIY","dark-text":"HW12_dark-text__IEB1c",red:"HW12_red__2Zq6g","red-text":"HW12_red-text__uFVfl",some:"HW12_some__2AGo8","some-text":"HW12_some-text__3xKBr"}},46:function(e,t,n){e.exports={App:"App_App__1JE5x"}},47:function(e,t,n){e.exports={span:"SuperEditableSpan_span__3nsuz"}},48:function(e,t,n){e.exports={radio:"SuperRadio_radio__3jXtP",label:"SuperRadio_label__1Mkna"}},49:function(e,t,n){e.exports={item:"HW8_item__1Pdzt"}},50:function(e,t,n){e.exports={range:"SuperRange_range__1hMM6"}},56:function(e,t,n){e.exports={wrapperHW13:"Request_wrapperHW13__eLQZb"}},63:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),s=n.n(r),i=(n(63),n(46)),o=n.n(i),j=n(17),l=n(4),u=n(15),b=n.n(u),d=n(0);var O=function(e){return Object(d.jsxs)("div",{className:b.a.post,children:[Object(d.jsx)("img",{className:b.a.ava,src:e.avatar,alt:"avatar"}),Object(d.jsx)("div",{className:b.a.angel}),Object(d.jsxs)("div",{className:b.a.text,children:[Object(d.jsx)("div",{className:b.a.name,children:e.name}),Object(d.jsx)("div",{className:b.a.message,children:e.message}),Object(d.jsx)("div",{className:b.a.time,children:e.time})]})]})},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Some Name",p="some text",m="22:00";var f=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(O,{avatar:h,name:x,message:p,time:m}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},v=n(2),_=n(10),g=n.n(_);var k=function(e){return Object(d.jsxs)("div",{className:g.a.affair,children:[Object(d.jsx)("div",{className:g.a.item,children:e.affair.name}),Object(d.jsxs)("div",{className:g.a.item,children:["[",e.affair.priority,"]"]}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:g.a.item+" "+g.a.button,children:"X"})]})};var C=function(e){var t=e.data.map((function(t){return Object(d.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{className:"all"===e.filter?g.a.active:"",onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{className:"high"===e.filter?g.a.active:"",onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{className:"middle"===e.filter?g.a.active:"",onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{className:"low"===e.filter?g.a.active:"",onClick:function(){e.setFilter("low")},children:"Low"})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(a.useState)(N),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(v.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):[]}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(C,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},y=n(26),w=n(18),I=n.n(w),H=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.onEnter,r=e.error,s=e.totalUsers,i=r?I.a.errorInput:I.a.input;return Object(d.jsxs)("div",{className:I.a.greeting,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:i,onKeyDown:c,onBlur:n}),Object(d.jsx)("div",{className:I.a.error,children:r})]}),Object(d.jsx)("button",{className:I.a.button,onClick:a,disabled:!t,children:"add"}),Object(d.jsx)("div",{className:I.a.count,children:s})]})},A=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(v.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(v.a)(o,2),l=j[0],u=j[1],b=function(){n(s),alert("Hello  ".concat(s,"!")),i("")},O=t.length;return Object(d.jsx)(H,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),l&&u("")):(s&&i(""),u("name is require!"))},addUser:b,onEnter:function(e){"Enter"===e.key&&s&&b()},error:l,totalUsers:O})},E=n(101);var T=function(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(A,{users:n,addUserCallback:function(e){var t={_id:Object(E.a)(),name:e};c([t].concat(Object(y.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},G=n(3),W=n(5),L=n(22),B=n.n(L),F=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(B.a.error," ").concat(i||""),l="".concat(B.a.input," ").concat(r?B.a.errorInput:B.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(G.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(d.jsx)("span",{className:j,children:r})]})},R=n(29),M=n.n(R),P=n(27),D=n.n(P),U=function(e){var t=e.red,n=e.className,a=Object(W.a)(e,["red","className"]),c="".concat(D.a.button," ").concat(t?D.a.red:D.a.default," ").concat(n);return Object(d.jsx)("button",Object(G.a)({className:c},a))},J=n(30),V=n.n(J),q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(V.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(G.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(d.jsx)("span",{className:V.a.spanClassName,children:c})]})};var Y=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(v.a)(i,2),j=o[0],l=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:M.a.column,children:[Object(d.jsx)(F,{value:n,onChangeText:c,onEnter:s,error:r}),Object(d.jsx)(F,{className:M.a.blue}),Object(d.jsx)(U,{children:"default"}),Object(d.jsx)(U,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(U,{disabled:!0,children:"disabled"}),Object(d.jsx)(q,{checked:j,onChangeChecked:l,children:"some text "}),Object(d.jsx)(q,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},K=n(47),X=n.n(K),z=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(W.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(v.a)(s,2),o=i[0],j=i[1],l=c||{},u=l.children,b=l.onDoubleClick,O=l.className,h=Object(W.a)(l,["children","onDoubleClick","className"]),x="".concat(X.a.span," ").concat(O||"");return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(F,Object(G.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(d.jsx)("span",Object(G.a)(Object(G.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},h),{},{children:u||r.value}))})};function Z(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function Q(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}Z("test",{x:"A",y:1});Q("test",{x:"",y:0});var $=function(){var e=Object(a.useState)(""),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(z,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(U,{onClick:function(){Z("editable-span-value",n)},children:"save"}),Object(d.jsx)(U,{onClick:function(){c(Q("editable-span-value",""))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ee=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)(S,{}),Object(d.jsx)(T,{}),Object(d.jsx)(Y,{}),Object(d.jsx)($,{})]})};var te=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ne=n(14),ae={isLoading:!1},ce=function(e){return{type:"CHANGE_LOADING",isLoading:e}};var re=function(){var e=Object(ne.c)((function(e){return e.loading.isLoading})),t=Object(ne.b)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 10",e?Object(d.jsx)("div",{children:"\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430..."}):Object(d.jsx)("div",{children:Object(d.jsx)(U,{onClick:function(){t(ce(!0)),setTimeout((function(){t(ce(!1))}),1500),console.log("loading...")},children:"set loading..."})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},se=n(31),ie=n.n(se),oe=function(e){var t=e.options,n=e.className,a=e.onChange,c=e.onChangeOption,r=Object(W.a)(e,["options","className","onChange","onChangeOption"]),s=t?t.map((function(e,t){return Object(d.jsx)("option",{className:ie.a.option,value:e,children:e},e+"-"+t)})):[],i=ie.a.select+(n?" "+n:"");return Object(d.jsx)("select",Object(G.a)(Object(G.a)({className:i,onChange:function(e){a&&a(e),c&&c(e.currentTarget.value)}},r),{},{children:s}))},je=n(48),le=n.n(je),ue=function(e){e.type;var t=e.name,n=(e.className,e.options),a=e.value,c=e.onChange,r=e.onChangeOption,s=Object(W.a)(e,["type","name","className","options","value","onChange","onChangeOption"]),i=function(e){c&&c(e),r&&r(e.currentTarget.value)},o=le.a.radio,j=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(G.a)({type:"radio",className:o,name:t,checked:e===a,value:e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:j})},be=["x","y","z"];var de=function(){var e=Object(a.useState)(be[1]),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(oe,{options:be,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(ue,{name:"radio",options:be,value:n,onChangeOption:c})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Oe=function(e,t){switch(t.type){case"sort":var n=Object(y.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},he=n(49),xe=n.n(he),pe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var me=function(){var e=Object(a.useState)(pe),t=Object(v.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(d.jsxs)("div",{className:xe.a.item,children:[Object(d.jsx)("span",{children:e.name}),e.age]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",r,Object(d.jsxs)("div",{children:[Object(d.jsx)(U,{onClick:function(){return c(Oe(pe,{type:"sort",payload:"up"}))},children:"sort up"}),Object(d.jsx)(U,{onClick:function(){return c(Oe(pe,{type:"sort",payload:"down"}))},children:"sort down"}),Object(d.jsx)(U,{onClick:function(){return c(Oe(pe,{type:"check",payload:18}))},children:"check 18"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var fe=function(){var e=Object(a.useState)(0),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(v.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(!1),l=Object(v.a)(j,2),u=l[0],b=l[1],O=function(){clearInterval(n)},h=(null===i||void 0===i?void 0:i.toLocaleTimeString())||Object(d.jsx)("br",{}),x=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(d.jsx)("br",{});return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:h}),u?Object(d.jsx)("div",{children:x}):Object(d.jsx)("br",{}),Object(d.jsx)(U,{onClick:function(){O();var e=+setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(d.jsx)(U,{onClick:O,children:"stop"})]})};var ve=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(fe,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},_e=n(50),ge=n.n(_e),ke=function(e){e.type,e.onChange,e.onChangeRange;var t=e.className,n=e.value,a=e.setValue1,c=Object(W.a)(e,["type","onChange","onChangeRange","className","value","setValue1"]),r="".concat(ge.a.range," ").concat(t||"");return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",Object(G.a)({type:"range",onChange:function(e){a&&a(+e.currentTarget.value)},className:r,value:n},c))})},Ce=n(100),Ne=function(e){var t=e.onChangeRange,n=e.value;return Object(d.jsx)(Ce.a,{value:n,onChange:function(e,n){t&&t(n)},valueLabelDisplay:"auto","aria-labelledby":"range-slider"})};var Se=function(){var e=Object(a.useState)(10),t=Object(v.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(100),s=Object(v.a)(r,2),i=s[0],o=s[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 11",Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:n}),Object(d.jsx)(ke,{value:n,setValue1:c})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:n}),Object(d.jsx)(Ne,{value:[n,i],onChangeRange:function(e){c(e[0]),o(e[1])}}),Object(d.jsx)("span",{children:i})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ye=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(de,{}),Object(d.jsx)(me,{}),Object(d.jsx)(ve,{}),Object(d.jsx)(re,{}),Object(d.jsx)(Se,{})]})},we=n(33),Ie=n.n(we),He={color:"some",themes:["dark","red","some","dark-text","red-text","some-text"]},Ae=["dark","red","some","dark-text","red-text","some-text"];var Ee=function(){var e=Object(ne.c)((function(e){return e.themes.color})),t=Object(ne.b)();return Object(d.jsxs)("div",{className:Ie.a[e],children:[Object(d.jsx)("hr",{}),Object(d.jsx)("span",{className:Ie.a[e+"-text"],children:"homeworks 12"}),Object(d.jsx)(oe,{title:"color",onChangeOption:function(e){t(function(e){return{type:"CHANGING-COLOR",color:e}}(e))},options:Ae}),Object(d.jsx)("hr",{})]})},Te=n(55),Ge=n.n(Te),We=function(){var e=c.a.useState(""),t=Object(v.a)(e,2),n=t[0],r=t[1],s=c.a.useState(""),i=Object(v.a)(s,2),o=i[0],j=i[1],l=c.a.useState(!1),u=Object(v.a)(l,2),b=u[0],O=u[1];Object(a.useEffect)((function(){var e;(e=b,Ge.a.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:e})).then((function(e){return r(e.data.errorText)})).catch((function(e){j(e.response?e.response.data.errorText:e.message)}))}));var h=function(){return O(!b)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",checked:b,onChange:h}),Object(d.jsx)("button",{onClick:h,children:"Press me"}),Object(d.jsx)("h4",{children:b?n:o})]})},Le=n(56),Be=n.n(Le),Fe=function(){return Object(d.jsx)("div",{className:Be.a.wrapperHW13,children:Object(d.jsx)(We,{})})};var Re=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(Ee,{}),Object(d.jsx)(Fe,{})]})},Me="/pre-junior",Pe="/junior",De="/junior-plus";var Ue=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(l.a,{to:Me})}}),Object(d.jsx)(l.b,{path:Me,render:function(){return Object(d.jsx)(ee,{})}}),Object(d.jsx)(l.b,{path:Pe,render:function(){return Object(d.jsx)(ye,{})}}),Object(d.jsx)(l.b,{path:De,render:function(){return Object(d.jsx)(Re,{})}}),"// add routes",Object(d.jsx)(l.b,{render:function(){return Object(d.jsx)(te,{})}})]})})},Je=n(13),Ve=n.n(Je);var qe=function(){return Object(d.jsxs)("div",{className:Ve.a.header,children:[Object(d.jsx)(j.b,{to:Me,className:Ve.a.link,activeClassName:Ve.a.active,children:" pre-junior "}),Object(d.jsx)(j.b,{to:Pe,className:Ve.a.link,activeClassName:Ve.a.active,children:" junior "}),Object(d.jsx)(j.b,{to:De,className:Ve.a.link,activeClassName:Ve.a.active,children:" junior-plus "}),Object(d.jsx)("div",{className:Ve.a.block})]})};var Ye=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(qe,{}),Object(d.jsx)(Ue,{})]})})};var Ke=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(Ye,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Xe=n(36),ze=Object(Xe.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_LOADING":return Object(G.a)(Object(G.a)({},e),{},{isLoading:t.isLoading});default:return e}},themes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGING-COLOR":return Object(G.a)(Object(G.a)({},e),{},{color:t.color});default:return e}}}),Ze=Object(Xe.b)(ze),Qe=Ze;window.store=Ze,s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(ne.a,{store:Qe,children:Object(d.jsx)(Ke,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[88,1,2]]]);
//# sourceMappingURL=main.b8196b54.chunk.js.map