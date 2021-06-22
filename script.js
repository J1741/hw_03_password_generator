/*********************/
/* Table of Contents */
/*********************/

/* 
1.0 Set up arrays 
2.0 Set up global variables
3.0 Function: Prompt for length
4.0 Function: Confirm lowercase
5.0 Function: Confirm uppercase
6.0 Function: Confirm numbers
7.0 Function: Confirm special characters
8.0 Function and call: Get user inputs
9.0 Add appropriate character sets to possibleChars 
10.0 Make random selection from possibleChars
*/

/*********************/
/* 1.0 Set up arrays */
/*********************/

// declare arrays
var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var possibleChars = [];
var selectedChars = [];

/*******************************/
/* 2.0 Set up global variables */
/*******************************/

// declare global variables
var passwordLength;
var passwordLower;
var passwordUpper;
var passwordNumber;
var passwordSpecial;
var createdPassword;

/***********************************/
/* 3.0 Function: Prompt for length */
/***********************************/

// get password length
function getPasswordLength() {
  var userLength = parseInt(window.prompt("How many characters should the password be?"), 10);
  console.log(isNaN(userLength));
  console.log(userLength);
  passwordLength = userLength;
}

/***********************************/
/* 4.0 Function: Confirm lowercase */
/***********************************/

// get password lower choice
function getPasswordLower() {
  var userLower = window.confirm("Should password contain lowercase letters?");
  console.log(userLower);
  passwordLower = userLower;
}

/***********************************/
/* 5.0 Function: Confirm uppercase */
/***********************************/

// get password upper choice
function getPasswordUpper() {
  var userUpper = window.confirm("Should password contain uppercase letters?");
  console.log(userUpper);
  passwordUpper = userUpper;
}

/*********************************/
/* 6.0 Function: Confirm numbers */
/*********************************/

// get password numbers choice
function getPasswordNumber() {
  var userNumber = window.confirm("Should password contain numbers?");
  console.log(userNumber);
  passwordNumber = userNumber;
}

/********************************************/
/* 7.0 Function: Confirm special characters */
/********************************************/

// get password special characters choice
function getPasswordSpecial() {
  var userSpecial = window.confirm("Should password contain special characters?");
  console.log(userSpecial);
  passwordSpecial = userSpecial;
}

/******************************************/
/* 8.0 Function and call: Get user inputs */
/******************************************/

// get user inputs
function getUserInputs() {
  getPasswordLength();
  getPasswordLower();
  getPasswordUpper();
  getPasswordNumber();
  getPasswordSpecial();
}

// call function to get user inputs
getUserInputs();

/*******************************************************/
/* 9.0 Add appropriate character sets to possibleChars */
/*******************************************************/

// add lowercase letters to possibleChars if applicable
if (passwordLower === true) {
  possibleChars = possibleChars.concat(lowers);
}

// add uppercase letters to possibleChars if applicable
if (passwordUpper === true) {
  possibleChars = possibleChars.concat(uppers);
}

// add numbers to possibleChars if applicable
if (passwordNumber === true) {
  possibleChars = possibleChars.concat(numbers);
}

// add special characters to possibleChars if applicable
if (passwordSpecial === true) {
  possibleChars = possibleChars.concat(specials);
}

console.log(possibleChars);

/*************************************************/
/* 10.0 Make random selection from possibleChars */
/*************************************************/

function selectRandomChars() {
  for (var i = 0; i < passwordLength; i++) {
    var indexRandom = Math.floor(Math.random() * possibleChars.length);
    console.log(indexRandom);
    var choiceRandom = possibleChars[indexRandom];
    console.log(choiceRandom);
    selectedChars.push(choiceRandom); 
  }
}

selectRandomChars();
console.log(selectedChars);


/* ------------------------------- */

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
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);