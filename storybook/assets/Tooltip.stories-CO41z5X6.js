import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-DslpGgPR.js";import{c as a,t as o,u as s}from"./blocks-COhIzeP7.js";import{n as c,t as l}from"./icon-Cjfg2BMt.js";import{a as u,i as d,n as f,r as p,t as m}from"./Tooltip-MSPOG18s.js";import{r as h,t as g}from"./TextInput-CmSy_4xd.js";var _=t({Anatomy:()=>P,Blur:()=>O,Closed:()=>F,Default:()=>T,Disabled:()=>A,DoShortLabel:()=>L,DontEssentialInfo:()=>R,Group:()=>k,Hover:()=>D,LongContent:()=>E,OpenPicture:()=>I,__namedExportsOrder:()=>z,anatomyParts:()=>N,default:()=>C}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{o(),c(),r(),h(),p(),u(),v=n(),{expect:y,userEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/Overlays/Tooltip`,tags:[`beta`],component:m,args:{content:`Copy link`,children:(0,v.jsx)(i,{isIconOnly:!0,"aria-label":`Copy link`,appearance:`ghost`,variant:`accent`,children:(0,v.jsx)(l,{name:`external`})})},argTypes:{content:{description:`What the tooltip says. Short: a label or a hint, never the only way to learn something essential.`,control:`text`,table:{type:{summary:`ReactNode`}}},children:{description:`The trigger: one focusable element, such as a Button. Tooltip merges its props onto it rather than wrapping it.`,control:!1,table:{type:{summary:`ReactElement`}}},side:{description:`Which side of the trigger it opens on. Flips when there is no room.`,control:`inline-radio`,options:[`top`,`right`,`bottom`,`left`],table:{type:{summary:`'top' | 'right' | 'bottom' | 'left'`},defaultValue:{summary:`'top'`}}},align:{description:`How it lines up with the trigger along that side.`,control:`inline-radio`,options:[`start`,`center`,`end`],table:{type:{summary:`'start' | 'center' | 'end'`},defaultValue:{summary:`'center'`}}},delay:{description:`Milliseconds of hover before it opens. Focus opens it at once.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`300`}}},closeDelay:{description:`Milliseconds before it closes once the pointer leaves.`,control:`number`,table:{type:{summary:`number`},defaultValue:{summary:`0`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the next open state.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},disabled:{description:`Never open, e.g. while the trigger's label is already visible.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},container:{description:"Where the tooltip renders instead of `<body>`, e.g. an element in fullscreen, where a tooltip in `<body>` would not show.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the popup.`,control:`text`,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`],decorators:[(e,{parameters:t})=>t.picture?e():(0,v.jsx)(`div`,{style:{padding:`var(--space-12)`,display:`flex`,justifyContent:`center`},children:e()})]},w=()=>S(document.body),T={play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Copy link`});await b.tab(),await y(t).toHaveFocus();let n=await w().findByRole(`tooltip`,{},{timeout:300});await y(n).toHaveTextContent(`Copy link`),await y(t).toHaveAttribute(`aria-describedby`,n.id),await y(t).toHaveAccessibleDescription(`Copy link`),await b.keyboard(`{Escape}`),await x(()=>y(w().queryByRole(`tooltip`)).toBeNull()),await y(t).not.toHaveAttribute(`aria-describedby`)}},E={args:{content:`Anyone with the link can view this file. Change it under Share → General access.`,defaultOpen:!0,children:(0,v.jsx)(i,{appearance:`outlined`,children:`Link sharing on`})},play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Link sharing on`});await y(t).toHaveAccessibleDescription(`Anyone with the link can view this file. Change it under Share → General access.`)}},D={play:async({canvas:e})=>{let t=e.getByRole(`button`,{name:`Copy link`});await b.hover(t),await new Promise(e=>setTimeout(e,100)),await y(w().queryByRole(`tooltip`)).toBeNull(),await y(await w().findByRole(`tooltip`)).toHaveTextContent(`Copy link`),await b.unhover(t),await x(()=>y(w().queryByRole(`tooltip`)).toBeNull())}},O={render:e=>(0,v.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,v.jsx)(m,{...e}),(0,v.jsx)(i,{appearance:`outlined`,children:`Next`})]}),play:async({canvas:e})=>{await b.tab(),await w().findByRole(`tooltip`,{},{timeout:300}),await b.tab(),await y(e.getByRole(`button`,{name:`Next`})).toHaveFocus(),await x(()=>y(w().queryByRole(`tooltip`)).toBeNull())}},k={render:()=>(0,v.jsx)(f,{children:(0,v.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-1)`},children:[`plus`,`minus`,`search`,`more`].map(e=>(0,v.jsx)(m,{content:e[0].toUpperCase()+e.slice(1),children:(0,v.jsx)(i,{isIconOnly:!0,"aria-label":e,appearance:`ghost`,variant:`accent`,children:(0,v.jsx)(l,{name:e})})},e))})})},A={args:{disabled:!0},play:async({canvas:e})=>{await b.tab(),await y(e.getByRole(`button`)).toHaveFocus(),await new Promise(e=>setTimeout(e,100)),await y(w().queryByRole(`tooltip`)).toBeNull()}},j=e=>(0,v.jsx)(a,{positioner:d.positioner,style:{display:`flex`,flexDirection:`column-reverse`,alignItems:`center`,gap:6},children:t=>(0,v.jsx)(m,{...e,open:!0,container:t})}),M={content:`Anyone with the link can view this file. Change it under Share → General access.`,children:(0,v.jsx)(i,{appearance:`outlined`,children:`Link sharing on`})},N=[{name:`Container`,selector:`[role="tooltip"]`,description:`Inverted surface with the text, 6px from the trigger. At most 240px wide.`},{name:`Trigger`,selector:`button[aria-describedby]`,description:`One focusable element. While the tooltip is open, its aria-describedby points at it.`}],P={tags:[`!dev`],parameters:{picture:!0},args:M,render:j,play:async({canvas:e,canvasElement:t})=>{let n=await e.findByRole(`tooltip`,{hidden:!0}),r=await s(t,N);await y(r[0]).toBe(n),await y(r[1]).toHaveAttribute(`aria-describedby`,n.id)}},F={tags:[`!dev`],parameters:{picture:!0},args:M},I={tags:[`!dev`],parameters:{picture:!0},args:M,render:j},L={tags:[`!dev`],parameters:{picture:!0},render:j},R={tags:[`!dev`],parameters:{picture:!0},args:{content:`At least 12 characters, with a number and a symbol.`,children:(0,v.jsx)(i,{isIconOnly:!0,"aria-label":`Password rules`,appearance:`ghost`,variant:`accent`,children:(0,v.jsx)(l,{name:`info`})})},render:e=>(0,v.jsxs)(`div`,{style:{display:`flex`,alignItems:`end`,gap:`var(--space-1)`},children:[(0,v.jsx)(g,{label:`Password`,type:`password`}),j(e)]})},z=[`Default`,`LongContent`,`Hover`,`Blur`,`Group`,`Disabled`,`anatomyParts`,`Anatomy`,`Closed`,`OpenPicture`,`DoShortLabel`,`DontEssentialInfo`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Copy link'
    });
    await userEvent.tab();
    await expect(trigger).toHaveFocus();
    // Focus opens it at once, without the 300ms hover delay.
    const tip = await body().findByRole('tooltip', {}, {
      timeout: 300
    });
    await expect(tip).toHaveTextContent('Copy link');
    // Read as the trigger's description while it is open, not as its name.
    await expect(trigger).toHaveAttribute('aria-describedby', tip.id);
    await expect(trigger).toHaveAccessibleDescription('Copy link');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('tooltip')).toBeNull());
    await expect(trigger).not.toHaveAttribute('aria-describedby');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Anyone with the link can view this file. Change it under Share → General access.',
    defaultOpen: true,
    children: <Button appearance="outlined">Link sharing on</Button>
  },
  play: async ({
    canvas
  }) => {
    // The tooltip describes the trigger; it does not rename it.
    const trigger = canvas.getByRole('button', {
      name: 'Link sharing on'
    });
    await expect(trigger).toHaveAccessibleDescription('Anyone with the link can view this file. Change it under Share → General access.');
  }
}`,...E.parameters?.docs?.source},description:{story:`Open from the start. Only one tooltip is open at a time, so this is the one on the docs page.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Copy link'
    });
    await userEvent.hover(trigger);
    // Not yet: the 300ms delay is still running.
    await new Promise(r => setTimeout(r, 100));
    await expect(body().queryByRole('tooltip')).toBeNull();
    await expect(await body().findByRole('tooltip')).toHaveTextContent('Copy link');
    await userEvent.unhover(trigger);
    await waitFor(() => expect(body().queryByRole('tooltip')).toBeNull());
  }
}`,...D.parameters?.docs?.source},description:{story:"Hover opens it after `delay`; pointer leave closes it.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--space-2)'
  }}>
      <Tooltip {...args} />
      <Button appearance="outlined">Next</Button>
    </div>,
  play: async ({
    canvas
  }) => {
    await userEvent.tab();
    await body().findByRole('tooltip', {}, {
      timeout: 300
    });
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'Next'
    })).toHaveFocus();
    await waitFor(() => expect(body().queryByRole('tooltip')).toBeNull());
  }
}`,...O.parameters?.docs?.source},description:{story:`Moving focus away closes it.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipGroup>
      <div style={{
      display: 'flex',
      gap: 'var(--space-1)'
    }}>
        {(['plus', 'minus', 'search', 'more'] as const).map(name => <Tooltip key={name} content={name[0].toUpperCase() + name.slice(1)}>
            <Button isIconOnly aria-label={name} appearance="ghost" variant="accent">
              <Icon name={name} />
            </Button>
          </Tooltip>)}
      </div>
    </TooltipGroup>
}`,...k.parameters?.docs?.source},description:{story:`Once one tooltip in a group is open, the next opens without the delay.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvas
  }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('button')).toHaveFocus();
    await new Promise(r => setTimeout(r, 100));
    await expect(body().queryByRole('tooltip')).toBeNull();
  }
}`,...A.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: linkSharing,
  render: picture,
  play: async ({
    canvas,
    canvasElement
  }) => {
    // Rendered inside the story, not <body>.
    const tip = await canvas.findByRole('tooltip', {
      hidden: true
    });
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[0]).toBe(tip);
    await expect(found[1]).toHaveAttribute('aria-describedby', tip.id);
  }
}`,...P.parameters?.docs?.source},description:{story:`Every part present, the tooltip open in place.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: linkSharing
}`,...F.parameters?.docs?.source},description:{story:`Specs, States: closed, the trigger alone.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: linkSharing,
  render: picture
}`,...I.parameters?.docs?.source},description:{story:`Specs, States: open.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  render: picture
}`,...L.parameters?.docs?.source},description:{story:`Guidelines, Do: a short label for an icon-only button.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    picture: true
  },
  args: {
    content: 'At least 12 characters, with a number and a symbol.',
    children: <Button isIconOnly aria-label="Password rules" appearance="ghost" variant="accent">
        <Icon name="info" />
      </Button>
  },
  render: args => <div style={{
    display: 'flex',
    alignItems: 'end',
    gap: 'var(--space-1)'
  }}>
      <TextInput label="Password" type="password" />
      {picture(args)}
    </div>
}`,...R.parameters?.docs?.source},description:{story:`Guidelines, Don't: something the reader needs, hidden in a tooltip.`,...R.parameters?.docs?.description}}}})))()}export{R as a,I as c,B as d,L as i,_ as l,F as n,k as o,T as r,E as s,P as t,N as u};