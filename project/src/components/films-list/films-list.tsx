import { BaseProps } from '../../types/base-props';
import { Films } from '../../types/films';
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
  return (
    <>
      {
        films.map(({ id, ...film }) => (
          <SmallFilmCard
            key={id}
            className={className}
            posterSize={posterSize}
            {...film}
          />
        ))
      }
    </>
  );
}

export default FilmsList;
