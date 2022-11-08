
const sectionPariDispariEl = document.querySelector( ".pari_dispari_section" );
const randomBtn = sectionPariDispariEl.querySelector( ".button-paridisp" );

randomBtn.addEventListener("click", function() {
  const inputEl = document.getElementById("inpparidisp");
  const resultEl = sectionPariDispariEl.querySelector(".result2");

  const result = getPariDispari(parseInt(inputEl.value));

  resultEl.innerHTML = `Il numero ${inputEl.value} é ${result}`;
})








function getPariDispari ( num ) {
    if ( isNaN( num ) ) {
      return "numero non valido";
    }
  
    if ( num % 2 === 0 ) {
      return "pari";
    } else {
      return "dispari";
    }
  }
  