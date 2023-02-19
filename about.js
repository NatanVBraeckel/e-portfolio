const title = document.querySelector("h1")
//doe een animationText en dan underlinen van de hoofdtitel
animationText(title, 'OVER MIJ').then(
    () => {
        document.querySelector(":root").style.setProperty('--width-title-underline', `100%`);
        document.querySelector(":root").style.setProperty('--title-left', "0");
        document.querySelector(".card").style.opacity = "1";
    });

//leeftijd berekenen en invullen
const birthday = new Date('06/08/2001');

function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

const age = calculateAge(birthday);
document.getElementById("leeftijd").innerHTML = age;