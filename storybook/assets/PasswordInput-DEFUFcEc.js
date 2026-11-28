import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{a as _,c as v,d as y,f as b,i as x,l as S,n as C,o as w,r as T,s as E,t as D,u as O}from"./PasswordInput.stories-D3vtmrB5.js";function k(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c,{of:_}),`
`,(0,j.jsx)(t.h1,{id:`password-input`,children:`Password Input`}),`
`,(0,j.jsxs)(d,{children:[(0,j.jsxs)(p,{value:`overview`,children:[(0,j.jsx)(t.p,{children:`A password field with a Show / Hide button and, where a password is being
chosen, the rules it must meet, ticked off as the reader types.`}),(0,j.jsx)(m,{of:_}),(0,j.jsx)(s,{of:C}),(0,j.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,j.jsx)(t.p,{children:`One appearance, Text Input's. What changes is whether the password is
being typed or chosen.`}),(0,j.jsxs)(t.table,{children:[(0,j.jsx)(t.thead,{children:(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.th,{children:`Use`}),(0,j.jsx)(t.th,{children:`Setting`})]})}),(0,j.jsxs)(t.tbody,{children:[(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.td,{children:`Signing in, or confirming who you are before a change`}),(0,j.jsxs)(t.td,{children:[`The default: `,(0,j.jsx)(t.code,{children:`autoComplete="current-password"`}),`, no rules.`]})]}),(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.td,{children:`Choosing a password: sign up, reset, change`}),(0,j.jsxs)(t.td,{children:[(0,j.jsx)(t.code,{children:`autoComplete="new-password"`}),` and `,(0,j.jsx)(t.code,{children:`rules`}),`, so password managers suggest one and the reader sees what it needs.`]})]})]})]}),(0,j.jsx)(s,{of:E}),(0,j.jsx)(s,{of:w}),(0,j.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,j.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:`language-js`,children:`import { PasswordInput, defaultPasswordRules } from 'marram/password-input'
`})}),(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/password-input.json
`})}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[`Source: `,(0,j.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/inputs/PasswordInput.tsx`,rel:`nofollow`,children:`src/components/inputs/PasswordInput.tsx`})]}),`
`,(0,j.jsxs)(t.li,{children:[`Spec: none on uiguideline.com; the rules follow `,(0,j.jsx)(t.a,{href:`https://pages.nist.gov/800-63-4/sp800-63b.html`,rel:`nofollow`,children:`NIST SP 800-63B`}),` (length over character kinds)`]}),`
`,(0,j.jsxs)(t.li,{children:[`Built on: `,(0,j.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),` and its `,(0,j.jsx)(t.code,{children:`TextInputButton`})]}),`
`,(0,j.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,j.jsxs)(p,{value:`specs`,children:[(0,j.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,j.jsx)(l,{parts:v,children:(0,j.jsx)(i,{of:D})}),(0,j.jsx)(t.p,{children:`The field, label, helper text and button are Text Input's; this
component adds the rules and the button's behaviour.`}),(0,j.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,j.jsx)(t.p,{children:`Field sizes are Text Input's, except at the end: the Show / Hide button
is a plain word inside the box, with no fill or divider, 6px each side of
it and 4px from the edge, running the box's full height. The rules sit in
its helper text, one per line.`}),(0,j.jsx)(h,{caption:`Every size`,rows:[{part:`Show / Hide button`,property:`Inline padding`,token:`--space-1-5`},{part:`Show / Hide button`,property:`Gap to the box's end edge`,token:`--space-1`},{part:`Rule`,property:`Gap between tick and text`,token:`--space-1-5`},{part:`Tick`,property:`Width and height`,token:`--icon-sm`}]}),(0,j.jsx)(t.h2,{id:`color`,children:`Color`}),(0,j.jsx)(h,{caption:`default`,rows:[{part:`Show / Hide button`,property:`Text colour`,token:`--color-text`},{part:`Met rule`,property:`Colour`,token:`--color-text-success`}]}),(0,j.jsx)(t.p,{children:`A rule not yet met takes the helper text's colour. A met rule stays
green when the field is in error: it is done.`}),(0,j.jsx)(t.h2,{id:`states`,children:`States`}),(0,j.jsx)(f,{states:[{label:`Enabled`},{label:`Focus`,pseudo:`focus`},{label:`Rules met`,content:(0,j.jsx)(O,{label:`New password`,rules:y,defaultValue:`correct horse battery`})},{label:`Error`,content:(0,j.jsx)(O,{validationState:`error`,helperText:`That password is wrong.`,defaultValue:`hunter2`})},{label:`Disabled`,content:(0,j.jsx)(O,{disabled:!0,defaultValue:`hunter2`})}],children:(0,j.jsx)(O,{})}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Hover and focus`}),` are Text Input's; the Show button has no fill on
hover, and its focus ring is drawn inside its own edge.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Shown`}),`, the field is `,(0,j.jsx)(t.code,{children:`type="text"`}),` and the button reads Hide. It goes
back to dots when the form is sent.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Error`}),` colours the edge and the helper text `,(0,j.jsx)(t.code,{children:`--color-text-danger`}),`; met
rules stay green.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Disabled`}),` dims the field and disables the button.`]}),`
`]}),(0,j.jsx)(t.h2,{id:`api`,children:`API`}),(0,j.jsx)(`div`,{style:{overflowX:`auto`},children:(0,j.jsx)(o,{of:_})}),(0,j.jsxs)(t.p,{children:[`Every other Text Input prop and input attribute passes through, except
`,(0,j.jsx)(t.code,{children:`type`}),`, `,(0,j.jsx)(t.code,{children:`suffix`}),` and `,(0,j.jsx)(t.code,{children:`endAddon`}),`, which the component owns. `,(0,j.jsx)(t.code,{children:`ref`}),` points at the
input. `,(0,j.jsx)(t.code,{children:`defaultPasswordRules`}),` and the `,(0,j.jsx)(t.code,{children:`PasswordRule`}),` type are exported
with it.`]}),(0,j.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,j.jsx)(t.p,{children:`There is no uiguideline.com spec for this component. It moved here from
the auth templates, where it was a template file, when Settings became its
first use outside sign-in.`})]}),(0,j.jsxs)(p,{value:`guidelines`,children:[(0,j.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,j.jsxs)(t.p,{children:[`Use it for every password field: sign in, sign up, reset, and change
password in Settings. Give a new password `,(0,j.jsx)(t.code,{children:`rules`}),` so the reader knows what
it needs before sending, not after.`]}),(0,j.jsx)(u,{do:(0,j.jsx)(i,{of:T}),doCaption:`A new password, hidden, with its rule and a Show button.`,dont:(0,j.jsx)(i,{of:x}),dontCaption:`A plain Text Input shows the password to anyone nearby and tells the reader nothing about what it needs.`}),(0,j.jsxs)(t.p,{children:[`It takes Text Input's props, `,(0,j.jsx)(t.code,{children:`prefix`}),` and `,(0,j.jsx)(t.code,{children:`startAddon`}),` included. The end of
the field is the Show button's, so there is no `,(0,j.jsx)(t.code,{children:`suffix`}),` or `,(0,j.jsx)(t.code,{children:`endAddon`}),`.`]}),(0,j.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`For a code that was sent`}),`, such as a sign-in code. Use an
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-inputs-otpinput--docs`,children:`OTP Input`}),`.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`For an API key or token`}),` the reader copies. Use a
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),` that is
read-only, with a copy button.`]}),`
`]}),(0,j.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[`The field is named by its label; without a visible one, pass
`,(0,j.jsx)(t.code,{children:`aria-label`}),`, as on Text Input. The Show / Hide button's name says
what it does next and to which field ("Show password", "Hide new
password"), and its visible text is the start of that name.`]}),`
`,(0,j.jsx)(t.li,{children:`The rules are part of the field's description, each ending "(met)" or
"(not met)", so they are read when the field gets focus; ticking one off
is not announced on every keystroke.`}),`
`,(0,j.jsx)(t.li,{children:`When the form is sent the field goes back to dots, so the browser does
not keep the password as plain text in its form history.`}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`autoComplete`}),` is `,(0,j.jsx)(t.code,{children:`current-password`}),` by default and should be
`,(0,j.jsx)(t.code,{children:`new-password`}),` where a password is chosen, so password managers fill or
suggest the right one.`]}),`
`,(0,j.jsx)(t.li,{children:`A disabled field disables its button too.`}),`
`]})]})]})]})}function A(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),r(),a(),g(),b(),S()})))()}M();export{A as default};