import React from "react";
import ListItem from "./ListItem";

const FavouriteList = ({favourites}) => {

    const favouriteList = favourites.map((favourite, index) => {
        return <ListItem country={favourite} key={index} />
    })

    return (
        <div>
            <ul>
                {favouriteList}
            </ul>
        </div>
    )

}

export default FavouriteList;