import { IMAGE_CDN } from "../utils/constants";

const RestroCard = ({ restaurantDetails }) => {
  const { data } = restaurantDetails;
  return (
    <div className="restro-card">
      <img className="restro-image" src={IMAGE_CDN + data?.cloudinaryImageId} />
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

export default RestroCard;
