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
8.0 Function: Get user inputs
9.0 Function: Make random selection from possibleChars 
10.0 Function: Join selectedChars as createdPassword
11.0 Function: Generate password
12.0 Call: Function to generate and write password
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
  var userLength = parseInt(window.prompt("How many characters should the password be? (Note: Passwords must be at least 8 and no more than 128 characters)."), 10);
  console.log(isNaN(userLength));
  console.log(userLength);
  passwordLength = userLength;
}

/***********************************/
/* 4.0 Function: Confirm lowercase */
/***********************************/

// get password lower choice
function getPasswordLower() {
  var userLower = window.confirm("Should the password contain lowercase letters? (Click \"OK\" for Yes, and \"Cancel\" for No).");
  console.log(userLower);
  passwordLower = userLower;
}

/***********************************/
/* 5.0 Function: Confirm uppercase */
/***********************************/

// get password upper choice
function getPasswordUpper() {
  var userUpper = window.confirm("Should the password contain uppercase letters? (Click \"OK\" for Yes, and \"Cancel\" for No).");
  console.log(userUpper);
  passwordUpper = userUpper;
}

/*********************************/
/* 6.0 Function: Confirm numbers */
/*********************************/

// get password numbers choice
function getPasswordNumber() {
  var userNumber = window.confirm("Should the password contain numbers? (Click \"OK\" for Yes, and \"Cancel\" for No).");
  console.log(userNumber);
  passwordNumber = userNumber;
}

/********************************************/
/* 7.0 Function: Confirm special characters */
/********************************************/

// get password special characters choice
function getPasswordSpecial() {
  var userSpecial = window.confirm("Should the password contain special characters? (Click \"OK\" for Yes, \"Cancel\" for No).");
  console.log(userSpecial);
  passwordSpecial = userSpecial;
}

/**********************************/
/* 8.0 Function: Get user inputs */
/*********************************/

// get user inputs and check for no character types selected
function getUserInputs() {
  getPasswordLength();
  getPasswordLower();
  getPasswordUpper();
  getPasswordNumber();
  getPasswordSpecial();
  if (passwordLower === false && passwordUpper === false && passwordNumber === false && passwordSpecial === false) {
    window.alert("You must select at least one character type!");
    return;
  }
}

/***********************************************************/
/* 9.0 Function: Make random selection from possibleChars */
/***********************************************************/

function selectRandomChars() {
  for (var i = 0; i < passwordLength; i++) {

    var indexRandom = Math.floor(Math.random() * possibleChars.length);
    console.log(indexRandom);
    
    var choiceRandom = possibleChars[indexRandom];
    console.log(choiceRandom);
    
    selectedChars.push(choiceRandom); 
  }
}

/********************************************************/
/* 10.0 Function: Join selectedChars as createdPassword */
/********************************************************/

function joinSelectedChars() {
  createdPassword = selectedChars.join("")
}

/************************************/
/* 11.0 Function: Generate password */
/************************************/

// generate password
function generatePassword() {
  
  // get user inputs 
  getUserInputs();

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

  selectRandomChars();
  console.log(selectedChars);

  joinSelectedChars();
  console.log(createdPassword);

}

/******************************************/
/* 12.0 Function and call: Write password */
/******************************************/

// Access #generate button
var generateBtn = document.querySelector("#generate");

// Generate password and write to the #password text area
function writePassword() {
  generatePassword();

  // Create variable to store created password
  var password = createdPassword;

  // Access #password text area 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to #generate button
generateBtn.addEventListener("click", writePassword);