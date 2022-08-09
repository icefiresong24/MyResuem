interface Props {
  items: Array<any>;
  onSortEnd: void;
}
interface Modules {
  value:Section[]
}
interface Section {
  name: string;
  component: string;
  show: boolean;
  info: any
}

export type{
  Section,
  Modules
};
