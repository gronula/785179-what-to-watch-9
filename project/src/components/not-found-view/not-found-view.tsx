import { LogoTheme } from '../../const';
import Logo from '../logo/logo';

function NotFoundView(): JSX.Element {
  return (
    <div className="not-found-page">
      <div className="page-content">
        <div className="not-found-page__content">
          <h1 className="not-found-page__title">404</h1>
          <a
            className="not-found-page__link"
            href="/"
          >
          Main page
          </a>
        </div>

        <footer className="page-footer">
          <Logo theme={LogoTheme.Light} />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default NotFoundView;
