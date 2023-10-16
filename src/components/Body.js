import RestroCard from "./RestroCard";
import { restaurantsInPerundurai } from "../utils/mockData";

let listOfRestaurants = [
  {
    data: {
      id: "672903",
      name: "Meat and Eat",
      cloudinaryImageId: "37775660fa8fad36a34f0c9e6c69a8cc",
      locality: "New dsp office",
      areaName: "Perundurai",
      costForTwo: "₹300 for two",
      cuisines: ["Fast Food", "Burgers", "Biryani", "Snacks", "Beverages"],
      avgRating: 4.5,
      feeDetails: {
        restaurantId: "672903",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "632",
      avgRatingString: "3.5",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-04-18 19:00:00",
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹40 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=672903",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "689384",
      name: "Paradise Family Restaurant (Halal)",
      cloudinaryImageId: "6273c10c1a21352a24debe20280a115b",
      locality: "Sunday market",
      areaName: "Perundurai",
      costForTwo: "₹300 for two",
      cuisines: ["Indian"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "689384",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "410017",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-04-18 22:30:00",
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=689384",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    data: {
      id: "176637",
      name: "Hotel Royal Chettinad",
      cloudinaryImageId: "hwu5iogpipjvaiyeuw5i",
      locality: "Erode Mani Road",
      areaName: "Perundurai",
      costForTwo: "₹200 for two",
      cuisines: [
        "South Indian",
        "Biryani",
        "Chettinad",
        "Chinese",
        "Seafood",
        "Tandoor",
        "Grill",
      ],
      avgRating: 3.1,
      feeDetails: {
        restaurantId: "176637",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 900,
      },
      parentId: "101608",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-04-18 22:00:00",
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=176637",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <h2>Search Box Will come here</h2>
      <button
        className="top-rated-btn"
        onClick={() => {
          listOfRestaurants = listOfRestaurants.filter(
            (res) => res?.data?.avgRating > 4
          );
          console.log(listOfRestaurants);
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
