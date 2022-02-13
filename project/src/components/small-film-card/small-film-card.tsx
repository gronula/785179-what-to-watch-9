type Poster = {
  alt: string;
  height?: number;
  src: string;
  width?: number;
}
type SmallFilmCardProps = {
  className?: string;
  href: string;
  poster: Poster;
  title: string;
}

function SmallFilmCard(
  {
    className = '',
    href,
    poster,
    title,
  }: SmallFilmCardProps,
): JSX.Element {
  return (
    <article className={`small-film-card ${className}`} >
      <div className="small-film-card__image">
        <img
          src={poster.src}
          alt={poster.alt}
          width={poster.width || 280}
          height={poster.height || 175}
        />
      </div>

      <h3 className="small-film-card__title">
        <a
          className="small-film-card__link"
          href={href}
        >
          {title}
        </a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
