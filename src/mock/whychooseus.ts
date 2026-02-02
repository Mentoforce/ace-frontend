import { WhyChooseUsSection } from "@/types/whychooseus";

export const whyChooseUs: WhyChooseUsSection = {
  slug: "why-choose-us",

  sectionTranslations: {
    "en-gb": {
      badge: "Excellence in Real Estate",
      heading: "Where we help you grow...",
      intro:
        "At ACE Ventures, we combine local mastery with global perspective. We understand that real estate is more than a transaction — it's an investment in lifestyle, legacy, and long-term value.",
      before: "Our approach is rooted in ",
      highlight: "trust, transparency, and strategic foresight",
      after:
        "— guiding clients with clarity, confidence, and discretion at every stage of ownership, whether it’s acquisition, disposition, leasing, or portfolio growth.",
      advisorsHeading: "Our seasoned advisors deliver:",
    },

    ar: {
      badge: "التميز في العقارات",
      heading: "حيث نساعدك على النمو...",
      intro:
        "في ACE Ventures، نمزج بين الخبرة المحلية والرؤية العالمية. نحن ندرك أن العقارات أكثر من مجرد صفقة — إنها استثمار في أسلوب الحياة والإرث والقيمة طويلة الأمد.",
      before: "",
      highlight: "الثقة والشفافية والرؤية الاستراتيجية",
      after: "",
      advisorsHeading: "يقدم مستشارونا ذوو الخبرة:",
    },
  },

  services: [
    {
      id: "bespoke-advisory",
      icon: "building",
      translations: {
        "en-gb": {
          title: "Bespoke Advisory",
          description:
            "For high-net-worth individuals and institutional investors",
        },
        ar: {
          title: "استشارات مخصصة",
          description: "للأفراد ذوي الثروات العالية والمستثمرين المؤسسيين",
        },
      },
    },
    {
      id: "strategies",
      icon: "chart",
      translations: {
        "en-gb": {
          title: "Comprehensive Strategies",
          description:
            "Acquisition and disposal strategies tailored to your goals",
        },
        ar: {
          title: "استراتيجيات شاملة",
          description: "استراتيجيات شراء وبيع مصممة خصيصًا لأهدافك",
        },
      },
    },
    {
      id: "exclusive-access",
      icon: "lock",
      translations: {
        "en-gb": {
          title: "Exclusive Access",
          description:
            "Prime and off-market properties unavailable to the public",
        },
        ar: {
          title: "وصول حصري",
          description: "عقارات مميزة وخاصة غير متاحة للعامة",
        },
      },
    },
    {
      id: "investment-analysis",
      icon: "trend",
      translations: {
        "en-gb": {
          title: "Investment Analysis",
          description:
            "Tailored investment analysis and wealth preservation planning",
        },
        ar: {
          title: "تحليل استثماري",
          description: "تحليل استثماري مخصص وتخطيط للحفاظ على الثروة",
        },
      },
    },
  ],

  illustration: {
    src: "/buildings2.png",
    alt: "Building Growth Illustration",
    flipOnRTL: true,
  },
};
