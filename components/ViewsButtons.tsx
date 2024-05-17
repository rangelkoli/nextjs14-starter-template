import React from "react";

function ViewsButtons({ view, setView }: { view: string; setView: any }) {
  const handleView = (view: string) => {
    setView(view);
  };
  return (
    <div>
      <div className="flex space-x-4 p-2 bg-gray-800 rounded-lg shadow-md justify-center items-center">
        <button
          onClick={() => handleView("day")}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue  ${
            view === "day" ? "bg-blue-600" : "bg-black border-blue-600 border"
          } hover:bg-slate-100 border  rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center`}
        >
          <span className="hidden md:inline-block">Day</span>
        </button>
        <button
          onClick={() => handleView("week")}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue  ${
            view === "week"
              ? "bg-blue-600 hover:"
              : "bg-black border-blue-600 border"
          } hover:bg-slate-100  font-medium px-4 py-2 inline-flex space-x-1 items-center`}
        >
          <span className="hidden md:inline-block">Week</span>
        </button>
        <button
          onClick={() => handleView("month")}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue   ${
            view === "month"
              ? "bg-blue-600 text-white"
              : "bg-black border-blue-600 border"
          } hover:bg-slate-100 border  rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center`}
        >
          <span className="hidden md:inline-block">Month</span>
        </button>
      </div>
    </div>
  );
}

export default ViewsButtons;
