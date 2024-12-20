"use server";

import { createAdminClient, createSessionClient } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { OAuthProvider } from "node-appwrite";
import { revalidatePath } from "next/cache";

export async function signUpWithGithub() {
  const { account } = await createAdminClient();
  const redirectUrl = await account.createOAuth2Token(
    OAuthProvider.Github,
    `${process.env.NEXT_PUBLIC_APP_URL}/oauth`,
    `${process.env.NEXT_PUBLIC_APP_URL}/`
    // `${origin}/oauth`,
    // `${origin}/${path}`
  );
  return redirect(redirectUrl);
}

export async function logout() {
  try {
    const { account } = await createSessionClient();
    (await cookies()).delete("RAIN");
    await account.deleteSession("current");
    revalidatePath("/")
  } catch (error) {
    console.error(error);
  }
}
