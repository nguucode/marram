import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{n as _}from"./ToggleButton-CLGy3x2N.js";import{a as v,c as y,d as b,f as x,i as S,l as C,n as w,o as T,r as E,s as D,t as O,u as k}from"./ButtonGroup.stories-D1XGBx22.js";function A(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(c,{of:w}),`
`,(0,M.jsx)(t.h1,{id:`button-group`,children:`Button Group`}),`
`,(0,M.jsxs)(d,{children:[(0,M.jsxs)(p,{value:`overview`,children:[(0,M.jsxs)(t.p,{children:[`A selection control, like Tabs without the panel:
`,(0,M.jsx)(t.a,{href:`?path=/docs/components-buttons-togglebutton--docs`,children:`Toggle Buttons`}),` that
share one selection, exactly one on at a time. `,(0,M.jsx)(t.code,{children:`type="separate"`}),` sets them
4px apart; `,(0,M.jsx)(t.code,{children:`type="joined"`}),` makes them one bar.`]}),(0,M.jsx)(m,{of:w}),(0,M.jsx)(t.p,{children:`Button Group is outside the 1.0 component list; it is beta from 0.9.0.`}),(0,M.jsx)(s,{of:S}),(0,M.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:(0,M.jsx)(t.code,{children:`type`})}),(0,M.jsx)(t.th,{children:`Use for`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`separate`})}),(0,M.jsx)(t.td,{children:`The default. Outlined toggles 4px apart: one view, one mode, one period at a time.`})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(t.code,{children:`joined`})}),(0,M.jsx)(t.td,{children:`A segmented control: one bar, where the options read as one control.`})]})]})]}),(0,M.jsx)(s,{of:C}),(0,M.jsx)(s,{of:y}),(0,M.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,M.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-js`,children:`import { ButtonGroup } from 'marram/button-group'
`})}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/button-group.json
`})}),(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[`Source: `,(0,M.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/buttons/ButtonGroup.tsx`,rel:`nofollow`,children:`src/components/buttons/ButtonGroup.tsx`})]}),`
`,(0,M.jsxs)(t.li,{children:[`Spec: none on uiguideline.com; after `,(0,M.jsx)(t.a,{href:`https://ui.shadcn.com/docs/components/button-group`,rel:`nofollow`,children:`shadcn/ui Button Group`}),` and `,(0,M.jsx)(t.a,{href:`https://ui.shadcn.com/docs/components/toggle-group`,rel:`nofollow`,children:`Toggle Group`})]}),`
`,(0,M.jsxs)(t.li,{children:[`Behaviour: `,(0,M.jsx)(t.a,{href:`https://base-ui.com/react/components/toggle-group`,rel:`nofollow`,children:`Base UI Toggle Group`})]}),`
`,(0,M.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,M.jsxs)(p,{value:`specs`,children:[(0,M.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,M.jsx)(l,{parts:b,children:(0,M.jsx)(i,{of:O})}),(0,M.jsxs)(t.p,{children:[`The toggles keep their own anatomy; the container only spaces them
(`,(0,M.jsx)(t.code,{children:`separate`}),`) or joins them (`,(0,M.jsx)(t.code,{children:`joined`}),`).`]}),(0,M.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,M.jsxs)(t.p,{children:[`The group adds no size of its own. Each button keeps its tier, so a group
of `,(0,M.jsx)(t.code,{children:`sm`}),` buttons is `,(0,M.jsx)(t.code,{children:`--control-sm`}),` tall.`]}),(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`joined`}),`: the inner corners are square and each toggle after the first
overlaps the one before by its 1px border, so two outlined toggles share
one line. The outer corners keep the toggles' radius.`]}),(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`separate`}),` leaves its toggles whole: every toggle keeps its four corners
and its border, and they stand `,(0,M.jsx)(t.code,{children:`--space-1`}),` (4px) apart in one row that does
not wrap. In a group wider than its content the toggles share the extra
width.`]}),(0,M.jsx)(h,{caption:`separate`,rows:[{part:`Container`,property:`Gap between buttons`,token:`--space-1`}]}),(0,M.jsx)(h,{caption:`sm`,rows:[{part:`Button`,property:`Height`,token:`--control-sm`},{part:`Container`,property:`Outer corner radius`,token:`--control-sm-radius`}]}),(0,M.jsx)(h,{caption:`md`,rows:[{part:`Button`,property:`Height`,token:`--control-md`},{part:`Container`,property:`Outer corner radius`,token:`--control-md-radius`}]}),(0,M.jsx)(t.h2,{id:`color`,children:`Color`}),(0,M.jsx)(t.p,{children:`The group paints nothing: off and on colours are the Toggle Button's. In
a joined group the toggle that is on is raised over its neighbours so its
own border wins where they overlap.`}),(0,M.jsx)(h,{caption:`Default toggles`,rows:[{part:`Button, unpressed`,property:`Border`,token:`--color-border`},{part:`Selected`,property:`Background`,token:`--color-background-brand-bold`},{part:`Selected`,property:`Label`,token:`--color-text-brand-inverse`}]}),(0,M.jsx)(t.h2,{id:`states`,children:`States`}),(0,M.jsx)(f,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Disabled`,content:(0,M.jsx)(i,{of:v})}],children:(0,M.jsx)(i,{of:S})}),(0,M.jsx)(t.p,{children:`Hover and focus are each toggle's own; a toggle has no press-and-hold
state. In a joined group the focused toggle is raised over its neighbours
so the ring is never cut; in a separate group the ring fits in the gap.`}),(0,M.jsx)(t.h2,{id:`api`,children:`API`}),(0,M.jsx)(`div`,{style:{overflowX:`auto`},children:(0,M.jsx)(o,{of:w})}),(0,M.jsxs)(t.p,{children:[`Every other `,(0,M.jsx)(t.code,{children:`<div>`}),` attribute passes through.`]}),(0,M.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`A selection control, not a row of actions.`}),` As in the Figma library,
ButtonGroup holds ToggleButtons with exactly one on, in a `,(0,M.jsx)(t.code,{children:`separate`}),` or
`,(0,M.jsx)(t.code,{children:`joined`}),` `,(0,M.jsx)(t.code,{children:`type`}),`. In 0.9 it replaced both the old action-row
`,(0,M.jsx)(t.code,{children:`ButtonGroup`}),` and `,(0,M.jsx)(t.code,{children:`ToggleGroup`}),`. There is no `,(0,M.jsx)(t.code,{children:`multiple`}),`: for settings
that combine, use separate ToggleButtons. For related actions, lay out
Buttons yourself.`]}),`
`]})]}),(0,M.jsxs)(p,{value:`guidelines`,children:[(0,M.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,M.jsx)(t.p,{children:`Use a ButtonGroup when the toggles answer one question with one answer:
which view, which mode, which period. Give every toggle in a group the
same variant and appearance, so the one that is on is the only one that
stands out.`}),(0,M.jsx)(u,{do:(0,M.jsx)(i,{of:T}),doCaption:`One look across the group: only the toggle that is on stands out.`,dont:(0,M.jsx)(i,{of:D}),dontCaption:`A different variant per button reads as several states at once.`}),(0,M.jsx)(s,{of:E}),(0,M.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`To switch between panels of content.`}),` Use Tabs: they own the panel
and its `,(0,M.jsx)(t.code,{children:`tabpanel`}),` role.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`For a choice submitted with a form.`}),` Use a Radio group or Checkboxes:
a toggle applies at once, a form field waits for Submit.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`For actions.`}),` A ButtonGroup keeps one option on; for previous and
next, or zoom in and out, lay out Buttons side by side.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`For settings that combine`}),` (status filters, Bold and Italic). Use
separate ToggleButtons: a ButtonGroup keeps exactly one on.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`For more than a handful of options.`}),` Use a Select.`]}),`
`]}),(0,M.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[`
`,(0,M.jsxs)(t.p,{children:[`The container has `,(0,M.jsx)(t.code,{children:`role="group"`}),`; name it with `,(0,M.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`]}),`
`,(0,M.jsxs)(t.li,{children:[`
`,(0,M.jsxs)(t.p,{children:[`Each toggle is a native `,(0,M.jsx)(t.code,{children:`<button>`}),` with `,(0,M.jsx)(t.code,{children:`aria-pressed`}),`, so a screen reader
announces "Board, toggle button, pressed".`]}),`
`]}),`
`,(0,M.jsxs)(t.li,{children:[`
`,(0,M.jsx)(t.p,{children:`The group is one tab stop. Arrow keys move between its toggles and
wrap, Home and End jump to the first and last; Space or Enter turns one
on. This is the APG toolbar pattern Base UI's Toggle Group follows.`}),`
`]}),`
`,(0,M.jsxs)(t.li,{children:[`
`,(0,M.jsx)(t.p,{children:`Exactly one stays on: pressing the one that is on again does not
release it.`}),`
`]}),`
`,(0,M.jsxs)(t.li,{children:[`
`,(0,M.jsx)(t.p,{children:`A disabled group disables every toggle in it.`}),`
`]}),`
`,(0,M.jsxs)(t.li,{children:[`
`,(0,M.jsxs)(t.p,{children:[`An icon-only toggle needs its own `,(0,M.jsx)(t.code,{children:`aria-label`}),`, as on Button. A
`,(0,M.jsx)(t.a,{href:`?path=/docs/components-overlays-tooltip--docs`,children:`Tooltip`}),` can show that
label to sighted users: it merges onto the toggle instead of wrapping
it, so the group still holds only its toggles.`]}),`
`,(0,M.jsx)(s,{of:k}),`
`]}),`
`]})]})]})]})}function j(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=t(),r(),a(),g(),_(),x()})))()}N();export{j as default};