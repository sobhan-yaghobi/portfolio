import {
    changeThemeAction,
    language,
    theme,
    fa,
    en,
    dark,
    light,
    changeLangAction,
    toggleActiveButton,
    removeClassName,
} from "./utils";
import { menu, landing } from "./data";
const languageList = document.querySelector(".menu-quick_access__language__list");

const renderMenu = () => {
    const menuLists = document.querySelectorAll(".menu-list");
    const contactMeButton = document.querySelector("button.menu-quick_access__contact_me");
    menuLists.forEach((menuList) => {
        if (!menuList.classList.contains("mobile")) {
            const items =
                typeof menu[language()] !== "undefined"
                    ? menu[language()].menu.map(
                          (item) => `<li class="menu-list__item">
                                        <a class="menu-list__item_link" href="#${item.href}">
                                            <span class="menu-list__item_text">${item.label}</span>
                                            ${item.icon}
                                        </a>
                                     </li>`
                      )
                    : [];
            menuList.innerHTML = items.join(" ");
        }
    });
    contactMeButton.innerHTML = `${menu[language()].quickAccess.contactMe} ${menu[language()].quickAccess.icon}`;
};

const renderLanding = () => {
    const landingElm = document.querySelector("#landing");
    language() === fa
        ? landingElm.classList.add("flip-horizental__active")
        : landingElm.classList.remove("flip-horizental__active");

    document.querySelector(".landing__right--info-card").innerHTML = landing[language()].infoCard;
    document.querySelector(".landing__right--title").innerHTML = landing[language()].title;
    document.querySelector(".landing__right--desc").innerHTML = landing[language()].desc;
    document.querySelector(".landing__right--go-to-skills").innerHTML = landing[language()].goToSkillsButton;
    document.querySelector(".landing__right--scroll-down-text").innerHTML = landing[language()].scrollDown;
};

//% --- Events

toggleActiveButton("#toggle-menu-mobile");
toggleActiveButton(".menu-quick_access__language_button");
languageList.addEventListener("click", (e) => {
    e.target.dataset.type === fa || e.target.dataset.type === en
        ? changeLangAction(e.target.dataset.type)
        : changeLangAction("en");
    renderMenu();
    renderLanding();
});

window.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    renderLanding();
});
