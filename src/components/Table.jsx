// import React from "react";
import { image, MetaWheel, eth } from "../assets";

import { generateData } from "../Data/data";
import styles from "./Table.module.css";
import { Fade } from "react-awesome-reveal";
const HEADERS = ["Game", "User", "Action", "Amount", "Time"];

const Table = () => {
  const dat = [1, 2, 3, 4, 5, 6].map(() => generateData(true));

  return (
    <Fade>
      <div className="table-responsive ">
        <table className={`${styles.tableStyle}`}>
          <thead>
            <tr>
              {HEADERS.map((th, index) => (
                <th className={`${styles.thStyle}`} key={index}>
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dat.map((item, index) => (
              <tr
                key={item.id}
                className={(index + 1) % 2 === 0 ? "bg-[#5D0074]" : ""}
              >
                <td className={`${styles.tdStyle}`}>
                  {" "}
                  <div className="flex items-center gap-[3px]">
                    <img
                      src={MetaWheel}
                      className={`${styles.image}  w-[2rem] rounded-md`}
                    />
                    {item.Game}
                  </div>
                </td>

                <td className={`${styles.tdStyle}`}>
                  <div className="flex items-center">
                    <img src={image} className={`${styles.UserImage}`} />
                    {item.User}
                  </div>
                </td>

                <td
                  className={`${styles.tdStyle} ${
                    item.Action === "ENTRY"
                      ? "text-[#FFC72E]"
                      : "text-[#56FF47]"
                  }`}
                >
                  {item.Action}
                </td>

                <td className={`${styles.tdStyle}`}>
                  <div className="flex items-center">
                    <img src={eth} />
                    {item.Amount}
                  </div>
                </td>

                <td className={`${styles.tdStyle} text-[#FF6665]`}>
                  {item.Time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fade>
  );
};

export default Table;
