import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{a as _,c as v,d as y,i as b,l as x,n as S,o as C,r as w,s as T,t as E,u as D}from"./OTPInput.stories-C1FiBJbM.js";function O(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c,{of:_}),`
`,(0,A.jsx)(t.h1,{id:`otp-input`,children:`OTP Input`}),`
`,(0,A.jsxs)(d,{children:[(0,A.jsxs)(p,{value:`overview`,children:[(0,A.jsx)(t.p,{children:`A short one-time code, typed or pasted into a row of single-character
cells: the code from a text message, an email or an authenticator app.`}),(0,A.jsx)(m,{of:_}),(0,A.jsx)(s,{of:S}),(0,A.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,A.jsx)(t.p,{children:`One appearance, a row of small outlined boxes. What changes is the size,
whether the cells are grouped, and whether there is a resend button.`}),(0,A.jsx)(s,{of:T}),(0,A.jsxs)(t.table,{children:[(0,A.jsx)(t.thead,{children:(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.th,{children:`Size`}),(0,A.jsx)(t.th,{children:`Use for`})]})}),(0,A.jsxs)(t.tbody,{children:[(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`md`})}),(0,A.jsx)(t.td,{children:`Sign-in, verification and confirmation screens: the default.`})]}),(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`sm`})}),(0,A.jsx)(t.td,{children:`A code asked for inside a dense panel or a table row.`})]})]})]}),(0,A.jsx)(s,{of:C}),(0,A.jsxs)(t.table,{children:[(0,A.jsx)(t.thead,{children:(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.th,{children:`Setting`}),(0,A.jsx)(t.th,{children:`Use for`})]})}),(0,A.jsxs)(t.tbody,{children:[(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`groupSize`})}),(0,A.jsxs)(t.td,{children:[`A code people read in chunks: `,(0,A.jsx)(t.code,{children:`3`}),` shows six digits as 3 – 3, `,(0,A.jsx)(t.code,{children:`4`}),` an eight-character backup code as 4 – 4.`]})]}),(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`onResend`})}),(0,A.jsxs)(t.td,{children:[`A code that was sent and may not arrive. The button waits `,(0,A.jsx)(t.code,{children:`resendCooldown`}),` seconds, showing the time left. Return a promise: a failed send starts no cooldown.`]})]}),(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`validationType`})}),(0,A.jsxs)(t.td,{children:[(0,A.jsx)(t.code,{children:`numeric`}),` for codes from texts and apps; `,(0,A.jsx)(t.code,{children:`alphanumeric`}),` for backup and recovery codes.`]})]}),(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`mask`})}),(0,A.jsx)(t.td,{children:`A code that should not be read over someone's shoulder.`})]})]})]}),(0,A.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,A.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-js`,children:`import { OTPInput } from 'marram/otp-input'
`})}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/otp-input.json
`})}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[`Source: `,(0,A.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/inputs/OTPInput.tsx`,rel:`nofollow`,children:`src/components/inputs/OTPInput.tsx`})]}),`
`,(0,A.jsxs)(t.li,{children:[`Spec: none on uiguideline.com; the reference is `,(0,A.jsx)(t.a,{href:`https://ui.shadcn.com/docs/components/input-otp`,rel:`nofollow`,children:`shadcn/ui Input OTP`})]}),`
`,(0,A.jsxs)(t.li,{children:[`Behaviour: `,(0,A.jsx)(t.a,{href:`https://base-ui.com/react/components/otp-field`,rel:`nofollow`,children:`Base UI OTP Field`})]}),`
`,(0,A.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,A.jsxs)(p,{value:`specs`,children:[(0,A.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,A.jsx)(l,{parts:v,children:(0,A.jsx)(i,{of:E})}),(0,A.jsx)(t.p,{children:`Each cell is its own box with the field's edge, fill and radius, so the
row reads as several small fields that belong together. The label and
helper text are Text Input's.`}),(0,A.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,A.jsxs)(t.p,{children:[`A cell is a square as tall as a Text Input of the same size: 32px in
`,(0,A.jsx)(t.code,{children:`sm`}),`, 40px in `,(0,A.jsx)(t.code,{children:`md`}),`. The digit is Heading lg (24/28, semibold) in both;
the separator between groups is body type.`]}),(0,A.jsx)(h,{caption:`sm`,rows:[{part:`Cell`,property:`Width and height`,token:`--control-md`},{part:`Cell`,property:`Corner radius`,token:`--control-md-radius-field`}]}),(0,A.jsx)(h,{caption:`md`,rows:[{part:`Cell`,property:`Width and height`,token:`--control-lg`},{part:`Cell`,property:`Corner radius`,token:`--control-md-radius-field`}]}),(0,A.jsx)(h,{caption:`Every size`,rows:[{part:`Cells and separator`,property:`Gap`,token:`--space-2`},{part:`Cell`,property:`Font size`,token:`--text-heading-lg`},{part:`Cell`,property:`Line height`,token:`--leading-heading-lg`},{part:`Separator`,property:`Font size`,token:`--text-body`},{part:`Resend button`,property:`Pulled back to line up with the cells`,token:`--control-sm-pad`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Cell`,property:`Height on touch screens`,token:`--target-coarse`}]}),(0,A.jsxs)(t.p,{children:[`The characters use tabular figures, centred in the cell. The resend
button is a small ghost `,(0,A.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`}),`.`]}),(0,A.jsx)(t.h2,{id:`color`,children:`Color`}),(0,A.jsx)(h,{caption:`default`,rows:[{part:`Cell`,property:`Background`,token:`--color-surface-raised`},{part:`Cell`,property:`Border`,token:`--field-edge`},{part:`Character`,property:`Colour`,token:`--color-text`},{part:`Caret`,property:`Colour`,token:`--color-border-focused`},{part:`Group separator`,property:`Colour`,token:`--color-text-subtlest`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,A.jsx)(h,{caption:`error`,rows:[{part:`Focus ring`,property:`Colour`,token:`--color-text-danger`}]}),(0,A.jsx)(h,{caption:`Read-only`,rows:[{part:`Cell`,property:`Background`,token:`--color-background-input`}]}),(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`--field-edge`}),` is the shared field's edge colour: `,(0,A.jsx)(t.code,{children:`--color-border-input`}),` by
default, `,(0,A.jsx)(t.code,{children:`--color-text-danger`}),` on error and `,(0,A.jsx)(t.code,{children:`--color-text-success`}),` on success, so every
cell and the helper text change together.`]}),(0,A.jsx)(t.h2,{id:`states`,children:`States`}),(0,A.jsx)(f,{states:[{label:`Enabled`},{label:`Focus`,pseudo:`focus`},{label:`Filled`,content:(0,A.jsx)(D,{label:`Code`,length:4,defaultValue:`4821`})},{label:`Error`,content:(0,A.jsx)(D,{label:`Code`,length:4,defaultValue:`4821`,validationState:`error`,helperText:`That code is wrong.`})},{label:`Disabled`,content:(0,A.jsx)(D,{label:`Code`,length:4,defaultValue:`48`,disabled:!0})}],children:(0,A.jsx)(D,{label:`Code`,length:4})}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Hover`}),` changes nothing: a cell is a text field, and the caret shows
where typing goes.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Focus`}),` rings only the cell being typed into, in `,(0,A.jsx)(t.code,{children:`--color-text-danger`}),` when
invalid.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Error`}),` turns every cell's edge and the helper text `,(0,A.jsx)(t.code,{children:`--color-text-danger`}),`.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Read-only`}),` fills the cells with `,(0,A.jsx)(t.code,{children:`--color-background-input`}),`; typing does
nothing.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Disabled`}),` dims the cells to 50% and disables the resend button.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Cooling down`}),`, the resend button is disabled and shows the time left
as `,(0,A.jsx)(t.code,{children:`m:ss`}),`.`]}),`
`]}),(0,A.jsx)(t.h2,{id:`api`,children:`API`}),(0,A.jsx)(`div`,{style:{overflowX:`auto`},children:(0,A.jsx)(o,{of:_})}),(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`ref`}),` goes to the first cell. `,(0,A.jsx)(t.code,{children:`id`}),` and `,(0,A.jsx)(t.code,{children:`className`}),` are passed through too;
no other attributes are.`]}),(0,A.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,A.jsx)(t.p,{children:`There is no uiguideline.com spec for this component; the reference is shadcn/ui Input OTP.`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`One component, flat props.`}),` shadcn composes `,(0,A.jsx)(t.code,{children:`InputOTP`}),`, `,(0,A.jsx)(t.code,{children:`InputOTPGroup`}),`,
`,(0,A.jsx)(t.code,{children:`InputOTPSlot`}),` and `,(0,A.jsx)(t.code,{children:`InputOTPSeparator`}),`; Marram takes `,(0,A.jsx)(t.code,{children:`length`}),` and
`,(0,A.jsx)(t.code,{children:`groupSize`}),`, as the API conventions ask for flat props before 1.0.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Resend is built in.`}),` shadcn leaves it to the page. Every screen that
sends a code needs the same button and countdown, so it lives here.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Real inputs, one per cell`}),`, from Base UI, not one hidden input under
drawn slots: each cell is focusable and named.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsxs)(t.strong,{children:[(0,A.jsx)(t.code,{children:`label`}),`, `,(0,A.jsx)(t.code,{children:`helperText`}),`, `,(0,A.jsx)(t.code,{children:`validationState`})]}),` are added from the shared field.`]}),`
`]})]}),(0,A.jsxs)(p,{value:`guidelines`,children:[(0,A.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,A.jsxs)(t.p,{children:[`Use an OTP Input for a short code someone copies from another place: a
text message, an email, an authenticator app. Say where the code was sent
in `,(0,A.jsx)(t.code,{children:`helperText`}),`, and give a way to send another.`]}),(0,A.jsx)(u,{do:(0,A.jsx)(i,{of:w}),doCaption:`Six digits, labelled, with where the code went and a way to resend it.`,dont:(0,A.jsx)(i,{of:b}),dontCaption:`Sixteen cells are too many to scan or correct. A long key is one Text Input.`}),(0,A.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For codes longer than about 8 characters`}),`, licence keys or recovery
phrases. Use a `,(0,A.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),`.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For a PIN or password people make up themselves.`}),` Use a
`,(0,A.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),` with
`,(0,A.jsx)(t.code,{children:`type="password"`}),`: cells suggest a code that was sent.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For a number people adjust.`}),` Use a
`,(0,A.jsx)(t.a,{href:`?path=/docs/components-inputs-numberinput--docs`,children:`Number Input`}),`.`]}),`
`]}),(0,A.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[`The cells sit in a `,(0,A.jsx)(t.code,{children:`group`}),` named by the label; the label also names the
first cell, and each later cell is named by `,(0,A.jsx)(t.code,{children:`slotLabel`}),`, "Character 2 of 6"
by default.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Keyboard:`}),` the group is one tab stop: only the cell to type into is in
the tab order. Typing a character fills the cell and moves to the next;
Backspace clears the cell before and moves back; Left and Right move
between cells.`]}),`
`,(0,A.jsxs)(t.li,{children:[`Characters `,(0,A.jsx)(t.code,{children:`validationType`}),` does not allow are dropped, so letters cannot
enter a numeric code.`]}),`
`,(0,A.jsx)(t.li,{children:`Pasting the whole code into any cell fills every cell; spaces are ignored.`}),`
`,(0,A.jsxs)(t.li,{children:[`The first cell has `,(0,A.jsx)(t.code,{children:`autocomplete="one-time-code"`}),`, so phones offer the code
from a text message.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.code,{children:`helperText`}),` is the group's description and `,(0,A.jsx)(t.code,{children:`validationState="error"`}),` sets
`,(0,A.jsx)(t.code,{children:`aria-invalid`}),` on every cell.`]}),`
`,(0,A.jsxs)(t.li,{children:[`The resend button is disabled during the cooldown and its name carries the
time left. After a send, focus moves to the first cell, so it is not lost
with the disabled button; while a send is pending the button stays
focusable and is marked `,(0,A.jsx)(t.code,{children:`aria-busy`}),`. The countdown is not a live region, so it does not interrupt
every second.`]}),`
`]})]})]})]})}function k(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;function j(){return(j=e((()=>{A=t(),r(),a(),g(),y(),x()})))()}j();export{k as default};