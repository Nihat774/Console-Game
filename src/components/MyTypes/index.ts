export type IChildren = {
  children: object;
};
export type IButton = {
  txt2: React.ReactNode;
  onClick?: () =>void;
  txt1: string;
  still: string;
};
export type IIcon = {
  children: React.ReactNode;
  link: string;
};
export type IGames = {
  id: number;
  img: string;
  followers: string;
};
export interface ICard {
  txt: string;
  children: React.ReactNode;
}
export interface IAllGames {
  id: number;
  img: string;
  price: string;
  oldPrice: string;
  name: string;
  quantity: number;
}
export type INewData = {
  name: string;
  img: string;
  id: number;
};

// About Page
export type ITeamType = {
  img: string;
  name: string;
  text: string;
};
export interface ICardInfo {
  txt1: string;
  txt2: string;
  desc: string;
  classes: string;
}
export type Button = {
  onClick?: () => void;
};
export type ShareBtn = {
  icon: string;
  storeName: string;
  to: string;
};
export type INewsType = {
  id: number;
  name: string;
  img: string;
  specialty: string;
  about: string;
  cv: string;
};
export type CvButtonType = {
  cv: string;
  to: string;
};
export type Animate = {
  sequence: any;
};
export interface IModal {
  style?: string;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  ShowAlert?:()=>void
  text?: string;
}
