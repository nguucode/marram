import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{g as i,h as a,n as o,t as s}from"./useRenderElement-euNwqn97.js";import{n as c,t as l}from"./utils-CUvRSo4U.js";import{t as u}from"./jsx-runtime-DeHZSEgm.js";import{c as d,d as f,l as p,u as m}from"./useButton-BTBXVE0b.js";import{Dt as ee,Ht as h,Sn as te,Tt as ne,Ut as g,Vt as _,an as re,at as v,cn as y,dt as b,en as x,in as S,n as ie,rn as ae,t as C,wn as oe,xn as se}from"./DirectionContext-jwbrgzG8.js";import{n as ce,t as w}from"./Button-DslpGgPR.js";import{t as le,u as T}from"./blocks-COhIzeP7.js";import{i as ue,n as de,r as fe,t as E}from"./useCompositeListItem-CvQeXHj_.js";import{n as D,t as pe}from"./useValueAsRef-Ckg6dwN5.js";import{n as O,r as me,t as he}from"./visuallyHidden-DpEW8Wz9.js";import{a as k,b as A,c as ge,d as _e,f as ve,g as ye,h as be,i as xe,l as Se,s as Ce,u as we,y as Te}from"./useLabel-Iqf2MX-X.js";import{n as Ee,t as j}from"./useAriaLabelledBy-rG2zgu5g.js";import{n as De,t as Oe}from"./useValueChanged-Dw0jvyHd.js";import{n as ke,t as Ae}from"./Separator-DOU11_UA.js";import{a as je,n as M,t as Me}from"./InputField-BYpHjEjn.js";function Ne(){let e=N.useContext(Fe);if(e===void 0)throw Error(a(98));return e}function Pe(e,t,n){return{...e,value:t,index:n,filled:t!==``}}var N,Fe;function Ie(){return(Ie=t((()=>{i(),N=e(r(),1),Fe=N.createContext(void 0)})))()}var Le,Re;function ze(){return(ze=t((()=>{A(),Le={value:()=>null,length:()=>null,...Te},Re={value:()=>null,index:()=>null,...Te}})))()}function Be(e){return e===`none`?null:Ke[e]}function Ve(e){return(e??``).replace(/\s/g,``)}function He(e,t){return t?e.replace(t.regexp,``):e}function Ue(e,t,n,r){let i=Ve(e),a=Be(n),o=He(i,a),s=i.length>o.length;if(r){let e=r(o);s||=o.length>e.length,o=He(e,a),s||=e.length>o.length}let c=t<0?0:t,l=Array.from(o);return[l.slice(0,c).join(``),s||l.length>c]}function We(e,t,n,r){return Ue(e,t,n,r)[0]}function Ge(e,t,n,r,i,a){let o=We(n,r,i,a);return We(`${e.slice(0,t)}${o}${e.slice(t+o.length)}`,r,i,a)}function P(e,t){return t<0||t>=e.length?e:`${e.slice(0,t)}${e.slice(t+1)}`}var Ke;function F(){return(F=t((()=>{Ke={numeric:{slotPattern:`\\d{1}`,getRootPattern:e=>`\\d{${e}}`,regexp:/[^\d]/g,inputMode:`numeric`},alpha:{slotPattern:`[a-zA-Z]{1}`,getRootPattern:e=>`[a-zA-Z]{${e}}`,regexp:/[^a-zA-Z]/g,inputMode:`text`},alphanumeric:{slotPattern:`[a-zA-Z0-9]{1}`,getRootPattern:e=>`[a-zA-Z0-9]{${e}}`,regexp:/[^a-zA-Z0-9]/g,inputMode:`text`}}})))()}function qe(...e){let t=e.flatMap(e=>e?.split(/\s+/).filter(Boolean)??[]);return t.length>0?Array.from(new Set(t)).join(` `):void 0}var I,Je,L;function R(){return(R=t((()=>{I=e(r(),1),se(),d(),m(),pe(),he(),ee(),ue(),be(),_e(),Se(),Ce(),j(),xe(),s(),Oe(),g(),x(),Ie(),ze(),F(),Je=u(),L=I.forwardRef(function(e,t){let{"aria-describedby":n,"aria-labelledby":r,id:i,autoComplete:a=`one-time-code`,defaultValue:s=``,value:c,onValueChange:l,onValueComplete:u,form:d,length:m,autoSubmit:ee=!1,mask:g=!1,inputMode:re,validationType:v=`numeric`,normalizeValue:y,disabled:b=!1,readOnly:x=!1,required:S=!1,name:ie,onValueInvalid:ae,render:C,className:se,style:ce,...w}=e,{setDirty:le,validityData:T,disabled:ue,setFilled:de,invalid:E,name:pe,state:he,validation:A,validationMode:_e,setFocused:be,setTouched:xe}=ye(),{clearErrors:Se}=we(),{getDescriptionProps:Ce,labelId:Te}=ge(),j=ue||b,Oe=pe??ie,[ke,Ae]=te({controlled:c,default:s,name:`OTPField`,state:`value`}),je=I.useRef(null),M=I.useRef([]),Me=I.useRef(null),Ne=I.useRef(null),Pe=I.useMemo(()=>({get current(){return M.current[0]??null}}),[]),N=k({id:i}),Ie=Ee(r,Te,Pe,!0,N),Re=r==null?Ie:void 0,ze=qe(n,Ce({})[`aria-describedby`]),Ve=Be(v),He=Ve?.slotPattern,Ge=Ve?.getRootPattern(m),P=re??Ve?.inputMode,Ke=Number.isInteger(m)&&m>0,F=We(ke,m,v,y),L=D(F),R=F!==``,[Ye,Xe]=I.useState(0),[Ze,Qe]=I.useState(()=>Math.min(F.length,m-1)),[z,$e]=I.useState(!1),et=z?Math.min(Ze,Math.max(m-1,0)):Math.min(F.length,m-1);p(()=>{de(R)},[R,de]),ve(Pe,N,F,void 0,!j,ie);let B=f(e=>{let t=Math.min(Math.max(e,0),Math.max(M.current.length-1,0)),n=M.current[t];n?.focus(),n?.select()}),tt=f((e,t)=>{Me.current={index:e,value:t}});function nt(){let e=A.inputRef.current?.form??M.current[0]?.form??null;if(d){let t=oe(je.current).getElementById(d);t?.tagName===`FORM`&&(e=t)}e&&typeof e.requestSubmit==`function`&&e.requestSubmit()}function rt(e,t){u?.(e,t),ee&&nt()}De(F,()=>{Se(Oe),le(F!==T.initialValue),A.change(F);let e=Me.current;e!=null&&(Me.current=null,e.value===F&&B(e.index));let t=Ne.current;t!=null&&(Ne.current=null,t.value===F&&rt(F,t.eventDetails))});let it=f((e,t)=>{let n=We(e,m,v,y),r=(t.reason===`input-change`||t.reason===`input-paste`)&&n.length===m&&(L.current.length!==m||t.reason===`input-paste`)?h(t.reason,t.event):null;return n===L.current?(r!=null&&rt(n,r),null):(l?.(n,t),t.isCanceled?null:(Ae(n),r==null?n.length!==m&&(Ne.current=null):Ne.current={value:n,eventDetails:r},n))}),at=f((e,t)=>{ae?.(e,t)}),ot=f((e,t)=>{if(e>L.current.length){B(Math.min(L.current.length,m-1));return}Qe(e),$e(!0),be(!0),t.currentTarget.select()}),V=f(e=>{ne(je.current,e.relatedTarget)||(xe(!0),$e(!1),be(!1),_e===`onBlur`&&A.commit(L.current))}),st=I.useCallback(e=>{if(N!=null)return e===0?N:`${N}-${e+1}`},[N]),H=I.useMemo(()=>({...he,complete:F.length===m,disabled:j,filled:R,focused:z,length:m,readOnly:x,required:S,value:F}),[j,he,R,z,m,x,S,F]),ct=I.useMemo(()=>({autoComplete:a,activeIndex:et,disabled:j,form:d,focusInput:B,queueFocusInput:tt,getInputId:st,handleInputBlur:V,handleInputFocus:ot,inputMode:P,inputAriaLabelledBy:Re,invalid:E,length:m,mask:g,pattern:He,reportValueInvalid:at,readOnly:x,required:S,normalizeValue:y,setValue:it,state:H,validationType:v,value:F}),[et,a,j,B,d,st,V,ot,P,Re,E,m,g,He,tt,x,at,S,y,it,H,v,F]),U=o(`div`,e,{ref:[t,je],state:H,props:[{role:`group`,"aria-describedby":ze,"aria-labelledby":Ie},w],stateAttributesMapping:Le});return(0,Je.jsx)(fe,{elementsRef:M,onMapChange:e=>{Xe(e.size)},children:(0,Je.jsxs)(Fe.Provider,{value:ct,children:[U,Ke&&(0,Je.jsx)(`input`,{...A.getValidationProps(j,{onFocus(){B(0)},onChange(e){if(e.nativeEvent.defaultPrevented||j||x)return;let t=e.currentTarget.value,[n,r]=Ue(t,m,v,y);r&&at(t,h(`input-change`,e.nativeEvent));let i=it(n,_(`input-change`,e.nativeEvent));i!=null&&i!==``&&tt(i.length-1,i)}}),ref:A.inputRef,type:`text`,id:N&&Oe==null?`${N}-hidden-input`:void 0,form:d,name:Oe,value:F,autoComplete:a,inputMode:P,minLength:m,maxLength:m,pattern:Ge,disabled:j,readOnly:x,required:S,"aria-hidden":!0,tabIndex:-1,style:Oe?me:O})]})})})})))()}var Ye,Xe;function Ze(){return(Ze=t((()=>{Ye=e(r(),1),v(),E(),C(),s(),g(),x(),Ie(),ze(),F(),Xe=Ye.forwardRef(function(e,t){let{"aria-label":n,"aria-labelledby":r,render:i,className:a,style:s,...c}=e,{activeIndex:l,autoComplete:u,disabled:d,form:f,focusInput:p,queueFocusInput:m,getInputId:ee,handleInputBlur:te,handleInputFocus:ne,inputMode:g,inputAriaLabelledBy:v,invalid:x,length:C,mask:oe,pattern:se,reportValueInvalid:ce,readOnly:w,required:le,normalizeValue:T,setValue:ue,state:fe,validationType:E,value:D}=Ne(),{ref:pe,index:O}=de({guess:!0}),me=Ye.useRef(null),he=ie(),k=D[O]??``,A=Pe(fe,k,O),ge=n,_e=r??v,ve=O===0?void 0:ge,ye={id:ee(O),value:k,type:oe?`password`:`text`,inputMode:g,autoComplete:O===0?u:`off`,autoCorrect:`off`,spellCheck:`false`,enterKeyHint:O===C-1?`done`:`next`,maxLength:O===0?C:void 0,tabIndex:l===O?0:-1,disabled:d,form:f,pattern:se,readOnly:w,required:le,"aria-labelledby":ve==null?_e:void 0,"aria-invalid":!d&&x?!0:void 0,"aria-label":ve,onMouseDown(e){e.defaultPrevented||d||(e.preventDefault(),p(O))},onFocus(e){e.defaultPrevented||d||ne(O,e)},onBlur(e){e.defaultPrevented||te(e)},onChange(e){if(e.defaultPrevented||d||w)return;let t=e.currentTarget.value,[n,r]=Ue(t,C,E,T);if(r&&ce(t,h(ae,e.nativeEvent)),n===``){t===``?ue(P(D,O),_(S,e.nativeEvent)):k!==``&&(e.currentTarget.value=k,e.currentTarget.select());return}let i=Ge(D,O,n,C,E,T),a=ue(i,_(ae,e.nativeEvent));if(a!=null){let e=Math.min(O+n.length,C-1);m(e,a)}},onKeyDown(e){if(e.defaultPrevented||d)return;let t=Math.max(C-1,0),n=Math.min(D.length,t),r=(e.ctrlKey||e.metaKey)&&!e.altKey,i=he===`rtl`,a=i?`ArrowRight`:`ArrowLeft`,o=i?`ArrowLeft`:`ArrowRight`;if(e.key===a){b(e),p(r?0:Math.max(0,O-1));return}if(e.key===o){b(e),p(r?n:Math.min(t,O+1));return}if(e.key===`Home`||e.key===`ArrowUp`){b(e),p(0);return}if(e.key===`End`||e.key===`ArrowDown`){b(e),p(n);return}if(w)return;function s(t,n){let r=ue(t,_(y,e.nativeEvent));r!=null&&m(n,r)}if(e.key===`Backspace`&&r){b(e),s(``,0);return}if(e.key===`Delete`){b(e),s(P(D,O),O);return}let c=e.currentTarget.value,l=e.currentTarget.selectionStart===0&&e.currentTarget.selectionEnd===c.length;if(e.key.length===1&&l&&k===e.key){b(e),O<C-1&&p(O+1);return}if(e.key===`Backspace`){b(e);let t=Math.max(0,O-1);s(P(D,k===``?t:O),t)}},onPaste(e){if(e.defaultPrevented||d||w)return;let t=``;try{t=e.clipboardData?.getData(`text/plain`)??``}catch{return}e.preventDefault();let[n,r]=Ue(t,C,E,T);if(r&&ce(t,h(re,e.nativeEvent)),n===``)return;let i=ue(Ge(D,O,n,C,E,T),_(re,e.nativeEvent));if(i!=null){let e=Math.min(O+n.length,C-1);m(e,i)}}};return o(`input`,e,{ref:[t,pe,me],state:A,props:[ye,c],stateAttributesMapping:Re})})})))()}function Qe({onResend:e,cooldown:t=30,label:n=`Resend code`,disabled:r,className:i}){let[a,o]=(0,z.useState)(t),[s,c]=(0,z.useState)(!1);(0,z.useEffect)(()=>{if(a<=0)return;let e=setTimeout(()=>o(a-1),1e3);return()=>clearTimeout(e)},[a]);async function l(){c(!0);try{await e()}catch{return}finally{c(!1)}o(t)}return(0,$e.jsx)(w,{variant:`secondary`,appearance:`ghost`,size:`sm`,className:i,disabled:r||a>0,isLoading:s,onClick:l,children:a>0?`${n} (${et(a)})`:n})}var z,$e,et;function B(){return(B=t((()=>{z=r(),ce(),$e=u(),et=e=>`${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`,Qe.__docgenInfo={description:`Internal: the small "Resend code" / "Resend link" button shared by OTP
Input and the auth templates, disabled with a countdown while it cools
down. Its name carries the time left.`,methods:[],displayName:`ResendButton`,props:{onResend:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void | Promise<unknown>`,signature:{arguments:[],return:{name:`union`,raw:`void | Promise<unknown>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`unknown`}],raw:`Promise<unknown>`}]}}},description:`Sends again. Return a promise to show the button busy until it settles:
the cooldown restarts only if it resolves, so a failed send can be retried.`},cooldown:{required:!1,tsType:{name:`number`},description:`Seconds before resend is allowed, from mount and after each send.`,defaultValue:{value:`30`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Resend code'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var tt,nt,rt,it,at,ot,V;function st(){return(st=t((()=>{tt=`_root_140ax_4`,nt=`_sm_140ax_12`,rt=`_md_140ax_13`,it=`_cell_140ax_24`,at=`_separator_140ax_64`,ot=`_resend_140ax_69`,V={root:tt,sm:nt,md:rt,cell:it,separator:at,resend:ot}})))()}function H({ref:e,length:t=6,groupSize:n,onValueChange:r,onValueComplete:i,onResend:a,resendCooldown:o=30,resendLabel:s=`Resend code`,slotLabel:c=lt,label:u,helperText:d,validationState:f,size:p=`md`,name:m,disabled:ee,required:h,className:te,...ne}){let g=(0,ct.useRef)(null);async function _(){await a?.(),g.current?.focus()}return(0,U.jsx)(Me,{label:u,helperText:d,validationState:f,required:h,disabled:ee,name:m,className:te,footer:a&&(0,U.jsx)(Qe,{className:V.resend,cooldown:o,label:s,disabled:ee,onResend:_}),children:(0,U.jsx)(L,{...ne,length:t,required:h,onValueChange:r&&(e=>r(e)),onValueComplete:i&&(e=>i(e)),className:l(V.root,V[p]),children:Array.from({length:t},(r,i)=>(0,U.jsxs)(ct.Fragment,{children:[n&&i>0&&i%n===0&&(0,U.jsx)(Ae,{className:V.separator,children:`–`}),(0,U.jsx)(Xe,{ref:i===0?t=>{g.current=t,M(e,t)}:void 0,"aria-label":i===0?void 0:c(i+1,t),className:V.cell})]},i))})})}var ct,U,lt;function ut(){return(ut=t((()=>{ct=r(),R(),ke(),Ze(),B(),c(),je(),st(),U=u(),lt=(e,t)=>`Character ${e} of ${t}`,H.__docgenInfo={description:``,methods:[],displayName:`OTPInput`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLInputElement`}],raw:`Ref<HTMLInputElement>`},description:`Points at the first cell.`},length:{required:!1,tsType:{name:`number`},description:`Number of characters.`,defaultValue:{value:`6`,computed:!1}},groupSize:{required:!1,tsType:{name:`number`},description:`Splits the cells into groups of this many, with a dash between groups.`},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onValueComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called once every cell is filled, typed or pasted.`},validationType:{required:!1,tsType:{name:`union`,raw:`'numeric' | 'alpha' | 'alphanumeric'`,elements:[{name:`literal`,value:`'numeric'`},{name:`literal`,value:`'alpha'`},{name:`literal`,value:`'alphanumeric'`}]},description:`Which characters a cell accepts; others are dropped.`},mask:{required:!1,tsType:{name:`boolean`},description:`Shows dots instead of the characters.`},autoSubmit:{required:!1,tsType:{name:`boolean`},description:`Submits the surrounding form once every cell is filled.`},onResend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void | Promise<unknown>`,signature:{arguments:[],return:{name:`union`,raw:`void | Promise<unknown>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`unknown`}],raw:`Promise<unknown>`}]}}},description:`Shows a resend button under the cells, disabled while the cooldown counts
down. Return a promise to show the button busy until it settles: the
cooldown restarts only if it resolves, so a failed send can be retried.`},resendCooldown:{required:!1,tsType:{name:`number`},description:`Seconds before resend is allowed, from mount and after each resend.`,defaultValue:{value:`30`,computed:!1}},resendLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Resend code'`,computed:!1}},slotLabel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(position: number, length: number) => string`,signature:{arguments:[{type:{name:`number`},name:`position`},{type:{name:`number`},name:`length`}],return:{name:`string`}}},description:`The accessible name of each cell after the first, which the label names.`,defaultValue:{value:"(position: number, length: number) => `Character ${position} of ${length}`",computed:!1}},label:{required:!0,tsType:{name:`ReactNode`},description:`Names the group and the first cell. Required: Base UI names the first cell only through a label.`},helperText:{required:!1,tsType:{name:`ReactNode`},description:``},validationState:{required:!1,tsType:{name:`union`,raw:`'default' | 'success' | 'error'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},readOnly:{required:!1,tsType:{name:`boolean`},description:``},required:{required:!1,tsType:{name:`boolean`},description:``},id:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var dt=n({Alphanumeric:()=>bt,Anatomy:()=>Z,Controlled:()=>wt,Default:()=>q,Disabled:()=>St,DoOneField:()=>Q,DontLongCode:()=>$,Grouped:()=>_t,InAForm:()=>X,Masked:()=>xt,Paste:()=>gt,ReadOnly:()=>Ct,Resend:()=>Y,ResendFails:()=>yt,Sizes:()=>J,Validation:()=>vt,__namedExportsOrder:()=>Et,anatomyParts:()=>Tt,default:()=>mt}),ft,W,G,K,pt,mt,ht,q,gt,_t,J,vt,Y,yt,bt,xt,St,Ct,wt,X,Tt,Z,Q,$,Et;function Dt(){return(Dt=t((()=>{ft=r(),le(),ut(),W=u(),{expect:G,fn:K,waitFor:pt}=__STORYBOOK_MODULE_TEST__,mt={title:`Components/Inputs/OTPInput`,tags:[`beta`],component:H,argTypes:{label:{description:"The visible name, above the cells. A real `<label>` for the first cell; it also names the group. Required.",control:`text`,table:{type:{summary:`ReactNode`}}},helperText:{description:"Under the cells, read as the group's description. The error message when `validationState` is `error`.",control:`text`,table:{type:{summary:`ReactNode`}}},validationState:{description:"Colours every cell's edge and the helper text. `error` also sets `aria-invalid` on the cells.",control:`inline-radio`,options:[`default`,`success`,`error`],table:{type:{summary:`'default' | 'success' | 'error'`},defaultValue:{summary:`'default'`}}},size:{description:"Square cells of 32px (`sm`) or 40px (`md`), as tall as a Text Input of the same size.",control:`inline-radio`,options:[`sm`,`md`],table:{type:{summary:`'sm' | 'md'`},defaultValue:{summary:`'md'`}}},length:{description:`How many characters the code has, one cell each.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`6`}}},groupSize:{description:"Splits the cells into groups of this many, with a dash between groups: `3` shows a 6-digit code as 3 – 3.",control:`number`,table:{type:{summary:`number`}}},value:{description:"The code, controlled. Pair with `onValueChange`.",control:!1,table:{type:{summary:`string`}}},defaultValue:{description:`The starting code, uncontrolled.`,control:`text`,table:{type:{summary:`string`}}},onValueChange:{description:`Called with the whole code on every change: typing, deleting, pasting or autofill.`,control:!1,table:{type:{summary:`(value: string) => void`}}},onValueComplete:{description:`Called once every cell is filled. The place to verify the code.`,control:!1,table:{type:{summary:`(value: string) => void`}}},validationType:{description:`Which characters a cell accepts; the rest are dropped as typed or pasted. Also picks the mobile keyboard.`,control:`inline-radio`,options:[`numeric`,`alpha`,`alphanumeric`],table:{type:{summary:`'numeric' | 'alpha' | 'alphanumeric'`},defaultValue:{summary:`'numeric'`}}},mask:{description:`Shows dots instead of the characters, for a code read over someone's shoulder.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},autoSubmit:{description:`Submits the surrounding form once every cell is filled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onResend:{description:"Shows a resend button under the cells, disabled with a countdown for `resendCooldown` seconds from mount and after each send. Return a promise to show it busy; the cooldown restarts only if it resolves. To restart the countdown from outside (a new channel), remount with a new `key`.",control:!1,table:{type:{summary:`() => void | Promise<unknown>`}}},resendCooldown:{description:"Seconds before resend is allowed. `0` allows it at once. Read on mount and on each send.",control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`30`}}},resendLabel:{description:"The resend button's text. The countdown follows it in brackets, as `m:ss`.",control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Resend code'`}}},slotLabel:{description:`The accessible name of each cell after the first; the label names the first. Translate it with the rest of the screen.`,control:!1,table:{type:{summary:`(position: number, length: number) => string`},defaultValue:{summary:`"Character 2 of 6"`}}},disabled:{description:`Dimmed, out of the tab order. The resend button too.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},readOnly:{description:`Focusable and submitted, but typing does not change it.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},required:{description:`Must have a value to submit. Adds an asterisk to the label, hidden from screen readers.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},name:{description:`Submitted with the form, as the whole code in one value.`,control:!1,table:{type:{summary:`string`}}},ref:{description:`Points at the first cell.`,control:!1,table:{type:{summary:`Ref`}}},id:{description:"The id of the first cell; the others take `{id}-2`, `{id}-3` and so on.",control:!1,table:{type:{summary:`string`}}},className:{description:`Added to the outer element, the field with its label and helper text.`,control:!1,table:{type:{summary:`string`}}}},args:{label:`Verification code`,onValueChange:K(),onValueComplete:K()},excludeStories:[`anatomyParts`]},ht=e=>[...e.querySelectorAll(`[role="group"] input`)],q={play:async({canvas:e,canvasElement:t,userEvent:n,args:r})=>{let i=e.getByRole(`textbox`,{name:`Verification code`}),a=ht(t);await G(a).toHaveLength(6),await G(e.getByRole(`group`,{name:`Verification code`})).toBeVisible(),await G(a[1]).toHaveAccessibleName(`Character 2 of 6`),await G(i).toHaveAttribute(`autocomplete`,`one-time-code`),await n.tab(),await G(i).toHaveFocus(),await G(a.filter(e=>e.tabIndex===0)).toHaveLength(1),await n.keyboard(`12a3`),await G(r.onValueChange).toHaveBeenLastCalledWith(`123`),await G(a[3]).toHaveFocus(),await n.keyboard(`{Backspace}`),await G(r.onValueChange).toHaveBeenLastCalledWith(`12`),await n.keyboard(`{ArrowLeft}`),await G(a[1]).toHaveFocus(),await n.keyboard(`{ArrowRight}`),await G(a[2]).toHaveFocus(),await n.keyboard(`3456`),await G(r.onValueComplete).toHaveBeenCalledWith(`123456`)}},gt={play:async({canvas:e,canvasElement:t,userEvent:n,args:r})=>{await n.click(e.getByRole(`textbox`,{name:`Verification code`})),await n.paste(`987 654`),await G(ht(t).map(e=>e.value).join(``)).toBe(`987654`),await G(r.onValueComplete).toHaveBeenCalledWith(`987654`)}},_t={args:{groupSize:3},play:async({canvas:e})=>{await G(e.getAllByRole(`separator`)).toHaveLength(1)}},J={args:{groupSize:3,defaultValue:`1234`},render:e=>(0,W.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[`sm`,`md`].map(t=>(0,W.jsx)(H,{...e,size:t,label:t},t))})},vt={args:{validationState:`error`,helperText:`That code is wrong. Check it and try again.`,defaultValue:`123456`},play:async({canvas:e,canvasElement:t})=>{for(let e of ht(t))await G(e).toHaveAttribute(`aria-invalid`,`true`);await G(e.getByRole(`group`)).toHaveAccessibleDescription(`That code is wrong. Check it and try again.`)}},Y={args:{onResend:K(),resendCooldown:1},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:/resend code/i});await G(r).toBeDisabled(),await G(r).toHaveTextContent(`Resend code (0:01)`),await pt(()=>G(r).toBeEnabled(),{timeout:3e3}),await G(r).toHaveTextContent(/^Resend code$/),await t.click(r),await G(n.onResend).toHaveBeenCalledTimes(1),await pt(()=>G(r).toBeDisabled()),await G(e.getByRole(`textbox`,{name:`Verification code`})).toHaveFocus()}},yt={args:{onResend:K(()=>Promise.reject(Error(`offline`))),resendCooldown:0},play:async({canvas:e,userEvent:t,args:n})=>{let r=e.getByRole(`button`,{name:/resend code/i});await t.click(r),await G(n.onResend).toHaveBeenCalledTimes(1),await pt(()=>G(r).not.toHaveAttribute(`aria-busy`)),await G(r).toBeEnabled(),await G(r).toHaveTextContent(/^Resend code$/)}},bt={args:{label:`Backup code`,validationType:`alphanumeric`,length:8,groupSize:4},play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`textbox`,{name:`Backup code`})),await t.keyboard(`AB-12`),await G(n.onValueChange).toHaveBeenLastCalledWith(`AB12`)}},xt={args:{mask:!0,defaultValue:`123`},play:async({canvasElement:e})=>{await G(ht(e)[0]).toHaveAttribute(`type`,`password`)}},St={args:{disabled:!0,onResend:K(),resendCooldown:0},play:async({canvas:e,canvasElement:t})=>{for(let e of ht(t))await G(e).toBeDisabled();await G(e.getByRole(`button`,{name:/resend code/i})).toBeDisabled()}},Ct={args:{readOnly:!0,defaultValue:`123456`},play:async({canvas:e,userEvent:t,args:n})=>{await t.click(e.getByRole(`textbox`,{name:`Verification code`})),await t.keyboard(`{Backspace}9`),await G(n.onValueChange).not.toHaveBeenCalled()}},wt={render:function(e){let[t,n]=(0,ft.useState)(``);return(0,W.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,justifyItems:`start`},children:[(0,W.jsx)(H,{...e,value:t,onValueChange:n}),(0,W.jsxs)(`span`,{children:[`Code: `,t||`empty`]})]})},play:async({canvas:e,userEvent:t})=>{await t.click(e.getByRole(`textbox`,{name:`Verification code`})),await t.keyboard(`42`),await G(e.getByText(`Code: 42`)).toBeVisible()}},X={render:e=>(0,W.jsx)(`form`,{"aria-label":`Verify`,children:(0,W.jsx)(H,{...e,name:`code`,defaultValue:`246810`})}),play:async({canvasElement:e})=>{await G(new FormData(e.querySelector(`form`)).get(`code`)).toBe(`246810`)}},Tt=[{name:`Label`,selector:`label`,description:`Names the group and the first cell. Clicking it focuses the first cell.`},{name:`Cell`,selector:`[role="group"] > input:first-of-type`,description:`One character, centred in tabular figures. Each cell is its own box.`},{name:`Group separator`,selector:`[role="separator"]`,description:"A dash between groups of `groupSize` cells. Optional."},{name:`Helper text`,selector:`p`,description:`The group's description. The error message when invalid.`},{name:`Resend button`,selector:`button`,description:`Sends a new code. Disabled with a countdown during the cooldown. Optional.`}],Z={tags:[`!dev`],args:{groupSize:3,helperText:`We sent a code to your phone.`,onResend:K(),resendCooldown:0},play:async({canvasElement:e})=>{let t=await T(e,Tt);await G(t[4]).toHaveAccessibleName(`Resend code`)}},Q={args:{helperText:`Sent to •••• 4821.`,onResend:K(),resendCooldown:0}},$={tags:[`!dev`],args:{label:`Licence key`,length:16,validationType:`alphanumeric`}},Et=[`Default`,`Paste`,`Grouped`,`Sizes`,`Validation`,`Resend`,`ResendFails`,`Alphanumeric`,`Masked`,`Disabled`,`ReadOnly`,`Controlled`,`InAForm`,`anatomyParts`,`Anatomy`,`DoOneField`,`DontLongCode`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement,
    userEvent,
    args
  }) => {
    const first = canvas.getByRole('textbox', {
      name: 'Verification code'
    });
    const all = cells(canvasElement);
    await expect(all).toHaveLength(6);
    // The label names the group and the first cell; the others say where they are.
    await expect(canvas.getByRole('group', {
      name: 'Verification code'
    })).toBeVisible();
    await expect(all[1]).toHaveAccessibleName('Character 2 of 6');
    // Phones offer the code from a text message into the first cell.
    await expect(first).toHaveAttribute('autocomplete', 'one-time-code');
    // One tab stop: only the cell to type into is in the tab order.
    await userEvent.tab();
    await expect(first).toHaveFocus();
    await expect(all.filter(c => c.tabIndex === 0)).toHaveLength(1);
    // Typing fills a cell and moves on; letters are dropped from a numeric code.
    await userEvent.keyboard('12a3');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('123');
    await expect(all[3]).toHaveFocus();
    // Backspace clears the cell before and moves back to it.
    await userEvent.keyboard('{Backspace}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('12');
    // Left and Right move between cells.
    await userEvent.keyboard('{ArrowLeft}');
    await expect(all[1]).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    await expect(all[2]).toHaveFocus();
    await userEvent.keyboard('3456');
    await expect(args.onValueComplete).toHaveBeenCalledWith('123456');
  }
}`,...q.parameters?.docs?.source}}},gt.parameters={...gt.parameters,docs:{...gt.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    canvasElement,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('textbox', {
      name: 'Verification code'
    }));
    // A pasted code, spaces and all, fills every cell at once.
    await userEvent.paste('987 654');
    await expect(cells(canvasElement).map(c => c.value).join('')).toBe('987654');
    await expect(args.onValueComplete).toHaveBeenCalledWith('987654');
  }
}`,...gt.parameters?.docs?.source}}},_t.parameters={..._t.parameters,docs:{..._t.parameters?.docs,source:{originalSource:`{
  args: {
    groupSize: 3
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getAllByRole('separator')).toHaveLength(1);
  }
}`,..._t.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    groupSize: 3,
    defaultValue: '1234'
  },
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    justifyItems: 'start'
  }}>
      {(['sm', 'md'] as const).map(size => <OTPInput key={size} {...args} size={size} label={size} />)}
    </div>
}`,...J.parameters?.docs?.source}}},vt.parameters={...vt.parameters,docs:{...vt.parameters?.docs,source:{originalSource:`{
  args: {
    validationState: 'error',
    helperText: 'That code is wrong. Check it and try again.',
    defaultValue: '123456'
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    for (const cell of cells(canvasElement)) await expect(cell).toHaveAttribute('aria-invalid', 'true');
    await expect(canvas.getByRole('group')).toHaveAccessibleDescription('That code is wrong. Check it and try again.');
  }
}`,...vt.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    onResend: fn(),
    resendCooldown: 1
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const button = canvas.getByRole('button', {
      name: /resend code/i
    });
    // Disabled while it counts down, with the time left in its name.
    await expect(button).toBeDisabled();
    await expect(button).toHaveTextContent('Resend code (0:01)');
    await waitFor(() => expect(button).toBeEnabled(), {
      timeout: 3000
    });
    await expect(button).toHaveTextContent(/^Resend code$/);
    await userEvent.click(button);
    await expect(args.onResend).toHaveBeenCalledTimes(1);
    // Pressing it starts the cooldown again, and focus goes to the first cell
    // for the new code instead of being lost with the disabled button.
    await waitFor(() => expect(button).toBeDisabled());
    await expect(canvas.getByRole('textbox', {
      name: 'Verification code'
    })).toHaveFocus();
  }
}`,...Y.parameters?.docs?.source}}},yt.parameters={...yt.parameters,docs:{...yt.parameters?.docs,source:{originalSource:`{
  args: {
    onResend: fn(() => Promise.reject(new Error('offline'))),
    resendCooldown: 0
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    const button = canvas.getByRole('button', {
      name: /resend code/i
    });
    await userEvent.click(button);
    await expect(args.onResend).toHaveBeenCalledTimes(1);
    // A failed send starts no cooldown: the button is ready to try again.
    await waitFor(() => expect(button).not.toHaveAttribute('aria-busy'));
    await expect(button).toBeEnabled();
    await expect(button).toHaveTextContent(/^Resend code$/);
  }
}`,...yt.parameters?.docs?.source}}},bt.parameters={...bt.parameters,docs:{...bt.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Backup code',
    validationType: 'alphanumeric',
    length: 8,
    groupSize: 4
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('textbox', {
      name: 'Backup code'
    }));
    await userEvent.keyboard('AB-12');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('AB12');
  }
}`,...bt.parameters?.docs?.source}}},xt.parameters={...xt.parameters,docs:{...xt.parameters?.docs,source:{originalSource:`{
  args: {
    mask: true,
    defaultValue: '123'
  },
  play: async ({
    canvasElement
  }) => {
    await expect(cells(canvasElement)[0]).toHaveAttribute('type', 'password');
  }
}`,...xt.parameters?.docs?.source}}},St.parameters={...St.parameters,docs:{...St.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    onResend: fn(),
    resendCooldown: 0
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    for (const cell of cells(canvasElement)) await expect(cell).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: /resend code/i
    })).toBeDisabled();
  }
}`,...St.parameters?.docs?.source}}},Ct.parameters={...Ct.parameters,docs:{...Ct.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: '123456'
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    await userEvent.click(canvas.getByRole('textbox', {
      name: 'Verification code'
    }));
    await userEvent.keyboard('{Backspace}9');
    await expect(args.onValueChange).not.toHaveBeenCalled();
  }
}`,...Ct.parameters?.docs?.source}}},wt.parameters={...wt.parameters,docs:{...wt.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [code, setCode] = useState('');
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'start'
    }}>
        <OTPInput {...args} value={code} onValueChange={setCode} />
        <span>Code: {code || 'empty'}</span>
      </div>;
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('textbox', {
      name: 'Verification code'
    }));
    await userEvent.keyboard('42');
    await expect(canvas.getByText('Code: 42')).toBeVisible();
  }
}`,...wt.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <form aria-label="Verify">
      <OTPInput {...args} name="code" defaultValue="246810" />
    </form>,
  play: async ({
    canvasElement
  }) => {
    await expect(new FormData(canvasElement.querySelector('form')!).get('code')).toBe('246810');
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    groupSize: 3,
    helperText: 'We sent a code to your phone.',
    onResend: fn(),
    resendCooldown: 0
  },
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[4]).toHaveAccessibleName('Resend code');
  }
}`,...Z.parameters?.docs?.source},description:{story:`Every part present.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'Sent to •••• 4821.',
    onResend: fn(),
    resendCooldown: 0
  }
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: one field for the whole code, labelled, with resend.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    label: 'Licence key',
    length: 16,
    validationType: 'alphanumeric'
  }
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: a long code split into cells nobody can scan.`,...$.parameters?.docs?.description}}}})))()}export{dt as a,Tt as c,ut as d,$ as i,Dt as l,q as n,Y as o,Q as r,J as s,Z as t,H as u};