"use server";

import { createAdminClient, createSessionClient } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import { OAuthProvider } from "node-appwrite";

export async function signUpWithGithub() {
  const { account } = await createAdminClient();

  const origin = (await headers()).get("origin");

  const redirectUrl = await account.createOAuth2Token(
    OAuthProvider.Github,
    `${origin}/oauth`,
    `${origin}`,
  );

  return redirect(redirectUrl);
}


export async function logout(){
  const { account } = await createSessionClient();
  (await cookies()).delete("RAIN");
  await account.deleteSession("current");
}