import "./style.css"

const IdeogramCard = ({ideogram, romanji, sizeDivision}) => {
    return (
        <div
        className="ideogram-card"
        style={{width: `calc(100% / ${sizeDivision} - 10px)`}}>
            <p className="ideogram">{ideogram}</p>
            <p className="romanji">{romanji}</p>
        </div>
    )
}

export default IdeogramCard