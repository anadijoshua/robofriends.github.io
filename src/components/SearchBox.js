import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div>
            <input 
            className="pa3 bg-light-green ma3"
             type="search"
             placeholder="Enter Robots"
             onChange={searchChange}
             />
        </div>
    )
}


export default SearchBox;