import { language, fa, en, changeLangAction, toggleActiveButton, removeClassName } from "./utils";
import { menu, landing, aboutMe, skills, projects, contactMe, footer } from "./data";

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
    document.querySelector(".landing__right--info-card").innerHTML = landing[language()].infoCard;
    document.querySelector(".landing__right--title").innerHTML = landing[language()].title;
    document.querySelector(".landing__right--desc").innerHTML = landing[language()].desc;
    document.querySelector(".landing__right--go-to-skills").innerHTML = landing[language()].goToSkillsButton;
    document.querySelector(".landing__right--scroll-down-text").innerHTML = landing[language()].scrollDown;
};

const renderAboutMe = () => {
    const aboutMeRightSideElm = document.querySelector(".aboutMe__right");
    aboutMeRightSideElm.children.item(0).innerHTML = aboutMe[language()].title;
    aboutMeRightSideElm.children.item(1).innerHTML = aboutMe[language()].desc;
};

const renderSkills = () => {
    const skillsRightSide = document.querySelector(".skills__right_top_top");
    const skillsListElm = document.querySelector(".skills__both_bottom");
    skillsRightSide.children.item(0).innerHTML = skills[language()].title;
    skillsRightSide.children.item(1).innerHTML = skills[language()].desc;
    if (!Boolean(skillsListElm.innerHTML)) {
        const skillsItems = skills.skillsList.map(
            (item) =>
                `<p style="--package-color : ${item.color}" class="skills__right_top_top_package package_${
                    item.title
                }">${item.title.replaceAll("_", " ")}</p>`
        );
        skillsListElm.innerHTML = skillsItems.join(" ");
    }
};

const renderProjects = () => {
    const proejcetsTitleElm = document.querySelector(".projects__title");
    const projectWrapperElm = document.querySelector("#projectsWrapper");
    proejcetsTitleElm.innerHTML = projects[language()].title;
    const projectHtmlTemplate = [...projects[language()].projects].map(
        (project) => `
        <div class="projects__box">
            <div class="projects__box_wrapper_img">
                <img class="projects__box_img" src="/images/project.jpg" alt="" />
            </div>
            <h4 class="projects__box_title">${project.title}</h4>
            <p class="projects__box_desc">
                ${project.desc.slice(0, 55)}...
            </p>
            <div class="projects__box_wrapper_button">
                <button class="projects__box_button reverse">
                    <div class="projects__box_button_wrapper_text">
                        <p class="projects__box_button_text">${project.buttons.seeProject.text}</p>
                    </div>

                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="projects__box_button_svg view_svg fill"
                    >
                        <path
                            d="M20.7793 13.8746L21.3886 14.312L20.7793 13.8746ZM20.7793 10.1254L20.1701 10.5628L20.7793 10.1254ZM21.6631 12H20.9131H21.6631ZM3.22067 13.8746L3.82993 13.4372L3.22067 13.8746ZM3.22067 10.1254L2.61142 9.68801L3.22067 10.1254ZM2.33691 12H1.58691H2.33691ZM2.61142 14.312C3.47962 15.5214 4.77164 17.1105 6.35173 18.4043C7.92325 19.691 9.85905 20.75 12 20.75V19.25C10.3542 19.25 8.7491 18.4285 7.302 17.2437C5.86349 16.0659 4.6592 14.5923 3.82993 13.4372L2.61142 14.312ZM12 20.75C14.141 20.75 16.0768 19.691 17.6483 18.4043C19.2284 17.1105 20.5204 15.5214 21.3886 14.312L20.1701 13.4372C19.3408 14.5923 18.1365 16.0659 16.698 17.2437C15.2509 18.4285 13.6458 19.25 12 19.25V20.75ZM21.3886 9.68801C20.5204 8.47865 19.2284 6.88946 17.6483 5.59571C16.0768 4.30899 14.141 3.25 12 3.25V4.75C13.6458 4.75 15.2509 5.57146 16.698 6.75631C18.1365 7.93414 19.3408 9.40765 20.1701 10.5628L21.3886 9.68801ZM12 3.25C9.85905 3.25 7.92325 4.30899 6.35173 5.59572C4.77164 6.88946 3.47962 8.47865 2.61142 9.68801L3.82993 10.5628C4.6592 9.40765 5.86348 7.93414 7.302 6.75631C8.7491 5.57146 10.3542 4.75 12 4.75V3.25ZM21.3886 14.312C21.943 13.5398 22.4131 12.9286 22.4131 12H20.9131C20.9131 12.3585 20.794 12.5681 20.1701 13.4372L21.3886 14.312ZM20.1701 10.5628C20.794 11.4319 20.9131 11.6415 20.9131 12H22.4131C22.4131 11.0714 21.943 10.4602 21.3886 9.68801L20.1701 10.5628ZM3.82993 13.4372C3.20597 12.5681 3.08691 12.3585 3.08691 12H1.58691C1.58691 12.9286 2.05703 13.5398 2.61142 14.312L3.82993 13.4372ZM2.61142 9.68801C2.05703 10.4602 1.58691 11.0714 1.58691 12H3.08691C3.08691 11.6415 3.20597 11.4319 3.82993 10.5628L2.61142 9.68801ZM8.25001 12C8.25001 14.0711 9.92894 15.75 12 15.75V14.25C10.7574 14.25 9.75001 13.2426 9.75001 12H8.25001ZM12 15.75C14.0711 15.75 15.75 14.0711 15.75 12H14.25C14.25 13.2426 13.2426 14.25 12 14.25V15.75ZM15.75 12C15.75 9.92893 14.0711 8.25 12 8.25V9.75C13.2426 9.75 14.25 10.7574 14.25 12H15.75ZM12 8.25C9.92894 8.25 8.25001 9.92893 8.25001 12H9.75001C9.75001 10.7574 10.7574 9.75 12 9.75V8.25Z"
                        />
                    </svg>
                </button>
                <div>
                    <button class="projects__box_button">
                        <div class="projects__box_button_wrapper_text">
                            <span class="projects__box_button_text">${project.buttons.github.text}</span>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100"
                            height="100"
                            viewBox="0 0 24 24"
                            class="projects__box_button_svg github_svg"
                        >
                            <path
                                d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"
                            ></path>
                        </svg>
                    </button>
                    <button class="projects__box_button" onClick="showDetailProject('${
                        project.buttons.moreInfo.text
                    }')">
                        <div class="projects__box_button_wrapper_text">
                            <span class="projects__box_button_text">${project.buttons.moreInfo.title}</span>
                        </div>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="projects__box_button_svg"
                        >
                            <path
                                class="stroke"
                                d="M12 11V17M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            />
                            <path
                                class="fill"
                                d="M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `
    );
    projectWrapperElm.innerHTML = projectHtmlTemplate.join(" ");
};

