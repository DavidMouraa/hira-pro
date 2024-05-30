import { useRef } from "react"
import "./style.css"

const IdeogramCard = ({ideogram, romanji, sizeDivision}) => {
    const ideogramCardRef = useRef()

    const removeClickAnimation = () => {
        const ideogramCard = ideogramCardRef.current

        ideogramCard.style.animation = ""
    }

    const setClickAnimation = () => {
        const ideogramCard = ideogramCardRef.current

        ideogramCard.style.animation = "click-button .3s ease"
    }

    const handleClick = () => {
        setClickAnimation()
    }

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