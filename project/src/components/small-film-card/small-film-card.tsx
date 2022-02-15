type BaseProps = {
  className?: string;
}

type SmallFilmCardProps = BaseProps & {
  href?: string;
  name: string;
  posterImage: string;
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
    href = 'film-page.html',
    name,
    posterImage,
    posterSize = 'medium',
  }: SmallFilmCardProps,
): JSX.Element {
  const { width, height } = PosterSize[posterSize];

  return (
    <article className={`small-film-card ${className}`} >
      <div className="small-film-card__image">
        <img
          src={posterImage}
          alt={name}
          width={width}
          height={height}
        />
      </div>

      <h3 className="small-film-card__title">
        <a
          className="small-film-card__link"
          href={href}
        >
          {name}
        </a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
