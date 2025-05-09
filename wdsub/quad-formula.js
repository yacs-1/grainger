function compute() {
  let _inputArr = document.querySelectorAll("input");
  let _a = _inputArr[0].value;
  let _b = _inputArr[1].value;
  let _c = _inputArr[2].value;
  let _solution1;
  let _solution2;
  
  if (_a != "" && _b != "" && _c != ""){
    _solution1 = (-_b + Math.sqrt(_b**2 - 4 * _a * _c)) / (2 * _a);
    _solution2 = (-_b - Math.sqrt(_b**2 - 4 * _a * _c)) / (2 * _a);
    
    document.getElementById("sol1").innerHTML = _solution1;
    document.getElementById("sol2").innerHTML = _solution2;
     } else{
    window.alert("Please enter all inputs that are needed.");
  }
}
