import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BXJ34t_g.js";import{l as i,s as a}from"./blocks-GpDLDP7O.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Getting Started/Installation`}),`
`,(0,c.jsx)(t.h1,{id:`installation`,children:`Installation`}),`
`,(0,c.jsx)(t.p,{children:`The kit ships as copy-source: the shadcn CLI copies each component into your
repo, so you own the source and a breaking change is a diff you read rather
than one that arrives.`}),`
`,(0,c.jsx)(t.h2,{id:`copy-source`,children:`Copy-source`}),`
`,(0,c.jsxs)(t.p,{children:[`Components are served in the `,(0,c.jsx)(t.a,{href:`https://ui.shadcn.com/docs/cli`,rel:`nofollow`,children:`shadcn CLI`}),` registry format, so the CLI
copies the source into your project and rewrites its imports to match your
path alias.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The project needs a `,(0,c.jsx)(t.code,{children:`components.json`}),` — run `,(0,c.jsx)(t.code,{children:`npx shadcn@latest init`}),` first
if it has none. Then:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx shadcn@latest add https://marram.ontheshore.biz/r/tokens.json
npx shadcn@latest add https://marram.ontheshore.biz/r/button.json
npx shadcn@latest add https://marram.ontheshore.biz/r/text-input.json
npx shadcn@latest add https://marram.ontheshore.biz/r/divider.json
npx shadcn@latest add https://marram.ontheshore.biz/r/badge.json
npx shadcn@latest add https://marram.ontheshore.biz/r/avatar.json
npx shadcn@latest add https://marram.ontheshore.biz/r/tag.json
npx shadcn@latest add https://marram.ontheshore.biz/r/toggle-button.json
npx shadcn@latest add https://marram.ontheshore.biz/r/switch.json
npx shadcn@latest add https://marram.ontheshore.biz/r/checkbox.json
npx shadcn@latest add https://marram.ontheshore.biz/r/radio.json
npx shadcn@latest add https://marram.ontheshore.biz/r/card.json
npx shadcn@latest add https://marram.ontheshore.biz/r/textarea.json
npx shadcn@latest add https://marram.ontheshore.biz/r/search.json
npx shadcn@latest add https://marram.ontheshore.biz/r/number-input.json
npx shadcn@latest add https://marram.ontheshore.biz/r/select.json
npx shadcn@latest add https://marram.ontheshore.biz/r/combobox.json
npx shadcn@latest add https://marram.ontheshore.biz/r/spinner.json
npx shadcn@latest add https://marram.ontheshore.biz/r/progress-bar.json
npx shadcn@latest add https://marram.ontheshore.biz/r/skeleton.json
npx shadcn@latest add https://marram.ontheshore.biz/r/link.json
npx shadcn@latest add https://marram.ontheshore.biz/r/alert.json
npx shadcn@latest add https://marram.ontheshore.biz/r/empty-state.json
npx shadcn@latest add https://marram.ontheshore.biz/r/tooltip.json
npx shadcn@latest add https://marram.ontheshore.biz/r/popover.json
npx shadcn@latest add https://marram.ontheshore.biz/r/modal.json
npx shadcn@latest add https://marram.ontheshore.biz/r/menu.json
npx shadcn@latest add https://marram.ontheshore.biz/r/breadcrumbs.json
npx shadcn@latest add https://marram.ontheshore.biz/r/pagination.json
npx shadcn@latest add https://marram.ontheshore.biz/r/tabs.json
npx shadcn@latest add https://marram.ontheshore.biz/r/toast.json
npx shadcn@latest add https://marram.ontheshore.biz/r/inline-alert.json
npx shadcn@latest add https://marram.ontheshore.biz/r/error-state.json
npx shadcn@latest add https://marram.ontheshore.biz/r/success-state.json
npx shadcn@latest add https://marram.ontheshore.biz/r/collapse.json
npx shadcn@latest add https://marram.ontheshore.biz/r/slider.json
npx shadcn@latest add https://marram.ontheshore.biz/r/stepper.json
npx shadcn@latest add https://marram.ontheshore.biz/r/rating.json
npx shadcn@latest add https://marram.ontheshore.biz/r/table.json
npx shadcn@latest add https://marram.ontheshore.biz/r/calendar.json
npx shadcn@latest add https://marram.ontheshore.biz/r/date-picker.json
npx shadcn@latest add https://marram.ontheshore.biz/r/color-picker.json
npx shadcn@latest add https://marram.ontheshore.biz/r/file-uploader.json
npx shadcn@latest add https://marram.ontheshore.biz/r/theme.json
`})}),`
`,(0,c.jsx)(t.p,{children:`Or register the kit once and add components by name:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{ "registries": { "@marram": "https://marram.ontheshore.biz/r/{name}.json" } }
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx shadcn@latest add @marram/button
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`tokens`}),` only needs adding once — every component depends on it, so the CLI
pulls it in with the first component anyway. Shared helpers (`,(0,c.jsx)(t.code,{children:`utils`}),`,
`,(0,c.jsx)(t.code,{children:`icon`}),`) resolve the same way, and the npm dependencies (`,(0,c.jsx)(t.code,{children:`clsx`}),`, and
`,(0,c.jsx)(t.code,{children:`@base-ui/react`}),` for components with behaviour) are installed for you.`]}),`
`,(0,c.jsx)(t.p,{children:`Import the token layer once, at your app's entry:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`@import "./styles/marram-tokens.css";
`})}),`
`,(0,c.jsxs)(t.p,{children:[`The CLI prints where each file landed; the path above is relative to the
`,(0,c.jsx)(t.code,{children:`src`}),` your `,(0,c.jsx)(t.code,{children:`components.json`}),` points at.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`If your bundler needs CSS-module types`}),`, add them once — Vite projects
already get this from `,(0,c.jsx)(t.code,{children:`vite/client`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`verifying-it-works`,children:`Verifying it works`}),`
`,(0,c.jsxs)(t.p,{children:[`Render a Button inside a `,(0,c.jsx)(t.code,{children:`Theme`}),` and change the accent. If the button
follows, the token layer is loaded and scoping works:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Theme accentColor="violet">
  <Button>Violet</Button>
</Theme>
`})}),`
`,(0,c.jsxs)(t.p,{children:[`If the button renders unstyled, the
component's `,(0,c.jsx)(t.code,{children:`.module.css`}),` did not come across. If it renders
styled but in a `,(0,c.jsx)(t.strong,{children:`serif`}),` face, the token layer is missing — components
declare `,(0,c.jsx)(t.code,{children:`font-family: var(--font-sans)`}),` explicitly, and with no tokens
that resolves to nothing.`]}),`
`,(0,c.jsx)(t.h2,{id:`using-the-theme`,children:`Using the theme`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`Theme`}),` component, which scopes four independent
settings to any subtree:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`<Theme accentColor="violet" grayColor="slate" appearance="dark" radius="full-rounded">
`})}),`
`,(0,c.jsxs)(t.p,{children:[`It writes custom properties, so it nests in either direction — a dark panel
on a light page, or a light island inside a dark one. The full write-up,
including what each setting moves and how to override tokens directly, is
in `,(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`?path=/docs/foundations-overview--docs`,children:`Foundations → Overview`})}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`contributing-to-the-kit-itself`,children:`Contributing to the kit itself`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`git clone https://github.com/nguucode/marram
npm install
npm run storybook
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tokens are generated from `,(0,c.jsx)(t.code,{children:`tokens/*.json`}),` — run `,(0,c.jsx)(t.code,{children:`npm run tokens`}),` after
editing them, never edit the generated files. `,(0,c.jsx)(t.code,{children:`npm run tokens:check`}),` and
`,(0,c.jsx)(t.code,{children:`node scripts/check-registry.mjs`}),` both run in CI. The
`,(0,c.jsx)(t.a,{href:`https://github.com/nguucode/marram`,rel:`nofollow`,children:`README`}),` has the rest.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),i()})))()}l();export{s as default};