"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Static Data
import pImg from "../../../assets/images/db-profile.png";
import EditProfileTab from "./edit-profile";
import ChangePassword from "./change-password-tab";

const ProfileSection = () => {
  const router = useRouter();

  return (
    <>
      <Card className=" border-none shadow-none w-full p-6">
        <div className="flex items-center gap-3">
          <Button
            className=" rounded-full bg-ns-light text-ns-title hover:bg-ns-light/80 hover:cursor-pointer"
            size="icon"
            onClick={() => router.back()}
          >
            <GoArrowLeft className=" size-6" />
          </Button>
          <h1 className="text-xl font-semibold">Profile</h1>
        </div>

        {/* ----------------- Profile Card ---------------- */}
        <div className=" flex items-center gap-5 justify-center text-ns-title">
          <div>
            <Image
              src={pImg}
              alt="profile"
              width={100}
              height={100}
              className=" rounded-full"
            />
          </div>
          <div className=" flex flex-col items-start gap-3">
            <h3 className=" font-semibold text-2xl">Akash Sharif</h3>
            <p className=" text-xl font-medium">Admin</p>
          </div>
        </div>

        {/* ----------------- Tabs ---------------- */}
        <Tabs defaultValue="edit" className="flex items-center justify-center">
          <TabsList className="bg-transparent">
            <TabsTrigger
              value="edit"
              className="font-semibold  py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-b-ns-title data-[state=active]:font-semibold rounded-none focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
            >
              Edit Profile
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="font-semibold  py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-b-ns-title data-[state=active]:font-semibold rounded-none focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
            >
              Change Password
            </TabsTrigger>
          </TabsList>
          <TabsContent className=" w-full" value="edit">
            <EditProfileTab />
          </TabsContent>
          <TabsContent className=" w-full" value="password">
            <ChangePassword />
          </TabsContent>
        </Tabs>
      </Card>
    </>
  );
};

export default ProfileSection;
