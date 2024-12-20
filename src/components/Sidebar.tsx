"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Lightbulb, Rocket, Menu } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn(
        "h-screen border-r border-r-slate-600 p-4 transition-all duration-300",
        isExpanded ? "w-64" : "w-20"
      )}
    >
      <Button
        variant="ghost"
        onClick={toggleSidebar}
        className="w-full justify-start mb-4 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <nav className="flex flex-col gap-y-3">
        <Link href="/">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start hover:bg-gray-200 dark:hover:bg-gray-700",
              pathname === "/" && "bg-gray-200 dark:bg-gray-700",
              !isExpanded && "justify-center"
            )}
          >
            <Home className="h-4 w-4" />
            {isExpanded && <span className="ml-2">Home</span>}
          </Button>
        </Link>
        <Link href="/app-ideas">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start hover:bg-gray-200 dark:hover:bg-gray-700",
              pathname === "/app-ideas" && "bg-gray-200 dark:bg-gray-700",
              !isExpanded && "justify-center"
            )}
          >
            <Lightbulb className="h-4 w-4" />
            {isExpanded && <span className="ml-2">App Ideas</span>}
          </Button>
        </Link>
        <Link href="/built-apps">
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start hover:bg-gray-200 dark:hover:bg-gray-700",
              pathname === "/built-apps" && "bg-gray-200 dark:bg-gray-700",
              !isExpanded && "justify-center"
            )}
          >
            <Rocket className="h-4 w-4" />
            {isExpanded && <span className="ml-2">Built Apps</span>}
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
