import { SyntheticEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCharacters } from '../../hook/useCharacters';
import { AnimeCharacter } from '../../model/anime.character';

const Update = () => {
  const { updateCharacter, characters } = useCharacters();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const updatedCharacter: AnimeCharacter = {
      id: id!,
      anime: (form.elements.namedItem('anime') as HTMLInputElement).value,
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      type: (form.elements.namedItem('type') as HTMLInputElement).value,
      ability: (form.elements.namedItem('ability') as HTMLInputElement).value,
    };

    const currentCharacter = characters.find(
      (character) => character.id === id
    );
    filter(updatedCharacter, currentCharacter!);
  };
  const filter = (
    updatedCharacter: AnimeCharacter,
    currentCharacter: AnimeCharacter
  ) => {
    const newCharacter = {
      id: updatedCharacter.id,
      anime: updatedCharacter.anime
        ? updatedCharacter.anime
        : currentCharacter.anime,
      name: updatedCharacter.name
        ? updatedCharacter.name
        : currentCharacter.name,
      type: updatedCharacter.type
        ? updatedCharacter.type
        : currentCharacter.type,
      ability: updatedCharacter.ability
        ? updatedCharacter.ability
        : currentCharacter.ability,
    };
    updateCharacter(newCharacter);
    navigate('/');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="anime" placeholder="Anime name"></input>
        <input type="text" name="name" placeholder="Character name"></input>
        <input type="text" name="type" placeholder="Type of character"></input>
        <input type="text" name="ability" placeholder="Ability"></input>
        <button type="submit">Send</button>
      </form>
      <Link to={'/'}>HOME</Link>
    </>
  );
};
export default Update;
