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
 
  let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerChar = "abcdefghijklmnopqrstuvwxyz";
  let numChar = "0123456789";
  let specChar = "!@#$%^&*-+=(){}[]<>?~";

  let upperCharArr = upperChar.split("");
  let lowerCharArr = lowerChar.split("");
  let numCharArr = numChar.split("");
  let specCharArr = specChar.split("");






  // Password is currently blank! We need to make a better one
  let password = "";
  let charArr [];

  let pwLength = prompt("Choose a password length between 8 and 128 characters");
  let lowerCase = confirm("Would you like your password to contain lowercase letters?");
  let UpperCase = confirm("Would you like your password to contain uppercase letters?");
  let numeric = confirm("Would you like your password to contain numbers?");
  let special = confirm("Would you like your password to contain special characters?");


  if (pwLength < 8 || pwlength > 128) {
    alert("Password length must be between 8 and 128 characters");
  };

  if (UpperCase === true) {
    Array.prototype.apply(charArr, upperChar);
  }

  if (lowerCase === true) {
    Array.prototype.apply(charArr, lowerChar);
  }

  if (numeric === true) {
    Array.prototype.apply(charArr, numChar);
  }

 

  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
