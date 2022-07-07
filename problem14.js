let Arr=[1,2,3,4,5,6,7];
function leftRotate(Arr, n, k){
  let mod = k % n;
 for (let i = 0; i < n; i++)
      console.log((Arr[(mod + i) % n]) + " ");

}console.log(leftRotate(Arr,7,3));

