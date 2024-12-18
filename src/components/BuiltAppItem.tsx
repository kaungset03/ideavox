import { Code, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type BuiltAppItemProps = {
  app: BuiltApp;
};

const BuiltAppItem = ({ app }: BuiltAppItemProps) => {
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
              <div>
                <h3 className="text-xl font-semibold">{app.name}</h3>
                <a
                  href={app.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline flex items-center"
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
      <CardFooter className="bg-gray-50 dark:bg-gray-800 px-4 py-2 text-sm text-gray-500 dark:text-gray-400 flex justify-between items-center">
        <span>Posted by {app.username}</span>
        {app.source && (
          <a
            href={app.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-500"
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
