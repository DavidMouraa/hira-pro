import { useRef } from "react"
import "./style.css"
import { useEffect } from "react"

const IdeogramCard = ({ideogram, romanji, sizeDivision, selection}) => {
    const ideogramCardRef = useRef()

    const setClickAnimation = () => {
        const ideogramCard = ideogramCardRef.current

        ideogramCard.style.animation = "click-button .3s ease"
    }

    const removeClickAnimation = () => {
        const ideogramCard = ideogramCardRef.current

        ideogramCard.style.animation = ""
    }

    const handleClick = () => {
        setClickAnimation()
    }

    useEffect(() => {
        const ideogramCard = ideogramCardRef.current

        selection ? ideogramCard.classList.add("selected") : ideogramCard.classList.remove("selected")

        if (!ideogram && !romanji) ideogramCard.style.visibility = "hidden"
    }, [])

    return (
        <div
        ref={ideogramCardRef}
        className="ideogram-card"
        style={{width: `calc(100% / ${sizeDivision} - 10px)`}}
        onClick={handleClick}
        onAnimationEnd={removeClickAnimation}>
            <p className="ideogram">{ideogram}</p>
            <p className="romanji">{romanji}</p>
        </div>
    )
}

export default IdeogramCard