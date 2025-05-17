import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"

export const Headers = () => {

    const [showHamMenu , setShowHamMenu] = useState(false)

    const handleButtonToggle = () =>{
        return setShowHamMenu(!showHamMenu);
    }
    return (
        <>
            <header>
                <div className="container">
                    <div className="grid navbar-grid">
                        <div className="Logo">
                            <NavLink to={"/"} >
                                <h1>World Atlas</h1>
                            </NavLink>
                        </div>
                        <nav className={showHamMenu ? "menu-mobile" : "menu-web"} >
                            <ul>
                                <li>
                                    <NavLink to={"/"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"} >About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact"} >Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/country"} >Country</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="ham-menu">
                            <button onClick={handleButtonToggle} >
                                <GiHamburgerMenu />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}