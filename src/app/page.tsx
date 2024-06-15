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
import { getPosts } from "./actions/json-server/getPosts";
import FetchPosts from "@/components/FetchPosts";
import PostForm from "@/components/PostForm";


export default async function Home() {
  // const posts: IPosts[] = await getPosts();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["animals"],
    queryFn: getAnimals,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  const t = await getTranslations("Index");
  return (
    <>
      {" "}
      <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
        {/* <h1 className="text-6xl">{t("title")}</h1> */}
        <h1 className="heading">TodoApp</h1>
        {/* <ChangeLanguage /> */}
        {/* <Button>{t("demo-button")}</Button> */}
        {/* <Profile />
        <SignOutButton />
        <SignInButton />
        <ThemeToggle />
        <div className="mt-5">
          <h2 className="heading-2">Form action</h2>
          <FormActionTest />
        </div> */}

        <HydrationBoundary state={dehydrate(queryClient)}>
          <div>
            <FetchPosts/>
            <PostForm/>
          </div>
          <div className="mt-5">
            <FetchAnimals />
          </div>
        </HydrationBoundary>
      </main>
    </>
  );
}
