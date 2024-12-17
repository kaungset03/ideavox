import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const GithubLogin = () => {
  return (
    <Button variant="outline">
      <Github className="mr-2 h-4 w-4" />
      Login with GitHub
    </Button>
  );
}

export default GithubLogin;
