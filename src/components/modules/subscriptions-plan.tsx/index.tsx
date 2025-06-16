"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import PlayerPricingTab from "./player-pricing-tab";
import TeamManagerTab from "./team-manager-tab";
import VenueOwnerTab from "./venue-owner-tab";
import AddSubscriptionModal from "./add-subscription-modal";

const tabItems = [
  { label: "Player", value: "player" },
  { label: "Team Manager", value: "teamManager" },
  { label: "Venue Owner", value: "venueOwner" },
];

export default function SubscriptionsPlan() {
  return (
    <Card className="w-full space-y-6 border-none shadow-none p-3 md:p-6">
      {/* -------------------- Header -------------------- */}
      <div className=" flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
        <h2 className="font-bold text-sm md:text-base text-ns-title">
          Subscription Plan
        </h2>
        <div className="">
        
          <AddSubscriptionModal />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="player" className="w-full">
        <TabsList className=" bg-transparent max-w-md">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="font-semibold  py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-b-ns-title data-[state=active]:font-semibold rounded-none focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="player" className="mt-6">
          <PlayerPricingTab />
        </TabsContent>
        <TabsContent value="teamManager" className="mt-6">
          <TeamManagerTab />
        </TabsContent>
        <TabsContent value="venueOwner" className="mt-6">
          <VenueOwnerTab />
        </TabsContent>
      </Tabs>
    </Card>
  );
}
