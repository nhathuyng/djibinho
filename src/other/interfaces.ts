export interface IData {
  title: string;
  img: string;
  id: string;
}

export interface IReducer {
  img: IData[];
  dialog: { currentId: null | string; open: boolean };
}

export interface IFormData {
  name: string;
  company: string;
  email: string;
  phone?: number;
  message: string;
}
