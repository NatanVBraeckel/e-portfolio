const title = document.querySelector("h1");
const timer = ms => new Promise(res => setTimeout(res, ms))

const animationText = async function (element, result) {
    let current = "";
    for (let i = 0; i < result.length; i++) {
        //de huidige tekst de eerste/volgende char van de gewenste string geven
        current += result[i];
        element.innerHTML = current;
        //een delay kiezen tussen 100 en 250 ms en zolang wachten (voor een minder robotische animatie)
        const delay = Math.random() * 125 + 50;
        await timer(delay);
    }
    return Promise.resolve();
}

//doe een animationText en dan underlinen van de hoofdtitel
animationText(title, 'E-PORTFOLIO').then(
    () => {
        document.querySelector(":root").style.setProperty('--width-title-underline', "100%");
        document.querySelector(":root").style.setProperty('--title-left', "0");
        document.querySelector("section").style.opacity = 1;
    });
