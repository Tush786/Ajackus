import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";

import { SidebarData } from "./Sidebardata";

import "./Sidebar.css";
import Profile from "../Component/Profile";

function SideBarS() {
  const [sidebar, setSidebar] = useState(true); //false likhana true ki jagah if you want to show hamburger
  const showSidebar = () => setSidebar(sidebar); //! add karna hai

  return (
    <>
      <IconContext.Provider value={{ color: "red" }}>
        <div className="navbar sticky top-0 z-40">
          <Link to="#" className="menu-bars" onClick={showSidebar}>
            <FaBars />
          </Link>

          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  {/* <FaTimes /> */}
                </Link>
              </li>

              {SidebarData.map(({ cName, icon, path, title }, index) => {
                return (
                  <li key={index} className={cName}>
                    <Link to={path}>
                      {icon}
                      <span>{title}</span>
                    </Link>
                  </li>
                );
              })}
             
              <Profile/>
            </ul>
          </nav>

         
        </div>
      </IconContext.Provider>
    </>
  );
}

export default SideBarS;
