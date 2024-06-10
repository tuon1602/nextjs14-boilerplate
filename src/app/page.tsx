import Image from "next/image";
import { Button } from "@/components/ui/button";
import Profile from "@/components/Profile";
import SignOutButton from "../components/SignOutButton";
import SignInButton from "@/components/SignInButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import FormActionTest from "@/components/FormActionTest";

export default function Home() {
  return (
    <>
      {" "}
      <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
        <h1 className="text-6xl">Hello world</h1>
        <Button>This button is from Shadcn/ui</Button>
        <Profile />
        <SignOutButton />
        <SignInButton />
        <ThemeToggle/>
        <div className="mt-5">
          <h2 className="heading-2">Form action</h2>
          <FormActionTest/>
        </div>
      </main>
      
    </>
  );
}
