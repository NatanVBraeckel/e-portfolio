
const timer = ms => new Promise(res => setTimeout(res, ms));

const animationText = async function (element, result, minSpeed = 50, maxSpeed = 125) {
    let current = "";
    for (let i = 0; i < result.length; i++) {
        //de huidige tekst de eerste/volgende char van de gewenste string geven
        current += result[i];
        element.innerHTML = current;
        //een delay kiezen tussen minSpeed en maxSpeed ms en zolang wachten (voor een minder robotische animatie)
        const delay = Math.random() * maxSpeed + minSpeed;
        await timer(delay);
    }
    return Promise.resolve();
};

const title = document.querySelector("h1")
//doe een animationText en dan underlinen van de hoofdtitel
animationText(title, 'OVER MIJ').then(
    () => {
        console.log(title.style.padding)
        document.querySelector(":root").style.setProperty('--width-title-underline', `100%`);
        document.querySelector(":root").style.setProperty('--title-left', "0");
        //document.querySelector("section").style.opacity = 1;
    });