const setClickAnimation = (element) => {
    element.style.animation = "click-button .2s ease"

    element.addEventListener("animationend", () => removeClickAnimation(element))
}

const removeClickAnimation = (element) => {
    element.style.animation = ""
}

export default setClickAnimation;