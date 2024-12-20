"use client";
import { Code, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { type Models } from "node-appwrite";
import { deleteApp } from "@/lib/server/apps";
import DeleteAlert from "@/components/DeleteAlert";

type BuiltAppItemProps = {
  app: BuiltApp;
  user: Models.User<Models.Preferences> | null;
};

const BuiltAppItem = ({ app, user }: BuiltAppItemProps) => {
  const deleteItem = async () => {
    await deleteApp(app.$id);
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
            <div className="flex items-center mb-2">
              <div className="w-full">
                <div className="flex items-start justify-between gap-x-5">
                  <h3 className="text-xl font-semibold">{app.name}</h3>
                  {user && user.$id === app.userId && (
                    <DeleteAlert onConfirm={deleteItem} />
                  )}
                </div>
                <a
                  href={app.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary w-fit hover:underline flex items-center"
                >
                  Live <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
            <p className={`text-sm text-gray-600 dark:text-gray-300`}>
              {app.description}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="rounded-b-md px-4 py-2 text-sm bg-primary text-primary-foreground flex justify-between items-center">
        <p>
          Posted by <span className="font-medium">{app.username}</span>
        </p>
        {app.source && (
          <a
            href={app.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-slate-50 transition-colors duration-300 ease-in-out"
          >
            <Code className="h-4 w-4 mr-1" />
            Source
          </a>
        )}
      </CardFooter>
    </Card>
  );
};
export default BuiltAppItem;
