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
  let specChar = "!@#$%^&*-+=(){}[]<>/?~";

  let upperCharArr = upperChar.split("");
  let lowerCharArr = lowerChar.split("");
  let numCharArr = numChar.split("");
  let specCharArr = specChar.split("");


  // Password is currently blank! We need to make a better one
  let password = "";
  let charArr = [];

  let pwLength = prompt("Choose a password length between 8 and 128 characters");

  if (pwLength < 8 || pwLength > 128) {
    alert("Password length must be between 8 and 128 characters. Please click OK and refresh browser.");
    return 
  };

  if (isNaN(pwLength) === true) {
    alert("Please provide password length as a number.  Please click OK and refresh browser.");
    return
  }

  let lowerCase = confirm("Would you like your password to contain lowercase letters?");
  let UpperCase = confirm("Would you like your password to contain uppercase letters?");
  let numeric = confirm("Would you like your password to contain numbers?");
  let special = confirm("Would you like your password to contain special characters?");


  if (UpperCase === true) {
    charArr = charArr.concat(upperCharArr)
  }

  if (lowerCase === true) {
    charArr = charArr.concat(lowerCharArr)
  }

  if (numeric === true) {
    charArr = charArr.concat(numCharArr)
  }

  if (special === true) {
    charArr = charArr.concat(specCharArr)
  }

  if (charArr.length === 0) {
    alert("One or more of the character types must be selected");
  }
    else {
      for (let i = 0; i < pwLength; i++) {
      let pwRandom = Math.floor(Math.random() * charArr.length);
      password = password + charArr[pwRandom];
      }
    }

  return password;
}

                 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
