"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import profileImg from "../../../assets/images/db-profile.png";
import Image from "next/image";

interface User {
  id: string;
  name: string;
  matches: number;
  plan: string;
  status: string;
}

interface UserDetailsModalProps {
  user: User;
  onClose: () => void;
}

export function UserDetailsModal({ user, onClose }: UserDetailsModalProps) {
  const handleSuspend = () => {
    // Handle suspend action
    console.log("Suspending user:", user.name);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Profile Image */}
      <Avatar className="h-24 w-24">
        {/* <AvatarImage
          src={profileImg}
          alt={user.name}
          className="object-cover"
        />
        <AvatarFallback className="text-lg font-semibold">
          {user.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback> */}
        <Image
          src={profileImg}
          alt={user.name}
          className="object-cover"
          width={100}
          height={100}
        />
      </Avatar>

      {/* User Name */}
      <DialogHeader className="text-center">
        <DialogTitle className="text-xl font-bold text-gray-900">
          {user.name}
        </DialogTitle>
      </DialogHeader>

      {/* Details Section */}
      <div className="w-full space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Details</h3>

        <div className="space-y-3">
          <div className="flex justify-between items-center border-b">
            <span className="text-gray-600">User ID:</span>
            <span className="font-medium text-gray-900">19273</span>
          </div>

          <div className="flex justify-between items-center border-b pb-1">
            <span className="text-gray-600">Player Name:</span>
            <span className="font-medium text-gray-900">{user.name}</span>
          </div>

          <div className="flex justify-between items-center border-b pb-1">
            <span className="text-gray-600">Email:</span>
            <span className="font-medium text-gray-900">anna879@gmail.com</span>
          </div>

          <div className="flex justify-between items-center border-b pb-1">
            <span className="text-gray-600">Phone Number:</span>
            <span className="font-medium text-gray-900">(234) 555-1234</span>
          </div>

          <div className="flex justify-between items-center border-b pb-1">
            <span className="text-gray-600">Location:</span>
            <span className="font-medium text-gray-900">
              123/A, Florida, UK
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-1">
            <span className="text-gray-600">Joining Date:</span>
            <span className="font-medium text-gray-900">15 Feb, 25</span>
          </div>

          <div className="flex justify-between items-center border-b pb-1">
            <span className="text-gray-600">Subscription Status:</span>
            <span className="font-medium text-gray-900">
              {user.plan} Account
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-1">
            <span className="text-gray-600">Join Match:</span>
            <span className="font-medium text-gray-900">{user.matches}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 w-full pt-4">
        <Button
          variant="outline"
          onClick={handleCancel}
          className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300 py-5 hover:cursor-pointer"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSuspend}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-5 hover:cursor-pointer"
        >
          Suspend
        </Button>
      </div>
    </div>
  );
}
