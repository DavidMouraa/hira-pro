import IdeogramCard from "../IdeogramCard"

import "./style.css"

const WritingSystemsDisplay = ({writingSystems, seWritingSystems}) => {
    console.log(writingSystems.hiragana.basics.setA[0])

    return (
        <div className="writing-systems-display">
            {Object.keys(writingSystems).map((writingSystemKey) => (

                <div className="writing-system">
                    {Object.keys(writingSystems[writingSystemKey]).map((kanaKey) => (

                        <div className="kana">
                            {Object.keys(writingSystems[writingSystemKey][kanaKey]).map((setKey) => (

                                <div className="set">
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