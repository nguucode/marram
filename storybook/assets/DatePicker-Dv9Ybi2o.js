import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{r as _,t as v}from"./DatePicker-CiyazhhJ.js";import{a as y,c as b,i as x,l as S,n as C,o as w,r as T,s as E,t as D,u as O}from"./DatePicker.stories-DCx3RYbQ.js";function k(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c,{of:C}),`
`,(0,j.jsx)(t.h1,{id:`date-picker`,children:`Date Picker`}),`
`,(0,j.jsxs)(d,{children:[(0,j.jsxs)(p,{value:`overview`,children:[(0,j.jsx)(t.p,{children:`A date field: type the date, or pick it from a calendar.`}),(0,j.jsx)(m,{of:C}),(0,j.jsx)(s,{of:T}),(0,j.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,j.jsxs)(t.p,{children:[`Two sizes, `,(0,j.jsx)(t.code,{children:`sm`}),` and `,(0,j.jsx)(t.code,{children:`md`}),`, and the field's validation states, as on
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),`. The typed
order follows `,(0,j.jsx)(t.code,{children:`locale`}),`: day first in `,(0,j.jsx)(t.code,{children:`en-GB`}),` and `,(0,j.jsx)(t.code,{children:`vi-VN`}),`, month first in
`,(0,j.jsx)(t.code,{children:`en-US`}),`. The form always gets `,(0,j.jsx)(t.code,{children:`yyyy-mm-dd`}),`.`]}),(0,j.jsxs)(t.table,{children:[(0,j.jsx)(t.thead,{children:(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.th,{children:`Locale`}),(0,j.jsx)(t.th,{children:`Typed as`})]})}),(0,j.jsxs)(t.tbody,{children:[(0,j.jsxs)(t.tr,{children:[(0,j.jsxs)(t.td,{children:[(0,j.jsx)(t.code,{children:`en-GB`}),`, `,(0,j.jsx)(t.code,{children:`vi-VN`})]}),(0,j.jsx)(t.td,{children:(0,j.jsx)(t.code,{children:`dd/mm/yyyy`})})]}),(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.td,{children:(0,j.jsx)(t.code,{children:`en-US`})}),(0,j.jsx)(t.td,{children:(0,j.jsx)(t.code,{children:`mm/dd/yyyy`})})]})]})]}),(0,j.jsx)(s,{of:E}),(0,j.jsx)(s,{of:b}),(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`min`}),`, `,(0,j.jsx)(t.code,{children:`max`}),` and `,(0,j.jsx)(t.code,{children:`isDateDisabled`}),` limit what can be picked or typed:`]}),(0,j.jsx)(s,{of:w}),(0,j.jsxs)(t.p,{children:[`For a span of days, see
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-inputs-daterangepicker--docs`,children:`Date Range Picker`}),`.`]}),(0,j.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,j.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:`language-js`,children:`import { DatePicker } from 'marram/date-picker'
`})}),(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/date-picker.json
`})}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[`Source: `,(0,j.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/inputs/DatePicker.tsx`,rel:`nofollow`,children:`src/components/inputs/DatePicker.tsx`})]}),`
`,(0,j.jsxs)(t.li,{children:[`Spec: `,(0,j.jsx)(t.a,{href:`https://www.uiguideline.com/components/date-picker`,rel:`nofollow`,children:`uiguideline.com/components/date-picker`})]}),`
`,(0,j.jsxs)(t.li,{children:[`Behaviour: `,(0,j.jsx)(t.a,{href:`https://base-ui.com/react/components/popover`,rel:`nofollow`,children:`Base UI Popover`}),`, and the kit's `,(0,j.jsx)(t.a,{href:`?path=/docs/components-data-display-calendar--docs`,children:`Calendar`})]}),`
`,(0,j.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,j.jsxs)(p,{value:`specs`,children:[(0,j.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,j.jsx)(l,{parts:S,children:(0,j.jsx)(i,{of:D})}),(0,j.jsxs)(t.p,{children:[`The calendar opens in a popover 8px under the field, aligned to its
start: a `,(0,j.jsx)(t.a,{href:`?path=/docs/components-data-display-calendar--docs`,children:`Calendar`}),`
in a panel. Its days, header and paging buttons are specified there.`]}),(0,j.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,j.jsxs)(t.p,{children:[`The field is the kit's field: `,(0,j.jsx)(t.code,{children:`sm`}),` is 32px and `,(0,j.jsx)(t.code,{children:`md`}),` is 40px, one step
taller than a Button, with the same 10px padding, icon and type in both.
The calendar button is a 16px icon in a 24px target, pulled into the
padding so the icon ends 10px inside the edge, 8px after the date.`]}),(0,j.jsx)(h,{caption:`sm`,rows:[{part:`Field`,property:`Height`,token:`--control-md`},{part:`Field`,property:`Inline padding`,token:`--space-2-5`},{part:`Field`,property:`Corner radius`,token:`--control-md-radius-field`},{part:`Field`,property:`Gap`,token:`--space-2`},{part:`Calendar button`,property:`Icon size`,token:`--icon-md`},{part:`Input`,property:`Font size`,token:`--text-body`},{part:`Input`,property:`Line height`,token:`--leading-body`}]}),(0,j.jsx)(h,{caption:`md`,rows:[{part:`Field`,property:`Height`,token:`--control-lg`},{part:`Field`,property:`Inline padding`,token:`--space-2-5`},{part:`Field`,property:`Corner radius`,token:`--control-md-radius-field`},{part:`Field`,property:`Gap`,token:`--space-2`},{part:`Calendar button`,property:`Icon size`,token:`--icon-md`},{part:`Input`,property:`Font size`,token:`--text-body`},{part:`Input`,property:`Line height`,token:`--leading-body`}]}),(0,j.jsx)(h,{caption:`Every size`,rows:[{part:`Label and helper`,property:`Gap to the field`,token:`--space-stack`},{part:`Label and helper`,property:`Font size`,token:`--text-body-sm`},{part:`Popover`,property:`Padding`,token:`--space-4`},{part:`Popover`,property:`Corner radius`,token:`--radius-lg`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Calendar button`,property:`Width and height`,token:`--control-sm`},{part:`Calendar button`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,j.jsxs)(t.p,{children:[`The field is 20rem wide unless `,(0,j.jsx)(t.code,{children:`isFullWidth`}),`. The popover never grows
wider than the screen less 16px a side.`]}),(0,j.jsx)(t.h2,{id:`color`,children:`Color`}),(0,j.jsx)(h,{caption:`Field`,rows:[{part:`Field`,property:`Background`,token:`--color-surface-raised`},{part:`Field`,property:`Border`,token:`--color-border-input`},{part:`Label, input`,property:`Colour`,token:`--color-text`},{part:`Placeholder, helper, calendar icon`,property:`Colour`,token:`--color-text-subtlest`},{part:`Required asterisk`,property:`Colour`,token:`--color-text-danger`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,j.jsx)(h,{caption:`Validation`,rows:[{part:`Border, helper, focus ring, error`,property:`Colour`,token:`--color-text-danger`},{part:`Border, helper, success`,property:`Colour`,token:`--color-text-success`}]}),(0,j.jsx)(h,{caption:`Popover`,rows:[{part:`Panel`,property:`Background`,token:`--color-surface-overlay`},{part:`Panel`,property:`Colour`,token:`--color-text`},{part:`Panel`,property:`Border`,token:`--color-border`},{part:`Panel`,property:`Shadow`,token:`--shadow-overlay`}]}),(0,j.jsx)(t.p,{children:`The field's edge is a light hairline, about 1.5:1: an approved exception
to WCAG 1.4.11, as on every kit field. The calendar's own colours are on
its page.`}),(0,j.jsx)(t.h2,{id:`states`,children:`States`}),(0,j.jsx)(f,{states:[{label:`Empty`,content:(0,j.jsx)(v,{label:`Start date`,locale:`en-GB`})},{label:`Filled`},{label:`Focus`,pseudo:`focus`},{label:`Error`,content:(0,j.jsx)(v,{label:`Start date`,locale:`en-GB`,validationState:`error`,helperText:`Enter a date as dd/mm/yyyy.`})},{label:`Read-only`,content:(0,j.jsx)(v,{label:`Start date`,locale:`en-GB`,defaultValue:new Date(2026,8,18),readOnly:!0})},{label:`Disabled`,content:(0,j.jsx)(v,{label:`Start date`,locale:`en-GB`,defaultValue:new Date(2026,8,18),disabled:!0})}],children:(0,j.jsx)(v,{label:`Start date`,locale:`en-GB`,defaultValue:new Date(2026,8,18)})}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,j.jsx)(t.code,{children:`--color-border-focused`}),` outline, 2px outside the field, drawn while
the input has focus, by pointer too. In the error state the ring is
`,(0,j.jsx)(t.code,{children:`--color-text-danger`}),`. The calendar button draws its own ring when tabbed to.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Error`}),` turns the edge and the helper `,(0,j.jsx)(t.code,{children:`--color-text-danger`}),`. It is also
shown on its own while the typed text is not a date, or is outside
`,(0,j.jsx)(t.code,{children:`min`}),` and `,(0,j.jsx)(t.code,{children:`max`}),`: the helper then gives the expected pattern.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Hover`}),` changes nothing on the field; the calendar icon darkens from
`,(0,j.jsx)(t.code,{children:`--color-text-subtlest`}),` to `,(0,j.jsx)(t.code,{children:`--color-text`}),`.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Read-only`}),` fills the box with `,(0,j.jsx)(t.code,{children:`--color-background-input`}),`, as every
Marram field does. The input stays focusable and copyable and its
value is submitted; the calendar icon stays but is not a button, so the
calendar never opens. Say why in `,(0,j.jsx)(t.code,{children:`helperText`}),`.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Disabled`}),` is the enabled look at 50% opacity; the calendar button is
disabled with it.`]}),`
`]}),(0,j.jsx)(t.h2,{id:`api`,children:`API`}),(0,j.jsx)(`div`,{style:{overflowX:`auto`},children:(0,j.jsx)(o,{of:C})}),(0,j.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Typing is first-class.`}),` Many people type a known date faster than
they can page to it. Any separator works (`,(0,j.jsx)(t.code,{children:`3.10.26`}),`, `,(0,j.jsx)(t.code,{children:`3/10/2026`}),`); the
field reformats on blur or Enter.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`An impossible date is kept, not guessed.`}),` `,(0,j.jsx)(t.code,{children:`31/02/2026`}),` stays as
typed, the field turns to its error state and the helper shows the
expected pattern; nothing is reported until it is a real date.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`A click in the input opens the calendar, and keeps focus there.`}),`
Typing carries on with the month in view; the calendar button and
Alt+Down move focus into the calendar instead.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`The form gets ISO.`}),` Whatever the display order, `,(0,j.jsx)(t.code,{children:`name`}),` submits
`,(0,j.jsx)(t.code,{children:`yyyy-mm-dd`}),`, so the server never has to guess the locale.`]}),`
`]}),(0,j.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsxs)(t.strong,{children:[(0,j.jsx)(t.code,{children:`onValueChange`}),`, not `,(0,j.jsx)(t.code,{children:`onChange`})]}),`, with a `,(0,j.jsx)(t.code,{children:`Date`}),` or `,(0,j.jsx)(t.code,{children:`null`}),`, as the
kit's other value fields.`]}),`
`]})]}),(0,j.jsxs)(p,{value:`guidelines`,children:[(0,j.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,j.jsxs)(t.p,{children:[`Use a Date Picker for one date: a start date, a due date, a booking. Let
people type it when they know it, and pick it when they want to see the
week around it. Set `,(0,j.jsx)(t.code,{children:`min`}),`, `,(0,j.jsx)(t.code,{children:`max`}),` or `,(0,j.jsx)(t.code,{children:`isDateDisabled`}),` so a date that cannot
be used cannot be chosen, rather than refusing it after submit.`]}),(0,j.jsx)(u,{do:(0,j.jsx)(i,{of:x}),doCaption:`The empty field shows the pattern to type, in the locale's order.`,dont:(0,j.jsx)(i,{of:y}),dontCaption:`An example date as the placeholder reads as a value already filled in.`}),(0,j.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`For a span of days.`}),` Use a
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-inputs-daterangepicker--docs`,children:`Date Range Picker`}),`:
one field, both ends, never back to front.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`To show a month on the page.`}),` Use a
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-data-display-calendar--docs`,children:`Calendar`}),` inline.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`For a time of day.`}),` The picker holds a date only.`]}),`
`]}),(0,j.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[`The input is a labelled text box with `,(0,j.jsx)(t.code,{children:`inputmode="numeric"`}),` for a
number keypad; while the text is not a valid date it has
`,(0,j.jsx)(t.code,{children:`aria-invalid`}),` and the helper explains the format. Without a visible
label, pass `,(0,j.jsx)(t.code,{children:`aria-label`}),` to name the input.`]}),`
`,(0,j.jsx)(t.li,{children:`The calendar button is named "Choose date", with the current date when
there is one. Alt+Down in the input opens it too.`}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`readOnly`}),` puts `,(0,j.jsx)(t.code,{children:`readonly`}),` on the input: screen readers announce it,
it stays in the tab order, and there is no calendar button; a click or
Alt+Down opens nothing.`]}),`
`,(0,j.jsx)(t.li,{children:`The calendar opens as a dialog named "Choose date" with focus on the
selected day; Escape closes it without a change.`}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`After a pick the field goes back to rest.`}),` Picked with the pointer,
focus leaves the field (no caret, no ring), as in Combobox. Picked with
the keyboard, focus returns to where it came from (the button, or the
input), so keyboard and screen reader users are not dropped to the page.`]}),`
`,(0,j.jsx)(t.li,{children:`The field and calendar's own labels ("Choose date", "Previous month")
are in English, like the rest of the kit's built-in labels.`}),`
`,(0,j.jsxs)(t.li,{children:[`On touch screens (`,(0,j.jsx)(t.code,{children:`pointer: coarse`}),`) the calendar button gets a 44×44px
hit area without the field growing.`]}),`
`]})]})]})]})}function A(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),r(),a(),g(),_(),O()})))()}M();export{A as default};