import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
function Accordian({ heading, text }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex items-center justify-center my-5">
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex flex-col p-3 border-4 border-[#802dff] w-[300px] text-white cursor-pointer items-center justify-center"
      >
        <div className="flex flex-row">
          <p
            className={`font-text text-[22px] w-[85%]  font-medium mx-1 leading-[26px] ${
              expanded ? "text-white" : "text-white"
            }`}
          >
            {heading}
          </p>
          <p
            className={`text-3xl ${
              expanded ? "text-[#802dff]" : "text-[#802dff]"
            }`}
          >
            {expanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </p>
        </div>
        <div
          className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
            expanded ? "max-h-30" : "max-h-0"
          }`}
        >
          <p className="font-text text-base text-darkColor font-normal leading-5 mx-2 my-3">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
