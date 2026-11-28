import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{a as _,c as v,d as y,i as b,l as x,n as S,o as C,r as w,s as T,t as E,u as D}from"./Collapse.stories-BPGAYnWo.js";function O(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c,{of:S}),`
`,(0,A.jsx)(t.h1,{id:`collapse`,children:`Collapse`}),`
`,(0,A.jsxs)(d,{children:[(0,A.jsxs)(p,{value:`overview`,children:[(0,A.jsx)(t.p,{children:`One show/hide section, such as "Show details" or "Advanced settings": a
text button with a chevron, and the content it reveals under it.`}),(0,A.jsx)(m,{of:S}),(0,A.jsx)(s,{of:T}),(0,A.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,A.jsxs)(t.p,{children:[`Collapse has one look. `,(0,A.jsx)(t.code,{children:`size`}),` matches it to the text around it, and
`,(0,A.jsx)(t.code,{children:`openLabel`}),` decides whether the label changes when it opens.`]}),(0,A.jsxs)(t.table,{children:[(0,A.jsx)(t.thead,{children:(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.th,{children:`Size`}),(0,A.jsx)(t.th,{children:`Use for`})]})}),(0,A.jsxs)(t.tbody,{children:[(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`md`})}),(0,A.jsx)(t.td,{children:`Body text, 14px. The default.`})]}),(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`sm`})}),(0,A.jsx)(t.td,{children:`Small text, 12px: captions, dense panels, notes under a field.`})]})]})]}),(0,A.jsx)(s,{of:w}),(0,A.jsx)(s,{of:x}),(0,A.jsxs)(t.table,{children:[(0,A.jsx)(t.thead,{children:(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.th,{children:`Label`}),(0,A.jsx)(t.th,{children:`Use for`})]})}),(0,A.jsxs)(t.tbody,{children:[(0,A.jsxs)(t.tr,{children:[(0,A.jsxs)(t.td,{children:[`With `,(0,A.jsx)(t.code,{children:`openLabel`})]}),(0,A.jsx)(t.td,{children:`A label that names the action: "Show details" becomes "Hide details".`})]}),(0,A.jsxs)(t.tr,{children:[(0,A.jsxs)(t.td,{children:[`Without `,(0,A.jsx)(t.code,{children:`openLabel`})]}),(0,A.jsx)(t.td,{children:`A label that names the section: "Advanced settings" stays the same, and the chevron shows the state.`})]})]})]}),(0,A.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,A.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-js`,children:`import { Collapse } from 'marram/collapse'
`})}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/collapse.json
`})}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[`Source: `,(0,A.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/data-display/Collapse.tsx`,rel:`nofollow`,children:`src/components/data-display/Collapse.tsx`})]}),`
`,(0,A.jsx)(t.li,{children:`Spec: the kit's own. uiguideline.com has no page for it.`}),`
`,(0,A.jsxs)(t.li,{children:[`Behaviour: `,(0,A.jsx)(t.a,{href:`https://base-ui.com/react/components/collapsible`,rel:`nofollow`,children:`Base UI Collapsible`})]}),`
`,(0,A.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,A.jsxs)(p,{value:`specs`,children:[(0,A.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,A.jsx)(l,{parts:D,children:(0,A.jsx)(i,{of:E})}),(0,A.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,A.jsxs)(t.p,{children:[`The trigger has no padding: it is as tall as a line of its text, 20px at
`,(0,A.jsx)(t.code,{children:`md`}),` and 16px at `,(0,A.jsx)(t.code,{children:`sm`}),`.`]}),(0,A.jsx)(h,{caption:`sm`,rows:[{part:`Label`,property:`Font size`,token:`--text-body-sm`},{part:`Label`,property:`Line height`,token:`--leading-body-sm`},{part:`Trigger`,property:`Gap`,token:`--space-stack`},{part:`Chevron`,property:`Size`,token:`--icon-md`},{part:`Panel`,property:`Space above the content`,token:`--space-inline`}]}),(0,A.jsx)(h,{caption:`md`,rows:[{part:`Label`,property:`Font size`,token:`--text-body`},{part:`Label`,property:`Line height`,token:`--leading-body`},{part:`Trigger`,property:`Gap`,token:`--space-stack`},{part:`Chevron`,property:`Size`,token:`--icon-md`},{part:`Panel`,property:`Space above the content`,token:`--space-inline`}]}),(0,A.jsx)(h,{caption:`Every size`,rows:[{part:`Trigger`,property:`Corner radius (focus ring)`,token:`--radius-sm`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Hit area`,property:`Minimum on touch screens`,token:`--target-coarse`},{part:`Panel and chevron`,property:`Open and close duration`,token:`--duration-base`}]}),(0,A.jsx)(t.p,{children:`The label is medium weight (500). The content takes the size's font and
line height too.`}),(0,A.jsx)(t.h2,{id:`color`,children:`Color`}),(0,A.jsx)(h,{caption:`Every size`,rows:[{part:`Label`,property:`Colour`,token:`--color-text`},{part:`Chevron`,property:`Colour`,token:`--color-text-subtlest`},{part:`Panel`,property:`Text colour`,token:`--color-text`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,A.jsx)(t.p,{children:`The trigger has no fill and no border in any state.`}),(0,A.jsx)(t.h2,{id:`states`,children:`States`}),(0,A.jsx)(f,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Pressed`,pseudo:`active`},{label:`Open`,content:(0,A.jsx)(i,{of:T})},{label:`Disabled`,content:(0,A.jsx)(i,{of:b})}],children:(0,A.jsx)(i,{of:w})}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Hover`}),` underlines the label, like a link.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,A.jsx)(t.code,{children:`--color-border-focused`}),` outline, 2px outside the trigger.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Pressed`}),` has no look of its own: the label stays underlined while the
pointer is down.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Open`}),` turns the chevron from right to down, shows `,(0,A.jsx)(t.code,{children:`openLabel`}),` if
there is one, and animates the panel's height over `,(0,A.jsx)(t.code,{children:`--duration-base`}),`.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Disabled`}),` dims the trigger to 50% opacity, with no underline on hover.`]}),`
`]}),(0,A.jsx)(t.h2,{id:`api`,children:`API`}),(0,A.jsx)(`div`,{style:{overflowX:`auto`},children:(0,A.jsx)(o,{of:S})}),(0,A.jsxs)(t.p,{children:[`The props are the kit's own, since there is no spec to follow. Closed
content is kept as `,(0,A.jsx)(t.code,{children:`hidden="until-found"`}),` by default: the browser's
find-in-page still matches it and opens the section.`]}),(0,A.jsx)(s,{of:v})]}),(0,A.jsxs)(p,{value:`guidelines`,children:[(0,A.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,A.jsx)(t.p,{children:`Use a Collapse for one aside in running content: billing details under a
plan, advanced settings under a form. It is a text button, not a bar,
because it belongs to the content around it, and its trigger reads like a
link in a sentence.`}),(0,A.jsx)(u,{do:(0,A.jsx)(i,{of:_}),doCaption:`One aside, under the text it belongs to. The label says what opening it does.`,dont:(0,A.jsx)(i,{of:C}),dontCaption:`Bare Collapses stacked with nothing around them read as a menu, not as asides. Give each section a heading, and a Collapse under it only for what can wait.`}),(0,A.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`As the structure of a page.`}),` A list of sections needs real
headings. Give each one a heading, in a
`,(0,A.jsx)(t.a,{href:`?path=/docs/components-data-display-card--docs`,children:`Card`}),` section where it
needs a frame, and put a Collapse under a heading only for the part
that can wait.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For a short hint about a control.`}),` Use a
`,(0,A.jsx)(t.a,{href:`?path=/docs/components-overlays-tooltip--docs`,children:`Tooltip`}),` or a
`,(0,A.jsx)(t.a,{href:`?path=/docs/components-overlays-popover--docs`,children:`Popover`}),`, which do not
push the page down.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For content most readers need.`}),` Hiding it costs everyone a click.
Show it.`]}),`
`]}),(0,A.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[`The trigger is a `,(0,A.jsx)(t.code,{children:`<button>`}),` with `,(0,A.jsx)(t.code,{children:`aria-expanded`}),` and `,(0,A.jsx)(t.code,{children:`aria-controls`}),`
pointing at the panel.`]}),`
`,(0,A.jsxs)(t.li,{children:[`Enter or Space toggles it. With `,(0,A.jsx)(t.code,{children:`openLabel`}),`, the button's name changes
with its state ("Show details" / "Hide details"), and `,(0,A.jsx)(t.code,{children:`aria-expanded`}),`
says it either way. Without it, the name stays the same.`]}),`
`,(0,A.jsxs)(t.li,{children:[`The chevron is decorative (`,(0,A.jsx)(t.code,{children:`aria-hidden`}),`), so it adds nothing to the
name.`]}),`
`,(0,A.jsxs)(t.li,{children:[`Closed content is `,(0,A.jsx)(t.code,{children:`hidden="until-found"`}),` by default, so find-in-page
reaches it.`]}),`
`,(0,A.jsx)(t.li,{children:`The trigger grows to a 44px target on coarse pointers.`}),`
`,(0,A.jsxs)(t.li,{children:[`Under `,(0,A.jsx)(t.code,{children:`prefers-reduced-motion`}),` the panel and chevron change without
animating.`]}),`
`]})]})]})]})}function k(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;function j(){return(j=e((()=>{A=t(),r(),a(),g(),y()})))()}j();export{k as default};