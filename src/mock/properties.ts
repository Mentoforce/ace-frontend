import { Property, Property1 } from "@/types/property";

export const featuredPropertie: Property[] = [
  {
    _id: "1",
    slug: "marina-waterfront-residence",
    price: 1850000,
    area: 1920,
    bedrooms: 3,
    bathrooms: 3,
    images: ["/featuredprop/p1.jpg"],
    translations: {
      "en-gb": {
        title: "Marina Waterfront Residence",
        description:
          "An elegant waterfront apartment offering panoramic marina views, refined interiors, and direct access to Dubai Marina Walk.",
        location: "Dubai Marina, Dubai",
      },
      ar: {
        title: "شقة راقية على الواجهة البحرية في المارينا",
        description:
          "شقة أنيقة تطل على المارينا، بتصميم داخلي راقٍ وإطلالات بانورامية مع وصول مباشر إلى ممشى دبي مارينا.",
        location: "دبي مارينا، دبي",
      },
      fr: {
        title: "Résidence en bord de marina",
        description:
          "Appartement élégant en bord de l’eau offrant des vues panoramiques sur la marina, des finitions raffinées et un accès direct à la Marina Walk.",
        location: "Dubai Marina, Dubaï",
      },
      ru: {
        title: "Резиденция на набережной Марина",
        description:
          "Элегантные апартаменты на первой линии с панорамным видом на марину, изысканными интерьерами и прямым выходом к Dubai Marina Walk.",
        location: "Дубай Марина, Дубай",
      },
      zh: {
        title: "码头滨水奢华公寓",
        description:
          "这套优雅的滨水公寓可饱览迪拜码头全景，拥有精致室内设计，并可直达迪拜码头步道。",
        location: "迪拜码头，迪拜",
      },
    },
  },

  {
    _id: "2",
    slug: "downtown-burj-view-apartment",
    price: 2650000,
    area: 2150,
    bedrooms: 3,
    bathrooms: 4,
    images: ["/featuredprop/p2.jpg"],
    translations: {
      "en-gb": {
        title: "Downtown Burj View Apartment",
        description:
          "A sophisticated residence in Downtown Dubai featuring unobstructed views of Burj Khalifa and world-class lifestyle amenities.",
        location: "Downtown Dubai, Dubai",
      },
      ar: {
        title: "شقة فاخرة بإطلالة على برج خليفة",
        description:
          "مسكن راقٍ في وسط مدينة دبي يتميز بإطلالات مباشرة على برج خليفة ومرافق عالمية المستوى.",
        location: "وسط مدينة دبي، دبي",
      },
      fr: {
        title: "Appartement avec vue sur le Burj Khalifa",
        description:
          "Résidence sophistiquée au cœur de Downtown Dubai offrant une vue dégagée sur le Burj Khalifa et des prestations de classe mondiale.",
        location: "Downtown Dubai, Dubaï",
      },
      ru: {
        title: "Апартаменты с видом на Бурдж-Халифа",
        description:
          "Элегантная резиденция в центре Дубая с прямым видом на Бурдж-Халифа и первоклассной инфраструктурой.",
        location: "Даунтаун Дубай, Дубай",
      },
      zh: {
        title: "哈利法塔景观公寓",
        description:
          "位于迪拜市中心的高端住宅，坐拥哈利法塔无遮挡景观，并配备世界级生活配套。",
        location: "迪拜市中心，迪拜",
      },
    },
  },

  {
    _id: "3",
    slug: "palm-jumeirah-sea-view-villa",
    price: 8900000,
    area: 5400,
    bedrooms: 5,
    bathrooms: 6,
    images: ["/featuredprop/b.jpg"],
    translations: {
      "en-gb": {
        title: "Palm Jumeirah Sea-View Villa",
        description:
          "An exclusive beachfront villa on Palm Jumeirah offering private beach access, expansive living spaces, and uninterrupted sea views.",
        location: "Palm Jumeirah, Dubai",
      },
      ar: {
        title: "فيلا فاخرة بإطلالة بحرية في نخلة جميرا",
        description:
          "فيلا شاطئية حصرية في نخلة جميرا توفر شاطئاً خاصاً، مساحات معيشة واسعة وإطلالات بحرية مفتوحة.",
        location: "نخلة جميرا، دبي",
      },
      fr: {
        title: "Villa avec vue sur la mer à Palm Jumeirah",
        description:
          "Villa en bord de mer d’exception à Palm Jumeirah offrant un accès direct à la plage, de vastes espaces de vie et une vue imprenable sur la mer.",
        location: "Palm Jumeirah, Dubaï",
      },
      ru: {
        title: "Вилла с видом на море на Palm Jumeirah",
        description:
          "Эксклюзивная прибрежная вилла на Palm Jumeirah с частным выходом к пляжу, просторными интерьерами и панорамным видом на море.",
        location: "Пальма Джумейра, Дубай",
      },
      zh: {
        title: "朱美拉棕榈岛海景别墅",
        description:
          "位于朱美拉棕榈岛的尊贵海滨别墅，拥有私人沙滩、宽敞空间及无遮挡海景。",
        location: "朱美拉棕榈岛，迪拜",
      },
    },
  },

  {
    _id: "4",
    slug: "business-bay-luxury-residence",
    price: 1580000,
    area: 1750,
    bedrooms: 2,
    bathrooms: 3,
    images: ["/featuredprop/p3.png"],
    translations: {
      "en-gb": {
        title: "Business Bay Luxury Residence",
        description:
          "A contemporary residence in Business Bay combining canal views, modern design, and proximity to Downtown Dubai.",
        location: "Business Bay, Dubai",
      },
      ar: {
        title: "مسكن فاخر في الخليج التجاري",
        description:
          "مسكن عصري في الخليج التجاري يجمع بين إطلالات القناة، التصميم الحديث، والقرب من وسط مدينة دبي.",
        location: "الخليج التجاري، دبي",
      },
      fr: {
        title: "Résidence de luxe à Business Bay",
        description:
          "Résidence contemporaine à Business Bay offrant une vue sur le canal, un design moderne et une proximité immédiate avec Downtown Dubai.",
        location: "Business Bay, Dubaï",
      },
      ru: {
        title: "Роскошная резиденция в Business Bay",
        description:
          "Современная резиденция в Business Bay с видом на канал, стильным дизайном и близостью к Downtown Dubai.",
        location: "Бизнес-Бэй, Дубай",
      },
      zh: {
        title: "商业湾奢华公寓",
        description:
          "位于商业湾的现代高端住宅，融合运河景观、现代设计，并毗邻迪拜市中心。",
        location: "商业湾，迪拜",
      },
    },
  },
  {
    _id: "5",
    slug: "business-bay-luxury-residence",
    price: 1580000,
    area: 1750,
    bedrooms: 2,
    bathrooms: 3,
    images: ["/featuredprop/p3.png"],
    translations: {
      "en-gb": {
        title: "Business Bay Luxury Residence",
        description:
          "A contemporary residence in Business Bay combining canal views, modern design, and proximity to Downtown Dubai.",
        location: "Business Bay, Dubai",
      },
      ar: {
        title: "مسكن فاخر في الخليج التجاري",
        description:
          "مسكن عصري في الخليج التجاري يجمع بين إطلالات القناة، التصميم الحديث، والقرب من وسط مدينة دبي.",
        location: "الخليج التجاري، دبي",
      },
      fr: {
        title: "Résidence de luxe à Business Bay",
        description:
          "Résidence contemporaine à Business Bay offrant une vue sur le canal, un design moderne et une proximité immédiate avec Downtown Dubai.",
        location: "Business Bay, Dubaï",
      },
      ru: {
        title: "Роскошная резиденция в Business Bay",
        description:
          "Современная резиденция в Business Bay с видом на канал, стильным дизайном и близостью к Downtown Dubai.",
        location: "Бизнес-Бэй, Дубай",
      },
      zh: {
        title: "商业湾奢华公寓",
        description:
          "位于商业湾的现代高端住宅，融合运河景观、现代设计，并毗邻迪拜市中心。",
        location: "商业湾，迪拜",
      },
    },
  },
  {
    _id: "6",
    slug: "business-bay-luxury-residence",
    price: 1580000,
    area: 1750,
    bedrooms: 2,
    bathrooms: 3,
    images: ["/featuredprop/p3.png"],
    translations: {
      "en-gb": {
        title: "Business Bay Luxury Residence",
        description:
          "A contemporary residence in Business Bay combining canal views, modern design, and proximity to Downtown Dubai.",
        location: "Business Bay, Dubai",
      },
      ar: {
        title: "مسكن فاخر في الخليج التجاري",
        description:
          "مسكن عصري في الخليج التجاري يجمع بين إطلالات القناة، التصميم الحديث، والقرب من وسط مدينة دبي.",
        location: "الخليج التجاري، دبي",
      },
      fr: {
        title: "Résidence de luxe à Business Bay",
        description:
          "Résidence contemporaine à Business Bay offrant une vue sur le canal, un design moderne et une proximité immédiate avec Downtown Dubai.",
        location: "Business Bay, Dubaï",
      },
      ru: {
        title: "Роскошная резиденция в Business Bay",
        description:
          "Современная резиденция в Business Bay с видом на канал, стильным дизайном и близостью к Downtown Dubai.",
        location: "Бизнес-Бэй, Дубай",
      },
      zh: {
        title: "商业湾奢华公寓",
        description:
          "位于商业湾的现代高端住宅，融合运河景观、现代设计，并毗邻迪拜市中心。",
        location: "商业湾，迪拜",
      },
    },
  },
  {
    _id: "7",
    slug: "business-bay-luxury-residence",
    price: 1580000,
    area: 1750,
    bedrooms: 2,
    bathrooms: 3,
    images: ["/featuredprop/p3.png"],
    translations: {
      "en-gb": {
        title: "Business Bay Luxury Residence",
        description:
          "A contemporary residence in Business Bay combining canal views, modern design, and proximity to Downtown Dubai.",
        location: "Business Bay, Dubai",
      },
      ar: {
        title: "مسكن فاخر في الخليج التجاري",
        description:
          "مسكن عصري في الخليج التجاري يجمع بين إطلالات القناة، التصميم الحديث، والقرب من وسط مدينة دبي.",
        location: "الخليج التجاري، دبي",
      },
      fr: {
        title: "Résidence de luxe à Business Bay",
        description:
          "Résidence contemporaine à Business Bay offrant une vue sur le canal, un design moderne et une proximité immédiate avec Downtown Dubai.",
        location: "Business Bay, Dubaï",
      },
      ru: {
        title: "Роскошная резиденция в Business Bay",
        description:
          "Современная резиденция в Business Bay с видом на канал, стильным дизайном и близостью к Downtown Dubai.",
        location: "Бизнес-Бэй, Дубай",
      },
      zh: {
        title: "商业湾奢华公寓",
        description:
          "位于商业湾的现代高端住宅，融合运河景观、现代设计，并毗邻迪拜市中心。",
        location: "商业湾，迪拜",
      },
    },
  },
  {
    _id: "8",
    slug: "business-bay-luxury-residence",
    price: 1580000,
    area: 1750,
    bedrooms: 2,
    bathrooms: 3,
    images: ["/featuredprop/p3.png"],
    translations: {
      "en-gb": {
        title: "Business Bay Luxury Residence",
        description:
          "A contemporary residence in Business Bay combining canal views, modern design, and proximity to Downtown Dubai.",
        location: "Business Bay, Dubai",
      },
      ar: {
        title: "مسكن فاخر في الخليج التجاري",
        description:
          "مسكن عصري في الخليج التجاري يجمع بين إطلالات القناة، التصميم الحديث، والقرب من وسط مدينة دبي.",
        location: "الخليج التجاري، دبي",
      },
      fr: {
        title: "Résidence de luxe à Business Bay",
        description:
          "Résidence contemporaine à Business Bay offrant une vue sur le canal, un design moderne et une proximité immédiate avec Downtown Dubai.",
        location: "Business Bay, Dubaï",
      },
      ru: {
        title: "Роскошная резиденция в Business Bay",
        description:
          "Современная резиденция в Business Bay с видом на канал, стильным дизайном и близостью к Downtown Dubai.",
        location: "Бизнес-Бэй, Дубай",
      },
      zh: {
        title: "商业湾奢华公寓",
        description:
          "位于商业湾的现代高端住宅，融合运河景观、现代设计，并毗邻迪拜市中心。",
        location: "商业湾，迪拜",
      },
    },
  },
];

