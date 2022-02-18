import FilmView from './components/film-view/film-view';
import LoginView from './components/login-view/login-view';
import MainView from './components/main-view/main-view';
import MyListView from './components/my-list-view/my-list-view';
import PlayerView from './components/player-view/player-view';
import ReviewView from './components/review-view/review-view';
import { AppRoute } from './const';

type Route = {
  path: string;
  element: (props: any) => JSX.Element;
  isPrivate?: boolean;
}


export const AppRoutes: Route[] = [
  {
    path: AppRoute.Film,
    element: (props) => (
      <FilmView {...props} />
    ),
  },
  {
    path: AppRoute.Login,
    element: (props) => (
      <LoginView {...props} />
    ),
  },
  {
    path: AppRoute.Main,
    element: (props) => (
      <MainView {...props} />
    ),
  },
  {
    path: AppRoute.MyList,
    element: (props) => (
      <MyListView {...props} />
    ),
    isPrivate: true,
  },
  {
    path: AppRoute.Player,
    element: (props) => (
      <PlayerView {...props} />
    ),
  },
  {
    path: AppRoute.Review,
    element: (props) => (
      <ReviewView {...props} />
    ),
  },
];
