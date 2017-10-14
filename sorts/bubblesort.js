var defaultComparisonFunction = require("../helpers/comparison");               // Pull in the default comparison function
var present = require('present');                                               // Import timing library

module.exports = function(unsorted, comparison) {
  var output = {sorted: unsorted, unsorted: unsorted};
  var swaps = 0;
  var start = present();
  output.start = start;
  var compare = (comparison == undefined) ? defaultComparisonFunction : comparison;  // Compare will now be a function that takes a and b, like normal Array.prototype.sort
  var rounds = 0;                                                           

  for (var i = 0; i < ( output.sorted.length - 1); i++) {                            // Loop list length - 1 times as that is worst case for bubble sort
      var swapped = false;                                                      // Keep track of if we've swapped anything
      for (var j = 0; j < ( output.sorted.length - 1); j++) {                        // For each item in the output.sorted list - 1
          if ( compare( output.sorted[j], output.sorted[j + 1] ) == 1 ) {                 // Compare current element and next one. If a swap needs to be made:
              var el_a = output.sorted[j];                                           // Store the earlier element
              var el_b = output.sorted[j + 1];                                       // Store the later element
              output.sorted[j] = el_b;                                               // Swap them
              output.sorted[j + 1] = el_a;
              swaps++;                                                          // Keep track of the fact we've swapped them
              swapped = true;                                                   // Keep track of the fact we've swapped them
          }
      }
      if (swapped == false) {                                                   // If we haven't swapped anything this round
          rounds = i;                                                           // Track how many rounds it took
          break;                                                                // The list must be sorted, so exit
      }
      rounds = i;
  }
  var end = present();
  output.end = end;
  output.swaps = swaps;
  output.rounds = rounds;
  output.time = end - start;

  return output;                                                              // Return the now sorted list
}