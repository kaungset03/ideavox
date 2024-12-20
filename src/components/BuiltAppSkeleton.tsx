import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const AppSkeleton = () => {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex-grow">
          <div className="flex flex-col gap-y-1">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-3 w-1/5" />
          </div>
          <Skeleton className="h-4 w-full my-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </CardContent>
      <CardFooter className="px-4 py-2 flex items-center justify-between">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-24" />
      </CardFooter>
    </Card>
  );
};

const BuiltAppSkeleton = () => {
  return (
    <>
      <AppSkeleton />
      <AppSkeleton />
      <AppSkeleton />
      <AppSkeleton />
    </>
  );
};

export default BuiltAppSkeleton;
