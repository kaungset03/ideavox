import { Models } from "node-appwrite";

declare global {
  type AppIdea = Models.Document & {
    id: number;
    title: string;
    description: string;
    vote: number;
  };
}

export {};
