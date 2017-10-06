// Challenge: create a function to tell if two arrays contain the same numbers in the same order

function areArraysSame(array1, array2) {
  // Exit the function if the arrays are different lengths
  if (array1.length !== array2.length) {
    return false;
  }

  // Compare the arrays
  for (i = 0; i < array1.length; i++) {
    return array1[i] === array2[i];
  }
}
