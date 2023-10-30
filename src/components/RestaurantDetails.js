import React, { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";
import { useOutlet, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordian from "./Accordian";

const RestaurantDetails = () => {
  const [showIndex, setIndex] = useState(null);
  const { rId } = useParams();
  const basicDetails = useRestaurantMenu(rId);

  if (basicDetails == null) return <h2>Loading....!</h2>;

  const { info } = basicDetails?.data?.cards[0]?.card?.card;

  const itemCards =
    basicDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res?.card.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(itemCards);

  return (
    <div className="restaurant-details">
      <h1>{info?.name}</h1>
      <h2>
        {info?.areaName} - {info?.costForTwoMessage}
      </h2>
      <h2>{info?.totalRatingsString}</h2>
      <h3>Menu</h3>
      <ul>
        {itemCards?.map((items, index) => (
          <Accordian
            data={items}
            key={items.card.card.title}
            show={index == showIndex ? true : false}
            setShow={() => setIndex(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetails;
