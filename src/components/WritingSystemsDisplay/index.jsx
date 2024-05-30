import IdeogramCard from "../IdeogramCard"

import "./style.css"

const WritingSystemsDisplay = ({writingSystems, setWritingSystems}) => {
    

    return (
        <div className="writing-systems-display">
            {Object.keys(writingSystems).map((writingSystemKey, writingSystemIndex) => (

                <div 
                key={`${writingSystemIndex}`}
                className="writing-system">
                    {Object.keys(writingSystems[writingSystemKey]).map((kanaKey, kanaIndex) => (

                        <div 
                        key={`${writingSystemIndex}${kanaIndex}`}
                        className="kana">
                            {Object.keys(writingSystems[writingSystemKey][kanaKey]).map((setKey, setIndex) => (

                                <div 
                                key={`${writingSystemIndex}${kanaIndex}${setIndex}`}
                                className="set">
                                    {writingSystems[writingSystemKey][kanaKey][setKey].map((item, itemIndex) => (

                                        <IdeogramCard
                                        key={`${writingSystemIndex}${kanaIndex}${setIndex}${itemIndex}`}
                                        ideogram={item.ideogram}
                                        romanji={item.romanji}
                                        sizeDivision={writingSystems[writingSystemKey][kanaKey][setKey].length}
                                        selection={item.selection}
                                        writingSystemKey={writingSystemKey}
                                        kanaKey={kanaKey}
                                        setKey={setKey}
                                        writingSystems={writingSystems}
                                        setWritingSystems={setWritingSystems} />

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