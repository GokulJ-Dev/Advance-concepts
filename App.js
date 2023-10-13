import React, { useState } from "react";
import ReactDOM from "react-dom/client";

/* 
<div id="parent">
  <div id="children">
    <h1> Hello </h1>
    <h2> Gokul </h2>
  </div>
</div>
*/

const headingReact = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "Hello!"),
    React.createElement("h2", {}, "Gokul"),
  ])
);

const Title = () => <h3 id="title-text">Welcome to namaste react repo</h3>;

// Create a header component which have title component inside it

const Header = () => {
  let name = "Gokul";
  return (
    <div>
      <h1>Hello {name}</h1>
      {/* Component composition */}
      <Title />
    </div>
  );
};

// Create header with logo, input, user icon

const SearchBox = () => {
  const [name, setName] = useState("");
  return (
    <input
      type="text"
      className="search"
      name="Search"
      placeholder="Search"
      value={name}
      onChange={(event) => {
        console.log(event.target.value);
        setName(event.target.value);
      }}
    />
  );
};

const AdvanceHeader = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="http://www.shadowsphotography.co/wp-content/uploads/2017/12/photography-01-800x400.jpg"
      />
      {/* Component composition */}
      <SearchBox />
      {10 + 20}
    </div>
  );
};

const rootReact = ReactDOM.createRoot(document.getElementById("root"));

rootReact.render(<AdvanceHeader />);
