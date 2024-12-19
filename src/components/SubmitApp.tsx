"use client";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { createApp } from "@/lib/server/apps";

const SubmitApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center space-x-2">
          <PlusCircle />
          Submit App 
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95%] max-w-lg">
        <DialogHeader>
          <DialogTitle>Submit Your Built App</DialogTitle>
        </DialogHeader>
        <form className="space-y-6" action={createApp}>
          <div>
            <label
              htmlFor="appName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              App Name
            </label>
            <Input
              id="appName"
              name="name"
              placeholder="Enter your app name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              App Description
            </label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe your app in detail"
              required
              rows={8}
            />
          </div>
          <div>
            <label
              htmlFor="liveUrl"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Live URL
            </label>
            <Input
              id="liveUrl"
              type="url"
              name="live"
              placeholder="https://your-app-url.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="sourceCodeUrl"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Source Code URL
            </label>
            <Input
              id="sourceCodeUrl"
              type="url"
              name="source"
              placeholder="https://github.com/your-username/your-repo"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default SubmitApp;
