export interface NavItem {
  id: number
  title: string;
  link: string;
}

export interface ConfigSchema {
  navItems: NavItem[],
  paginationSize: number
}
