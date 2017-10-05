// Challenge: create an array of animals, then add "awesome" to the beginning of their names

var animals = ["Kitten", "Buzzard", "Chinchilla", "Aardvark"];

for (var i = 0; i < animals.length; i++) {
  animals[i] = "Awesome " + animals[i];
}
animals;
