export const RATING_ITEMS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

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
