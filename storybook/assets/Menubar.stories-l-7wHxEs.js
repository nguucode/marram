import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./utils-CUvRSo4U.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{Lt as s,Rt as ee,en as c}from"./DirectionContext-jwbrgzG8.js";import{c as l,t as u,u as d}from"./blocks-COhIzeP7.js";import{o as te,s as f}from"./Tag-CniBa3uD.js";import{A as p,F as m,M as h,N as ne,j as re}from"./usePopupHandleStore-D1ByFjxm.js";import{n as ie,t as g}from"./icon-Cjfg2BMt.js";import{a as _,c as ae,d as oe,f as se,i as ce,l as le,n as ue,o as de,p as fe,r as pe,s as me,u as he}from"./Menu-CdupLH08.js";var v;function y(){return(y=t((()=>{v=`data-has-submenu-open`})))()}function ge(e){let t=ne(),{events:n}=m(),r=fe();return b.useEffect(()=>{function e(e){e.nodeId&&e.parentNodeId===t&&(e.open?r.hasSubmenuOpen||r.setHasSubmenuOpen(!0):e.reason!==`sibling-open`&&e.reason!==`list-navigation`&&r.setHasSubmenuOpen(!1))}return n.on(`menuopenchange`,e),()=>{n.off(`menuopenchange`,e)}},[n,t,r]),(0,x.jsx)(p,{id:t,children:e.children})}var b,x,S,C;function w(){return(w=t((()=>{b=e(r(),1),h(),se(),f(),s(),y(),c(),x=o(),S={hasSubmenuOpen(e){return e?{[v]:``}:null}},C=b.forwardRef(function(e,t){let{orientation:n=`horizontal`,loopFocus:r=!0,render:i,className:a,modal:o=!0,disabled:s=!1,id:c,style:l,...u}=e,[d,f]=b.useState(null),[p,m]=b.useState(!1),h=ee(c),ne={orientation:n,modal:o,hasSubmenuOpen:p},ie=b.useRef(null),g=b.useRef(!1),_=b.useMemo(()=>({contentElement:d,setContentElement:f,setHasSubmenuOpen:m,hasSubmenuOpen:p,modal:o,disabled:s,orientation:n,allowMouseUpTriggerRef:g,rootId:h}),[d,p,o,s,n,h]);return(0,x.jsx)(oe.Provider,{value:_,children:(0,x.jsx)(re,{children:(0,x.jsx)(ge,{children:(0,x.jsx)(te,{render:i,className:a,style:l,state:ne,stateAttributesMapping:S,refs:[t,f,ie],props:[{role:`menubar`,id:h,"aria-orientation":n},u],orientation:n,loopFocus:r,enableHomeAndEndKeys:!0,highlightItemOnHover:p})})})})})})))()}var T,E,D;function O(){return(O=t((()=>{T=`_bar_qks8z_3`,E=`_trigger_qks8z_17`,D={bar:T,trigger:E}})))()}function k({menus:e,"aria-label":t,isModal:n=!0,container:r,className:i}){return(0,A.jsx)(C,{"aria-label":t,modal:n,className:a(D.bar,i),children:e.map((e,t)=>(0,A.jsxs)(le,{disabled:e.disabled,defaultOpen:e.defaultOpen,children:[(0,A.jsx)(me,{className:D.trigger,children:e.label}),(0,A.jsx)(pe,{side:`bottom`,align:`start`,container:r,children:(0,A.jsx)(ue,{items:e.items})})]},t))})}var A;function j(){return(j=t((()=>{he(),ae(),w(),i(),ce(),O(),A=o(),k.__docgenInfo={description:`A row of menus, as in a desktop app: File, Edit, View, each opening a flyout.`,methods:[],displayName:`Menubar`,props:{menus:{required:!0,tsType:{name:`Array`,elements:[{name:`MenubarMenu`}],raw:`MenubarMenu[]`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:`Names the bar. Needed when a page has more than one menubar.`},isModal:{required:!1,tsType:{name:`boolean`},description:"While a flyout is open, lock page scroll and make the rest of the page\ninert. `false` leaves the page as is.",defaultValue:{value:`true`,computed:!1}},container:{required:!1,tsType:{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]},description:"Where the flyouts render instead of `<body>`, e.g. an element in fullscreen."},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var _e=n({Anatomy:()=>Z,Default:()=>U,DisabledMenu:()=>K,DoConventionalOrder:()=>Q,DontNavigation:()=>$,HoverSwitches:()=>G,Modal:()=>W,Open:()=>Y,__namedExportsOrder:()=>ve,anatomyParts:()=>X,default:()=>B}),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ve;function ye(){return(ye=t((()=>{u(),ie(),j(),de(),M=o(),{expect:N,fn:P,userEvent:F,waitFor:I,within:L}=__STORYBOOK_MODULE_TEST__,R=P(),z=[{label:`File`,items:[{label:`New invoice`,shortcut:`⌘ N`},{label:`Open…`,shortcut:`⌘ O`},{label:`Export as`,items:[{label:`PDF`},{label:`CSV`},{label:`Excel`}]},{type:`separator`},{label:`Print…`,shortcut:`⌘ P`}]},{label:`Edit`,items:[{label:`Undo`,shortcut:`⌘ Z`,onSelect:R},{label:`Redo`,shortcut:`⇧ ⌘ Z`,disabled:!0},{type:`separator`},{label:`Duplicate line`,icon:(0,M.jsx)(g,{name:`plus`}),shortcut:`⌘ D`},{label:`Delete line`,icon:(0,M.jsx)(g,{name:`close`}),isDestructive:!0}]},{label:`View`,items:[{type:`group`,label:`Show`,items:[{type:`checkbox`,label:`Tax column`,defaultChecked:!0},{type:`checkbox`,label:`Notes`}]},{type:`separator`},{type:`radio`,label:`Density`,defaultValue:`default`,options:[{value:`compact`,label:`Compact`},{value:`default`,label:`Default`}]}]},{label:`Help`,items:[{label:`Documentation`,href:`#docs`},{label:`Keyboard shortcuts`,href:`#shortcuts`}]}],B={title:`Components/Navigation/Menubar`,tags:[`beta`],component:k,args:{menus:z,"aria-label":`Invoice editor`},argTypes:{menus:{description:"The menus, left to right. Each is `{ label, items, disabled?, defaultOpen? }`; `items` takes the same entries as Menu's `items`: actions, links, submenus, checkbox and radio items, groups and separators.",control:!1,table:{type:{summary:`MenubarMenu[]`}}},"aria-label":{description:`Names the bar, e.g. "Invoice editor". Needed when a page has more than one menubar.`,control:`text`,table:{type:{summary:`string`}}},isModal:{description:"While a flyout is open, locks page scroll and makes the rest of the page inert. `false` leaves the page scrollable and clickable.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},container:{description:"Where the flyouts render instead of `<body>`, e.g. an element in fullscreen.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the bar.`,control:!1,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,M.jsx)(`div`,{style:{minBlockSize:`18rem`},children:e()})]},V=()=>L(document.body),H=()=>[document.documentElement,document.body].some(e=>/hidden|clip/.test(getComputedStyle(e).overflowY)),U={play:async({canvas:e})=>{R.mockClear();let t=e.getByRole(`menubar`,{name:`Invoice editor`}),[n,r,i]=L(t).getAllByRole(`menuitem`);await N([getComputedStyle(t).borderTopWidth,getComputedStyle(t).paddingLeft,getComputedStyle(t).columnGap]).toEqual([`0px`,`0px`,`normal`]),await N(getComputedStyle(n).fontWeight).toBe(`400`),await N(n).toHaveAttribute(`aria-haspopup`,`menu`),await N(n).toHaveAttribute(`aria-expanded`,`false`),await F.tab(),await N(n).toHaveFocus(),await F.keyboard(`{ArrowRight}`),await I(()=>N(r).toHaveFocus()),await F.keyboard(`{ArrowDown}`);let a=await V().findByRole(`menu`);await N(r).toHaveAttribute(`aria-expanded`,`true`),await N(a.querySelector(`kbd`)).toHaveAttribute(`aria-hidden`,`true`),await N(L(a).getByRole(`menuitem`,{name:`Undo`})).toBeInTheDocument(),await I(()=>N(L(a).getByRole(`menuitem`,{name:/Undo/})).toHaveFocus()),await F.keyboard(`{ArrowRight}`),await I(()=>N(i).toHaveAttribute(`aria-expanded`,`true`)),await F.keyboard(`{ArrowLeft}`),await I(()=>N(r).toHaveAttribute(`aria-expanded`,`true`)),await F.keyboard(`{Escape}`),await I(()=>N(V().queryByRole(`menu`)).toBeNull()),await N(r).toHaveFocus(),await F.keyboard(`{ArrowDown}`);let o=await V().findByRole(`menu`);await I(()=>N(L(o).getByRole(`menuitem`,{name:/Undo/})).toHaveFocus()),await F.keyboard(`{Enter}`),await N(R).toHaveBeenCalledOnce(),await I(()=>N(V().queryByRole(`menu`)).toBeNull()),await F.keyboard(`{ArrowRight}`),await I(()=>N(i).toHaveFocus());for(let e of[`{Enter}`,` `])await F.keyboard(e),await I(()=>N(i).toHaveAttribute(`aria-expanded`,`true`)),await F.keyboard(`{Escape}`),await I(()=>N(V().queryByRole(`menu`)).toBeNull())}},W={play:async({canvas:e})=>{let t=e.getByRole(`menuitem`,{name:`Edit`}),n=document.createElement(`div`);n.style.blockSize=`var(--control-sm)`,document.body.append(n),await I(()=>N(t.getBoundingClientRect().height).toBe(n.getBoundingClientRect().height)),n.remove(),await F.click(t);let r=await V().findByRole(`menu`);await N(L(r).getByRole(`menuitem`,{name:/Duplicate line/}).querySelector(`:scope > span:first-child`)).toHaveAttribute(`aria-hidden`,`true`),await I(()=>N(H()).toBe(!0)),await F.keyboard(`{Escape}`),await I(()=>N(V().queryByRole(`menu`)).toBeNull()),await I(()=>N(H()).toBe(!1))}},G={args:{isModal:!1},play:async({canvas:e})=>{let t=e.getByRole(`menubar`),[n,r]=L(t).getAllByRole(`menuitem`);await F.click(n),await V().findByRole(`menu`),await N(n).toHaveAttribute(`aria-expanded`,`true`),await N(H()).toBe(!1),await F.hover(r),await I(()=>N(r).toHaveAttribute(`aria-expanded`,`true`)),await N(n).toHaveAttribute(`aria-expanded`,`false`),await I(()=>N(V().getAllByRole(`menu`)).toHaveLength(1)),await F.keyboard(`{Escape}`),await I(()=>N(V().queryByRole(`menu`)).toBeNull())}},K={args:{menus:[z[0],{...z[1],disabled:!0},z[2]]},play:async({canvas:e})=>{let[t,n,r]=L(e.getByRole(`menubar`)).getAllByRole(`menuitem`);await N(n).toHaveAttribute(`aria-disabled`,`true`),await F.tab(),await N(t).toHaveFocus(),await F.keyboard(`{ArrowRight}`),await I(()=>N(r).toHaveFocus())}},q=e=>(0,M.jsx)(l,{positioner:_.positioner,style:{display:`inline-flex`,flexDirection:`column`,alignItems:`flex-start`,gap:`var(--space-1)`},children:t=>(0,M.jsx)(k,{...e,isModal:!1,container:t})}),J=[z[0],{...z[1],defaultOpen:!0},z[2],z[3]],Y={tags:[`!dev`],args:{menus:J},render:q,play:async({canvas:e})=>{let t=await e.findByRole(`menu`,{hidden:!0});await N(L(t).getAllByRole(`menuitem`,{hidden:!0})).toHaveLength(4)}},X=[{name:`Bar`,selector:`[role="menubar"]`,description:`The row of menus. One tab stop: the arrows move along it.`},{name:`Menu trigger`,selector:`[role="menubar"] > [aria-expanded="true"]`,description:`A top-level item: File, Edit, View. Highlighted while its flyout is open.`},{name:`Flyout`,selector:`[role="menu"]`,description:`A Menu popup, with all of Menu's entries.`},{name:`Group label`,selector:`[role="group"] > div:first-child`,description:`Optional. Names a group of items.`},{name:`Item`,selector:`[role="menu"] [role="menuitemcheckbox"]`,description:`An entry, here a checkbox item. Flyouts take every Menu entry: actions, links, submenus, checkbox and radio items.`},{name:`Separator`,selector:`[role="menu"] [role="separator"]`,description:`A rule between groups of items.`}],Z={tags:[`!dev`],args:{menus:[z[0],z[1],{...z[2],defaultOpen:!0},z[3]]},render:q,play:async({canvasElement:e})=>{let t=await d(e,X);await N(t[1]).toHaveTextContent(`View`),await N(t[3]).toHaveTextContent(`Show`)}},Q={tags:[`!dev`],args:{menus:J},render:q},$={tags:[`!dev`],args:{menus:[{label:`Sales`,defaultOpen:!0,items:[{label:`Invoices`,href:`#invoices`},{label:`Quotes`,href:`#quotes`},{label:`Customers`,href:`#customers`}]},{label:`Purchases`,items:[{label:`Bills`,href:`#bills`}]},{label:`Reports`,items:[{label:`Profit and loss`,href:`#pl`}]}]},render:q},ve=[`Default`,`Modal`,`HoverSwitches`,`DisabledMenu`,`Open`,`anatomyParts`,`Anatomy`,`DoConventionalOrder`,`DontNavigation`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    onUndo.mockClear();
    const bar = canvas.getByRole('menubar', {
      name: 'Invoice editor'
    });
    const [file, edit, view] = within(bar).getAllByRole('menuitem');
    // The bar is just its triggers: no border or padding, triggers touching, labels regular weight.
    await expect([getComputedStyle(bar).borderTopWidth, getComputedStyle(bar).paddingLeft, getComputedStyle(bar).columnGap]).toEqual(['0px', '0px', 'normal']);
    await expect(getComputedStyle(file).fontWeight).toBe('400');
    await expect(file).toHaveAttribute('aria-haspopup', 'menu');
    await expect(file).toHaveAttribute('aria-expanded', 'false');
    // One tab stop: Tab lands on the first menu, the arrows move along the bar.
    await userEvent.tab();
    await expect(file).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(edit).toHaveFocus());
    // Arrow Down opens the flyout on its first item.
    await userEvent.keyboard('{ArrowDown}');
    const menu = await body().findByRole('menu');
    await expect(edit).toHaveAttribute('aria-expanded', 'true');
    // The shortcut is plain text, hidden from assistive tech: the label names the item.
    await expect(menu.querySelector('kbd')).toHaveAttribute('aria-hidden', 'true');
    await expect(within(menu).getByRole('menuitem', {
      name: 'Undo'
    })).toBeInTheDocument();
    await waitFor(() => expect(within(menu).getByRole('menuitem', {
      name: /Undo/
    })).toHaveFocus());
    // Arrow Right from inside a flyout moves to the next menu, open.
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(view).toHaveAttribute('aria-expanded', 'true'));
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(edit).toHaveAttribute('aria-expanded', 'true'));
    // Escape closes and returns focus to the menu's trigger.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    await expect(edit).toHaveFocus();
    // Enter on an action runs it and closes the flyout.
    await userEvent.keyboard('{ArrowDown}');
    const again = await body().findByRole('menu');
    await waitFor(() => expect(within(again).getByRole('menuitem', {
      name: /Undo/
    })).toHaveFocus());
    await userEvent.keyboard('{Enter}');
    await expect(onUndo).toHaveBeenCalledOnce();
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    // Enter and Space on a trigger open its flyout too.
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(view).toHaveFocus());
    for (const key of ['{Enter}', ' ']) {
      await userEvent.keyboard(key);
      await waitFor(() => expect(view).toHaveAttribute('aria-expanded', 'true'));
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const edit = canvas.getByRole('menuitem', {
      name: 'Edit'
    });
    const probe = document.createElement('div');
    probe.style.blockSize = 'var(--control-sm)';
    document.body.append(probe);
    await waitFor(() => expect(edit.getBoundingClientRect().height).toBe(probe.getBoundingClientRect().height));
    probe.remove();
    await userEvent.click(edit);
    const menu = await body().findByRole('menu');
    // The icon is decorative.
    await expect(within(menu).getByRole('menuitem', {
      name: /Duplicate line/
    }).querySelector(':scope > span:first-child')).toHaveAttribute('aria-hidden', 'true');
    await waitFor(() => expect(isScrollLocked()).toBe(true));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    await waitFor(() => expect(isScrollLocked()).toBe(false));
  }
}`,...W.parameters?.docs?.source},description:{story:`Modal by default: page scroll is locked while a flyout is open. Triggers are one sm tier tall.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    isModal: false
  },
  play: async ({
    canvas
  }) => {
    const bar = canvas.getByRole('menubar');
    const [file, edit] = within(bar).getAllByRole('menuitem');
    await userEvent.click(file);
    await body().findByRole('menu');
    await expect(file).toHaveAttribute('aria-expanded', 'true');
    await expect(isScrollLocked()).toBe(false);
    await userEvent.hover(edit);
    await waitFor(() => expect(edit).toHaveAttribute('aria-expanded', 'true'));
    await expect(file).toHaveAttribute('aria-expanded', 'false');
    await waitFor(() => expect(body().getAllByRole('menu')).toHaveLength(1));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
  }
}`,...G.parameters?.docs?.source},description:{story:`With one flyout open, moving the pointer to another menu opens that one instead.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    menus: [menus[0], {
      ...menus[1],
      disabled: true
    }, menus[2]]
  },
  play: async ({
    canvas
  }) => {
    const [file, edit, view] = within(canvas.getByRole('menubar')).getAllByRole('menuitem');
    await expect(edit).toHaveAttribute('aria-disabled', 'true');
    await userEvent.tab();
    await expect(file).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(view).toHaveFocus());
  }
}`,...K.parameters?.docs?.source},description:{story:`A menu that does not apply right now stays in place, muted, and the arrows skip it.`,...K.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    menus: editOpen
  },
  render: picture,
  play: async ({
    canvas
  }) => {
    const menu = await canvas.findByRole('menu', {
      hidden: true
    });
    await expect(within(menu).getAllByRole('menuitem', {
      hidden: true
    })).toHaveLength(4);
  }
}`,...Y.parameters?.docs?.source},description:{story:`The Edit menu open, for the docs and the visual baseline.`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    menus: [menus[0], menus[1], {
      ...menus[2],
      defaultOpen: true
    }, menus[3]]
  },
  render: picture,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toHaveTextContent('View');
    await expect(found[3]).toHaveTextContent('Show');
  }
}`,...Z.parameters?.docs?.source},description:{story:`Every part present, the View menu open in place.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    menus: editOpen
  },
  render: picture
}`,...Q.parameters?.docs?.source},description:{story:`Guidelines, Do: menus named for what they hold, in the order desktop apps use.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    menus: [{
      label: 'Sales',
      defaultOpen: true,
      items: [{
        label: 'Invoices',
        href: '#invoices'
      }, {
        label: 'Quotes',
        href: '#quotes'
      }, {
        label: 'Customers',
        href: '#customers'
      }]
    }, {
      label: 'Purchases',
      items: [{
        label: 'Bills',
        href: '#bills'
      }]
    }, {
      label: 'Reports',
      items: [{
        label: 'Profit and loss',
        href: '#pl'
      }]
    }]
  },
  render: picture
}`,...$.parameters?.docs?.source},description:{story:`Guidelines, Don't: a menubar used as site navigation, every flyout a list of pages.`,...$.parameters?.docs?.description}}}})))()}export{$ as a,X as c,Q as i,ye as l,U as n,_e as o,K as r,Y as s,Z as t};