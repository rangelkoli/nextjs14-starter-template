import React from "react";

interface Event {
  title: string;
  start_time: string;
  end_time: string;
  location: string;
  description: string;
}

interface DailyScheduleProps {
  date: String;
  events: Event[];
}

const DailySchedule: React.FC<DailyScheduleProps> = ({ date, events }) => {
  return (
    <div className="w-full h-[1440px] relative border-r">
      <h1 className=" text-lg font-semibold border-b h-[60px] text-center">
        {date}
      </h1>
      {events.length > 0 &&
        events.map((event) => {
          return (
            <div
              key={event.title + event.start_time + event.end_time}
              className="event w-full text-center  hover:bg-blue-600 group justify-center bg-blue-500 "
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
        })}
    </div>
  );
};

export default DailySchedule;
