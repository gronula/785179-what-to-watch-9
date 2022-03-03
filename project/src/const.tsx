import { RatingItems } from './types/rating';

export const RATING_ITEMS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export const HOUR_IN_MINUTES = 60;

export const RatingData: RatingItems = {
  Bad: {
    text: 'Bad',
    value: 0,
  },
  Normal: {
    text: 'Normal',
    value: 3,
  },
  Good: {
    text: 'Good',
    value: 5,
  },
  VeryGood: {
    text: 'Very good',
    value: 8,
  },
  Awesome: {
    text: 'Awesome',
    value: 10,
  },
};

export enum AppRoute {
  Film = '/films/:id',
  Login = '/login',
  Main = '/',
  MyList = '/mylist',
  Player = '/player/:id',
  Review = '/films/:id/review',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum LogoTheme {
  Dark = 'dark',
  Light = 'light',
}
