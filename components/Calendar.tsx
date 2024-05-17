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
import DailySchedule from "./WeekView/DailySchedule";
import { PassThrough } from "stream";
interface Event {
  date: string;
  id: Number;
  schedule: [
    {
      title: string;
      start_time: string;
      end_time: string;
      location: string;
      description: string;
    }
  ];
}
function Calendar() {
  const { userId, getToken } = useAuth();
  const [selectDate, setSelectDate] = useState(todayDate);
  const [view, setView] = useState("week");

  async function changeDate(date: string, addOrSubtract: string, view: string) {
    let currentDate = new Date(date);

    if (addOrSubtract === "add") {
      currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
    } else {
      currentDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
    }
    setSelectDate(dayjs(currentDate).format("ddd, MMMM D, YYYY"));
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

  const [createEvent, setCreateEvent] = useState(false);

  function getEventBasedOnDate(date: string, events: any) {
    const formattedate = dayjs(date).format("YYYY-MM-DD");
    const filteredEvents: Event = {
      date: "",
      id: 0,
      schedule: [
        {
          title: "",
          start_time: "",
          end_time: "",
          location: "",
          description: "",
        },
      ],
    };
    events.forEach((event: any) => {
      if (event.date === formattedate) {
        filteredEvents.date = event.date;
        filteredEvents.id = event.id;
        filteredEvents.schedule = event.schedule;
      }
    });

    return filteredEvents.schedule;
  }

  return (
    <div>
      <div className="calendarHeader flex justify-between items-center border-b border-t p-2">
        <div className="flex items-center gap-2 h-12 justify-center ">
          <button
            onClick={() => {
              changeDate(selectDate, "subtract", view);
            }}
            aria-label="Previous Date"
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
            aria-label="Next Date"
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
          aria-label="Create Event"
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
              {/* <DayEvents
                date={selectDate}
                events={getEventBasedOnDate(selectDate, mainEvents)}
              /> */}
              <DailySchedule
                date={selectDate}
                events={getEventBasedOnDate(selectDate, mainEvents)}
              />
            </div>
          </div>
        </div>
      )}
      {/* {view === "week" && (
        <div>
          <WeeklyOverview date={selectDate} />
        </div>
      )} */}
      {view === "month" && (
        <div>
          <MonthView />
        </div>
      )}
    </div>
  );
}

export default Calendar;
