/**
 * 
 * @param {Array} arr 
 * @param {int} pos1 
 * @param {int} pos2 
 */
 function swap(arr, pos1, pos2) {
     let temp = arr[pos1];
     arr[pos1] = arr[pos2];
     arr[pos2] = temp;
}
/**
 * 
 * @param {Array} arr 
 * @returns []
 */
 function lumoto_quick(arr) {

     swap(arr, 0, Math.floor(Math.random(arr.length-1) ));

     return arr.length === 1 ? arr : helper(arr, 0, arr.length-1);
 }


/**
 * @param {Array} arr
 * @param {int} start
 * @param {int} end
 * 
*/

 function helper(arr, start, end) {
    
    if(start >=end) {
        return;
    }


    let pivot = arr[start];
    let smaller = start ;
     
      
    for(let bigger= start+1;bigger<arr.length;bigger++) {
       
         if( arr[bigger] <pivot ) {
             smaller++;
             swap(arr,smaller,bigger);
         }

    }
    swap(arr,start,smaller);

 
   //lomart(arr, start, smaller,pivot);
   helper(arr, start, smaller);
   helper(arr, smaller + 1, end);

  return arr;

 }
/**
 * 
 * 
 */
 function lomart(arr, start, smaller,pivot){

    for(let bigger= start+1;bigger<arr.length;bigger++) {
       
        if( arr[bigger] < pivot ) {
            smaller++;
            swap(arr,smaller,bigger);
        }

   }
   

 }
 console.log(lumoto_quick([14,8,7,1,22,4]));

