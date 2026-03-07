import Link from "next/link";
// {
//   title: "Apartment in Elite Business Bay Residence",
//   slug: "bh-s-222780",
//   country: "UAE",
//   countrySlug: "uae",
//   city: "Dubai",
//   citySlug: "dubai",
//   area: "Business Bay",
//   areaSlug: "business-bay",
//   building: "Elite Business Bay Residence",
//   buildingSlug: "elite-business-bay-residence"
// }
type BreadcrumbProps = {
  property: any;
  locale: string;
};

export default function PropertyBreadcrumb({
  property,
  locale,
}: BreadcrumbProps) {
  const items = [
    { name: "Home", href: `/${locale}` },
    { name: property.country, href: `/${locale}/${property.countrySlug}` },
    {
      name: property.city,
      href: `/${locale}/${property.countrySlug}/${property.citySlug}`,
    },
    {
      name: property.area,
      href: `/${locale}/${property.countrySlug}/${property.citySlug}/${property.areaSlug}`,
    },
    {
      name: property.building,
      href: `/${locale}/${property.countrySlug}/${property.citySlug}/${property.areaSlug}/${property.buildingSlug}`,
    },
    { name: property.title },
  ];

  return (
    <nav className="text-sm mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {index !== 0 && <span>&gt;</span>}

              {isLast ? (
                <span className="text-gray-900 font-semibold">{item.name}</span>
              ) : (
                <Link
                  href={item.href!}
                  className="hover:text-[#C28A2A] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
