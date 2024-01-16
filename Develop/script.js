// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerPW;
var upperPW;
var numberPW;
var specialPW;
var validate;
var passwordLength;
var passwordArray = [""];
var lowerPWArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperPWArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberPWArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialPWArray = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var randomIndex;
var password = "";

function characterPrompts() {
  lowerPW = window.confirm("Include lowercase letters to password?");
  upperPW = window.confirm("Include uppercase letters to password?");
  numberPW = window.confirm("Include numbers to password?");
  specialPW = window.confirm("Include special characters to password?");
  if (!lowerPW && !upperPW && !numberPW && !specialPW) {
    window.alert("No character type selected! Please redo character type selection.");
    characterPrompts();
  }

  validate = window.confirm("Characters chosen to be included:\n\nLowercase Letters: " + lowerPW + "\nUppercase Letters: " + upperPW + "\nNumbers: " + numberPW + "\nSpecial Characters: " + specialPW + "\n\nIs this ok?");
  if (validate === false) {
    window.alert("Please redo character type selection.");
    characterPrompts();
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

function formulatePasswordArray() {
  if (lowerPW == true) {
    passwordArray = passwordArray.concat(lowerPWArray);
  }
  if (upperPW == true) {
    passwordArray = passwordArray.concat(upperPWArray);
  }
  if (numberPW == true) {
    passwordArray = passwordArray.concat(numberPWArray);
  }
  if (specialPW == true) {
    passwordArray = passwordArray.concat(specialPWArray);
  }
  passwordArray.shift()
}
formulatePasswordArray();

// Write password to the #password input
function writePassword() {

  password = "";
  
  function generatePassword() {
    for (var i = 0; i < passwordLength; i++) {
      randomIndex = Math.floor(Math.random() * passwordArray.length);
      password = password + passwordArray[randomIndex];
    }
  }
  generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);