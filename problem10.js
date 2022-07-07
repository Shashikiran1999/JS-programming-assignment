var arr = [3,9,1,44,6];
function reArrangeArr(){
  var odd = [];
  var even = [];
  var arr2 = [];
  for (let i=0;i<arr.length;i++){
    if(i%2==0|| i==0){
      even.push(arr[i]);
    }else if(i%2!==0 || i!==0){
      odd.push(arr[i]);
    }
  }
  even.sort();
  for(let i=0;i<even.length;i++){
    arr2.push(even[i]);
    if(i<odd.length){
      arr2.push(odd[i]);
    }
  }
  return arr2;
}
console.log("Even index array elements in ascending oeder",reArrangeArr());
