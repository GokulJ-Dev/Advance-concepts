import { IMAGE_CDN } from "../utils/constants";

const RestroCard = ({ restaurantDetails }) => {
  const { info } = restaurantDetails;
  return (
    <div className="restro-card">
      <img className="restro-image" src={IMAGE_CDN + info?.cloudinaryImageId} />
      <div className="restro-details">
        <p className="main-details">{info?.name}</p>
        <p className="main-details">
          {info?.avgRating} * {`${info?.sla?.deliveryTime} mins`}
        </p>
        <p className="sub-details">{info?.cuisines?.join(",")}</p>
        <p className="sub-details">{info?.areaName}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
