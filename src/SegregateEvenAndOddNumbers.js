/**
 *     1. It is important to practice solving this problem 
 *          by rearranging numbers in-place.
  *    2.   There is no need to preserve the original 
  *         order within the even and within the odd numbers.
   *    3. We look for a solution of the linear time complexity 
   *        that uses constant auxiliary space.
 * 
 * 
 */

/** 
 * @params arr []
 * @return arr
 * **/
function segEvenAndOdd(arr){

    let i=0; 
    let j = arr.length-1;
    while(j >=i){
        console.log(j, i);
        if(arr[i]%2===0){
                i++;
        }else {
            //swap the position
            [arr[i],arr[j]]=[arr[j],arr[i]];
            j--;
        }

    }
    return arr;
}

console.log(segEvenAndOdd([1,3,6,4,9,10]));