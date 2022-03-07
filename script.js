// Assignment Code
var generateBtn = document.querySelector("#generate");

//Provide by instructor 
var allowUppercase;
var allowLowercase;
var allowNumbers;
var allowspecials;
var passwordCharacterCount;

var allowUppercaseChars=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

//Provide by instructor
function askAboutUppercase() {
  allowUppercase=confirm("Are uppercase characters allowed?");
  console.log(allowUpercase);
}

//Repeat for other Criteria; for the number of characters, use a prompt statement. Google it. Note: prompt statements think of any value you provide is a string.
//You will need to convert it to a number.

//Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.

function generatePassword(){
  var finalResults=""
  return finalResults;
}

//Hint: Remember that a for-loop can iterate from a string number to a ending number, such as the number of characters in a password.
//Hint: Google merging arrays together


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);