"use client";
import React, { useEffect, useState } from "react";
import TimingsEvents from "./WeekView/TimingsEvents";
import DayEvents from "./WeekView/DayEvents";
import ViewsButtons from "./ViewsButtons";
import Divider from "./Divider";
import MonthView from "./MonthView";
import todayDate from "@/utils/dateToday";
import WeeklyOverview from "./WeeklyOverview";
import dayjs from "dayjs";
import { supabaseGetSchedule } from "@/utils/supabaseRequestSchedule";
import { useAuth } from "@clerk/nextjs";
import CreateEvent from "./create-event";
import { set } from "date-fns";
import { A } from "@upstash/redis/zmscore-10fd3773";

function Calendar() {
  const { userId, getToken } = useAuth();
  const [selectDate, setSelectDate] = useState(todayDate);
  const [view, setView] = useState("week");

  async function changeDate(date: string, addOrSubtract: string, view: string) {
    let currentDate = new Date(date);

    if (addOrSubtract === "add") {
      currentDate = new Date(currentDate.setDate(currentDate.getDate() + 7));
    } else {
      currentDate = new Date(currentDate.setDate(currentDate.getDate() - 7));
    }
    setSelectDate(currentDate.toString().split(" ").slice(1, 4).join(" "));
  }

  const [mainEvents, setMainEvents] = useState<Array<any>>([]);

  useEffect(() => {
    async function fetchSchedule() {
      console.log("userId", userId);

      const token = await getToken();
      const data = await supabaseGetSchedule({ userID: userId, token });

      console.log("data", data);
      if (data) {
        setMainEvents(data);
        console.log("mainEvents", data);
      }
    }
    fetchSchedule();
  }, []);

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
      event: "Make and drink smoothie",
      start_time: "04:00 PM",
      end_time: "04:30 PM",
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
  const [createEvent, setCreateEvent] = useState(false);

  return (
    <div>
      <div className="calendarHeader flex justify-between items-center border-b border-t p-2">
        <div className="flex items-center gap-2 h-12 justify-center ">
          <button
            onClick={() => {
              changeDate(selectDate, "subtract", view);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.605"
              height="15.555"
              fill="white"
            >
              <path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z" />
            </svg>
          </button>
          <p className="text-white text-lg font-semibold p-10">{selectDate}</p>

          <button
            onClick={() => {
              changeDate(selectDate, "add", view);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.605"
              height="15.555"
              fill="white"
            >
              <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
            </svg>
          </button>
        </div>
        <button
          onClick={() => {
            setCreateEvent(true);
          }}
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Create Event
        </button>
        {createEvent && (
          <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 z-50">
            <CreateEvent />
          </div>
        )}
        <ViewsButtons view={view} setView={(view: string) => setView(view)} />
      </div>
      {view === "day" && (
        <div>
          <div className="w-full flex ">
            <div className="w-24">
              <TimingsEvents />
            </div>
            <div className="grid grid-cols-1 grid-flow-col w-full">
              <DayEvents
                date={selectDate}
                events={mainEvents.filter((event) => {
                  return event.date === selectDate;
                })}
              />
            </div>
          </div>
        </div>
      )}
      {view === "week" && (
        <div>
          <WeeklyOverview date={selectDate} />
        </div>
      )}
      {view === "month" && (
        <div>
          <MonthView />
        </div>
      )}
    </div>
  );
}

export default Calendar;
