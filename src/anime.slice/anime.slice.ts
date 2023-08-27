import { createSlice } from '@reduxjs/toolkit';
import { AnimeCharacter } from '../model/anime.character';

type AnimeState = {
  animeCharacters: AnimeCharacter[];
};
const initialState: AnimeState = {
  animeCharacters: [],
};
export const animeSlice = createSlice({
  name: 'animeCharacters',
  initialState,
  reducers: {
    load: (state, { payload }: { payload: AnimeCharacter[] }) => {
      state.animeCharacters = payload;
    },
  },
  extraReducers: {},
});

export const actions = animeSlice.actions;
export const animeReducer = animeSlice.reducer;
