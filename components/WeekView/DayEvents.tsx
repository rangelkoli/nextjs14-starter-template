import { set } from "date-fns";
import { parse } from "path";
import React, { useRef, useState } from "react";

type Event = {
  date: string;
  user_id: string;
  schedule: [
    {
      start_time: string;
      end_time: string;
      title: string;
      description: string;
    }
  ];
};

const labelEncoding = {
  School: "#0000FF",
  Personal: "#008000",
  Work: "#FF0000",
  Other: "#FFFF00",
};

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

export default function DayEvents({
  date,
  events,
}: {
  date: string;
  events: [Event] | null;
}) {
  console.log("events", events);
  console.log("eventsSA", events?.[0].schedule);
  const schdule = useRef<any>(null);
  const [scheduleEvents, setScheduleEvents] = useState<any>(null);
  if (events !== null) {
    const scheduleEvents = events?.[0].schedule;
    console.log("events", events);
    setScheduleEvents(scheduleEvents);
    schdule.current = scheduleEvents;
  } else {
    const scheduleEvents = null;
    console.log("events", events);
  }
  // events.map((event: Event) => {
  //   const AMPM = event.start_time.split(" ")[1];
  //   if (AMPM === "PM") {
  //     if (parseInt(event.start_time.split(":")[0]) == 12) {
  //       event.start_time = `${parseInt(event.start_time.split(":")[0])}:${
  //         event.start_time.split(":")[1].split(" ")[0]
  //       }`;
  //     } else {
  //       event.start_time = `${parseInt(event.start_time.split(":")[0]) + 12}:${
  //         event.start_time.split(":")[1].split(" ")[0]
  //       }`;
  //     }
  //   } else {
  //     event.start_time = `${event.start_time.split(":")[0]}:${
  //       event.start_time.split(":")[1].split(" ")[0]
  //     }`;
  //   }
  //   const AMPMEnd = event.end_time.split(" ")[1];
  //   if (AMPMEnd === "PM") {
  //     if (parseInt(event.end_time.split(":")[0]) == 12) {
  //       event.end_time = `${parseInt(event.end_time.split(":")[0])}:${
  //         event.end_time.split(":")[1].split(" ")[0]
  //       }`;
  //     } else {
  //       event.end_time = `${parseInt(event.end_time.split(":")[0]) + 12}:${
  //         event.end_time.split(":")[1].split(" ")[0]
  //       }`;
  //     }
  //   } else {
  //     event.end_time = `${event.end_time.split(":")[0]}:${
  //       event.end_time.split(":")[1].split(" ")[0]
  //     }`;
  //   }
  // });

  return (
    <div className="w-full h-[1440px] relative border-r">
      <h1 className=" text-lg font-semibold border-b h-[60px] text-center">
        {date}
      </h1>

      {scheduleEvents?.map(
        (event: {
          start_time: string;
          end_time: string;
          title: string;
          description: string;
        }) => {
          return (
            <div
              key={event.title}
              className="event w-full text-center  hover:bg-blue-600 group justify-center  "
              style={{
                top: `${
                  parseInt(event.start_time.split(":")[0]) * 60 +
                  parseInt(event.start_time.split(":")[1]) +
                  60
                }px`,
                height: `${
                  (parseInt(event.end_time.split(":")[0]) -
                    parseInt(event.start_time.split(":")[0])) *
                    60 +
                  (parseInt(event.end_time.split(":")[1]) -
                    parseInt(event.start_time.split(":")[1]))
                }px`,
                border: "1px solid black",
                position: "absolute",
                width: "100%",
              }}
            >
              <p>{event.title}</p>
              <p>
                {event.start_time} - {event.end_time}
              </p>
            </div>
          );
        }
      )}

      {/* {events?.map((event: Event) => {
        return (
          <div
            className={` w-full  hover:bg-blue-600 group justify-center  
            } bg-red`}
            // style={{
            //   top: `${
            //     parseInt(event.start_time.split(":")[0]) * 60 +
            //     parseInt(event.start_time.split(":")[1]) +
            //     60
            //   }px`,
            //   height: `${
            //     (parseInt(event.end_time.split(":")[0]) -
            //       parseInt(event.start_time.split(":")[0])) *
            //       60 +
            //     (parseInt(event.end_time.split(":")[1]) -
            //       parseInt(event.start_time.split(":")[1]))
            //   }px`,
            //   border: "1px solid black",
            //   position: "absolute",
            //   width: "100%",
            // }}
          >
            <div
              // className={`bg-${
              //   labelEncoding[event.title as keyof typeof labelEncoding] || ""
              // } w-full h-full group:hover:bg-blue-600`}
              // style={{
              //   backgroundColor: `${
              //     labelEncoding[event.title as keyof typeof labelEncoding]
              //   }`,
              // }}
              className={`
           w-full h-full group:hover:bg-blue-600`}
              style={{
                backgroundColor: `${
                  labelEncoding[
                    event.schedule[0].title as keyof typeof labelEncoding
                  ]
                }`,
              }}
            >
              <p className=" text-center justify-center align-middle group:hover:hidden text-sm bg-blue">
                {event.schedule[0].start_time} - {event.schedule[0].end_time}
              </p>
              <p className=" text-center justify-center align-middle h-full group:hover:hidden">
                {event.schedule[0].title}
              </p>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}
