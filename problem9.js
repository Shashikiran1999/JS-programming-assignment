let Xp, Xn; 
function Coefficinets(a,b,c){
  Xp = (-b + Math.sqrt(b*b-4*a*c))/2*a;
  Xn = (-b - Math.sqrt(b*b-4*a*c))/2*a;
 return [Xp.toFixed(2) ,Xn.toFixed(2)]
}
console.log("The roots of Quadratic Equation are",Coefficinets(2,5,2));

