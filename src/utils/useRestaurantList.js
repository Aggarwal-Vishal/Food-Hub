import { RESTAURANT_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantList = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
  };
};

export default useRestaurantList;
