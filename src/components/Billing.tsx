import { AppSidebar } from "@/components/AppSidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";

import data from "../json/data.json";

export default function Billing() {
  return (
    <>
      {/* Main content area */}
      <div className="flex-1 flex flex-col w-0">
        {/* Header */}
        <SiteHeader title="Billings Overview" />

        {/* Page content */}
        <div className="flex-1 p-0">
          <div className="flex flex-col gap-0 py-0 md:gap-0 md:py-0">
            {/* <SectionCards /> */}
            <div className="px-4 lg:px-6">{/* <ChartAreaInteractive /> */}</div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
