function removeDuplicates(array) {
    const result = [];
    const map = {};
  
    for (let i = 0; i < array.length; i++) {
      if (map[array[i]]) {
        continue;
      } 
      else {
        result.push(array[i]);
        map[array[i]] = true;
      }
    }
    return result;
  
  }
  const a = [1,1,2,3,3,4,4,5,5];
  console.log(removeDuplicates(a))
  
// const b = [2,3,3,1,2,7,5,5,4,9,4,14];
// const c = [5,2,3,2,5,5,1,7,2,1,5,8];

// removeDuplicates(b)
// removeDuplicates(c) 