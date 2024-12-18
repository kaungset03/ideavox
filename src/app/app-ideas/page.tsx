import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppIdeas from "@/components/AppIdeas";

const page = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">App Ideas</h2>
        <form>
          <Button className="flex items-center space-x-2">
            <PlusCircle />
            Submit Idea
          </Button>
        </form>
      </div>
      <AppIdeas /> 
    </section>
  );
};
export default page;
