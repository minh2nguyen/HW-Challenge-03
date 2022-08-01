// Assignment Code
var generateBtn = document.querySelector("#generate");

// At the start, generatePassword was not defined, so I defined it here: 
function generatePassword() {
  // This is a confirmation to ensure me that things are connected and working 
  console.log("You clicked the button! 😀")
//The start of my psuedo code to keep me organized 

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
