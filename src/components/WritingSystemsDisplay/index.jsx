import IdeogramCard from "../IdeogramCard"

const WritingSystemsDisplay = ({writingSystems, seWritingSystems}) => {
    console.log(writingSystems.hiragana.basics.setA[0])

    return (
        <div>
            {Object.keys(writingSystems).map((writingSystemKey) => (

                <div>
                    {Object.keys(writingSystems[writingSystemKey]).map((kanaKey) => (

                        <div>
                            {Object.keys(writingSystems[writingSystemKey][kanaKey]).map((setKey) => (

                                <div>
                                    {writingSystems[writingSystemKey][kanaKey][setKey].map((item) => (

                                        <IdeogramCard
                                        ideogram={item.ideogram}
                                        romanji={item.romanji}
                                        sizeDivision={writingSystems[writingSystemKey][kanaKey][setKey].length} />

                                    ))}
                                </div>

                            ))}
                        </div>

                    ))}
                </div>

            ))}
        </div>
    )
}

export default WritingSystemsDisplay