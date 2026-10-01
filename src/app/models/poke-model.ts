export interface Pokemon {
  id: number;
  name: string;
  type: string;
  heldItem: string;
  description: string;
  image?: string;
}

export interface PokemartItem {
  id: number;
  name: string;
  price: number;
  category: string;
}