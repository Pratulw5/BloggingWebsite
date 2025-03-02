import React from 'react';
import './index.css';

function Cards({ Image, Heading, Description, type }) {
  switch (type) {
    case "1":
      return (
        <div className="flex flex-col border-4 border-[#351C15] w-[80%] h-[320px] m-[1%] overflow-hidden 
                        lg:w-[40%] lg:h-[475px] md:w-[45%] md:h-[320px] sm:w-[50%] sm:h-[220px] ">
          <img className="w-full h-[65%] " src={Image} alt="Card image" />
          <div className="p-2 sm:p-4 sm:h-[50%]">
            <h1 className="text-[#351C15] font-serif font-medium text-[18px] lg:text-[24px] md:text-[20px] sm:text-[22px] leading-tight">{Heading}</h1>
            <p className="text-[#351C15] font-serif font-medium text-[14px] lg:text-[20px] md:text-[17px] sm:text-[16px] leading-tight mt-1">{Description}</p>
          </div>
        </div>
      );

    case "2":
      return (
        <div className="flex flex-row border-4 border-[#351C15] w-[80%] h-[250px] m-[1%] overflow-hidden 
                        lg:w-[40%] lg:h-[475px] md:w-[45%]  md:h-[320px] sm:w-[50%] sm:h-[220px] sm:flex-row">
          <img className="w-[50%] h-[100%] " src={Image} alt="Card image" />
          <div className="w-[50%] p-2 flex flex-col  sm:p-4 sm:h-[50%]">
          <h1 className="text-[#351C15] font-serif font-medium text-[18px] lg:text-[24px] md:text-[20px] sm:text-[22px] leading-tight ">
    {Heading}
  </h1>
  <p className="text-[#351C15] font-serif font-medium text-[14px] lg:text-[20px] md:text-[17px] sm:text-[16px] leading-tight mt-1">
    {Description}
  </p>        </div>
        </div>
      );

    case "3":
      return (
        <div className="flex flex-row border-4 border-[#351C15] w-[35%] h-[370px] m-[1%] overflow-hidden 
                        md:w-[80%] sm:w-[100%] sm:flex-col">
          <img className="w-[55%] h-fit sm:w-full sm:h-[50%]" src={Image} alt="Card image" />
          <div className="w-[45%] p-4 flex flex-col justify-center sm:w-full sm:h-[50%]">
            <h1 className="text-[#351C15] font-serif text-lg font-medium">{Heading}</h1>
            <p className="text-[#351C15] font-serif text-sm mt-2">{Description}</p>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex flex-col border-4 border-[#351C15] w-[35%] h-[400px] m-[1%] overflow-hidden 
                        md:w-[45%] sm:w-[90%]">
          <img className="w-full h-[fit] object-cover" src={Image} alt="Card image" />
          <div className="p-4">
            <h1 className="text-[#351C15] font-serif text-lg font-medium">{Heading}</h1>
            <p className="text-[#351C15] font-serif text-sm mt-2">{Description}</p>
          </div>
        </div>
      );
  }
}

export default Cards;
