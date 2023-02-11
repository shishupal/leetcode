

function two_sum(numbers, target) {
    const map ={};
    // for(let i=0; i<=arr.length-1; i++) {
    //     const num2= target -arr[i];
    //     if(map[num2] !== undefined) {
    //         return [ num2,arr[i]];
    //     }
    //     map[arr[i]] =i;
    //     console.log(map);
    // }
   
    for(let i=0;i<=numbers.length-1;i++) {
        
        const diff = target- numbers[i];
        
        if(map[diff] !==undefined){
            
            return [map[diff], i];
            
        }
        map[numbers[i]]= i;
        
    }

    return [];
  
}


console.log(two_sum([3,6,1,2,5,9],15))