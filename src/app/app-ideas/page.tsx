import AppIdeas from "@/components/AppIdeas";
import SubmitIdea from "@/components/SubmitIdea";
import { getLoggedInUser } from "@/lib/server/appwrite";
import { Suspense } from "react";
import AppIdeaSkeleton from "@/components/AppIdeaSkeleton";

const page = async () => {
  const user = await getLoggedInUser();

  return (
    <section className="container mx-auto px-4 sm:px-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">App Ideas</h2>
        {user && <SubmitIdea />}
      </div>
      <Suspense fallback={<AppIdeaSkeleton />}>
        <AppIdeas />
      </Suspense>
    </section>
  );
};
export default page;
