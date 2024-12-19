import { useEffect, useState } from "react";
import axios from "axios";

export function useApi() {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    setAuthToken(localStorage.getItem("token"));
    // 7f382c9d85266d664c58602b1506f7f511981648
    // 16// 91828a74b2603b3604470e9525c39832c0d81c28
    // 17// 4dccc91f8d009c30b364c2fb50ee960aa9772489
  }, []);

  const api = axios.create({
    baseURL: "https://www.yuyujr.store/",

    headers: {
      Authorization: `Token ${authToken}`,
    },
  });

  return api;
}
