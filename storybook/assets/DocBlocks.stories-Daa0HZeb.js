import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Button-DslpGgPR.js";import{_ as i,f as a,h as o,i as s,m as c,n as l,o as u,t as d}from"./blocks-COhIzeP7.js";import{n as f,t as p}from"./icon-Cjfg2BMt.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{n(),f(),d(),m=t(),{STORY_RENDERED:h}=__STORYBOOK_MODULE_CORE_EVENTS__,{addons:g}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Internal/Docs blocks`,tags:[`!dev`]},S=(0,m.jsx)(r,{startIcon:(0,m.jsx)(p,{name:`plus`}),size:`md`,children:`Add item`}),C=(0,m.jsxs)(o,{children:[(0,m.jsx)(c,{value:`overview`,children:(0,m.jsx)(`p`,{children:`What it is.`})}),(0,m.jsx)(c,{value:`specs`,children:(0,m.jsx)(`p`,{children:`How it is built.`})}),(0,m.jsx)(c,{value:`guidelines`,children:(0,m.jsx)(`p`,{children:`How to use it.`})})]}),w={render:()=>C,play:async({canvas:e})=>{await _(e.getByRole(`tablist`,{name:`Documentation`})).toBeVisible();let[t,n,r]=e.getAllByRole(`tab`);await _([t,n,r].map(e=>e.textContent)).toEqual([`Overview`,`Specs`,`Guidelines`]),await _(t).toHaveAttribute(`aria-selected`,`true`),await _(e.getByRole(`tabpanel`)).toHaveTextContent(`What it is.`),await v.click(n),await y(()=>_(e.getByRole(`tabpanel`)).toHaveTextContent(`How it is built.`)),await v.keyboard(`{ArrowRight}`),await y(()=>_(r).toHaveAttribute(`aria-selected`,`true`)),await y(()=>_(e.getByRole(`tabpanel`)).toHaveTextContent(`How to use it.`)),await v.keyboard(`{ArrowLeft}{ArrowLeft}`),await y(()=>_(t).toHaveAttribute(`aria-selected`,`true`)),await _(t).toHaveFocus()}},T=(0,m.jsx)(i,{parts:[{name:`Container`,selector:`button`,description:`The box.`},{name:`Start icon`,selector:`svg`,description:"Decorative: `aria-hidden`."}],children:S}),E={name:`Anatomy`,render:()=>T,play:async({canvas:e})=>{let t=await e.findAllByRole(`img`,{name:/^\d: /});await _(t.map(e=>e.getAttribute(`aria-label`))).toEqual([`1: Container`,`2: Start icon`]),await _(t.map(e=>e.textContent)).toEqual([`1`,`2`]);for(let[n,r]of[[t[0],e.getByRole(`button`)],[t[1],e.getByRole(`button`).querySelector(`svg`)]]){let e=n.getBoundingClientRect(),t=r.getBoundingClientRect();await _(Math.abs(e.left+e.width/2-(t.left+t.width/2))).toBeLessThanOrEqual(1),await _(e.bottom).toBeLessThan(t.top);let i=n.previousElementSibling.getBoundingClientRect();await _(Math.abs(i.bottom-t.top)).toBeLessThanOrEqual(1)}let n=e.getByRole(`table`);await _(b(n).getByRole(`rowheader`,{name:`Start icon`})).toBeVisible(),await _(n).not.toHaveTextContent(`Not found`),await _(b(n).getByText(`aria-hidden`).tagName).toBe(`CODE`),await _(n).not.toHaveTextContent("`")}},D={render:()=>(0,m.jsx)(i,{parts:[{name:`Container`,selector:`button`},{name:`Label`,selector:`button`},{name:`Again`,selector:`button`}],children:S}),play:async({canvas:e})=>{let t=(await e.findAllByRole(`img`,{name:/^\d: /})).map(e=>e.getBoundingClientRect());await _(t).toHaveLength(3);for(let[e,n]of t.entries())for(let r of t.slice(e+1))await _(n.right<=r.left||r.right<=n.left||n.bottom<=r.top||r.bottom<=n.top).toBe(!0)}},O={render:()=>(0,m.jsx)(i,{parts:[{name:`Container`,selector:`button`},{name:`Badge`,selector:`[data-badge]`}],children:S}),play:async({canvas:e})=>{await _(await e.findAllByRole(`img`,{name:/^\d: /})).toHaveLength(1),await _(e.getByRole(`table`)).toHaveTextContent(`Not found: [data-badge] matches nothing in the example.`)}},k=(0,m.jsx)(u,{caption:`Measurements, md`,rows:[{part:`Container`,property:`Height`,token:`--control-md`},{part:`Container`,property:`Background`,token:`--color-surface`},{part:`Label`,property:`Line height`,token:`--leading-body`}]}),A={render:()=>k,play:async({canvas:e})=>{let t=e.getAllByRole(`row`).slice(1),n=e=>e.cells[3];await _(n(t[0])).toHaveTextContent(/^32px$/),await _(n(t[0])).toHaveAttribute(`data-kind`,`length`);let r=n(t[1]);await _(r).toHaveAttribute(`data-kind`,`color`),await _(r.querySelector(`[aria-hidden="true"]`)).not.toBeNull(),await _(n(t[2])).toHaveAttribute(`data-kind`,`raw`);let i=document.documentElement,a=i.classList.contains(`dark`),o=r.textContent;i.classList.toggle(`dark`);try{await y(()=>_(r.textContent).not.toBe(o))}finally{i.classList.toggle(`dark`,a)}await y(()=>_(r.textContent).toBe(o))}},j=(0,m.jsx)(s,{states:[{label:`Enabled`},{label:`Hover`,pseudo:`hover`},{label:`Focus`,pseudo:`focus-visible`},{label:`Pressed`,pseudo:`active`},{label:`Disabled`,content:(0,m.jsx)(r,{startIcon:(0,m.jsx)(p,{name:`plus`}),disabled:!0,children:`Add item`})}],children:S}),M={name:`States`,render:()=>j,play:async({canvasElement:e})=>{g.getChannel().emit(h);let t=b(e).getAllByRole(`listitem`);await _(t.map(e=>e.lastElementChild.textContent)).toEqual([`Enabled`,`Hover`,`Focus`,`Pressed`,`Disabled`]);let n=t=>e.querySelector(`[data-state="${t}"]`);await _(n(`Hover`)).toHaveClass(`pseudo-hover-all`),await _(n(`Focus`)).toHaveClass(`pseudo-focus-visible-all`),await _(n(`Pressed`)).toHaveClass(`pseudo-active-all`),await _(n(`Disabled`).querySelector(`button`)).toBeDisabled();let r=e=>{let t=getComputedStyle(n(e).querySelector(`button`));return`${t.backgroundColor} ${t.outlineStyle}`},i=()=>{let e=n(`Hover`).querySelector(`button`),t=[...document.styleSheets].flatMap(e=>{try{return[...e.cssRules]}catch{return[]}}).filter(e=>e instanceof CSSStyleRule&&e.selectorText.includes(`:hover`)),r=t.filter(e=>e.selectorText.includes(`pseudo-hover-all`)),i=r.filter(t=>e.matches(t.selectorText));return`${document.styleSheets.length} sheets, ${t.length} :hover rules, ${r.length} rewritten, ${i.length} reach the button: ${i.map(e=>e.cssText).join(` | `).slice(0,300)||t.find(e=>e.selectorText.includes(`button`))?.cssText.slice(0,300)}`};await y(()=>{g.getChannel().emit(h),_(r(`Hover`),i()).not.toBe(r(`Enabled`))}),await _(getComputedStyle(n(`Hover`).querySelector(`button`)).transitionDuration).toBe(`0s`),await _(r(`Pressed`)).not.toBe(r(`Hover`)),await _(getComputedStyle(n(`Focus`).querySelector(`button`)).outlineStyle).toBe(`solid`)}},N=(0,m.jsx)(a,{do:(0,m.jsx)(r,{children:`Save`}),doCaption:`One primary button: the thing to do next.`,dont:(0,m.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,m.jsx)(r,{children:`Save`}),(0,m.jsx)(r,{children:`Publish`})]}),dontCaption:`Two primary buttons compete for the same click.`}),P={name:`Do / Don’t`,render:()=>N,play:async({canvas:e})=>{let[t,n]=e.getAllByRole(`figure`);await _(t.querySelector(`figcaption`)).toHaveTextContent(/^Do One primary button/),await _(n.querySelector(`figcaption`)).toHaveTextContent(/^Don’t Two primary buttons/),await _(b(t).getByRole(`button`,{name:`Save`})).toBeVisible()}},F={name:`Status`,render:()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{of:{default:{tags:[`beta`]}}}),(0,m.jsx)(l,{of:{default:{tags:[`autodocs`]}}})]}),play:async({canvasElement:e})=>{await _(e.textContent).toBe(`Beta`)}},I=(0,m.jsxs)(m.Fragment,{children:[C,T,k,j,N]}),L={globals:{theme:`dark`},render:()=>I,play:async({canvas:e})=>{await _(document.documentElement).toHaveClass(`dark`),await _(e.getAllByRole(`figure`)).toHaveLength(2)}},R={render:()=>(0,m.jsx)(`div`,{style:{inlineSize:320},children:I}),play:async({canvasElement:e})=>{let t=e.firstElementChild;await _(t.scrollWidth).toBeLessThanOrEqual(320);for(let t of b(e).getAllByRole(`figure`))await _(t.getBoundingClientRect().width).toBeLessThanOrEqual(320)}},z=[`Tabs`,`AnatomyMarkers`,`AnatomyCrowded`,`AnatomyMissingPart`,`Spec`,`StateRow`,`Pair`,`StatusTag`,`Dark`,`Narrow`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => tabs,
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('tablist', {
      name: 'Documentation'
    })).toBeVisible();
    const [overview, specs, guidelines] = canvas.getAllByRole('tab');
    await expect([overview, specs, guidelines].map(t => t.textContent)).toEqual(['Overview', 'Specs', 'Guidelines']);
    // Overview first, always.
    await expect(overview).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('What it is.');
    // Mouse.
    await userEvent.click(specs);
    await waitFor(() => expect(canvas.getByRole('tabpanel')).toHaveTextContent('How it is built.'));
    // Arrow keys select as they move: a docs page, not a toolbar.
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => expect(guidelines).toHaveAttribute('aria-selected', 'true'));
    await waitFor(() => expect(canvas.getByRole('tabpanel')).toHaveTextContent('How to use it.'));
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
    await waitFor(() => expect(overview).toHaveAttribute('aria-selected', 'true'));
    await expect(overview).toHaveFocus();
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Anatomy',
  render: () => anatomy,
  play: async ({
    canvas
  }) => {
    // One marker per part, each named by number and part.
    const markers = await canvas.findAllByRole('img', {
      name: /^\\d: /
    });
    await expect(markers.map(m => m.getAttribute('aria-label'))).toEqual(['1: Container', '2: Start icon']);
    await expect(markers.map(m => m.textContent)).toEqual(['1', '2']);
    // Each sits above its part, centred on it, with a line down to the part.
    for (const [marker, part] of [[markers[0], canvas.getByRole('button')], [markers[1], canvas.getByRole('button').querySelector('svg')!]] as const) {
      const m = marker.getBoundingClientRect();
      const p = part.getBoundingClientRect();
      await expect(Math.abs(m.left + m.width / 2 - (p.left + p.width / 2))).toBeLessThanOrEqual(1);
      await expect(m.bottom).toBeLessThan(p.top);
      const line = (marker.previousElementSibling as HTMLElement).getBoundingClientRect();
      await expect(Math.abs(line.bottom - p.top)).toBeLessThanOrEqual(1);
    }
    // The key lists every part.
    const key = canvas.getByRole('table');
    await expect(within(key).getByRole('rowheader', {
      name: 'Start icon'
    })).toBeVisible();
    await expect(key).not.toHaveTextContent('Not found');
    // Backticks in a description become inline code.
    await expect(within(key).getByText('aria-hidden').tagName).toBe('CODE');
    await expect(key).not.toHaveTextContent('\`');
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Anatomy parts={[{
    name: 'Container',
    selector: 'button'
  }, {
    name: 'Label',
    selector: 'button'
  }, {
    name: 'Again',
    selector: 'button'
  }]}>
      {example}
    </Anatomy>,
  play: async ({
    canvas
  }) => {
    // Parts with the same centre still get three markers that do not overlap:
    // one above, one below, one slid aside.
    const boxes = (await canvas.findAllByRole('img', {
      name: /^\\d: /
    })).map(m => m.getBoundingClientRect());
    await expect(boxes).toHaveLength(3);
    for (const [i, a] of boxes.entries()) for (const b of boxes.slice(i + 1)) await expect(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top).toBe(true);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Anatomy parts={[{
    name: 'Container',
    selector: 'button'
  }, {
    name: 'Badge',
    selector: '[data-badge]'
  }]}>
      {example}
    </Anatomy>,
  play: async ({
    canvas
  }) => {
    // A selector that matches nothing gets no marker, and says so in the key.
    await expect(await canvas.findAllByRole('img', {
      name: /^\\d: /
    })).toHaveLength(1);
    await expect(canvas.getByRole('table')).toHaveTextContent('Not found: [data-badge] matches nothing in the example.');
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => spec,
  play: async ({
    canvas
  }) => {
    const rows = canvas.getAllByRole('row').slice(1) as HTMLTableRowElement[];
    const value = (row: HTMLTableRowElement) => row.cells[3];
    // A length resolves to px, calc() and all.
    await expect(value(rows[0])).toHaveTextContent(/^32px$/);
    await expect(value(rows[0])).toHaveAttribute('data-kind', 'length');
    // A colour shows a swatch and the computed colour.
    const background = value(rows[1]);
    await expect(background).toHaveAttribute('data-kind', 'color');
    await expect(background.querySelector('[aria-hidden="true"]')).not.toBeNull();
    // Anything else shows its declared value.
    await expect(value(rows[2])).toHaveAttribute('data-kind', 'raw');
    // The value follows the theme.
    const html = document.documentElement;
    const wasDark = html.classList.contains('dark');
    const before = background.textContent;
    html.classList.toggle('dark');
    try {
      await waitFor(() => expect(background.textContent).not.toBe(before));
    } finally {
      html.classList.toggle('dark', wasDark);
    }
    await waitFor(() => expect(background.textContent).toBe(before));
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => states,
  play: async ({
    canvasElement
  }) => {
    // Storybook announces each render, and the addon rewrites the stylesheets
    // then (docs pages included). The test runner announces nothing, so play
    // Storybook's part.
    addons.getChannel().emit(STORY_RENDERED);
    const cells = within(canvasElement).getAllByRole('listitem');
    await expect(cells.map(c => c.lastElementChild!.textContent)).toEqual(['Enabled', 'Hover', 'Focus', 'Pressed', 'Disabled']);
    const stage = (label: string) => canvasElement.querySelector<HTMLElement>(\`[data-state="\${label}"]\`)!;
    await expect(stage('Hover')).toHaveClass('pseudo-hover-all');
    await expect(stage('Focus')).toHaveClass('pseudo-focus-visible-all');
    await expect(stage('Pressed')).toHaveClass('pseudo-active-all');
    await expect(stage('Disabled').querySelector('button')).toBeDisabled();
    // The forced states actually paint: the addon rewrote :hover and friends.
    const look = (label: string) => {
      const s = getComputedStyle(stage(label).querySelector('button')!);
      return \`\${s.backgroundColor} \${s.outlineStyle}\`;
    };
    // What the addon did to the stylesheets, for the failure message.
    const rewritten = () => {
      const button = stage('Hover').querySelector('button')!;
      const rules = [...document.styleSheets].flatMap(sheet => {
        try {
          return [...sheet.cssRules];
        } catch {
          return [];
        }
      });
      const hover = rules.filter((r): r is CSSStyleRule => r instanceof CSSStyleRule && r.selectorText.includes(':hover'));
      const forced = hover.filter(r => r.selectorText.includes('pseudo-hover-all'));
      const engaged = forced.filter(r => button.matches(r.selectorText));
      return \`\${document.styleSheets.length} sheets, \${hover.length} :hover rules, \${forced.length} rewritten, \${engaged.length} reach the button: \${engaged.map(r => r.cssText).join(' | ').slice(0, 300) || hover.find(r => r.selectorText.includes('button'))?.cssText.slice(0, 300)}\`;
    };
    await waitFor(() => {
      // Again on each try: a stylesheet Vite injects late is rewritten too.
      addons.getChannel().emit(STORY_RENDERED);
      expect(look('Hover'), rewritten()).not.toBe(look('Enabled'));
    });
    // No transition to wait out: each state shows its end value at once.
    await expect(getComputedStyle(stage('Hover').querySelector('button')!).transitionDuration).toBe('0s');
    await expect(look('Pressed')).not.toBe(look('Hover'));
    await expect(getComputedStyle(stage('Focus').querySelector('button')!).outlineStyle).toBe('solid');
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Do / Don’t',
  render: () => pair,
  play: async ({
    canvas
  }) => {
    const [good, bad] = canvas.getAllByRole('figure');
    // The verdict is a word, not only a colour.
    await expect(good.querySelector('figcaption')).toHaveTextContent(/^Do One primary button/);
    await expect(bad.querySelector('figcaption')).toHaveTextContent(/^Don’t Two primary buttons/);
    await expect(within(good).getByRole('button', {
      name: 'Save'
    })).toBeVisible();
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Status',
  render: () => <>
      <Status of={{
      default: {
        tags: ['beta']
      }
    }} />
      <Status of={{
      default: {
        tags: ['autodocs']
      }
    }} />
    </>,
  play: async ({
    canvasElement
  }) => {
    // The status tag, capitalised; a module with no status tag shows nothing.
    await expect(canvasElement.textContent).toBe('Beta');
  }
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'dark'
  },
  render: () => all,
  play: async ({
    canvas
  }) => {
    await expect(document.documentElement).toHaveClass('dark');
    await expect(canvas.getAllByRole('figure')).toHaveLength(2);
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    inlineSize: 320
  }}>{all}</div>,
  play: async ({
    canvasElement
  }) => {
    // At phone width nothing pushes the page sideways: tables scroll in their
    // own box, grids drop to one column.
    const box = canvasElement.firstElementChild as HTMLElement;
    await expect(box.scrollWidth).toBeLessThanOrEqual(320);
    for (const figure of within(canvasElement).getAllByRole('figure')) await expect(figure.getBoundingClientRect().width).toBeLessThanOrEqual(320);
  }
}`,...R.parameters?.docs?.source}}}})))()}B();export{D as AnatomyCrowded,E as AnatomyMarkers,O as AnatomyMissingPart,L as Dark,R as Narrow,P as Pair,A as Spec,M as StateRow,F as StatusTag,w as Tabs,z as __namedExportsOrder,x as default};