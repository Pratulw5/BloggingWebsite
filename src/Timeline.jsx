import React, { useEffect, useState } from "react";

const timelineData = [
  {
    id: 1,
    title: "Dir. AIGGPA",
    date: "Feb 24 – Present",
    description: (
      <>
        <p className=" font-extralight mx-5">
          Responsible for leading policy research, governance reforms, and capacity-building initiatives. Their role includes:
          <ul className=" font-extralight list-disc list-inside mt-2">
            <li>Overseeing research on public policy and good governance.</li>
            <li>Advising the government on policy formulation and implementation.</li>
            <li>Managing collaborations with institutions, think tanks, and policymakers.</li>
            <li>Conducting training programs for government officials.</li>
            <li>Driving innovation in governance through data-driven analysis.</li>
          </ul>
          They play a crucial role in enhancing administrative efficiency and governance in Madhya Pradesh and beyond.
        </p>
      </>
    ),
    image:"/AIGGPA.jpg",
  },
  {
    id: 2,
    title: "JC",
    date: "Jul 23 – Feb 24",
    description:(
      <>
        <p className=" mx-5">
          Responsible for leading policy research, governance reforms, and capacity-building initiatives. Their role includes:
          <ul className="list-disc list-inside mt-2">
            <li>Overseeing research on public policy and good governance.</li>
            <li>Advising the government on policy formulation and implementation.</li>
            <li>Managing collaborations with institutions, think tanks, and policymakers.</li>
            <li>Conducting training programs for government officials.</li>
            <li>Driving innovation in governance through data-driven analysis.</li>
          </ul>
          They play a crucial role in enhancing administrative efficiency and governance in Madhya Pradesh and beyond.
        </p>
      </>
    )
  },
  {
    id: 3,
    title: "SDM",
    date: "Mar 22 – Jul 23",
    description:(
      <>
        <p className=" mx-5">
          Responsible for leading policy research, governance reforms, and capacity-building initiatives. Their role includes:
          <ul className="list-disc list-inside mt-2">
            <li>Overseeing research on public policy and good governance.</li>
            <li>Advising the government on policy formulation and implementation.</li>
            <li>Managing collaborations with institutions, think tanks, and policymakers.</li>
            <li>Conducting training programs for government officials.</li>
            <li>Driving innovation in governance through data-driven analysis.</li>
          </ul>
          They play a crucial role in enhancing administrative efficiency and governance in Madhya Pradesh and beyond.
        </p>
      </>
    )
  },
  {
    id: 4,
    title: "SDM ",
    date: "Jan 20 – March 22",
    description:(
      <>
        <p className=" mx-5">
          Responsible for leading policy research, governance reforms, and capacity-building initiatives. Their role includes:
          <ul className="list-disc list-inside mt-2">
            <li>Overseeing research on public policy and good governance.</li>
            <li>Advising the government on policy formulation and implementation.</li>
            <li>Managing collaborations with institutions, think tanks, and policymakers.</li>
            <li>Conducting training programs for government officials.</li>
            <li>Driving innovation in governance through data-driven analysis.</li>
          </ul>
          They play a crucial role in enhancing administrative efficiency and governance in Madhya Pradesh and beyond.
        </p>
      </>
    )
  },
  {
    id: 5,
    title: "SDM",
    date: "Dec 18 – Jan 20",
    description: (
      <>
        <p className=" mx-5">
          Responsible for leading policy research, governance reforms, and capacity-building initiatives. Their role includes:
          <ul className="list-disc list-inside mt-2">
            <li>Overseeing research on public policy and good governance.</li>
            <li>Advising the government on policy formulation and implementation.</li>
            <li>Managing collaborations with institutions, think tanks, and policymakers.</li>
            <li>Conducting training programs for government officials.</li>
            <li>Driving innovation in governance through data-driven analysis.</li>
          </ul>
          They play a crucial role in enhancing administrative efficiency and governance in Madhya Pradesh and beyond.
        </p>
      </>
    )
  },
  {
    id: 6,
    title: "OSD",
    date: "Feb 16 – Dec 18",
    description:(
      <>
        <p className=" mx-5">
          Responsible for leading policy research, governance reforms, and capacity-building initiatives. Their role includes:
          <ul className="list-disc list-inside mt-2">
            <li>Overseeing research on public policy and good governance.</li>
            <li>Advising the government on policy formulation and implementation.</li>
            <li>Managing collaborations with institutions, think tanks, and policymakers.</li>
            <li>Conducting training programs for government officials.</li>
            <li>Driving innovation in governance through data-driven analysis.</li>
          </ul>
          They play a crucial role in enhancing administrative efficiency and governance in Madhya Pradesh and beyond.
        </p>
      </>
    )
  },
  {
    id: 7,
    title: "SDM",
    date: "Jan 15 – Feb 16",
    description: (
      <>
        <p className=" mx-5">
          Responsible for leading policy research, governance reforms, and capacity-building initiatives. Their role includes:
          <ul className="list-disc list-inside mt-2">
            <li>Overseeing research on public policy and good governance.</li>
            <li>Advising the government on policy formulation and implementation.</li>
            <li>Managing collaborations with institutions, think tanks, and policymakers.</li>
            <li>Conducting training programs for government officials.</li>
            <li>Driving innovation in governance through data-driven analysis.</li>
          </ul>
          They play a crucial role in enhancing administrative efficiency and governance in Madhya Pradesh and beyond.
        </p>
      </>
    )
  },
  {
    id: 8,
    title: "Dir. TPU",
    date: "Apr 10 – Jan 15",
    description: (
      <>
        <p className=" mx-5">
          Responsible for leading policy research, governance reforms, and capacity-building initiatives. Their role includes:
          <ul className="list-disc list-inside mt-2">
            <li>Overseeing research on public policy and good governance.</li>
            <li>Advising the government on policy formulation and implementation.</li>
            <li>Managing collaborations with institutions, think tanks, and policymakers.</li>
            <li>Conducting training programs for government officials.</li>
            <li>Driving innovation in governance through data-driven analysis.</li>
          </ul>
          They play a crucial role in enhancing administrative efficiency and governance in Madhya Pradesh and beyond.
        </p>
      </>
    )
  },
  {
    id: 9,
    title: "MBA NIFM",
    date: "Jan 08 – April 10",
    description: (
      <>
        <p className=" mx-5">
          Responsible for leading policy research, governance reforms, and capacity-building initiatives. Their role includes:
          <ul className="list-disc list-inside mt-2">
            <li>Overseeing research on public policy and good governance.</li>
            <li>Advising the government on policy formulation and implementation.</li>
            <li>Managing collaborations with institutions, think tanks, and policymakers.</li>
            <li>Conducting training programs for government officials.</li>
            <li>Driving innovation in governance through data-driven analysis.</li>
          </ul>
          They play a crucial role in enhancing administrative efficiency and governance in Madhya Pradesh and beyond.
        </p>
      </>
    )
  },
  {
    id: 10,
    title: "ASPO",
    date: "Aug 06 – Dec 07",
    description: (
      <>
        <p className=" mx-5">
          Responsible for leading policy research, governance reforms, and capacity-building initiatives. Their role includes:
          <ul className="list-disc list-inside mt-2">
            <li>Overseeing research on public policy and good governance.</li>
            <li>Advising the government on policy formulation and implementation.</li>
            <li>Managing collaborations with institutions, think tanks, and policymakers.</li>
            <li>Conducting training programs for government officials.</li>
            <li>Driving innovation in governance through data-driven analysis.</li>
          </ul>
          They play a crucial role in enhancing administrative efficiency and governance in Madhya Pradesh and beyond.
        </p>
      </>
    )
  }
];

