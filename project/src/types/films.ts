export type FilmGenre = 'All genres' | 'Comedy' | 'Crime' | 'Adventure' | 'Drama' | 'Action' | 'Thriller' | 'Fantasy';

export type Film = {
  backgroundColor: string;
  backgroundImage: string;
  description: string;
  director: string;
  genre: FilmGenre;
  id: number;
  isFavorite: boolean;
  name: string;
  posterImage: string;
  previewImage: string;
  previewVideoLink: string;
  rating: number;
  released: number;
  runTime: number;
  scoresCount: number;
  starring: string[];
  videoLink: string;
};
