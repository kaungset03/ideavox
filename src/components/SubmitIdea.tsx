"use client";
import { toast } from "sonner";
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
import { createIdea } from "@/lib/server/ideas";
import InputError from "@/components/InputError";

const initialState = {
  zodErrors: null,
  data: {
    title: "",
    description: "",
  },
  message: "",
};

const SubmitIdea = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, formAction, pending ] = useActionState(createIdea, initialState);
  const { title, description } = formState?.data || {};

  useEffect(() => {
    if(formState.message === "Idea submitted successfully"){
      toast.success(formState.message)
    }else if(formState.message){
      toast.error(formState.message)
    }
  }, [formState.message]);


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-x-2">
          <PlusCircle />
          <span className="hidden sm:block">Submit Idea</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95%] max-w-xl">
        <DialogHeader>
          <DialogTitle>Submit Your App Idea</DialogTitle>
          <DialogDescription>Share your app idea with a brief description of its purpose and key features!</DialogDescription>
        </DialogHeader>
        <form className="space-y-6" action={formAction}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium mb-1"
            >
              Idea Title
            </label>
            <Input
              id="title"
              name="title"
              defaultValue={title}
              placeholder="Enter your app idea title"
              required
            />
            <InputError message={formState.zodErrors?.title} />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              Idea Description
            </label>
            <Textarea
              id="description"
              name="description"
              defaultValue={description}
              placeholder="Describe your app idea in detail"
              required
              rows={8}
            />
            <InputError message={formState.zodErrors?.description} />
          </div>
          <div className="flex justify-end">
            <Button type="submit" aria-disabled={pending}>
              {pending ? "Submitting..." : "Submit Idea"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default SubmitIdea;
