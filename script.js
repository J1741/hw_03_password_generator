
// declare arrays
// special characters used
// " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// check arrays
console.log(lowers);
console.log(uppers);
console.log(numbers);
console.log(specials);

/* ------------------------------- */

// get inputs from user prompt or confirm
// - length
//   -- check user input (validity, ACR constraints)
//   -- stored as number
// - do you want lower?
//   -- check user input (validity, ACR constraints)
//   -- stored as boolean <-- if you use confirm
// - do you want upper?
//   -- check user input (validity, ACR constraints)
//   -- stored as boolean <-- if you use confirm
// - do you want numbers
//   -- check user input (validity, ACR constraints)
//   -- stored as boolean <-- if you use confirm
// - do you want SCs?
//   -- check user input (validity, ACR constraints)
//   -- stored as boolean <-- if you use confirm

// create pwd selection object
// - property for length: // length: length <-- value
// - property for lower: // lower: boolean
// - property for upper: // lower: boolean
// - property for numbers: // lower: boolean
// - property for SCs: // lower: boolean

// select random stuff from the arrays that user chose
// - if lower is a yes
//   -- then select some random letters from lower array
// - if upper is a yes
//   -- then select some random letters from upper array
// - if numbers is a yes
//   -- then select some random numbers from numbers array
// - if SCs is a yes
//   -- then select some random special characters from special chars array

// --> write generatePassword function
// - gen pw of appropriate length
// - pull from the appropriate arrays 
// - want to call func that contains prompt and confirms, that is storing everything from user
// ****

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
