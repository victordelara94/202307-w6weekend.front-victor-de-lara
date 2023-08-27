import { Link } from 'react-router-dom';
import { useCharacters } from '../../hook/useCharacters';
import { AnimeCharacter } from '../../model/anime.character';

type Props = {
  animeCharacter: AnimeCharacter;
};
export const Card = ({ animeCharacter }: Props) => {
  const { deleteCharacter } = useCharacters();

  return (
    <li className="card">
      <div className="span-container">
        <span className="anime">{animeCharacter.anime}</span>
        <span className="name">{animeCharacter.name}</span>
        <span className="type">{animeCharacter.type}</span>
        <span className="ability">{animeCharacter.ability}</span>
      </div>
      <div className="button-container">
        <span
          onClick={() => deleteCharacter(animeCharacter)}
          className="delete"
        >
          ❌
        </span>
        <Link to={`/${animeCharacter.id}`}>
          <span className="edit">🔨</span>
        </Link>
      </div>
    </li>
  );
};
