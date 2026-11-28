import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-DslpGgPR.js";import{c as a,t as o,u as s}from"./blocks-COhIzeP7.js";import{n as c,t as l}from"./Select-B89Zh-vF.js";import{r as u,t as d}from"./TextInput-CmSy_4xd.js";import{a as f,i as p,n as m,r as h,t as g}from"./Modal-bajIGsOj.js";var _=t({Alert:()=>O,Anatomy:()=>F,CloseButton:()=>I,Default:()=>E,Dismissing:()=>D,DoNameTheActions:()=>R,DontOkCancel:()=>z,Long:()=>A,ScreenGutter:()=>j,WithSelect:()=>k,__namedExportsOrder:()=>B,anatomyParts:()=>P,default:()=>w}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{o(),r(),c(),u(),h(),f(),v=n(),{expect:y,fn:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/Overlays/Modal`,tags:[`beta`],component:g,args:{trigger:(0,v.jsx)(i,{children:`Edit profile`}),title:`Edit profile`,description:`Changes show on your public page straight away.`,children:(0,v.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[(0,v.jsx)(d,{label:`Name`,defaultValue:`Sam Rivera`,isFullWidth:!0}),(0,v.jsx)(d,{label:`Title`,defaultValue:`Product designer`,isFullWidth:!0})]}),footer:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{render:(0,v.jsx)(i,{variant:`secondary`}),children:`Cancel`}),(0,v.jsx)(i,{children:`Save`})]}),onOpenChange:b()},argTypes:{title:{description:`Required: it names the dialog. Say what the modal is for: "Edit profile", "Delete “Atlas”?".`,control:`text`,table:{type:{summary:`ReactNode`}}},trigger:{description:"The button that opens it. Omit when `open` is controlled from elsewhere.",control:!1,table:{type:{summary:`ReactElement`}}},description:{description:"Optional, under the title in `--color-text-subtlest`. Read as the dialog's description.",control:`text`,table:{type:{summary:`ReactNode`}}},children:{description:`The body. Scrolls when the modal is taller than the screen; title and footer stay in view.`,control:!1,table:{type:{summary:`ReactNode`}}},footer:{description:"Actions, right-aligned, the main one last. Close it from a button with `<ModalClose render={<Button />}>`.",control:!1,table:{type:{summary:`ReactNode`}}},size:{description:"Max width: 400px (`sm`), 600px (`md`) or 800px (`lg`). Never wider than the screen less a 60px gutter either side; under 480px the modal is the whole screen.",control:`inline-radio`,options:[`sm`,`md`,`lg`],table:{type:{summary:`'sm' | 'md' | 'lg'`},defaultValue:{summary:`'md'`}}},hasCloseButton:{description:`The close button in the corner.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`!isAlert`}}},closeLabel:{description:`Accessible name of the close button.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Close'`}}},isAlert:{description:'A decision that must be made: `role="alertdialog"`, no close button by default, and a press on the backdrop does not close it.',control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},closeOnBackdropClick:{description:"Close on a press on the backdrop. Ignored when `isAlert`.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},initialFocus:{description:`Where focus goes on open. By default, the first focusable element.`,control:!1,table:{type:{summary:`RefObject<HTMLElement | null>`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the next open state: on open, on close, on Escape and on a press outside.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},isModal:{description:"While open, traps focus, locks page scroll and makes the rest of the page inert. `false` drops those three, for pictures of a modal; the backdrop still covers the page. Ignored when `isAlert`: an alert is always modal.",control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},container:{description:"Where the modal renders instead of `<body>`, e.g. an element in fullscreen, where a modal in `<body>` would not show.",control:!1,table:{type:{summary:`HTMLElement | null`}}},className:{description:`Added to the popup.`,control:`text`,table:{type:{summary:`string`}}}},excludeStories:[`anatomyParts`]},T=()=>C(document.body),E={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Edit profile`});await x.click(n);let r=await T().findByRole(`dialog`,{name:`Edit profile`});await y(r).toHaveAccessibleDescription(`Changes show on your public page straight away.`),await y(n.closest(`[aria-hidden="true"]`)).not.toBeNull(),await y(getComputedStyle(document.body).overflow).toBe(`hidden`),await S(()=>y(r.contains(document.activeElement)).toBe(!0)),await y(e.onOpenChange).toHaveBeenLastCalledWith(!0);let i=r.querySelector(`.${p.footer}`);await y(parseFloat(getComputedStyle(r).paddingTop)+parseFloat(getComputedStyle(r).borderTopWidth)).toBe(24),await y(getComputedStyle(i).marginTop).toBe(`16px`),await y(getComputedStyle(i).columnGap).toBe(`8px`),await x.click(C(r).getByRole(`button`,{name:`Cancel`})),await S(()=>y(T().queryByRole(`dialog`)).toBeNull()),await y(n).toHaveFocus()}},D={play:async({canvas:e})=>{await x.click(e.getByRole(`button`,{name:`Edit profile`}));let t=await T().findByRole(`dialog`);await x.keyboard(`{Escape}`),await S(()=>y(T().queryByRole(`dialog`)).toBeNull()),await x.click(e.getByRole(`button`,{name:`Edit profile`})),t=await T().findByRole(`dialog`),await x.click(t.parentElement,{clientX:2,clientY:2}),await S(()=>y(T().queryByRole(`dialog`)).toBeNull())}},O={args:{isAlert:!0,trigger:(0,v.jsx)(i,{variant:`destructive`,children:`Delete project`}),title:`Delete “Atlas”?`,description:`Its 214 files and every comment on them are deleted for everyone. This cannot be undone.`,children:void 0,size:`sm`,footer:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{render:(0,v.jsx)(i,{variant:`secondary`}),children:`Keep project`}),(0,v.jsx)(i,{variant:`destructive`,children:`Delete`})]})},play:async({canvas:e})=>{await x.click(e.getByRole(`button`,{name:`Delete project`}));let t=await T().findByRole(`alertdialog`,{name:`Delete “Atlas”?`});await y(C(t).queryByRole(`button`,{name:`Close`})).toBeNull(),await x.click(t.parentElement,{clientX:2,clientY:2}),await new Promise(e=>setTimeout(e,200)),await S(()=>y(T().getByRole(`alertdialog`)).toBeVisible()),await x.click(C(t).getByRole(`button`,{name:`Keep project`})),await S(()=>y(T().queryByRole(`alertdialog`)).toBeNull()),await x.click(e.getByRole(`button`,{name:`Delete project`})),await T().findByRole(`alertdialog`),await x.keyboard(`{Escape}`),await S(()=>y(T().queryByRole(`alertdialog`)).toBeNull())}},k={args:{title:`Invite people`,description:void 0,trigger:(0,v.jsx)(i,{children:`Invite`}),children:(0,v.jsx)(l,{label:`Role`,options:[`Viewer`,`Commenter`,`Editor`],defaultValue:`Viewer`,isFullWidth:!0}),footer:(0,v.jsx)(i,{children:`Send invites`})},play:async({canvas:e})=>{await x.click(e.getByRole(`button`,{name:`Invite`}));let t=await T().findByRole(`dialog`);await x.click(C(t).getByRole(`combobox`,{name:`Role`}));let n=await T().findByRole(`option`,{name:`Editor`});await S(()=>{let e=n.getBoundingClientRect(),t=document.elementFromPoint(e.x+e.width/2,e.y+e.height/2);return y(n.contains(t)).toBe(!0)})}},A={args:{title:`Terms of service`,description:void 0,size:`lg`,trigger:(0,v.jsx)(i,{appearance:`outlined`,children:`Read the terms`}),children:(0,v.jsx)(`div`,{children:Array.from({length:12},(e,t)=>(0,v.jsxs)(`p`,{style:{margin:`0 0 var(--space-3)`},children:[t+1,`. These terms govern your use of the service. By creating an account you agree to them, and to the privacy notice that explains what we collect and why.`]},t))}),footer:(0,v.jsx)(m,{render:(0,v.jsx)(i,{}),children:`Accept`})},play:async({canvas:e})=>{await x.click(e.getByRole(`button`,{name:`Read the terms`}));let t=await T().findByRole(`dialog`),n=C(t).getByRole(`button`,{name:`Accept`});await S(()=>y(n.getBoundingClientRect().bottom).toBeLessThanOrEqual(window.innerHeight))}},j={tags:[`!dev`],args:{size:`lg`,children:(0,v.jsx)(`div`,{children:Array.from({length:30},(e,t)=>(0,v.jsxs)(`p`,{children:[`Line `,t+1]},t))})},render:e=>(0,v.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:[360,480,768,1280].map(t=>(0,v.jsx)(a,{"data-screen":t,style:{position:`relative`,contain:`layout paint`,inlineSize:t,blockSize:600},children:t=>(0,v.jsx)(g,{...e,trigger:void 0,open:!0,isModal:!1,container:t})},t))}),play:async({canvasElement:e})=>{let t=t=>{let n=e.querySelector(`[data-screen="${t}"]`),r=n.querySelector(`[role="dialog"]`),[i,a]=[n.getBoundingClientRect(),r.getBoundingClientRect()];return{dialog:r,rect:[a.left-i.left,a.top-i.top,a.width,a.height].map(Math.round)}};await S(()=>y(e.querySelectorAll(`[role="dialog"]`)).toHaveLength(4)),await S(()=>y(t(360).rect).toEqual([0,0,360,600]));let n=t(360).dialog;await y(getComputedStyle(n).borderTopLeftRadius).toBe(`0px`),await y(getComputedStyle(n).boxShadow).toBe(`none`);let r=n.querySelector(`.${p.footer}`);await y(Math.round(n.getBoundingClientRect().bottom-r.getBoundingClientRect().bottom)).toBe(24);let i=n.querySelector(`.${p.body}`);await y(i.scrollHeight).toBeGreaterThan(i.clientHeight),await S(()=>y(t(480).rect).toEqual([60,60,360,480])),await y(getComputedStyle(t(480).dialog).borderTopLeftRadius).not.toBe(`0px`),await y(getComputedStyle(t(480).dialog).boxShadow).not.toBe(`none`),await S(()=>y(t(768).rect).toEqual([60,60,648,480])),await S(()=>y(t(1280).rect).toEqual([240,60,800,480]))}},M=({width:e,height:t=`28.5rem`,...n})=>(0,v.jsx)(a,{"data-modal-picture":e?void 0:``,style:{position:`relative`,contain:`layout paint`,inlineSize:e??`min(45rem, 100vw - 10rem)`,blockSize:t,borderRadius:`var(--radius-panel)`},children:t=>(0,v.jsxs)(v.Fragment,{children:[!e&&(0,v.jsx)(`style`,{children:`@media (max-width: 30rem) { [data-modal-picture] { zoom: 0.75; inline-size: calc((100vw - 10rem) / 0.75) !important; } }`}),(0,v.jsx)(g,{...n,trigger:void 0,open:!0,isModal:!1,container:t})]})}),N=(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{variant:`secondary`,children:`Cancel`}),(0,v.jsx)(i,{children:`Save`})]}),P=[{name:`Backdrop`,selector:`.${p.backdrop}`,description:`A scrim over the whole page. It blocks the page until the modal closes.`},{name:`Container`,selector:`[role="dialog"]`,description:`The surface, 60px from the top and sides of the screen. Under 480px it is the whole screen.`},{name:`Title`,selector:`[role="dialog"] h2`,description:`Required: it names the dialog.`},{name:`Close button`,selector:`button[aria-label="Close"]`,description:`On by default, off for an alert.`},{name:`Description`,selector:`.${p.description}`,description:`Optional. What the modal is for, or what will happen.`},{name:`Body`,selector:`.${p.body}`,description:`children. Scrolls when the modal is taller than the screen.`},{name:`Footer`,selector:`.${p.footer}`,description:`Actions, right-aligned, the main one last.`}],F={tags:[`!dev`],args:{footer:N},render:M,play:async({canvas:e,canvasElement:t})=>{let n=await e.findByRole(`dialog`,{hidden:!0}),r=await s(t,P);await y(r[1]).toBe(n),await y(r[2]).toHaveTextContent(`Edit profile`),await y(getComputedStyle(document.body).overflow).not.toBe(`hidden`)}},I={tags:[`!dev`],args:{size:`sm`,description:void 0,children:void 0,footer:void 0},render:e=>M({...e,width:`15rem`,height:`5rem`})},L={title:`Delete “Atlas”?`,description:`Its 214 files and every comment on them are deleted for everyone. This cannot be undone.`,children:void 0,size:`sm`,hasCloseButton:!1},R={tags:[`!dev`],args:{...L,footer:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{variant:`secondary`,children:`Keep project`}),(0,v.jsx)(i,{variant:`destructive`,children:`Delete`})]})},render:e=>M({...e,width:`min(22rem, 100vw - 10rem)`,height:`14rem`})},z={tags:[`!dev`],args:{...L,footer:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i,{variant:`secondary`,children:`Cancel`}),(0,v.jsx)(i,{children:`OK`})]})},render:e=>M({...e,width:`min(22rem, 100vw - 10rem)`,height:`14rem`})},B=[`Default`,`Dismissing`,`Alert`,`WithSelect`,`Long`,`ScreenGutter`,`anatomyParts`,`Anatomy`,`CloseButton`,`DoNameTheActions`,`DontOkCancel`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Edit profile'
    });
    await userEvent.click(trigger);
    const dialog = await body().findByRole('dialog', {
      name: 'Edit profile'
    });
    await expect(dialog).toHaveAccessibleDescription('Changes show on your public page straight away.');
    // The page behind is hidden from assistive tech and stops scrolling.
    await expect(trigger.closest('[aria-hidden="true"]')).not.toBeNull();
    await expect(getComputedStyle(document.body).overflow).toBe('hidden');
    await waitFor(() => expect(dialog.contains(document.activeElement)).toBe(true));
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    // Atlassian's modal: 24px around, 16px above the body and above the footer, 8px between the buttons.
    const footer = dialog.querySelector(\`.\${styles.footer}\`)!;
    await expect(parseFloat(getComputedStyle(dialog).paddingTop) + parseFloat(getComputedStyle(dialog).borderTopWidth)).toBe(24);
    await expect(getComputedStyle(footer).marginTop).toBe('16px');
    await expect(getComputedStyle(footer).columnGap).toBe('8px');
    // Cancel is a ModalClose: it closes, and focus goes back to the trigger.
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    await expect(trigger).toHaveFocus();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit profile'
    }));
    let dialog = await body().findByRole('dialog');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
    // A press outside the popup closes it too.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Edit profile'
    }));
    dialog = await body().findByRole('dialog');
    await userEvent.click(dialog.parentElement!, {
      clientX: 2,
      clientY: 2
    } as never);
    await waitFor(() => expect(body().queryByRole('dialog')).toBeNull());
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    isAlert: true,
    trigger: <Button variant="destructive">Delete project</Button>,
    title: 'Delete “Atlas”?',
    description: 'Its 214 files and every comment on them are deleted for everyone. This cannot be undone.',
    children: undefined,
    size: 'sm',
    footer: <>
        <ModalClose render={<Button variant="secondary" />}>Keep project</ModalClose>
        <Button variant="destructive">Delete</Button>
      </>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Delete project'
    }));
    const dialog = await body().findByRole('alertdialog', {
      name: 'Delete “Atlas”?'
    });
    await expect(within(dialog).queryByRole('button', {
      name: 'Close'
    })).toBeNull();
    await userEvent.click(dialog.parentElement!, {
      clientX: 2,
      clientY: 2
    } as never);
    await new Promise(r => setTimeout(r, 200));
    await waitFor(() => expect(body().getByRole('alertdialog')).toBeVisible());
    await userEvent.click(within(dialog).getByRole('button', {
      name: 'Keep project'
    }));
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
    // Escape still closes it.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Delete project'
    }));
    await body().findByRole('alertdialog');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
  }
}`,...O.parameters?.docs?.source},description:{story:`A decision that must be made: role="alertdialog", no close button, and a press outside does nothing.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Invite people',
    description: undefined,
    trigger: <Button>Invite</Button>,
    children: <Select label="Role" options={['Viewer', 'Commenter', 'Editor']} defaultValue="Viewer" isFullWidth />,
    footer: <Button>Send invites</Button>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Invite'
    }));
    const dialog = await body().findByRole('dialog');
    await userEvent.click(within(dialog).getByRole('combobox', {
      name: 'Role'
    }));
    const option = await body().findByRole('option', {
      name: 'Editor'
    });
    await waitFor(() => {
      const r = option.getBoundingClientRect();
      const hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
      return expect(option.contains(hit)).toBe(true);
    });
  }
}`,...k.parameters?.docs?.source},description:{story:`A Select opened inside a modal lists its options above it.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Terms of service',
    description: undefined,
    size: 'lg',
    trigger: <Button appearance="outlined">Read the terms</Button>,
    children: <div>
        {Array.from({
        length: 12
      }, (_, i) => <p key={i} style={{
        margin: '0 0 var(--space-3)'
      }}>
            {i + 1}. These terms govern your use of the service. By creating an account you agree to them, and to the
            privacy notice that explains what we collect and why.
          </p>)}
      </div>,
    footer: <ModalClose render={<Button />}>Accept</ModalClose>
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: 'Read the terms'
    }));
    const dialog = await body().findByRole('dialog');
    // The body scrolls; the footer stays on screen.
    const accept = within(dialog).getByRole('button', {
      name: 'Accept'
    });
    await waitFor(() => expect(accept.getBoundingClientRect().bottom).toBeLessThanOrEqual(window.innerHeight));
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'lg',
    children: <div>
        {Array.from({
        length: 30
      }, (_, i) => <p key={i}>Line {i + 1}</p>)}
      </div>
  },
  render: args => <div style={{
    display: 'grid',
    gap: 'var(--space-4)'
  }}>
      {[360, 480, 768, 1280].map(width => <Pictured key={width} data-screen={width} style={{
      position: 'relative',
      contain: 'layout paint',
      inlineSize: width,
      blockSize: 600
    }}>
          {container => <Modal {...args} trigger={undefined} open isModal={false} container={container} />}
        </Pictured>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    // [left, top, width, height] of the modal inside its screen, and of its footer's bottom edge.
    const box = (width: number) => {
      const frame = canvasElement.querySelector(\`[data-screen="\${width}"]\`)!;
      const dialog = frame.querySelector('[role="dialog"]')!;
      const [f, d] = [frame.getBoundingClientRect(), dialog.getBoundingClientRect()];
      return {
        dialog,
        rect: [d.left - f.left, d.top - f.top, d.width, d.height].map(Math.round)
      };
    };
    await waitFor(() => expect(canvasElement.querySelectorAll('[role="dialog"]')).toHaveLength(4));
    // Under 480px: the whole screen, with no corner and no shadow, and the footer at the bottom.
    await waitFor(() => expect(box(360).rect).toEqual([0, 0, 360, 600]));
    const phone = box(360).dialog;
    await expect(getComputedStyle(phone).borderTopLeftRadius).toBe('0px');
    await expect(getComputedStyle(phone).boxShadow).toBe('none');
    const footer = phone.querySelector(\`.\${styles.footer}\`)!;
    await expect(Math.round(phone.getBoundingClientRect().bottom - footer.getBoundingClientRect().bottom)).toBe(24);
    // The body still scrolls there.
    const scroller = phone.querySelector(\`.\${styles.body}\`)!;
    await expect(scroller.scrollHeight).toBeGreaterThan(scroller.clientHeight);
    // From 480px: 60px from the top and from each side, and never taller than the screen less 60px above and below.
    await waitFor(() => expect(box(480).rect).toEqual([60, 60, 360, 480]));
    await expect(getComputedStyle(box(480).dialog).borderTopLeftRadius).not.toBe('0px');
    await expect(getComputedStyle(box(480).dialog).boxShadow).not.toBe('none');
    await waitFor(() => expect(box(768).rect).toEqual([60, 60, 648, 480]));
    // Wide enough for the size: 800px (lg), centred, still 60px from the top.
    await waitFor(() => expect(box(1280).rect).toEqual([240, 60, 800, 480]));
  }
}`,...j.parameters?.docs?.source},description:{story:`How the modal sits on a screen 360, 480, 768 and 1280px wide. Each frame
stands in for the screen: it contains layout, so the modal's fixed
viewport, the size container its rules ask, is the frame.`,...j.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    footer: editFooter
  },
  render: picture,
  play: async ({
    canvas,
    canvasElement
  }) => {
    // Rendered inside the story, not <body>.
    const dialog = await canvas.findByRole('dialog', {
      hidden: true
    });
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toBe(dialog);
    await expect(found[2]).toHaveTextContent('Edit profile');
    // Not modal: the page around the picture keeps its scroll (Default
    // shows a modal locks it on <body>).
    await expect(getComputedStyle(document.body).overflow).not.toBe('hidden');
  }
}`,...F.parameters?.docs?.source},description:{story:`Every part present, the modal open in place.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    size: 'sm',
    description: undefined,
    children: undefined,
    footer: undefined
  },
  render: args => picture({
    ...args,
    width: '15rem',
    height: '5rem'
  })
}`,...I.parameters?.docs?.source},description:{story:`Specs, States: the close button, in a modal with only a title.`,...I.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...alert,
    footer: <>
        <Button variant="secondary">Keep project</Button>
        <Button variant="destructive">Delete</Button>
      </>
  },
  render: args => picture({
    ...args,
    width: 'min(22rem, 100vw - 10rem)',
    height: '14rem'
  })
}`,...R.parameters?.docs?.source},description:{story:`Guidelines, Do: the buttons say what they do.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    ...alert,
    footer: <>
        <Button variant="secondary">Cancel</Button>
        <Button>OK</Button>
      </>
  },
  render: args => picture({
    ...args,
    width: 'min(22rem, 100vw - 10rem)',
    height: '14rem'
  })
}`,...z.parameters?.docs?.source},description:{story:`Guidelines, Don't: OK and Cancel make the reader go back to the question.`,...z.parameters?.docs?.description}}}})))()}export{D as a,A as c,k as d,P as f,E as i,_ as l,F as n,R as o,V as p,I as r,z as s,O as t,j as u};