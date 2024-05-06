import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CategoryHub} from '../../Type/Types';
import {categoryHub} from '../../data/Data';

const initialState: CategoryHub[] = categoryHub;

export const categoryHubSlice = createSlice({
  name: 'categoryHub',
  initialState,
  reducers: {
    selected: (state, action: PayloadAction<string>) => {
      state.forEach(item => {
        if (item.name == action.payload) {
          if (item.focused) {
            return;
          }
          item.focused = true;
          return;
        } else {
          if (item.focused) {
            item.focused = false;
            return;
          }
        }
      });
    },
  },
});

export const {selected} = categoryHubSlice.actions;
export default categoryHubSlice.reducer;
