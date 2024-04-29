export type ProductModel = {
  id: number;
  title: string;
  teaser: string;
  description: string;
  imageUrl: string;
  typeId: string;
  durationInDays: number;
  minCount: number;
  maxCount: number;
  onSale: boolean;
  soldOut: boolean;
  hasQuiz?: boolean;
  isFavorite?: boolean;
};
