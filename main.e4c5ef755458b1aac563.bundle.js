webpackJsonp([1,4],{"/fcW":function(n,l){function u(n){throw new Error("Cannot find module '"+n+"'.")}u.keys=function(){return[]},u.resolve=u,n.exports=u,u.id="/fcW"},0:function(n,l,u){n.exports=u("x35b")},"1A80":function(n,l,u){"use strict";function t(n){return c._16(0,[(n()(),c._17(0,null,null,4,"h1",[],null,null,null,null,null)),(n()(),c._18(null,["\n  "])),(n()(),c._17(0,null,null,1,"app-color-puzzle",[],null,null,null,r.a,r.b)),c._19(114688,null,0,i.a,[],null,null),(n()(),c._18(null,["\n"])),(n()(),c._18(null,["\n"]))],function(n,l){n(l,3,0)},null)}function e(n){return c._16(0,[(n()(),c._17(0,null,null,1,"app-root",[],null,null,null,t,f)),c._19(49152,null,0,a.a,[],null,null)],null,null)}var o=u("Ni5f"),c=u("3j3K"),r=u("Lit+"),i=u("4HwX"),a=u("YWx4");u.d(l,"a",function(){return d});var s=[o.a],f=c._15({encapsulation:0,styles:s,data:{}}),d=c._20("app-root",a.a,e,{},{},[])},"4HwX":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){this.complete=!1,this.numberCompleted=0,this.knownPuzzles=[[[0,0,0,0,0],[0,0,0,0,0],[1,0,1,0,1],[0,0,0,0,0],[0,0,0,0,0]],[[1,0,1,0,1],[1,0,1,0,1],[0,0,0,0,0],[1,0,1,0,1],[1,0,1,0,1]],[[0,1,0,1,0],[1,1,0,1,1],[1,1,0,1,1],[1,1,0,1,1],[0,1,0,1,0]],[[0,0,0,0,0],[1,1,0,1,1],[0,0,0,0,0],[1,0,0,0,1],[1,1,0,1,1]],[[1,1,1,1,0],[1,1,1,0,1],[1,1,1,0,1],[0,0,0,1,1],[1,1,0,1,1]],[[0,0,0,0,0],[0,0,0,0,0],[1,0,1,0,1],[1,0,1,0,1],[0,1,1,1,0]],[[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]],[[0,0,0,0,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0]],[[0,1,0,1,0],[1,1,1,1,1],[0,1,1,1,0],[0,1,0,1,1],[1,1,1,0,0]],[[0,1,1,1,0],[0,1,1,1,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]],[[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[0,1,1,1,0]],[[1,1,1,1,1],[0,1,0,1,0],[1,1,0,1,1],[0,1,1,1,0],[0,1,0,1,0]],[[0,0,0,1,0],[0,0,1,0,1],[0,1,0,1,0],[1,0,1,0,0],[0,1,0,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,1,0,0,0],[0,1,0,0,0],[0,1,0,0,0]],[[0,0,0,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,1,0,0,0],[0,0,0,0,0]],[[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]],[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,1,1,1,0],[1,1,1,1,1]],[[0,0,1,0,0],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,1,0],[0,0,1,0,0]],[[1,0,1,0,1],[0,0,0,0,0],[1,0,1,0,1],[0,0,0,0,0],[1,0,1,0,1]],[[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,1],[0,0,0,0,0],[0,0,0,0,0]],[[0,1,1,1,1],[0,1,0,0,0],[0,1,1,1,0],[0,1,0,0,0],[0,1,0,0,0]],[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],[[0,0,0,0,0],[0,0,0,0,0],[0,0,1,1,1],[0,0,1,1,0],[0,0,1,0,0]],[[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,1],[1,1,1,1,1],[0,1,0,0,1]],[[1,0,0,0,0],[1,1,0,0,0],[1,1,1,0,0],[1,1,1,1,0],[0,1,1,1,1]]]}return n.prototype.ngOnInit=function(){this.choosePuzzle()},n.prototype.clickSquare=function(n){this.cascade(n),this.check()},n.prototype.check=function(){for(var n=!0,l=0;l<this.puzzle.length;l++)this.puzzle[l].includes(1)&&(n=!1);n&&(this.complete=!0,this.numberCompleted++)},n.prototype.cascade=function(n){var l;l=n.split("-");for(var u=0;u<l.length;u++)l[u]=parseInt(l[u]);this.puzzle[l[0]][l[1]]=(this.puzzle[l[0]][l[1]]+1)%2,l[1]>0&&(this.puzzle[l[0]][l[1]-1]=(this.puzzle[l[0]][l[1]-1]+1)%2),l[1]+1<this.puzzle[l[0]].length&&(this.puzzle[l[0]][l[1]+1]=(this.puzzle[l[0]][l[1]+1]+1)%2),l[0]>0&&(this.puzzle[l[0]-1][l[1]]=(this.puzzle[l[0]-1][l[1]]+1)%2),l[0]+1<this.puzzle.length&&(this.puzzle[l[0]+1][l[1]]=(this.puzzle[l[0]+1][l[1]]+1)%2)},n.prototype.choosePuzzle=function(){this.complete=!1;var n=Math.floor(Math.random()*this.knownPuzzles.length);this.puzzle=this.knownPuzzles[n].slice()},n.prototype.solvePuzzle=function(n){for(var l=n.length,u=n[0].length,t=0;t<5;){t=0;for(var e=0;e<l-1;e++)for(var o=0;o<u;o++)if(1===n[e][o]){var c=e+1,r=c+"-"+o;this.cascade(r)}for(var e=0;e<l;e++)n[e].includes(1)||t++;if(n[4][0])this.cascade("0-3"),this.cascade("0-4");else if(n[4][1])this.cascade("0-1"),this.cascade("0-4");else if(n[4][2])this.cascade("0-3");else if(n[4][3]||n[4][4])return!1}return!0},n.ctorParameters=function(){return[]},n}()},Iksp:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},"Lit+":function(n,l,u){"use strict";function t(n){return s._16(0,[(n()(),s._17(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),s._18(null,["s"]))],null,null)}function e(n){return s._16(0,[(n()(),s._17(0,null,null,6,"p",[],null,null,null,null,null)),(n()(),s._18(null,["Congratulations, you have completed "," puzzle"])),(n()(),s._21(16777216,null,null,1,null,t)),s._19(16384,null,0,f.f,[s._2,s._3],{ngIf:[0,"ngIf"]},null),(n()(),s._18(null,["! "])),(n()(),s._17(0,null,null,1,"button",[["name","newPuzzle"],["type","button"]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.choosePuzzle()&&t}return t},null,null)),(n()(),s._18(null,["Play Again!"]))],function(n,l){n(l,3,0,l.component.numberCompleted>1)},function(n,l){n(l,1,0,l.component.numberCompleted)})}function o(n){return s._16(0,[(n()(),s._17(0,null,null,0,"td",[],[[8,"className",0]],[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.clickSquare(n.parent.context.index+"-"+n.context.index)&&t}return t},null,null))],null,function(n,l){n(l,0,0,s._22(1,"cell",l.context.$implicit,""))})}function c(n){return s._16(0,[(n()(),s._17(0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),s._18(null,["\n\t\t"])),(n()(),s._21(16777216,null,null,1,null,o)),s._19(802816,null,0,f.g,[s._2,s._3,s.m],{ngForOf:[0,"ngForOf"]},null),(n()(),s._18(null,["\n\t"]))],function(n,l){n(l,3,0,l.context.$implicit)},null)}function r(n){return s._16(0,[(n()(),s._18(null,["\n"])),(n()(),s._21(16777216,null,null,1,null,e)),s._19(16384,null,0,f.f,[s._2,s._3],{ngIf:[0,"ngIf"]},null),(n()(),s._18(null,["\n\n"])),(n()(),s._17(0,null,null,1,"button",[["name","newPuzzle"],["type","button"]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.choosePuzzle()&&t}return t},null,null)),(n()(),s._18(null,["Generate New Puzzle"])),(n()(),s._18(null,["\n"])),(n()(),s._17(0,null,null,5,"table",[],null,null,null,null,null)),(n()(),s._18(null,["\n\t"])),(n()(),s._17(0,null,null,3,"tbody",[],null,null,null,null,null)),(n()(),s._21(16777216,null,null,1,null,c)),s._19(802816,null,0,f.g,[s._2,s._3,s.m],{ngForOf:[0,"ngForOf"]},null),(n()(),s._18(null,["\n"])),(n()(),s._18(null,["\n"]))],function(n,l){var u=l.component;n(l,2,0,u.complete),n(l,11,0,u.puzzle)},null)}function i(n){return s._16(0,[(n()(),s._17(0,null,null,1,"app-color-puzzle",[],null,null,null,r,_)),s._19(114688,null,0,d.a,[],null,null)],function(n,l){n(l,1,0)},null)}var a=u("wTkm"),s=u("3j3K"),f=u("2Je8"),d=u("4HwX");u.d(l,"b",function(){return _}),l.a=r;var p=[a.a],_=s._15({encapsulation:0,styles:p,data:{}});s._20("app-color-puzzle",d.a,i,{},{},[])},Ni5f:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[""]},YWx4:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){this.title="app works!"}return n}()},kZql:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t={production:!0}},kke6:function(n,l,u){"use strict";var t=u("3j3K"),e=u("Iksp"),o=u("YWx4"),c=u("1A80"),r=u("2Je8"),i=u("Qbdm"),a=u("NVOs"),s=u("Fzro");u.d(l,"a",function(){return f});var f=t.b(e.a,[o.a],function(n){return t.c([t.d(512,t.e,t.f,[[8,[c.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,r.a,r.b,[t.h]),t.d(4608,t.j,t.j,[]),t.d(5120,t.k,t.l,[]),t.d(5120,t.m,t.n,[]),t.d(5120,t.o,t.p,[]),t.d(4608,i.b,i.c,[i.d]),t.d(6144,t.q,null,[i.b]),t.d(4608,i.e,i.f,[]),t.d(5120,i.g,function(n,l,u,t){return[new i.h(n),new i.i(l),new i.j(u,t)]},[i.d,i.d,i.d,i.e]),t.d(4608,i.k,i.k,[i.g,t.r]),t.d(135680,i.l,i.l,[i.d]),t.d(4608,i.m,i.m,[i.k,i.l]),t.d(6144,t.s,null,[i.m]),t.d(6144,i.n,null,[i.l]),t.d(4608,t.t,t.t,[t.r]),t.d(4608,i.o,i.o,[i.d]),t.d(4608,i.p,i.p,[i.d]),t.d(4608,a.a,a.a,[]),t.d(4608,s.a,s.a,[]),t.d(4608,s.b,s.c,[]),t.d(5120,s.d,s.e,[]),t.d(4608,s.f,s.f,[s.a,s.b,s.d]),t.d(4608,s.g,s.h,[]),t.d(5120,s.i,s.j,[s.f,s.g]),t.d(512,r.c,r.c,[]),t.d(1024,t.u,i.q,[]),t.d(1024,t.v,function(n,l){return[i.r(n,l)]},[[2,i.s],[2,t.w]]),t.d(512,t.x,t.x,[[2,t.v]]),t.d(131584,t.y,t.y,[t.r,t.z,t.A,t.u,t.e,t.x]),t.d(2048,t.B,null,[t.y]),t.d(512,t.C,t.C,[t.B]),t.d(512,i.t,i.t,[[3,i.t]]),t.d(512,a.b,a.b,[]),t.d(512,a.c,a.c,[]),t.d(512,s.k,s.k,[]),t.d(512,e.a,e.a,[])])})},wTkm:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[".cell0[_ngcontent-%COMP%]{background-color:blue}.cell0[_ngcontent-%COMP%], .cell1[_ngcontent-%COMP%]{width:50px;height:50px}.cell1[_ngcontent-%COMP%]{background-color:red}"]},x35b:function(n,l,u){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=u("3j3K"),e=u("kZql"),o=u("Qbdm"),c=u("kke6");e.a.production&&u.i(t.a)(),u.i(o.a)().bootstrapModuleFactory(c.a)}},[0]);