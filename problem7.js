let term
  function nthTerm(N){
  if(N<0){
    console.log("Error");
  }else if( N==0){
     console.log("Nth term is 0");
  }else{
  term = N*N
}return term
}
console.log("The Nth term is",nthTerm(18));