"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";

export function useTranslations() {
  const params = useParams();
  const locale = params.locale as string;

  const messages = useMemo(() => {
    try {
      return require(`@/messages/${locale}.json`);
    } catch {
      return require("@/messages/en-gb.json");
    }
  }, [locale]);

  return (key: string) =>
    key.split(".").reduce((obj: any, k) => obj?.[k], messages);
}
