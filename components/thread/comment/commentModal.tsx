"use client";

import Item from "@/components/thread";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";
import { Create } from ".";

export function Modal() {
  return (
    <Dialog>
      <DialogTrigger>
        <MessageCircle className="w-5 h-5" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3">Reply</DialogTitle>
        </DialogHeader>
        <Item comment others={[]} />
        <Create />
      </DialogContent>
    </Dialog>
  );
}