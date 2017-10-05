// Challenge: create a random insult generator, then experiment with putting the insult together using both + and .join(" ")

// First section is used for both
var relatives = ["mother", "father", "sister", "brother"];
var adjectives = ["smelly", "fart-tastic", "rancid", "corpulent", "barnacle-eating"];
var occupations = ["shepherd", "doorman", "plunderer", "substitute teacher", "financial consultant", "hobbit hunter"];

var relative = relatives[Math.floor(Math.random() * relatives.length)];
var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
var occupation = occupations[Math.floor(Math.random() * occupations.length)];

// Putting the insult together using +
andInsult = "Your " + relative + "'s greatest ambition was to become a " + adjective + " " + occupation + "!!";
andInsult;

//Putting the insult together using .join(" ")
joinInsult = ["Your", relative + "'s greatest ambition was to become a", adjective, occupation + "!!"].join(" ");
joinInsult;

