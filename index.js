const slider = document.getElementById("slider")
const button = document.querySelector("button")
const text = document.querySelector("p")
const symbolsCheckbox = document.getElementById("symbols-checkbox")

function showPassword(){
  const letters = "abcdefghijklmnopqrstuvwxyz"
  let seed = letters + letters.toUpperCase();

  const numbersCheckbox = document.getElementById("numbers-checkbox")
  const numbers = "01234567890123456789"
  const symbols = "!#$%&!#$%&!#$%&!#$%&"

  let password = ""
  let data = slider.value


  if(numbersCheckbox){
    seed += numbers
  }
  if(symbolsCheckbox){
    seed += symbols
  }

  for(let i = 0; i < data; i++){
    password += seed[Math.floor(Math.random() * seed.length)]
  }

  text.textContent = password
}

slider.addEventListener("input",() => {
  const passwordLength =document.getElementById("password-length")
  passwordLength.textContent = slider.value
})

button.addEventListener("click",() => {
  showPassword()


})

showPassword()