import React, { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";
import { useOutlet, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantDetails = () => {
  const { rId } = useParams();
  const basicDetails = useRestaurantMenu(rId);

  console.log("Menu Page Rendering");
  if (basicDetails == null) return <h2>Loading....!</h2>;

  const { info } = basicDetails?.data?.cards[0]?.card?.card;

  const { itemCards } =
    basicDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  return (
    <div className="restaurant-details">
      <h1>{info?.name}</h1>
      <h2>
        {info?.areaName} - {info?.costForTwoMessage}
      </h2>
      <h2>{info?.totalRatingsString}</h2>
      <h3>Menu</h3>
      <ul>
        {itemCards?.map((items) => (
          <li key={items?.card?.info?.id}>{items?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetails;
