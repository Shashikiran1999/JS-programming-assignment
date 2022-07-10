let arr1 = [3,3,4,4,7,8];
function sortByOccurences(arr1){
  let map = new Map();
  let count = 1;
  let len = arr1.length;
  for (let i = 0; i < len; i++) {
      if (map.has(arr1[i])) {
          map.set(arr1[i], map.get(arr1[i]) + 1)
      }
      else {
          map.set(arr1[i], count)
      }
  }
  let newArray = [...map];
  newArray.sort((a, b) => (b[0] - a[0]))
  newArray.sort((a, b) => (b[1] - a[1]))
  let result = newArray.map(x => x[0])
  return result;
}
console.log("sorted array in decreasing oreder is ",sortByOccurences(arr1));