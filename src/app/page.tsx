import Image from "next/image";
import { Button } from "@/components/ui/button";
import Profile from "@/components/Profile";
import SignOutButton from "../components/SignOutButton";
import SignInButton from "@/components/SignInButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import FormActionTest from "@/components/FormActionTest";
import { useTranslations } from "next-intl";
import ChangeLanguage from "@/components/ChangeLanguage";
import { getAnimals } from "./actions/getAnimals";
import { getTranslations } from "next-intl/server";
import FetchAnimals from "@/components/FetchAnimals";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { quickSort } from "@/helpers/quickSort";
import { mergeSort } from "@/helpers/mergeSort";
import { findIndexOfArray } from "@/helpers/findIndexOfArray";

export default async function Home() {
  const helperArray = [9,5,4,7,1,11,22,55]
  console.log(findIndexOfArray(helperArray,9))
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["animals"],
    queryFn: getAnimals,
  });
  const t = await getTranslations("Index");
  return (
    <>
      {" "}
      <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
        <h1 className="text-6xl">{t("title")}</h1>
        <ChangeLanguage />
        <Button>{t("demo-button")}</Button>
        <Profile />
        <SignOutButton />
        <SignInButton />
        <ThemeToggle />
        <div className="mt-5">
          <h2 className="heading-2">Form action</h2>
          <FormActionTest />
        </div>

        <HydrationBoundary state={dehydrate(queryClient)}>
          <div className="mt-5">
            <FetchAnimals />
          </div>
        </HydrationBoundary>
      </main>
    </>
  );
}
