(this.webpackJsonpcolor_organizer=this.webpackJsonpcolor_organizer||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(12),i=n.n(r),a=(n(18),n(2)),l=n(7),u=n(3),s=n(9),d=(n(19),n(6)),j=n(0),b=function(e){var t=e.selected,n=void 0!==t&&t,o=e.onSelect,c=void 0===o?function(e){return console.log("kkk")}:o;return Object(j.jsx)(d.a,{color:n?"red":"grey",onClick:c})};function f(e){var t,n=e.totalStars,o=void 0===n?5:n,c=e.selectedStars,r=void 0===c?0:c,i=e.onRate,a=void 0===i?function(e){return e}:i;return Object(j.jsxs)(j.Fragment,{children:[(t=o,Object(l.a)(Array(t))).map((function(e,t){return Object(j.jsx)(b,{selected:r>t,onSelect:function(){return a(t+1)}},t)})),Object(j.jsxs)("p",{children:[r," of ",o," stars"]})]})}function O(e){var t=e.id,n=e.title,o=e.color,c=e.rating,r=e.onRemove,i=void 0===r?function(e){return e}:r,a=e.onRate,l=void 0===a?function(e){return e}:a;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:n}),Object(j.jsx)("button",{onClick:function(){return i(t)},children:Object(j.jsx)(d.b,{})}),Object(j.jsx)("div",{style:{height:50,background:o}}),Object(j.jsx)(f,{selectedStars:c,onRate:function(e){return l(t,e)}})]})}function v(e){var t=e.colors,n=void 0===t?[]:t,o=e.onRemoveColor,c=void 0===o?function(e){return e}:o,r=e.onRateColor,i=void 0===r?function(e){return e}:r;return n.length?Object(j.jsx)("div",{className:"color-list",children:n.map((function(e){return Object(j.jsx)(O,Object(a.a)(Object(a.a)({},e),{},{onRemove:c,onRate:i}),e.id)}))}):Object(j.jsx)("div",{children:"NO colors Listed. (Add a color) "})}var g=function(e){var t=Object(o.useState)(e),n=Object(u.a)(t,2),c=n[0],r=n[1];return[{value:c,onChange:function(e){return r(e.target.value)}},function(){return r(e)}]};function x(e){var t=e.onNewColor,n=void 0===t?function(e){return e}:t,o=g(""),c=Object(u.a)(o,2),r=c[0],i=c[1],l=g("#000000"),s=Object(u.a)(l,2),d=s[0],b=s[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(r.value,d.value),i(),b()},children:[Object(j.jsx)("input",Object(a.a)(Object(a.a)({},r),{},{type:"text",placeholder:"color title...",required:!0})),Object(j.jsx)("input",Object(a.a)(Object(a.a)({},d),{},{type:"color",required:!0})),Object(j.jsx)("button",{children:"Add"})]})}var h=n(13);var p=function(){console.log(s);var e=Object(o.useState)(s),t=Object(u.a)(e,2),n=t[0],c=t[1];return console.log("Colors"),console.log(n),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{onNewColor:function(e,t){var o=[].concat(Object(l.a)(n),[{id:Object(h.v4)(),rating:0,title:e,color:t}]);c(o)}}),Object(j.jsx)(v,{colors:n,onRateColor:function(e,t){var o=n.map((function(n){return n.id===e?Object(a.a)(Object(a.a)({},n),{},{rating:t}):n}));console.log("nnnn"),console.log(o),c(o),console.log("yy"),console.log(o),console.log("JJ")},onRemoveColor:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),m()},9:function(e){e.exports=JSON.parse('[{"id":"0175d1f0-a8c6-41bf-8d02-df5734d829a4","title":"ocean at dusk","color":"#00c4e2","rating":5},{"id":"83c7ba2f-7392-4d7d-9e23-35adbe186046","title":"lawn","color":"#26ac56","rating":3},{"id":"a11e3995-b0bd-4d58-8c48-5e49ae7f7f23","title":"bright red","color":"#ff0000","rating":0}]')}},[[23,1,2]]]);
//# sourceMappingURL=main.543e4937.chunk.js.map