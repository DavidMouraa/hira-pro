import { useEffect, useRef, useState } from "react"

import setClickAnimation from "../../js/functions"

import "./style.css"

const Nav = () => {
    const [navPath, setNavPath] = useState(['hiragana', 'basics'])

    const navRef = useRef()

    const setWritingSystemsScroll = () => {
        const writingSystemsDisplay = document.querySelector(".writing-systems-display")
        const target = document.querySelector(`#${navPath[0]} .${navPath[1]}`)

        console.log(navPath)
        
        writingSystemsDisplay.scrollLeft = target.offsetLeft
    }

    const setSelectedStyle = () => {
        const lists = Array.from(navRef.current.querySelectorAll("ul"))

        lists.forEach((list, index) => {
            const buttons = Array.from(list.querySelectorAll("button"))

            buttons.forEach((button) => {
                button.value === navPath[index] ?
                button.classList.add("selected") :
                button.classList.remove("selected")
            })
        })
    }

    const updateNavRef = (item) => {
        const lists = Array.from(navRef.current.querySelectorAll("ul"))
        let pathPos = 0
        let newNavPath = [...navPath]

        lists.forEach((list, listIndex) => {
            if (list.contains(item)) pathPos = listIndex
        })

        newNavPath[pathPos] = item.value
        
        setNavPath(newNavPath)
    }

    const handleClick = (e) => {
        const {target} = e
        
        setClickAnimation(target)
        updateNavRef(target)
    }

    useEffect(() => {
        const navButtons = navRef.current.querySelectorAll("button")

        setSelectedStyle()
        setWritingSystemsScroll()

        window.addEventListener("resize", setWritingSystemsScroll)

        Array.from(navButtons).forEach((item) => {
            item.addEventListener("click", handleClick)
        })

        return () => {
            window.removeEventListener("resize", setWritingSystemsScroll)
            
            Array.from(navButtons).forEach((item) => {
                item.removeEventListener("click", handleClick)
            })
        }
    }, [navPath])

    useEffect(() => {
        
    }, [])

    return (
        <nav ref={navRef} className="nav">
            <ul>
                <li><button className="button" value="hiragana">Hiragana</button></li>
                <li><button className="button" value="katakana">Katakana</button></li>
            </ul>
            <ul>
                <li><button className="button" value="basics">Basicos</button></li>
                <li><button className="button" value="variants">Variantes</button></li>
                <li><button className="button" value="combinations">Combinação</button></li>
            </ul>
        </nav>
    )
}

export default Nav