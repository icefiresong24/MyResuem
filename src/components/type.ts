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
  style: any
}

export type{
  Section,
  Modules
};
