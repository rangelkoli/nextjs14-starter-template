import MiniCalendar from "@/components/MiniCalendar";
import React, { ChangeEvent, useRef } from "react";
import WeeklyOverview from "@/components/WeeklyOverview";
import Checkbox from "@/components/Checkbox";
import AISchedule from "@/components/WeekView/AISchedule";
import Divider from "@/components/Divider";
import Calendar from "@/components/Calendar";

async function page() {
  const labels = [
    { name: "Work", color: "bg-red-500" },
    { name: "Personal", color: "bg-green-500" },
    { name: "School", color: "bg-blue-500" },
    { name: "Others", color: "bg-yellow-500" },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-10  ">
        <div className="bg-black p-1 col-span-2  w-full  border-white/80  ">
          <Divider name="AI Scheduler" />
          <AISchedule />
          {/* <Divider name="Calendar" /> */}
          <Divider name="Labels" />
          <div className="flex flex-col gap-2">
            {labels.map((label) => (
              <div
                key={label.name}
                className={`flex items-center gap-2 border-2 border-white ${label.color} p-2 rounded-md`}
              >
                <div className="flex  ">
                  <input
                    type="checkbox"
                    className="peer relative appearance-none w-5 h-5 
                          border rounded-full border-pink-400 
                          cursor-pointer  
                          checked:bg-white"
                    id="circular-checkbox"
                  />

                  <label className="ms-2 text-sm font-medium ">
                    {label.name}
                  </label>
                </div>
              </div>
            ))}
            <Checkbox />
          </div>
        </div>
        <div className="bg-black p-4 col-span-8 lg:border-r-2">
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default page;
