// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword(){

  let pwLength = prompt("Choose a password length between 8 and 128 characters");
  let lowerCase = confirm("Would you like your password to contain lowercase letters?");
  let UpperCase = confirm("Would you like your password to contain uppercase letters?");
  let numeric = confirm("Would you like your password to contain numbers?");
  let specChar = confirm("Would you like your password to contain special characters?");

  if(pwLength >= "8" && pwLength <= "128") {

  };

  if(lowerCase === true) {

  } else {

  };

  if(UpperCase === true) {

  } else {

  };

  if(numeric === true) {

  } else {

  };

  if(specChar === true) {

  } else {

  };


  let uCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let numChar =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
  let sChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "<", ">", "?", "/", "~", "[", "]", "{", "}"];



  // Password is currently blank! We need to make a better one
  let password = "";





  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
