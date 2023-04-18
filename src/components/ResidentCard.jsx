import axios from "axios";
import React, { useEffect, useState } from "react";

const residentStatus = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknown: "bg-gray-500",
};

const ResidentCard = ({ resident }) => {
  const [habitante, setHabitante] = useState();
  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setHabitante(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="relative ">
        <img
          className="w-full border-green-700 border-solid border-2"
          src={habitante?.image}
          alt=""
        />
        <div className="absolute text-white bottom-4 left-1/2 -translate-x-1/2 bg-[#020A02]/60 flex gap-1 items-center px-2">
          <div
            className={`w-3 h-3  ${
              residentStatus[habitante?.status]
            } rounded-full`}
          ></div>
          <span >{habitante?.status}</span>
        </div>
      </div>
      <section className="border-green-700 border-solid border-2 text-white">
        <h3 className="mx-auto text-center py-3 text-blue-300">{habitante?.name}</h3>
        <ul>
          <li className="px-3">
            <span  className="text-yellow-500 font-bold pr-3 text-[11px]">Species: </span>
            <span className="font-bold text-[11px]">{habitante?.species}</span>
          </li>

          <li className="px-3">
            <span  className="text-yellow-500 font-bold pr-3 text-[11px]  ">Origin</span>
            <span className="font-bold text-[10px]">{habitante?.origin.name} </span>
          </li>

          <li className="px-3 pb-4">
            <span className="text-yellow-500 font-bold pr-3 text-[11px]">Time appear</span>
            <span className="font-bold">{habitante?.episode.length}</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ResidentCard;
