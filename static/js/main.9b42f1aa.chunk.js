(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{152:function(e,t,n){e.exports=n(294)},157:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),l=(n(157),n(24)),i=n(139),u=n(327),s=n(339),m=n(13),d=n(62),h=n(6),f=n(7),p=n(335),v=n(340),y=n(334),g=n(332),b=n(333),E=n(331),C=n(43),x=n.n(C),O=n(133),j=n.n(O),k=n(134),T=n.n(k),I=n(70),B=Object(u.a)((function(e){return{root:{height:"100%",position:"absolute",zIndex:1,pointerEvents:"none"}}})),S={WHITE:{PAWN:"\u2659",BISHOP:"\u2657",KNIGHT:"\u2658",ROOK:"\u2656",QUEEN:"\u2655",KING:"\u2654"},BLACK:{PAWN:"\u265f\ufe0e",BISHOP:"\u265d",KNIGHT:"\u265e",ROOK:"\u265c",QUEEN:"\u265b",KING:"\u265a"}};var w=function(e){var t=e.piece,n=e.canInteract,a=e.dragControls,o=B();return r.a.createElement(m.a,null,t&&r.a.createElement(m.c.div,{key:t.id,layoutId:t.id,className:o.root,exit:{opacity:0,scale:0,transition:{duration:.3}},transition:{type:"spring",stiffness:1e3,damping:65},drag:n,dragControls:a,dragElastic:1,dragMomentum:!1,dragConstraints:{top:0,left:0,right:0,bottom:0},dragTransition:{bounceStiffness:900,bounceDamping:55}},r.a.createElement("svg",{width:"100%",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"central",fontSize:"85"},S[t.color][t.name]))))},N=Object(u.a)((function(e){return{root:function(e){var t=e.canInteract,n=e.isMove,a=e.hasPiece;return{cursor:t&&(a||n)?"pointer":"auto",position:"relative",webkitTouchCallout:"none",webkitUserSelect:"none",khtmlUserSelect:"none",mozUserSelect:"none",msUserSelect:"none",userSelect:"none"}},dot:{position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",height:"35%",width:"35%",backgroundColor:"rgba(0, 0, 0, 0.3)",borderRadius:"50%",display:"inline-block"}}}));var A=function(e){var t=e.piece,n=e.playerColor,a=e.position,o=e.backgroundColor,c=e.isSelected,l=e.isChecked,i=e.isMove,u=e.onClick,s=i||null===t||t.color===n,d=Object(m.d)(),h=N({canInteract:s,isMove:i,hasPiece:null!==t}),f=I.Color.mix(Object(I.Color)(o),Object(I.Color)("#ff0"))(.4);return r.a.createElement(m.c.div,{className:h.root,onMouseDown:s?function(e){d.start(e,{cursorProgress:{y:.5,x:.5}}),!c&&!i&&u(a)}:null,onMouseUp:s?function(){i&&u(a)}:null,initial:!1,animate:{backgroundColor:c?f:l?"#ff7961":o,transition:{duration:.13}}},r.a.createElement(m.c.div,{className:h.dot,initial:{scale:0},animate:{scale:i?1:0,transition:{duration:.2}}}),r.a.createElement(w,{piece:t,canInteract:s,dragControls:d}))},R=n(135),H=n.n(R),K=n(93),M=n.n(K),W="PAWN",L="KNIGHT",P="BISHOP",G="ROOK",U="QUEEN",D="KING",J="WHITE",_="BLACK",z="AUTOPLAY",Q="COMPUTER",Y="TWO_PLAYERS",q="/computer-game",F="/2-player-game";function V(){return M()(8,(function(e){return M()(8,(function(t){var n=function(e,t){if(1===e||6===e)return W;if(0===e||7===e)switch(t){case 0:case 7:return G;case 1:case 6:return L;case 2:case 5:return P;case 3:return U;case 4:return D}return null}(e,t),a=function(e){switch(e){case 0:case 1:return _;case 6:case 7:return J;default:return null}}(e),r=H()("piece_");return n?{name:n,color:a,id:r,moves:[]}:null}))}))}var X=n(71),Z=n(47),$=n.n(Z),ee=n(94),te=n.n(ee);function ne(e,t,n){var a=e.y,r=e.x,o=t.y,c=t.x,l=$()(n),i=l[a][r];l[o][c]=$()(Object(X.a)({},i,{moves:i.moves.concat(t)})),l[a][r]=null;var u=i.color===J?0:n.length-1;if(i.name===W&&o===u&&(l[o][c].name=U),i.name===D&&1===l[o][c].moves.length){var s=te()(t,{y:o,x:2}),m=te()(t,{y:o,x:6});s?(l[o][3]=$()(Object(X.a)({},l[o][0],{moves:i.moves.concat(t)})),l[o][0]=null):m&&(l[o][5]=$()(Object(X.a)({},l[o][7],{moves:i.moves.concat(t)})),l[o][7]=null)}return l}var ae=n(32),re=n.n(ae);var oe=n(34),ce=n.n(oe);function le(e,t,n){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1/0,r=e.y,o=e.x,c=n[r][o],l=t.y,i=t.x,u=[],s=1;u.length<a;s++){var m=r+l*s,d=o+i*s;if(!ce()(m,n.length)||!ce()(d,n[0].length))break;var h=n[m][d];if(h){h.color!==c.color&&u.push({y:m,x:d});break}u.push({y:m,x:d})}return u}function ie(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return[].concat(Object(f.a)(le(e,{y:-1,x:-1},t,n)),Object(f.a)(le(e,{y:-1,x:1},t,n)),Object(f.a)(le(e,{y:1,x:-1},t,n)),Object(f.a)(le(e,{y:1,x:1},t,n)))}function ue(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return[].concat(Object(f.a)(le(e,{y:-1,x:0},t,n)),Object(f.a)(le(e,{y:0,x:-1},t,n)),Object(f.a)(le(e,{y:0,x:1},t,n)),Object(f.a)(le(e,{y:1,x:0},t,n)))}function se(e,t){for(var n=function(e,t){for(var n=0;n<t.length;n++)for(var a=t[n],r=0;r<a.length;r++){var o=a[r];if(o&&e(o))return{y:n,x:r}}return null}((function(t){return t.color===e&&t.name===D}),t),a=0;a<t.length;a++)for(var r=t[a],o=0;o<r.length;o++){var c=r[o];if(c&&c.color!==e){var l=c.name===D?[].concat(Object(f.a)(ue({y:a,x:o},t,1)),Object(f.a)(ie({y:a,x:o},t,1))):me({y:a,x:o},t);if(x()(l,n))return!0}}return!1}function me(e,t){var n=e.x,a=t[e.y][n];if(null===a)return[];switch(a.name){case W:return function(e,t){var n=e.x,a=e.y,r=t[a][n],o=[],c=r.color===J?-1:1,l=re()(t,"".concat(a+c,"[").concat(n,"]")),i=re()(t,"".concat(a+2*c,"[").concat(n,"]")),u=re()(t,"".concat(a+c,"[").concat(n-1,"]")),s=re()(t,"".concat(a+c,"[").concat(n+1,"]")),m=r.color===J?6===a:1===a;return null===l&&o.push({y:a+c,x:n}),null===l&&null===i&&m&&o.push({y:a+2*c,x:n}),u&&u.color!==r.color&&o.push({y:a+c,x:n-1}),s&&s.color!==r.color&&o.push({y:a+c,x:n+1}),o}(e,t);case L:return function(e,t){var n=e.x,a=e.y,r=t[a][n];return[{y:a-2,x:n-1},{y:a-2,x:n+1},{y:a-1,x:n+2},{y:a+1,x:n+2},{y:a+2,x:n+1},{y:a+2,x:n-1},{y:a+1,x:n-2},{y:a-1,x:n-2}].filter((function(e){var n=e.y,a=e.x;return ce()(n,t.length)&&ce()(a,t[0].length)&&(null===t[n][a]||t[n][a].color!==r.color)}))}(e,t);case P:return ie(e,t);case G:return ue(e,t);case U:return[].concat(Object(f.a)(ie(e,t)),Object(f.a)(ue(e,t)));case D:return function(e,t){var n=e.y,a=e.x,r=t[n][a],o=r.moves.length>0,c=se(r.color,t),l=[].concat(Object(f.a)(ue(e,t,1)),Object(f.a)(ie(e,t,1)));return o||c||[{rook:t[n][0],move:{y:n,x:a-2},path:{y:n,x:a-1}},{rook:t[n][7],move:{y:n,x:a+2},path:{y:n,x:a+1}}].forEach((function(n){var a=n.rook,o=n.move,c=n.path;if(null!==a&&!(a.moves.length>0)){var i=t[o.y][o.x],u=t[c.y][c.x],s=ne(e,c,t);!se(r.color,s)&&null===u&&null===i&&l.push(o)}})),l}(e,t);default:return}}function de(e,t){return function(e,t,n){var a=t.y,r=t.x,o=n[a][r];return e.filter((function(e){var t=e.y,c=e.x,l=ne({y:a,x:r},{y:t,x:c},n);return!se(o.color,l)}))}(me(e,t),e,t)}function he(e,t){return t.flatMap((function(t,n){return t.flatMap((function(t,a){return t&&t.color===e?{y:n,x:a}:[]}))})).flatMap((function(e){return de(e,t).map((function(t){return{position:e,move:t}}))}))}var fe=Object(u.a)((function(e){return{root:function(e){var t=e.notInteractable,n=e.chessBoardTheme;return{height:"100%",pointerEvents:t?"none":"auto",display:"grid",placeContent:"center",gridTemplateRows:"repeat(8, 1fr)",gridTemplateColumns:"repeat(8, 1fr)",borderRadius:9,border:"3px ".concat(n.BLACK," solid"),backgroundColor:n.BLACK,boxShadow:"0 8px 8px -6px rgba(0, 0, 0, 0.25)","& > :first-child":{borderTopLeftRadius:7},"& > :nth-child(8)":{borderTopRightRadius:7},"& > :nth-last-child(8)":{borderBottomLeftRadius:7},"& > :last-child":{borderBottomRightRadius:7}}},dialog:{minWidth:180}}}));var pe=function(e){var t=e.chessBoardTheme,n=e.chessBoardType,o=Object(a.useState)((function(){var e=localStorage.getItem(n);return null!==e&&n!==z?JSON.parse(e):[V()]})),c=Object(l.a)(o,2),i=c[0],u=c[1],s=i[i.length-1],d=function(e){var t=performance.now();u([].concat(Object(f.a)(i),[e])),console.log(performance.now()-t)},C=Object(a.useState)(null),O=Object(l.a)(C,2),k=O[0],I=O[1],B=Object(a.useState)(null),S=Object(l.a)(B,2),w=S[0],N=S[1],R=Object(a.useRef)([]),H=Object(h.f)(),K=i.length%2===0?_:J,M=i.length%2===0?J:_,W=n===z||n===Q&&K===_,L=fe({notInteractable:W,chessBoardTheme:t});function P(){R.current=[],I(null)}function G(e){var t=e.y,n=e.x,a=s[t][n];if(k&&x()(R.current,{y:t,x:n})){var r=ne({y:k.y,x:k.x},{y:t,x:n},s);d(r),P()}else a?(R.current=de(e,s),I(e)):k&&P()}Object(a.useEffect)((function(){n!==z&&i.length>1&&localStorage.setItem(n,JSON.stringify(i));var e=he(K,s);if(n!==z&&0===e.length){var t=se(K,s)?"".concat(j()(M)," won by checkmate."):"Draw by stalemate";setTimeout((function(){return N(t)}),1e3),localStorage.removeItem(n)}W&&setTimeout((function(){var e=he(K,s),t=e[T()(e.length-1)];if(void 0!==t){var n=ne(t.position,t.move,s);d(n)}}),n===z?3e3:1e3)}),[s]);var U=s.map((function(e,n){return e.map((function(e,a){var o={y:n,x:a},c=x()(R.current,o),l=k&&s[k.y][k.x]===e,i=e&&e.name===D&&se(e.color,s);return r.a.createElement(A,{key:"".concat(n).concat(a),piece:e,playerColor:K,position:o,backgroundColor:t[(n+a)%2===0?J:_],isSelected:l,isMove:c,isChecked:i,onClick:G})}))}));return r.a.createElement("div",{className:L.root},r.a.createElement(m.b,null,U),r.a.createElement(v.a,{onClose:function(){return H.push("/")},open:null!==w},r.a.createElement(E.a,null,"Game Over"),r.a.createElement(g.a,null,r.a.createElement(b.a,{className:L.dialog},w),r.a.createElement(y.a,null,r.a.createElement(p.a,{onClick:function(){return H.push("/")},color:"primary"},"Continue")))))},ve=n(46),ye=n(329),ge=n(37),be=n(336),Ee=n(341),Ce=n(337),xe=n(338),Oe=n(138),je=n.n(Oe),ke=n(136),Te=n.n(ke),Ie=[{label:"Green",WHITE:"#eeeed2",BLACK:"#8ab757"},{label:"Blue",WHITE:"#d3f4e5",BLACK:"#53beb5"},{label:"Purple",WHITE:"#e9eaff",BLACK:"#c197f7"},{label:"Brown",WHITE:"#ffe7de",BLACK:"#d69f61"}],Be=Object(u.a)((function(e){return{root:Object(ve.a)({height:"100%",display:"grid",justifyContent:"space-evenly",alignContent:"space-evenly",alignItems:"center",gridTemplateColumns:"auto min(50vw, 72vh)"},e.breakpoints.down("sm"),{gridTemplateColumns:"auto"}),chessBoardContainer:Object(ve.a)({height:"min(50vw, 72vh)",gridRow:"1 / 3",gridColumn:"2 / 3"},e.breakpoints.down("sm"),{display:"none"}),title:{backgroundColor:e.palette.secondary.main,padding:e.spacing(5),textAlign:"center",borderRadius:20},buttons:{display:"grid",justifyContent:"center",gridGap:e.spacing(1),gridTemplateColumns:"70%","& .MuiButton-root":{width:"100%",padding:e.spacing(1.5),borderRadius:15,textTransform:"none"}},themesDialogTitle:{minWidth:160},themesDialogItem:{"& .MuiListItemIcon-root":{minWidth:0}}}}));var Se=function(e){var t=e.chessBoardTheme,n=e.setChessBoardTheme,o=Object(a.useState)(!1),c=Object(l.a)(o,2),i=c[0],u=c[1],s=Object(a.useState)(null),d=Object(l.a)(s,2),f=d[0],C=d[1],x=Object(a.useState)(!1),O=Object(l.a)(x,2),j=O[0],k=O[1],T=Be(),I=Object(h.f)(),B=[{variant:"contained",text:"Computer",color:"primary",handleClick:function(){null===localStorage.getItem(Q)?I.push(q):C({handleContinueClick:function(){return I.push(q)},handleNewGameClick:function(){localStorage.removeItem(Q),I.push(q)}})}},{variant:"contained",text:"2 Players",color:"primary",handleClick:function(){null===localStorage.getItem(Y)?I.push(F):C({handleContinueClick:function(){return I.push(F)},handleNewGameClick:function(){localStorage.removeItem(Y),I.push(F)}})}},{variant:"outlined",text:"Themes",color:"default",handleClick:function(){return u(!0)}},{variant:"outlined",text:"About",color:"default",handleClick:function(){return k(!0)}}];return r.a.createElement("div",{className:T.root},r.a.createElement(m.c.div,{className:T.titleContainer,initial:{opacity:0},animate:{opacity:1,transition:{duration:1}}},r.a.createElement(ye.a,{className:T.title},r.a.createElement(ge.a,{variant:"h1"},"Chess"))),r.a.createElement("div",{className:T.buttons},B.map((function(e,t){var n=e.variant,a=e.text,o=e.color,c=e.handleClick;return r.a.createElement(m.c.div,{key:a,initial:{y:400,opacity:0},animate:{y:0,opacity:1,transition:{delay:.15*t+.3,duration:.7}}},r.a.createElement(p.a,{variant:n,color:o,onClick:c},r.a.createElement(ge.a,{variant:"h6"},a)))}))),r.a.createElement(m.c.div,{className:T.chessBoardContainer,initial:{x:900,rotate:40},animate:{x:0,rotate:0,opacity:1,transition:{duration:1,delay:.7,ease:"circOut"}}},r.a.createElement(pe,{chessBoardTheme:t,chessBoardType:z})),r.a.createElement(v.a,{onClose:function(){return u(!1)},open:i},r.a.createElement(E.a,{className:T.themesDialogTitle},"Themes"),r.a.createElement(be.a,null,Ie.map((function(e,t){var a=e.label,o=e.WHITE,c=e.BLACK;return r.a.createElement(Ee.a,{className:T.themesDialogItem,button:!0,onClick:function(){n({WHITE:o,BLACK:c}),u(!1)},key:t},r.a.createElement(Ce.a,{primary:a}),r.a.createElement(xe.a,null,r.a.createElement(Te.a,{style:{color:c},fontSize:"large"})))})))),r.a.createElement(v.a,{onClose:function(){return C(null)},open:null!==f},r.a.createElement(E.a,null,"Unfinished Game"),r.a.createElement(g.a,null,r.a.createElement(b.a,null,"Would you like to continue your last game?"),r.a.createElement(y.a,null,r.a.createElement(p.a,{onClick:null===f||void 0===f?void 0:f.handleContinueClick,color:"primary"},"Continue"),r.a.createElement(p.a,{onClick:null===f||void 0===f?void 0:f.handleNewGameClick,color:"primary"},"Create New Game")))),r.a.createElement(v.a,{onClose:function(){return k(!1)},open:j},r.a.createElement(E.a,null,"About"),r.a.createElement(g.a,null,r.a.createElement(b.a,null,"Hi, I'm Patrick Margot and I created this chess app."),r.a.createElement(y.a,null,r.a.createElement(p.a,{color:"primary",endIcon:r.a.createElement(je.a,null),href:"https://github.com/PatrickMargot",target:"_blank"},"Checkout My Github")))))},we=Object(i.a)({palette:{primary:{main:"#8bc34a"},secondary:{main:"#eeeed2"}}}),Ne=Object(u.a)((function(e){return{root:{height:"100vh",overflow:"hidden"},chessBoardContainer:{height:"100%",display:"grid",gridTemplateColumns:"95vmin",gridTemplateRows:"95vmin",placeContent:"center"}}}));var Ae=function(){var e=Ne(),t=Object(a.useState)((function(){var e=localStorage.getItem("CHESSBOARD_THEME");return null!==e?JSON.parse(e):{WHITE:"#eeeed2",BLACK:"#8ab757"}})),n=Object(l.a)(t,2),o=n[0],c=n[1];Object(a.useEffect)((function(){localStorage.setItem("CHESSBOARD_THEME",JSON.stringify(o))}),[o]);var i=function(t){return r.a.createElement(m.c.div,{className:e.chessBoardContainer,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1}},t.children)};return r.a.createElement(s.a,{theme:we},r.a.createElement("div",{className:e.root},r.a.createElement(d.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:q},r.a.createElement(i,null,r.a.createElement(pe,{chessBoardTheme:o,chessBoardType:Q}))),r.a.createElement(h.a,{path:F},r.a.createElement(i,null,r.a.createElement(pe,{chessBoardTheme:o,chessBoardType:Y}))),r.a.createElement(h.a,{path:"/"},r.a.createElement(Se,{chessBoardTheme:o,setChessBoardTheme:c}))))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ae,null)),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.9b42f1aa.chunk.js.map