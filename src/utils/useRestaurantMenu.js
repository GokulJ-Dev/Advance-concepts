import React, { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (rId) => {
  const [basicDetails, setBasicDetils] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + rId);
    const json = await data.json();
    setBasicDetils(json);
  };

  return basicDetails;
};

export default useRestaurantMenu;
