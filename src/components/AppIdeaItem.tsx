"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { type Models } from "node-appwrite";
import { deleteIdea } from "@/lib/server/ideas";
import DeleteAlert from "@/components/DeleteAlert";

type AppIdeaItemProps = {
  idea: AppIdea;
  user: Models.User<Models.Preferences> | null;
};

const AppIdeaItem = ({ idea, user }: AppIdeaItemProps) => {
  const deleteItem = async () => {
    await deleteIdea(idea.$id);
  };

  return (
    <Card className="mb-4 hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex items-center gap-x-4">
          {/* <div className="flex flex-col items-center">
            <Button variant="ghost" className="flex flex-col items-center">
              <Heart />
            </Button>
            <span className="text-sm font-bold">23</span>
          </div> */}
          <div className="flex-grow">
            <div className="flex items-start justify-between gap-x-5">
              <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
              {user && user.$id === idea.userId && <DeleteAlert onConfirm={deleteItem} />}
            </div>
            <p className={`text-sm text-gray-600 dark:text-gray-300`}>
              {idea.description}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 dark:bg-gray-800 px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
        <span>Posted by {idea.username}</span>
      </CardFooter>
    </Card>
  );
};
export default AppIdeaItem;
