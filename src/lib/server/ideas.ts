"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "./appwrite";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const CreateIdeaSchema = z.object({
  title: z.string().min(5, "Title should be at least 5 characters"),
  description: z
    .string()
    .min(30, "Description should be at least 30 characters"),
});

export async function createIdea(previousState: any, formData: FormData) {
  const formDataObj = {
    title: formData.get("title"),
    description: formData.get("description"),
  };

  const validated = CreateIdeaSchema.safeParse(formDataObj);
  if (!validated.success) {
    return {
      ...previousState,
      data: { ...previousState.data, ...formDataObj },
      zodErrors: validated.error.flatten().fieldErrors,
      message: "Validation failed",
    };
  }
  try {
    const { databases, account } = await createSessionClient();
    const user = await account.get();
    await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_IDEAS_COLLECTION_ID!,
      ID.unique(),
      {
        title: formDataObj.title,
        description: formDataObj.description,
        userId: user.$id,
        username: user.name,
        created: new Date().toISOString(),
      }
    );
    revalidatePath("/app-ideas");
    return {
      ...previousState,
      data: { title: "", description: "" },
      message: "Idea submitted successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      ...previousState,
      data: { ...previousState.data, ...formDataObj },
      message: "An unexpected error occurred",
    };
  }
}

export async function getIdeas() {
  try {
    const { databases } = await createAdminClient();
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_IDEAS_COLLECTION_ID!,
      [Query.orderDesc("created")]
    );
    return response.documents;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function deleteIdea(id: string) {
  try {
    const { databases } = await createSessionClient();
    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_IDEAS_COLLECTION_ID!,
      id
    );
    revalidatePath("/app-ideas");
  } catch (error) {
    console.error(error);
  }
}
