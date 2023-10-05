var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


function generatePassword() {
var passwordLength = parseInt(prompt("Enter password length (8-128 characters):"));

while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
passwordLength = parseInt(prompt("Please enter a valid password length (8-128 characters):"));
}

var includeLowercase = confirm("Include lowercase letters?");
var includeUppercase = confirm("Include uppercase letters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecial = confirm("Include special characters?");

if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
alert("Please select at least one character type.");
return "";
}

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

var selectedChars = "";
if (includeLowercase) selectedChars += lowercaseChars;
if (includeUppercase) selectedChars += uppercaseChars;
if (includeNumeric) selectedChars += numericChars;
if (includeSpecial) selectedChars += specialChars;

var generatedPassword = "";
for (var i = 0; i < passwordLength; i++) {
var randomIndex = Math.floor(Math.random() * selectedChars.length);
generatedPassword += selectedChars[randomIndex];
}

return generatedPassword;
}

generateBtn.addEventListener("click", function () {
var password = generatePassword();
passwordText.value = password;
});