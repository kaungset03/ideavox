import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type AppIdeaItemProps = {
  idea: AppIdea;
};

const AppIdeaItem = ({ idea }: AppIdeaItemProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{idea.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{idea.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Posted by <span className="font-semibold">john</span>
        </p>
      </CardFooter>
    </Card>
  );
};
export default AppIdeaItem;
