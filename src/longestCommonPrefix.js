/**
 * @param {string[]} strs
 * 
 * @return {string}
 * 
 */

const longestCommonPrefix = function (strs) {
    
   let commprefix= ""
   const stringArray = strs
  
 // console.log (stringArray.join())
  //console.info (stringArray.sort())


  let first=stringArray[0];
  let last=stringArray[stringArray.length-1];

  for(let i=0;i<stringArray[0].length;i++){
      console.log(first[i])
    if(first[i]==last[i])
    commprefix+=first[i];
    
}

  

    return commprefix;
};

longestCommonPrefix(["flower","flow","flight"])

