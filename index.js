let isLight = true;
const white = "#f5f5f5";
const black = "#222";
const iconBlack = "rgba(19,19,19,.5)";
const iconWhite = "rgba(230,230,230,.5)";
let iconColor = iconWhite;
let score = 0;
const scoreCard = document.getElementById("score");

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
        iconColor = iconWhite;
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


//fun stuff

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
    ["fa-brands", "fa-docker"],
];

const explosion = (posX, posY) => {
    let explosionDiv = document.createElement("div");
    Object.assign(explosionDiv.style, 
        {
            border: `1px solid ${iconColor}`,
            width: "1rem",
            height: "1rem",
            position: "absolute",
            left: `${posX}px`,
            top: `${posY}px`,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
        });
    document.querySelector("body").appendChild(explosionDiv);

    //animation
    const sizeIncrease = [
        { transform: "translate(-50%, -50%) scale(1)" },
        { transform: `translate(-50%, -50%) scale(3)`, offset: 0.5 },
        { transform: `translate(-50%, -50%) scale(4)`, opacity: 0 },
    ];
    const explosionTiming = {
            duration: 500,
            iterations: 1,
        };
    const explosionAnimation = explosionDiv.animate(sizeIncrease, explosionTiming);
    explosionAnimation.onfinish = () => {
        explosionDiv.remove();
    }
}

const spawnIcon = () => {

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
        // console.log(`X position: ${window.event.clientX}`);
        // console.log(`Y position: ${window.event.clientY + window.scrollY}`);
        explosion(window.event.clientX + window.scrollX, window.event.clientY + window.scrollY);
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

window.setInterval(() => {
    spawnIcon();
}, 7500);