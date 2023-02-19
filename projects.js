const title = document.querySelector("h1");

animationText(title, "PROJECTEN").then(
    () => {
        document.querySelector(":root").style.setProperty('--width-title-underline', "100%");
        document.querySelector(":root").style.setProperty('--title-left', "0");
        document.querySelector("section").style.opacity = 1;
    });

const wgweReveal = document.getElementById("wgwe_reveal");
const sisReveal = document.getElementById("sis_reveal");
const eisenReveal = document.getElementById("eisen_reveal");

const wgweInfo = document.getElementById("info_wgwe");
const sisInfo = document.getElementById("info_sis");
const eisenInfo = document.getElementById("info_eisen");

const projectCards = document.querySelectorAll(".project_card");

eisenReveal.addEventListener("click", () => {
    eisenInfo.classList.remove("hidden");
    projectCards.forEach(projectCard => {
        projectCard.classList.add("hidden");
    })
})
wgweReveal.addEventListener("click", () => {
    wgweInfo.classList.remove("hidden");
    projectCards.forEach(projectCard => {
        projectCard.classList.add("hidden");
    })
})
sisReveal.addEventListener("click", () => {
    sisInfo.classList.remove("hidden");
    projectCards.forEach(projectCard => {
        projectCard.classList.add("hidden");
    })
})


const infoCards = document.querySelectorAll(".info_card");
const backButtons = document.querySelectorAll(".backButton");

backButtons.forEach(backButton => {
    backButton.addEventListener("click", () => {
        infoCards.forEach(infoCard => {
            infoCard.classList.add("hidden");
        })
        projectCards.forEach(projectCard => {
            projectCard.classList.remove("hidden");
        })
    })
})