import { ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type BuiltAppItemProps = {
  app: BuiltApp;
};

const BuiltAppItem = ({ app }: BuiltAppItemProps) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex items-start">
          <div className="flex flex-col items-center mr-4">
            <Button variant="ghost" size="sm" className="px-2">
              <Heart className="h-4 w-4" />
            </Button>
            <span className="text-sm font-bold">23</span>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-1">{app.name}</h3>
            <p className="text-sm text-gray-500 mb-2">by {app.username}</p>
            <div className="flex items-center gap-x-8">
              <a
                href={app.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline flex items-center mb-2"
              >
                Live <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              {app.source && (
                <a
                  href={"https://github.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline flex items-center mb-2"
                >
                  Source <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              )}
            </div>
            <p className={`text-sm text-gray-600 dark:text-gray-300`}>
              {app.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default BuiltAppItem;
