export interface Roony {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  discountPrice: number;
  seats: number;
  rating: number;
  quantity?: number;
}