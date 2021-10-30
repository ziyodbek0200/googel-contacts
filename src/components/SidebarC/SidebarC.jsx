import React from "react";
import './SidebarC.css';
import { NavLink } from "react-router-dom";

function SidebarC() {
    return (
        <>
            <div className="sidebar-custom">
                <NavLink to="/add" exact>
                    <button className="add_btn m-3 ">
                        <i className="bi bi-plus-lg"></i>
                        New Contact
                    </button>
                </NavLink>
                <ul className="list-unstyled py-1">
                    <NavLink activeStyle={{ color: "#65a5ff" }} className="navLinkC" to="/" exact>
                        <li>
                            <i className="bi bi-person ms-3 me-2"></i>
                            <span>Contacts</span>
                        </li>
                    </NavLink>
                    <NavLink activeStyle={{ color: "#65a5ff" }} className="navLinkC" to="/history" exact>
                        <li>
                            <i className="bi bi-clock-history ms-3 me-2"></i>
                            <span>History</span>
                        </li>
                    </NavLink>
                    <NavLink activeStyle={{ color: "#65a5ff" }} className="navLinkC" to="/favourite" exact>
                        <li>
                            <i className="bi bi-bookmark ms-3 me-2"></i>
                            <span>Favourites</span>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
}

export default SidebarC;