// ELEMENTS
export const htmlDoc = () => document.querySelector("html");

// VARIABLE
export const language = () => htmlDoc().dataset.lang; //% Fa Or En // Def : En
export const en = "en";
export const fa = "fa";
export const danaFont = "dana";
export const LufgaFont = "Lufga";
export let menu = {};
export let landing = {};
export let aboutMe = {};
export let skills = {};
export let projects = {};
export let contactMe = {};
export let footer = {};
export const apikey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzcnplZHV2c2NzaGlvaHZ5enZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDc5ODcsImV4cCI6MjAxNTc4Mzk4N30.HxDGVKH1-57Fi1TyZ2di5MuvEHWT4DR6CtvvN1y9ADE";
export const Authorization =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzcnplZHV2c2NzaGlvaHZ5enZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDc5ODcsImV4cCI6MjAxNTc4Mzk4N30.HxDGVKH1-57Fi1TyZ2di5MuvEHWT4DR6CtvvN1y9ADE";

// FUNCTIONS

export const changeLangAction = (lang) => {
    const body = document.body;
    const languageText = document.querySelector(".menu-quick_access__language__text");
    const updataLangInDom = (lang) => {
        languageText.innerHTML = lang;
        removeClassName(".menu-quick_access__language_button", "active");
    };
    if (typeof lang !== "undefined") {
        htmlDoc().setAttribute("data-lang", lang === fa ? fa : en);
        htmlDoc().setAttribute("data-font", lang === fa ? danaFont : LufgaFont);
        updataLangInDom(lang === fa ? fa : en);
    } else {
        htmlDoc().setAttribute("data-font", language() === en ? danaFont : LufgaFont);
        updataLangInDom(language() === en ? fa : en);
    }
    language() === fa
        ? body.classList.add("flip-horizental__active")
        : body.classList.remove("flip-horizental__active");
};

export const toggleActiveButton = (elemName) => {
    const mainElem = document.querySelector(elemName);
    if (typeof mainElem !== "undefined") {
        mainElem.addEventListener("click", () => {
            console.log("click");
            mainElem.classList.contains("active")
                ? mainElem.classList.remove("active")
                : mainElem.classList.add("active");
        });
    }
};

export const removeClassName = (elemName, className) => document.querySelector(elemName).classList.remove(className);

export const getData = async () => {
    await fetch("https://zsrzeduvscshiohvyzva.supabase.co/rest/v1/sections?select=*", {
        method: "GET",
        headers: {
            apikey,
            Authorization,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log("data", data);
            menu = { ...data[0].menu };
            landing = { ...data[0].landing };
            aboutMe = { ...data[0].aboutMe };
            skills = { ...data[0].skills };
            projects = { ...data[0].projects };
            contactMe = { ...data[0].contactMe };
            footer = { ...data[0].footer };
        });
};
