import React from "react";
import Card from './Card';


const CardList = ({robots}) => {
       return(
        <div>
            {
                robots.map((users, i) => {
                  return  <Card 
                    key={robots[i].id}
                    phone={robots[i].phone}
                    id={robots[i].id}
                    name={robots[i].name}
                    username={robots[i].username}
                    email={robots[i].email}
                  /> 
                })
           
}
        </div>
    )
}

export default CardList;