export const featuredProperties: Property1[] = [
  {
    _id: "1",
    slug: "vision-simplex-tower-A",

    price: "1.3M",
    currency: "AED",

    area: 385,
    bedrooms: "Studio, 1-3",
    bathrooms: "",
    // handover: "Ready",
    status: "off_plan",
    // garden: "Community",
    // dldNumber: "123456",
    images: [
      "/featuredprop/p1.jpg",
      "/featuredprop/p2.jpg",
      "/featuredprop/p3.png",
      "/featuredprop/b.jpg",
    ],
    details: [
      { label: "Developer", value: "Binghatti Developers" },
      { label: "Type", value: "Apartments" },
      { label: "Title Type", value: "Freehold" },
      { label: "Payment Plan", value: "70/30" },
      { label: "Handover Date", value: "Q2 2028" },
      { label: "Parking", value: "1" },
      { label: "Bedrooms", value: "Studio, 1-3" },
      { label: "Status", value: "Off-Plan" },
      { label: "Furnished", value: "Unfurnished" },
    ],
    amenities: [
      "Longue",
      "Gym and Fitness",
      "Jogging Track",
      "Parking",
      "Children’s Play Area",
      "Swimming Pool",
      "Park",
      "Business Centre",
      "Security and Concierge",
    ],
    payment_plan: [20, 50, 30],
    unit_types: [
      {
        unit_type: "Apartment",
        beds: [
          {
            number: "Studio",
            size_range: "385 Sqft",
            types: [
              {
                name: "Type 1",
                area: "385",
                price: "AED 1.3M",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
            ],
          },
          {
            number: "1 Bed",
            size_range: "632 Sqft",
            types: [
              {
                name: "Type 1",
                area: "632",
                price: "-",
                floor_plan: "/floorplans/2bed-1266.jpg",
              },
            ],
          },
          {
            number: "2 Beds",
            size_range: "992 Sqft",
            types: [
              {
                name: "Type 1",
                area: "992",
                price: "-",
                floor_plan: "/floorplans/3bed-2127.jpg",
              },
            ],
          },
          {
            number: "3 Beds",
            size_range: "1321",
            types: [
              {
                name: "Type 1",
                area: "1321",
                price: "-",
                floor_plan: "/floorplans/4bed-2771.jpg",
              },
            ],
          },
        ],
      },
    ],
    brochure: "",
    translations: {
      "en-gb": {
        title: "Vision-Simplex Tower A",
        description:
          "Vision Simplex Tower A is an upcoming residential development situated within Mercedes-Benz Places in Binghatti City, a prominent address in Meydan. Developed by Binghatti Properties, the project will offer a diverse collection of residential units thoughtfully designed to accommodate a range of lifestyle preferences and living requirements.\n\nThe development is planned to deliver a connected and well-balanced residential environment, with layouts that prioritize functionality and everyday comfort. Residents will have access to a swimming pool, a fully equipped gym, and a dedicated children’s play area, supporting both relaxation and active living within the community.\n\nStrategically positioned with convenient access to major road networks, including Al Khail Road (E44) and Sheikh Mohammed Bin Zayed Road (E311), the development ensures seamless connectivity across Meydan and the wider Dubai area.",
        location: "Mercedes-Benz Places, Binghatti City, Meydan",
      },
      ar: { title: "", description: "", location: "" },
      fr: { title: "", description: "", location: "" },
      ru: { title: "", description: "", location: "" },
      zh: { title: "", description: "", location: "" },
    },
  },
  {
    _id: "2",
    slug: "mareva2-the-oasis",

    price: "13.8 M",
    currency: "AED",

    area: 7257,
    bedrooms: "4,5,6",
    bathrooms: "",
    // handover: "Ready",
    status: "off_plan",
    // garden: "Community",
    // dldNumber: "123456",
    images: [
      "/featuredprop/p1.jpg",
      "/featuredprop/p2.jpg",
      "/featuredprop/p3.png",
      "/featuredprop/b.jpg",
    ],
    details: [
      { label: "Developer", value: "Emaar" },
      { label: "Type", value: "Villas" },
      { label: "Title Type", value: "Freehold" },
      { label: "Payment Plan", value: "80/20" },
      { label: "Handover Date", value: "Q1 2030" },
      { label: "Parking", value: "1" },
      { label: "Bedrooms", value: "4,5,6" },
      { label: "Status", value: "Off-Plan" },
      { label: "Furnished", value: "Unfurnished" },
    ],
    amenities: [
      "Longue",
      "Gym and Fitness",
      "Jogging Track",
      "Parking",
      "Children’s Play Area",
      "Swimming Pool",
      "Park",
      "Business Centre",
      "Security and Concierge",
    ],
    payment_plan: [10, 70, 20],
    unit_types: [
      {
        unit_type: "Villa",
        beds: [
          {
            number: "4 Beds",
            size_range: "7257-7301 Sqft",
            types: [
              {
                name: "Type A",
                area: "7257",
                price: "-",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
              {
                name: "Type B",
                area: "7254",
                price: "AED 13.8M",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
              {
                name: "Type C",
                area: "7301",
                price: "-",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
            ],
          },
          {
            number: "5 Beds",
            size_range: "7965-10,363 Sqft",
            types: [
              {
                name: "Type A",
                area: "7965",
                price: "15.9M",
                floor_plan: "/floorplans/2bed-1266.jpg",
              },
              {
                name: "Type B",
                area: "8101",
                price: "-",
                floor_plan: "/floorplans/2bed-1266.jpg",
              },
              {
                name: "Type C",
                area: "10398",
                price: "-",
                floor_plan: "/floorplans/2bed-1266.jpg",
              },
              {
                name: "Type D",
                area: "10290",
                price: "-",
                floor_plan: "/floorplans/2bed-1266.jpg",
              },
              {
                name: "Type E",
                area: "10363",
                price: "-",
                floor_plan: "/floorplans/2bed-1266.jpg",
              },
            ],
          },
          {
            number: "6 Beds",
            size_range: "12986-12778 Sqft",
            types: [
              {
                name: "Type A",
                area: "12986",
                price: "-",
                floor_plan: "/floorplans/3bed-2127.jpg",
              },
              {
                name: "Type B",
                area: "12778",
                price: "27.1M",
                floor_plan: "/floorplans/3bed-2127.jpg",
              },
            ],
          },
        ],
      },
    ],
    brochure: "",
    translations: {
      "en-gb": {
        title: "Mareva 2 The Oasis",
        description:
          "Marèva 2 is an upcoming villa enclave within The Oasis by Emaar, set amidst palm-lined avenues, tranquil blue lagoons, and lush green surroundings. Developed by Emaar Properties, the project will feature an exclusive collection of 4, 5, and 6-bedroom villas designed with spacious open-plan layouts and private outdoor areas. The community’s natural setting is intended to foster a peaceful, breezy ambiance, complemented by scenic water views and landscaped walkways woven through verdant spaces.\n\nResidents will benefit from a comprehensive range of lifestyle amenities, including community parks and children’s playgrounds, dedicated jogging and cycling tracks, wellness and spa facilities, and sports courts. The development will also incorporate retail centres, schools, beaches, a clubhouse, swimming pools, and pocket parks, creating a well-rounded living environment. Convenient access to Sheikh Zayed Bin Hamdan Road (D54) and Emirates Road (E611) will ensure smooth connectivity to key destinations across Dubai.",
        location: "Mercedes-Benz Places, Binghatti City, Meydan",
      },
      ar: { title: "", description: "", location: "" },
      fr: { title: "", description: "", location: "" },
      ru: { title: "", description: "", location: "" },
      zh: { title: "", description: "", location: "" },
    },
  },

  {
    _id: "3",
    slug: "the-brooks-at-sobha-sanctuary",

    price: "4M",
    currency: "AED",

    area: 2521,
    bedrooms: "4,5",
    bathrooms: "",
    // handover: "Ready",
    status: "off_plan",
    // garden: "Community",
    // dldNumber: "123456",
    images: [
      "/featuredprop/p1.jpg",
      "/featuredprop/p2.jpg",
      "/featuredprop/p3.png",
      "/featuredprop/b.jpg",
    ],
    details: [
      { label: "Developer", value: "Sobha Realty" },
      { label: "Type", value: "Villas" },
      { label: "Title Type", value: "Freehold" },
      { label: "Payment Plan", value: "60/40" },
      { label: "Handover Date", value: "Q3 2029" },
      { label: "Parking", value: "1" },
      { label: "Bedrooms", value: "4-5 Beds" },
      { label: "Status", value: "Off-Plan" },
      { label: "Furnished", value: "Unfurnished" },
    ],
    amenities: [
      "Longue",
      "Gym and Fitness",
      "Jogging Track",
      "Parking",
      "Children’s Play Area",
      "Swimming Pool",
      "Park",
      "Business Centre",
      "Security and Concierge",
    ],
    payment_plan: [20, 40, 40],
    unit_types: [
      {
        unit_type: "Villas",
        beds: [
          {
            number: "4 Bed",
            size_range: "2521-3329 Sqft",
            types: [
              {
                name: "Garden Villas T4 Bedroom - Type A",
                area: "2521",
                price: "-",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
              {
                name: "Garden Villas T4 Bedroom - Type AM",
                area: "2521",
                price: "-",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
              {
                name: "Garden Villas T4 Bedroom - Type B",
                area: "2459",
                price: "4M",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
              {
                name: "Garden Villas T4 Bedroom - Type BM",
                area: "2459",
                price: "-",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
              {
                name: "Garden Villas T4 Bedroom - Type B Variant 1",
                area: "2459",
                price: "-",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
              {
                name: "Garden Villas T4 Bedroom - Type B Variant 1 - M",
                area: "2459",
                price: "-",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
              {
                name: "Garden Villas T4 Bedroom - Type C",
                area: "3430",
                price: "-",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
              {
                name: "Garden Villas T4 Bedroom - Type CM",
                area: "3430",
                price: "-",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
              {
                name: "Garden Villas T4 Bedroom - Type D",
                area: "3329",
                price: "-",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
              {
                name: "Garden Villas T4 Bedroom - Type DM",
                area: "3329",
                price: "-",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
              {
                name: "Garden Villas T4 Bedroom - Type D- Variant 1",
                area: "3329",
                price: "-",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
              {
                name: "Garden Villas T4 Bedroom - Type D- Variant 1- M",
                area: "3329",
                price: "-",
                floor_plan: "/floorplans/1bed-754.jpg",
              },
            ],
          },
          {
            number: "5 Bed",
            size_range: "4106-4155 Sqft",
            types: [
              {
                name: "Courtyard Villas T5 Bedroom - Type A",
                area: "4106",
                price: "-",
                floor_plan: "/floorplans/2bed-1266.jpg",
              },
            ],
          },
        ],
      },
    ],
    brochure: "",
    translations: {
      "en-gb": {
        title: "The Brooks at Sobha Sanctuary",
        description:
          "Vision Simplex Tower A is an upcoming residential development situated within Mercedes-Benz Places in Binghatti City, a prominent address in Meydan. Developed by Binghatti Properties, the project will offer a diverse collection of residential units thoughtfully designed to accommodate a range of lifestyle preferences and living requirements.\n\nThe development is planned to deliver a connected and well-balanced residential environment, with layouts that prioritize functionality and everyday comfort. Residents will have access to a swimming pool, a fully equipped gym, and a dedicated children’s play area, supporting both relaxation and active living within the community.\n\nStrategically positioned with convenient access to major road networks, including Al Khail Road (E44) and Sheikh Mohammed Bin Zayed Road (E311), the development ensures seamless connectivity across Meydan and the wider Dubai area.",
        location: "Mercedes-Benz Places, Binghatti City, Meydan",
      },
      ar: { title: "", description: "", location: "" },
      fr: { title: "", description: "", location: "" },
      ru: { title: "", description: "", location: "" },
      zh: { title: "", description: "", location: "" },
    },
  },
];
