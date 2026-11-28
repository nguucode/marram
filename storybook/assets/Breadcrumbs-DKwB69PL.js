import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{a as _,c as v,d as y,i as b,l as x,n as S,o as C,r as w,s as T,t as E,u as D}from"./Breadcrumbs.stories-Dn62nRmn.js";function O(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c,{of:S}),`
`,(0,A.jsx)(t.h1,{id:`breadcrumbs`,children:`Breadcrumbs`}),`
`,(0,A.jsxs)(d,{children:[(0,A.jsxs)(p,{value:`overview`,children:[(0,A.jsx)(t.p,{children:`The trail from the top of a hierarchy down to the current page, each step a
link back up.`}),(0,A.jsx)(m,{of:S}),(0,A.jsx)(s,{of:_}),(0,A.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,A.jsx)(t.p,{children:`Breadcrumbs has one look. What changes is the size, how a long trail
collapses, and what sits between the steps.`}),(0,A.jsxs)(t.table,{children:[(0,A.jsx)(t.thead,{children:(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.th,{children:`Form`}),(0,A.jsx)(t.th,{children:`Use for`})]})}),(0,A.jsxs)(t.tbody,{children:[(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`md`})}),(0,A.jsx)(t.td,{children:`Under a page title, at body size. The default.`})]}),(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`sm`})}),(0,A.jsxs)(t.td,{children:[`Dense headers, panels and side sheets, at `,(0,A.jsx)(t.code,{children:`body-sm`}),`.`]})]}),(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`maxItems`})}),(0,A.jsx)(t.td,{children:`Deep hierarchies, or a trail in a narrow place: the middle collapses to "…", which expands in place.`})]}),(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`separator`})}),(0,A.jsx)(t.td,{children:`A slash or other glyph, where a chevron would clash with nearby icons.`})]})]})]}),(0,A.jsx)(s,{of:v}),(0,A.jsx)(s,{of:w}),(0,A.jsx)(s,{of:b}),(0,A.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,A.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-js`,children:`import { Breadcrumbs } from 'marram/breadcrumbs'
`})}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/breadcrumbs.json
`})}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[`Source: `,(0,A.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/navigation/Breadcrumbs.tsx`,rel:`nofollow`,children:`src/components/navigation/Breadcrumbs.tsx`})]}),`
`,(0,A.jsxs)(t.li,{children:[`Spec: `,(0,A.jsx)(t.a,{href:`https://www.uiguideline.com/components/breadcrumbs`,rel:`nofollow`,children:`uiguideline.com/components/breadcrumbs`})]}),`
`,(0,A.jsxs)(t.li,{children:[`Behaviour: a plain `,(0,A.jsx)(t.code,{children:`<nav>`}),` and `,(0,A.jsx)(t.code,{children:`<ol>`}),`, after the `,(0,A.jsx)(t.a,{href:`https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/`,rel:`nofollow`,children:`APG breadcrumb pattern`})]}),`
`,(0,A.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,A.jsxs)(p,{value:`specs`,children:[(0,A.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,A.jsx)(l,{parts:D,children:(0,A.jsx)(i,{of:E})}),(0,A.jsx)(t.p,{children:`Each step is a list item: its link (or the ellipsis), then a separator.
The last item has no separator after it.`}),(0,A.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,A.jsxs)(t.p,{children:[`Breadcrumbs is text, not a row of controls. At `,(0,A.jsx)(t.code,{children:`md`}),` each item sits in a
24px box around its 14/20 text, with 8px either side of the separator, as
Atlassian Design's breadcrumb items.
Atlassian Design has no small breadcrumb; `,(0,A.jsx)(t.code,{children:`sm`}),` is the kit's own, and its
height is its line height.`]}),(0,A.jsx)(h,{caption:`sm`,rows:[{part:`Text`,property:`Font size`,token:`--text-body-sm`},{part:`Text`,property:`Line height`,token:`--leading-body-sm`}]}),(0,A.jsx)(h,{caption:`md`,rows:[{part:`Item`,property:`Minimum height`,token:`--control-sm`},{part:`Text`,property:`Font size`,token:`--text-body`},{part:`Text`,property:`Line height`,token:`--leading-body`}]}),(0,A.jsx)(h,{caption:`Every size`,rows:[{part:`Item`,property:`Gap between items, and around the separator`,token:`--space-inline`},{part:`Ellipsis`,property:`Inline padding`,token:`--space-1`},{part:`Ellipsis`,property:`Icon size, md`,token:`--icon-md`},{part:`Ellipsis`,property:`Icon size, sm`,token:`--icon-sm`},{part:`Link and ellipsis`,property:`Corner radius`,token:`--radius-sm`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Ellipsis`,property:`Hit area on touch screens`,token:`--target-coarse`}]}),(0,A.jsx)(t.p,{children:`The separator icon is 1em: it follows the text size.`}),(0,A.jsx)(t.h2,{id:`color`,children:`Color`}),(0,A.jsx)(t.p,{children:`One colour set. Switch the theme in the toolbar: the values follow.`}),(0,A.jsx)(h,{caption:`Every size`,rows:[{part:`Link`,property:`Colour`,token:`--color-text-subtlest`},{part:`Link, hover`,property:`Colour`,token:`--color-text`},{part:`Current page`,property:`Colour`,token:`--color-text`},{part:`Separator`,property:`Colour`,token:`--color-text-subtlest`},{part:`Ellipsis`,property:`Colour`,token:`--color-text-subtlest`},{part:`Ellipsis, hover`,property:`Background`,token:`--color-background-neutral`},{part:`Ellipsis, hover`,property:`Colour`,token:`--color-text`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,A.jsx)(t.h2,{id:`states`,children:`States`}),(0,A.jsx)(f,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`}],children:(0,A.jsx)(i,{of:x})}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Hover`}),` turns a link to `,(0,A.jsx)(t.code,{children:`--color-text`}),` and underlines it; on the
ellipsis it fills an `,(0,A.jsx)(t.code,{children:`--color-background-neutral`}),` chip.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,A.jsx)(t.code,{children:`--color-border-focused`}),` outline, 2px outside the link or the
ellipsis.`]}),`
`,(0,A.jsx)(t.li,{children:`There is no disabled state: a level the reader cannot open is left out
of the trail.`}),`
`]}),(0,A.jsx)(t.h2,{id:`api`,children:`API`}),(0,A.jsx)(`div`,{style:{overflowX:`auto`},children:(0,A.jsx)(o,{of:S})}),(0,A.jsxs)(t.p,{children:[`Every other `,(0,A.jsx)(t.code,{children:`<nav>`}),` attribute passes through.`]})]}),(0,A.jsxs)(p,{value:`guidelines`,children:[(0,A.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,A.jsx)(t.p,{children:`Use Breadcrumbs on pages three or more levels deep, under the page title,
so a reader can see where they are and jump back up any number of levels.
It is a secondary aid: the main navigation still has to get people
everywhere.`}),(0,A.jsxs)(t.p,{children:[`Keep the trail on one line. When it would wrap, collapse the middle with
`,(0,A.jsx)(t.code,{children:`maxItems`}),`; the first level and the nearest ones stay in view.`]}),(0,A.jsx)(u,{do:(0,A.jsx)(i,{of:C}),doCaption:`Collapse a long trail with maxItems: one line, and the levels that matter most stay visible.`,dont:(0,A.jsx)(i,{of:T}),dontCaption:`A trail that wraps reads as two rows and pushes the page down.`}),(0,A.jsx)(t.p,{children:`Write each label as the title of the page it opens, short enough to scan.
The last item is the current page, as text: a link to the page you are on
does nothing useful.`}),(0,A.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For history.`}),` Breadcrumbs shows where a page sits, not how the reader
got there. For "go back", use a Back link or
`,(0,A.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`}),`.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`On a flat site.`}),` One or two levels need no trail; the main
navigation already says where you are.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For the steps of a task.`}),` Use a Stepper: it shows the steps ahead
too, and which are done.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`As the main navigation.`}),` Use a side navigation of links, or Tabs.`]}),`
`]}),(0,A.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[`A `,(0,A.jsx)(t.code,{children:`<nav>`}),` landmark named "Breadcrumb" (change it with `,(0,A.jsx)(t.code,{children:`aria-label`}),`),
around an ordered list: screen readers announce the number of items and
the position of each.`]}),`
`,(0,A.jsxs)(t.li,{children:[`Each level above the current page is a real `,(0,A.jsx)(t.code,{children:`<a href>`}),`, in the tab
order.`]}),`
`,(0,A.jsxs)(t.li,{children:[`The last item is text with `,(0,A.jsx)(t.code,{children:`aria-current="page"`}),`, not a link.`]}),`
`,(0,A.jsxs)(t.li,{children:[`Separators are `,(0,A.jsx)(t.code,{children:`aria-hidden`}),`, so they are not read between items.`]}),`
`,(0,A.jsx)(t.li,{children:`The ellipsis is a button named "Show 3 more". Enter or Space expands the
trail and moves focus to the first item it revealed, rather than
dropping it on the page.`}),`
`,(0,A.jsxs)(t.li,{children:[`The ellipsis is under 44px; on touch screens (`,(0,A.jsx)(t.code,{children:`pointer: coarse`}),`) its hit
area grows to 44×44px without it growing.`]}),`
`,(0,A.jsxs)(t.li,{children:[`Focus ring: 2px `,(0,A.jsx)(t.code,{children:`--color-border-focused`}),`, 2px offset.`]}),`
`]})]})]})]})}function k(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;function j(){return(j=e((()=>{A=t(),r(),a(),g(),y()})))()}j();export{k as default};