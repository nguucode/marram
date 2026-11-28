import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{a as _,c as v,i as y,l as b,n as x,o as S,r as C,s as w,t as T}from"./Menubar.stories-l-7wHxEs.js";function E(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{of:S}),`
`,(0,O.jsx)(t.h1,{id:`menubar`,children:`Menubar`}),`
`,(0,O.jsxs)(d,{children:[(0,O.jsxs)(p,{value:`overview`,children:[(0,O.jsx)(t.p,{children:`A row of menus across the top of a tool, as in a desktop app: File, Edit,
View, each opening a flyout of commands. Use it in an editor-like screen
with more commands than a toolbar can show.`}),(0,O.jsx)(m,{of:S}),(0,O.jsx)(s,{of:x}),(0,O.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,O.jsxs)(t.p,{children:[`Menubar has one look. Each flyout is a
`,(0,O.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),` popup and takes the
same entries: actions with shortcuts, links, submenus, checkbox and radio
items, groups and separators.`]}),(0,O.jsxs)(t.table,{children:[(0,O.jsx)(t.thead,{children:(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.th,{children:`Menu`}),(0,O.jsx)(t.th,{children:`Use for`})]})}),(0,O.jsxs)(t.tbody,{children:[(0,O.jsxs)(t.tr,{children:[(0,O.jsx)(t.td,{children:`Enabled (the default)`}),(0,O.jsx)(t.td,{children:`Commands that apply now.`})]}),(0,O.jsxs)(t.tr,{children:[(0,O.jsxs)(t.td,{children:[`Disabled (`,(0,O.jsx)(t.code,{children:`disabled`}),`)`]}),(0,O.jsx)(t.td,{children:`A menu that does not apply in the current state. It stays in place, muted, so the bar does not shift.`})]})]})]}),(0,O.jsx)(s,{of:C}),(0,O.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,O.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-js`,children:`import { Menubar } from 'marram/menubar'
`})}),(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/menubar.json
`})}),(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`Source: `,(0,O.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/navigation/Menubar.tsx`,rel:`nofollow`,children:`src/components/navigation/Menubar.tsx`})]}),`
`,(0,O.jsxs)(t.li,{children:[`Spec: `,(0,O.jsx)(t.a,{href:`https://www.uiguideline.com/components/menu`,rel:`nofollow`,children:`uiguideline.com/components/menu`})]}),`
`,(0,O.jsxs)(t.li,{children:[`Behaviour: `,(0,O.jsx)(t.a,{href:`https://base-ui.com/react/components/menubar`,rel:`nofollow`,children:`Base UI Menubar`})]}),`
`,(0,O.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,O.jsxs)(p,{value:`specs`,children:[(0,O.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,O.jsx)(l,{parts:v,children:(0,O.jsx)(i,{of:T})}),(0,O.jsxs)(t.p,{children:[`The flyout on this tab is a picture: it is drawn open in place, not
positioned over the page. Its parts are Menu's; see
`,(0,O.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),` for the item's own
anatomy.`]}),(0,O.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,O.jsx)(t.p,{children:`The bar is a strip: its triggers are rows of the sm control tier (24px),
shorter than the 36px items in the flyout. Atlassian Design has no
menubar, so the bar follows the Figma library; the flyouts are Menu's. The
bar has no fill, border or padding: it is its triggers side by side,
touching, each with the sm control's corner. Labels are regular weight.`}),(0,O.jsx)(h,{caption:`Bar`,rows:[{part:`Trigger`,property:`Height`,token:`--control-sm`},{part:`Trigger`,property:`Corner radius`,token:`--control-sm-radius`},{part:`Trigger`,property:`Inline padding`,token:`--control-sm-pad`},{part:`Trigger`,property:`Font size`,token:`--text-body`},{part:`Trigger`,property:`Line height`,token:`--leading-body`},{part:`Trigger`,property:`Focus ring width`,token:`--focus-width`},{part:`Hit area`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,O.jsx)(t.p,{children:`A flyout opens 4px below its trigger, lined up with the trigger's start
edge. When the bar is wider than its container, it scrolls sideways.`}),(0,O.jsx)(t.h2,{id:`color`,children:`Color`}),(0,O.jsx)(h,{caption:`Bar`,rows:[{part:`Bar`,property:`Text`,token:`--color-text`},{part:`Trigger, hover, highlighted or open`,property:`Background`,token:`--color-background-neutral`},{part:`Trigger, hover, highlighted or open`,property:`Text`,token:`--color-text`},{part:`Trigger, disabled`,property:`Text`,token:`--color-text-subtlest`},{part:`Trigger, focus`,property:`Ring`,token:`--color-border-focused`}]}),(0,O.jsx)(t.p,{children:`The flyout's colours are Menu's.`}),(0,O.jsx)(t.h2,{id:`states`,children:`States`}),(0,O.jsx)(f,{states:[{label:`Closed`,content:(0,O.jsx)(i,{of:x})},{label:`Open`,content:(0,O.jsx)(i,{of:w})},{label:`Disabled menu`,content:(0,O.jsx)(i,{of:C})}]}),(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`Hover and highlighted`}),`: the trigger takes the same `,(0,O.jsx)(t.code,{children:`--color-background-neutral`}),` fill as
a highlighted item in the flyout.`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`Open`}),`: the trigger keeps that fill while its flyout is open, so the
reader sees which menu they are in.`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`Focus`}),`: a keyboard focus ring inside the trigger, so it does not
collide with its neighbours.`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`Disabled`}),`: muted at 60% opacity, no fill on hover, skipped by the
arrow keys.`]}),`
`]}),(0,O.jsx)(t.h2,{id:`api`,children:`API`}),(0,O.jsx)(`div`,{style:{overflowX:`auto`},children:(0,O.jsx)(o,{of:S})}),(0,O.jsxs)(t.p,{children:[(0,O.jsx)(t.code,{children:`menus`}),` is data, and each menu's `,(0,O.jsx)(t.code,{children:`items`}),` is Menu's `,(0,O.jsx)(t.code,{children:`items`}),`. Shortcuts are
plain trailing text, as in Menu: display only, binding the key is left to
the page.`]}),(0,O.jsx)(t.h3,{id:`differences-from-the-spec`,children:`Differences from the spec`}),(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`No navigation menu.`}),` The source pairs a menubar with a navigation
menu: links in flyouts, each with a description. Marram leaves that
out: app navigation is a side or top navigation of links, which shows
the current page; a flyout of described links is a marketing-site
pattern.`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`No item description.`}),` Flyout items are Menu's entries, one line
each. A second line of text is what a navigation menu needs, and it is
not built.`]}),`
`]})]}),(0,O.jsxs)(p,{value:`guidelines`,children:[(0,O.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,O.jsx)(t.p,{children:`Use a Menubar in a screen that works like a desktop tool, an invoice or
report editor, a spreadsheet, where people look for commands by category
and learn their shortcuts. Name each menu for what it holds and keep the
order people know from desktop apps: File, Edit, View, then your own,
then Help.`}),(0,O.jsx)(u,{do:(0,O.jsx)(i,{of:y}),doCaption:`Commands, grouped by the familiar File, Edit, View, with their shortcuts.`,dont:(0,O.jsx)(i,{of:_}),dontCaption:`Pages behind flyouts. Navigation belongs in a side or top navigation of links, where the current page shows.`}),(0,O.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`For the app's navigation.`}),` Use a side or top navigation of
`,(0,O.jsx)(t.a,{href:`?path=/docs/components-navigation-link--docs`,children:`Links`}),`: it shows where
the reader is, a menubar does not.`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`For a few actions on one thing.`}),` Use a
`,(0,O.jsx)(t.a,{href:`?path=/docs/components-navigation-menu--docs`,children:`Menu`}),` from a button, or
Buttons.`]}),`
`]}),(0,O.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`The bar is a `,(0,O.jsx)(t.code,{children:`role="menubar"`}),`, named by `,(0,O.jsx)(t.code,{children:`aria-label`}),`. Each trigger is a
`,(0,O.jsx)(t.code,{children:`menuitem`}),` with `,(0,O.jsx)(t.code,{children:`aria-haspopup="menu"`}),` and `,(0,O.jsx)(t.code,{children:`aria-expanded`}),`; a disabled
menu's trigger has `,(0,O.jsx)(t.code,{children:`aria-disabled`}),`.`]}),`
`,(0,O.jsx)(t.li,{children:`The bar is one tab stop. Arrow Left and Right move along the triggers,
skipping disabled menus.`}),`
`,(0,O.jsx)(t.li,{children:`Arrow Down, Enter or Space on a trigger opens its flyout on the first
item. Inside a flyout the keys are Menu's.`}),`
`,(0,O.jsx)(t.li,{children:`With a flyout open, Arrow Right and Left move to the next and previous
menu and open it, and moving the pointer onto another trigger opens that
menu instead.`}),`
`,(0,O.jsx)(t.li,{children:`Escape closes the flyout and returns focus to its trigger; choosing an
action closes it too.`}),`
`,(0,O.jsx)(t.li,{children:`Shortcuts and icons are hidden from assistive tech; the label names the
item.`}),`
`,(0,O.jsxs)(t.li,{children:[`Triggers are 24px tall; on touch screens (`,(0,O.jsx)(t.code,{children:`pointer: coarse`}),`) their hit
area grows to 44px.`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.code,{children:`isModal`}),` (the default) makes the rest of the page inert while a flyout
is open, so a screen reader stays in the menu.`]}),`
`]})]})]})]})}function D(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;function k(){return(k=e((()=>{O=t(),r(),a(),g(),b()})))()}k();export{D as default};