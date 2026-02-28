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
  developer_logo?: string;
  area: number;
  bedrooms: string;
  bathrooms?: string;
  // handover?: string;
  launch_date?: string;
  status: string; //"Ready, offplan"
  //commercial:boolean
  // Media
  images: string[];
  details: { label: string; value: string }[];
  payment_plan: number[];
  unit_types: UnitType[];
  brochure: string;
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

interface UnitType {
  unit_type: string; // Apartment, Penthouse

  beds: {
    number: string; // "1 Bed", "2 Beds"
    size_range: string; // "754 - 894 Sqft"
    types: {
      name: string; // "Type A"
      area: string; // "754"
      price?: string;
      floor_plan: string; // image url
    }[];
  }[];
}
