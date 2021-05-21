// Assignment Code
// Set variables and values for the Password
// list of uppercase characters 
var upperChars= [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
// list of lowercase characters 
var lowerChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
// list of numbers characters 
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// list of special characters 
var specialChars = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];



var generateBtn = document.querySelector("#generate");

function userInputs() {
  // asked the user how long the password will be and store their answer in a variable .
  var passwordLength = prompt("Choose a password length between 8 and 128 characters");
  // asked the user to choose uppercase characters true or flase 
  var hasUpperChars = confirm("do you want to choose uppercase characters?");
   // asked the user to choose lowercase characters true or flase 
  var hasLowerChars = confirm("do you want to choose lowercase characters?");
   // asked the user to choose numbers characters true or flase 
  var hasNumbers = confirm("do you want to choose mumbers characters?");
   // asked the user to choose special characters true or flase 
  var hasSpecialChars = confirm("do you want to choose special characters?");
 

  // Store all variable characters in an Array
  var allChars = {
    length: passwordLength,
    upperChars: hasUpperChars,
    lowerChars: hasLowerChars,
    numbers: hasNumbers,
    specialChar: hasSpecialChars
  };
  return allChars;
  // if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {

  //   alert("Password length must be a number between 8 and 128 characters.");

  //   return;

  // }
  
}


// Write password to the #password input
// function writePassword() {

  var userOptions = userInputs();
  var possibleChars = [];
  if (userOptions.upperChars) {
    possibleChars = possibleChars.concat(upperChars);
  }
  if (userOptions.lowerChars) {
    possibleChars = possibleChars.concat(lowerChars);
  }
  
  console.log(userOptions);
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
