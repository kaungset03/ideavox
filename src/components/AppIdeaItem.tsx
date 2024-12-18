import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";

type AppIdeaItemProps = {
  idea: AppIdea;
};

const AppIdeaItem = ({ idea }: AppIdeaItemProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex items-center">
          <div className="flex flex-col items-center mr-4">
            <Button variant="ghost" size="sm" className="px-2">
              <Heart className="h-4 w-4" />
            </Button>
            <span className="text-sm font-bold">{idea.vote}</span>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold mb-1">{idea.title}</h3>
            <p className="text-sm text-gray-500 mb-2">by erke_03</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {idea.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default AppIdeaItem;
