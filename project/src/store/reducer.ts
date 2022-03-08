import { createReducer } from '@reduxjs/toolkit';
import { Film, FilmGenre } from '../types/films';
import { setFilmsByGenre, setGenre } from './action';
import { films } from '../mocks/films';
import { ALL_GENRES } from '../const';

type initialStateType = {
  currentGenre: FilmGenre;
  filmsByGenre: Film[] | []
}

const initialState: initialStateType = {
  currentGenre: ALL_GENRES,
  filmsByGenre: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(setFilmsByGenre, (state, action) => {
      state.filmsByGenre = action.payload === ALL_GENRES
        ? films
        : films.filter((film: Film) => film.genre === action.payload);
    });
});

export {reducer};
