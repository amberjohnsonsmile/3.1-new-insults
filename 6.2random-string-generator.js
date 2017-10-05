// Use a loop with letters of the alphabet to generate a string of random letters

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";

for (i = 0; i < 6; i++) {
  randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
randomString;
