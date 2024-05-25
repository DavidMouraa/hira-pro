const IdeogramCard = ({ideogram, romanji, sizeDivision}) => {
    return (
        <div
        style={{width: `calc(100% / ${sizeDivision} - 10px)`}}>
            <p>{ideogram}</p>
            <p>{romanji}</p>
        </div>
    )
}

export default IdeogramCard