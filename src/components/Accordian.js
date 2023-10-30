import React, { useState, useContext } from "react";
import DishList from "./DishList";
import UserContext from "../utils/UserContext";

const Accordian = ({ data, show, setShow }) => {
  const { userDetails } = useContext(UserContext);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: 400,
          marginBottom: 10,
        }}
      >
        <h4>
          {" "}
          {data?.card?.card?.title} ({data?.card?.card?.itemCards.length})
        </h4>
        <button
          style={{
            textAlign: "center",
            padding: 10,
          }}
          onClick={() => setShow()}
        >
          {show ? "🔼 " : "🔽"}
        </button>
      </div>
      <div>{show && <DishList items={data?.card?.card?.itemCards} />}</div>
    </div>
  );
};

export default Accordian;
