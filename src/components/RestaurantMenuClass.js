import React from "react";
import { MENU_URL } from "../utils/constants";
import SearchBox from "./SearchBox";

class RestaurantMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicDetails: null,
      menuDetails: null,
      searchText: "",
    };
  }

  async componentDidMount() {
    console.log("Component Did mount");
    const data = await fetch(MENU_URL + 25620);
    const json = await data.json();
    console.log(json);
    const { info } = json?.data?.cards[0]?.card?.card;
    const { itemCards } =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    this.setState({
      basicDetails: info,
      menuDetails: itemCards,
    });
    this.timer = setInterval(() => {
      console.log("Hello Timer");
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update", prevState);
    if (this.state.searchText !== prevState.searchText) {
      const filterMenu = this.state.menuDetails.filter((res) =>
        res?.card?.info?.name
          ?.toLowerCase()
          .includes(this.state.searchText.toLowerCase())
      );
      this.setState({
        menuDetails: filterMenu,
      });
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
    clearInterval(this.timer);
  }

  render() {
    console.log("Rendering the class component");
    if (this.state.basicDetails == null) return <h2>Loading!!!!!!!</h2>;
    return (
      <div className="restaurant-details">
        <h1>{this.state.basicDetails?.name}</h1>
        <h2>
          {this.state.basicDetails?.areaName} -{" "}
          {this.state.basicDetails?.costForTwoMessage}
        </h2>
        <h2>{this.state.basicDetails?.totalRatingsString}</h2>
        <h3>Menu</h3>
        <SearchBox
          searchText={this.state.searchText}
          setSearchText={(res) =>
            this.setState({
              searchText: res,
            })
          }
        />
        <ul>
          {this.state.menuDetails?.map((items) => (
            <li key={items?.card?.info?.id}>{items?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RestaurantMenu;
