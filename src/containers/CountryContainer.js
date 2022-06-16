import React, {useState, useEffect} from "react";
import CountrySelect from '../components/CountrySelect'
import CountryDetail from '../components/CountryDetail'
import FavouriteList from '../components/FavouriteList'
import ListItem from "../components/ListItem";

const CountryContainer = () => {

    const[countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favouriteList, setFavouriteList] = useState([]);

    useEffect(() => {
    getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelected = function(country){
        setSelectedCountry(country);
    }

    const saveNewFavourite = function(){
        const copyFavourites =[... favouriteList]
        copyFavourites.push(selectedCountry)
        setFavouriteList(copyFavourites);

    }

    return (
        <>
        <div className="main-container">
            <CountrySelect countries={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} saveNewFavourite={saveNewFavourite} /> : null}
        </div>
        <hr></hr>
        <div>
            <FavouriteList favourites={favouriteList}/>
        </div>
        </>
    )
};

export default CountryContainer;