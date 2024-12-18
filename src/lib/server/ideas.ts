"use server";

import { ID } from "node-appwrite";
import { createAdminClient } from "./appwrite";

export async function createIdea() {
  const idea = {
    title: "New Idea",
    description: "Description",
    userId: "6762d1e996f247959926",
  };
  const { databases } = await createAdminClient();
  return await databases.createDocument(
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
    ID.unique(),
    idea
  );
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
