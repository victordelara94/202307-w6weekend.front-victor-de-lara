import { useEffect } from 'react';
import { useCharacters } from '../../hook/useCharacters';
import { Card } from '../card/card';

export const Characters = () => {
  const { loadCharacters, characters } = useCharacters();
  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  return (
    <ul className="characters">
      {characters.map((character) => (
        <Card animeCharacter={character} key={character.id}></Card>
      ))}
    </ul>
  );
};
