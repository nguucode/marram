import { StrictMode, useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { createRoot } from 'react-dom/client'
// Tokens only: index.css would restyle the landing's html and body.
import '../tokens.css'
import { Theme } from '@/theme/Theme'
import type { AccentColor } from '@/theme/palettes'
import { Button } from '@/components/buttons/Button'
import { TextInput } from '@/components/inputs/TextInput'
import { Select } from '@/components/inputs/Select'
import { Switch } from '@/components/controls/Switch'
import { Checkbox } from '@/components/controls/Checkbox'
import { RadioGroup } from '@/components/controls/Radio'
import { Tabs } from '@/components/navigation/Tabs'
import { Tag } from '@/components/atomic-elements/Tag'
import { Badge } from '@/components/atomic-elements/Badge'
import { AvatarGroup } from '@/components/atomic-elements/Avatar'
import { Alert } from '@/components/notifications/Alert'
import { Table } from '@/components/data-display/Table'
import { Calendar } from '@/components/data-display/Calendar'
import { LineChart } from '@/components/charts/LineChart'

/*
 * The landing's Components grid, drawn with the kit itself. Each tile in
 * index.html is an empty `.prev[data-demo]`; one React root portals a
 * component into each, inside a Theme that follows the hero's accent picker.
 */

const row = { display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' } as const
const stack = { display: 'grid', gap: 12, width: '100%' } as const

const smiths = [
  { id: '1', smith: 'Halvard Østby', blade: 'Marram', status: ['Quenched', 'success'] },
  { id: '2', smith: 'Ilse Vandermeer', blade: 'Messer', status: ['Tempering', 'warning'] },
  { id: '3', smith: 'Tomasz Kowalczyk', blade: 'Longsword', status: ['Grinding', 'neutral'] },
  { id: '4', smith: 'Mirela Ambroz', blade: 'Seax', status: ['Quenched', 'success'] },
  { id: '5', smith: 'Ravi Sundaram', blade: 'Falchion', status: ['Rejected', 'danger'] },
] as const

const sales = [12, 18, 16, 27, 25, 34, 32].map((value, i) => ({ day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i], value }))

const DEMOS: Record<string, ReactNode> = {
  button: (
    <div style={row}>
      <Button variant="primary">Save changes</Button>
      <Button variant="secondary" appearance="outlined">Cancel</Button>
      <Button variant="secondary" appearance="ghost">More</Button>
    </div>
  ),
  input: <TextInput label="Email" defaultValue="halvard@bryggen.no" helperText="We only use this for receipts." isFullWidth />,
  select: (
    <div style={stack}>
      <Select label="Workshop" options={['Oslo', 'Bergen', 'Trondheim']} defaultValue="Bergen" isFullWidth />
    </div>
  ),
  controls: (
    <div style={stack}>
      <Switch label="Notify on quench" defaultChecked />
      <Checkbox label="Sign every blade" variant="primary" defaultChecked />
      <RadioGroup label="Shipping" variant="primary" options={[{ value: 'sea', label: 'Ship by sea' }, { value: 'road', label: 'Ship by road' }]} defaultValue="sea" />
    </div>
  ),
  tabs: (
    <Tabs
      defaultValue="overview"
      items={[
        { value: 'overview', label: 'Overview' },
        { value: 'activity', label: 'Activity' },
        { value: 'settings', label: 'Settings' },
      ]}
    />
  ),
  tags: (
    <div style={row}>
      <Tag text="Design" variant="blue" />
      <Tag text="Shipped" variant="success" />
      <Tag text="Review" variant="warning" />
      <Tag text="Blocked" variant="danger" />
      <Badge count={12} variant="destructive" />
    </div>
  ),
  avatars: (
    <AvatarGroup
      size="lg"
      max={4}
      avatars={[
        { initials: 'HØ', color: 'blue' },
        { initials: 'IV', color: 'green' },
        { initials: 'TK', color: 'orange' },
        { initials: 'MA', color: 'purple' },
        { initials: 'RS', color: 'teal' },
        { initials: 'PL', color: 'rose' },
      ]}
    />
  ),
  alert: (
    <Alert variant="success" title="Blade saved" style={{ width: '100%' }}>
      Order 0417 moved to tempering.
    </Alert>
  ),
  // Full tile width: the Theme wrapper centres its child, which would shrink the table to its content.
  table: (
    <div style={{ width: '100%' }}>
    <Table
      caption="Blades in the workshop"
      rows={[...smiths]}
      getRowId={(r) => r.id}
      columns={[
        { key: 'smith', header: 'Smith', cell: (r) => r.smith, isRowHeader: true, sortable: true },
        { key: 'blade', header: 'Blade', cell: (r) => r.blade },
        { key: 'status', header: 'Status', cell: (r) => <Tag text={r.status[0]} variant={r.status[1]} size="sm" /> },
      ]}
    />
    </div>
  ),
  calendar: <Calendar defaultValue={new Date(2026, 10, 14)} defaultMonth={new Date(2026, 10, 1)} locale="en-GB" />,
  chart: (
    <div style={{ width: '100%' }}>
      <LineChart title="Blades sold" data={sales} x="day" series={[{ key: 'value', label: 'Blades' }]} appearance="area" height={150} legendValue="none" />
    </div>
  ),
}

// The hero's picker offers these five; index.html announces each change.
function useAccent() {
  const [accent, setAccent] = useState<AccentColor>('blue')
  useEffect(() => {
    const on = (e: Event) => setAccent((e as CustomEvent<AccentColor>).detail)
    window.addEventListener('marram:accent', on)
    return () => window.removeEventListener('marram:accent', on)
  }, [])
  return accent
}

const font = { 'font-sans': getComputedStyle(document.documentElement).getPropertyValue('--sans') }

function Previews({ slots }: { slots: HTMLElement[] }) {
  const accent = useAccent()
  return slots.map((el) =>
    createPortal(
      <Theme appearance="light" accentColor={accent} radius="rounded" tokens={font} style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
        {DEMOS[el.dataset.demo!]}
      </Theme>,
      el,
      el.dataset.demo,
    ),
  )
}

const slots = [...document.querySelectorAll<HTMLElement>('.prev[data-demo]')]
const host = document.createElement('div')
document.body.append(host)
createRoot(host).render(
  <StrictMode>
    <Previews slots={slots} />
  </StrictMode>,
)
