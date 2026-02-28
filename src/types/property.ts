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

  // Basic Info
  area: number; // in sq ft
  bedrooms: number;
  bathrooms: number;
  kitchenType?: string;
  handover?: string;
  launch_date?: string;

  // Layout Info
  bua?: number;
  design?: string;
  balcony?: string;
  garden?: string;

  // Media
  images: string[];
  videoUrl?: string;

  // Agent Info
  //agent later from other db in backend
  agent: {
    name: string;
    title: string;
    phone: string;
    whatsapp: string;
    image: string;
    rera?: string;
  };

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
