function sort(arr) {
  let flag = false
  while (!flag) {
    flag = true
    let temp
    for (let index = 0; index < arr.length-1; index++) {
      if (arr[index]< arr[index+1]) {
        temp = arr[index]
        arr[index] = arr[index+1]
        arr[index+1] = temp
        flag = false 
      }
    }
  }
  return arr
}

console.log(sort([10, 11, 4, 7, 0, 6, 7, 1]));