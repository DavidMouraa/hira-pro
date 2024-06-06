import { useEffect, useState } from "react"
import IdeogramCard from "../IdeogramCard"

import "./style.css"

const WritingSystemsDisplay = ({writingSystems, setWritingSystems}) => {
    const [mouseDownStatus, setMouseDownStatus] = useState(false)

    useEffect(() => {
        document.addEventListener("mousedown", () => setMouseDownStatus(true))
        document.addEventListener("mouseup", () => setMouseDownStatus(false))
    }, [])

    return (
        <div className="writing-systems-display">
            {Object.keys(writingSystems).map((writingSystemKey, writingSystemIndex) => (

                <div 
                key={`${writingSystemIndex}`}
                id={writingSystemKey}
                className="writing-system">
                    {Object.keys(writingSystems[writingSystemKey]).map((kanaKey, kanaIndex) => (

                        <div 
                        key={`${writingSystemIndex}${kanaIndex}`}
                        className={`kana ${kanaKey}`}>
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
                                        mouseDownStatus={mouseDownStatus}
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