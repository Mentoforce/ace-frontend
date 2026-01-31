export type Property = {
  _id: string;
  slug: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  images: string[];
  translations: {
    [locale: string]: {
      title: string;
      description: string;
      location: string;
    };
  };
};
