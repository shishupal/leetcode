function quicksort(arr, left, right) {
    if (left < right) {
      let pivot = Partition(arr, left, right);
      //left partition
      quicksort(arr, left, pivot - 1);
      //right partition
      quicksort(arr, pivot + 1, right);
    }
    return arr;
  }
  
  function Partition(arr, left, right) {
    // find the RandomIndex of the pivot within arr
    let randomIndex = Math.floor(Math.random() * (right - left) + left);
  
    // swap and element with array most of right with random index.
    [arr[randomIndex], arr[right]] = [arr[right], arr[randomIndex]];
  
    let pivotElement = arr[right];
    let pivotIndex = left;
    console.log("inside partition", randomIndex);
    console.log(arr[right]);
    for (let i = left; i < right; i++) {
      if (arr[i] < pivotElement) {
        // swap the
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
      }
    }
  
    //
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
  
    return pivotIndex;
  }
  
  let arr = [2, 7, 3, 5, 1, -4];
  
  arr = quicksort(arr, 0, arr.length - 1);
  
  console.log(arr);
  