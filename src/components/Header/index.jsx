import { IoIosArrowDown } from "react-icons/io";

import "./style.css"

import Nav from "../Nav";

const navController = () => {
    const navWrap = document.querySelector(".nav-wrap")

    navWrap.classList.toggle("close")
}

const Header = () => {
    return (
        <header className="header">
            <div className="nav-wrap close">
                <Nav />
                <button 
                className="controller"
                onClick={navController}>
                    <IoIosArrowDown />
                </button>
            </div>
        </header>
    )
}

export default Header;