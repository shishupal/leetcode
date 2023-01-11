/**
 * 
 * Given an array nums containing n distinct numbers in the range [0, n], 
 * return the only number in the range that is missing from the array.
 * 
 * * */


/**
 * @param {number []} num
 * @return {number}
 * 
 */


const missingNumbers = (nums)=>{

 // Initialize a variable to store the expected sum of the array
 let expectedSum = (nums.length * (nums.length + 1)) / 2;

 // Initialize a variable to store the actual sum of the array
 let actualSum = 0;

 // Iterate through the array
 for (let i = 0; i < nums.length; i++) {
   // Add the current element to the actual sum
   actualSum += nums[i];
 }

 // Return the difference between the expected sum and the actual sum
 // This will be the missing number
 return expectedSum - actualSum;


}

console.log(missingNumbers([1]))


//Complexity:

//Time complexity: O(n)
//Space complexity: O(1), since we only use a constant amount of space regardless of the size of the input.