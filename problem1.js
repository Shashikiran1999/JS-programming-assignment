//Provided with a number,"N".Find its factorial.
function FactoroalOfN(n){
let fact=1;
  for(var i=1;i<=n;i++){
    fact*=i;
  } return fact
}
console.log("Factorial of number n is",FactoroalOfN(5));