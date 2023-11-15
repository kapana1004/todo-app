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

// const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     // Update the time every second
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     // Clear the interval when the component is unmounted
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array means the effect runs once after the initial render

//   // Format the time as HH:mm:ss
//   const formattedTime = time.toLocaleTimeString([], {
//     hour: "2-digit",
//     minute: "2-digit",
//   });
//   const weekday = time.toLocaleDateString(undefined, { weekday: "short" });
//   const monthDay = time.getDate();
