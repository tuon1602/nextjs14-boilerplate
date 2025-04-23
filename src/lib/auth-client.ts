import { createAuthClient } from "better-auth/react";
import Config from "../../config";

export const { signIn, signUp, useSession,signOut } = createAuthClient({
    baseURL: Config.BETTERAUTH.BASEURL,
})