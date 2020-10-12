(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{157:function(e,t,n){e.exports=n(304)},162:function(e,t,n){},304:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(9),l=n.n(c),i=(n(162),n(14)),u=n(144),s=n(337),m=n(349),d=n(11),h=n(64),f=n(7),p=n(6),v=n(345),b=n(350),g=n(344),y=n(342),E=n(343),C=n(341),O=n(46),x=n.n(O),j=n(135),k=n.n(j),T=n(136),S=n.n(T),B=n(137),I=n.n(B),w=n(72),N=n(17),M=n(138),R=n(32),A=n(139),L="PAWN",P="KNIGHT",D="BISHOP",H="ROOK",W="QUEEN",K="KING",G="WHITE",U="BLACK",J="AUTOPLAY",_="COMPUTER",z="TWO_PLAYERS",Y="/computer-game",F="/2-player-game",Q=Object(s.a)((function(e){return{root:function(e){return{zIndex:e.isDragging?2:1,height:"100%",position:"absolute",display:"grid",placeItems:"center"}},icon:{width:"70% !important",height:"70%",stroke:"black",strokeWidth:15}}})),X=(a={},Object(N.a)(a,L,R.d),Object(N.a)(a,D,R.a),Object(N.a)(a,P,R.c),Object(N.a)(a,H,R.f),Object(N.a)(a,W,R.e),Object(N.a)(a,K,R.b),a);var q=function(e){var t=e.piece,n=e.canInteract,a=Object(r.useState)(!1),c=Object(i.a)(a,2),l=c[0],u=c[1],s=Q({isDragging:l}),m=Object(d.d)();return o.a.createElement(d.a,null,t&&o.a.createElement(d.c.div,{key:t.id,layoutId:t.id,className:s.root,style:{color:null===t||void 0===t?void 0:t.color,pointerEvents:l?"none":"auto"},animate:{scale:A.isMobile&&l?2:1},exit:{opacity:0,scale:0,transition:{duration:.3}},transition:{type:"spring",stiffness:1e3,damping:65},onPointerDown:function(e){return m.start(e,{cursorProgress:{y:.5,x:.5}})},drag:n,onDragStart:function(){return u(!0)},onDragEnd:function(){return u(!1)},dragControls:m,dragElastic:1,dragMomentum:!1,dragConstraints:{top:0,left:0,right:0,bottom:0},dragTransition:{bounceStiffness:900,bounceDamping:55}},o.a.createElement(M.a,{icon:X[t.name],className:s.icon})))},V=Object(s.a)((function(e){return{root:function(e){var t=e.canInteract,n=e.isMove,a=e.hasPiece;return{cursor:t&&(a||n)?"pointer":"auto",position:"relative",webkitTouchCallout:"none",webkitUserSelect:"none",khtmlUserSelect:"none",mozUserSelect:"none",msUserSelect:"none",userSelect:"none","-webkit-tap-highlight-color":"transparent"}},dot:{position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",height:"35%",width:"35%",backgroundColor:"rgba(0, 0, 0, 0.3)",borderRadius:"50%",display:"inline-block"}}}));var Z=function(e){var t=e.piece,n=e.playerColor,a=e.position,r=e.backgroundColor,c=e.isSelected,l=e.isChecked,i=e.isMove,u=e.onClick,s=i||null===t||t.color===n,m=Object(d.d)(),h=V({canInteract:s,isMove:i,hasPiece:null!==t}),f=w.Color.mix(Object(w.Color)(r),Object(w.Color)("#ff0"))(.4);return o.a.createElement(d.c.div,{className:h.root,onPointerDown:s?function(){!c&&!i&&u(a)}:null,onMouseUp:s?function(){i&&u(a)}:null,onTouchEnd:s?function(e){e.preventDefault(),e.stopPropagation(),u(null,e.changedTouches[0])}:null,initial:!1,animate:{backgroundColor:c?f:l?"#ff7961":r,transition:{duration:.13}}},o.a.createElement(d.c.div,{className:h.dot,initial:{scale:0},animate:{scale:i?1:0,transition:{duration:.2}}}),o.a.createElement(q,{piece:t,canInteract:s&&!i,dragControls:m}))};var $=n(140),ee=n.n($),te=n(97),ne=n.n(te);function ae(){return ne()(8,(function(e){return ne()(8,(function(t){var n=function(e,t){if(1===e||6===e)return L;if(0===e||7===e)switch(t){case 0:case 7:return H;case 1:case 6:return P;case 2:case 5:return D;case 3:return W;case 4:return K}return null}(e,t),a=function(e){switch(e){case 0:case 1:return U;case 6:case 7:return G;default:return null}}(e),r=ee()("piece_");return n?{name:n,color:a,id:r,moves:[]}:null}))}))}var re=n(73),oe=n(49),ce=n.n(oe),le=n(98),ie=n.n(le);function ue(e,t,n){var a=e.y,r=e.x,o=t.y,c=t.x,l=ce()(n),i=l[a][r];l[o][c]=ce()(Object(re.a)({},i,{moves:i.moves.concat(t)})),l[a][r]=null;var u=i.color===G?0:n.length-1;if(i.name===L&&o===u&&(l[o][c].name=W),i.name===K&&1===l[o][c].moves.length){var s=ie()(t,{y:o,x:2}),m=ie()(t,{y:o,x:6});s?(l[o][3]=ce()(Object(re.a)({},l[o][0],{moves:i.moves.concat(t)})),l[o][0]=null):m&&(l[o][5]=ce()(Object(re.a)({},l[o][7],{moves:i.moves.concat(t)})),l[o][7]=null)}return l}var se=n(34),me=n.n(se);var de=n(36),he=n.n(de);function fe(e,t,n){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1/0,r=e.y,o=e.x,c=n[r][o],l=t.y,i=t.x,u=[],s=1;u.length<a;s++){var m=r+l*s,d=o+i*s;if(!he()(m,n.length)||!he()(d,n[0].length))break;var h=n[m][d];if(h){h.color!==c.color&&u.push({y:m,x:d});break}u.push({y:m,x:d})}return u}function pe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return[].concat(Object(p.a)(fe(e,{y:-1,x:-1},t,n)),Object(p.a)(fe(e,{y:-1,x:1},t,n)),Object(p.a)(fe(e,{y:1,x:-1},t,n)),Object(p.a)(fe(e,{y:1,x:1},t,n)))}function ve(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return[].concat(Object(p.a)(fe(e,{y:-1,x:0},t,n)),Object(p.a)(fe(e,{y:0,x:-1},t,n)),Object(p.a)(fe(e,{y:0,x:1},t,n)),Object(p.a)(fe(e,{y:1,x:0},t,n)))}function be(e,t){for(var n=function(e,t){for(var n=0;n<t.length;n++)for(var a=t[n],r=0;r<a.length;r++){var o=a[r];if(o&&e(o))return{y:n,x:r}}return null}((function(t){return t.color===e&&t.name===K}),t),a=0;a<t.length;a++)for(var r=t[a],o=0;o<r.length;o++){var c=r[o];if(c&&c.color!==e){var l=c.name===K?[].concat(Object(p.a)(ve({y:a,x:o},t,1)),Object(p.a)(pe({y:a,x:o},t,1))):ge({y:a,x:o},t);if(x()(l,n))return!0}}return!1}function ge(e,t){var n=e.x,a=t[e.y][n];if(null===a)return[];switch(a.name){case L:return function(e,t){var n=e.x,a=e.y,r=t[a][n],o=[],c=r.color===G?-1:1,l=me()(t,"".concat(a+c,"[").concat(n,"]")),i=me()(t,"".concat(a+2*c,"[").concat(n,"]")),u=me()(t,"".concat(a+c,"[").concat(n-1,"]")),s=me()(t,"".concat(a+c,"[").concat(n+1,"]")),m=r.color===G?6===a:1===a;return null===l&&o.push({y:a+c,x:n}),null===l&&null===i&&m&&o.push({y:a+2*c,x:n}),u&&u.color!==r.color&&o.push({y:a+c,x:n-1}),s&&s.color!==r.color&&o.push({y:a+c,x:n+1}),o}(e,t);case P:return function(e,t){var n=e.x,a=e.y,r=t[a][n];return[{y:a-2,x:n-1},{y:a-2,x:n+1},{y:a-1,x:n+2},{y:a+1,x:n+2},{y:a+2,x:n+1},{y:a+2,x:n-1},{y:a+1,x:n-2},{y:a-1,x:n-2}].filter((function(e){var n=e.y,a=e.x;return he()(n,t.length)&&he()(a,t[0].length)&&(null===t[n][a]||t[n][a].color!==r.color)}))}(e,t);case D:return pe(e,t);case H:return ve(e,t);case W:return[].concat(Object(p.a)(pe(e,t)),Object(p.a)(ve(e,t)));case K:return function(e,t){var n=e.y,a=e.x,r=t[n][a],o=r.moves.length>0,c=be(r.color,t),l=[].concat(Object(p.a)(ve(e,t,1)),Object(p.a)(pe(e,t,1)));return o||c||[{rook:t[n][0],move:{y:n,x:a-2},path:{y:n,x:a-1}},{rook:t[n][7],move:{y:n,x:a+2},path:{y:n,x:a+1}}].forEach((function(n){var a=n.rook,o=n.move,c=n.path;if(null!==a&&!(a.moves.length>0)){var i=t[o.y][o.x],u=t[c.y][c.x],s=ue(e,c,t);!be(r.color,s)&&null===u&&null===i&&l.push(o)}})),l}(e,t);default:return}}function ye(e,t){return function(e,t,n){var a=t.y,r=t.x,o=n[a][r];return e.filter((function(e){var t=e.y,c=e.x,l=ue({y:a,x:r},{y:t,x:c},n);return!be(o.color,l)}))}(ge(e,t),e,t)}function Ee(e,t){return t.flatMap((function(t,n){return t.flatMap((function(t,a){return t&&t.color===e?{y:n,x:a}:[]}))})).flatMap((function(e){return ye(e,t).map((function(t){return{position:e,move:t}}))}))}var Ce=Object(s.a)((function(e){return{root:function(e){var t=e.isComputerRound,n=e.chessBoardTheme;return{height:"100%",pointerEvents:t?"none":"auto",display:"grid",placeContent:"center",gridTemplateRows:"repeat(8, 1fr)",gridTemplateColumns:"repeat(8, 1fr)",borderRadius:9,border:"3px ".concat(n.BLACK," solid"),backgroundColor:n.BLACK,boxShadow:"0 8px 8px -6px rgba(0, 0, 0, 0.25)","& > :first-child":{borderTopLeftRadius:7},"& > :nth-child(8)":{borderTopRightRadius:7},"& > :nth-last-child(8)":{borderBottomLeftRadius:7},"& > :last-child":{borderBottomRightRadius:7}}},dialog:{minWidth:180}}}));var Oe=function(e){var t=e.chessBoardTheme,n=e.chessBoardType,a=Object(r.useState)((function(){var e=localStorage.getItem(n);return null!==e&&n!==J?JSON.parse(e):[ae()]})),c=Object(i.a)(a,2),l=c[0],u=c[1],s=l[l.length-1],m=function(e){return u([].concat(Object(p.a)(l),[e]))},h=Object(r.useState)(null),O=Object(i.a)(h,2),j=O[0],T=O[1],B=Object(r.useState)(null),w=Object(i.a)(B,2),N=w[0],M=w[1],R=function(){var e=Object(r.useState)(document.hasFocus()),t=Object(i.a)(e,2),n=t[0],a=t[1];return window.addEventListener("blur",(function(){return a(!1)})),window.addEventListener("focus",(function(){return a(!0)})),n}(),A=Object(f.f)(),L=Object(r.useRef)(),P=l.length%2===0?U:G,D=l.length%2===0?G:U,H=n===J||n===_&&P===U,W=j&&ye(j,s),z=Ce({isComputerRound:H,chessBoardTheme:t}),Y=Object(r.useCallback)(I()((function(){var e=Ee(P,s),t=e[S()(e.length-1)];if(void 0!==t){var n=ue(t.position,t.move,s);m(n)}}),n===J?3e3:1e3),[s]);function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(t){var n=t.clientX,a=t.clientY,r=document.elementsFromPoint(n,a),o=r.find((function(e){return e.parentNode===L.current})),c=Object(p.a)(L.current.children).indexOf(o);if(c<0)return;e={y:Math.floor(c/8),x:c%8}}var l=e,i=l.y,u=l.x,d=s[i][u];if(j&&x()(W,e)){var h=ue({y:j.y,x:j.x},e,s);m(h),T(null)}else d?T(e):j&&T(null)}Object(r.useEffect)((function(){if(R){if(n!==J)if(l.length>1&&localStorage.setItem(n,JSON.stringify(l)),0===Ee(P,s).length){var e=be(P,s)?"".concat(k()(D)," won by checkmate."):"Draw by stalemate";setTimeout((function(){return M(e)}),1e3),localStorage.removeItem(n)}H&&Y()}}),[s,R]);var Q=s.flatMap((function(e,n){return e.map((function(e,a){var r={y:n,x:a},c=x()(W,r),l=j&&s[j.y][j.x]===e,i=e&&e.name===K&&be(e.color,s);return o.a.createElement(Z,{key:"".concat(n).concat(a),piece:e,playerColor:P,position:r,backgroundColor:t[(n+a)%2===0?G:U],isSelected:l,isMove:c,isChecked:i,onClick:F})}))}));return o.a.createElement("div",{className:z.root,ref:L},o.a.createElement(d.b,null,Q),o.a.createElement(b.a,{onClose:function(){return A.push("/")},open:null!==N},o.a.createElement(C.a,null,"Game Over"),o.a.createElement(y.a,null,o.a.createElement(E.a,{className:z.dialog},N),o.a.createElement(g.a,null,o.a.createElement(v.a,{onClick:function(){return A.push("/")},color:"primary"},"Continue")))))},xe=n(339),je=n(39),ke=n(346),Te=n(351),Se=n(347),Be=n(348),Ie=n(143),we=n.n(Ie),Ne=n(141),Me=n.n(Ne),Re=[{label:"Green",WHITE:"#eeeed2",BLACK:"#8ab757"},{label:"Blue",WHITE:"#d3f4e5",BLACK:"#53beb5"},{label:"Purple",WHITE:"#e9eaff",BLACK:"#c197f7"},{label:"Brown",WHITE:"#ffe7de",BLACK:"#d69f61"}],Ae=Object(s.a)((function(e){return{root:Object(N.a)({height:"100%",display:"grid",justifyContent:"space-evenly",alignContent:"space-evenly",alignItems:"center",gridTemplateColumns:"auto min(50vw, 72vh)"},e.breakpoints.down("sm"),{gridTemplateColumns:"auto"}),chessBoardContainer:Object(N.a)({height:"min(50vw, 72vh)",gridRow:"1 / 3",gridColumn:"2 / 3"},e.breakpoints.down("sm"),{display:"none"}),title:{backgroundColor:e.palette.secondary.main,padding:e.spacing(5),textAlign:"center",borderRadius:20},buttons:{display:"grid",justifyContent:"center",gridGap:e.spacing(1),gridTemplateColumns:"70%","& .MuiButton-root":{width:"100%",padding:e.spacing(1.5),borderRadius:15,textTransform:"none"}},themesDialogTitle:{minWidth:160},themesDialogItem:{"& .MuiListItemIcon-root":{minWidth:0}}}}));var Le=function(e){var t=e.chessBoardTheme,n=e.setChessBoardTheme,a=Object(r.useState)(!1),c=Object(i.a)(a,2),l=c[0],u=c[1],s=Object(r.useState)(null),m=Object(i.a)(s,2),h=m[0],p=m[1],O=Object(r.useState)(!1),x=Object(i.a)(O,2),j=x[0],k=x[1],T=Ae(),S=Object(f.f)(),B=[{variant:"contained",text:"Computer",color:"primary",handleClick:function(){null===localStorage.getItem(_)?S.push(Y):p({handleContinueClick:function(){return S.push(Y)},handleNewGameClick:function(){localStorage.removeItem(_),S.push(Y)}})}},{variant:"contained",text:"2 Players",color:"primary",handleClick:function(){null===localStorage.getItem(z)?S.push(F):p({handleContinueClick:function(){return S.push(F)},handleNewGameClick:function(){localStorage.removeItem(z),S.push(F)}})}},{variant:"outlined",text:"Themes",color:"default",handleClick:function(){return u(!0)}},{variant:"outlined",text:"About",color:"default",handleClick:function(){return k(!0)}}];return o.a.createElement("div",{className:T.root},o.a.createElement(d.c.div,{className:T.titleContainer,initial:{opacity:0},animate:{opacity:1,transition:{duration:1}}},o.a.createElement(xe.a,{className:T.title},o.a.createElement(je.a,{variant:"h1"},"Chess"))),o.a.createElement("div",{className:T.buttons},B.map((function(e,t){var n=e.variant,a=e.text,r=e.color,c=e.handleClick;return o.a.createElement(d.c.div,{key:a,initial:{y:400,opacity:0},animate:{y:0,opacity:1,transition:{delay:.15*t+.3,duration:.7}}},o.a.createElement(v.a,{variant:n,color:r,onClick:c},o.a.createElement(je.a,{variant:"h6"},a)))}))),o.a.createElement(d.c.div,{className:T.chessBoardContainer,initial:{x:900,rotate:40},animate:{x:0,rotate:0,opacity:1,transition:{duration:1,delay:.7,ease:"circOut"}}},o.a.createElement(Oe,{chessBoardTheme:t,chessBoardType:J})),o.a.createElement(b.a,{onClose:function(){return u(!1)},open:l},o.a.createElement(C.a,{className:T.themesDialogTitle},"Themes"),o.a.createElement(ke.a,null,Re.map((function(e,t){var a=e.label,r=e.WHITE,c=e.BLACK;return o.a.createElement(Te.a,{className:T.themesDialogItem,button:!0,onClick:function(){n({WHITE:r,BLACK:c}),u(!1)},key:t},o.a.createElement(Se.a,{primary:a}),o.a.createElement(Be.a,null,o.a.createElement(Me.a,{style:{color:c},fontSize:"large"})))})))),o.a.createElement(b.a,{onClose:function(){return p(null)},open:null!==h},o.a.createElement(C.a,null,"Unfinished Game"),o.a.createElement(y.a,null,o.a.createElement(E.a,null,"Would you like to continue your last game?"),o.a.createElement(g.a,null,o.a.createElement(v.a,{onClick:null===h||void 0===h?void 0:h.handleContinueClick,color:"primary"},"Continue"),o.a.createElement(v.a,{onClick:null===h||void 0===h?void 0:h.handleNewGameClick,color:"primary"},"Create New Game")))),o.a.createElement(b.a,{onClose:function(){return k(!1)},open:j},o.a.createElement(C.a,null,"About"),o.a.createElement(y.a,null,o.a.createElement(E.a,null,"Hi, I'm Patrick Margot and I created this chess app."),o.a.createElement(g.a,null,o.a.createElement(v.a,{color:"primary",endIcon:o.a.createElement(we.a,null),href:"https://github.com/PatrickMargot",target:"_blank"},"Checkout My Github")))))},Pe=Object(u.a)({palette:{primary:{main:"#8bc34a"},secondary:{main:"#eeeed2"}}}),De=Object(s.a)((function(e){return{root:{height:"100%",overflow:"hidden"},chessBoardContainer:{height:"100%",display:"grid",gridTemplateColumns:"95vmin",gridTemplateRows:"95vmin",placeContent:"center"}}}));var He=function(){var e=De(),t=Object(r.useState)((function(){var e=localStorage.getItem("CHESSBOARD_THEME");return null!==e?JSON.parse(e):{WHITE:"#eeeed2",BLACK:"#8ab757"}})),n=Object(i.a)(t,2),a=n[0],c=n[1];function l(t){return o.a.createElement(d.c.div,{className:e.chessBoardContainer,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1,transition:{duration:.3}}},t.children)}return Object(r.useEffect)((function(){localStorage.setItem("CHESSBOARD_THEME",JSON.stringify(a))}),[a]),o.a.createElement(m.a,{theme:Pe},o.a.createElement("div",{className:e.root},o.a.createElement(h.a,null,o.a.createElement(f.c,null,o.a.createElement(f.a,{path:Y},o.a.createElement(l,null,o.a.createElement(Oe,{chessBoardTheme:a,chessBoardType:_}))),o.a.createElement(f.a,{path:F},o.a.createElement(l,null,o.a.createElement(Oe,{chessBoardTheme:a,chessBoardType:z}))),o.a.createElement(f.a,{path:"/"},o.a.createElement(Le,{chessBoardTheme:a,setChessBoardTheme:c}))))))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(He,null)),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.c6b3d7c2.chunk.js.map