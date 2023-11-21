import React from "react";

export default function TodoClock({ formattedTime, weekday, monthDay }) {
  return (
    <div className=" w-[192px] absolute bottom-[30%] left-[70%]">
      <p className=" text-[18px] font-bold text-white pl-[60px]">
        {weekday} {monthDay}
      </p>
      <p className=" text-[48px] font-bold text-white">{formattedTime}</p>
    </div>
  );
}
