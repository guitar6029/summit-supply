"use server";

import { signIn, signOut, auth } from "@/auth";

export async function signInWithGoogle() {
  await signIn("google");
}

export async function signOutWithGoogle() {
  await signOut();
}

export async function getSession() {
  return auth();
}