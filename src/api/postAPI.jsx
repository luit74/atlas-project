import axios from "axios"

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
});

// http get method

export const getcountryData = () =>{ 
    return api.get('/all?fields=name,population,region,capital,flags');
};

// http get method for the individual countries 

export const getSpecificCountryData = (name) =>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}
