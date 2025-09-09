import { AppSidebar } from "@/components/AppSidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";

import data from "../json/data.json";
import { HeaderDateAndTrigger } from "./HeaderDateAndTrigger";
import { DatePickerModify } from "./DatePickerModify";

// Dashboard.jsxx
import { Outlet, Link } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Page() {
  return (
    <div>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "260px",
            "--header-height": "64px",
          } as React.CSSProperties
        }
      >
        <div className="flex min-h-screen bg-background overflow-x-hidden">
          <AppSidebar variant="inset" />
          <Outlet />
        </div>
      </SidebarProvider>
    </div>
  );
}
