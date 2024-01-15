// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerPW;
var upperPW;
var numberPW;
var specialPW;
var passwordLength;
var passwordArray = [""];

function characterPrompts() {
  lowerPW = window.confirm("Include lowercase letters to password?");
  upperPW = window.confirm("Include uppercase letters to password?");
  numberPW = window.confirm("Include numbers to password?");
  specialPW = window.confirm("Include special characters to password?");
  if (!lowerPW && !upperPW && !numberPW && !specialPW) {
    window.alert("No character type selected! Please redo character selection.");
    prompts();
  }
}
characterPrompts();

function passwordLengthPrompt() {
  passwordLength = window.prompt("Input password length (8-128 characters).");
  if ((passwordLength < 8) || (passwordLength > 128)) {
    window.alert("Invalid character length! Please redo password length.");
    passwordLengthPrompt();
  } else if (isNaN(passwordLength)) {
    window.alert("Password Length typed was not a number! Please redo password length.")
    passwordLengthPrompt();
  }
}
passwordLengthPrompt();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);