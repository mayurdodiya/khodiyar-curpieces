"use client";

import * as React from "react";
import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function VersionSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              // size="lg"
              className="h-16 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground bg-zinc-800 text-white"
            >
              <div className="w-8 h-8 bg-gradient-primary rounded-sm flex items-center justify-center">
                <span className="font-bold text-base text-primary-foreground italic">
                  KC
                </span>
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">Khodiyar Cutpieces</span>
                <span className="text-xs text-gray-400">
                  Premium Fabric Shop
                </span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
