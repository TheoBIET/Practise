let input = document.querySelector("#prix");
let error = document.querySelector("small");
let form = document.querySelector("#formulaire");

error.style.display = "none";

let max = 1000;
let randomNumber = Math.floor(Math.random() * (max + 1));
let numberOfTry = 0;
let userNumber;

verify = (n) => {
  let instruction = document.createElement("div");
  if (n < randomNumber) {
    instruction.textContent =
      "#" + numberOfTry + " (" + userNumber + ") C'est plus !";
    instruction.className = "instruction plus";
  } else if (n > randomNumber) {
    instruction.textContent =
      "#" + numberOfTry + " (" + userNumber + ") C'est moins !";
    instruction.className = "instruction moins";
  } else {
    instruction.textContent =
      "#" +
      numberOfTry +
      " (" +
      userNumber +
      ") Félicitations, vous avez trouvez le nombre!";
    instruction.className = "instruction fini";
    input.disabled = true;
  }
  document.querySelector("#instructions").prepend(instruction);
};

input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    //Afficher le message d'erreur
    error.style.display = "inline";
    input.value = "";
  } else {
    //Cacher le message d'erreur
    error.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(input.value) || input.value == "") {
    input.style.borderColor = "red";
  } else {
    numberOfTry++;
    input.style.borderColor = "silver";
    userNumber = input.value;
    input.value = "";
    verify(userNumber);
  }
});
