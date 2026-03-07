"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();

  if (!pathname) return null;

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-gray-600">
        <li>
          <Link href="/" className="hover:text-[#C28A2A] transition-colors">
            Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          const formatted = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());

          return (
            <li key={href} className="flex items-center gap-2">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-900 font-semibold">{formatted}</span>
              ) : (
                <Link
                  href={href}
                  className="hover:text-[#0c2448] transition-colors"
                >
                  {formatted}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
