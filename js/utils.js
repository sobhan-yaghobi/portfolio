// ELEMENTS
export const htmlDoc = () => document.querySelector("html");

// VARIABLE
export const theme = () => htmlDoc().dataset.theme; //% Light Or Dark // Def : Light
export const language = () => htmlDoc().dataset.lang; //% Fa Or En // Def : En

export const fa = "fa";
export const en = "en";
export const dark = "dark";
export const light = "light";

// FUNCTIONS
export const changeThemeAction = (mode) => {
    if (typeof mode !== "undefined") {
        htmlDoc().setAttribute("data-theme", mode === dark ? dark : light);
    } else {
        htmlDoc().setAttribute("data-theme", theme() === light ? dark : light);
    }
};

export const changeLangAction = (lang) => {
    if (typeof lang !== "undefined") {
        htmlDoc().setAttribute("data-lang", lang === fa ? fa : en);
    } else {
        htmlDoc().setAttribute("data-lang", language() === en ? fa : en);
    }
};

export const toggleActiveButton = (elemName) => {
    const mainElem = document.querySelector(elemName);
    console.log("mainElem", mainElem);
    if (typeof mainElem !== "undefined") {
        mainElem.addEventListener("click", () => {
            console.log("click");
            mainElem.classList.contains("active")
                ? mainElem.classList.remove("active")
                : mainElem.classList.add("active");
        });
    }
};
