import { useEffect, useState, useTransition } from "react"
import { getcountryData } from "../api/postAPI";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/layouts/CountryCard";
import { SearchField } from "../components/UI/SearchField";

export const Country = () =>{

    const [isPending , startTransition] =useTransition();
    const [countries , setCountries] = useState([])
    const [search , setSearch] = useState();
    const [filter , setFilter] = useState("all")




    useEffect(()=>{
        startTransition(async()=>{
            const res = await getcountryData();
            setCountries(res.data)

        })
    }, [])

    if(isPending) return <Loader />

    console.log(search , filter);

    const searchCountry = (country)=>{
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase())
        }
        return country;
    }

    const filterRegion = (country)=>{
        if(filter === "all") return country;
        return country.region === filter;
    }

   const filterCountries =  countries.filter((country) => searchCountry(country) && filterRegion(country))

    return <section className="country-section">

        <SearchField 
            search={search} 
            setSearch={setSearch} 
            filter={filter} 
            setFilter={setFilter} 
            countries={countries}
            setCountries={setCountries}
            />

        <ul className="grid grid-four-cols">
            {
                filterCountries.map((curCountry , index)=>{
                    // console.log(curCountry , index)
                    return <CountryCard country={curCountry} key={index}/>
                })
            }
        </ul>
    </section>
}

