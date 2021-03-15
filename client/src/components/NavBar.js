//Imports from react
import React from "react";
import { Link } from "react-router-dom";
//Nav-Bar Component Allows user to go from Home Page to All Entries Page(facts page)
export default function NavBar() {
  return (
    //   JSX HTML
    <div id="navBar-container">
      {/* Directs user to Home Page */}
      <Link id="nav-Bar-Links" to={"/"}>
        Home
      </Link>
      {/* Directs User to All Entries Page(facts page) */}
      <Link id="nav-Bar-Links" to={"/facts"}>
        All Entries
      </Link>
    </div>
  );
}
