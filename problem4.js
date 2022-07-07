var DaysInMonth = function(month,year){
 return new Date(year, month, 0).getDate();
};
console.log("Month has",DaysInMonth(1, 2022),"Days.");