import {
  IconTrendingDown,
  IconTrendingUp,
  IconEdit,
  IconPencil,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { EditOpeningBalance } from "@/modal/EditOpeningBalance";

export function SectionCards() {
  const [openOpeningBalanceModal, setOpenOpeningBalanceModal] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 px-6 py-0 lg:grid-cols-2 xl:grid-cols-4">
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Total Income</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              $7400.00
            </CardTitle>
            <CardDescription>Total Billing</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              4
            </CardTitle>
            <div>
              <Badge variant="outline">
                <IconTrendingUp />
                +12.5%
              </Badge>
            </div>
          </CardHeader>
          {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Trending up this month <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Visitors for the last 6 months
            </div>
          </CardFooter> */}
        </Card>
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Online Income</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              $3500.00
            </CardTitle>
            <CardDescription>Total Billing</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              1
            </CardTitle>
            <div>
              <Badge variant="outline">
                <IconTrendingDown />
                -20%
              </Badge>
            </div>
          </CardHeader>
          {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Down 20% this period <IconTrendingDown className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Acquisition needs attention
            </div>
          </CardFooter> */}
        </Card>
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Cash Income</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              $3900.00
            </CardTitle>
            <CardDescription>Total Billing</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              3
            </CardTitle>
            <div>
              <Badge variant="outline">
                <IconTrendingUp />
                +12.5%
              </Badge>
            </div>
          </CardHeader>
          {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Strong user retention <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Engagement exceed targets
            </div>
          </CardFooter> */}
        </Card>
        <Card className="@container/card">
          <CardHeader>
            <CardDescription className="flex items-center gap-1">
              Opening Balance
              <IconPencil
                className="cursor-pointer w-4"
                onClick={() => setOpenOpeningBalanceModal(true)}
              />
            </CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              $800.00
            </CardTitle>
            <CardDescription>Closing Balance</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              $8200.00
            </CardTitle>
            <div>
              <Badge variant="outline">
                <IconTrendingUp />
                +4.5%
              </Badge>
            </div>
          </CardHeader>
          {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium"></div>
            <div className="text-muted-foreground">
              Meets growth projections
            </div>
          </CardFooter> */}
        </Card>
      </div>

      {/* Edit Opening Balance Modal */}
      {openOpeningBalanceModal && (
        <EditOpeningBalance openModal={openOpeningBalanceModal} setOpenModal={setOpenOpeningBalanceModal} />
      )}
    </>
  );
}
