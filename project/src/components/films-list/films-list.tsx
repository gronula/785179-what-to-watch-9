import { useState } from 'react';
import { BaseProps } from '../../types/base-props';
import { Film } from '../../types/films';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmsListProps = BaseProps & {
  films: Film[];
  posterSize?: 'medium';
}

function FilmsList(
  {
    className = '',
    films,
    posterSize = 'medium',
  }: FilmsListProps,
) {
  const [activeFilmCardId, setActiveFilmCardId] = useState<number | null>(null);

  return (
    <>
      {
        films.map((film) => (
          <SmallFilmCard
            key={film.id}
            activeFilmCardId={activeFilmCardId}
            className={className}
            handleMouseEnter={(filmId) => setActiveFilmCardId(filmId)}
            handleMouseLeave={() => setActiveFilmCardId(null)}
            posterSize={posterSize}
            {...film}
          />
        ))
      }
    </>
  );
}

export default FilmsList;
