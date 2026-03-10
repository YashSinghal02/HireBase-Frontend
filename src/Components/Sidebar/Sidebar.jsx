import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import "./Sidebar.css";
import { Navitems } from "./Navitems";
import { AuthContext } from "@/AuthContext/AuthContext";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const { role } = useContext(AuthContext);

  const visibleItems = Navitems.filter((tab) =>
    tab.allowedRoles?.includes(role)
  );

  return (
    <>
      <div className="sidebar-toggle" onClick={() => setOpen(!open)}>
        <button className="sidebar-btn">SideBar</button>
      </div>

      <div className={`sidebar ${open ? "active" : ""}`}>
        {visibleItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="sidebar-link"
            onClick={() => setOpen(false)}
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)} />
      )}
    </>
  );
}

export default Sidebar;