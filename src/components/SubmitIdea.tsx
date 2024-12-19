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
import { createIdea } from "@/lib/server/ideas";



const SubmitIdea = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center space-x-2">
          <PlusCircle />
          Submit Idea
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95%] max-w-xl">
        <DialogHeader>
          <DialogTitle>Submit Your App Idea</DialogTitle>
        </DialogHeader>
        <form className="space-y-6" action={createIdea}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Idea Title
            </label>
            <Input
              id="title"
              name="title"
              placeholder="Enter your app idea title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Idea Description
            </label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe your app idea in detail"
              required
              rows={8}
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
export default SubmitIdea;
