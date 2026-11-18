import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{a as _,c as v,d as y,f as b,h as x,i as S,l as C,m as w,n as T,o as E,p as D,r as O,s as k,t as A,u as j}from"./Combobox.stories-DQwXN_qe.js";function M(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,P.jsxs)(P.Fragment,{children:[`
`,`
`,(0,P.jsx)(c,{of:O}),`
`,(0,P.jsx)(t.h1,{id:`combobox`,children:`Combobox`}),`
`,(0,P.jsxs)(d,{children:[(0,P.jsxs)(p,{value:`overview`,children:[(0,P.jsx)(t.p,{children:`A field you type into to filter a list of options, then choose one.`}),(0,P.jsx)(m,{of:O}),(0,P.jsx)(s,{of:S}),(0,P.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,P.jsx)(t.p,{children:`Two sizes, and the field's validation states. Typing filters the list and
marks the match; the chosen option carries a check.`}),(0,P.jsx)(s,{of:j}),(0,P.jsxs)(t.table,{children:[(0,P.jsx)(t.thead,{children:(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.th,{children:`Size`}),(0,P.jsx)(t.th,{children:`Use for`})]})}),(0,P.jsxs)(t.tbody,{children:[(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`md`})}),(0,P.jsx)(t.td,{children:`Forms and settings: the default.`})]}),(0,P.jsxs)(t.tr,{children:[(0,P.jsx)(t.td,{children:(0,P.jsx)(t.code,{children:`sm`})}),(0,P.jsx)(t.td,{children:`Dense places: a toolbar filter, a table row. As tall as a default Button.`})]})]})]}),(0,P.jsx)(s,{of:y}),(0,P.jsx)(s,{of:T}),(0,P.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,P.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-js`,children:`import { Combobox } from 'marram/combobox'
`})}),(0,P.jsx)(t.pre,{children:(0,P.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/combobox.json
`})}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[`Source: `,(0,P.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/inputs/Combobox.tsx`,rel:`nofollow`,children:`src/components/inputs/Combobox.tsx`})]}),`
`,(0,P.jsxs)(t.li,{children:[`Spec: `,(0,P.jsx)(t.a,{href:`https://www.uiguideline.com/components/combobox`,rel:`nofollow`,children:`uiguideline.com/components/combobox`})]}),`
`,(0,P.jsxs)(t.li,{children:[`Behaviour: `,(0,P.jsx)(t.a,{href:`https://base-ui.com/react/components/combobox`,rel:`nofollow`,children:`Base UI Combobox`})]}),`
`,(0,P.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,P.jsxs)(p,{value:`specs`,children:[(0,P.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,P.jsx)(l,{parts:b,children:(0,P.jsx)(i,{of:A})}),(0,P.jsx)(t.p,{children:`The options list opens under the field, at least as wide as it:`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Option`}),`: the label, with the typed text marked by weight and
underline. Options are inset by the field's padding, so their text
starts where the input's does.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Check`}),`: before the chosen option's label, in a column kept for every
option so labels never shift.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Message`}),`: "No matches" (`,(0,P.jsx)(t.code,{children:`emptyText`}),`) when nothing matches,
"Loading…" while `,(0,P.jsx)(t.code,{children:`isLoading`}),`.`]}),`
`]}),(0,P.jsx)(s,{of:C}),(0,P.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,P.jsxs)(t.p,{children:[`A field is one step taller than a Button, after Atlassian Design: `,(0,P.jsx)(t.code,{children:`sm`}),` is
32px and `,(0,P.jsx)(t.code,{children:`md`}),` is 40px (Foundations / Sizing). The sizes share the rest:
10px of padding at each end, the 16px icons, 12px apart, the field
radius, which never becomes a pill, and body type. The clear button is
the bare 16px icon; the open button is a 24px target round its icon,
which ends 10px inside the edge. The text stops 12px short of the first
icon.`]}),(0,P.jsx)(h,{caption:`sm`,rows:[{part:`Field`,property:`Height`,token:`--control-md`},{part:`Field`,property:`Inline padding`,token:`--space-2-5`},{part:`Field`,property:`Corner radius`,token:`--control-md-radius-field`},{part:`Field`,property:`Gap`,token:`--space-3`},{part:`Icons and buttons`,property:`Icon size`,token:`--icon-md`},{part:`Input`,property:`Font size`,token:`--text-body`},{part:`Input`,property:`Line height`,token:`--leading-body`}]}),(0,P.jsx)(h,{caption:`md`,rows:[{part:`Field`,property:`Height`,token:`--control-lg`},{part:`Field`,property:`Inline padding`,token:`--space-2-5`},{part:`Field`,property:`Corner radius`,token:`--control-md-radius-field`},{part:`Field`,property:`Gap`,token:`--space-3`},{part:`Icons and buttons`,property:`Icon size`,token:`--icon-md`},{part:`Input`,property:`Font size`,token:`--text-body`},{part:`Input`,property:`Line height`,token:`--leading-body`}]}),(0,P.jsx)(h,{caption:`Every size`,rows:[{part:`Label and helper`,property:`Gap to the field`,token:`--space-stack`},{part:`Label and helper`,property:`Font size`,token:`--text-body-sm`},{part:`Clear button`,property:`Width and height`,token:`--icon-md`},{part:`Open button`,property:`Width and height`,token:`--control-sm`},{part:`Options list`,property:`Block padding`,token:`--space-2`},{part:`Option`,property:`Block padding`,token:`--space-1-5`},{part:`Option`,property:`Inline padding`,token:`--space-3`},{part:`Options list`,property:`Corner radius`,token:`--radius-lg`},{part:`Option`,property:`Minimum height`,token:`--control-md`},{part:`Check`,property:`Size`,token:`--icon-md`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Option, buttons`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,P.jsxs)(t.p,{children:[`The field is 20rem wide unless `,(0,P.jsx)(t.code,{children:`isFullWidth`}),`; the list is at least as
wide as the field, 4px under it, and scrolls after 20rem (about ten
options).`]}),(0,P.jsx)(t.h2,{id:`color`,children:`Color`}),(0,P.jsx)(h,{caption:`Field`,rows:[{part:`Field`,property:`Background`,token:`--color-surface-raised`},{part:`Field`,property:`Border`,token:`--color-border-input`},{part:`Label, input`,property:`Colour`,token:`--color-text`},{part:`Placeholder, helper, icons`,property:`Colour`,token:`--color-text-subtlest`},{part:`Required asterisk`,property:`Colour`,token:`--color-text-danger`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,P.jsx)(h,{caption:`Validation and read-only`,rows:[{part:`Border, helper, focus ring, error`,property:`Colour`,token:`--color-text-danger`},{part:`Border, helper, success`,property:`Colour`,token:`--color-text-success`},{part:`Field, read-only`,property:`Background`,token:`--color-background-input`}]}),(0,P.jsx)(h,{caption:`Options list`,rows:[{part:`List`,property:`Background`,token:`--color-surface-overlay`},{part:`List`,property:`Border`,token:`--color-border`},{part:`List`,property:`Shadow`,token:`--shadow-overlay`},{part:`Option`,property:`Colour`,token:`--color-text`},{part:`Option, highlighted`,property:`Background`,token:`--color-background-neutral`},{part:`Option, highlighted`,property:`Colour`,token:`--color-text`},{part:`Check`,property:`Colour`,token:`--color-text-brand`},{part:`No matches, Loading…`,property:`Colour`,token:`--color-text-subtlest`}]}),(0,P.jsx)(t.p,{children:`The field's edge is a light hairline, about 1.5:1, as in the Claude apps:
an approved exception to WCAG 1.4.11. The label, placeholder and focus
ring still mark the field. The matched text keeps the option's own colour,
so it holds full contrast on the highlighted row.`}),(0,P.jsx)(t.h2,{id:`states`,children:`States`}),(0,P.jsx)(f,{states:[{label:`Enabled`},{label:`Focus`,pseudo:`focus`},{label:`Filled`,content:(0,P.jsx)(F,{children:(0,P.jsx)(i,{of:T})})},{label:`Error`,content:(0,P.jsx)(F,{children:(0,P.jsx)(i,{of:y})})},{label:`Read-only`,content:(0,P.jsx)(F,{children:(0,P.jsx)(w,{label:`Team member`,options:[`Miya Burns`],defaultValue:`Miya Burns`,readOnly:!0})})},{label:`Disabled`,content:(0,P.jsx)(F,{children:(0,P.jsx)(i,{of:_})})},{label:`Loading`,content:(0,P.jsx)(F,{children:(0,P.jsx)(i,{of:v})})}],children:(0,P.jsx)(F,{children:(0,P.jsx)(i,{of:S})})}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,P.jsx)(t.code,{children:`--color-border-focused`}),` outline, 2px outside the field, drawn while
the input has focus, by pointer too: that is where typing goes. In the
error state the ring is `,(0,P.jsx)(t.code,{children:`--color-text-danger`}),`. The clear and open buttons draw
their own ring when tabbed to, so the field never shows two.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Hover`}),` changes nothing on the field; the clear and open buttons
darken from `,(0,P.jsx)(t.code,{children:`--color-text-subtlest`}),` to `,(0,P.jsx)(t.code,{children:`--color-text`}),`.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Error`}),` turns the edge and the helper `,(0,P.jsx)(t.code,{children:`--color-text-danger`}),` together; the
words are the message, the colour only points at it.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Read-only`}),` fills the field with `,(0,P.jsx)(t.code,{children:`--color-background-input`}),`; there is no clear
button.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Disabled`}),` is the enabled look at 50% opacity.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Loading`}),` adds a spinner before the buttons and says "Loading…" in the
list.`]}),`
`]}),(0,P.jsx)(t.h2,{id:`api`,children:`API`}),(0,P.jsx)(`div`,{style:{overflowX:`auto`},children:(0,P.jsx)(o,{of:O})}),(0,P.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Labels must be strings`}),`, not components: they are what is typed,
matched and shown in the input.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:(0,P.jsx)(t.code,{children:`emptyText`})}),` is added: an empty list needs to say why.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsxs)(t.strong,{children:[(0,P.jsx)(t.code,{children:`onValueChange`}),`, not `,(0,P.jsx)(t.code,{children:`onChange`})]}),`, and native names (`,(0,P.jsx)(t.code,{children:`disabled`}),`,
`,(0,P.jsx)(t.code,{children:`readOnly`}),`, `,(0,P.jsx)(t.code,{children:`required`}),`), as on Select.`]}),`
`]})]}),(0,P.jsxs)(p,{value:`guidelines`,children:[(0,P.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,P.jsx)(t.p,{children:`Use a Combobox to choose one option from a long list, when people already
know what they are looking for: a person, a country, a project. Typing a
few letters is faster than scrolling. It chooses from the list only; free
text that is not an option is not a value.`}),(0,P.jsx)(u,{do:(0,P.jsx)(i,{of:E}),doCaption:`A long list people know an entry of: type a few letters, pick it.`,dont:(0,P.jsx)(i,{of:k}),dontCaption:`Three options hidden behind typing. A Select or a radio group shows them all.`}),(0,P.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`For a handful of options.`}),` Under about seven, use a
`,(0,P.jsx)(t.a,{href:`?path=/docs/components-inputs-select--docs`,children:`Select`}),`, or a
`,(0,P.jsx)(t.a,{href:`?path=/docs/components-controls-radio--docs`,children:`Radio`}),` group when they
should all be visible.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`For free text.`}),` If any answer is valid, use a
`,(0,P.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),`; to filter
a page, use `,(0,P.jsx)(t.a,{href:`?path=/docs/components-inputs-search--docs`,children:`Search`}),`.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`For several values.`}),` It holds one; a multi-select is not built yet.`]}),`
`]}),(0,P.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,P.jsxs)(t.ul,{children:[`
`,(0,P.jsxs)(t.li,{children:[`The input has `,(0,P.jsx)(t.code,{children:`role="combobox"`}),`, `,(0,P.jsx)(t.code,{children:`aria-autocomplete="list"`}),` and
`,(0,P.jsx)(t.code,{children:`aria-expanded`}),`; the list is a `,(0,P.jsx)(t.code,{children:`listbox`}),` named by the field's label (or
`,(0,P.jsx)(t.code,{children:`aria-label`}),` when there is no visible label), as the input is.`]}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.strong,{children:`Keyboard:`}),` typing opens and filters; the first match is highlighted
so Enter picks it; Up and Down move; Escape closes, then clears.`]}),`
`,(0,P.jsx)(t.li,{children:`The match is marked by weight and underline, not colour, so it keeps
the option's full contrast on the highlighted row.`}),`
`,(0,P.jsx)(t.li,{children:`The open button is named "Show options" and is out of the tab order
(the input already opens the list); the clear button is "Clear
selection".`}),`
`,(0,P.jsxs)(t.li,{children:[(0,P.jsx)(t.code,{children:`validationState="error"`}),` sets `,(0,P.jsx)(t.code,{children:`aria-invalid`}),`, and the helper text is
the input's description.`]}),`
`,(0,P.jsx)(t.li,{children:`Loading and empty states are announced from the list.`}),`
`,(0,P.jsx)(t.li,{children:`After an option is picked with the pointer, the input loses focus and the
field returns to rest (no caret, no ring). A keyboard pick keeps focus in
the input, so keyboard and screen reader users are not dropped to the page.`}),`
`,(0,P.jsxs)(t.li,{children:[`Options are 32px tall; on touch screens (`,(0,P.jsx)(t.code,{children:`pointer: coarse`}),`) they grow to
44px, and the clear and open buttons get a 44×44px hit area.`]}),`
`]})]})]})]})}function N(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,P.jsx)(t,{...e,children:(0,P.jsx)(M,{...e})}):M(e)}var P,F;function I(){return(I=e((()=>{P=t(),r(),a(),g(),x(),D(),F=({children:e})=>(0,P.jsx)(`div`,{style:{inlineSize:`100%`,minInlineSize:0},children:e})})))()}I();export{F as Fit,N as default};