const reverseWordEl = document.querySelector(".reverse-word-section");
const submitBtn = reverseWordEl.querySelector(".reverse-button");



function invertiParola(str) {
    const strInversa = str.split('').reverse().join('');
    return strInversa;


}

submitBtn.addEventListener("click", function () {

    const inputEl = document.getElementById("word-pali")
    const parolaInversa = invertiParola(inputEl.value);

    //stampa HTML -->PAROLA INSERITA
    const printValueEl = document.getElementById("printing-value");
    printValueEl.innerHTML = `<em>Parola inserita</em> :<strong> ${inputEl.value}</strong> `;


    if (inputEl.value == parolaInversa) {
        //stampa HTML -->PAROLA verifica SI

        const resultEl = document.getElementById("printing");
        resultEl.innerHTML = ` La parola <strong> ${inputEl.value}</strong> è palindroma ! :)`;

    } else {
        //stampa HTML -->PAROLA verifica NO

        const resultEl = document.getElementById("printing");
        resultEl.innerHTML = ` La parola <strong> ${inputEl.value}</strong> NON è palindroma. :(`;

    }


})










