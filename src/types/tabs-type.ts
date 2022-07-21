export interface ITabsChild {
  title: string;
  to?: string;
}

export interface ITabsObject {
  title: string;
  to?: string;
  root?: string;
  children?: ITabsChild[];
}
