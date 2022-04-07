import { ICharacter } from './character.model';

export interface IRickAndMortyResponse {
  info: {
    count: number;
    pages: number;
    prev: string | null;
  };
  results: ICharacter[] | any[];
}