function Timeline() {
  
  const [selected, setSelected] = useState(1);
  const [linePosition, setLinePosition] = useState(0);

  useEffect(() => {
    const index = selected;
    setLinePosition(450 - (index-1) * 100); // Ensures correct spacing
  }, [selected]);

  useEffect(() => {
    console.log("Updated Line Position:", linePosition);
  }, [linePosition]); // Logs new value when state updates

  return (
    <div id="About"className="mt-10 justify-items-center w-[100%] mb-15">
      <div className="flex flex-col items-center justify-center h-fit py-10 lg:w-[900px] md:w-[500px] sm:w-[300px] w-[300px] overflow-hidden">
      <div style={{left:`${linePosition}px`,transition: "left 0.3s ease",}} className={`relative  flex items-center w-[1000px]`}>

        <div className="absolute top-[10px] left-[50px] w-[900px]  h-1 bg-[#351C15]"></div>
          {timelineData.map((event) => (
            <div key={event.id} className="relative flex flex-col items-center w-[100px] h-[100px]">
              <button
                className={`w-6 h-6 rounded-full p-[5px] ${
                  selected === event.id
                    ? "bg-[#351C15] border-[white] border-[5px]  shadow-[0_0_0_5px_#351C15]"
                    : "bg-[#351C15]"
                } transition-all`}
                onClick={() => setSelected(event.id)}
              ></button>
              <p className="mt-2 text-sm font-light text-gray-700">{event.title}</p>
              <p className="text-xs px-0.5 leading-tight text-gray-500">{event.date}</p>
            </div>
          ))}
        </div>
        {selected && (
          <div className="h-fit mt-6 p-4 bg-[#351C15] shadow-md w-[100%] h-[400px] text-center text-white font-serif font-light text-[16px]">
            <h3 className="text-white font-serif font-medium text-[18px] lg:text-[24px] md:text-[20px] sm:text-[22px] leading-tight ">{timelineData.find((e) => e.id === selected)?.title}</h3>
            <p className="text-sm  font-extralight text-gray-300">{timelineData.find((e) => e.id === selected)?.date}</p>
            <div className="md:flex-row flex-col flex flex-nowrap py-3 items-center ">
            <img className="md:w-[35%] p-5 w-[90%] h-[320px] " src={timelineData.find((e) => e.id === selected)?.image} alt="" />
            <div className="text-white font-serif font-extralight text-left font-medium text-[14px] lg:text-[20px] md:text-[17px] sm:text-[16px] leading-tight mt-1">{timelineData.find((e) => e.id === selected)?.description}</div>
            </div>
          
          </div>
        )}
      </div>
    </div>
  );
}

export default Timeline;
