import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantsInPerundurai } from "./mockData";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU"
          className="logo-image"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = ({ restaurantDetails }) => {
  const { data } = restaurantDetails;
  return (
    <div className="restro-card">
      <img
        className="restro-image"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${data?.cloudinaryImageId}`}
      />
      <div className="restro-details">
        <p className="main-details">{data?.name}</p>
        <p className="main-details">
          {data?.avgRatingString} * {`${data?.sla?.deliveryTime} mins`}
        </p>
        <p className="sub-details">{data?.cuisines?.join(",")}</p>
        <p className="sub-details">{data?.locality}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <h2>Search Box Will come here</h2>
      <div className="restro-card-container">
        {restaurantsInPerundurai.map((res) => (
          <RestroCard key={res?.data?.id} restaurantDetails={res} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const rootReact = ReactDOM.createRoot(document.getElementById("root"));

rootReact.render(<App />);
