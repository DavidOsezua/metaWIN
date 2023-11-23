import { createContext, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { axiosInstance } from "../axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const { address } = useAccount();

  const [userDetails, setUserDetails] = useState({});

  const getUserInfo = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const refCode = searchParams.get("ref");
    console.log(refCode);
    const res = await axiosInstance.get(
      `/user?address=${address}&ref_code=${refCode}`
    );
    // console.log(res.data);
    setUserDetails(res.data);
  };

  useEffect(() => {
    if (!address) {
      setUserDetails({});
      return;
    }
    getUserInfo();
  }, [address]);

  return (
    <UserContext.Provider value={{ userDetails }}>
      {children}
    </UserContext.Provider>
  );
};
