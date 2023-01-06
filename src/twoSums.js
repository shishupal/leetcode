//Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, 
//and you may not use the same element twice.



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Declare a function called `twoSum` 
//that takes in an array `nums` and an integer `target`

const  twoSum =(nums, target) =>{
    // Create an empty object called `map` 
    //that will store the indices of each element in the array
    const map = {};
    
    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
      // Calculate the difference between the current element and the target
      const diff = target - nums[i];
      //console.log(diff, map[diff]  )
      // If the difference is found in the `map` object, 
      //return an array with the indices of the two elements that add up to the target
      if (map[diff] !== undefined) {
        return [map[diff], i];
      }
      console.log(map[nums[i]] = i);
      // Otherwise, add the current element and its index to the `map` object
      map[nums[i]] = i;
      console.log(map);
    }
    
    // If no two elements are found that add up to the target, 
    //return an empty array
    return [];
  }
  

  /**
   * 
   * This code has a time complexity of O(n) and a space complexity of O(n), 
   * making it efficient for both time and space. 
   * The for loop iterates through each element in the array, 
   * and the map object stores the indices of each element, 
   * so the overall time complexity is linear. 
   * The map object also takes up space proportional to the size of the input array, 
   * so the space complexity is also linear.
   * 
   * 
   */

 

export default twoSum;

 