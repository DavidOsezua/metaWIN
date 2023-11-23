import React from "react";
import { statsDays } from "../Data/data";
import styles from "./StatsCard.module.css";

const StatsCard = ({ text, total }) => {
  return (
    <div className={`${styles.container}`}>
      <div className="text-center ">
        <h3 className="font-bold text-[#fff]">{text}</h3>

        <h3 className="font-bold text-[#fff]">{total ? total : 0}</h3>
      </div>

      <div>
        {statsDays.map((statsDay) => (
          <div className="flex justify-between border-t border-[#70008C]  text-[#fff] py-[0.1rem]">
            <p className="text-[#ffffff80] text-[12px]">{statsDay.day}</p>
            <p>0</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
