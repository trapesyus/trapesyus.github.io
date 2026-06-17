((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={aMb:function aMb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aMc:function aMc(){},NJ:function NJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},a4L:function a4L(){},DK:function DK(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.zy$=d
_.dt$=e
_.aK$=f
_.a=null},a3m:function a3m(d,e,f,g,h,i,j){var _=this
_.ej=d
_.y1=e
_.y2=f
_.cX$=g
_.ai$=h
_.d5$=i
_.b=_.dy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
bHN(d,e){return new A.a4K(e,d,null)},
a4K:function a4K(d,e,f){this.f=d
this.d=e
this.a=f}}
B=c[0]
C=c[2]
A=a.updateHolder(c[42],A)
A.aMb.prototype={
ar0(d){var x=this.c
return d.yD(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.b.bE(B.b(["scrollOffset: "+B.j(x.a),"crossAxisOffset: "+B.j(x.b),"mainAxisExtent: "+B.j(x.c),"crossAxisExtent: "+B.j(x.d)],y.x),", ")+")"}}
A.aMc.prototype={}
A.NJ.prototype={
arj(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.j4(d/x)-1)
return 0},
aId(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Qo(d){var x=this,w=x.a,v=C.e.b7(d,w)
return new A.aMb(C.e.jZ(d,w)*x.b,x.aId(v*x.c),x.d,x.e)},
ajJ(d){var x
if(d===0)return 0
x=this.b
return x*(C.e.jZ(d-1,this.a)+1)-(x-this.d)}}
A.a4L.prototype={}
A.DK.prototype={
j(d){return"crossAxisOffset="+B.j(this.w)+"; "+this.avS(0)}}
A.a3m.prototype={
fH(d){if(!(d.b instanceof A.DK))d.b=new A.DK(!1,null,null)},
sarz(d){var x=this
if(x.ej===d)return
if(B.D(d)!==B.D(x.ej)||d.jW(x.ej))x.a0()
x.ej=d},
yP(d){var x=d.b
x.toString
x=y.t.a(x).w
x.toString
return x},
bC(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.z.a(B.C.prototype.ga1.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.ej.GX(a8)
t=u.b
s=t>1e-10?u.a*C.d.jZ(w,t):0
r=isFinite(v)?u.arj(v):a7
if(a6.ai$!=null){q=a6.ajo(s)
a6.uS(q,r!=null?a6.ajq(r):0)}else a6.uS(0,0)
p=u.Qo(s)
if(a6.ai$==null)if(!a6.Xi(s,p.a)){o=u.ajJ(a9.gyO())
a6.dy=B.js(a7,!1,a7,a7,o,0,0,0,o,a7)
a9.v6()
return}n=p.a
m=n+p.c
t=a6.ai$
t.toString
t=t.b
t.toString
l=y.c
t=l.a(t).b
t.toString
k=t-1
t=y.t
j=a7
for(;k>=s;--k){i=u.Qo(k)
h=i.c
g=a6.amW(a8.yD(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.ai$
h.toString
h.he(p.ar0(a8))
j=a6.ai$
h=j.b
h.toString
t.a(h)
h.a=n
h.w=p.b}h=j.b
h.toString
h=l.a(h).b
h.toString
k=h+1
h=B.q(a6).i("az.1")
f=r!=null
for(;;){if(!(!f||k<=r)){d=!1
break}i=u.Qo(k)
e=i.c
a0=a8.yD(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).aK$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.amU(a0,j)
if(g==null){d=!0
break}}else g.he(a0)
a1=g.b
a1.toString
t.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
m=Math.max(m,a2+e);++k
j=g}t=a6.d5$
t.toString
t=t.b
t.toString
t=l.a(t).b
t.toString
a3=d?m:a9.Zp(a8,s,t,n,m)
a4=a6.uL(a8,Math.min(x,n),m)
a5=a6.yK(a8,n,m)
a6.dy=B.js(a5,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7)
if(a3===m)a9.R8=!0
a9.v6()}}
A.a4K.prototype={
aS(d){var x=new A.a3m(this.f,y.v.a(d),B.x(y.e,y.g),0,null,null,B.at(y.d))
x.aR()
return x},
b2(d,e){e.sarz(this.f)},
Zo(d,e,f,g,h){var x
this.avT(d,e,f,g,h)
x=this.f.GX(d).ajJ(this.d.gzn())
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.v,[A.aMb,A.aMc,A.a4L])
w(A.NJ,A.aMc)
w(A.DK,B.hA)
w(A.a3m,B.or)
w(A.a4K,B.n4)})()
B.eg(b.typeUniverse,JSON.parse('{"DK":{"hA":[],"qD":[],"fl":["J"],"mH":[],"e7":[]},"a3m":{"or":[],"d0":[],"az":["J","hA"],"C":[],"aF":[],"az.1":"hA","az.0":"J"},"a4K":{"n4":[],"aH":[],"c":[]}}'))
var y={d:B.a4("eT"),x:B.a4("y<i>"),g:B.a4("J"),z:B.a4("lZ"),t:B.a4("DK"),v:B.a4("ui"),c:B.a4("hA"),e:B.a4("u")}};
(a=>{a["YbfAX+itxwmGwU+FNqOC+e9z1Iw="]=a.current})($__dart_deferred_initializers__);