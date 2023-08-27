import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import animeReducer from '../redux/anime.slice';

export const appStore = configureStore({
  reducer: { anime: animeReducer },
});

export type AppDispatch = typeof appStore.dispatch;
export type RootState = ReturnType<typeof appStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
