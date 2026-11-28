import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{n as _,t as v}from"./Skeleton-Bz3QoJsu.js";import{a as y,c as b,i as x,l as S,n as C,o as w,r as T,s as E,t as D}from"./Skeleton.stories-C_CtBncA.js";function O(e){let t={a:`a`,code:`code`,div:`div`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c,{of:E}),`
`,`
`,`
`,(0,A.jsx)(t.h1,{id:`skeleton`,children:`Skeleton`}),`
`,(0,A.jsxs)(d,{children:[(0,A.jsxs)(p,{value:`overview`,children:[(0,A.jsx)(t.p,{children:`A placeholder in the shape of content that is still loading, so the page
keeps its layout and the reader sees what is coming.`}),(0,A.jsx)(m,{of:E}),(0,A.jsx)(s,{of:x}),(0,A.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`appearance`}),` sets the corners, to match what the shape stands in for. Any
appearance takes any size.`]}),(0,A.jsx)(s,{of:T}),(0,A.jsxs)(t.table,{children:[(0,A.jsx)(t.thead,{children:(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.th,{children:`Appearance`}),(0,A.jsx)(t.th,{children:`Use for`})]})}),(0,A.jsxs)(t.tbody,{children:[(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`circle`})}),(0,A.jsx)(t.td,{children:`An avatar or a round icon. Its height is its width.`})]}),(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`square`})}),(0,A.jsx)(t.td,{children:`The default: an image, a media block, anything with square corners.`})]}),(0,A.jsxs)(t.tr,{children:[(0,A.jsx)(t.td,{children:(0,A.jsx)(t.code,{children:`rounded`})}),(0,A.jsx)(t.td,{children:`Text, buttons and cards: anything with the kit's rounded corners.`})]})]})]}),(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.code,{children:`rows`}),` stacks lines of text, the last one shorter so it reads as a
paragraph rather than a block.`]}),(0,A.jsx)(s,{of:w}),(0,A.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,A.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-js`,children:`import { Skeleton } from 'marram/skeleton'
`})}),(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/skeleton.json
`})}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[`Source: `,(0,A.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/loaders/Skeleton.tsx`,rel:`nofollow`,children:`src/components/loaders/Skeleton.tsx`})]}),`
`,(0,A.jsxs)(t.li,{children:[`Spec: `,(0,A.jsx)(t.a,{href:`https://www.uiguideline.com/components/skeleton`,rel:`nofollow`,children:`uiguideline.com/components/skeleton`})]}),`
`,(0,A.jsx)(t.li,{children:`Behaviour: a plain element; there is no behaviour here worth Base UI`}),`
`,(0,A.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,A.jsxs)(p,{value:`specs`,children:[(0,A.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,A.jsx)(l,{parts:b,children:(0,A.jsx)(i,{of:D})}),(0,A.jsx)(t.p,{children:`A skeleton is built from shapes like these, placed by the page in the
layout of the content that will replace them.`}),(0,A.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,A.jsxs)(t.p,{children:[`A skeleton has no sizes: `,(0,A.jsx)(t.code,{children:`width`}),` and `,(0,A.jsx)(t.code,{children:`height`}),` copy the content it stands
in for. These are the defaults, and the parts it sizes itself.`]}),(0,A.jsx)(h,{caption:`Every appearance`,rows:[{part:`Shape`,property:`Default height`,token:`--space-4`},{part:`Circle`,property:`Default width and height`,token:`--space-10`},{part:`Lines`,property:`Gap`,token:`--space-2`},{part:`Rounded`,property:`Corner radius`,token:`--radius-md`},{part:`Circle`,property:`Corner radius`,token:`--radius-pill`}]}),(0,A.jsxs)(t.p,{children:[`The default width is the container's. The last of several `,(0,A.jsx)(t.code,{children:`rows`}),` is 60%
of the width.`]}),(0,A.jsx)(t.h2,{id:`color`,children:`Color`}),(0,A.jsx)(t.p,{children:`Every shape is one colour, the same subtle surface as a hover. It is below
any contrast floor on purpose: a placeholder should read as "something
goes here", not compete with content that has arrived. Switch the theme in
the toolbar: the value follows.`}),(0,A.jsx)(h,{caption:`Every appearance`,rows:[{part:`Shape`,property:`Background`,token:`--color-background-neutral`}]}),(0,A.jsx)(t.h2,{id:`states`,children:`States`}),(0,A.jsx)(t.p,{children:`A skeleton is not interactive: it has no hover, focus or pressed state.`}),(0,A.jsx)(f,{states:[{label:`Static`},{label:`Pulsing`,content:(0,A.jsx)(t.div,{style:j,children:(0,A.jsx)(v,{appearance:`rounded`,rows:3,height:12,width:200,hasAnimation:!0})})}],children:(0,A.jsx)(`div`,{style:j,children:(0,A.jsx)(v,{appearance:`rounded`,rows:3,height:12,width:200})})}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Static`}),` is the default.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`Pulsing`}),`, with `,(0,A.jsx)(t.code,{children:`hasAnimation`}),`, fades to 50% and back every 1.6s. It
stops under `,(0,A.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),`
`]}),(0,A.jsx)(t.h2,{id:`api`,children:`API`}),(0,A.jsx)(`div`,{style:{overflowX:`auto`},children:(0,A.jsx)(o,{of:E})}),(0,A.jsxs)(t.p,{children:[`Every other `,(0,A.jsx)(t.code,{children:`<div>`}),` attribute passes through to the outer element.`]})]}),(0,A.jsxs)(p,{value:`guidelines`,children:[(0,A.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,A.jsx)(t.p,{children:`Use a Skeleton when you know the shape of what is loading: a list, a card,
a profile. Match the shapes to the content that will replace them, with
the same sizes and the same gaps.`}),(0,A.jsx)(u,{do:(0,A.jsx)(i,{of:x}),doCaption:`Shapes of the content that is coming: the layout holds when it arrives.`,dont:(0,A.jsx)(i,{of:y}),dontCaption:`One block for a whole card jumps to a different layout on load, which is worse than a spinner.`}),(0,A.jsxs)(t.p,{children:[`Animate the few shapes that matter, or none: `,(0,A.jsx)(t.code,{children:`hasAnimation`}),` is off by
default because a screen of pulsing shapes is noise.`]}),(0,A.jsx)(s,{of:C}),(0,A.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`When you do not know the shape of what is coming.`}),` Use a
`,(0,A.jsx)(t.a,{href:`?path=/docs/components-loaders-spinner--docs`,children:`Spinner`}),`.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For a long task with a known size.`}),` Use a
`,(0,A.jsx)(t.a,{href:`?path=/docs/components-loaders-progressbar--docs`,children:`Progress Bar`}),`.`]}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`For a load that is usually instant.`}),` A skeleton that flashes for
200ms is noise; show nothing, or a Spinner with a `,(0,A.jsx)(t.code,{children:`delay`}),`.`]}),`
`]}),(0,A.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,A.jsxs)(t.ul,{children:[`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:`A skeleton is decoration`}),` and is `,(0,A.jsx)(t.code,{children:`aria-hidden`}),`, with its `,(0,A.jsx)(t.code,{children:`rows`}),`
hidden as one. It says nothing to a screen reader.`]}),`
`,(0,A.jsxs)(t.li,{children:[`The region it stands in for has to say it is loading: put
`,(0,A.jsx)(t.code,{children:`aria-busy="true"`}),` on it, as the CardPlaceholder story does, and remove
it when the content arrives.`]}),`
`,(0,A.jsx)(t.li,{children:`If the wait matters, announce it: a visually hidden status, or a Spinner
with a label.`}),`
`,(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.code,{children:`--color-background-neutral`}),` is below 3:1 on the page in both modes, on purpose. It is not
content, and should not compete with content that has arrived.`]}),`
`,(0,A.jsxs)(t.li,{children:[`The pulse stops under `,(0,A.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),`
`]})]})]})]})}function k(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A,j;function M(){return(M=e((()=>{A=t(),r(),a(),g(),_(),S(),j={background:`var(--color-surface)`,padding:`var(--space-4)`,borderRadius:`var(--radius-lg)`}})))()}M();export{j as card,k as default};