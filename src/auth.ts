// This file should handle all auth logic for nextauth v5

import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"

export const config = {
    providers: [Github,Google],
    pages: {
      signIn: "/login",
    },
  }

 
export const { handlers, signIn, signOut, auth } = NextAuth(config)