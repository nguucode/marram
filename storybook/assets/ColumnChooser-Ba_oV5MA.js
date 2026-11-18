import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{a as _,c as v,i as y,l as b,n as x,o as S,r as C,s as w,t as T,u as E}from"./ColumnChooser.stories-BbgmwSja.js";function D(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(c,{of:x}),`
`,(0,k.jsx)(t.h1,{id:`column-chooser`,children:`Column Chooser`}),`
`,(0,k.jsxs)(d,{children:[(0,k.jsxs)(p,{value:`overview`,children:[(0,k.jsx)(t.p,{children:`A button above a table that opens a list of its columns, each with a
checkbox to show or hide it, and a Reset columns row that brings back the
default set.`}),(0,k.jsx)(m,{of:x}),(0,k.jsx)(s,{of:S}),(0,k.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,k.jsxs)(t.table,{children:[(0,k.jsx)(t.thead,{children:(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.th,{children:`Variant`}),(0,k.jsx)(t.th,{children:`Use for`})]})}),(0,k.jsxs)(t.tbody,{children:[(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{children:`Every column shown (default)`}),(0,k.jsx)(t.td,{children:`Tables whose columns all matter at first, where people hide what they do not need.`})]}),(0,k.jsxs)(t.tr,{children:[(0,k.jsx)(t.td,{children:(0,k.jsx)(t.code,{children:`defaultVisibleKeys`})}),(0,k.jsx)(t.td,{children:`Tables with more columns than fit: show the essentials, let people add the rest. Reset goes back to this set.`})]})]})]}),(0,k.jsxs)(t.p,{children:[`The chooser does not touch the table: it reports the shown keys and you
filter the Table's `,(0,k.jsx)(t.code,{children:`columns`}),` with them. That keeps the choice yours to
store, per user or per view. With a resizable Table, pass `,(0,k.jsx)(t.code,{children:`onReset`}),` to put
the widths back too:`]}),(0,k.jsx)(s,{of:C}),(0,k.jsx)(s,{of:w}),(0,k.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,k.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,k.jsx)(t.pre,{children:(0,k.jsx)(t.code,{className:`language-js`,children:`import { ColumnChooser } from 'marram/column-chooser'
`})}),(0,k.jsx)(t.pre,{children:(0,k.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/column-chooser.json
`})}),(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsxs)(t.li,{children:[`Source: `,(0,k.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/data-display/ColumnChooser.tsx`,rel:`nofollow`,children:`src/components/data-display/ColumnChooser.tsx`})]}),`
`,(0,k.jsxs)(t.li,{children:[`Spec: none on uiguideline.com; built from the Application UI catalogue, whose source for widths is shadcn's Resizable. Widths are Table's `,(0,k.jsx)(t.code,{children:`isResizable`}),` instead, a handle in each header rather than resizable panels`]}),`
`,(0,k.jsxs)(t.li,{children:[`Behaviour: the kit's `,(0,k.jsx)(t.a,{href:`?path=/docs/components-overlays-popover--docs`,children:`Popover`}),`, `,(0,k.jsx)(t.a,{href:`?path=/docs/components-controls-checkbox--docs`,children:`Checkbox`}),` and `,(0,k.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`}),`; the popup is styled as a `,(0,k.jsx)(t.a,{href:`?path=/docs/components-inputs-select--docs`,children:`Select`}),` list's shell and options`]}),`
`,(0,k.jsx)(t.li,{children:`Figma: the Column Chooser component in the library`}),`
`]})]}),(0,k.jsxs)(p,{value:`specs`,children:[(0,k.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,k.jsx)(l,{parts:b,children:(0,k.jsx)(i,{of:T})}),(0,k.jsxs)(t.p,{children:[`The open popovers on this tab and the next are pictures: real choosers
rendered in place with `,(0,k.jsx)(t.code,{children:`container`}),` and inert, the popup laid out under the
button where it opens.`]}),(0,k.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,k.jsx)(h,{caption:`Every chooser`,rows:[{part:`Popup`,property:`Block padding`,token:`--space-2`},{part:`Column checkbox`,property:`Row block padding`,token:`--space-1-5`},{part:`Column checkbox`,property:`Row inline padding`,token:`--space-3`},{part:`Column checkbox`,property:`Row minimum height`,token:`--control-md`},{part:`Column checkbox`,property:`Gap, box to name`,token:`--space-2`},{part:`Separator`,property:`Space above and below`,token:`--space-1`},{part:`Separator`,property:`Thickness`,token:`--border-width`},{part:`Reset`,property:`Inline start padding, past a box`,token:`--choice-box`},{part:`Reset`,property:`Hit area on touch screens`,token:`--target-coarse`}]}),(0,k.jsxs)(t.p,{children:[`The button is a medium Button. The popup is a list's shell, as Select's,
with Popover's border, `,(0,k.jsx)(t.code,{children:`--radius-lg`}),` corner and `,(0,k.jsx)(t.code,{children:`--shadow-overlay`}),`:
240px wide (or the screen's width, if narrower), 8px above and below the
rows and none at the sides, so a row's hover fill runs edge to edge. Each
column is an option's row, 32px, and the whole row is the click target:
it is the checkbox's label, stretched. Reset columns is one more row, its
text in line with the column names. Rows grow to 44px on touch screens.`]}),(0,k.jsx)(t.h2,{id:`color`,children:`Color`}),(0,k.jsxs)(t.p,{children:[`The button is an outlined secondary Button and the popup's surface is
Popover's `,(0,k.jsx)(t.code,{children:`--color-surface-overlay`}),`; see those pages for their tokens.`]}),(0,k.jsx)(h,{caption:`Rows`,rows:[{part:`Column checkbox, hover`,property:`Background`,token:`--color-background-neutral`},{part:`Reset`,property:`Colour`,token:`--color-text`},{part:`Reset, hover`,property:`Background`,token:`--color-background-neutral`},{part:`Separator`,property:`Colour`,token:`--color-border`},{part:`Reset, focus`,property:`Ring`,token:`--color-border-focused`}]}),(0,k.jsx)(t.h2,{id:`states`,children:`States`}),(0,k.jsxs)(t.p,{children:[`The chooser is open or closed. The button keeps Button's states; each box
keeps Checkbox's, and a locked column shows Checkbox's disabled look. A
row and Reset take `,(0,k.jsx)(t.code,{children:`--color-background-neutral`}),` on hover; Reset's focus
ring is drawn inside it:`]}),(0,k.jsx)(f,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Pressed`,pseudo:`active`}],children:(0,k.jsx)(i,{of:v})}),(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`Locked`}),`: the row header column, and the last column left, are ticked
and disabled: a table needs a name per row and at least one column.`]}),`
`]}),(0,k.jsx)(t.h2,{id:`api`,children:`API`}),(0,k.jsx)(`div`,{style:{overflowX:`auto`},children:(0,k.jsx)(o,{of:x})}),(0,k.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,k.jsxs)(t.p,{children:[`There is no uiguideline spec. The catalogue's anatomy lists drag to
reorder as optional; it is left out until a table needs it, because it
needs a keyboard way to move as well. The popup is a dialog with no
visible title, named by `,(0,k.jsx)(t.code,{children:`label`}),`: it holds checkboxes and a button, which a
`,(0,k.jsx)(t.code,{children:`listbox`}),` cannot.`]})]}),(0,k.jsxs)(p,{value:`guidelines`,children:[(0,k.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,k.jsx)(t.p,{children:`Use a Column Chooser on a table with more columns than most people need at
once, typically six or more, where different people read different ones.`}),(0,k.jsx)(u,{do:(0,k.jsx)(i,{of:y}),doCaption:`A few optional columns beside a locked name column.`,dont:(0,k.jsx)(i,{of:_}),dontCaption:`A chooser for two columns: one is locked, so there is nothing to choose.`}),(0,k.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`To switch between whole layouts`}),` (a summary and a detailed set): use
saved views, so one choice changes several columns at once.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`To filter rows.`}),` Hiding a column does not hide rows; use filters in
the table's toolbar.`]}),`
`,(0,k.jsxs)(t.li,{children:[(0,k.jsx)(t.strong,{children:`For a table that fits.`}),` If every column fits on the screens it is
used on, leave them all shown.`]}),`
`]}),(0,k.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,k.jsxs)(t.ul,{children:[`
`,(0,k.jsxs)(t.li,{children:[`The button reports `,(0,k.jsx)(t.code,{children:`aria-haspopup="dialog"`}),` and `,(0,k.jsx)(t.code,{children:`aria-expanded`}),`. The
popup is a `,(0,k.jsx)(t.code,{children:`role="dialog"`}),` named by the label, "Columns", through
`,(0,k.jsx)(t.code,{children:`aria-label`}),`: it shows no title.`]}),`
`,(0,k.jsx)(t.li,{children:`Opening moves focus into the dialog; Escape closes it and returns focus
to the button.`}),`
`,(0,k.jsx)(t.li,{children:`Each column is a checkbox named by its header, in table order; Space
toggles it, and so does a click anywhere on its row. The shown keys are
reported in column order, the row header always among them.`}),`
`,(0,k.jsxs)(t.li,{children:[`The row header column's checkbox, and the last checked one, are
`,(0,k.jsx)(t.code,{children:`aria-disabled`}),`: ticked and unchangeable.`]}),`
`,(0,k.jsxs)(t.li,{children:[`Reset is a button named "Reset columns" that brings back the default
columns, after a `,(0,k.jsx)(t.code,{children:`role="separator"`}),`.`]}),`
`]})]})]})]})}function O(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;function A(){return(A=e((()=>{k=t(),r(),a(),g(),E()})))()}A();export{O as default};