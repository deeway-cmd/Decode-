let homescoreEl = 
document.getElementById("homescore");
let guestscoreEl =
document.getElementById("guestscore");

let homescore = 0
let guestscore = 0




function addpointshome(points) {
    homescore += points;
    homescoreEl.textContent = homescore;
}





function add1home() {
    guestscore += 1;
   guestscoreEl.textContent = guestscore;
}

function add2home() {
    guestscore += 2;
   guestscoreEl.textContent = guestscore;
}

function add3home() {
    guestscore += 3;
   guestscoreEl.textContent = guestscore;
}
