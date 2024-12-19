import { getIdeas } from "@/lib/server/ideas";
import AppIdeaItem from "@/components/AppIdeaItem";

const AppIdeas = async () => {
  const ideas = await getIdeas();  
  return (
    <ul className="flex flex-col gap-y-3">
      {ideas.map((idea) => (
        <AppIdeaItem key={idea.$id} idea={idea as AppIdea} />
      ))}
    </ul>
  );
};
export default AppIdeas;
