import { useEffect, useState } from "react";

const useToken = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("users")));
  }, []);

  return [token];
};

export default useToken;