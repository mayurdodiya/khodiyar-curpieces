import * as React from "react";
import { VersionSwitcher } from "./VersionSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "./ui/sidebar";
import { LayoutDashboard, ReceiptIndianRupee, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <LayoutDashboard />,
    exact: true,
  },
  { title: "Billing", url: "/dashboard/billing", icon: <ReceiptIndianRupee /> },
  { title: "Customer", url: "/dashboard/customer", icon: <User /> },
];

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { openMobile, setOpenMobile } = useSidebar()
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
      </SidebarHeader>
      <hr className="mb-2" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <NavLink
                    to={item.url}
                    end={!!item.exact}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm w-full
                        ${
                          isActive
                            ? "bg-orange-500 text-white font-semibold"
                            : "text-slate-400 hover:text-white hover:bg-slate-800"
                        }`
                    }
                    aria-current={undefined}
                    onClick={()=> setOpenMobile(!openMobile)}
                  >
                    <span className="w-5 h-5 flex items-center justify-center">
                      {item.icon}
                    </span>
                    <span className="truncate">{item.title}</span>
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
