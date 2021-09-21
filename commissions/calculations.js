function calculate() {

  var cSelect = document.getElementById('classSelect').value;
  var size = document.getElementById('size').value;
  var result = parseFloat(document.getElementById('classSelect').value) * parseFloat(document.getElementById('size').value);
  result = Math.round(result);

  if(cSelect == 1.56 && size == 8){
    result -= 2;
  }

  if(cSelect == 4 && size == 8){
    result -= 2;
  }

  if(cSelect == 4 && size == 11){
    result -= 4;
  }

  if(cSelect == 4 && size == 16){
    result -= 9;
  }

  document.getElementById('zerodivide').innerText = '$' + result;
}