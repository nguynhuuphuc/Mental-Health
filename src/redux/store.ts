import {configureStore} from '@reduxjs/toolkit';
import CategoryHubReducer from '../screens/hub/CategoryHubReducer';
import {categoryHub} from '../data/Data';

export const store = configureStore({
  reducer: {
    categoryHub: CategoryHubReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
