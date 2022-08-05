// Assignment Code
var generateBtn = document.querySelector("#generate");

// At the start, generatePassword was not defined, so I defined it here: 
function generatePassword() {
  // This is a confirmation to ensure me that things are connected and working 
  console.log("You clicked the button! 😀")

  // Prompt the user for password criteria & validate input
  // - lowercase, uppercase, numbers, special characters
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+", "[", "]", "{", "}", "~", ":", ";", ">", "<", "?"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // - password length 8 < 128

  var characterLength = prompt("How many characters do you want your password to have? Choose between 8 - 128 characters.");
  if (characterLength < 8 || characterLength > 128) {
    if (characterLength < 8) {
      alert("You passwords needs to be AT LEAST 8 characters")
      return;
    }
    else if (characterLength > 128) {
      alert("You password needs to be LESS THAN 128 characters")
      return;
    }
  }
  else {
    // Prompt for lowercase character 
    includeLowercase = confirm("Do you want to incude lowercase letters in your password?");

    //prompt for uppercase character
    includeUppercase = confirm("Do you want to include uppercase letters in password?");

    // Prompt for numeric character
    includeNumbers = confirm("Do you want to include numbers in your password?");

    // Prompt for special characters
    includeSymbols = confirm("Do you want to include special characters in your password?");
  }

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
    alert ("Please select AT LEAST ONE character type!")
    return;
  }

  
  // If user does not use a character type, their password cannot be generated
  // if (includeLowercase != includeUppercase != includeNumbers != includeSymbols); {
  //   alert("Please select AT LEAST ONE character type!")
  //   return;
  // };

if (includeLowercase && includeUppercase && includeNumbers && includeSymbols)

    // Step 3. Generate the password based on criteria 
    function generatePassword() {
      var options = generatePasswordOptions;

      var passwordPool = [];

      if (options.includeLowercase) {
        for (i = 0; i < lowercase.length; ++i) {
          passwordPool.push(lowercase[i]);
        }
      }
    }

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
