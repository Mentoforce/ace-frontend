export type BlogPost = {
  _id: string;
  slug: string;
  image: string;
  date: string;
  readTime: string;
  translations: {
    [locale: string]: {
      title: string;
    };
  };
};