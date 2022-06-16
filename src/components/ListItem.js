import React from "react";

const ListItem = ({country}) => {

    return (
        <li>{country.name.common} {country.flag}
        <p>Capital City: {country.capital}</p>
        </li>
    )
}

export default ListItem;