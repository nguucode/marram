import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{n as _,t as v}from"./Spinner-BMBE6go-.js";import{a as y,c as b,d as x,i as S,l as C,n as w,o as T,r as E,s as D,t as O,u as k}from"./Spinner.stories-CXNYFazp.js";function A(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(c,{of:D}),`
`,(0,M.jsx)(t.h1,{id:`spinner`,children:`Spinner`}),`
`,(0,M.jsxs)(d,{children:[(0,M.jsxs)(p,{value:`overview`,children:[(0,M.jsx)(t.p,{children:`Says that something is loading when there is no telling how long it will
take, or, given a value, how far along it is.`}),(0,M.jsx)(m,{of:D}),(0,M.jsx)(s,{of:C}),(0,M.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,M.jsxs)(t.p,{children:[(0,M.jsx)(t.code,{children:`variant`}),` is the colour of the indicator. The track and the label are the
same in all three.`]}),(0,M.jsx)(s,{of:b}),(0,M.jsxs)(t.table,{children:[(0,M.jsx)(t.thead,{children:(0,M.jsxs)(t.tr,{children:[(0,M.jsx)(t.th,{children:`Variant`}),(0,M.jsx)(t.th,{children:`Use for`})]})}),(0,M.jsxs)(t.tbody,{children:[(0,M.jsxs)(t.tr,{children:[(0,M.jsxs)(t.td,{children:[(0,M.jsx)(v,{variant:`accent`}),` `,(0,M.jsx)(t.code,{children:`accent`})]}),(0,M.jsxs)(t.td,{children:[`The default: a quiet placeholder in `,(0,M.jsx)(t.code,{children:`--color-text`}),`, inside content that has its own colour.`]})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsxs)(t.td,{children:[(0,M.jsx)(v,{variant:`primary`}),` `,(0,M.jsx)(t.code,{children:`primary`})]}),(0,M.jsx)(t.td,{children:`A load the page is about, where the brand colour helps it be found: the first load of a view.`})]}),(0,M.jsxs)(t.tr,{children:[(0,M.jsxs)(t.td,{children:[(0,M.jsx)(v,{variant:`secondary`}),` `,(0,M.jsx)(t.code,{children:`secondary`})]}),(0,M.jsx)(t.td,{children:`Low emphasis: a spinner beside other muted text, or in a dense list.`})]})]})]}),(0,M.jsxs)(t.p,{children:[`With a `,(0,M.jsx)(t.code,{children:`value`}),` it stops spinning and becomes a progress ring, which reads
better than a bar in a small space such as a thumbnail.`]}),(0,M.jsx)(s,{of:E}),(0,M.jsx)(s,{of:T}),(0,M.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,M.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-js`,children:`import { Spinner } from 'marram/spinner'
`})}),(0,M.jsx)(t.pre,{children:(0,M.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/spinner.json
`})}),(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[`Source: `,(0,M.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/loaders/Spinner.tsx`,rel:`nofollow`,children:`src/components/loaders/Spinner.tsx`})]}),`
`,(0,M.jsxs)(t.li,{children:[`Spec: `,(0,M.jsx)(t.a,{href:`https://www.uiguideline.com/components/spinner`,rel:`nofollow`,children:`uiguideline.com/components/spinner`})]}),`
`,(0,M.jsx)(t.li,{children:`Behaviour: a plain element; there is no behaviour here worth Base UI`}),`
`,(0,M.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,M.jsxs)(p,{value:`specs`,children:[(0,M.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,M.jsx)(l,{parts:k,children:(0,M.jsx)(i,{of:O})}),(0,M.jsxs)(t.p,{children:[`While spinning, the indicator is 30% of the ring turning once every
`,(0,M.jsx)(t.code,{children:`--duration-spin`}),`. With no `,(0,M.jsx)(t.code,{children:`label`}),`, a visually hidden "Loading" stands in
for it.`]}),(0,M.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,M.jsx)(t.p,{children:`The ring is a 2.25px stroke at every size, its outer edge on the box's
edge. There is no token for 2.25px, so the thickness is not in the tables.`}),(0,M.jsx)(h,{caption:`sm`,rows:[{part:`Ring`,property:`Width and height`,token:`--space-4`}]}),(0,M.jsx)(h,{caption:`md`,rows:[{part:`Ring`,property:`Width and height`,token:`--space-6`}]}),(0,M.jsx)(h,{caption:`lg`,rows:[{part:`Ring`,property:`Width and height`,token:`--space-8`}]}),(0,M.jsx)(h,{caption:`Every size`,rows:[{part:`Ring to label`,property:`Gap`,token:`--space-2`},{part:`Label`,property:`Font size`,token:`--text-body`},{part:`Label`,property:`Line height`,token:`--leading-body`},{part:`Indicator`,property:`One turn`,token:`--duration-spin`},{part:`Indicator`,property:`One turn, reduced motion`,token:`--duration-spin-reduced`}]}),(0,M.jsx)(t.h2,{id:`color`,children:`Color`}),(0,M.jsx)(t.p,{children:`The indicator is the part that has to be seen, so each variant takes a
colour that clears 3:1 on the page. Switch the theme and the accent in the
toolbar: the values follow.`}),(0,M.jsx)(h,{caption:`primary`,rows:[{part:`Indicator`,property:`Stroke`,token:`--color-text-brand`}]}),(0,M.jsx)(h,{caption:`accent`,rows:[{part:`Indicator`,property:`Stroke`,token:`--color-text`}]}),(0,M.jsx)(h,{caption:`secondary`,rows:[{part:`Indicator`,property:`Stroke`,token:`--color-text-subtlest`}]}),(0,M.jsx)(h,{caption:`Every variant`,rows:[{part:`Track`,property:`Stroke`,token:`--color-border`},{part:`Label`,property:`Colour`,token:`--color-text-subtlest`}]}),(0,M.jsx)(t.h2,{id:`states`,children:`States`}),(0,M.jsx)(t.p,{children:`A spinner is not interactive: it has no hover, focus or pressed state.`}),(0,M.jsx)(f,{states:[{label:`Spinning`},{label:`Progress`,content:(0,M.jsx)(v,{value:40,label:`Uploading`,variant:`primary`})},{label:`Complete`,content:(0,M.jsx)(v,{value:100,label:`Uploaded`,variant:`primary`})}],children:(0,M.jsx)(i,{of:C})}),(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`Spinning`}),` is the default, and what it shows with `,(0,M.jsx)(t.code,{children:`isIndeterminate`}),`
even when given a `,(0,M.jsx)(t.code,{children:`value`}),`.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`Progress`}),` fills the ring clockwise from twelve o'clock, easing
between values over `,(0,M.jsx)(t.code,{children:`--duration-slow`}),`.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`Delayed`}),`: with `,(0,M.jsx)(t.code,{children:`delay`}),`, nothing shows until it has passed. The live
region is in the page, empty, from the start.`]}),`
`]}),(0,M.jsx)(t.h2,{id:`api`,children:`API`}),(0,M.jsx)(`div`,{style:{overflowX:`auto`},children:(0,M.jsx)(o,{of:D})}),(0,M.jsxs)(t.p,{children:[`Every other `,(0,M.jsx)(t.code,{children:`<span>`}),` attribute passes through to the outer element.`]})]}),(0,M.jsxs)(p,{value:`guidelines`,children:[(0,M.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,M.jsx)(t.p,{children:`Use a Spinner when something is loading and you cannot say what its result
will look like or how long it will take. Use one per region that is
loading, labelled with what is coming.`}),(0,M.jsx)(u,{do:(0,M.jsx)(i,{of:S}),doCaption:`One spinner for the region, named for what is coming.`,dont:(0,M.jsx)(i,{of:y}),dontCaption:`A spinner per card says the same thing three times, and three screen-reader announcements.`}),(0,M.jsxs)(t.p,{children:[`Give a load you expect to be fast a `,(0,M.jsx)(t.code,{children:`delay`}),` of 300–500ms. The spinner only
appears if the wait turns out to be long enough to notice.`]}),(0,M.jsx)(s,{of:w}),(0,M.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`When you know the shape of what is coming.`}),` A
`,(0,M.jsx)(t.a,{href:`?path=/docs/components-loaders-skeleton--docs`,children:`Skeleton`}),` keeps the
layout and says more.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`For a long task with a known size`}),`: an upload, an install. Use a
`,(0,M.jsx)(t.a,{href:`?path=/docs/components-loaders-progressbar--docs`,children:`Progress Bar`}),`, or a
`,(0,M.jsx)(t.code,{children:`value`}),` here when space is tight.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsx)(t.strong,{children:`Inside a button.`}),` Use the Button's `,(0,M.jsx)(t.code,{children:`isLoading`}),`: it keeps the button's
width and focus and stops a second click.`]}),`
`]}),(0,M.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,M.jsxs)(t.ul,{children:[`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsxs)(t.strong,{children:[`Spinning, it is `,(0,M.jsx)(t.code,{children:`role="status"`})]}),`, a polite live region, named by
`,(0,M.jsx)(t.code,{children:`label`}),` or "Loading". The region renders empty and its text (the label,
or a visually hidden "Loading") is inserted just after, or once `,(0,M.jsx)(t.code,{children:`delay`}),`
has passed: screen readers announce text added to a live region that is
already in the page, not a region that mounts full.`]}),`
`,(0,M.jsxs)(t.li,{children:[(0,M.jsxs)(t.strong,{children:[`With a value, it is `,(0,M.jsx)(t.code,{children:`role="progressbar"`})]}),` with `,(0,M.jsx)(t.code,{children:`aria-valuenow`}),`,
`,(0,M.jsx)(t.code,{children:`aria-valuemin="0"`}),` and `,(0,M.jsx)(t.code,{children:`aria-valuemax="100"`}),`. Values outside 0–100 are
clamped.`]}),`
`,(0,M.jsx)(t.li,{children:`The SVG is hidden.`}),`
`,(0,M.jsxs)(t.li,{children:[`The indicator clears 3:1 on the page in every variant: `,(0,M.jsx)(t.code,{children:`--color-text-brand`}),`
(measured at 4.5:1 per accent), `,(0,M.jsx)(t.code,{children:`--color-text-subtlest`}),`, `,(0,M.jsx)(t.code,{children:`--color-text`}),`.
The track is decoration and may be faint.`]}),`
`,(0,M.jsxs)(t.li,{children:[`Under `,(0,M.jsx)(t.code,{children:`prefers-reduced-motion`}),` it slows to one turn in 2.5s rather than
stopping, since a frozen arc reads as "stuck", and the progress ring
stops easing between values.`]}),`
`,(0,M.jsxs)(t.li,{children:[`Put `,(0,M.jsx)(t.code,{children:`aria-busy="true"`}),` on the region that is loading, and remove the
spinner when the load ends, so the change is announced.`]}),`
`]})]})]})]})}function j(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,M.jsx)(t,{...e,children:(0,M.jsx)(A,{...e})}):A(e)}var M;function N(){return(N=e((()=>{M=t(),r(),a(),g(),_(),x()})))()}N();export{j as default};