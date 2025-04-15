import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const language = await cookieStore.get("language")?.value;
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = language || "en";

  return {
    locale,
    messages: (await import(`../../translation/${locale}.json`)).default,
  };
});
