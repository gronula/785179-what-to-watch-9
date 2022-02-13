type PosterType = {
  alt: string;
  height: number;
  src: string;
  width: number;
}
type SmallFilmCardProps = {
  className: string;
  href: string;
  poster: PosterType;
  title: string;
}

function SmallFilmCard(
  {
    className,
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
          width={poster.width}
          height={poster.height}
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
