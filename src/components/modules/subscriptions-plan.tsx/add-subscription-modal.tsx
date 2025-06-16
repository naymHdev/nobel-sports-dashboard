"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import NSButton from "@/components/ui/core/NSButton";
import { Plus } from "lucide-react";
import NSInput from "@/components/ui/core/NSInput";

const AddSubscriptionModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <NSButton className=" flex items-center gap-1 text-xs md:text-base rounded-lg px-2 md:px-3 py-3">
          <Plus className=" size-4 md:size-6" />
          <span> Create Subscription Plan</span>
        </NSButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Subscription</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label className=" font-semibold text-ns-title" htmlFor="name">
              Subscription Name
            </Label>
            <NSInput id="name" placeholder="Subscription Name" />
          </div>

          <div className="grid gap-2">
            <Label className=" font-semibold text-ns-title" htmlFor="billing">
              Billing Cycle
            </Label>
            <Select defaultValue="monthly">
              <SelectTrigger
                id="billing"
                className=" w-full py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200"
              >
                <SelectValue placeholder="Select Cycle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label
              className=" font-semibold text-ns-title"
              htmlFor="description"
            >
              Short Description
            </Label>
            <NSInput id="description" placeholder="Write Short Description" />
          </div>

          <div className="grid gap-2">
            <Label className=" font-semibold text-ns-title" htmlFor="price">
              Price
            </Label>
            <NSInput type="number" id="price" placeholder="999" />
          </div>
        </div>

        <DialogFooter>
          <NSButton className="bg-green-700 hover:bg-green-800 text-white w-full py-3 rounded-lg">
            Save
          </NSButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddSubscriptionModal;
