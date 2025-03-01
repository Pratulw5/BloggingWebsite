import React, { useState } from "react";

const timelineData = [
  { id: 1, title: "Step 1", description: "Description for Step 1" },
  { id: 2, title: "Step 2", description: "Description for Step 2" },
  { id: 3, title: "Step 3", description: "Description for Step 3" },
  { id: 4, title: "Step 4", description: "Description for Step 4" },
  { id: 5, title: "Step 1", description: "Description for Step 1" },
  { id: 6, title: "Step 2", description: "Description for Step 2" },
  { id: 7, title: "Step 3", description: "Description for Step 3" },
  { id: 8, title: "Step 4", description: "Description for Step 4" },
  { id: 9, title: "Step 1", description: "Description for Step 1" },
  { id: 10, title: "Step 2", description: "Description for Step 2" },
];

function Timeline() {
  const [selected, setSelected] = useState(1);

  return (
    <div className=" items-center w-[100%]">
    <div className="flex flex-col items-center justify-center p-8 w-[80%] overflow-hidden">
    
      <div className="relative left-[10px] flex items-center w-full max-w-4xl">
        <div className="absolute top-[10px] w-full h-1 bg-[#351C15]"></div>

        {/* Timeline Dots */}
        {timelineData.map((event) => (
          <div key={event.id} className="relative flex flex-col items-center w-1/4">
            {/* Clickable Dot */}
            <button
              className={`w-6 h-6 rounded-full p-[5px] ${
                selected === event.id ? "bg-[#351C15] border-[white] border-[5px] shadow-[0_0_0_5px_#351C15] " : "bg-[#351C15] "
              } transition-all`}
              onClick={() => setSelected(event.id)}
            ></button>

            {/* Title (Always Visible) */}
            <p className="mt-2 text-sm font-semibold text-gray-700">{event.title}</p>
          </div>
        ))}
      </div>

      {/* Description Box (Appears when a dot is clicked) */}
      {selected && (
        <div className="mt-6 p-4 border rounded-lg bg-white shadow-md w-80 text-center">
          <h3 className="text-lg font-bold text-blue-600">{timelineData.find(e => e.id === selected)?.title}</h3>
          <p className="text-gray-600 mt-2">{timelineData.find(e => e.id === selected)?.description}</p>
        </div>
      )}
    </div>
    </div>

  );
}

export default Timeline;
