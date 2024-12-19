"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "./appwrite";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(10),
  source: z.string().optional(),
  live: z.string().url(),
});

export async function createApp(formData: FormData) {
  const { name, description, source, live } = FormSchema.parse({
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    source: formData.get("source") as string,
    live: formData.get("live") as string,
  });
  const { databases, account } = await createSessionClient();
  const user = await account.get();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const documentData: any = {
    name,
    description,
    userId: user.$id,
    username: user.name,
    live,
    created: new Date().toISOString(),
  };
  if (source) {
    documentData.source = source;
  }
  await databases.createDocument(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_APPWRITE_APPS_COLLECTION_ID!,
    ID.unique(),
    documentData
  );
  revalidatePath("/built-apps");
}

export async function getApps() {
  try {
    const { databases } = await createAdminClient();
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_APPS_COLLECTION_ID!,
      [Query.orderDesc("created")]
    );
    return response.documents;
  } catch (error) {
    console.error(error);
    return [];
  }
}
