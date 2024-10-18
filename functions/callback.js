function processNumbers(a, b, callback) {
  return callback(a,b);
}

function add(a, b) {
  return a + b;
}

function multiply(a,b){
  return a*b;
}
console.log(processNumbers(4, 5, add)); 
console.log(processNumbers(4,5,multiply));      
