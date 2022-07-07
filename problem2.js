//You are given with a number "N", find its cube.
function cubeofNum(n){
let cube = 0;
for(var i=1;i<=n;i++){
  cube=Math.pow(i,3);
}return cube
}
console.log("cube of number n is",cubeofNum(3));