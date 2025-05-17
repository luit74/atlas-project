import { useState } from "react"
import conuntryFacts from "../api/countryData.json"


export const About = () => {

    const handleClick = (curId) =>{
        console.log(curId)
    }


    return <>
        <section className="section-about container" >
            <h2 className="container-title">
                Here are the interesting Facts
                <br />
                we're proud of
            </h2>
            <div className="gradient-cards">

                {
                    conuntryFacts.map(({countryName , capital , interestingFact , population , id}) => {
                        // console.log(country)
                        return (
                            <>
                                <div className="card" key={id} onClick={()=>handleClick(id)}>
                                    <div className="container-card bg-blue-box">
                                        <p className="card-title">{countryName}</p> 
                                        <p>
                                            <span className="card-description">Capital:</span>
                                            {capital}
                                        </p>
                                        <p>
                                            <span className="card-description">Population:</span>
                                            {population}
                                        </p>
                                        <p>
                                            <span className="card-description">Intrestig Facts:</span>
                                            {interestingFact}
                                        </p>

                                    </div>
                                </div>

                            </>
                        )

                    })

                }

            </div>
        </section>
    </>
}

