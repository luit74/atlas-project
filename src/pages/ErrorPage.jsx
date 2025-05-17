import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () =>{
    const error = useRouteError();
    console.log(error)
    return (
        <>
            <h1>{error.error.message}</h1>
            <h1>Status is : {error.status}</h1>
            <NavLink style={{color: "white"}} to={"/"} ><button>Go Home</button></NavLink>
        </>
    )
}