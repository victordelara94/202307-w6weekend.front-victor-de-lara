import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimeCharacter } from '../model/anime.character';
import {
  animeCharacterDeleteThunk,
  animeCharacterUpdateThunk,
  animeCharactersLoadThunk,
} from '../redux/anime.characters.thunk';
import { ApiAnimeCharactersRepository } from '../services/anime.repository';
import { AppDispatch, RootState } from '../store/store';
const urlBase = 'http://localhost:4300/anime';
export const useCharacters = () => {
  const animeState = useSelector((state: RootState) => state.anime);
  const repo = useMemo(() => new ApiAnimeCharactersRepository(urlBase), []);
  const dispatch = useDispatch<AppDispatch>();
  const loadCharacters = useCallback(async () => {
    dispatch(animeCharactersLoadThunk(repo));
  }, [repo]);

  const updateCharacter = (animeCharacter: AnimeCharacter) => {
    dispatch(animeCharacterUpdateThunk({ repo, animeCharacter }));
  };

  const deleteCharacter = (animeCharacter: AnimeCharacter) => {
    dispatch(animeCharacterDeleteThunk({ animeCharacter, repo }));
  };

  return {
    characters: animeState.animeCharacters,
    loadCharacters,
    updateCharacter,
    deleteCharacter,
  };
};
