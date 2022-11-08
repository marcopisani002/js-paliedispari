const reverseWordEl= document.querySelector(".reverse-word-section");
const submitBtn = reverseWordEl.querySelector( " reverse-button" );

submitBtn.addEventListener("click", function() {

    const inputEl= document.getElementById("word-pali")
    const resultEl = reverseWordEl.querySelector(".result");
    const parolaInversa = invertiParola(inputEl.value);
    console.log("Nome inserito:", inputEl.value);

})









  
if(inputEl.value == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
function invertiParola(str){
  const strInversa = str.split('').reverse().join('');  
  return strInversa;
   
  
}
