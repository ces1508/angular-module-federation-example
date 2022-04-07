export type Istatus = 'Alive' | 'Dead';
export type IGender = 'Male' | 'Female';

interface IChareacterLocation {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  status: Istatus;
  location: IChareacterLocation;
  episodes: number;
  species: string;
  gender: IGender;
}
