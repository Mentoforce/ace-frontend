export type LocaleKey = "en-gb" | "ar";
export type IconName = "building" | "chart" | "lock" | "trend";

export interface LocalizedText {
  title?: string;
  description?: string;
}

export interface WhyChooseUsService {
  id: string;
  icon: IconName;
  translations: any;
}

export interface WhyChooseUsSection {
  slug: "why-choose-us";

  sectionTranslations: {
    [locale: string]: {
      badge: string;
      heading: string;
      intro: string;
      before?: string;
      highlight?: string;
      after?: string;
      advisorsHeading: string;
    };
  };

  services: WhyChooseUsService[];

  illustration: {
    src: string;
    alt: string;
    flipOnRTL?: boolean;
  };
}
