import React from "react";

const CountrySelect = ({countries, onCountrySelected}) => {

    const handleChange = function(event) {
        const chosenCountry = countries[event.target.value];
        const chosenIndex = event.target.value;
        onCountrySelected(chosenCountry);
    }

    const countryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name.common}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option selected disabled value="">Choose a country</option>
            {countryOptions}
            {/* add fave button */}
        </select>
    )
}

export default CountrySelect;