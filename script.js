// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerPW;
var upperPW;
var numberPW;
var specialPW;
var validate;
var passwordLength;
var passwordArray = [""];   // Placeholder for intake of chosen character type, used to generate random character
var lowerPWArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperPWArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberPWArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialPWArray = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var randomIndex;
var password = "";    // Placeholder for generation of random characters

function characterPrompts() {    // Initial prompts to allow user to choose the character types they desire in the password
  lowerPW = window.confirm("Include lowercase letters to password?");
  upperPW = window.confirm("Include uppercase letters to password?");
  numberPW = window.confirm("Include numbers to password?");
  specialPW = window.confirm("Include special characters to password?");
  if (!lowerPW && !upperPW && !numberPW && !specialPW) {    // If no character types were confirmed, the prompts will restart until at least one type is chosen
    window.alert("No character type selected! Please redo character type selection.");
    characterPrompts();
  }

  validate = window.confirm("Characters chosen to be included:\n\nLowercase Letters: " + lowerPW + "\nUppercase Letters: " + upperPW + "\nNumbers: " + numberPW + "\nSpecial Characters: " + specialPW + "\n\nIs this ok?"); 
  if (validate === false) {  // User can check to see if choices were correct and can choose to continue or redo the inital prompts
    window.alert("Please redo character type selection.");
    characterPrompts();
    }
  }

function passwordLengthPrompt() {   // Asks user to input desired password length; Re-prompts if invalid choices are given
  passwordLength = window.prompt("Input password length (8-128 characters).");
  if ((passwordLength < 8) || (passwordLength > 128)) {     // Re-prompts if the given answer was not between 8 and 128
    window.alert("Invalid character length! Please redo password length.");
    passwordLengthPrompt();
  } else if (isNaN(passwordLength)) {     // If prompt answer is not a numeric character, the prompt will ask the user again
    window.alert("Password Length typed was not a number! Please redo password length.")
    passwordLengthPrompt();
  }
}

function compilePasswordArray() {   // Compiles list of possible characters based on the prompt choices

  passwordArray = [""];
  
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

function writePassword() {
  
  characterPrompts();
  passwordLengthPrompt();
  compilePasswordArray();

  function generatePassword() {     // Clears previous password and then randomly generates each character based on the possible choices from the prompts, up to the desired password length
    password = "";
    for (var i = 0; i < passwordLength; i++) {
      randomIndex = Math.floor(Math.random() * passwordArray.length);
      password = password + passwordArray[randomIndex];
    }
  }
  generatePassword();

  function checkPassword() {      // Generates a new password until at least one character per character type is in the password; Can be turned off if not required

    var lowerPWCheck = false;
    for (var index = 0; index < lowerPWArray.length; index++) {     // Checks if any lower case character is used in the password OR if lower case letters were toggled off and allows code to continue
      if (password.includes(lowerPWArray[index]) || (lowerPW == false)) {
        lowerPWCheck = true;
      };
    };
      
    var upperPWCheck = false;
    for (var index = 0; index < upperPWArray.length; index++) {     // Checks if any upper case character is used in the password OR if upper case letters were toggled off and allows code to continue
      if (password.includes(upperPWArray[index]) || (upperPW == false)) {
        upperPWCheck = true;
      };
    };      

    var numberPWCheck = false;
    for (var index = 0; index < numberPWArray.length; index++) {    // Checks if any numeric character is used in the password OR if numbers were toggled off and allows code to continue
      if (password.includes(numberPWArray[index]) || (numberPW == false)) {
        numberPWCheck = true;
      };   
    };

    var specialPWCheck = false;
    for (var index = 0; index < specialPWArray.length; index++) {   // Checks if any special character is used in the password OR if special characters were toggled off and allows code to continue
      if (password.includes(specialPWArray[index]) || (specialPW == false)) {
        specialPWCheck = true;
      };   
    };

    if (!lowerPWCheck || !upperPWCheck || !numberPWCheck || !specialPWCheck) {    // If not all checks are satisfied, the function to regenerate a new password will be performed again
      writePassword();
    }
  }
  checkPassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;    // Passes generated password to text in the text area of the html
}

generateBtn.addEventListener("click", writePassword);  // Activates writePassword function when the Generate Password button is clicked