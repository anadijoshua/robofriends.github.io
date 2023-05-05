import React from "react";

const Card = ({id, name, username, email, phone}) => {
    return(
        <div className="tc dib bg-light-green ma3 pa3 br3 grow shadow-5">
            <img src={`https://robohash.org/hello${id}`} alt="nothing to show here"/> 
            <div className="bg-light-purple ma3 br3 pa1">
                <h1>{name}</h1>
                <h1>{username}</h1>
                <h1>{email}</h1>
                <h1>{phone}</h1>
            </div>
        </div>
    )
    
}

export default Card;