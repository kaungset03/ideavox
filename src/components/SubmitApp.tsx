"use client";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState, useEffect, useState } from "react";
import { createApp } from "@/lib/server/apps";
import InputError from "@/components/InputError";
import { toast } from "sonner";

const initialState = {
  zodErrors: null,
  data: {
    name: "",
    description: "",
    live: "",
    source: "",
  },
  message: "",
};

const SubmitApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, formAction, pending] = useActionState(
    createApp,
    initialState
  );
  const { name, description, live, source } = formState?.data || {};

  useEffect(() => {
    if (formState.message === "App submitted successfully") {
      toast.success(formState.message);
    } else if (formState.message) {
      toast.error(formState.message);
    }
  }, [formState.message]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center space-x-2">
          <PlusCircle />
          Submit App
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95%] max-w-xl">
        <DialogHeader>
          <DialogTitle>Submit Your Built App</DialogTitle>
          <DialogDescription>Submit your app with a brief overview of its features, functionality, and purpose!</DialogDescription>
        </DialogHeader>
        <form className="space-y-6" action={formAction}>
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
              defaultValue={name}
              placeholder="Enter your app name"
              required
            />
            <InputError message={formState.zodErrors?.name} />
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
              defaultValue={description}
              placeholder="Describe your app in detail"
              required
              rows={8}
            />
            <InputError message={formState.zodErrors?.description} />
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
              defaultValue={live}
              placeholder="https://your-app-url.com"
              required
            />
            <InputError message={formState.zodErrors?.live} />
          </div>
          <div>
            <label
              htmlFor="sourceCodeUrl"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Source Code URL (optional)
            </label>
            <Input
              id="sourceCodeUrl"
              type="url"
              name="source"
              defaultValue={source}
              placeholder="https://github.com/your-username/your-repo"
            />
            <InputError message={formState.zodErrors?.source} />
          </div>
          <div className="flex justify-end" aria-disabled={pending}>
            <Button type="submit">
              {pending ? "Submitting..." : "Submit App"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default SubmitApp;
