import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-DslpGgPR.js";import{c as a,t as o,u as s}from"./blocks-COhIzeP7.js";import{n as c,t as l}from"./icon-Cjfg2BMt.js";import{a as u,i as d,o as f,t as p}from"./Menu-CdupLH08.js";var m=t({Anatomy:()=>I,Default:()=>E,DoActions:()=>z,DoDestructiveLast:()=>L,DontDestructiveAmongOthers:()=>R,DontMenuAsField:()=>B,Groups:()=>A,Links:()=>M,Modal:()=>D,NonModal:()=>O,Open:()=>P,Submenu:()=>j,Typeahead:()=>k,__namedExportsOrder:()=>V,anatomyParts:()=>F,default:()=>C}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{o(),c(),r(),d(),f(),h=n(),{expect:g,fn:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x=_(),S=_(),C={title:`Components/Navigation/Menu`,tags:[`beta`],component:p,args:{trigger:(0,h.jsx)(i,{appearance:`outlined`,variant:`accent`,endIcon:(0,h.jsx)(l,{name:`chevron-down`}),children:`Actions`}),items:[{label:`Edit`,icon:(0,h.jsx)(l,{name:`calendar`}),shortcut:`⌘ E`},{label:`Duplicate`,icon:(0,h.jsx)(l,{name:`plus`}),shortcut:`⌘ D`,onSelect:x},{label:`Archive`,disabled:!0},{type:`separator`},{label:`Delete`,icon:(0,h.jsx)(l,{name:`close`}),isDestructive:!0,onSelect:S}]},argTypes:{trigger:{description:"The button that opens the menu, usually a `<Button>`. Menu merges its props and ARIA onto it rather than wrapping it.",control:!1,table:{type:{summary:`ReactElement`}}},items:{description:"The entries, as data. An entry is an action (`label`, `onSelect`, `icon`, `shortcut`, `isDestructive`, `disabled`), a link (`href`), a submenu (`items`), `{ type: 'checkbox' }`, `{ type: 'radio', options }`, `{ type: 'group', label, items }` or `{ type: 'separator' }`. Give `textValue` when a label is not plain text, for typeahead.",control:!1,table:{type:{summary:`MenuEntry[]`}}},side:{description:`Which side of the trigger the popup opens on. It flips when there is no room.`,control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`],table:{type:{summary:`'top' | 'right' | 'bottom' | 'left'`},defaultValue:{summary:`'bottom'`}}},align:{description:`How the popup lines up with the trigger along that side.`,control:`inline-radio`,options:[`start`,`center`,`end`],table:{type:{summary:`'start' | 'center' | 'end'`},defaultValue:{summary:`'start'`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:!1,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:!1,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called when the menu opens or closes: the trigger, Escape, a click outside, or choosing an action.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},isModal:{description:"While open, locks page scroll and makes the rest of the page inert. `false` leaves the page scrollable and clickable.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},container:{description:"Where the popup renders instead of `<body>`, e.g. an element in fullscreen, where a popup in `<body>` would not show.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the popup.`,control:!1,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`],decorators:[e=>(0,h.jsx)(`div`,{style:{minBlockSize:`18rem`},children:e()})]},w=()=>b(document.body),T=()=>[document.documentElement,document.body].some(e=>/hidden|clip/.test(getComputedStyle(e).overflowY)),E={play:async({canvas:e})=>{x.mockClear();let t=e.getByRole(`button`,{name:`Actions`});await g(t).toHaveAttribute(`aria-haspopup`,`menu`),await v.click(t);let n=await w().findByRole(`menu`);await g(b(n).getAllByRole(`menuitem`)).toHaveLength(4),await g(b(n).getByRole(`menuitem`,{name:/Archive/})).toHaveAttribute(`aria-disabled`,`true`),await v.keyboard(`{ArrowDown}`),await y(()=>g(b(n).getByRole(`menuitem`,{name:/Edit/})).toHaveFocus());let r=b(n).getByRole(`menuitem`,{name:/Edit/});await g(r.offsetHeight).toBe(36),await g(getComputedStyle(n).paddingLeft).toBe(`4px`),await g(getComputedStyle(r).paddingLeft).toBe(`12px`),await g(getComputedStyle(r).columnGap).toBe(`12px`);let i=b(n).getAllByRole(`menuitem`);await g(i[1].offsetTop-(i[0].offsetTop+i[0].offsetHeight)).toBe(2),await v.keyboard(`{ArrowDown}{Enter}`),await g(x).toHaveBeenCalledOnce(),await y(()=>g(w().queryByRole(`menu`)).toBeNull()),await g(t).toHaveFocus()}},D={play:async({canvas:e})=>{await v.click(e.getByRole(`button`,{name:`Actions`})),await w().findByRole(`menu`),await y(()=>g(T()).toBe(!0)),await v.keyboard(`{Escape}`),await y(()=>g(w().queryByRole(`menu`)).toBeNull()),await y(()=>g(T()).toBe(!1))}},O={args:{isModal:!1},play:async({canvas:e})=>{await v.click(e.getByRole(`button`,{name:`Actions`})),await w().findByRole(`menu`),await g(T()).toBe(!1),await v.keyboard(`{Escape}`),await y(()=>g(w().queryByRole(`menu`)).toBeNull())}},k={play:async({canvas:e})=>{await v.click(e.getByRole(`button`,{name:`Actions`}));let t=await w().findByRole(`menu`);await v.keyboard(`del`),await y(()=>g(b(t).getByRole(`menuitem`,{name:/Delete/})).toHaveFocus())}},A={args:{trigger:(0,h.jsx)(i,{appearance:`outlined`,variant:`accent`,children:`View`}),items:[{type:`group`,label:`Show`,items:[{type:`checkbox`,label:`Hidden files`,defaultChecked:!1},{type:`checkbox`,label:`File extensions`,defaultChecked:!0}]},{type:`separator`},{type:`radio`,label:`Sort by`,defaultValue:`name`,options:[{value:`name`,label:`Name`},{value:`modified`,label:`Date modified`},{value:`size`,label:`Size`}]}]},play:async({canvas:e})=>{await v.click(e.getByRole(`button`,{name:`View`}));let t=await w().findByRole(`menu`),n=b(t).getByRole(`menuitemcheckbox`,{name:`Hidden files`});await g(n).toHaveAttribute(`aria-checked`,`false`),await v.click(n),await g(n).toHaveAttribute(`aria-checked`,`true`);let r=b(t).getByRole(`menuitemradio`,{name:`Size`});await v.click(r),await g(r).toHaveAttribute(`aria-checked`,`true`),await g(b(t).getByRole(`menuitemradio`,{name:`Name`})).toHaveAttribute(`aria-checked`,`false`),await y(()=>g(b(t).getByRole(`group`,{name:`Sort by`})).toBeVisible())}},j={args:{items:[{label:`Rename`},{label:`Move to`,items:[{label:`Design`},{label:`Engineering`},{label:`Archive`}]},{type:`separator`},{label:`Delete`,isDestructive:!0}]},play:async({canvas:e})=>{await v.click(e.getByRole(`button`,{name:`Actions`}));let t=await w().findByRole(`menu`),n=b(t).getByRole(`menuitem`,{name:`Move to`});await g(n).toHaveAttribute(`aria-haspopup`,`menu`),await v.keyboard(`{ArrowDown}{ArrowDown}`),await y(()=>g(n).toHaveFocus()),await v.keyboard(`{ArrowRight}`),await y(()=>g(w().getAllByRole(`menu`)).toHaveLength(2)),await y(()=>g(w().getByRole(`menuitem`,{name:`Design`})).toHaveFocus()),await v.keyboard(`{ArrowLeft}`),await y(()=>g(n).toHaveFocus())}},M={args:{trigger:(0,h.jsx)(i,{appearance:`ghost`,variant:`accent`,children:`Help`}),items:[{label:`Documentation`,href:`#docs`},{label:`Keyboard shortcuts`,href:`#shortcuts`},{label:`Billing`,href:`#billing`,disabled:!0},{type:`separator`},{label:`Contact support`,href:`#support`}]},play:async({canvas:e})=>{await v.click(e.getByRole(`button`,{name:`Help`}));let t=await w().findByRole(`menu`);await g(b(t).getByRole(`menuitem`,{name:`Documentation`})).toHaveAttribute(`href`,`#docs`);let n=b(t).getByRole(`menuitem`,{name:`Billing`});await g(n).toHaveAttribute(`aria-disabled`,`true`),await g(n).not.toHaveAttribute(`href`)}},N=e=>(0,h.jsx)(a,{positioner:u.positioner,style:{display:`inline-flex`,flexDirection:`column`,alignItems:`flex-start`,gap:`var(--space-1)`},children:t=>(0,h.jsx)(p,{...e,open:!0,isModal:!1,container:t})}),P={tags:[`!dev`],render:N,play:async({canvas:e})=>{let t=await e.findByRole(`menu`,{hidden:!0});await g(b(t).getAllByRole(`menuitem`,{hidden:!0})).toHaveLength(4)}},F=[{name:`Trigger`,selector:`button[aria-haspopup="menu"]`,description:`The button that opens it. Menu merges its props onto your element.`},{name:`Popup`,selector:`[role="menu"]`,description:`The surface: a popover, at least 12rem wide.`},{name:`Group label`,selector:`[role="group"] > div:first-child`,description:`Optional. Names a group of items; muted and small.`},{name:`Item`,selector:`[role="menuitem"]`,description:`An action, a link or a submenu trigger. One control tier tall.`},{name:`Icon`,selector:`[role="menuitem"] > span:first-child`,description:`Optional. Decorative.`},{name:`Shortcut`,selector:`kbd`,description:`Optional, display only: it does not bind the key.`},{name:`Submenu indicator`,selector:`[role="menuitem"][aria-haspopup="menu"] > span:last-child`,description:`A chevron on an item that opens a submenu.`},{name:`Separator`,selector:`[role="separator"]`,description:`A rule between groups of items.`},{name:`Check`,selector:`[role="menuitemcheckbox"] > span:first-child`,description:`Shows a checkbox or radio item is on. Its column lines up with the icons.`}],I={tags:[`!dev`],args:{items:[{type:`group`,label:`Page`,items:[{label:`Duplicate`,icon:(0,h.jsx)(l,{name:`plus`}),shortcut:`⌘ D`},{label:`Move to`,icon:(0,h.jsx)(l,{name:`menu`}),items:[{label:`Design`},{label:`Archive`}]}]},{type:`separator`},{type:`checkbox`,label:`Pin to top`,defaultChecked:!0},{type:`separator`},{label:`Delete`,icon:(0,h.jsx)(l,{name:`close`}),isDestructive:!0}]},render:N,play:async({canvasElement:e})=>{let t=await s(e,F);await g(t[2]).toHaveTextContent(`Page`),await g(t[3]).toHaveTextContent(`Duplicate`)}},L={tags:[`!dev`],args:{items:[{label:`Rename`},{label:`Duplicate`},{type:`separator`},{label:`Delete`,isDestructive:!0}]},render:N},R={tags:[`!dev`],args:{items:[{label:`Rename`},{label:`Delete`,isDestructive:!0},{label:`Duplicate`}]},render:N},z={tags:[`!dev`],args:{trigger:(0,h.jsx)(i,{appearance:`outlined`,variant:`accent`,children:`Export`}),items:[{label:`Download as CSV`},{label:`Download as PDF`},{label:`Copy link`}]},render:N},B={tags:[`!dev`],args:{trigger:(0,h.jsx)(i,{appearance:`outlined`,variant:`secondary`,endIcon:(0,h.jsx)(l,{name:`chevron-down`}),children:`Country: Vietnam`}),items:[{label:`Vietnam`},{label:`Thailand`},{label:`Japan`}]},render:N},V=[`Default`,`Modal`,`NonModal`,`Typeahead`,`Groups`,`Submenu`,`Links`,`Open`,`anatomyParts`,`Anatomy`,`DoDestructiveLast`,`DontDestructiveAmongOthers`,`DoActions`,`DontMenuAsField`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    onDuplicate.mockClear();
    const trigger = canvas.getByRole('button', {
      name: 'Actions'
    });
    await expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    await userEvent.click(trigger);
    const menu = await body().findByRole('menu');
    await expect(within(menu).getAllByRole('menuitem')).toHaveLength(4);
    await expect(within(menu).getByRole('menuitem', {
      name: /Archive/
    })).toHaveAttribute('aria-disabled', 'true');
    // Keyboard: arrows move, disabled items are skipped, Enter selects and closes.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(within(menu).getByRole('menuitem', {
      name: /Edit/
    })).toHaveFocus());
    // A one-line item is 36px: 8px padding around a 20px line. offsetHeight, so the popup's opening scale does not count.
    const edit = within(menu).getByRole<HTMLElement>('menuitem', {
      name: /Edit/
    });
    await expect(edit.offsetHeight).toBe(36);
    // Items 4px inside the popup's border, 12px inline padding and 12px between an item's parts,
    // 2px between items.
    await expect(getComputedStyle(menu).paddingLeft).toBe('4px');
    await expect(getComputedStyle(edit).paddingLeft).toBe('12px');
    await expect(getComputedStyle(edit).columnGap).toBe('12px');
    const items = within(menu).getAllByRole<HTMLElement>('menuitem');
    await expect(items[1].offsetTop - (items[0].offsetTop + items[0].offsetHeight)).toBe(2);
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await expect(onDuplicate).toHaveBeenCalledOnce();
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    await expect(trigger).toHaveFocus();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Actions'
    }));
    await body().findByRole('menu');
    await waitFor(() => expect(isScrollLocked()).toBe(true));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
    await waitFor(() => expect(isScrollLocked()).toBe(false));
  }
}`,...D.parameters?.docs?.source},description:{story:`Modal by default: page scroll is locked while the menu is open.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    isModal: false
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Actions'
    }));
    await body().findByRole('menu');
    await expect(isScrollLocked()).toBe(false);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('menu')).toBeNull());
  }
}`,...O.parameters?.docs?.source},description:{story:"`isModal={false}` leaves the page scrollable while the menu is open.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Actions'
    }));
    const menu = await body().findByRole('menu');
    await userEvent.keyboard('del');
    await waitFor(() => expect(within(menu).getByRole('menuitem', {
      name: /Delete/
    })).toHaveFocus());
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button appearance="outlined" variant="accent">View</Button>,
    items: [{
      type: 'group',
      label: 'Show',
      items: [{
        type: 'checkbox',
        label: 'Hidden files',
        defaultChecked: false
      }, {
        type: 'checkbox',
        label: 'File extensions',
        defaultChecked: true
      }]
    }, {
      type: 'separator'
    }, {
      type: 'radio',
      label: 'Sort by',
      defaultValue: 'name',
      options: [{
        value: 'name',
        label: 'Name'
      }, {
        value: 'modified',
        label: 'Date modified'
      }, {
        value: 'size',
        label: 'Size'
      }]
    }]
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'View'
    }));
    const menu = await body().findByRole('menu');
    const hidden = within(menu).getByRole('menuitemcheckbox', {
      name: 'Hidden files'
    });
    await expect(hidden).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(hidden);
    // Toggles stay open, so several can be changed in one go.
    await expect(hidden).toHaveAttribute('aria-checked', 'true');
    const size = within(menu).getByRole('menuitemradio', {
      name: 'Size'
    });
    await userEvent.click(size);
    await expect(size).toHaveAttribute('aria-checked', 'true');
    await expect(within(menu).getByRole('menuitemradio', {
      name: 'Name'
    })).toHaveAttribute('aria-checked', 'false');
    // The popup fades in from opacity 0; wait for it rather than race it.
    await waitFor(() => expect(within(menu).getByRole('group', {
      name: 'Sort by'
    })).toBeVisible());
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Rename'
    }, {
      label: 'Move to',
      items: [{
        label: 'Design'
      }, {
        label: 'Engineering'
      }, {
        label: 'Archive'
      }]
    }, {
      type: 'separator'
    }, {
      label: 'Delete',
      isDestructive: true
    }]
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Actions'
    }));
    const menu = await body().findByRole('menu');
    const move = within(menu).getByRole('menuitem', {
      name: 'Move to'
    });
    await expect(move).toHaveAttribute('aria-haspopup', 'menu');
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await waitFor(() => expect(move).toHaveFocus());
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(body().getAllByRole('menu')).toHaveLength(2));
    await waitFor(() => expect(body().getByRole('menuitem', {
      name: 'Design'
    })).toHaveFocus());
    // Left goes back to the parent item.
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(move).toHaveFocus());
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button appearance="ghost" variant="accent">Help</Button>,
    items: [{
      label: 'Documentation',
      href: '#docs'
    }, {
      label: 'Keyboard shortcuts',
      href: '#shortcuts'
    }, {
      label: 'Billing',
      href: '#billing',
      disabled: true
    }, {
      type: 'separator'
    }, {
      label: 'Contact support',
      href: '#support'
    }]
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Help'
    }));
    const menu = await body().findByRole('menu');
    await expect(within(menu).getByRole('menuitem', {
      name: 'Documentation'
    })).toHaveAttribute('href', '#docs');
    // A disabled link is inert: no href to follow.
    const billing = within(menu).getByRole('menuitem', {
      name: 'Billing'
    });
    await expect(billing).toHaveAttribute('aria-disabled', 'true');
    await expect(billing).not.toHaveAttribute('href');
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: picture,
  play: async ({
    canvas
  }) => {
    // Rendered inside the story, not <body>.
    const menu = await canvas.findByRole('menu', {
      hidden: true
    });
    await expect(within(menu).getAllByRole('menuitem', {
      hidden: true
    })).toHaveLength(4);
  }
}`,...P.parameters?.docs?.source},description:{story:`The menu open, for the docs.`,...P.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: [{
      type: 'group',
      label: 'Page',
      items: [{
        label: 'Duplicate',
        icon: <Icon name="plus" />,
        shortcut: '⌘ D'
      }, {
        label: 'Move to',
        icon: <Icon name="menu" />,
        items: [{
          label: 'Design'
        }, {
          label: 'Archive'
        }]
      }]
    }, {
      type: 'separator'
    }, {
      type: 'checkbox',
      label: 'Pin to top',
      defaultChecked: true
    }, {
      type: 'separator'
    }, {
      label: 'Delete',
      icon: <Icon name="close" />,
      isDestructive: true
    }]
  },
  render: picture,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[2]).toHaveTextContent('Page');
    await expect(found[3]).toHaveTextContent('Duplicate');
  }
}`,...I.parameters?.docs?.source},description:{story:`Every part present, the menu open in place.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: [{
      label: 'Rename'
    }, {
      label: 'Duplicate'
    }, {
      type: 'separator'
    }, {
      label: 'Delete',
      isDestructive: true
    }]
  },
  render: picture
}`,...L.parameters?.docs?.source},description:{story:`Guidelines, Do: the destructive action last, after a separator.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    items: [{
      label: 'Rename'
    }, {
      label: 'Delete',
      isDestructive: true
    }, {
      label: 'Duplicate'
    }]
  },
  render: picture
}`,...R.parameters?.docs?.source},description:{story:`Guidelines, Don't: the destructive action among the others, where a slip of the arrow key lands on it.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    trigger: <Button appearance="outlined" variant="accent">Export</Button>,
    items: [{
      label: 'Download as CSV'
    }, {
      label: 'Download as PDF'
    }, {
      label: 'Copy link'
    }]
  },
  render: picture
}`,...z.parameters?.docs?.source},description:{story:`Guidelines, Do: a menu acts. Picking a value for a form is a Select.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    trigger: <Button appearance="outlined" variant="secondary" endIcon={<Icon name="chevron-down" />}>
        Country: Vietnam
      </Button>,
    items: [{
      label: 'Vietnam'
    }, {
      label: 'Thailand'
    }, {
      label: 'Japan'
    }]
  },
  render: picture
}`,...B.parameters?.docs?.source},description:{story:`Guidelines, Don't: a menu standing in for a form field, with the choice written into the trigger.`,...B.parameters?.docs?.description}}}})))()}export{R as a,M as c,j as d,F as f,L as i,m as l,E as n,B as o,H as p,z as r,A as s,I as t,P as u};