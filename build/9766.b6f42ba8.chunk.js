"use strict";(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[9766],{29766:(Y,L,s)=>{s.d(L,{ProtectedEditPage:()=>Z});var t=s(92132),B=s(21272),i=s(94061),M=s(83997),m=s(30893),h=s(85963),I=s(90151),A=s(68074),g=s(7537),R=s(5287),U=s(38413),c=s(55356),T=s(4198),W=s(21610),o=s(2129),K=s(46270),f=s(61535),p=s(54894),j=s(17703),H=s(71389),x=s(12083),e=s(90707),X=s(88889),Q=s(53664),ns=s(15126),Es=s(63299),is=s(67014),rs=s(59080),ds=s(79275),es=s(14718),ls=s(82437),Ms=s(5790),Ps=s(35223),Ds=s(5409),Os=s(74930),ms=s(2600),hs=s(48940),As=s(41286),gs=s(56336),Rs=s(13426),vs=s(84624),Cs=s(77965),Ls=s(54257),Bs=s(71210),Is=s(51187),Us=s(39404),cs=s(58692),Ts=s(501),Ws=s(57646),Ks=s(23120),fs=s(44414),js=s(25962),xs=s(14664),us=s(42588),ys=s(90325),ps=s(62785),Ss=s(87443),Ns=s(41032),zs=s(22957),Fs=s(93179),Vs=s(73055),Ys=s(15747),Hs=s(85306),Xs=s(26509),Qs=s(32058),$s=s(81185),Gs=s(82261),Js=s(412),Zs=s(94710);const $=({disabled:n,role:a,values:D,errors:_,onChange:r,onBlur:v})=>{const{formatMessage:E}=(0,p.A)();return(0,t.jsx)(i.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(M.s,{justifyContent:"space-between",children:[(0,t.jsxs)(i.a,{children:[(0,t.jsx)(i.a,{children:(0,t.jsx)(m.o,{fontWeight:"bold",children:a?a.name:E({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(i.a,{children:(0,t.jsx)(m.o,{textColor:"neutral500",variant:"pi",children:a?a.description:E({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(h.$,{disabled:!0,variant:"secondary",children:E({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount})})]}),(0,t.jsxs)(I.x,{gap:4,children:[(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(g.k,{disabled:n,name:"name",error:_.name&&E({id:_.name}),label:E({id:"global.name",defaultMessage:"Name"}),onChange:r,onBlur:v,required:!0,value:D.name||""})}),(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(R.T,{disabled:n,label:E({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&E({id:_.name}),onChange:r,onBlur:v,children:D.description||""})})]})]})})},G=x.Ik().shape({name:x.Yj().required(o.iW.required),description:x.Yj().optional()}),J=()=>{const n=(0,o.hN)(),{formatMessage:a}=(0,p.A)(),_=(0,j.W5)("/settings/roles/:id")?.params.id,r=B.useRef(null),{lockApp:v,unlockApp:E}=(0,o.MA)(),{trackUsage:b}=(0,o.z1)(),{_unstableFormatAPIError:S,_unstableFormatValidationErrors:N}=(0,o.wq)(),{isLoading:k,data:z}=(0,e.A)({role:_??""}),{roles:w,isLoading:F,refetch:q}=(0,X.u)({id:_},{refetchOnMountOrArgChange:!0}),P=w[0]??{},{data:ss,isLoading:ts}=(0,e.B)({id:_},{skip:!_,refetchOnMountOrArgChange:!0}),[_s]=(0,e.G)(),[as]=(0,e.E)();if(!_)return(0,t.jsx)(j.rd,{to:"/settings/roles"});const os=async(u,C)=>{try{v();const{permissionsToSend:O,didUpdateConditions:y}=r.current?.getPermissions()??{},d=await _s({id:_,...u});if("error"in d){(0,e.x)(d.error)&&d.error.name==="ValidationError"?C.setErrors(N(d.error)):n({type:"warning",message:S(d.error)});return}if(P.code!=="strapi-super-admin"&&O){const l=await as({id:d.data.id,permissions:O});if("error"in l){(0,e.x)(l.error)&&l.error.name==="ValidationError"?C.setErrors(N(l.error)):n({type:"warning",message:S(l.error)});return}y&&b("didUpdateConditions")}r.current?.setFormAfterSubmit(),await q(),n({type:"success",message:{id:"notification.success.saved"}})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{E()}},V=!F&&P.code==="strapi-super-admin";return(0,t.jsxs)(U.g,{children:[(0,t.jsx)(o.x7,{name:"Roles"}),(0,t.jsx)(f.l1,{enableReinitialize:!0,initialValues:{name:P.name??"",description:P.description??""},onSubmit:os,validationSchema:G,validateOnChange:!1,children:({handleSubmit:u,values:C,errors:O,handleChange:y,handleBlur:d,isSubmitting:l})=>(0,t.jsxs)("form",{onSubmit:u,children:[(0,t.jsx)(c.Q,{primaryAction:(0,t.jsx)(M.s,{gap:2,children:(0,t.jsx)(h.$,{type:"submit",disabled:P.code==="strapi-super-admin",loading:l,size:"L",children:a({id:"global.save",defaultMessage:"Save"})})}),title:a({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(W.N,{as:H.k2,startIcon:(0,t.jsx)(K.A,{}),to:"/settings/roles",children:a({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(T.s,{children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)($,{disabled:V,errors:O,values:C,onChange:y,onBlur:d,role:P}),!k&&!F&&!ts&&z?(0,t.jsx)(i.a,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(Q.P,{isFormDisabled:V,permissions:ss,ref:r,layout:z})}):(0,t.jsx)(i.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.Bl,{})})]})})]})})]})},Z=()=>{const n=(0,e.j)(r=>r.admin_app.permissions.settings?.roles),{isLoading:a,allowedActions:{canRead:D,canUpdate:_}}=(0,o.ec)(n);return a?(0,t.jsx)(o.Bl,{}):!D&&!_?(0,t.jsx)(j.rd,{to:"/"}):(0,t.jsx)(J,{})}},88889:(Y,L,s)=>{s.d(L,{u:()=>m});var t=s(21272),B=s(2129),i=s(54894),M=s(90707);const m=(h={},I)=>{const{locale:A}=(0,i.A)(),g=(0,B.QM)(A,{sensitivity:"base"}),{data:R,error:U,isError:c,isLoading:T,refetch:W}=(0,M.z)(h,I);return{roles:t.useMemo(()=>[...R??[]].sort((K,f)=>g.compare(K.name,f.name)),[R,g]),error:U,isError:c,isLoading:T,refetch:W}}}}]);
