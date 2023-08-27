import { createAsyncThunk } from '@reduxjs/toolkit';
import { AnimeCharacter, AnimeCharacterNoId } from '../model/anime.character';
import { ApiAnimeCharactersRepository } from '../services/anime.repository';

export const animeCharactersLoadThunk = createAsyncThunk<
  AnimeCharacter[],
  ApiAnimeCharactersRepository
>('anime/load', async (repo) => {
  const animeCharacters = await repo.getAll();
  return animeCharacters;
});

export const animeCharactersCreateThunk = createAsyncThunk<
  AnimeCharacter,
  { repo: ApiAnimeCharactersRepository; animeCharacterNoId: AnimeCharacterNoId }
>('anime/add', async ({ repo, animeCharacterNoId }) => {
  const animeCharacter = repo.create(animeCharacterNoId);
  return animeCharacter;
});

export const animeCharacterUpdateThunk = createAsyncThunk<
  AnimeCharacter,
  { repo: ApiAnimeCharactersRepository; animeCharacter: AnimeCharacter }
>('anime/update', async ({ repo, animeCharacter }) => {
  const updateAnimeCharacter = repo.update(animeCharacter.id, animeCharacter);
  return updateAnimeCharacter;
});

export const animeCharacterDeleteThunk = createAsyncThunk<
  AnimeCharacter['id'],
  {
    repo: ApiAnimeCharactersRepository;
    animeCharacter: AnimeCharacter;
  }
>('anime/delete', async ({ repo, animeCharacter }) => {
  repo.delete(animeCharacter.id);
  return animeCharacter.id;
});
