import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{a as _,c as v,d as y,i as b,l as x,n as S,o as C,r as w,s as T,t as E,u as D}from"./Tooltip.stories-CO41z5X6.js";function O(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c,{of:x}),`
`,(0,A.jsx)(t.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,A.jsxs)(d,{children:[(0,A.jsxs)(p,{value:`overview`,children:[(0,A.jsx)(t.p,{children:`A short label that appears when you hover over or focus a control: the
name of an icon-only button, a keyboard shortcut, a one-line hint.`}),(0,A.jsx)(m,{of:x}),(0,A.jsx)(s,{of:T}),(0,A.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,A.jsxs)(t.table,{children:[(0,A.jsx)(t.thead,{children:(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.th,{children:`Variant`}),(0,A.jsx)(t.th,{children:`When to use`})]})}),(0,A.jsx)(t.tbody,{children:(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:`Tooltip`}),(0,A.jsx)(t.td,{children:`A label or a one-line hint on a control.`})]})})]}),(0,A.jsxs)(t.p,{children:[`The tooltip opens on hover after a short delay and on keyboard focus at
once. Wrap a row of tooltips in `,(0,A.jsx)(t.code,{children:`TooltipGroup`}),` so that
once one has opened, moving to the next opens it without the delay:`]}),(0,A.jsx)(s,{of:C}),(0,A.jsx)(t.p,{children:`Only one tooltip is open at a time: opening one closes any other. Hover or
focus the triggers above to see them.`}),(0,A.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,A.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-js`,children:`import { Tooltip, TooltipGroup } from 'marram/tooltip'
`})}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/tooltip.json
`})}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[`Source: `,(0,A.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/overlays/Tooltip.tsx`,rel:`nofollow`,children:`src/components/overlays/Tooltip.tsx`})]}),`
`,(0,A.jsxs)(t.li,{children:[`Spec: `,(0,A.jsx)(t.a,{href:`https://www.uiguideline.com/components/tooltip`,rel:`nofollow`,children:`uiguideline.com/components/tooltip`})]}),`
`,(0,A.jsxs)(t.li,{children:[`Behaviour: `,(0,A.jsx)(t.a,{href:`https://base-ui.com/react/components/tooltip`,rel:`nofollow`,children:`Base UI Tooltip`})]}),`
`,(0,A.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,A.jsxs)(p,{value:`specs`,children:[(0,A.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,A.jsx)(l,{parts:D,children:(0,A.jsx)(i,{of:E})}),(0,A.jsxs)(t.p,{children:[`The open tooltips on this tab and the next are pictures: real tooltips
held open and rendered in place with `,(0,A.jsx)(t.code,{children:`container`}),`, laid out above the
trigger where they open.`]}),(0,A.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,A.jsx)(h,{caption:`Container`,rows:[{part:`Container`,property:`Block padding`,token:`--space-1`},{part:`Container`,property:`Inline padding`,token:`--space-1-5`},{part:`Container`,property:`Corner radius`,token:`--radius-sm`},{part:`Text`,property:`Font size`,token:`--text-body-sm`},{part:`Text`,property:`Line height`,token:`--leading-body-sm`}]}),(0,A.jsxs)(t.p,{children:[`The container is as wide as its text, at most 240px (15rem) and never wider than
the room beside the trigger; longer text wraps. It opens 6px from the
trigger, on the `,(0,A.jsx)(t.code,{children:`--layer-tooltip`}),` layer, above popovers and modals, so a
tooltip on a control inside one still shows. It fades in over
`,(0,A.jsx)(t.code,{children:`--duration-fast`}),`.`]}),(0,A.jsx)(t.h2,{id:`color`,children:`Color`}),(0,A.jsx)(h,{caption:`Every tooltip`,rows:[{part:`Container`,property:`Background`,token:`--color-text`},{part:`Text`,property:`Colour`,token:`--color-surface`}]}),(0,A.jsx)(t.p,{children:`The tooltip is inverted in both modes: a tooltip is not part of the page, and the
dark-on-light (light-on-dark in dark mode) box says so, at the same
contrast as body text.`}),(0,A.jsx)(t.h2,{id:`states`,children:`States`}),(0,A.jsx)(f,{states:[{label:`Closed`,content:(0,A.jsx)(i,{of:S})},{label:`Open`,content:(0,A.jsx)(i,{of:v})}]}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Closed`}),` until the pointer rests on the trigger for `,(0,A.jsx)(t.code,{children:`delay`}),` (300ms), or
the trigger takes keyboard focus, which opens it at once.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Open`}),` until Escape, blur or the pointer leaves, after `,(0,A.jsx)(t.code,{children:`closeDelay`}),`.
Opening fades it in and scales it up from 96%.`]}),`
`,(0,A.jsx)(t.li,{children:`The trigger keeps the states of its own component; the tooltip has none
of its own.`}),`
`]}),(0,A.jsx)(t.h2,{id:`api`,children:`API`}),(0,A.jsx)(`div`,{style:{overflowX:`auto`},children:(0,A.jsx)(o,{of:x})}),(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`TooltipGroup`}),` is Base UI's `,(0,A.jsx)(t.code,{children:`Tooltip.Provider`}),`: tooltips inside it share
one delay.`]})]}),(0,A.jsxs)(p,{value:`guidelines`,children:[(0,A.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,A.jsx)(t.p,{children:`Use a Tooltip for a label or a hint: the name of an icon-only button, a
keyboard shortcut, one line on what a control does. 300ms before it opens
is quick enough to feel responsive and long enough that tooltips do not
flash as the pointer crosses a toolbar.`}),(0,A.jsx)(u,{do:(0,A.jsx)(i,{of:b}),doCaption:`A short label that repeats the icon-only button's name for sighted users.`,dont:(0,A.jsx)(i,{of:_}),dontCaption:`Rules the reader needs to fill the field. Touch cannot open a tooltip, and it hides as soon as focus moves on: put the rules under the field.`}),(0,A.jsxs)(t.p,{children:[`It opens on the `,(0,A.jsx)(t.code,{children:`side`}),` given, top by default. When that side has no room,
it flips to the other one.`]}),(0,A.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For anything a reader needs to finish a task.`}),` Put it on the page: a
tooltip cannot be reached by touch, and it disappears the moment you
look away.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For links, buttons or other interactive content.`}),` Hover and touch
cannot reach the tooltip. Use a
`,(0,A.jsx)(t.a,{href:`?path=/docs/components-overlays-popover--docs`,children:`Popover`}),`.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For a rich preview.`}),` A tooltip holds text only. Use a
`,(0,A.jsx)(t.a,{href:`?path=/docs/components-overlays-popover--docs`,children:`Popover`}),` with
`,(0,A.jsx)(t.code,{children:`openOnHover`}),`.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`On a disabled button.`}),` It is not focusable, so its tooltip never opens
by keyboard. Put the reason it is disabled in text next to it.`]}),`
`]}),(0,A.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[`
`,(0,A.jsxs)(t.p,{children:[`It opens on hover after `,(0,A.jsx)(t.code,{children:`delay`}),` and on keyboard focus at once, and
closes on Escape, blur or pointer leave.`]}),`
`,(0,A.jsx)(s,{of:w}),`
`]}),`
`,(0,A.jsxs)(t.li,{children:[`
`,(0,A.jsxs)(t.p,{children:[`Base UI keeps tooltips out of the accessibility tree. This component
gives the popup `,(0,A.jsx)(t.code,{children:`role="tooltip"`}),` and, while it is open, points the
trigger's `,(0,A.jsx)(t.code,{children:`aria-describedby`}),` at it, so it is read as a description.`]}),`
`]}),`
`,(0,A.jsxs)(t.li,{children:[`
`,(0,A.jsxs)(t.p,{children:[`It is a `,(0,A.jsx)(t.strong,{children:`description, not a name.`}),` An icon-only button still needs its
own `,(0,A.jsx)(t.code,{children:`aria-label`}),`; the tooltip then shows that label to sighted users too.`]}),`
`]}),`
`,(0,A.jsxs)(t.li,{children:[`
`,(0,A.jsx)(t.p,{children:`The trigger must be focusable: a Button, a link, a field.`}),`
`]}),`
`,(0,A.jsxs)(t.li,{children:[`
`,(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`--color-surface`}),` on `,(0,A.jsx)(t.code,{children:`--color-text`}),` reads at 16:1 or more in both modes.`]}),`
`]}),`
`]})]})]})]})}function k(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;function j(){return(j=e((()=>{A=t(),r(),a(),g(),y()})))()}j();export{k as default};