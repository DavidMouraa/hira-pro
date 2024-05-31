import "./style.css"
import { useEffect, useRef, useState } from "react"

const IdeogramCard = ({ideogram, romanji, sizeDivision, mouseDownStatus, selection, writingSystemKey, kanaKey, setKey, writingSystems, setWritingSystems}) => {
    const [canSelect, setCanSelect] = useState(true)

    const ideogramCardRef = useRef()

    const setClickAnimation = () => {
        const ideogramCard = ideogramCardRef.current

        ideogramCard.style.animation = "click-button .2s ease"
    }

    const removeClickAnimation = () => {
        const ideogramCard = ideogramCardRef.current

        ideogramCard.style.animation = ""
    }

    const setSelectionStatus = () => {
        setWritingSystems(oldWritingSystems => ({
            ...oldWritingSystems,
            [writingSystemKey]: {
                ...oldWritingSystems[writingSystemKey],
                [kanaKey]: {
                    ...oldWritingSystems[writingSystemKey][kanaKey], 
                    [setKey]: [
                        ...oldWritingSystems[writingSystemKey][kanaKey][setKey].map((item) => 
                            item.ideogram === ideogram ? {...item, selection: !item.selection} : item
                        )
                    ]
                }
            }
        }))
    }

    const handleSelection = (e) => {
        console.log(e.type)
        if (e.type === "mousedown" || mouseDownStatus) {
            setClickAnimation()
            setSelectionStatus()
        }
    }

    useEffect(() => {
        const ideogramCard = ideogramCardRef.current

        selection ? ideogramCard.classList.add("selected") : ideogramCard.classList.remove("selected")

        if (!ideogram && !romanji) ideogramCard.style.visibility = "hidden"
    }, [writingSystems])

    return (
        <div
        ref={ideogramCardRef}
        className="ideogram-card"
        style={{width: `calc(100% / ${sizeDivision} - 10px)`}}
        
        onMouseEnter={handleSelection}
        onMouseDown={handleSelection}
        onAnimationEnd={removeClickAnimation}>
            <p className="ideogram">{ideogram}</p>
            <p className="romanji">{romanji}</p>
        </div>
    )
}

export default IdeogramCard