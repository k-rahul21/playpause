import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

const SidebarData = [
  { title: "Home", path: "/", icon: <FaIcons.FaHome />, cName: "nav-text" },
  {
    title: "Liked",
    path: "/liked",
    icon: <BsIcons.BsFillSuitHeartFill />,
    cName: "nav-text",
  },
  {
    title: "Watch Later",
    path: "/watchlater",
    icon: <MdIcons.MdWatchLater />,
    cName: "nav-text",
  },
  {
    title: "History",
    path: "/history",
    icon: <FaIcons.FaHistory />,
    cName: "nav-text",
  },
];

export { SidebarData };
