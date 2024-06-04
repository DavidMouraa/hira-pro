import { useEffect, useRef } from "react"

import setClickAnimation from "../../js/functions"

import "./style.css"

const Nav = (props) => {
    const navRef = useRef()

    const setSelectedStyle = (array, item) => {
        Array.from(array).forEach(button => {
            button === item ? button.classList.add("selected") : button.classList.remove("selected")
        })
    }

    useEffect(() => {
        const navButtons = navRef.current.querySelectorAll("button")

        Array.from(navButtons).forEach((item, index) => {
                if (!index) item.classList.add("selected")

                item.addEventListener("click", () => {
                    setClickAnimation(item)
                    setSelectedStyle(navButtons, item)
                })
        })
    }, [])

    return (
        <nav ref={navRef} className="nav">
            <ul className="list">
                {props.children}
            </ul>
        </nav>
    )
}

export default Nav