"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { setCookie, getCookie } from "cookies-next";
import { useTranslations } from "next-intl";

const ChangeLanguage = () => {
  const t = useTranslations("Index");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const handleChangeLanguage = (value: string) => {
    startTransition(() => {
      setCookie("language", value);
      router.refresh();
    });
  };
  const currentLanguage = getCookie("language");
  return (
    <div>
      <Select
        onValueChange={handleChangeLanguage}
        disabled={isPending}
        defaultValue={currentLanguage ? currentLanguage : "en"}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t("Select-Language")} />
        </SelectTrigger>
        <SelectContent aria-disabled={isPending}>
          <SelectItem value="en">{t("en")}</SelectItem>
          <SelectItem value="vn">{t("vn")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ChangeLanguage;
