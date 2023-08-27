type Id = {
  id: string;
};
export type AnimeCharacterNoId = {
  anime: string;
  name: string;
  type: string;
  ability: string;
};

export type AnimeCharacter = AnimeCharacterNoId & Id;
