import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 

export default function DateRangePicker() {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="p-4">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
      />

      <p className="mt-4">
        <strong>Start Date:</strong> {range[0].startDate.toDateString()} <br />
        <strong>End Date:</strong> {range[0].endDate.toDateString()}
      </p>
    </div>
  );
}
