// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // prompt how many characters
  var length = window.prompt("How many characters would you like in your password?");
  // var for charcters
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M",'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '`', '~', '#', '{', '}', '[', ']', '/', '"', '|', ';', ':', '<', '>', '?', '.'];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

  // What types of charctyers 
  // special, number, upper, lower
  // window.confirm
  // Use answers to make password
  
  // vars that include all possible charcters
  // seperate vars for each type, arrays
  // example var upperLetters = ["A", "B", "C"]
  var LowerCase = window.confirm("Would you like lowercase alphabetic characters in your password?");
  var Upper = window.confirm("Would you like uppercase alphabetic characters in your password?");
  var Special = window.confirm("Would you like special characters in your password?");
  var Numbers = window.confirm("Would you like numeric characters in your password?");

// take all true arrays and concat into new array -loop

  var passwordChar = [];

  if(LowerCase){
    passwordChar = passwordChar.concat(lowerCase);
  }
  if(Upper){
    passwordChar = passwordChar.concat(upper);
  }
  if(Special){
    passwordChar = passwordChar.concat(special);
  }
  if(Numbers){
    passwordChar = passwordChar.concat(numbers);
  }

  if (length < 8 || length > 128) {
    window.alert("Invalid length! Please enter a number between 8 and 128.");
    return;
  } 

 // choose random chars from arr based on user input

 
  // var push into new array
// var password = turn array into string .toString()
  var password= "";
  for(var i = 0; i < length; i++){
    var random = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar[random];
  }
  // return password;
  return password;

  };

generatePassword();