import { useEffect, useState } from "react";
import RestroCard, { withPromotedLabel } from "./RestroCard";
import SearchBox from "./SearchBox";
import { RESTAURANT_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const PromotedRestroCard = withPromotedLabel(RestroCard);

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
    const data = await fetch(RESTAURANT_URL);
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
          <Link
            className="link-router-style"
            key={res?.info?.id}
            to={"/restaurant/" + res?.info?.id}
          >
            {res?.info?.avgRating >= 4.5 ? (
              <PromotedRestroCard restaurantDetails={res} />
            ) : (
              <RestroCard restaurantDetails={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
