import { getApps } from "@/lib/server/apps";
import BuiltAppItem from "@/components/BuiltAppItem";

const BuiltApps = async () => {
    const apps = await getApps();
  return (
    <ul className="flex flex-col gap-y-3">
      {apps.map((app) => (
        <BuiltAppItem key={app.$id} app={app as BuiltApp} />
      ))}
    </ul>
  );
};
export default BuiltApps;
