import React from "react";
import { useSelector } from "react-redux";
function NavBar() {
    const storeMovie = useSelector(state => state.movies);
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand">
                Movies Count
                <span className="btn btn-warning btn-sm ml-2">
                    {storeMovie}
                </span>
            </span>
        </nav>
    );
}

export default NavBar;
