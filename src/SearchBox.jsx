import React from "react";
import './SearchBox.css'

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input
            className="ba pa3 b--green bg-lightest-blue search-input"
            type="search"
            placeholder="Search Robot"
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox