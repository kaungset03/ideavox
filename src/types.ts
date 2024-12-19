import { Models } from "node-appwrite";

declare global {
  type AppIdea = Models.Document & {
    title: string;
    description: string;
    userId: string;
    username: string;
    vote: number;
    created: Date;
  };

  type BuiltApp = Models.Document & {
    name: string;
    description: string;
    userId: string;
    username: string;
    source: string | null;
    live: string;
    created: Date;
  };
}

export {};
