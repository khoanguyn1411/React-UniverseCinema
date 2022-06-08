export type tabsChild = {
  title: string;
  to?: string;
};

export type tabsObject = {
  title: string;
  to?: string;
  root?: string;
  children?: tabsChild[];
};
