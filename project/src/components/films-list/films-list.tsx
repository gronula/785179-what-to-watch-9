import { useState } from 'react';
import { BaseProps } from '../../types/base-props';
import { Film } from '../../types/films';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmsListProps = BaseProps & {
  films: Film[];
  posterSize?: 'medium';
}

const MOUSE_ENTER_DELAY = 1000;
let timer: number | null = null;

function FilmsList(
  {
    className = '',
    films,
    posterSize = 'medium',
  }: FilmsListProps,
) {
  const [activeFilmCardId, setActiveFilmCardId] = useState<number | null>(null);
  const handleMouseEnter = (filmId: number): void => {
    timer = window.setTimeout(() => {
      setActiveFilmCardId(filmId);
    }, MOUSE_ENTER_DELAY);
  };
  const handleMouseLeave = (filmId: number): void => {
    if (timer) {
      clearTimeout(timer);
    }

    setActiveFilmCardId(null);
  };

  return (
    <>
      {
        films.map((film) => (
          <SmallFilmCard
            key={film.id}
            isActive={activeFilmCardId === film.id}
            className={className}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            posterSize={posterSize}
            {...film}
          />
        ))
      }
    </>
  );
}

export default FilmsList;
