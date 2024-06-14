import React from "react";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const t = useTranslations("Index");
  return <div>{t("about-page")}</div>;
};

export default AboutPage;
