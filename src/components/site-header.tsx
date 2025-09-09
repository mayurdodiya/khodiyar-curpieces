import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";
import { Calendar } from "./ui/calendar";
import type { DateRange } from "react-day-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function SiteHeader({ title }) {
  const [date, setDate] = useState<DateRange>({
    from: new Date(),
    to: "",
  });
  // const dateFormate = { month: "short", day: "2-digit", year: "2-digit" };
  const dateFormat: Intl.DateTimeFormatOptions = {
    month: "short", // or "short" | "long" | "numeric" | "2-digit" | "narrow"
    day: "2-digit", // or "2-digit" | "numeric" | "narrow"
    year: "2-digit", // or "2-digit" | "numeric" | "narrow" | "long"
  };

  return (
    <header className="flex h-[82px] shrink-0 items-center gap-2 transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <span className="text-2xl font-bold">{title}</span>

        <div className="ml-auto flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 px-2 lg:px-3">
                {date.from
                  ? date.from.toLocaleDateString("en-US", dateFormat)
                  : ""}
                {date.to
                  ? ` - ${date?.to?.toLocaleDateString("en-US", dateFormat)}`
                  : ""}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-auto" align="end">
              <Calendar
                mode="range"
                selected={date}
                onSelect={setDate}
                // numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <SidebarTrigger className="-ml-1" />
      </div>
    </header>
  );
}
