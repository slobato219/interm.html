function show(){
  var n = parseInt(document.getElementById("upperBound").value);
  document.getElementById("sum").value=  computeSum(n);
}

function computeSum(n){
  if (n==1)
    return 1;
  return n+computeSum(n-1);
}