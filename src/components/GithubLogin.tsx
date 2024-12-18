import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const GithubLogin = () => {
  return (
    <Button variant="outline" className="flex items-center gap-x-2" title="Login with Github">
      <Github className="h-4 w-4" />
      <span className="hidden sm:block">Login with Github</span>
    </Button>
  );
};

export default GithubLogin;
