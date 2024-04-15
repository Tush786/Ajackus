import React from "react";

import { FaHome, FaCartPlus, FaEnvelopeOpenText } from "react-icons/fa";
import { MdSend, MdPeople, MdHelp } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { FcServices } from "react-icons/fc";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
    cName: "nav-text"
  },
  {
    title: "User Dashboard",
    path: "/User-Dashboard",
    icon: <BiSolidDashboard />,
    cName: "nav-text"
  },
  {
    title: "Services",
    path: "/Services",
    icon: <FcServices />,
    cName: "nav-text"
  },
  {
    title: "About",
    path: "/team",
    icon: <FcAbout />,
    cName: "nav-text"
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  {
    title: "Support",
    path: "/support",
    icon: <MdHelp />,
    cName: "nav-text"
  }
];
