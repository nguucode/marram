import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{a as _,o as v,r as y}from"./InputField-BYpHjEjn.js";import{_ as b,a as x,c as S,d as C,f as w,g as T,h as E,i as D,l as O,m as k,n as A,o as j,p as M,r as N,s as P,t as F,u as I}from"./Field.stories-yc3AknLm.js";function L(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(c,{of:C}),`
`,(0,z.jsx)(t.h1,{id:`field`,children:`Field`}),`
`,(0,z.jsxs)(d,{children:[(0,z.jsxs)(p,{value:`overview`,children:[(0,z.jsx)(t.p,{children:`The label, required mark, info note and helper text for a control
that has none of its own.`}),(0,z.jsx)(m,{of:C}),(0,z.jsx)(t.p,{children:`Every Marram control (Text Input, Select, Checkbox and the rest)
already carries this anatomy. Field is for the control that does not: a
native element the kit has no component for, a Base UI primitive, or one
of your own. It wires the label, description and invalid state to it
through Base UI Field.`}),(0,z.jsx)(s,{of:A}),(0,z.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,z.jsx)(t.p,{children:`There is one appearance. What changes is which optional parts are there.`}),(0,z.jsx)(s,{of:w}),(0,z.jsxs)(t.table,{children:[(0,z.jsx)(t.thead,{children:(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.th,{children:`Part`}),(0,z.jsx)(t.th,{children:`Use for`})]})}),(0,z.jsxs)(t.tbody,{children:[(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`helperText`})}),(0,z.jsx)(t.td,{children:`The format, limits or purpose, in a line; the error message when invalid.`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`labelInfo`})}),(0,z.jsx)(t.td,{children:`A longer rule or explanation most people do not need every time: behind an info button, so the form stays short.`})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`validationState`})}),(0,z.jsxs)(t.td,{children:[(0,z.jsx)(t.code,{children:`error`}),` when the value cannot be accepted: the helper text says what to change, and it and the edge turn red. `,(0,z.jsx)(t.code,{children:`success`}),` for a value checked and accepted.`]})]}),(0,z.jsxs)(t.tr,{children:[(0,z.jsx)(t.td,{children:(0,z.jsx)(t.code,{children:`required`})}),(0,z.jsx)(t.td,{children:`An asterisk after the label.`})]})]})]}),(0,z.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,z.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-js`,children:`import { Field } from 'marram/field'
`})}),(0,z.jsx)(t.pre,{children:(0,z.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/field.json
`})}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[`Source: `,(0,z.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/inputs/Field.tsx`,rel:`nofollow`,children:`src/components/inputs/Field.tsx`})]}),`
`,(0,z.jsxs)(t.li,{children:[`Spec: `,(0,z.jsx)(t.a,{href:`https://www.uiguideline.com/components/text-input`,rel:`nofollow`,children:`uiguideline.com/components/text-input`}),` (the label and helper parts)`]}),`
`,(0,z.jsxs)(t.li,{children:[`Behaviour: `,(0,z.jsx)(t.a,{href:`https://base-ui.com/react/components/field`,rel:`nofollow`,children:`Base UI Field`})]}),`
`,(0,z.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,z.jsxs)(p,{value:`specs`,children:[(0,z.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,z.jsx)(l,{parts:M,children:(0,z.jsx)(i,{of:F})}),(0,z.jsx)(t.p,{children:`The control is whatever you put inside; in these stories it is a native
time input in the same box as Text Input.`}),(0,z.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,z.jsx)(h,{caption:`Every field`,rows:[{part:`Label and helper text`,property:`Font size`,token:`--text-body-sm`},{part:`Label and helper text`,property:`Line height`,token:`--leading-body-sm`},{part:`Label`,property:`Font weight`,token:`--font-weight-label`},{part:`Label, control, helper`,property:`Gap between`,token:`--space-stack`},{part:`Label and info button`,property:`Gap`,token:`--space-1`},{part:`Info button`,property:`Icon size`,token:`--icon-sm`},{part:`Info button`,property:`Touch target`,token:`--target-coarse`},{part:`Info note`,property:`Block padding`,token:`--space-2`},{part:`Info note`,property:`Inline padding`,token:`--space-3`},{part:`Info note`,property:`Corner radius`,token:`--radius-lg`}]}),(0,z.jsxs)(t.p,{children:[`The field is 20rem wide, capped at its container; with `,(0,z.jsx)(t.code,{children:`isFullWidth`}),` it
fills the container. The info note is at most 22rem wide and opens above
the button.`]}),(0,z.jsx)(t.h2,{id:`color`,children:`Color`}),(0,z.jsx)(h,{caption:`default`,rows:[{part:`Label`,property:`Colour`,token:`--color-text`},{part:`Required asterisk`,property:`Colour`,token:`--color-text-danger`},{part:`Info button`,property:`Colour`,token:`--color-text-subtlest`},{part:`Helper text`,property:`Colour`,token:`--color-text-subtlest`},{part:`Info note`,property:`Background`,token:`--color-surface-overlay`},{part:`Info note`,property:`Border`,token:`--color-border`},{part:`Info note`,property:`Shadow`,token:`--shadow-overlay`}]}),(0,z.jsx)(h,{caption:`read-only`,rows:[{part:`Field box`,property:`Background`,token:`--color-background-input`}]}),(0,z.jsx)(h,{caption:`error`,rows:[{part:`Helper text`,property:`Colour`,token:`--color-text-danger`},{part:`Field box edge`,property:`Colour`,token:`--color-text-danger`}]}),(0,z.jsx)(t.h2,{id:`states`,children:`States`}),(0,z.jsx)(f,{states:[{label:`Enabled`},{label:`Error`,content:(0,z.jsx)(E,{label:`Start time`,validationState:`error`,helperText:`Enter a time between 06:00 and 22:00.`,children:(0,z.jsx)(t.span,{className:y(`md`),children:(0,z.jsx)(T,{type:`time`,className:v.control})})})},{label:`Read-only`,content:(0,z.jsx)(E,{label:`Start time`,helperText:`Set by the rota.`,children:(0,z.jsx)(t.span,{className:y(`md`),children:(0,z.jsx)(T,{defaultValue:`09:00`,readOnly:!0,className:v.control})})})},{label:`Disabled`,content:(0,z.jsx)(E,{label:`Start time`,helperText:`Pick a shift first.`,disabled:!0,children:(0,z.jsx)(t.span,{className:y(`md`),children:(0,z.jsx)(T,{type:`time`,className:v.control})})})}],children:(0,z.jsx)(E,{label:`Start time`,labelInfo:`When the shift starts.`,helperText:`HH:MM`,children:(0,z.jsx)(`span`,{className:y(`md`),children:(0,z.jsx)(T,{type:`time`,className:v.control})})})}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Hover`}),` and `,(0,z.jsx)(t.strong,{children:`focus`}),` belong to the control. The info button turns
`,(0,z.jsx)(t.code,{children:`--color-text`}),` on hover and draws the `,(0,z.jsx)(t.code,{children:`--color-border-focused`}),` outline on keyboard focus.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Error`}),` colours the helper text, which then says what to change, and
the edge of a field box inside.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Read-only`}),` is set on the control (`,(0,z.jsx)(t.code,{children:`readOnly`}),`), not on the Field.
A field box with a read-only control inside is filled with
`,(0,z.jsx)(t.code,{children:`--color-background-input`}),`; the edge, label and helper stay as they are.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Disabled`}),` disables the control; how it dims is the control's own. The
info button stays active: the note may say why the field is disabled.`]}),`
`]}),(0,z.jsx)(t.h2,{id:`api`,children:`API`}),(0,z.jsx)(`div`,{style:{overflowX:`auto`},children:(0,z.jsx)(o,{of:C})}),(0,z.jsxs)(t.p,{children:[(0,z.jsx)(t.code,{children:`FieldControl`}),` is Base UI's `,(0,z.jsx)(t.code,{children:`Field.Control`}),`: an `,(0,z.jsx)(t.code,{children:`<input>`}),` by default, any
element through `,(0,z.jsx)(t.code,{children:`render`}),`, with the label, description and invalid state
wired to it. A Base UI control (Slider, Number Field, Checkbox) inside a
Field wires itself.`]}),(0,z.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`No separate error part.`}),` As in every Marram control, the error
is the helper text in the error state (the kit's API convention), so a
field never shows a hint and an error at once.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`The info note is a toggletip`}),`, opened by press or Enter, not a
hover tooltip: tooltips do not open on touch.`]}),`
`]})]}),(0,z.jsxs)(p,{value:`guidelines`,children:[(0,z.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,z.jsxs)(t.p,{children:[`Use a Field round a control that has no label of its own. Keep the helper
text to a line; put a longer rule behind `,(0,z.jsx)(t.code,{children:`labelInfo`}),`.`]}),(0,z.jsx)(u,{do:(0,z.jsx)(i,{of:D}),doCaption:`The format in a line under the control; the full rule behind the info button.`,dont:(0,z.jsx)(i,{of:O}),dontCaption:`A paragraph of helper text pushes every field below it down, on every visit.`}),(0,z.jsxs)(t.p,{children:[`An `,(0,z.jsx)(t.strong,{children:`error`}),` says what to change, not only that something is wrong.`]}),(0,z.jsx)(u,{do:(0,z.jsx)(i,{of:j}),doCaption:`The error names the allowed range.`,dont:(0,z.jsx)(i,{of:I}),dontCaption:`'Invalid value' leaves people guessing what to change.`}),(0,z.jsx)(t.h3,{id:`read-only`,children:`Read-only`}),(0,z.jsxs)(t.p,{children:[`A value people need to see but cannot change here (set by a rule,
another team or their role) stays a field: put `,(0,z.jsx)(t.code,{children:`readOnly`}),` on the control
and say in `,(0,z.jsx)(t.code,{children:`helperText`}),` why, and who can change it. Every Marram
control takes `,(0,z.jsx)(t.code,{children:`readOnly`}),`. The boxed fields (Text Input, Textarea,
Search, Number Input, Select, Combobox, Date Picker, Date Range Picker)
all look the same: a filled box, still focusable, the value selectable
and submitted with the form. Checkbox, Radio, Switch and Rating keep
their look, since their mark is the value, and only stop changing.`]}),(0,z.jsx)(u,{do:(0,z.jsx)(i,{of:x}),doCaption:`Read-only: readable, focusable, copyable, and it says who can change it.`,dont:(0,z.jsx)(i,{of:P}),dontCaption:`Disabled: dimmed below readable contrast, skipped by Tab, not submitted.`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Not disabled.`}),` A locked value is still read and copied; a disabled
one is not (Disabled, below, is for "not yet").`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`No lock icon by default.`}),` The fill already marks the state, and an
icon would need its own name for screen readers; the helper text says
more than a lock.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`A whole record that cannot be edited`}),` is not a form of read-only
fields: show it as a description list (`,(0,z.jsx)(t.code,{children:`<dl>`}),`), label and value with no
box.`]}),`
`]}),(0,z.jsx)(t.h3,{id:`disabled`,children:`Disabled`}),(0,z.jsxs)(t.p,{children:[`Disable a control only while it does not apply yet, and people can change
that on the same screen: a choice earlier in the form, a step not done.
Say what turns it on, in `,(0,z.jsx)(t.code,{children:`helperText`}),` or in the control that does it.`]}),(0,z.jsx)(u,{do:(0,z.jsx)(i,{of:N}),doCaption:`Disabled for now, and the helper text says what turns it on.`,dont:(0,z.jsx)(i,{of:S}),dontCaption:`Nothing says why it is off or how to turn it on.`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Disable for "not yet", hide for "not you", read-only for "not
changeable here".`}),` An action or a field people's role never lets them
use, and that they do not need to read, is left out, not shown disabled:
a control they can never turn on is noise and a support ticket. A value
they need to see but may not change is read-only.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`No tooltip for the reason.`}),` A disabled control leaves the tab order,
so a tooltip on it never opens by keyboard or on touch. Put the reason
in text people can see; `,(0,z.jsx)(t.code,{children:`labelInfo`}),` stays active on a disabled Field.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Dimmed on purpose.`}),` Disabled controls are exempt from contrast
rules and drop below readable contrast, one more reason not to disable
a value people need to read.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Fields that turn off together`}),` each take `,(0,z.jsx)(t.code,{children:`disabled`}),`, and one line of
text near them says what turns them on.`]}),`
`]}),(0,z.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`Round a Marram control.`}),` Text Input, Textarea, Number Input,
Select, Combobox, Date Picker, Checkbox, Switch and Radio have their own
label, helper text and validation; a Field round one gives it two labels.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.strong,{children:`For a group of controls`}),` under one name, use a `,(0,z.jsx)(t.code,{children:`<fieldset>`}),` and
`,(0,z.jsx)(t.code,{children:`<legend>`}),`, or Radio's own group.`]}),`
`]}),(0,z.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,z.jsxs)(t.ul,{children:[`
`,(0,z.jsxs)(t.li,{children:[`The label is a real `,(0,z.jsx)(t.code,{children:`<label>`}),` for the control: it is the control's
accessible name, and clicking it focuses the control.`]}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.code,{children:`helperText`}),` is the control's description (`,(0,z.jsx)(t.code,{children:`aria-describedby`}),`), read
after its name.`]}),`
`,(0,z.jsxs)(t.li,{children:[`A read-only control keeps its place in the tab order and has the
`,(0,z.jsx)(t.code,{children:`readonly`}),` attribute, so screen readers announce it as read-only;
typing does not change the value, and the reason in `,(0,z.jsx)(t.code,{children:`helperText`}),` is read
as its description.`]}),`
`,(0,z.jsx)(t.li,{children:`A disabled control is left out of the tab order; its helper text is still its description, so a screen reader browsing to it
hears why.`}),`
`,(0,z.jsxs)(t.li,{children:[(0,z.jsx)(t.code,{children:`validationState="error"`}),` sets `,(0,z.jsx)(t.code,{children:`aria-invalid="true"`}),` on the control.
Colour is never the only signal: the helper text says what is wrong.`]}),`
`,(0,z.jsxs)(t.li,{children:[`The required asterisk is `,(0,z.jsx)(t.code,{children:`aria-hidden`}),`; put `,(0,z.jsx)(t.code,{children:`required`}),` on the control so
screen readers announce it.`]}),`
`,(0,z.jsxs)(t.li,{children:[`The info button is named by `,(0,z.jsx)(t.code,{children:`infoLabel`}),` ("More information") and
described by the label, so a list of buttons tells which field each is
for. It sits outside the `,(0,z.jsx)(t.code,{children:`<label>`}),`: pressing it opens the note without
focusing the control. Enter or a press opens the note, a dialog named by
the label; Escape closes it and returns focus to the button.`]}),`
`]})]})]})]})}function R(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,z.jsx)(t,{...e,children:(0,z.jsx)(L,{...e})}):L(e)}var z;function B(){return(B=e((()=>{z=t(),r(),a(),g(),b(),_(),k()})))()}B();export{R as default};