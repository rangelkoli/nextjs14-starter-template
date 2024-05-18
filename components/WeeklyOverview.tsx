import React, { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import TimingsEvents from "./WeekView/TimingsEvents";
import DayEvents from "./WeekView/DayEvents";

import getWeek from "@/utils/getWeek";

function WeeklyOverview({ date }: { date: string }) {
  const timings = [
    "0:00",
    "1:00",
    "2:00",
    "3:00",
    "4:00",
    "5:00",
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const events = [
    {
      event: "Breakfast and housework",
      start_time: "08:15 AM",
      end_time: "09:45 AM",
      label: "Work",
    },
    {
      event: "Classes",
      start_time: "10:00 AM",
      end_time: "12:00 PM",
      label: "School",
    },
    {
      event: "Lunch and nap",
      start_time: "12:30 PM",
      end_time: "02:30 PM",
      label: "Personal",
    },
    {
      event: "Gym",
      start_time: "02:30 PM",
      end_time: "04:00 PM",
      label: "Personal",
    },

    {
      event: "Read a book",
      start_time: "04:30 PM",
      end_time: "06:00 PM",
      label: "Personal",
    },
    {
      event: "Cook dinner",
      start_time: "06:00 PM",
      end_time: "07:00 PM",
      label: "Personal",
    },
    {
      event: "Dinner",
      start_time: "07:00 PM",
      end_time: "07:40 PM",
      label: "Personal",
    },
    {
      event: "Walk",
      start_time: "07:40 PM",
      end_time: "08:20 PM",
      label: "Personal",
    },
    {
      event: "Watch reels on Instagram",
      start_time: "08:20 PM",
      end_time: "10:45 PM",
      label: "Personal",
    },
    {
      event: "Sleep",
      start_time: "11:00 PM",
      end_time: "08:00 AM",
      label: "Personal",
    },
  ];

  const [week, setWeek] = useState<string[]>([]);

  const weekAS = getWeek(new Date(date));

  useEffect(() => {
    setWeek(weekAS);
  }, [date]);

  return (
    <div className="w-full flex ">
      <div className="w-24">
        <TimingsEvents />
      </div>
      <div className="grid grid-cols-7 grid-flow-col w-full">
        {/* {week.map((day) => (
          <DayEvents key={day} date={day} events={events} />
        ))} */}
      </div>
    </div>
  );
}

export default WeeklyOverview;
