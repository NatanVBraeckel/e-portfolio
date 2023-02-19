const title = document.querySelector("h1");

//doe een animationText en dan underlinen van de hoofdtitel
animationText(title, 'E-PORTFOLIO').then(
    () => {
        document.querySelector(":root").style.setProperty('--width-title-underline', "100%");
        document.querySelector(":root").style.setProperty('--title-left', "0");
        document.querySelector("section").style.opacity = 1;
    });
