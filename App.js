import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

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
