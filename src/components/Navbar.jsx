import React from "react";
import Search from "./Search";

function Navbar() {
    return(
        <div className="note-app__header">
            <h1>Notes</h1>
            <Search />
        </div>
    )
}

export default Navbar