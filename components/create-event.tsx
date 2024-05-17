import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CreateEvent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-md">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => {
            // Add your close button logic here
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Create Calendar Event
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="start-time">Start Time</Label>
              <Input
                className="mt-1"
                id="start-time"
                placeholder="Select start time"
                type="time"
              />
            </div>
            <div>
              <Label htmlFor="end-time">End Time</Label>
              <Input
                className="mt-1"
                id="end-time"
                placeholder="Select end time"
                type="time"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              className="mt-1"
              id="title"
              placeholder="Enter event title"
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              className="mt-1"
              id="description"
              placeholder="Enter event description"
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              className="mt-1"
              id="location"
              placeholder="Enter event location"
              type="text"
            />
          </div>
          <div className=" grid grid-flow-col gap-4">
            <Button className="w-full">Save</Button>
            <Button className="w-full">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
