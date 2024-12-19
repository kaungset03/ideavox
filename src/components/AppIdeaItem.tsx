import { Card, CardContent, CardFooter } from "@/components/ui/card";

type AppIdeaItemProps = {
  idea: AppIdea;
};

const AppIdeaItem = ({ idea }: AppIdeaItemProps) => {
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
            <h3 className="text-xl font-semibold mb-2">{idea.title}</h3>
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
