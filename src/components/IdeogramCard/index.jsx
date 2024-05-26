import "./style.css"

const IdeogramCard = ({ideogram, romanji, sizeDivision}) => {
    const removeClickAnimation = () => {
        const ideogramCard = document.querySelector('.ideogram-card')

        ideogramCard.style.animation = ""
    }

    const setClickAnimation = () => {
        const ideogramCard = document.querySelector('.ideogram-card')

        ideogramCard.style.animation = "click-button .3s ease"
    }

    const handleClick = () => {
        setClickAnimation()
    }

    return (
        <div
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