export interface NavBarLinks {
  navbar: NavBar[];
}

export interface NavBar {
  label: string;
  values: {
    label: string;
    value: string;
  }[];
}
