export type RatingText = 'Bad' | 'Normal' | 'Good' | 'Very good' | 'Awesome'

export type RatingItem = {
  text: RatingText;
  value: number;
}

export type RatingItems = {
  [key: string]: RatingItem;
}
