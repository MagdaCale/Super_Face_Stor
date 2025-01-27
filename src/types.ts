type Rating = {
  rate: number;
  count: number;
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: "men's clothing" | "jewelery" | "electronics" | "women's clothing";
  image: string;
  rating: Rating;
}


