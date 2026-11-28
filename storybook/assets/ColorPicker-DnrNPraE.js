import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{a as _,c as v,d as y,f as b,i as x,l as S,n as C,o as w,r as T,s as E,t as D,u as O}from"./ColorPicker.stories-Bg8Epnv8.js";function k(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c,{of:C}),`
`,(0,j.jsx)(t.h1,{id:`color-picker`,children:`Color Picker`}),`
`,(0,j.jsxs)(d,{children:[(0,j.jsxs)(p,{value:`overview`,children:[(0,j.jsx)(t.p,{children:`Chooses a colour: type it in any CSS format, pick a swatch, find it on a
saturation and brightness area and a hue strip, or type its channels in
Hex, RGB, HSL or HSB. The panel is laid out like Figma's colour picker.`}),(0,j.jsx)(m,{of:C}),(0,j.jsx)(s,{of:T}),(0,j.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,j.jsx)(t.p,{children:`Two exports.`}),(0,j.jsxs)(t.table,{children:[(0,j.jsx)(t.thead,{children:(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.th,{children:`Export`}),(0,j.jsx)(t.th,{children:`Use for`})]})}),(0,j.jsxs)(t.tbody,{children:[(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.td,{children:(0,j.jsx)(t.code,{children:`ColorPicker`})}),(0,j.jsx)(t.td,{children:`A form field: the hex in a text field, with a swatch button that opens the panel in a popover.`})]}),(0,j.jsxs)(t.tr,{children:[(0,j.jsx)(t.td,{children:(0,j.jsx)(t.code,{children:`ColorPanel`})}),(0,j.jsx)(t.td,{children:`The panel on its own, always open: a sidebar, an inspector, a settings page about colour.`})]})]})]}),(0,j.jsx)(s,{of:E}),(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`alpha`}),` adds opacity; `,(0,j.jsx)(t.code,{children:`defaultFormat`}),` picks which channels the fields show
first.`]}),(0,j.jsx)(s,{of:w}),(0,j.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,j.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:`language-js`,children:`import { ColorPicker, ColorPanel } from 'marram/color-picker'
`})}),(0,j.jsx)(t.pre,{children:(0,j.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/color-picker.json
`})}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[`Source: `,(0,j.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/controls/ColorPicker.tsx`,rel:`nofollow`,children:`src/components/controls/ColorPicker.tsx`})]}),`
`,(0,j.jsxs)(t.li,{children:[`Spec: `,(0,j.jsx)(t.a,{href:`https://www.uiguideline.com/components/color-picker`,rel:`nofollow`,children:`uiguideline.com/components/color-picker`})]}),`
`,(0,j.jsxs)(t.li,{children:[`Behaviour: `,(0,j.jsx)(t.a,{href:`https://base-ui.com/react/components/popover`,rel:`nofollow`,children:`Base UI Popover`}),` and `,(0,j.jsx)(t.a,{href:`https://base-ui.com/react/components/slider`,rel:`nofollow`,children:`Slider`})]}),`
`,(0,j.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,j.jsxs)(p,{value:`specs`,children:[(0,j.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,j.jsx)(l,{parts:S,children:(0,j.jsx)(i,{of:D})}),(0,j.jsxs)(t.p,{children:[`The panel here is shown open under its field; in a `,(0,j.jsx)(t.code,{children:`ColorPicker`}),` the
swatch button opens it in a popover 8px under the whole field, aligned to
its start, as Select's list and Date Picker's calendar.`]}),(0,j.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,j.jsx)(t.p,{children:`The field is a Text Input: the same tiers, padding and label. The panel is
the same at both field sizes.`}),(0,j.jsx)(h,{caption:`Field, sm`,rows:[{part:`Field`,property:`Height`,token:`--control-md`},{part:`Field`,property:`Corner radius`,token:`--control-md-radius-field`}]}),(0,j.jsx)(h,{caption:`Field, md`,rows:[{part:`Field`,property:`Height`,token:`--control-lg`},{part:`Field`,property:`Corner radius`,token:`--control-md-radius-field`}]}),(0,j.jsx)(h,{caption:`Panel`,rows:[{part:`Swatch button`,property:`Size`,token:`--control-xs`},{part:`Swatch button and swatches`,property:`Corner radius`,token:`--radius-sm`},{part:`Popover`,property:`Padding`,token:`--space-4`},{part:`Popover`,property:`Corner radius`,token:`--radius-lg`},{part:`Panel`,property:`Gap between sections`,token:`--space-cluster`},{part:`Area`,property:`Corner radius`,token:`--radius-md`},{part:`Hue and opacity strips`,property:`Thickness`,token:`--space-3`},{part:`Hue and opacity strips`,property:`Gap between them`,token:`--space-stack`},{part:`Thumbs`,property:`Size`,token:`--space-4`},{part:`Format menu and channel fields`,property:`Gap`,token:`--space-inline`},{part:`Swatches`,property:`Size`,token:`--box-sm`},{part:`Swatches`,property:`Gap`,token:`--space-inline`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Hit area, strip thumbs`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,j.jsx)(t.p,{children:`The panel is 16rem wide, so eight 24px swatches fit in their one row (it
does not wrap), and the area is
10rem tall. The format menu and the channels are the kit's sm (32px)
Select and field box.`}),(0,j.jsx)(t.h2,{id:`color`,children:`Color`}),(0,j.jsx)(t.p,{children:`The area, the hue strip and the checkerboard are the colour model itself,
so they are fixed colours, not theme tokens. The thumbs are white rings
with a dark edge: one of the two is at least 3:1 against whatever colour
is under them.`}),(0,j.jsx)(h,{rows:[{part:`Popover`,property:`Background`,token:`--color-surface-overlay`},{part:`Popover`,property:`Text`,token:`--color-text`},{part:`Popover and swatch divider`,property:`Border`,token:`--color-border`},{part:`Popover`,property:`Shadow`,token:`--shadow-overlay`},{part:`Swatch button`,property:`Inner edge`,token:`--color-border-bold`},{part:`Chosen swatch`,property:`Ring`,token:`--color-background-brand-bold`},{part:`Channel fields`,property:`Divider`,token:`--color-border`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,j.jsx)(t.p,{children:`Swatches have a faint inner edge, black 10% in light mode and white 10%
in dark, as in Figma. That is below the 3:1 of WCAG 1.4.11 round a white
swatch on white, accepted because the hex in the field, not the edge,
tells the colour.`}),(0,j.jsx)(t.h2,{id:`states`,children:`States`}),(0,j.jsx)(f,{states:[{label:`Enabled`},{label:`Focus`,pseudo:`focus-visible`},{label:`Disabled`,content:(0,j.jsx)(y,{label:`Brand colour`,disabled:!0})},{label:`Error`,content:(0,j.jsx)(y,{label:`Brand colour`,validationState:`error`,helperText:`Pick a darker colour.`})}],children:(0,j.jsx)(y,{label:`Brand colour`})}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Focus`}),` follows Text Input on the field. In the panel every thumb,
swatch and field draws a 2px `,(0,j.jsx)(t.code,{children:`--color-border-focused`}),` outline, 2px outside.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Disabled`}),` dims the field and disables the swatch button.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Error`}),` is Text Input's. Typed text that is not a colour turns the
field to error on its own, with a hint, and keeps the last good value.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Chosen swatch`}),` has a 2px `,(0,j.jsx)(t.code,{children:`--color-background-brand-bold`}),` ring; focused as well, the ring
turns `,(0,j.jsx)(t.code,{children:`--color-border-focused`}),` and moves 1px further out.`]}),`
`]}),(0,j.jsx)(t.h2,{id:`api`,children:`API`}),(0,j.jsx)(`div`,{style:{overflowX:`auto`},children:(0,j.jsx)(o,{of:C})}),(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`ColorPanel`}),` takes `,(0,j.jsx)(t.code,{children:`value`}),`, `,(0,j.jsx)(t.code,{children:`defaultValue`}),`, `,(0,j.jsx)(t.code,{children:`onValueChange`}),`, `,(0,j.jsx)(t.code,{children:`alpha`}),`,
`,(0,j.jsx)(t.code,{children:`defaultFormat`}),`, `,(0,j.jsx)(t.code,{children:`swatches`}),`, `,(0,j.jsx)(t.code,{children:`disabled`}),` and `,(0,j.jsx)(t.code,{children:`className`}),`.`]}),(0,j.jsxs)(t.p,{children:[(0,j.jsx)(t.code,{children:`parseColor(text)`}),` reads any CSS colour (`,(0,j.jsx)(t.code,{children:`rgb(59 130 246)`}),`,
`,(0,j.jsx)(t.code,{children:`hsl(217 91% 60% / 50%)`}),`, `,(0,j.jsx)(t.code,{children:`oklch(...)`}),`, `,(0,j.jsx)(t.code,{children:`rebeccapurple`}),`) to the same hex,
or `,(0,j.jsx)(t.code,{children:`null`}),`; the browser parses it, so outside one only hex is read.
`,(0,j.jsx)(t.code,{children:`normalizeHex(text)`}),` turns `,(0,j.jsx)(t.code,{children:`#abc`}),`, `,(0,j.jsx)(t.code,{children:`ABC`}),` or `,(0,j.jsx)(t.code,{children:`#AABBCC`}),` into `,(0,j.jsx)(t.code,{children:`#aabbcc`}),`,
keeps an alpha byte (`,(0,j.jsx)(t.code,{children:`#3b82f680`}),`, or `,(0,j.jsx)(t.code,{children:`#abc8`}),` as `,(0,j.jsx)(t.code,{children:`#aabbcc88`}),`) unless it is
`,(0,j.jsx)(t.code,{children:`ff`}),`, and turns anything else into `,(0,j.jsx)(t.code,{children:`null`}),`.`]}),(0,j.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Hex in, hex out.`}),` The value is lowercase `,(0,j.jsx)(t.code,{children:`#rrggbb`}),`, with an alpha
byte only while opacity is under 100%. Typed text is read on Enter or
blur: hex of 3, 4, 6 or 8 digits with or without `,(0,j.jsx)(t.code,{children:`#`}),`, or any CSS colour.
It is shown back as hex.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Formats are a view, not a value.`}),` RGB, HSL and HSB only change the
fields; the value stays hex. Channel fields commit on Enter or blur, and
up and down step by 1 (Shift by 10), as in a design tool.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`The hue is remembered.`}),` The picker keeps hue, saturation and
brightness, so dragging to black and back leaves the hue strip where it
was instead of jumping to red.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`Not in this version:`}),` Figma's library picker ("On this page"),
gradients and an eyedropper.`]}),`
`]})]}),(0,j.jsxs)(p,{value:`guidelines`,children:[(0,j.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,j.jsx)(t.p,{children:`Use a colour picker when any colour is a valid answer: a brand colour, a
chart series, a label someone defines. When there is a palette to follow,
offer it as named swatches.`}),(0,j.jsx)(u,{do:(0,j.jsx)(i,{of:x}),doCaption:`The colours people should use, as named swatches: one click, and a screen reader says “Blue”, not a hex.`,dont:(0,j.jsx)(i,{of:_}),dontCaption:`A palette to follow but no swatches: people match it by eye and land a few steps off.`}),(0,j.jsx)(s,{of:v}),(0,j.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`For a few fixed colours.`}),` When only a set of colours is allowed (tag
colours, a theme accent), use a
`,(0,j.jsx)(t.a,{href:`?path=/docs/components-controls-radio--docs`,children:`Radio`}),` group of swatches or
a Select: the picker lets anyone type any colour.`]}),`
`,(0,j.jsxs)(t.li,{children:[(0,j.jsx)(t.strong,{children:`To show a colour.`}),` Use a swatch and its hex as text.`]}),`
`]}),(0,j.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,j.jsxs)(t.ul,{children:[`
`,(0,j.jsx)(t.li,{children:`The field is a text input named by its label. The swatch button is
named "Choose colour, #3b82f6 selected", and the popover is a dialog
named "Choose colour" that returns focus to the button on Escape.`}),`
`,(0,j.jsx)(t.li,{children:`The area is one tab stop: a slider named "Saturation" whose value text
reads both numbers ("Saturation 76%, brightness 96%"). Left and right
change saturation, up and down brightness, Shift moves 10%, Page Up and
Page Down change brightness by 10%, Home and End set saturation to 0 or
100%. A second "Brightness" slider is there for a screen reader's
browse mode.`}),`
`,(0,j.jsx)(t.li,{children:`The hue strip is a slider named "Hue", read as "217 degrees"; the
opacity strip, "Opacity", read as "50%".`}),`
`,(0,j.jsx)(t.li,{children:`The format menu is the kit's Select, named "Colour format". Channel
fields are text inputs named for what they hold ("Red", "Hue degrees",
"Lightness percent", "Opacity percent", "Hex"), so they do not share a
name with the sliders.`}),`
`,(0,j.jsx)(t.li,{children:`Swatches are native radios in a radio group named "Swatches": one tab
stop, arrows move and choose, and the chosen one is checked. None is
checked while the colour is not one of them. They are 24px with 8px
between them, which meets WCAG 2.5.8 without a larger invisible target.`}),`
`,(0,j.jsx)(t.li,{children:`A colour is never the only way to know the value: the hex is always in
the field.`}),`
`]})]})]})]})}function A(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,j.jsx)(t,{...e,children:(0,j.jsx)(k,{...e})}):k(e)}var j;function M(){return(M=e((()=>{j=t(),r(),a(),g(),b(),O()})))()}M();export{A as default};