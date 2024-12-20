import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { getLoggedInUser } from "@/lib/server/appwrite";
import { signUpWithGithub } from "@/lib/server/oauth";
import UserProfileDropdown from "@/components/UserProfileDropdown";

const GithubLogin = async () => {
  const user = await getLoggedInUser();

  if (user) {
    return <UserProfileDropdown user={user} />;
  } else {
    return (
      <form action={signUpWithGithub}>
        <Button
          variant="outline"
          className="flex items-center gap-x-2 h-10"
          title="Login with Github"
        >
          <Github />
          <span className="hidden sm:block">Login with Github</span>
        </Button>
      </form>
    );
  }
};

export default GithubLogin;
