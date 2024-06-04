import { useEffect, useRef } from "react"

import setClickAnimation from "../../js/functions"

import "./style.css"

const Nav = (props) => {
    const navRef = useRef()

    const setWritingSystemsScroll = (item) => {
        const writingSystemsDisplay = document.querySelector(".writing-systems-display")
        const target = document.getElementById(item.value)
        
        writingSystemsDisplay.scrollLeft = target.offsetLeft
    }

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
                    setWritingSystemsScroll(item)
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