import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const IdeaSkeleton = () => {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex-grow">
          <Skeleton className="h-6 w-2/4 mb-2" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </CardContent>
      <CardFooter className="px-4 py-2">
        <Skeleton className="h-4 w-1/4" />
      </CardFooter>
    </Card>
  );
};

const AppIdeaSkeleton = () => {
  return (
    <>
      <IdeaSkeleton />
      <IdeaSkeleton />
      <IdeaSkeleton />
    </>
  );
};

export default AppIdeaSkeleton;
