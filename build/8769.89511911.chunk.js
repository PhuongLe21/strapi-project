"use strict";(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[8769],{8769:(N,O,s)=>{s.d(O,{ProtectedEditPage:()=>ts});var a=s(92132),e=s(21272),m=s(38413),P=s(55356),i=s(85963),c=s(4198),g=s(94061),A=s(83997),D=s(30893),h=s(90151),v=s(68074),U=s(21610),t=s(2129),I=s(54514),R=s(46270),W=s(61535),r=s(79275),_=s(54894),d=s(17703),u=s(71389),L=s(12083),l=s(90707),n=s(87494),T=s(73568),Y=s(97146),Z=s(15126),J=s(63299),E=s(67014),ds=s(59080),ls=s(14718),Es=s(82437),Ms=s(5790),ms=s(35223),Ps=s(5409),cs=s(74930),Ds=s(2600),Os=s(48940),gs=s(41286),As=s(56336),hs=s(13426),vs=s(84624),Ls=s(77965),fs=s(54257),Cs=s(71210),Us=s(51187),Is=s(39404),us=s(58692),ps=s(501),Bs=s(57646),Rs=s(23120),Ws=s(44414),Ts=s(25962),Ks=s(14664),xs=s(42588),js=s(90325),ys=s(62785),Ss=s(87443),zs=s(41032),Ns=s(22957),Ys=s(93179),Fs=s(73055),Hs=s(15747),Vs=s(85306),$s=s(26509),Qs=s(32058),Xs=s(81185),Gs=s(82261),Zs=s(72810),Js=s(18022),bs=s(88889);const q=L.Ik().shape({...Y.C,isActive:L.lc(),roles:L.YO().min(1,t.iW.required).required(t.iW.required)}),b=["email","firstname","lastname","username","isActive","roles"],ss=()=>{const{formatMessage:o}=(0,_.A)(),p=(0,d.W5)("/settings/users/:id")?.params?.id??"",{push:B}=(0,d.W6)(),M=(0,t.hN)(),{lockApp:H,unlockApp:V}=(0,t.MA)(),w=(0,l.p)(T.M,async()=>(await s.e(1412).then(s.bind(s,61412))).MagicLinkEE),{_unstableFormatAPIError:$,_unstableFormatValidationErrors:es}=(0,t.wq)(),k=(0,l.j)(n.s),{isLoading:os,allowedActions:{canUpdate:Q}}=(0,t.ec)({read:k.settings?.users.read??[],update:k.settings?.users.update??[]}),[ns]=(0,l.M)();(0,t.L4)();const{data:is,error:y,isLoading:rs}=(0,l.k)({id:p},{refetchOnMountOrArgChange:!0}),[S]=is?.users??[];if(e.useEffect(()=>{y&&(y.name==="UnauthorizedError"?(M({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),B("/")):M({type:"warning",message:{id:"notification.error",defaultMessage:$(y)}}))},[y,$,B,M]),rs||!w||os)return(0,a.jsxs)(m.g,{"aria-busy":"true",children:[(0,a.jsx)(t.x7,{name:"Users"}),(0,a.jsx)(P.Q,{primaryAction:(0,a.jsx)(i.$,{disabled:!0,startIcon:(0,a.jsx)(I.A,{}),type:"button",size:"L",children:o({id:"global.save",defaultMessage:"Save"})}),title:o({id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}),navigationAction:(0,a.jsx)(U.N,{as:u.k2,startIcon:(0,a.jsx)(R.A,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:o({id:"global.back",defaultMessage:"Back"})})}),(0,a.jsx)(c.s,{children:(0,a.jsx)(t.Bl,{})})]});const z={...r(S,b),roles:S.roles.map(({id:f})=>f),password:"",confirmPassword:""},_s=async(f,K)=>{H?.();const{confirmPassword:X,password:x,...G}=f,C=await ns({id:p,...G,password:x===""?void 0:x});"error"in C&&(0,l.x)(C.error)?(C.error.name==="ValidationError"&&K.setErrors(es(C.error)),M({type:"warning",message:$(C.error)})):(M({type:"success",message:o({id:"notification.success.saved",defaultMessage:"Saved"})}),K.setValues({...r(f,b),password:"",confirmPassword:""})),V?.()};return(0,a.jsxs)(m.g,{children:[(0,a.jsx)(t.x7,{name:"Users"}),(0,a.jsx)(W.l1,{onSubmit:_s,initialValues:z,validateOnChange:!1,validationSchema:q,children:({errors:f,values:K,handleChange:X,isSubmitting:x,dirty:G})=>(0,a.jsxs)(t.lV,{children:[(0,a.jsx)(P.Q,{primaryAction:(0,a.jsx)(i.$,{disabled:x||!Q?!0:!G,startIcon:(0,a.jsx)(I.A,{}),loading:x,type:"submit",size:"L",children:o({id:"global.save",defaultMessage:"Save"})}),title:o({id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},{name:z.username||(0,n.g)(z?.firstname??"",z.lastname)}),navigationAction:(0,a.jsx)(U.N,{as:u.k2,startIcon:(0,a.jsx)(R.A,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:o({id:"global.back",defaultMessage:"Back"})})}),(0,a.jsxs)(c.s,{children:[S?.registrationToken&&(0,a.jsx)(g.a,{paddingBottom:6,children:(0,a.jsx)(w,{registrationToken:S.registrationToken})}),(0,a.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:7,children:[(0,a.jsx)(g.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,a.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,a.jsx)(D.o,{variant:"delta",as:"h2",children:o({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})}),(0,a.jsx)(h.x,{gap:5,children:as.map(C=>C.map(j=>(0,a.jsx)(v.E,{...j.size,children:(0,a.jsx)(t.ah,{...j,disabled:!Q,error:f[j.name],onChange:X,value:K[j.name]})},j.name)))})]})}),(0,a.jsx)(g.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,a.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,a.jsx)(D.o,{variant:"delta",as:"h2",children:o({id:"global.roles",defaultMessage:"User's role"})}),(0,a.jsx)(h.x,{gap:5,children:(0,a.jsx)(v.E,{col:6,xs:12,children:(0,a.jsx)(T.S,{disabled:!Q,error:f.roles,onChange:X,value:K.roles})})})]})})]})]})]})})]})},as=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]],ts=()=>{const o=(0,t.hN)(),F=(0,l.j)(n.s),{isLoading:p,allowedActions:{canRead:B,canUpdate:M}}=(0,t.ec)({read:F.settings?.users.read??[],update:F.settings?.users.update??[]}),{state:H}=(0,d.zy)(),V=H?.from??"/";return e.useEffect(()=>{p||!B&&!M&&o({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[p,B,M,o]),p?(0,a.jsx)(t.Bl,{}):!B&&!M?(0,a.jsx)(d.rd,{to:V}):(0,a.jsx)(ss,{})}},73568:(N,O,s)=>{s.d(O,{M:()=>U,S:()=>t,a:()=>v});var a=s(92132),e=s(54894),m=s(90707),P=s(88353),i=s(56654),c=s(2129),g=s(90625),A=s(84795),D=s(79793),h=s(88889);const v=({children:r,target:_})=>{const d=(0,c.hN)(),{formatMessage:u}=(0,e.A)(),{copy:L}=(0,c.iD)(),l=u({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),n=async()=>{await L(_)&&d({type:"info",message:{id:"notification.link-copied"}})};return(0,a.jsx)(c.bQ,{endAction:(0,a.jsx)(P.K,{label:l,noBorder:!0,icon:(0,a.jsx)(g.A,{}),onClick:n}),title:_,titleEllipsis:!0,subtitle:r,icon:(0,a.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})},U=({registrationToken:r})=>{const{formatMessage:_}=(0,e.A)(),d=`${window.location.origin}${(0,m.K)()}/auth/register?registrationToken=${r}`;return(0,a.jsx)(v,{target:d,children:_({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},t=({disabled:r,error:_,onChange:d,value:u})=>{const{isLoading:L,roles:l}=(0,h.u)(),{formatMessage:n}=(0,e.A)(),T=_?n({id:_,defaultMessage:_}):"",Y=n({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),Z=n({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),J=n({id:"app.components.Select.placeholder",defaultMessage:"Select"});return(0,a.jsx)(i.KF,{id:"roles",disabled:r,error:T,hint:Z,label:Y,name:"roles",onChange:E=>{d({target:{name:"roles",value:E}})},placeholder:J,startIcon:L?(0,a.jsx)(W,{}):void 0,value:u.map(E=>E.toString()),withTags:!0,required:!0,children:l.map(E=>(0,a.jsx)(i.fe,{value:E.id.toString(),children:n({id:`global.${E.code}`,defaultMessage:E.name})},E.id))})},I=(0,D.i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,R=D.Ay.div`
  animation: ${I} 2s infinite linear;
`,W=()=>(0,a.jsx)(R,{children:(0,a.jsx)(A.A,{})})},88889:(N,O,s)=>{s.d(O,{u:()=>i});var a=s(21272),e=s(2129),m=s(54894),P=s(90707);const i=(c={},g)=>{const{locale:A}=(0,m.A)(),D=(0,e.QM)(A,{sensitivity:"base"}),{data:h,error:v,isError:U,isLoading:t,refetch:I}=(0,P.z)(c,g);return{roles:a.useMemo(()=>[...h??[]].sort((W,r)=>D.compare(W.name,r.name)),[h,D]),error:v,isError:U,isLoading:t,refetch:I}}},97146:(N,O,s)=>{s.d(O,{C:()=>m});var a=s(2129),e=s(12083);const m={firstname:e.Yj().trim().required(a.iW.required),lastname:e.Yj(),email:e.Yj().email(a.iW.email).lowercase().required(a.iW.required),username:e.Yj().nullable(),password:e.Yj().min(8,a.iW.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Yj().min(8,a.iW.minLength).oneOf([e.KR("password"),null],"components.Input.error.password.noMatch").when("password",(P,i)=>P?i.required(a.iW.required):i)}}}]);
