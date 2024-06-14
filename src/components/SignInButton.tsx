import { signin } from "@/app/actions/loginAction";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
export default async function SignInButton() {
  const session = await auth();
  return (
    <>
      {" "}
      {!session ? (
        <form action={signin}>
          <Button type="submit">Sign in</Button>
        </form>
      ) : null}
    </>
  );
}
