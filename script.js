// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 function userChoices(){
   var length = parseInt(prompt ("How many Character would you like? Choose between 8 and 26"), );
   if (length >= 8 && length <= 26) {
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
     var characters = confirm("would you like to include symbols?");
     if (characters === true) {
       
     } else {
       alert("You press Cancel");
     }
     var numbers = confirm("Would you like to include numbers?");
      if (numbers === true) {
       
      } else {
        alert("You press Cancel");
      };
     
 };



function generatePassword() {
  var options = userChoices();
};

function getRandomLower() {
  return String.fromCharCode(math.floor(math.random() * 26) +97);
}

function getRandomUpper() {
  return String.fromCharCode(math.floor(math.random() * 26) +65);
}
function getRandomNumber() {
  return String.fromCharCode(math.floor(math.random() * 10) +48);
}
function getRandomsymbol() {
  const symbols = "!@#$%^&*()";
  return symbols[math.floor(math.random () * symbols.legnth)];
} 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
};
