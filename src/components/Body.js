import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import SearchBox from "./SearchBox";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filterSearchRestaurants = listOfRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurants(filterSearchRestaurants);
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(
      jsonData?.data?.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    ); //jsonData?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListOfRestaurants(
      jsonData?.data?.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurants(
      jsonData?.data?.cards[2].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurants.length == 0 ? (
    <h1>Loading....!!!!!</h1>
  ) : (
    <div className="body">
      <SearchBox
        searchText={searchText}
        setSearchText={(res) => setSearchText(res)}
      />
      <button
        className="top-rated-btn"
        onClick={() => {
          filteredTopRestaurants = listOfRestaurants?.filter(
            (res) => res?.info?.avgRating >= 4.4
          );
          setRestaurants(filteredTopRestaurants);
          console.log(filteredTopRestaurants);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="restro-card-container">
        {restaurants?.map((res) => (
          <RestroCard key={res?.info?.id} restaurantDetails={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
