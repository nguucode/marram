import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-DslpGgPR.js";import{c as o,t as s,u as c}from"./blocks-COhIzeP7.js";import{n as l,t as u}from"./icon-Cjfg2BMt.js";import{r as d,t as f}from"./TextInput-CmSy_4xd.js";import{a as p,i as m,n as h,r as g,t as _}from"./Modal-bajIGsOj.js";var v,y,b,x,S;function C(){return(C=e((()=>{v=`_dialog_jpjr0_2`,y=`_heading_jpjr0_6`,b=`_icon_jpjr0_13`,x=`_phrase_jpjr0_21`,S={dialog:v,heading:y,icon:b,phrase:x}})))()}function w({trigger:e,title:t,description:n,kind:r=`destructive`,confirmLabel:i,cancelLabel:o=`Cancel`,confirmText:s,onConfirm:c,open:l,defaultOpen:d=!1,onOpenChange:p,container:m,isModal:g=!0}){let[v,y]=(0,T.useState)(d),b=l??v,[x,C]=(0,T.useState)(``),[w,D]=(0,T.useState)(b);b!==w&&(D(b),b&&C(``));let O=e=>{y(e),p?.(e)},k=s?.trim()||void 0,A=k===void 0||x.trim()===k,j=()=>{A&&(c(),O(!1))};return(0,E.jsx)(_,{isAlert:g,isModal:g,closeOnBackdropClick:!1,hasCloseButton:!1,size:`sm`,trigger:e,container:m,open:b,onOpenChange:O,className:S.dialog,title:r===`destructive`?(0,E.jsxs)(`span`,{className:S.heading,children:[(0,E.jsx)(u,{name:`warning`,className:S.icon}),t]}):t,description:n,footer:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(h,{render:(0,E.jsx)(a,{variant:`secondary`,appearance:`outlined`}),children:o}),(0,E.jsx)(a,{variant:r===`destructive`?`destructive`:`primary`,disabled:!A,onClick:j,children:i})]}),children:k!==void 0&&(0,E.jsx)(`form`,{onSubmit:e=>{e.preventDefault(),j()},children:(0,E.jsx)(f,{label:(0,E.jsxs)(E.Fragment,{children:[`To confirm, type `,(0,E.jsx)(`strong`,{className:S.phrase,children:k})]}),value:x,onChange:e=>C(e.target.value),autoComplete:`off`,autoCapitalize:`off`,spellCheck:!1,isFullWidth:!0})})})}var T,E;function D(){return(D=e((()=>{T=n(),l(),i(),d(),g(),C(),E=r(),w.__docgenInfo={description:`Asks before an action, usually one that cannot be undone, in an alert dialog.`,methods:[],displayName:`ConfirmDialog`,props:{trigger:{required:!1,tsType:{name:`ReactElement`},description:"The button that opens it. Omit when `open` is controlled from elsewhere."},title:{required:!0,tsType:{name:`ReactNode`},description:`The action, as a question: "Delete “Atlas”?". Names the dialog.`},description:{required:!0,tsType:{name:`ReactNode`},description:`What happens, and that it cannot be undone. Describes the dialog.`},kind:{required:!1,tsType:{name:`union`,raw:`'default' | 'destructive'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'destructive'`}]},description:"`destructive` (the default): a warning icon and a destructive confirm\nbutton, for an action that cannot be undone. `default`: no icon and a\nprimary confirm button, for a decision that destroys nothing.",defaultValue:{value:`'destructive'`,computed:!1}},confirmLabel:{required:!0,tsType:{name:`string`},description:`The confirm button, named after what it does: "Delete project".`},cancelLabel:{required:!1,tsType:{name:`string`},description:`The safe button.`,defaultValue:{value:`'Cancel'`,computed:!1}},confirmText:{required:!1,tsType:{name:`string`},description:`Type to confirm: the confirm button stays disabled until the reader types
this exactly (case-sensitive, spaces around it ignored). Use the name of
what is deleted. Leave it out, or empty, for an everyday delete.`},onConfirm:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the reader confirms. The dialog closes.`},open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},container:{required:!1,tsType:{name:`union`,raw:`HTMLElement | null`,elements:[{name:`HTMLElement`},{name:`null`}]},description:"Where it renders instead of `<body>`."},isModal:{required:!1,tsType:{name:`boolean`},description:"`false` for a picture of the dialog, as on the docs: a plain dialog, not modal.",defaultValue:{value:`true`,computed:!1}}}}})))()}var O=t({Anatomy:()=>H,Default:()=>R,DoEverydayDelete:()=>G,DontTypeForSmall:()=>K,KindDefault:()=>U,StateWaiting:()=>W,TypeToConfirm:()=>z,__namedExportsOrder:()=>q,anatomyParts:()=>V,default:()=>F}),k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{s(),i(),D(),C(),p(),k=r(),{expect:A,fn:j,userEvent:M,waitFor:N,within:P}=__STORYBOOK_MODULE_TEST__,F={title:`Components/Overlays/Confirm Dialog`,tags:[`beta`],component:w,args:{trigger:(0,k.jsx)(a,{variant:`destructive`,children:`Delete project`}),title:`Delete “Atlas”?`,description:`Its 214 files and every comment on them are deleted for everyone. You cannot undo this.`,confirmLabel:`Delete project`,onConfirm:j(),onOpenChange:j()},argTypes:{title:{description:`The action, as a question: "Delete “Atlas”?". Names the dialog; the warning icon is not part of the name.`,control:`text`,table:{type:{summary:`ReactNode`}}},description:{description:`Required: what happens, to what, and that it cannot be undone. Read as the dialog's description.`,control:`text`,table:{type:{summary:`ReactNode`}}},kind:{description:"`destructive`: a warning icon and a destructive confirm button, for an action that cannot be undone. `default`: no icon and a primary confirm button, for a decision that destroys nothing (sign out, leave without saving).",control:`inline-radio`,options:[`default`,`destructive`],table:{type:{summary:`'default' | 'destructive'`},defaultValue:{summary:`'destructive'`}}},confirmLabel:{description:`Required: the confirm button, named after what it does ("Delete project"), never "OK".`,control:`text`,table:{type:{summary:`string`}}},cancelLabel:{description:`The safe button. It has focus when the dialog opens.`,control:`text`,table:{type:{summary:`string`},defaultValue:{summary:`'Cancel'`}}},confirmText:{description:`Type to confirm: adds a field, and the confirm button stays disabled until the reader types this exactly (case-sensitive, spaces around it ignored). Use the name of what is deleted. Only for a delete that is large and cannot be undone; empty means no field.`,control:`text`,table:{type:{summary:`string`}}},onConfirm:{description:`Called when the reader confirms, by the button or Enter in the field. The dialog then closes.`,control:!1,table:{type:{summary:`() => void`}}},trigger:{description:"The button that opens it. Omit when `open` is controlled from elsewhere.",control:!1,table:{type:{summary:`ReactElement`}}},open:{description:"Controlled open state. Pair with `onOpenChange`.",control:`boolean`,table:{type:{summary:`boolean`}}},defaultOpen:{description:`Open on first render, uncontrolled.`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},onOpenChange:{description:`Called with the next open state: on open, Cancel, Escape and confirm.`,control:!1,table:{type:{summary:`(open: boolean) => void`}}},container:{description:"Where it renders instead of `<body>`, e.g. an element in fullscreen.",control:!1,table:{type:{summary:`HTMLElement | null`}}},isModal:{description:"`false` renders a plain, non-modal dialog, for pictures of it such as the ones on these docs. A real confirm dialog stays modal.",control:!1,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}}},excludeStories:[`anatomyParts`]},I=()=>P(document.body),L={title:`Delete the “northwind” workspace?`,description:`Its 12 projects, 3,480 files and every member’s access are deleted for good. You cannot undo this.`,confirmLabel:`Delete workspace`,confirmText:`northwind`},R={play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Delete project`});await M.click(n);let r=await I().findByRole(`alertdialog`,{name:`Delete “Atlas”?`});await A(r).toHaveAccessibleDescription(e.description);let i=P(r).getByRole(`button`,{name:`Cancel`});await N(()=>A(i).toHaveFocus()),await M.click(r.parentElement,{clientX:2,clientY:2}),await new Promise(e=>setTimeout(e,200)),await A(I().getByRole(`alertdialog`)).toBeVisible(),await M.click(i),await N(()=>A(I().queryByRole(`alertdialog`)).toBeNull()),await N(()=>A(n).toHaveFocus()),await A(e.onConfirm).not.toHaveBeenCalled(),await M.click(n),await I().findByRole(`alertdialog`),await M.keyboard(`{Escape}`),await N(()=>A(I().queryByRole(`alertdialog`)).toBeNull()),await A(e.onConfirm).not.toHaveBeenCalled(),await M.click(n);let a=await I().findByRole(`alertdialog`);await M.click(P(a).getByRole(`button`,{name:`Delete project`})),await A(e.onConfirm).toHaveBeenCalledTimes(1),await N(()=>A(I().queryByRole(`alertdialog`)).toBeNull()),await A(e.onOpenChange).toHaveBeenLastCalledWith(!1)}},z={args:{...L,trigger:(0,k.jsx)(a,{variant:`destructive`,children:`Delete workspace`})},play:async({args:e,canvas:t})=>{let n=t.getByRole(`button`,{name:`Delete workspace`});await M.click(n);let r=await I().findByRole(`alertdialog`,{name:`Delete the “northwind” workspace?`}),i=P(r).getByRole(`textbox`,{name:`To confirm, type northwind`}),a=P(r).getByRole(`button`,{name:`Delete workspace`});await N(()=>A(i).toHaveFocus()),await A(a).toBeDisabled(),await M.type(i,`Northwind{Enter}`),await A(a).toBeDisabled(),await A(e.onConfirm).not.toHaveBeenCalled(),await M.clear(i),await M.type(i,` northwind `),await A(a).toBeEnabled(),await M.keyboard(`{Enter}`),await A(e.onConfirm).toHaveBeenCalledTimes(1),await N(()=>A(I().queryByRole(`alertdialog`)).toBeNull()),await M.click(n);let o=await I().findByRole(`alertdialog`);await A(P(o).getByRole(`textbox`)).toHaveValue(``),await A(P(o).getByRole(`button`,{name:`Delete workspace`})).toBeDisabled()}},B=({height:e=`17rem`,...t})=>(0,k.jsx)(o,{style:{position:`relative`,contain:`layout paint`,inlineSize:`min(27rem, 100vw - 6rem)`,blockSize:e,borderRadius:`var(--radius-panel)`},children:e=>(0,k.jsx)(w,{...t,trigger:void 0,open:!0,isModal:!1,container:e})}),V=[{name:`Warning icon`,selector:`.${S.icon}`,description:"In `--color-background-danger-bold`. Decorative: not part of the name."},{name:`Title`,selector:`[role="dialog"] h2`,description:`The action, as a question. Names the dialog.`},{name:`Consequence`,selector:`.${m.description}`,description:`What happens, to what, and that it cannot be undone.`},{name:`Type to confirm`,selector:`[role="dialog"] input`,description:"Optional, `confirmText`. The confirm button waits for an exact match."},{name:`Cancel`,selector:`.${m.footer} > :first-child`,description:`The safe choice. Focus starts here, or in the field.`},{name:`Confirm`,selector:`.${m.footer} > :last-child`,description:"`destructive`, named after what it does."}],H={tags:[`!dev`],args:L,render:B,play:async({canvasElement:e})=>{let t=await c(e,V);await A(t[1]).toHaveTextContent(`Delete the “northwind” workspace?`),await A(t[5]).toBeDisabled()}},U={tags:[`!dev`],args:{kind:`default`,title:`Sign out of every device?`,description:`You stay signed in here. Everywhere else asks for your password again.`,confirmLabel:`Sign out`},render:e=>B({...e,height:`12rem`}),play:async({canvasElement:e})=>{let t=P(e).getByRole(`dialog`);await A(t.querySelector(`.${S.icon}`)).toBeNull(),await A(getComputedStyle(t.querySelector(`.${m.heading}`)).rowGap).toBe(`16px`)}},W={tags:[`!dev`],args:L,render:B},G={tags:[`!dev`],args:{title:`Delete this comment?`,description:`It is removed from the thread for everyone.`,confirmLabel:`Delete comment`},render:e=>B({...e,height:`12rem`})},K={tags:[`!dev`],args:{title:`Delete this comment?`,description:`It is removed from the thread for everyone.`,confirmLabel:`Delete comment`,confirmText:`delete`},render:e=>B({...e,height:`17rem`})},q=[`Default`,`TypeToConfirm`,`anatomyParts`,`Anatomy`,`KindDefault`,`StateWaiting`,`DoEverydayDelete`,`DontTypeForSmall`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Delete project'
    });
    await userEvent.click(trigger);
    const dialog = await body().findByRole('alertdialog', {
      name: 'Delete “Atlas”?'
    });
    await expect(dialog).toHaveAccessibleDescription(args.description as string);
    // The safe choice has focus, so Enter cannot delete.
    const cancel = within(dialog).getByRole('button', {
      name: 'Cancel'
    });
    await waitFor(() => expect(cancel).toHaveFocus());
    // A press outside does nothing.
    await userEvent.click(dialog.parentElement!, {
      clientX: 2,
      clientY: 2
    } as never);
    await new Promise(r => setTimeout(r, 200));
    await expect(body().getByRole('alertdialog')).toBeVisible();
    await userEvent.click(cancel);
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
    await waitFor(() => expect(trigger).toHaveFocus());
    await expect(args.onConfirm).not.toHaveBeenCalled();
    // Escape closes it too.
    await userEvent.click(trigger);
    await body().findByRole('alertdialog');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
    await expect(args.onConfirm).not.toHaveBeenCalled();
    // The action confirms, once, and closes.
    await userEvent.click(trigger);
    const again = await body().findByRole('alertdialog');
    await userEvent.click(within(again).getByRole('button', {
      name: 'Delete project'
    }));
    await expect(args.onConfirm).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(false);
  }
}`,...R.parameters?.docs?.source},description:{story:`An everyday delete: say what happens, then Cancel or the action.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...workspace,
    trigger: <Button variant="destructive">Delete workspace</Button>
  },
  play: async ({
    args,
    canvas
  }) => {
    const trigger = canvas.getByRole('button', {
      name: 'Delete workspace'
    });
    await userEvent.click(trigger);
    const dialog = await body().findByRole('alertdialog', {
      name: 'Delete the “northwind” workspace?'
    });
    const field = within(dialog).getByRole('textbox', {
      name: 'To confirm, type northwind'
    });
    const confirm = within(dialog).getByRole('button', {
      name: 'Delete workspace'
    });
    // The field is the first thing to tab to, so it has focus.
    await waitFor(() => expect(field).toHaveFocus());
    await expect(confirm).toBeDisabled();
    // Case counts; Enter before a match does nothing.
    await userEvent.type(field, 'Northwind{Enter}');
    await expect(confirm).toBeDisabled();
    await expect(args.onConfirm).not.toHaveBeenCalled();
    await userEvent.clear(field);
    await userEvent.type(field, ' northwind ');
    await expect(confirm).toBeEnabled();
    // Enter in the field confirms once it matches.
    await userEvent.keyboard('{Enter}');
    await expect(args.onConfirm).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(body().queryByRole('alertdialog')).toBeNull());
    // Reopened, the field starts empty again.
    await userEvent.click(trigger);
    const again = await body().findByRole('alertdialog');
    await expect(within(again).getByRole('textbox')).toHaveValue('');
    await expect(within(again).getByRole('button', {
      name: 'Delete workspace'
    })).toBeDisabled();
  }
}`,...z.parameters?.docs?.source},description:{story:`A large delete that cannot be undone: the button waits until the name is typed.`,...z.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: workspace,
  render: picture,
  play: async ({
    canvasElement
  }) => {
    const found = await expectAnatomy(canvasElement, anatomyParts);
    await expect(found[1]).toHaveTextContent('Delete the “northwind” workspace?');
    await expect(found[5]).toBeDisabled();
  }
}`,...H.parameters?.docs?.source},description:{story:`Every part present, the dialog open in place.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    kind: 'default',
    title: 'Sign out of every device?',
    description: 'You stay signed in here. Everywhere else asks for your password again.',
    confirmLabel: 'Sign out'
  },
  render: args => picture({
    ...args,
    height: '12rem'
  }),
  play: async ({
    canvasElement
  }) => {
    const dialog = within(canvasElement).getByRole('dialog');
    await expect(dialog.querySelector(\`.\${styles.icon}\`)).toBeNull();
    // 16px from the title to the description, where a Modal has 8px.
    await expect(getComputedStyle(dialog.querySelector(\`.\${modalStyles.heading}\`)!).rowGap).toBe('16px');
  }
}`,...U.parameters?.docs?.source},description:{story:'`kind="default"`: a decision that destroys nothing. No icon, a primary confirm button.',...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: workspace,
  render: picture
}`,...W.parameters?.docs?.source},description:{story:`Specs, States: the field empty, the confirm button disabled.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    title: 'Delete this comment?',
    description: 'It is removed from the thread for everyone.',
    confirmLabel: 'Delete comment'
  },
  render: args => picture({
    ...args,
    height: '12rem'
  })
}`,...G.parameters?.docs?.source},description:{story:`Guidelines, Do: an everyday delete asks once, with no typing.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  args: {
    title: 'Delete this comment?',
    description: 'It is removed from the thread for everyone.',
    confirmLabel: 'Delete comment',
    confirmText: 'delete'
  },
  render: args => picture({
    ...args,
    height: '17rem'
  })
}`,...K.parameters?.docs?.source},description:{story:`Guidelines, Don't: typing for a small delete teaches readers to type without reading.`,...K.parameters?.docs?.description}}}})))()}export{K as a,z as c,G as i,V as l,O as n,U as o,R as r,W as s,H as t,J as u};