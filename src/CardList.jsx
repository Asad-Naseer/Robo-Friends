import React from "react";
import Card from './Card';

const CardList = ({robots}) => {
    if (robots.length === 0) {
        return <h1>No Robo Found</h1>
    } else {

    return(
    <div>
        {
        robots.map((user,i) => {
        return (
            <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            /> 
        )
    }) 
        }
    </div>
    )

    
}
}

export default CardList