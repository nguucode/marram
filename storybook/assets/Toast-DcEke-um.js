import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{a as _,c as v,d as y,f as b,i as x,l as S,m as C,n as w,o as T,p as E,r as D,s as O,t as k,u as A}from"./Toast.stories-Csd1QQkH.js";function j(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(c,{of:A}),`
`,(0,N.jsx)(t.h1,{id:`toast`,children:`Toast`}),`
`,(0,N.jsxs)(d,{children:[(0,N.jsxs)(p,{value:`overview`,children:[(0,N.jsx)(t.p,{children:`A short message in a corner of the screen about something that just
happened: saved, sent, moved, failed. It closes itself after a few seconds
and never blocks the page.`}),(0,N.jsx)(m,{of:A}),(0,N.jsx)(s,{of:S}),(0,N.jsx)(t.p,{children:`Try it: the toast opens in the corner of this window.`}),(0,N.jsx)(s,{of:w}),(0,N.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`variant`}),` colours the icon only; the message stays in the surface's text
colour.`]}),(0,N.jsx)(s,{of:b}),(0,N.jsxs)(t.table,{children:[(0,N.jsx)(t.thead,{children:(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.th,{children:`Variant`}),(0,N.jsx)(t.th,{children:`Use for`})]})}),(0,N.jsxs)(t.tbody,{children:[(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`neutral`})}),(0,N.jsx)(t.td,{children:`Most toasts: something done, nothing to judge. "File moved to Trash."`})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`info`})}),(0,N.jsx)(t.td,{children:`A neutral fact about what just happened: "Sync paused while offline."`})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`success`})}),(0,N.jsx)(t.td,{children:`A result worth confirming because it was not obvious: "Invite sent to 12 people."`})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`warning`})}),(0,N.jsx)(t.td,{children:`Done, with a catch: "Saved, but 2 rows were skipped."`})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`danger`})}),(0,N.jsx)(t.td,{children:`Something failed. Interrupts the screen reader. Say what to do next, and keep the way to do it on the page too.`})]})]})]}),(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`promise()`}),` adds a loading toast that becomes `,(0,N.jsx)(t.code,{children:`success`}),` or `,(0,N.jsx)(t.code,{children:`danger`}),` when
the promise settles.`]}),(0,N.jsx)(s,{of:O}),(0,N.jsx)(s,{of:y}),(0,N.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,N.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-js`,children:`import { ToastProvider, useToast } from 'marram/toast'
`})}),(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/toast.json
`})}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[`Source: `,(0,N.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/notifications/Toast.tsx`,rel:`nofollow`,children:`src/components/notifications/Toast.tsx`})]}),`
`,(0,N.jsxs)(t.li,{children:[`Spec: `,(0,N.jsx)(t.a,{href:`https://www.uiguideline.com/components/toast`,rel:`nofollow`,children:`uiguideline.com/components/toast`})]}),`
`,(0,N.jsxs)(t.li,{children:[`Behaviour: `,(0,N.jsx)(t.a,{href:`https://base-ui.com/react/components/toast`,rel:`nofollow`,children:`Base UI Toast`})]}),`
`,(0,N.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,N.jsxs)(p,{value:`specs`,children:[(0,N.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,N.jsx)(l,{parts:E,children:(0,N.jsx)(i,{of:k})}),(0,N.jsx)(t.p,{children:`Only the title, or the description alone, is required. The icon box is one
line of body text tall, so it sits on the title's line.`}),(0,N.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,N.jsx)(t.p,{children:`One size. Toasts stack with a gap, the newest nearest the edge they grow
from.`}),(0,N.jsx)(h,{caption:`Every toast`,rows:[{part:`Container`,property:`Padding, from the outer edge`,token:`--space-group`},{part:`Container`,property:`Corner radius`,token:`--radius-lg`},{part:`Container`,property:`Gap, icon to text`,token:`--space-group`},{part:`Title and description`,property:`Font size`,token:`--text-body`},{part:`Title and description`,property:`Line height`,token:`--leading-body`},{part:`Title and description`,property:`Gap`,token:`--space-inline`},{part:`Action`,property:`Height`,token:`--control-sm`},{part:`Close button`,property:`Size`,token:`--box-sm`},{part:`Close button`,property:`Gap, from the text`,token:`--space-group`},{part:`Close button`,property:`Icon size`,token:`--icon-md`},{part:`Close button`,property:`Corner radius`,token:`--radius-sm`},{part:`Close button`,property:`Minimum hit area on touch screens`,token:`--target-coarse`},{part:`Stack`,property:`Gap, between toasts`,token:`--space-inline`},{part:`Stack`,property:`Distance from the window edge`,token:`--space-4`},{part:`Stack`,property:`Layer`,token:`--layer-toast`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset (inside)`,token:`--focus-offset-inset`}]}),(0,N.jsx)(t.p,{children:`At most 25rem (400px) wide, and never wider than the window less the edge
distance on both sides. The padding counts the 1px border: the content
sits 16px from the toast's edge. The close button is 24px, top-aligned with
the content and flush with the padding, 16px from the text. The action is a 24px row straight under the
description.`}),(0,N.jsx)(t.h2,{id:`color`,children:`Color`}),(0,N.jsx)(t.p,{children:`The toast takes the page's own appearance: the overlay surface, its
border and the overlay shadow lift it off what is under it.`}),(0,N.jsx)(h,{caption:`Every variant`,rows:[{part:`Container`,property:`Background`,token:`--color-surface-overlay`},{part:`Container`,property:`Border`,token:`--color-border`},{part:`Container`,property:`Shadow`,token:`--shadow-overlay`},{part:`Title`,property:`Colour`,token:`--color-text`},{part:`Description`,property:`Colour`,token:`--color-text-subtlest`},{part:`Action`,property:`Colour`,token:`--color-text-brand`},{part:`Close button`,property:`Colour`,token:`--color-text-subtlest`},{part:`Close button, hover`,property:`Background`,token:`--color-background-neutral`},{part:`Close button, hover`,property:`Colour`,token:`--color-text`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,N.jsx)(h,{caption:`Icon, by variant`,rows:[{part:`info`,property:`Colour`,token:`--color-text-info`},{part:`success`,property:`Colour`,token:`--color-text-success`},{part:`warning`,property:`Colour`,token:`--color-text-warning`},{part:`danger`,property:`Colour`,token:`--color-text-danger`}]}),(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`neutral`}),` shows no icon.`]}),(0,N.jsx)(t.h2,{id:`states`,children:`States`}),(0,N.jsx)(f,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Pending`,content:(0,N.jsx)(i,{of:T})}],children:(0,N.jsx)(i,{of:v})}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Hover`}),` fills the close button with `,(0,N.jsx)(t.code,{children:`--color-background-neutral`}),`. Hovering the stack
also pauses every toast's timer.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,N.jsx)(t.code,{children:`--color-border-focused`}),` outline inside the action or the close
button. Focus in the stack pauses the timers too.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Pending`}),` is a `,(0,N.jsx)(t.code,{children:`promise()`}),` toast: a spinner in place of the icon, and
no timer until it settles.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Entering`}),` fades in and slides `,(0,N.jsx)(t.code,{children:`--space-2`}),` from the edge the stack grows
from; `,(0,N.jsx)(t.strong,{children:`leaving`}),` fades out. With reduced motion, only the fade.`]}),`
`]}),(0,N.jsx)(t.h2,{id:`api`,children:`API`}),(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`ToastProvider`}),` wraps the app once:`]}),(0,N.jsx)(`div`,{style:{overflowX:`auto`},children:(0,N.jsx)(o,{of:A})}),(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`useToast()`}),`, anywhere inside it, shows and closes toasts:`]}),(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-tsx`,children:`const toast = useToast()
toast.add({ title: 'File moved to Trash', action: { label: 'Undo', onClick: restore } })
`})}),(0,N.jsxs)(`div`,{style:{overflowX:`auto`},children:[(0,N.jsxs)(t.table,{children:[(0,N.jsx)(t.thead,{children:(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.th,{children:(0,N.jsx)(t.code,{children:`useToast()`})}),(0,N.jsx)(t.th,{})]})}),(0,N.jsxs)(t.tbody,{children:[(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`add(options)`})}),(0,N.jsx)(t.td,{children:`Shows a toast, returns its id.`})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`update(id, options)`})}),(0,N.jsx)(t.td,{children:`Changes one in place; only the options given change.`})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`close(id?)`})}),(0,N.jsx)(t.td,{children:`Closes one, or all.`})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`promise(promise, { loading, success, error })`})}),(0,N.jsx)(t.td,{children:`A loading toast that becomes success or danger when the promise settles.`})]})]})]}),(0,N.jsxs)(t.table,{children:[(0,N.jsx)(t.thead,{children:(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.th,{children:`Option`}),(0,N.jsx)(t.th,{children:`Values`}),(0,N.jsx)(t.th,{})]})}),(0,N.jsxs)(t.tbody,{children:[(0,N.jsxs)(t.tr,{children:[(0,N.jsxs)(t.td,{children:[(0,N.jsx)(t.code,{children:`title`}),`, `,(0,N.jsx)(t.code,{children:`description`})]}),(0,N.jsx)(t.td,{children:`node`}),(0,N.jsx)(t.td,{})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`variant`})}),(0,N.jsxs)(t.td,{children:[(0,N.jsx)(t.code,{children:`neutral`}),`, `,(0,N.jsx)(t.code,{children:`info`}),`, `,(0,N.jsx)(t.code,{children:`success`}),`, `,(0,N.jsx)(t.code,{children:`warning`}),`, `,(0,N.jsx)(t.code,{children:`danger`})]}),(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`neutral`})})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`action`})}),(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`{ label, onClick }`})}),(0,N.jsx)(t.td,{children:`One button.`})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`timeout`})}),(0,N.jsx)(t.td,{children:`number (ms)`}),(0,N.jsxs)(t.td,{children:[`The provider's by default. `,(0,N.jsx)(t.code,{children:`0`}),` keeps it until dismissed.`]})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`priority`})}),(0,N.jsxs)(t.td,{children:[(0,N.jsx)(t.code,{children:`low`}),`, `,(0,N.jsx)(t.code,{children:`high`})]}),(0,N.jsxs)(t.td,{children:[(0,N.jsx)(t.code,{children:`high`}),` by default for `,(0,N.jsx)(t.code,{children:`danger`}),`.`]})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(t.code,{children:`onClose`})}),(0,N.jsx)(t.td,{children:`function`}),(0,N.jsx)(t.td,{})]})]})]})]}),(0,N.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.strong,{children:`Sized after Atlassian's flag`}),`: 400px wide, 16px padding, 16px from
the icon to the text, 8px from the title to the description, 8px
corners, the overlay shadow, a 24px close button. The stack sits 16px
from the window edge, where Atlassian's sits 48px up and 80px in: that
offset clears its own navigation, and the kit's stack can sit on any
edge.`]}),`
`]}),`
`,(0,N.jsxs)(t.li,{children:[`
`,(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.strong,{children:`Bottom right by default`}),`, where the spec suggests top right.
`,(0,N.jsx)(t.code,{children:`placement`}),` takes any corner or edge centre.`]}),`
`]}),`
`]})]}),(0,N.jsxs)(p,{value:`guidelines`,children:[(0,N.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,N.jsx)(t.p,{children:`Use a Toast to confirm something the reader just did, when the result is
not already visible: moved, sent, copied, saved in the background. Offer
"Undo" when it can be undone.`}),(0,N.jsx)(u,{do:(0,N.jsx)(i,{of:D}),doCaption:`News about something just done, with a way to undo it. Undo is also reachable from the Trash.`,dont:(0,N.jsx)(i,{of:x}),dontCaption:`A problem the reader has to fix goes away in a few seconds. Put it in an Alert on the page.`}),(0,N.jsx)(t.p,{children:`Keep it to a few words. A toast is read in passing, often half-noticed.`}),(0,N.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`For something the reader must act on, or might need to read twice.`}),`
Use an `,(0,N.jsx)(t.a,{href:`?path=/docs/components-notifications-alert--docs`,children:`Alert`}),` on the
page, or a Modal for a decision.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`For an error in a form.`}),` Use the field's own error, or an
`,(0,N.jsx)(t.a,{href:`?path=/docs/components-notifications-inlinealert--docs`,children:`Inline Alert`}),`
under the form.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`As the only way to an action.`}),` The toast goes away; the same action
("Undo") must be reachable somewhere else.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`To confirm what is already visible.`}),` A row that appears in a table
needs no "Row added" toast.`]}),`
`]}),(0,N.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[`
`,(0,N.jsxs)(t.p,{children:[`The stack is a polite live region: a new toast is announced without
interrupting. `,(0,N.jsx)(t.code,{children:`danger`}),` toasts (and any with `,(0,N.jsx)(t.code,{children:`priority: 'high'`}),`) are
`,(0,N.jsx)(t.code,{children:`role="alertdialog"`}),` and announced at once.`]}),`
`]}),`
`,(0,N.jsxs)(t.li,{children:[`
`,(0,N.jsxs)(t.p,{children:[`Each toast is a non-modal dialog named by its title, or by its
description when it has none (as `,(0,N.jsx)(t.code,{children:`promise()`}),` toasts do).`]}),`
`]}),`
`,(0,N.jsxs)(t.li,{children:[`
`,(0,N.jsxs)(t.p,{children:[`A toast closes after 5 seconds by default (the provider's `,(0,N.jsx)(t.code,{children:`timeout`}),`);
`,(0,N.jsx)(t.code,{children:`timeout: 0`}),` keeps it until it is dismissed. At most three show at once
(`,(0,N.jsx)(t.code,{children:`limit`}),`).`]}),`
`]}),`
`,(0,N.jsxs)(t.li,{children:[`
`,(0,N.jsx)(t.p,{children:`Timers pause while the pointer is over the stack or focus is in it, so
there is time to reach the action. F6 moves focus to the stack.`}),`
`]}),`
`,(0,N.jsxs)(t.li,{children:[`
`,(0,N.jsxs)(t.p,{children:[`The close button is named `,(0,N.jsx)(t.code,{children:`Dismiss`}),`; Enter and Space press it. On touch
screens its hit area grows to 44×44px, and a toast swipes away toward
the nearest edge.`]}),`
`]}),`
`,(0,N.jsxs)(t.li,{children:[`
`,(0,N.jsx)(t.p,{children:`A toast raised from inside a modal shows above it and is not hidden from
assistive tech by it.`}),`
`,(0,N.jsx)(s,{of:_}),`
`]}),`
`]})]})]})]})}function M(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;function P(){return(P=e((()=>{N=t(),r(),a(),g(),C()})))()}P();export{M as default};