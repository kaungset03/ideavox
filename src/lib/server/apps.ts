"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "./appwrite";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const CreateAppSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(30),
  source: z.string().optional(),
  live: z.string().url(),
});

export async function createApp(previousState: any, formData: FormData) {
  const formDataObj = {
    name: formData.get("name"),
    description: formData.get("description"),
    source: formData.get("source"),
    live: formData.get("live"),
  };

  const validated = CreateAppSchema.safeParse(formDataObj);

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
    const documentData: any = {
      name: formDataObj.name,
      description: formDataObj.description,
      live: formDataObj.live,
      userId: user.$id,
      username: user.name,
      created: new Date().toISOString(),
    };

    if (formDataObj.source) {
      documentData.source = formDataObj.source;
    }

    await databases.createDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_APPS_COLLECTION_ID!,
      ID.unique(),
      documentData
    );
    revalidatePath("/built-apps");
    return {
      ...previousState,
      data: { name: "", description: "", source: "", live: "" },
      message: "App submitted successfully",
    };
  } catch (error) {
    console.error(error);
    return {
      ...previousState,
      data: { ...previousState, ...formDataObj },
      message: "An unexpected error occurred",
    };
  }
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

export async function deleteApp(id: string) {
  try {
    const { databases } = await createSessionClient();
    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APPWRITE_APPS_COLLECTION_ID!,
      id
    );
    revalidatePath("/built-apps");
  } catch (error) {
    console.error(error);
  }
}
