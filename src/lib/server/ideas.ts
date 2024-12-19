"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "./appwrite";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(10),
});

export async function createIdea(formData: FormData) {
  const { title, description } = FormSchema.parse({
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  });
  const { databases, account } = await createSessionClient();
  const user = await account.get();
  await databases.createDocument(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
    ID.unique(),
    {
      title,
      description,
      userId: user.$id,
      username: user.name,
    }
  );
  revalidatePath("/app-ideas");
}

export async function getIdeas() {
  try {
    const { databases } = await createAdminClient();
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!
    );
    return response.documents;
  } catch (error) {
    console.error(error);
    return [];
  }
}
