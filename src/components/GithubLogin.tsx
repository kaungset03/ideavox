import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { getLoggedInUser } from "@/lib/server/appwrite";
import { signUpWithGithub } from "@/lib/server/oauth";

const GithubLogin = async () => {
  const user = await getLoggedInUser();

  if (user) {
    return (
      <div className="w-9 aspect-square rounded-md bg-purple-400"/>
    )
  } else {
    return (
      <form action={signUpWithGithub}>
        <Button
          variant="outline"
          className="flex items-center gap-x-2"
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
