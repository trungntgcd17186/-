import React from "react";
import { useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./style.css";

function Sidebar(props) {
  const navigate = useNavigate();
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                navigate(val.link);
              }}
            >
              <div className="tab-container">
                <div className="icon">{val.icon}</div>
                <div className="sidebar-text">{val.title}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
