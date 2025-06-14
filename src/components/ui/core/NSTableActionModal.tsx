"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface UserDetails {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  joiningDate: string;
  subscription: string;
  joinMatch: number;
  avatarUrl: string;
}

interface Props {
  user: UserDetails;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuspend: () => void;
}

const NSTableActionModal = ({ user, open, onOpenChange, onSuspend }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-6">
        <DialogHeader className="items-center">
          <Image
            src={user.avatarUrl}
            alt={user.name}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <DialogTitle className="text-center mt-2 text-lg font-semibold">
            {user.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-1 mt-4 text-sm text-gray-700">
          <p>
            <strong>Details</strong>
          </p>
          <div className="grid grid-cols-2 gap-y-1">
            <span className="text-muted-foreground">User ID:</span>
            <span>{user.id}</span>
            <span className="text-muted-foreground">Player Name:</span>
            <span>{user.name}</span>
            <span className="text-muted-foreground">Email:</span>
            <span>{user.email}</span>
            <span className="text-muted-foreground">Phone Number:</span>
            <span>{user.phone}</span>
            <span className="text-muted-foreground">Location:</span>
            <span>{user.location}</span>
            <span className="text-muted-foreground">Joining Date:</span>
            <span>{user.joiningDate}</span>
            <span className="text-muted-foreground">Subscription Status:</span>
            <span>{user.subscription}</span>
            <span className="text-muted-foreground">Join Match:</span>
            <span>{user.joinMatch}</span>
          </div>
        </div>

        <DialogFooter className="mt-6 flex justify-between">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onSuspend}>
            Suspend
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NSTableActionModal;
