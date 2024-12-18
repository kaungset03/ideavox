import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import BuiltAppItem from "@/components/BuiltAppItem";

const page = () => {
  const apps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">App Ideas</h2>
        <Button className="flex items-center space-x-2">
          <PlusCircle />
          Submit Idea
        </Button>
      </div>
      <ul className="flex flex-col gap-y-4">
        {apps.map((app) => (
          <BuiltAppItem key={app} />
        ))}
      </ul>
    </section>
  );
};
export default page;
