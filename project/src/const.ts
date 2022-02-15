export enum AppRoute {
  Film = '/films/:id',
  Login = '/login',
  Main = '/',
  MyList = '/mylist',
  Player = '/player/:id',
  Review = '/films/:id/review'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
