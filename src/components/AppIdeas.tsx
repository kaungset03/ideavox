import { getIdeas } from "@/lib/server/ideas";
import { type Models } from "node-appwrite";
import AppIdeaItem from "@/components/AppIdeaItem";

type AppIdeaProps = {
  user: Models.User<Models.Preferences> | null;
};

const AppIdeas = async ({ user }: AppIdeaProps) => {
  const ideas = await getIdeas();
  return (
    <ul className="flex flex-col gap-y-3">
      {ideas.map((idea) => (
        <AppIdeaItem key={idea.$id} idea={idea as AppIdea} user={user} />
      ))}
    </ul>
  );
};
export default AppIdeas;
