// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password criteria for characters: numbers, symbols,& letters
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// At the start, generatePassword was not defined, so I defined it here: 
function generatePassword() {

  // This is a confirmation to ensure me that things are connected and working 
  console.log("You clicked the button! 😀")

// Step 1. Prompt the user for password criteria
    // a. password length 8 < 128
    // b. lowercase, uppercase, special characters

// Step 2. Validate the input

// Step 3. Generate the password based on criteria 

// Step 4. Display the generated password on the page
  return "Generated Password will appear here"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
