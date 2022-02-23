import { Link } from 'react-router-dom';
import { BaseProps } from '../../types/base-props';
import { Film } from '../../types/films';

type SmallFilmCardProps = BaseProps & Film & {
  activeFilmCardId: number | null;
  handleMouseEnter?: (id: number) => void;
  handleMouseLeave?: (id: number) => void;
  posterSize?: 'medium';
}

const PosterSize = {
  medium: {
    height: 175,
    width: 280,
  },
};

function SmallFilmCard(
  {
    activeFilmCardId,
    className = '',
    id,
    handleMouseEnter,
    handleMouseLeave,
    name,
    posterImage,
    posterSize = 'medium',
  }: SmallFilmCardProps,
): JSX.Element {
  const { width, height } = PosterSize[posterSize];

  return (
    <article
      className={`small-film-card ${className}`}
      onMouseEnter={() => handleMouseEnter?.(id)}
      onMouseLeave={() => handleMouseLeave?.(id)}
    >
      <div className="small-film-card__image">
        <img
          src={posterImage}
          alt={name}
          width={width}
          height={height}
        />
      </div>

      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`/films/${id}`}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
