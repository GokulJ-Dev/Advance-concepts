import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [status, setStatus] = useState("Login");
  const data = useContext(UserContext);
  console.log(" IN HEADER CONTEXT DATA IS", data);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo-image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>{data?.userDetails}</li>
          <li>
            {" "}
            <Link className="link-router-style" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-router-style" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link-router-style" to="/teams">
              Teams
            </Link>
          </li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="status-btn"
            onClick={() => {
              status === "Login" ? setStatus("Logout") : setStatus("Login");
            }}
          >
            {status}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
