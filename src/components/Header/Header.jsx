import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="w-screen h-34 bg-blue-600">
      <div className="navigation-options">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            `${isActive ? "text-white" : "text-orange-700"}`;
          }}>
          Home
        </NavLink>

        <NavLink
          to={"/about"}
          className={({ isActive }) => {
            `${isActive ? "text-white" : "text-orange-700"}`;
          }}>
          About
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => {
            `${isActive ? "text-white" : "text-orange-700"}`;
          }}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderComponent;
