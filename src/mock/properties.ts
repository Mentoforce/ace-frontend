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
    slug: "marina-waterfront-residence",

    price: 1850000,
    currency: "AED",

    area: 1920,
    bedrooms: 3,
    bathrooms: 3,
    // handover: "Ready",
    status: "off_plan",
    // garden: "Community",

    images: [
      "/featuredprop/p1.jpg",
      "/featuredprop/p2.jpg",
      "/featuredprop/p3.png",
      "/featuredprop/b.jpg",
    ],
    details: [
      { label: "Developer", value: "" },
      { label: "Type", value: "" },
      { label: "Title Type", value: "" },
      { label: "Payment Plan", value: "" },
      { label: "Handover Date", value: "" },
      { label: "Parking", value: "" },
      { label: "Bedrooms", value: "" },
      { label: "Status", value: "" },
      { label: "Furnished", value: "" },
    ],
    amenities: [
      "Balcony",
      "Built-in Wardrobes",
      "Central A/C",
      "Children’s Play Area",
      "Private Pool",
      "Private Garden",
      "Concierge Service",
      "Security",
    ],

    translations: {
      "en-gb": {
        title: "Marina Waterfront Residence",
        description:
          "An elegant waterfront apartment offering panoramic marina views, refined interiors, and direct access to Dubai Marina Walk.",
        location: "Dubai Marina, Dubai",
      },
      ar: { title: "", description: "", location: "" },
      fr: { title: "", description: "", location: "" },
      ru: { title: "", description: "", location: "" },
      zh: { title: "", description: "", location: "" },
    },
  },
];
