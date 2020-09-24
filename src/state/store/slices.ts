import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IData } from '../../other/interfaces';
import { v4 as uuidv4 } from 'uuid';

export const initialData: IData[] = [
  {
    title: 'game intelligence',
    img: require('../../media/images/camp.jpg'),
    id: uuidv4(),
    open: false,
  },
  {
    title: 'motivation',
    img: require('../../media/images/camp.jpg'),
    id: uuidv4(),
    open: false,
  },
  {
    title: 'how we work',
    img: require('../../media/images/camp.jpg'),
    id: uuidv4(),
    open: false,
  },

  {
    title: 'technique',
    img: require('../../media/images/camp.jpg'),
    id: uuidv4(),
    open: false,
  },
  {
    title: 'passing',
    img: require('../../media/images/camp.jpg'),
    id: uuidv4(),
    open: false,
  },
  {
    title: 'shooting',
    img: require('../../media/images/camp.jpg'),
    id: uuidv4(),
    open: false,
  },
];

const dataState = createSlice({
  name: 'dataState',
  initialState: initialData,
  reducers: {
    setDialog: (state, action: PayloadAction<string>) => {
      state.map((data) => {
        if (data.id === action.payload) {
          data.open = !data.open;
        }
      });
    },
    closeDialog: (state) => {
      state.map((data) => (data.open = !data.open));
    },
  },
});

export const { setDialog, closeDialog } = dataState.actions;

export const reducer = {
  dataState: dataState.reducer,
};
