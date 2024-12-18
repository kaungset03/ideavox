import BuiltApps from "@/components/BuiltApps";
import SubmitApp from "@/components/SubmitApp";
import { getLoggedInUser } from "@/lib/server/appwrite";

const page = async () => {
  const user = await getLoggedInUser();
  return (
    <section className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Built Apps</h2>
        {user && <SubmitApp />}
      </div>
      <BuiltApps />
    </section>
  );
};
export default page;
