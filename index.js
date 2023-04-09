let isLight = true;
const white = "#f5f5f5";
const black = "#222";
const iconBlack = "rgba(50,50,50,.5)";
const iconWhite = "rgba(230,230,230,.5)";
let score = 0;
const scoreCard = document.getElementById("score");
scoreCard.innerText = score;

const button = document.querySelector("button");
const iconButton = button.querySelector("i");
button.addEventListener("click", () => {
    if(isLight){
        document.querySelector(":root").style.setProperty('--black', white);
        document.querySelector(":root").style.setProperty('--white', black);
        iconButton.classList.add("fa-moon");
        iconButton.classList.remove("fa-sun");
        document.querySelector(":root").style.setProperty('--icon-color', iconBlack);
        iconColor = iconBlack;
        isLight = false;
    } else {
        document.querySelector(":root").style.setProperty('--black', black);
        document.querySelector(":root").style.setProperty('--white', white);
        iconButton.classList.add("fa-sun");
        iconButton.classList.remove("fa-moon");
        document.querySelector(":root").style.setProperty('--icon-color', iconWhite);
        isLight = true;
    }
});

//leeftijd in about me
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
document.getElementById("age").innerText = calculate_age(new Date(2001, 6, 8));

//smooth scroll

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

//fun stuff (programmingstuff animatie)

const updateScore = (amount) => {
    score += amount;
    scoreCard.innerText = score;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
 
const iconClassesList = [
    ["fa-brands","fa-js"],
    ["fa-brands", "fa-html5"],
    ["fa-brands", "fa-css3-alt"],
    ["fa-brands", "fa-python"],
    ["fa-brands", "fa-vuejs"],
    ["fa-brands", "fa-linkedin"],
    ["fa-brands", "fa-github"],
    ["fa-brands", "fa-java"],
    ["fa-brands", "fa-figma"],
    ["fa-brands", "fa-linux"],
    ["fa-brands", "fa-sass"],
];

const iconSpawnAnimation = () => {

    const randomStartY = getRandomArbitrary(window.scrollY, window.scrollY + window.innerHeight);
    const randomEndY = getRandomArbitrary(window.scrollY, window.scrollY + window.innerHeight);

    let iconHitbox = document.createElement("div");
    Object.assign(iconHitbox.style, 
        {
            //border: "1px solid blue",
            zIndex: "5",
            width: "6rem",
            height: "6rem",
            position: "absolute",
            left: "0",
            top: `${randomStartY}px`,
        });

    let icon = document.createElement("div");
    icon.classList.add("icon");
    Object.assign(icon.style, {top: `${randomStartY}px`});
    //pak een random fontawesome icon classesarray en voeg ze toe aan de div
    let iconClasses = iconClassesList[Math.floor(Math.random()*iconClassesList.length)];
    iconClasses.forEach(element => icon.classList.add(element));

    document.querySelector("main").appendChild(iconHitbox);
    document.querySelector("main").appendChild(icon);

    iconHitbox.addEventListener("click", () => {
        updateScore(1);
        iconHitbox.remove();
        icon.remove();
    });
    
    // console.log(`end = ${Math.ceil(randomEndY)}`);
    // console.log(`start = ${Math.ceil(randomStartY)}`);
    // console.log(`difference = ${Math.ceil(randomEndY - randomStartY)}`);

    //animation
    const iconSpinning = [
        { transform: "translate(-300px, 0) rotate(0)" },
        { transform: `translate(100vw, ${Math.ceil(randomEndY - randomStartY)}px) rotate(${getRandomArbitrary(180, 720)}deg)` },
    ];
    const iconTiming = {
            duration: 5000,
            iterations: 1,
        };
    const iconAnimation = iconHitbox.animate(iconSpinning, iconTiming);
    icon.animate(iconSpinning, iconTiming);
    //remove na animation
    iconAnimation.onfinish = () => {
        iconHitbox.remove();
        icon.remove();
    }
}

iconSpawnAnimation();
window.setInterval(() => {
    iconSpawnAnimation();
}, 7500);