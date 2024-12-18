import { PlusCircle } from "lucide-react";
import { initialIdeas } from "@/constants/constants";
import { Button } from "@/components/ui/button";
import AppIdeaItem from "@/components/AppIdeaItem";

const page = () => {
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
        {initialIdeas.map((idea) => (
          <AppIdeaItem key={idea.id} idea={idea} />
        ))}
      </ul>
    </section>
  );
};
export default page;
