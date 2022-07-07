function Farhenheit(c){
  let Ft=0;
  for(var i=0;i<=c;i++){
  Ft = (1.8*c)+32
  }return Ft.toFixed(2)
}
console.log("Temperature in Farhenheit",Farhenheit(12));