import { Link } from 'react-router-dom';
import { LogoTheme } from '../../const';

type LogoProps = {
  theme?: LogoTheme.Dark | LogoTheme.Light;
}

function Logo(
  {
    theme = LogoTheme.Dark,
  }: LogoProps,
): JSX.Element {
  return (
    <div className="logo">
      <Link
        className={`logo__link ${theme === LogoTheme.Light ? 'logo__link--light' : ''}`}
        to="/"
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
