import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Rocket } from "lucide-react";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to <span className="text-primary">Idea Vox</span>
      </h1>
      <p className="text-xl text-center mb-12">
        Discover innovative app ideas and explore apps built by our community.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2" />
              App Ideas
            </CardTitle>
            <CardDescription>
              Explore and share innovative app concepts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Browse through a collection of creative app ideas submitted by our
              community. Get inspired by innovative concepts, share your own
              ideas, or find your next exciting project to build.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/app-ideas" passHref>
              <Button>Explore App Ideas</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Rocket className="mr-2" />
              Built Apps
            </CardTitle>
            <CardDescription>
              Discover apps brought to life by developers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Explore a showcase of apps built and launched by our community
              members. See how ideas transform into reality, showcase your own
              creations, and inspire others to innovate.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/built-apps" passHref>
              <Button>View Built Apps</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="mb-6">
          Connect with fellow developers, share your ideas, and showcase your
          projects.
        </p>
      </div>
    </section>
  );
}
