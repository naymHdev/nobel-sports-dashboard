"use client";

import * as React from "react";
import {
  BarChart3,
  CalendarRange,
  Crown,
  MessageSquareMore,
  NotebookPen,
  Settings,
  SquareTerminal,
  UsersRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import nsLogo from "../../../assets/images/ns-logo.png";
import Image from "next/image";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Account Management",
      url: "/account-management",
      icon: UsersRound,
    },
    {
      title: "Earning Overview",
      url: "/earning-overview",
      icon: BarChart3,
    },
    {
      title: "Support Message",
      url: "/support-message",
      icon: MessageSquareMore,
    },
    {
      title: "Manage Subscription",
      url: "/manage-subscription",
      icon: Crown,
    },
    {
      title: "Manage Banner",
      url: "/banner-manage",
      icon: NotebookPen,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center">
                  <Image src={nsLogo} alt="ns-logo" width={60} height={60} />
                </div>
                {/* <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">Nobel Sport</h2>
                </div> */}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
