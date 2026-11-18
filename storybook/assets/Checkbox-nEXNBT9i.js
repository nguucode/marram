import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{n as _,t as v}from"./Checkbox-CKfnWgUx.js";import{a as y,c as b,d as x,i as S,l as C,n as w,o as T,r as E,s as D,t as O,u as k}from"./Checkbox.stories-DA7wp6Wy.js";function A(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(c,{of:w}),`
`,(0,M.jsx)(t.h1,{id:`checkbox`,children:`Checkbox`}),`
`,(0,M.jsxs)(d,{children:[(0,M.jsxs)(p,{value:`overview`,children:[(0,M.jsx)(t.p,{children:`Selects an option, or several from a list, to apply when a form is
submitted.`}),(0,M.jsx)(m,{of:w}),(0,M.jsx)(s,{of:E}),(0,M.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`variant`}),` is the colour of the checked box. Each row: unchecked, checked,
indeterminate.`]}),(0,M.jsx)(s,{of:C}),(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Variant`}),(0,M.jsx)(t.th,{children:`Use for`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(v,{defaultChecked:!0,label:`Neutral`})}),(0,M.jsx)(t.td,{children:`The default: lists, forms, tables. The checked box is the foreground colour, so a column of them stays calm.`})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.td,{children:(0,M.jsx)(v,{variant:`primary`,defaultChecked:!0,label:`Primary`})}),(0,M.jsx)(t.td,{children:`One checkbox that carries the brand: an opt-in, a terms box beside a primary button.`})]})]})]}),(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.strong,{children:`Indeterminate`}),` is for a parent whose children are partly selected. It
is a display state: clicking the parent chooses all or none, never
"mixed".`]}),(0,M.jsx)(s,{of:D}),(0,M.jsx)(s,{of:b}),(0,M.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,M.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-js`,children:`import { Checkbox } from 'marram/checkbox'
`})}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/checkbox.json
`})}),(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[`Source: `,(0,M.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/controls/Checkbox.tsx`,rel:`nofollow`,children:`src/components/controls/Checkbox.tsx`})]}),`
`,(0,M.jsxs)(t.li,{children:[`Spec: `,(0,M.jsx)(t.a,{href:`https://www.uiguideline.com/components/checkbox`,rel:`nofollow`,children:`uiguideline.com/components/checkbox`})]}),`
`,(0,M.jsxs)(t.li,{children:[`Behaviour: `,(0,M.jsx)(t.a,{href:`https://base-ui.com/react/components/checkbox`,rel:`nofollow`,children:`Base UI Checkbox`}),` and `,(0,M.jsx)(t.a,{href:`https://base-ui.com/react/components/field`,rel:`nofollow`,children:`Field`})]}),`
`,(0,M.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,M.jsxs)(p,{value:`specs`,children:[(0,M.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,M.jsx)(l,{parts:k,children:(0,M.jsx)(i,{of:O})}),(0,M.jsx)(t.p,{children:`The label wraps the box, so the whole label is part of the click target.`}),(0,M.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,M.jsx)(t.p,{children:`One size. The box is 16px, Atlassian's, inside a 24px hit area, and
sits centred on the first line of its label, however many lines the
label wraps to. The label starts 8px from the box: Atlassian's 4px gap
after the 24px area.`}),(0,M.jsx)(h,{caption:`Every checkbox`,rows:[{part:`Container`,property:`Size`,token:`--choice-box`},{part:`Container`,property:`Corner radius`,token:`--radius-xs`},{part:`Check mark`,property:`Size`,token:`--icon-xs`},{part:`Label`,property:`Gap from the box`,token:`--space-inline`},{part:`Label`,property:`Font size`,token:`--text-body`},{part:`Label`,property:`Line height`,token:`--leading-body`},{part:`Helper text`,property:`Gap from the label`,token:`--space-1`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Hit area`,property:`Minimum`,token:`--box-sm`},{part:`Hit area`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,M.jsxs)(t.p,{children:[`The box's corner is the radius step, not the control tier's radius: a box
that turned round under `,(0,M.jsx)(t.code,{children:`radius="full-rounded"`}),` would read as a radio.
The label is regular weight, as Atlassian's checkbox label is; the form
label weight is for a field's or a group's label, not an option's.`]}),(0,M.jsx)(t.h2,{id:`color`,children:`Color`}),(0,M.jsx)(h,{caption:`Unchecked, every variant`,rows:[{part:`Container`,property:`Background`,token:`--color-surface`},{part:`Container`,property:`Border`,token:`--color-border-bold`},{part:`Container, hover`,property:`Border`,token:`--color-text`}]}),(0,M.jsx)(h,{caption:`neutral, checked or indeterminate`,rows:[{part:`Container`,property:`Background`,token:`--color-text`},{part:`Check mark`,property:`Colour`,token:`--color-surface`}]}),(0,M.jsx)(h,{caption:`primary, checked or indeterminate`,rows:[{part:`Container`,property:`Background`,token:`--color-background-brand-bold`},{part:`Check mark`,property:`Colour`,token:`--color-text-brand-inverse`}]}),(0,M.jsx)(h,{caption:`Every variant`,rows:[{part:`Label`,property:`Colour`,token:`--color-text`},{part:`Helper text`,property:`Colour`,token:`--color-text-subtlest`},{part:`Container, error`,property:`Border`,token:`--color-text-danger`},{part:`Helper text, error`,property:`Colour`,token:`--color-text-danger`},{part:`Helper text, success`,property:`Colour`,token:`--color-text-success`},{part:`Required asterisk`,property:`Colour`,token:`--color-text-danger`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,M.jsx)(t.h2,{id:`states`,children:`States`}),(0,M.jsx)(f,{states:[{label:`Unchecked`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Checked`,content:(0,M.jsx)(v,{defaultChecked:!0,label:`Remember me`})},{label:`Indeterminate`,content:(0,M.jsx)(i,{of:T})},{label:`Disabled`,content:(0,M.jsx)(v,{disabled:!0,defaultChecked:!0,label:`Remember me`})},{label:`Error`,content:(0,M.jsx)(v,{validationState:`error`,label:`Remember me`})}],children:(0,M.jsx)(i,{of:E})}),(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`Hover`}),` anywhere on the label darkens an unchecked outline to
`,(0,M.jsx)(t.code,{children:`--color-text`}),`. A checked box mixes 12% of the mark's colour into its
fill, as Button does. An error outline stays red.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,M.jsx)(t.code,{children:`--color-border-focused`}),` outline, 2px outside the box.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`Disabled`}),` dims the box and the label to 50%.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`Read-only`}),` looks enabled but has no hover and an arrow cursor.`]}),`
`]}),(0,M.jsx)(t.h2,{id:`api`,children:`API`}),(0,M.jsx)(`div`,{style:{overflowX:`auto`},children:(0,M.jsx)(o,{of:w})}),(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`id`}),`, `,(0,M.jsx)(t.code,{children:`className`}),`, `,(0,M.jsx)(t.code,{children:`aria-label`}),` and `,(0,M.jsx)(t.code,{children:`ref`}),` pass through to the box.`]}),(0,M.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`Atlassian's box.`}),` 16px with a 2px corner inside a 24px hit area, and
a 12px mark: the kit's own step, since Atlassian draws the mark as part
of the box.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`Base UI's and HTML's names:`}),` `,(0,M.jsx)(t.code,{children:`defaultChecked`}),` and `,(0,M.jsx)(t.code,{children:`onCheckedChange`}),`
for the spec's `,(0,M.jsx)(t.code,{children:`defaultValue`}),` (a string there, which reads as the
submitted value: that is `,(0,M.jsx)(t.code,{children:`value`}),`) and `,(0,M.jsx)(t.code,{children:`onChange`}),`; native `,(0,M.jsx)(t.code,{children:`disabled`}),`,
`,(0,M.jsx)(t.code,{children:`required`}),`, `,(0,M.jsx)(t.code,{children:`readOnly`}),` for the `,(0,M.jsx)(t.code,{children:`is…`}),` forms.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsxs)(t.strong,{children:[(0,M.jsx)(t.code,{children:`isIndeterminate`}),` keeps its prefix.`]}),` Indeterminate is a DOM property,
not an HTML attribute, so by the kit's naming rule it takes `,(0,M.jsx)(t.code,{children:`is`}),`; Base UI
calls it `,(0,M.jsx)(t.code,{children:`indeterminate`}),`.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsxs)(t.strong,{children:[(0,M.jsx)(t.code,{children:`autoFocus`}),` is applied on mount by the component.`]}),` The box is a
focusable `,(0,M.jsx)(t.code,{children:`<span>`}),`, which React's own `,(0,M.jsx)(t.code,{children:`autoFocus`}),` ignores.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsxs)(t.strong,{children:[`No `,(0,M.jsx)(t.code,{children:`secondary`}),`.`]}),` A light fill barely reads as checked, so only
`,(0,M.jsx)(t.code,{children:`neutral`}),` (the foreground colour) and `,(0,M.jsx)(t.code,{children:`primary`}),` ship.`]}),`
`]})]}),(0,M.jsxs)(p,{value:`guidelines`,children:[(0,M.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,M.jsx)(t.p,{children:`Use a checkbox for a choice that is submitted with a form: accepting
terms, opting in, picking several items from a list. Nothing happens
until the form is sent.`}),(0,M.jsx)(t.p,{children:`Write the label so that checked means yes.`}),(0,M.jsx)(u,{do:(0,M.jsx)(i,{of:S}),doCaption:`The label says what checking does: checked means yes.`,dont:(0,M.jsx)(i,{of:y}),dontCaption:`A negative label makes unchecked a double negative, and readers stop to work it out.`}),(0,M.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`For a setting that applies at once.`}),` Use a
`,(0,M.jsx)(t.a,{href:`?path=/docs/components-controls-switch--docs`,children:`Switch`}),`: it acts like a
light switch, a checkbox waits for Submit.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`For one choice out of several.`}),` Use a
`,(0,M.jsx)(t.a,{href:`?path=/docs/components-controls-radio--docs`,children:`Radio`}),` group; checkboxes
are independent.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`For a toggle in a toolbar.`}),` Use a
`,(0,M.jsx)(t.a,{href:`?path=/docs/components-buttons-togglebutton--docs`,children:`Toggle Button`}),`.`]}),`
`]}),(0,M.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`role="checkbox"`}),` with `,(0,M.jsx)(t.code,{children:`aria-checked`}),`, `,(0,M.jsx)(t.code,{children:`mixed`}),` when indeterminate.
Space toggles it.`]}),`
`,(0,M.jsxs)(t.li,{children:[`The label wraps the box, so it names it and clicking it toggles the box.
Without a visible label, pass `,(0,M.jsx)(t.code,{children:`aria-label`}),`: it goes to the box itself.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.code,{children:`helperText`}),` is the box's description; the error state sets
`,(0,M.jsx)(t.code,{children:`aria-invalid`}),`.`]}),`
`,(0,M.jsxs)(t.li,{children:[`The unchecked outline is `,(0,M.jsx)(t.code,{children:`--color-border-bold`}),`, 3:1 on the page on every
gray ramp.`]}),`
`,(0,M.jsxs)(t.li,{children:[`A hidden native input carries `,(0,M.jsx)(t.code,{children:`name`}),`, `,(0,M.jsx)(t.code,{children:`value`}),` and `,(0,M.jsx)(t.code,{children:`required`}),` into form
submission and validation.`]}),`
`,(0,M.jsx)(t.li,{children:`The hit area is 24×24px, 44×44px on coarse pointers, without the box
growing.`}),`
`]})]})]})]})}function j(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=t(),r(),a(),g(),_(),x()})))()}N();export{j as default};