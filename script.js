// Assignment code here
function generatePassword() {
  var length = parseInt(prompt("How many Character would you like? Choose between 8 and 26"), 10);
  if ((length >= 8) && (length <= 26)) {
    var numberOfCharacterTypes = 0
    var upperCaseLetters = confirm("Would you like to include Uppercase Letters?");
    if (upperCaseLetters === true) {
      numberOfCharacterTypes += 1
    } else {
      alert("You are skipping Uppercase letters.");
    }
    var lowerCaseLetters = confirm("Would you like to include Lowercase Letters?");
    if (lowerCaseLetters === true) {
      numberOfCharacterTypes += 1
    } else {
      alert("You are skipping Lowercase letters.");
    }
    var symbols = confirm("would you like to include symbols?");
    if (symbols === true) {
      numberOfCharacterTypes += 1
    } else {
      alert("You are skipping Symbols.");
    }
    var numbers = confirm("Would you like to include numbers?");
    if (numbers === true) {
      numberOfCharacterTypes += 1
    } else {
      alert("You are skipping Numbers.")
    }
    if (numberOfCharacterTypes === 0) {
      alert("You need to choose at least one character type. Please try again.");
      return "";
    }
    var password = "";

    var character = [];

    for (var i = 0; i < length; i++) {
      if (upperCaseLetters)
        character.push(getRandomUpper())
      if (lowerCaseLetters)
        character.push(getRandomLower())
      if (numbers)
        character.push(getRandomNumber())
      if (symbols)
        character.push(getRandomSymbol())

      //var character = [getRandomSymbol(), getRandomNumber(), getRandomUpper(), getRandomLower(),];
      var randomCharacter = character[Math.floor(Math.random() * character.length)]
      password = password + randomCharacter;
    }
    return password  
  };
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//create generate password element
//generate password function


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
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


