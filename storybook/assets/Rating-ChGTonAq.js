import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{c as i,l as a,n as o,r as s,s as c}from"./blocks-GpDLDP7O.js";import{_ as l,f as u,h as d,i as f,m as p,n as m,o as h,t as g}from"./blocks-COhIzeP7.js";import{a as _,c as v,d as y,f as b,i as x,l as S,m as C,n as w,o as T,p as E,r as D,s as O,t as k,u as A}from"./Rating.stories-BEDw6WEW.js";function j(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(c,{of:O}),`
`,(0,N.jsx)(t.h1,{id:`rating`,children:`Rating`}),`
`,(0,N.jsxs)(d,{children:[(0,N.jsxs)(p,{value:`overview`,children:[(0,N.jsx)(t.p,{children:`Asks for, or shows, a score out of a few stars: a review, a template's
rating, a difficulty.`}),(0,N.jsx)(m,{of:O}),(0,N.jsx)(s,{of:D}),(0,N.jsx)(t.h2,{id:`variants`,children:`Variants`}),(0,N.jsx)(t.p,{children:`A rating either asks for a score or shows one.`}),(0,N.jsxs)(t.table,{children:[(0,N.jsx)(t.thead,{children:(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.th,{children:`Mode`}),(0,N.jsx)(t.th,{children:`Use for`})]})}),(0,N.jsxs)(t.tbody,{children:[(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(E,{label:`Interactive`,defaultValue:3})}),(0,N.jsx)(t.td,{children:`Asking: a review form, rating a template. Whole stars only.`})]}),(0,N.jsxs)(t.tr,{children:[(0,N.jsx)(t.td,{children:(0,N.jsx)(E,{readOnly:!0,value:4.5,"aria-label":`Read-only`})}),(0,N.jsx)(t.td,{children:`Showing: an average beside a product. Fractions draw as a star filled part-way.`})]})]})]}),(0,N.jsx)(s,{of:v}),(0,N.jsx)(s,{of:S}),(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`getValueText`}),` changes what each score is called, for a scale that is not
stars:`]}),(0,N.jsx)(s,{of:w}),(0,N.jsx)(t.h2,{id:`resources`,children:`Resources`}),(0,N.jsx)(t.p,{children:`From npm, or copied into your project through the registry:`}),(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-js`,children:`import { Rating } from 'marram/rating'
`})}),(0,N.jsx)(t.pre,{children:(0,N.jsx)(t.code,{className:`language-sh`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/rating.json
`})}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[`Source: `,(0,N.jsx)(t.a,{href:`https://github.com/nguucode/marram/blob/main/src/components/controls/Rating.tsx`,rel:`nofollow`,children:`src/components/controls/Rating.tsx`})]}),`
`,(0,N.jsxs)(t.li,{children:[`Spec: `,(0,N.jsx)(t.a,{href:`https://www.uiguideline.com/components/rating`,rel:`nofollow`,children:`uiguideline.com/components/rating`})]}),`
`,(0,N.jsx)(t.li,{children:`Behaviour: native radio buttons; no Base UI part covers it`}),`
`,(0,N.jsx)(t.li,{children:`Figma: not in the library yet`}),`
`]})]}),(0,N.jsxs)(p,{value:`specs`,children:[(0,N.jsx)(t.h2,{id:`anatomy`,children:`Anatomy`}),(0,N.jsx)(l,{parts:y,children:(0,N.jsx)(i,{of:k})}),(0,N.jsx)(t.p,{children:`Each star is a label over an invisible native radio, so arrows, Tab and
form submission are the browser's own. Read-only drops the radios: the
stars are one image.`}),(0,N.jsx)(t.h2,{id:`measurements`,children:`Measurements`}),(0,N.jsx)(h,{caption:`sm`,rows:[{part:`Star`,property:`Size`,token:`--space-4`}]}),(0,N.jsx)(h,{caption:`md`,rows:[{part:`Star`,property:`Size`,token:`--space-6`}]}),(0,N.jsx)(h,{caption:`lg`,rows:[{part:`Star`,property:`Size`,token:`--space-8`}]}),(0,N.jsx)(h,{caption:`Every size`,rows:[{part:`Label`,property:`Gap above the stars`,token:`--space-1-5`},{part:`Label`,property:`Font size`,token:`--text-body`},{part:`Label`,property:`Line height`,token:`--leading-body`},{part:`Focus ring`,property:`Width`,token:`--focus-width`},{part:`Focus ring`,property:`Offset`,token:`--focus-offset`},{part:`Focus ring`,property:`Corner radius`,token:`--radius-sm`},{part:`Hit area`,property:`Minimum on touch screens`,token:`--target-coarse`}]}),(0,N.jsxs)(t.p,{children:[`Stars sit 2px apart, below the spacing scale on purpose, as on Tag. The
label is the form label weight, 653 (`,(0,N.jsx)(t.code,{children:`--font-weight-label`}),`), as a Radio
group's legend is.`]}),(0,N.jsx)(t.h2,{id:`color`,children:`Color`}),(0,N.jsx)(h,{rows:[{part:`Filled star`,property:`Colour`,token:`--color-background-warning-bold`},{part:`Empty star`,property:`Colour`,token:`--color-border-bold`},{part:`Label`,property:`Colour`,token:`--color-text`},{part:`Focus ring`,property:`Colour`,token:`--color-border-focused`}]}),(0,N.jsxs)(t.p,{children:[`The fill is the bright `,(0,N.jsx)(t.code,{children:`--color-background-warning-bold`}),` amber, not the darker warning text
colour: a rating reads as a rating when it looks like one. It is 2.1:1 on
white, below the 3:1 a meaningful graphic needs, so colour is not what
carries the score: the group or image is named "3 out of 5 stars". Every
star is the same filled shape, as in Figma; an empty one is
`,(0,N.jsx)(t.code,{children:`--color-border-bold`}),`.`]}),(0,N.jsx)(t.h2,{id:`states`,children:`States`}),(0,N.jsx)(f,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Disabled`,content:(0,N.jsx)(i,{of:x})},{label:`Unrated`,content:(0,N.jsx)(i,{of:A})},{label:`Read-only`,content:(0,N.jsx)(E,{readOnly:!0,value:3.5,"aria-label":`Rating`})}],children:(0,N.jsx)(E,{"aria-label":`Rating`,defaultValue:3})}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Hover`}),` previews the score up to the star under the pointer, and only
while the rating can be changed.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Focus`}),` is a 2px `,(0,N.jsx)(t.code,{children:`--color-border-focused`}),` outline round the focused star.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Disabled`}),` dims the stars to 50%.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`Read-only`}),` is one image; fractions fill a star part-way, cut rather
than shrunk.`]}),`
`]}),(0,N.jsx)(t.h2,{id:`api`,children:`API`}),(0,N.jsx)(`div`,{style:{overflowX:`auto`},children:(0,N.jsx)(o,{of:O})}),(0,N.jsxs)(t.p,{children:[(0,N.jsx)(t.code,{children:`className`}),` passes through to the group.`]})]}),(0,N.jsxs)(p,{value:`guidelines`,children:[(0,N.jsx)(t.h2,{id:`when-to-use`,children:`When to use`}),(0,N.jsx)(t.p,{children:`Use a rating to ask for, or show, a quick score on a short scale: a
review, a difficulty, how useful something was. Keep the scale short:
five stars is the convention readers already know.`}),(0,N.jsx)(u,{do:(0,N.jsx)(i,{of:_}),doCaption:`Five stars: few enough to hit and to tell apart at a glance.`,dont:(0,N.jsx)(i,{of:T}),dontCaption:`Ten stars are small targets, and 7 looks much like 8. Use a Slider or a Number Input for a fine scale.`}),(0,N.jsx)(t.h2,{id:`when-not-to-use`,children:`When not to use`}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`For a precise number.`}),` Use a
`,(0,N.jsx)(t.a,{href:`?path=/docs/components-controls-slider--docs`,children:`Slider`}),` or a Number Input.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`For a choice between named options.`}),` Use a
`,(0,N.jsx)(t.a,{href:`?path=/docs/components-controls-radio--docs`,children:`Radio`}),` group, so the
options say what they mean.`]}),`
`,(0,N.jsxs)(t.li,{children:[(0,N.jsx)(t.strong,{children:`To show progress.`}),` Use a Progress Bar.`]}),`
`]}),(0,N.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),(0,N.jsxs)(t.ul,{children:[`
`,(0,N.jsxs)(t.li,{children:[`Interactive: a `,(0,N.jsx)(t.code,{children:`<fieldset>`}),` named by its legend (or `,(0,N.jsx)(t.code,{children:`aria-label`}),`), with
one radio per star named "1 out of 5 stars" and so on (change the words
with `,(0,N.jsx)(t.code,{children:`getValueText`}),`). Arrows move the choice; Tab moves into and out of
the group.`]}),`
`,(0,N.jsxs)(t.li,{children:[`Read-only: `,(0,N.jsx)(t.code,{children:`role="img"`}),` named with the value, "4.5 out of 5 stars".`]}),`
`,(0,N.jsx)(t.li,{children:`Hover previews the score; focus shows the 2px ring round the star.`}),`
`,(0,N.jsx)(t.li,{children:`Filled and empty stars share one shape and differ by colour only, so
the score is always in the name: the group's checked radio, or the
image's label.`}),`
`,(0,N.jsx)(t.li,{children:`Stars grow a 44px target on coarse pointers.`}),`
`]})]})]})]})}function M(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,N.jsx)(t,{...e,children:(0,N.jsx)(j,{...e})}):j(e)}var N;function P(){return(P=e((()=>{N=t(),r(),a(),g(),C(),b()})))()}P();export{M as default};