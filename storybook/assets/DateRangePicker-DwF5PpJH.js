import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{n as _,r as v}from"./DatePicker-CiyazhhJ.js";import{a as y,c as b,i as x,l as S,n as C,o as w,r as T,s as E,t as D,u as O}from"./DateRangePicker.stories-sJ1olPey.js";function k(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c,{of:C}),`
`,(0,j.jsx)(t.h1,{id:`date-range-picker`,children:`Date Range Picker`}),`
`,(0,j.jsxs)(d,{children:[(0,j.jsxs)(p,{value:`overview`,children:[(0,j.jsxs)(t.p,{children:[`A field for a span of days: a report period, a booking. Typed like
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-inputs-datepicker--docs`,children:`Date Picker`}),`, or picked
from two months side by side.`]}),(0,j.jsx)(m,{of:C}),(0,j.jsx)(s,{of:T}),(0,j.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,j.jsxs)(t.p,{children:[`Two sizes, `,(0,j.jsx)(t.code,{children:`sm`}),` and `,(0,j.jsx)(t.code,{children:`md`}),`, and the field's validation states, as on Date
Picker. With `,(0,j.jsx)(t.code,{children:`presets`}),`, whole periods sit beside the calendars.`]}),(0,j.jsxs)(t.table,{children:[(0,j.jsx)(t.thead,{children:(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.th,{children:`Option`}),(0,j.jsx)(t.th,{children:`Use for`})]})}),(0,j.jsxs)(t.tbody,{children:[(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.td,{children:`No presets`}),(0,j.jsx)(t.td,{children:`Ranges that rarely line up with a calendar period: a booking, a leave request.`})]}),(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.td,{children:(0,j.jsx)(t.code,{children:`presets`})}),(0,j.jsx)(t.td,{children:`Reports and filters, where people mostly want "Last month" or "This year".`})]})]})]}),(0,j.jsx)(s,{of:E}),(0,j.jsx)(s,{of:b}),(0,j.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,j.jsx)(t.p,{children:`Shipped in the same file as Date Picker, which it shares its field and
popover with. From npm, or copied into your project through the registry:`}),(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:`language-js`,children:`import { DateRangePicker } from 'marram/date-picker'
`})}),(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/date-picker.json
`})}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[`Source: `,(0,j.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/inputs/DatePicker.tsx`,rel:`nofollow`,children:`src/components/inputs/DatePicker.tsx`})]}),`
`,(0,j.jsxs)(t.li,{children:[`Spec: `,(0,j.jsx)(t.a,{href:`https://www.uiguideline.com/components/date-picker`,rel:`nofollow`,children:`uiguideline.com/components/date-picker`})]}),`
`,(0,j.jsxs)(t.li,{children:[`Behaviour: `,(0,j.jsx)(t.a,{href:`https://base-ui.com/react/components/popover`,rel:`nofollow`,children:`Base UI Popover`}),`, and the kit's `,(0,j.jsx)(t.a,{href:`?path=/docs/components-data-display-calendar--docs`,children:`Calendar`})]}),`
`,(0,j.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,j.jsxs)(p,{value:`specs`,children:[(0,j.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,j.jsx)(l,{parts:S,children:(0,j.jsx)(i,{of:D})}),(0,j.jsx)(t.p,{children:`The popover holds:`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Presets`}),`, with `,(0,j.jsx)(t.code,{children:`presets`}),`: whole periods, Today to Last year, in a
column beside the calendars, or a row above them on a narrow screen.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Calendars`}),`: two months that page on their own, opening on the
range's first and last months (this month and the next when empty). The
left one always stays before the right: paging one past the other
pushes the other along. One month on a screen narrower than 50rem.`]}),`
`]}),(0,j.jsx)(s,{of:w}),(0,j.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,j.jsxs)(t.p,{children:[`The field is Date Picker's: `,(0,j.jsx)(t.code,{children:`sm`}),` is 32px and `,(0,j.jsx)(t.code,{children:`md`}),` is 40px, with the same
padding, icon and type in both.`]}),(0,j.jsx)(h,{caption:`sm`,rows:[{part:`Field`,property:`Height`,token:`--control-md`},{part:`Field`,property:`Inline padding`,token:`--space-2-5`},{part:`Field`,property:`Corner radius`,token:`--control-md-radius-field`},{part:`Calendar button`,property:`Icon size`,token:`--icon-md`},{part:`Input`,property:`Font size`,token:`--text-body`}]}),(0,j.jsx)(h,{caption:`md`,rows:[{part:`Field`,property:`Height`,token:`--control-lg`},{part:`Field`,property:`Inline padding`,token:`--space-2-5`},{part:`Field`,property:`Corner radius`,token:`--control-md-radius-field`},{part:`Calendar button`,property:`Icon size`,token:`--icon-md`},{part:`Input`,property:`Font size`,token:`--text-body`}]}),(0,j.jsx)(h,{caption:`Popover, every size`,rows:[{part:`Popover`,property:`Corner radius`,token:`--radius-lg`},{part:`Each month`,property:`Padding`,token:`--space-4`},{part:`Presets`,property:`Padding`,token:`--space-2`},{part:`Preset`,property:`Minimum height`,token:`--control-md`},{part:`Preset`,property:`Corner radius`,token:`--radius-control`},{part:`Preset`,property:`Font size`,token:`--text-body-sm`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`}]}),(0,j.jsxs)(t.p,{children:[`Presets are 2px apart and at least 7rem wide in the column. The field is
20rem wide unless `,(0,j.jsx)(t.code,{children:`isFullWidth`}),`; a range is longer than one date, so give
it room or `,(0,j.jsx)(t.code,{children:`isFullWidth`}),`.`]}),(0,j.jsx)(t.h2,{id:`color`,children:`Color`}),(0,j.jsx)(h,{caption:`Field`,rows:[{part:`Field`,property:`Background`,token:`--color-surface-raised`},{part:`Field`,property:`Border`,token:`--color-border-input`},{part:`Label, input`,property:`Colour`,token:`--color-text`},{part:`Placeholder, helper, calendar icon`,property:`Colour`,token:`--color-text-subtlest`},{part:`Border, helper, error`,property:`Colour`,token:`--color-text-danger`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,j.jsx)(h,{caption:`Popover`,rows:[{part:`Panel`,property:`Background`,token:`--color-surface-overlay`},{part:`Panel`,property:`Border`,token:`--color-border`},{part:`Panel`,property:`Shadow`,token:`--shadow-overlay`},{part:`Dividers between presets and months`,property:`Colour`,token:`--color-border`},{part:`Preset`,property:`Colour`,token:`--color-text`},{part:`Preset, hover and pressed`,property:`Background`,token:`--color-background-neutral`},{part:`Preset, hover and pressed`,property:`Colour`,token:`--color-text`}]}),(0,j.jsxs)(t.p,{children:[`The days and the band between the range's ends are the
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-data-display-calendar--docs`,children:`Calendar`}),`'s colours.`]}),(0,j.jsx)(t.h2,{id:`states`,children:`States`}),(0,j.jsx)(f,{states:[{label:`Empty`,content:(0,j.jsx)(_,{label:`Period`,locale:`en-GB`})},{label:`Filled`},{label:`Focus`,pseudo:`focus`},{label:`Error`,content:(0,j.jsx)(_,{label:`Period`,locale:`en-GB`,validationState:`error`,helperText:`Choose both ends.`})},{label:`Read-only`,content:(0,j.jsx)(_,{label:`Period`,locale:`en-GB`,defaultValue:{start:new Date(2026,8,7),end:new Date(2026,8,13)},readOnly:!0})},{label:`Disabled`,content:(0,j.jsx)(_,{label:`Period`,locale:`en-GB`,defaultValue:{start:new Date(2026,8,7),end:new Date(2026,8,13)},disabled:!0})}],children:(0,j.jsx)(_,{label:`Period`,locale:`en-GB`,defaultValue:{start:new Date(2026,8,7),end:new Date(2026,8,13)}})}),(0,j.jsxs)(t.p,{children:[`The field's states are Date Picker's: a `,(0,j.jsx)(t.code,{children:`--color-border-focused`}),` outline while the input
has focus, `,(0,j.jsx)(t.code,{children:`--color-text-danger`}),` in error (also while the typed text is not a
range), `,(0,j.jsx)(t.code,{children:`--color-background-input`}),` and no calendar button when read-only, 50%
opacity when disabled. A preset matching the picked range
stays in its pressed look.`]}),(0,j.jsx)(t.h2,{id:`api`,children:`API`}),(0,j.jsx)(`div`,{style:{overflowX:`auto`},children:(0,j.jsx)(o,{of:C})}),(0,j.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Either way round.`}),` The first click starts the range, the second
ends it; a second click before the first swaps them. So does typing
the later date first.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Presets are whole periods.`}),` "This month" is the 1st to the last
day, not the 1st to today, so a preset reads the same all month.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`No Cancel or Apply.`}),` A range applies, and the popover closes, once
both ends are in; Escape before the second click leaves the value as
it was.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`No hover preview.`}),` The band shows once both ends are in; add a
preview if testing shows people lose track of the first click.`]}),`
`]})]}),(0,j.jsxs)(p,{value:`guidelines`,children:[(0,j.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,j.jsxs)(t.p,{children:[`Use a Date Range Picker when the two dates are one thing: a period to
report on, a stay, a sprint. Both ends are set together, start never after
end, and the value is complete or `,(0,j.jsx)(t.code,{children:`null`}),`.`]}),(0,j.jsx)(u,{do:(0,j.jsx)(i,{of:x}),doCaption:`One field for one period: it cannot be half filled or set back to front.`,dont:(0,j.jsx)(i,{of:y}),dontCaption:`Two Date Pickers for one period: here the end is before the start, and nothing stops it.`}),(0,j.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`For one date.`}),` Use a
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-inputs-datepicker--docs`,children:`Date Picker`}),`.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`When one end is optional`}),`, such as a contract with no end date. The
range needs both ends; use two Date Pickers and check their order
yourself.`]}),`
`]}),(0,j.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[`As Date Picker: a labelled text box, an error state with the expected
pattern, and the calendars in a dialog named "Choose dates". Without a
visible label, pass `,(0,j.jsx)(t.code,{children:`aria-label`}),` to name the input.`]}),`
`,(0,j.jsx)(t.li,{children:`The calendar button is named "Choose dates", with the current range
when there is one.`}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`readOnly`}),` works as on Date Picker: `,(0,j.jsx)(t.code,{children:`readonly`}),` on the input, no
calendar button, and a click or Alt+Down opens nothing.`]}),`
`,(0,j.jsxs)(t.li,{children:[`Every day in the range has `,(0,j.jsx)(t.code,{children:`aria-selected`}),`, so the span is announced,
not only its ends.`]}),`
`,(0,j.jsx)(t.li,{children:`A day of the month either side is decoration: hidden from assistive
tech and not pickable, so each day is one button.`}),`
`,(0,j.jsxs)(t.li,{children:[`Presets are toggle buttons in a group named "Presets"; the one that
matches the picked range is `,(0,j.jsx)(t.code,{children:`aria-pressed`}),`.`]}),`
`,(0,j.jsx)(t.li,{children:`After both ends are in, the field goes back to rest, as Date Picker's
does after a pick.`}),`
`]})]})]})]})}function A(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),r(),a(),g(),v(),O()})))()}M();export{A as default};