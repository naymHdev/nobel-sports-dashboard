"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import NSInput from "@/components/ui/core/NSInput";
import SubscriptionEarnings from "./subscription-earnings-table";
import EarningCommissionTable from "./commission-earnings-table";

const tabItems = [
  { label: "Subscription Earnings", value: "subscription" },
  { label: "Commission Earnings", value: "commission" },
];

export default function EarningOverView() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Card className="w-full space-y-6 border-none shadow-none p-6">
      <div className=" flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
        <Card className=" w-full md:p-6">
          <p className=" text-sm font-semibold text-ns-neutral-dark">
            Total Earning
          </p>
          <h1 className=" font-extrabold text-ns-title text-2xl">$250.00</h1>
        </Card>
        <Card className=" w-full md:p-6">
          <p className=" text-sm font-semibold text-ns-neutral-dark">
            Subscription Purchased
          </p>
          <h1 className=" font-extrabold text-ns-title text-2xl">$250.00</h1>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Earning</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
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
      <Tabs defaultValue="subscription" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md bg-transparent">
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

        <TabsContent value="subscription" className="mt-6">
          <SubscriptionEarnings />
        </TabsContent>
        <TabsContent value="commission" className="mt-6">
          <EarningCommissionTable />
        </TabsContent>
      </Tabs>
    </Card>
  );
}
