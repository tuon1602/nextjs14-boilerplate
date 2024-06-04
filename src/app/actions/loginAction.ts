"use server"
import { signIn } from "@/auth"
export async function signin(){
    await signIn("google",{ redirectTo: "/" })
}