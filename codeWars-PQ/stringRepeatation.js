function repeatStr (n, s) {
  var res = '';
  for ( var i = 0; i < n; i++ ) {
    res += s
  }

  return res;
}

console.log(repeatStr(3,'I'));