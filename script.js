// Assignment code here
var length = parseInt(prompt ("How many Character would you like? Choose between 8 and 26"), 10);
if ((length >= 8) && (length <= 26)) {
     var upperCaseLetters = confirm("Would you like to include Uppercase Letters?");
     if (upperCaseLetters === true) {
       
      
     } else {
       alert("You press Cancel");
     }
     var lowerCaseLetters = confirm("Would you like to include Lowercase Letters?");
     if (lowerCaseLetters === true) {
       
     } else {
       alert("You press Cancel");
     }
     var symbols = confirm("would you like to include symbols?");
     if (symbols === true) {
       
     } else {
       alert("You press Cancel");
     }
     var numbers = confirm("Would you like to include numbers?");
      if (numbers === true) {
       
      }
var password =""; 
for (var i = 0; i < length; i++) {
  var character = [getRandomSymbol(), getRandomNumber(), getRandomUpper(), getRandomLower(),];
password = password + character;
}
var passwordText = document.querySelector("#password");
passwordText.value = password;
  };


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




//create generate password element
//generate password function

     
     
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
//generator functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*()";
  return symbols[Math.floor(Math.random() * symbols.length)];
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

