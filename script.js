// Assignment Code
var upperchars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerchars = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialchars = "@#$";
var generateBtn = document.querySelector("#generate");

// Declear lowercase array 
var lowercase = [];
// Declear uppercase array 
// Declear numbers array 
// Declear special characters array 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
