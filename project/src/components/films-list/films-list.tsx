import { useState } from 'react';
import { BaseProps } from '../../types/base-props';
import { Film, Films } from '../../types/films';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmsListProps = BaseProps & {
  films: Films;
  posterSize?: 'medium';
}

function FilmsList(
  {
    className = '',
    films,
    posterSize = 'medium',
  }: FilmsListProps,
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilmCard, setActiveFilmCard] = useState<Film | null>(null);
  const getFilmById = (id: number): Film | null => films.find((film) => film.id === id) || null;

  return (
    <>
      {
        films.map(({ id, ...film }) => (
          <SmallFilmCard
            key={id}
            className={className}
            handleMouseEnter={(filmId) => setActiveFilmCard(getFilmById(filmId))}
            handleMouseLeave={() => setActiveFilmCard(null)}
            id={id}
            posterSize={posterSize}
            {...film}
          />
        ))
      }
    </>
  );
}

export default FilmsList;
