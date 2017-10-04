// Random insult generator, made in response to programming challenge from JavaScript for Kids, Ch. 3

var bodyParts = ["elbow", "face", "pinky toe", "scapula", "forehead"];
var adjectives = ["nerf-herding", "bank-account-having", "un-stalwart", "magic-less"];
var animals = ["stoat", "sea lard", "narwhal", "Kthulu", "fetal lamb", "dodo bird"];
var animalParts = ["paw", "horn", "fur", "right front canine tooth", "stripes"];

var bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
var animal = animals[Math.floor(Math.random() * animals.length)];
var animalPart = animalParts[Math.floor(Math.random() * animalParts.length)];

var randomInsult = "Your " + bodyPart + " is more " + adjective + " than a " + animal + "'s " + animalPart + ".";
randomInsult;
