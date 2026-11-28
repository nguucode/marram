import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{n as _,t as v}from"./Search-DublCB1P.js";import{a as y,c as b,i as x,l as S,n as C,o as w,r as T,s as E,t as D,u as O}from"./Search.stories-CUKbBVf_.js";function k(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c,{of:y}),`
`,(0,j.jsx)(t.h1,{id:`search`,children:`Search`}),`
`,(0,j.jsxs)(d,{children:[(0,j.jsxs)(p,{value:`overview`,children:[(0,j.jsxs)(t.p,{children:[`A field for a search query, with a button to clear it and, optionally, a
key that focuses it. The field is
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),`'s. It searches
one place: a list, a table, a results page.`]}),(0,j.jsx)(m,{of:y}),(0,j.jsx)(s,{of:C}),(0,j.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,j.jsx)(t.p,{children:`One appearance, the white outlined box, in two sizes, with or without a
visible label.`}),(0,j.jsx)(s,{of:E}),(0,j.jsxs)(t.table,{children:[(0,j.jsx)(t.thead,{children:(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.th,{children:`Size`}),(0,j.jsx)(t.th,{children:`Use for`})]})}),(0,j.jsxs)(t.tbody,{children:[(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.td,{children:(0,j.jsx)(t.code,{children:`md`})}),(0,j.jsx)(t.td,{children:`Above a list or a page of results: the default.`})]}),(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.td,{children:(0,j.jsx)(t.code,{children:`sm`})}),(0,j.jsx)(t.td,{children:`Toolbars and table headers: as tall as a default Button.`})]})]})]}),(0,j.jsx)(s,{of:b}),(0,j.jsxs)(t.table,{children:[(0,j.jsx)(t.thead,{children:(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.th,{children:`Label`}),(0,j.jsx)(t.th,{children:`Use for`})]})}),(0,j.jsxs)(t.tbody,{children:[(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.td,{children:`None (default)`}),(0,j.jsxs)(t.td,{children:[`A search box whose place makes its purpose plain: a page header, above a list. It is named "Search", or by `,(0,j.jsx)(t.code,{children:`aria-label`}),`.`]})]}),(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.td,{children:(0,j.jsx)(t.code,{children:`label`})}),(0,j.jsx)(t.td,{children:`A search inside a form, among other labelled fields.`})]})]})]}),(0,j.jsx)(s,{of:w}),(0,j.jsxs)(t.table,{children:[(0,j.jsx)(t.thead,{children:(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.th,{children:`Shortcut`}),(0,j.jsx)(t.th,{children:`Use for`})]})}),(0,j.jsxs)(t.tbody,{children:[(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.td,{children:`None (default)`}),(0,j.jsx)(t.td,{children:`Most fields.`})]}),(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.td,{children:(0,j.jsx)(t.code,{children:`shortcut="/"`})}),(0,j.jsx)(t.td,{children:`The one search a page is about, such as the search above a list page's table. The key cap shows while the field is empty and idle.`})]})]})]}),(0,j.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,j.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:`language-js`,children:`import { Search } from 'marram/search'
`})}),(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/search.json
`})}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[`Source: `,(0,j.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/inputs/Search.tsx`,rel:`nofollow`,children:`src/components/inputs/Search.tsx`})]}),`
`,(0,j.jsxs)(t.li,{children:[`Spec: `,(0,j.jsx)(t.a,{href:`https://www.uiguideline.com/components/search`,rel:`nofollow`,children:`uiguideline.com/components/search`})]}),`
`,(0,j.jsxs)(t.li,{children:[`Behaviour: `,(0,j.jsx)(t.a,{href:`https://base-ui.com/react/components/field`,rel:`nofollow`,children:`Base UI Field`})]}),`
`,(0,j.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,j.jsxs)(p,{value:`specs`,children:[(0,j.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,j.jsx)(l,{parts:S,children:(0,j.jsx)(i,{of:D})}),(0,j.jsxs)(t.p,{children:[`The placeholder is the input's, "Search" unless given. The browser's own
clear control is hidden, so there are not two. Not numbered above: with `,(0,j.jsx)(t.code,{children:`shortcut`}),`, a
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-atomic-elements-kbd--docs`,children:`Kbd`}),` key cap sits where the clear button goes, while the field is empty and
not focused; the two never show at once.`]}),(0,j.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,j.jsxs)(t.p,{children:[`The box is Text Input's: `,(0,j.jsx)(t.code,{children:`sm`}),` is 32px and `,(0,j.jsx)(t.code,{children:`md`}),` is 40px, one step taller
than a Button. The search icon and the clear button's icon are 16px in
both; the clear button is a 24px target round its icon. The start
padding is 10px, as Text Input's; the end is 6px, so the clear button's
icon still sits 10px from the edge.`]}),(0,j.jsx)(h,{caption:`sm`,rows:[{part:`Container`,property:`Height`,token:`--control-md`},{part:`Container`,property:`Inline padding, start`,token:`--space-2-5`},{part:`Container`,property:`Inline padding, end`,token:`--space-1-5`},{part:`Container`,property:`Corner radius`,token:`--control-md-radius-field`},{part:`Container`,property:`Gap`,token:`--space-2`},{part:`Search icon and clear button`,property:`Size`,token:`--icon-md`},{part:`Input`,property:`Font size`,token:`--text-body`}]}),(0,j.jsx)(h,{caption:`md`,rows:[{part:`Container`,property:`Height`,token:`--control-lg`},{part:`Container`,property:`Inline padding, start`,token:`--space-2-5`},{part:`Container`,property:`Inline padding, end`,token:`--space-1-5`},{part:`Container`,property:`Corner radius`,token:`--control-md-radius-field`},{part:`Container`,property:`Gap`,token:`--space-2`},{part:`Search icon and clear button`,property:`Size`,token:`--icon-md`},{part:`Input`,property:`Font size`,token:`--text-body`}]}),(0,j.jsx)(h,{caption:`Every size`,rows:[{part:`Clear button`,property:`Width and height`,token:`--control-sm`},{part:`Clear button`,property:`Hit area on touch screens`,token:`--target-coarse`},{part:`Clear button`,property:`Corner radius`,token:`--radius-sm`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`}]}),(0,j.jsxs)(t.p,{children:[`20rem wide, capped at its container, or the container's width with
`,(0,j.jsx)(t.code,{children:`isFullWidth`}),`.`]}),(0,j.jsx)(t.h2,{id:`color`,children:`Color`}),(0,j.jsx)(t.p,{children:`Search has no validation state; its field colours are Text Input's
default ones.`}),(0,j.jsx)(h,{caption:`default`,rows:[{part:`Container`,property:`Background`,token:`--color-surface-raised`},{part:`Container`,property:`Border`,token:`--color-border-input`},{part:`Input`,property:`Colour`,token:`--color-text`},{part:`Placeholder and search icon`,property:`Colour`,token:`--color-text-subtlest`},{part:`Clear button`,property:`Colour`,token:`--color-text-subtlest`},{part:`Clear button, hover`,property:`Colour`,token:`--color-text`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,j.jsx)(h,{caption:`Read-only`,rows:[{part:`Container`,property:`Background`,token:`--color-background-input`}]}),(0,j.jsx)(t.h2,{id:`states`,children:`States`}),(0,j.jsx)(f,{states:[{label:`Empty`},{label:`Focus`,pseudo:`focus`},{label:`With a query`,content:(0,j.jsx)(v,{defaultValue:`tooltip`})},{label:`Clear hover`,pseudo:`hover`,content:(0,j.jsx)(v,{defaultValue:`tooltip`})},{label:`With a shortcut`,content:(0,j.jsx)(v,{shortcut:`/`})},{label:`Read-only`,content:(0,j.jsx)(v,{defaultValue:`tooltip`,readOnly:!0})},{label:`Disabled`,content:(0,j.jsx)(v,{defaultValue:`tooltip`,disabled:!0})}],children:(0,j.jsx)(v,{})}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`The clear button`}),` appears once there is a query, and not while the
field is disabled or read-only. On hover its icon darkens to
`,(0,j.jsx)(t.code,{children:`--color-text`}),`.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Focus`}),` is the field's 2px `,(0,j.jsx)(t.code,{children:`--color-border-focused`}),` outline around the box, on click
as well as keyboard. The clear button, when tabbed to, draws its own
ring instead, so the two never double.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`The shortcut's key cap`}),` shows while the field is empty and hides on
focus, when the key would type instead. Disabled or read-only, there is
no key cap and the key is not bound.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Read-only`}),` fills the box with `,(0,j.jsx)(t.code,{children:`--color-background-input`}),`.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Disabled`}),` is the enabled look at 50% opacity.`]}),`
`]}),(0,j.jsx)(t.h2,{id:`api`,children:`API`}),(0,j.jsx)(`div`,{style:{overflowX:`auto`},children:(0,j.jsx)(o,{of:y})}),(0,j.jsxs)(t.p,{children:[`Every other `,(0,j.jsx)(t.code,{children:`<input>`}),` attribute passes through, including `,(0,j.jsx)(t.code,{children:`ref`}),`, `,(0,j.jsx)(t.code,{children:`name`}),`,
`,(0,j.jsx)(t.code,{children:`autoFocus`}),` and `,(0,j.jsx)(t.code,{children:`onKeyDown`}),`. `,(0,j.jsx)(t.code,{children:`type`}),` is always `,(0,j.jsx)(t.code,{children:`search`}),`.`]}),(0,j.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsxs)(t.strong,{children:[`No `,(0,j.jsx)(t.code,{children:`filled`}),` appearance.`]}),` The spec's filled field (a tinted box with a bottom rule) was dropped to match the Claude apps, where every field is the white outlined box.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Two sizes, not three.`}),` `,(0,j.jsx)(t.code,{children:`sm`}),` (32px) and `,(0,j.jsx)(t.code,{children:`md`}),` (40px), after Atlassian Design: a field is one step taller than a button, so `,(0,j.jsx)(t.code,{children:`sm`}),` lines up with a Button in a toolbar. The spec's largest step was dropped; a big call to action is `,(0,j.jsx)(t.code,{children:`md`}),` with more room around it, not a taller box.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsxs)(t.strong,{children:[(0,j.jsx)(t.code,{children:`label`}),` and `,(0,j.jsx)(t.code,{children:`size`}),` are added`]}),`, from the shared field,
so a search box can match the form or toolbar it sits in.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsxs)(t.strong,{children:[(0,j.jsx)(t.code,{children:`value`}),` is added`]}),` for a controlled query.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsxs)(t.strong,{children:[(0,j.jsx)(t.code,{children:`shortcut`}),` is added`]}),`, a single key that focuses the field.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`No suggestion panel.`}),` Recent searches and results grouped by type, as the
spec's global search shows them, are left to the app; picking one value
from matches is the
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-inputs-combobox--docs`,children:`Combobox`}),`'s job. Search
stays a field, so there are not two lists that behave alike.`]}),`
`,(0,j.jsxs)(t.li,{children:[`Native `,(0,j.jsx)(t.code,{children:`disabled`}),`, `,(0,j.jsx)(t.code,{children:`readOnly`}),` names.`]}),`
`]})]}),(0,j.jsxs)(p,{value:`guidelines`,children:[(0,j.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,j.jsx)(t.p,{children:`Use Search to find or filter: a list of components, a table, the whole
site. Say in the placeholder what is searched.`}),(0,j.jsx)(u,{do:(0,j.jsx)(i,{of:T}),doCaption:`A Search field: a searchbox to assistive tech, with a clear button and Escape to clear.`,dont:(0,j.jsx)(i,{of:x}),dontCaption:`A Text Input with a search icon looks the same but is a plain textbox, with no way to clear it.`}),(0,j.jsxs)(t.p,{children:[`When it searches the site, put it inside a `,(0,j.jsx)(t.code,{children:`<form role="search">`}),` (or
`,(0,j.jsx)(t.code,{children:`<search>`}),`) so it becomes a landmark people can jump to. The component is
only the field: filtering a list in place does not need a landmark.`]}),(0,j.jsxs)(t.p,{children:[`Give the page's main search `,(0,j.jsx)(t.code,{children:`shortcut="/"`}),`, and only that one.`]}),(0,j.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`To find anything from anywhere in the app`}),`, with recent items and
results grouped by type. That is a command palette, opened with ⌘K, and
the kit does not ship one. Do not bind ⌘K to a Search.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`To choose one value from a list.`}),` Use a
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-inputs-combobox--docs`,children:`Combobox`}),`: it shows the
matches and keeps the choice.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`For other free text.`}),` Use a
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),`.`]}),`
`]}),(0,j.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`type="search"`}),`, exposed as a `,(0,j.jsx)(t.code,{children:`searchbox`}),`, named by the visible label
or "Search". A placeholder is not a name.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.code,{children:`helperText`}),`, when given, sits under the field and is the input's
description, as on Text Input.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Clearing works the same everywhere:`}),` the button, and Escape in the
field (Chrome and Safari do this natively; Firefox did not). Either way
`,(0,j.jsx)(t.code,{children:`onChange`}),` fires with a real event.`]}),`
`,(0,j.jsxs)(t.li,{children:[`The clear button is a real `,(0,j.jsx)(t.code,{children:`<button>`}),` named "Clear search", reached
with Tab after the input. Pressed from the keyboard, it hands focus
back to the field instead of losing it; a mouse press leaves focus
where it was.`]}),`
`,(0,j.jsx)(t.li,{children:`The clear button's hit area grows to 44px on touch screens.`}),`
`,(0,j.jsx)(t.li,{children:`The search icon is decorative and hidden from screen readers.`}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:(0,j.jsx)(t.code,{children:`shortcut`})}),` focuses the field from anywhere on the page, without typing
the key. It does nothing while focus is in a form field, or with ⌘,
Ctrl or Alt held, or while the field is disabled or read-only. The input carries `,(0,j.jsx)(t.code,{children:`aria-keyshortcuts`}),`; the key cap is
hidden from screen readers so the key is not read twice.`]}),`
`,(0,j.jsxs)(t.li,{children:[`The edge is the light `,(0,j.jsx)(t.code,{children:`--color-border-input`}),`, the approved exception to WCAG
1.4.11 described on Text Input.`]}),`
`]})]})]})]})}function A(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),r(),a(),g(),_(),O()})))()}M();export{A as default};