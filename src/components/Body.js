import { useState } from "react";
import RestroCard from "./RestroCard";
import { restaurantsInPerundurai } from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(
    restaurantsInPerundurai
  );
  return (
    <div className="body">
      <h2>Search Box Will come here</h2>
      <button
        className="top-rated-btn"
        onClick={() => {
          filteredTopRestaurants = listOfRestaurants.filter(
            (res) => res?.data?.avgRating > 4
          );
          setListOfRestaurants(filteredTopRestaurants);
          console.log(filteredTopRestaurants);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="restro-card-container">
        {listOfRestaurants.map((res) => (
          <RestroCard key={res?.data?.id} restaurantDetails={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
