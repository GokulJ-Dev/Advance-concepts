// Hello World from React!!  in h1

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
    React.createElement("h1", {}, "Hello!!"),
    React.createElement("h2", {}, "Gokul"),
  ])
);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));

rootReact.render(headingReact);
