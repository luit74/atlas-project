import { NavLink } from "react-router-dom"

export const CountryCard = ({ country }) => {
    const { capital, flags, name, region, population } = country
    // console.log(country);
    return (
        <>
            <li className="country-card card">
                <div className="container-card bg-white-box">
                    <img src={flags.png} alt={flags.alt} />
                    <div className="countryInfo">
                        <p className="card-title" >{name.common.length > 10 ? name.common.slice(0,13) + "...": name.common}</p>
                        <p>
                            <span className="card-description">Capital: </span>
                            {capital}
                        </p>
                        <p>
                            <span className="card-description">Population: </span>
                            {population.toLocaleString()}
                        </p>
                        <p>
                            <span className="card-description">Region: </span>
                            {region}
                        </p>

                        <NavLink to={`/country/${name.common}`} >
                        <button>read more</button>
                        </NavLink>
                        
                    </div>
                </div>
            </li>
        </>
    )
}