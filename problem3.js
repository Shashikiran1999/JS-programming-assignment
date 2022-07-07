function areaOfSide(a){
  let area=0;
  for(var i=1;i<=a;i++){
    area = (1.73*a*a)/4
}return area.toFixed(2)
}
console.log("Area for given side a is",areaOfSide(26));