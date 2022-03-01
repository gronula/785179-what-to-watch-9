import { Link } from 'react-router-dom';
import { BaseProps } from '../../types/base-props';
import { Film } from '../../types/films';
import { noop } from '../../utils/utils';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = BaseProps & Film & {
  handleMouseEnter?: (id: number) => void;
  handleMouseLeave?: (id: number) => void;
  isActive: boolean;
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
    className = '',
    handleMouseEnter = noop,
    handleMouseLeave = noop,
    id,
    isActive,
    name,
    posterImage,
    posterSize = 'medium',
    videoLink = '',
  }: SmallFilmCardProps,
): JSX.Element {
  const { width, height } = PosterSize[posterSize];

  return (
    <article
      className={`small-film-card ${className}`}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={() => handleMouseLeave(id)}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          src={videoLink}
          poster={posterImage}
          width={width}
          height={height}
          isActive={isActive}
          muted
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
