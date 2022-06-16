import React from "react";

const CountryDetail = ({selectedCountry, saveNewFavourite}) => {
    
    
    return (

        <div>
            <h3>{selectedCountry.name.common} {selectedCountry.flag}</h3>
            <p>Population: {selectedCountry.population}</p>
            <p>Capital City: {selectedCountry.capital}</p>
            {/* <p value={selectedCountry.borders.index}>Bordering Countries: {selectedCountry.borders}</p> */}
        <div>
            <input type='submit' value='Add to Favourites' onClick={saveNewFavourite} />
        </div>
        
        </div>
    )
}

export default CountryDetail;