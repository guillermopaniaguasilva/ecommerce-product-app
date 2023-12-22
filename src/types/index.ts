export type Product = {
  title: string;
  description: string;
  unitPrice: number;
  images: string[];
  thumbnails: string[];
};

export type ProductInCart = {
  product: Product;
  quantity: number;
};
