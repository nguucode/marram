import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,c as i,d as a,f as o,i as s,l as c,o as l,p as u,r as ee,u as d}from"./iframe-CMvyrA4M.js";import{n as f,t as p}from"./Button-DslpGgPR.js";import{a as m,i as h,n as te,r as g}from"./Tag-CniBa3uD.js";import{n as _,t as v}from"./icon-Cjfg2BMt.js";import{r as y,t as ne}from"./Tooltip-MSPOG18s.js";import{n as re,t as ie}from"./Select-B89Zh-vF.js";import{c as ae,l as oe,r as b}from"./story-helpers-EInZsLED.js";import{n as se,t as ce}from"./Radio-CwpFjN6P.js";import{n as le,t as ue}from"./Popover-LrgjBncy.js";import{n as de,t as fe}from"./Switch-Dltae-DQ.js";import{n as pe,t as me}from"./Collapse-DzWTXvw_.js";import{n as he,t as ge}from"./EmptyState-BWYrKFsK.js";import{n as x,t as _e}from"./Spinner-BMBE6go-.js";import{n as ve,t as ye}from"./NumberInput-CNJIZJML.js";import{r as be,t as xe}from"./TextInput-CmSy_4xd.js";import{n as Se,t as Ce}from"./Search-DublCB1P.js";import{r as we,t as Te}from"./Modal-bajIGsOj.js";import{n as Ee,t as De}from"./ErrorState-jPZm1DQI.js";var Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,S;function kt(){return(kt=e((()=>{Oe=`_shell_1kq2t_4`,ke=`_header_1kq2t_15`,Ae=`_brand_1kq2t_23`,je=`_title_1kq2t_29`,Me=`_headerLink_1kq2t_38`,Ne=`_card_1kq2t_44`,Pe=`_columns_1kq2t_50`,Fe=`_aside_1kq2t_62`,Ie=`_center_1kq2t_68`,Le=`_browser_1kq2t_80`,Re=`_browserBody_1kq2t_98`,ze=`_drawer_1kq2t_105`,Be=`_filters_1kq2t_116`,Ve=`_count_1kq2t_122`,He=`_group_1kq2t_129`,Ue=`_groupTitle_1kq2t_135`,We=`_cards_1kq2t_143`,Ge=`_cardName_1kq2t_175`,Ke=`_toolbar_1kq2t_189`,qe=`_itemName_1kq2t_197`,Je=`_tools_1kq2t_210`,Ye=`_live_1kq2t_216`,Xe=`_frame_1kq2t_226`,Ze=`_overlay_1kq2t_233`,Qe=`_panel_1kq2t_244`,$e=`_missing_1kq2t_250`,et=`_hint_1kq2t_251`,tt=`_props_1kq2t_258`,nt=`_propsHeader_1kq2t_264`,rt=`_sections_1kq2t_273`,it=`_section_1kq2t_273`,at=`_anatomy_1kq2t_283`,ot=`_anatomyNumber_1kq2t_297`,st=`_specTable_1kq2t_303`,ct=`_specCaption_1kq2t_310`,lt=`_specRow_1kq2t_328`,ut=`_specPart_1kq2t_340`,dt=`_specValue_1kq2t_341`,ft=`_specProperty_1kq2t_347`,pt=`_specToken_1kq2t_348`,mt=`_specSwatch_1kq2t_357`,ht=`_prose_1kq2t_367`,gt=`_proseList_1kq2t_370`,_t=`_pair_1kq2t_383`,vt=`_example_1kq2t_389`,yt=`_exampleKind_1kq2t_422`,bt=`_themeSections_1kq2t_428`,xt=`_themeSection_1kq2t_428`,St=`_themeLegend_1kq2t_445`,Ct=`_swatchGroup_1kq2t_454`,wt=`_swatchLabel_1kq2t_460`,Tt=`_swatches_1kq2t_466`,Et=`_swatch_1kq2t_454`,Dt=`_themeFooter_1kq2t_502`,Ot=`_themeCopied_1kq2t_511`,S={shell:Oe,header:ke,brand:Ae,title:je,headerLink:Me,card:Ne,columns:Pe,aside:Fe,center:Ie,browser:Le,browserBody:Re,drawer:ze,filters:Be,count:Ve,group:He,groupTitle:Ue,cards:We,cardName:Ge,toolbar:Ke,itemName:qe,tools:Je,live:Ye,frame:Xe,overlay:Ze,panel:Qe,missing:$e,hint:et,props:tt,propsHeader:nt,sections:rt,section:it,anatomy:at,anatomyNumber:ot,specTable:st,specCaption:ct,specRow:lt,specPart:ut,specValue:dt,specProperty:ft,specToken:pt,specSwatch:mt,prose:ht,proseList:gt,pair:_t,example:vt,exampleKind:yt,themeSections:bt,themeSection:xt,themeLegend:St,swatchGroup:Ct,swatchLabel:wt,swatches:Tt,swatch:Et,themeFooter:Dt,themeCopied:Ot}})))()}function At(e){let t=e.specs?.pseudo??[],n=t.some(e=>e===`hover`||e.startsWith(`focus`)),r=[`default`,...t,...n?[`active`]:[],...rn(e)?[`disabled`]:[]],i=new Set,a=r.filter(e=>nn[e]&&!i.has(nn[e])&&i.add(nn[e]));return a.length>1?a:[]}function jt(e,t,n,r){let i=t.props.filter(e=>e.options);return e.filter(e=>{let t=i.filter(t=>t.options.map(String).includes(e.caption??``));return!t.length||t.some(t=>String(n[t.name]??t.default)===e.caption)}).map(e=>({...e,rows:e.rows.filter(e=>on(e,r))})).filter(e=>e.rows.length)}function Mt(e,t,n,r){if(!e.specs)return null;let i=[...e.specs.measurements,...e.specs.color];return{parts:e.specs.anatomy.map(({name:e,selector:t})=>({name:e,selector:t})),tokens:[...new Set(jt(i,e,t,n).flatMap(e=>e.rows.map(e=>e.token)))],highlight:r&&{part:s(r.part,e.specs.anatomy.map(e=>e.name))??``,property:r.property,token:r.token},...n==="default"||n===`disabled`?{}:{pseudo:n}}}function Nt(e){let t=new URLSearchParams(location.search),n=$t.find(([e])=>e===t.get(`tab`))?.[0]??`playground`,r=e.find(e=>e.id===t.get(`item`))??e.find(e=>e.kind===`component`&&e.name===`Button`)??e[0],i={};for(let e of r.props){let n=t.get(e.name),r=n===null?void 0:Ft(e,n);r!==void 0&&r!==pn(e)&&(i[e.name]=r)}return{item:r,tab:n,args:i}}function Pt(){let e=new URLSearchParams(location.search),t=t=>a(t,e.get(dn(t)))??i[t];return{accent:t(`accent`),gray:t(`gray`),radius:t(`radius`),font:t(`font`),appearance:t(`appearance`)}}function Ft(e,t){return e.options?e.options.find(e=>String(e)===t):e.control===`boolean`?t===`true`||t!==`false`&&void 0:e.control===`number`?t.trim()&&Number.isFinite(Number(t))?Number(t):void 0:t}function It(){clearTimeout(gn),gn=void 0,E=null}function Lt(){E!==null&&E!==location.href&&(history.replaceState(null,``,E),hn=Date.now()),It()}function Rt(e){if(E=e,gn)return;let t=hn+mn-Date.now();t<=0?Lt():gn=setTimeout(Lt,t)}function C(e){let t=new URL(E??location.href);for(let[n,r]of Object.entries(e))r===void 0?t.searchParams.delete(n):t.searchParams.set(n,r);return t.href}function zt(){return(0,w.useSyncExternalStore)(e=>{let t=matchMedia(cn);return t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)},()=>matchMedia(cn).matches)}function Bt({manifest:e,storybookUrl:t=`../storybook/`,homeUrl:n=`../`}){let{items:r}=e,[i,a]=(0,w.useState)(()=>Nt(r)),[o,s]=(0,w.useState)(Pt),c=(0,w.useRef)(o),l=u(),[ee,d]=(0,w.useState)(Sn),[f,m]=(0,w.useState)(Cn),[h,g]=(0,w.useState)(!1),[_,y]=(0,w.useState)(null),[re,ie]=(0,w.useState)({}),[ae,oe]=(0,w.useState)(`default`),[b,se]=(0,w.useState)(null),ce=zt();(0,w.useEffect)(()=>{let e=()=>{It(),a(Nt(r)),Rt(C(fn(c.current)))};return addEventListener(`popstate`,e),()=>removeEventListener(`popstate`,e)},[r]),(0,w.useEffect)(()=>(addEventListener(`pagehide`,Lt),()=>{removeEventListener(`pagehide`,Lt),It()}),[]),(0,w.useEffect)(()=>{document.documentElement.classList.toggle(`dark`,l)},[l]);let le=e=>{if(g(!1),y(null),oe(`default`),se(null),e.id===i.item.id)return;let t=C({..._n(i.item),item:e.id});Lt(),history.pushState(null,``,t),a(t=>({...t,item:e,args:{}}))},ue=e=>{se(null),Rt(C({tab:e===`playground`?void 0:e})),a(t=>({...t,tab:e}))},de=(e,t)=>{let n=t!==void 0&&t!==pn(e);Rt(C({[e.name]:n?String(t):void 0})),a(r=>{let{[e.name]:i,...a}=r.args;return{...r,args:n?{...a,[e.name]:t}:a}})},fe=e=>{Rt(C(fn(e))),c.current=e,s(e)},pe=()=>{Rt(C(_n(i.item))),a(e=>({...e,args:{}}))},me=en(i.item),he=me.includes(i.tab)?i.tab:`playground`,ge=rn(i.item),x=ge&&i.args[ge.name]===!0?`disabled`:ae,_e=e=>{ge&&e===`disabled`!=(x===`disabled`)&&de(ge,e===`disabled`),oe(e===`disabled`?`default`:e)},ve=(0,T.jsx)(Ut,{items:r,selected:i.item,filters:ee,onFilters:d,folds:f,onFolds:m,onSelect:le});return(0,T.jsxs)(`div`,{className:S.shell,children:[(0,T.jsxs)(`header`,{className:S.header,children:[(0,T.jsx)(`a`,{href:n,className:S.brand,children:`Marram`}),(0,T.jsx)(`h1`,{className:S.title,children:`Playground`}),(0,T.jsx)(`a`,{href:t,className:S.headerLink,children:`Storybook`})]}),(0,T.jsxs)(`div`,{className:S.columns,children:[ce&&(0,T.jsx)(`nav`,{"aria-label":`Items`,className:S.browser,children:ve}),(0,T.jsxs)(`main`,{className:S.center,children:[(0,T.jsxs)(`div`,{className:S.toolbar,children:[!ce&&(0,T.jsx)(Te,{title:`Items`,open:h,onOpenChange:g,className:S.drawer,trigger:(0,T.jsx)(p,{appearance:`outlined`,variant:`secondary`,startIcon:(0,T.jsx)(v,{name:`menu`}),children:`Browse`}),children:ve}),(0,T.jsx)(`h2`,{className:S.itemName,children:i.item.name}),b&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(te,{text:tn(b.kind),variant:b.kind===`do`?`success`:`danger`}),(0,T.jsxs)(p,{appearance:`ghost`,variant:`secondary`,startIcon:(0,T.jsx)(v,{name:`chevron-left`}),onClick:()=>se(null),children:[`Back to `,i.item.name]})]}),(0,T.jsxs)(`div`,{className:S.tools,children:[(0,T.jsx)(Vt,{theme:o,onChange:fe}),(0,T.jsx)(ne,{content:`Open in Storybook`,children:(0,T.jsx)(p,{appearance:`ghost`,variant:`secondary`,isIconOnly:!0,"aria-label":`Open in Storybook`,href:vn(t,b?.storyId??i.item.storyId),children:(0,T.jsx)(v,{name:`external`})})})]})]}),(0,T.jsx)(Gt,{item:i.item,storyId:b?.storyId,args:b?{}:i.args,theme:o,storybookUrl:t,inspect:he===`specs`&&!b?Mt(i.item,i.args,x,_):null,onValues:ie})]}),(0,T.jsx)(`aside`,{"aria-label":`Details`,className:S.aside,children:(0,T.jsx)(Kt,{item:i.item,has:me,tab:he,onTab:ue,content:{playground:(0,T.jsx)(Zt,{item:i.item,args:i.args,onChange:de,onReset:pe}),specs:i.item.specs&&(0,T.jsx)(qt,{specs:i.item.specs,measurements:jt(i.item.specs.measurements,i.item,i.args,x),color:jt(i.item.specs.color,i.item,i.args,x),states:At(i.item),state:x,onState:_e,values:re,highlight:_,onHighlight:y}),guideline:i.item.guideline&&(0,T.jsx)(Xt,{guideline:i.item.guideline,example:b,onExample:se,docsUrl:yn(t,i.item,`guidelines`)})}})})]})]})}function Vt({theme:e,onChange:t}){let n=n=>t({...e,...n}),[r,a]=(0,w.useState)(``),s=(0,w.useRef)(void 0);return(0,w.useEffect)(()=>()=>clearTimeout(s.current),[]),(0,T.jsx)(ue,{title:`Preview theme`,align:`end`,isModal:!0,trigger:(0,T.jsx)(p,{appearance:`outlined`,variant:`secondary`,children:`Theme`}),children:(0,T.jsxs)(`div`,{className:S.themeSections,children:[(0,T.jsxs)(`fieldset`,{className:S.themeSection,children:[(0,T.jsx)(`legend`,{className:S.themeLegend,children:`Color`}),(0,T.jsx)(Ht,{label:`Accent`,attribute:`data-accent`,values:c.accent,value:e.accent,onChange:e=>n({accent:e})}),(0,T.jsx)(Ht,{label:`Gray`,attribute:`data-gray`,values:c.gray,value:e.gray,onChange:e=>n({gray:e})})]}),(0,T.jsxs)(`fieldset`,{className:S.themeSection,children:[(0,T.jsx)(`legend`,{className:S.themeLegend,children:`Typo`}),(0,T.jsx)(ie,{label:`Font`,options:xn(c.font),value:e.font,onValueChange:e=>e&&n({font:e}),isFullWidth:!0})]}),(0,T.jsx)(ce,{label:`Radius`,orientation:`horizontal`,options:xn(c.radius),value:e.radius,onValueChange:e=>n({radius:e})}),(0,T.jsx)(ce,{label:`Theme`,orientation:`horizontal`,options:xn(c.appearance),value:e.appearance,onValueChange:e=>n({appearance:e})}),(0,T.jsxs)(`div`,{className:S.themeFooter,children:[(0,T.jsx)(`span`,{role:`status`,className:S.themeCopied,children:r}),(0,T.jsx)(p,{appearance:`ghost`,variant:`secondary`,onClick:()=>t(i),children:`Reset`}),(0,T.jsx)(p,{appearance:`outlined`,variant:`secondary`,onClick:async()=>{clearTimeout(s.current),a(``);try{await navigator.clipboard.writeText(o(e)),a(`Code copied`)}catch{a(`Could not copy: the browser blocked the clipboard`)}s.current=setTimeout(()=>a(``),3e3)},children:`Copy code`})]})]})})}function Ht({label:e,attribute:t,values:n,value:r,onChange:i}){let a=(0,w.useId)();return(0,T.jsxs)(`div`,{role:`radiogroup`,"aria-labelledby":`${a}-label`,className:S.swatchGroup,children:[(0,T.jsx)(`span`,{id:`${a}-label`,className:S.swatchLabel,children:e}),(0,T.jsx)(`div`,{className:S.swatches,children:n.map(e=>(0,T.jsx)(`input`,{type:`radio`,name:a,"aria-label":bn(e),[t]:e,className:S.swatch,checked:e===r,onChange:()=>i(e)},e))})]})}function Ut({items:e,selected:t,filters:n,onFilters:r,folds:i,onFolds:a,onSelect:o}){let{query:s,category:c,status:l}=n,u=wn(e.map(e=>e.category)),ee=wn(e.map(e=>e.status)),d=s.trim().toLowerCase(),f=e.filter(e=>e.name.toLowerCase().includes(d)&&(c===D||e.category===c)&&(l===D||e.status===l)),m=d!==``||c!==D||l!==D,h=m?i.filtering:i.browsing,g=e=>{r(e),a({...i,filtering:[]})},_=e=>g({...n,...e}),y=(e,t)=>{e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0||(e.preventDefault(),o(t))};return(0,T.jsxs)(`div`,{className:S.browserBody,children:[(0,T.jsx)(Ce,{"aria-label":`Search by name`,placeholder:`Search by name`,value:s,onChange:e=>_({query:e.target.value}),isFullWidth:!0}),(0,T.jsxs)(`div`,{className:S.filters,children:[(0,T.jsx)(ie,{label:`Category`,options:[{value:D,label:`All`},...u],value:c,onValueChange:e=>_({category:e??D}),isFullWidth:!0}),(0,T.jsx)(ie,{label:`Status`,options:[{value:D,label:`All`},...ee],value:l,onValueChange:e=>_({status:e??D}),isFullWidth:!0})]}),(0,T.jsx)(`p`,{role:`status`,className:S.count,children:f.length===1?`1 item`:`${f.length} items`}),f.length===0?(0,T.jsx)(ge,{headingLevel:3,icon:(0,T.jsx)(v,{name:`search`}),title:`Nothing matches`,description:`No item has that name in the chosen Category and status.`,action:(0,T.jsx)(p,{appearance:`outlined`,variant:`secondary`,onClick:()=>g(Sn),children:`Clear search and filters`})}):sn.map(([e,n])=>{let r=f.filter(t=>t.kind===e);if(!r.length)return null;let o=wn(r.map(e=>e.category)),s=o.map(t=>`${e}:${t}`);return(0,T.jsxs)(`section`,{"aria-labelledby":`pg-group-${e}`,className:S.group,children:[(0,T.jsx)(`h2`,{id:`pg-group-${e}`,className:S.groupTitle,children:n}),o.map((e,n)=>{let o=s[n];return(0,T.jsx)(me,{label:e,open:!h.includes(o),onOpenChange:e=>a({...i,[m?`filtering`:`browsing`]:e?h.filter(e=>e!==o):[...h,o]}),children:(0,T.jsx)(`ul`,{className:S.cards,children:r.filter(t=>t.category===e).map(e=>(0,T.jsx)(`li`,{children:(0,T.jsxs)(`a`,{href:C({..._n(t),item:e.id}),"aria-current":e.id===t.id?`true`:void 0,className:S.card,onClick:t=>y(t,e),children:[(0,T.jsx)(`span`,{className:S.cardName,children:e.name}),(0,T.jsx)(te,{text:e.status,variant:e.status===`experimental`?`warning`:`info`})]})},e.id))})},o)})]},e)})]})}function Wt(e){try{let t=typeof e==`string`?JSON.parse(e):e;return t?.key===Tn?t.event:void 0}catch{return}}function Gt({item:e,storyId:t=e.storyId,args:n,theme:r,storybookUrl:a,inspect:o,onValues:s}){let c=(0,w.useRef)(null),[l,u]=(0,w.useState)(null),d=`${a}iframe.html?${new URLSearchParams({id:t,viewMode:`story`,embed:`true`,globals:`appearance:${i.appearance}`})}`,f=vn(a,t),m=l?.src===d?l.ok?`ready`:`error`:`loading`;(0,w.useEffect)(()=>{let e=setTimeout(()=>u(e=>e?.src===d?e:{src:d,ok:!1}),ln);return()=>clearTimeout(e)},[d]);let[h,te]=(0,w.useState)(null),g=(0,w.useRef)(s);(0,w.useEffect)(()=>{g.current=s}),(0,w.useEffect)(()=>{let e=e=>{let t=c.current?.contentWindow;if(!t||e.source!==t)return;let n=Wt(e.data);n?.type===`storyRendered`&&te(t);let r=n?.args?.[0];n?.type===`playground/inspected`&&r?.values&&g.current(r.values)};return addEventListener(`message`,e),()=>removeEventListener(`message`,e)},[]);let _=(0,w.useRef)(null);(0,w.useEffect)(()=>{let e=c.current?.contentWindow;if(!e||e!==h)return;let r=_.current?.target===e?_.current.args:{};_.current={target:e,args:n};let i=En(e,d),a=Object.keys(r).filter(e=>!Object.hasOwn(n,e)),o=Object.fromEntries(Object.entries(n).filter(([e,t])=>r[e]!==t));a.length&&i(`resetStoryArgs`,{storyId:t,argNames:a}),Object.keys(o).length&&i(`updateStoryArgs`,{storyId:t,updatedArgs:o})},[n,h,d,t]);let v=(0,w.useRef)(null);(0,w.useEffect)(()=>{let e=c.current?.contentWindow;if(!e||e!==h)return;let t=v.current?.target===e?v.current.theme:i;v.current={target:e,theme:r};let n=Object.fromEntries(Object.entries(r).filter(([e,n])=>t[e]!==n));Object.keys(n).length&&En(e,d)(`updateGlobals`,{globals:n})},[r,h,d]);let y=JSON.stringify(o),ne=(0,w.useRef)(null);return(0,w.useEffect)(()=>{let e=c.current?.contentWindow;if(!e||e!==h)return;let t=ne.current?.target===e?ne.current.request:`null`;ne.current={target:e,request:y},y!==t&&En(e,d)(ee,{request:JSON.parse(y)})},[y,h,d]),(0,T.jsxs)(`div`,{className:S.live,children:[(0,T.jsx)(`iframe`,{ref:c,title:`${e.name} live view`,src:d,className:S.frame,onLoad:()=>u({src:d,ok:!0})},d),m===`loading`&&(0,T.jsx)(`div`,{className:S.overlay,children:(0,T.jsx)(_e,{label:`Loading ${e.name}`})}),m===`error`&&(0,T.jsx)(`div`,{className:S.overlay,children:(0,T.jsx)(De,{headingLevel:3,title:`The live view did not load`,description:`${e.name} could not be shown here. Storybook has the same story.`,action:(0,T.jsx)(p,{href:f,children:`Open in Storybook`})})})]})}function Kt({item:e,has:t,tab:n,onTab:r,content:i}){let a=$t.filter(([e])=>!t.includes(e)).map(([,e])=>e);return(0,T.jsxs)(`div`,{className:S.panel,children:[(0,T.jsx)(h,{"aria-label":`Details`,isFullWidth:!0,items:$t.map(([e,n])=>({value:e,label:n,disabled:!t.includes(e),content:i[e]??null})),value:n,onValueChange:e=>r(e)}),a.length>0&&(0,T.jsxs)(`p`,{className:S.missing,children:[a.join(` and `),` `,a.length===1?`is`:`are`,` not written for `,e.name,` yet.`]})]})}function qt({specs:e,measurements:t,color:n,states:r,state:i,onState:a,values:o,highlight:c,onHighlight:u}){let ee=e.anatomy.map(e=>e.name),d=(e,t)=>(0,T.jsxs)(`table`,{className:S.specTable,children:[e.caption&&(0,T.jsx)(`caption`,{className:S.specCaption,children:e.caption}),(0,T.jsx)(`thead`,{children:(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`th`,{scope:`col`,children:`Part`}),(0,T.jsx)(`th`,{scope:`col`,children:`Value`})]})}),(0,T.jsx)(`tbody`,{children:e.rows.map((e,t)=>{let n=o[e.token],r=ee.indexOf(s(e.part,ee)??``);return(0,T.jsxs)(`tr`,{tabIndex:0,"aria-current":e===c?`true`:void 0,className:S.specRow,onMouseEnter:()=>u(e),onMouseLeave:()=>u(null),onFocus:()=>u(e),onClick:()=>u(e),onBlur:()=>u(null),children:[(0,T.jsxs)(`td`,{children:[(0,T.jsxs)(`span`,{className:S.specPart,children:[r>=0&&(0,T.jsxs)(`span`,{"aria-hidden":`true`,children:[l(r),` `]}),e.part]}),(0,T.jsx)(`span`,{className:S.specProperty,children:e.property})]}),(0,T.jsxs)(`td`,{children:[(0,T.jsxs)(`span`,{className:S.specValue,children:[n?.kind===`color`&&(0,T.jsx)(`span`,{"aria-hidden":`true`,className:S.specSwatch,style:{background:n.text}}),n?.text??`…`]}),(0,T.jsx)(`code`,{className:S.specToken,children:e.token})]})]},t)})})]},t);return(0,T.jsxs)(`div`,{className:S.sections,children:[r.length>0&&(0,T.jsx)(ce,{label:`State`,helperText:`Forced on the live item. Color rows follow it.`,orientation:`horizontal`,options:r.map(e=>({value:e,label:nn[e]})),value:i,onValueChange:e=>a(e)}),e.anatomy.length>0&&(0,T.jsxs)(`section`,{"aria-labelledby":`pg-anatomy`,className:S.section,children:[(0,T.jsx)(`h2`,{id:`pg-anatomy`,className:S.groupTitle,children:`Anatomy`}),(0,T.jsx)(`ol`,{className:S.anatomy,children:e.anatomy.map((e,t)=>(0,T.jsxs)(`li`,{children:[(0,T.jsx)(`span`,{"aria-hidden":`true`,className:S.anatomyNumber,children:l(t)}),(0,T.jsxs)(`span`,{children:[(0,T.jsx)(`strong`,{children:e.name}),` `,e.description]})]},e.name))})]}),t.length>0&&(0,T.jsxs)(`section`,{"aria-labelledby":`pg-measurements`,className:S.section,children:[(0,T.jsx)(`h2`,{id:`pg-measurements`,className:S.groupTitle,children:`Measurements`}),t.map(d)]}),n.length>0&&(0,T.jsxs)(`section`,{"aria-labelledby":`pg-color`,className:S.section,children:[(0,T.jsx)(`h2`,{id:`pg-color`,className:S.groupTitle,children:`Color`}),n.map(d)]})]})}function Jt(e){return e.replace(/\s*\n\s*/g,` `).split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/).map((e,t)=>e.startsWith("`")?(0,T.jsx)(`code`,{children:e.slice(1,-1)},t):e.startsWith(`**`)?(0,T.jsx)(`strong`,{children:e.slice(2,-2)},t):e.startsWith(`[`)?e.slice(1,e.indexOf(`]`)):e)}function Yt({blocks:e}){return e.map((e,t)=>e.startsWith(`- `)?(0,T.jsx)(`ul`,{className:S.proseList,children:e.split(/\n(?=- )/).map((e,t)=>(0,T.jsx)(`li`,{children:Jt(e.slice(2))},t))},t):(0,T.jsx)(`p`,{className:S.prose,children:Jt(e)},t))}function Xt({guideline:e,example:t,onExample:n,docsUrl:r}){let i=(e,{storyId:r,caption:i})=>(0,T.jsxs)(`button`,{type:`button`,"aria-pressed":t?.storyId===r,className:S.example,"data-kind":e,onClick:()=>n({storyId:r,kind:e,caption:i}),children:[(0,T.jsx)(`span`,{className:S.exampleKind,children:tn(e)}),i]});return(0,T.jsxs)(`div`,{className:S.sections,children:[e.intro.length>0&&(0,T.jsx)(`div`,{className:S.section,children:(0,T.jsx)(Yt,{blocks:e.intro})}),e.whenToUse.length>0&&(0,T.jsxs)(`section`,{"aria-labelledby":`pg-when`,className:S.section,children:[(0,T.jsx)(`h2`,{id:`pg-when`,className:S.groupTitle,children:`When to use`}),(0,T.jsx)(Yt,{blocks:e.whenToUse})]}),e.whenNotToUse.length>0&&(0,T.jsxs)(`section`,{"aria-labelledby":`pg-when-not`,className:S.section,children:[(0,T.jsx)(`h2`,{id:`pg-when-not`,className:S.groupTitle,children:`When not to use`}),(0,T.jsx)(Yt,{blocks:e.whenNotToUse})]}),e.doDont.length>0&&(0,T.jsxs)(`section`,{"aria-labelledby":`pg-dodont`,className:S.section,children:[(0,T.jsx)(`h2`,{id:`pg-dodont`,className:S.groupTitle,children:`Do and don't`}),(0,T.jsx)(`p`,{className:S.hint,children:`Pick one to see it in the live view.`}),e.doDont.map((e,t)=>(0,T.jsxs)(`div`,{className:S.pair,children:[i(`do`,e.do),i(`dont`,e.dont)]},t))]}),e.sections.map((e,t)=>(0,T.jsxs)(`section`,{"aria-labelledby":`pg-guide-${t}`,className:S.section,children:[(0,T.jsx)(`h2`,{id:`pg-guide-${t}`,className:S.groupTitle,children:e.title}),(0,T.jsx)(Yt,{blocks:e.blocks})]},e.title)),(0,T.jsx)(`a`,{href:r,className:S.headerLink,children:`The full docs page`})]})}function Zt({item:e,args:t,onChange:n,onReset:r}){return(0,T.jsxs)(`div`,{className:S.props,children:[(0,T.jsxs)(`div`,{className:S.propsHeader,children:[(0,T.jsx)(`h2`,{id:`pg-props`,className:S.groupTitle,children:`Props`}),(0,T.jsx)(p,{appearance:`ghost`,variant:`secondary`,onClick:r,children:`Reset`})]}),e.props.length===0&&(0,T.jsxs)(`p`,{className:S.missing,children:[e.name,` has no props to change here.`]}),e.props.map(r=>(0,T.jsx)(Qt,{prop:r,value:Object.hasOwn(t,r.name)?t[r.name]:pn(r),onChange:e=>n(r,e)},`${e.id} ${r.name}`))]})}function Qt({prop:e,value:t,onChange:n}){let r={label:e.name,helperText:e.description,isFullWidth:!0},{options:i}=e;return i?(0,T.jsx)(ie,{...r,options:i.map(String),value:t===void 0?null:String(t),placeholder:`Not set`,onValueChange:e=>n(i.find(t=>String(t)===e))}):e.control===`boolean`?(0,T.jsx)(fe,{label:e.name,helperText:e.description,checked:t===!0,onCheckedChange:n}):e.control===`number`?(0,T.jsx)(ye,{...r,value:typeof t==`number`?t:null,onValueChange:e=>n(e??void 0)}):(0,T.jsx)(xe,{...r,value:String(t??``),onChange:e=>n(e.target.value)})}var w,T,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,E,hn,gn,_n,vn,yn,bn,xn,D,Sn,Cn,wn,Tn,En;function Dn(){return(Dn=e((()=>{w=t(),g(),pe(),f(),se(),de(),ve(),Se(),re(),be(),x(),m(),we(),le(),y(),he(),Ee(),_(),r(),kt(),d(),T=n(),$t=[[`playground`,`Playground`],[`specs`,`Specs`],[`guideline`,`Guideline`]],en=e=>[`playground`,...e.specs?[`specs`]:[],...e.guideline?[`guideline`]:[]],tn=e=>e===`do`?`Do`:`Don't`,nn={default:`Default`,hover:`Hover`,"focus-visible":`Focus`,focus:`Focus`,"focus-within":`Focus`,active:`Pressed`,disabled:`Disabled`},rn=e=>e.props.find(e=>e.control===`boolean`&&/^(isD|d)isabled$/.test(e.name)),an=[[/hover/i,[`hover`]],[/focus(?! ring)/i,[`focus-visible`,`focus`,`focus-within`]],[/press/i,[`active`]],[/disabled/i,[`disabled`]]],on=(e,t)=>{let n=e.part.split(`,`).slice(1).join(`,`),r=an.filter(([e])=>e.test(n));return!r.length||r.some(([,e])=>e.includes(t))},sn=[[`component`,`Components`],[`pattern`,`Patterns`],[`template`,`Templates`]],cn=`(min-width: 1024px)`,ln=2e4,un=Object.keys(i),dn=e=>`theme-${e}`,fn=e=>Object.fromEntries(un.map(t=>[dn(t),e[t]===i[t]?void 0:e[t]])),pn=e=>e.default??{boolean:!1,text:``}[e.control],mn=200,E=null,hn=0,_n=e=>Object.fromEntries(e.props.map(e=>[e.name,void 0])),vn=(e,t)=>`${e}?path=/story/${t}`,yn=(e,t,n)=>`${e}?path=/docs/${t.id}--docs&docTab=${n}`,bn=e=>e[0].toUpperCase()+e.slice(1).replaceAll(`-`,` `),xn=e=>e.map(e=>({value:e,label:bn(e)})),D=`all`,Sn={query:``,category:D,status:D},Cn={browsing:[],filtering:[]},wn=e=>[...new Set(e)].sort(),Tn=`storybook-channel`,En=(e,t)=>(n,r)=>e.postMessage(JSON.stringify({key:Tn,event:{type:n,args:[r]}}),new URL(t,location.href).origin),Bt.__docgenInfo={description:``,methods:[],displayName:`Playground`,props:{manifest:{required:!0,tsType:{name:`Manifest`},description:``},storybookUrl:{required:!1,tsType:{name:`string`},description:`Where the deployed Storybook lives, relative to the page.`,defaultValue:{value:`'../storybook/'`,computed:!1}},homeUrl:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'../'`,computed:!1}}}}})))()}var O,k,A,j,On,kn,An,M,jn,N,P,F,Mn,I,L,R,z,B,Nn,V,Pn,Fn,In,Ln,Rn,zn,Bn,H,U,Vn,Hn,Un,Wn,Gn,Kn,qn,W,G,K,q,J,Y,X,Z,Q,$,Jn;function Yn(){return(Yn=e((()=>{b(),Dn(),{expect:O,screen:k,waitFor:A,within:j}=__STORYBOOK_MODULE_TEST__,On=(e,t,n,r,i=[])=>{let a=`${{component:`components`,pattern:`patterns`,template:`templates`}[e]}-${n}-${t}`.toLowerCase().replaceAll(` `,`-`);return{kind:e,id:a,name:t,category:n,status:r,storyId:`${a}--default`,props:i}},kn={items:[On(`component`,`Badge`,`Atomic Elements`,`beta`,[{name:`count`,control:`number`,default:8},{name:`isDot`,control:`boolean`,default:!1,description:`A dot with no number.`}]),{...On(`component`,`Button`,`Buttons`,`beta`,[{name:`variant`,control:`inline-radio`,options:[`primary`,`secondary`],default:`primary`},{name:`appearance`,control:`select`,options:[`filled`,`outlined`],default:`filled`},{name:`size`,control:`inline-radio`,options:[`sm`,`md`],default:`md`},{name:`isLoading`,control:`boolean`},{name:`children`,control:`text`,default:`Button`}]),specs:{anatomy:[{name:`Container`,selector:`button`,description:`The clickable box.`},{name:`Label`,selector:`button > span`,description:`The text.`}],measurements:[{caption:`sm`,rows:[{part:`Container`,property:`Height`,token:`--control-sm`}]},{caption:`md`,rows:[{part:`Container`,property:`Height`,token:`--control-md`}]},{caption:`Every size`,rows:[{part:`Focus ring`,property:`Width`,token:`--focus-width`}]}],color:[{caption:`primary`,rows:[{part:`Label, contained`,property:`Colour`,token:`--color-text-brand-inverse`}]},{caption:`secondary`,rows:[{part:`Label`,property:`Colour`,token:`--color-text`}]},{caption:`Every variant`,rows:[{part:`Container, hover`,property:`Background`,token:`--color-background-neutral`}]}],pseudo:[`hover`,`focus-visible`,`focus`]},guideline:{intro:[],whenToUse:["For an action on this page: `save` or **delete**.",`- One primary per view
- The rest step down`],whenNotToUse:[`Not for going to [another page](?path=/docs/link).`],doDont:[{do:{storyId:`components-buttons-button--do-one`,caption:`One primary button.`},dont:{storyId:`components-buttons-button--dont-two`,caption:`Two primaries compete.`}}],sections:[{title:`Accessibility`,blocks:["A native `<button>`."]}]}},On(`component`,`Tooltip`,`Overlays`,`experimental`),{...On(`pattern`,`App Shell`,`Application UI`,`experimental`),guideline:{intro:[`The frame around an app.`],whenToUse:[],whenNotToUse:[],doDont:[],sections:[{title:`Layout`,blocks:[`A sidebar and the page.`]}]}}]},[An,M,jn]=kn.items,N=async(e,t)=>{let n=e.queryByRole(`button`,{name:`Browse`});return n?(await t.click(n),j(await k.findByRole(`dialog`,{name:`Items`}))):j(e.getByRole(`navigation`,{name:`Items`}))},P=e=>e.findByTitle(/live view$/),F=async(e,t)=>A(async()=>O(await P(e)).toHaveAttribute(`title`,`${t} live view`)),Mn=async e=>{await A(async()=>{let t=await P(e),n=t.parentElement;O([t.offsetWidth,t.offsetHeight]).toEqual([n.clientWidth,n.clientHeight]),O(n.closest(`main`).clientWidth).toBe(n.clientWidth)})},I=(e,t)=>j(e.getByRole(`tablist`,{name:`Details`})).getByRole(`tab`,{name:t}),L=e=>new URLSearchParams(location.search).get(e),R=e=>j(e.getByRole(`complementary`,{name:`Details`})),z=async e=>{await A(()=>O(e.contentDocument?.readyState).toBe(`complete`));let t=[];e.contentWindow.addEventListener(`message`,e=>t.push(JSON.parse(e.data).event));let n=JSON.stringify({key:`storybook-channel`,event:{type:`storyRendered`,args:[]}});return window.dispatchEvent(new MessageEvent(`message`,{data:n,source:e.contentWindow})),t},B=e=>()=>{let t=location.href,n=new URL(t);for(let e of[`item`,`tab`,...kn.items.flatMap(e=>e.props.map(e=>e.name))])n.searchParams.delete(e);for(let e of[...n.searchParams.keys()].filter(e=>e.startsWith(`theme-`)))n.searchParams.delete(e);for(let[t,r]of Object.entries(e))n.searchParams.set(t,r);return n.href!==t&&history.replaceState(null,``,n),()=>{location.href!==t&&history.replaceState(null,``,t)}},Nn={title:`Site/Playground`,component:Bt,parameters:{layout:`fullscreen`},args:{manifest:kn,storybookUrl:`/playground-fixture/`,homeUrl:`#`},beforeEach:B({})},V={play:async({canvas:e,userEvent:t})=>{await F(e,`Button`);let n=await P(e);await O(n.getAttribute(`src`)).toContain(`id=${M.storyId}`),await Mn(e),await A(()=>O(e.queryByRole(`status`,{name:/Loading/})).toBeNull()),await O(e.queryByRole(`tablist`,{name:`Viewport`})).toBeNull(),await O(e.queryByRole(`textbox`,{name:`Address`})).toBeNull(),await O(I(e,`Playground`)).toHaveAttribute(`aria-selected`,`true`),await O(e.getByRole(`heading`,{name:`Button`,level:2})).toBeVisible(),await O(e.getByRole(`link`,{name:`Open in Storybook`})).toHaveAttribute(`href`,`/playground-fixture/?path=/story/${M.storyId}`);let r=await N(e,t);await O(r.getByRole(`link`,{name:/Button/})).toHaveAttribute(`aria-current`,`true`),await O(r.getByRole(`heading`,{name:`Components`})).toBeVisible(),await O(r.getByRole(`heading`,{name:`Patterns`})).toBeVisible(),await O(r.queryByRole(`heading`,{name:`Templates`})).toBeNull();let i=r.getByRole(`searchbox`,{name:`Search by name`});await t.type(i,`bad`),await O(r.getAllByRole(`link`)).toHaveLength(1),await O(r.getByRole(`link`,{name:/Badge/})).toBeVisible(),await O(r.queryByRole(`heading`,{name:`Patterns`})).toBeNull(),await t.type(i,`xyz`),await O(r.getByRole(`heading`,{name:`Nothing matches`})).toBeVisible(),await t.click(r.getByRole(`button`,{name:`Clear search and filters`})),await O(r.getAllByRole(`link`)).toHaveLength(4),await t.click(r.getByRole(`combobox`,{name:`Status`})),await t.click(await k.findByRole(`option`,{name:`experimental`})),await A(()=>O(r.getAllByRole(`link`)).toHaveLength(2)),await O(r.queryByRole(`link`,{name:/Button/})).toBeNull(),await O(r.getByRole(`status`)).toHaveTextContent(`2 items`),await t.click(r.getByRole(`combobox`,{name:`Category`})),await t.click(await k.findByRole(`option`,{name:`Overlays`})),await A(()=>O(r.getAllByRole(`link`)).toHaveLength(1)),await O(r.queryByRole(`heading`,{name:`Patterns`})).toBeNull(),await t.click(r.getByRole(`link`,{name:/Tooltip/})),await A(async()=>O((await P(e)).getAttribute(`src`)).toContain(`id=${jn.storyId}`)),await F(e,`Tooltip`),await O(e.getByRole(`link`,{name:`Open in Storybook`})).toHaveAttribute(`href`,`/playground-fixture/?path=/story/${jn.storyId}`),await A(()=>O(L(`item`)).toBe(jn.id)),await O(R(e).getByText(`Tooltip has no props to change here.`)).toBeVisible(),r=await N(e,t),await O(r.getByRole(`link`,{name:/Tooltip/})).toHaveAttribute(`aria-current`,`true`),await O(r.getAllByRole(`link`)).toHaveLength(1),await t.keyboard(`{Escape}`),history.back(),await F(e,`Button`),await Mn(e)}},Pn={play:async({canvas:e,userEvent:t})=>{let n=await N(e,t),r=e=>n.getByRole(`button`,{name:e});for(let e of[`Atomic Elements`,`Buttons`,`Overlays`,`Application UI`])await O(r(e)).toHaveAttribute(`aria-expanded`,`true`);let i=n.getByRole(`link`,{name:/Badge/});await O(i).toHaveTextContent(/^Badgebeta$/),await t.click(r(`Buttons`)),await O(r(`Buttons`)).toHaveAttribute(`aria-expanded`,`false`),await A(()=>O(n.getByRole(`link`,{name:/Button/,hidden:!0})).not.toBeVisible()),r(`Buttons`).focus(),await t.keyboard(`{Enter}`),await O(r(`Buttons`)).toHaveAttribute(`aria-expanded`,`true`),await A(()=>O(n.getByRole(`link`,{name:/Button/})).toBeVisible()),await t.keyboard(` `),await O(r(`Buttons`)).toHaveAttribute(`aria-expanded`,`false`),await t.click(r(`Atomic Elements`)),await O(r(`Atomic Elements`)).toHaveAttribute(`aria-expanded`,`false`),await t.type(n.getByRole(`searchbox`,{name:`Search by name`}),`b`),await O(r(`Atomic Elements`)).toHaveAttribute(`aria-expanded`,`true`),await O(r(`Buttons`)).toHaveAttribute(`aria-expanded`,`true`),await A(()=>O(n.getByRole(`link`,{name:/Badge/})).toBeVisible()),await O(n.queryByRole(`button`,{name:`Overlays`})).toBeNull(),await O(n.queryByRole(`button`,{name:`Application UI`})).toBeNull(),await t.clear(n.getByRole(`searchbox`,{name:`Search by name`})),await O(r(`Atomic Elements`)).toHaveAttribute(`aria-expanded`,`false`),await O(r(`Buttons`)).toHaveAttribute(`aria-expanded`,`false`),await O(r(`Overlays`)).toHaveAttribute(`aria-expanded`,`true`),await t.click(n.getByRole(`combobox`,{name:`Category`})),await t.click(await k.findByRole(`option`,{name:`Buttons`})),await A(()=>O(r(`Buttons`)).toHaveAttribute(`aria-expanded`,`true`)),await O(n.queryByRole(`button`,{name:`Atomic Elements`})).toBeNull(),await O(n.queryByRole(`button`,{name:`Overlays`})).toBeNull(),await A(()=>O(k.queryByRole(`listbox`)).toBeNull())}},Fn={play:async({canvas:e,userEvent:t})=>{let n=R(e),r=await P(e),i=r.getAttribute(`src`),a=await z(r),o=()=>a.at(-1),s=e=>({type:`updateStoryArgs`,args:[{storyId:M.storyId,updatedArgs:e}]});await O(n.getByRole(`combobox`,{name:`variant`})).toHaveTextContent(`primary`),await O(n.getByRole(`switch`,{name:`isLoading`})).not.toBeChecked(),await O(n.getByRole(`textbox`,{name:`children`})).toHaveValue(`Button`),await t.click(n.getByRole(`combobox`,{name:`variant`})),await t.click(await k.findByRole(`option`,{name:`secondary`})),await A(()=>O(o()).toEqual(s({variant:`secondary`}))),await A(()=>O(L(`variant`)).toBe(`secondary`)),await t.click(n.getByRole(`switch`,{name:`isLoading`})),await A(()=>O(o()).toEqual(s({isLoading:!0}))),await A(()=>O(L(`isLoading`)).toBe(`true`));let c=n.getByRole(`textbox`,{name:`children`});await t.clear(c),await t.type(c,`Save it!`),await A(()=>O(o()).toEqual(s({children:`Save it!`}))),await A(()=>O(L(`children`)).toBe(`Save it!`)),await t.click(n.getByRole(`switch`,{name:`isLoading`})),await A(()=>O(o()).toEqual({type:`resetStoryArgs`,args:[{storyId:M.storyId,argNames:[`isLoading`]}]})),await A(()=>O(L(`isLoading`)).toBeNull()),await t.click(n.getByRole(`button`,{name:`Reset`})),await A(()=>O(o()).toEqual({type:`resetStoryArgs`,args:[{storyId:M.storyId,argNames:[`variant`,`children`]}]})),await A(()=>O(L(`variant`)).toBeNull()),await A(()=>O(L(`children`)).toBeNull()),await O(n.getByRole(`combobox`,{name:`variant`})).toHaveTextContent(`primary`),await O(n.getByRole(`textbox`,{name:`children`})).toHaveValue(`Button`),await O((await P(e)).getAttribute(`src`)).toBe(i)}},In={beforeEach:B({item:An.id,count:`3`,isDot:`true`,gone:`x`}),play:async({canvas:e,userEvent:t})=>{await F(e,`Badge`);let n=await P(e);await O(n.getAttribute(`src`)).toContain(`id=${An.storyId}`);let r=R(e),i=r.getByRole(`textbox`,{name:`count`});await O(i).toHaveValue(`3`),await O(r.getByRole(`switch`,{name:`isDot`})).toBeChecked();let a=await z(n);await A(()=>O(a).toEqual([{type:`updateStoryArgs`,args:[{storyId:An.storyId,updatedArgs:{count:3,isDot:!0}}]}])),await t.clear(i),await t.type(i,`12`),await t.tab(),await A(()=>O(a.at(-1)).toEqual({type:`updateStoryArgs`,args:[{storyId:An.storyId,updatedArgs:{count:12}}]})),await A(()=>O(L(`count`)).toBe(`12`))}},Ln={beforeEach:B({item:`components-gone-widget`,tab:`nope`}),play:async({canvas:e})=>{await F(e,`Button`),await O(I(e,`Playground`)).toHaveAttribute(`aria-selected`,`true`)}},Rn={play:async({canvas:e,userEvent:t})=>{let n=e.queryByRole(`button`,{name:`Browse`});n&&(n.focus(),await t.keyboard(`{Enter}`),await k.findByRole(`dialog`,{name:`Items`}));let r=j(n?k.getByRole(`dialog`):e.getByRole(`navigation`,{name:`Items`})).getByRole(`link`,{name:/Badge/});for(let e=0;e<20&&document.activeElement!==r;e++)await t.tab();await O(r).toHaveFocus(),await t.keyboard(`{Enter}`),await F(e,`Badge`)}},zn={beforeEach:oe(!1),play:async({canvas:e,userEvent:t})=>{let n=R(e),r=await P(e),i=r.getAttribute(`src`),a=await z(r);await O(i).toContain(`globals=appearance%3Asystem`),await t.click(n.getByRole(`switch`,{name:`isLoading`})),await A(()=>O(a.at(-1)?.type).toBe(`updateStoryArgs`));let o=e.getByRole(`button`,{name:`Theme`});await t.click(o);let s=j(await k.findByRole(`dialog`,{name:`Preview theme`}));await O(s.getByRole(`radio`,{name:`System`})).toBeChecked(),await t.click(s.getByRole(`radio`,{name:`Dark`})),await A(()=>O(a.at(-1)).toEqual({type:`updateGlobals`,args:[{globals:{appearance:`dark`}}]})),await O(a.filter(e=>e.type===`updateStoryArgs`)).toHaveLength(1),await O((await P(e)).getAttribute(`src`)).toBe(i),await O(document.documentElement).not.toHaveClass(`dark`),await t.keyboard(`{Escape}`),await A(()=>O(k.queryByRole(`dialog`,{name:`Preview theme`})).toBeNull()),await O(o).toHaveFocus(),await O(n.getByRole(`switch`,{name:`isLoading`})).toBeChecked(),await t.click(o);let c=await k.findByRole(`dialog`,{name:`Preview theme`});await A(()=>O(c.contains(document.activeElement)).toBe(!0)),await O(j(c).getByRole(`radio`,{name:`Dark`})).toBeChecked()}},Bn=()=>[...new URLSearchParams(location.search).keys()].filter(e=>e.startsWith(`theme-`)),H=async(e,t)=>(await t.click(e.getByRole(`button`,{name:`Theme`})),j(await k.findByRole(`dialog`,{name:`Preview theme`}))),U=e=>e.findLast(e=>e.type===`updateGlobals`)?.args[0]?.globals,Vn={play:async({canvas:e,userEvent:t})=>{let n=await z(await P(e)),r=await H(e,t),i=j(r.getByRole(`radiogroup`,{name:`Accent`})),a=j(r.getByRole(`radiogroup`,{name:`Gray`}));await O(i.getAllByRole(`radio`)).toHaveLength(17),await O(a.getAllByRole(`radio`)).toHaveLength(9),await O(i.getByRole(`radio`,{name:`Blue`})).toBeChecked(),await O(a.getByRole(`radio`,{name:`Gray`})).toBeChecked(),await O(r.getByRole(`radio`,{name:`Rounded`})).toBeChecked(),await t.click(i.getByRole(`radio`,{name:`Rose`})),await A(()=>O(U(n)).toEqual({accent:`rose`})),await t.click(a.getByRole(`radio`,{name:`Slate`})),await A(()=>O(U(n)).toEqual({gray:`slate`})),await t.click(r.getByRole(`radio`,{name:`Full rounded`})),await A(()=>O(U(n)).toEqual({radius:`full-rounded`})),await t.click(r.getByRole(`radio`,{name:`Dark`})),await A(()=>O([L(`theme-accent`),L(`theme-gray`),L(`theme-radius`),L(`theme-appearance`)]).toEqual([`rose`,`slate`,`full-rounded`,`dark`])),await t.click(i.getByRole(`radio`,{name:`Blue`})),await A(()=>O(U(n)).toEqual({accent:`blue`})),await A(()=>O(L(`theme-accent`)).toBeNull()),await t.click(r.getByRole(`button`,{name:`Reset`})),await A(()=>O(U(n)).toEqual({gray:`gray`,radius:`rounded`,appearance:`system`})),await A(()=>O(Bn()).toEqual([])),await O(a.getByRole(`radio`,{name:`Gray`})).toBeChecked(),await O(r.getByRole(`radio`,{name:`System`})).toBeChecked()}},Hn={play:async({canvas:e,userEvent:t})=>{let n=await z(await P(e)),r=await H(e,t),i=r.getByRole(`combobox`,{name:`Font`});await O(i).toHaveTextContent(`System`),await t.click(i);let a=await k.findByRole(`listbox`);await O(j(a).getAllByRole(`option`).map(e=>e.textContent)).toEqual([`System`,`Inter`,`Geist`,`Serif`,`Mono`]),await t.click(j(a).getByRole(`option`,{name:`Inter`})),await A(()=>O(U(n)).toEqual({font:`inter`})),await A(()=>O(L(`theme-font`)).toBe(`inter`)),await t.click(r.getByRole(`button`,{name:`Reset`})),await A(()=>O(U(n)).toEqual({font:`system`})),await A(()=>O(Bn()).toEqual([])),await O(i).toHaveTextContent(`System`)}},Un=[],Wn=(e=!1)=>()=>{let t=[];return Object.defineProperty(navigator,"clipboard",{configurable:!0,value:{writeText:async n=>{if(e)throw new DOMException(`Write permission denied.`,`NotAllowedError`);t.push(n)}}}),Un=t,()=>{delete navigator.clipboard}},Gn={beforeEach:Wn(),play:async({canvas:e,userEvent:t})=>{let n=await H(e,t),r=n.getByRole(`button`,{name:`Copy code`}),i=n.getByRole(`status`);await t.click(r),await A(()=>O(Un).toEqual([`<Theme>`])),await O(i).toHaveTextContent(`Code copied`),await t.click(j(n.getByRole(`radiogroup`,{name:`Accent`})).getByRole(`radio`,{name:`Rose`})),await t.click(n.getByRole(`radio`,{name:`Full rounded`})),await t.click(r),await A(()=>O(Un.at(-1)).toBe(`<Theme accentColor="rose" radius="full-rounded">`)),await t.click(j(n.getByRole(`radiogroup`,{name:`Gray`})).getByRole(`radio`,{name:`Slate`})),await t.click(n.getByRole(`radio`,{name:`Dark`})),await t.click(n.getByRole(`combobox`,{name:`Font`})),await t.click(await k.findByRole(`option`,{name:`Serif`})),await t.click(r),await A(()=>O(Un.at(-1)).toBe(`<Theme accentColor="rose" grayColor="slate" radius="full-rounded" appearance="dark" tokens={{ 'font-sans': "ui-serif, Georgia, serif" }}>`))}},Kn={beforeEach:Wn(!0),play:async({canvas:e,userEvent:t})=>{let n=await H(e,t);await t.click(n.getByRole(`button`,{name:`Copy code`})),await A(()=>O(n.getByRole(`status`)).toHaveTextContent(/could not copy/i))}},qn={beforeEach:B({"theme-accent":`rose`,"theme-radius":`full-rounded`,"theme-gray":`foo`,"theme-font":`geist`,appearance:`outlined`}),play:async({canvas:e,userEvent:t})=>{let n=await z(await P(e));await A(()=>O(U(n)).toEqual({accent:`rose`,radius:`full-rounded`,font:`geist`})),await O(R(e).getByRole(`combobox`,{name:`appearance`})).toHaveTextContent(`outlined`),await O(n.find(e=>e.type===`updateStoryArgs`)?.args[0]).toMatchObject({updatedArgs:{appearance:`outlined`}});let r=await H(e,t);await O(j(r.getByRole(`radiogroup`,{name:`Accent`})).getByRole(`radio`,{name:`Rose`})).toBeChecked(),await O(j(r.getByRole(`radiogroup`,{name:`Gray`})).getByRole(`radio`,{name:`Gray`})).toBeChecked(),await O(r.getByRole(`radio`,{name:`Full rounded`})).toBeChecked(),await O(r.getByRole(`combobox`,{name:`Font`})).toHaveTextContent(`Geist`)}},W={play:async({canvas:e,userEvent:t})=>{let n=await N(e,t);await t.click(n.getByRole(`link`,{name:/Badge/})),await F(e,`Badge`),e.queryByRole(`button`,{name:`Browse`})&&await t.keyboard(`{Escape}`);let r=await H(e,t);await t.click(j(r.getByRole(`radiogroup`,{name:`Accent`})).getByRole(`radio`,{name:`Rose`})),await t.keyboard(`{Escape}`),history.back(),await F(e,`Button`),await A(()=>O(L(`theme-accent`)).toBe(`rose`));let i=await H(e,t);await O(j(i.getByRole(`radiogroup`,{name:`Accent`})).getByRole(`radio`,{name:`Rose`})).toBeChecked()}},G={beforeEach:B({"theme-accent":`foo`}),play:async({canvas:e,userEvent:t})=>{let n=await z(await P(e)),r=await H(e,t);await O(j(r.getByRole(`radiogroup`,{name:`Accent`})).getByRole(`radio`,{name:`Blue`})).toBeChecked(),await O(n.filter(e=>e.type===`updateGlobals`)).toEqual([])}},K={beforeEach:oe(!0),play:async({canvas:e})=>{await O(e.queryByRole(`button`,{name:`Dark`})).toBeNull(),await A(()=>O(document.documentElement).toHaveClass(`dark`)),ae(!1),await A(()=>O(document.documentElement).not.toHaveClass(`dark`))}},q={beforeEach:B({tab:`specs`}),play:async({canvas:e,userEvent:t})=>{await F(e,`Button`),await O(I(e,`Specs`)).toHaveAttribute(`aria-selected`,`true`),await O(I(e,`Guideline`)).not.toHaveAttribute(`aria-disabled`,`true`),await O(e.queryByText(/not written for Button/)).toBeNull();let n=await N(e,t);await t.click(n.getByRole(`link`,{name:/Tooltip/})),await F(e,`Tooltip`),await O(I(e,`Playground`)).toHaveAttribute(`aria-selected`,`true`),await O(I(e,`Specs`)).toHaveAttribute(`aria-disabled`,`true`),await O(e.getByText(`Specs and Guideline are not written for Tooltip yet.`)).toBeVisible(),await O(L(`tab`)).toBe(`specs`)}},J=e=>e.findLast(e=>e.type===`playground/inspect`)?.args[0]?.request,Y={beforeEach:B({tab:`specs`}),play:async({canvas:e,userEvent:t})=>{let n=await z(await P(e)),r=R(e);await A(()=>O(J(n)).toEqual({parts:[{name:`Container`,selector:`button`},{name:`Label`,selector:`button > span`}],tokens:[`--control-md`,`--focus-width`,`--color-text-brand-inverse`],highlight:null})),await O(r.getByRole(`table`,{name:`md`})).toBeVisible(),await O(r.getByRole(`table`,{name:`Every size`})).toBeVisible(),await O(r.queryByRole(`table`,{name:`sm`})).toBeNull(),await O(r.getByRole(`heading`,{name:`Anatomy`})).toBeVisible();let i=await P(e),a=JSON.stringify({key:`storybook-channel`,event:{type:`playground/inspected`,args:[{values:{"--control-md":{kind:`length`,text:`32px`}}}]}});window.dispatchEvent(new MessageEvent(`message`,{data:a,source:i.contentWindow}));let o=await r.findByRole(`row`,{name:/Height 32px --control-md/});await t.hover(o),await A(()=>O(J(n)?.highlight).toEqual({part:`Container`,property:`Height`,token:`--control-md`})),await t.unhover(o),await A(()=>O(J(n)?.highlight).toBeNull()),o.focus(),await A(()=>O(J(n)?.highlight?.property).toBe(`Height`)),o.blur(),await A(()=>O(J(n)?.highlight).toBeNull()),e.queryByRole(`button`,{name:`Browse`})&&await O(getComputedStyle(e.getByRole(`main`)).position).toBe(`sticky`),await O(r.getByRole(`row`,{name:/^Focus ring Width/})).toBeVisible(),await t.click(I(e,`Playground`)),await A(()=>O(J(n)).toBeNull())}},X={beforeEach:B({tab:`specs`,size:`sm`}),play:async({canvas:e})=>{let t=await z(await P(e)),n=R(e);await O(n.getByRole(`table`,{name:`sm`})).toBeVisible(),await O(n.queryByRole(`table`,{name:`md`})).toBeNull(),await A(()=>O(J(t)?.tokens).toEqual([`--control-sm`,`--focus-width`,`--color-text-brand-inverse`]))}},Z={beforeEach:B({tab:`specs`}),play:async({canvas:e,userEvent:t})=>{let n=await z(await P(e)),r=R(e),i=j(r.getByRole(`radiogroup`,{name:`State`}));await O(i.getAllByRole(`radio`)).toHaveLength(4);for(let e of[`Default`,`Hover`,`Focus`,`Pressed`])await O(i.getByRole(`radio`,{name:e})).toBeVisible();await O(r.getByRole(`table`,{name:`primary`})).toBeVisible(),await O(r.queryByRole(`table`,{name:`secondary`})).toBeNull(),await O(r.queryByRole(`table`,{name:`Every variant`})).toBeNull(),await t.click(i.getByRole(`radio`,{name:`Hover`})),await A(()=>O(J(n)?.pseudo).toBe(`hover`)),await O(r.getByRole(`row`,{name:/Container, hover Background/})).toBeVisible(),await O(J(n)?.tokens).toContain(`--color-background-neutral`),await t.click(i.getByRole(`radio`,{name:`Default`})),await A(()=>O(J(n)).not.toHaveProperty(`pseudo`))}},Q={beforeEach:B({tab:`guideline`}),play:async({canvas:e,userEvent:t})=>{await F(e,`Button`);let n=R(e);await O(n.getByRole(`heading`,{name:`When to use`})).toBeVisible(),await O(n.getByText(`save`,{selector:`code`})).toBeVisible(),await O(n.getByText(`delete`,{selector:`strong`})).toBeVisible(),await O(n.getAllByRole(`listitem`).map(e=>e.textContent)).toEqual([`One primary per view`,`The rest step down`]),await O(n.getByText(`Not for going to another page.`)).toBeVisible(),await O(n.getByRole(`heading`,{name:`Accessibility`})).toBeVisible(),await O(n.getByRole(`link`,{name:`The full docs page`})).toHaveAttribute(`href`,`/playground-fixture/?path=/docs/${M.id}--docs&docTab=guidelines`);let r=await z(await P(e));await t.click(I(e,`Playground`)),await t.click(n.getByRole(`switch`,{name:`isLoading`})),await A(()=>O(r.at(-1)?.type).toBe(`updateStoryArgs`)),await t.click(I(e,`Guideline`));let i=n.getByRole(`button`,{name:/^Do One primary button/});await t.click(i),await A(async()=>O((await P(e)).getAttribute(`src`)).toContain(`id=components-buttons-button--do-one`)),await O(i).toHaveAttribute(`aria-pressed`,`true`),await O(j(e.getByRole(`main`)).getByText(`Do`)).toBeVisible(),await O(e.getByRole(`link`,{name:`Open in Storybook`})).toHaveAttribute(`href`,`/playground-fixture/?path=/story/components-buttons-button--do-one`),await t.click(e.getByRole(`button`,{name:`Back to Button`})),await A(async()=>O((await P(e)).getAttribute(`src`)).toContain(`id=${M.storyId}`)),await O(e.queryByRole(`button`,{name:`Back to Button`})).toBeNull(),await A(()=>O(L(`isLoading`)).toBe(`true`)),await O(R(e).queryByRole(`switch`,{name:`isLoading`})).toBeNull(),await t.click(n.getByRole(`button`,{name:/^Don't Two primaries/})),await A(async()=>O((await P(e)).getAttribute(`src`)).toContain(`id=components-buttons-button--dont-two`)),await t.click(I(e,`Playground`)),await A(async()=>O((await P(e)).getAttribute(`src`)).toContain(`id=${M.storyId}`))}},$={beforeEach:B({item:`patterns-application-ui-app-shell`,tab:`guideline`}),play:async({canvas:e})=>{await F(e,`App Shell`),await O(I(e,`Guideline`)).toHaveAttribute(`aria-selected`,`true`),await O(I(e,`Specs`)).toHaveAttribute(`aria-disabled`,`true`),await O(e.getByText(`Specs is not written for App Shell yet.`)).toBeVisible();let t=R(e);await O(t.getByText(`The frame around an app.`)).toBeVisible(),await O(t.getByRole(`heading`,{name:`Layout`})).toBeVisible(),await O(t.queryByRole(`heading`,{name:`When to use`})).toBeNull()}},Jn=[`Default`,`Grouped`,`Props`,`FromUrl`,`UnknownInUrl`,`Keyboard`,`PreviewTheme`,`ThemeColorRadius`,`ThemeTypo`,`ThemeCopyCode`,`ThemeCopyBlocked`,`ThemeFromUrl`,`ThemeSurvivesBack`,`ThemeUnknownInUrl`,`FollowsOs`,`DetailTabs`,`SpecsTab`,`SpecsFollowSize`,`SpecsStates`,`GuidelineTab`,`PatternGuideline`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    // No item in the URL: Button, on the Playground tab.
    await showing(canvas, 'Button');
    const iframe = await frame(canvas);
    await expect(iframe.getAttribute('src')).toContain(\`id=\${button.storyId}\`);
    await fillsCenter(canvas);
    await waitFor(() => expect(canvas.queryByRole('status', {
      name: /Loading/
    })).toBeNull());

    // No device to pick, and no browser chrome around the page.
    await expect(canvas.queryByRole('tablist', {
      name: 'Viewport'
    })).toBeNull();
    await expect(canvas.queryByRole('textbox', {
      name: 'Address'
    })).toBeNull();
    await expect(detailTab(canvas, 'Playground')).toHaveAttribute('aria-selected', 'true');
    // The toolbar names the item; its Storybook page is one icon button away.
    await expect(canvas.getByRole('heading', {
      name: 'Button',
      level: 2
    })).toBeVisible();
    await expect(canvas.getByRole('link', {
      name: 'Open in Storybook'
    })).toHaveAttribute('href', \`/playground-fixture/?path=/story/\${button.storyId}\`);
    let items = await openItems(canvas, userEvent);
    await expect(items.getByRole('link', {
      name: /Button/
    })).toHaveAttribute('aria-current', 'true');
    await expect(items.getByRole('heading', {
      name: 'Components'
    })).toBeVisible();
    await expect(items.getByRole('heading', {
      name: 'Patterns'
    })).toBeVisible();
    await expect(items.queryByRole('heading', {
      name: 'Templates'
    })).toBeNull();

    // Search hides cards, and a group left empty goes with them.
    const search = items.getByRole('searchbox', {
      name: 'Search by name'
    });
    await userEvent.type(search, 'bad');
    await expect(items.getAllByRole('link')).toHaveLength(1);
    await expect(items.getByRole('link', {
      name: /Badge/
    })).toBeVisible();
    await expect(items.queryByRole('heading', {
      name: 'Patterns'
    })).toBeNull();
    await userEvent.type(search, 'xyz');
    await expect(items.getByRole('heading', {
      name: 'Nothing matches'
    })).toBeVisible();
    await userEvent.click(items.getByRole('button', {
      name: 'Clear search and filters'
    }));
    await expect(items.getAllByRole('link')).toHaveLength(4);

    // Status filter: only the experimental ones.
    await userEvent.click(items.getByRole('combobox', {
      name: 'Status'
    }));
    await userEvent.click(await screen.findByRole('option', {
      name: 'experimental'
    }));
    await waitFor(() => expect(items.getAllByRole('link')).toHaveLength(2));
    await expect(items.queryByRole('link', {
      name: /Button/
    })).toBeNull();
    await expect(items.getByRole('status')).toHaveTextContent('2 items');

    // Category filter on top: Overlays leaves Tooltip alone.
    await userEvent.click(items.getByRole('combobox', {
      name: 'Category'
    }));
    await userEvent.click(await screen.findByRole('option', {
      name: 'Overlays'
    }));
    await waitFor(() => expect(items.getAllByRole('link')).toHaveLength(1));
    await expect(items.queryByRole('heading', {
      name: 'Patterns'
    })).toBeNull();

    // Picking a card shows it live and writes it to the URL.
    await userEvent.click(items.getByRole('link', {
      name: /Tooltip/
    }));
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain(\`id=\${tooltip.storyId}\`));
    await showing(canvas, 'Tooltip');
    await expect(canvas.getByRole('link', {
      name: 'Open in Storybook'
    })).toHaveAttribute('href', \`/playground-fixture/?path=/story/\${tooltip.storyId}\`);
    await waitFor(() => expect(param('item')).toBe(tooltip.id));
    // Tooltip has no props: the column stays and says so.
    await expect(propsPanel(canvas).getByText('Tooltip has no props to change here.')).toBeVisible();

    // The filters survive closing and reopening the drawer.
    items = await openItems(canvas, userEvent);
    await expect(items.getByRole('link', {
      name: /Tooltip/
    })).toHaveAttribute('aria-current', 'true');
    await expect(items.getAllByRole('link')).toHaveLength(1);
    await userEvent.keyboard('{Escape}');

    // Back steps to the entry before Tooltip: Button, as the page opened.
    history.back();
    await showing(canvas, 'Button');
    await fillsCenter(canvas);
  }
}`,...V.parameters?.docs?.source}}},Pn.parameters={...Pn.parameters,docs:{...Pn.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const items = await openItems(canvas, userEvent);
    const section = (name: string) => items.getByRole('button', {
      name
    });

    // Each kind is cut into its Categories, all open at first.
    for (const name of ['Atomic Elements', 'Buttons', 'Overlays', 'Application UI']) await expect(section(name)).toHaveAttribute('aria-expanded', 'true');
    // The card has name and status; the section header carries the Category.
    const badgeCard = items.getByRole('link', {
      name: /Badge/
    });
    await expect(badgeCard).toHaveTextContent(/^Badgebeta$/);

    // The mouse folds a section and the keyboard opens it again.
    await userEvent.click(section('Buttons'));
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'false');
    await waitFor(() => expect(items.getByRole('link', {
      name: /Button/,
      hidden: true
    })).not.toBeVisible());
    section('Buttons').focus();
    await userEvent.keyboard('{Enter}');
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() => expect(items.getByRole('link', {
      name: /Button/
    })).toBeVisible());
    await userEvent.keyboard(' ');
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'false');

    // A search opens the folded section that holds a match and hides the empty ones.
    await userEvent.click(section('Atomic Elements'));
    await expect(section('Atomic Elements')).toHaveAttribute('aria-expanded', 'false');
    await userEvent.type(items.getByRole('searchbox', {
      name: 'Search by name'
    }), 'b');
    await expect(section('Atomic Elements')).toHaveAttribute('aria-expanded', 'true');
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'true');
    await waitFor(() => expect(items.getByRole('link', {
      name: /Badge/
    })).toBeVisible());
    await expect(items.queryByRole('button', {
      name: 'Overlays'
    })).toBeNull();
    await expect(items.queryByRole('button', {
      name: 'Application UI'
    })).toBeNull();

    // Clearing the search brings back the folds from before it.
    await userEvent.clear(items.getByRole('searchbox', {
      name: 'Search by name'
    }));
    await expect(section('Atomic Elements')).toHaveAttribute('aria-expanded', 'false');
    await expect(section('Buttons')).toHaveAttribute('aria-expanded', 'false');
    await expect(section('Overlays')).toHaveAttribute('aria-expanded', 'true');

    // A filter does the same: only the matching section, open.
    await userEvent.click(items.getByRole('combobox', {
      name: 'Category'
    }));
    await userEvent.click(await screen.findByRole('option', {
      name: 'Buttons'
    }));
    await waitFor(() => expect(section('Buttons')).toHaveAttribute('aria-expanded', 'true'));
    await expect(items.queryByRole('button', {
      name: 'Atomic Elements'
    })).toBeNull();
    await expect(items.queryByRole('button', {
      name: 'Overlays'
    })).toBeNull();
    // The closing listbox stays in the DOM, unnamed, while it animates out;
    // the a11y check after the play function must not catch it (WebKit did).
    await waitFor(() => expect(screen.queryByRole('listbox')).toBeNull());
  }
}`,...Pn.parameters?.docs?.source}}},Fn.parameters={...Fn.parameters,docs:{...Fn.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const panel = propsPanel(canvas);
    const iframe = await frame(canvas);
    const src = iframe.getAttribute('src');
    const received = await fakePreview(iframe);
    const last = () => received.at(-1);
    const update = (updatedArgs: object) => ({
      type: 'updateStoryArgs',
      args: [{
        storyId: button.storyId,
        updatedArgs
      }]
    });

    // Controls start at the defaults.
    await expect(panel.getByRole('combobox', {
      name: 'variant'
    })).toHaveTextContent('primary');
    await expect(panel.getByRole('switch', {
      name: 'isLoading'
    })).not.toBeChecked();
    await expect(panel.getByRole('textbox', {
      name: 'children'
    })).toHaveValue('Button');

    // Each control sends its change into the frame and writes it to the URL.
    await userEvent.click(panel.getByRole('combobox', {
      name: 'variant'
    }));
    await userEvent.click(await screen.findByRole('option', {
      name: 'secondary'
    }));
    await waitFor(() => expect(last()).toEqual(update({
      variant: 'secondary'
    })));
    await waitFor(() => expect(param('variant')).toBe('secondary'));
    await userEvent.click(panel.getByRole('switch', {
      name: 'isLoading'
    }));
    await waitFor(() => expect(last()).toEqual(update({
      isLoading: true
    })));
    await waitFor(() => expect(param('isLoading')).toBe('true'));
    const text = panel.getByRole('textbox', {
      name: 'children'
    });
    await userEvent.clear(text);
    await userEvent.type(text, 'Save it!');
    await waitFor(() => expect(last()).toEqual(update({
      children: 'Save it!'
    })));
    await waitFor(() => expect(param('children')).toBe('Save it!'));

    // Back to its default, a prop is reset in the frame and leaves the URL.
    await userEvent.click(panel.getByRole('switch', {
      name: 'isLoading'
    }));
    await waitFor(() => expect(last()).toEqual({
      type: 'resetStoryArgs',
      args: [{
        storyId: button.storyId,
        argNames: ['isLoading']
      }]
    }));
    await waitFor(() => expect(param('isLoading')).toBeNull());

    // Reset puts everything back.
    await userEvent.click(panel.getByRole('button', {
      name: 'Reset'
    }));
    await waitFor(() => expect(last()).toEqual({
      type: 'resetStoryArgs',
      args: [{
        storyId: button.storyId,
        argNames: ['variant', 'children']
      }]
    }));
    await waitFor(() => expect(param('variant')).toBeNull());
    await waitFor(() => expect(param('children')).toBeNull());
    await expect(panel.getByRole('combobox', {
      name: 'variant'
    })).toHaveTextContent('primary');
    await expect(panel.getByRole('textbox', {
      name: 'children'
    })).toHaveValue('Button');

    // None of it reloaded the frame.
    await expect((await frame(canvas)).getAttribute('src')).toBe(src);
  }
}`,...Fn.parameters?.docs?.source}}},In.parameters={...In.parameters,docs:{...In.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    item: badge.id,
    count: '3',
    isDot: 'true',
    gone: 'x'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    await showing(canvas, 'Badge');
    const iframe = await frame(canvas);
    await expect(iframe.getAttribute('src')).toContain(\`id=\${badge.storyId}\`);

    // The shared props fill the panel and go into the frame once it has rendered; the unknown one is ignored.
    const panel = propsPanel(canvas);
    const count = panel.getByRole('textbox', {
      name: 'count'
    });
    await expect(count).toHaveValue('3');
    await expect(panel.getByRole('switch', {
      name: 'isDot'
    })).toBeChecked();
    const received = await fakePreview(iframe);
    await waitFor(() => expect(received).toEqual([{
      type: 'updateStoryArgs',
      args: [{
        storyId: badge.storyId,
        updatedArgs: {
          count: 3,
          isDot: true
        }
      }]
    }]));

    // The number control: only the change goes into the frame.
    await userEvent.clear(count);
    await userEvent.type(count, '12');
    await userEvent.tab();
    await waitFor(() => expect(received.at(-1)).toEqual({
      type: 'updateStoryArgs',
      args: [{
        storyId: badge.storyId,
        updatedArgs: {
          count: 12
        }
      }]
    }));
    await waitFor(() => expect(param('count')).toBe('12'));
  }
}`,...In.parameters?.docs?.source}}},Ln.parameters={...Ln.parameters,docs:{...Ln.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    item: 'components-gone-widget',
    tab: 'nope'
  }),
  play: async ({
    canvas
  }) => {
    await showing(canvas, 'Button');
    await expect(detailTab(canvas, 'Playground')).toHaveAttribute('aria-selected', 'true');
  }
}`,...Ln.parameters?.docs?.source}}},Rn.parameters={...Rn.parameters,docs:{...Rn.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    // Everything is reachable with Tab, and a card opens with Enter.
    const browse = canvas.queryByRole('button', {
      name: 'Browse'
    });
    if (browse) {
      browse.focus();
      await userEvent.keyboard('{Enter}');
      await screen.findByRole('dialog', {
        name: 'Items'
      });
    }
    const items = within(browse ? screen.getByRole('dialog') : canvas.getByRole('navigation', {
      name: 'Items'
    }));
    const target = items.getByRole('link', {
      name: /Badge/
    });
    for (let i = 0; i < 20 && document.activeElement !== target; i++) await userEvent.tab();
    await expect(target).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await showing(canvas, 'Badge');
  }
}`,...Rn.parameters?.docs?.source}}},zn.parameters={...zn.parameters,docs:{...zn.parameters?.docs,source:{originalSource:`{
  beforeEach: withPrefersDark(false),
  play: async ({
    canvas,
    userEvent
  }) => {
    const panel = propsPanel(canvas);
    const iframe = await frame(canvas);
    const src = iframe.getAttribute('src');
    const received = await fakePreview(iframe);
    // The frame starts on the default, System, without a message.
    await expect(src).toContain('globals=appearance%3Asystem');

    // A prop changed before the theme stays changed after it.
    await userEvent.click(panel.getByRole('switch', {
      name: 'isLoading'
    }));
    await waitFor(() => expect(received.at(-1)?.type).toBe('updateStoryArgs'));
    const trigger = canvas.getByRole('button', {
      name: 'Theme'
    });
    await userEvent.click(trigger);
    const dialog = within(await screen.findByRole('dialog', {
      name: 'Preview theme'
    }));
    await expect(dialog.getByRole('radio', {
      name: 'System'
    })).toBeChecked();
    await userEvent.click(dialog.getByRole('radio', {
      name: 'Dark'
    }));
    await waitFor(() => expect(received.at(-1)).toEqual({
      type: 'updateGlobals',
      args: [{
        globals: {
          appearance: 'dark'
        }
      }]
    }));
    await expect(received.filter(e => e.type === 'updateStoryArgs')).toHaveLength(1);
    await expect((await frame(canvas)).getAttribute('src')).toBe(src);
    // The page itself stays on the OS appearance.
    await expect(document.documentElement).not.toHaveClass('dark');

    // Escape closes it and gives focus back to the Theme button.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog', {
      name: 'Preview theme'
    })).toBeNull());
    await expect(trigger).toHaveFocus();
    await expect(panel.getByRole('switch', {
      name: 'isLoading'
    })).toBeChecked();

    // Opening it moves focus inside (the modal trap itself is Base UI's, and a
    // synthetic Tab cannot exercise it: see Popover.stories). Left open for the a11y check.
    await userEvent.click(trigger);
    const popup = await screen.findByRole('dialog', {
      name: 'Preview theme'
    });
    await waitFor(() => expect(popup.contains(document.activeElement)).toBe(true));
    await expect(within(popup).getByRole('radio', {
      name: 'Dark'
    })).toBeChecked();
  }
}`,...zn.parameters?.docs?.source}}},Vn.parameters={...Vn.parameters,docs:{...Vn.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const received = await fakePreview(await frame(canvas));
    const dialog = await openTheme(canvas, userEvent);
    const accent = within(dialog.getByRole('radiogroup', {
      name: 'Accent'
    }));
    const gray = within(dialog.getByRole('radiogroup', {
      name: 'Gray'
    }));
    // Every hue and ramp of the kit, each named; the defaults chosen.
    await expect(accent.getAllByRole('radio')).toHaveLength(17);
    await expect(gray.getAllByRole('radio')).toHaveLength(9);
    await expect(accent.getByRole('radio', {
      name: 'Blue'
    })).toBeChecked();
    await expect(gray.getByRole('radio', {
      name: 'Gray'
    })).toBeChecked();
    await expect(dialog.getByRole('radio', {
      name: 'Rounded'
    })).toBeChecked();
    await userEvent.click(accent.getByRole('radio', {
      name: 'Rose'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      accent: 'rose'
    }));
    await userEvent.click(gray.getByRole('radio', {
      name: 'Slate'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      gray: 'slate'
    }));
    await userEvent.click(dialog.getByRole('radio', {
      name: 'Full rounded'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      radius: 'full-rounded'
    }));
    await userEvent.click(dialog.getByRole('radio', {
      name: 'Dark'
    }));
    await waitFor(() => expect([param('theme-accent'), param('theme-gray'), param('theme-radius'), param('theme-appearance')]).toEqual(['rose', 'slate', 'full-rounded', 'dark']));

    // Back to the default: the param goes.
    await userEvent.click(accent.getByRole('radio', {
      name: 'Blue'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      accent: 'blue'
    }));
    await waitFor(() => expect(param('theme-accent')).toBeNull());

    // Reset puts every option back and empties the URL of them.
    await userEvent.click(dialog.getByRole('button', {
      name: 'Reset'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      gray: 'gray',
      radius: 'rounded',
      appearance: 'system'
    }));
    await waitFor(() => expect(themeParams()).toEqual([]));
    await expect(gray.getByRole('radio', {
      name: 'Gray'
    })).toBeChecked();
    await expect(dialog.getByRole('radio', {
      name: 'System'
    })).toBeChecked();
  }
}`,...Vn.parameters?.docs?.source}}},Hn.parameters={...Hn.parameters,docs:{...Hn.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const received = await fakePreview(await frame(canvas));
    const dialog = await openTheme(canvas, userEvent);
    const font = dialog.getByRole('combobox', {
      name: 'Font'
    });
    await expect(font).toHaveTextContent('System');
    await userEvent.click(font);
    const fonts = await screen.findByRole('listbox');
    await expect(within(fonts).getAllByRole('option').map(o => o.textContent)).toEqual(['System', 'Inter', 'Geist', 'Serif', 'Mono']);
    await userEvent.click(within(fonts).getByRole('option', {
      name: 'Inter'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      font: 'inter'
    }));
    await waitFor(() => expect(param('theme-font')).toBe('inter'));

    // Reset covers Typo too.
    await userEvent.click(dialog.getByRole('button', {
      name: 'Reset'
    }));
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      font: 'system'
    }));
    await waitFor(() => expect(themeParams()).toEqual([]));
    await expect(font).toHaveTextContent('System');
  }
}`,...Hn.parameters?.docs?.source}}},Gn.parameters={...Gn.parameters,docs:{...Gn.parameters?.docs,source:{originalSource:`{
  beforeEach: withClipboard(),
  play: async ({
    canvas,
    userEvent
  }) => {
    const dialog = await openTheme(canvas, userEvent);
    const copy = dialog.getByRole('button', {
      name: 'Copy code'
    });
    const status = dialog.getByRole('status');
    // Nothing changed: a bare <Theme>.
    await userEvent.click(copy);
    await waitFor(() => expect(clipboard).toEqual(['<Theme>']));
    await expect(status).toHaveTextContent('Code copied');

    // Only what differs from the defaults, the font as a token.
    await userEvent.click(within(dialog.getByRole('radiogroup', {
      name: 'Accent'
    })).getByRole('radio', {
      name: 'Rose'
    }));
    await userEvent.click(dialog.getByRole('radio', {
      name: 'Full rounded'
    }));
    await userEvent.click(copy);
    await waitFor(() => expect(clipboard.at(-1)).toBe('<Theme accentColor="rose" radius="full-rounded">'));
    await userEvent.click(within(dialog.getByRole('radiogroup', {
      name: 'Gray'
    })).getByRole('radio', {
      name: 'Slate'
    }));
    await userEvent.click(dialog.getByRole('radio', {
      name: 'Dark'
    }));
    await userEvent.click(dialog.getByRole('combobox', {
      name: 'Font'
    }));
    await userEvent.click(await screen.findByRole('option', {
      name: 'Serif'
    }));
    await userEvent.click(copy);
    await waitFor(() => expect(clipboard.at(-1)).toBe('<Theme accentColor="rose" grayColor="slate" radius="full-rounded" appearance="dark" tokens={{ \\'font-sans\\': "ui-serif, Georgia, serif" }}>'));
  }
}`,...Gn.parameters?.docs?.source}}},Kn.parameters={...Kn.parameters,docs:{...Kn.parameters?.docs,source:{originalSource:`{
  beforeEach: withClipboard(true),
  play: async ({
    canvas,
    userEvent
  }) => {
    const dialog = await openTheme(canvas, userEvent);
    await userEvent.click(dialog.getByRole('button', {
      name: 'Copy code'
    }));
    await waitFor(() => expect(dialog.getByRole('status')).toHaveTextContent(/could not copy/i));
  }
}`,...Kn.parameters?.docs?.source}}},qn.parameters={...qn.parameters,docs:{...qn.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    'theme-accent': 'rose',
    'theme-radius': 'full-rounded',
    'theme-gray': 'foo',
    'theme-font': 'geist',
    appearance: 'outlined'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    const received = await fakePreview(await frame(canvas));
    // Only what differs from the frame's start goes over; the unknown gray is dropped.
    await waitFor(() => expect(lastGlobals(received)).toEqual({
      accent: 'rose',
      radius: 'full-rounded',
      font: 'geist'
    }));
    // Button's own appearance prop is untouched by the theme's.
    await expect(propsPanel(canvas).getByRole('combobox', {
      name: 'appearance'
    })).toHaveTextContent('outlined');
    await expect(received.find(e => e.type === 'updateStoryArgs')?.args[0]).toMatchObject({
      updatedArgs: {
        appearance: 'outlined'
      }
    });
    const dialog = await openTheme(canvas, userEvent);
    await expect(within(dialog.getByRole('radiogroup', {
      name: 'Accent'
    })).getByRole('radio', {
      name: 'Rose'
    })).toBeChecked();
    await expect(within(dialog.getByRole('radiogroup', {
      name: 'Gray'
    })).getByRole('radio', {
      name: 'Gray'
    })).toBeChecked();
    await expect(dialog.getByRole('radio', {
      name: 'Full rounded'
    })).toBeChecked();
    await expect(dialog.getByRole('combobox', {
      name: 'Font'
    })).toHaveTextContent('Geist');
  }
}`,...qn.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas,
    userEvent
  }) => {
    const items = await openItems(canvas, userEvent);
    await userEvent.click(items.getByRole('link', {
      name: /Badge/
    }));
    await showing(canvas, 'Badge');
    if (canvas.queryByRole('button', {
      name: 'Browse'
    })) await userEvent.keyboard('{Escape}');
    const dialog = await openTheme(canvas, userEvent);
    await userEvent.click(within(dialog.getByRole('radiogroup', {
      name: 'Accent'
    })).getByRole('radio', {
      name: 'Rose'
    }));
    await userEvent.keyboard('{Escape}');
    history.back();
    await showing(canvas, 'Button');
    await waitFor(() => expect(param('theme-accent')).toBe('rose'));
    const again = await openTheme(canvas, userEvent);
    await expect(within(again.getByRole('radiogroup', {
      name: 'Accent'
    })).getByRole('radio', {
      name: 'Rose'
    })).toBeChecked();
  }
}`,...W.parameters?.docs?.source},description:{story:`The Preview theme belongs to the page: Back changes the item, not the theme.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    'theme-accent': 'foo'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    const received = await fakePreview(await frame(canvas));
    const dialog = await openTheme(canvas, userEvent);
    await expect(within(dialog.getByRole('radiogroup', {
      name: 'Accent'
    })).getByRole('radio', {
      name: 'Blue'
    })).toBeChecked();
    await expect(received.filter(e => e.type === 'updateGlobals')).toEqual([]);
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  beforeEach: withPrefersDark(true),
  play: async ({
    canvas
  }) => {
    // No Dark button: the page follows the OS, and the Preview theme is apart.
    await expect(canvas.queryByRole('button', {
      name: 'Dark'
    })).toBeNull();
    await waitFor(() => expect(document.documentElement).toHaveClass('dark'));
    // And keeps following it when the OS setting changes.
    setPrefersDark(false);
    await waitFor(() => expect(document.documentElement).not.toHaveClass('dark'));
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    tab: 'specs'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    await showing(canvas, 'Button');
    // Button has Specs: the URL's tab opens.
    await expect(detailTab(canvas, 'Specs')).toHaveAttribute('aria-selected', 'true');
    await expect(detailTab(canvas, 'Guideline')).not.toHaveAttribute('aria-disabled', 'true');
    await expect(canvas.queryByText(/not written for Button/)).toBeNull();

    // Tooltip has neither: Playground shows, and the wanted tab stays in the URL for the next item.
    const items = await openItems(canvas, userEvent);
    await userEvent.click(items.getByRole('link', {
      name: /Tooltip/
    }));
    await showing(canvas, 'Tooltip');
    await expect(detailTab(canvas, 'Playground')).toHaveAttribute('aria-selected', 'true');
    await expect(detailTab(canvas, 'Specs')).toHaveAttribute('aria-disabled', 'true');
    await expect(canvas.getByText('Specs and Guideline are not written for Tooltip yet.')).toBeVisible();
    await expect(param('tab')).toBe('specs');
  }
}`,...q.parameters?.docs?.source},description:{story:"The right column's tabs. An item without Specs or Guideline has them\ndisabled, says so, and a `?tab=` it lacks shows Playground.",...q.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    tab: 'specs'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    const received = await fakePreview(await frame(canvas));
    const panel = propsPanel(canvas);
    await waitFor(() => expect(lastInspect(received)).toEqual({
      parts: [{
        name: 'Container',
        selector: 'button'
      }, {
        name: 'Label',
        selector: 'button > span'
      }],
      tokens: ['--control-md', '--focus-width', '--color-text-brand-inverse'],
      highlight: null
    }));
    // The md table and the one for every size; sm is not the current size.
    await expect(panel.getByRole('table', {
      name: 'md'
    })).toBeVisible();
    await expect(panel.getByRole('table', {
      name: 'Every size'
    })).toBeVisible();
    await expect(panel.queryByRole('table', {
      name: 'sm'
    })).toBeNull();
    await expect(panel.getByRole('heading', {
      name: 'Anatomy'
    })).toBeVisible();

    // The frame's answer fills the value column.
    const iframe = await frame(canvas);
    const data = JSON.stringify({
      key: 'storybook-channel',
      event: {
        type: 'playground/inspected',
        args: [{
          values: {
            '--control-md': {
              kind: 'length',
              text: '32px'
            }
          }
        }]
      }
    });
    window.dispatchEvent(new MessageEvent('message', {
      data,
      source: iframe.contentWindow
    }));
    const row = await panel.findByRole('row', {
      name: /Height 32px --control-md/
    });

    // Hover asks for that row's redline, on its anatomy part; leaving clears it.
    await userEvent.hover(row);
    await waitFor(() => expect(lastInspect(received)?.highlight).toEqual({
      part: 'Container',
      property: 'Height',
      token: '--control-md'
    }));
    await userEvent.unhover(row);
    await waitFor(() => expect(lastInspect(received)?.highlight).toBeNull());
    // A tap (or Tab) focuses the row, which asks for the redline the same way.
    row.focus();
    await waitFor(() => expect(lastInspect(received)?.highlight?.property).toBe('Height'));
    row.blur();
    await waitFor(() => expect(lastInspect(received)?.highlight).toBeNull());
    // Under 1024 the details sit below the live view, which sticks at the top so the redline stays in sight.
    if (canvas.queryByRole('button', {
      name: 'Browse'
    })) await expect(getComputedStyle(canvas.getByRole('main')).position).toBe('sticky');
    // A row whose part has no element in the anatomy (Focus ring) is still listed, unnumbered.
    await expect(panel.getByRole('row', {
      name: /^Focus ring Width/
    })).toBeVisible();

    // Back on Playground, the frame is told to stop drawing.
    await userEvent.click(detailTab(canvas, 'Playground'));
    await waitFor(() => expect(lastInspect(received)).toBeNull());
  }
}`,...Y.parameters?.docs?.source},description:{story:`Specs asks the frame to number the parts and resolve the tokens of the
tables it shows: the current size's, plus those for every size. The frame
answers with the values; hovering a row asks for its redline.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    tab: 'specs',
    size: 'sm'
  }),
  play: async ({
    canvas
  }) => {
    const received = await fakePreview(await frame(canvas));
    const panel = propsPanel(canvas);
    await expect(panel.getByRole('table', {
      name: 'sm'
    })).toBeVisible();
    await expect(panel.queryByRole('table', {
      name: 'md'
    })).toBeNull();
    await waitFor(() => expect(lastInspect(received)?.tokens).toEqual(['--control-sm', '--focus-width', '--color-text-brand-inverse']));
  }
}`,...X.parameters?.docs?.source},description:{story:`The size picked on Playground is the size Specs measures.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    tab: 'specs'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    const received = await fakePreview(await frame(canvas));
    const panel = propsPanel(canvas);
    const picker = within(panel.getByRole('radiogroup', {
      name: 'State'
    }));
    // focus and focus-visible are one Focus; Pressed for an interactive item even if its page does not force it; no disabled prop, so no Disabled.
    await expect(picker.getAllByRole('radio')).toHaveLength(4);
    for (const name of ['Default', 'Hover', 'Focus', 'Pressed']) await expect(picker.getByRole('radio', {
      name
    })).toBeVisible();
    await expect(panel.getByRole('table', {
      name: 'primary'
    })).toBeVisible();
    await expect(panel.queryByRole('table', {
      name: 'secondary'
    })).toBeNull();
    // The hover row's table is empty by default, so it is not shown.
    await expect(panel.queryByRole('table', {
      name: 'Every variant'
    })).toBeNull();
    await userEvent.click(picker.getByRole('radio', {
      name: 'Hover'
    }));
    await waitFor(() => expect(lastInspect(received)?.pseudo).toBe('hover'));
    await expect(panel.getByRole('row', {
      name: /Container, hover Background/
    })).toBeVisible();
    await expect(lastInspect(received)?.tokens).toContain('--color-background-neutral');
    await userEvent.click(picker.getByRole('radio', {
      name: 'Default'
    }));
    await waitFor(() => expect(lastInspect(received)).not.toHaveProperty('pseudo'));
  }
}`,...Z.parameters?.docs?.source},description:{story:`The State picker forces a pseudo-class on the live item, and the Color
rows that name a state show only in it. Tables follow the variant as they
follow the size.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    tab: 'guideline'
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    await showing(canvas, 'Button');
    const panel = propsPanel(canvas);
    await expect(panel.getByRole('heading', {
      name: 'When to use'
    })).toBeVisible();
    // Inline markdown: code and bold become elements, a link keeps its words.
    await expect(panel.getByText('save', {
      selector: 'code'
    })).toBeVisible();
    await expect(panel.getByText('delete', {
      selector: 'strong'
    })).toBeVisible();
    await expect(panel.getAllByRole('listitem').map(li => li.textContent)).toEqual(['One primary per view', 'The rest step down']);
    await expect(panel.getByText('Not for going to another page.')).toBeVisible();
    await expect(panel.getByRole('heading', {
      name: 'Accessibility'
    })).toBeVisible();
    await expect(panel.getByRole('link', {
      name: 'The full docs page'
    })).toHaveAttribute('href', \`/playground-fixture/?path=/docs/\${button.id}--docs&docTab=guidelines\`);
    const received = await fakePreview(await frame(canvas));
    await userEvent.click(detailTab(canvas, 'Playground'));
    await userEvent.click(panel.getByRole('switch', {
      name: 'isLoading'
    }));
    await waitFor(() => expect(received.at(-1)?.type).toBe('updateStoryArgs'));
    await userEvent.click(detailTab(canvas, 'Guideline'));

    // The Do example takes the live view; the item's props do not go to it.
    const doButton = panel.getByRole('button', {
      name: /^Do One primary button/
    });
    await userEvent.click(doButton);
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain('id=components-buttons-button--do-one'));
    await expect(doButton).toHaveAttribute('aria-pressed', 'true');
    await expect(within(canvas.getByRole('main')).getByText('Do')).toBeVisible();
    await expect(canvas.getByRole('link', {
      name: 'Open in Storybook'
    })).toHaveAttribute('href', '/playground-fixture/?path=/story/components-buttons-button--do-one');

    // Back shows the item again, its props kept.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Back to Button'
    }));
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain(\`id=\${button.storyId}\`));
    await expect(canvas.queryByRole('button', {
      name: 'Back to Button'
    })).toBeNull();
    await waitFor(() => expect(param('isLoading')).toBe('true'));
    await expect(propsPanel(canvas).queryByRole('switch', {
      name: 'isLoading'
    })).toBeNull();

    // Another tab ends the example too.
    await userEvent.click(panel.getByRole('button', {
      name: /^Don't Two primaries/
    }));
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain('id=components-buttons-button--dont-two'));
    await userEvent.click(detailTab(canvas, 'Playground'));
    await waitFor(async () => expect((await frame(canvas)).getAttribute('src')).toContain(\`id=\${button.storyId}\`));
  }
}`,...Q.parameters?.docs?.source},description:{story:`Guideline: when to use and when not, then the Do/Don't pairs. Picking one
shows its story in the live view, says which in the toolbar, and leads back.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  beforeEach: withUrl({
    item: 'patterns-application-ui-app-shell',
    tab: 'guideline'
  }),
  play: async ({
    canvas
  }) => {
    await showing(canvas, 'App Shell');
    await expect(detailTab(canvas, 'Guideline')).toHaveAttribute('aria-selected', 'true');
    await expect(detailTab(canvas, 'Specs')).toHaveAttribute('aria-disabled', 'true');
    await expect(canvas.getByText('Specs is not written for App Shell yet.')).toBeVisible();
    const panel = propsPanel(canvas);
    await expect(panel.getByText('The frame around an app.')).toBeVisible();
    await expect(panel.getByRole('heading', {
      name: 'Layout'
    })).toBeVisible();
    await expect(panel.queryByRole('heading', {
      name: 'When to use'
    })).toBeNull();
  }
}`,...$.parameters?.docs?.source},description:{story:`A pattern: no Specs, and a Guideline made of its page's opening prose and sections.`,...$.parameters?.docs?.description}}}})))()}Yn();export{V as Default,q as DetailTabs,K as FollowsOs,In as FromUrl,Pn as Grouped,Q as GuidelineTab,Rn as Keyboard,$ as PatternGuideline,zn as PreviewTheme,Fn as Props,X as SpecsFollowSize,Z as SpecsStates,Y as SpecsTab,Vn as ThemeColorRadius,Kn as ThemeCopyBlocked,Gn as ThemeCopyCode,qn as ThemeFromUrl,W as ThemeSurvivesBack,Hn as ThemeTypo,G as ThemeUnknownInUrl,Ln as UnknownInUrl,Jn as __namedExportsOrder,Nn as default};