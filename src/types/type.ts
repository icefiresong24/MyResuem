interface Modules {
  value: Section[]
  global: Object
}
interface Section {
  name: string
  component: string
  show: boolean
  style: any
}

export type{
  Section,
  Modules,
}
