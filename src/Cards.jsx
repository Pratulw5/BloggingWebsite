import React from 'react';
import './index.css';

function Cards({ Image, Heading, Description, type, Description1, Description2 }) {
  switch (type) {
    case "1":
      return (
        <div className="flex flex-col border-solid border-[#351C15] border-[8px] w-[35%] h-[420px] m-[1%] overflow-hidden">
          <img className="w-full h-[75%] " src={Image} alt="Card image" />
          <h1 className="text-[#351C15] font-serif font-light text-[22px] px-[2%] pt-[2%] break-words">
            {Heading}
          </h1>
          <p className="text-[#351C15] font-serif font-light text-[18px] pb-[2%] px-[2%] break-words">
            {Description}
          </p>
        </div>
      );

    case "2":
      return (
        <div className="flex flex-col flex-wrap border-solid border-[#351C15] border-[8px] w-[30%] h-[420px] m-[1%] overflow-hidden">
          <img className="w-fit h-[100%] " src={Image} alt="Card image" />
          <h1 className="text-[#351C15] w-[50%] text-wrap font-serif font-light  text-[22px] px-[2%]  break-words">
            {Heading}
          </h1>
          <p className="text-[#351C15] font-serif font-light  text-[18px] px-[2%] break-words w-[40%] h-[10%]">
            {Description}
          </p>
        </div>
      );
      case "3":
        return (
          <div className="flex flex-wrap border-solid border-[#351C15] border-[8px] w-[67%] h-[300px] m-[1%] ">
             <img className="w-[55%] h-[100%]" src={Image} alt="Card image" />
     <div className='w-[45%]'>
            <h1 className="text-[#351C15]  text-wrap font-serif font-light  text-[22px] p-[4%]  pl-[6%]  pb-[1%] h-fit break-words">
              {Heading}
            </h1>
            <p className="text-[#351C15] font-serif font-light  text-[18px]  px-[4%] pl-[6%] break-words h-fit ">
              {Description}
            </p>
            </div>
          </div>
        );
    default:
      return (
        <div className="flex flex-col border-solid border-[#351C15] border-[8px] w-[35%] h-[400px] m-[1%] p-2 overflow-hidden">
          <img className="w-full h-[60%] object-cover flex-1" src={Image} alt="Card image" />
          <h1 className="text-[#351C15] font-serif font-light text-[28px] px-[2%] pb-[1%] break-words">
            {Heading}
          </h1>
          <p className="text-[#351C15] font-serif font-light text-xl px-[2%] break-words">
            {Description}
          </p>
          
        </div>
      );
  }
}

export default Cards;
