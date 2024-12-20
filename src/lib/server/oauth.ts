"use server";

import { createAdminClient, createSessionClient } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import { cookies, headers } from "next/headers";
import { OAuthProvider } from "node-appwrite";
import { revalidatePath } from "next/cache";

export async function signUpWithGithub() {
  const { account } = await createAdminClient();

  const origin = (await headers()).get("origin");
  const path = (await headers()).get("path");
  const redirectUrl = await account.createOAuth2Token(
    OAuthProvider.Github,
    `${origin}/oauth`,
    `${origin}/${path}`
  );
  return redirect(redirectUrl);
}

export async function logout() {
  try {
    const { account } = await createSessionClient();
    (await cookies()).delete("RAIN");
    await account.deleteSession("current");
    revalidatePath("/")
    return redirect("/");
  } catch (error) {
    console.error(error);
  }
}
