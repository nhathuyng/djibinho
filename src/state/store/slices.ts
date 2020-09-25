import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReducer } from '../../other/interfaces';
import { initialData } from './state';

const initialReducer: IReducer = {
  img: initialData,
  dialog: {
    currentId: null,
    open: false,
  },
};

const dataState = createSlice({
  name: 'dataState',
  initialState: initialReducer,
  reducers: {
    setDialog: (
      state,
      action: PayloadAction<{ currentId: string; open: boolean }>
    ) => {
      state.dialog = action.payload;
    },
    closeDialog: (state) => {},
  },
});

export const { setDialog, closeDialog } = dataState.actions;

export const reducer = {
  dataState: dataState.reducer,
};
