"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";

interface NotificationItem {
  id: string;
  dateGroup: "Today" | "Yesterday";
  message: string;
  timeAgo: string;
}

// Dummy data to simulate API response
const notifications: NotificationItem[] = [
  {
    id: "1",
    dateGroup: "Today",
    message:
      "A new review has been submitted for contractor. Please review the rating and feedback to approve or reject the submission.",
    timeAgo: "5 min ago",
  },
  {
    id: "2",
    dateGroup: "Today",
    message:
      "A new review has been submitted for contractor. Please review the rating and feedback to approve or reject the submission.",
    timeAgo: "5 min ago",
  },
  {
    id: "3",
    dateGroup: "Today",
    message:
      "A new review has been submitted for contractor. Please review the rating and feedback to approve or reject the submission.",
    timeAgo: "5 min ago",
  },
  {
    id: "4",
    dateGroup: "Today",
    message:
      "A new review has been submitted for contractor. Please review the rating and feedback to approve or reject the submission.",
    timeAgo: "5 min ago",
  },
  {
    id: "5",
    dateGroup: "Yesterday",
    message:
      "A new review has been submitted for contractor. Please review the rating and feedback to approve or reject the submission.",
    timeAgo: "5 min ago",
  },
  {
    id: "6",
    dateGroup: "Yesterday",
    message:
      "A new review has been submitted for contractor. Please review the rating and feedback to approve or reject the submission.",
    timeAgo: "5 min ago",
  },
];

const NotificationsSection = () => {
  const router = useRouter();

  const groupedNotifications = notifications.reduce((acc, notification) => {
    if (!acc[notification.dateGroup]) {
      acc[notification.dateGroup] = [];
    }
    acc[notification.dateGroup].push(notification);
    return acc;
  }, {} as Record<"Today" | "Yesterday", NotificationItem[]>);
  return (
    <>
      <Card className=" border-none shadow-none p-6">
        <div className="flex items-center gap-3">
          <Button
            className=" rounded-full bg-ns-light text-ns-title hover:bg-ns-light/80 hover:cursor-pointer"
            size="icon"
            onClick={() => router.back()}
          >
            <GoArrowLeft className=" size-6" />
          </Button>
          <h1 className="text-xl font-semibold">Notifications</h1>
        </div>
      </Card>

      <Card className=" p-0 border-none shadow-none mt-6">
        <CardContent className="p-6">
          <ScrollArea className="h-[calc(100vh-100px)]">
            {/* Adjust height as needed */}
            {Object.entries(groupedNotifications).map(([dateGroup, items]) => (
              <div key={dateGroup} className="mb-6 last:mb-0">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-xl font-semibold text-ns-title">
                    {dateGroup}
                  </h2>
                  <span className="bg-yellow-200 text-yellow-800 text-xs font-medium w-6 h-6 flex items-center justify-center px-2.5 py-0.5 rounded-full">
                    {items.length}
                  </span>
                </div>
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm mb-3"
                  >
                    <div className="flex-1 mr-4">
                      <p className="text-sm font-medium text-gray-900">
                        {item.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        The event has been successfully added to the system.
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 min-w-[70px] text-right">
                        {item.timeAgo}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-green-600"
                        onClick={() => alert(`Viewing notification ${item.id}`)}
                      >
                        <Eye className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() =>
                          alert(`Removing notification ${item.id}`)
                        }
                        className="px-3 py-1 text-xs"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                {dateGroup === "Today" &&
                  Object.keys(groupedNotifications).includes("Yesterday") && (
                    <Separator className="my-6" />
                  )}
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </>
  );
};

export default NotificationsSection;
