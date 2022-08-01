// Assignment Code
var generateBtn = document.querySelector("#generate");

// At the start, generatePassword was not defined, so I defined it here: 
function generatePassword() {
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
