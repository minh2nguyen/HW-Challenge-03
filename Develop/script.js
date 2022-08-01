// Assignment Code
var generateBtn = document.querySelector("#generate");
// Step 1. Prompt the user for password criteria
    // a. password length 8 < 128
    // b. lowercase, uppercase, special characters
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+"]

// At the start, generatePassword was not defined, so I defined it here: 
function generatePassword() {
  // This is a confirmation to ensure me that things are connected and working 
  console.log("You clicked the button! 😀")


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
