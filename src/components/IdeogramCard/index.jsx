const IdeogramCard = ({ideogram, romanji}) => {
    return (
        <div>
            <p>{ideogram}</p>
            <p>{romanji}</p>
        </div>
    )
}

export default IdeogramCard