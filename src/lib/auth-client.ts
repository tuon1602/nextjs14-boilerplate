import { createAuthClient } from "better-auth/react";
import Config from "../../config";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: Config.BETTERAUTH.BASEURL,
});

export const { signIn, signUp, useSession } = createAuthClient()