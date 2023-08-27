import { SyntheticEvent } from 'react';
import { useCharacters } from '../../hook/useCharacters';
import { AnimeCharacterNoId } from '../../model/anime.character';

export const Create = () => {
  const { create } = useCharacters();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const character: AnimeCharacterNoId = {
      anime: (form.elements.namedItem('anime') as HTMLInputElement).value,
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      type: (form.elements.namedItem('type') as HTMLInputElement).value,
      ability: (form.elements.namedItem('ability') as HTMLInputElement).value,
    };
    create(character);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="anime" placeholder="Anime name" required></input>
      <input
        type="text"
        name="name"
        placeholder="Character name"
        required
      ></input>
      <input
        type="text"
        name="type"
        placeholder="Type of character"
        required
      ></input>
      <input type="text" name="ability" placeholder="Ability" required></input>
      <button type="submit">Send</button>
    </form>
  );
};
