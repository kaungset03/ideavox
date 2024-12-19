import BuiltApps from "@/components/BuiltApps";
import SubmitApp from "@/components/SubmitApp";

const page = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">App Ideas</h2>
        <SubmitApp />
      </div>
      <BuiltApps />
    </section>
  );
};
export default page;
