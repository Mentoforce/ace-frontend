"use client";
import { useParams } from "next/navigation";
import { useTranslations } from "@/lib/i18n/client";
import { featuredProperties } from "@/mock/properties";
import Image from "next/image";

export default function FeaturedProperties() {
  const { locale } = useParams();
  const t = useTranslations();

  return (
    <section className="p-10">
      <h2 className="mb-6 text-2xl font-bold text-center uppercase">
        {t("home.featured")}
      </h2>

      <div className="grid gap-6 md:grid-cols-4 mx-10">
        {featuredProperties.map((property) => {
          const content =
            property.translations[locale as string] ??
            property.translations["en-gb"];

          return (
            <div
              key={property._id}
              className="rounded-xl flex flex-col justify-around max-w-75 bg-[#fff8e7]"
            >
              <Image
                src={property.images[0]}
                alt={content.title}
                width={200}
                height={200}
                className=" h-50 min-w-full object-cover rounded-xl"
              />
              <div className="mx-2 my-4">
                <h3 className=" text-lg font-semibold">{content.title}</h3>
                <p className=" mt-1 text-sm text-gray-600">
                  {content.description}
                </p>
                <div className="mt-4 text-sm text-gray-500">
                  {property.bedrooms} {t("property.bedrooms")} · {property.area}{" "}
                  sqft
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
