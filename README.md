# Overview
This file describes a project to modify a starter codebase to make an existing webpage interactively generate and validate random passwords of a user-specified length, using user-specified character classes. 

# Requirements
The password generator development process targeted the following user story:

## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria
The following acceptance criteria were identified as requirements for successful completion of the project:

```
GIVEN I need a new, secure password:

1. WHEN I click the button to generate a password
- THEN I am presented with a series of prompts for password criteria

2. WHEN prompted for password criteria
- THEN I select which criteria to include in the password

3. WHEN prompted for the length of the password
- THEN I choose a length of at least 8 characters and no more than 128 characters

4. WHEN prompted for character types to include in the password
- THEN I choose lowercase, uppercase, numeric, and/or special characters

5. WHEN I answer each prompt
- THEN my input should be validated and at least one character type should be selected

6. WHEN all prompts are answered
- THEN a password is generated that matches the selected criteria

7. WHEN the password is generated
- THEN the password is either displayed in an alert or written to the page

8. ADDITIONALLY: WHEN the application is run
- THEN there are no errors in the console
```

# Contents

## HTML and CSS
The HTML (`index.html`) and CSS (`style.css`) files in this repository comprised the starter codebase provided at the beginning of this project.

As this code already provided an intuitive, easy-to-navigate UX and a clean and polished UI, no modifications were made to these files in the development of the password generator. 

That is, the deployed application utilizes the HTML and CSS starter code as provided to the current developer.

## JavaScript
A JavaScript (`script.js`) file with a small amount of starter code was provided to the developer, but this code consisted only of:
- a `writePassword` function that called an unwritten `generatePassword` function and updated the content of the `textarea` element in the HTML 
- query selectors to access elements in the HTML
- an event listener to make the "Generate Password" button call the `writePassword` function

The bulk of the development work on this project thus consisted of writing new code to generate a random password, based on validated user inputs. This code consists of the following:

### Inputs
- Four arrays comprising the four different character classes presented to the user for selection as inputs to the password generation process
- Two empty arrays to store the possible characters selected by the user and the randomly selected characters selected by the password generation process
- Six empty variables to store the user selections for: password length, use of lowercase letters, use of uppercase letters, use of numbers, and use of special characters
- An empty variable to store the created password

### Functions
- A `getPasswordLength` function to prompt the user for the desired password length, validate their input, and re-prompt if the input was not a number or not in the required password length range (8-128 characters, inclusive)
- Four functions to ask the user to confirm whether the password should contain each of the following character classes: lowercase letters (`getPasswordLower`), uppercase letters (`getPasswordUpper`), numbers (`getPasswordNumber`), and/or special characters (`getPasswordSpecial`)
- A `getCharacterInputs` function to call each of four preceding character class confirmation functions and reprompt the user if no character types were selected
- A `selectRandomChars` function to randomly select characters from the set of possible characters specified by the user, until a password of the user-specified length has been reached, and a `joinSelectedChars` function to convert the array of randomly selected characters to a string
- A `generatePassword` function was written to do the following:
  - Call the `getPasswordLength` and `getCharacterInputs` functions
  - Then, update the array of possible characters by concatenating each character class array selected by the user
  - Then, call the `selectRandomChars` function
  - And last, to call the `joinSelectedChars` function

### Other changes
Finally, a small change was made to the starter JavaScript code, namely to set the variable `password` to the `createdPassword` from the `generatePassword` function, since that variable holds the actual randomly generated password string.

# Testing
The application was tested throughout development in the Google Chrome browser `Version 91.0.4472.106 (Official Build) (x86_64)` to ensure that the required features where functioning as requested, and that no errors appeared in the console when the password generator was run.

# Deployed Application

## Link to Deployed Application
The live password generator can be accessed at the following link: 
https://j1741.github.io/hw_03_password_generator/

## Screenshot of Deployed Application
The following screenshot of the deployed application illustrates the results of the password generator project: 
![Alt text](./screenshot.png?raw=true "Screenshot Of Password Generator")