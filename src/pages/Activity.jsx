import { useContext, useEffect, useState } from "react";
import styles from "./Activity.module.css";
import { HeaderEmpty } from "../components";
import "../App.css";
import { UserContext } from "../contexts/UserContext";
import { axiosInstance } from "../axios";
import { image, MetaWheel, eth } from "../assets";
import tableStyles from "../components/Table.module.css";
// import React from "react";

import { Fade } from "react-awesome-reveal";
const HEADERS = ["Game", "User", "Action", "Amount", "Time"];

const Table = ({ fields }) => {
  console.log(fields);
  return (
    <Fade>
      <div className="table-responsive ">
        <table className={`${tableStyles.tableStyle}`}>
          <thead>
            <tr>
              {HEADERS.map((th, index) => (
                <th className={`${tableStyles.thStyle}`} key={index}>
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {fields.map((item, index) => (
              <tr
                key={item.id}
                className={(index + 1) % 2 === 0 ? "bg-[#5D0074]" : ""}
              >
                <td className={`${tableStyles.tdStyle}`}>
                  {" "}
                  <div className="flex items-center gap-[3px]">
                    <img
                      src={MetaWheel}
                      className={`${tableStyles.image}  w-[2rem] rounded-md`}
                    />
                    {item.Game}
                  </div>
                </td>

                <td className={`${tableStyles.tdStyle}`}>
                  <div className="flex items-center">
                    <img src={image} className={`${tableStyles.UserImage}`} />
                    {item.user.slice(0, 6)}
                  </div>
                </td>

                <td
                  className={`${tableStyles.tdStyle} ${
                    item.Action === "ENTRY"
                      ? "text-[#FFC72E]"
                      : "text-[#56FF47]"
                  }`}
                >
                  ENTRY
                </td>

                <td className={`${tableStyles.tdStyle}`}>
                  <div className="flex items-center">
                    <img src={eth} />
                    {item.amount.toFixed(4)}
                  </div>
                </td>

                <td className={`${tableStyles.tdStyle} text-[#FF6665]`}>
                  {item.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fade>
  );
};

const Activity = () => {
  const { userDetails } = useContext(UserContext);
  const [wages, setWages] = useState([]);

  const getUserActivities = async (address) => {
    const res = await axiosInstance.get(`/wagers?user=${address}`);
    setWages(res.data);
  };

  useEffect(() => {
    if (!userDetails) return;
    const { address } = userDetails;
    getUserActivities(address);
  }, [userDetails]);

  return (
    <section className={`${styles.section}`}>
      <HeaderEmpty />
      <div className={`${styles.container}`}>
        <Table fields={wages} />
      </div>
    </section>
  );
};

export default Activity;
