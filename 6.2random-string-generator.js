// Use a while loop with letters of the alphabet to generate a string of random letters

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";

while (randomString.length < 6) {
  randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
randomString;
