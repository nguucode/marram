import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{a as _,c as v,d as y,i as b,l as x,n as S,o as C,r as w,s as T,t as E,u as D}from"./FileUploader.stories-B6weRxbv.js";function O(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[`
`,`
`,(0,A.jsx)(c,{of:C}),`
`,(0,A.jsx)(t.h1,{id:`file-uploader`,children:`File Uploader`}),`
`,(0,A.jsxs)(d,{children:[(0,A.jsxs)(p,{value:`overview`,children:[(0,A.jsx)(t.p,{children:`Choose files to send: drag them onto the drop zone or pick them with the
button. It checks type, size and count, lists what was chosen, and shows
progress or an error per file. It does not upload: your code does, and
tells it how that is going.`}),(0,A.jsx)(m,{of:C}),(0,A.jsx)(s,{of:x}),(0,A.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,A.jsxs)(t.table,{children:[(0,A.jsx)(t.thead,{children:(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.th,{children:`Mode`}),(0,A.jsx)(t.th,{children:`Use for`})]})}),(0,A.jsxs)(t.tbody,{children:[(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`multiple`})}),(0,A.jsxs)(t.td,{children:[`Attachments, a batch of photos: files are appended, up to `,(0,A.jsx)(t.code,{children:`maxFiles`}),`.`]})]}),(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:`Single`}),(0,A.jsx)(t.td,{children:`One document: an invoice, a CV. A new file replaces the chosen one, if it passes the checks.`})]})]})]}),(0,A.jsx)(s,{of:v}),(0,A.jsx)(t.p,{children:`Each file gets a type icon: a page with a coloured badge for Word, Excel,
PowerPoint, PDF, image and audio, after Microsoft 365, from the extension
or MIME type. Anything else is the bare page.`}),(0,A.jsx)(s,{of:_}),(0,A.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,A.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-js`,children:`import { FileUploader } from 'marram/file-uploader'
`})}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/file-uploader.json
`})}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[`Source: `,(0,A.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/inputs/FileUploader.tsx`,rel:`nofollow`,children:`src/components/inputs/FileUploader.tsx`})]}),`
`,(0,A.jsxs)(t.li,{children:[`Spec: `,(0,A.jsx)(t.a,{href:`https://www.uiguideline.com/components/file-uploader`,rel:`nofollow`,children:`uiguideline.com/components/file-uploader`})]}),`
`,(0,A.jsxs)(t.li,{children:[`Behaviour: a native `,(0,A.jsx)(t.code,{children:`<input type="file">`}),` behind a kit `,(0,A.jsx)(t.a,{href:`?path=/docs/components-buttons-button--docs`,children:`Button`})]}),`
`,(0,A.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,A.jsxs)(p,{value:`specs`,children:[(0,A.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,A.jsx)(l,{parts:D,children:(0,A.jsx)(i,{of:E})}),(0,A.jsx)(t.p,{children:`Two more parts show only when needed:`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Errors`}),`: one line per file that was not added, under the drop zone,
e.g. "raw-scan.png is larger than 5 MB."`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`File error`}),`: in place of the progress ring, a short message from
`,(0,A.jsx)(t.code,{children:`getFileStatus`}),`, e.g. "Upload failed". A long one truncates.`]}),`
`]}),(0,A.jsx)(s,{of:T}),(0,A.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,A.jsxs)(t.p,{children:[`One size. The buttons inside are `,(0,A.jsx)(t.code,{children:`sm`}),` Buttons, 24px tall.`]}),(0,A.jsx)(h,{caption:`Drop zone`,rows:[{part:`Drop zone`,property:`Block padding`,token:`--space-container`},{part:`Drop zone`,property:`Inline padding`,token:`--space-group`},{part:`Drop zone`,property:`Gap`,token:`--space-inline`},{part:`Drop zone`,property:`Corner radius`,token:`--radius-control`},{part:`Icon`,property:`Size`,token:`--space-6`},{part:`Icon`,property:`Padding`,token:`--space-inline`},{part:`Choose button`,property:`Height`,token:`--control-sm`},{part:`Prompt`,property:`Font size`,token:`--text-body`},{part:`Helper text`,property:`Font size`,token:`--text-body-sm`}]}),(0,A.jsx)(h,{caption:`File list`,rows:[{part:`Label`,property:`Font size`,token:`--text-body-sm`},{part:`Label`,property:`Font weight`,token:`--font-weight-label`},{part:`Label, drop zone, errors, list`,property:`Gap`,token:`--control-sm-gap`},{part:`File row`,property:`Block padding`,token:`--space-stack`},{part:`File row`,property:`Gap`,token:`--space-inline`},{part:`File row`,property:`Corner radius`,token:`--radius-field`},{part:`Name`,property:`Font size`,token:`--text-body`},{part:`Size, file error`,property:`Font size`,token:`--text-body-sm`},{part:`Remove button`,property:`Size`,token:`--control-sm`},{part:`Remove button`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,A.jsxs)(t.p,{children:[`The uploader is 24rem wide unless `,(0,A.jsx)(t.code,{children:`isFullWidth`}),`. A file row has no
inline padding, so its icon and remove button line up with the drop
zone's edges. The type icon is 20px: a 13 × 18 page with a folded corner,
and a badge 8px tall (14px wide, 16px for DOC and MP3) naming the type
in 6px bold: DOC, XLS, PPT, PDF, IMG or MP3.`]}),(0,A.jsx)(t.h2,{id:`color`,children:`Color`}),(0,A.jsx)(h,{caption:`Drop zone`,rows:[{part:`Drop zone`,property:`Background`,token:`--color-background-input`},{part:`Drop zone`,property:`Border, dashed`,token:`--color-border-input`},{part:`Drop zone, dragging`,property:`Border, solid`,token:`--color-border-focused`},{part:`Drop zone, dragging`,property:`Background`,token:`--color-background-neutral`},{part:`Drop zone, errors`,property:`Border`,token:`--color-text-danger`},{part:`Icon`,property:`Background`,token:`--color-surface`},{part:`Icon, prompt, helper`,property:`Colour`,token:`--color-text-subtlest`},{part:`Choose button`,property:`Background`,token:`--color-text`},{part:`Choose button`,property:`Label`,token:`--color-surface`},{part:`Label`,property:`Colour`,token:`--color-text`},{part:`Required asterisk, errors`,property:`Colour`,token:`--color-text-danger`}]}),(0,A.jsx)(h,{caption:`File list`,rows:[{part:`File row, hover`,property:`Background`,token:`--color-interaction-hovered`},{part:`Type icon`,property:`Line round the page and fold`,token:`--color-surface-raised`},{part:`Name`,property:`Colour`,token:`--color-text`},{part:`Size`,property:`Colour`,token:`--color-text-subtlest`},{part:`Progress ring`,property:`Colour`,token:`--color-text-brand`},{part:`File error`,property:`Colour`,token:`--color-text-danger`}]}),(0,A.jsxs)(t.p,{children:[`The type badges keep fixed colours in both modes: they are each file
type's identity, not the theme's, and white on each is above 4.5:1. The
page is an 18% tint of the badge colour and the fold a 40% one; an
unknown type gets a fixed light gray page (#e3e5e8, fold #c2c5cc). The
Choose button is an `,(0,A.jsx)(t.code,{children:`accent contained`}),` Button and the remove buttons
`,(0,A.jsx)(t.code,{children:`secondary ghost`}),`; their states are Button's.`]}),(0,A.jsx)(t.h2,{id:`states`,children:`States`}),(0,A.jsx)(f,{states:[{label:`Enabled`},{label:`Focus`,pseudo:`focus-visible`},{label:`Uploading`,content:(0,A.jsx)(j,{children:(0,A.jsx)(i,{of:E})})},{label:`Disabled`,content:(0,A.jsx)(j,{children:(0,A.jsx)(i,{of:S})})}],children:(0,A.jsx)(j,{children:(0,A.jsx)(i,{of:w})})}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Dragging`}),`: while a file is over the drop zone its edge turns solid
`,(0,A.jsx)(t.code,{children:`--color-border-focused`}),` and it fills with `,(0,A.jsx)(t.code,{children:`--color-background-neutral`}),`, so the change is not colour
alone.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Rejected or required and empty`}),`: the drop zone's edge turns
`,(0,A.jsx)(t.code,{children:`--color-text-danger`}),` and the errors list why, one line per file.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Focus`}),` is the Choose button's and the remove buttons' own ring.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Uploading`}),`: a progress ring beside the remove button while
`,(0,A.jsx)(t.code,{children:`progress`}),` is under 100; it goes at 100. An `,(0,A.jsx)(t.code,{children:`error`}),` takes its place.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Disabled`}),` fades the icon and the buttons, not the text: none of it
is a native label, so faded text would fail contrast rather than be
exempt.`]}),`
`]}),(0,A.jsx)(t.h2,{id:`api`,children:`API`}),(0,A.jsx)(`div`,{style:{overflowX:`auto`},children:(0,A.jsx)(o,{of:C})}),(0,A.jsx)(t.h3,{id:`design-notes`,children:`Design notes`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Checks on every path in.`}),` The system picker filters by `,(0,A.jsx)(t.code,{children:`accept`}),`, but
a drop, or "All files" in the picker, does not. The uploader checks the
type, size and count of everything and says why a file was left out.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`A rejected file never replaces a good one.`}),` In single-file mode a
new file replaces the chosen one only if it passes the checks.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`The same file twice is one file.`}),` Name, size and modified time
match, so it is skipped rather than listed again.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Uploading is yours.`}),` Start it in `,(0,A.jsx)(t.code,{children:`onFilesChange`}),` and report through
`,(0,A.jsx)(t.code,{children:`getFileStatus`}),`.`]}),`
`]})]}),(0,A.jsxs)(p,{value:`guidelines`,children:[(0,A.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,A.jsxs)(t.p,{children:[`Use a File Uploader to attach files to a form: receipts to a claim,
documents to an application. Say what is allowed in `,(0,A.jsx)(t.code,{children:`helperText`}),`, and set
`,(0,A.jsx)(t.code,{children:`accept`}),`, `,(0,A.jsx)(t.code,{children:`maxSize`}),` and `,(0,A.jsx)(t.code,{children:`maxFiles`}),` to match, so the rules are read before
a file is turned away.`]}),(0,A.jsx)(u,{do:(0,A.jsx)(i,{of:w}),doCaption:`The rules up front: types and size in the helper text, checked by accept and maxSize.`,dont:(0,A.jsx)(i,{of:b}),dontCaption:`No rules shown: people learn them one rejection at a time.`}),(0,A.jsxs)(t.p,{children:[`Report upload progress per file with `,(0,A.jsx)(t.code,{children:`getFileStatus`}),`, and keep errors
short ("Upload failed"): the row has room for a few words.`]}),(0,A.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For text people could paste.`}),` Use a
`,(0,A.jsx)(t.a,{href:`?path=/docs/components-inputs-textarea--docs`,children:`Textarea`}),`.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For a link to a file.`}),` Use a
`,(0,A.jsx)(t.a,{href:`?path=/docs/components-inputs-textinput--docs`,children:`Text Input`}),` with
`,(0,A.jsx)(t.code,{children:`type="url"`}),`.`]}),`
`]}),(0,A.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsx)(t.li,{children:`Dragging is a shortcut, never the only way: the Choose button is a
real button, reached by Tab, and opens the system picker. The file
input itself is hidden from assistive tech so there is one control, not
two.`}),`
`,(0,A.jsxs)(t.li,{children:[`The uploader is a `,(0,A.jsx)(t.code,{children:`group`}),` named by its label; `,(0,A.jsx)(t.code,{children:`required`}),` adds
"(required)" to that name, since a group cannot be `,(0,A.jsx)(t.code,{children:`aria-required`}),`.
Submitting it empty shows "Choose at least one file." (or "Choose a
file.") in the errors and moves focus to the Choose button, instead of
the browser's bubble on the hidden input.`]}),`
`,(0,A.jsx)(t.li,{children:`The helper text and any errors describe the Choose button, so they
are read when focus lands on it.`}),`
`,(0,A.jsxs)(t.li,{children:[`The chosen files are a list named "Chosen files" ("Chosen file" when
`,(0,A.jsx)(t.code,{children:`multiple`}),` is off), one item per file.`]}),`
`,(0,A.jsx)(t.li,{children:`A polite status line announces "2 files added. 1 not added." and
"report.pdf removed."`}),`
`,(0,A.jsx)(t.li,{children:`Remove buttons are named "Remove report.pdf". After a remove, focus
moves to the next file's button, or back to Choose when the list is
empty, so it is never lost.`}),`
`,(0,A.jsxs)(t.li,{children:[`The progress ring is a `,(0,A.jsx)(t.code,{children:`progressbar`}),` named "Uploading report.pdf",
with its value.`]}),`
`,(0,A.jsx)(t.li,{children:`While dragging, the drop zone's edge turns solid as well as changing
colour.`}),`
`]})]})]})]})}function k(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A,j;function M(){return(M=e((()=>{A=t(),r(),a(),g(),y(),j=({children:e})=>(0,A.jsxs)(`div`,{className:`zw-fit`,style:{inlineSize:`100%`,minInlineSize:0},children:[(0,A.jsx)(`style`,{children:`.zw-fit input { inline-size: 0 }`}),e]})})))()}M();export{j as Fit,k as default};