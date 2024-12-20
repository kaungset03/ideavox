import { getApps } from "@/lib/server/apps";
import BuiltAppItem from "@/components/BuiltAppItem";
import { type Models } from "node-appwrite";

type BuiltAppsProps = {
  user: Models.User<Models.Preferences> | null;
};

const BuiltApps = async ({ user }: BuiltAppsProps) => {
  const apps = await getApps();
  return (
    <ul className="flex flex-col gap-y-3">
      {apps.map((app) => (
        <BuiltAppItem key={app.$id} app={app as BuiltApp} user={user} />
      ))}
    </ul>
  );
};
export default BuiltApps;
