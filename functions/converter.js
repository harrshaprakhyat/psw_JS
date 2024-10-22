function lengthConverter(n){
  var mile=n*1.6;
  return mile;
}

var num=4;
let result=lengthConverter(num);

console.log(num+" Km = "+result+" miles");