export interface tabsChild {
  title: string;
  to?: string;
}

export interface tabsObject {
  title: string;
  to?: string;
  root?: string;
  children?: tabsChild[];
}
