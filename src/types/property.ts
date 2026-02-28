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

export type Property1 = {
  _id: string;
  slug: string;

  // Pricing
  price: number;
  currency: string; // "USD", "AED"
  dldNumber?: string;
  area: number;
  bedrooms: number;
  bathrooms?: number;
  // handover?: string;
  launch_date?: string;
  status: string; //"Ready, offplan"
  //commercial:boolean
  // Media
  images: string[];
  details: { label: string; value: string }[];
  // {
  //   developer: string;
  //   type: string;
  //   handover_date: string;
  //   status: string;
  //   bedrooms: string;
  //   payment_plan: string;
  //   title_type: string;
  //   launch_date?: string;
  //   built_up_area?: string;
  //   furnished: string;
  //   bath?: string;
  //   plot_area?: string;
  //   parking: string;
  // },

  // Agent Info
  //agent later from other db in backend

  // Amenities
  amenities: string[];

  translations: {
    [locale: string]: {
      title: string;
      description: string;
      location: string;
    };
  };
};
