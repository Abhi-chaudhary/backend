"use strict";(self.webpackChunkmailkar=self.webpackChunkmailkar||[]).push([[86],{9086:(e,t,i)=>{i.r(t),i.d(t,{default:()=>re});var a=i(3216),n=i(6446),o=i(8587),r=i(8168),l=i(5043),s=i(8387),c=i(8606),d=i(3650),h=i(6803),p=i(5658),u=i(5242),m=i(5213),g=i(2383),v=i(7056),f=i(2400);function x(e){return(0,f.Ay)("PrivateSwitchBase",e)}(0,v.A)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var A=i(579);const b=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],w=(0,p.Ay)(g.A)((e=>{let{ownerState:t}=e;return(0,r.A)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),y=(0,p.Ay)("input",{shouldForwardProp:p.ep})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),S=l.forwardRef((function(e,t){const{autoFocus:i,checked:a,checkedIcon:n,className:l,defaultChecked:d,disabled:p,disableFocusRipple:g=!1,edge:v=!1,icon:f,id:S,inputProps:k,inputRef:C,name:j,onBlur:z,onChange:R,onFocus:I,readOnly:E,required:L=!1,tabIndex:B,type:M,value:F}=e,T=(0,o.A)(e,b),[P,N]=(0,u.A)({controlled:a,default:Boolean(d),name:"SwitchBase",state:"checked"}),_=(0,m.A)();let D=p;_&&"undefined"===typeof D&&(D=_.disabled);const H="checkbox"===M||"radio"===M,O=(0,r.A)({},e,{checked:P,disabled:D,disableFocusRipple:g,edge:v}),V=(e=>{const{classes:t,checked:i,disabled:a,edge:n}=e,o={root:["root",i&&"checked",a&&"disabled",n&&"edge".concat((0,h.A)(n))],input:["input"]};return(0,c.A)(o,x,t)})(O);return(0,A.jsxs)(w,(0,r.A)({component:"span",className:(0,s.A)(V.root,l),centerRipple:!0,focusRipple:!g,disabled:D,tabIndex:null,role:void 0,onFocus:e=>{I&&I(e),_&&_.onFocus&&_.onFocus(e)},onBlur:e=>{z&&z(e),_&&_.onBlur&&_.onBlur(e)},ownerState:O,ref:t},T,{children:[(0,A.jsx)(y,(0,r.A)({autoFocus:i,checked:a,defaultChecked:d,className:V.input,disabled:D,id:H?S:void 0,name:j,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;N(t),R&&R(e,t)},readOnly:E,ref:C,required:L,ownerState:O,tabIndex:B,type:M},"checkbox"===M&&void 0===F?{}:{value:F},k)),P?n:f]}))}));var k=i(9662);const C=(0,k.A)((0,A.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),j=(0,k.A)((0,A.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),z=(0,k.A)((0,A.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var R=i(1070);function I(e){return(0,f.Ay)("MuiCheckbox",e)}const E=(0,v.A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),L=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],B=(0,p.Ay)(S,{shouldForwardProp:e=>(0,p.ep)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.indeterminate&&t.indeterminate,t["size".concat((0,h.A)(i.size))],"default"!==i.color&&t["color".concat((0,h.A)(i.color))]]}})((e=>{let{theme:t,ownerState:i}=e;return(0,r.A)({color:(t.vars||t).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===i.color?t.vars.palette.action.activeChannel:t.vars.palette[i.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,d.X4)("default"===i.color?t.palette.action.active:t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&{["&.".concat(E.checked,", &.").concat(E.indeterminate)]:{color:(t.vars||t).palette[i.color].main},["&.".concat(E.disabled)]:{color:(t.vars||t).palette.action.disabled}})})),M=(0,A.jsx)(j,{}),F=(0,A.jsx)(C,{}),T=(0,A.jsx)(z,{}),P=l.forwardRef((function(e,t){var i,a;const n=(0,R.A)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=M,color:p="primary",icon:u=F,indeterminate:m=!1,indeterminateIcon:g=T,inputProps:v,size:f="medium",className:x}=n,b=(0,o.A)(n,L),w=m?g:u,y=m?g:d,S=(0,r.A)({},n,{color:p,indeterminate:m,size:f}),k=(e=>{const{classes:t,indeterminate:i,color:a,size:n}=e,o={root:["root",i&&"indeterminate","color".concat((0,h.A)(a)),"size".concat((0,h.A)(n))]},l=(0,c.A)(o,I,t);return(0,r.A)({},t,l)})(S);return(0,A.jsx)(B,(0,r.A)({type:"checkbox",inputProps:(0,r.A)({"data-indeterminate":m},v),icon:l.cloneElement(w,{fontSize:null!=(i=w.props.fontSize)?i:f}),checkedIcon:l.cloneElement(y,{fontSize:null!=(a=y.props.fontSize)?a:f}),ownerState:S,ref:t,className:(0,s.A)(k.root,x)},b,{classes:k}))}));var N=i(5721),_=i(3697),D=i(7592),H=i(1322),O=i(5865);const V=(0,k.A)((0,A.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),W=(0,k.A)((0,A.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"}),"StarBorder");var q=i(9297);const X=(0,p.Ay)(H.Ay)({padding:"0 0 0 10px",background:"#f2f6fc",cursor:"pointer","& > div":{display:"flex",width:"100%"},"& > div > p":{fontSize:"14px"}}),Y=(0,p.Ay)(O.A)({fontSize:"12px !important",background:"#ddd",color:"#222",borderRadius:"4px",marginRight:"6px",padding:"0 4px"}),G=(0,p.Ay)(O.A)({marginLeft:"auto",marginRight:10,fontSize:12,color:"#5F6368"}),J=e=>{let{email:t,setStarredEmail:i,selectedEmails:o,setSelectedEmails:r}=e;const l=(0,D.A)(_.y.toggleStarredMails),s=(0,a.Zp)(),c=()=>{l.call({id:t._id,value:!t.starred}),i((e=>!e))};return(0,A.jsxs)(X,{children:[(0,A.jsx)(P,{size:"small",checked:o.includes(t._id),onChange:()=>{o.includes(t._id)?r((e=>e.filter((e=>e!==t._id)))):r((e=>[...e,t._id]))}}),t.starred?(0,A.jsx)(V,{fontSize:"small",style:{marginRight:10},onClick:()=>c()}):(0,A.jsx)(W,{fontSize:"small",style:{marginRight:10},onClick:()=>c()}),(0,A.jsxs)(n.A,{onClick:()=>s(q.J.view.path,{state:{email:t}}),children:[(0,A.jsxs)(O.A,{style:{width:200},children:["To:",t.to.split("@")[0]]}),(0,A.jsx)(Y,{children:"Inbox"}),(0,A.jsxs)(O.A,{children:[t.subject," ",t.body&&"-"," ",t.body]}),(0,A.jsxs)(G,{children:[new window.Date(t.date).getDate(),"\xa0",new window.Date(t.date).toLocaleString("default",{month:"long"})]})]})]})};var K=i(349);function Z(e){return(0,f.Ay)("MuiDivider",e)}(0,v.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Q=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],U=(0,p.Ay)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((e=>{let{theme:t,ownerState:i}=e;return(0,r.A)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,d.X4)(t.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:t}=e;return(0,r.A)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,r.A)({},i.children&&"vertical"!==i.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,r.A)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{ownerState:t}=e;return(0,r.A)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),$=(0,p.Ay)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((e=>{let{theme:t,ownerState:i}=e;return(0,r.A)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),ee=l.forwardRef((function(e,t){const i=(0,R.A)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:n,className:l,component:d=(n?"div":"hr"),flexItem:h=!1,light:p=!1,orientation:u="horizontal",role:m=("hr"!==d?"separator":void 0),textAlign:g="center",variant:v="fullWidth"}=i,f=(0,o.A)(i,Q),x=(0,r.A)({},i,{absolute:a,component:d,flexItem:h,light:p,orientation:u,role:m,textAlign:g,variant:v}),b=(e=>{const{absolute:t,children:i,classes:a,flexItem:n,light:o,orientation:r,textAlign:l,variant:s}=e,d={root:["root",t&&"absolute",s,o&&"light","vertical"===r&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===r&&"withChildrenVertical","right"===l&&"vertical"!==r&&"textAlignRight","left"===l&&"vertical"!==r&&"textAlignLeft"],wrapper:["wrapper","vertical"===r&&"wrapperVertical"]};return(0,c.A)(d,Z,a)})(x);return(0,A.jsx)(U,(0,r.A)({as:d,className:(0,s.A)(b.root,l),role:m,ref:t,ownerState:x},f,{children:n?(0,A.jsx)($,{className:b.wrapper,ownerState:x,children:n}):null}))}));ee.muiSkipListHighlight=!0;const te=ee,ie=(0,p.Ay)(n.A)({display:"flex",flexDirection:"column",width:"100%",alignItems:"center",marginTop:50,opacity:.8}),ae=(0,p.Ay)(te)({width:"100%",marginTop:10}),ne=e=>{let{message:t}=e;return(0,A.jsxs)(ie,{children:[(0,A.jsx)(O.A,{children:t.heading}),(0,A.jsx)(O.A,{children:t.subHeading}),(0,A.jsx)(ae,{})]})};var oe=i(3771);const re=()=>{var e,t;const[i,o]=(0,l.useState)(!1),[r,s]=(0,l.useState)([]),{toggle:c}=(0,a.KC)(),{type:d}=(0,a.g)(),h=(0,D.A)(_.y.getEmailFromType),p=(0,D.A)(_.y.deleteEmails),u=(0,D.A)(_.y.moveEmailsToBin);(0,l.useEffect)((()=>{h.call({},d)}),[d,i]);return(0,A.jsxs)(n.A,{style:c?{marginLeft:"250px",width:"84%"}:{width:"100%"},children:[(0,A.jsxs)(n.A,{style:{padding:"20px 10px 0 10px",display:"flex",alignItems:"center"},children:[(0,A.jsx)(P,{size:"small",onChange:e=>(e=>{if(e.target.checked){var t;const e=null===h||void 0===h||null===(t=h.response)||void 0===t?void 0:t.map((e=>e._id));s(e)}else s([])})(e)}),(0,A.jsx)(K.A,{onClick:e=>("bin"===d?p.call(r):u.call(r),void o((e=>!e)))})]}),(0,A.jsx)(N.A,{children:null===h||void 0===h||null===(e=h.response)||void 0===e?void 0:e.map((e=>(0,A.jsx)(J,{email:e,setStarredEmail:o,selectedEmails:r,setSelectedEmails:s},e.id)))}),0===(null===h||void 0===h||null===(t=h.response)||void 0===t?void 0:t.length)&&(0,A.jsx)(ne,{message:oe.Rb[d]})]})}},3771:(e,t,i)=>{i.d(t,{Fk:()=>n,Rb:()=>o,_3:()=>a});const a="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",n="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",o={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},7592:(e,t,i)=>{i.d(t,{A:()=>r});var a=i(7154);const n=async(e,t,i)=>await(0,a.A)({method:e.method,url:"".concat("http://localhost:8000","/").concat(e.endpoint,"/").concat(i),data:t});var o=i(5043);const r=e=>{const[t,i]=(0,o.useState)(null),[a,r]=(0,o.useState)(""),[l,s]=(0,o.useState)(!1);return{call:async function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i(null),r(""),s(!0);try{let a=await n(e,t,o);i(a.data)}catch(a){r(a.message)}finally{s(!1)}},response:t,error:a,isLoading:l}}},3697:(e,t,i)=>{i.d(t,{y:()=>a});const a={saveSentEmails:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},toggleStarredMails:{endpoint:"starred",method:"POST"},deleteEmails:{endpoint:"delete",method:"DELETE"},moveEmailsToBin:{endpoint:"bin",method:"POST"}}}}]);
//# sourceMappingURL=86.e2ad6acb.chunk.js.map