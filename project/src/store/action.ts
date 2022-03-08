import { createAction } from '@reduxjs/toolkit';
import { FilmGenre } from '../types/films';

export const setGenre = createAction<FilmGenre>('setGenre');
export const setFilmsByGenre = createAction<FilmGenre>('setFilmsByGenre');
