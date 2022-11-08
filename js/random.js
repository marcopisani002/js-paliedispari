
const sectionPariDispariEl = document.querySelector(".pari_dispari_section");
const randomBtn = sectionPariDispariEl.querySelector(".button-paridisp");

// numero random PC con stampa in console

let numRandomPc = Math.round(Math.random() * 4 + 1);
console.log("numero random PC :", numRandomPc);

// numero random USER con stampa in console

let numRandomUser = Math.round(Math.random() * 4 + 1);
console.log("numero random USER :", numRandomUser);

//Somma numerirandom USER con stampa in console e su html

const sommaNumRandom = numRandomPc + numRandomUser;
console.log("Somma numeri :", sommaNumRandom);

// funzione per verifica numeri

function getPariDispari(num) {
    if (isNaN(sommaNumRandom)) {
        return " NON valido: aggiornare la pagina e ripetere.";
    }

    if (sommaNumRandom % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

//codice attivo al click del bottone "SCOPRI CHI VINCE!"

randomBtn.addEventListener("click", function () {

    const inputEl = document.getElementById("inpparidisp");
    const resultEl = sectionPariDispariEl.querySelector(".result2");

    //stampa HTML -->PAROLA INSERITA

    const printValueEl = document.getElementById("printing-random-value");
    printValueEl.innerHTML = `<em>Parola inserita</em> :<strong> ${inputEl.value}</strong> `;
    const result = getPariDispari(parseInt(inputEl.value));
   
    resultEl.innerHTML = `Il numero uscito in modo casuale è <strong> ${sommaNumRandom}</strong>  ed é <strong>${result} </strong>`;
})







