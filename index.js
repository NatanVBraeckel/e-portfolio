let isLight = true;
const white = "#f5f5f5";
const black = "#222";
const iconBlack = "rgba(19,19,19,.5)";
const iconWhite = "rgba(230,230,230,.5)";

/* document.getElementById("randomKleur").addEventListener("click", () => {
    document.querySelector(":root").style.setProperty('--dark-black', `#${Math.floor(Math.random()*16777215).toString(16)}`);
}) */

//const lightSwitch = document.getElementById("light-switch");
//const iconButton = lightSwitch.querySelector("i");
/* lightSwitch.addEventListener("click", () => {
    if(isLight){
        document.querySelector(":root").style.setProperty('--black', white);
        document.querySelector(":root").style.setProperty('--white', black);
        document.querySelector(":root").style.setProperty('--gray', "#111");
        iconButton.classList.add("fa-moon");
        iconButton.classList.remove("fa-sun");
        document.querySelector(":root").style.setProperty('--icon-color', iconBlack);
        iconColor = iconBlack;
        isLight = false;
    } else {
        document.querySelector(":root").style.setProperty('--black', black);
        document.querySelector(":root").style.setProperty('--white', white);
        document.querySelector(":root").style.setProperty('--gray', "#eaeaea");

        iconButton.classList.add("fa-sun");
        iconButton.classList.remove("fa-moon");
        document.querySelector(":root").style.setProperty('--icon-color', iconWhite);
        iconColor = iconWhite;
        isLight = true;
    }
}); */

//leeftijd in about me
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
document.getElementById("age").innerText = calculate_age(new Date(2001, 6, 8));


//smooth scroll

//document.querySelectorAll("a[href^='#']")
const anchorTop = document.querySelector("a[href='#']");
const IdAnchors = ["about_me", "projecten"];

anchorTop.addEventListener("click", function(e){
    e.preventDefault();
    window.scroll({top: 0, behavior: "smooth"})
});

IdAnchors.forEach(id => {
    document.querySelectorAll(`a[href='#${id}']`).forEach(anchor => {
        anchor.addEventListener("click", function(e){
            let blockOption = "center";
            if(window.innerHeight < document.getElementById(id).clientHeight){
                document.getElementById(`${id}`).classList.add("scroll-margin-top");
                blockOption = "start";
            }
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior : "smooth",
                block: blockOption,
            });
            document.getElementById(`${id}`).classList.remove("scroll-margin-top");
        });
    });
});
