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
            console.log("menu[language()]", menu[language()]);
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
    const landingInfoCard = document.querySelector(".landing__right--info-card");
    const landingTitle = document.querySelector(".landing__right--title");
    const landingDesc = document.querySelector(".landing__right--desc");
    const goSkillsButton = document.querySelector(".landing__right--go-to-skills");
    const scrollDownText = document.querySelector(".landing__right--scroll-down-text");

    landingInfoCard.innerHTML = landing[language()].infoCard;
    landingTitle.innerHTML = landing[language()].title;
    landingDesc.innerHTML = landing[language()].desc;
    goSkillsButton.innerHTML = landing[language()].goToSkillsButton;
    scrollDownText.innerHTML = landing[language()].scrollDown;
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
