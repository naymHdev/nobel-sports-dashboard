"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import NSInput from "@/components/ui/core/NSInput";
import PlayersTab from "./players-tab";
import TeamManagerTab from "./team-manager-tab";
import VenueOwnerTab from "./venue-owner-tab";

const tabItems = [
  { label: "Player", value: "player" },
  { label: "Team Manager", value: "team-manager" },
  { label: "Venue Owner", value: "venue-owner" },
];

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Card className="w-full space-y-6 border-none shadow-none p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">User List</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Select defaultValue="this-month">
            <SelectTrigger className="w-full sm:w-[250px] py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <NSInput
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full sm:w-[250px]"
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="player" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md bg-transparent">
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
          <PlayersTab />
        </TabsContent>

        <TabsContent value="team-manager" className="mt-6">
          <TeamManagerTab />
        </TabsContent>

        <TabsContent value="venue-owner" className="mt-6">
          <VenueOwnerTab />
        </TabsContent>
      </Tabs>
    </Card>
  );
}
