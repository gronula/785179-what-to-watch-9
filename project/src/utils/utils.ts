import { HOUR_IN_MINUTES, RatingData } from '../const';
import { Film } from '../types/films';
import { RatingText } from '../types/rating';

export const getFilmById = (films: Film[], id: number): Film | undefined => films.find((film) => film.id === id);

export const noop = (): void => undefined;

export const convertTime = (duration: number): string => {
  const hours = Math.floor(duration / HOUR_IN_MINUTES);
  const minutes = duration - hours * HOUR_IN_MINUTES;

  return `${hours}h ${minutes}m`;
};

export const getRatingText = (rating: number): RatingText => {
  if (rating >= RatingData.Awesome.value) {
    return RatingData.Awesome.text;
  } else if (rating >= RatingData.VeryGood.value) {
    return RatingData.VeryGood.text;
  } else if (rating >= RatingData.Good.value) {
    return RatingData.Good.text;
  } else if (rating >= RatingData.Normal.value) {
    return RatingData.Normal.text;
  } else {
    return RatingData.Bad.text;
  }
};
