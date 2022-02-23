import { Film } from '../types/films';

export const getFilmById = (films: Film[], id: number): Film | null => films.find((film) => film.id === id) || null;
