import React from "react";

const DishList = ({ items }) => {
  return items?.map((res) => (
    <h6 key={res.card.info.id}>{res.card.info.name}</h6>
  ));
};

export default DishList;
//<div key={res.card.info.id}> {res.card.info.name}</div>
