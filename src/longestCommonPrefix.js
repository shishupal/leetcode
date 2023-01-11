
/**
 * 
 * @param { string []} strs 
 * @returns {string}
 */


function longestCommonPrefix(strs) {
    // Edge case: if the array is empty  return an empty string
    if (strs.length === 0 ) {
      return "";
    }
  
    // Sort the array in lexicographic order
    strs.sort();
  
    // Initialize variables to store the first and last element of the sorted array
    let first = strs[0];
    let last = strs[strs.length - 1];
  
    // Initialize a variable to store the common prefix
    let commonPrefix = "";
  
    // Iterate through each character in the first element
    for (let i = 0; i < first.length; i++) {
      // If the characters at the current index match for both the first and last element
      if (first[i] === last[i]) {
        // Add the character to the common prefix
        commonPrefix += first[i];
      } else {
        // Otherwise, break out of the loop
        break;
      }
    }
  
    // Return the common prefix
    return commonPrefix;
  }


  /***
   * 
   * Time complexity: O(n * m), where n is the length of the array and m is the length of the shortest string in the array.
Space complexity: O(1), since we only use a constant amount of space regardless of the size of the input.
   * 
   * */