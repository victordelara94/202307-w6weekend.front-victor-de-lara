import { createSlice } from '@reduxjs/toolkit';
import { AnimeCharacter } from '../model/anime.character';
import {
  animeCharacterDeleteThunk,
  animeCharacterUpdateThunk,
  animeCharactersCreateThunk,
  animeCharactersLoadThunk,
} from './anime.characters.thunk';

export type AnimeState = {
  animeCharacters: AnimeCharacter[];
  error: Error | null;
  loading: 'loading' | 'load';
};
const initialState: AnimeState = {
  animeCharacters: [],
  error: null,
  loading: 'loading',
};
export const animeSlice = createSlice({
  name: 'animeCharacters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      animeCharactersLoadThunk.fulfilled,
      (state, { payload }: { payload: AnimeCharacter[] }) => {
        state.animeCharacters = payload;
        state.loading = 'load';
      }
    );
    builder.addCase(animeCharactersLoadThunk.rejected, (state) => {
      const error = new Error('Error loading characters');
      state.error = error;
    });
    builder.addCase(animeCharactersLoadThunk.pending, (state) => {
      state.loading = 'loading';
    });
    builder.addCase(
      animeCharactersCreateThunk.fulfilled,
      (state, { payload }: { payload: AnimeCharacter }) => {
        state.animeCharacters.push(payload);
      }
    );
    // builder.addCase(animeCharactersCreateThunk.rejected, (state) => {
    //   const error = new Error('Error loading characters');
    //   state.error = error;
    // });
    builder.addCase(
      animeCharacterUpdateThunk.fulfilled,
      (state, { payload }: { payload: AnimeCharacter }) => {
        state.animeCharacters = state.animeCharacters.map((character) =>
          character.id === payload.id ? payload : character
        );
      }
    );
    // builder.addCase(animeCharacterUpdateThunk.rejected, (state) => {
    //   const error = new Error('Error updating characters');
    //   state.error = error;
    // });
    builder.addCase(
      animeCharacterDeleteThunk.fulfilled,
      (state, { payload }: { payload: AnimeCharacter['id'] }) => {
        state.animeCharacters = state.animeCharacters.filter(
          (character) => character.id !== payload
        );
      }
    );
    // builder.addCase(animeCharacterDeleteThunk.rejected, (state) => {
    //   const error = new Error('Error updating characters');
    //   state.error = error;
    // });
  },
});

export const actions = animeSlice.actions;
export default animeSlice.reducer;
