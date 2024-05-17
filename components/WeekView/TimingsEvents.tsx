import React from "react";

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
function TimingsEvents() {
  const timingsLength = timings.length;
  return (
    <div className={`w-full grid grid-rows-${timingsLength}`}>
      <h1 className=" text-lg font-semibold border-b h-[60px]">Timings</h1>
      {timings.map((timing) => {
        return (
          <div key={timing} className="border-b h-[60px] static">
            <p className="absolute -my-4 bg-black">{timing}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TimingsEvents;
