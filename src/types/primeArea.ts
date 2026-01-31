export type PrimeArea = {
  _id: string;
  slug: string;
  image: string;
  translations: {
    [locale: string]: {
      title: string;
      description: string;
    };
  };
};