const showDetailProject = (mainValue) => {
    const modalWrapper = document.querySelector("#modalWrapper");
    const isModalActive = modalWrapper.classList.contains("active");
    if (isModalActive) {
        modalWrapper.classList.remove("active");
    } else {
        modalWrapper.classList.add("active");
    }
    renderModalContent(mainValue);
};

const renderModalContent = (value) =>
    typeof value !== "undefined" ? (document.querySelector(".modal_box__modal_content").innerHTML = value) : null;

const renderContactMe = () => {
    const infoBox = document.querySelector(".contactMe__left__info_box");
    infoBox.children.item(0).innerHTML = contactMe[language()].infoBoxTitle;
    // info box list =>
    infoBox.children.item(1).innerHTML = contactMe.infoBox
        .map(
            (item) => `
        <li class="info_box__item">                
            ${item.svg}
            <span class="info_box_item__text">${item.text}</span>
        </li>`
        )
        .join(" ");

    // info social media list =>
    infoBox.children.item(2).innerHTML = contactMe.socialBox
        .map(
            (item) => `
        <li class="info_social__item">${item.svg}</li>
    `
        )
        .join(" ");

    document.querySelector(".contactMe__right .title").innerHTML = contactMe[language()].form.title;
    document.querySelector(".contactMe__right .contactMe__desc").innerHTML = contactMe[language()].form.desc;
    document.querySelector(".placeholder__name").innerHTML = contactMe[language()].form.inputs.name;
    document.querySelector(".placeholder__email").innerHTML = contactMe[language()].form.inputs.email;
    document.querySelector(".placeholder__message").innerHTML = contactMe[language()].form.inputs.message;
    document.querySelector(".contactMe__send_btn").innerHTML = contactMe[language()].form.sendButton;
};

const rednerFooter = () => (document.querySelector("#footer").innerHTML = `<p class="c">c</p>${footer[language()]}`);

const inputEventsHandler = () => {
    const boxInputs = document.querySelectorAll(".box_input");
    const activeAction = (elem) => elem.classList.add("active");
    const diActiveAction = (elem) => elem.classList.remove("active");

    boxInputs.forEach((boxInput) => {
        //& boxInput => firstChild is Label And seccend is Input
        const input = boxInput.children.item(1);
        const placeholderElm = boxInput.children.item(0);

        input.addEventListener("focus", () => activeAction(placeholderElm));
        input.addEventListener("blur", () => (!input.value.length ? diActiveAction(placeholderElm) : null));
    });
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
    renderAboutMe();
    renderSkills();
    renderProjects();
    renderContactMe();
    rednerFooter();
});

window.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    renderLanding();
    renderAboutMe();
    renderSkills();
    renderProjects();
    inputEventsHandler();
    renderContactMe();
    rednerFooter();
});

window.showDetailProject = showDetailProject;
