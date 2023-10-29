import React, { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (rId) => {
  const [basicDetails, setBasicDetils] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log("Effect in useRestaurant menu hook called");
    const data = await fetch(MENU_URL + rId);
    const json = await data.json();
    console.log(json);
    setBasicDetils(json);
  };

  return basicDetails;
};

export default useRestaurantMenu;
